import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { CaseStudy } from '@/lib/site'
import { cn } from '@/lib/utils'

export function StatusBadge({ status, className }: { status: CaseStudy['status']; className?: string }) {
  const tone =
    status === 'Live'
      ? 'bg-[#e7f7ee] text-[#11733f]'
      : status === 'In progress'
        ? 'bg-[#fff4e0] text-[#8a5300]'
        : 'bg-brand-100 text-brand-700'
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold', tone, className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {status}
    </span>
  )
}

export function CaseStudyMedia({ study, className, eager = false }: { study: CaseStudy; className?: string; eager?: boolean }) {
  const contain = study.imageFit === 'contain'
  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{ background: study.imageBg ?? '#e8f2fb' }}
    >
      <img
        src={study.image}
        alt={`${study.title} logo`}
        loading={eager ? 'eager' : 'lazy'}
        className={cn(
          'h-full w-full transition-transform duration-500 group-hover:scale-[1.03]',
          contain ? 'object-contain p-[12%]' : 'object-cover'
        )}
      />
    </div>
  )
}

export function CaseStudyCard({ study, priority = false }: { study: CaseStudy; priority?: boolean }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl p-2.5"
    >
      <div className="relative">
        <CaseStudyMedia study={study} eager={priority} className="aspect-[3/2] rounded-[1.25rem]" />
        <span className="glass-strong absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-ink">
          {study.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-ink">{study.title}</h3>
            <p className="mt-1 truncate text-sm text-ink-soft">{study.scope.join(' · ')}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
            <ArrowUpRight className="h-5 w-5" aria-hidden />
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{study.summary}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <StatusBadge status={study.status} />
          {study.url && <span className="truncate text-xs font-medium text-ink-soft">{study.url}</span>}
        </div>
      </div>
    </Link>
  )
}
