"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AlertCircle, Github, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ContributionDay = {
  date: string;
  weekday: number;
  count: number;
  accounts: Record<string, number>;
};

type ContributionWeek = {
  firstDay: string;
  contributionDays: ContributionDay[];
};

type ContributionMonth = {
  firstDay: string;
  name: string;
  totalWeeks: number;
  year: number;
};

type ContributionsResponse = {
  range: {
    from: string;
    to: string;
  };
  accounts: string[];
  accountTotals: Record<string, number>;
  totalContributions: number;
  days: ContributionDay[];
  weeks: ContributionWeek[];
  months: ContributionMonth[];
  generatedAt: string;
};

type ContributionsError = {
  error: string;
  missing?: string[];
};

const WEEKDAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

const HEATMAP_LEVEL_CLASSES = [
  "bg-[#161b22] border border-[#30363d]",
  "bg-[#0e4429] border border-[#0e4429]",
  "bg-[#006d32] border border-[#006d32]",
  "bg-[#26a641] border border-[#26a641]",
  "bg-[#39d353] border border-[#39d353] shadow-[0_0_10px_rgba(57,211,83,0.35)]",
];
function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function formatDateRange(from: string, to: string) {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return `${formatter.format(new Date(from))} - ${formatter.format(
    new Date(to)
  )}`;
}

function contributionLabel(count: number) {
  if (count === 1) {
    return "1 contribution";
  }

  return `${count.toLocaleString()} contributions`;
}

function getContributionLevel(count: number, maxCount: number) {
  if (count === 0 || maxCount === 0) {
    return 0;
  }

  const ratio = count / maxCount;

  if (ratio <= 0.25) {
    return 1;
  }

  if (ratio <= 0.5) {
    return 2;
  }

  if (ratio <= 0.75) {
    return 3;
  }

  return 4;
}

function getContributionClass(count: number, maxCount: number) {
  const level = getContributionLevel(count, maxCount);

  return HEATMAP_LEVEL_CLASSES[level];
}

function HeatmapSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-4">
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
        <Loader2 className="h-4 w-4 animate-spin text-primary" />
        Loading GitHub activity
      </div>
      <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
        {Array.from({ length: 49 * 7 }).map((_, index) => (
          <div
            key={index}
            className="h-3 w-3 animate-pulse rounded-[2px] bg-zinc-900"
          />
        ))}
      </div>
    </div>
  );
}

function HeatmapError({ message }: { message: string }) {
  return (
    <div className="rounded-lg border border-red-500/30 bg-red-950/20 p-5 text-sm text-red-100">
      <div className="mb-2 flex items-center gap-2 font-medium">
        <AlertCircle className="h-4 w-4" />
        GitHub activity unavailable
      </div>
      <p className="text-red-100/80">{message}</p>
    </div>
  );
}

export default function GitHubContributions() {
  const [data, setData] = useState<ContributionsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const heatmapScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadContributions() {
      try {
        const response = await fetch("/api/github-contributions");
        const result = (await response.json()) as
          | ContributionsResponse
          | ContributionsError;

        if (!response.ok) {
          const errorMessage =
            "error" in result
              ? result.error
              : "Unable to load GitHub contribution data.";
          const missing =
            "missing" in result && result.missing?.length
              ? ` Missing env vars: ${result.missing.join(", ")}.`
              : "";

          throw new Error(`${errorMessage}${missing}`);
        }

        if (isMounted) {
          setData(result as ContributionsResponse);
          setError(null);
        }
      } catch (loadError) {
        if (isMounted) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Unable to load GitHub contribution data."
          );
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadContributions();

    return () => {
      isMounted = false;
    };
  }, []);

  const maxCount = useMemo(() => {
    return data?.days.reduce((max, day) => Math.max(max, day.count), 0) ?? 0;
  }, [data]);

  useEffect(() => {
    if (!data || !heatmapScrollRef.current) {
      return;
    }

    const scrollContainer = heatmapScrollRef.current;
    const frame = requestAnimationFrame(() => {
      scrollContainer.scrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
    });

    return () => cancelAnimationFrame(frame);
  }, [data]);

  return (
    <section id="github" className="bg-black py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 flex max-w-4xl flex-col items-center text-center">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-bold sm:gap-3 sm:text-3xl md:text-4xl">
              <Github className="h-8 w-8 shrink-0 sm:h-10 sm:w-10" />
              <span className="whitespace-nowrap bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                GitHub Contributions
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
              A merged contribution calendar merged across my three accounts over the past year.
            </p>
          </div>

          {loading ? (
            <HeatmapSkeleton />
          ) : error ? (
            <HeatmapError message={error} />
          ) : data ? (
            <div className="mx-auto w-fit max-w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-4 py-5 shadow-2xl shadow-primary/5 md:px-8 md:py-6">
              <div className="mb-4 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="text-gray-300">
                  <span className="font-medium text-white">
                    {data.totalContributions.toLocaleString()} contributions
                  </span>{" "}
                  in the last year
                </div>
                <div className="text-xs text-gray-500 sm:text-right">
                  {formatDateRange(data.range.from, data.range.to)}
                </div>
              </div>

              <TooltipProvider delayDuration={80}>
                <div ref={heatmapScrollRef} className="overflow-x-auto pb-2">
                  <div className="mx-auto min-w-max w-max">
                    <div
                      className="mb-2 ml-9 grid gap-[3px] text-xs text-gray-500"
                      style={{
                        gridTemplateColumns: `repeat(${data.weeks.length}, 12px)`,
                      }}
                    >
                      {data.months.map((month) => (
                        <span
                          key={`${month.name}-${month.year}-${month.firstDay}`}
                          className="truncate"
                          style={{
                            gridColumn: `span ${month.totalWeeks}`,
                          }}
                        >
                          {month.name}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <div className="grid grid-rows-7 gap-[3px] text-xs leading-3 text-gray-500">
                        {WEEKDAY_LABELS.map((label, index) => (
                          <span key={`${label}-${index}`} className="h-3">
                            {label}
                          </span>
                        ))}
                      </div>

                      <div
                        className="grid grid-flow-col gap-[3px]"
                        style={{
                          gridTemplateColumns: `repeat(${data.weeks.length}, 12px)`,
                          gridTemplateRows: "repeat(7, 12px)",
                        }}
                      >
                        {data.weeks.map((week) =>
                          week.contributionDays.map((day) => (
                            <Tooltip key={day.date}>
                              <TooltipTrigger asChild>
                                <button
                                  type="button"
                                  aria-label={`${contributionLabel(
                                    day.count
                                  )} on ${formatDate(day.date)}`}
                                  className={cn(
                                    "h-3 w-3 rounded-[2px] border transition-all duration-150 hover:scale-125 hover:ring-2 hover:ring-primary/70 focus:outline-none focus:ring-2 focus:ring-primary",
                                    getContributionClass(day.count, maxCount)
                                  )}
                                  style={{
                                    gridRowStart: day.weekday + 1,
                                  }}
                                />
                              </TooltipTrigger>
                              <TooltipContent
                                side="top"
                                className="border-zinc-700 bg-zinc-950 text-xs text-white"
                              >
                                <div className="font-medium">
                                  {contributionLabel(day.count)}
                                </div>
                                <div className="text-gray-400">
                                  {formatDate(day.date)}
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TooltipProvider>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500">
                <span>Less</span>
                <div className="flex items-center gap-[3px]">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <span
                      key={level}
                      className={cn(
                        "h-3 w-3 rounded-[2px] border",
                        HEATMAP_LEVEL_CLASSES[level]
                      )}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
