import type { Metadata } from 'next'
import ITPageClient from './ITPageClient'

const BASE = 'https://willstonestrategic.com'

export const metadata: Metadata = {
  title: 'IT & Software Development | Custom Software, ERP & Digital Transformation — Willstone',
  description: 'Willstone Strategic Industries Limited delivers custom software development, ERP systems, IT consultancy, and digital transformation services for businesses across Nigeria. Reliable technology partner for modern organisations.',
  keywords: [
    'software development Nigeria', 'custom software Nigeria',
    'IT consultancy Nigeria', 'ERP systems Nigeria',
    'digital transformation Nigeria', 'web application development Nigeria',
    'IT solutions Ibadan', 'Willstone software development',
    'enterprise software Nigeria', 'technology partner Nigeria',
  ],
  alternates: { canonical: `${BASE}/services/information-technology` },
  openGraph: {
    title: 'IT & Software Development | Willstone Strategic Industries Limited',
    description: 'Custom software, ERP systems, IT consultancy, and digital transformation services for businesses across Nigeria.',
    url: `${BASE}/services/information-technology`,
    siteName: 'Willstone Strategic Industries Limited',
    images: [{ url: `${BASE}/assets/images/software-engineers.jpg`, width: 1200, height: 630, alt: 'Willstone IT & Software Development' }],
    locale: 'en_NG', type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT & Software Development | Willstone Strategic Industries Limited',
    description: 'Custom software, ERP systems, and digital transformation for businesses in Nigeria.',
    images: [`${BASE}/assets/images/software-engineers.jpg`],
  },
}

export default function ITPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${BASE}/services/information-technology#service`,
            'name': 'Information Technology & Software Development',
            'description': 'Custom software development, ERP systems, IT consultancy, and digital transformation services for businesses across Nigeria.',
            'provider': { '@id': `${BASE}/#organization` },
            'url': `${BASE}/services/information-technology`,
            'areaServed': { '@type': 'Country', 'name': 'Nigeria' },
            'serviceType': 'Software Development & IT Consultancy',
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${BASE}/services` },
                { '@type': 'ListItem', 'position': 3, 'name': 'Information Technology & Software Development', 'item': `${BASE}/services/information-technology` },
              ],
            },
          }),
        }}
      />
      <ITPageClient />
    </>
  )
}
