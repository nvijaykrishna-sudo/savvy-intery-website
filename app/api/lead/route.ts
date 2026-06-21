import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import {
  leadFormSchema,
  courseApplicationSchema,
  careerApplicationSchema,
  hireFormSchema,
  callbackFormSchema,
  contactFormSchema,
  programInquirySchema,
} from '@/lib/schemas'

// Determine which schema to use based on form type
function getSchemaForFormType(formType: string) {
  switch (formType) {
    case 'course-apply':
      return courseApplicationSchema
    case 'career-apply':
      return careerApplicationSchema
    case 'hire':
      return hireFormSchema
    case 'callback':
      return callbackFormSchema
    case 'contact':
      return contactFormSchema
    case 'program-inquiry':
      return programInquirySchema
    default:
      return leadFormSchema
  }
}

// Utility function to send email notification (placeholder)
async function sendNotification(data: any, formType: string) {
  // This is a placeholder for email notification logic
  // In production, you would integrate with an email service like SendGrid, Resend, etc.
  console.log(`New ${formType} submission:`, data)
  
  // Example: You could store this in a database here
  // await db.leads.create({ ...data, submittedAt: new Date() })
  
  return true
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Get the appropriate schema for this form type
    const schema = getSchemaForFormType(body.formType)

    // Validate the data
    const validatedData = schema.parse(body)

    // Send notification (email, database, webhook, etc.)
    await sendNotification(validatedData, validatedData.formType)

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: `Your ${validatedData.formType.replace(/-/g, ' ')} submission has been received. We will get back to you soon!`,
        data: {
          formType: validatedData.formType,
          email: validatedData.email,
          submittedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    )
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }))

      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: formattedErrors,
        },
        { status: 400 }
      )
    }

    // Handle other errors
    console.error('Lead API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    )
  }
}
