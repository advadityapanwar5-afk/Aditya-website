import { MetadataRoute } from 'next'
import { services } from '@/lib/services-data' //

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Update this URL if you buy a new domain like 'https://www.iralexterra.com'
  const baseUrl = 'https://www.iralawoffice.in'

  // 1. Define your main static pages
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/#blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // 2. Generate dynamic pages for each service you offer
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority for SEO
  }))

  // 3. Combine them into one sitemap
  return [...staticRoutes, ...serviceRoutes]
}
