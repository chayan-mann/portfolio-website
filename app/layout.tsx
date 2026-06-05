import type { Metadata } from "next"
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chayan Mann | Chayan Mann Portfolio Website",
  description:
    "Chayan Mann website and portfolio showcasing Chayan Mann's software engineering projects, backend architecture, distributed systems, AI-driven features, skills, resume, and contact information.",
  keywords: [
    "Chayan Mann",
    "Chayan Mann website",
    "Chayan Mann portfolio",
    "Chayan Mann portfolio website",
    "Chayan Mann software engineer",
    "Chayan Mann projects",
    "Chayan Mann resume",
  ],
  authors: [{ name: "Chayan Mann" }],
  creator: "Chayan Mann",
  openGraph: {
    title: "Chayan Mann | Chayan Mann Portfolio Website",
    description:
      "Explore Chayan Mann's portfolio website, software engineering projects, AI work, backend systems experience, skills, resume, and contact details.",
    type: "website",
    siteName: "Chayan Mann Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chayan Mann | Chayan Mann Portfolio Website",
    description:
      "Chayan Mann portfolio website featuring software engineering projects, AI-driven applications, backend systems, skills, resume, and contact details.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/portfolio.jpeg" type="image/jpeg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

  


