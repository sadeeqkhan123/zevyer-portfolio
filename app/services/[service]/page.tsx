import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { COMPANY, SERVICES, getService, serviceCaseStudySlugs } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'
import { CtaBand, SectionHeading } from '@/components/site/ui'
import { ServiceIcon } from '@/components/site/service-icon'
import {
  CheckList,
  FaqList,
  JsonLd,
  PointsGrid,
  RelatedCaseStudies,
  SITE_URL,
  ServiceHero,
  SubServiceCard,
  ToolStrip,
  findCaseStudies,
} from '@/components/site/service-parts'

type Params = { service: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const service = getService((await params).service)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} · ${COMPANY.name}`, description: service.description, images: [service.image] },
  }
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const service = getService((await params).service)
  if (!service) notFound()

  const studies = findCaseStudies(serviceCaseStudySlugs(service))
  const others = SERVICES.filter((s) => s.slug !== service.slug)

  return (
    <>
      <ServiceHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title, href: `/services/${service.slug}` },
        ]}
        icon={<ServiceIcon name={service.icon} />}
        eyebrow="Service"
        title={service.title}
        body={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
        actions={
          <>
            <Link href={`/contact?service=${service.slug}`} className="btn-primary !min-h-12 !px-7">
              Discuss this service
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href="#offer" className="btn-secondary !min-h-12 !px-7">
              What we offer
            </a>
          </>
        }
      />

      {/* Sub-services */}
      <section id="offer" className="container-x scroll-mt-28">
        <SectionHeading
          eyebrow="What we offer"
          title={`${service.title} services`}
          body={service.short}
        />
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {service.subServices.map((sub, i) => (
            <SubServiceCard key={sub.slug} serviceSlug={service.slug} sub={sub} delay={i * 0.05} />
          ))}
        </ul>
      </section>

      {/* Benefits + deliverables */}
      <section className="container-x mt-24">
        <SectionHeading eyebrow="Why Zevyer" title="What you can expect" />
        <div className="mt-10">
          <PointsGrid points={service.benefits} />
        </div>
        <Reveal className="glass-tint mt-6 grid gap-8 rounded-[2rem] p-7 sm:p-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-ink">Everything included</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Pick a single deliverable or combine them. Every engagement comes with a clear scope, a fixed timeline and
              regular demos.
            </p>
          </div>
          <div className="lg:col-span-7">
            <CheckList items={service.subServices.map((s) => s.title)} columns={2} />
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="container-x mt-24">
        <SectionHeading eyebrow="Process" title="How we deliver it" />
        <div className="mt-10">
          <PointsGrid points={service.process} numbered />
        </div>
      </section>

      <RelatedCaseStudies
        studies={studies}
        title={`${service.title} in action`}
        body="Real projects where this service made the difference."
      />

      {/* Tools */}
      <section className="container-x mt-24">
        <Reveal className="glass flex flex-col gap-6 rounded-[2rem] p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-sm">
            <span className="eyebrow">Technology</span>
            <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">Tools we use</h2>
          </div>
          <div className="lg:max-w-2xl">
            <ToolStrip tools={service.tools} />
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="container-x mt-24 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
        </div>
        <div className="lg:col-span-8">
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      {/* Other services */}
      <section className="container-x mt-24">
        <SectionHeading eyebrow="Explore more" title="Other services" />
        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          {others.map((s, i) => (
            <Reveal
              as="li"
              key={s.slug}
              delay={i * 0.04}
              className="w-[calc((100%-1rem)/2)] sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-4rem)/5)]"
            >
              <Link href={`/services/${s.slug}`} className="glass card-hover group flex h-full flex-col rounded-3xl p-5">
                <ServiceIcon name={s.icon} />
                <h3 className="mt-4 text-base font-bold text-ink">{s.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-700">
                  View
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand
        title={`Ready to talk about ${service.title}?`}
        body="Tell us what you want to achieve. We will reply with next steps, a rough timeline and how we can help."
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `${SITE_URL}/services/${service.slug}`,
          image: `${SITE_URL}${service.image}`,
          provider: { '@type': 'Organization', name: COMPANY.name, url: SITE_URL },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: service.title,
            itemListElement: service.subServices.map((s) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: s.title, url: `${SITE_URL}/services/${service.slug}/${s.slug}` },
            })),
          },
        }}
      />
    </>
  )
}
