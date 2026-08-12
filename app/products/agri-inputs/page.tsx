import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Space_Grotesk, Inter } from 'next/font/google'
import { GitBranch, BadgeCheck, Truck } from 'lucide-react'
import '../../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import AgriProductsGallery from '@/components/agri/AgriProductsGallery'

export const metadata: Metadata = {
  title: 'Agri Inputs & Commodities | Willstone Strategic Industries',
  description:
    'Premium agricultural commodities — soybeans, cocoa, maize, cassava, sesame, palm oil and more. Sourced, graded and distributed across Nigeria and international markets.',
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

export default function AgriInputsPage() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      style={{ fontFamily: 'var(--font-body, sans-serif)' }}
    >
      <SiteHeader variant="solid" />

      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden" style={{ paddingTop: 96, minHeight: 320 }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/agric-banner.avif"
            alt="Agricultural fields"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(11,27,51,0.92) 0%, rgba(11,27,51,0.72) 55%, rgba(11,27,51,0.50) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-20 flex flex-col items-start">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span style={{ color: 'var(--gold-light)' }}>Agri Inputs</span>
          </div>

          {/* Eyebrow */}
          <p
            className="eyebrow text-xs font-semibold uppercase mb-3"
            style={{ color: 'var(--gold)', letterSpacing: '0.14em' }}
          >
            Agriculture &amp; Agribusiness
          </p>

          <h1
            className="font-bold text-4xl sm:text-5xl leading-tight mb-5"
            style={{ color: '#fff', fontFamily: 'var(--font-display, sans-serif)', maxWidth: 560 }}
          >
            Products
          </h1>

          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 520 }}
          >
            We source, grade, and supply premium agricultural commodities — connecting Nigerian farmers
            to domestic processors and international buyers with full traceability.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-gold px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              Request a Quote
            </Link>
            <Link
              href="/services/agriculture-agribusiness"
              className="btn-outline-gold px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              Our Agri Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Products Gallery ── */}
      <section style={{ background: 'var(--paper)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="gold-rule mb-3" style={{ display: 'block' }} />
              <h2
                className="font-bold text-2xl sm:text-3xl"
                style={{ color: 'var(--ink)', fontFamily: 'var(--font-display, sans-serif)' }}
              >
                Our Products
              </h2>
              <p className="mt-2 text-sm" style={{ color: 'var(--slate)' }}>
                Click any product to view details and enquire.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-gold self-start sm:self-auto px-5 py-2.5 rounded-lg text-sm font-semibold flex-shrink-0"
            >
              Contact Sales
            </Link>
          </div>

          {/* Gallery — client component handles grid + modal */}
          <AgriProductsGallery />
        </div>
      </section>

      {/* ── Why Willstone strip ── */}
      <section style={{ background: 'var(--navy)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {(
              [
                { Icon: GitBranch, title: 'Farm-to-Market Traceability', body: 'Every commodity is documented from origin farm through processing and export.' },
                { Icon: BadgeCheck,  title: 'Quality Certified',           body: 'Our products meet NAFDAC, NAQS, EU, and US import quality benchmarks.' },
                { Icon: Truck,       title: 'Reliable Logistics',          body: 'Integrated logistics and warehousing ensures on-time, condition-guaranteed delivery.' },
              ] as const
            ).map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,162,75,0.12)', border: '1px solid rgba(201,162,75,0.25)' }}
                >
                  <Icon size={22} style={{ color: 'var(--gold)' }} />
                </div>
                <p
                  className="font-semibold text-base"
                  style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-display, sans-serif)' }}
                >
                  {title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#fff' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 text-center">
          <p
            className="eyebrow text-xs font-semibold uppercase mb-3"
            style={{ color: 'var(--gold)', letterSpacing: '0.14em' }}
          >
            Ready to partner?
          </p>
          <h2
            className="font-bold text-2xl sm:text-3xl mb-4"
            style={{ color: 'var(--ink)', fontFamily: 'var(--font-display, sans-serif)' }}
          >
            Looking for a reliable agri commodity supplier?
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--slate)', maxWidth: 480, margin: '0 auto 2rem' }}>
            Reach out to our sales team with your specifications — volume, grade, packaging, and delivery
            timeline — and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-gold px-6 py-3 rounded-lg text-sm font-semibold">
              Get in Touch
            </Link>
            <Link href="/products" className="btn-outline-gold px-6 py-3 rounded-lg text-sm font-semibold">
              All Products
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
