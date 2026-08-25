'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const inter        = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })

const PRODUCTS = [
  { label: 'Charcoal',      src: '/assets/images/charcoal.jpg' },
  { label: 'Sesame Seeds',  src: '/assets/images/sesame.webp' },
  { label: 'Maize',         src: '/assets/images/Maize.jpg' },
  { label: 'Soybeans',      src: '/assets/images/soybeans.jpg' },
  { label: 'Cocoa',         src: '/assets/images/cocoawebp.webp' },
  { label: 'Palm Oil',      src: '/assets/images/palm-oil-main.png' },
]

const WHY_CARDS = [
  {
    title: 'International Export Standards',
    desc: 'All our products meet strict global quality and export compliance requirements.',
    icon: <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Consistent Quality Assurance',
    desc: 'We maintain uniform product specifications to ensure reliability across every order.',
    icon: <><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/></>,
  },
  {
    title: 'Flexible Packaging Solutions',
    desc: 'Customised packaging options tailored to client needs and destination markets.',
    icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></>,
  },
  {
    title: 'Reliable Logistics & Delivery',
    desc: 'Efficient export coordination ensures timely and secure deliveries.',
    icon: <path d="M3 16V6a1 1 0 011-1h9v11M3 16h13M3 16a2 2 0 104 0M16 16a2 2 0 104 0M16 10h4l3 3v3h-3" />,
  },
  {
    title: 'Customer-Centred Partnerships',
    desc: 'We focus on long-term relationships built on transparency and mutual growth.',
    icon: <><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/></>,
  },
  {
    title: 'Africa–Europe Trade Expertise',
    desc: 'Deep understanding of sourcing, documentation, and international trade processes.',
    icon: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18"/></>,
  },
]

const OTHER_SERVICES = [
  { label: 'Information Technology & Software Development', href: '/services/information-technology' },
  { label: 'Engineering & Technical Services',              href: '/services/electrical-electronic' },
  { label: 'Logistics & Supply Chain Management',           href: '/services/logistics-supply-chain' },
  { label: 'Import & Export Services',                      href: '/services/import-export' },
  { label: 'General Trading & Procurement',                 href: '/services/trading-procurement' },
]

export default function AgriculturePageClient() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <SiteHeader variant="solid" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: 'var(--navy)', minHeight: 'clamp(400px, 55vw, 560px)' }}>
        <Image
          src="/assets/images/agric-banner.avif"
          alt="Vast green farmland at sunrise"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(6,15,31,.92) 0%, rgba(6,15,31,.65) 55%, rgba(6,15,31,.25) 100%)' }} />
        <div className="absolute inset-0 z-10 flex items-center" style={{ paddingTop: '88px' }}>
          <div className="w-full px-5 sm:px-10 lg:px-16 py-10">
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
               OUR SERVICES
            </p>
            <h1 className="display text-white font-bold leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)' }}>
              Agriculture &amp;<br />
              <span style={{ color: 'var(--gold)' }}>Agribusiness</span>
            </h1>
            <p className="text-white/70 max-w-xl text-[14px] sm:text-[15px] leading-relaxed mb-8">
              From field to market we deliver comprehensive agricultural solutions that increase
              productivity, reduce waste, and connect Nigerian produce to global opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold"
              style={{ background: 'var(--gold)', color: '#1a1408' }}
            >
              Partner With Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY WILLSTONE AGRI ── */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <p className="eyebrow text-[11px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> WHY WILLSTONE AGRI
            </p>
            <h2 className="display font-bold leading-tight mb-5" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)' }}>
              Cultivating value.<br />Feeding growth.
            </h2>
            <div className="space-y-4 text-slate-500 text-[14.5px] leading-relaxed mb-8">
              <p>
                Nigeria&apos;s agricultural sector holds enormous potential and Willstone is positioned to
                unlock it. With deep roots in West African agribusiness and a network spanning farms,
                processors, logistics providers, and export channels, we offer a truly integrated service.
              </p>
              <p>
                We work with smallholder farmers, large-scale estates, food manufacturers, and commodity
                traders to optimise every link in the agricultural value chain from soil preparation
                through to final export documentation.
              </p>
            </div>
            {/* 4 icon badges */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Sustainable Practices',  icon: <path d="M12 3c-2 3-4 5-4 8a4 4 0 008 0c0-3-2-5-4-8z"/> },
                { label: 'Quality Assurance',       icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/> },
                { label: 'Market Access',           icon: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/></> },
                { label: 'Consistent Support',      icon: <><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/></> },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: 'rgba(201,162,75,.2)', background: 'rgba(201,162,75,.04)' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(201,162,75,.12)', border: '1px solid rgba(201,162,75,.3)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">{b.icon}</svg>
                  </div>
                  <span className="text-[12.5px] font-semibold" style={{ color: 'var(--ink)' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image with overlay stats */}
          <div className="relative rounded-2xl overflow-hidden" style={{ height: '420px', boxShadow: '0 20px 60px -15px rgba(11,27,51,.25)' }}>
            <Image
              src="/assets/images/photo-1574943320219-553eb213f72d.avif"
              alt="Agricultural produce"
              fill sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(11,27,51,.75) 100%)' }} />
            {/* 4 stat icons at bottom */}
            <div className="absolute inset-x-0 bottom-0 p-5 grid grid-cols-4 gap-2">
              {[
                { icon: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>, label: 'Wide Network' },
                { icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>, label: 'Quality Produce' },
                { icon: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18"/></>, label: 'Global Reach' },
                { icon: <path d="M3 16V6a1 1 0 011-1h9v11M3 16h13M3 16a2 2 0 104 0M16 16a2 2 0 104 0M16 10h4l3 3v3h-3"/>, label: 'Reliable Delivery' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1 text-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,162,75,.2)', border: '1px solid rgba(201,162,75,.4)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-light)" strokeWidth="1.8">{s.icon}</svg>
                  </div>
                  <span className="text-white text-[10px] leading-tight font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── PRODUCTS WE WORK WITH ── */}
      <section className="py-14 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto">
          <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-10 text-center" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> PRODUCTS WE WORK WITH <span className="gold-rule" />
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {PRODUCTS.map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-3">
                <div className="relative w-[88px] h-[88px] rounded-full overflow-hidden border-2" style={{ borderColor: 'rgba(201,162,75,.3)', boxShadow: '0 4px 20px rgba(11,27,51,.12)' }}>
                  <Image src={p.src} alt={p.label} fill sizes="88px" className="object-cover" />
                </div>
                <span className="text-[12.5px] font-semibold text-center" style={{ color: 'var(--ink)' }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-14 items-start">

          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-[11px] font-semibold flex items-center gap-3 mb-5" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> WHY CHOOSE US
            </p>
            <h2 className="display font-bold leading-tight mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)' }}>
              Trusted partnerships.<br />
              <span style={{ color: 'var(--gold)' }}>Lasting impact.</span>
            </h2>
            <p className="text-slate-500 text-[14px] leading-relaxed mb-8">
              At Willstone we go beyond supplying agricultural products, we deliver reliability,
              consistency, and trust across every shipment.
            </p>
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold">
              Let&apos;s Discuss
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>

          {/* Right — 2×3 grid of feature cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {WHY_CARDS.map((c) => (
              <div key={c.title} className="flex items-start gap-4 p-5 rounded-2xl border" style={{ borderColor: '#eaecf2', background: '#fff' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(201,162,75,.1)', border: '1px solid rgba(201,162,75,.25)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">{c.icon}</svg>
                </div>
                <div>
                  <p className="font-semibold text-[13.5px] mb-1" style={{ color: 'var(--ink)' }}>{c.title}</p>
                  <p className="text-slate-500 text-[12.5px] leading-snug">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── OUR IMPACT ── */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24 relative overflow-hidden" style={{ background: 'var(--navy)' }}>
        {/* subtle background texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,162,75,.4) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(201,162,75,.2) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-screen-2xl mx-auto">
          <div className="mb-12">
            <p className="eyebrow text-[11px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR IMPACT
            </p>
            <h2 className="display text-white font-bold leading-tight" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)' }}>
              Empowering farmers.<br />Strengthening communities.
            </h2>
            <p className="text-white/60 mt-4 max-w-xl text-[14.5px] leading-relaxed">
              We are committed to driving sustainable agricultural development by creating jobs,
              supporting the communities that feed nations.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              { num: 'Supporting', stat: '10,000+', sub: 'Farmers across Nigeria and West Africa', icon: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/> },
              { num: 'Building',   stat: 'Stronger', sub: 'Agricultural communities and value chains', icon: <><rect x="3" y="9" width="18" height="12" rx="2"/><path d="M8 9V5a2 2 0 012-2h4a2 2 0 012 2v4M12 12v5"/></> },
              { num: 'Driving',    stat: 'Sustainable', sub: 'Practices for the future generation', icon: <path d="M12 3c-2 3-4 5-4 8a4 4 0 008 0c0-3-2-5-4-8zM8 21h8M12 11v10"/> },
            ].map((s) => (
              <div key={s.stat} className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,.05)' }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(201,162,75,.15)', border: '1px solid rgba(201,162,75,.35)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">{s.icon}</svg>
                </div>
                <p className="text-white/50 text-[11px] font-semibold tracking-widest uppercase mb-1">{s.num}</p>
                <p className="display text-white font-bold text-[2rem] leading-tight">{s.stat}</p>
                <p className="text-white/55 text-[13px] mt-2 leading-snug">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold border border-white/20 text-white hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors">
              Our Commitment
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR PROCESS <span className="gold-rule" />
            </p>
            <h2 className="display font-bold text-[26px] sm:text-[32px]" style={{ color: 'var(--ink)' }}>
              From consultation to delivery
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Needs Assessment',    desc: 'We analyse your farm, commodity, or trade requirements and design a tailored solution.' },
              { step: '02', title: 'Planning & Sourcing', desc: 'We source inputs, plan logistics, and align regulatory documentation.' },
              { step: '03', title: 'Execution',           desc: 'Production, processing, or movement commences with real-time monitoring at every stage.' },
              { step: '04', title: 'Delivery & Reporting',desc: 'Final delivery with full documentation, quality certificates, and performance reporting.' },
            ].map((p, i) => (
              <div key={p.step} className="relative p-6 rounded-2xl border" style={{ borderColor: '#eaecf2' }}>
                {/* connector line between steps */}
                {i < 3 && <div className="hidden lg:block absolute top-10 left-full w-6 border-t-2 border-dashed z-10" style={{ borderColor: 'rgba(201,162,75,.35)' }} />}
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-[13px] font-bold" style={{ background: 'var(--navy)', color: 'var(--gold)' }}>
                  {p.step}
                </div>
                <h3 className="font-semibold text-[15px] mb-2" style={{ color: 'var(--ink)' }}>{p.title}</h3>
                <p className="text-slate-500 text-[13px] leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE OTHER SERVICES ── */}
      <section className="py-14 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto">
          <p className="eyebrow text-[11px] font-semibold flex items-center gap-3 mb-6" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> EXPLORE OTHER SERVICES
          </p>
          <div className="flex flex-wrap gap-3">
            {OTHER_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-[13px] font-medium transition-colors"
                style={{ borderColor: '#d1d5db', color: 'var(--slate)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.color = 'var(--slate)' }}
              >
                {s.label}
                <svg className="shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-5 sm:px-10 lg:px-16 xl:px-24" style={{ background: 'var(--paper)' }}>
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl border" style={{ borderColor: 'rgba(201,162,75,.2)', background: '#fff' }}>
          <div>
            <h2 className="display font-bold text-[22px] sm:text-[26px] mb-2" style={{ color: 'var(--ink)' }}>
              Ready to grow with Willstone?
            </h2>
            <p className="text-slate-500 text-[14px] leading-relaxed max-w-md">
              Whether you need farm-to-market, agro-processing, or export logistics — our team is
              ready to design the right solution for you.
            </p>
          </div>
          <Link href="/contact" className="btn-gold shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold whitespace-nowrap">
            Talk to Our Agri Team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
