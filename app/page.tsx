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
  { href: '#services', label: 'OUR SERVICES', hasDropdown: true },
  { href: '#sustainability', label: 'SUSTAINABILITY' },
  { href: '#contact', label: 'CONTACT' },
]

const SERVICES_DROPDOWN = [
  'Agriculture & Agribusiness',
  'Information Technology & Software Development',
  'Electrical & Electronic Solutions',
  'Engineering & Technical Services',
  'Industrial Equipment & Machinery',
  'Defence, Security & Protective Solutions',
  'General Trading & Procurement',
  'Logistics & Supply Chain Management',
  'Import & Export Services',
  'Infrastructure & Facility Support',
  'General Contracting & Supply',
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu = () => { setIsMenuOpen(false); setIsMobileServicesOpen(false) }

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) closeMenu() }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} bg-white`}>
      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'linear-gradient(180deg, rgb(11 27 51 / 32%), rgb(11 27 51 / 72%))',
          backdropFilter: 'blur(6px)',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          <a href="#home" className="site-logo cursor-pointer" aria-label="Willstone Strategic Industries Limited" />

          <nav className="hidden lg:flex items-center gap-6 text-[13px] text-white/85 font-medium">
            {NAV_LINKS.map((link, i) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a
                    href={link.href}
                    className={`navlink flex items-center gap-1${i === 0 ? ' active' : ''}`}
                  >
                    {link.label}
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      className="nav-chevron"
                      style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </a>
                  {/* Dropdown panel */}
                  <div className={`nav-dropdown${isServicesOpen ? ' open' : ''}`}>
                    <div className="py-2">
                      {SERVICES_DROPDOWN.map((item) => (
                        <a
                          key={item}
                          href="#services"
                          className="nav-dropdown-item"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={link.href} className={`navlink${i === 0 ? ' active' : ''}`} href={link.href}>
                  {link.label}
                </a>
              )
            )}
          </nav>

          <a href="#contact" className="hidden lg:inline-flex items-center gap-2 btn-gold text-[13px] font-semibold px-5 py-[9px] rounded-full cursor-pointer tracking-wide">
            PARTNER WITH US
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <button
            id="menu-btn"
            className={`lg:hidden text-white relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer hamburger${isMenuOpen ? ' is-open' : ''}`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER — rendered outside header so it overlays full screen */}
      {/* Backdrop */}
      <div
        className={`drawer-backdrop lg:hidden${isMenuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      {/* Drawer panel */}
      <div
        id="mobile-menu"
        className={`drawer lg:hidden${isMenuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <a href="#home" className="site-logo-sm cursor-pointer" aria-label="Willstone" onClick={closeMenu} />
          <button
            onClick={closeMenu}
            className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex flex-col px-6 py-4 gap-1 text-[14px] text-white/85 font-medium overflow-y-auto flex-1">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="border-b border-white/8">
                <button
                  className="w-full flex items-center justify-between py-3.5 cursor-pointer"
                  onClick={() => setIsMobileServicesOpen((o) => !o)}
                >
                  <span>{link.label}</span>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    style={{ transform: isMobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className={`mobile-submenu${isMobileServicesOpen ? ' open' : ''}`}>
                  {SERVICES_DROPDOWN.map((item) => (
                    <a
                      key={item}
                      href="#services"
                      className="block py-2.5 pl-4 text-[13px] text-white/55 hover:text-[#C9A24B] border-l-2 border-white/10 hover:border-[#C9A24B] mb-1 cursor-pointer transition-colors"
                      onClick={closeMenu}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                className="py-3.5 border-b border-white/8 hover:text-[#C9A24B] transition-colors cursor-pointer"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Drawer footer CTA */}
        <div className="px-6 py-5 border-t border-white/10">
          <a
            href="#contact"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 btn-gold text-[13px] font-semibold px-5 py-3 rounded-full cursor-pointer w-full"
          >
            PARTNER WITH US
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      {/* HERO */}
      <section id="home" className="relative flex flex-col overflow-hidden" style={{ background: '#0B1B33', minHeight: '100svh' }}>
        <Image
          src="/assets/images/banner.png"
          alt="Container ship docked at a city port at dusk"
          fill priority sizes="100vw"
          className="hero-img object-cover object-center"
        />
        {/* Overlay — left-heavy so text is legible but image stays bright on the right */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(6,15,31,.92) 0%, rgba(6,15,31,.65) 45%, rgba(6,15,31,.15) 100%)',
        }} />

        {/* Content — grows to fill space, pushes stats bar to bottom */}
        <div className="relative z-10 flex-1 flex items-center w-full">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 pt-28 sm:pt-32 lg:pt-40 pb-10 lg:pb-16">

            <p className="fade-up fade-up-1 eyebrow text-[11px] sm:text-[12px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> WELCOME TO WILLSTONE
            </p>

            <h1 className="fade-up fade-up-2 display text-white font-semibold leading-[1.06] max-w-2xl"
              style={{ fontSize: 'clamp(2rem, 7vw, 3.4rem)' }}>
              Building Solutions.<br />
              Delivering Impact.<br />
              Creating Tomorrow.
            </h1>

            <p className="fade-up fade-up-3 text-white/75 mt-5 max-w-lg leading-relaxed"
              style={{ fontSize: 'clamp(13px, 2.5vw, 15px)' }}>
              Willstone Strategic Industries Limited delivers innovative solutions and
              trusted services across industries, driving growth, enabling progress, and
              building a stronger tomorrow.
            </p>

            {/* CTA buttons */}
            <div className="fade-up fade-up-4 flex flex-col sm:flex-row gap-3 mt-7 sm:mt-8 w-full sm:w-auto">
              <a href="#about"
                className="inline-flex items-center justify-center gap-2 btn-gold px-6 py-3 rounded-md text-[13px] font-semibold cursor-pointer w-full sm:w-auto">
                DISCOVER MORE
                <svg className="float-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 btn-outline-gold px-6 py-3 rounded-md text-[13px] font-semibold cursor-pointer w-full sm:w-auto">
                PARTNER WITH US
              </a>
            </div>

            {/* Industry pills — hidden on mobile */}
            <div className="fade-up fade-up-4 hidden sm:flex flex-wrap gap-2 mt-6 sm:mt-8">
              {['Technology','Logistics','Energy','Real Estate','Agriculture','Procurement','Import / Export'].map((tag) => (
                <span key={tag} className="hero-pill">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar — always at the bottom */}
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
        </div>
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
      <section id="industries" className="py-20 px-6 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
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

      {/* GLOBAL REACH */}
      <section className="relative py-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'var(--navy)' }}>
        <svg className="absolute right-0 top-0 h-full opacity-20" width="620" viewBox="0 0 620 400" fill="none" aria-hidden="true">
          <g fill="#C9A24B">
            {[[40,40],[70,45],[100,42],[130,60],[160,55],[200,70],[230,90],[260,100],[300,95],[340,110],[380,130],[420,120],[460,140],[500,160],[60,120],[100,150],[140,170],[180,190],[220,200],[260,210],[300,220],[340,230],[380,240],[420,250],[460,260],[200,250],[240,270],[280,280],[320,290],[360,300]].map(([cx,cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" />
            ))}
          </g>
        </svg>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 items-center">
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
      <section id="services" className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
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
      <section id="service-flow" className="py-16 px-6 lg:px-10 bg-white border-t border-gray-100">
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
      <section id="about" className="relative py-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
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
              fill sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,27,51,0) 60%, rgba(11,27,51,.5) 100%)' }} />
          </div>
        </div>

        {/* COMMITMENT — lifted out into its own light section */}
      </section>

      {/* OUR COMMITMENT */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
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

      {/* FOOTER */}
      <footer id="contact" className="pb-8 px-6 lg:px-10" style={{ background: '#03080f' }}>
        {/* Gold accent band */}
        <div style={{ background: 'linear-gradient(90deg, #C9A24B 0%, #e4cd8c 50%, #C9A24B 100%)', height: '3px' }} />
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-14">
          {/* Brand */}
          <div>
            <div className="site-logo-footer mb-5" role="img" aria-label="Willstone Strategic Industries Limited" />
            <p className="text-white/50 text-[13px] leading-relaxed max-w-xs">
              Your strategic partner for today&apos;s challenges and tomorrow&apos;s opportunities.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { label: 'LinkedIn', d: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z' },
                { label: 'Twitter', d: 'M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4 4 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 18.6a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z' },
                { label: 'Facebook', d: 'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.04v2.36H8v3.1h2.7v8z' },
                { label: 'YouTube', d: 'M22 12s0-3.2-.4-4.7a2.9 2.9 0 00-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 00-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 002 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 002-2C22 15.2 22 12 22 12zM10 15.3V8.7l6 3.3z' },
              ].map(({ label, d }) => (
                <a key={label} href="#" aria-label={label} className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#C9A24B] hover:border-[#C9A24B] transition-colors cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-semibold text-[13px] tracking-wide mb-4">QUICK LINKS</p>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#C9A24B] transition-colors cursor-pointer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-semibold text-[13px] tracking-wide mb-4">SERVICES</p>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              {FOOTER_SERVICES.map((label) => (
                <li key={label}>
                  <a href="#services" className="hover:text-[#C9A24B] transition-colors cursor-pointer">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-[13px] tracking-wide mb-4">CONTACT</p>
            <ul className="space-y-3 text-[13px] text-white/50">
              <li className="flex items-start gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" className="mt-0.5 shrink-0">
                  <path d="M4 4h16v16H4zM4 4l8 8 8-8" />
                </svg>
                info@willstone.com.ng
              </li>
              <li className="flex items-start gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" className="mt-0.5 shrink-0">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2.1z" />
                </svg>
                +234 805 123 4567
              </li>
              <li className="flex items-start gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" className="mt-0.5 shrink-0">
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
            <a href="#" className="hover:text-[#C9A24B] transition-colors cursor-pointer">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9A24B] transition-colors cursor-pointer">Terms of Use</a>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <BackToTop />
    </div>
  )
}
