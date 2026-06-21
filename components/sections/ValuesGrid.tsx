'use client'

import { motion } from 'framer-motion'

interface Value {
  title: string
  description: string
}

interface ValuesGridProps {
  values: Value[]
}

export function ValuesGrid({ values }: ValuesGridProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
