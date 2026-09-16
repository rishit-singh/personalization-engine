import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personalization Engine — DTC Behavioral Science Platform',
  description:
    'Research-backed personalization engine for DTC brands. Behavioral science layer for conversion lift and LTV growth.',
  keywords: ['DTC', 'personalization', 'behavioral science', 'conversion', 'LTV'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
