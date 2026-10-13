'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import './willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ScrollAccordion from '@/components/ScrollAccordion'
import HeroBannerCarousel from '@/components/HeroBannerCarousel'
import Link from 'next/link'

// ── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: 'Software & IT',
    desc: 'Custom software and IT solutions for a digital tomorrow.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M8 9l-2 2 2 2M16 9l2 2-2 2" />
      </svg>
    ),
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Seamless movement. Reliable delivery.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 16V6a1 1 0 011-1h9v11M3 16h13M3 16a2 2 0 104 0M16 16a2 2 0 104 0M16 10h4l3 3v3h-3" />
      </svg>
    ),
  },
  {
    title: 'Import & Export',
    desc: 'Connecting markets. Delivering opportunities.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18A14 14 0 0112 3" />
      </svg>
    ),
  },
  {
    title: 'Agriculture & Agro-Logistics',
    desc: 'Cultivating value. Feeding growth.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3c-2 3-4 5-4 8a4 4 0 008 0c0-3-2-5-4-8zM8 21h8M12 11v6" />
      </svg>
    ),
  },
  {
    title: 'Engineering & Infrastructure',
    desc: 'Building structures. Powering progress.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: 'Real Estate Development',
    desc: 'Developing spaces. Building futures.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 21V9l8-5 8 5v12M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Energy Solutions',
    desc: 'Powering today for a sustainable tomorrow.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Procurement & Trading',
    desc: 'Smart sourcing. Stronger partnerships.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />
      </svg>
    ),
  },
]

const INDUSTRIES = [
  {
    name: 'Technology',
    alt: 'Software engineers working on technology solutions',
    src: '/assets/images/software-engineers.jpg',
  },
  {
    name: 'Agriculture',
    alt: 'Agricultural operations and commodity supply chain',
    src: '/assets/images/agric-banner.avif',
  },
  {
    name: 'Logistics',
    alt: 'Global logistics and supply chain operations',
    src: '/assets/images/globalization-supply-chain.jpg',
  },
  {
    name: 'Infrastructure',
    alt: 'Industrial equipment and infrastructure',
    src: '/assets/images/industrial-equipment-machinery.avif',
  },
  {
    name: 'Energy',
    alt: 'Solar panels representing renewable energy solutions',
    src: '/assets/images/solar-panel.jpg',
  },
  {
    name: 'Real Estate',
    alt: 'Real estate development and property',
    src: '/assets/images/real-estate-1.jpg',
  },
  {
    name: 'Defence',
    alt: 'Defence and security solutions',
    src: '/assets/images/security-defense-about.png',
  },
]

// ── BackToTop ────────────────────────────────────────────────────────────────

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`back-to-top${visible ? ' visible' : ''}`}
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePageClient() {
  return (
    <div className="bg-white">

      {/* 1 — Header */}
      <SiteHeader />

      {/* 2 — Hero carousel */}
      <HeroBannerCarousel />

      {/* 3 — Ticker strip */}
      <div className="ticker-strip overflow-hidden py-3" style={{ background: 'var(--gold)' }}>
        <div className="ticker-track flex whitespace-nowrap">
          {[0, 1].map((i) => (
            <div key={i} className="ticker-items flex shrink-0 items-center" aria-hidden={i === 1}>
              {['15+ COUNTRIES', '500+ PROJECTS DELIVERED', '100+ PARTNERS WORLDWIDE', '10+ INDUSTRIES SERVED'].map((item) => (
                <span key={item} className="flex items-center gap-4 px-6 text-[12px] font-bold tracking-[0.18em] text-[#1a1408]">
                  {item}
                  <span style={{ opacity: 0.4 }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 4 — About / Company intro */}
      <section id="about" className="py-20 px-6 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> ABOUT WILLSTONE
            </p>
            <h2
              className="font-bold leading-tight mb-5"
              style={{ color: 'var(--ink)', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
            >
              Strategic Industries.<br />Stronger Tomorrow.
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-md">
              Willstone Strategic Industries Limited is a Nigerian enterprise built around one idea. Businesses and governments deserve a single capable partner across every sector that matters. From technology and software to agriculture, defence, energy, electrical engineering, and logistics, we design solutions, source commodities, and deliver results that move industries forward.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-[13px] rounded-lg"
              style={{ background: 'var(--navy)', color: '#fff', padding: '12px 26px' }}
            >
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mt-10 pt-10 border-t border-gray-100">
              {[
                { stat: '15+', label: 'Countries' },
                { stat: '500+', label: 'Projects' },
                { stat: '10+', label: 'Sectors' },
                { stat: '100+', label: 'Partners' },
              ].map(({ stat, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-bold text-2xl sm:text-3xl" style={{ color: 'var(--gold)' }}>{stat}</span>
                  <span className="text-slate-400 text-[12px] mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image mosaic */}
          <div className="about-mosaic">
            <div className="about-mosaic-main">
              <Image
                src="/assets/images/about-banner.png"
                alt="Willstone Strategic Industries operations"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="about-mosaic-side">
              <div className="about-mosaic-sm">
                <Image
                  src="/assets/images/agric-banner.avif"
                  alt="Agricultural operations"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="about-mosaic-sm">
                <Image
                  src="/assets/images/electrical-electronic.jpg"
                  alt="Electrical and electronic infrastructure"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5 — Scroll Accordion (What We Do) */}
      <ScrollAccordion />

      {/* 6 — Services */}
      <section id="services" className="py-20 px-6 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> OUR SERVICES
          </p>
          <h2
            className="font-bold leading-tight mb-10"
            style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
          >
            Integrated solutions. Strategic execution.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <div key={service.title} className="service-card-new">
                <span className="service-card-icon">{service.icon}</span>
                <h4 className="font-semibold text-[14px] mt-3 mb-1 leading-snug" style={{ color: 'var(--ink)' }}>
                  {service.title}
                </h4>
                <p className="text-[12.5px] text-slate-500 leading-snug">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Industries */}
      <section id="industries" className="py-20 px-6 lg:px-16 xl:px-24" style={{ background: 'var(--paper)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> INDUSTRIES WE SERVE
          </p>
          <h2
            className="font-bold leading-tight mb-10"
            style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
          >
            Diverse expertise across 10+ sectors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {INDUSTRIES.map((tile) => (
              <div key={tile.name} className="industry-tile rounded-lg aspect-[3/4] relative overflow-hidden">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(11,27,51,0) 40%, rgba(11,27,51,.85) 100%)' }}
                />
                <p className="absolute bottom-3 left-3 text-white font-bold text-sm">{tile.name}</p>
                <div
                  className="absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(201,162,75,.2)', border: '1px solid rgba(201,162,75,.4)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Contact CTA */}
      <section className="py-20 px-6 lg:px-16 xl:px-24" style={{ background: 'var(--paper)' }}>
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <h2 className="font-bold leading-tight mb-10" style={{ color: 'var(--ink)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
              Interested in our services, products, or a potential partnership?
            </h2>

            <div className="flex flex-col gap-4">
              <a href="mailto:willstonestrategic@gmail.com"
                className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--gold)] transition-colors group">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(201,162,75,0.10)', color: 'var(--gold)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400 mb-0.5">You can email us here</p>
                  <p className="text-[13px] font-semibold truncate" style={{ color: 'var(--ink)' }}>willstonestrategic@gmail.com</p>
                </div>
                <svg className="ml-auto shrink-0 opacity-30 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>

              <a href="tel:+2349019384496"
                className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--gold)] transition-colors group">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(201,162,75,0.10)', color: 'var(--gold)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.5a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z"/>
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400 mb-0.5">Give us a call</p>
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--ink)' }}>+234 901 938 4496</p>
                </div>
                <svg className="ml-auto shrink-0 opacity-30 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>

              <a href="https://maps.app.goo.gl/ZjZ5eCgY7MjJnvvj6" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--gold)] transition-colors group">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(201,162,75,0.10)', color: 'var(--gold)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400 mb-0.5">Get directions to our location</p>
                  <p className="text-[13px] font-semibold leading-snug" style={{ color: 'var(--ink)' }}>20 Cambridge House, Onireke Jericho, Ibadan</p>
                </div>
                <svg className="ml-auto shrink-0 opacity-30 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>
            </div>
          </div>

          {/* Right — quick contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[20px] mb-1" style={{ color: 'var(--ink)' }}>Let&apos;s Work Together</h3>
            <p className="text-slate-400 text-[13px] mb-6">We are here to answer your questions and explore new possibilities.</p>

            <form action="/contact" method="get" className="flex flex-col gap-4">
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[13.5px] outline-none focus:border-[var(--gold)] transition-colors bg-gray-50"
                  style={{ color: 'var(--ink)' }}
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>E-mail address</label>
                <input
                  type="email"
                  placeholder="Enter your e-mail address"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[13.5px] outline-none focus:border-[var(--gold)] transition-colors bg-gray-50"
                  style={{ color: 'var(--ink)' }}
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>Message</label>
                <textarea
                  rows={3}
                  placeholder="Let us know what you are interested in"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[13.5px] outline-none focus:border-[var(--gold)] transition-colors bg-gray-50 resize-none"
                  style={{ color: 'var(--ink)' }}
                />
              </div>
              <Link
                href="/contact"
                className="w-full py-3 rounded-lg text-[13px] font-semibold text-center transition-colors"
                style={{ background: 'var(--navy)', color: '#fff' }}
              >
                Send a message
              </Link>
            </form>
          </div>

        </div>
      </section>

      {/* 9 — Footer */}
      <SiteFooter />

      {/* 10 — Back to top */}
      <BackToTop />

    </div>
  )
}
