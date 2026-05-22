import { Resend } from 'resend'
import type { H3Event } from 'h3'

interface ContactPayload {
  name: string
  email: string
  company: string
  message: string
  website?: string
}

type ApiLocale = 'en' | 'et'

const API_MESSAGES: Record<ApiLocale, Record<string, string>> = {
  en: {
    tooManyRequests: 'Too many requests. Please try again in a few minutes.',
    invalidRequest: 'Invalid request.',
    nameTooShort: 'Name must contain at least 2 characters.',
    invalidEmail: 'Please provide a valid email address.',
    companyTooShort: 'Company must contain at least 2 characters.',
    messageTooShort: 'Message must contain at least 10 characters.',
    messageTooLong: 'Message is too long.',
    invalidBody: 'Invalid request body.',
    serviceNotConfigured: 'Contact service is not configured.',
    sendFailed: 'Unable to send your message at the moment.'
  },
  et: {
    tooManyRequests: 'Liiga palju päringuid. Palun proovi mõne minuti pärast uuesti.',
    invalidRequest: 'Vigane päring.',
    nameTooShort: 'Nimi peab sisaldama vähemalt 2 tähemärki.',
    invalidEmail: 'Palun sisesta korrektne e-posti aadress.',
    companyTooShort: 'Ettevõtte nimi peab sisaldama vähemalt 2 tähemärki.',
    messageTooShort: 'Sõnum peab sisaldama vähemalt 10 tähemärki.',
    messageTooLong: 'Sõnum on liiga pikk.',
    invalidBody: 'Vigane päringu sisu.',
    serviceNotConfigured: 'Kontaktivorm ei ole serveris seadistatud.',
    sendFailed: 'Sõnumi saatmine ei õnnestunud. Palun proovi hiljem uuesti.'
  }
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
const REQUESTS_WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5
const ipRequestStore = new Map<string, number[]>()

const getClientIp = (event: H3Event) => getRequestIP(event, { xForwardedFor: true }) || 'unknown'

const getLocaleFromEvent = (event: H3Event): ApiLocale => {
  const acceptLanguage = (getHeader(event, 'accept-language') || '').toLowerCase()
  return acceptLanguage.startsWith('et') ? 'et' : 'en'
}

const enforceRateLimit = (event: H3Event, locale: ApiLocale) => {
  const now = Date.now()
  const ip = getClientIp(event)
  const timestamps = ipRequestStore.get(ip)?.filter(timestamp => now - timestamp <= REQUESTS_WINDOW_MS) || []
  const messages = API_MESSAGES[locale]

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    throw createError({
      statusCode: 429,
      statusMessage: messages.tooManyRequests
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

const validatePayload = (payload: ContactPayload, locale: ApiLocale) => {
  const messages = API_MESSAGES[locale]

  if (payload.website) {
    throw createError({
      statusCode: 400,
      statusMessage: messages.invalidRequest
    })
  }

  if (!payload.name || payload.name.trim().length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: messages.nameTooShort
    })
  }

  if (!payload.email || !isValidEmail(payload.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: messages.invalidEmail
    })
  }

  if (!payload.company || payload.company.trim().length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: messages.companyTooShort
    })
  }

  if (!payload.message || payload.message.trim().length < 10) {
    throw createError({
      statusCode: 400,
      statusMessage: messages.messageTooShort
    })
  }

  if (payload.message.length > 4000) {
    throw createError({
      statusCode: 400,
      statusMessage: messages.messageTooLong
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
  const locale = getLocaleFromEvent(event)
  const messages = API_MESSAGES[locale]
  enforceRateLimit(event, locale)

  const body = await readBody<Partial<ContactPayload>>(event)
  const payload = sanitizePayload(body)
  validatePayload(payload, locale)

  if (!payload.name || !payload.email || !payload.company || !payload.message) {
    throw createError({
      statusCode: 400,
      statusMessage: messages.invalidBody
    })
  }

  const config = useRuntimeConfig(event)
  const resendApiKey = config.resendApiKey
  const recipientEmail = config.contactRecipientEmail
  const senderEmail = config.contactSenderEmail

  if (!resendApiKey || !recipientEmail || !senderEmail) {
    throw createError({
      statusCode: 503,
      statusMessage: messages.serviceNotConfigured
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
      statusMessage: messages.sendFailed
    })
  }

  return {
    success: true,
    message: 'Message sent successfully.'
  }
})
