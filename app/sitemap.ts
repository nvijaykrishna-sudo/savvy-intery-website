import { MetadataRoute } from 'next'
import { courses } from '@/data/courses'
import { internships } from '@/data/internships'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://savvyintern.com'

  // Static pages
  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/courses`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/careers`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/hire-from-us`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/about-us`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/support`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/legal/privacy-policy`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/legal/terms-and-conditions`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/legal/refund-policy`, changeFrequency: 'monthly' as const, priority: 0.5 },
  ]

  // Dynamic course pages
  const coursePages = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic internship pages
  const internshipPages = internships.map((internship) => ({
    url: `${baseUrl}/careers/${internship.id}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...coursePages, ...internshipPages]
}
