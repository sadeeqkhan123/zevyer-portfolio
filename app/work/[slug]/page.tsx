import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, TrendingUp } from 'lucide-react'
import { CASE_STUDIES } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'
import { CtaBand } from '@/components/site/ui'
import { CaseStudyMedia, StatusBadge } from '@/components/site/case-study-card'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const study = CASE_STUDIES.find((c) => c.slug === slug)
  if (!study) return {}
  return { title: `${study.title} — Case Study`, description: study.summary }
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const index = CASE_STUDIES.findIndex((c) => c.slug === slug)
  if (index === -1) notFound()

  const study = CASE_STUDIES[index]
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length]

  return (
    <>
      <section className="container-x pb-10 pt-32 sm:pt-36">
        <Reveal>
          <Link href="/work" className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-ink-soft transition hover:text-brand-700">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All case studies
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="eyebrow">{study.category}</span>
            <StatusBadge status={study.status} />
            {study.year && <span className="text-sm text-ink-soft">{study.year}</span>}
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">{study.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{study.summary}</p>
        </Reveal>
      </section>

      <section className="container-x">
        <Reveal className="glass overflow-hidden rounded-[2rem] p-2.5">
          <CaseStudyMedia
            study={study}
            eager
            className={`w-full rounded-[1.6rem] ${study.imageFit === 'contain' ? 'aspect-[4/3] sm:aspect-[16/7]' : 'aspect-[3/2] sm:aspect-[16/9]'}`}
          />
        </Reveal>
      </section>

      <section className="container-x mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          <Reveal className="glass-tint flex items-start gap-4 rounded-3xl p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <TrendingUp className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Outcome</h2>
              <p className="mt-2 text-xl font-bold text-ink sm:text-2xl">{study.impact}</p>
            </div>
          </Reveal>

          <Reveal className="glass rounded-3xl p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-ink">What we delivered</h2>
            <ul className="mt-6 space-y-4">
              {study.contributions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-ink">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <aside className="lg:col-span-4">
          <Reveal className="glass sticky top-28 rounded-3xl p-7">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="font-semibold uppercase tracking-[0.14em] text-ink-soft">Client</dt>
                <dd className="mt-1 text-base font-semibold text-ink">{study.title}</dd>
              </div>
              {study.url && (
                <div>
                  <dt className="font-semibold uppercase tracking-[0.14em] text-ink-soft">Website</dt>
                  <dd className="mt-1">
                    <a href={`https://${study.url}`} target="_blank" rel="noopener noreferrer" className="break-all text-base font-semibold text-brand-700 hover:underline">
                      {study.url}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="font-semibold uppercase tracking-[0.14em] text-ink-soft">What we built</dt>
                <dd className="mt-1 text-base text-ink">{study.scope.join(', ')}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-[0.14em] text-ink-soft">Our role</dt>
                <dd className="mt-1 text-base text-ink">{study.role}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-[0.14em] text-ink-soft">Capabilities</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {study.technologies.map((t) => (
                    <span key={t} className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <Link href="/contact" className="btn-primary mt-7 w-full">
              Start a similar project
            </Link>
          </Reveal>
        </aside>
      </section>

      <section className="container-x mt-16">
        <Reveal>
          <Link href={`/work/${next.slug}`} className="glass card-hover group flex items-center justify-between gap-6 rounded-3xl p-7">
            <div>
              <p className="text-sm font-medium text-ink-soft">Next case study</p>
              <p className="mt-1 text-2xl font-bold text-ink">{next.title}</p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" aria-hidden />
            </span>
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  )
}
