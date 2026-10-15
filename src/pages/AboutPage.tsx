import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export default function AboutPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      <SiteHeader variant="solid" />

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col overflow-hidden"
        style={{ minHeight: 'clamp(480px, 75vh, 680px)', paddingTop: '88px' }}
      >
        {/* full-bleed background image */}
        <img
          src="/assets/images/about-banner.png"
          alt="Willstone strategic operations"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
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
            <a
              href="/contact"
              className="btn-gold inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold mx-auto"
            >
              Partner With Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── STATS BAR — pinned to bottom of hero ── */}
      </section>

      {/* ── OUR STORY ── */}
      <section className="pt-20 pb-10 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
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

              <a
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold"
              >
                Partner With Us
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            {/* RIGHT — 3 vertical portrait cards, middle tallest, aligned to bottom */}
            <div className="hidden lg:flex items-end justify-center gap-3" style={{ height: '460px' }}>

              {/* Card 1 — left, shorter */}
              <div className="relative rounded-2xl overflow-hidden flex-1" style={{ height: '75%', boxShadow: '0 12px 40px -8px rgba(11,27,51,.20)', position: 'relative' }}>
                <img
                  src="/assets/images/software-about-1.png"
                  alt="Information technology solutions"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Card 2 — middle, tallest, with Willstone brand overlay */}
              <div className="relative rounded-2xl overflow-hidden flex-1" style={{ height: '100%', boxShadow: '0 16px 48px -10px rgba(11,27,51,.32)' }}>
                <img
                  src="/assets/images/Security-Defense-about.png"
                  alt="Agriculture and agribusiness"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
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
                <img
                  src="/assets/images/Electrical-Energy-about-3.png"
                  alt="Electrical and energy solutions"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── MISSION · CULTURE · VISION ── */}
      <section className="pt-10 pb-20 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
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
            <img
              src="/assets/images/about.png"
              alt="Willstone team culture"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
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
              To become Africa's most trusted multi-sector strategic industries group — recognised for
              excellence, integrity, and the transformative impact of our work across every industry we
              operate in.
            </p>
          </div>

        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-center">

            {/* LEFT — text */}
            <div className="flex flex-col">
              <p className="eyebrow text-[11px] font-semibold flex items-center gap-2 mb-4" style={{ color: 'var(--gold)' }}>
                <span className="gold-rule" /> OUR DIVERSE SECTORS
              </p>
              <h2 className="display font-bold leading-tight mb-4" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', color: 'var(--ink)' }}>
                Industries We Serve
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8" style={{ fontSize: '14.5px' }}>
                We provide integrated solutions across multiple industries, combining experience, technology and industry expertise to deliver real value.
              </p>
              <a
                href="/services"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold self-start"
              >
                Explore Our Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>

            {/* RIGHT — 2-row × 4-col card grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  name: 'Agriculture &\nAgribusiness',
                  src: '/assets/images/agric-banner.avif',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C8 3 4 7 4 12c0 2 1 4 2.5 5.5M12 3c4 0 8 4 8 9 0 2-1 4-2.5 5.5M12 3v18M7 7l10 10M17 7L7 17" />,
                },
                {
                  name: 'Technology & IT\nSolutions',
                  src: '/assets/images/soft.jpg',
                  icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
                },
                {
                  name: 'Logistics &\nSupply Chain',
                  src: '/assets/images/globalization-supply-chain.jpg',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V6a1 1 0 011-1h9v11M3 16h13M3 16a2 2 0 104 0M16 16a2 2 0 104 0M16 10h4l3 3v3h-3" />,
                },
                {
                  name: 'Trade & Global\nCommerce',
                  src: '/assets/images/TradeGlobal.jpg',
                  icon: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18" /></>,
                },
                {
                  name: 'Real Estate &\nInfrastructure',
                  src: '/assets/images/real-estate-1.jpg',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
                },
                {
                  name: 'Energy &\nRenewable',
                  src: '/assets/images/Energy-renewable.jpg',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
                },
                {
                  name: 'Industrial Equipment\n& Machinery',
                  src: '/assets/images/Industrial-Equipment-Machinery.avif',
                  icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></>,
                },
                {
                  name: 'Defence &\nSecurity',
                  src: '/assets/images/Security-Defense-about.png',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V6z" />,
                },
              ].map((industry) => (
                <div
                  key={industry.name}
                  className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow duration-200"
                >
                  {/* Image top */}
                  <div className="relative overflow-hidden" style={{ height: '110px' }}>
                    <img
                      src={industry.src}
                      alt={industry.name.replace('\n', ' ')}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      className="group-hover:scale-105"
                    />
                  </div>
                  {/* Label bottom — white bg, icon + name */}
                  <div className="flex items-center gap-2 px-3 py-2.5">
                    <span
                      className="shrink-0 flex items-center justify-center rounded-full"
                      style={{ width: '28px', height: '28px', background: 'rgba(201,162,75,0.12)' }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                        {industry.icon}
                      </svg>
                    </span>
                    <p className="text-[11px] font-semibold leading-tight whitespace-pre-line" style={{ color: 'var(--ink)' }}>
                      {industry.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ── */}
      <section className="py-20 px-5 sm:px-10 lg:px-16 xl:px-24" style={{ background: 'rgba(11,27,51,0.06)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 items-center">

            {/* LEFT — text */}
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
              <p className="eyebrow text-[11px] font-semibold flex items-center gap-2 mb-5" style={{ color: 'var(--gold)' }}>
                <span className="gold-rule" /> OUR LEADERSHIP
              </p>
              <h2 className="display font-bold leading-tight mb-5" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', color: 'var(--ink)' }}>
                Meet Our Leadership Team
              </h2>
              <p className="leading-relaxed mb-8 text-slate-500" style={{ fontSize: '14.5px' }}>
                Our leadership team brings a wealth of experience, industry knowledge and a shared commitment to our mission. They guide our strategy, drive innovation and ensure we deliver on our promise.
              </p>
              <a
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold self-start"
              >
                View Full Team
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>

            {/* RIGHT — portrait cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  name: 'Christian Akpele',
                  title: 'Managing Director / Co-Founder',
                  bio: "Leads the company's vision, strategy and global partnerships with over 15 years of experience in trade and industrial solutions.",
                  img: '/assets/images/Osas.jpg',
                },
                {
                  name: 'Chinwe Okafor',
                  title: 'IT Manager',
                  bio: 'Oversees operations, supply chain, and project delivery across all sectors.',
                  img: '/assets/images/Chinwe.jpg',
                },
                {
                  name: 'Precious Freeborn ',
                  title: 'Logistics & Supply Chain Officer',
                  bio: 'Responsible for Transportation, delivery schedules, freight and distribution.',
                  img: '/assets/images/Precious-Freeborn.png',
                },
              ].map((leader) => (
                <div
                  key={leader.name}
                  className="rounded-xl overflow-hidden flex flex-col"
                  style={{ background: '#fff', border: '1px solid #e8ecf2', boxShadow: '0 2px 12px rgba(11,27,51,0.06)' }}
                >
                  {/* Portrait photo */}
                  <div className="relative w-full overflow-hidden" style={{ height: '200px' }}>
                    <img
                      src={leader.img}
                      alt={leader.name}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                  {/* Info — bottom */}
                  <div className="p-4 flex flex-col gap-1.5 flex-1">
                    <p className="font-bold text-[14px] leading-tight" style={{ color: 'var(--ink)' }}>{leader.name}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--gold)' }}>{leader.title}</p>
                    <div className="mt-1" style={{ height: '1.5px', width: '28px', background: 'var(--gold)', opacity: 0.5 }} />
                    <p className="text-[12px] leading-relaxed mt-1 text-slate-500">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE WILLSTONE ── */}
      <section className="py-0" style={{ background: '#f0f2f5' }}>
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-[38%_32%_30%] items-stretch">

          {/* COL 1 — dark navy image card, flush left */}
          <div className="relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden">
            <img
              src="/assets/images/Global-Business-Networking-at-Trade-Expo.png"
              alt="Business partnership and trade"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            {/* Navy gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, rgba(11,27,51,0.96) 0%, rgba(11,27,51,0.82) 55%, rgba(11,27,51,0.45) 100%)',
              }}
            />
            <div className="relative z-10 p-8 lg:p-10">
              <p
                className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: 'var(--gold)' }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '18px',
                    height: '2px',
                    background: 'var(--gold)',
                    borderRadius: '2px',
                  }}
                />
                WHY CHOOSE US
              </p>
              <h2
                className="display mb-4 font-bold leading-tight text-white"
                style={{ fontSize: 'clamp(1.3rem, 2vw, 1.75rem)' }}
              >
                Your Trusted Partner for Sustainable Growth
              </h2>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.60)', maxWidth: '340px' }}
              >
                We don't just deliver products and services; we deliver solutions. With a focus on quality,
                reliability, and long-term partnerships, Willstone is your strategic partner for business success in Africa and beyond.
              </p>
            </div>
          </div>

          {/* COL 2 — 4 bullet rows, plain background */}
          <div className="flex flex-col justify-center gap-0 border-x border-gray-100 bg-white px-8 py-10">
            {[
              {
                title: 'Proven Track Record',
                desc: 'Trusted by 40+ corporate clients across multiple sectors.',
                icon: (
                  <>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </>
                ),
              },
              {
                title: 'End-to-End Solutions',
                desc: 'From sourcing to delivery; we handle it all.',
                icon: (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </>
                ),
              },
              {
                title: 'Global Network',
                desc: 'Access to international markets and partners.',
                icon: (
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
                  </>
                ),
              },
              {
                title: 'Customer-Centric Approach',
                desc: 'Your success is our priority.',
                icon: (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </>
                ),
              },
            ].map((item, i, arr) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 py-5 ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <span
                  className="flex shrink-0 items-center justify-center rounded-lg"
                  style={{
                    width: '42px',
                    height: '42px',
                    background: 'rgba(37,99,235,0.1)',
                    border: '1px solid rgba(37,99,235,0.2)',
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0B1B33" strokeWidth="1.8">
                    {item.icon}
                  </svg>
                </span>
                <div>
                  <p className="mb-0.5 text-[13.5px] font-bold" style={{ color: 'var(--ink)' }}>
                    {item.title}
                  </p>
                  <p className="text-[12.5px] leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* COL 3 — global presence, plain background */}
          <div className="flex flex-col px-8 py-10 bg-white">
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: '36px', height: '36px', background: 'rgba(201,162,75,0.1)', border: '1px solid rgba(201,162,75,0.2)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
                </svg>
              </span>
              <p className="font-bold text-[14.5px]" style={{ color: 'var(--ink)' }}>Our Global Presence</p>
            </div>
            <p className="text-slate-500 text-[13px] leading-relaxed mb-5">
              Headquartered in Ibadan, Oyo State, Nigeria, we operate locally and internationally, connecting markets and creating opportunities.
            </p>

            {/* World map */}
            <div
              className="relative mb-5 flex-1 overflow-hidden rounded-xl"
              style={{ background: '#e8ecf2', minHeight: '150px' }}
            >
              <img
                src="/assets/images/tradenetwork.webp"
                alt="World map showing our global trade network"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            {/* Location pills — inline row */}
            <div className="flex flex-wrap items-center gap-3 mt-auto">
              <div className="flex items-center gap-1.5 text-[11.5px] font-medium" style={{ color: 'var(--ink)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2.5"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Ibadan, Oyo State, Nigeria
              </div>
              <div className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-1.5 text-[11.5px] font-medium" style={{ color: 'var(--ink)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20" /></svg>
                Global Partnerships
              </div>
            </div>
          </div>

        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
