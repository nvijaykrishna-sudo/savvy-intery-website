'use client'

import { ScrollProgressBar } from '@/components/animations/ScrollProgressBar'
import { FloatingButtons } from '@/components/features/FloatingButtons'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      {children}
      <Footer />
      <FloatingButtons />
    </>
  )
}
