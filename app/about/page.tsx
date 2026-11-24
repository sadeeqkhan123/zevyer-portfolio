import type { Metadata } from 'next'
import { COMPANY, INDUSTRIES, PILLARS, PRODUCTS } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'
import { CtaBand, PageHero, ProductCard, SectionHeading, StatsBar } from '@/components/site/ui'
import { FoundersSection } from '@/components/site/founders'

export const metadata: Metadata = {
  title: 'About',
  description: 'Zevyer merges digital marketing, advanced AI and custom software for startups, SMEs and enterprises.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Zevyer"
        title={
          <>
            Creative marketing, intelligent automation and <span className="text-gradient">engineering</span> — together
          </>
        }
        body={COMPANY.description}
      />

      <section className="container-x grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal className="glass rounded-[2rem] p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-ink">Who we are</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Zevyer merges digital marketing, advanced AI and custom software for startups, SMEs and enterprises
            modernizing their playbook. From first consultation through execution — campaigns, platforms, AI tooling and
            product innovation — every engagement is designed for scalable growth and a lasting competitive edge.
          </p>
        </Reveal>
        <Reveal className="glass rounded-[2rem] p-8 sm:p-10" delay={0.06}>
          <h2 className="text-2xl font-bold text-ink">Where we focus</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            We focus on e-commerce, healthcare and technology — sectors where digital transformation and automation are
            moving fastest — and bring the same end-to-end approach to every growing business.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {INDUSTRIES.map((i) => (
              <li key={i} className="rounded-full bg-brand-100 px-3 py-1.5 text-xs font-semibold text-brand-700">
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="container-x mt-6">
        <StatsBar />
      </section>

      <FoundersSection className="mt-24" />

      <section className="container-x mt-24">
        <SectionHeading eyebrow="Our approach" title="What guides every engagement" align="center" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.05} className="glass rounded-3xl p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-[family-name:var(--font-display)] text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-x mt-24">
        <SectionHeading eyebrow="Innovation" title="Products from our lab" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} delay={i * 0.06} />
          ))}
        </div>
      </section>

      <CtaBand title="Let’s build what’s next" />
    </>
  )
}
