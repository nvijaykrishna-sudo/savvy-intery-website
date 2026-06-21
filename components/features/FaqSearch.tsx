'use client'

import { useState, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQ } from '@/data/faqs'

interface FaqSearchProps {
  faqs: FAQ[]
}

export function FaqSearch({ faqs }: FaqSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const categories = ['All', ...new Set(faqs.map((faq) => faq.category))]

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'All' || faq.category === selectedCategory
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory, faqs])

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === faq.id ? null : faq.id)
                }
                className="w-full px-6 py-4 text-left font-medium text-foreground hover:bg-gray-50 flex items-center justify-between transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === faq.id && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No FAQs found. Try adjusting your search or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
