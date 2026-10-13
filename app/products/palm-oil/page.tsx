import type { Metadata } from 'next'
import ProductPage from '@/components/products/ProductPage'

const BASE = 'https://willstonestrategic.com'
const URL  = `${BASE}/products/palm-oil`

export const metadata: Metadata = {
  title: 'Palm Oil Supplier & Exporter | Bulk Crude Palm Oil Nigeria — Willstone',
  description: 'Willstone Strategic Industries Limited is a bulk palm oil supplier in Nigeria. We supply crude palm oil (CPO) and refined palm products to food manufacturers, processors, commodity traders, and international buyers. Request a quotation.',
  keywords: ['palm oil supplier Nigeria','palm oil exporter Nigeria','crude palm oil Nigeria','bulk palm oil Nigeria','CPO supplier Nigeria','wholesale palm oil Nigeria','palm oil export supplier'],
  alternates: { canonical: URL },
  openGraph: { title: 'Palm Oil Supplier & Exporter | Willstone Nigeria', description: 'Bulk crude palm oil supply from Nigeria for food processors, manufacturers, and international buyers.', url: URL, siteName: 'Willstone Strategic Industries Limited', images: [{ url: `${BASE}/assets/images/palm-oil-main.png`, width: 1200, height: 630, alt: 'Bulk palm oil supplied by Willstone Strategic Industries Limited' }], locale: 'en_NG', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Palm Oil Supplier & Exporter | Willstone Nigeria', description: 'Bulk crude palm oil supply from Nigeria.', images: [`${BASE}/assets/images/palm-oil-main.png`] },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Product', '@id': `${URL}#product`,
  'name': 'Palm Oil (Crude Palm Oil)',
  'description': 'Bulk crude palm oil (CPO) sourced and supplied by Willstone Strategic Industries Limited from Nigeria.',
  'image': `${BASE}/assets/images/palm-oil-main.png`,
  'brand': { '@type': 'Brand', 'name': 'Willstone Strategic Industries Limited' },
  'offers': { '@type': 'Offer', 'seller': { '@id': `${BASE}/#organization` }, 'availability': 'https://schema.org/InStock', 'areaServed': 'GLOBAL', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'USD', 'description': 'Price on request' } },
  'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
    { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `${BASE}/products` },
    { '@type': 'ListItem', 'position': 3, 'name': 'Palm Oil', 'item': URL },
  ]},
}

export default function PalmOilPage() {
  return (
    <ProductPage
      breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }, { name: 'Palm Oil', href: '/products/palm-oil' }]}
      hero={{ tag: 'AGRICULTURAL COMMODITIES', h1: 'Bulk Palm Oil Supplier — Nigeria', lead: 'Willstone supplies crude palm oil (CPO) in bulk to food manufacturers, refiners, commodity traders, and international buyers from Nigerian producing regions.', img: '/assets/images/palm-oil-main.png', imgAlt: 'Bulk palm oil supplied by Willstone Strategic Industries Limited Nigeria' }}
      overview="Nigeria is a significant palm oil producer, with key production regions in Cross River, Akwa Ibom, Rivers, Edo, Ondo, and Delta states. Palm oil is one of the world's most consumed edible oils and is used in food manufacturing, cooking, cosmetics, biodiesel, and industrial applications. Willstone sources crude palm oil from mills and licensed buyers in active production zones."
      supplyRole="Willstone is a bulk palm oil procurement and supply partner in Nigeria. We source CPO from verified mills and licensed traders, arrange quality checks for FFA and moisture levels, and coordinate logistics for domestic distribution and export. We do not operate palm oil mills ourselves."
      specs={[
        { label: 'Product', value: 'Crude Palm Oil (CPO)' },
        { label: 'Free Fatty Acid (FFA)', value: '≤ 5% (standard grade)' },
        { label: 'Moisture & impurities', value: '≤ 0.5%' },
        { label: 'Colour', value: 'Yellow to reddish-orange' },
        { label: 'Packaging', value: 'Flexi-tank / IBC / drums (on request)' },
        { label: 'Min. order', value: 'By enquiry' },
        { label: 'Supply basis', value: 'EXW mill / FOB Lagos' },
      ]}
      buyers={['Edible oil refiners', 'Food manufacturers', 'Margarine and shortening producers', 'Biodiesel producers', 'Soap and cosmetics manufacturers', 'Commodity traders and importers']}
      supplyInfo="Crude palm oil is available for bulk domestic supply and international export. Buyers should specify target FFA, moisture tolerance, required packaging, and destination port when requesting a quotation. SGS or equivalent inspection can be arranged at origin."
      faqs={[
        { q: 'Does Willstone supply palm oil in bulk?', a: 'Yes. We supply crude palm oil in bulk volumes. Contact us with your required quantity and specifications for a quotation.' },
        { q: 'What FFA level is typical?', a: 'We typically supply CPO with FFA ≤ 5%. Lower FFA grades can be sourced on request and may be subject to premium pricing.' },
        { q: 'Can palm oil be exported internationally?', a: 'Yes. We can facilitate container or flexi-tank export of palm oil to international buyers. Required documentation including phytosanitary certificate and certificate of origin can be arranged.' },
        { q: 'What packaging is available?', a: 'Palm oil can be packed in flexi-tanks, IBCs, or drums depending on buyer preference and destination requirements.' },
      ]}
      related={[
        { name: 'Soybeans', href: '/products/soybeans', img: '/assets/images/soybeans.jpg' },
        { name: 'Sesame Seeds', href: '/products/sesame-seeds', img: '/assets/images/sesame.webp' },
        { name: 'Cocoa', href: '/products/cocoa', img: '/assets/images/cocoawebp.webp' },
        { name: 'Maize', href: '/products/maize', img: '/assets/images/Maize.jpg' },
      ]}
      jsonLd={jsonLd}
    />
  )
}
