import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { COMPANY, SERVICES, getSubService, serviceCaseStudySlugs } from '@/lib/site'
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

type Params = { service: string; sub: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return SERVICES.flatMap((s) => s.subServices.map((sub) => ({ service: s.slug, sub: sub.slug })))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = await params
  const found = getSubService(p.service, p.sub)
  if (!found) return {}
  const { service, sub } = found
  return {
    title: `${sub.title} — ${service.title}`,
    description: sub.short,
    alternates: { canonical: `/services/${service.slug}/${sub.slug}` },
    openGraph: { title: `${sub.title} · ${COMPANY.name}`, description: sub.short, images: [sub.image] },
  }
}

export default async function SubServicePage({ params }: { params: Promise<Params> }) {
  const p = await params
  const found = getSubService(p.service, p.sub)
  if (!found) notFound()
  const { service, sub } = found

  // Sub-service work first; fall back to the parent service's case studies.
  const own = findCaseStudies(sub.caseStudies)
  const studies = own.length ? own : findCaseStudies(serviceCaseStudySlugs(service)).slice(0, 3)
  const siblings = service.subServices.filter((s) => s.slug !== sub.slug)
  const contactHref = `/contact?service=${service.slug}`

  return (
    <>
      <ServiceHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title, href: `/services/${service.slug}` },
          { label: sub.title, href: `/services/${service.slug}/${sub.slug}` },
        ]}
        icon={<ServiceIcon name={service.icon} />}
        eyebrow={service.title}
        title={sub.title}
        body={sub.short}
        image={sub.image}
        imageAlt={sub.imageAlt}
        actions={
          <>
            <Link href={contactHref} className="btn-primary !min-h-12 !px-7">
              Get a proposal
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary !min-h-12 !px-7">
              Chat on WhatsApp
            </a>
          </>
        }
      />

      {/* Overview + included */}
      <section className="container-x grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Reveal className="glass rounded-[2rem] p-7 sm:p-10 lg:col-span-6">
          <span className="eyebrow">Overview</span>
          <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">How we help</h2>
          {sub.overview.map((para) => (
            <p key={para.slice(0, 24)} className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              {para}
            </p>
          ))}
        </Reveal>
        <Reveal className="glass-tint rounded-[2rem] p-7 sm:p-10 lg:col-span-6" delay={0.06}>
          <span className="eyebrow">Scope</span>
          <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">What’s included</h2>
          <div className="mt-6">
            <CheckList items={sub.includes} />
          </div>
        </Reveal>
      </section>

      {/* Outcomes */}
      <section className="container-x mt-24">
        <SectionHeading eyebrow="Outcomes" title="What it means for your business" />
        <div className="mt-10">
          <PointsGrid points={sub.outcomes} />
        </div>
      </section>

      {/* Process */}
      <section className="container-x mt-24">
        <div className="glass-tint rounded-[2rem] px-5 py-12 sm:px-10 sm:py-14">
          <SectionHeading eyebrow="Process" title="How the work runs" body="The same clear, step-by-step delivery across every project." />
          <div className="mt-10">
            <PointsGrid points={service.process} numbered />
          </div>
        </div>
      </section>

      <RelatedCaseStudies
        studies={studies}
        title={own.length ? 'Related case studies' : `More ${service.title} work`}
        body={own.length ? `Projects where we delivered ${sub.title}.` : `Selected work from our ${service.title} team.`}
      />

      {/* Tools */}
      <section className="container-x mt-24">
        <Reveal className="glass flex flex-col gap-6 rounded-[2rem] p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-sm">
            <span className="eyebrow">Technology</span>
            <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">Tools we use</h2>
          </div>
          <div className="lg:max-w-2xl">
            <ToolStrip tools={sub.tools} />
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="container-x mt-24 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title={`${sub.title}: questions`} />
        </div>
        <div className="lg:col-span-8">
          <FaqList faqs={sub.faqs} />
        </div>
      </section>

      {/* Siblings */}
      <section className="container-x mt-24">
        <SectionHeading
          eyebrow={service.title}
          title="Related services"
          action={
            <Link href={`/services/${service.slug}`} className="btn-secondary">
              All {service.title}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          }
        />
        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {siblings.map((s, i) => (
            <SubServiceCard key={s.slug} serviceSlug={service.slug} sub={s} delay={i * 0.05} />
          ))}
        </ul>
      </section>

      <CtaBand
        title={`Let’s scope your project: ${sub.title}`}
        body="Share your goals and timeline. We will reply with a clear proposal and next steps."
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: sub.title,
          serviceType: service.title,
          description: sub.short,
          url: `${SITE_URL}/services/${service.slug}/${sub.slug}`,
          image: `${SITE_URL}${sub.image}`,
          provider: { '@type': 'Organization', name: COMPANY.name, url: SITE_URL },
        }}
      />
    </>
  )
}
