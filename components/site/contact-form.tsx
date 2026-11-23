'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { SERVICES } from '@/lib/site'
import { cn } from '@/lib/utils'

type Fields = { name: string; email: string; company: string; service: string; budget: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const BUDGETS = ['Under $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000+', 'Not sure yet']

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = 'Please enter a valid email address.'
  if (!f.service) e.service = 'Please choose a service.'
  if (f.message.trim().length < 10) e.message = 'Please tell us a little more (at least 10 characters).'
  return e
}

export function ContactForm() {
  const params = useSearchParams()
  const preset = params.get('service') ?? ''
  const initialService = SERVICES.some((s) => s.slug === preset) ? preset : ''

  const [fields, setFields] = useState<Fields>({ name: '', email: '', company: '', service: initialService, budget: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState('')

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const onBlur = (key: keyof Fields) => () => {
    const msg = validate(fields)[key]
    setErrors((err) => ({ ...err, [key]: msg }))
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      document.getElementById(`f-${firstInvalid}`)?.focus()
      return
    }

    setStatus('loading')
    setServerMessage('')
    const serviceTitle = SERVICES.find((s) => s.slug === fields.service)?.title ?? fields.service
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, service: serviceTitle, website }),
      })
      const data = (await res.json().catch(() => ({}))) as { message?: string }
      if (!res.ok) throw new Error(data.message || 'Something went wrong. Please try again.')
      setStatus('success')
      setFields({ name: '', email: '', company: '', service: '', budget: '', message: '' })
    } catch (err) {
      setStatus('error')
      setServerMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="mt-8 flex flex-col items-center rounded-3xl bg-white/70 px-6 py-12 text-center ring-1 ring-[rgba(15,52,107,0.06)]">
        <CheckCircle2 className="h-12 w-12 text-[#12804a]" aria-hidden />
        <h3 className="mt-4 text-xl font-bold text-ink">Thanks — your message is in.</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-soft">We will review your project and reply by email shortly.</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-6">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
      <Field id="name" label="Full name" required error={errors.name}>
        <input id="f-name" name="name" autoComplete="name" className="field" value={fields.name} onChange={update('name')} onBlur={onBlur('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />
      </Field>
      <Field id="email" label="Work email" required error={errors.email}>
        <input id="f-email" name="email" type="email" inputMode="email" autoComplete="email" className="field" value={fields.email} onChange={update('email')} onBlur={onBlur('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'e-email' : undefined} />
      </Field>
      <Field id="company" label="Company">
        <input id="f-company" name="company" autoComplete="organization" className="field" value={fields.company} onChange={update('company')} />
      </Field>
      <Field id="service" label="Service" required error={errors.service}>
        <select id="f-service" name="service" className="field" value={fields.service} onChange={update('service')} onBlur={onBlur('service')} aria-invalid={!!errors.service} aria-describedby={errors.service ? 'e-service' : undefined}>
          <option value="">Choose a service</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </Field>
      <Field id="budget" label="Budget" className="sm:col-span-2">
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Budget">
          {BUDGETS.map((b) => (
            <label
              key={b}
              className={cn(
                'inline-flex min-h-10 cursor-pointer items-center rounded-full px-4 text-sm font-medium ring-1 transition',
                fields.budget === b ? 'bg-brand-600 text-white ring-brand-600' : 'bg-white/80 text-ink ring-[rgba(15,52,107,0.14)] hover:ring-brand-600/40'
              )}
            >
              <input type="radio" name="budget" value={b} checked={fields.budget === b} onChange={update('budget')} className="sr-only" />
              {b}
            </label>
          ))}
        </div>
      </Field>
      <Field id="message" label="Project details" required error={errors.message} className="sm:col-span-2">
        <textarea id="f-message" name="message" rows={5} className="field resize-y" placeholder="What are you building, and what does success look like?" value={fields.message} onChange={update('message')} onBlur={onBlur('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-message' : undefined} />
      </Field>

      {/* Honeypot: hidden from people, often filled by bots. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="f-website">Website</label>
        <input id="f-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-2xl bg-[#fdecea] px-4 py-3 text-sm font-medium text-[#b42318] sm:col-span-2">
          {serverMessage}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-soft">We only use your details to reply to this inquiry.</p>
        <button type="submit" className="btn-primary !min-h-12 !px-7" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send inquiry
              <Send className="h-4 w-4" aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  required,
  error,
  className,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={`f-${id}`} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`e-${id}`} className="mt-1.5 text-sm text-[#b42318]">
          {error}
        </p>
      )}
    </div>
  )
}
