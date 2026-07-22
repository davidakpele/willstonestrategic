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
  { value: '10+',  label: 'Industries Served' },
  { value: '50+',  label: 'Projects Delivered' },
  { value: '100+', label: 'Partners Worldwide' },
  { value: '15+',  label: 'Countries Reached' },
]

const VALUES = [
  {
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standards in every project, every partnership, and every solution we deliver.',
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

const MILESTONES = [
  { year: '2010', event: 'Willstone founded in Ibadan, Oyo State, with a focus on general trading and procurement.' },
  { year: '2013', event: 'Expanded into logistics and supply chain management, serving clients across Nigeria.' },
  { year: '2016', event: 'Launched the Engineering & Infrastructure division, completing 10+ projects in the first year.' },
  { year: '2018', event: 'Established international trade partnerships across West Africa, Europe, and Asia.' },
  { year: '2020', event: 'Launched Information Technology & Software Development services to support digital transformation.' },
  { year: '2022', event: 'Surpassed 100 active partners worldwide and expanded operations to 15 countries.' },
  { year: '2024', event: 'Incorporated Defence, Security & Protective Solutions and Agriculture & Agribusiness divisions.' },
  { year: '2026', event: 'Celebrating 16 years of impact — building stronger industries and a more connected world.' },
]

export default function AboutPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <SiteHeader variant="solid" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-[65px]" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
          <svg width="100%" height="100%">
            <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A24B" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> ABOUT WILLSTONE
            </p>
            <h1 className="display text-white font-semibold leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              Strategic Industries.<br />
              <span style={{ color: 'var(--gold-light)' }}>Stronger Tomorrow.</span>
            </h1>
            <p className="text-white/65 text-[15px] leading-relaxed max-w-lg mb-8">
              Willstone Strategic Industries Limited is a diversified Nigerian enterprise delivering integrated
              solutions across technology, agriculture, logistics, infrastructure, real estate, energy, trade,
              and defence. We operate with a global mindset and deep local roots.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-md text-[13px] font-semibold">
                Partner With Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-2xl">
            <Image
              src="/assets/images/about.png"
              alt="Willstone team members on an industrial site"
              fill sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,27,51,0) 50%, rgba(11,27,51,.5) 100%)' }} />
          </div>
        </div>
      </section>
      {/* ── MISSION & VISION ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 sm:p-10 border border-gray-100" style={{ background: 'var(--paper)' }}>
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5" style={{ background: 'rgba(201,162,75,.12)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
              </svg>
            </span>
            <h2 className="display font-semibold text-[20px] mb-3" style={{ color: 'var(--ink)' }}>Our Mission</h2>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              To deliver integrated, innovative, and sustainable solutions that drive economic growth, empower
              businesses, and create lasting value for clients, communities, and countries — starting from Nigeria
              and reaching across the globe.
            </p>
          </div>
          <div className="rounded-2xl p-8 sm:p-10 border border-gray-100" style={{ background: 'var(--paper)' }}>
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5" style={{ background: 'rgba(201,162,75,.12)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
            </span>
            <h2 className="display font-semibold text-[20px] mb-3" style={{ color: 'var(--ink)' }}>Our Vision</h2>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              To become Africa&apos;s most trusted multi-sector strategic industries group — recognised for
              excellence, integrity, and the transformative impact of our work across every industry we operate in.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow text-[12px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR VALUES <span className="gold-rule" />
            </p>
            <h2 className="display font-semibold text-[26px] sm:text-[32px]" style={{ color: 'var(--ink)' }}>
              What we stand for
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card-hover border border-gray-100 rounded-2xl p-7" style={{ background: 'var(--paper)' }}>
                <span className="commit-icon-light mb-4 inline-flex">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2">
                    {v.icon}
                  </svg>
                </span>
                <h3 className="font-semibold text-[16px] mb-2" style={{ color: 'var(--ink)' }}>{v.title}</h3>
                <p className="text-slate-500 text-[13.5px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow text-[12px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> LEADERSHIP <span className="gold-rule" />
            </p>
            <h2 className="display font-semibold text-[26px] sm:text-[32px]" style={{ color: 'var(--ink)' }}>
              The people behind Willstone
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group">
                <div className="relative aspect-[3/3.5] overflow-hidden">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(11,27,51,.6) 100%)' }} />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-[15px]" style={{ color: 'var(--ink)' }}>{person.name}</p>
                  <p className="text-[12px] font-medium mt-0.5 mb-3" style={{ color: 'var(--gold)' }}>{person.title}</p>
                  <p className="text-slate-500 text-[12.5px] leading-snug">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--navy)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow text-[12px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> OUR JOURNEY <span className="gold-rule" />
            </p>
            <h2 className="display text-white font-semibold text-[26px] sm:text-[32px]">
              16 years of building
            </h2>
          </div>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[72px] sm:left-1/2 top-0 bottom-0 w-px" style={{ background: 'rgba(201,162,75,.25)' }} />
            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* text side */}
                  <div className={`sm:w-[calc(50%-28px)] ${i % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:pl-8'} pl-[96px] sm:pl-0`}>
                    <p className="font-semibold text-[13.5px] leading-snug text-white/80">{m.event}</p>
                  </div>
                  {/* dot */}
                  <div className="absolute left-[60px] sm:left-1/2 sm:-translate-x-1/2 top-1 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'var(--navy)', borderColor: 'var(--gold)' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: 'var(--gold)' }} />
                  </div>
                  {/* year badge */}
                  <div className={`hidden sm:block sm:w-[calc(50%-28px)] ${i % 2 === 0 ? 'sm:pl-8' : 'sm:text-right sm:pr-8'}`}>
                    <span className="display font-bold text-[13px] px-3 py-1 rounded-full" style={{ background: 'rgba(201,162,75,.15)', color: 'var(--gold-light)' }}>
                      {m.year}
                    </span>
                  </div>
                  {/* mobile year */}
                  <div className="sm:hidden absolute left-0 top-0 w-[56px] text-center">
                    <span className="display font-bold text-[12px]" style={{ color: 'var(--gold)' }}>{m.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display font-semibold text-[24px] sm:text-[32px] mb-4" style={{ color: 'var(--ink)' }}>
            Ready to build something great?
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xl mx-auto mb-8">
            Whether you&apos;re looking for a strategic partner, a solutions provider, or a long-term collaborator —
            Willstone is ready to work with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold">
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <Link href="/#services" className="btn-outline-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
