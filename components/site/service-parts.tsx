import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronRight } from 'lucide-react'
import type { CaseStudy, Faq, Point, SubService } from '@/lib/site'
import { CASE_STUDIES, TECH_STACK } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/site/reveal'
import { CaseStudyCard } from '@/components/site/case-study-card'
import { SectionHeading } from '@/components/site/ui'

export const SITE_URL = 'https://sadeeq-khan.vercel.app'

/* ---------- images ---------- */

/** Service photos are stored as `name.webp` (1400w) plus `name-640.webp` for cards and phones. */
export function ServiceImage({
  src,
  alt,
  className,
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}) {
  const small = src.replace(/\.webp$/, '-640.webp')
  return (
    <img
      src={src}
      srcSet={`${small} 640w, ${src} 1400w`}
      sizes={sizes}
      alt={alt}
      width={1400}
      height={875}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={cn('h-full w-full object-cover', className)}
    />
  )
}

/* ---------- structured data ---------- */

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

/* ---------- breadcrumbs ---------- */

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-soft">
          {items.map((item, i) => {
            const last = i === items.length - 1
            return (
              <li key={item.href} className="inline-flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className="font-medium text-ink">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className="inline-flex min-h-8 items-center transition-colors hover:text-brand-700">
                      {item.label}
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.label,
            item: `${SITE_URL}${item.href}`,
          })),
        }}
      />
    </>
  )
}

/* ---------- hero ---------- */

export function ServiceHero({
  crumbs,
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  icon,
  actions,
}: {
  crumbs: { label: string; href: string }[]
  eyebrow: string
  title: string
  body: string
  image: string
  imageAlt: string
  icon?: React.ReactNode
  actions: React.ReactNode
}) {
  // No scroll-reveal here: the hero is above the fold and must paint immediately (LCP).
  return (
    <section className="container-x pb-12 pt-32 sm:pt-36 lg:pb-16">
      <div className="rise">
        <Breadcrumbs items={crumbs} />
      </div>
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="rise lg:col-span-6">
          <div className="flex items-center gap-4">
            {icon}
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
        </div>
        <div className="rise lg:col-span-6 [animation-delay:80ms]">
          <div className="glass overflow-hidden rounded-[2rem] p-2.5">
            <div className="aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-brand-100">
              <ServiceImage src={image} alt={imageAlt} priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- content blocks ---------- */

export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={cn('grid gap-3.5', columns === 2 && 'sm:grid-cols-2')}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base text-ink">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
            <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function PointsGrid({ points, numbered = false }: { points: Point[]; numbered?: boolean }) {
  // 4 items: 2×2 on tablet, 4 across on desktop. 3 items: 3 across from tablet up (no orphan card).
  const cols = points.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'
  const Tag = numbered ? 'ol' : 'ul'
  return (
    <Tag className={cn('grid gap-5', cols)}>
      {points.map((p, i) => (
        <Reveal as="li" key={p.title} delay={i * 0.05} className="glass rounded-3xl p-6">
          {numbered ? (
            <span className="font-[family-name:var(--font-display)] text-sm font-bold text-brand-600">
              {String(i + 1).padStart(2, '0')}
            </span>
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden />
            </span>
          )}
          <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
        </Reveal>
      ))}
    </Tag>
  )
}

export function ToolStrip({ tools }: { tools: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {tools.map((name) => {
        const logo = TECH_STACK.find((t) => t.name === name)?.logo
        return (
          <li key={name} className="inline-flex min-h-11 items-center gap-2.5 rounded-full bg-white/85 py-1.5 pl-1.5 pr-4 text-sm font-medium text-ink ring-1 ring-[rgba(15,52,107,0.08)]">
            {logo ? (
              <img src={logo} alt="" width={32} height={32} loading="lazy" decoding="async" className="h-8 w-8 rounded-full bg-white object-contain" />
            ) : (
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700" aria-hidden>
                {name.slice(0, 2)}
              </span>
            )}
            {name}
          </li>
        )
      })}
    </ul>
  )
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="glass group rounded-2xl px-6 py-1 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-left text-base font-semibold text-ink">
              {f.q}
              <ChevronDown className="h-5 w-5 shrink-0 text-brand-700 transition-transform group-open:rotate-180" aria-hidden />
            </summary>
            <p className="pb-5 text-base leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }}
      />
    </>
  )
}

/* ---------- case studies ---------- */

export function findCaseStudies(slugs: string[]): CaseStudy[] {
  return slugs.map((s) => CASE_STUDIES.find((c) => c.slug === s)).filter((c): c is CaseStudy => Boolean(c))
}

export function RelatedCaseStudies({ studies, title, body }: { studies: CaseStudy[]; title: string; body?: string }) {
  if (!studies.length) return null
  return (
    <section className="container-x mt-24">
      <SectionHeading
        eyebrow="Case studies"
        title={title}
        body={body}
        action={
          <Link href="/work" className="btn-secondary">
            All case studies
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        }
      />
      {/* Flex-wrap + centre so an incomplete last row sits centred instead of leaving a gap. */}
      <ul className="mt-10 flex flex-wrap justify-center gap-5 sm:gap-6">
        {studies.map((study, i) => (
          <Reveal as="li" key={study.slug} delay={i * 0.05} className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]">
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

/* ---------- sub-service cards ---------- */

export function SubServiceCard({ serviceSlug, sub, delay = 0 }: { serviceSlug: string; sub: SubService; delay?: number }) {
  return (
    <Reveal as="li" delay={delay} className="h-full">
      <Link
        href={`/services/${serviceSlug}/${sub.slug}`}
        className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl p-2.5"
      >
        <div className="aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-brand-100">
          <ServiceImage
            src={sub.image}
            alt={sub.imageAlt}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold text-ink">{sub.title}</h3>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{sub.short}</p>
        </div>
      </Link>
    </Reveal>
  )
}
