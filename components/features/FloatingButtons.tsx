'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { CONTACT_INFO } from '@/lib/constants'

const buttonVariants = {
  hidden: { opacity: 0, scale: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
}

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <motion.a
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        custom={0}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${CONTACT_INFO.phone}`}
        custom={1}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-primary hover:bg-blue-900 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        aria-label="Call us"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  )
}
