import type { Metadata } from 'next'
import ElectricalPageClient from './ElectricalPageClient'

const BASE = 'https://willstonestrategic.com'

export const metadata: Metadata = {
  title: 'Electrical & Electronic Solutions | Power Systems & Engineering — Willstone',
  description: 'Willstone Strategic Industries Limited provides industrial electrical installations, power systems, automation engineering, and electronic solutions for commercial and industrial facilities across Nigeria.',
  keywords: [
    'electrical engineering Nigeria', 'industrial electrical installation Nigeria',
    'power systems Nigeria', 'automation engineering Nigeria',
    'electronic solutions Nigeria', 'electrical contractor Nigeria',
    'electrical electronic Ibadan', 'Willstone electrical solutions',
  ],
  alternates: { canonical: `${BASE}/services/electrical-electronic` },
  openGraph: {
    title: 'Electrical & Electronic Solutions | Willstone Strategic Industries Limited',
    description: 'Industrial electrical systems, power infrastructure, and automation engineering for commercial and industrial clients in Nigeria.',
    url: `${BASE}/services/electrical-electronic`,
    siteName: 'Willstone Strategic Industries Limited',
    images: [{ url: `${BASE}/assets/images/electrical-electronic.jpg`, width: 1200, height: 630, alt: 'Willstone Electrical & Electronic Solutions' }],
    locale: 'en_NG', type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrical & Electronic Solutions | Willstone Strategic Industries Limited',
    description: 'Industrial electrical systems, automation, and power infrastructure across Nigeria.',
    images: [`${BASE}/assets/images/electrical-electronic.jpg`],
  },
}

export default function ElectricalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${BASE}/services/electrical-electronic#service`,
            'name': 'Electrical & Electronic Solutions',
            'description': 'Industrial electrical installations, power systems, automation engineering, and electronic solutions for commercial and industrial facilities.',
            'provider': { '@id': `${BASE}/#organization` },
            'url': `${BASE}/services/electrical-electronic`,
            'areaServed': { '@type': 'Country', 'name': 'Nigeria' },
            'serviceType': 'Electrical Engineering & Electronic Solutions',
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${BASE}/services` },
                { '@type': 'ListItem', 'position': 3, 'name': 'Electrical & Electronic Solutions', 'item': `${BASE}/services/electrical-electronic` },
              ],
            },
          }),
        }}
      />
      <ElectricalPageClient />
    </>
  )
}
