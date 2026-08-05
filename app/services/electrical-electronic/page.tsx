'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const inter        = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })

const OFFERINGS = [
  {
    title: 'Electrical Installation & Wiring',
    desc: 'Full electrical installation for residential, commercial, and industrial buildings — from LV/MV distribution to final circuit wiring.',
    icon: <><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></>,
  },
  {
    title: 'Power Distribution Systems',
    desc: 'Design and installation of switchgear, transformer stations, bus bars, and distribution panels for reliable power delivery.',
    icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v3M9 15h6"/></>,
  },
  {
    title: 'Generator & UPS Systems',
    desc: 'Supply, installation, and maintenance of diesel generators, inverters, and UPS systems for critical power backup.',
    icon: <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></>,
  },
  {
    title: 'Solar & Renewable Energy Systems',
    desc: 'Off-grid and hybrid solar PV systems, inverters, and battery storage solutions for homes, offices, and industrial facilities.',
    icon: <><path d="M12 3v1M12 20v1M3 12H2M22 12h-1M4.2 4.2l.7.7M19.1 19.1l.7.7M4.9 19.1l-.7.7M19.8 4.9l-.7-.7M17 12a5 5 0 11-10 0 5 5 0 0110 0z"/></>,
  },
  {
    title: 'Building Management Systems (BMS)',
    desc: 'Integrated automation and monitoring of HVAC, lighting, access control, and energy systems through a centralised BMS platform.',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>,
  },
  {
    title: 'Industrial Control & Automation',
    desc: 'PLC/SCADA programming, motor control centres, variable speed drives, and process automation for manufacturing and utilities.',
    icon: <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></>,
  },
  {
    title: 'Structured Cabling & Data Networks',
    desc: 'Cat6/6A structured cabling, fibre optic installations, network rack builds, and cable management for offices and data centres.',
    icon: <><path d="M4 6h16M4 12h16M4 18h7"/><circle cx="17" cy="18" r="3"/><path d="M20 15l-3 3-1.5-1.5"/></>,
  },
  {
    title: 'Testing, Inspection & Maintenance',
    desc: 'Periodic testing, thermographic surveys, PAT testing, and scheduled preventive maintenance to keep electrical systems safe and compliant.',
    icon: <><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></>,
  },
]

const TABS = [
  {
    id: 'why',
    label: 'Why choose us',
    heading: 'Safe, reliable electrical solutions.',
    intro: 'Willstone delivers electrical and electronic solutions that meet the highest safety standards while remaining practical and cost-effective for Nigerian conditions.',
    points: [
      { bold: 'Certified engineers:', text: 'All our electrical engineers hold COREN registration and relevant international certifications.' },
      { bold: 'Standards compliance:', text: 'Every installation meets IEE Wiring Regulations (BS 7671) and local NEC/SON requirements.' },
      { bold: 'Turnkey delivery:', text: 'We handle design, supply, installation, testing, and commissioning under one contract.' },
      { bold: 'Quality materials:', text: 'We source from approved manufacturers — no counterfeit cables or switchgear.' },
      { bold: 'Safety-first culture:', text: 'Rigorous HSE protocols on every site — zero compromise on electrical safety.' },
      { bold: 'Post-installation support:', text: 'Dedicated maintenance contracts and 24/7 emergency callout for critical systems.' },
    ],
  },
  {
    id: 'principles',
    label: 'Our principles',
    heading: 'Built on safety and precision.',
    intro: 'Our engineering approach is anchored in principles that ensure every electrical system we design and install is safe, efficient, and built to last.',
    points: [
      { bold: 'Design before installation:', text: 'Every project begins with a detailed electrical design reviewed and approved before a single cable is pulled.' },
      { bold: 'Right first time:', text: 'We measure twice and cut once — rework is waste, and waste costs our clients money.' },
      { bold: 'Load analysis:', text: 'We calculate present and future load requirements to prevent undersized or oversized installations.' },
      { bold: 'Energy efficiency:', text: 'We recommend technologies that reduce energy consumption and lower long-term operating costs.' },
      { bold: 'Documentation:', text: 'As-built drawings, test certificates, and O&M manuals are delivered with every completed project.' },
      { bold: 'Continuous training:', text: 'Our technicians undergo regular refresher training on new technologies and safety standards.' },
    ],
  },
  {
    id: 'achievements',
    label: 'Achievements',
    heading: 'Powering projects that matter.',
    intro: 'From small office fit-outs to large industrial complexes, our track record demonstrates consistent delivery at every scale.',
    points: [
      { bold: '200+ installations completed:', text: 'Across residential, commercial, industrial, and infrastructure sectors in Nigeria.' },
      { bold: '15+ MW generation capacity installed:', text: 'Generator and solar systems installed and commissioned for clients nationwide.' },
      { bold: 'Zero lost-time incidents:', text: 'Our HSE record reflects a culture where safety is non-negotiable on every project.' },
      { bold: 'COREN-certified team:', text: 'All senior engineers are registered with the Council for the Regulation of Engineering in Nigeria.' },
      { bold: '50+ maintenance contracts:', text: 'Long-term PPM contracts with industrial, commercial, and institutional clients.' },
      { bold: 'Renewable energy pioneer:', text: 'One of the first contractors in Oyo State to deliver utility-scale hybrid solar installations.' },
    ],
  },
]

const PROJECTS = [
  {
    title: 'Industrial Power Distribution Upgrade',
    category: 'Power Systems',
    desc: 'Complete overhaul of the medium-voltage distribution network for a large manufacturing facility in Ibadan — replacing ageing switchgear, installing new transformers, and upgrading the entire LV distribution board infrastructure.',
    bullets: [
      'Reduced unplanned downtime by 80% through modern arc-flash-rated switchgear',
      'New 11kV/415V transformer stations with SCADA-linked monitoring',
      'Full load analysis and power factor correction implemented',
    ],
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    bg: '#eef6ff',
  },
  {
    title: 'Commercial Solar & Hybrid System',
    category: 'Renewable Energy',
    desc: 'Design and installation of a 500kVA hybrid solar-diesel system for a logistics and warehousing complex — eliminating over 60% of diesel consumption while providing uninterrupted power across the facility.',
    bullets: [
      '500kVA solar array with lithium battery storage and diesel backup integration',
      'Remote monitoring dashboard with real-time energy generation analytics',
      'ROI achieved within 3.5 years based on fuel savings',
    ],
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80',
    bg: '#f0fdf4',
  },
  {
    title: 'Smart Building BMS Integration',
    category: 'Building Automation',
    desc: 'Full building management system integration for a 12-storey commercial tower in Lagos — bringing HVAC, lighting, access control, CCTV, and energy metering into a single unified control platform.',
    bullets: [
      'Centralised BMS with web and mobile dashboards for facilities management',
      '22% reduction in energy consumption through automated HVAC scheduling',
      'Predictive maintenance alerts based on real-time equipment data',
    ],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    bg: '#fdf4ff',
  },
  {
    title: 'Data Centre Structured Cabling',
    category: 'Network Infrastructure',
    desc: 'End-to-end structured cabling and network infrastructure build for a tier-2 data centre — including Cat6A copper, single-mode fibre backbone, cable management, and full testing and certification.',
    bullets: [
      '10Gbps Cat6A patch panels with 100% Fluke tested and certified links',
      'OM4 multimode fibre backbone between server racks and distribution frames',
      'Colour-coded cable management with full documentation and labelling',
    ],
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    bg: '#fffbeb',
  },
]

const OTHER_SERVICES = [
  { label: 'Engineering & Technical Services',     href: '/services/engineering-technical' },
  { label: 'Industrial Equipment & Machinery',     href: '/services/industrial-equipment' },
  { label: 'Infrastructure & Facility Support',    href: '/services/infrastructure-facility' },
  { label: 'Agriculture & Agribusiness',           href: '/services/agriculture-agribusiness' },
  { label: 'Information Technology & Software',    href: '/services/information-technology' },
]

// ── Scroll-triggered project card ─────────────────────────────────────────
interface ProjectCardProps {
  project: typeof PROJECTS[number]
  index: number
}
function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const isReverse = index % 2 === 1

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="rounded-2xl overflow-hidden grid md:grid-cols-2 items-center"
      style={{ background: project.bg }}
    >
      {/* Image — slides in from left or right */}
      <div
        className={`relative aspect-[4/3] md:aspect-auto md:h-full min-h-[240px] overflow-hidden project-img-wrap ${isReverse ? 'md:order-2' : ''}`}
        style={{
          transform: visible ? 'translateX(0)' : isReverse ? 'translateX(60px)' : 'translateX(-60px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.75s cubic-bezier(0.22,1,0.36,1), opacity 0.75s ease',
        }}
      >
        <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover project-img" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: isReverse ? 'inset -40px 0 60px rgba(0,0,0,.06)' : 'inset 40px 0 60px rgba(0,0,0,.06)' }} />
      </div>

      {/* Text — fades up with delay */}
      <div
        className={`p-8 sm:p-10 ${isReverse ? 'md:order-1' : ''}`}
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(28px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.18s, opacity 0.75s ease 0.18s',
        }}
      >
        <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>{project.category}</p>
        <h3 className="display font-semibold text-[22px] sm:text-[26px] mb-4 leading-tight" style={{ color: 'var(--ink)' }}>{project.title}</h3>
        <p className="text-slate-500 text-[14.5px] leading-relaxed mb-6">{project.desc}</p>
        <ul className="space-y-3 mb-8">
          {project.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-[13.5px] text-slate-600">
              <span className="mt-1 w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ background: 'rgba(201,162,75,.15)' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-[13px] font-semibold text-white project-cta" style={{ background: 'var(--navy)' }}>
          Read More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </Link>
      </div>
    </div>
  )
}

export default function ElectricalElectronicPage() {
  const [activeTab, setActiveTab] = useState('why')
  const tab = TABS.find((t) => t.id === activeTab)!

  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <SiteHeader variant="solid" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: 'var(--navy)', height: 'clamp(380px, 55vw, 520px)' }}>
        <Image
          src="/assets/images/electrical-electronic.jpg"
          alt="Electrical circuit board close-up"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(6,15,31,.93) 0%, rgba(6,15,31,.70) 50%, rgba(6,15,31,.30) 100%)' }} />
        <div className="absolute inset-0 z-10 flex items-center" style={{ paddingTop: '88px' }}>
          <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-10 py-8 text-center sm:text-left">
            <p className="eyebrow text-[12px] font-semibold flex items-center justify-center sm:justify-start gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR SERVICES
            </p>
            <h1 className="display text-white font-semibold leading-tight mx-auto sm:mx-0 max-w-2xl" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)' }}>
              Electrical & Electronic<br />
              <span style={{ color: 'var(--gold-light)' }}>Solutions</span>
            </h1>
            <p className="text-white/65 mt-3 mx-auto sm:mx-0 max-w-xl text-[14px] sm:text-[15px] leading-relaxed">
              Safe, standards-compliant electrical installations, power systems, automation, and renewable energy
              solutions for residential, commercial, and industrial clients across Nigeria.
            </p>
            <div className="flex flex-wrap gap-3 mt-5 justify-center sm:justify-start">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[13px] font-semibold">
                Request a Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> POWERING YOUR WORLD
            </p>
            <h2 className="display font-semibold leading-tight mb-5" style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
              From the grid to the socket —<br />we handle it all.
            </h2>
            <div className="space-y-4 text-slate-500 text-[15px] leading-relaxed">
              <p>
                Unreliable power is one of the biggest challenges facing Nigerian businesses and homes.
                Willstone&apos;s electrical and electronic division delivers solutions that are engineered for
                the realities of the Nigerian grid — resilient, efficient, and built to last.
              </p>
              <p>
                Whether you need a new installation, a power backup system, a solar array, or an
                intelligent building automation platform, our COREN-certified engineers have the expertise
                to deliver it safely and on time.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['LV/MV Power','Solar PV','Generators','UPS','BMS','SCADA','Structured Cabling','Automation'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-[12.5px] font-medium border"
                  style={{ background: 'rgba(201,162,75,.08)', borderColor: 'rgba(201,162,75,.3)', color: 'var(--gold)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80"
              alt="Engineers working on electrical infrastructure"
              fill sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── TABS ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-slate-400 text-[12px] font-medium mb-3 tracking-wide uppercase">Willstone Electrical & Electronic</p>
            <h2 className="display font-semibold leading-tight mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}>
              {tab.heading}
            </h2>
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold">
              Let&apos;s discuss
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
          <div className="min-w-0">
            <div className="flex overflow-x-auto border-b border-gray-200 mb-7" style={{ scrollbarWidth: 'none' }}>
              {TABS.map((t) => (
                <button key={t.id} onClick={() => setActiveTab(t.id)}
                  className={`relative shrink-0 px-4 sm:px-5 py-3 text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${activeTab === t.id ? 'text-[var(--ink)]' : 'text-slate-400 hover:text-slate-600'}`}>
                  {t.label}
                  {activeTab === t.id && <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full" style={{ background: 'var(--gold)' }} />}
                </button>
              ))}
            </div>
            <div key={activeTab}>
              <p className="text-slate-500 text-[14px] sm:text-[14.5px] leading-relaxed mb-5">{tab.intro}</p>
              <ul className="space-y-3">
                {tab.points.map((p) => (
                  <li key={p.bold} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-slate-600 leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
                    <span><strong className="text-[var(--ink)] font-semibold">{p.bold}</strong> {p.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> WHAT WE OFFER
            </p>
            <h2 className="display font-semibold text-[26px] sm:text-[32px]" style={{ color: 'var(--ink)' }}>
              Comprehensive electrical services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFERINGS.map((o) => (
              <div key={o.title} className="card-hover bg-white border border-gray-100 rounded-2xl p-6">
                <span className="commit-icon-light mb-4 inline-flex">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2">{o.icon}</svg>
                </span>
                <h3 className="font-semibold text-[14.5px] mb-2" style={{ color: 'var(--ink)' }}>{o.title}</h3>
                <p className="text-slate-500 text-[13px] leading-snug">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> FEATURED PROJECTS
            </p>
            <h2 className="display font-semibold text-[26px] sm:text-[32px]" style={{ color: 'var(--ink)' }}>
              Work we&apos;re proud of
            </h2>
          </div>
          <div className="space-y-8">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--navy)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow text-[12px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> HOW WE WORK <span className="gold-rule" />
            </p>
            <h2 className="display text-white font-semibold text-[26px] sm:text-[32px]">From survey to switch-on</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Site Survey', desc: 'We assess your site, existing infrastructure, and load requirements before recommending any solution.' },
              { step: '02', title: 'Design & Approval', desc: 'Detailed electrical drawings, load schedules, and specifications — submitted for client and regulatory approval.' },
              { step: '03', title: 'Installation', desc: 'Our certified electricians carry out the work to drawing, with daily progress reports and HSE compliance.' },
              { step: '04', title: 'Test & Commission', desc: 'Full testing, inspection, and commissioning with test certificates and as-built documentation.' },
            ].map((p) => (
              <div key={p.step} className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,.04)' }}>
                <p className="display font-bold text-[2.5rem] leading-none mb-3" style={{ color: 'rgba(201,162,75,.2)' }}>{p.step}</p>
                <h3 className="font-semibold text-white text-[15px] mb-2">{p.title}</h3>
                <p className="text-white/55 text-[13px] leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ── */}
      <section className="py-16 px-5 sm:px-8 lg:px-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-6" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> EXPLORE OTHER SERVICES
          </p>
          <div className="flex flex-wrap gap-3">
            {OTHER_SERVICES.map((s) => (
              <Link key={s.href} href={s.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-[12.5px] font-medium transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                style={{ borderColor: '#e2e6ee', color: 'var(--slate)' }}>
                <span>{s.label}</span>
                <svg className="shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="display font-semibold text-[24px] sm:text-[30px] mb-4" style={{ color: 'var(--ink)' }}>
            Need a reliable electrical partner?
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll send a qualified engineer to carry out a free site assessment.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[13px] font-semibold">
            Talk to Our Electrical Team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
