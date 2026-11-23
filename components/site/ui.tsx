import Link from 'next/link'
import { ArrowRight, Bot, Code2, Globe, Megaphone, Palette, Smartphone, type LucideIcon } from 'lucide-react'
import type { ServiceIcon } from '@/lib/site'
import { COMPANY } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'

export const SERVICE_ICONS: Record<ServiceIcon, LucideIcon> = {
  bot: Bot,
  globe: Globe,
  smartphone: Smartphone,
  megaphone: Megaphone,
  palette: Palette,
  code: Code2,
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  action,
}: {
  eyebrow: string
  title: React.ReactNode
  body?: string
  align?: 'left' | 'center'
  action?: React.ReactNode
}) {
  const centered = align === 'center'
  return (
    <Reveal
      className={
        centered
          ? 'mx-auto max-w-2xl text-center'
          : 'flex flex-col gap-6 md:flex-row md:items-end md:justify-between'
      }
    >
      <div className={centered ? '' : 'max-w-2xl'}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
        {body && <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{body}</p>}
      </div>
      {action && <div className={centered ? 'mt-6' : 'shrink-0'}>{action}</div>}
    </Reveal>
  )
}

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: React.ReactNode; body: string }) {
  return (
    <section className="container-x pb-12 pt-36 sm:pt-40 lg:pb-16">
      <Reveal className="max-w-3xl">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{body}</p>
      </Reveal>
    </section>
  )
}

export function CtaBand({
  title = 'Have a project in mind?',
  body = 'Tell us what you are building. We will reply with next steps, a rough timeline and how we can help.',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="container-x mt-24">
      <Reveal className="relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-16">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#2160ac_0%,#1677bc_100%)]"
        />
        <div aria-hidden className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#0ebde6]/35 blur-3xl" />
        <div aria-hidden className="absolute -bottom-28 -left-16 -z-10 h-72 w-72 rounded-full bg-[#2160ac]/40 blur-3xl" />
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{body}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-brand-700 shadow-lg shadow-[#2160ac]/30 transition hover:bg-brand-50 active:scale-[0.98]"
          >
            Start a project
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 active:scale-[0.98]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  )
}
