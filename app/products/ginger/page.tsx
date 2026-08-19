import type { Metadata } from 'next'
import ProductPage from '@/components/products/ProductPage'

const BASE = 'https://willstonestrategic.com'
const URL  = `${BASE}/products/ginger`

export const metadata: Metadata = {
  title: 'Ginger Supplier & Exporter | Bulk Dried Ginger Nigeria — Willstone',
  description: 'Willstone Strategic Industries Limited supplies and exports bulk dried ginger from Nigeria. We serve international buyers, spice manufacturers, food processors, and commodity traders. Request a quotation for wholesale ginger supply.',
  keywords: ['ginger supplier Nigeria','dried ginger exporter Nigeria','bulk ginger supplier','ginger export Nigeria','wholesale ginger Nigeria','ginger supplier international buyers'],
  alternates: { canonical: URL },
  openGraph: { title: 'Ginger Supplier & Exporter | Willstone Nigeria', description: 'Bulk dried ginger supply and export from Nigeria for international buyers and food processors.', url: URL, siteName: 'Willstone Strategic Industries Limited', images: [{ url: `${BASE}/assets/images/ginger.jpg`, width: 1200, height: 630, alt: 'Bulk dried ginger supplied by Willstone Strategic Industries Limited' }], locale: 'en_NG', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Ginger Supplier & Exporter | Willstone Nigeria', description: 'Bulk dried ginger supply and export from Nigeria.', images: [`${BASE}/assets/images/ginger.jpg`] },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  '@id': `${URL}#product`,
  'name': 'Dried Ginger',
  'description': 'Bulk dried ginger sourced and exported by Willstone Strategic Industries Limited from Nigeria.',
  'image': `${BASE}/assets/images/ginger.jpg`,
  'brand': { '@type': 'Brand', 'name': 'Willstone Strategic Industries Limited' },
  'offers': { '@type': 'Offer', 'seller': { '@id': `${BASE}/#organization` }, 'availability': 'https://schema.org/InStock', 'areaServed': 'GLOBAL', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'USD', 'description': 'Price on request' } },
  'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
    { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `${BASE}/products` },
    { '@type': 'ListItem', 'position': 3, 'name': 'Ginger', 'item': URL },
  ]},
}

export default function GingerPage() {
  return (
    <ProductPage
      breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }, { name: 'Ginger', href: '/products/ginger' }]}
      hero={{ tag: 'AGRICULTURAL COMMODITIES', h1: 'Bulk Ginger Supplier & Exporter — Nigeria', lead: 'Willstone supplies high-quality dried ginger in bulk to spice manufacturers, food processors, pharmaceutical companies, and international commodity buyers.', img: '/assets/images/ginger.jpg', imgAlt: 'Bulk dried ginger supplied by Willstone Strategic Industries Limited' }}
      overview="Nigeria is one of the world's leading producers of ginger, primarily cultivated in Kaduna, Nassarawa, and Benue states. Nigerian ginger is highly regarded for its strong aroma, high oleoresin content, and pungency. It is used extensively in food manufacturing, pharmaceutical processing, beverages, and spice blending. Willstone sources dried split or whole ginger from certified producing regions for bulk supply and export."
      supplyRole="Willstone is a supplier and export facilitator for bulk dried ginger in Nigeria. We source from verified producers, handle cleaning, drying, and grading, and arrange container export for international buyers. We do not grow ginger ourselves — our role is reliable aggregation, quality inspection, and export logistics."
      specs={[
        { label: 'Form', value: 'Dried split / Dried whole' },
        { label: 'Moisture', value: '≤ 10%' },
        { label: 'Foreign matter', value: '≤ 1%' },
        { label: 'Pungency', value: 'High (variety-dependent)' },
        { label: 'Packaging', value: '25kg / 50kg jute or PP bags' },
        { label: 'Min. order', value: 'By enquiry' },
        { label: 'Supply basis', value: 'FOB Lagos / CIF on request' },
      ]}
      buyers={['Spice manufacturers', 'Food & beverage processors', 'Pharmaceutical companies', 'Herbal product manufacturers', 'International commodity traders', 'Wholesale importers']}
      supplyInfo="Dried ginger is available for bulk export in standard container loads. Pre-shipment inspection by an independent third party can be arranged. Buyers are encouraged to specify their moisture tolerance, form (split or whole), and target quantity when requesting a quotation."
      faqs={[
        { q: 'Does Willstone supply ginger in bulk?', a: 'Yes. We supply dried split and dried whole ginger in bulk quantities for domestic distribution and container export.' },
        { q: 'What is the minimum order quantity?', a: 'Minimum order quantities depend on product form and destination. Contact us to discuss your specific requirements.' },
        { q: 'Can international buyers source ginger from Willstone?', a: 'Yes. We regularly supply international buyers. Please provide your target quantity, specification, and destination port for a quotation.' },
      ]}
      related={[
        { name: 'Turmeric', href: '/products/turmeric', img: '/assets/images/agric-banner.avif' },
        { name: 'Sesame Seeds', href: '/products/sesame-seeds', img: '/assets/images/sesame.webp' },
        { name: 'Cocoa', href: '/products/cocoa', img: '/assets/images/cocoawebp.webp' },
        { name: 'Cassava', href: '/products/cassava', img: '/assets/images/cassava.jpg' },
      ]}
      jsonLd={jsonLd}
    />
  )
}
