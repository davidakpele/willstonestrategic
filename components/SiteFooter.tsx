import Link from 'next/link'

const QUICK_LINKS = [
  { href: '/#about',          label: 'About Us' },
  { href: '/#services',       label: 'Our Services' },
  { href: '/#industries',     label: 'Industries' },
  { href: '/#sustainability', label: 'Sustainability' },
  { href: '/contact',         label: 'Contact' },
]

const FOOTER_SERVICES = [
  { label: 'Software & IT',                   href: '/#services' },
  { label: 'Logistics & Supply Chain',        href: '/#services' },
  { label: 'Import & Export',                 href: '/#services' },
  { label: 'Agriculture & Agro-Logistics',    href: '/#services' },
  { label: 'Engineering & Infrastructure',    href: '/#services' },
  { label: 'More Services',                   href: '/#services' },
]

const SOCIAL = [
  { label: 'LinkedIn', d: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z' },
  { label: 'Twitter', d: 'M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4 4 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 18.6a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z' },
  { label: 'Facebook', d: 'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.04v2.36H8v3.1h2.7v8z' },
  { label: 'YouTube', d: 'M22 12s0-3.2-.4-4.7a2.9 2.9 0 00-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 00-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 002 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 002-2C22 15.2 22 12 22 12zM10 15.3V8.7l6 3.3z' },
]

export default function SiteFooter() {
  return (
    <footer id="contact" className="pb-8 px-6 lg:px-10" style={{ background: '#03080f' }}>
      {/* Gold accent band */}
      <div style={{ background: 'linear-gradient(90deg, #C9A24B 0%, #e4cd8c 50%, #C9A24B 100%)', height: '3px' }} />

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-14">

        {/* Brand */}
        <div>
          <Link href="/" className="site-logo-footer mb-5 block" aria-label="Willstone Strategic Industries Limited" />
          <p className="text-white/50 text-[13px] leading-relaxed max-w-xs">
            Your strategic partner for today&apos;s challenges and tomorrow&apos;s opportunities.
          </p>
          <div className="flex gap-3 mt-5">
            {SOCIAL.map(({ label, d, href }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[#C9A24B] hover:border-[#C9A24B] transition-colors cursor-pointer">
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
                <Link href={link.href} className="hover:text-[#C9A24B] transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-white font-semibold text-[13px] tracking-wide mb-4">SERVICES</p>
          <ul className="space-y-2.5 text-[13px] text-white/50">
            {FOOTER_SERVICES.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-[#C9A24B] transition-colors">{item.label}</Link>
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
              <a href="mailto:info@willstone.com.ng" className="hover:text-[#C9A24B] transition-colors">
                info@willstone.com.ng
              </a>
            </li>
            <li className="flex items-start gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" className="mt-0.5 shrink-0">
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2.1z" />
              </svg>
              <a href="tel:+2348051234567" className="hover:text-[#C9A24B] transition-colors">
                +234 805 123 4567
              </a>
            </li>
            <li className="flex items-start gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2" className="mt-0.5 shrink-0">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <a href="https://maps.google.com/?q=Lagos,Nigeria" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A24B] transition-colors">
                Plot 10, Industrial Avenue, Lagos, Nigeria
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/40">
        <p>&copy; 2026 Willstone Strategic Industries Limited. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="hover:text-[#C9A24B] transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-use" className="hover:text-[#C9A24B] transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}
