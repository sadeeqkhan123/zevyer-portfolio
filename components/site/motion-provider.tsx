'use client'

import { LazyMotion, MotionConfig } from 'framer-motion'

const loadFeatures = () => import('@/lib/motion-features').then((mod) => mod.default)

/**
 * Lazy-loads animation features after first paint (components use the lightweight `m` element)
 * and respects the visitor's "reduce motion" OS setting for every animation.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
