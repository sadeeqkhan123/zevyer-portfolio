'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { CaseStudy } from '@/lib/site'
import { cn } from '@/lib/utils'
import { CaseStudyCard } from '@/components/site/case-study-card'

export function WorkGrid({ studies }: { studies: CaseStudy[] }) {
  const categories = useMemo(() => ['All', ...Array.from(new Set(studies.map((s) => s.category)))], [studies])
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? studies : studies.filter((s) => s.category === active)

  return (
    <div>
      <div role="group" aria-label="Filter case studies by category" className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={cn(
              'inline-flex min-h-10 items-center rounded-full px-4 text-sm font-medium transition',
              active === c ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25' : 'glass text-ink hover:text-brand-700'
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} case {visible.length === 1 ? 'study' : 'studies'}
      </p>

      <motion.ul layout className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
