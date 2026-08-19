import type { Metadata } from 'next'
import AgriculturePageClient from './AgriculturePageClient'

const BASE = 'https://willstonestrategic.com'

export const metadata: Metadata = {
  title: 'Agriculture & Agribusiness | Crop Supply, Trading & Agro-Logistics — Willstone',
  description: 'Willstone Strategic Industries Limited provides end-to-end agriculture and agribusiness solutions in Nigeria — crop production, agro-processing, bulk commodity trading, agro-logistics, and agricultural input supply. Reliable supplier and procurement partner.',
  keywords: [
    'agribusiness Nigeria', 'agricultural commodity supplier Nigeria',
    'bulk crop supply Nigeria', 'agro-logistics Nigeria',
    'crop processing Nigeria', 'commodity trading Nigeria',
    'agricultural input supply', 'Willstone agribusiness',
    'sesame seeds supplier Nigeria', 'palm oil supplier Nigeria',
    'cassava supplier Nigeria', 'maize supplier Nigeria',
  ],
  alternates: { canonical: `${BASE}/services/agriculture-agribusiness` },
  openGraph: {
    title: 'Agriculture & Agribusiness | Willstone Strategic Industries Limited',
    description: 'End-to-end agribusiness solutions — crop production, bulk commodity trading, agro-processing, and agro-logistics across Nigeria and West Africa.',
    url: `${BASE}/services/agriculture-agribusiness`,
    siteName: 'Willstone Strategic Industries Limited',
    images: [{ url: `${BASE}/assets/images/agric-banner.avif`, width: 1200, height: 630, alt: 'Willstone Agriculture & Agribusiness' }],
    locale: 'en_NG', type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agriculture & Agribusiness | Willstone Strategic Industries Limited',
    description: 'Bulk commodity trading, agro-logistics, and agricultural input supply across Nigeria and West Africa.',
    images: [`${BASE}/assets/images/agric-banner.avif`],
  },
}

export default function AgriculturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${BASE}/services/agriculture-agribusiness#service`,
            'name': 'Agriculture & Agribusiness',
            'description': 'End-to-end agribusiness solutions including crop production, agro-processing, bulk commodity supply, agro-logistics, and agricultural input supply.',
            'provider': { '@id': `${BASE}/#organization` },
            'url': `${BASE}/services/agriculture-agribusiness`,
            'areaServed': { '@type': 'Country', 'name': 'Nigeria' },
            'serviceType': 'Agribusiness & Agricultural Commodity Supply',
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${BASE}/services` },
                { '@type': 'ListItem', 'position': 3, 'name': 'Agriculture & Agribusiness', 'item': `${BASE}/services/agriculture-agribusiness` },
              ],
            },
          }),
        }}
      />
      <AgriculturePageClient />
    </>
  )
}
