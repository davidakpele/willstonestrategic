import type { Metadata } from 'next'
import ProductPage from '@/components/products/ProductPage'

const BASE = 'https://willstonestrategic.com'
const URL  = `${BASE}/products/maize`

export const metadata: Metadata = {
  title: 'Maize Supplier & Exporter | Bulk Maize Grain Nigeria — Willstone',
  description: 'Willstone Strategic Industries Limited supplies bulk maize grain from Nigeria for animal feed manufacturers, food processors, starch producers, and commodity traders. Request a wholesale quotation for maize supply.',
  keywords: ['maize supplier Nigeria','maize exporter Nigeria','bulk maize Nigeria','maize grain supplier','wholesale maize Nigeria','corn supplier Nigeria'],
  alternates: { canonical: URL },
  openGraph: { title: 'Maize Supplier & Exporter | Willstone Nigeria', description: 'Bulk maize grain supply from Nigeria for animal feed, food processing, and industrial use.', url: URL, siteName: 'Willstone Strategic Industries Limited', images: [{ url: `${BASE}/assets/images/Maize.jpg`, width: 1200, height: 630, alt: 'Bulk maize grain supplied by Willstone Strategic Industries Limited' }], locale: 'en_NG', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Maize Supplier & Exporter | Willstone Nigeria', description: 'Bulk maize grain supply from Nigeria.', images: [`${BASE}/assets/images/Maize.jpg`] },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Product', '@id': `${URL}#product`,
  'name': 'Maize (Corn)', 'description': 'Bulk maize grain sourced and supplied by Willstone Strategic Industries Limited, Nigeria.',
  'image': `${BASE}/assets/images/Maize.jpg`,
  'brand': { '@type': 'Brand', 'name': 'Willstone Strategic Industries Limited' },
  'offers': { '@type': 'Offer', 'seller': { '@id': `${BASE}/#organization` }, 'availability': 'https://schema.org/InStock', 'areaServed': 'GLOBAL', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'USD', 'description': 'Price on request' } },
  'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
    { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `${BASE}/products` },
    { '@type': 'ListItem', 'position': 3, 'name': 'Maize', 'item': URL },
  ]},
}

export default function MaizePage() {
  return (
    <ProductPage
      breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }, { name: 'Maize', href: '/products/maize' }]}
      hero={{ tag: 'AGRICULTURAL COMMODITIES', h1: 'Bulk Maize Grain Supplier — Nigeria', lead: 'Willstone supplies clean, dried maize grain in bulk to animal feed manufacturers, food processors, starch producers, and commodity buyers across Nigeria.', img: '/assets/images/Maize.jpg', imgAlt: 'Bulk maize grain supplied by Willstone Strategic Industries Limited Nigeria' }}
      overview="Maize (Zea mays) is a critical staple and industrial crop in Nigeria, produced primarily in Kaduna, Kano, Katsina, Nasarawa, and Benue states. It is used in animal feed production, human food manufacturing, starch and glucose processing, and brewing. Willstone sources and supplies clean, dried, and graded maize grain for commercial buyers across Nigeria and for export."
      supplyRole="Willstone is a bulk maize supplier and procurement partner in Nigeria. We source from verified farmer groups and aggregators, oversee cleaning, drying, and grading, and arrange domestic or export logistics. Our role is reliable aggregation and quality assurance — not farming."
      specs={[
        { label: 'Moisture', value: '≤ 13%' },
        { label: 'Purity', value: '≥ 98%' },
        { label: 'Foreign matter', value: '≤ 1%' },
        { label: 'Aflatoxin', value: 'To buyer specification' },
        { label: 'Packaging', value: '100kg bags / bulk' },
        { label: 'Min. order', value: 'By enquiry (truckloads / containers)' },
      ]}
      buyers={['Animal feed manufacturers', 'Poultry and livestock farmers', 'Food processing companies', 'Starch and glucose manufacturers', 'Breweries', 'Commodity traders']}
      supplyInfo="Maize is available in large quantities throughout the harvest season (August–November and January–March). We supply to feed mills, processors, and export buyers. Aflatoxin testing and third-party inspection can be arranged on request."
      faqs={[
        { q: 'Does Willstone supply maize in bulk?', a: 'Yes. We supply dried, cleaned maize grain in truckloads and container quantities for feed mills, food processors, and export buyers.' },
        { q: 'What is the aflatoxin level in your maize?', a: 'Aflatoxin levels vary by season and storage. We can arrange independent testing to buyer-specified tolerance levels prior to purchase.' },
        { q: 'Is maize available year-round?', a: 'Nigerian maize has two harvest seasons. Availability may be limited in the off-season. Contact us to confirm current supply status.' },
      ]}
      related={[
        { name: 'Soybeans', href: '/products/soybeans', img: '/assets/images/soybeans.jpg' },
        { name: 'Cassava', href: '/products/cassava', img: '/assets/images/cassava.jpg' },
        { name: 'Rice', href: '/products/rice', img: '/assets/images/agric-banner.avif' },
        { name: 'Sesame Seeds', href: '/products/sesame-seeds', img: '/assets/images/sesame.webp' },
      ]}
      jsonLd={jsonLd}
    />
  )
}
