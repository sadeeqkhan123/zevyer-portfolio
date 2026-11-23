import type { ServiceIcon as ServiceIconName } from '@/lib/site'

/**
 * Custom duotone service glyphs on a glossy brand-gradient tile
 * (cyan #0EBDE6 → royal blue #2160AC, from the Zevyer mark).
 */
const glyphs: Record<ServiceIconName, React.ReactNode> = {
  // AI agent: chat bubble with a neural spark
  bot: (
    <>
      <path d="M8 12a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-7l-6 5v-5.2A6 6 0 0 1 8 20v-8Z" fill="#fff" fillOpacity=".35" />
      <path d="M20 9.5l1.6 4.4 4.4 1.6-4.4 1.6L20 21.5l-1.6-4.4-4.4-1.6 4.4-1.6L20 9.5Z" fill="#fff" />
      <circle cx="29.5" cy="29.5" r="3.5" fill="#fff" />
    </>
  ),
  // Web: browser window with layout blocks
  globe: (
    <>
      <rect x="6" y="8" width="28" height="24" rx="5" fill="#fff" fillOpacity=".35" />
      <path d="M6 13a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5v1H6v-1Z" fill="#fff" />
      <rect x="10" y="18" width="9" height="10" rx="2" fill="#fff" />
      <rect x="21.5" y="18" width="8.5" height="4" rx="2" fill="#fff" fillOpacity=".85" />
      <rect x="21.5" y="24" width="6" height="4" rx="2" fill="#fff" fillOpacity=".6" />
    </>
  ),
  // App: phone with stacked cards
  smartphone: (
    <>
      <rect x="11" y="5" width="18" height="30" rx="5" fill="#fff" fillOpacity=".35" />
      <rect x="14.5" y="10" width="11" height="7" rx="2" fill="#fff" />
      <rect x="14.5" y="19" width="11" height="4" rx="2" fill="#fff" fillOpacity=".8" />
      <rect x="14.5" y="25" width="7" height="4" rx="2" fill="#fff" fillOpacity=".6" />
      <circle cx="31" cy="11" r="3.5" fill="#fff" />
    </>
  ),
  // Growth: rising bars with arrow
  megaphone: (
    <>
      <rect x="8" y="22" width="6" height="10" rx="2" fill="#fff" fillOpacity=".45" />
      <rect x="17" y="17" width="6" height="15" rx="2" fill="#fff" fillOpacity=".7" />
      <rect x="26" y="12" width="6" height="20" rx="2" fill="#fff" />
      <path d="M8 16.5 18 9l4 3.5L31 6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M26 5.5h5.5V11" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  // Brand: overlapping shapes
  palette: (
    <>
      <circle cx="15" cy="15" r="8" fill="#fff" fillOpacity=".4" />
      <rect x="18" y="18" width="15" height="15" rx="4" fill="#fff" fillOpacity=".7" />
      <path d="M14 22.5 20.5 34H7.5L14 22.5Z" fill="#fff" />
      <circle cx="27" cy="11" r="4" fill="#fff" />
    </>
  ),
  // Custom software: stacked layers with brackets
  code: (
    <>
      <path d="M20 6 34 13l-14 7L6 13l14-7Z" fill="#fff" />
      <path d="m6 19.5 14 7 14-7" stroke="#fff" strokeOpacity=".75" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m6 26 14 7 14-7" stroke="#fff" strokeOpacity=".45" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
}

export function ServiceIcon({ name, size = 'md' }: { name: ServiceIconName; size?: 'md' | 'lg' }) {
  const box = size === 'lg' ? 'h-16 w-16 rounded-[1.25rem]' : 'h-14 w-14 rounded-2xl'
  return (
    <span
      aria-hidden
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden ${box} shadow-[0_10px_24px_-10px_rgba(33,96,172,0.7)] ring-1 ring-white/60`}
      style={{ background: 'linear-gradient(135deg, #0ebde6 0%, #1a8fd0 45%, #2160ac 100%)' }}
    >
      {/* glossy top highlight */}
      <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent" />
      <svg viewBox="0 0 40 40" className={size === 'lg' ? 'relative h-9 w-9' : 'relative h-8 w-8'}>
        {glyphs[name]}
      </svg>
    </span>
  )
}
