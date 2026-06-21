'use client'

import { motion } from 'framer-motion'
import { CourseCard } from '@/components/features/CourseCard'
import type { Course } from '@/data/courses'

interface CoursesGridProps {
  courses: Course[]
}

export function CoursesGrid({ courses }: CoursesGridProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
