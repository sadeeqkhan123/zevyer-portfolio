import type { Metadata } from 'next'
import { CASE_STUDIES } from '@/lib/site'
import { CtaBand, PageHero } from '@/components/site/ui'
import { WorkGrid } from '@/components/site/work-grid'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Platforms, SaaS, consumer apps and e-commerce projects planned, built and grown by Zevyer.',
}

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Results we have <span className="text-gradient">helped deliver</span>
          </>
        }
        body="A selection of platforms, products and campaigns — what the goal was, what we did and what changed."
      />
      <section className="container-x">
        <WorkGrid studies={CASE_STUDIES} />
      </section>
      <CtaBand title="Want results like these?" />
    </>
  )
}
