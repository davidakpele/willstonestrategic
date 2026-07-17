'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Space_Grotesk, Inter } from 'next/font/google'
import './willstone.css'

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

const NAV_LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT US' },
  { href: '#services', label: 'OUR SERVICES' },
  { href: '#industries', label: 'INDUSTRIES' },
  { href: '#sustainability', label: 'SUSTAINABILITY' },
  { href: '#news', label: 'NEWS' },
  { href: '#contact', label: 'CONTACT' },
]

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
    icon: (
      <path d="M3 16V6a1 1 0 011-1h9v11M3 16h13M3 16a2 2 0 104 0M16 16a2 2 0 104 0M16 10h4l3 3v3h-3" />
    ),
  },
  {
    title: 'Import & Export',
    desc: 'Connecting markets. Delivering opportunities.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18a14 14 0 010-18" />
      </>
    ),
  },
  {
    title: 'Agriculture & Agro-Logistics',
    desc: 'Cultivating value, feeding growth.',
    icon: <path d="M12 3c-2 3-4 5-4 8a4 4 0 008 0c0-3-2-5-4-8zM8 21h8" />,
  },
  {
    title: 'Engineering & Infrastructure',
    desc: 'Building structures. Powering progress.',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </>
    ),
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
    icon: (
      <path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />
    ),
  },
]

const COMMITMENTS = [
  {
    title: 'Excellence',
    desc: 'Delivering quality in everything we do',
    icon: (
      <path d="M12 2l2.4 5 5.6.6-4 3.9 1 5.5L12 14l-5 3 1-5.5-4-3.9 5.6-.6z" />
    ),
  },
  {
    title: 'Integrity',
    desc: 'Building trust through transparency',
    icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />,
  },
  {
    title: 'Innovation',
    desc: 'Creating solutions for a better tomorrow',
    icon: (
      <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 3z" />
    ),
  },
  {
    title: 'Impact',
    desc: 'Driving growth that builds a stronger world',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M9.5 10.5L6.5 7.5M14.5 10.5l3-3M9.5 13.5l-3 3M14.5 13.5l3 3" />
      </>
    ),
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

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMenu()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} bg-white`}>
      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,27,51,.92), rgba(11,27,51,.65))',
          backdropFilter: 'blur(6px)',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          <a href="#home" className="flex items-center gap-3 cursor-pointer">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path
                d="M2 8L11 32L20 14L29 32L38 8"
                stroke="#C9A24B"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-wide text-[15px] display">
                WILLSTONE
              </p>
              <p className="text-[9px] tracking-[0.2em]" style={{ color: '#C9A24B' }}>
                STRATEGIC INDUSTRIES LIMITED
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-[13px] text-white/85 font-medium">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                className={`navlink${i === 0 ? ' active' : ''}`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 btn-gold text-[13px] px-5 py-2.5 rounded-full cursor-pointer"
          >
            PARTNER WITH US
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <button
            id="menu-btn"
            className="lg:hidden text-white relative w-8 h-8 flex items-center justify-center cursor-pointer"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line
                className="menu-icon-line"
                x1="4"
                y1="6"
                x2="20"
                y2="6"
                style={{ transform: isMenuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}
              />
              <line
                className="menu-icon-line"
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                style={{ opacity: isMenuOpen ? 0 : 1 }}
              />
              <line
                className="menu-icon-line"
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                style={{ transform: isMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
              />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU PANEL */}
        <div
          id="mobile-menu"
          className={`lg:hidden border-t border-white/10${isMenuOpen ? ' open' : ''}`}
          style={{ background: 'rgba(8,17,35,.98)' }}
        >
          <nav className="flex flex-col px-6 py-5 gap-1 text-[14px] text-white/85 font-medium">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <a
                key={link.href}
                className="mnav-link py-3 border-b border-white/5 cursor-pointer"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mnav-link py-3 cursor-pointer"
              href="#contact"
              onClick={closeMenu}
            >
              CONTACT
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mnav-link inline-flex items-center justify-center gap-2 btn-gold text-[13px] px-5 py-3 rounded-full cursor-pointer mt-3"
            >
              PARTNER WITH US
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-end overflow-hidden"
        style={{ background: '#0B1B33' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80"
          alt="Container ship docked at a city port at dusk"
          fill
          priority
          sizes="100vw"
          className="hero-img object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(6,15,31,.92) 0%, rgba(6,15,31,.55) 45%, rgba(6,15,31,.25) 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-40 pb-16">
          <h1 className="fade-up fade-up-1 display text-white font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] max-w-2xl">
            Building Solutions.
            <br />
            Delivering Impact.
            <br />
            Creating Tomorrow.
          </h1>
          <p className="fade-up fade-up-2 text-white/75 mt-6 max-w-lg text-[15px] leading-relaxed">
            Willstone Strategic Industries Limited delivers innovative solutions and
            trusted services across industries, driving growth, enabling progress, and
            building a stronger tomorrow.
          </p>
          <a
            href="#about"
            className="fade-up fade-up-3 inline-flex items-center gap-2 btn-gold mt-8 px-6 py-3 rounded-md text-[13px] cursor-pointer"
          >
            DISCOVER MORE
            <svg
              className="float-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* stats bar */}
        <div
          className="fade-up fade-up-4 relative z-10 w-full border-t border-white/10"
          style={{ background: 'rgba(6,14,29,.85)', backdropFilter: 'blur(4px)' }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 px-6 lg:px-10">
            <div className="py-6 text-center">
              <p className="display text-2xl font-semibold" style={{ color: '#E4CD8C' }}>
                10+
              </p>
              <p className="text-[11px] tracking-widest text-white/60 mt-1">INDUSTRIES</p>
            </div>
            <div className="py-6 text-center">
              <p className="display text-2xl font-semibold" style={{ color: '#E4CD8C' }}>
                50+
              </p>
              <p className="text-[11px] tracking-widest text-white/60 mt-1">
                PROJECTS DELIVERED
              </p>
            </div>
            <div className="py-6 text-center">
              <p className="display text-2xl font-semibold" style={{ color: '#E4CD8C' }}>
                100+
              </p>
              <p className="text-[11px] tracking-widest text-white/60 mt-1">
                PARTNERS WORLDWIDE
              </p>
            </div>
            <div className="py-6 text-center">
              <p className="display text-2xl font-semibold" style={{ color: '#E4CD8C' }}>
                &#8734;
              </p>
              <p className="text-[11px] tracking-widest text-white/60 mt-1">
                ENDLESS POSSIBILITIES
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-20 px-6 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-2"
            style={{ color: 'var(--gold)' }}
          >
            <span className="gold-rule" /> DRIVEN ACROSS INDUSTRIES
          </p>
          <h2 className="display text-2xl sm:text-3xl font-semibold mb-10" style={{ color: 'var(--ink)' }}>
            Diverse expertise. Unified by purpose.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((tile) => (
              <div key={tile.name} className="industry-tile rounded-lg aspect-[3/4]">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(11,27,51,0) 40%, rgba(11,27,51,.85) 100%)',
                  }}
                />
                <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">
                  {tile.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="relative py-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'var(--navy)' }}>
        <svg
          className="absolute right-0 top-0 h-full opacity-20"
          width="620"
          viewBox="0 0 620 400"
          fill="none"
          aria-hidden="true"
        >
          <g fill="#C9A24B">
            <circle cx="40" cy="40" r="2" />
            <circle cx="70" cy="45" r="2" />
            <circle cx="100" cy="42" r="2" />
            <circle cx="130" cy="60" r="2" />
            <circle cx="160" cy="55" r="2" />
            <circle cx="200" cy="70" r="2" />
            <circle cx="230" cy="90" r="2" />
            <circle cx="260" cy="100" r="2" />
            <circle cx="300" cy="95" r="2" />
            <circle cx="340" cy="110" r="2" />
            <circle cx="380" cy="130" r="2" />
            <circle cx="420" cy="120" r="2" />
            <circle cx="460" cy="140" r="2" />
            <circle cx="500" cy="160" r="2" />
            <circle cx="60" cy="120" r="2" />
            <circle cx="100" cy="150" r="2" />
            <circle cx="140" cy="170" r="2" />
            <circle cx="180" cy="190" r="2" />
            <circle cx="220" cy="200" r="2" />
            <circle cx="260" cy="210" r="2" />
            <circle cx="300" cy="220" r="2" />
            <circle cx="340" cy="230" r="2" />
            <circle cx="380" cy="240" r="2" />
            <circle cx="420" cy="250" r="2" />
            <circle cx="460" cy="260" r="2" />
            <circle cx="200" cy="250" r="2" />
            <circle cx="240" cy="270" r="2" />
            <circle cx="280" cy="280" r="2" />
            <circle cx="320" cy="290" r="2" />
            <circle cx="360" cy="300" r="2" />
          </g>
        </svg>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="display text-white text-2xl sm:text-3xl font-semibold leading-tight">
              Global Reach.
              <br />
              Stronger Impact.
            </h3>
            <p className="text-white/65 mt-4 max-w-md text-[15px] leading-relaxed">
              Operating with a global mindset and local expertise, we deliver solutions
              that create lasting value across borders.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="display text-3xl font-semibold" style={{ color: '#E4CD8C' }}>
                15+
              </p>
              <p className="text-[11px] tracking-widest text-white/60 mt-1">COUNTRIES</p>
            </div>
            <div>
              <p className="display text-3xl font-semibold" style={{ color: '#E4CD8C' }}>
                500+
              </p>
              <p className="text-[11px] tracking-widest text-white/60 mt-1">PROJECTS</p>
            </div>
            <div>
              <p className="display text-3xl font-semibold" style={{ color: '#E4CD8C' }}>
                &#8734;
              </p>
              <p className="text-[11px] tracking-widest text-white/60 mt-1">POSSIBILITIES</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <p
            className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-2"
            style={{ color: 'var(--gold)' }}
          >
            <span className="gold-rule" /> OUR SERVICES
          </p>
          <h2 className="display text-2xl sm:text-3xl font-semibold mb-10" style={{ color: 'var(--ink)' }}>
            Integrated solutions. Strategic execution. Sustainable impact.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="card-hover border border-gray-200 rounded-xl p-6 cursor-pointer"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--navy)"
                  strokeWidth="2"
                  className="mb-4"
                >
                  {service.icon}
                </svg>
                <h4 className="font-semibold text-[15px] mb-1" style={{ color: 'var(--ink)' }}>
                  {service.title}
                </h4>
                <p className="text-[13px] text-slate-500 leading-snug">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES ILLUSTRATION */}
      <section id="service-flow" className="py-16 px-6 lg:px-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="eyebrow text-[12px] font-semibold flex items-center justify-center gap-3 mb-2"
            style={{ color: 'var(--gold)' }}
          >
            <span className="gold-rule" /> HOW IT WORKS <span className="gold-rule" />
          </p>
          <h3 className="display text-2xl sm:text-3xl font-semibold mb-8" style={{ color: 'var(--ink)' }}>
            One partner, every step of the journey.
          </h3>
          <img
            src="/services-illustration.svg"
            alt="Circular diagram of Willstone's door-to-door logistics flow, from meeting the customer through collection, storage, customs clearance, transport by ship and air, and final delivery, with animated trucks, an airplane, and clouds"
            className="mx-auto w-full max-w-2xl h-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p
              className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3"
              style={{ color: 'var(--gold)' }}
            >
              <span className="gold-rule" /> ABOUT WILLSTONE
            </p>
            <h2 className="display text-white text-2xl sm:text-3xl font-semibold leading-tight mb-4">
              Strategic Industries.
              <br />
              Stronger Tomorrow.
            </h2>
            <p className="text-white/65 max-w-md text-[15px] leading-relaxed mb-8">
              Willstone Strategic Industries Limited is a multi-sector company delivering
              integrated solutions across technology, agriculture, logistics,
              infrastructure, real estate, energy, and more.
            </p>
            <a href="#" className="inline-flex items-center gap-2 btn-gold px-6 py-3 rounded-md text-[13px] cursor-pointer">
              MORE ABOUT US
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80"
              alt="Two engineers in safety vests and hard hats reviewing an industrial site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, rgba(11,27,51,0) 60%, rgba(11,27,51,.5) 100%)',
              }}
            />
          </div>
        </div>

        {/* commitment strip */}
        <div className="max-w-7xl mx-auto mt-16 pt-10 border-t border-white/10">
          <p
            className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-8"
            style={{ color: 'var(--gold)' }}
          >
            <span className="gold-rule" /> OUR COMMITMENT
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {COMMITMENTS.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="commit-icon shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {item.icon}
                  </svg>
                </span>
                <div>
                  <p className="text-white font-semibold text-[14px]">{item.title}</p>
                  <p className="text-white/55 text-[12.5px] leading-snug mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="pt-16 pb-8 px-6 lg:px-10" style={{ background: '#081326' }}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path
                  d="M2 8L11 32L20 14L29 32L38 8"
                  stroke="#C9A24B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="text-white font-semibold display text-[14px]">WILLSTONE</p>
                <p className="text-[8.5px] tracking-[0.2em]" style={{ color: '#C9A24B' }}>
                  STRATEGIC INDUSTRIES LIMITED
                </p>
              </div>
            </div>
            <p className="text-white/50 text-[13px] leading-relaxed max-w-xs">
              Your strategic partner for today&apos;s challenges and tomorrow&apos;s
              opportunities.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#C9A24B] hover:border-[#C9A24B] transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#C9A24B] hover:border-[#C9A24B] transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4 4 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 18.6a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#C9A24B] hover:border-[#C9A24B] transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.04v2.36H8v3.1h2.7v8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#C9A24B] hover:border-[#C9A24B] transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 00-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 00-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 002 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 002-2C22 15.2 22 12 22 12zM10 15.3V8.7l6 3.3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-white font-semibold text-[13px] tracking-wide mb-4">QUICK LINKS</p>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#C9A24B] transition-colors cursor-pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-[13px] tracking-wide mb-4">SERVICES</p>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              {FOOTER_SERVICES.map((label) => (
                <li key={label}>
                  <a href="#services" className="hover:text-[#C9A24B] transition-colors cursor-pointer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-[13px] tracking-wide mb-4">CONTACT</p>
            <ul className="space-y-3 text-[13px] text-white/50">
              <li className="flex items-start gap-2">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A24B"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M4 4h16v16H4zM4 4l8 8 8-8" />
                </svg>
                info@willstone.com.ng
              </li>
              <li className="flex items-start gap-2">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A24B"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2.1z" />
                </svg>
                +234 805 123 4567
              </li>
              <li className="flex items-start gap-2">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A24B"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Plot 10, Industrial Avenue, Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/40">
          <p>&copy; 2026 Willstone Strategic Industries Limited. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#C9A24B] transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#C9A24B] transition-colors cursor-pointer">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}