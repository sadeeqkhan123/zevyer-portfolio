import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PROCESS, SERVICES, serviceCaseStudySlugs } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'
import { CtaBand, PageHero, SectionHeading } from '@/components/site/ui'
import { ServiceIcon } from '@/components/site/service-icon'
import { ServiceImage } from '@/components/site/service-parts'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI agents and automation, web and app development, digital marketing, brand design and custom software — planned, built and grown by one team.',
  alternates: { canonical: '/services' },
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

      <section className="container-x">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => {
            const studies = serviceCaseStudySlugs(service).length
            return (
              <Reveal as="li" key={service.slug} delay={(i % 2) * 0.06} className="h-full">
                <article className="glass card-hover group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-2.5">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[1.6rem] bg-brand-100">
                    <ServiceImage
                      src={service.image}
                      alt={service.imageAlt}
                      priority={i < 2}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute left-4 top-4">
                      <ServiceIcon name={service.icon} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-4 pb-4 pt-6 sm:px-6 sm:pb-6">
                    <div className="flex items-center gap-3 text-sm text-ink-soft">
                      <span className="font-[family-name:var(--font-display)] font-bold text-brand-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span aria-hidden>·</span>
                      <span>
                        {service.subServices.length} services{studies ? ` · ${studies} case studies` : ''}
                      </span>
                    </div>
                    <h2 className="mt-3 text-2xl font-bold text-ink sm:text-[1.7rem]">
                      {/* The heading link covers the card; sub-service links sit above it. */}
                      <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 after:content-['']">
                        {service.title}
                      </Link>
                    </h2>
                    <p className="mt-3 leading-relaxed text-ink-soft">{service.description}</p>
                    <ul className="relative z-10 mt-5 flex flex-wrap gap-2">
                      {service.subServices.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/services/${service.slug}/${sub.slug}`}
                            className="inline-flex min-h-9 items-center rounded-full bg-brand-100 px-3.5 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-600 hover:text-white"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-700">
                      Explore {service.title}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>
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
