import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { UnifiedLeadForm } from '@/components/forms/UnifiedLeadForm'
import { internships } from '@/data/internships'
import { ScrollProgressBar } from '@/components/animations/ScrollProgressBar'
import { FloatingButtons } from '@/components/features/FloatingButtons'
import { MapPin, Clock, DollarSign, Check } from 'lucide-react'
import Link from 'next/link'

export const generateStaticParams = () => {
  return internships.map((internship) => ({
    id: internship.id,
  }))
}

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const internship = internships.find((i) => i.id === id)
  return {
    title: `${internship?.title} at ${internship?.company} | SAVVY INTERY`,
    description: internship?.description,
  }
}

export default async function InternshipDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const internship = internships.find((i) => i.id === id)

  if (!internship) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Internship Not Found</h1>
            <p className="text-gray-600 mb-6">The internship you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/careers" className="text-primary hover:underline font-medium">
              Back to Careers
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <Link href="/careers" className="text-blue-100 hover:text-white mb-4 inline-block">
              ← Back to Careers
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{internship.title}</h1>
                <p className="text-lg text-blue-50 mb-4">{internship.company}</p>
                <p className="text-blue-100 mb-6">{internship.description}</p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} />
                    <span>{internship.location}</span>
                  </div>
                  {internship.stipend && (
                    <div className="flex items-center gap-2">
                      <DollarSign size={20} />
                      <span>{internship.stipend}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <p className="text-blue-100 text-sm mb-2">Internship Type</p>
                <p className="text-2xl font-bold mb-4">{internship.type}</p>
                <button className="w-full bg-white text-primary font-bold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors mb-4">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Responsibilities */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Responsibilities</h2>
                <ul className="space-y-3">
                  {internship.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700">{responsibility}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-2">
                  {internship.requirements.map((requirement, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-blue-100 text-primary rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <UnifiedLeadForm
                  formType="career-apply"
                  title="Apply Now"
                  description="Start your internship journey"
                  additionalFields={{
                    internshipId: internship.id,
                    internshipTitle: internship.title,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
