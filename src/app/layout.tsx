import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScrolling from '@/components/SmoothScrolling'
import CustomCursor from '@/components/CustomCursor'
import SpaceBackground from '@/components/SpaceBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevPortfolio — Alex Mercer',
  description: 'Full-Stack Web Developer — building exceptional, performant, and scalable digital experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${inter.className} bg-background text-on-background min-h-screen overflow-x-hidden flex flex-col hidden-cursor-on-desktop relative z-0`}>
        <SpaceBackground />
        <CustomCursor />
        <SmoothScrolling>
          <ScrollProgress />
          <Navbar />
          <div className="flex-1 relative z-10">{children}</div>
          <div className="relative z-10"><Footer /></div>
        </SmoothScrolling>
      </body>
    </html>
  )
}
