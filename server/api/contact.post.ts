import { Resend } from 'resend'
import type { H3Event } from 'h3'

interface ContactPayload {
  name: string
  email: string
  company: string
  message: string
  website?: string
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
const REQUESTS_WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5
const ipRequestStore = new Map<string, number[]>()

const getClientIp = (event: H3Event) => getRequestIP(event, { xForwardedFor: true }) || 'unknown'

const enforceRateLimit = (event: H3Event) => {
  const now = Date.now()
  const ip = getClientIp(event)
  const timestamps = ipRequestStore.get(ip)?.filter(timestamp => now - timestamp <= REQUESTS_WINDOW_MS) || []

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many requests. Please try again in a few minutes.'
    })
  }

  timestamps.push(now)
  ipRequestStore.set(ip, timestamps)
}

const sanitizePayload = (payload: Partial<ContactPayload>): ContactPayload => ({
  name: payload.name?.trim() || '',
  email: payload.email?.trim() || '',
  company: payload.company?.trim() || '',
  message: payload.message?.trim() || '',
  website: payload.website?.trim() || ''
})

const validatePayload = (payload: ContactPayload) => {
  if (payload.website) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid request.'
    })
  }

  if (!payload.name || payload.name.trim().length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name must contain at least 2 characters.'
    })
  }

  if (!payload.email || !isValidEmail(payload.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide a valid email address.'
    })
  }

  if (!payload.company || payload.company.trim().length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Company must contain at least 2 characters.'
    })
  }

  if (!payload.message || payload.message.trim().length < 10) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Message must contain at least 10 characters.'
    })
  }

  if (payload.message.length > 4000) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Message is too long.'
    })
  }
}

const buildEmailPayload = (payload: ContactPayload, recipientEmail: string, senderEmail: string) => ({
  from: senderEmail,
  to: recipientEmail,
  subject: `New contact request from ${payload.name} (${payload.company})`,
  replyTo: payload.email,
  text: [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    '',
    'Message:',
    payload.message
  ].join('\n'),
  html: `
    <h2>New contact request</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Company:</strong> ${payload.company}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message.replace(/\n/g, '<br>')}</p>
  `
})

export default defineEventHandler(async (event) => {
  enforceRateLimit(event)

  const body = await readBody<Partial<ContactPayload>>(event)
  const payload = sanitizePayload(body)
  validatePayload(payload)

  if (!payload.name || !payload.email || !payload.company || !payload.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid request body.'
    })
  }

  const config = useRuntimeConfig(event)
  const resendApiKey = config.resendApiKey
  const recipientEmail = config.contactRecipientEmail
  const senderEmail = config.contactSenderEmail

  if (!resendApiKey || !recipientEmail || !senderEmail) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Contact service is not configured.'
    })
  }

  const resend = new Resend(resendApiKey)
  const emailPayload = buildEmailPayload(payload, recipientEmail, senderEmail)

  try {
    const result = await resend.emails.send(emailPayload)

    if (result.error) {
      throw new Error(result.error.message)
    }
  } catch {
    throw createError({
      statusCode: 502,
      statusMessage: 'Unable to send your message at the moment.'
    })
  }

  return {
    success: true,
    message: 'Message sent successfully.'
  }
})
