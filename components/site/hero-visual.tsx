'use client'

import { m as motion } from 'framer-motion'
import { BrandMark } from '@/components/site/brand-mark'
import { Bot, Code2, Globe, Megaphone, Smartphone, TrendingUp } from 'lucide-react'

const tiles = [
  { icon: Bot, label: 'AI Agents', note: 'Support · Sales · Ops' },
  { icon: Globe, label: 'Web', note: 'Sites & platforms' },
  { icon: Smartphone, label: 'Apps', note: 'iOS & Android' },
  { icon: Megaphone, label: 'Marketing', note: 'SEO · Ads · Social' },
]

/** Decorative glass composition for the hero. Purely illustrative. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] py-6 sm:aspect-square sm:py-0" aria-hidden>
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_40%,#b8e3f5_0%,rgba(184,227,245,0)_70%)]" />

      {/* Core card */}
      <motion.div
        className="glass-strong relative mx-auto w-full max-w-[380px] rounded-[2rem] p-5 sm:absolute sm:left-1/2 sm:top-1/2 sm:w-[68%] sm:max-w-none sm:-translate-x-1/2 sm:-translate-y-1/2 sm:p-6"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="flex items-center gap-3">
          <BrandMark className="h-11 w-11" />
          <div>
            <p className="font-[family-name:var(--font-display)] text-base font-bold text-ink">Zevyer Studio</p>
            <p className="text-xs text-ink-soft">One team · every channel</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {tiles.map(({ icon: Icon, label, note }) => (
            <div key={label} className="rounded-2xl bg-white/80 p-3 ring-1 ring-[rgba(15,52,107,0.06)]">
              <Icon className="h-5 w-5 text-brand-600" />
              <p className="mt-2 text-sm font-semibold text-ink">{label}</p>
              <p className="text-[11px] leading-snug text-ink-soft">{note}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div
        className="glass-strong absolute left-0 top-[12%] hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
          <Code2 className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold text-ink">Sprint shipped</p>
          <p className="text-[11px] text-ink-soft">Demo every week</p>
        </div>
      </motion.div>

      <motion.div
        className="glass-strong absolute bottom-[10%] right-0 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e6f8ee] text-[#12804a]">
          <TrendingUp className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold text-ink">60+ projects</p>
          <p className="text-[11px] text-ink-soft">Delivered end to end</p>
        </div>
      </motion.div>
    </div>
  )
}
