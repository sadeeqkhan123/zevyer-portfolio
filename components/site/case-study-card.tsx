import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { CaseStudy } from '@/lib/site'

export function CaseStudyCard({ study, priority = false }: { study: CaseStudy; priority?: boolean }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl p-2.5"
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-[1.25rem] bg-brand-100">
        <img
          src={study.image}
          alt={`${study.title} brand artwork`}
          width={1024}
          height={682}
          loading={priority ? 'eager' : 'lazy'}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="glass-strong absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-ink">
          {study.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-ink">{study.title}</h3>
            <p className="mt-0.5 text-sm text-ink-soft">
              {study.url} · {study.year}
            </p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
            <ArrowUpRight className="h-5 w-5" aria-hidden />
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{study.summary}</p>
        <p className="mt-auto pt-5 text-sm font-semibold text-brand-700">{study.impact}</p>
      </div>
    </Link>
  )
}
