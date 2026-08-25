import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ProductsCatalogue from '@/components/products/ProductsCatalogue'

export const metadata: Metadata = {
  title: 'Products | Agricultural Commodities, Energy & Industrial Supplies — Willstone',
  description: 'Browse Willstone Strategic Industries Limited\'s full product catalogue — bulk agricultural commodities including sesame seeds, palm oil, cocoa, cassava, maize, soybeans, ginger, turmeric, charcoal, and rice, plus solar panels, batteries, and energy-saving appliances. Request a quotation today.',
  alternates: { canonical: 'https://willstonestrategic.com/products' },
  openGraph: {
    title: 'Products | Willstone Strategic Industries Limited',
    description: 'Bulk agricultural commodities, energy products, and industrial supplies. Sesame seeds, palm oil, cocoa, cassava, maize, soybeans, charcoal, and more.',
    url: 'https://willstonestrategic.com/products',
    siteName: 'Willstone Strategic Industries Limited',
    images: [{ url: 'https://willstonestrategic.com/assets/images/banner.png', width: 1200, height: 630, alt: 'Willstone Products Catalogue' }],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | Willstone Strategic Industries Limited',
    description: 'Bulk agricultural commodities, energy products, and industrial supplies from Nigeria.',
    images: ['https://willstonestrategic.com/assets/images/banner.png'],
  },
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export default function ProductsPage() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      style={{ fontFamily: 'var(--font-body, sans-serif)' }}
    >
      <SiteHeader variant="solid" />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ paddingTop: 96, minHeight: 280 }}>
        <div className="absolute inset-0">
          <Image
            src="/assets/images/banner.png"
            alt="Willstone products"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(11,27,51,0.95) 0%, rgba(11,27,51,0.78) 55%, rgba(11,27,51,0.55) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-16 flex flex-col items-start">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--gold-light)' }}>Products</span>
          </div>

          <p
            className="eyebrow text-xs font-semibold uppercase mb-3"
            style={{ color: 'var(--gold)', letterSpacing: '0.14em' }}
          >
            Our Products
          </p>

          <h1
            className="font-bold leading-tight mb-4"
            style={{
              color: '#fff',
              fontFamily: 'var(--font-display, sans-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              maxWidth: 520,
            }}
          >
            Products &amp; Solutions
          </h1>

          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: 'rgba(255,255,255,0.68)', maxWidth: 500 }}
          >
            From premium agricultural commodities to complete solar power systems — browse our full
            catalogue, filter by category, and click any product to enquire.
          </p>

          {/* Category quick-jump pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Agri Commodities', color: '#16a34a', href: '#catalogue' },
              { label: 'Power & Energy',   color: '#ca8a04', href: '#catalogue' },
            ].map(pill => (
              <a
                key={pill.label}
                href={pill.href}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-opacity hover:opacity-80"
                style={{ background: pill.color, color: '#fff' }}
              >
                {pill.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section style={{ background: 'var(--navy)' }}>
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '22+',  label: 'Products Listed' },
              { value: '2',    label: 'Categories' },
              { value: '100%', label: 'Quality Certified' },
              { value: '24h',  label: 'Enquiry Response' },
            ].map(stat => (
              <div key={stat.label}>
                <p
                  className="font-bold text-2xl mb-1"
                  style={{ color: 'var(--gold)', fontFamily: 'var(--font-display, sans-serif)' }}
                >
                  {stat.value}
                </p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catalogue ── */}
      <section id="catalogue" style={{ background: 'var(--paper)' }}>
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-14">

          {/* Section heading */}
          <div className="mb-8">
            <span className="gold-rule mb-3" style={{ display: 'block' }} />
            <h2
              className="font-bold text-2xl sm:text-3xl"
              style={{ color: 'var(--ink)', fontFamily: 'var(--font-display, sans-serif)' }}
            >
              All Products
            </h2>
            <p className="mt-2 text-sm" style={{ color: 'var(--slate)' }}>
              Use the filters below to narrow by category. Click any card to view full details.
            </p>
          </div>

          {/* Client component — filter + grid + pagination + modal */}
          <ProductsCatalogue />
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#fff' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 text-center">
          <p
            className="eyebrow text-xs font-semibold uppercase mb-3"
            style={{ color: 'var(--gold)', letterSpacing: '0.14em' }}
          >
            Can&apos;t find what you need?
          </p>
          <h2
            className="font-bold text-2xl sm:text-3xl mb-4"
            style={{ color: 'var(--ink)', fontFamily: 'var(--font-display, sans-serif)' }}
          >
            We source to order.
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: 'var(--slate)', maxWidth: 440, margin: '0 auto 2rem' }}
          >
            If you need a product not listed here, reach out to our sales team with your
            specifications and we&apos;ll source and price it within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-gold px-6 py-3 rounded-lg text-sm font-semibold">
              Contact Sales
            </Link>
            <Link href="/services/agriculture-agribusiness" className="btn-outline-gold px-6 py-3 rounded-lg text-sm font-semibold">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
