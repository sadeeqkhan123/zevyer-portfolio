import Link from 'next/link'
import { COMPANY } from '@/lib/site'
import { BrandMark } from '@/components/site/brand-mark'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex min-h-11 items-center gap-2.5 ${className}`} aria-label={`${COMPANY.name} home`}>
      <BrandMark className="h-8 w-8" />
      <span className="font-[family-name:var(--font-display)] text-[1.35rem] font-bold tracking-[-0.03em] text-ink">
        {COMPANY.name}
      </span>
    </Link>
  )
}
