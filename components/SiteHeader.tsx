'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MD_BREAKPOINT = 786 // desktop starts at 786px

const NAV_LINKS = [
  { href: '/',                label: 'HOME' },
  { href: '/about',           label: 'ABOUT US' },
  { href: '#',                label: 'OUR SERVICES', hasDropdown: true, dropdownId: 'services' },
  { href: '#',                label: 'PRODUCTS', hasDropdown: true, dropdownId: 'products' },
  { href: '/blog',            label: 'BLOG' },
]

const SERVICES_DROPDOWN = [
  { label: 'Agriculture & Agribusiness',                    href: '/services/agriculture-agribusiness' },
  { label: 'Information Technology & Software Development', href: '/services/information-technology' },
  { label: 'Electrical & Electronic Solutions',             href: '/services/electrical-electronic' },
  { label: 'Defence, Security & Protective Solutions',      href: '/services/defence-security' },
]

const PRODUCTS_DROPDOWN = [
  { label: 'Agri Inputs',        href: '/products/agri-inputs' },
  { label: 'Power Systems',      href: '/products/power-systems' },
]

// ── Desktop mega-menu data ───────────────────────────────────────────────────
const MEGA_SERVICES = [
  {
    label: 'Agriculture & Agribusiness',
    href: '/services/agriculture-agribusiness',
    desc: 'End-to-end supply chain, commodity trading, and agri-processing solutions across West Africa.',
    iconBg: '#dcfce7',
    iconColor: '#16a34a',
    cardBg: '#f0fdf4',
    cardBorder: '#bbf7d0',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6 2 3 8 3 12c0 2.5 1.5 5 3 6.5L12 22l6-3.5C19.5 17 21 14.5 21 12c0-4-3-10-9-10z"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
  },
  {
    label: 'Information Technology & Software Development',
    href: '/services/information-technology',
    desc: 'Custom software, enterprise platforms, and digital transformation for modern businesses.',
    iconBg: '#dbeafe',
    iconColor: '#2563eb',
    cardBg: '#eff6ff',
    cardBorder: '#bfdbfe',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    label: 'Electrical & Electronic Solutions',
    href: '/services/electrical-electronic',
    desc: 'Industrial electrical systems, automation engineering, and power infrastructure.',
    iconBg: '#fef9c3',
    iconColor: '#ca8a04',
    cardBg: '#fefce8',
    cardBorder: '#fde68a',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    label: 'Defence, Security & Protective Solutions',
    href: '/services/defence-security',
    desc: 'Integrated security systems, surveillance, and protective equipment for critical assets.',
    iconBg: '#fee2e2',
    iconColor: '#dc2626',
    cardBg: '#fff1f2',
    cardBorder: '#fecdd3',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

const MEGA_PRODUCTS = [
  {
    label: 'Agri Inputs & Commodities',
    href: '/products/agri-inputs',
    desc: 'Premium agricultural commodities sourced, graded and supplied across Nigeria and international markets.',
    iconBg: '#dcfce7',
    iconColor: '#16a34a',
    cardBg: '#f0fdf4',
    cardBorder: '#bbf7d0',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6 2 3 8 3 12c0 2.5 1.5 5 3 6.5L12 22l6-3.5C19.5 17 21 14.5 21 12c0-4-3-10-9-10z"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
  },
  {
    label: 'Power & Energy Solutions',
    href: '/products/power-systems',
    desc: 'Solar panels, batteries, and energy-saving appliances for homes, businesses and off-grid communities.',
    iconBg: '#fef9c3',
    iconColor: '#ca8a04',
    cardBg: '#fefce8',
    cardBorder: '#fde68a',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
]

const MEGA_QUICK_LINKS = [
  { label: 'About Willstone',     href: '/about' },
  { label: 'Partner With Us',     href: '/contact' },
  { label: 'Our Track Record',    href: '/about#track-record' },
  { label: 'Industries We Serve', href: '/#industries' },
  { label: 'Request a Proposal',  href: '/contact' },
]

const MEGA_PRODUCT_QUICK_LINKS = [
  { label: 'Products Overview', href: '/products' },
  { label: 'Contact Sales',     href: '/contact' },
]

interface SiteHeaderProps {
  variant?: 'transparent' | 'solid'
}

export default function SiteHeader({ variant = 'transparent' }: SiteHeaderProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen]                     = useState(false)
  const [isServicesOpen, setIsServicesOpen]             = useState(false)
  const [isProductsOpen, setIsProductsOpen]             = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu  = () => { setIsMenuOpen(false); setIsMobileServicesOpen(false); setIsMobileProductsOpen(false); setIsServicesOpen(false); setIsProductsOpen(false) }

  const openDropdown = (id?: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    if (id === 'products') {
      setIsProductsOpen(true)
      setIsServicesOpen(false)
    } else {
      setIsServicesOpen(true)
      setIsProductsOpen(false)
    }
  }
  const closeDropdown = (id?: string) => {
    closeTimer.current = setTimeout(() => {
      if (id === 'products') setIsProductsOpen(false)
      else setIsServicesOpen(false)
    }, 180)
  }

  const toggleDropdown = (id?: string) => {
    // allow click-to-open on desktop (useful for touch laptops)
    if (id === 'products') {
      setIsProductsOpen((v) => !v)
      setIsServicesOpen(false)
    } else {
      setIsServicesOpen((v) => !v)
      setIsProductsOpen(false)
    }
  }

  // Returns true when this nav link should be underlined as active
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= MD_BREAKPOINT) closeMenu() }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8 md:pt-5">
        <div
          className="mx-auto flex items-center justify-between px-5 md:px-8 py-3"
          style={{
            maxWidth: '56rem',
            background: 'rgba(11,27,51,0.92)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: 'none',
          }}
        >

          {/* Logo → home */}
          <Link href="/" className="site-logo cursor-pointer" aria-label="Willstone Strategic Industries Limited" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-[13px] text-white/85 font-medium">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href + link.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(link.dropdownId)}
                  onMouseLeave={() => closeDropdown(link.dropdownId)}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      // On desktop/touch devices keep click from navigating and toggle dropdown instead
                      if (typeof window !== 'undefined' && window.innerWidth >= MD_BREAKPOINT) {
                        e.preventDefault()
                        toggleDropdown(link.dropdownId)
                      }
                    }}
                    className={`navlink flex items-center gap-1${isActive(link.href) ? ' active' : ''}`}
                  >
                    {link.label}
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      style={{ transform: (link.dropdownId === 'products' ? isProductsOpen : isServicesOpen) ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>

                  {/* dropdown panels */}
                  <div
                    className={`mega-dropdown${(link.dropdownId === 'products' ? isProductsOpen : isServicesOpen) ? ' open' : ''}`}
                    onMouseEnter={() => openDropdown(link.dropdownId)}
                    onMouseLeave={() => closeDropdown(link.dropdownId)}
                  >
                    {/* ── Left panel ── */}
                    <div className="mega-left">
                      <img src="/assets/images/NavItem.png" alt="" aria-hidden="true" className="mega-left-bg" />
                      <div className="mega-left-overlay" />
                      <div className="mega-left-content">
                        <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>
                          {link.dropdownId === 'products' ? 'Our Products' : 'Our Services'}
                        </p>
                        <h3 className="text-[18px] font-bold text-white leading-snug mb-3">
                          {link.dropdownId === 'products' ? 'Products & Solutions' : 'What We Deliver'}
                        </h3>
                        <p className="text-[12.5px] text-white/65 leading-relaxed mb-6">
                          {link.dropdownId === 'products'
                            ? 'Products that complement our services and deliver practical value to clients.'
                            : 'Willstone drives growth across industries from farm to digital infrastructure and beyond.'}
                        </p>
                        <Link
                          href="/contact"
                          onClick={() => { if (link.dropdownId === 'products') setIsProductsOpen(false); else setIsServicesOpen(false) }}
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

                    {/* ── Middle panel: white bg, colored card backgrounds ── */}
                    <div style={{ background: '#ffffff', padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {(link.dropdownId === 'products' ? MEGA_PRODUCTS : MEGA_SERVICES).map((svc) => {
                        const isCurrentPage = pathname === svc.href || pathname.startsWith(svc.href + '/')
                        return (
                          <Link
                            key={svc.href}
                            href={svc.href}
                            onClick={() => { if (link.dropdownId === 'products') setIsProductsOpen(false); else setIsServicesOpen(false) }}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              padding: '11px 13px',
                              borderRadius: '10px',
                              textDecoration: 'none',
                              background: svc.cardBg,
                              border: `1px solid ${isCurrentPage ? svc.iconColor + '55' : svc.cardBorder}`,
                              opacity: isCurrentPage ? 1 : 0.92,
                              transition: 'opacity 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease',
                              boxShadow: isCurrentPage ? `0 0 0 2px ${svc.iconColor}33` : 'none',
                            }}
                            onMouseEnter={e => {
                              const el = e.currentTarget as HTMLElement
                              el.style.opacity = '1'
                              el.style.borderColor = svc.iconColor + '88'
                              el.style.boxShadow = `0 2px 12px ${svc.iconColor}22`
                            }}
                            onMouseLeave={e => {
                              const el = e.currentTarget as HTMLElement
                              el.style.opacity = isCurrentPage ? '1' : '0.92'
                              el.style.borderColor = isCurrentPage ? svc.iconColor + '55' : svc.cardBorder
                              el.style.boxShadow = isCurrentPage ? `0 0 0 2px ${svc.iconColor}33` : 'none'
                            }}
                          >
                            {/* Colored icon chip */}
                            <span
                              style={{
                                flexShrink: 0,
                                width: 34,
                                height: 34,
                                borderRadius: 8,
                                background: svc.iconBg,
                                color: svc.iconColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 1,
                              }}
                            >
                              {svc.icon}
                            </span>
                            <div>
                              <p style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', marginBottom: 2, lineHeight: 1.3 }}>{svc.label}</p>
                              <p style={{ fontSize: 11.5, color: '#64748b', lineHeight: 1.5 }}>{svc.desc}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>

                    {/* ── Right panel: quick links ── */}
                    <div style={{ background: '#ffffff', padding: '28px 22px 28px 20px', borderLeft: '1px solid #f1f5f9' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
                        Quick Links
                      </p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {(link.dropdownId === 'products' ? MEGA_PRODUCT_QUICK_LINKS : MEGA_QUICK_LINKS).map((l) => (
                          <li key={l.label + l.href}>
                            <Link
                              href={l.href}
                              onClick={() => { if (link.dropdownId === 'products') setIsProductsOpen(false); else setIsServicesOpen(false) }}
                              style={{
                                display: 'block',
                                padding: '7px 10px',
                                fontSize: 13,
                                color: '#334155',
                                borderRadius: 6,
                                textDecoration: 'none',
                                transition: 'background 0.15s ease, color 0.15s ease',
                              }}
                              onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.background = '#f1f5f9'
                                ;(e.currentTarget as HTMLElement).style.color = '#0f172a'
                              }}
                              onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.background = 'transparent'
                                ;(e.currentTarget as HTMLElement).style.color = '#334155'
                              }}
                            >
                              {l.label}
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
            className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-[9px] rounded-full cursor-pointer tracking-wide transition-colors"
            style={{ background: '#ffffff', color: 'var(--navy)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f0f0f0' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff' }}
          >
            Contact Us
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>

          {/* Hamburger */}
          <button
            id="menu-btn"
            className={`md:hidden text-white relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer hamburger${isMenuOpen ? ' is-open' : ''}`}
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
        className={`drawer-backdrop md:hidden${isMenuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        id="mobile-menu"
        className={`drawer md:hidden${isMenuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <Link href="/" className="site-logo-sm cursor-pointer" aria-label="Willstone" onClick={closeMenu} />
          <button
            onClick={closeMenu}
            className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex flex-col px-6 py-5 gap-0 text-[17px] text-white/90 font-semibold tracking-wide overflow-y-auto flex-1">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div key={link.href + link.label} className="border-b border-white/10">
                <button
                  className="w-full flex items-center justify-between py-5 cursor-pointer"
                  onClick={() => {
                    if (link.dropdownId === 'products') setIsMobileProductsOpen((o) => !o)
                    else setIsMobileServicesOpen((o) => !o)
                  }}
                >
                  <span style={{ color: isActive(link.href) ? 'var(--gold-light)' : undefined }}>{link.label}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    style={{ transform: (link.dropdownId === 'products' ? isMobileProductsOpen : isMobileServicesOpen) ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className={`mobile-submenu${link.dropdownId === 'products' ? (isMobileProductsOpen ? ' open' : '') : (isMobileServicesOpen ? ' open' : '')}`}>
                  {(link.dropdownId === 'products' ? PRODUCTS_DROPDOWN : SERVICES_DROPDOWN).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block py-3 pl-4 text-[14px] font-medium border-l-2 mb-2 cursor-pointer transition-colors ${
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
                className={`py-5 border-b border-white/10 transition-colors cursor-pointer ${
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
        <div className="px-6 py-6 border-t border-white/10">
          <Link
  href="/contact"
  onClick={closeMenu}
  className="flex items-center justify-center gap-2 btn-slate text-[14px] font-semibold px-5 py-3 rounded-full cursor-pointer w-full"
  style={{ background: '#ffffff', color: 'var(--navy)' }}
>
  CONTACT US
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
</Link>
        </div>
      </div>
    </>
  )
   }
