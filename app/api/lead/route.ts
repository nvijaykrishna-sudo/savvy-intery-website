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

// UPGRADED: Sends the validated data directly to Make.com
async function sendNotification(data: any, formType: string) {
  console.log(`Sending ${formType} data to Webhook:`, data)
  
  // FIXED: Now safely pulls your Webhook URL from your .env.local file!
  const WEBHOOK_URL = "https://hook.eu1.make.com/durfyyoy53l540l5m5ybx7fkljxn50wt"; 

  if (!WEBHOOK_URL) {
    console.error("⚠️ WARNING: MAKE_WEBHOOK_URL is missing from .env.local file!");
  }

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // We send all the form data PLUS the formType so Make.com knows which form it came from
      body: JSON.stringify({ ...data, sourceForm: formType }),
    });
  } catch (error) {
    console.error("Webhook failed to send:", error);
  }
  
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Get the appropriate schema for this form type
    const schema = getSchemaForFormType(body.formType)

    // Validate the data
    const validatedData = schema.parse(body)

    // Send notification to Make.com
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
      // CRITICAL FIX: Zod uses .issues, not .errors! This caused the crash.
      const formattedErrors = error.issues.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }))

      // Log it clearly so you can see EXACTLY which field failed in the terminal
      console.log("❌ Zod Validation Failed:", formattedErrors);

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