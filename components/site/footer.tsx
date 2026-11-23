import Link from 'next/link'
import { Mail } from 'lucide-react'
import { CASE_STUDIES, COMPANY, NAV_ITEMS, SERVICES } from '@/lib/site'
import { Logo } from '@/components/site/logo'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="glass mx-auto max-w-7xl rounded-3xl px-6 py-12 sm:px-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">{COMPANY.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={`mailto:${COMPANY.email}`} className="btn-secondary !min-h-10 !px-4">
                <Mail className="h-4 w-4" aria-hidden />
                Email us
              </a>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary !min-h-10 !px-4">
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>

          <FooterColumn title="Company" className="lg:col-span-2">
            {NAV_ITEMS.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services" className="lg:col-span-3">
            {SERVICES.map((s) => (
              <FooterLink key={s.slug} href={`/services#${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Case studies" className="lg:col-span-3">
            {CASE_STUDIES.map((c) => (
              <FooterLink key={c.slug} href={`/work/${c.slug}`}>
                {c.title}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[rgba(15,52,107,0.08)] pt-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {COMPANY.socials.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-700">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">{title}</h2>
      <ul className="mt-4 space-y-1">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="inline-flex min-h-9 items-center text-sm text-ink-soft transition-colors hover:text-brand-700">
        {children}
      </Link>
    </li>
  )
}
