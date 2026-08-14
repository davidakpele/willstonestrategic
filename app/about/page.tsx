import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'About Us | Willstone Strategic Industries Limited',
  description:
    'Learn about Willstone Strategic Industries Limited — our story, mission, vision, values, leadership, and the industries we serve across Nigeria and beyond.',
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

      {/* ── MISSION · CULTURE · VISION ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 items-stretch">

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

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--navy)' }}>
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
