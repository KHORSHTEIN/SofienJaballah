import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const interFont = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Sofien Jaballah | Sociologist & Researcher',
  description: 'Tunisian sociologist specializing in social change, religion, radicalization, and migration. University of Sfax faculty.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#2d3d54',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
