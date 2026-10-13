import type { Metadata } from 'next'
import ProductPage from '@/components/products/ProductPage'

const BASE = 'https://willstonestrategic.com'
const URL  = `${BASE}/products/soybeans`

export const metadata: Metadata = {
  title: 'Soybean Supplier & Exporter | Bulk Soybeans Nigeria — Willstone',
  description: 'Willstone Strategic Industries Limited supplies bulk soybeans from Nigeria for animal feed producers, soy oil processors, food manufacturers, and international buyers. Request a wholesale soybean quotation today.',
  keywords: ['soybean supplier Nigeria','soybean exporter Nigeria','bulk soybeans Nigeria','soy supplier Nigeria','wholesale soybeans Nigeria','soybean supply international buyers'],
  alternates: { canonical: URL },
  openGraph: { title: 'Soybean Supplier & Exporter | Willstone Nigeria', description: 'Bulk soybean supply from Nigeria for animal feed, oil processing, and international buyers.', url: URL, siteName: 'Willstone Strategic Industries Limited', images: [{ url: `${BASE}/assets/images/soybeans.jpg`, width: 1200, height: 630, alt: 'Bulk soybeans supplied by Willstone Strategic Industries Limited' }], locale: 'en_NG', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Soybean Supplier & Exporter | Willstone Nigeria', description: 'Bulk soybeans supply from Nigeria.', images: [`${BASE}/assets/images/soybeans.jpg`] },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Product', '@id': `${URL}#product`,
  'name': 'Soybeans', 'description': 'Bulk soybeans sourced and supplied by Willstone Strategic Industries Limited, Nigeria.',
  'image': `${BASE}/assets/images/soybeans.jpg`,
  'brand': { '@type': 'Brand', 'name': 'Willstone Strategic Industries Limited' },
  'offers': { '@type': 'Offer', 'seller': { '@id': `${BASE}/#organization` }, 'availability': 'https://schema.org/InStock', 'areaServed': 'GLOBAL', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'USD', 'description': 'Price on request' } },
  'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
    { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `${BASE}/products` },
    { '@type': 'ListItem', 'position': 3, 'name': 'Soybeans', 'item': URL },
  ]},
}

export default function SoybeansPage() {
  return (
    <ProductPage
      breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }, { name: 'Soybeans', href: '/products/soybeans' }]}
      hero={{ tag: 'AGRICULTURAL COMMODITIES', h1: 'Bulk Soybean Supplier — Nigeria', lead: 'Willstone supplies high-protein soybeans in bulk to animal feed manufacturers, soy oil processors, food producers, and international commodity buyers.', img: '/assets/images/soybeans.jpg', imgAlt: 'Bulk soybeans supplied by Willstone Strategic Industries Limited Nigeria' }}
      overview="Soybeans are one of Nigeria's most important oilseeds, widely grown across the Middle Belt states including Benue, Kogi, Niger, and Nasarawa. Nigerian soybeans are valued for their high protein and oil content. They are used extensively in animal feed formulation, soybean oil extraction, soy flour production, and food manufacturing. Willstone aggregates and supplies soybeans from established growing regions."
      supplyRole="Willstone is a bulk soybean supplier, aggregator, and procurement partner in Nigeria. We source from trusted farmer groups and buying agents, oversee drying and cleaning, and prepare consignments for domestic distribution or container export. We do not operate a processing facility — our strength is reliable sourcing and quality assurance."
      specs={[
        { label: 'Moisture', value: '≤ 13%' },
        { label: 'Protein content', value: '38–42% (dry basis, typical)' },
        { label: 'Oil content', value: '18–22% (dry basis, typical)' },
        { label: 'Foreign matter', value: '≤ 1%' },
        { label: 'Damaged / discoloured beans', value: '≤ 2%' },
        { label: 'Packaging', value: '50kg or 100kg bags / bulk' },
        { label: 'Min. order', value: 'By enquiry' },
        { label: 'Supply basis', value: 'EXW / FOB Lagos' },
      ]}
      buyers={['Animal feed manufacturers', 'Soybean oil processors', 'Poultry and livestock farms', 'Food manufacturers (tofu, soy milk)', 'Commodity traders', 'International importers']}
      supplyInfo="Soybeans are available for bulk domestic and export supply throughout and immediately after the harvest season (October–December). Third-party inspection for protein, moisture, and foreign matter can be arranged. Buyers should confirm target specifications, quantity, and delivery terms when requesting a quotation."
      faqs={[
        { q: 'Does Willstone supply soybeans in bulk?', a: 'Yes. We supply bulk soybeans to feed mills, oil processors, and export buyers in container and truckload quantities.' },
        { q: 'Can international buyers source soybeans from Willstone?', a: 'Yes. We work with international buyers and can arrange container shipments from Nigerian ports.' },
        { q: 'What protein level is typical?', a: 'Nigerian soybeans typically show 38–42% crude protein on a dry basis. Exact values depend on the growing season and variety. Testing can be arranged.' },
      ]}
      related={[
        { name: 'Maize', href: '/products/maize', img: '/assets/images/Maize.jpg' },
        { name: 'Sesame Seeds', href: '/products/sesame-seeds', img: '/assets/images/sesame.webp' },
        { name: 'Palm Oil', href: '/products/palm-oil', img: '/assets/images/palm-oil-main.png' },
        { name: 'Cassava', href: '/products/cassava', img: '/assets/images/cassava.jpg' },
      ]}
      jsonLd={jsonLd}
    />
  )
}
