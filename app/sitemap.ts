import type { MetadataRoute } from 'next'

const BASE = 'https://willstonestrategic.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static core pages
  const core: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,        lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/about`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/products`,lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
  ]

  // Service pages
  const services: MetadataRoute.Sitemap = [
    'agriculture-agribusiness',
    'information-technology',
    'electrical-electronic',
    'defence-security',
  ].map(slug => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Agricultural commodity product pages
  const products: MetadataRoute.Sitemap = [
    'charcoal',
    'sesame-seeds',
    'ginger',
    'turmeric',
    'cocoa',
    'cassava',
    'maize',
    'rice',
    'soybeans',
    'palm-oil',
  ].map(slug => ({
    url: `${BASE}/products/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Other product category pages
  const productCategories: MetadataRoute.Sitemap = [
    'agri-inputs',
    'power-systems',
  ].map(slug => ({
    url: `${BASE}/products/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Legal pages
  const legal: MetadataRoute.Sitemap = [
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE}/terms-of-use`,   lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  return [...core, ...services, ...products, ...productCategories, ...legal]
}
