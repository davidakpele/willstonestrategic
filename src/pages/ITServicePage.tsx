import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Seo from '../components/Seo'

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const TECH = [
  { name: 'React',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Node.js',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Flutter',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'AWS',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Docker',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'GraphQL',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
]

const CATEGORIES: { title: string; desc: string; accentColor: string }[] = [
  { title: 'Web Applications',     desc: 'Scalable, secure and high-performing web platforms for businesses and customers.',         accentColor: '#2563eb' },
  { title: 'Mobile Applications',  desc: 'Native and cross-platform mobile apps for iOS and Android users.',                        accentColor: '#0d9488' },
  { title: 'Desktop Applications', desc: 'Robust desktop solutions for operations, automation and specialised workflows.',            accentColor: '#7c3aed' },
  { title: 'Enterprise Systems',   desc: 'End-to-end ERP, CRM and management platforms for large organisations.',                    accentColor: '#ea580c' },
  { title: 'FinTech & Payments',   desc: 'Payment systems, multi-currency wallets and secure financial platforms.',                  accentColor: '#16a34a' },
]

const PROJECTS: {
  tag: string; title: string; subtitle: string; desc: string;
  bullets?: string[]; platforms?: string[];
  image: string; featured: boolean;
}[] = [
  {
    tag: 'WEB APP', title: 'ePay', subtitle: 'Multi-Currency & Cross-Border Payment Platform',
    desc: 'ePay is a secure payment system designed to support multi-currency transactions and cross-border payment solutions.',
    bullets: ['Multi-currency payment processing','Cross-border transaction support','Google-tier fraud detection','Detailed transaction tracking','REST / gRPC for easy integration'],
    platforms: ['Web Platform','Mobile App (Android & iOS)','Secure API','Enterprise Ready'],
    image: '/assets/images/epay.png', featured: true,
  },
  { tag: 'WEB APP',    title: 'BizPortal',    subtitle: 'Business Management Platform',        desc: 'Business management software for company actions, and operations at scale.',                                    image: '/assets/images/software-about-1.png', featured: false },
  { tag: 'MOBILE APP', title: 'SalesTrack',   subtitle: 'Mobile Sales Management App',         desc: 'Mobile app for sales teams managing pipelines, customer performance on the go.',                               image: '/assets/images/software-engineers.jpg', featured: false },
  { tag: 'WEB APP',    title: 'InventoryPro', subtitle: 'Inventory Management System',         desc: 'Powerful inventory management system for forecasting, stock tracking and reporting.',                          image: '/assets/images/soft.jpg', featured: false },
  { tag: 'ENTERPRISE', title: 'HRSuite',      subtitle: 'HR & Payroll Platform',               desc: 'Enterprise HR and payroll management system designed for medium and large organisations.',                     image: '/assets/images/software.jpg', featured: false },
  { tag: 'FINTECH',    title: 'AnalyticsHub', subtitle: 'Analytics & Reporting Dashboard',     desc: 'Analytics and reporting platform with real-time intelligence and data-driven decisions.',                      image: '/assets/images/software-about-1.png', featured: false },
]

const PROCESS: { num: string; title: string; desc: string }[] = [
  { num: '01', title: 'Discovery',             desc: 'We work with you to understand goals, data and requirements.' },
  { num: '02', title: 'Architecture & Design', desc: 'We map the architecture, UI/UX and technical structure.' },
  { num: '03', title: 'Development',           desc: 'We build clean, secure and scalable software solutions.' },
  { num: '04', title: 'Testing & Deployment',  desc: 'We test thoroughly and deploy at high quality and confidence.' },
  { num: '05', title: 'Support & Growth',      desc: 'We provide ongoing support and help your solution grow.' },
]

const SERVICES: { title: string; desc: string; accentColor: string }[] = [
  { title: 'Custom Software Development', desc: 'Tailored software built to solve your unique business challenges.',           accentColor: '#2563eb' },
  { title: 'Cloud Solutions',             desc: 'Scalable, secure and cost-effective cloud infrastructure and migration.',     accentColor: '#0d9488' },
  { title: 'System Integration',          desc: 'Seamless integration with third-party systems and APIs.',                    accentColor: '#7c3aed' },
  { title: 'Cybersecurity',               desc: 'Secure your systems and data with best-in-class security practices.',        accentColor: '#dc2626' },
  { title: 'Database Management',         desc: 'Design, optimisation and management of relational databases.',               accentColor: '#ea580c' },
  { title: 'API Development',             desc: 'RESTful and GraphQL APIs designed to be fast, reliable and scalable.',       accentColor: '#16a34a' },
  { title: 'RPA & Automation',            desc: 'Intelligent process automation and robotic workflow capabilities.',          accentColor: '#c9a24b' },
  { title: 'IT Support & Maintenance',    desc: 'Ongoing technical support and system maintenance for your stack.',           accentColor: '#0891b2' },
]

/* ─── HELPERS ───────────────────────────────────────────────────────────── */

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

function accentClassSuffix(color: string): string {
  const map: Record<string, string> = {
    '#2563eb': 'blue',
    '#0d9488': 'teal',
    '#7c3aed': 'purple',
    '#dc2626': 'red',
    '#ea580c': 'orange',
    '#16a34a': 'green',
    '#c9a24b': 'gold',
    '#0891b2': 'cyan',
  }
  return map[color] ?? 'blue'
}

/* ─── CATEGORY ICON PATHS ────────────────────────────────────────────────── */

function CategoryIcon({ title, color }: { title: string; color: string }) {
  let paths: React.ReactNode
  if (title === 'Web Applications') {
    paths = (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" fill="none" stroke={color} strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </>
    )
  } else if (title === 'Mobile Applications') {
    paths = (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" fill="none" stroke={color} strokeWidth="2"/>
        <path d="M11 18h2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </>
    )
  } else if (title === 'Desktop Applications') {
    paths = (
      <>
        <rect x="2" y="4" width="20" height="14" rx="2" fill="none" stroke={color} strokeWidth="2"/>
        <path d="M8 20h8M12 18v2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </>
    )
  } else if (title === 'Enterprise Systems') {
    paths = (
      <>
        <rect x="2" y="2" width="9" height="9" rx="1" fill="none" stroke={color} strokeWidth="2"/>
        <rect x="13" y="2" width="9" height="9" rx="1" fill="none" stroke={color} strokeWidth="2"/>
        <rect x="2" y="13" width="9" height="9" rx="1" fill="none" stroke={color} strokeWidth="2"/>
        <rect x="13" y="13" width="9" height="9" rx="1" fill="none" stroke={color} strokeWidth="2"/>
      </>
    )
  } else {
    paths = (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke={color} strokeWidth="2"/>
        <path d="M2 10h20" stroke={color} strokeWidth="2"/>
        <path d="M6 15h2M10 15h2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </>
    )
  }
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {paths}
    </svg>
  )
}

/* ─── SERVICE ICON PATHS ─────────────────────────────────────────────────── */

function ServiceIcon({ title, color }: { title: string; color: string }) {
  let content: React.ReactNode
  if (title === 'Custom Software Development') {
    content = <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M12 6l-2 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  } else if (title === 'Cloud Solutions') {
    content = <path d="M18 10h-1.3A6 6 0 105 15h13a4 4 0 000-5z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  } else if (title === 'System Integration') {
    content = <path d="M4 12h4M16 12h4M8 12a4 4 0 008 0M8 12a4 4 0 018 0" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  } else if (title === 'Cybersecurity') {
    content = <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  } else if (title === 'Database Management') {
    content = (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke={color} strokeWidth="2"/>
        <path d="M3 5v4c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke={color} strokeWidth="2"/>
        <path d="M3 9v4c0 1.66 4 3 9 3s9-1.34 9-3V9" stroke={color} strokeWidth="2"/>
        <path d="M3 13v4c0 1.66 4 3 9 3s9-1.34 9-3v-4" stroke={color} strokeWidth="2"/>
      </>
    )
  } else if (title === 'API Development') {
    content = <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M12 3v18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  } else if (title === 'RPA & Automation') {
    content = (
      <>
        <rect x="7" y="3" width="10" height="6" rx="1" stroke={color} strokeWidth="2"/>
        <path d="M12 9v3M8 12h8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <rect x="3" y="15" width="5" height="6" rx="1" stroke={color} strokeWidth="2"/>
        <rect x="10" y="15" width="5" height="6" rx="1" stroke={color} strokeWidth="2"/>
        <rect x="17" y="15" width="5" height="6" rx="1" stroke={color} strokeWidth="2"/>
      </>
    )
  } else {
    content = <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a6 6 0 01-7 7L7 19.7a2.12 2.12 0 01-3-3L9.7 10a6 6 0 017-7l-3 3z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {content}
    </svg>
  )
}

/* ─── PAGE COMPONENT ─────────────────────────────────────────────────────── */

export default function ITServicePage() {
  const techRow1 = TECH.slice(0, 6)
  const techRow2 = TECH.slice(6, 12)
  const nonFeatured = PROJECTS.filter((p) => !p.featured)
  const featured = PROJECTS.find((p) => p.featured)!

  return (
    <div style={{ fontFamily: 'var(--font-display)' }}>
      <Seo
        title="Software Development & IT Solutions | Willstone Strategic Industries"
        description="Custom software development, web apps, mobile apps, enterprise systems, and IT consultancy from Willstone Strategic Industries Limited, based in Ibadan, Nigeria."
        canonical="/services/information-technology"
        keywords={[
          'software development Nigeria', 'IT company Ibadan', 'custom software Nigeria',
          'web app development Nigeria', 'mobile app development Nigeria',
          'enterprise software Nigeria', 'IT solutions Ibadan', 'Willstone IT services',
          'software company Nigeria', 'technology solutions Nigeria',
        ]}
        image="/assets/images/soft.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://willstonestrategic.com/services/information-technology',
          name: 'Software Development & IT Solutions',
          description: 'Custom software development, web applications, mobile apps, enterprise systems, and IT consultancy from Willstone Strategic Industries Limited.',
          provider: { '@id': 'https://willstonestrategic.com/#organization' },
          areaServed: [
            { '@type': 'Country', name: 'Nigeria' },
            { '@type': 'Place', name: 'Africa' },
          ],
          serviceType: 'Software Development & IT Consultancy',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://willstonestrategic.com' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://willstonestrategic.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Information Technology', item: 'https://willstonestrategic.com/services/information-technology' },
            ],
          },
        }}
      />
      <SiteHeader variant="transparent" />

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="it-hero-bg relative overflow-hidden flex flex-col"
        style={{ minHeight: '100vh' }}
      >
        {/* Dot pattern overlay */}
        <div className="it-dots-overlay" />
        {/* Diagonal lines overlay */}
        <div className="it-lines-overlay" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-10"
          style={{ paddingTop: '96px', paddingBottom: '100px', maxWidth: '960px', margin: '0 auto', width: '100%' }}
        >
          <p className="eyebrow text-[11px] font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--gold)' }}>
            SOFTWARE &amp; IT SOLUTIONS
          </p>

          <h1
            className="display font-bold text-white leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            We Build Software<br />
            That Powers <span style={{ color: 'var(--gold)' }}>Business</span>
          </h1>

          <p className="text-white/65 max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontSize: '15px' }}>
            Web, mobile, desktop and enterprise solutions built with modern technologies to help
            businesses operate smarter, scale faster and deliver great experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[13.5px] font-semibold transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--gold)', color: '#1a1408' }}
            >
              Explore Our Applications
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[13.5px] font-semibold transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Stats bar — pinned at bottom */}
        <div
          className="relative z-10 w-full"
          style={{ background: 'rgba(11,27,51,0.8)', borderTop: '1px solid rgba(201,162,75,0.4)' }}
        >
          <div className="max-w-screen-xl mx-auto px-5 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: '6+',                label: 'Applications Built' },
              { num: 'Web · Mobile · Desktop', label: 'Multi-Platform' },
              { num: '10+',               label: 'Technologies' },
              { num: '100%',              label: 'Client Focused' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center gap-0.5">
                <span className="display font-bold text-[1.25rem] leading-tight" style={{ color: 'var(--gold)' }}>{s.num}</span>
                <span className="text-[11px] tracking-wide uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. WHAT WE BUILD
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24" style={{ background: '#f8f9fc' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> WHAT WE BUILD <span className="gold-rule" />
            </p>
            <h2 className="display font-bold leading-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
              Software Solutions for every business need
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="it-cat-card"
                style={{ borderTopColor: cat.accentColor }}
              >
                <div className="mb-4">
                  <CategoryIcon title={cat.title} color={cat.accentColor} />
                </div>
                <h3 className="font-bold text-[14px] mb-2" style={{ color: 'var(--ink)' }}>{cat.title}</h3>
                <p style={{ color: 'rgba(71,85,105,0.7)', fontSize: '12px', lineHeight: '1.6' }}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. FEATURED APP (ePay)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24" style={{ background: '#06101f' }}>
        <div className="max-w-screen-xl mx-auto">
          <div
            className="grid lg:grid-cols-2 rounded-2xl overflow-hidden"
            style={{ minHeight: '480px' }}
          >
            {/* LEFT — dark card */}
            <div
              className="flex flex-col justify-center p-8 sm:p-12"
              style={{
                background: '#0d1f3b',
                border: '1px solid rgba(201,162,75,0.3)',
                boxShadow: '0 0 40px rgba(201,162,75,0.08), inset 0 0 40px rgba(201,162,75,0.02)',
              }}
            >
              {/* Badge */}
              <span
                className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 w-fit"
                style={{ background: 'rgba(201,162,75,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,162,75,0.3)' }}
              >
                FEATURED APPLICATION
              </span>

              <h3 className="display font-bold text-white mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {featured.title}
              </h3>
              <p className="font-semibold mb-4" style={{ color: 'var(--gold)', fontSize: '14px' }}>
                {featured.subtitle}
              </p>
              <p className="text-[14px] leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {featured.desc}
              </p>

              {/* Bullets */}
              {featured.bullets && (
                <ul className="space-y-2 mb-6">
                  {featured.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[13px] text-white/80">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M20 6L9 17l-5-5" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Platform badges */}
              {featured.platforms && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.platforms.map((pl) => (
                    <span
                      key={pl}
                      className="text-[11px] font-medium px-3 py-1 rounded-full text-white/70"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      {pl}
                    </span>
                  ))}
                </div>
              )}

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[13px] font-semibold w-fit transition-all hover:-translate-y-0.5"
                style={{ background: 'var(--gold)', color: '#1a1408' }}
              >
                View ePay Case Study
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
            </div>

            {/* RIGHT — full-bleed image */}
            <div className="relative overflow-hidden" style={{ minHeight: '300px' }}>
              <img
                src={featured.image}
                alt={featured.title}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(270deg, transparent 50%, rgba(13,31,59,0.5) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. OUR APPLICATIONS GRID
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR APPLICATIONS <span className="gold-rule" />
            </p>
            <h2 className="display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
              Solutions We&apos;ve Built
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonFeatured.map((proj, idx) => {
              const imgH = idx % 3 === 0 ? 200 : idx % 3 === 1 ? 160 : 180
              return (
                <div key={proj.title} className="it-project-card group">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: `${imgH}px` }}>
                    <img
                      src={proj.image}
                      alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                    />
                    {/* Dark gradient at bottom */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,27,51,0.55) 0%, transparent 60%)' }} />
                    {/* Tag */}
                    <span
                      className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider"
                      style={{ background: 'rgba(201,162,75,0.9)', color: '#1a1408' }}
                    >
                      {proj.tag}
                    </span>
                  </div>
                  {/* Body */}
                  <div className="p-5">
                    <h3 className="font-bold text-[15px] mb-1" style={{ color: 'var(--ink)' }}>{proj.title}</h3>
                    <p className="font-semibold text-[11.5px] mb-2" style={{ color: 'var(--gold)' }}>{proj.subtitle}</p>
                    <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'rgba(71,85,105,0.75)' }}>{proj.desc}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-colors hover:opacity-70"
                      style={{ color: 'var(--navy)' }}
                    >
                      View Case Study
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-[13.5px] font-semibold transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--navy)', color: '#fff' }}
            >
              View All Applications
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. TECH STACK MARQUEE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-5 sm:px-10" style={{ background: '#06101f' }}>
        <div className="max-w-screen-xl mx-auto mb-12 text-center">
          <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> TECHNOLOGY EXPERTISE <span className="gold-rule" />
          </p>
          <h2 className="display font-bold text-white" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
            Technologies We Work With
          </h2>
        </div>

        {/* Row 1 — scrolls left */}
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: '16px' }}>
          <div className="it-marquee-track it-marquee-left">
            {[...techRow1, ...techRow1].map((t, i) => (
              <span
                key={`r1-${i}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-white/80 text-[13px] font-medium"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <img src={t.src} alt={t.name} width={28} height={28} style={{ flexShrink: 0 }} />
                {t.name}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <div className="it-marquee-track it-marquee-right">
            {[...techRow2, ...techRow2].map((t, i) => (
              <span
                key={`r2-${i}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-white/80 text-[13px] font-medium"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <img src={t.src} alt={t.name} width={28} height={28} style={{ flexShrink: 0 }} />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. DEVELOPMENT PROCESS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24" style={{ background: 'rgba(11,27,51,0.04)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> HOW WE WORK <span className="gold-rule" />
            </p>
            <h2 className="display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
              Our Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {PROCESS.map((step, idx) => (
              <div
                key={step.num}
                className="relative rounded-xl p-6"
                style={{
                  background: idx % 2 === 0 ? '#ffffff' : 'rgba(11,27,51,0.03)',
                  border: '1px solid rgba(201,162,75,0.1)',
                }}
              >
                {/* Big outlined number — decorative background */}
                <div
                  className="display font-bold leading-none select-none mb-3"
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    color: 'rgba(201,162,75,0.15)',
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </div>
                {/* Gold icon square */}
                <div
                  className="flex items-center justify-center rounded-lg mb-4"
                  style={{ width: 42, height: 42, background: 'rgba(201,162,75,0.1)', border: '1px solid rgba(201,162,75,0.2)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[15px] mb-2" style={{ color: 'var(--ink)' }}>{step.title}</h3>
                <p className="text-[13px] leading-snug" style={{ color: 'rgba(71,85,105,0.7)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. END-TO-END SERVICES GRID
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> WHY CHOOSE WILLSTONE <span className="gold-rule" />
            </p>
            <h2 className="display font-bold" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
              End-to-End IT Services
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc) => {
              const suffix = accentClassSuffix(svc.accentColor)
              const rgb = hexToRgb(svc.accentColor)
              return (
                <div
                  key={svc.title}
                  className={`it-svc-card it-svc-${suffix}`}
                >
                  {/* Icon container */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: `rgba(${rgb},0.1)`,
                      border: `1px solid rgba(${rgb},0.2)`,
                    }}
                  >
                    <ServiceIcon title={svc.title} color={svc.accentColor} />
                  </div>
                  <h3 className="font-bold text-[14px] mt-4 mb-2" style={{ color: 'var(--ink)' }}>{svc.title}</h3>
                  <p className="text-[13px] leading-snug" style={{ color: 'rgba(71,85,105,0.6)' }}>{svc.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          8. CTA BANNER
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(105deg, #0b1b33 0%, #0b1b33 52%, #c9a24b 52%, #c9a24b 100%)' }}>
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row">
          {/* LEFT — dark half */}
          <div
            className="flex-1 flex flex-col justify-center"
            style={{ padding: '64px 48px' }}
          >
            <h2 className="display font-bold text-white leading-tight mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Have an idea or an existing system?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
              Let&apos;s build something great together.
            </p>
          </div>

          {/* RIGHT — gold half */}
          <div
            className="flex-1 flex items-center justify-center"
            style={{ padding: '64px 48px' }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-[14px] font-bold transition-all hover:-translate-y-1"
              style={{ background: 'var(--navy)', color: '#fff', boxShadow: '0 8px 28px rgba(11,27,51,0.3)' }}
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
