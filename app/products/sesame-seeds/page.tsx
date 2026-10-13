import type { Metadata } from 'next'
import ProductPage from '@/components/products/ProductPage'

const BASE = 'https://willstonestrategic.com'
const URL  = `${BASE}/products/sesame-seeds`

export const metadata: Metadata = {
  title: 'Sesame Seed Supplier & Exporter | Bulk Sesame Seeds Nigeria — Willstone',
  description: 'Willstone Strategic Industries Limited is a bulk sesame seed supplier and exporter in Nigeria. We supply high-quality white and mixed sesame seeds to international buyers, food manufacturers, and commodity traders. Request a quotation.',
  keywords: ['sesame seed supplier Nigeria','sesame seed exporter Nigeria','bulk sesame seeds Nigeria','wholesale sesame seeds','sesame supplier international buyers','sesame export Nigeria'],
  alternates: { canonical: URL },
  openGraph: { title: 'Sesame Seed Supplier & Exporter | Willstone Nigeria', description: 'Bulk sesame seed supply and export from Nigeria. Available for wholesale and international buyers.', url: URL, siteName: 'Willstone Strategic Industries Limited', images: [{ url: `${BASE}/assets/images/sesame.webp`, width: 1200, height: 630, alt: 'Bulk sesame seeds supplied by Willstone Strategic Industries Limited' }], locale: 'en_NG', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Sesame Seed Supplier & Exporter | Willstone Nigeria', description: 'Bulk sesame seed supply and export from Nigeria.', images: [`${BASE}/assets/images/sesame.webp`] },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  '@id': `${URL}#product`,
  'name': 'Sesame Seeds',
  'description': 'High-quality bulk sesame seeds sourced and exported by Willstone Strategic Industries Limited, Nigeria.',
  'image': `${BASE}/assets/images/sesame.webp`,
  'brand': { '@type': 'Brand', 'name': 'Willstone Strategic Industries Limited' },
  'offers': { '@type': 'Offer', 'seller': { '@id': `${BASE}/#organization` }, 'availability': 'https://schema.org/InStock', 'areaServed': 'GLOBAL', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'USD', 'description': 'Price on request' } },
  'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
    { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `${BASE}/products` },
    { '@type': 'ListItem', 'position': 3, 'name': 'Sesame Seeds', 'item': URL },
  ]},
}

export default function SesamePage() {
  return (
    <ProductPage
      breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }, { name: 'Sesame Seeds', href: '/products/sesame-seeds' }]}
      hero={{ tag: 'AGRICULTURAL COMMODITIES', h1: 'Bulk Sesame Seed Supplier & Exporter — Nigeria', lead: 'Willstone supplies premium quality white and mixed sesame seeds in bulk to food manufacturers, commodity traders, and international importers worldwide.', img: '/assets/images/sesame.webp', imgAlt: 'Bulk sesame seeds supplied by Willstone Strategic Industries Limited Nigeria' }}
      overview="Sesame seeds (Sesamum indicum) are one of Nigeria's most valuable agricultural export commodities. Nigerian sesame is prized internationally for its high oil content, clean flavour profile, and strong germination rate. It is widely used in food manufacturing, oil extraction, bakery, and confectionery applications. Willstone sources sesame seeds from trusted farmers and aggregators across Nigeria's major sesame-growing states."
      supplyRole="Willstone is a supplier, aggregator, and export facilitator for bulk sesame seeds in Nigeria. We procure sesame from verified farmers, conduct cleaning and grading to international specifications, and arrange bulk container shipments for export. We work with importers, traders, and food manufacturers seeking a reliable Nigerian sesame seed supply partner."
      specs={[
        { label: 'Variety', value: 'White / Natural / Mixed' },
        { label: 'Purity', value: '99% min' },
        { label: 'Moisture', value: '≤ 6%' },
        { label: 'Oil content', value: '50–55%' },
        { label: 'Foreign matter', value: '≤ 0.5%' },
        { label: 'Packaging', value: '25kg / 50kg PP bags or as requested' },
        { label: 'Min. order', value: 'By enquiry (container loads available)' },
        { label: 'Supply basis', value: 'FOB Lagos / CIF on request' },
      ]}
      buyers={['International food manufacturers','Commodity traders and brokers','Sesame oil processors','Bakery and confectionery producers','Wholesale importers','Distributors in Asia, Europe & Middle East']}
      supplyInfo="Sesame seeds are available for bulk export in 20ft and 40ft container loads. We supply cleaned, graded, and bagged sesame to buyer specifications. SGS or equivalent third-party inspection can be arranged prior to loading. Buyers should provide target quantity, grade preference, destination port, and required documentation when requesting a quotation."
      faqs={[
        { q: 'Does Willstone supply sesame seeds in bulk?', a: 'Yes. We supply sesame seeds in bulk quantities suitable for container export, with standard packaging in 25kg or 50kg polypropylene bags.' },
        { q: 'What sesame grades are available?', a: 'We primarily supply natural white sesame and mixed sesame. Specific purity and grade requirements can be discussed during enquiry.' },
        { q: 'Can international buyers request a quotation?', a: 'Yes. Contact us with your target quantity, destination port, and grade requirements and we will provide a competitive quotation.' },
        { q: 'Is third-party inspection available?', a: 'Yes. We can facilitate SGS or equivalent third-party pre-shipment inspection on request.' },
      ]}
      related={[
        { name: 'Soybeans', href: '/products/soybeans', img: '/assets/images/soybeans.jpg' },
        { name: 'Maize', href: '/products/maize', img: '/assets/images/Maize.jpg' },
        { name: 'Cocoa', href: '/products/cocoa', img: '/assets/images/cocoawebp.webp' },
        { name: 'Palm Oil', href: '/products/palm-oil', img: '/assets/images/palm-oil-main.png' },
      ]}
      jsonLd={jsonLd}
    />
  )
}
