import type { Metadata } from 'next'
import ProductPage from '@/components/products/ProductPage'

const BASE = 'https://willstonestrategic.com'
const URL  = `${BASE}/products/turmeric`

export const metadata: Metadata = {
  title: 'Turmeric Supplier & Exporter | Bulk Turmeric Nigeria — Willstone',
  description: 'Willstone Strategic Industries Limited supplies and exports bulk turmeric from Nigeria. Available for food manufacturers, spice processors, pharmaceutical buyers, and international commodity traders. Request a wholesale quotation.',
  keywords: ['turmeric supplier Nigeria','turmeric exporter Nigeria','bulk turmeric Nigeria','wholesale turmeric Nigeria','turmeric export supplier','dried turmeric Nigeria'],
  alternates: { canonical: URL },
  openGraph: { title: 'Turmeric Supplier & Exporter | Willstone Nigeria', description: 'Bulk turmeric supply and export from Nigeria for international buyers and food processors.', url: URL, siteName: 'Willstone Strategic Industries Limited', images: [{ url: `${BASE}/assets/images/agric-banner.avif`, width: 1200, height: 630, alt: 'Bulk turmeric supplied by Willstone Strategic Industries Limited' }], locale: 'en_NG', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Turmeric Supplier & Exporter | Willstone Nigeria', description: 'Bulk turmeric supply and export from Nigeria.', images: [`${BASE}/assets/images/agric-banner.avif`] },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Product',
  '@id': `${URL}#product`,
  'name': 'Turmeric',
  'description': 'Bulk turmeric sourced and exported by Willstone Strategic Industries Limited from Nigeria.',
  'image': `${BASE}/assets/images/agric-banner.avif`,
  'brand': { '@type': 'Brand', 'name': 'Willstone Strategic Industries Limited' },
  'offers': { '@type': 'Offer', 'seller': { '@id': `${BASE}/#organization` }, 'availability': 'https://schema.org/InStock', 'areaServed': 'GLOBAL', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'USD', 'description': 'Price on request' } },
  'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
    { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `${BASE}/products` },
    { '@type': 'ListItem', 'position': 3, 'name': 'Turmeric', 'item': URL },
  ]},
}

export default function TurmericPage() {
  return (
    <ProductPage
      breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }, { name: 'Turmeric', href: '/products/turmeric' }]}
      hero={{ tag: 'AGRICULTURAL COMMODITIES', h1: 'Bulk Turmeric Supplier & Exporter — Nigeria', lead: 'Willstone supplies quality dried turmeric in bulk for food manufacturers, spice processors, pharmaceutical companies, and international importers.', img: '/assets/images/agric-banner.avif', imgAlt: 'Bulk turmeric supplied by Willstone Strategic Industries Limited Nigeria' }}
      overview="Turmeric (Curcuma longa) is a rhizome crop cultivated across several Nigerian states. It is widely used in food colouring, spice blending, pharmaceutical formulations, cosmetics, and nutraceuticals. Nigerian turmeric is valued for its curcumin content and vibrant colour. Willstone sources and supplies dried turmeric — whole rhizome or finger form — for bulk domestic and export buyers."
      supplyRole="Willstone acts as a supplier, aggregator, and export facilitator for turmeric in Nigeria. We source from verified producing regions, oversee appropriate drying and cleaning, and prepare container shipments for international buyers. We do not manufacture or process turmeric into powder ourselves unless specifically arranged."
      specs={[
        { label: 'Form', value: 'Dried whole / Dried fingers' },
        { label: 'Moisture', value: '≤ 10%' },
        { label: 'Curcumin content', value: 'Variable — available on enquiry' },
        { label: 'Foreign matter', value: '≤ 1%' },
        { label: 'Packaging', value: '25kg / 50kg jute or PP bags' },
        { label: 'Min. order', value: 'By enquiry' },
        { label: 'Supply basis', value: 'FOB Lagos' },
      ]}
      buyers={['Spice manufacturers and blenders', 'Food colouring producers', 'Pharmaceutical manufacturers', 'Nutraceutical companies', 'International commodity traders', 'Wholesale importers in Asia & Europe']}
      supplyInfo="Turmeric is available for bulk export in container loads. Buyers should specify form (whole or finger), target moisture, and destination when requesting a quotation. Third-party inspection can be arranged prior to loading."
      faqs={[
        { q: 'Does Willstone supply turmeric in bulk?', a: 'Yes. We supply dried turmeric whole and finger form in bulk quantities for container export.' },
        { q: 'What curcumin content is typical?', a: 'Curcumin content depends on growing region and variety. Please specify your minimum curcumin requirement when requesting a quotation.' },
        { q: 'Can international buyers request a quotation?', a: 'Yes. Contact us with your quantity, form preference, and destination port and we will respond promptly.' },
      ]}
      related={[
        { name: 'Ginger', href: '/products/ginger', img: '/assets/images/ginger.jpg' },
        { name: 'Sesame Seeds', href: '/products/sesame-seeds', img: '/assets/images/sesame.webp' },
        { name: 'Cassava', href: '/products/cassava', img: '/assets/images/cassava.jpg' },
        { name: 'Maize', href: '/products/maize', img: '/assets/images/Maize.jpg' },
      ]}
      jsonLd={jsonLd}
    />
  )
}
