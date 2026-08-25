'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/* ─── Tech-stack logos ─── */
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

/* ─── What we build categories ─── */
const CATEGORIES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Web Applications',
    desc: 'Scalable, secure and high-performing web platforms for businesses and customers.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>
      </svg>
    ),
    title: 'Mobile Applications',
    desc: 'Native and cross-platform mobile apps for iOS and Android users.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 20h8M12 18v2"/>
      </svg>
    ),
    title: 'Desktop Applications',
    desc: 'Robust desktop solutions for operations, automation and specialised workflows.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/>
        <rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/>
      </svg>
    ),
    title: 'Enterprise Systems',
    desc: 'End-to-end ERP, CRM and management platforms for large organisations.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
        <path d="M6 15h2M10 15h2"/>
      </svg>
    ),
    title: 'FinTech & Payments',
    desc: 'Payment systems, multi-currency wallets and secure financial platforms.',
  },
]

/* ─── Portfolio projects ─── */
const PROJECTS = [
  {
    tag: 'WEB APP',
    title: 'ePay',
    subtitle: 'Multi-Currency & Cross-Border Payment Platform',
    desc: 'ePay is a secure payment system designed and built to support multi-currency transactions and cross-border payment solutions for businesses and individuals.',
    bullets: [
      'Multi-currency payment processing',
      'Cross-border transaction support',
      'Google-tier fraud detection',
      'Detailed transaction tracking',
      'REST / gRPC for easy integration',
    ],
    platforms: ['Web Platform', 'Mobile App (Android & iOS)', 'Secure API', 'Enterprise Ready'],
    image: '/assets/images/software.jpg',
    badge: 'FEATURED APPLICATION',
    featured: true,
  },
  {
    tag: 'WEB APP',
    title: 'BizPortal',
    subtitle: 'Business Management Platform',
    desc: 'Business management software for company actions, and operations at scale.',
    image: '/assets/images/software-about-1.png',
    featured: false,
  },
  {
    tag: 'MOBILE APP',
    title: 'SalesTrack',
    subtitle: 'Mobile Sales Management App',
    desc: 'Mobile app for sales teams managing pipelines, customer performance on the go.',
    image: '/assets/images/software-engineers.jpg',
    featured: false,
  },
  {
    tag: 'WEB APP',
    title: 'InventoryPro',
    subtitle: 'Inventory Management System',
    desc: 'Powerful inventory management system for forecasting, stock tracking and reporting.',
    image: '/assets/images/soft.jpg',
    featured: false,
  },
  {
    tag: 'ENTERPRISE',
    title: 'HRSuite',
    subtitle: 'HR & Payroll Platform',
    desc: 'Enterprise HR and payroll management system designed for medium and large organisations.',
    image: '/assets/images/software.jpg',
    featured: false,
  },
  {
    tag: 'FINTECH',
    title: 'AnalyticsHub',
    subtitle: 'Analytics & Reporting Dashboard',
    desc: 'Analytics and reporting platform with real-time intelligence and data-driven decisions.',
    image: '/assets/images/software-about-1.png',
    featured: false,
  },
]

const PROJECT_TABS = ['All', 'Web Apps', 'Mobile Apps', 'Desktop Apps', 'Enterprise', 'FinTech']

/* ─── Dev Process steps ─── */
const PROCESS = [
  { num: '01', title: 'Discovery',        desc: 'We work with you to understand goals, data and requirements.' },
  { num: '02', title: 'Architecture & Design', desc: 'We map the architecture, UI/UX and technical structure.' },
  { num: '03', title: 'Development',      desc: 'We build clean, secure and scalable software solutions.' },
  { num: '04', title: 'Testing & Deployment', desc: 'We test thoroughly and deploy at high quality and confidence.' },
  { num: '05', title: 'Support & Growth', desc: 'We provide ongoing support and help your solution grow.' },
]

/* ─── End-to-end services ─── */
const SERVICES = [
  {
    title: 'Custom Software Development',
    desc: 'Tailored software built to solve your unique business challenges.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M12 6l-2 12"/>
      </svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    desc: 'Scalable, secure and cost-effective cloud infrastructure and migration.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 10h-1.3A6 6 0 105 15h13a4 4 0 000-5z"/>
      </svg>
    ),
  },
  {
    title: 'System Integration',
    desc: 'Seamless integration with third-party systems and APIs.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12h4M16 12h4M8 12a4 4 0 008 0M8 12a4 4 0 018 0"/>
      </svg>
    ),
  },
  {
    title: 'Cybersecurity',
    desc: 'Secure your systems and data with best-in-class security practices.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>
      </svg>
    ),
  },
  {
    title: 'Database Management',
    desc: 'Design, optimisation and management of relational databases.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 9v4c0 1.66 4 3 9 3s9-1.34 9-3V9"/>
        <path d="M3 13v4c0 1.66 4 3 9 3s9-1.34 9-3v-4"/>
      </svg>
    ),
  },
  {
    title: 'API Development',
    desc: 'RESTful and GraphQL APIs designed to be fast, reliable and scalable.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M12 3v18"/>
      </svg>
    ),
  },
  {
    title: 'RPA & Automation',
    desc: 'Intelligent process automation and robotic workflow capabilities.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="3" width="10" height="6" rx="1"/><path d="M12 9v3M8 12h8"/>
        <rect x="3" y="15" width="5" height="6" rx="1"/><rect x="10" y="15" width="5" height="6" rx="1"/>
        <rect x="17" y="15" width="5" height="6" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'IT Support & Maintenance',
    desc: 'Ongoing technical support and system maintenance for your stack.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a6 6 0 01-7 7L7 19.7a2.12 2.12 0 01-3-3L9.7 10a6 6 0 017-7l-3 3z"/>
      </svg>
    ),
  },
]

/* ─── Component ─── */
export default function ITPageClient() {
  const [activeTab, setActiveTab] = useState('All')

  return (
    <div className="it-page" style={{ fontFamily: 'var(--font-body, Inter, sans-serif)' }}>

      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: '#06101f', paddingTop: '88px' }}>
        {/* BG */}
        <div className="absolute inset-0">
          <Image src="/assets/images/soft.jpg" alt="" aria-hidden fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg,rgba(6,16,31,.96) 45%,rgba(6,16,31,.4) 100%)' }} />
        </div>

        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-20">

            {/* Left */}
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
                SOFTWARE &amp; IT SOLUTIONS
              </p>
              <h1 className="font-bold text-white leading-[1.1] mb-5"
                style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
                We Design and Build<br />
                Software That Powers<br />
                <span style={{ color: 'var(--gold)' }}>Business</span>
              </h1>
              <p className="text-white/65 text-[15px] leading-relaxed mb-8 max-w-lg">
                Web, mobile, desktop and enterprise solutions built with modern technologies to help businesses operate smarter, scale faster and deliver great experiences.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-[13px] px-6 py-3 rounded-lg"
                  style={{ background: 'var(--gold)', color: '#1a1408' }}>
                  Explore Our Applications
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-[13px] px-6 py-3 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
                  Start a Project
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                {[
                  { val: '6+',   label: 'Applications Built' },
                  { val: 'Web, Mobile\nDesktop', label: 'Multi-Platform Solutions' },
                  { val: '10+',  label: 'Technologies' },
                  { val: '100%', label: 'Client Focused' },
                ].map(({ val, label }, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-bold whitespace-pre-line leading-tight" style={{ color: 'var(--gold)', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>{val}</span>
                    <span className="text-white/45 text-[11px] tracking-wide uppercase mt-0.5">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — dashboard mockup */}
            <div className="hidden lg:flex items-center justify-end">
              <div className="relative" style={{ width: '480px', height: '320px' }}>
                <Image
                  src="/assets/images/software.jpg"
                  alt="Dashboard software mockup"
                  fill
                  className="object-cover rounded-2xl"
                  style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5)', border: '1px solid rgba(201,162,75,0.2)' }}
                />
                {/* Gold frame accent */}
                <div className="absolute -inset-2 rounded-2xl pointer-events-none" style={{ border: '1px solid rgba(201,162,75,0.12)' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════
          WHAT WE BUILD — category strip
      ══════════════════════════ */}
      <section className="py-14 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white border-b border-gray-100">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>WHAT WE BUILD</p>
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
            <h2 className="font-bold leading-tight shrink-0" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', maxWidth: '260px' }}>
              Software Solutions for<br />every business need
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 flex-1">
              {CATEGORIES.map((cat) => (
                <div key={cat.title} className="it-cat-card">
                  <span className="it-cat-icon">{cat.icon}</span>
                  <h4 className="font-semibold text-[13px] mt-3 mb-1 leading-snug" style={{ color: 'var(--ink)' }}>{cat.title}</h4>
                  <p className="text-slate-400 text-[12px] leading-snug">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          FEATURED APP — ePay
      ══════════════════════════ */}
      <section className="py-16 px-5 sm:px-10 lg:px-16 xl:px-24" style={{ background: '#06101f' }}>
        <div className="max-w-screen-2xl mx-auto">

          <div className="rounded-2xl overflow-hidden" style={{ background: '#0d1f3b', border: '1px solid rgba(201,162,75,0.15)' }}>
            <div className="grid lg:grid-cols-2 gap-0">

              {/* Left */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
                  style={{ background: 'rgba(201,162,75,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,162,75,0.25)' }}>
                  FEATURED APPLICATION
                </span>
                <h3 className="font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>ePay</h3>
                <p className="font-semibold mb-4 text-[15px]" style={{ color: 'var(--gold)' }}>
                  Multi-Currency &amp; Cross-Border Payment Platform
                </p>
                <p className="text-white/60 text-[14px] leading-relaxed mb-6">
                  ePay is a secure payment system designed and built to support multi-currency transactions and cross-border payment solutions for businesses and individuals.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    'Multi-currency payment processing',
                    'Cross-border transaction support',
                    'Google-tier fraud detection',
                    'Detailed transaction tracking',
                    'REST / gRPC for easy integration',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-white/70 text-[13px]">
                      <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Platform badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Web Platform', 'Mobile App (Android & iOS)', 'Secure API', 'Enterprise Ready'].map((p) => (
                    <span key={p} className="text-[11px] font-medium px-3 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.10)' }}>
                      {p}
                    </span>
                  ))}
                </div>

                <div>
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold px-6 py-3 rounded-lg"
                    style={{ background: 'var(--gold)', color: '#1a1408' }}>
                    View ePay Case Study
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </Link>
                </div>
              </div>

              {/* Right — screenshot */}
              <div className="relative min-h-[280px] lg:min-h-0">
                <Image
                  src="/assets/images/software-about-1.png"
                  alt="ePay payment platform dashboard screenshot"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(270deg, transparent 50%, rgba(13,31,59,.6) 100%)' }} />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════
          OUR APPLICATIONS — project grid
      ══════════════════════════ */}
      <section className="py-16 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">

          <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>OUR APPLICATIONS</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <h2 className="font-bold" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Solutions We&apos;ve Built
            </h2>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {PROJECT_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all"
                  style={{
                    background: activeTab === tab ? 'var(--navy)' : '#f0f2f5',
                    color: activeTab === tab ? '#fff' : 'var(--ink)',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.filter(p => !p.featured).map((project) => (
              <div key={project.title} className="it-project-card">
                <div className="relative h-44 overflow-hidden rounded-t-xl">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,transparent 60%,rgba(6,16,31,.7) 100%)' }} />
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(201,162,75,0.9)', color: '#1a1408' }}>
                    {project.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-[16px] mb-0.5" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>{project.title}</h4>
                  <p className="text-[12px] font-semibold mb-2" style={{ color: 'var(--gold)' }}>{project.subtitle}</p>
                  <p className="text-slate-500 text-[13px] leading-snug mb-4">{project.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: 'var(--navy)' }}>
                    View Case Study
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-[13px] font-semibold px-7 py-3 rounded-lg"
              style={{ background: '#f0f2f5', color: 'var(--ink)' }}>
              View All Applications
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          TECH STACK
      ══════════════════════════ */}
      <section className="py-14 px-5 sm:px-10 lg:px-16 xl:px-24 border-t border-gray-100 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>TECHNOLOGY EXPERTISE</p>
          <h2 className="font-bold mb-8" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)' }}>
            Technologies We Work With
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4">
            {TECH.map((tech) => (
              <div key={tech.name} className="it-tech-chip">
                <img src={tech.src} alt={tech.name} width={28} height={28} style={{ objectFit: 'contain' }} />
                <span className="text-[10px] text-slate-500 mt-1.5 text-center leading-tight">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          DEV PROCESS
      ══════════════════════════ */}
      <section className="py-16 px-5 sm:px-10 lg:px-16 xl:px-24" style={{ background: '#06101f' }}>
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>HOW WE WORK</p>
          <h2 className="font-bold text-white mb-10" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
            Our Development Process
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS.map((step, i) => (
              <div key={step.num} className="it-process-step">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[28px] font-bold leading-none" style={{ color: 'rgba(201,162,75,0.25)', fontFamily: 'var(--font-display)' }}>
                    {step.num}
                  </span>
                  {i < PROCESS.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px" style={{ background: 'rgba(201,162,75,0.15)' }} />
                  )}
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(201,162,75,0.1)', border: '1px solid rgba(201,162,75,0.2)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-white text-[14px] mb-1">{step.title}</h4>
                <p className="text-white/45 text-[12.5px] leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          END-TO-END SERVICES
      ══════════════════════════ */}
      <section className="py-16 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>WHY CHOOSE WILLSTONE</p>
          <h2 className="font-bold mb-10" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
            End-to-End IT Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="it-service-card">
                <span className="it-service-icon">{svc.icon}</span>
                <h4 className="font-semibold text-[14px] mt-3 mb-1 leading-snug" style={{ color: 'var(--ink)' }}>{svc.title}</h4>
                <p className="text-slate-400 text-[12.5px] leading-snug">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CTA BANNER
      ══════════════════════════ */}
      <section className="relative overflow-hidden py-16 px-5 sm:px-10 lg:px-16 xl:px-24" style={{ background: '#0d1f3b' }}>
        <div className="absolute inset-0">
          <Image src="/assets/images/software-engineers.jpg" alt="" aria-hidden fill className="object-cover opacity-10" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(13,31,59,.95) 0%,rgba(13,31,59,.75) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-bold text-white leading-tight mb-2"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              Have an idea or an existing system?
            </h2>
            <p className="text-white/55 text-[14px]">Let&apos;s build something great together.</p>
          </div>
          <Link href="/contact"
            className="shrink-0 inline-flex items-center gap-2 font-semibold text-[14px] px-8 py-4 rounded-xl"
            style={{ background: 'var(--gold)', color: '#1a1408' }}>
            Start a Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

    </div>
  )
}
