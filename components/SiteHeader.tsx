'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/',              label: 'HOME' },
  { href: '/#about',        label: 'ABOUT US' },
  { href: '/#services',     label: 'OUR SERVICES', hasDropdown: true },
  { href: '/#sustainability', label: 'SUSTAINABILITY' },
  { href: '/contact',       label: 'CONTACT' },
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

interface SiteHeaderProps {
  /** 'transparent' (default) — blurred gradient for hero pages
   *  'solid'       — opaque navy for inner pages with no hero */
  variant?: 'transparent' | 'solid'
}

export default function SiteHeader({ variant = 'transparent' }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen]                 = useState(false)
  const [isServicesOpen, setIsServicesOpen]         = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu  = () => { setIsMenuOpen(false); setIsMobileServicesOpen(false) }

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) closeMenu() }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: variant === 'solid'
            ? '#0b1b33'
            : 'linear-gradient(180deg, rgba(11,27,51,.95), rgba(11,27,51,.80))',
          backdropFilter: variant === 'transparent' ? 'blur(6px)' : undefined,
          borderBottom: variant === 'solid' ? '1px solid rgba(255,255,255,.08)' : undefined,
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

          {/* Logo → home */}
          <Link href="/" className="site-logo cursor-pointer" aria-label="Willstone Strategic Industries Limited" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] text-white/85 font-medium">
            {NAV_LINKS.map((link, i) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`navlink flex items-center gap-1${i === 0 ? ' active' : ''}`}
                  >
                    {link.label}
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      style={{
                        transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  <div className={`nav-dropdown${isServicesOpen ? ' open' : ''}`}>
                    <div className="py-2">
                      {SERVICES_DROPDOWN.map((item) => (
                        <Link
                          key={item}
                          href="/#services"
                          className="nav-dropdown-item"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navlink${i === 0 ? ' active' : ''}`}
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
            PARTNER WITH US
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
                  <span>{link.label}</span>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    style={{
                      transform: isMobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className={`mobile-submenu${isMobileServicesOpen ? ' open' : ''}`}>
                  {SERVICES_DROPDOWN.map((item) => (
                    <Link
                      key={item}
                      href="/#services"
                      className="block py-2.5 pl-4 text-[13px] text-white/55 hover:text-[#C9A24B] border-l-2 border-white/10 hover:border-[#C9A24B] mb-1 cursor-pointer transition-colors"
                      onClick={closeMenu}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="py-3.5 border-b border-white/8 hover:text-[#C9A24B] transition-colors cursor-pointer"
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
