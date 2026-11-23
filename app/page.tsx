import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { CASE_STUDIES, COMPANY, INDUSTRIES, PROCESS, PRODUCTS, SERVICES } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'
import { CaseStudyCard } from '@/components/site/case-study-card'
import { CtaBand, ProductCard, SectionHeading, StatsBar } from '@/components/site/ui'
import { HeroVisual } from '@/components/site/hero-visual'
import { ServiceIcon } from '@/components/site/service-icon'
import { TechMarquee } from '@/components/site/tech-marquee'

export default function HomePage() {
  const featured = CASE_STUDIES.filter((c) => c.featured).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="container-x pb-12 pt-28 sm:pt-36 lg:pb-16 lg:pt-40">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="text-center lg:col-span-6 lg:text-left">
            <span className="eyebrow">{COMPANY.tagline}</span>
            <h1 className="mx-auto mt-5 max-w-2xl text-[2.35rem] font-extrabold leading-[1.06] text-ink sm:mt-6 sm:text-6xl lg:mx-0 lg:text-[4.1rem]">
              Your digital team for <span className="text-gradient">AI, web, apps</span> and growth.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:mt-6 sm:text-lg lg:mx-0">
              Zevyer plans, designs, builds and markets digital products under one roof — so you get one accountable
              partner from first idea to scale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/contact" className="btn-primary !min-h-12 !px-7">
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/work" className="btn-secondary !min-h-12 !px-7">
                See our work
              </Link>
            </div>
            <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-soft lg:justify-start">
              {['Strategy to launch', 'AI-first delivery', 'Transparent sprints'].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.1}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* Technology strip */}
      <TechMarquee />

      {/* Stats */}
      <section aria-label="Zevyer at a glance" className="container-x mt-12 lg:mt-16">
        <StatsBar />
      </section>

      {/* Services */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Every service a modern business needs, <span className="text-gradient">in one place</span>
            </>
          }
          body="From AI agents that work around the clock to the campaigns that bring customers in — pick one service or let us run the whole stack."
          action={
            <Link href="/services" className="btn-secondary">
              All services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          }
        />
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={i * 0.04} className="h-full">
              <Link
                href={`/services#${service.slug}`}
                className="glass card-hover group flex h-full flex-col rounded-3xl p-6 sm:p-7"
              >
                <ServiceIcon name={service.icon} />
                <h3 className="mt-6 text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.short}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-700">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Case studies */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeading
          eyebrow="Case studies"
          title="Work we are proud of"
          body="Clean-tech devices, ride-hailing, healthtech SaaS, real estate and more — a look at what we have planned, built and grown."
          action={
            <Link href="/work" className="btn-secondary">
              All {CASE_STUDIES.length} case studies
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          }
        />
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3">
          {featured.map((study, i) => (
            <Reveal as="li" key={study.slug} delay={i * 0.06} className={`h-full ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="container-x mt-20 lg:mt-28">
        <div className="glass-tint rounded-[2rem] px-5 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <SectionHeading
            eyebrow="How we work"
            title="A clear process, from first call to launch"
            body="No black boxes. You see the plan, the progress and the results at every step."
          />
          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 0.05} className="glass-strong rounded-3xl p-6">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-brand-600">{p.step}</span>
                <h3 className="mt-3 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Products */}
      <section className="container-x mt-20 lg:mt-28">
        <SectionHeading
          eyebrow="Our products"
          title="We build our own products, too"
          body="Our in-house R&D keeps us sharp on the same AI technology we bring to client work."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:mt-12">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} delay={i * 0.06} />
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="container-x mt-20 lg:mt-28">
        <Reveal className="glass flex flex-col gap-6 rounded-[2rem] p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-sm">
            <span className="eyebrow">Industries</span>
            <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">Built for teams ready to modernize</h2>
          </div>
          <ul className="flex flex-wrap gap-2.5 lg:max-w-2xl lg:justify-end">
            {INDUSTRIES.map((industry) => (
              <li key={industry} className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-ink ring-1 ring-[rgba(15,52,107,0.08)]">
                {industry}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBand />

      <section className="container-x mt-8">
        <Reveal className="flex flex-col items-center justify-center gap-1 text-center text-sm text-ink-soft sm:flex-row sm:gap-2">
          Prefer email?
          <a href={`mailto:${COMPANY.email}`} className="inline-flex min-h-10 items-center gap-1 break-all font-semibold text-brand-700 hover:underline">
            {COMPANY.email}
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
          </a>
        </Reveal>
      </section>
    </>
  )
}
