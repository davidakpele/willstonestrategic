'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const inter        = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })

const OFFERINGS = [
  {
    title: 'Crop Production & Farm Management',
    desc: 'Large-scale cultivation of key commodities including cassava, maize, rice, soybeans, and cocoa, managed with modern agronomic practices.',
    icon: <path d="M12 3c-2 3-4 5-4 8a4 4 0 008 0c0-3-2-5-4-8zM8 21h8M12 11v10" />,
  },
  {
    title: 'Agro-Processing & Value Addition',
    desc: 'We transform raw agricultural outputs into processed, market-ready products — increasing shelf life, reducing waste, and boosting value.',
    icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v5M9 12h6"/></>,
  },
  {
    title: 'Agro-Logistics & Cold Chain',
    desc: 'End-to-end movement of agricultural goods with temperature-controlled storage, refrigerated transport, and last-mile distribution.',
    icon: <path d="M3 16V6a1 1 0 011-1h9v11M3 16h13M3 16a2 2 0 104 0M16 16a2 2 0 104 0M16 10h4l3 3v3h-3" />,
  },
  {
    title: 'Import & Export of Agricultural Commodities',
    desc: 'We facilitate the cross-border trade of food crops, agro-chemicals, fertilisers, and processed food products, ensuring regulatory compliance.',
    icon: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18"/></>,
  },
  {
    title: 'Agricultural Input Supply',
    desc: 'Reliable supply of seeds, fertilisers, pesticides, and farm equipment sourced from trusted global and local manufacturers.',
    icon: <><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></>,
  },
  {
    title: 'Irrigation & Farm Infrastructure',
    desc: 'Design and installation of drip, sprinkler, and canal irrigation systems alongside storage facilities and rural road access.',
    icon: <><path d="M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"/></>,
  },
  {
    title: 'Agricultural Finance & Advisory',
    desc: 'We connect farmers and agri-enterprises to finance partners and provide strategic advisory on farm operations, market access, and growth.',
    icon: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></>,
  },
  {
    title: 'Food Safety & Quality Assurance',
    desc: 'Compliance support for NAFDAC, SON, and international food standards — ensuring your products meet every market requirement.',
    icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />,
  },
]

const OTHER_SERVICES = [
  { label: 'Information Technology & Software Development', href: '/services/information-technology' },
  { label: 'Engineering & Technical Services',              href: '/services/engineering-technical' },
  { label: 'Logistics & Supply Chain Management',           href: '/services/logistics-supply-chain' },
  { label: 'Import & Export Services',                      href: '/services/import-export' },
  { label: 'General Trading & Procurement',                 href: '/services/trading-procurement' },
]

const TABS = [
  {
    id: 'why',
    label: 'Why choose us',
    heading: 'Connecting Africa\'s Harvest to Global Markets.',
    intro: 'At Willstone we go beyond supplying agricultural products — we deliver reliability, consistency, and trust across every shipment.',
    points: [
      { bold: 'International Export Standards:', text: 'All our products meet strict global quality and export compliance requirements.' },
      { bold: 'Consistent Quality Assurance:', text: 'We maintain uniform product specifications to ensure reliability across every order.' },
      { bold: 'Flexible Packaging Solutions:', text: 'Customised packaging options tailored to client needs and destination markets.' },
      { bold: 'Reliable Logistics & Delivery:', text: 'Efficient export coordination ensures timely and secure deliveries.' },
      { bold: 'Customer-Centred Partnerships:', text: 'We focus on long-term relationships built on transparency and mutual growth.' },
      { bold: 'Africa–Europe Trade Expertise:', text: 'Deep understanding of sourcing, documentation, and international trade processes.' },
    ],
  },
  {
    id: 'principles',
    label: 'Our principles',
    heading: 'Integrity, Sustainability, Excellence.',
    intro: 'Every decision we make is anchored in a clear set of principles that guide how we source, process, and deliver agricultural commodities.',
    points: [
      { bold: 'Ethical Sourcing:', text: 'We partner only with farmers and cooperatives who meet our environmental and labour standards.' },
      { bold: 'Sustainable Farming:', text: 'We promote practices that preserve soil health, water resources, and biodiversity.' },
      { bold: 'Traceability:', text: 'Full farm-to-port traceability for every commodity we handle, providing complete audit trails.' },
      { bold: 'Community Impact:', text: 'We invest in rural communities through training programmes, fair pricing, and infrastructure support.' },
      { bold: 'Zero Waste Commitment:', text: 'Our processing lines maximise yield and repurpose agricultural by-products wherever possible.' },
      { bold: 'Continuous Improvement:', text: 'We regularly review and upgrade our quality management systems and field operations.' },
    ],
  },
  {
    id: 'achievements',
    label: 'Achievements',
    heading: 'Milestones that define our journey.',
    intro: 'Over the years Willstone Agri has built a track record of delivering results at scale — across farms, borders, and markets.',
    points: [
      { bold: '5,000+ Tonnes Exported Annually:', text: 'Consistent delivery of certified commodities to buyers across Europe, Asia, and the Middle East.' },
      { bold: '12+ Partner Farms:', text: 'A network of vetted farms spanning over 10,000 hectares of productive agricultural land.' },
      { bold: '6+ Export Markets:', text: 'Successfully navigating customs, phytosanitary, and compliance requirements in six international markets.' },
      { bold: 'ISO-Aligned Processes:', text: 'Our quality management and food safety procedures are benchmarked against international standards.' },
      { bold: 'NAFDAC & SON Compliance:', text: 'All processed products carry full Nigerian regulatory certification.' },
      { bold: 'Award-Winning Partnerships:', text: 'Recognised by industry bodies for excellence in agro-export and supply chain innovation.' },
    ],
  },
]

const CAROUSEL_IMAGES = [
  { src: '/assets/images/sesame.webp', alt: 'Sesame seeds' },
  { src: '/assets/images/Maize.jpg', alt: 'Maize cobs waiting for harvest & processing' },
  { src: '/assets/images/cassava.jpg', alt: 'Cassava roots harvested and ready for export' },
  { src: '/assets/images/cocoawebp.webp', alt: 'Cocoa pods on the tree' },
  { src: '/assets/images/soybeans.jpg', alt: 'Soybean harvest in the field' },
  { src: '/assets/images/palm-oil-main.png', alt: 'Palm oil fruit bunches' },
]

export default function AgriculturePage() {
  const [activeTab, setActiveTab] = useState('why')
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = CAROUSEL_IMAGES.length

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, 4000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, next])

  const tab = TABS.find((t) => t.id === activeTab)!
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <SiteHeader variant="solid" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: 'var(--navy)', height: 'clamp(380px, 55vw, 520px)' }}>
        <Image
          src="/assets/images/agric-banner.avif"
          alt="Vast green farmland representing agriculture"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(6,15,31,.93) 0%, rgba(6,15,31,.70) 50%, rgba(6,15,31,.30) 100%)' }} />
        <div className="absolute inset-0 z-10 flex items-center" style={{ paddingTop: '65px' }}>
          <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-10 py-8 text-center sm:text-left">
            <p className="eyebrow text-[12px] font-semibold flex items-center justify-center sm:justify-start gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR SERVICES
            </p>
            <h1 className="display text-white font-semibold leading-tight mx-auto sm:mx-0 max-w-2xl" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)' }}>
              Agriculture &<br />
              <span style={{ color: 'var(--gold-light)' }}>Agribusiness</span>
            </h1>
            <p className="text-white/65 mt-3 mx-auto sm:mx-0 max-w-xl text-[14px] sm:text-[15px] leading-relaxed">
              From field to market — we deliver comprehensive agricultural solutions that increase
              productivity, reduce waste, and connect Nigerian produce to global opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> WHY WILLSTONE AGRI
            </p>
            <h2 className="display font-semibold leading-tight mb-5" style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
              Cultivating value.<br />Feeding growth.
            </h2>
            <div className="space-y-4 text-slate-500 text-[15px] leading-relaxed">
              <p>
                Nigeria&apos;s agricultural sector holds enormous potential — and Willstone is positioned to
                unlock it. With deep roots in West African agribusiness and a network spanning farms,
                processors, logistics providers, and export channels, we offer a truly integrated service.
              </p>
              <p>
                We work with smallholder farmers, large-scale estates, food manufacturers, and commodity
                traders to optimise every link in the agricultural value chain — from soil preparation
                through to final export documentation.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Cassava','Maize','Rice','Soybeans','Cocoa','Palm Oil','Sesame'].map((crop) => (
                <span key={crop} className="px-3 py-1.5 rounded-full text-[12.5px] font-medium border"
                  style={{ background: 'rgba(201,162,75,.08)', borderColor: 'rgba(201,162,75,.3)', color: 'var(--gold)' }}>
                  {crop}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1000&q=80"
              alt="Agricultural workers in a green field"
              fill sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── TABS + CAROUSEL ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Split layout */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">

            {/* Left — static headline + CTA */}
            <div className="lg:sticky lg:top-28">
              <p className="text-slate-400 text-[12px] font-medium mb-3 tracking-wide uppercase">Welcome to Willstone Agri</p>
              <h2 className="display font-semibold leading-tight mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}>
                {tab.heading}
              </h2>
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold">
                Let&apos;s discuss
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            {/* Right — tabs + content */}
            <div className="min-w-0">
              {/* Tab bar — scrollable on mobile so tabs never overflow */}
              <div className="flex overflow-x-auto border-b border-gray-200 mb-7 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`relative shrink-0 px-4 sm:px-5 py-3 text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      activeTab === t.id ? 'text-[var(--ink)]' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {t.label}
                    {activeTab === t.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full" style={{ background: 'var(--gold)' }} />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div key={activeTab}>
                <p className="text-slate-500 text-[14px] sm:text-[14.5px] leading-relaxed mb-5">{tab.intro}</p>
                <ul className="space-y-3">
                  {tab.points.map((p) => (
                    <li key={p.bold} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-slate-600 leading-snug">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
                      <span><strong className="text-[var(--ink)] font-semibold">{p.bold}</strong> {p.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Carousel — responsive height */}
          <div
            className="relative mt-12 rounded-2xl overflow-hidden w-full"
            style={{ height: 'clamp(220px, 45vw, 420px)' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {CAROUSEL_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
              >
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, 90vw" className="object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(6,15,31,.45) 0%, transparent 50%)' }} />
              </div>
            ))}

            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
              style={{ background: 'rgba(0,0,0,.45)', color: '#fff' }}
              aria-label="Previous image"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
              style={{ background: 'rgba(0,0,0,.45)', color: '#fff' }}
              aria-label="Next image"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all cursor-pointer"
                  style={{
                    width: i === current ? '20px' : '7px',
                    height: '7px',
                    background: i === current ? 'var(--gold)' : 'rgba(255,255,255,.5)',
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="absolute bottom-10 left-4 z-10">
              <p className="text-white/70 text-[11px]">{CAROUSEL_IMAGES[current].alt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> WHAT WE OFFER
            </p>
            <h2 className="display font-semibold text-[26px] sm:text-[32px]" style={{ color: 'var(--ink)' }}>
              End-to-end agribusiness solutions
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFERINGS.map((o) => (
              <div key={o.title} className="card-hover bg-white border border-gray-100 rounded-2xl p-6">
                <span className="commit-icon-light mb-4 inline-flex">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2">
                    {o.icon}
                  </svg>
                </span>
                <h3 className="font-semibold text-[14.5px] mb-2" style={{ color: 'var(--ink)' }}>{o.title}</h3>
                <p className="text-slate-500 text-[13px] leading-snug">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--navy)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow text-[12px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR PROCESS <span className="gold-rule" />
            </p>
            <h2 className="display text-white font-semibold text-[26px] sm:text-[32px]">
              From consultation to delivery
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Needs Assessment', desc: 'We analyse your farm, commodity, or trade requirements and design a tailored solution.' },
              { step: '02', title: 'Planning & Sourcing', desc: 'We source inputs, plan logistics, and align regulatory documentation.' },
              { step: '03', title: 'Execution', desc: 'Production, processing, or movement commences with real-time monitoring at every stage.' },
              { step: '04', title: 'Delivery & Reporting', desc: 'Final delivery with full documentation, quality certificates, and performance reporting.' },
            ].map((p) => (
              <div key={p.step} className="relative p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,.04)' }}>
                <p className="display font-bold text-[2.5rem] leading-none mb-3" style={{ color: 'rgba(201,162,75,.2)' }}>{p.step}</p>
                <h3 className="font-semibold text-white text-[15px] mb-2">{p.title}</h3>
                <p className="text-white/55 text-[13px] leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ── */}
      <section className="py-16 px-5 sm:px-8 lg:px-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-6" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> EXPLORE OTHER SERVICES
          </p>
          <div className="flex flex-wrap gap-3">
            {OTHER_SERVICES.map((s) => (
              <Link key={s.href} href={s.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-[12.5px] font-medium transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                style={{ borderColor: '#e2e6ee', color: 'var(--slate)' }}
              >
                <span>{s.label}</span>
                <svg className="shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="display font-semibold text-[24px] sm:text-[30px] mb-4" style={{ color: 'var(--ink)' }}>
            Ready to grow with Willstone?
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you need farm management, agro-processing, or export logistics — our team is ready
            to design the right solution for you.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[13px] font-semibold">
            Talk to Our Agri Team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
