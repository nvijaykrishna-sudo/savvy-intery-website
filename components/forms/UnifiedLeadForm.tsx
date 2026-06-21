'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { leadFormSchema } from '@/lib/schemas'
import { FormField } from './FormField'
import { Loader2, CheckCircle } from 'lucide-react'

interface UnifiedLeadFormProps {
  formType: 'course-apply' | 'career-apply' | 'hire' | 'callback' | 'contact' | 'program-inquiry'
  title?: string
  description?: string
  additionalFields?: {
    courseId?: string
    courseName?: string
    internshipId?: string
    internshipTitle?: string
    company?: string
    role?: string
    industry?: string
    preferredTime?: string
    programName?: string
  }
  onSuccess?: () => void
}

export function UnifiedLeadForm({
  formType,
  title,
  description,
  additionalFields = {},
  onSuccess,
}: UnifiedLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      formType,
    },
  })

  const onSubmit = async (data: z.infer<typeof leadFormSchema>) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const payload = {
        ...data,
        ...additionalFields,
      }

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        onSuccess?.()
        // Auto-reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto"
    >
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      {description && <p className="text-gray-600 mb-6">{description}</p>}

      {submitStatus === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <p className="text-green-800 font-medium mb-2">Thank you!</p>
          <p className="text-green-700 text-sm">
            Your submission has been received. We&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <FormField label="Full Name" error={errors.name} required>
            <input
              type="text"
              placeholder="Your full name"
              {...register('name')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </FormField>

          {/* Email */}
          <FormField label="Email Address" error={errors.email} required>
            <input
              type="email"
              placeholder="your.email@example.com"
              {...register('email')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </FormField>

          {/* Phone */}
          <FormField label="Phone Number" error={errors.phone} required>
            <input
              type="tel"
              placeholder="+1 (XXX) XXX-XXXX"
              {...register('phone')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </FormField>

          {/* Message */}
          {formType !== 'callback' && (
            <FormField label="Message" error={errors.message} required={formType === 'contact'}>
              <textarea
                placeholder="Tell us more about your interest..."
                rows={4}
                {...register('message')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </FormField>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-800 text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-blue-900 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      )}
    </motion.div>
  )
}
