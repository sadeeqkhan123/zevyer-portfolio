import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Clock, Mail, MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'
import { PageHero } from '@/components/site/ui'
import { ContactForm } from '@/components/site/contact-form'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell Zevyer about your project — AI agents, websites, apps, marketing or custom software.',
}

const steps = [
  'We read your brief and reply with questions or a call invite.',
  'We map scope, timeline and budget on a short discovery call.',
  'You receive a clear proposal with milestones and next steps.',
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s talk about <span className="text-gradient">your project</span>
          </>
        }
        body="Share a few details and we will get back to you with next steps. Prefer a quick chat? Message us on WhatsApp."
      />

      <section className="container-x grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Reveal className="glass-strong rounded-[2rem] p-6 sm:p-10 lg:col-span-7">
          <h2 className="text-2xl font-bold text-ink">Project inquiry</h2>
          <p className="mt-2 text-sm text-ink-soft">Fields marked * are required.</p>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </Reveal>

        <div className="space-y-6 lg:col-span-5">
          <Reveal className="glass rounded-[2rem] p-7" delay={0.05}>
            <h2 className="text-lg font-bold text-ink">Reach us directly</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center gap-4 rounded-2xl bg-white/70 p-3 ring-1 ring-[rgba(15,52,107,0.06)] transition hover:bg-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7f9ee]">
                    <WhatsAppIcon className="h-5 w-5 text-[#1fa855]" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">WhatsApp</span>
                    <span className="block text-sm text-ink-soft">Fastest way to reach us</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex min-h-14 items-center gap-4 rounded-2xl bg-white/70 p-3 ring-1 ring-[rgba(15,52,107,0.06)] transition hover:bg-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-ink">Email</span>
                    <span className="block truncate text-sm text-ink-soft">{COMPANY.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://discord.com/users/zevyertech" target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center gap-4 rounded-2xl bg-white/70 p-3 ring-1 ring-[rgba(15,52,107,0.06)] transition hover:bg-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef0ff] text-[#5865f2]">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">Discord</span>
                    <span className="block text-sm text-ink-soft">zevyertech</span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal className="glass-tint rounded-[2rem] p-7" delay={0.1}>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-brand-700" aria-hidden />
              <h2 className="text-lg font-bold text-ink">What happens next</h2>
            </div>
            <ol className="mt-5 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  )
}
