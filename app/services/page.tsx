import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PROCESS, SERVICES } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'
import { CtaBand, PageHero, SectionHeading } from '@/components/site/ui'
import { ServiceIcon } from '@/components/site/service-icon'

export const metadata: Metadata = {
  title: 'Services',
  description: 'AI agents and automation, web and app development, digital marketing, brand design and custom software.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            360° digital services, <span className="text-gradient">one accountable team</span>
          </>
        }
        body="Hire us for a single project or as your full digital department. Every service is planned, delivered and measured by the same team."
      />

      {/* Quick jump */}
      <nav aria-label="Services" className="container-x">
        <ul className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="glass inline-flex min-h-10 items-center rounded-full px-4 text-sm font-medium text-ink transition hover:text-brand-700">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="container-x mt-12 space-y-6">
        {SERVICES.map((service, i) => {
          return (
            <Reveal
              as="article"
              key={service.slug}
              className="glass rounded-[2rem] p-6 sm:p-10"
            >
              <div id={service.slug} className="grid grid-cols-1 scroll-mt-32 gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4">
                    <ServiceIcon name={service.icon} size="lg" />
                    <span className="font-[family-name:var(--font-display)] text-sm font-bold text-brand-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-ink sm:text-3xl">{service.title}</h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{service.description}</p>
                  <Link href={`/contact?service=${service.slug}`} className="btn-primary mt-7">
                    Discuss this service
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
                <div className="lg:col-span-5">
                  <div className="glass-strong h-full rounded-3xl p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">What you get</h3>
                    <ul className="mt-4 space-y-3">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-ink">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </section>

      <section className="container-x mt-24">
        <SectionHeading eyebrow="Process" title="How every engagement runs" align="center" />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 0.05} className="glass rounded-3xl p-6">
              <span className="font-[family-name:var(--font-display)] text-sm font-bold text-brand-600">{p.step}</span>
              <h3 className="mt-3 text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <CtaBand title="Not sure which service you need?" body="Tell us your goal. We will recommend the right mix and send a clear proposal." />
    </>
  )
}
