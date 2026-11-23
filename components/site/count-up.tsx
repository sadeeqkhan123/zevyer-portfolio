'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/** Counts a stat like "60+" or "360°" up from zero when it scrolls into view. */
export function CountUp({ value, duration = 1.1 }: { value: string; duration?: number }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/)
  const prefix = match?.[1] ?? ''
  const target = match ? Number(match[2]) : 0
  const suffix = match?.[3] ?? ''

  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)

  const hasNumber = Boolean(match)

  useEffect(() => {
    if (!hasNumber || !inView) return
    if (reduce) {
      setN(target)
      return
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, target, duration, hasNumber])

  if (!match) return <span>{value}</span>

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden>
        {prefix}
        {n}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  )
}
