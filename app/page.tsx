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
]

const SERVICES = [
  {
    title: 'Software & IT',
    desc: 'Custom software and IT solutions for a digital tomorrow.',
    icon: <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />,
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Seamless movement. Reliable delivery.',
    icon: <path d="M3 16V6a1 1 0 011-1h9v11M3 16h13M3 16a2 2 0 104 0M16 16a2 2 0 104 0M16 10h4l3 3v3h-3" />,
  },
  {
    title: 'Import & Export',
    desc: 'Connecting markets. Delivering opportunities.',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18a14 14 0 010-18" /></>,
  },
  {
    title: 'Agriculture & Agro-Logistics',
    desc: 'Cultivating value, feeding growth.',
    icon: <path d="M12 3c-2 3-4 5-4 8a4 4 0 008 0c0-3-2-5-4-8zM8 21h8" />,
  },
  {
    title: 'Engineering & Infrastructure',
    desc: 'Building structures. Powering progress.',
    icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  },
  {
    title: 'Real Estate Development',
    desc: 'Developing spaces. Building futures.',
    icon: <path d="M4 21V9l8-5 8 5v12M9 21v-6h6v6" />,
  },
  {
    title: 'Energy Solutions',
    desc: 'Powering today for a sustainable tomorrow.',
    icon: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  },
  {
    title: 'Procurement & Trading',
    desc: 'Smart sourcing. Stronger partnerships.',
    icon: <path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />,
  },
]

const COMMITMENTS = [
  {
    title: 'Excellence',
    desc: 'Delivering quality in everything we do',
    icon: <path d="M12 2l2.4 5 5.6.6-4 3.9 1 5.5L12 14l-5 3 1-5.5-4-3.9 5.6-.6z" />,
  },
  {
    title: 'Integrity',
    desc: 'Building trust through transparency',
    icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />,
  },
  {
    title: 'Innovation',
    desc: 'Creating solutions for a better tomorrow',
    icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 3z" />,
  },
  {
    title: 'Impact',
    desc: 'Driving growth that builds a stronger world',
    icon: <><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M9.5 10.5L6.5 7.5M14.5 10.5l3-3M9.5 13.5l-3 3M14.5 13.5l3 3" /></>,
  },
]

const QUICK_LINKS = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Our Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#sustainability', label: 'Sustainability' },
  { href: '#news', label: 'News' },
  { href: '#contact', label: 'Contact' },
]

const FOOTER_SERVICES = [
  'Software & IT',
  'Logistics & Supply Chain',
  'Import & Export',
  'Agriculture & Agro-Logistics',
  'Engineering & Infrastructure',
  'More Services',
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


      {/* HERO */}
      <section id="home" className="relative flex flex-col overflow-hidden" style={{ background: '#0B1B33', minHeight: '100svh' }}>
        {/* Orbital hero loop — full-bleed iframe */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
          <iframe
            src="/earth-hero-loop.html"
            title=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 'max(100%, 186.182vh)',
              height: 'max(100%, 53.7109vw)',
              transform: 'translate(-50%, -50%)',
              border: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>
        {/* Overlay — light center vignette so the earth animation stays vivid */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(6,15,31,.62) 0%, rgba(6,15,31,.42) 30%, rgba(6,15,31,.18) 60%, rgba(6,15,31,.05) 100%)',
        }} />
        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(0deg, rgba(6,15,31,.35) 0%, transparent 100%)' }} />

        {/* Content — full-width container, centered text/buttons */}
        <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16">
          <div className="w-full max-w-7xl mx-auto mt-15 py-20 flex flex-col items-center text-center">
            <p className="fade-up fade-up-1 eyebrow text-[11px] sm:text-[12px] font-semibold flex items-center justify-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>WELCOME TO WILLSTONE</p>
            <h1 className="hero-heading fade-up fade-up-2 display text-white leading-[1.12] w-full max-w-5xl text-center"
              style={{ fontFamily: "Satoshi, Inter, sans-serif", fontSize: 'clamp(2.4rem, 8vw, 3.5rem)' }}>
             Advancing Industries Through Technology, Trade and Energy and Securing Tomorrow
            </h1>
            <p className="hero-subtext fade-up fade-up-3 text-white/85 mt-6 w-full max-w-2xl leading-relaxed text-center"
              style={{ fontSize: 'clamp(14px, 2.5vw, 17px)' }}>
              Willstone Strategic Industries Limited delivers innovative solutions and
              trusted services across industries, driving growth, enabling progress, and
              building a stronger tomorrow.
            </p>

            {/* CTA buttons */}
           <div className="fade-up fade-up-4 flex flex-col sm:flex-row gap-4 mt-7 sm:mt-8 w-full sm:w-auto items-center justify-center">
            <a
              href="/about"
              className="inline-flex items-center justify-center w-full sm:w-auto"
              style={{
                fontFamily: "Satoshi, Inter, sans-serif",
                fontSize: "15px",
                fontWeight: "700",
                lineHeight: "150%",
                minWidth: "200px",
                height: "48px",
                padding: "8px 24px",
                gap: "8px",
                background: "rgba(207, 207, 207, 0.4)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                borderRadius: "10px",
                color: "rgb(255, 255, 255)",
                textDecoration: "none",
                transition: "opacity 200ms",
                cursor: "pointer",
              }}>
              DISCOVER MORE
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto"
              style={{
                fontFamily: "Satoshi, Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                lineHeight: "150%",
                minWidth: "200px",
                height: "48px",
                padding: "8px 24px",
                gap: "8px",
                backgroundColor: "rgb(215, 181, 109)",
                color: "rgb(1, 5, 39)",
                borderRadius: "10px",
                textDecoration: "none",
                transition: "opacity 200ms",
                cursor: "pointer",
              }}
            >
              PARTNER WITH US
            </a>
            </div>

            {/* Industry pills — infinite scroll ticker, desktop only */}
            <div className="fade-up fade-up-4 hidden sm:block mt-6 sm:mt-8 pill-ticker-wrap">
              <div className="pill-ticker-track">
                {/* Render twice so the loop is seamless */}
                {[0, 1].map((copy) => (
                  <div key={copy} className="pill-ticker-set" aria-hidden={copy === 1}>
                    {['Technology','Logistics','Energy','Real Estate','Agriculture','Procurement','Import / Export'].map((tag) => (
                      <span key={tag} className="hero-pill">{tag}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar — always at the bottom 
        <div className="relative z-10 w-full border-t border-white/10 shrink-0"
          style={{ background: 'rgba(6,14,29,.88)', backdropFilter: 'blur(4px)' }}>
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 px-5 sm:px-8 lg:px-10">
            {[
              ['10+',  'INDUSTRIES'],
              ['50+',  'PROJECTS'],
              ['100+', 'PARTNERS'],
              ['∞',    'POSSIBILITIES'],
            ].map(([val, label]) => (
              <div key={label} className="py-5 sm:py-6 text-center px-2">
                <p className="display font-semibold text-xl sm:text-2xl" style={{ color: '#E4CD8C' }}>{val}</p>
                <p className="text-[10px] sm:text-[11px] tracking-widest text-white/60 mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>*/}
      </section>

      {/* TICKER STRIP */}
      <div className="ticker-strip overflow-hidden py-3" style={{ background: 'var(--gold)' }}>
        <div className="ticker-track flex whitespace-nowrap">
          {[0, 1].map((i) => (
            <div key={i} className="ticker-items flex shrink-0 items-center" aria-hidden={i === 1}>
              {['10+ INDUSTRIES','50+ PROJECTS DELIVERED','100+ PARTNERS WORLDWIDE','15+ COUNTRIES','500+ PROJECTS','ENDLESS POSSIBILITIES'].map((item) => (
                <span key={item} className="flex items-center gap-4 px-6 text-[12px] font-bold tracking-[0.18em] text-[#1a1408]">
                  {item}
                  <span style={{ opacity: 0.4 }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <section id="industries" className="py-20 px-6 lg:px-16 xl:px-24" style={{ background: 'var(--paper)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-2" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> DRIVEN ACROSS INDUSTRIES
          </p>
          <h2 className="display text-2xl sm:text-3xl font-semibold mb-10" style={{ color: 'var(--ink)' }}>
            Diverse expertise. Unified by purpose.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((tile) => (
              <div key={tile.name} className="industry-tile rounded-lg aspect-[3/4]">
                <Image src={tile.src} alt={tile.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" className="object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,27,51,0) 40%, rgba(11,27,51,.85) 100%)' }} />
                <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">{tile.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCROLL ACCORDION */}
      <ScrollAccordion />

      {/* GLOBAL REACH */}
      <section className="relative py-20 px-6 lg:px-16 xl:px-24 overflow-hidden" style={{ background: 'var(--navy)' }}>
        <svg className="absolute right-0 top-0 h-full opacity-20" width="620" viewBox="0 0 620 400" fill="none" aria-hidden="true">
          <g fill="#C9A24B">
            {[[40,40],[70,45],[100,42],[130,60],[160,55],[200,70],[230,90],[260,100],[300,95],[340,110],[380,130],[420,120],[460,140],[500,160],[60,120],[100,150],[140,170],[180,190],[220,200],[260,210],[300,220],[340,230],[380,240],[420,250],[460,260],[200,250],[240,270],[280,280],[320,290],[360,300]].map(([cx,cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" />
            ))}
          </g>
        </svg>
        <div className="max-w-screen-2xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="display text-white text-2xl sm:text-3xl font-semibold leading-tight">
              Global Reach.<br />Stronger Impact.
            </h3>
            <p className="text-white/65 mt-4 max-w-md text-[15px] leading-relaxed">
              Operating with a global mindset and local expertise, we deliver solutions that create lasting value across borders.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            {[['15+','COUNTRIES'],['500+','PROJECTS'],['∞','POSSIBILITIES']].map(([val, label]) => (
              <div key={label}>
                <p className="display text-3xl font-semibold" style={{ color: '#E4CD8C' }}>{val}</p>
                <p className="text-[11px] tracking-widest text-white/60 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-2" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> OUR SERVICES
          </p>
          <h2 className="display text-2xl sm:text-3xl font-semibold mb-10" style={{ color: 'var(--ink)' }}>
            Integrated solutions. Strategic execution. Sustainable impact.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service) => (
              <div key={service.title} className="card-hover border border-gray-200 rounded-xl p-6 cursor-pointer">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" className="mb-4">
                  {service.icon}
                </svg>
                <h4 className="font-semibold text-[15px] mb-1" style={{ color: 'var(--ink)' }}>{service.title}</h4>
                <p className="text-[13px] text-slate-500 leading-snug">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="service-flow" className="py-16 px-6 lg:px-16 xl:px-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-[12px] font-semibold flex items-center justify-center gap-3 mb-2" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> HOW IT WORKS <span className="gold-rule" />
          </p>
          <h3 className="display text-2xl sm:text-3xl font-semibold mb-8" style={{ color: 'var(--ink)' }}>
            One partner, every step of the journey.
          </h3>
          {/* Placeholder diagram — replace with actual SVG asset when available */}
          <div className="mx-auto max-w-2xl rounded-xl border border-gray-100 bg-[var(--paper)] py-16 text-slate-400 text-sm">
            Services flow diagram coming soon
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-20 px-6 lg:px-16 xl:px-24 overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> ABOUT WILLSTONE
            </p>
            <h2 className="display text-white text-2xl sm:text-3xl font-semibold leading-tight mb-4">
              Strategic Industries.<br />Stronger Tomorrow.
            </h2>
            <p className="text-white/65 max-w-md text-[15px] leading-relaxed mb-8">
              Willstone Strategic Industries Limited is a multi-sector company delivering integrated solutions across technology, agriculture, logistics, infrastructure, real estate, energy, and more.
            </p>
            <Link href={"/about"} className="inline-flex items-center gap-2 btn-gold px-6 py-3 rounded-md text-[13px] cursor-pointer">
              MORE ABOUT US
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
            <Image
              src="/assets/images/about.png"
              alt="Two engineers in safety vests and hard hats reviewing an industrial site"
              fill sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,27,51,0) 60%, rgba(11,27,51,.5) 100%)' }} />
          </div>
        </div>

        {/* COMMITMENT — lifted out into its own light section */}
      </section>

      {/* OUR COMMITMENT */}
      <section className="py-16 px-6 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-8" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> OUR COMMITMENT
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {COMMITMENTS.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="commit-icon-light shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2">
                    {item.icon}
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[14px]" style={{ color: 'var(--ink)' }}>{item.title}</p>
                  <p className="text-slate-500 text-[12.5px] leading-snug mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* BACK TO TOP */}
      <BackToTop />
    </div>
  )
  }