import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";
const CACHE_SECONDS = 60 * 60 * 6;

const ACCOUNTS = [
  {
    login: "chayan-mann",
    tokenEnv: "GITHUB_TOKEN_CHAYAN_MANN",
  },
  {
    login: "chayan-mann09",
    tokenEnv: "GITHUB_TOKEN_CHAYAN_MANN09",
  },
  {
    login: "chayanmann",
    tokenEnv: "GITHUB_TOKEN_CHAYANMANN",
  },
] as const;

const CONTRIBUTION_QUERY = `
  query ContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      login
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          months {
            firstDay
            name
            totalWeeks
            year
          }
          weeks {
            firstDay
            contributionDays {
              date
              weekday
              contributionCount
            }
          }
        }
      }
    }
  }
`;

type AccountConfig = (typeof ACCOUNTS)[number];

type GitHubContributionDay = {
  date: string;
  weekday: number;
  contributionCount: number;
};

type GitHubContributionWeek = {
  firstDay: string;
  contributionDays: GitHubContributionDay[];
};

type GitHubContributionMonth = {
  firstDay: string;
  name: string;
  totalWeeks: number;
  year: number;
};

type GitHubCalendarResponse = {
  data?: {
    user?: {
      login: string;
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          months: GitHubContributionMonth[];
          weeks: GitHubContributionWeek[];
        };
      };
    } | null;
  };
  errors?: Array<{ message: string }>;
};

type AccountCalendar = {
  login: string;
  totalContributions: number;
  months: GitHubContributionMonth[];
  weeks: GitHubContributionWeek[];
};

type CombinedDay = {
  date: string;
  weekday: number;
  count: number;
  accounts: Record<string, number>;
};

class MissingGitHubTokensError extends Error {
  missing: string[];

  constructor(missing: string[]) {
    super("GitHub contribution tokens are not configured.");
    this.name = "MissingGitHubTokensError";
    this.missing = missing;
  }
}

function getRollingYearRange() {
  const to = new Date();
  to.setMilliseconds(0);

  const from = new Date(to);
  from.setFullYear(from.getFullYear() - 1);

  return {
    from: from.toISOString(),
    to: to.toISOString(),
  };
}

function createEmptyAccountCounts() {
  return Object.fromEntries(ACCOUNTS.map((account) => [account.login, 0]));
}

async function fetchAccountCalendar(
  account: AccountConfig,
  from: string,
  to: string
): Promise<AccountCalendar> {
  const token = process.env[account.tokenEnv];

  if (!token) {
    throw new MissingGitHubTokensError([account.tokenEnv]);
  }

  const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "portfolio-github-contribution-map",
    },
    body: JSON.stringify({
      query: CONTRIBUTION_QUERY,
      variables: {
        login: account.login,
        from,
        to,
      },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API returned ${response.status} for ${account.login}.`
    );
  }

  const result = (await response.json()) as GitHubCalendarResponse;

  if (result.errors?.length) {
    const message = result.errors.map((error) => error.message).join("; ");
    throw new Error(`GitHub API error for ${account.login}: ${message}`);
  }

  const calendar =
    result.data?.user?.contributionsCollection.contributionCalendar;

  if (!result.data?.user || !calendar) {
    throw new Error(`GitHub user not found: ${account.login}`);
  }

  return {
    login: result.data.user.login,
    totalContributions: calendar.totalContributions,
    months: calendar.months,
    weeks: calendar.weeks,
  };
}

function mergeCalendars(
  calendars: AccountCalendar[],
  from: string,
  to: string
) {
  const skeleton = calendars[0];
  const daysByDate = new Map<string, CombinedDay>();
  const accountTotals = Object.fromEntries(
    calendars.map((calendar) => [calendar.login, calendar.totalContributions])
  );

  for (const calendar of calendars) {
    for (const week of calendar.weeks) {
      for (const day of week.contributionDays) {
        const existing =
          daysByDate.get(day.date) ??
          ({
            date: day.date,
            weekday: day.weekday,
            count: 0,
            accounts: createEmptyAccountCounts(),
          } satisfies CombinedDay);

        existing.count += day.contributionCount;
        existing.accounts[calendar.login] = day.contributionCount;
        daysByDate.set(day.date, existing);
      }
    }
  }

  const weeks = skeleton.weeks.map((week) => ({
    firstDay: week.firstDay,
    contributionDays: week.contributionDays.map((day) => {
      return (
        daysByDate.get(day.date) ?? {
          date: day.date,
          weekday: day.weekday,
          count: 0,
          accounts: createEmptyAccountCounts(),
        }
      );
    }),
  }));

  const days = weeks.flatMap((week) => week.contributionDays);
  const totalContributions = days.reduce((total, day) => total + day.count, 0);

  return {
    range: {
      from,
      to,
    },
    accounts: calendars.map((calendar) => calendar.login),
    accountTotals,
    totalContributions,
    days,
    weeks,
    months: skeleton.months,
    generatedAt: new Date().toISOString(),
  };
}

async function fetchMergedContributions() {
  const missingTokens = ACCOUNTS.filter(
    (account) => !process.env[account.tokenEnv]
  ).map((account) => account.tokenEnv);

  if (missingTokens.length > 0) {
    throw new MissingGitHubTokensError(missingTokens);
  }

  const { from, to } = getRollingYearRange();
  const calendars = await Promise.all(
    ACCOUNTS.map((account) => fetchAccountCalendar(account, from, to))
  );

  return mergeCalendars(calendars, from, to);
}

const getCachedMergedContributions = unstable_cache(
  fetchMergedContributions,
  ["combined-github-contributions-v1"],
  {
    revalidate: CACHE_SECONDS,
  }
);

export async function GET() {
  try {
    const contributions = await getCachedMergedContributions();

    return NextResponse.json(contributions, {
      headers: {
        "Cache-Control": `s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400`,
      },
    });
  } catch (error) {
    if (error instanceof MissingGitHubTokensError) {
      return NextResponse.json(
        {
          error: error.message,
          missing: error.missing,
          required: ACCOUNTS.map((account) => account.tokenEnv),
        },
        { status: 500 }
      );
    }

    console.error("Failed to load GitHub contributions:", error);

    return NextResponse.json(
      {
        error: "Failed to load GitHub contributions.",
      },
      { status: 502 }
    );
  }
}
