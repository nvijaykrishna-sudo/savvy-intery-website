'use client'

import { useState, useEffect } from 'react'

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollTop = window.scrollY
      const progress = windowHeight > 0 ? (scrollTop / windowHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent-blue z-50 transition-all duration-300"
      style={{ width: `${scrollProgress}%` }}
      aria-hidden="true"
    />
  )
}
