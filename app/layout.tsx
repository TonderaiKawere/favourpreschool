import React from "react"
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito'
});

export const metadata: Metadata = {
  title: 'Favour Preschool & Daycare Center | Gateway to Success',
  description: 'Favour Preschool and Daycare Center in Mbundane, Bulawayo - nurturing young minds through quality early childhood education. Programs for toddlers to ECD B.',
  keywords: 'preschool, daycare, Bulawayo, Zimbabwe, ECD, early childhood education, Mbundane',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
