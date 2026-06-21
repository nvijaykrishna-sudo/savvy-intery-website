'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
  variant?: 'primary' | 'secondary'
}

export function CTASection({
  title,
  description,
  buttonText = 'Get Started',
  buttonHref = '/support',
  variant = 'primary',
}: CTASectionProps) {
  const isPrimary = variant === 'primary'

  return (
    <section
      className={`py-16 md:py-24 ${
        isPrimary ? 'bg-gradient-to-r from-primary to-blue-700' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isPrimary ? 'text-white' : 'text-foreground'
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              isPrimary ? 'text-blue-50' : 'text-gray-600'
            }`}
          >
            {description}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={buttonHref}
              className={`inline-block px-8 py-3 rounded-lg font-medium transition-all ${
                isPrimary
                  ? 'bg-white text-primary hover:bg-blue-50'
                  : 'bg-primary text-white hover:bg-blue-900'
              }`}
            >
              {buttonText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
