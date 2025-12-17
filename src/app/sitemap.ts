import { MetadataRoute } from 'next';
import { services } from '@/lib/services-data'; // Import your services

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Change this to your new domain if you bought one, e.g., 'https://www.iralexterra.com'
  const baseUrl = 'https://www.iralawoffice.in'; 

  // 1. Static Routes (Main Pages)
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
  ];

  // 2. Dynamic Service Routes (Automatically adds Civil Law, Criminal Law, etc.)
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority because these are your main offering pages
  }));

  return [...staticRoutes, ...serviceRoutes];
}
