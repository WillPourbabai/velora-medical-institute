import type { MetadataRoute } from 'next'

const BASE = 'https://veloramedical.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/weight-management',
    '/hormone-therapy',
    '/programs',
    '/physicians',
    '/about',
    '/faq',
    '/book',
    '/intake',
    '/contact',
    '/legal/privacy',
    '/legal/hipaa',
    '/legal/terms',
  ]
  const now = new Date()
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/legal') ? 0.3 : 0.8,
  }))
}
