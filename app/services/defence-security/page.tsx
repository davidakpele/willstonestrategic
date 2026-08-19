import type { Metadata } from 'next'
import DefencePageClient from './DefencePageClient'

const BASE = 'https://willstonestrategic.com'

export const metadata: Metadata = {
  title: 'Defence, Security & Protective Solutions | Surveillance & Asset Protection — Willstone',
  description: 'Willstone Strategic Industries Limited delivers integrated security systems, surveillance, threat assessment, access control, and protective equipment for critical infrastructure and organisations across Nigeria.',
  keywords: [
    'defence security Nigeria', 'security systems Nigeria',
    'surveillance systems Nigeria', 'asset protection Nigeria',
    'threat assessment Nigeria', 'access control Nigeria',
    'protective solutions Nigeria', 'Willstone defence security',
    'security company Nigeria', 'electronic security Nigeria',
  ],
  alternates: { canonical: `${BASE}/services/defence-security` },
  openGraph: {
    title: 'Defence, Security & Protective Solutions | Willstone Strategic Industries Limited',
    description: 'Integrated surveillance, threat assessment, and asset protection solutions for critical infrastructure and organisations across Nigeria.',
    url: `${BASE}/services/defence-security`,
    siteName: 'Willstone Strategic Industries Limited',
    images: [{ url: `${BASE}/assets/images/drone.jpg`, width: 1200, height: 630, alt: 'Willstone Defence & Security Solutions' }],
    locale: 'en_NG', type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Defence, Security & Protective Solutions | Willstone Strategic Industries Limited',
    description: 'Integrated surveillance, threat assessment, and protective solutions across Nigeria.',
    images: [`${BASE}/assets/images/drone.jpg`],
  },
}

export default function DefencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${BASE}/services/defence-security#service`,
            'name': 'Defence, Security & Protective Solutions',
            'description': 'Integrated surveillance systems, threat assessment, access control, and protective equipment for critical infrastructure, organisations, and high-value assets.',
            'provider': { '@id': `${BASE}/#organization` },
            'url': `${BASE}/services/defence-security`,
            'areaServed': { '@type': 'Country', 'name': 'Nigeria' },
            'serviceType': 'Security & Defence Solutions',
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
                { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${BASE}/services` },
                { '@type': 'ListItem', 'position': 3, 'name': 'Defence, Security & Protective Solutions', 'item': `${BASE}/services/defence-security` },
              ],
            },
          }),
        }}
      />
      <DefencePageClient />
    </>
  )
}
