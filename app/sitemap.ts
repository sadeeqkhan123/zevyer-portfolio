import type { MetadataRoute } from 'next'
import { CASE_STUDIES, SERVICES } from '@/lib/site'
import { SITE_URL } from '@/components/site/service-parts'

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority,
  })
  return [
    page('/', 1),
    page('/services', 0.9),
    page('/work', 0.8),
    page('/about', 0.7),
    page('/contact', 0.7),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.8)),
    ...SERVICES.flatMap((s) => s.subServices.map((sub) => page(`/services/${s.slug}/${sub.slug}`, 0.7))),
    ...CASE_STUDIES.map((c) => page(`/work/${c.slug}`, 0.6)),
  ]
}
