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

const VALUES = [
  {
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standards in every project, partnership, and solution we deliver.',
    icon: <path d="M12 2l2.4 5 5.6.6-4 3.9 1 5.5L12 14l-5 3 1-5.5-4-3.9 5.6-.6z" />,
  },
  {
    title: 'Integrity',
    desc: 'We build every relationship on a foundation of honesty, transparency, and accountability — no exceptions.',
    icon: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />,
  },
  {
    title: 'Innovation',
    desc: 'We challenge conventional thinking and embrace new ideas to craft smarter, more sustainable solutions.',
    icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 3z" />,
  },
  {
    title: 'Impact',
    desc: 'Our success is measured by the real difference we make in the lives of communities, clients, and countries.',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" />
        <path d="M9.5 10.5L6.5 7.5M14.5 10.5l3-3M9.5 13.5l-3 3M14.5 13.5l3 3" />
      </>
    ),
  },
  {
    title: 'Partnership',
    desc: 'We treat every client as a long-term partner, investing in mutual growth and shared success.',
    icon: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 7a4 4 0 110 8 4 4 0 010-8z" />,
  },
  {
    title: 'Sustainability',
    desc: 'We operate with a long-term mindset, ensuring our projects create value today without compromising tomorrow.',
    icon: (
      <>
        <path d="M2 12a10 10 0 1020 0 10 10 0 00-20 0z" />
        <path d="M12 8v4l3 3" />
      </>
    ),
  },
]

const LEADERSHIP = [
  {
    name: 'David Akpele',
    title: 'Founder & CEO/MD',
    bio: 'A seasoned entrepreneur with over 15 years of experience spanning technology, trade, and infrastructure across West Africa.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Chidinma Okafor',
    title: 'Chief Operating Officer',
    bio: 'Operations expert with a track record of scaling multi-sector businesses in demanding emerging-market environments.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Emeka Nwosu',
    title: 'Director, Engineering & Infrastructure',
    bio: 'Chartered engineer with deep expertise in large-scale infrastructure delivery, energy systems, and facility management.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Fatima Al-Hassan',
    title: 'Director, Trade & Logistics',
    bio: 'International trade specialist with a decade of experience managing complex import/export operations across three continents.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
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
              integrated solutions across technology, agriculture, logistics, infrastructure, real
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

      {/* ── VALUES ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-6xl mx-auto">

          {/* section header */}
          <div className="text-center max-w-lg mx-auto mb-14">
            <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR VALUES <span className="gold-rule" />
            </p>
            <h2 className="display font-semibold text-[26px] sm:text-[30px]" style={{ color: 'var(--ink)' }}>
              What we stand for
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="about-value-card">
                <span className="about-value-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2">
                    {v.icon}
                  </svg>
                </span>
                <h3 className="font-semibold text-[15px] mb-1.5" style={{ color: 'var(--ink)' }}>{v.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-lg mx-auto mb-14">
            <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> LEADERSHIP <span className="gold-rule" />
            </p>
            <h2 className="display font-semibold text-[26px] sm:text-[30px]" style={{ color: 'var(--ink)' }}>
              The people behind Willstone
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="about-leader-card group">
                <div className="relative aspect-[3/3.2] overflow-hidden rounded-xl mb-4">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* bottom gradient */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(11,27,51,.65) 100%)' }}
                  />
                </div>
                <p className="font-semibold text-[15px]" style={{ color: 'var(--ink)' }}>{person.name}</p>
                <p className="text-[12px] font-medium mt-0.5 mb-2" style={{ color: 'var(--gold)' }}>{person.title}</p>
                <p className="text-slate-500 text-[12.5px] leading-relaxed">{person.bio}</p>
              </div>
            ))}
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
