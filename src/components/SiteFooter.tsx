import { useEffect, useState } from 'react'

const QUICK_LINKS = [
  { href: '/about',    label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/products', label: 'Products' },
  { href: '/contact',  label: 'Contact' },
]

const INDUSTRIES = [
  { label: 'Agriculture & Agribusiness',   href: '/services/agriculture-agribusiness' },
  { label: 'Technology & IT Solutions',    href: '/services/information-technology' },
  { label: 'Logistics & Supply Chain',     href: '/services' },
  { label: 'Real Estate & Infrastructure', href: '/services' },
  { label: 'Energy & Renewable',           href: '/services' },
  { label: 'Defence & Security',           href: '/services/defence-security' },
  { label: 'More Industries →',            href: '/services' },
]

const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/willstone-strategic-industries-limited-710016424', d: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.2-2.1 2.5-2.1 2.7 0 3.2 1.8 3.2 4.1V21H17v-18.7h-4.1v2.4h.1c.5-1 1.7-2.1 3.8-2.1 4.1 0 4.9 2.7 4.9 6.2V21h-4v-19.1c0-1.1-.1-2.6-1.6-2.6-1.6 0-1.9 1.3-1.9 2.6V21H9z' },
  { label: 'Twitter',  href: 'https://twitter.com',  d: 'M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4 4 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.3 3.2 4.3 3.2A8.3 8.3 0 012 18.5 11.7 11.7 0 0012 21c7.1 0 11-5.9 11-11v-.5c.8-.5 1.5-1.2 2-2z' },
  { label: 'Facebook', href: 'https://facebook.com', d: 'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.04v2.36H8v3.1h2.7v8z' },
  { label: 'YouTube',  href: 'https://youtube.com',  d: 'M22 12s0-3.2-.4-4.7a2.9 2.9 0 00-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 00-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 002 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 002-2c.4-1.5.4-4.7.4-4.7zm-11 3.1V8.9l6 3.1-6 3.1z' },
]

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-white font-semibold text-[13px] tracking-wide uppercase mb-2">{children}</p>
      <div style={{ width: '24px', height: '2px', background: '#C9A24B', borderRadius: '999px' }} />
    </div>
  )
}

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

const EMAILS = [
  'info@willstonestrategic.com',
  'business@willstonestrategic.com',
  'office@willstonestrategic.com',
];

const MailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C9A24B"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-0.5 shrink-0"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

export default function SiteFooter() {

  return (
    <>
     <footer id="contact" className="pb-8 px-4 sm:px-6 lg:px-16 xl:px-24" style={{ background: '#0B1B33' }}>
      <div style={{ background: 'linear-gradient(90deg, #C9A24B 0%, #e4cd8c 50%, #C9A24B 100%)', height: '3px' }} />

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-10 sm:pt-14">

        {/* Column 1 — Brand */}
        <div>
          <a href="/" className="site-logo-footer mb-4 block" aria-label="Willstone Strategic Industries Limited" />
          <p className="text-white/35 text-[12px] leading-relaxed max-w-xs mb-5">
            20 Cambridge House, Joop Berkhout Crescent, Onireke - Ibadan
          </p>
          <div className="flex flex-wrap gap-3">
            {SOCIAL.map(({ label, d, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#C9A24B] hover:border-[#C9A24B] transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d={d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <ColHeading>Quick Links</ColHeading>
          <ul className="space-y-2.5 text-[13px] text-white/50">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[#C9A24B] transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Industries */}
        <div>
          <ColHeading>Industries</ColHeading>
          <ul className="space-y-2.5 text-[13px] text-white/50">
            {INDUSTRIES.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-[#C9A24B] transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

       {/* Column 4 — Contact */}
        <div>
          <ColHeading>Contact Us</ColHeading>
          <ul className="space-y-3 text-[13px] text-white/50">
            {EMAILS.map((email) => (
              <li key={email} className="flex items-start gap-2">
                <MailIcon />
                <a href={`mailto:${email}`} className="hover:text-[#C9A24B] transition-colors break-all block">
                  {email}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.9 1.4a2 2 0 002.1.5c.9-.3 1.8-.5 2.7-.6z" />
              </svg>
              <a href="tel:+2347061964340" className="hover:text-[#C9A24B] transition-colors">
                +234 706 196 4340
              </a>
            </li>
            <li className="flex items-start gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>20, 3 Joop Berkhout Crescent, Onireke - Ibadan</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="max-w-screen-2xl mx-auto mt-10 sm:mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-[12px] text-white/40 text-center"
        style={{ borderTop: '1px solid rgba(201,162,75,0.2)' }}
      >
        <p>&copy; 2026 Willstone Strategic Industries Limited. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-5">
          <a href="/privacy-policy" className="hover:text-[#C9A24B] transition-colors">Privacy Policy</a>
          <a href="/terms-of-use" className="hover:text-[#C9A24B] transition-colors">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>

      <BackToTop />
    </>
  )
}
