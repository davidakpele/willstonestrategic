import { useEffect, useState } from 'react'

const QUICK_LINKS = [
  { href: '/about',    label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/products', label: 'Products' },
  { href: '/blog',     label: 'Blog' },
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
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/willstone-strategic-industries-limited-710016424', d: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z' },
  { label: 'Twitter',  href: 'https://twitter.com',  d: 'M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4 4 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 18.6a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z' },
  { label: 'Facebook', href: 'https://facebook.com', d: 'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.04v2.36H8v3.1h2.7v8z' },
  { label: 'YouTube',  href: 'https://youtube.com',  d: 'M22 12s0-3.2-.4-4.7a2.9 2.9 0 00-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 00-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 002 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 002-2C22 15.2 22 12 22 12zM10 15.3V8.7l6 3.3z' },
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

export default function SiteFooter() {
  const [email, setEmail] = useState('')

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <>
      <footer id="contact" className="pb-8 px-6 lg:px-16 xl:px-24" style={{ background: '#0B1B33' }}>
        <div style={{ background: 'linear-gradient(90deg, #C9A24B 0%, #e4cd8c 50%, #C9A24B 100%)', height: '3px' }} />

        <div className="max-w-screen-2xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pt-14">

          {/* Column 1 — Brand */}
          <div>
            <a href="/" className="site-logo-footer mb-5 block" aria-label="Willstone Strategic Industries Limited" />
            <p className="text-white/50 text-[13px] leading-relaxed max-w-xs mb-2">
              Strategic Solutions. Global Impact.
            </p>
            <p className="text-white/35 text-[12px] leading-relaxed max-w-xs mb-5">
              20 Cambridge House, Joop Berkhout Crescent, Onireke - Ibadan
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ label, d, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#C9A24B] hover:border-[#C9A24B] transition-colors cursor-pointer"
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
              <li className="flex items-start gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" className="mt-0.5 shrink-0">
                  <path d="M4 4h16v16H4zM4 4l8 8 8-8" />
                </svg>
                <a href="mailto:info@willstonestrategic.com" className="hover:text-[#C9A24B] transition-colors break-all">
                  info@willstonestrategic.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" className="mt-0.5 shrink-0">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2.1z" />
                </svg>
                <a href="tel:+2347061964340" className="hover:text-[#C9A24B] transition-colors">
                  +234 706 196 4340
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" className="mt-0.5 shrink-0">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2.1z" />
                </svg>
                <a href="tel:+2349019384496" className="hover:text-[#C9A24B] transition-colors">
                  +234 901 938 4496
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" className="mt-0.5 shrink-0">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>20, 3 Joop Berkhout Crescent, Onireke - Ibadan</span>
              </li>
            </ul>
          </div>

          {/* Column 5 — Newsletter */}
          <div>
            <ColHeading>Join Our Network</ColHeading>
            <p className="text-white/50 text-[13px] mb-4 leading-relaxed">
              Subscribe to our newsletter
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center gap-0">
              <div
                className="flex items-center flex-1 rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-transparent px-4 py-2.5 text-[12px] text-white/70 placeholder:text-white/30 outline-none min-w-0"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center mr-0.5 transition-opacity hover:opacity-80"
                  style={{ background: '#C9A24B' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="max-w-screen-2xl mx-auto mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/40"
          style={{ borderTop: '1px solid rgba(201,162,75,0.2)' }}
        >
          <p>&copy; 2026 Willstone Strategic Industries Limited. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="hover:text-[#C9A24B] transition-colors">Privacy Policy</a>
            <a href="/terms-of-use" className="hover:text-[#C9A24B] transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  )
}
