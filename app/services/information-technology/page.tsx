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
    title: 'Custom Software Development',
    desc: 'Bespoke web and mobile applications designed around your exact business processes and workflows.',
    icon: <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M12 3l-2 18" />,
  },
  {
    title: 'Enterprise Systems & ERP',
    desc: 'Full implementation, customisation, and support for enterprise resource planning and business management platforms.',
    icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
  },
  {
    title: 'Cloud Solutions & Migration',
    desc: 'Strategy, architecture, and migration services to move your infrastructure to AWS, Azure, or Google Cloud securely.',
    icon: <><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></>,
  },
  {
    title: 'Cybersecurity & Data Protection',
    desc: 'Vulnerability assessments, penetration testing, SIEM deployment, and compliance-ready security frameworks.',
    icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />,
  },
  {
    title: 'IT Consultancy & Strategy',
    desc: 'Technology audits, digital transformation roadmaps, and CTO-as-a-service for growing organisations.',
    icon: <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></>,
  },
  {
    title: 'Database Design & Management',
    desc: 'Relational and NoSQL database design, optimisation, migration, and ongoing managed support.',
    icon: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>,
  },
  {
    title: 'UI/UX Design & Prototyping',
    desc: 'User research, wireframing, high-fidelity design, and interactive prototypes that put users first.',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>,
  },
  {
    title: 'IT Support & Managed Services',
    desc: 'Helpdesk, remote monitoring, patch management, and proactive maintenance to keep your systems running.',
    icon: <><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></>,
  },
]

const TABS = [
  {
    id: 'why',
    label: 'Why choose us',
    heading: 'Technology that works for your business.',
    intro: 'We build software and deliver IT solutions that are practical, scalable, and aligned with real business outcomes — not just technical specifications.',
    points: [
      { bold: 'Business-first approach:', text: 'Every solution starts with understanding your goals, not just your technical requirements.' },
      { bold: 'Agile delivery:', text: 'Iterative sprints with regular demos keep you in control and reduce delivery risk.' },
      { bold: 'Local expertise, global standards:', text: 'Our team is based in Nigeria but builds to international engineering best practices.' },
      { bold: 'End-to-end ownership:', text: 'From discovery through deployment and ongoing support — one team, full accountability.' },
      { bold: 'Transparent pricing:', text: 'Fixed-price or time-and-materials engagements with clear scopes and no hidden costs.' },
      { bold: 'Post-launch support:', text: 'Dedicated support plans ensure your systems stay performant and secure after go-live.' },
    ],
  },
  {
    id: 'principles',
    label: 'Our principles',
    heading: 'How we build great software.',
    intro: 'Our engineering culture is built on practices that produce reliable, maintainable, and secure systems at every scale.',
    points: [
      { bold: 'Security by design:', text: 'Security considerations are built in from day one, not bolted on at the end.' },
      { bold: 'Clean, documented code:', text: 'We write code that your team can read, understand, and extend long after we deliver.' },
      { bold: 'Test-driven development:', text: 'Automated testing at every layer catches bugs before they reach production.' },
      { bold: 'Continuous integration:', text: 'CI/CD pipelines automate testing and deployment, reducing manual error.' },
      { bold: 'User-centred design:', text: 'We test with real users at every stage to ensure the product is intuitive and effective.' },
      { bold: 'Open standards:', text: 'We prefer open-source foundations and avoid vendor lock-in wherever possible.' },
    ],
  },
  {
    id: 'achievements',
    label: 'Achievements',
    heading: 'A track record of delivery.',
    intro: 'Across sectors and scales, Willstone IT has delivered systems that drive measurable results for our clients.',
    points: [
      { bold: '50+ applications delivered:', text: 'Web, mobile, and enterprise systems shipped to clients across Nigeria and internationally.' },
      { bold: '99.9% uptime SLAs:', text: 'Our managed hosting and cloud infrastructure consistently meets enterprise availability targets.' },
      { bold: 'Zero critical breaches:', text: 'No client system managed by Willstone has suffered a critical security incident under our watch.' },
      { bold: 'Avg. 40% efficiency gain:', text: 'Clients report an average 40% reduction in manual processes after deploying our automation solutions.' },
      { bold: 'Cross-sector reach:', text: 'Systems delivered for clients in agriculture, finance, logistics, healthcare, and government.' },
      { bold: 'ISO 27001-aligned practices:', text: 'Our security management framework is benchmarked against ISO 27001 controls.' },
    ],
  },
]

const TECH_STACK = [
  { category: 'Frontend',  items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend',   items: ['Node.js', 'Python', 'Rust', 'Java', 'Go'] },
  { category: 'Mobile',    items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { category: 'Cloud',     items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
  { category: 'Database',  items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Neo4j', 'Supabase'] },
  { category: 'DevOps',    items: ['GitHub Actions', 'CI/CD', 'Terraform', 'Nginx', 'Linux'] },
  { category: 'Messaging', items: ['RabbitMQ', 'Apache Kafka', 'Redis Pub/Sub', 'WebSockets'] },
]

const PROJECTS = [
  {
    title: 'AgroTrack Platform',
    category: 'Farm Management System',
    desc: 'A comprehensive farm-to-export management platform that digitises every step of the agricultural supply chain — from planting schedules and harvest logging to quality checks and export documentation.',
    bullets: [
      'Real-time crop monitoring and yield forecasting dashboard',
      'Automated export documentation and phytosanitary compliance',
      'Multi-farm, multi-commodity management from a single interface',
    ],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    bg: '#eef6ff',
  },
  {
    title: 'SupplyChain Hub',
    category: 'Logistics Visibility Platform',
    desc: 'An enterprise logistics platform that gives supply chain managers real-time visibility across all shipments, warehouses, and delivery routes — with predictive delay alerts and carrier performance analytics.',
    bullets: [
      'Live shipment tracking integrated with 20+ carriers',
      'Warehouse inventory management with low-stock alerts',
      'Automated reporting and KPI dashboards for operations teams',
    ],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    bg: '#f0fdf4',
  },
  {
    title: 'SecureVault',
    category: 'Document & Identity Platform',
    desc: 'A cross-platform mobile and web application for secure document storage, digital identity verification, and audit-ready access controls — built for businesses that handle sensitive client data.',
    bullets: [
      'Biometric authentication and end-to-end document encryption',
      'Role-based access controls with full audit trail logging',
      'NDPR and GDPR-compliant data handling architecture',
    ],
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80',
    bg: '#fdf4ff',
  },
  {
    title: 'Infrastructure Monitor',
    category: 'DevOps & Analytics Dashboard',
    desc: 'A real-time infrastructure health and observability platform used by operations teams to monitor servers, applications, and microservices — with intelligent alerting and root-cause analysis tools.',
    bullets: [
      'Unified metrics, logs, and traces across distributed systems',
      'Configurable alert rules with PagerDuty and Slack integration',
      'Predictive anomaly detection powered by time-series analysis',
    ],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    bg: '#fffbeb',
  },
  {
    title: 'PeopleFirst HR Suite',
    category: 'Human Resources & Payroll',
    desc: 'A full-featured HR and payroll platform built for Nigerian businesses — handling employee onboarding, leave management, performance reviews, multi-branch payroll, and statutory compliance.',
    bullets: [
      'Automated PAYE, pension, and NHF calculations with remittance exports',
      'Self-service employee portal for payslips, leave requests, and documents',
      'Multi-branch, multi-currency support for growing organisations',
    ],
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    bg: '#f0f9ff',
  },
  {
    title: 'TradeNest Marketplace',
    category: 'E-Commerce Platform',
    desc: 'A multi-vendor e-commerce marketplace connecting buyers and sellers across Nigeria — with integrated payment processing, order management, seller analytics, and a mobile-first storefront.',
    bullets: [
      'Integrated Paystack and Flutterwave payment gateways',
      'Seller dashboard with real-time sales, inventory, and review analytics',
      'AI-powered product recommendations and personalised search',
    ],
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80',
    bg: '#fff1f2',
  },
]

const OTHER_SERVICES = [
  { label: 'Agriculture & Agribusiness',           href: '/services/agriculture-agribusiness' },
  { label: 'Engineering & Technical Services',     href: '/services/engineering-technical' },
  { label: 'Logistics & Supply Chain Management',  href: '/services/logistics-supply-chain' },
  { label: 'General Trading & Procurement',        href: '/services/trading-procurement' },
  { label: 'Defence, Security & Protective Solutions', href: '/services/defence-security' },
]

// ── Scroll-triggered project card ──────────────────────────────────────────
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
      {/* Screenshot side — slides in from left or right */}
      <div
        className={`relative aspect-[4/3] md:aspect-auto md:h-full min-h-[240px] overflow-hidden project-img-wrap ${isReverse ? 'md:order-2' : ''}`}
        style={{
          transform: visible ? 'translateX(0)' : isReverse ? 'translateX(60px)' : 'translateX(-60px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.75s cubic-bezier(0.22,1,0.36,1), opacity 0.75s ease',
        }}
      >
        <Image
          src={project.img}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover project-img"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: isReverse ? 'inset -40px 0 60px rgba(0,0,0,.06)' : 'inset 40px 0 60px rgba(0,0,0,.06)' }}
        />
      </div>

      {/* Text side — fades up with a slight delay */}
      <div
        className={`p-8 sm:p-10 ${isReverse ? 'md:order-1' : ''}`}
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(28px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.18s, opacity 0.75s ease 0.18s',
        }}
      >
        <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
          {project.category}
        </p>
        <h3 className="display font-semibold text-[22px] sm:text-[26px] mb-4 leading-tight" style={{ color: 'var(--ink)' }}>
          {project.title}
        </h3>
        <p className="text-slate-500 text-[14.5px] leading-relaxed mb-6">{project.desc}</p>
        <ul className="space-y-3 mb-8">
          {project.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-[13.5px] text-slate-600">
              <span className="mt-1 w-5 h-5 rounded-full shrink-0 flex items-center justify-center"
                style={{ background: 'rgba(201,162,75,.15)' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-[13px] font-semibold text-white project-cta"
          style={{ background: 'var(--navy)' }}
        >
          Read More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default function InformationTechnologyPage() {
  const [activeTab, setActiveTab] = useState('why')
  const tab = TABS.find((t) => t.id === activeTab)!

  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <SiteHeader variant="solid" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-[65px]" style={{ background: 'var(--navy)', minHeight: '420px' }}>
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80"
          alt="Circuit board representing technology and software development"
          fill priority sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(6,15,31,.97) 0%, rgba(6,15,31,.80) 50%, rgba(6,15,31,.50) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 sm:py-32 text-center sm:text-left">
          <p className="eyebrow text-[12px] font-semibold flex items-center justify-center sm:justify-start gap-3 mb-4" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> OUR SERVICES
          </p>
          <h1 className="display text-white font-semibold leading-tight mx-auto sm:mx-0 max-w-2xl" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
            Information Technology &<br />
            <span style={{ color: 'var(--gold-light)' }}>Software Development</span>
          </h1>
          <p className="text-white/65 mt-5 mx-auto sm:mx-0 max-w-xl text-[15px] leading-relaxed">
            We design, build, and maintain software systems and IT infrastructure that help businesses
            work smarter, scale faster, and compete in a digital world.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center sm:justify-start">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-md text-[13px] font-semibold">
              Start a Project
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
              <span className="gold-rule" /> DIGITAL TRANSFORMATION
            </p>
            <h2 className="display font-semibold leading-tight mb-5" style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
              Building the technology<br />your business deserves.
            </h2>
            <div className="space-y-4 text-slate-500 text-[15px] leading-relaxed">
              <p>
                Nigerian businesses are rapidly adopting digital tools — and Willstone is here to make
                that transition seamless, affordable, and effective. Whether you&apos;re digitising manual
                processes, launching a customer-facing product, or modernising legacy infrastructure, we
                have the expertise to deliver.
              </p>
              <p>
                Our engineers, designers, and consultants work as an extension of your team — embedded
                in your goals, communicating clearly, and delivering software that actually gets used.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Web Apps','Mobile','Cloud','APIs','ERP','Security','UI/UX','DevOps'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-[12.5px] font-medium border"
                  style={{ background: 'rgba(201,162,75,.08)', borderColor: 'rgba(201,162,75,.3)', color: 'var(--gold)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80"
              alt="Developer writing code on a monitor"
              fill sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── TABS + TECH STACK ── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">

            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <p className="text-slate-400 text-[12px] font-medium mb-3 tracking-wide uppercase">Willstone IT & Software</p>
              <h2 className="display font-semibold leading-tight mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}>
                {tab.heading}
              </h2>
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold">
                Let&apos;s discuss
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            {/* Right — tabs */}
            <div className="min-w-0">
              <div className="flex overflow-x-auto border-b border-gray-200 mb-7" style={{ scrollbarWidth: 'none' }}>
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`relative shrink-0 px-4 sm:px-5 py-3 text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      activeTab === t.id ? 'text-[var(--ink)]' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {t.label}
                    {activeTab === t.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full" style={{ background: 'var(--gold)' }} />
                    )}
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

          {/* Tech stack grid */}
          <div className="mt-14">
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-6" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR TECH STACK
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {TECH_STACK.map((group) => (
                <div key={group.category} className="rounded-xl border border-gray-100 p-4" style={{ background: 'var(--paper)' }}>
                  <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>{group.category}</p>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-[12.5px] text-slate-600 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--navy)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> SOME OF OUR PROJECTS
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

      {/* ── OFFERINGS ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> WHAT WE OFFER
            </p>
            <h2 className="display font-semibold text-[26px] sm:text-[32px]" style={{ color: 'var(--ink)' }}>
              Full-spectrum IT services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFERINGS.map((o) => (
              <div key={o.title} className="card-hover bg-white border border-gray-100 rounded-2xl p-6">
                <span className="commit-icon-light mb-4 inline-flex">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2">
                    {o.icon}
                  </svg>
                </span>
                <h3 className="font-semibold text-[14.5px] mb-2" style={{ color: 'var(--ink)' }}>{o.title}</h3>
                <p className="text-slate-500 text-[13px] leading-snug">{o.desc}</p>
              </div>
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
            <h2 className="display text-white font-semibold text-[26px] sm:text-[32px]">
              From idea to production
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn your business, users, and goals through workshops and stakeholder interviews.' },
              { step: '02', title: 'Design & Architecture', desc: 'We prototype the UX, define the technical architecture, and align on scope and timeline.' },
              { step: '03', title: 'Build & Test', desc: 'Agile sprints with continuous testing, regular demos, and transparent progress tracking.' },
              { step: '04', title: 'Deploy & Support', desc: 'Go-live with zero-downtime deployment, followed by monitoring and ongoing managed support.' },
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
                style={{ borderColor: '#e2e6ee', color: 'var(--slate)' }}
              >
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
            Ready to build something great?
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll put together a proposal — no obligation, no jargon.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[13px] font-semibold">
            Talk to Our Tech Team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
