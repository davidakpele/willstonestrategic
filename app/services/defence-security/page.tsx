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
    title: 'UAV & Drone Surveillance',
    desc: 'Military-grade UAVs and surveillance drones for aerial reconnaissance, border monitoring, perimeter patrol, and real-time threat intelligence.',
    icon: <><path d="M12 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z"/><path d="M12 12v10M8 16l4 4 4-4"/></>,
  },
  {
    title: 'Advanced CCTV & Thermal Cameras',
    desc: 'High-resolution IP cameras, thermal imaging, PTZ systems, and AI-powered video analytics for 24/7 surveillance of critical facilities.',
    icon: <><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/></>,
  },
  {
    title: 'Kallon Security Systems',
    desc: 'Authorised supply and integration of Kallon high-tech security platforms — including intrusion detection, command-and-control systems, and sensor fusion technology.',
    icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>,
  },
  {
    title: 'Military-Grade Equipment Supply',
    desc: 'Procurement and supply of approved military and paramilitary equipment — body armour, tactical gear, night-vision devices, and communications hardware.',
    icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v3"/></>,
  },
  {
    title: 'Perimeter Intrusion Detection (PIDS)',
    desc: 'Fibre-optic fence sensors, ground radar, microwave barriers, and laser perimeter systems providing 24/7 automated threat detection.',
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
  },
  {
    title: 'Command & Control Centres',
    desc: 'Turnkey design and build of integrated security operations centres (SOC) — video walls, PSIM platforms, alarm management, and multi-source data fusion.',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>,
  },
  {
    title: 'Armed & Close Protection Teams',
    desc: 'NSCDC-licensed armed guards, executive close protection officers, K9 units, and rapid response teams for high-risk environments.',
    icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>,
  },
  {
    title: 'Cybersecurity & Electronic Warfare',
    desc: 'Network security assessments, SIGINT awareness, jamming countermeasures, and digital threat protection for government and critical infrastructure clients.',
    icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>,
  },
]

const PRODUCTS = [
  {
    name: 'Tactical UAV — Recon Series',
    category: 'Unmanned Aerial Vehicles',
    desc: 'Long-endurance fixed-wing and multi-rotor UAVs for ISR (Intelligence, Surveillance & Reconnaissance) missions. Equipped with EO/IR payloads, encrypted data links, and autonomous flight modes.',
    img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Thermal PTZ CCTV Array',
    category: 'Surveillance Cameras',
    desc: 'Military-spec thermal and optical PTZ cameras with 360° coverage, auto-tracking, licence plate recognition, and AI-based behaviour analytics. Rated for harsh outdoor environments.',
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Kallon Integrated Security Platform',
    category: 'Command & Control',
    desc: 'The Kallon platform fuses data from CCTV, access control, perimeter sensors, and alarm systems into a single command-and-control interface — enabling real-time threat assessment and coordinated response.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Body Armour & Tactical Gear',
    category: 'Military-Grade Equipment',
    desc: 'NIJ-certified ballistic vests, plate carriers, helmets, tactical boots, and communications equipment sourced from approved international manufacturers for security forces and private clients.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Night Vision & Optics',
    category: 'Surveillance Technology',
    desc: 'Gen 3 image intensifier goggles, thermal monoculars, laser rangefinders, and day/night rifle optics for low-light surveillance, patrol, and protective operations.',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Perimeter Radar & Sensor Systems',
    category: 'Perimeter Protection',
    desc: 'Ground surveillance radar, seismic intruder detectors, and fibre-optic fence sensors that provide automatic alerts on perimeter breach — integrated with your command centre.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
]

const TABS = [
  {
    id: 'why',
    label: 'Why choose us',
    heading: 'Security you can trust.',
    intro: 'Willstone delivers defence and security solutions built on rigorous training, advanced technology, and an unwavering commitment to protecting people, assets, and information.',
    points: [
      { bold: 'Licensed & accredited:', text: 'All security personnel are licensed by the Nigeria Security and Civil Defence Corps (NSCDC) and relevant state authorities.' },
      { bold: 'Technology-led approach:', text: 'We combine human expertise with the latest surveillance, access control, and analytics platforms for layered security.' },
      { bold: 'Bespoke security plans:', text: 'Every client receives a tailored security plan based on a thorough risk assessment — no off-the-shelf solutions.' },
      { bold: 'Rapid response capability:', text: 'Our control room and rapid response teams ensure incidents are escalated and resolved with minimal disruption.' },
      { bold: 'Discreet professionalism:', text: 'Our operatives present with discipline and professionalism while maintaining a low profile appropriate to each environment.' },
      { bold: '24/7 support:', text: 'Round-the-clock operational support, monitoring, and emergency escalation for all contracted clients.' },
    ],
  },
  {
    id: 'principles',
    label: 'Our principles',
    heading: 'Built on vigilance and integrity.',
    intro: 'Our security operations are guided by principles that ensure every deployment is lawful, ethical, effective, and proportionate to the threat.',
    points: [
      { bold: 'Threat-led planning:', text: 'Security measures are designed around identified threats and risk levels — not assumptions or generic templates.' },
      { bold: 'Use of minimum force:', text: 'Our personnel are trained to resolve incidents through de-escalation and proportionate response at all times.' },
      { bold: 'Continuous training:', text: 'All operatives undergo regular refresher training in physical security, first aid, fire safety, and counter-terrorism awareness.' },
      { bold: 'Intelligence-driven:', text: 'We maintain situational awareness and share intelligence to proactively prevent incidents before they occur.' },
      { bold: 'Client confidentiality:', text: 'All operational details, client information, and security arrangements are treated with the strictest confidentiality.' },
      { bold: 'Ethical conduct:', text: 'Every member of our security team is held to a strict code of conduct — accountability is non-negotiable.' },
    ],
  },
  {
    id: 'achievements',
    label: 'Achievements',
    heading: 'A record that speaks for itself.',
    intro: 'From securing corporate campuses to managing crowds at major events, our track record demonstrates reliable performance across every sector we serve.',
    points: [
      { bold: '500+ man-years of guarding:', text: 'Continuous guarding services delivered across corporate, industrial, residential, and government facilities.' },
      { bold: 'Zero critical security breaches:', text: 'Our integrated approach has maintained an unblemished record at all tier-1 client sites.' },
      { bold: '50+ CCTV & access control deployments:', text: 'Electronic security systems installed and maintained for clients across multiple Nigerian states.' },
      { bold: 'Major event security:', text: 'Successfully secured events of up to 10,000 attendees including concerts, conferences, and state functions.' },
      { bold: 'Executive protection missions:', text: 'Hundreds of safe close-protection assignments completed for C-suite executives and visiting dignitaries.' },
      { bold: 'Cybersecurity assessments:', text: 'Security audits and digital threat mitigation delivered for financial institutions and critical infrastructure operators.' },
    ],
  },
]

const PROJECTS = [
  {
    title: 'Corporate HQ Security Integration',
    category: 'Physical Security',
    desc: 'Full security integration for a multi-tenant corporate headquarters in Abuja — including 120-channel IP CCTV, biometric access control on all floors, visitor management, and a 24/7 manned control room.',
    bullets: [
      'Eliminated tailgating incidents through biometric access and mantrap entry points',
      '120-channel CCTV with AI-based motion analytics and licence plate recognition',
      'Centralised control room with integrated alarm and intercom management',
    ],
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=80',
    bg: '#eef6ff',
  },
  {
    title: 'Oil & Gas Facility Perimeter Protection',
    category: 'Critical Infrastructure',
    desc: 'Comprehensive perimeter security for an upstream oil & gas facility — combining electrified fencing, thermal CCTV, motion-sensing lighting, armed rapid response teams, and a 24-hour guard force deployment.',
    bullets: [
      'Thermal perimeter cameras with auto-alert to guard force on detection',
      'Armed QRF (Quick Reaction Force) with sub-5-minute response across the site',
      'Zero perimeter breaches in 18 months of continuous operation',
    ],
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80',
    bg: '#f0fdf4',
  },
  {
    title: 'Large-Scale Event Security',
    category: 'Event Security',
    desc: 'End-to-end security management for a national music festival with over 8,000 attendees — covering crowd flow planning, access screening, VIP protection, emergency response coordination, and post-event debrief.',
    bullets: [
      '80-person security team deployed with sector command structure',
      'Bag and body screening at all entry points with zero prohibited items admitted',
      'Incident-free event with successful crowd dispersal at close',
    ],
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
    bg: '#fdf4ff',
  },
  {
    title: 'Financial Institution Vault & Physical Security Upgrade',
    category: 'Banking & Finance',
    desc: 'Physical security overhaul for a regional bank — upgrading vault access controls, installing anti-ram barriers, deploying covert CCTV, integrating panic alarm systems, and retraining the in-house security team.',
    bullets: [
      'Dual-authentication vault access with audit trail and time-lock controls',
      'Anti-ram bollards and shutter upgrades at all customer-facing branches',
      'Security awareness training delivered to 200+ bank staff across three states',
    ],
    img: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=900&q=80',
    bg: '#fffbeb',
  },
]

const OTHER_SERVICES = [
  { label: 'Electrical & Electronic Solutions',   href: '/services/electrical-electronic' },
  { label: 'Engineering & Technical Services',    href: '/services/engineering-technical' },
  { label: 'Information Technology & Software',   href: '/services/information-technology' },
  { label: 'Infrastructure & Facility Support',   href: '/services/infrastructure-facility' },
  { label: 'Agriculture & Agribusiness',          href: '/services/agriculture-agribusiness' },
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

export default function DefenceSecurityPage() {
  const [activeTab, setActiveTab] = useState('why')
  const tab = TABS.find((t) => t.id === activeTab)!

  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <SiteHeader variant="solid" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-[65px]" style={{ background: 'var(--navy)', minHeight: '420px' }}>
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80"
          alt="Security officer monitoring surveillance screens"
          fill loading="eager" sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(6,15,31,.97) 0%, rgba(6,15,31,.75) 50%, rgba(6,15,31,.45) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 sm:py-32 text-center sm:text-left">
          <p className="eyebrow text-[12px] font-semibold flex items-center justify-center sm:justify-start gap-3 mb-4" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> OUR SERVICES
          </p>
          <h1 className="display text-white font-semibold leading-tight mx-auto sm:mx-0 max-w-2xl" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
            Defence, Security &<br />
            <span style={{ color: 'var(--gold-light)' }}>Protective Solutions</span>
          </h1>
          <p className="text-white/65 mt-5 mx-auto sm:mx-0 max-w-xl text-[15px] leading-relaxed">
            Professional security services and technology-led protection for businesses, facilities, and individuals
            — from physical guarding and surveillance to cybersecurity and executive protection.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center sm:justify-start">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-md text-[13px] font-semibold">
              Request a Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> PROTECTING WHAT MATTERS
            </p>
            <h2 className="display font-semibold leading-tight mb-5" style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
              Intelligent security —<br />on every level.
            </h2>
            <div className="space-y-4 text-slate-500 text-[15px] leading-relaxed">
              <p>
                In an environment of evolving threats, organisations need security partners who combine rigorous
                training with smart technology. Willstone&apos;s defence and security division provides integrated
                protective solutions that address physical, electronic, and digital vulnerabilities in one coherent strategy.
              </p>
              <p>
                Whether you need a static guard force, a comprehensive CCTV network, executive close protection,
                or a full security audit, our team brings the expertise, licensing, and operational discipline to
                keep your people and assets safe — every hour of every day.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Drones & UAVs','Thermal CCTV','Kallon Systems','Military Equipment','Night Vision','Perimeter Radar','Armed Guards','K9 Units','Close Protection','Cybersecurity'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-[12.5px] font-medium border"
                  style={{ background: 'rgba(201,162,75,.08)', borderColor: 'rgba(201,162,75,.3)', color: 'var(--gold)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1000&q=80"
              alt="Security professional at a modern facility"
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
            <p className="text-slate-400 text-[12px] font-medium mb-3 tracking-wide uppercase">Willstone Defence &amp; Security</p>
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

      {/* ── EQUIPMENT & PRODUCTS ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR EQUIPMENT & PRODUCTS
            </p>
            <h2 className="display text-white font-semibold text-[26px] sm:text-[32px]">
              Military-grade technology.<br />
              <span style={{ color: 'var(--gold-light)' }}>Commercial precision.</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl text-[15px] leading-relaxed">
              We supply, install, and support the most advanced security and defence technologies available —
              sourced from approved international manufacturers and tailored for Nigerian operational environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.name} className="group rounded-2xl overflow-hidden border border-white/8 flex flex-col" style={{ background: 'rgba(255,255,255,.04)' }}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: 'rgba(6,15,31,.4)' }} />
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(201,162,75,.25)', color: 'var(--gold-light)', border: '1px solid rgba(201,162,75,.4)' }}>
                    {product.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-semibold text-[16px] mb-2">{product.name}</h3>
                  <p className="text-white/55 text-[13px] leading-snug flex-1">{product.desc}</p>
                  <Link href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold transition-colors"
                    style={{ color: 'var(--gold)' }}
                  >
                    Enquire about this product
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-[12.5px] mt-8 text-center">
            All military-grade equipment is supplied in strict compliance with Nigerian and international export control regulations.
            <Link href="/contact" className="underline ml-1 hover:text-[#C9A24B] transition-colors">Contact us</Link> for authorised procurement.
          </p>
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
              Comprehensive security services
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
            <h2 className="display text-white font-semibold text-[26px] sm:text-[32px]">From assessment to active protection</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Threat Assessment', desc: 'We conduct a thorough site survey and threat analysis to understand your vulnerabilities, risk profile, and security priorities.' },
              { step: '02', title: 'Security Design', desc: 'A bespoke security plan is developed — covering personnel, technology, procedures, and escalation protocols tailored to your environment.' },
              { step: '03', title: 'Deployment', desc: 'Trained operatives and technology systems are deployed to specification, with full client induction and handover documentation.' },
              { step: '04', title: 'Monitoring & Response', desc: 'Continuous monitoring, regular reviews, and rapid incident response ensure your security posture adapts to evolving threats.' },
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
            Need a reliable security partner?
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us about your security requirements and we&apos;ll arrange a free consultation and site assessment with one of our senior security advisors.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[13px] font-semibold">
            Talk to Our Security Team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
