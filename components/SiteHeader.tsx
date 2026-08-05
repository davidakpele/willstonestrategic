'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/',                label: 'HOME' },
  { href: '/about',           label: 'ABOUT US' },
  { href: '/services',        label: 'OUR SERVICES', hasDropdown: true },
  { href: '/contact',         label: 'CONTACT' },
]

// Used in mobile drawer only
const SERVICES_DROPDOWN = [
  { label: 'Agriculture & Agribusiness',                    href: '/services/agriculture-agribusiness' },
  { label: 'Information Technology & Software Development', href: '/services/information-technology' },
  { label: 'Electrical & Electronic Solutions',             href: '/services/electrical-electronic' },
  { label: 'Defence, Security & Protective Solutions',      href: '/services/defence-security' },
]

// ── Desktop mega-menu data ───────────────────────────────────────────────────
const MEGA_SERVICES = [
  {
    label: 'Agriculture & Agribusiness',
    href: '/services/agriculture-agribusiness',
    desc: 'End-to-end supply chain, commodity trading, and agri-processing solutions across West Africa.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    label: 'Information Technology & Software Development',
    href: '/services/information-technology',
    desc: 'Custom software, enterprise platforms, and digital transformation for modern businesses.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    label: 'Electrical & Electronic Solutions',
    href: '/services/electrical-electronic',
    desc: 'Industrial electrical systems, automation engineering, and power infrastructure.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    label: 'Defence, Security & Protective Solutions',
    href: '/services/defence-security',
    desc: 'Integrated security systems, surveillance, and protective equipment for critical assets.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

const MEGA_QUICK_LINKS = [
  { label: 'About Willstone',    href: '/about' },
  { label: 'Partner With Us',    href: '/contact' },
  { label: 'Our Track Record',   href: '/about#track-record' },
  { label: 'Industries We Serve',href: '/#industries' },
  { label: 'Request a Proposal', href: '/contact' },
]

interface SiteHeaderProps {
  variant?: 'transparent' | 'solid'
}

export default function SiteHeader({ variant = 'transparent' }: SiteHeaderProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen]                     = useState(false)
  const [isServicesOpen, setIsServicesOpen]             = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu  = () => { setIsMenuOpen(false); setIsMobileServicesOpen(false) }

  const openDropdown  = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsServicesOpen(true)
  }
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 180)
  }

  // Returns true when this nav link should be underlined as active
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) closeMenu() }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:px-8 lg:pt-5">
        <div
          className="mx-auto flex items-center justify-between px-5 lg:px-8 py-3"
          style={{
            maxWidth: '56rem',
            background: 'rgba(11,27,51,0.92)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
          }}
        >

          {/* Logo → home */}
          <Link href="/" className="site-logo cursor-pointer" aria-label="Willstone Strategic Industries Limited" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] text-white/85 font-medium">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}>
                  <Link
                    href={link.href}
                    className={`navlink flex items-center gap-1${isActive(link.href) ? ' active' : ''}`}
                  >
                    {link.label}
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>
                  <div
                    className={`mega-dropdown${isServicesOpen ? ' open' : ''}`}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    {/* ── Left panel ── */}
                    <div className="mega-left">
                      {/* background image */}
                      <img
                        src="/assets/images/NavItem.png"
                        alt=""
                        aria-hidden="true"
                        className="mega-left-bg"
                      />
                      {/* navy + blur colour overlay */}
                      <div className="mega-left-overlay" />

                      {/* content sits above image */}
                      <div className="mega-left-content">
                        <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>
                          Our Services
                        </p>
                        <h3 className="text-[18px] font-bold text-white leading-snug mb-3">
                          What We<br />Deliver
                        </h3>
                        <p className="text-[12.5px] text-white/65 leading-relaxed mb-6">
                          Willstone drives growth across industries from farm to digital infrastructure and beyond.
                        </p>
                        <Link
                          href="/contact"
                          onClick={() => setIsServicesOpen(false)}
                          className="mt-auto inline-flex items-center gap-2 text-[12px] font-semibold rounded-full px-4 py-2 cursor-pointer"
                          style={{ background: 'var(--gold)', color: '#1a1408' }}
                        >
                          Get in touch
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M13 6l6 6-6 6"/>
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* ── Middle panel: service cards ── */}
                    <div className="mega-cards">
                      {MEGA_SERVICES.map((svc) => (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          onClick={() => setIsServicesOpen(false)}
                          className={`mega-card${pathname === svc.href || pathname.startsWith(svc.href + '/') ? ' active' : ''}`}
                        >
                          <span className="mega-card-icon">{svc.icon}</span>
                          <div>
                            <p className="text-[13px] font-semibold text-white mb-0.5 leading-tight">{svc.label}</p>
                            <p className="text-[11.5px] text-white/55 leading-relaxed">{svc.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* ── Right panel: quick links ── */}
                    <div className="mega-right">
                      <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
                        Quick Links
                      </p>
                      <ul className="flex flex-col gap-0.5">
                        {MEGA_QUICK_LINKS.map((link) => (
                          <li key={link.label + link.href}>
                            <Link
                              href={link.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="mega-quick-link"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navlink${isActive(link.href) ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA button → contact page */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 btn-gold text-[13px] font-semibold px-5 py-[9px] rounded-full cursor-pointer tracking-wide"
          >
            Contact Us
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>

          {/* Hamburger */}
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

      {/* Backdrop */}
      <div
        className={`drawer-backdrop lg:hidden${isMenuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        id="mobile-menu"
        className={`drawer lg:hidden${isMenuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <Link href="/" className="site-logo-sm cursor-pointer" aria-label="Willstone" onClick={closeMenu} />
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
                  <span style={{ color: isActive(link.href) ? 'var(--gold-light)' : undefined }}>{link.label}</span>
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
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block py-2.5 pl-4 text-[13px] border-l-2 mb-1 cursor-pointer transition-colors ${
                        pathname === item.href
                          ? 'text-[#C9A24B] border-[#C9A24B]'
                          : 'text-white/55 hover:text-[#C9A24B] border-white/10 hover:border-[#C9A24B]'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3.5 border-b border-white/8 transition-colors cursor-pointer ${
                  isActive(link.href) ? 'text-[#C9A24B]' : 'hover:text-[#C9A24B]'
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 py-5 border-t border-white/10">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 btn-gold text-[13px] font-semibold px-5 py-3 rounded-full cursor-pointer w-full"
          >
            PARTNER WITH US
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}
