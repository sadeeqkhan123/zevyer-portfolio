import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/components/site/service-parts'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
