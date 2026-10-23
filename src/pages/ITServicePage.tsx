import { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Seo from '../components/Seo'

/* shared inner container style — responsive side padding */
const inner: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  paddingLeft: 'clamp(16px, 5vw, 80px)',
  paddingRight: 'clamp(16px, 5vw, 80px)',
}

/* shared red divider */
function RedDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '14px 0' }}>
      <div style={{ width: '48px', height: '2px', background: 'var(--navy)', borderRadius: '2px' }} />
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '2px solid var(--navy)' }} />
      <div style={{ width: '48px', height: '2px', background: 'var(--navy)', borderRadius: '2px' }} />
    </div>
  )
}

/* shared icon card */
function IconCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div
      style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e8e8e8', padding: '28px 24px', transition: 'box-shadow 0.2s ease, transform 0.2s ease' }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(192,57,43,0.1)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
    >
      <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(11,27,51,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '10px', lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: '13.5px', color: '#666', lineHeight: 1.65 }}>{desc}</p>
    </div>
  )
}

export default function ITServicePage() {
  const [activeCard, setActiveCard] = useState(0)
  return (
    <div style={{ fontFamily: 'var(--font-display)' }}>
      <Seo
        title="Software Development & IT Solutions | Willstone Strategic Industries"
        description="Custom software development, web apps, mobile apps, enterprise systems, and IT consultancy from Willstone Strategic Industries Limited, based in Ibadan, Nigeria."
        canonical="/services/information-technology"
        keywords={['software development Nigeria', 'IT company Ibadan', 'custom software Nigeria']}
        image="/assets/images/soft.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Software Development & IT Solutions',
          provider: { '@id': 'https://willstonestrategic.com/#organization' },
        }}
      />
      <SiteHeader variant="transparent" />

      {/* ══════════ HERO ══════════ */}
      <section style={{ background: '#fff', paddingTop: '80px', overflow: 'hidden' }}>
        <div style={{ ...inner, paddingTop: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }} className="it-hero-grid">

          {/* Left */}
          <div style={{ paddingBottom: '48px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '16px' }}>
              Custom Software Development
            </p>
            <h1 style={{ fontSize: '25px', fontWeight: 500, lineHeight: 1.1, color: '#111', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Software built around the way your business actually works
            </h1>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#555', marginBottom: '32px', maxWidth: '460px' }}>
              We design and build the systems that run your operations: multi-warehouse inventory, loan origination, IT asset management, digital product passports and product visualisation.{' '}
              <span style={{ color: '#111', fontWeight: 500 }}>Your team stops re-typing, chasing and reconciling.</span>
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--navy)', color: '#fff', fontWeight: 600, fontSize: '14px', padding: '13px 24px', borderRadius: '6px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Book a 30-minute fit call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </Link>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#111', fontWeight: 600, fontSize: '14px', padding: '13px 24px', borderRadius: '6px', textDecoration: 'none', border: '1.5px solid #d0d0d0', whiteSpace: 'nowrap' }}>
                See our work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '22px', fontWeight: 800, color: '#111', lineHeight: 1.1 }}>22+</p>
                <p style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>Years of Industry<br/>Experience</p>
              </div>
              <div style={{ width: '1px', height: '40px', background: '#e5e5e5' }} />
              <div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3.5l9.5 8.5-9.5 8.5" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 3.5L14 9.5l-2.5 2.5L3 3.5z" fill="#EA4335"/>
                    <path d="M3 20.5L11.5 12 14 14.5 3 20.5z" fill="#34A853"/>
                    <path d="M11.5 12L20 9.5a1 1 0 010 5L11.5 12z" fill="#FBBC05"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#111">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.28.07 2.18.76 2.96.8 1.13-.24 2.2-1 3.46-.85 1.46.17 2.56.79 3.28 2.02-3.02 1.84-2.31 5.91.3 7.07-.62 1.47-1.41 2.9-3 3.84zM13 3.5c.07 2.16-1.82 3.95-3.9 3.75-.26-2 1.77-3.95 3.9-3.75z"/>
                  </svg>
                </div>
                <p style={{ fontSize: '12px', color: '#888' }}>Native & Flutter</p>
              </div>
              <div style={{ width: '1px', height: '40px', background: '#e5e5e5' }} />
              <div>
                <p style={{ fontSize: '22px', fontWeight: 800, color: '#111', lineHeight: 1.1 }}>4.7/5</p>
                <p style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>on G2, 35 reviews</p>
              </div>
            </div>
          </div>

          {/* Right — mockup */}
          <div style={{ position: 'relative', alignSelf: 'flex-end' }}>
            <div style={{ position: 'relative', width: '100%', minHeight: '380px' }}>
              <div style={{ position: 'absolute', top: '10px', left: '30%', background: '#0070F2', color: '#fff', fontWeight: 800, fontSize: '15px', padding: '8px 16px', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0,112,242,0.3)', zIndex: 10 }}>SAP</div>
              <div style={{ position: 'absolute', top: '0px', right: '15%', background: '#13B5EA', color: '#fff', fontWeight: 700, fontSize: '13px', padding: '8px 16px', borderRadius: '50px', boxShadow: '0 4px 16px rgba(19,181,234,0.35)', zIndex: 10, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5" stroke="#13B5EA" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                xero
              </div>
              <div style={{ position: 'absolute', top: '12px', right: '2%', color: 'var(--navy)', fontWeight: 800, fontSize: '16px', fontStyle: 'italic', zIndex: 10 }}>Tally</div>
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }} viewBox="0 0 500 380" preserveAspectRatio="xMidYMid meet">
                <line x1="175" y1="40" x2="220" y2="120" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="5,4"/>
                <line x1="360" y1="30" x2="300" y2="120" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="5,4"/>
                <line x1="470" y1="40" x2="350" y2="130" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="5,4"/>
                <line x1="160" y1="310" x2="210" y2="270" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="5,4"/>
                <line x1="300" y1="340" x2="280" y2="280" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="5,4"/>
                <line x1="420" y1="310" x2="360" y2="270" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="5,4"/>
              </svg>
              <img src="/assets/images/custome-software-hero-banner.svg" alt="Software dashboard mockup" style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 8, marginTop: '30px' }}/>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', paddingTop: '12px', paddingBottom: '16px', position: 'relative', zIndex: 10 }}>
                {[{ icon: '📦', label: 'Product Passports' }, { icon: '🏬', label: 'Multi-warehouse\ninventory' }, { icon: '👥', label: 'Portals' }].map(({ icon, label }) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ width: '38px', height: '38px', background: 'rgba(11,27,51,0.06)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px', fontSize: '18px', border: '1px solid #f5c5be' }}>{icon}</div>
                    <p style={{ fontSize: '11px', color: '#555', whiteSpace: 'pre-line', lineHeight: 1.3 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════ ECOMMERCE DEVELOPMENT ══════════ */}
      <section style={{ background: '#fff', paddingBottom: '0', overflow: 'hidden' }}>
        <div style={{ ...inner, paddingTop: '48px', paddingBottom: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }} className="it-hero-grid">

          {/* Left — image (flipped from hero) */}
          <div style={{ position: 'relative', alignSelf: 'flex-end' }}>
            <div style={{ position: 'relative', width: '100%', minHeight: '380px' }}>
              {/* Integration badges */}
              <div style={{ position: 'absolute', top: '8px', left: '5%', background: '#fff', border: '1px solid #e8e8e8', borderRadius: '10px', padding: '6px 14px', fontSize: '13px', fontWeight: 700, color: '#333', zIndex: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#0070F2', fontWeight: 800 }}>up</span> uphance
              </div>
              <div style={{ position: 'absolute', top: '8px', left: '38%', background: '#fff', border: '1px solid #e8e8e8', borderRadius: '10px', padding: '6px 12px', fontSize: '12px', fontWeight: 700, color: '#333', zIndex: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                Comp U Floor ERP
              </div>
              <div style={{ position: 'absolute', top: '8px', right: '2%', background: '#fff', border: '1px solid #e8e8e8', borderRadius: '10px', padding: '6px 12px', fontSize: '12px', fontWeight: 700, color: '#E31837', zIndex: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ color: '#E31837' }}>Zoho</span> Inventory
              </div>
              <div style={{ position: 'absolute', top: '52px', left: '8%', background: '#0070F2', color: '#fff', fontWeight: 800, fontSize: '14px', padding: '7px 14px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,112,242,0.3)', zIndex: 10 }}>SAP</div>
              <div style={{ position: 'absolute', top: '52px', left: '38%', color: 'var(--navy)', fontWeight: 800, fontSize: '16px', fontStyle: 'italic', zIndex: 10 }}>Tally</div>
              <div style={{ position: 'absolute', top: '52px', right: '2%', background: '#fff', border: '1px solid #e8e8e8', borderRadius: '10px', padding: '6px 14px', fontSize: '12px', fontWeight: 700, color: '#1A1A2E', zIndex: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>unicommerce</div>
              {/* Dashed connector lines */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }} viewBox="0 0 500 380" preserveAspectRatio="xMidYMid meet">
                <line x1="80" y1="70" x2="200" y2="160" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="5,4"/>
                <line x1="220" y1="50" x2="240" y2="150" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="5,4"/>
                <line x1="420" y1="50" x2="320" y2="150" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="5,4"/>
                <line x1="60" y1="90" x2="180" y2="170" stroke="#f5a623" strokeWidth="1" strokeDasharray="4,4"/>
                <line x1="460" y1="90" x2="340" y2="170" stroke="#f5a623" strokeWidth="1" strokeDasharray="4,4"/>
              </svg>
              {/* Main image */}
              <img src="/assets/images/ecommerce-development-hero.svg" alt="Ecommerce development platform" style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 8, marginTop: '30px', display: 'block' }}/>
              {/* Right-side floating labels */}
              <div style={{ position: 'absolute', right: '-8px', top: '25%', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 10 }}>
                {[
                  { label: 'Products', sub: 'Sync Automatically', color: '#22c55e' },
                  { label: 'Orders', sub: 'Flow Seamlessly', color: '#3b82f6' },
                  { label: 'Inventory', sub: 'Always Updated', color: '#f59e0b' },
                  { label: 'Fulfilment', sub: 'Made Simple', color: '#ef4444' },
                ].map(b => (
                  <div key={b.label} style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: '8px', padding: '6px 10px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: b.color, flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: '#111', lineHeight: 1.1 }}>{b.label}</p>
                      <p style={{ fontSize: '10px', color: '#888', lineHeight: 1.1 }}>{b.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div style={{ paddingBottom: '48px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '16px' }}>
              Ecommerce Development
            </p>
            <h2 style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1.1, color: '#111', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Your technology partner for D2C, B2C and B2B commerce
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#555', marginBottom: '32px', maxWidth: '460px' }}>
              We connect your store to the systems that already run your business — Uphance, Comp U Floor, Zoho, SAP, Tally, Unicommerce — and automate the work in between.
            </p>
          
            {/* Stats */}
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '22px', fontWeight: 800, color: '#111', lineHeight: 1.1 }}>22+</p>
                <p style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>Years of Industry<br/>Experience</p>
              </div>
              <div style={{ width: '1px', height: '40px', background: '#e5e5e5' }} />
              <div>
                <p style={{ fontSize: '22px', fontWeight: 800, color: '#111', lineHeight: 1.1 }}>1,500+</p>
                <p style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>Businesses Served</p>
              </div>
              <div style={{ width: '1px', height: '40px', background: '#e5e5e5' }} />
              <div>
                <p style={{ fontSize: '22px', fontWeight: 800, color: '#111', lineHeight: 1.1 }}>25+</p>
                <p style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>Countries Served</p>
              </div>
              <div style={{ width: '1px', height: '40px', background: '#e5e5e5' }} />
              <div>
                <p style={{ fontSize: '22px', fontWeight: 800, color: '#111', lineHeight: 1.1 }}>4.7/5</p>
                <p style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>on G2, 35 reviews</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════ PROBLEM ══════════ */}
      <section style={{ background: '#fff', padding: '72px 0' }}>
        <div style={{ ...inner, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="it-problem-grid">

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/assets/images/you-are-probably-here-because-one-of-these-is-true-181386833746448.webp"
              alt="Common business problems diagram"
              style={{ width: '100%', maxWidth: '480px', height: 'auto', display: 'block' }}
            />
          </div>

          <div>
            <div style={{ marginBottom: '20px' }}>
              <img src="/assets/images/problem-grocery-businesses-face-today-1-226642081054890.png" alt="PROBLEM" style={{ height: '52px', width: 'auto', display: 'block' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, color: '#111', lineHeight: 1.2, marginBottom: '28px', letterSpacing: '-0.02em' }}>
              You are probably here because one of these is true
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Your business runs on spreadsheets, and only one person really understands them.',
                'You bought off-the-shelf software, and your team now works around it instead of in it.',
                'The same data is typed into three systems, and none of them agree.',
                'Approvals happen over email, so a five-minute task takes three days.',
                "You've grown into more locations, users and volume than your tools can handle.",
                "A customer, regulator or buyer is asking for data you can't easily produce.",
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M5 13l4 4L19 7" stroke="var(--navy)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontSize: '14.5px', color: '#444', lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ══════════ WHY WILLSTONE ══════════ */}
      <section style={{ background: '#f7f8fa', padding: '80px 0' }}>
        <div style={inner}>
          <p style={{ textAlign: 'center', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '12px' }}>WHY WILLSTONE</p>
          <h2 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 800, color: '#111', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Why businesses choose us to build their software
          </h2>
          <RedDivider />
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', marginBottom: '48px' }}>Six reasons that hold up when you check them.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="it-why-grid">
            {[
              { title: 'Built around your process', desc: 'We start with how your team really works, then design the software to match. Inventory, lending, enterprise IT, textiles, compliance: five domains, one team.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="9" cy="10" r="1.5" fill="var(--navy)"/><path d="M13 8l3 4"/></svg> },
              { title: 'We run software, not just write it', desc: 'We operate our own SaaS platform, which hosts 200+ live storefronts and is rated 4.7/5 on G2. Production discipline is built in.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M12 7v1M12 12v1M9.27 8.27l.7.7M13.97 12.97l.73.73M8 10H7M17 10h-1"/></svg> },
              { title: 'Automation, not just screens', desc: 'Every project is judged by the manual work it removes: re-keying, reconciling, chasing approvals, building reports by hand.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg> },
              { title: 'Enterprise trust, SME speed', desc: 'Larsen & Toubro and Schneider Electric among our clients, with working software delivered every two weeks.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg> },
              { title: 'You own everything', desc: 'Source code, data and documentation are yours from day one, and you can export them at any time.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/><path d="M15 13l2 2 4-4"/></svg> },
              { title: 'One accountable partner', desc: 'Design, development, cloud hosting, security, support and AMC under one roof. No arguments about whose fault it is.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
            ].map((c) => <IconCard key={c.title} {...c} />)}
          </div>

          <p style={{ textAlign: 'center', fontSize: '13.5px', color: '#888', lineHeight: 1.7, maxWidth: '760px', margin: '40px auto 0' }}>
            Most analytics stop at the order. Ours continue into dispatch, returns and stock — because we built those systems too.{' '}
            <span style={{ color: 'var(--navy)' }}>Knowing which products sell is useful.</span>{' '}
            Knowing which products sell, get returned and tie up cash is the report that changes what you buy next.
          </p>
        </div>
      </section>

      {/* ══════════ WHAT WE BUILD ══════════ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={inner}>
          <p style={{ textAlign: 'center', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '12px' }}>WHAT WE BUILD</p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#111', lineHeight: 1.2, letterSpacing: '-0.02em', maxWidth: '700px', margin: '0 auto' }}>
            Custom software applications for every part of your operations
          </h2>
          <RedDivider />
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', marginBottom: '48px' }}>Different problems, the same discipline.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="it-why-grid">
            {[
              { title: 'Inventory & order fulfilment', desc: 'Multi-warehouse stock, bin locations, scanner-driven picking, B2B and B2C orders from one stock pool.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.95-1.57L23 6H6"/><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M9 10h6M12 7v6"/></svg> },
              { title: 'Lending & financial workflows', desc: 'Loan origination, eligibility rules, document capture, approvals, disbursement and collections tracking.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h2M10 15h2"/><circle cx="17" cy="15" r="2"/></svg> },
              { title: 'Enterprise IT & asset management', desc: 'Asset registers, allocation, lifecycle tracking, audits, warranty and AMC management.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><rect x="5" y="6" width="4" height="3" rx="0.5"/><rect x="11" y="6" width="4" height="3" rx="0.5"/><path d="M5 12h3M11 12h3M17 12h2"/></svg> },
              { title: 'Compliance & traceability', desc: 'Digital product passports, supply-chain records, QR-linked product data for buyers and regulators.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg> },
              { title: 'Product visualisation', desc: 'Digital fabric draping, configurators and visual catalogues that help sell the product.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> },
              { title: 'Portals, internal tools & ERP extensions', desc: 'Customer and supplier portals, approval workflows, dashboards, the module your ERP is missing.', icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/></svg> },
            ].map((c) => <IconCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ══════════ INTEGRATION & AUTOMATION ══════════ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={inner}>

          {/* Header */}
          <p style={{ textAlign: 'center', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '12px' }}>
            INTEGRATION & AUTOMATION
          </p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#111', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Four kinds of automation that remove most of the manual work
          </h2>
          <RedDivider />
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#777', marginBottom: '56px' }}>
            An integration is a connection. An automation is a job nobody has to do any more. We build the second kind.
          </p>

          {/* Two-column: steps left, sticky image right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="it-auto-grid">

            {/* Left — numbered steps */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                {
                  num: '01',
                  title: 'System integration',
                  desc: 'Your new software reads from and writes to what you already run: Xero, Tally, SAP, Zoho, payment gateways and couriers. Data is entered once and flows everywhere. No API? We bridge it with validated scheduled imports.',
                },
                {
                  num: '02',
                  title: 'Workflow & approvals',
                  desc: 'Requests go to the right person with reminders, escalation and a full audit trail, instead of an email chain. Loan approvals, asset transfers, purchase orders and leave all work this way.',
                },
                {
                  num: '03',
                  title: 'Documents & data capture',
                  desc: 'Documents are collected, checked and filed against the right record. QR codes and barcodes tie physical items, such as a device, a garment or a pallet, to their digital record.',
                },
                {
                  num: '04',
                  title: 'Reporting & alerts',
                  desc: 'Dashboards update themselves and scheduled reports arrive on time. Low stock, an expiring warranty or a bounced payment: the right person is told automatically.',
                },
              ].map((step, i) => (
                <div key={step.num}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '28px 0' }}>
                    {/* Step number */}
                    <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--navy)', minWidth: '28px', paddingTop: '2px', letterSpacing: '0.02em' }}>
                      {step.num}
                    </span>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111', marginBottom: '8px', lineHeight: 1.3 }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>{step.desc}</p>
                    </div>
                  </div>
                  {/* Divider between steps */}
                  {i < 3 && <div style={{ height: '1px', background: '#f0f0f0' }} />}
                </div>
              ))}
            </div>

            {/* Right — sticky image */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <img
                src="/assets/images/four-kinds-of-automation-that-remove-most-of-the-manual-work.jpg"
                alt="Integration and automation — system connections diagram"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
              />
            </div>

          </div>
        </div>
      </section>

      <section style={{ padding: '0 clamp(16px, 5vw, 80px) 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
          <img
            src="/assets/images/we-dont-just-build-software-we-run-it-181788267017500.jpg"
            alt=""
            aria-hidden="true"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'relative', zIndex: 2, padding: '36px 40px', maxWidth: '520px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '12px', whiteSpace: 'nowrap' }}>
              We don't just build software. <span style={{ color: 'var(--gold)' }}>We run it.</span>
            </h2>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '20px' }}>
              Most software agencies hand over the code and move on. We operate a multi-tenant platform in production every day, so security, uptime, backups and upgrades are part of how we build from the first line.
            </p>
            <div style={{ display: 'flex', alignItems: 'stretch', marginBottom: '24px', flexWrap: 'wrap' }}>
              {[
                { val: '200+', label: 'live storefronts\non our own SaaS platform' },
                { val: 'Monitored', label: 'production systems' },
                { val: '4.7/5', label: 'on G2' },
              ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'stretch' }}>
                  <div style={{ paddingRight: '20px', paddingBottom: '8px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '3px' }}>{stat.val}</p>
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{stat.label}</p>
                  </div>
                  {i < 2 && <div style={{ width: '1px', background: 'rgba(255,255,255,0.25)', marginRight: '20px' }} />}
                </div>
              ))}
            </div>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: 'var(--navy)', fontWeight: 700, fontSize: '13px', padding: '10px 18px', borderRadius: '8px', textDecoration: 'none' }}>
              Talk to our experts
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </a>
          </div>
        </div>
      </section>

        
      {/* ══════════ WEB, MOBILE & PORTALS ══════════ */}
      <section style={{ background: '#f7f8fa', padding: '80px 0' }}>
        <div style={inner}>
          <p style={{ textAlign: 'center', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '12px' }}>
            WEB, MOBILE & PORTALS
          </p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#111', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            One system. Every person who touches it.
          </h2>
          <RedDivider />

          <div style={{ display: 'grid', gridTemplateColumns: `${activeCard === 0 ? '2fr' : '1fr'} ${activeCard === 1 ? '2fr' : '1fr'} ${activeCard === 2 ? '2fr' : '1fr'}`, gap: '16px', marginTop: '40px', transition: 'grid-template-columns 1.4s cubic-bezier(0.4,0,0.2,1)' }} className="it-why-grid">
            {([
              {
                label: 'Web application',
                desc: 'Role-based access for staff, managers and administrators, responsive on any screen, with single sign-on where you need it.',
                image: '/assets/images/web-application.png',
                extra: null as React.ReactNode,
              },
              {
                label: 'Mobile app',
                desc: 'iOS and Android apps for warehouse floors, field teams and customers, reading the same data as the web system. Scanner and offline support where the job needs it.',
                image: '/assets/images/mobile-app.png',
                
              },
              {
                label: 'Customer & partner portals',
                desc: 'Self-service ordering, statements, document exchange and tracking, so customers, suppliers and lenders stop emailing to ask.',
                image: '/assets/images/customer--partner-portals.png',
                extra: null as React.ReactNode,
              },
            ] as const).map((card, i) => {
              const isActive = activeCard === i
              const icons = [
                /* Web */ <><rect x="2" y="3" width="20" height="16" rx="2"/><path d="M8 21h8M12 19v2"/><path d="M5 7h3M5 11h8M5 15h5"/></>,
                /* Mobile */ <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>,
                /* Portals */ <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>,
              ]
              return (
                <div
                  key={card.label}
                  onMouseEnter={() => setActiveCard(i)}
                  style={{
                    borderRadius: '16px',
                    border: isActive ? 'none' : '1px solid #e8e8e8',
                    background: isActive ? 'var(--navy)' : '#fff',
                    padding: '28px 24px',
                    cursor: 'default',
                    transition: 'background 0.3s ease',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Icon box */}
                  <div style={{
                    width: '48px', height: '48px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                  }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                      stroke={isActive ? '#fff' : '#111'}
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {icons[i]}
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: isActive ? '#fff' : '#111', marginBottom: '10px', lineHeight: 1.3 }}>
                    {card.label}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: '13.5px', color: isActive ? 'rgba(255,255,255,0.85)' : '#666', lineHeight: 1.65 }}>
                    {card.desc}
                  </p>

          
                  {/* Image — only when active, fades + slides in */}
                  <div style={{
                    marginTop: '20px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(12px)',
                    maxHeight: isActive ? '600px' : '0px',
                    transition: 'opacity 1.2s ease, transform 1.2s ease, max-height 1.4s cubic-bezier(0.4,0,0.2,1)',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}>
                    <img
                      src={card.image}
                      alt={card.label}
                      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom quote */}
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#555', fontStyle: 'italic', marginTop: '40px', lineHeight: 1.7 }}>
            "Three apps that disagree with each other aren't a system. One database behind every screen is."
          </p>
        </div>
      </section>

      {/* ══════════ HOW WE WORK ══════════ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={inner}>
          <p style={{ textAlign: 'center', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '12px' }}>
            HOW WE WORK
          </p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#111', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Design and development by the same team
          </h2>
          <RedDivider />
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#777', marginBottom: '56px' }}>
            A custom software design and development process with no hand-offs between agencies.
          </p>

          {/* 5-step timeline */}
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }} className="it-how-grid">

            {/* Dashed connector line sitting behind the circles */}
            <div style={{
              position: 'absolute',
              top: '35px',
              left: 'calc(10% + 24px)',
              right: 'calc(10% + 24px)',
              height: '2px',
              borderTop: '2px dashed #f5c5be',
              zIndex: 0,
            }} />

            {[
              {
                num: '01', title: 'Discover',
                desc: "We sit with the people who'll use it and map the process as it really runs.",
                icon: <><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v3M9 11h4"/></>,
              },
              {
                num: '02', title: 'Design',
                desc: 'Workflows, screens and data model, signed off as a clickable prototype.',
                icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/><path d="M13 13h4M13 17h4"/></>,
              },
              {
                num: '03', title: 'Build in phases',
                desc: 'Working software every two weeks on a staging system you can log into.',
                icon: <><path d="M8 9l-3 3 3 3M16 9l3 3-3 3M12 6l-2 12"/></>,
              },
              {
                num: '04', title: 'Launch',
                desc: 'Data migrated, users trained, old process retired.',
                icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></>,
              },
              {
                num: '05', title: 'Run & extend',
                desc: 'Hosting, monitoring, support, and new modules as you grow.',
                icon: <><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></>,
              },
            ].map((step) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 8px' }}>

                {/* Circle with icon */}
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(11,27,51,0.06)',
                  border: '2px solid #f5c5be',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px', flexShrink: 0,
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {step.icon}
                  </svg>
                </div>

                <p style={{ fontSize: '13px', fontWeight: 800, color: 'var(--navy)', marginBottom: '6px' }}>{step.num}</p>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '8px', lineHeight: 1.3 }}>{step.title}</h3>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.65 }}>{step.desc}</p>

              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════ OUR SERVICES ══════════ */}
      <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
        <div style={inner}>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="display" style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', marginBottom: '8px' }}>
              Our Services – End-to-End Digital Transformation
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--slate)' }}>
              Comprehensive <span style={{ color: 'var(--gold)' }}>solutions</span> designed to innovate, automate, and accelerate{' '}
              <span style={{ color: 'var(--gold)' }}>growth.</span>
            </p>
          </div>

          {/* Row 1 — 3 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }} className="it-why-grid">

            {/* Card 1 — navy featured */}
            <div style={{ background: 'var(--navy)', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '200px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '15px', lineHeight: 1.3 }}>Website Design &amp;<br/>Development</h3>
                <span style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,162,75,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </span>
              </div>
              <div style={{ marginTop: '24px' }}>
                <p style={{ fontWeight: 700, color: 'var(--gold)', fontSize: 'clamp(2.2rem, 5vw, 3rem)', lineHeight: 1, marginBottom: '4px' }}>1,500+</p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>Businesses built for</p>
              </div>
            </div>

            {/* Card 2 — Web Applications */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '200px', border: '1px solid #e8ecf2' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)', marginBottom: '2px' }}>Web Applications</h3>
                  <p style={{ fontSize: '12px', color: '#888' }}>(Software Development)</p>
                </div>
                <span style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,162,75,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                </span>
              </div>
              <div style={{ marginTop: '16px' }}>
                <p style={{ fontWeight: 600, fontSize: '13.5px', color: 'var(--ink)', marginBottom: '2px' }}>One system, every warehouse</p>
                <p style={{ fontSize: '12px', color: '#999', marginBottom: '16px' }}>Live across multiple sites and countries</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '2rem' }}>40+</span>
                  <span style={{ fontSize: '12px', color: '#888' }}>Warehouses on one stock figure</span>
                </div>
              </div>
            </div>

            {/* Card 3 — Mobile Applications */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '200px', border: '1px solid #e8ecf2' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)', marginBottom: '2px' }}>Mobile Applications</h3>
                  <p style={{ fontSize: '12px', color: '#888' }}>Scanner apps on the warehouse floor</p>
                </div>
                <span style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,162,75,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                </span>
              </div>
              <div style={{ marginTop: '16px' }}>
                <p style={{ fontWeight: 600, fontSize: '13.5px', color: 'var(--ink)', marginBottom: '2px' }}>Branded apps on Shopaccino</p>
                <p style={{ fontSize: '12px', color: '#999', marginBottom: '16px' }}>Customer, picker and rider apps</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '2rem' }}>50+</span>
                  <span style={{ fontSize: '12px', color: '#888' }}>Apps live with clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 — 2 wide cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="it-problem-grid">

            {/* Card 4 — Digital Marketing */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '180px', border: '1px solid #e8ecf2' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                <h3 style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)' }}>Digital Marketing</h3>
                <span style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,162,75,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                </span>
              </div>
              <div style={{ marginTop: '16px' }}>
                <p style={{ fontWeight: 600, fontSize: '13.5px', color: 'var(--ink)', marginBottom: '2px' }}>Google Premier Partner</p>
                <p style={{ fontSize: '12px', color: '#999', marginBottom: '16px' }}>Ads, SEO, Shopping and marketplaces</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '2rem' }}>10</span>
                  <span style={{ fontSize: '12px', color: 'var(--gold)' }}>Years start-up to UK category leader</span>
                </div>
              </div>
            </div>

            {/* Card 5 — Dedicated Resource */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '180px', border: '1px solid #e8ecf2' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                <h3 style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)' }}>Dedicated Resource</h3>
                <span style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,162,75,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </span>
              </div>
              <div style={{ marginTop: '16px' }}>
                <p style={{ fontWeight: 600, fontSize: '13.5px', color: 'var(--ink)', marginBottom: '2px' }}>A named team, not a body shop</p>
                <p style={{ fontSize: '12px', color: 'var(--gold)', marginBottom: '16px' }}>Your priorities, scaling as the roadmap changes</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '2rem' }}>22</span>
                  <span style={{ fontSize: '12px', color: '#888' }}>Years of delivery behind them</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SAAS PRODUCTS ══════════ */}
      <section style={{ background: 'var(--paper)', padding: '80px 0' }}>
        <div style={inner}>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="display" style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', marginBottom: '8px' }}>
              Our SaaS Products for Ecommerce, Warehousing, CRM &amp; ERP
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--slate)' }}>
              Our Software Products – <span style={{ color: 'var(--navy)' }}>Proprietary SaaS Innovations</span>
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gridTemplateRows: 'auto auto', gap: '16px' }} className="it-saas-grid">

            {/* Shopaccino — row span 2 */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', border: '1px solid #e8ecf2', gridRow: '1 / 3' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '20px' }}>
                <h3 style={{ fontWeight: 700, fontSize: '20px', color: 'var(--ink)' }}>Shopaccino</h3>
                <span style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                </span>
              </div>
              <p style={{ fontSize: '13.5px', lineHeight: 1.65, flex: 1, color: '#555' }}>
                A SaaS commerce platform for <span style={{ color: 'var(--navy)' }}>retail and wholesale brands</span>. One store sells B2C and B2B, on the web, on iOS and Android and at the counter — with one catalogue, one stock figure and one order queue behind all of it.
              </p>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, marginTop: '32px', color: 'var(--ink)', textDecoration: 'none' }}>
                Explore More →
              </a>
            </div>

            {/* Smart Warehousing — col 2, row 1 */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', border: '1px solid #e8ecf2' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '20px' }}>
                <h3 style={{ fontWeight: 700, fontSize: '20px', color: 'var(--ink)' }}>Smart Warehousing</h3>
                <span style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </span>
              </div>
              <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: '#555' }}>
                Smart Warehousing gives you <span style={{ color: 'var(--navy)' }}>bin-level visibility</span> of your stock across one or many warehouses. Scanner-driven picking and packing keeps your team accurate on the floor, while inventory stays in sync with your website, ERP and accounting tools.
              </p>
            </div>

            {/* Task Officer + Service ERP — col 2, row 2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="it-problem-grid">

              {/* Task Officer */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', border: '1px solid #e8ecf2' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '20px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '20px', color: 'var(--ink)' }}>Task Officer</h3>
                  <span style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '50%', background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', lineHeight: 1.65, flex: 1, color: '#555' }}>
                  A <span style={{ color: 'var(--navy)' }}>lead management and CRM platform</span> that captures every online and offline lead in one place. Assign each enquiry to your team, track it through to conversion, and deliver projects without losing sight of a single follow-up.
                </p>
                <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, marginTop: '24px', color: 'var(--ink)', textDecoration: 'none' }}>
                  View Details →
                </a>
              </div>

              {/* Service ERP */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', border: '1px solid #e8ecf2' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '20px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '20px', color: 'var(--ink)' }}>Service ERP</h3>
                  <span style={{ flexShrink: 0, width: '44px', height: '44px', borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: '#555' }}>
                  Brings every part of your service business into one system. Customer requests, <span style={{ color: 'var(--navy)' }}>job scheduling</span>, technician assignments, spare parts and <span style={{ color: 'var(--navy)' }}>billing</span> all stay connected, so your team always knows what is booked, who is on the job and what is yet to be invoiced.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

