import Image from 'next/image'
import Link from 'next/link'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../app/willstone.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })

export interface ProductSpec {
  label: string
  value: string
}

export interface ProductFaq {
  q: string
  a: string
}

export interface RelatedProduct {
  name: string
  href: string
  img: string
}

export interface ProductPageProps {
  breadcrumb: { name: string; href: string }[]
  hero: {
    tag: string
    h1: string
    lead: string
    img: string
    imgAlt: string
  }
  overview: string
  supplyRole: string
  specs: ProductSpec[]
  buyers: string[]
  supplyInfo: string
  faqs: ProductFaq[]
  related: RelatedProduct[]
  jsonLd: object
}

export default function ProductPage({
  breadcrumb, hero, overview, supplyRole, specs, buyers, supplyInfo, faqs, related, jsonLd
}: ProductPageProps) {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader variant="solid" />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 88, minHeight: 320 }}>
        <Image src={hero.img} alt={hero.imgAlt} fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg,rgba(6,15,31,.93) 0%,rgba(6,15,31,.72) 55%,rgba(6,15,31,.35) 100%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6 text-[12px]" style={{ color: 'rgba(255,255,255,.45)' }}>
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {i < breadcrumb.length - 1
                  ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.name}</Link>
                  : <span style={{ color: 'var(--gold-light)' }}>{crumb.name}</span>
                }
              </span>
            ))}
          </nav>
          <p className="eyebrow text-[11px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> {hero.tag}
          </p>
          <h1 className="display text-white font-semibold leading-tight mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            {hero.h1}
          </h1>
          <p className="text-white/70 max-w-xl leading-relaxed" style={{ fontSize: 'clamp(13px,2vw,15px)' }}>
            {hero.lead}
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-[13px] font-semibold">
            Request a Quotation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* Main content */}
      <article className="py-16 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* Left: body content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <section>
              <h2 className="display font-semibold text-[22px] mb-4" style={{ color: 'var(--ink)' }}>Product Overview</h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">{overview}</p>
            </section>

            {/* Supply role */}
            <section>
              <h2 className="display font-semibold text-[22px] mb-4" style={{ color: 'var(--ink)' }}>Our Supply Capability</h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">{supplyRole}</p>
            </section>

            {/* Buyers */}
            <section>
              <h2 className="display font-semibold text-[22px] mb-4" style={{ color: 'var(--ink)' }}>Who This Product Is For</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {buyers.map(b => (
                  <li key={b} className="flex items-start gap-2 text-slate-600 text-[14px]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" className="mt-0.5 shrink-0">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </section>

            {/* Supply info */}
            <section>
              <h2 className="display font-semibold text-[22px] mb-4" style={{ color: 'var(--ink)' }}>Bulk Supply & Export</h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">{supplyInfo}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 mt-5 text-[13px] font-semibold" style={{ color: 'var(--navy)' }}>
                Enquire about bulk supply
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="display font-semibold text-[22px] mb-6" style={{ color: 'var(--ink)' }}>Frequently Asked Questions</h2>
              <div className="space-y-5">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5">
                    <h3 className="font-semibold text-[14px] mb-2" style={{ color: 'var(--ink)' }}>{faq.q}</h3>
                    <p className="text-slate-500 text-[13.5px] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: specs sidebar */}
          <aside>
            <div className="rounded-2xl border border-gray-100 overflow-hidden sticky top-28">
              <div className="px-6 py-4 border-b border-gray-100" style={{ background: 'var(--navy)' }}>
                <p className="text-[12px] font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>Product Specifications</p>
              </div>
              <div className="divide-y divide-gray-100">
                {specs.map(s => (
                  <div key={s.label} className="px-6 py-3">
                    <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wide mb-0.5">{s.label}</p>
                    <p className="text-[13.5px] font-medium" style={{ color: 'var(--ink)' }}>{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="px-6 py-5 bg-gray-50">
                <Link href="/contact" className="btn-gold w-full flex items-center justify-center gap-2 py-3 rounded-lg text-[13px] font-semibold">
                  Request a Quote
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-14 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="display font-semibold text-[20px] mb-8" style={{ color: 'var(--ink)' }}>Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map(r => (
                <Link key={r.name} href={r.href} className="group block rounded-xl overflow-hidden border border-gray-100 bg-white hover:border-[var(--gold)] transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={r.img} alt={r.name} fill sizes="25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-[14px]" style={{ color: 'var(--ink)' }}>{r.name}</p>
                    <p className="text-[12px] mt-1 flex items-center gap-1" style={{ color: 'var(--gold)' }}>
                      View product
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  )
}
