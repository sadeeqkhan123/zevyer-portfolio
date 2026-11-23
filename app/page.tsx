import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, FlaskConical } from 'lucide-react'
import { CASE_STUDIES, COMPANY, INDUSTRIES, PROCESS, PRODUCTS, SERVICES, STATS } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'
import { CaseStudyCard } from '@/components/site/case-study-card'
import { CtaBand, SectionHeading, SERVICE_ICONS } from '@/components/site/ui'
import { HeroVisual } from '@/components/site/hero-visual'

export default function HomePage() {
  const featured = CASE_STUDIES.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="container-x pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">
              {COMPANY.tagline}
            </span>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] text-ink sm:text-6xl lg:text-[4.1rem]">
              Your digital team for <span className="text-gradient">AI, web, apps</span> and growth.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Zevyer plans, designs, builds and markets digital products under one roof — so you get one accountable
              partner from first idea to scale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary !min-h-12 !px-7">
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/work" className="btn-secondary !min-h-12 !px-7">
                See our work
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
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

      {/* Stats */}
      <section aria-label="Zevyer at a glance" className="container-x">
        <Reveal className="glass grid grid-cols-2 divide-[rgba(15,52,107,0.08)] rounded-3xl lg:grid-cols-4 lg:divide-x">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-7 text-center sm:py-8">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-ink sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Services */}
      <section className="container-x mt-24 lg:mt-32">
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
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon]
            return (
              <Reveal as="li" key={service.slug} delay={i * 0.04}>
                <Link
                  href={`/services#${service.slug}`}
                  className="glass card-hover group flex h-full flex-col rounded-3xl p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(140deg,#dcf1fb,#b8e3f5)] text-brand-700 ring-1 ring-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.short}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-700">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </section>

      {/* Case studies */}
      <section className="container-x mt-24 lg:mt-32">
        <SectionHeading
          eyebrow="Case studies"
          title="Work we are proud of"
          body="Platforms, SaaS, consumer apps and e-commerce — a look at what we have planned, built and grown."
          action={
            <Link href="/work" className="btn-secondary">
              View all case studies
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          }
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((study, i) => (
            <Reveal as="li" key={study.slug} delay={i * 0.06}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="container-x mt-24 lg:mt-32">
        <div className="glass-tint rounded-[2rem] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
          <SectionHeading
            eyebrow="How we work"
            title="A clear process, from first call to launch"
            body="No black boxes. You see the plan, the progress and the results at every step."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
      <section className="container-x mt-24 lg:mt-32">
        <SectionHeading
          eyebrow="Our products"
          title="We build our own products, too"
          body="Our in-house R&D keeps us sharp on the same AI technology we bring to client work."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.06} className="glass flex h-full flex-col rounded-3xl p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-[rgba(15,52,107,0.08)]">
                  {product.image ? (
                    <img src={product.image} alt={`${product.name} logo`} width={48} height={56} className="h-12 w-auto object-contain" />
                  ) : (
                    <FlaskConical className="h-7 w-7 text-brand-600" aria-hidden />
                  )}
                </span>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">{product.status}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-ink">{product.name}</h3>
              <p className="mt-1 text-sm font-semibold text-brand-700">{product.label}</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{product.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="container-x mt-24 lg:mt-32">
        <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <span className="eyebrow">Industries</span>
            <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">Built for teams ready to modernize</h2>
          </div>
          <ul className="flex flex-wrap gap-2.5 lg:max-w-2xl lg:justify-end">
            {INDUSTRIES.map((industry) => (
              <li key={industry} className="glass rounded-full px-4 py-2 text-sm font-medium text-ink">
                {industry}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBand />

      <section className="container-x mt-10">
        <Reveal className="flex flex-col items-center justify-center gap-2 text-center text-sm text-ink-soft sm:flex-row">
          Prefer email?
          <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline">
            {COMPANY.email}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>
      </section>
    </>
  )
}
