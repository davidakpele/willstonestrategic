import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

const BASE = 'https://willstonestrategic.com'

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Willstone Strategic Industries Limited',
  description: 'Contact Willstone Strategic Industries Limited in Ibadan, Nigeria. Reach our team for inquiries about agricultural commodity supply, software development, electrical engineering, logistics, energy, or defence solutions. Call, email, or visit us.',
  keywords: [
    'contact Willstone Strategic Industries', 'Willstone Ibadan contact',
    'agricultural commodity supplier contact Nigeria', 'agribusiness enquiry Nigeria',
    'Nigerian supplier contact', 'procurement partner Nigeria contact',
    'Willstone phone number', 'Willstone email address',
  ],
  alternates: { canonical: `${BASE}/contact` },
  openGraph: {
    title: 'Contact Willstone Strategic Industries Limited',
    description: 'Get in touch with our team for inquiries about agribusiness, IT, electrical engineering, logistics, energy, and defence solutions.',
    url: `${BASE}/contact`,
    siteName: 'Willstone Strategic Industries Limited',
    images: [{ url: `${BASE}/assets/images/contact-us-image.png`, width: 1200, height: 630, alt: 'Contact Willstone Strategic Industries Limited' }],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Willstone Strategic Industries Limited',
    description: 'Reach our team for inquiries, partnerships, and procurement requests.',
    images: [`${BASE}/assets/images/contact-us-image.png`],
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            '@id': `${BASE}/contact#page`,
            'url': `${BASE}/contact`,
            'name': 'Contact Willstone Strategic Industries Limited',
            'description': 'Contact page for Willstone Strategic Industries Limited — inquiries, partnerships, support, and sales.',
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
                { '@type': 'ListItem', 'position': 2, 'name': 'Contact', 'item': `${BASE}/contact` },
              ],
            },
            'mainEntity': {
              '@type': 'Organization',
              '@id': `${BASE}/#organization`,
              'name': 'Willstone Strategic Industries Limited',
              'telephone': '+234-901-938-4496',
              'email': 'willstonestrategic@gmail.com',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '20 Cambridge House, Onireke Jericho',
                'addressLocality': 'Ibadan',
                'addressRegion': 'Oyo State',
                'addressCountry': 'NG',
              },
            },
          }),
        }}
      />
      <ContactPageClient />
    </>
  )
}
