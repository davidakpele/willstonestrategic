'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Space_Grotesk, Inter } from 'next/font/google'
import './willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ScrollAccordion from '@/components/ScrollAccordion'


import Link from 'next/link'

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

const INDUSTRIES = [
  {
    name: 'Technology',
    alt: 'Circuit board representing the technology sector',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Agriculture',
    alt: 'Green farmland rows representing agriculture',
    src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Logistics',
    alt: 'Cargo ship carrying containers representing logistics',
    src: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Infrastructure',
    alt: 'Suspension bridge representing infrastructure',
    src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Energy',
    alt: 'Wind turbines and solar panels representing energy',
    src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Real Estate',
    alt: 'Modern building facade representing real estate',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Defence',
    alt: 'Defence and security solutions',
    src: '/assets/images/Security-Defense-about.png',
  },
]

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

const COMMITMENTS = [
  {
    title: 'Excellence',
    desc: 'Delivering quality in everything we do',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l2.4 5 5.6.6-4 3.9 1 5.5L12 14l-5 3 1-5.5-4-3.9 5.6-.6z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    desc: 'Building trust through transparency',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    desc: 'Creating solutions for a better tomorrow',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 3z" />
      </svg>
    ),
  },
  {
    title: 'Sustainability',
    desc: 'Building a better world for future generations',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C6 2 3 8 3 12c0 2.5 1.5 5 3 6.5L12 22l6-3.5C19.5 17 21 14.5 21 12c0-4-3-10-9-10z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
]

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

export default function Home() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} bg-white`}>
      <SiteHeader />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section id="home" className="relative w-full overflow-hidden" style={{ background: '#0B1B33' }}>
        {/* Full-bleed banner image */}
        <div className="hero-banner-frame relative w-full">
          <Image
            src="/assets/images/prime-banner.png"
            alt="Willstone Strategic Industries"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient — heavier at bottom so text is always readable */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(6,15,31,.30) 0%, rgba(6,15,31,.55) 55%, rgba(6,15,31,.82) 100%)',
          }} />

          {/* Text overlay — bottom-anchored on mobile, centred on desktop */}
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 sm:px-8 lg:px-16 pb-8 sm:pb-10 lg:pb-0 lg:justify-center" style={{ paddingTop: '0px' }}>
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
              <p className="fade-up fade-up-1 eyebrow font-semibold mb-1 sm:mb-3"
                style={{ color: 'var(--gold)', fontSize: 'clamp(9px, 2vw, 13px)', letterSpacing: '0.16em' }}>
                WELCOME TO WILLSTONE
              </p>
              <h1 className="hero-heading fade-up fade-up-2 display text-white w-full"
                style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontSize: 'clamp(1.05rem, 4vw, 3.8rem)', lineHeight: 1.12 }}>
                Advancing Industries Through Technology, Trade and Energy and Securing Tomorrow
              </h1>
              <p className="hero-subtext fade-up fade-up-3 text-white/80 mt-2 sm:mt-4 w-full max-w-2xl leading-relaxed"
                style={{ fontSize: 'clamp(10.5px, 1.8vw, 17px)' }}>
                Willstone Strategic Industries Limited delivers innovative solutions and
                trusted services across industries, driving growth, enabling progress, and
                building a stronger tomorrow.
              </p>

              {/* CTA buttons removed */}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TICKER STRIP
      ══════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════ */}
      <section id="industries" className="py-20 px-6 lg:px-16 xl:px-24" style={{ background: 'var(--paper)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-2" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> OUR INDUSTRIES
          </p>
          <h2 className="display text-2xl sm:text-3xl font-semibold mb-2" style={{ color: 'var(--ink)' }}>
            Diverse expertise.
          </h2>
          <p className="text-slate-500 text-[15px] mb-10 max-w-lg">
            We operate across a broad range of industries, bringing deep expertise and innovative solutions to the sectors that power the world.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {INDUSTRIES.map((tile) => (
              <div key={tile.name} className="industry-tile rounded-lg aspect-[3/4]">
                <Image src={tile.src} alt={tile.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" className="object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,27,51,0) 40%, rgba(11,27,51,.85) 100%)' }} />
                <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">{tile.name}</p>
                <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,162,75,.2)', border: '1px solid rgba(201,162,75,.4)' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SCROLL ACCORDION  (What We Do)
      ══════════════════════════════════════════ */}
      <ScrollAccordion />

      {/* ══════════════════════════════════════════
          GLOBAL REACH — STRONGER IMPACT
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: '#06101f' }}>

        {/* ══ MOBILE / TABLET (< 1024px): full-width image with text overlaid at bottom ══ */}
        <div className="block lg:hidden relative w-full" style={{ aspectRatio: '16/9', minHeight: '420px' }}>
          {/* Background image */}
          <Image
            src="/assets/images/connection.png"
            alt="World map showing Willstone's global connections across borders"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay — darkens bottom so text is readable */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(6,16,31,0) 20%, rgba(6,16,31,0.6) 55%, rgba(6,16,31,0.97) 100%)'
          }} />

          {/* Text overlay — bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
            <p className="eyebrow text-[11px] font-semibold mb-2 tracking-widest" style={{ color: 'var(--gold)' }}>
              GLOBAL REACH
            </p>
            <h2 className="display font-bold leading-tight mb-3" style={{ color: '#fff', fontSize: 'clamp(1.6rem, 5vw, 2.2rem)' }}>
              <span style={{ color: 'var(--gold)' }}>Global Reach.</span><br />
              Stronger Impact.
            </h2>
            <p className="text-white/65 text-[13px] leading-relaxed mb-6" style={{ maxWidth: '480px' }}>
              Operating with a global mindset and local expertise, we deliver solutions
              that create lasting value across borders and industries.
            </p>

            {/* Stats — 15+ left | 500+ center | 100+ right */}
            <div className="flex items-center justify-between w-full" style={{ maxWidth: '480px' }}>
              {[
                { val: '15+', label: 'Countries' },
                { val: '500+', label: 'Projects' },
                { val: '100+', label: 'Partners' },
              ].map(({ val, label }, i) => (
                <div key={label} className="flex items-center">
                  {i > 0 && (
                    <div style={{ width: '1px', height: '40px', background: 'rgba(201,162,75,0.35)', marginRight: '18px' }} />
                  )}
                  <div>
                    <p className="display font-bold" style={{ color: 'var(--gold)', fontSize: 'clamp(1.5rem, 5vw, 2rem)', lineHeight: 1 }}>{val}</p>
                    <p className="text-white/50 text-[10px] tracking-widest uppercase mt-1">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ DESKTOP (≥ 1024px): image left column, text right column ══ */}
        <div className="hidden lg:flex flex-row items-center w-full" style={{ height: '320px' }}>

          {/* Left — image anchored to left wall */}
          <div className="w-1/2 h-full relative overflow-hidden">
            <Image
              src="/assets/images/connection.png"
              alt="World map showing Willstone's global connections across borders"
              fill
              sizes="50vw"
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Right — text pushed to right edge */}
          <div className="w-1/2 h-full flex items-center justify-end pr-14 xl:pr-24 pl-6">
            <div style={{ maxWidth: '400px' }}>
              <p className="eyebrow text-[11px] font-semibold mb-3 tracking-widest" style={{ color: 'var(--gold)' }}>
                GLOBAL REACH
              </p>
              <h2 className="display font-bold leading-tight mb-4" style={{ color: '#fff', fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)' }}>
                <span style={{ color: 'var(--gold)' }}>Global Reach.</span><br />
                Stronger Impact.
              </h2>
              <p className="text-white/60 text-[14px] leading-relaxed mb-7">
                Operating with a global mindset and local expertise, we deliver solutions
                that create lasting value across borders and industries.
              </p>

              {/* Stats */}
              <div className="flex items-center">
                {[
                  { val: '15+', label: 'Countries' },
                  { val: '500+', label: 'Projects' },
                  { val: '100+', label: 'Partners' },
                ].map(({ val, label }, i) => (
                  <div key={label} className="flex items-center">
                    {i > 0 && (
                      <div style={{ width: '1px', height: '44px', background: 'rgba(201,162,75,0.3)', margin: '0 20px' }} />
                    )}
                    <div>
                      <p className="display font-bold" style={{ color: 'var(--gold)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', lineHeight: 1 }}>{val}</p>
                      <p className="text-white/50 text-[11px] tracking-widest uppercase mt-1">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section id="services" className="py-20 px-6 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">

            {/* Left — heading */}
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
                <span className="gold-rule" /> OUR SERVICES
              </p>
              <h2 className="display font-semibold leading-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 3vw, 2.1rem)' }}>
                Integrated solutions.<br />
                Strategic execution.<br />
                <span style={{ color: 'var(--gold)' }}>Sustainable impact.</span>
              </h2>
            </div>

            {/* Right — 4×2 grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PARTNER CTA  — dark banner
      ══════════════════════════════════════════ */}
      <section className="partner-banner relative overflow-hidden">
        {/* Background image */}
        <div className="partner-banner-bg" aria-hidden="true" />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(5,12,26,.78)' }} />

        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16 xl:px-24 py-12 lg:py-20">

          {/* Heading + button — full width on mobile */}
          <div className="mb-10 lg:hidden text-center">
            <p className="eyebrow text-[11px] font-semibold mb-3 tracking-widest" style={{ color: 'var(--gold)' }}>
              PARTNER WITH US
            </p>
            <h2 className="display font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(1.7rem, 7vw, 2.5rem)' }}>
              One partner,<br />every step of the journey.
            </h2>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-semibold"
                style={{ background: 'var(--gold)', color: '#1a1408', padding: '12px 24px', fontSize: '14px', borderRadius: '8px' }}
              >
                Let&apos;s Work Together
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* 4 pillars — 2 col on mobile, 4 col on tablet+ */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 lg:hidden">
            {PARTNER_PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-center text-center">
                <span className="partner-pillar-icon mb-3">{pillar.icon}</span>
                <h4 className="font-semibold text-white text-[14px] mb-1 leading-snug">{pillar.title}</h4>
                <p className="text-white/55 text-[12px] leading-snug">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Desktop: side-by-side */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
            <div>
              <p className="eyebrow text-[11px] font-semibold mb-3 tracking-widest" style={{ color: 'var(--gold)' }}>
                PARTNER WITH US
              </p>
              <h2 className="display font-bold text-white leading-tight mb-8"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                One partner,<br />every step of the journey.
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-semibold"
                style={{ background: 'var(--gold)', color: '#1a1408', padding: '12px 28px', fontSize: '14px', borderRadius: '8px' }}
              >
                Let&apos;s Work Together
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {PARTNER_PILLARS.map((pillar) => (
                <div key={pillar.title} className="partner-pillar">
                  <span className="partner-pillar-icon">{pillar.icon}</span>
                  <h4 className="font-semibold text-white text-[15px] mt-3 mb-1">{pillar.title}</h4>
                  <p className="text-white/55 text-[12.5px] leading-snug">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT  — text + 3-image mosaic
      ══════════════════════════════════════════ */}
      <section id="about" className="py-16 px-6 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> ABOUT WILLSTONE
            </p>
            <h2 className="display font-semibold leading-tight mb-5" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
              Strategic industries.<br />Stronger tomorrow.
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-md">
              Willstone Strategic Industries Limited is a multi-sector company delivering
              integrated solutions across technology, agriculture, logistics, infrastructure,
              real estate, energy, and more.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-[13px] cursor-pointer"
              style={{
                background: 'var(--navy)', color: '#fff',
                padding: '12px 26px', borderRadius: '8px',
              }}
            >
              Learn More About Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          {/* Right — 3-image mosaic */}
          <div className="about-mosaic">
            <div className="about-mosaic-main">
              <Image
                src="/assets/images/about-banner.png"
                alt="Cargo plane on tarmac representing Willstone's logistics operations"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="about-mosaic-side">
              <div className="about-mosaic-sm">
                <Image
                  src="/assets/images/agric-banner.avif"
                  alt="Shipping containers stacked at a port"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="about-mosaic-sm">
                <Image
                  src="/assets/images/electrical-electronic.jpg"
                  alt="Industrial facility representing infrastructure"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMITMENT BAR
      ══════════════════════════════════════════ */}
      <section className="py-14 px-6 lg:px-16 xl:px-24 border-t border-gray-100 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {COMMITMENTS.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="commit-icon-light shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-[14px]" style={{ color: 'var(--ink)' }}>{item.title}</p>
                <p className="text-slate-500 text-[12.5px] leading-snug mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  )
}
