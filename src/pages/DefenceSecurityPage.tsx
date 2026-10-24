import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Seo from '../components/Seo'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const SOLUTION_CARDS = [
  { label: 'Drone Surveillance\n& Reconnaissance', src: '/assets/images/drone.jpg' },
  { label: 'CCTV & Video\nSurveillance', src: '/assets/images/Security-Defense-about.png' },
  { label: 'Sensor Systems\n& Threat Detection', src: '/assets/images/DRONE-P1.jpg' },
  { label: 'Tactical & Military\nEquipment', src: '/assets/images/electrical-electronic.jpg' },
  { label: 'Command & Control\n& Integration', src: '/assets/images/soft.jpg' },
]

const CAPABILITY_ICONS = [
  {
    title: 'Unmanned Aerial\nSystems (Drones)',
    desc: 'Surveillance, reconnaissance, monitoring and strike support.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v2m0 12v2M4 12H2m20 0h-2M6.34 6.34l-1.42-1.42m14.14 14.14-1.42-1.42M17.66 6.34l1.42-1.42M4.92 19.07l1.42-1.41M8 12a4 4 0 108 0 4 4 0 00-8 0z" />
    ),
  },
  {
    title: 'Surveillance &\nSecurity Cameras',
    desc: 'Day & night monitoring, AI-powered analytics.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.938L15 14M3 8h12a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2V10a2 2 0 012-2z" />
    ),
  },
  {
    title: 'Sensors & Detection\nSystems',
    desc: 'Threat detection, perimeter security, environmental monitoring.',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.34 6.34a8 8 0 000 11.32M17.66 6.34a8 8 0 010 11.32M3.51 3.51a12 12 0 000 16.98M20.49 3.51a12 12 0 010 16.98" />
      </>
    ),
  },
  {
    title: 'Military & Tactical\nEquipment',
    desc: 'Personnel gear, communication, protection and more.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    ),
  },
  {
    title: 'Integration &\nTechnical Support',
    desc: 'Installation, training, maintenance and lifecycle support.',
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
      </>
    ),
  },
]

const WHY_POINTS = [
  'Proven expertise in defence and security systems',
  'Global partnerships with leading manufacturers',
  'Customised solutions for diverse environments',
  'Training, technical support and after-sales service',
]

const PRODUCTS = [
  { label: 'Tactical UAVs', sub: 'Long-range • High-altitude', src: '/assets/images/drone.jpg' },
  { label: 'Surveillance Cameras', sub: '4K in studios', src: '/assets/images/Security-Defense-about.png' },
  { label: 'Detection Sensors', sub: 'Motion • Thermal • Chemical', src: '/assets/images/detector-sensor.jpg' },
  { label: 'Communication Gear', sub: 'Secure • Encrypted', src: '/assets/images/61wcMUFxIQL._AC_UF894,1000_QL80_.jpg' },
  { label: 'Tactical Gear', sub: 'Night Vision • Protection', src: '/assets/images/Security-Defense-about.png' },
]

const STATS = [
  { value: '10+', label: 'Years of Industry Experience' },
  { value: 'Global', label: 'Technology Partners' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction Focus' },
]

export default function DefenceSecurityPage() {
  const heroSection = useInView(0)
  const capSection = useInView(0.1)
  const solutionsSection = useInView(0.1)
  const whySection = useInView(0.1)
  const productsSection = useInView(0.1)
  const commitSection = useInView(0.1)
  const ctaSection = useInView(0.1)

  return (
    <div style={{ fontFamily: 'var(--font-display)', overflowX: 'hidden' }}>
      <Seo
        title="Defence & Security Solutions | Willstone Strategic Industries"
        description="Advanced defence and security solutions — UAVs, surveillance cameras, detection sensors, tactical equipment and systems integration. Willstone Strategic Industries, Nigeria."
        canonical="/services/defence-security"
        keywords={['defence security Nigeria','UAV supplier Nigeria','surveillance systems Nigeria','military equipment Nigeria','Willstone defence']}
        image="/assets/images/Security-Defense-about.png"
      />
      <SiteHeader variant="solid" />

      {/* ══ HERO ══ */}
      <section
        ref={heroSection.ref}
        className="relative flex flex-col overflow-hidden"
        style={{ minHeight: 'clamp(380px, 70vh, 680px)', paddingTop: '80px' }}
      >
        <img
          src="/assets/images/94db82a6-22d5-40e3-bd13-941bafc67a59.png"
          alt="Defence and security operations"
          className="absolute inset-0 w-full h-full object-cover object-center hero-img"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(6,15,31,.80) 0%, rgba(6,15,31,.62) 50%, rgba(6,15,31,.90) 100%)' }}
        />

        <div className="relative z-10 flex-1 flex items-center justify-center text-center px-4 sm:px-8 py-10 sm:py-16">
          <div className="w-full max-w-2xl">
            <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> DEFENCE &amp; SECURITY
            </p>
            <h1
              className="display text-white font-semibold leading-[1.1] mb-4 sm:mb-5"
              style={{ fontSize: 'clamp(1.5rem, 5vw, 3.2rem)' }}
            >
              Advanced Technology.<br />
              Stronger Security.<br />
              <span style={{ color: 'var(--gold-light)' }}>A Safer Tomorrow.</span>
            </h1>
            <p
              className="text-white/70 leading-relaxed mb-6 sm:mb-8 mx-auto max-w-xl"
              style={{ fontSize: 'clamp(13px, 2.5vw, 15px)' }}
            >
              We provide cutting-edge defence and security solutions that combine advanced technology,
              intelligence and reliable support to help governments, institutions and private organisations
              stay ahead of evolving threats.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full text-[13px] font-semibold"
              >
                Explore Our Solutions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <a
                href="#solutions"
                className="btn-slate inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full text-[13px] font-semibold"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES TICKER ══ */}
      <section
        ref={capSection.ref}
        style={{ background: '#0a1528', borderTop: '1px solid rgba(201,162,75,0.15)', borderBottom: '1px solid rgba(201,162,75,0.15)' }}
      >
        <div
          className="max-w-screen-2xl mx-auto px-4 sm:px-10 lg:px-16 xl:px-24 py-8"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0' }}
        >
          {CAPABILITY_ICONS.map((cap, i) => (
            <div
              key={cap.title}
              className="ds-cap-card"
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                padding: '20px 16px', borderRight: i < CAPABILITY_ICONS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                opacity: capSection.visible ? 1 : 0,
                transform: capSection.visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.55s ease ${i * 0.1}s, transform 0.55s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(201,162,75,0.12)', border: '1px solid rgba(201,162,75,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8">
                  {cap.icon}
                </svg>
              </div>
              <p className="text-white font-semibold text-[12px] leading-tight whitespace-pre-line mb-2">{cap.title}</p>
              <p className="text-white/50 text-[11px] leading-snug">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ COMPREHENSIVE SOLUTIONS ══ */}
      <section
        id="solutions"
        ref={solutionsSection.ref}
        className="py-14 sm:py-20 px-4 sm:px-10 lg:px-16 xl:px-24 bg-white"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start">

            <div
              style={{
                opacity: solutionsSection.visible ? 1 : 0,
                transform: solutionsSection.visible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              <p className="eyebrow text-[11px] font-semibold flex items-center gap-2 mb-4" style={{ color: 'var(--gold)' }}>
                <span className="gold-rule" /> OUR SOLUTIONS
              </p>
              <h2 className="display font-bold leading-tight mb-5" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)', color: 'var(--ink)' }}>
                Comprehensive Defence<br />
                &amp; Security Solutions
              </h2>
              <p className="text-slate-500 leading-relaxed mb-7" style={{ fontSize: '14px' }}>
                From aerial surveillance to ground systems, we deliver integrated solutions designed to
                meet the unique needs of modern defence, security and critical infrastructure protection.
              </p>
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold"
              >
                View All Solutions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {SOLUTION_CARDS.map((card, i) => (
                <div
                  key={card.label}
                  className="relative overflow-hidden rounded-xl group cursor-pointer"
                  style={{
                    height: i === 0 ? '220px' : '180px',
                    opacity: solutionsSection.visible ? 1 : 0,
                    transform: solutionsSection.visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
                    transition: `opacity 0.55s ease ${0.1 + i * 0.08}s, transform 0.55s ease ${0.1 + i * 0.08}s`,
                    gridColumn: i === 0 ? 'span 2' : undefined,
                  } as React.CSSProperties}
                >
                  <img
                    src={card.src}
                    alt={card.label.replace('\n', ' ')}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }}
                    className="group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(6,15,31,.85) 0%, rgba(6,15,31,.3) 60%, transparent 100%)' }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
                    <p className="text-white font-semibold text-[12px] leading-tight whitespace-pre-line">{card.label}</p>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(201,162,75,0.2)', border: '1px solid rgba(201,162,75,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section
        ref={whySection.ref}
        className="overflow-hidden"
        style={{ background: '#07101f' }}
      >
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2" style={{ minHeight: '560px' }}>

          <div className="relative hidden lg:block">
            <img
              src="/assets/images/b46519d0-f3e5-4d2e-aab6-3b91a3fd622a.png"
              alt="Advanced technology operations"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, transparent 55%, #07101f 100%)' }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(7,16,31,.3) 0%, transparent 40%, rgba(7,16,31,.3) 100%)' }}
            />
          </div>

          <div
            className="px-8 sm:px-12 lg:px-14 py-14 sm:py-20 flex flex-col justify-center"
            style={{
              opacity: whySection.visible ? 1 : 0,
              transform: whySection.visible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <p className="eyebrow text-[11px] font-semibold flex items-center gap-3 mb-5" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> WHY CHOOSE US
            </p>
            <h2 className="display font-bold leading-tight text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}>
              Experience. Technology.<br />
              <span style={{ color: 'var(--gold-light)' }}>Trusted Partnership.</span>
            </h2>
            <div style={{ width: '40px', height: '3px', background: 'var(--gold)', borderRadius: '2px', marginBottom: '20px' }} />
            <p className="text-white/60 leading-relaxed mb-10" style={{ fontSize: '14px', maxWidth: '420px' }}>
              We work with globally recognised manufacturers and technology providers to deliver reliable,
              high-performance solutions. Our team brings deep industry knowledge, operational experience and a
              commitment to excellence in every project.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {WHY_POINTS.map((pt, i) => (
                <div
                  key={pt}
                  className="flex items-start gap-3 rounded-xl p-4"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    opacity: whySection.visible ? 1 : 0,
                    transform: whySection.visible ? 'translateY(0)' : 'translateY(16px)',
                    transition: `opacity 0.5s ease ${0.2 + i * 0.1}s, transform 0.5s ease ${0.2 + i * 0.1}s`,
                  }}
                >
                  <span
                    style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(201,162,75,0.15)', border: '1px solid rgba(201,162,75,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="3"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <p className="text-white/80 text-[13px] leading-snug font-medium">{pt}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold"
              >
                Get In Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ══ KEY PRODUCTS & TECHNOLOGIES ══ */}
      <section
        ref={productsSection.ref}
        className="py-14 sm:py-20 px-4 sm:px-10 lg:px-16 xl:px-24 bg-white"
      >
        <div className="max-w-screen-2xl mx-auto">

          <div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
            style={{
              opacity: productsSection.visible ? 1 : 0,
              transform: productsSection.visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <div>
              <p className="eyebrow text-[11px] font-semibold flex items-center gap-2 mb-3" style={{ color: 'var(--gold)' }}>
                <span className="gold-rule" /> FEATURED PRODUCTS
              </p>
              <h2 className="display font-bold leading-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--ink)' }}>
                Key Products &amp; Technologies
              </h2>
              <p className="text-slate-500 mt-2" style={{ fontSize: '14px' }}>
                Reliable, field-proven equipment designed for maximum performance and operational efficiency.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 text-[13px] font-semibold"
              style={{ color: 'var(--navy)' }}
            >
              View All Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PRODUCTS.map((p, i) => (
              <div
                key={p.label}
                className="group rounded-xl overflow-hidden border border-gray-100 bg-white"
                style={{
                  boxShadow: '0 2px 12px rgba(11,27,51,0.06)',
                  opacity: productsSection.visible ? 1 : 0,
                  transform: productsSection.visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease ${i * 0.09}s, transform 0.5s ease ${i * 0.09}s`,
                  cursor: 'pointer',
                }}
              >
                <div className="relative overflow-hidden" style={{ height: '130px' }}>
                  <img
                    src={p.src}
                    alt={p.label}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="font-bold text-[12.5px] leading-tight mb-1" style={{ color: 'var(--ink)' }}>{p.label}</p>
                  <p className="text-[11px] text-slate-400">{p.sub}</p>
                  <div
                    className="mt-2 flex items-center justify-center rounded-full"
                    style={{ width: '24px', height: '24px', background: 'rgba(201,162,75,0.12)', border: '1px solid rgba(201,162,75,0.3)', marginLeft: 'auto' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="3"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ OUR COMMITMENT ══ */}
      <section
        ref={commitSection.ref}
        className="relative overflow-hidden"
        style={{ background: '#07101f', minHeight: '380px' }}
      >
        <img
          src="/assets/images/Security-Defense-about.png"
          alt="Security commitment"
          className="absolute right-0 inset-y-0 h-full object-cover object-center hidden lg:block"
          style={{ width: '45%', opacity: 0.35 }}
        />
        <div
          className="absolute right-0 inset-y-0 hidden lg:block"
          style={{ width: '45%', background: 'linear-gradient(to right, #07101f 0%, transparent 40%)' }}
        />

        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-10 lg:px-16 xl:px-24 py-14 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">

          <div
            style={{
              opacity: commitSection.visible ? 1 : 0,
              transform: commitSection.visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <p className="eyebrow text-[11px] font-semibold flex items-center gap-3 mb-5" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR COMMITMENT
            </p>
            <h2 className="display font-bold leading-tight text-white mb-5" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)' }}>
              Supporting Safer Communities<br />
              and Stronger Nations
            </h2>
            <p className="text-white/65 leading-relaxed mb-6" style={{ fontSize: '14px', maxWidth: '460px' }}>
              We are committed to providing reliable, cost-effective defence and security solutions that protect
              people, assets and critical infrastructure — today and for the future.
            </p>
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold"
            >
              Partner With Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>

          <div
            className="grid grid-cols-2 gap-4"
            style={{
              opacity: commitSection.visible ? 1 : 0,
              transform: commitSection.visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.value}
                className="rounded-xl p-5 flex flex-col gap-2"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="display font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{s.value}</p>
                <div style={{ width: '28px', height: '2px', background: 'var(--gold)', borderRadius: '2px' }} />
                <p className="text-white/55 text-[12px] leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ CTA ══ */}
      <section
        ref={ctaSection.ref}
        className="py-14 sm:py-20 px-4 sm:px-10 lg:px-16 xl:px-24 bg-white"
      >
        <div
          className="max-w-screen-2xl mx-auto"
          style={{
            opacity: ctaSection.visible ? 1 : 0,
            transform: ctaSection.visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.65s ease, transform 0.65s ease',
          }}
        >
          <div
            className="rounded-2xl overflow-hidden grid lg:grid-cols-2 items-center"
            style={{ background: '#f5f6f8', border: '1px solid #e8ecf2' }}
          >
            <div className="p-8 sm:p-12">
              <p className="eyebrow text-[11px] font-semibold flex items-center gap-2 mb-4" style={{ color: 'var(--gold)' }}>
                <span className="gold-rule" /> GET IN TOUCH
              </p>
              <h2 className="display font-bold leading-tight mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--ink)' }}>
                Ready to Enhance Your<br />Security Capabilities?
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8" style={{ fontSize: '14px', maxWidth: '380px' }}>
                Talk to our specialists about your specific needs. We'll help you design and deliver the right
                security solution for your mission.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold"
                >
                  Request a Consultation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold border"
                  style={{ color: 'var(--ink)', borderColor: '#d0d6e0' }}
                >
                  Request Procurement
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-1 gap-5 p-8 sm:p-10 border-l border-gray-200">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                  label: 'Call Us',
                  value: '+234 706 196 4340',
                  href: 'tel:+2347061964340',
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                  label: 'Email Us',
                  value: 'info@willstonestrategic.com',
                  href: 'mailto:info@willstonestrategic.com',
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                  label: 'Visit Us',
                  value: '20 Cambridge House, Joop Berkhout Crescent, Onireke — Ibadan',
                  href: 'https://maps.google.com/?q=Joop+Berkhout+Crescent+Onireke+Ibadan',
                },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-start gap-4 group">
                  <div
                    style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,162,75,0.1)', border: '1px solid rgba(201,162,75,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: 'var(--gold)' }}>{item.label}</p>
                    <p className="text-[13px] font-medium group-hover:underline" style={{ color: 'var(--ink)' }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
