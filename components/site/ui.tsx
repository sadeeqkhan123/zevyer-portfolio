import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Product } from '@/lib/site'
import { COMPANY, STATS } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'
import { CountUp } from '@/components/site/count-up'

export function StatsBar() {
  return (
    <Reveal className="glass overflow-hidden rounded-3xl">
      <div className="grid grid-cols-2 gap-px bg-[rgba(15,52,107,0.08)] md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-[#f8fbfe]/90 px-4 py-7 text-center sm:px-6 sm:py-8">
            <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-ink sm:text-4xl">
              <CountUp value={s.value} />
            </p>
            <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const body = (
    <>
      <div className="flex items-center justify-between gap-4">
        <span className="flex h-16 min-w-16 items-center justify-center overflow-hidden rounded-2xl bg-white px-3 ring-1 ring-[rgba(15,52,107,0.08)]">
          <img src={product.image} alt={`${product.name} logo`} className={`${product.imageClass} object-contain`} />
        </span>
        <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">{product.status}</span>
      </div>
      <h3 className="mt-6 text-2xl font-bold text-ink">{product.name}</h3>
      <p className="mt-1 text-sm font-semibold text-brand-700">{product.label}</p>
      <p className="mt-3 leading-relaxed text-ink-soft">{product.body}</p>
      {product.href && (
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-700">
          Read the case study
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      )}
    </>
  )
  return (
    <Reveal delay={delay} className="h-full">
      {product.href ? (
        <Link href={product.href} className="glass card-hover flex h-full flex-col rounded-3xl p-7 sm:p-8">
          {body}
        </Link>
      ) : (
        <div className="glass flex h-full flex-col rounded-3xl p-7 sm:p-8">{body}</div>
      )}
    </Reveal>
  )
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
