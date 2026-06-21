'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import type { Internship } from '@/data/internships'

interface InternshipsListProps {
  internships: Internship[]
}

export function InternshipsList({ internships }: InternshipsListProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {internships.map((internship, i) => (
          <motion.div
            key={internship.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-foreground">{internship.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
                    {internship.type}
                  </span>
                </div>
                <p className="text-gray-600 font-medium mb-3">{internship.company}</p>
                <p className="text-gray-600 mb-4">{internship.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={18} />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span>{internship.location}</span>
                  </div>
                  {internship.stipend && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign size={18} />
                      <span>{internship.stipend}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {internship.skills.slice(0, 3).map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:text-right">
                <Link
                  href={`/careers/${internship.id}`}
                  className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-900 transition-colors font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
