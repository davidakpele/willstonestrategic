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
    src: '/assets/images/Industrial-Equipment-Machinery.avif',
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
    src: '/assets/images/Security-Defense-about.png',
  },
]

const PARTNER_PILLARS = [
  {
    title: 'Expertise',
    desc: 'Deep industry knowledge and technical excellence.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l2.4 5 5.6.6-4 3.9 1 5.5L12 14l-5 3 1-5.5-4-3.9 5.6-.6z" />
      </svg>
    ),
  },
  {
    title: 'Reliability',
    desc: 'Delivering on promises with integrity.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    desc: 'Creating solutions for a better tomorrow.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 3z" />
      </svg>
    ),
  },
  {
    title: 'Impact',
    desc: 'Driving growth that builds a stronger world.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M9.5 10.5L6.5 7.5M14.5 10.5l3-3M9.5 13.5l-3 3M14.5 13.5l3 3" />
      </svg>
    ),
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
      <section id="about" className="py-20 px-6 lg:px-16 xl:px-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> ABOUT WILLSTONE
            </p>
            <h2
              className="font-bold leading-tight mb-5 text-white"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
            >
              Strategic Industries.<br />Stronger Tomorrow.
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-8 max-w-md">
              Willstone Strategic Industries Limited is a diversified Nigerian supplier, exporter, and procurement partner.
              We deliver integrated solutions across technology, agriculture, logistics, infrastructure, real estate, energy, and more.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-[13px] rounded-lg"
              style={{ background: '#C9A24B', color: '#1a1408', padding: '12px 26px' }}
            >
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mt-10">
              {[
                { stat: '15+', label: 'Countries' },
                { stat: '500+', label: 'Projects' },
                { stat: '10+', label: 'Sectors' },
                { stat: '100+', label: 'Partners' },
              ].map(({ stat, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-bold text-2xl sm:text-3xl" style={{ color: 'var(--gold)' }}>{stat}</span>
                  <span className="text-white/60 text-[12px] mt-0.5">{label}</span>
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

      {/* 8 — CTA Partner Banner */}
      <section className="partner-banner relative overflow-hidden">
        <div className="partner-banner-bg" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: 'rgba(5,12,26,0.80)' }} />
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
          {/* Main content — mobile: centered, desktop: left */}
          <div className="text-center lg:text-left mb-10 lg:mb-12 lg:max-w-xl">
            <p className="eyebrow text-[11px] font-semibold tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
              PARTNER WITH US
            </p>
            <h2
              className="font-bold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}
            >
              One partner, every step of the journey.
            </h2>
            <p className="text-white/65 text-[15px] mb-8 max-w-lg mx-auto lg:mx-0">
              We bring expertise, reliability, and impact across every sector we serve.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-semibold rounded-lg"
                style={{ background: 'var(--gold)', color: '#1a1408', padding: '13px 28px', fontSize: '14px' }}
              >
                Let&apos;s Work Together
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* 4 pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {PARTNER_PILLARS.map((pillar) => (
              <div key={pillar.title} className="partner-pillar">
                <span className="partner-pillar-icon">{pillar.icon}</span>
                <h4 className="font-semibold text-white text-[15px] mt-4 mb-1">{pillar.title}</h4>
                <p className="text-white/55 text-[12.5px] leading-snug">{pillar.desc}</p>
              </div>
            ))}
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
