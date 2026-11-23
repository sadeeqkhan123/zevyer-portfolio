import { z } from 'zod'
import { Resend } from 'resend'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(120),
  email: z.string().trim().email('Enter a valid email address').max(200),
  company: z.string().trim().max(160).optional().default(''),
  service: z.string().trim().min(1, 'Please choose a service').max(120),
  budget: z.string().trim().max(60).optional().default(''),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(5000),
  website: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY
    const inboxEmail = process.env.CONTACT_INBOX_EMAIL || 'iamsadeeqkhan123@gmail.com'

    if (!resendApiKey) {
      return Response.json({ message: 'Email service is not configured yet. Please reach us on WhatsApp.' }, { status: 500 })
    }

    const body = await request.json()
    const data = contactSchema.parse(body)

    // Honeypot field. Bots usually fill hidden fields; ignore those.
    if (data.website && data.website.trim().length > 0) {
      return Response.json({ message: 'Message received successfully' }, { status: 200 })
    }

    const loweredMessage = data.message.toLowerCase()
    const spamKeywords = ['crypto', 'forex', 'casino', 'betting', 'adult', 'loan', 'viagra']
    const hasSpamKeyword = spamKeywords.some((keyword) => loweredMessage.includes(keyword))
    const urlMatches = data.message.match(/https?:\/\//g)
    const hasTooManyLinks = Boolean(urlMatches && urlMatches.length > 2)

    if (hasSpamKeyword || hasTooManyLinks) {
      return Response.json(
        { message: 'Please send a professional project inquiry with clear details.' },
        { status: 400 }
      )
    }

    const resend = new Resend(resendApiKey)

    const { error } = await resend.emails.send({
      from: 'Zevyer Website <onboarding@resend.dev>',
      to: [inboxEmail],
      replyTo: data.email,
      subject: `[Zevyer Inquiry] ${data.service} — ${data.name}`,
      text: `New project inquiry from the Zevyer website

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || '—'}
Service: ${data.service}
Budget: ${data.budget || '—'}

Project details:
${data.message}
`,
    })

    if (error) {
      return Response.json({ message: 'Unable to send your message right now. Please try WhatsApp.' }, { status: 502 })
    }

    return Response.json({ message: 'Message received successfully' }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.issues[0]?.message || 'Invalid form data'
      return Response.json({ message: firstError }, { status: 400 })
    }

    return Response.json({ message: 'Unable to process your request right now' }, { status: 500 })
  }
}
