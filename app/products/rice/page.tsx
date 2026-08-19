import type { Metadata } from 'next'
import ProductPage from '@/components/products/ProductPage'

const BASE = 'https://willstonestrategic.com'
const URL  = `${BASE}/products/rice`

export const metadata: Metadata = {
  title: 'Rice Supplier | Bulk Rice Supply Nigeria — Willstone',
  description: 'Willstone Strategic Industries Limited supplies bulk rice in Nigeria for distributors, food businesses, relief organisations, and wholesale buyers. Long grain parboiled and milled rice available. Request a quotation.',
  keywords: ['rice supplier Nigeria','bulk rice Nigeria','wholesale rice Nigeria','parboiled rice supplier Nigeria','rice distributor Nigeria','milled rice Nigeria'],
  alternates: { canonical: URL },
  openGraph: { title: 'Rice Supplier | Willstone Nigeria', description: 'Bulk rice supply in Nigeria for distributors, food businesses, and wholesale buyers.', url: URL, siteName: 'Willstone Strategic Industries Limited', images: [{ url: `${BASE}/assets/images/agric-banner.avif`, width: 1200, height: 630, alt: 'Bulk rice supplied by Willstone Strategic Industries Limited' }], locale: 'en_NG', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Rice Supplier | Willstone Nigeria', description: 'Bulk rice supply in Nigeria for distributors and wholesale buyers.', images: [`${BASE}/assets/images/agric-banner.avif`] },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Product', '@id': `${URL}#product`,
  'name': 'Rice', 'description': 'Bulk parboiled and milled rice sourced and supplied by Willstone Strategic Industries Limited, Nigeria.',
  'image': `${BASE}/assets/images/agric-banner.avif`,
  'brand': { '@type': 'Brand', 'name': 'Willstone Strategic Industries Limited' },
  'offers': { '@type': 'Offer', 'seller': { '@id': `${BASE}/#organization` }, 'availability': 'https://schema.org/InStock', 'areaServed': 'NG', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'NGN', 'description': 'Price on request' } },
  'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
    { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `${BASE}/products` },
    { '@type': 'ListItem', 'position': 3, 'name': 'Rice', 'item': URL },
  ]},
}

export default function RicePage() {
  return (
    <ProductPage
      breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }, { name: 'Rice', href: '/products/rice' }]}
      hero={{ tag: 'AGRICULTURAL COMMODITIES', h1: 'Bulk Rice Supplier — Nigeria', lead: 'Willstone supplies locally produced and milled parboiled rice in bulk to distributors, food businesses, retail packagers, and institutional buyers across Nigeria.', img: '/assets/images/agric-banner.avif', imgAlt: 'Bulk rice supplied by Willstone Strategic Industries Limited Nigeria' }}
      overview="Rice is Nigeria's most widely consumed staple grain, produced across states including Kebbi, Niger, Anambra, Cross River, and Ebonyi. Locally produced parboiled rice and milled white rice are in strong domestic demand year-round. Willstone sources and supplies locally produced rice to domestic buyers including distributors, food businesses, institutions, and retail packagers."
      supplyRole="Willstone is a domestic rice procurement and supply partner in Nigeria. We source from verified local mills and aggregators, arrange quality inspection, and handle logistics for bulk domestic supply. Our primary rice supply activity is currently domestic — international enquiries are welcome but subject to availability."
      specs={[
        { label: 'Available types', value: 'Parboiled long grain / Milled white rice' },
        { label: 'Moisture', value: '≤ 14%' },
        { label: 'Broken grains', value: '≤ 5% (premium grade)' },
        { label: 'Foreign matter', value: 'Nil' },
        { label: 'Packaging', value: '25kg / 50kg bags' },
        { label: 'Min. order', value: 'By enquiry' },
        { label: 'Supply coverage', value: 'Domestic Nigeria (export on enquiry)' },
      ]}
      buyers={['Rice distributors','Food businesses and canteens','Retail packagers','Institutional buyers (schools, hospitals, relief organisations)','Wholesale traders']}
      supplyInfo="Rice is available for domestic bulk supply in 25kg and 50kg bags. Buyers should specify the grade (parboiled or milled white), quantity, and delivery location when requesting a quotation. Minimum quantities apply."
      faqs={[
        { q: 'Does Willstone supply rice in bulk?', a: 'Yes. We supply parboiled and milled white rice in bulk quantities to domestic buyers. Contact us with your quantity and preferred grade.' },
        { q: 'Is Nigerian locally produced rice available?', a: 'Yes. We source from local mills producing rice for the domestic Nigerian market.' },
        { q: 'Can rice be exported?', a: 'Our primary rice supply is domestic. International export enquiries are considered on a case-by-case basis depending on availability.' },
      ]}
      related={[
        { name: 'Maize', href: '/products/maize', img: '/assets/images/Maize.jpg' },
        { name: 'Cassava', href: '/products/cassava', img: '/assets/images/cassava.jpg' },
        { name: 'Soybeans', href: '/products/soybeans', img: '/assets/images/soybeans.jpg' },
        { name: 'Sesame Seeds', href: '/products/sesame-seeds', img: '/assets/images/sesame.webp' },
      ]}
      jsonLd={jsonLd}
    />
  )
}
