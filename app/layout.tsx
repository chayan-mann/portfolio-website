import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chayan Mann',
  icons: {
    icon: [
      { url: './favicon.ico' },
    ],
  },
  description: "Chayan's Portfolio",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/portfolio.jpeg" type="image/jpeg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
