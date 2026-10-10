import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'About Willstone Strategic Industries Limited | Supplier & Procurement Partner — Nigeria',
  description: 'Learn about Willstone Strategic Industries Limited — a diversified Nigerian supplier, exporter, and procurement partner headquartered in Ibadan, Oyo State. Discover our mission, vision, values, leadership team, and the industries we serve.',
  alternates: { canonical: 'https://willstonestrategic.com/about' },
  openGraph: {
    title: 'About Willstone Strategic Industries Limited',
    description: 'A diversified Nigerian supplier, exporter, and procurement partner delivering agribusiness, technology, logistics, engineering, real estate, energy, and defence solutions.',
    url: 'https://willstonestrategic.com/about',
    siteName: 'Willstone Strategic Industries Limited',
    images: [{ url: 'https://willstonestrategic.com/assets/images/about.png', width: 1200, height: 630, alt: 'Willstone Strategic Industries Limited team' }],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Willstone Strategic Industries Limited',
    description: 'Diversified Nigerian supplier, exporter, and procurement partner headquartered in Ibadan, Oyo State.',
    images: ['https://willstonestrategic.com/assets/images/about.png'],
  },
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

const STATS = [
  { value: '40+',  label: 'No. of Corporate Clients' },
  { value: '300+', label: 'Full-Time & Skilled Employees' },
  { value: '85+',  label: 'Projects, Products & Services' },
]

export default function AboutPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      <SiteHeader variant="solid" />

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col overflow-hidden"
        style={{ minHeight: 'clamp(480px, 75vh, 680px)', paddingTop: '88px' }}
      >
        {/* full-bleed background image */}
        <Image
          src="/assets/images/about-banner.png"
          alt="Willstone strategic operations"
          fill
          sizes="100vw"
          className="object-cover object-[center_35%]"
          priority
        />
        {/* dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(6,15,31,.80) 0%, rgba(6,15,31,.62) 50%, rgba(6,15,31,.90) 100%)' }}
        />

        {/* centred text content — grows to fill available space above stats bar */}
        <div className="relative z-10 flex-1 flex items-center justify-center text-center px-5 sm:px-8 py-12 sm:py-16">
          <div className="w-full max-w-2xl">
            <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-5" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> ABOUT WILLSTONE
            </p>
            <h1
              className="display text-white font-semibold leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3.2rem)' }}
            >
              Strategic Industries.<br />
              <span style={{ color: 'var(--gold-light)' }}>Stronger Tomorrow.</span>
            </h1>
            <p
              className="text-white/70 leading-relaxed mb-8 mx-auto max-w-xl"
              style={{ fontSize: 'clamp(13px, 2.5vw, 15px)' }}
            >
              Willstone Strategic Industries Limited is a diversified Nigerian enterprise delivering
              integrated solutions across technology solutions, agriculture, logistics, infrastructure, real
              estate, energy, trade, and defence. We operate with a global mindset and deep local roots.
            </p>
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold mx-auto"
            >
              Partner With Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── STATS BAR — pinned to bottom of hero ── */}
        <div
          className="relative z-10 w-full border-t border-white/10 grid grid-cols-3 divide-x divide-white/10 shrink-0"
          style={{ background: 'rgba(6,14,29,.88)', backdropFilter: 'blur(4px)' }}
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="py-5 sm:py-7 text-center px-2 sm:px-4">
              <p className="display font-bold text-xl sm:text-3xl" style={{ color: 'var(--gold-light)' }}>
                {value}
              </p>
              <p className="text-[10px] sm:text-[11px] tracking-widest text-white/55 mt-1 leading-tight uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT — story text */}
            <div>
              {/* Eyebrow */}
              <p className="eyebrow text-[11px] font-semibold flex items-center gap-2 mb-5" style={{ color: 'var(--gold)' }}>
                OUR STORY
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </p>

              {/* Heading */}
              <h2 className="display font-bold leading-[1.08] mb-6" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: 'var(--ink)' }}>
                Building Solutions.<br />
                <span style={{ color: 'var(--gold)' }}>Creating Impact.</span>
              </h2>

              {/* Divider */}
              <div className="mb-6 rounded-full" style={{ height: '3px', width: '48px', background: 'var(--gold)' }} />

              <div className="flex flex-col gap-4 mb-8 text-slate-500 leading-relaxed" style={{ fontSize: '14.5px' }}>
                <p>
                  Willstone Strategic Industries Limited was founded with a clear purpose: to connect
                  opportunities, resources, and capabilities to create practical solutions and lasting value.
                </p>
                <p>
                  We operate across diverse industries, providing strategic solutions in global trade,
                  procurement, logistics and supply chain, agriculture and agro products, infrastructure,
                  energy, technology, and security and defence.
                </p>
                <p>
                  Our approach is simple. We understand the challenge, build the right partnerships, and
                  deliver with reliability, quality, and accountability. We work with businesses,
                  institutions, and partners to source products, execute projects, develop opportunities,
                  and connect markets.
                </p>
                <p>
                  As we grow, our goal remains the same: to build a trusted, globally connected company
                  that delivers meaningful impact through strong partnerships, innovation, and consistent
                  execution.
                </p>
              </div>

              <Link
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold"
              >
                Partner With Us
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            {/* RIGHT — 3 vertical portrait cards, middle tallest, aligned to bottom */}
            <div className="hidden lg:flex items-end justify-center gap-3" style={{ height: '460px' }}>

              {/* Card 1 — left, shorter */}
              <div className="relative rounded-2xl overflow-hidden flex-1" style={{ height: '75%', boxShadow: '0 12px 40px -8px rgba(11,27,51,.20)' }}>
                <Image
                  src="/assets/images/software-about-1.png"
                  alt="Information technology solutions"
                  fill
                  sizes="15vw"
                  className="object-cover"
                />
              </div>

              {/* Card 2 — middle, tallest, with Willstone brand overlay */}
              <div className="relative rounded-2xl overflow-hidden flex-1" style={{ height: '100%', boxShadow: '0 16px 48px -10px rgba(11,27,51,.32)' }}>
                <Image
                  src="/assets/images/Security-Defense-about.png"
                  alt="Agriculture and agribusiness"
                  fill
                  sizes="15vw"
                  className="object-cover"
                />
                {/* Dark gradient + brand badge at bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 px-5 py-6 flex flex-col gap-2"
                  style={{ background: 'linear-gradient(to top, rgba(11,27,51,.92) 0%, rgba(11,27,51,.5) 60%, transparent 100%)' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--navy)', border: '1.5px solid var(--gold)' }}>
                      <span className="text-[11px] font-bold" style={{ color: 'var(--gold)' }}>W</span>
                    </div>
                    <div>
                      <p className="text-white text-[11px] font-bold tracking-widest uppercase leading-none">WILLSTONE</p>
                      <p className="text-white/50 text-[9px] tracking-wider uppercase leading-none mt-0.5">Strategic Industries</p>
                    </div>
                  </div>
                  <div className="h-[2px] w-10 rounded-full" style={{ background: 'var(--gold)' }} />
                </div>
              </div>

              {/* Card 3 — right, shorter */}
              <div className="relative rounded-2xl overflow-hidden flex-1" style={{ height: '75%', boxShadow: '0 12px 40px -8px rgba(11,27,51,.20)' }}>
                <Image
                  src="/assets/images/Electrical-Energy-about-3.png"
                  alt="Electrical and energy solutions"
                  fill
                  sizes="15vw"
                  className="object-cover"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── MISSION · CULTURE · VISION ── */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-3 gap-6 items-stretch">

          {/* Mission — left text card */}
          <div className="about-mv-card">
            <span className="about-mv-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
              </svg>
            </span>
            <p className="text-[15px] font-bold mb-3" style={{ color: 'var(--ink)' }}>Our Mission</p>
            <p className="text-slate-500 text-[13.5px] leading-relaxed">
              To deliver integrated, innovative, and sustainable solutions that drive economic growth,
              empower businesses, and create lasting value for clients, communities, and countries —
              starting from Nigeria and reaching across the globe.
            </p>
          </div>

          {/* Culture — centre image card */}
          <div className="about-culture-card">
            <Image
              src="/assets/images/about.png"
              alt="Willstone team culture"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-[center_30%]"
            />
            {/* gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(6,15,31,.15) 0%, rgba(6,15,31,.75) 55%, rgba(6,15,31,.95) 100%)' }}
            />
            {/* text on top of image */}
            <div className="relative z-10 mt-auto p-7">
              <span className="about-mv-icon mb-4" style={{ background: 'rgba(201,162,75,.18)', border: '1px solid rgba(201,162,75,.35)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </span>
              <p className="text-[15px] font-bold text-white mb-3">Our Culture</p>
              <p className="text-white/75 text-[13px] leading-relaxed">
                Our culture revolves around integrity, innovation, and impact. We foster an environment
                where every team member is empowered to deliver excellence, collaborate openly, and build
                solutions that drive real-world progress across every sector we serve.
              </p>
            </div>
          </div>

          {/* Vision — right text card */}
          <div className="about-mv-card">
            <span className="about-mv-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
            </span>
            <p className="text-[15px] font-bold mb-3" style={{ color: 'var(--ink)' }}>Our Vision</p>
            <p className="text-slate-500 text-[13.5px] leading-relaxed">
              To become Africa&apos;s most trusted multi-sector strategic industries group — recognised for
              excellence, integrity, and the transformative impact of our work across every industry we
              operate in.
            </p>
          </div>

        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
<section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24" style={{background: 'var(--paper)'}}>
  <div className="max-w-screen-2xl mx-auto">
    {/* heading block */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
      <div>
        <p className="eyebrow text-[11px] font-semibold flex items-center gap-2 mb-4" style={{color: 'var(--gold)'}}>
          OUR INDUSTRIES SERVED
        </p>
        <h2 className="display font-bold leading-tight mb-4" style={{fontSize: 'clamp(1.7rem, 4vw, 2.5rem)', color: 'var(--ink)'}}>
          Industries We Serve
        </h2>
        <p className="text-slate-500 leading-relaxed max-w-xl" style={{fontSize: '14.5px'}}>
          We provide integrated solutions across multiple industries, combining experience, technology and industry expertise to deliver real value.
        </p>
      </div>
      <Link
        href="/services"
        className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold shrink-0"
      >
        Explore Our Services →
      </Link>
    </div>
    {/* grid */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { name: 'Agriculture & Agribusiness', src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=80' },
        { name: 'Technology & IT Solutions', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80' },
        { name: 'Logistics & Supply Chain', src: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=500&q=80' },
        { name: 'Trade & Global Commerce', src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80' },
        { name: 'Real Estate & Infrastructure', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80' },
        { name: 'Energy & Renewable Resources', src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=500&q=80' },
        { name: 'Industrial Equipment & Machinery', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80' },
        { name: 'Defence & Security', src: '/assets/images/Security-Defense-about.png' },
      ].map((industry) => (
        <div
          key={industry.name}
          className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer"
        >
          <Image
            src={industry.src}
            alt={industry.name}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{background: 'linear-gradient(to top, rgba(6,15,31,.85) 0%, rgba(6,15,31,.35) 50%, transparent 100%)'}}
          />
          <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold leading-tight">
            {industry.name}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── LEADERSHIP TEAM ── */}
<section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
  <div className="max-w-screen-2xl mx-auto">
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
      <div>
        <p className="eyebrow text-[11px] font-semibold flex items-center gap-2 mb-4" style={{color: 'var(--gold)'}}>
          OUR LEADERSHIP
        </p>
        <h2 className="display font-bold leading-tight mb-4" style={{fontSize: 'clamp(1.7rem, 4vw, 2.5rem)', color: 'var(--ink)'}}>
          Meet Our Leadership Team
        </h2>
        <p className="text-slate-500 leading-relaxed max-w-xl" style={{fontSize: '14.5px'}}>
          Our leadership team brings a wealth of experience, delivering knowledge and a strong commitment to our mission. They guide our strategy, drive innovation and ensure we deliver on our promise.
        </p>
      </div>
      <Link
        href="/about"
        className="btn-outline-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold shrink-0"
      >
        View Full Team →
      </Link>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { name: 'David Adewale', title: 'CEO & Founder', bio: 'Leads the company\'s vision, strategy and global partnerships with over 15 years of experience in trade and industrial sectors.' },
        { name: 'Chinwe Okafor', title: 'Chief Operations Officer', bio: 'Oversees operations, supply chain, and project delivery across all sectors.' },
        { name: 'Emmanuel Udo', title: 'Chief Financial Officer', bio: 'Drives financial strategy, risk management and sustainable growth.' },
        { name: 'Tunde Bello', title: 'Director of Business Development', bio: 'Builds strategic partnerships and expands market opportunities globally.' },
      ].map((leader) => (
        <div
          key={leader.name}
          className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          {/* placeholder image area */}
          <div
            className="w-full bg-slate-100 flex items-center justify-center"
            style={{height: '200px'}}
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
          <div className="p-4">
            <p className="font-bold text-[15px]" style={{color: 'var(--ink)'}}>{leader.name}</p>
            <p className="text-[11px] font-semibold uppercase tracking-wide mt-0.5 mb-2" style={{color: 'var(--gold)'}}>{leader.title}</p>
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{leader.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── WHY CHOOSE WILLSTONE ── */}
<section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24" style={{background: '#0B1B33'}}>
  <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

    {/* LEFT — 3/5 width */}
    <div className="lg:col-span-3">
      <p className="eyebrow text-[11px] font-semibold flex items-center gap-2 mb-4" style={{color: 'var(--gold)'}}>
        WHY CHOOSE US
      </p>
      <h2 className="display text-white font-bold leading-tight mb-5" style={{fontSize: 'clamp(1.7rem, 4vw, 2.6rem)'}}>
        Your Trusted Partner for Sustainable Growth
      </h2>
      <p className="text-white/60 leading-relaxed mb-8" style={{fontSize: '14.5px'}}>
        We don&apos;t just deliver products and services — we deliver solutions. With a focus on quality, reliability, and long-term partnerships, Willstone is your strategic partner for business success in Africa and beyond.
      </p>
      <ul className="flex flex-col gap-4">
        {[
          { title: 'Proven Track Record', desc: 'Trusted by 40+ corporate clients across multiple sectors.' },
          { title: 'End-to-End Solutions', desc: 'We don\u2019t just connect, we handle it all.' },
          { title: 'Global Network', desc: 'Access to international markets and partners.' },
          { title: 'Customer-Centric Approach', desc: 'Your success is our priority.' },
        ].map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <span
              className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
              style={{background: 'rgba(201,162,75,.18)', border: '1px solid rgba(201,162,75,.4)'}}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="3">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <div>
              <span className="text-white text-[14px] font-semibold">{item.title}</span>
              <span className="text-white/55 text-[13px]"> — {item.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT — 2/5 width */}
    <div className="lg:col-span-2">
      <p className="text-[11px] font-semibold mb-4 tracking-wide" style={{color: 'var(--gold)'}}>OUR GLOBAL PRESENCE</p>
      {/* Simple world map SVG */}
      <div
        className="rounded-2xl p-5 mb-6"
        style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)'}}
      >
        <svg viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-60">
          {/* Simplified continent outlines */}
          {/* North America */}
          <path d="M10 20 L30 15 L45 18 L50 30 L40 45 L30 50 L15 45 L10 35 Z" fill="none" stroke="#C9A24B" strokeWidth="1" />
          {/* South America */}
          <path d="M35 55 L50 52 L55 65 L50 85 L38 88 L30 75 L32 62 Z" fill="none" stroke="#C9A24B" strokeWidth="1" />
          {/* Europe */}
          <path d="M88 15 L100 12 L108 18 L105 28 L95 30 L85 25 Z" fill="none" stroke="#C9A24B" strokeWidth="1" />
          {/* Africa - highlighted */}
          <path d="M90 32 L105 30 L115 38 L118 55 L112 72 L100 80 L88 72 L82 55 L85 40 Z" fill="rgba(201,162,75,0.15)" stroke="#C9A24B" strokeWidth="1.5" />
          {/* Asia */}
          <path d="M110 12 L145 10 L165 20 L170 35 L155 42 L135 40 L118 32 L112 22 Z" fill="none" stroke="#C9A24B" strokeWidth="1" />
          {/* Australia */}
          <path d="M148 60 L165 58 L172 68 L168 78 L152 80 L144 70 Z" fill="none" stroke="#C9A24B" strokeWidth="1" />
          {/* Dot on Nigeria */}
          <circle cx="100" cy="52" r="3" fill="#C9A24B" />
          <circle cx="100" cy="52" r="6" fill="none" stroke="#C9A24B" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>
      <p className="text-white/60 text-[13px] leading-relaxed mb-5">
        Headquartered in Ibadan, Oyo State, Nigeria, we operate locally and internationally, connecting markets and creating opportunities.
      </p>
      <div className="flex flex-col gap-2">
        <div
          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-medium"
          style={{background: 'rgba(201,162,75,.12)', border: '1px solid rgba(201,162,75,.25)', color: '#C9A24B'}}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          Ibadan, Oyo State, Nigeria
        </div>
        <div
          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-medium"
          style={{background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', color: 'rgba(255,255,255,0.7)'}}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
          </svg>
          Global Partnerships
        </div>
      </div>
    </div>

  </div>
</section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="display text-white font-semibold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}
          >
            Ready to build something great?
          </h2>
          <p className="text-white/60 text-[15px] leading-relaxed mb-8">
            Whether you&apos;re looking for a strategic partner, a solutions provider, or a long-term
            collaborator — Willstone is ready to work with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold"
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="btn-outline-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
