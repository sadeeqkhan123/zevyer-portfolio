'use client'

import { useState } from 'react'
import { AnimatePresence, m as motion } from 'framer-motion'
import type { CaseStudy } from '@/lib/site'
import { cn } from '@/lib/utils'
import { CaseStudyCard } from '@/components/site/case-study-card'

const FILTERS: { label: string; test: (s: CaseStudy) => boolean }[] = [
  { label: 'All', test: () => true },
  { label: 'Live', test: (s) => s.status === 'Live' },
  { label: 'In progress', test: (s) => s.status === 'In progress' },
  { label: 'Zevyer products', test: (s) => s.status === 'Our product' || s.status === 'Private build' },
  { label: 'AI & automation', test: (s) => s.technologies.some((t) => /ai|claude/i.test(t)) },
  { label: 'Apps', test: (s) => s.scope.some((t) => /app|pwa/i.test(t)) },
]

export function WorkGrid({ studies }: { studies: CaseStudy[] }) {
  const [active, setActive] = useState('All')
  const filter = FILTERS.find((f) => f.label === active) ?? FILTERS[0]
  const visible = studies.filter(filter.test)

  return (
    <div>
      <div
        role="group"
        aria-label="Filter case studies"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {FILTERS.map((f) => {
          const count = studies.filter(f.test).length
          return (
            <button
              key={f.label}
              type="button"
              onClick={() => setActive(f.label)}
              aria-pressed={active === f.label}
              className={cn(
                'inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium transition',
                active === f.label ? 'bg-brand-700 text-white shadow-md shadow-brand-700/25' : 'glass text-ink hover:text-brand-700'
              )}
            >
              {f.label}
              <span className={cn('rounded-full px-1.5 text-xs', active === f.label ? 'bg-white/20' : 'bg-brand-100 text-brand-700')}>
                {count}
              </span>
            </button>
          )
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} case {visible.length === 1 ? 'study' : 'studies'}
      </p>

      <motion.ul layout className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((study, i) => (
            <motion.li
              key={study.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <CaseStudyCard study={study} priority={i < 3} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  )
}
