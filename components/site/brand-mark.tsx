import { useId } from 'react'

/**
 * The Zevyer mark, redrawn as SVG from the official logo:
 * cyan (#0EBDE6) bottom-left → royal blue (#2160AC) top-right.
 */
export function BrandMark({ className = '', muted = false }: { className?: string; muted?: boolean }) {
  const id = useId().replace(/:/g, '')
  const from = muted ? '#bfe6f3' : '#0EBDE6'
  const to = muted ? '#c3d5ea' : '#2160AC'
  return (
    <svg viewBox="-4 -4 240 250" className={className} aria-hidden focusable="false">
      <defs>
        <linearGradient id={`zv-${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <g fill={`url(#zv-${id})`} stroke={`url(#zv-${id})`} strokeWidth="6" strokeLinejoin="round">
        <path d="M0 0 H175 L232 58 L50 240 L0 190 L114 76 H0 Z" />
        <path d="M162 140 L230 207 V240 H162 Z" />
      </g>
    </svg>
  )
}
