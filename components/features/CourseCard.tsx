'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import type { Course } from '@/data/courses'

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/courses/${course.slug}`}>
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full border border-gray-200">
          {/* Course image placeholder */}
          <div className="w-full h-48 bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white text-sm">
            {course.title}
          </div>

          {/* Course content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-foreground line-clamp-2 mb-1">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-500">{course.level}</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {course.shortDescription}
            </p>

            {/* Rating and reviews */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(course.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({course.reviews} reviews)
              </span>
            </div>

            {/* Duration and price */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                {course.duration}
              </span>
              {course.price && (
                <span className="text-lg font-bold text-primary">
                  {course.price}
                </span>
              )}
            </div>

            {/* CTA Button */}
            <button className="w-full mt-4 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-900 transition-colors">
              Explore Course
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
