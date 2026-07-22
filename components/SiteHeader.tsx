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

const SERVICES_DROPDOWN = [
  { label: 'Agriculture & Agribusiness',                    href: '/services/agriculture-agribusiness' },
  { label: 'Information Technology & Software Development', href: '/services/information-technology' },
  { label: 'Electrical & Electronic Solutions',             href: '/services/electrical-electronic' },
  { label: 'Defence, Security & Protective Solutions',      href: '/services/defence-security' },
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
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
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
                    className={`nav-dropdown${isServicesOpen ? ' open' : ''}`}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="py-2">
                      {SERVICES_DROPDOWN.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`nav-dropdown-item${pathname === item.href ? ' active' : ''}`}
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
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
