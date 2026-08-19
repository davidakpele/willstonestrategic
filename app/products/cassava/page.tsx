import type { Metadata } from 'next'
import ProductPage from '@/components/products/ProductPage'

const BASE = 'https://willstonestrategic.com'
const URL  = `${BASE}/products/cassava`

export const metadata: Metadata = {
  title: 'Cassava Supplier & Exporter | Bulk Cassava & Cassava Products Nigeria — Willstone',
  description: 'Willstone Strategic Industries Limited supplies bulk cassava, cassava flour, and cassava starch from Nigeria. We serve food processors, starch manufacturers, animal feed producers, and international buyers. Request a quotation.',
  keywords: ['cassava supplier Nigeria','cassava exporter Nigeria','bulk cassava Nigeria','cassava flour Nigeria','cassava starch Nigeria','cassava export supplier Nigeria'],
  alternates: { canonical: URL },
  openGraph: { title: 'Cassava Supplier & Exporter | Willstone Nigeria', description: 'Bulk cassava and cassava products supply and export from Nigeria for food processors and international buyers.', url: URL, siteName: 'Willstone Strategic Industries Limited', images: [{ url: `${BASE}/assets/images/cassava.jpg`, width: 1200, height: 630, alt: 'Bulk cassava supplied by Willstone Strategic Industries Limited' }], locale: 'en_NG', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Cassava Supplier & Exporter | Willstone Nigeria', description: 'Bulk cassava and cassava products from Nigeria.', images: [`${BASE}/assets/images/cassava.jpg`] },
}

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Product', '@id': `${URL}#product`,
  'name': 'Cassava', 'description': 'Bulk fresh and dried cassava, cassava flour, and cassava starch supplied by Willstone Strategic Industries Limited, Nigeria.',
  'image': `${BASE}/assets/images/cassava.jpg`,
  'brand': { '@type': 'Brand', 'name': 'Willstone Strategic Industries Limited' },
  'offers': { '@type': 'Offer', 'seller': { '@id': `${BASE}/#organization` }, 'availability': 'https://schema.org/InStock', 'areaServed': 'GLOBAL', 'priceSpecification': { '@type': 'PriceSpecification', 'priceCurrency': 'USD', 'description': 'Price on request' } },
  'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
    { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `${BASE}/products` },
    { '@type': 'ListItem', 'position': 3, 'name': 'Cassava', 'item': URL },
  ]},
}

export default function CassavaPage() {
  return (
    <ProductPage
      breadcrumb={[{ name: 'Home', href: '/' }, { name: 'Products', href: '/products' }, { name: 'Cassava', href: '/products/cassava' }]}
      hero={{ tag: 'AGRICULTURAL COMMODITIES', h1: 'Bulk Cassava Supplier & Exporter — Nigeria', lead: 'Willstone supplies bulk cassava, cassava flour, and cassava starch to food manufacturers, starch processors, animal feed producers, and international buyers.', img: '/assets/images/cassava.jpg', imgAlt: 'Bulk cassava supplied by Willstone Strategic Industries Limited Nigeria' }}
      overview="Nigeria is the world's largest cassava producer. Cassava is a versatile crop used in food processing (garri, fufu, cassava flour), industrial starch production, animal feed, ethanol, and pharmaceutical applications. Willstone sources fresh cassava and value-added cassava products including dried chips, high-quality cassava flour, and native cassava starch from producing regions across Nigeria."
      supplyRole="Willstone is a supplier, aggregator, and procurement partner for cassava and cassava derivatives in Nigeria. We work with verified processors and farmers to source to buyer specification. Our role covers procurement, quality verification, packaging, and logistics for both domestic distribution and international export."
      specs={[
        { label: 'Available forms', value: 'Fresh tubers / Dried chips / Cassava flour / Native starch' },
        { label: 'Starch content (flour)', value: 'Available on enquiry' },
        { label: 'Moisture (dried chips)', value: '≤ 14%' },
        { label: 'Packaging', value: '25kg / 50kg bags (processed forms)' },
        { label: 'Min. order', value: 'By enquiry' },
        { label: 'Applications', value: 'Food processing, starch, feed, industrial' },
      ]}
      buyers={['Food and snack manufacturers', 'Starch and glucose manufacturers', 'Animal feed producers', 'Ethanol / biofuel producers', 'Pharmaceutical manufacturers', 'Export commodity buyers']}
      supplyInfo="Cassava flour and dried cassava chips are available for bulk domestic supply and container export. Fresh cassava is available for regional domestic buyers. Buyers should specify the form required, target quantity, and moisture or starch specifications when requesting a quotation."
      faqs={[
        { q: 'Does Willstone supply cassava in bulk?', a: 'Yes. We supply fresh cassava, dried cassava chips, cassava flour, and native starch in bulk to domestic and international buyers.' },
        { q: 'What cassava forms are available for export?', a: 'Dried cassava chips, high-quality cassava flour, and native cassava starch are available for export. Fresh cassava is primarily for domestic supply.' },
        { q: 'Can cassava flour be supplied to food manufacturers?', a: 'Yes. We supply cassava flour to food manufacturers and processors for use in baked goods, thickeners, and other food applications.' },
      ]}
      related={[
        { name: 'Maize', href: '/products/maize', img: '/assets/images/Maize.jpg' },
        { name: 'Soybeans', href: '/products/soybeans', img: '/assets/images/soybeans.jpg' },
        { name: 'Rice', href: '/products/rice', img: '/assets/images/agric-banner.avif' },
        { name: 'Ginger', href: '/products/ginger', img: '/assets/images/ginger.jpg' },
      ]}
      jsonLd={jsonLd}
    />
  )
}
