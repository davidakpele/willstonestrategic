import type { Metadata } from 'next'
import ProductPage from '@/components/products/ProductPage'

const BASE = 'https://willstonestrategic.com'
const SLUG = 'charcoal'
const URL  = `${BASE}/products/${SLUG}`

export const metadata: Metadata = {
  title: 'Charcoal Supplier & Exporter | Bulk Hardwood Charcoal — Willstone Nigeria',
  description: 'Willstone Strategic Industries Limited is a reliable charcoal supplier and exporter in Nigeria. We supply bulk hardwood charcoal for restaurants, distributors, wholesalers, and international buyers. Request a quotation today.',
  keywords: ['charcoal supplier Nigeria','charcoal exporter Nigeria','bulk charcoal supplier','hardwood charcoal Nigeria','wholesale charcoal Nigeria','charcoal export Nigeria'],
  alternates: { canonical: URL },
  openGraph: { title: 'Charcoal Supplier & Exporter | Willstone Nigeria', description: 'Bulk hardwood charcoal supplier and exporter in Nigeria. Available for wholesale and international buyers.', url: URL, siteName: 'Willstone Strategic Industries Limited', images: [{ url: `${BASE}/assets/images/charcoal.jpg`, width: 1200, height: 630, alt: 'Bulk hardwood charcoal supplied by Willstone Strategic Industries Limited' }], locale: 'en_NG', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Charcoal Supplier & Exporter | Willstone Nigeria', description: 'Bulk hardwood charcoal supply and export from Nigeria.', images: [`${BASE}/assets/images/charcoal.jpg`] },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  '@id': `${URL}#product`,
  'name': 'Hardwood Charcoal',
  'description': 'Premium quality hardwood charcoal sourced and supplied in bulk by Willstone Strategic Industries Limited, Nigeria.',
  'image': `${BASE}/assets/images/charcoal.jpg`,
  'brand': { '@type': 'Brand', 'name': 'Willstone Strategic Industries Limited' },
  'offers': { '@type': 'Offer', 'seller': { '@id': `${BASE}/#organization` }, 'availability': 'https://schema.org/InStock', 'areaServed': 'GLOBAL', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'USD', 'description': 'Price on request — contact for bulk quotation' } },
  'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
    { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `${BASE}/products` },
    { '@type': 'ListItem', 'position': 3, 'name': 'Charcoal', 'item': URL },
  ]},
}

export default function CharcoalPage() {
  return (
    <ProductPage
      breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }, { name: 'Charcoal', href: '/products/charcoal' }]}
      hero={{ tag: 'AGRICULTURAL COMMODITIES', h1: 'Bulk Hardwood Charcoal Supplier & Exporter', lead: 'Willstone supplies premium quality hardwood charcoal in bulk to wholesalers, distributors, restaurants, and international buyers across Nigeria and beyond.', img: '/assets/images/charcoal.jpg', imgAlt: 'Bulk hardwood charcoal supplied by Willstone Strategic Industries Limited' }}
      overview="Hardwood charcoal is produced from the controlled carbonisation of dense hardwood timber. It burns hotter, longer, and cleaner than softwood charcoal, producing minimal ash and a consistent heat output. Willstone sources and supplies premium grade hardwood charcoal suitable for barbecue, restaurant, industrial, and export applications."
      supplyRole="Willstone acts as a supplier, aggregator, and export facilitator for bulk hardwood charcoal in Nigeria. We consolidate supply from verified producers, inspect quality prior to dispatch, and prepare shipments for domestic distribution or international export. We do not claim to manufacture the charcoal ourselves — our value is in reliable sourcing, quality assurance, and logistics."
      specs={[
        { label: 'Product type', value: 'Hardwood Charcoal' },
        { label: 'Form', value: 'Lump / Briquette (on request)' },
        { label: 'Moisture content', value: '≤ 5%' },
        { label: 'Ash content', value: '≤ 3%' },
        { label: 'Fixed carbon', value: '≥ 80%' },
        { label: 'Packaging', value: '5kg, 10kg, 25kg bags or bulk' },
        { label: 'Min. order', value: 'By enquiry' },
        { label: 'Supply basis', value: 'FOB Lagos / EXW Ibadan' },
      ]}
      buyers={['BBQ restaurants and hospitality businesses','Wholesale distributors','Retail packagers','Industrial users','International importers','Commodity traders']}
      supplyInfo="Charcoal is available for bulk domestic supply and international export. We can prepare container loads (20ft / 40ft) for verified international buyers. All shipments are accompanied by a quality inspection report. Buyers should provide target quantity, packaging preference, and destination port when making an enquiry."
      faqs={[
        { q: 'Does Willstone supply charcoal in bulk?', a: 'Yes. We supply hardwood charcoal in bulk quantities suitable for wholesale distribution and container export.' },
        { q: 'What packaging options are available?', a: 'Standard options include 5kg, 10kg, and 25kg retail bags. Custom bulk packaging can be arranged on request.' },
        { q: 'Can international buyers request a quotation?', a: 'Yes. International buyers are welcome to request a quotation by contacting us with their target quantity, destination port, and packaging requirements.' },
        { q: 'What quality information is provided with each shipment?', a: 'Each bulk consignment is accompanied by a quality inspection report covering moisture content, ash content, and fixed carbon values.' },
      ]}
      related={[
        { name: 'Sesame Seeds', href: '/products/sesame-seeds', img: '/assets/images/sesame.webp' },
        { name: 'Cassava', href: '/products/cassava', img: '/assets/images/cassava.jpg' },
        { name: 'Palm Oil', href: '/products/palm-oil', img: '/assets/images/palm-oil-main.png' },
        { name: 'Soybeans', href: '/products/soybeans', img: '/assets/images/soybeans.jpg' },
      ]}
      jsonLd={jsonLd}
    />
  )
}
