import { z } from 'zod'

// Base schemas
export const nameSchema = z.string().min(2, 'Name must be at least 2 characters')
export const emailSchema = z.string().email('Invalid email address')
export const phoneSchema = z.string().regex(/^\+?[0-9\s\-()]{10,}$/, 'Invalid phone number')
export const messageSchema = z.string().min(10, 'Message must be at least 10 characters')

// Lead form schema (base for all forms)
export const leadFormSchema = z.object({
  formType: z.enum([
    'course-apply',
    'career-apply',
    'hire',
    'callback',
    'contact',
    'program-inquiry',
  ]),
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  message: messageSchema.optional(),
  sourceForm: z.string().optional(), // Added so your webhook actually receives this data!
})

// Course application form
export const courseApplicationSchema = leadFormSchema.extend({
  formType: z.literal('course-apply'),
  courseOfInterest: z.string().min(1, 'Course is required'), // Standardized field name
})

// Career application form
export const careerApplicationSchema = leadFormSchema.extend({
  formType: z.literal('career-apply'),
  internshipId: z.string().optional(),
  internshipTitle: z.string().optional(),
  resume: z.string().optional(),
})

// Hire form
export const hireFormSchema = leadFormSchema.extend({
  formType: z.literal('hire'),
  company: z.string().min(2, 'Company name required'),
  role: z.string().min(2, 'Role required'),
  industry: z.string().optional(),
})

// Callback request form
export const callbackFormSchema = leadFormSchema.extend({
  formType: z.literal('callback'),
  preferredTime: z.string().optional(),
})

// Contact form
export const contactFormSchema = leadFormSchema.extend({
  formType: z.literal('contact'),
})

// Program inquiry form
export const programInquirySchema = leadFormSchema.extend({
  formType: z.literal('program-inquiry'),
  courseOfInterest: z.string().optional(), // Standardized field name
})

// Union type for all forms
export type LeadFormData = z.infer<typeof leadFormSchema>
export type CourseApplicationData = z.infer<typeof courseApplicationSchema>
export type CareerApplicationData = z.infer<typeof careerApplicationSchema>
export type HireFormData = z.infer<typeof hireFormSchema>
export type CallbackFormData = z.infer<typeof callbackFormSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>
export type ProgramInquiryData = z.infer<typeof programInquirySchema>