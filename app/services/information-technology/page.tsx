import { Space_Grotesk, Inter } from 'next/font/google'
import type { Metadata } from 'next'
import '../../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ITPageClient from './ITPageClient'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

const BASE = 'https://willstonestrategic.com'

export const metadata: Metadata = {
  title: 'Information Technology & Software Development | IT Solutions Nigeria — Willstone',
  description: 'Willstone Strategic Industries Limited delivers custom software development, cloud solutions, system integration, cybersecurity, ERP implementation, and IT consultancy for businesses across Nigeria and West Africa.',
  keywords: [
    'software development Nigeria', 'IT company Nigeria',
    'custom software Nigeria', 'IT consultancy Ibadan',
    'cloud solutions Nigeria', 'system integration Nigeria',
    'cybersecurity Nigeria', 'ERP implementation Nigeria',
    'digital transformation Nigeria', 'web development Nigeria',
    'mobile app development Nigeria', 'Willstone IT solutions',
    'technology company Ibadan', 'software house Nigeria',
  ],
  alternates: { canonical: `${BASE}/services/information-technology` },
  openGraph: {
    title: 'Information Technology & Software Development | Willstone Strategic Industries',
    description: 'Custom software, cloud solutions, ERP, cybersecurity, and IT consultancy — built to power businesses across Nigeria and West Africa.',
    url: `${BASE}/services/information-technology`,
    siteName: 'Willstone Strategic Industries Limited',
    images: [{ url: `${BASE}/assets/images/NavItem.png`, width: 1200, height: 630, alt: 'Willstone IT & Software Development Solutions' }],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT & Software Development | Willstone Strategic Industries',
    description: 'Custom software, cloud solutions, ERP, cybersecurity, and IT consultancy across Nigeria.',
    images: [`${BASE}/assets/images/NavItem.png`],
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
            'description': 'Custom software development, cloud solutions, system integration, cybersecurity, ERP implementation, and IT consultancy for businesses across Nigeria.',
            'provider': { '@id': `${BASE}/#organization` },
            'url': `${BASE}/services/information-technology`,
            'areaServed': [
              { '@type': 'Country', 'name': 'Nigeria' },
              { '@type': 'Place', 'name': 'West Africa' },
            ],
            'serviceType': 'Information Technology & Software Development',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'IT Services',
              'itemListElement': [
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Custom Software Development' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Cloud Solutions & Migration' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'ERP Implementation' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Cybersecurity Solutions' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'System Integration' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'IT Consultancy' } },
              ],
            },
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${BASE}/services` },
                { '@type': 'ListItem', 'position': 3, 'name': 'Information Technology', 'item': `${BASE}/services/information-technology` },
              ],
            },
          }),
        }}
      />
      <div className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <SiteHeader variant="transparent" />
        <ITPageClient />
        <SiteFooter />
      </div>
    </>
  )
}
