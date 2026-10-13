import type { Metadata } from 'next'
import HomePageClient from './HomePageClient'

const BASE = 'https://willstonestrategic.com'

export const metadata: Metadata = {
  title: 'Willstone Strategic Industries Limited | Supplier, Exporter & Procurement Partner — Nigeria',
  description: 'Willstone Strategic Industries Limited is a diversified Nigerian supplier, exporter, and procurement partner based in Ibadan. We deliver agribusiness, software & IT, electrical engineering, logistics, real estate, energy, and defence solutions across Nigeria and beyond.',
  keywords: [
    'agribusiness Nigeria', 'agricultural commodity supplier Nigeria',
    'sesame seeds supplier Nigeria', 'palm oil exporter Nigeria',
    'cocoa beans Nigeria', 'ginger exporter Nigeria',
    'cassava supplier Nigeria', 'maize supplier Nigeria',
    'software development Nigeria', 'IT company Ibadan',
    'electrical engineering Nigeria', 'logistics Nigeria',
    'import export Nigeria', 'procurement Nigeria',
    'defence security Nigeria', 'energy solutions Nigeria',
    'Willstone Strategic Industries', 'Nigerian supplier exporter',
    'commodity trading Nigeria', 'real estate Nigeria',
  ],
  alternates: { canonical: BASE },
  openGraph: {
    title: 'Willstone Strategic Industries Limited — Building Solutions. Delivering Impact.',
    description: 'Nigeria\'s trusted multi-sector supplier and procurement partner. Agribusiness, IT, electrical engineering, logistics, energy, and defence solutions.',
    url: BASE,
    siteName: 'Willstone Strategic Industries Limited',
    images: [{ url: `${BASE}/assets/images/prime-banner.png`, width: 1200, height: 630, alt: 'Willstone Strategic Industries Limited' }],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Willstone Strategic Industries Limited',
    description: 'Nigeria\'s trusted multi-sector supplier — agribusiness, IT, electrical, logistics, energy & defence.',
    images: [`${BASE}/assets/images/prime-banner.png`],
  },
}

export default function HomePage() {
  return (
    <>
      {/* Homepage-specific JSON-LD: LocalBusiness + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `${BASE}/#localbusiness`,
              'name': 'Willstone Strategic Industries Limited',
              'url': BASE,
              'telephone': '+234-901-938-4496',
              'email': 'willstonestrategic@gmail.com',
              'logo': `${BASE}/assets/images/logo/PNG/Willstone-Logo-FullColor.png`,
              'image': `${BASE}/assets/images/prime-banner.png`,
              'description': 'Diversified Nigerian supplier, exporter, and procurement partner across agribusiness, technology, logistics, engineering, energy, and defence.',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '20 Cambridge House, Onireke Jericho',
                'addressLocality': 'Ibadan',
                'addressRegion': 'Oyo State',
                'addressCountry': 'NG',
              },
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': 7.3998,
                'longitude': 3.8768,
              },
              'openingHours': 'Mo-Fr 08:00-17:00',
              'priceRange': '$$',
              'currenciesAccepted': 'NGN, USD',
              'sameAs': [],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'What does Willstone Strategic Industries Limited do?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Willstone Strategic Industries Limited is a Nigerian multi-sector company that supplies agricultural commodities, delivers software and IT solutions, electrical engineering, logistics, real estate development, energy solutions, and defence/security services.',
                  },
                },
                {
                  '@type': 'Question',
                  'name': 'Where is Willstone Strategic Industries based?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Willstone Strategic Industries Limited is headquartered at 20 Cambridge House, Onireke Jericho, Ibadan, Oyo State, Nigeria.',
                  },
                },
                {
                  '@type': 'Question',
                  'name': 'What agricultural commodities does Willstone supply?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Willstone supplies sesame seeds, palm oil, cocoa beans, ginger, cassava, maize, soybeans, charcoal, haricot beans, sweet potatoes, and other bulk agricultural commodities sourced from Nigeria.',
                  },
                },
                {
                  '@type': 'Question',
                  'name': 'Does Willstone export agricultural commodities?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes. Willstone is an exporter of Nigerian agricultural commodities to markets in Europe, Asia, and the Middle East including sesame seeds, cocoa beans, ginger, charcoal, and palm oil.',
                  },
                },
              ],
            },
          ]),
        }}
      />
      <HomePageClient />
    </>
  )
}
