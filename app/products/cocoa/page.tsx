import type { Metadata } from 'next'
import ProductPage from '@/components/products/ProductPage'

const BASE = 'https://willstonestrategic.com'
const URL  = `${BASE}/products/cocoa`

export const metadata: Metadata = {
  title: 'Cocoa Supplier & Exporter | Bulk Cocoa Beans Nigeria — Willstone',
  description: 'Willstone Strategic Industries Limited is a bulk cocoa beans supplier and exporter in Nigeria. We supply grade 1 and grade 2 cocoa beans to chocolate manufacturers, commodity traders, and international buyers. Request a quotation.',
  keywords: ['cocoa supplier Nigeria','cocoa exporter Nigeria','cocoa beans supplier Nigeria','bulk cocoa Nigeria','wholesale cocoa Nigeria','cocoa export supplier Nigeria'],
  alternates: { canonical: URL },
  openGraph: { title: 'Cocoa Supplier & Exporter | Willstone Nigeria', description: 'Bulk cocoa beans supply and export from Nigeria. Grade 1 and Grade 2 available for international buyers.', url: URL, siteName: 'Willstone Strategic Industries Limited', images: [{ url: `${BASE}/assets/images/cocoawebp.webp`, width: 1200, height: 630, alt: 'Bulk cocoa beans supplied by Willstone Strategic Industries Limited' }], locale: 'en_NG', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Cocoa Supplier & Exporter | Willstone Nigeria', description: 'Bulk cocoa beans supply and export from Nigeria.', images: [`${BASE}/assets/images/cocoawebp.webp`] },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  '@id': `${URL}#product`,
  'name': 'Cocoa Beans',
  'description': 'Bulk cocoa beans — Grade 1 and Grade 2 — sourced and exported by Willstone Strategic Industries Limited, Nigeria.',
  'image': `${BASE}/assets/images/cocoawebp.webp`,
  'brand': { '@type': 'Brand', 'name': 'Willstone Strategic Industries Limited' },
  'offers': { '@type': 'Offer', 'seller': { '@id': `${BASE}/#organization` }, 'availability': 'https://schema.org/InStock', 'areaServed': 'GLOBAL', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'USD', 'description': 'Price on request' } },
  'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
    { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `${BASE}/products` },
    { '@type': 'ListItem', 'position': 3, 'name': 'Cocoa', 'item': URL },
  ]},
}

export default function CocoaPage() {
  return (
    <ProductPage
      breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }, { name: 'Cocoa', href: '/products/cocoa' }]}
      hero={{ tag: 'AGRICULTURAL COMMODITIES', h1: 'Bulk Cocoa Beans Supplier & Exporter — Nigeria', lead: 'Willstone supplies Grade 1 and Grade 2 Nigerian cocoa beans in bulk to chocolate manufacturers, cocoa processors, commodity traders, and international importers.', img: '/assets/images/cocoawebp.webp', imgAlt: 'Bulk cocoa beans supplied by Willstone Strategic Industries Limited Nigeria' }}
      overview="Nigeria is Africa's fourth-largest cocoa producer. Nigerian cocoa beans are highly regarded for their distinctive flavour profile. Cocoa is used in chocolate manufacturing, confectionery, cosmetics, and pharmaceutical products. Willstone sources cocoa beans from established producing regions including Ondo, Osun, Ogun, and Cross River states, ensuring consistent quality and supply."
      supplyRole="Willstone is a supplier and export facilitator for bulk cocoa beans in Nigeria. We procure from verified farmers and licensed buying agents, arrange quality grading, bagging, and warehousing, and facilitate container shipments for international buyers. We work with importers and chocolate manufacturers seeking a dependable Nigerian cocoa supply partner."
      specs={[
        { label: 'Grade', value: 'Grade 1 / Grade 2' },
        { label: 'Bean count', value: 'Grade 1: ≤ 100 beans/100g' },
        { label: 'Moisture', value: '≤ 7.5%' },
        { label: 'Defective beans', value: 'Grade 1: ≤ 5%' },
        { label: 'Foreign matter', value: 'Nil' },
        { label: 'Packaging', value: '60kg or 65kg jute bags' },
        { label: 'Min. order', value: 'By enquiry (container loads)' },
        { label: 'Supply basis', value: 'FOB Lagos' },
      ]}
      buyers={['Chocolate manufacturers', 'Cocoa processors', 'Confectionery producers', 'Commodity traders & brokers', 'International importers in Europe, Asia & Americas']}
      supplyInfo="Cocoa beans are available for bulk export in 20ft and 40ft containers. Standard Nigerian Export Cocoa Beans (NECB) grading applies. Pre-shipment inspection by SGS or equivalent can be arranged. Buyers should specify grade, quantity, destination port, and required documentation."
      faqs={[
        { q: 'Does Willstone supply cocoa beans in bulk?', a: 'Yes. We supply Grade 1 and Grade 2 cocoa beans in container loads for international export.' },
        { q: 'What documentation is provided with cocoa shipments?', a: 'Standard export documentation includes phytosanitary certificate, certificate of origin, weight certificate, and quality inspection report.' },
        { q: 'What is the minimum order quantity for cocoa?', a: 'We typically deal in container loads. Contact us to discuss your specific requirements.' },
        { q: 'Can you supply to chocolate manufacturers directly?', a: 'Yes. We work with chocolate manufacturers and cocoa processors as a direct supply partner.' },
      ]}
      related={[
        { name: 'Palm Oil', href: '/products/palm-oil', img: '/assets/images/palm-oil-main.png' },
        { name: 'Sesame Seeds', href: '/products/sesame-seeds', img: '/assets/images/sesame.webp' },
        { name: 'Soybeans', href: '/products/soybeans', img: '/assets/images/soybeans.jpg' },
        { name: 'Maize', href: '/products/maize', img: '/assets/images/Maize.jpg' },
      ]}
      jsonLd={jsonLd}
    />
  )
}
