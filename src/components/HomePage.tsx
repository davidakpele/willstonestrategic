import { useEffect, useState } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import ScrollAccordion from './ScrollAccordion'
import HeroBannerCarousel from './HeroBannerCarousel'
import WhatsAppButton from './WhatsAppButton'
import Seo from './Seo'

const HOME_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://willstonestrategic.com/#organization',
    name: 'Willstone Strategic Industries Limited',
    legalName: 'Willstone Strategic Industries Limited',
    url: 'https://willstonestrategic.com',
    logo: 'https://willstonestrategic.com/assets/images/Willstone-AppIcon-Navy.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '20 Cambridge House, Onireke Jericho',
      addressLocality: 'Ibadan',
      addressRegion: 'Oyo State',
      postalCode: '200284',
      addressCountry: 'NG',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 7.3775, longitude: 3.947 },
    telephone: '+2347061964340',
    email: 'info@willstonestrategic.com',
    openingHours: 'Mo-Fr 08:00-17:00',
    priceRange: '$$',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+2347061964340',
      contactType: 'sales',
      areaServed: ['NG', 'GLOBAL'],
      availableLanguage: 'English',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Willstone Products & Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agricultural Commodity Supply' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software & IT Solutions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logistics & Supply Chain' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Energy Solutions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Procurement & Trading' } },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://willstonestrategic.com/#website',
    url: 'https://willstonestrategic.com',
    name: 'Willstone Strategic Industries Limited',
    publisher: { '@id': 'https://willstonestrategic.com/#organization' },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: 'https://willstonestrategic.com/products?q={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://willstonestrategic.com/#localbusiness',
    name: 'Willstone Strategic Industries Limited',
    image: 'https://willstonestrategic.com/assets/images/prime-banner.png',
    url: 'https://willstonestrategic.com',
    telephone: '+2347061964340',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '20 Cambridge House, Onireke Jericho',
      addressLocality: 'Ibadan',
      addressRegion: 'Oyo State',
      postalCode: '200284',
      addressCountry: 'NG',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 7.3775, longitude: 3.947 },
    openingHours: 'Mo-Fr 08:00-17:00',
    priceRange: '$$',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Willstone Strategic Industries provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Willstone provides integrated solutions across agriculture, software & IT, logistics, energy, real estate, procurement, and defence sectors.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Willstone Strategic Industries based?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are headquartered in Ibadan, Oyo State, Nigeria, and serve clients across Nigeria and internationally.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Willstone export agricultural commodities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We supply and export sesame seeds, cocoa beans, palm oil, soybeans, maize, cassava, ginger, charcoal, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I get a quote for products or services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact us via our website contact form, email info@willstonestrategic.com, or call +234 706 196 4340.',
        },
      },
    ],
  },
]

// ── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: 'Software & IT',
    desc: 'Custom software and IT solutions for a digital tomorrow.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M8 9l-2 2 2 2M16 9l2 2-2 2" />
      </svg>
    ),
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Seamless movement. Reliable delivery.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 16V6a1 1 0 011-1h9v11M3 16h13M3 16a2 2 0 104 0M16 16a2 2 0 104 0M16 10h4l3 3v3h-3" />
      </svg>
    ),
  },
  {
    title: 'Import & Export',
    desc: 'Connecting markets. Delivering opportunities.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18A14 14 0 0112 3" />
      </svg>
    ),
  },
  {
    title: 'Agriculture & Agro-Logistics',
    desc: 'Cultivating value. Feeding growth.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3c-2 3-4 5-4 8a4 4 0 008 0c0-3-2-5-4-8zM8 21h8M12 11v6" />
      </svg>
    ),
  },
  {
    title: 'Engineering & Infrastructure',
    desc: 'Building structures. Powering progress.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: 'Real Estate Development',
    desc: 'Developing spaces. Building futures.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 21V9l8-5 8 5v12M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Energy Solutions',
    desc: 'Powering today for a sustainable tomorrow.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Procurement & Trading',
    desc: 'Smart sourcing. Stronger partnerships.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />
      </svg>
    ),
  },
]

const INDUSTRIES = [
  {
    name: 'Technology',
    alt: 'Software engineers working on technology solutions',
    src: '/assets/images/software-engineers.jpg',
  },
  {
    name: 'Agriculture',
    alt: 'Agricultural operations and commodity supply chain',
    src: '/assets/images/agric-banner.avif',
  },
  {
    name: 'Logistics',
    alt: 'Global logistics and supply chain operations',
    src: '/assets/images/globalization-supply-chain.jpg',
  },
  {
    name: 'Infrastructure',
    alt: 'Industrial equipment and infrastructure',
    src: '/assets/images/Industrial-Equipment-Machinery.avif',
  },
  {
    name: 'Energy',
    alt: 'Solar panels representing renewable energy solutions',
    src: '/assets/images/solar-panel.jpg',
  },
  {
    name: 'Real Estate',
    alt: 'Real estate development and property',
    src: '/assets/images/real-estate-1.jpg',
  },
  {
    name: 'Defence',
    alt: 'Defence and security solutions',
    src: '/assets/images/Security-Defense-about.png',
  },
]

// ── BackToTop ─────────────────────────────────────────────────────────────────

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`back-to-top${visible ? ' visible' : ''}`}
      aria-label="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

export default function HomePage() {
  return (
    <div className="bg-white">
      <Seo
        title="Willstone Strategic Industries Limited | Supplier, Exporter & Procurement Partner — Nigeria"
        description="Willstone Strategic Industries Limited is a diversified Nigerian supplier, exporter, and procurement partner based in Ibadan. We deliver agribusiness, software & IT, electrical engineering, logistics, real estate, energy, and defence solutions across Nigeria and beyond."
        canonical="/"
        keywords={[
          'supplier Nigeria', 'exporter Nigeria', 'procurement partner Nigeria',
          'agribusiness Nigeria', 'IT company Ibadan', 'logistics Nigeria',
          'agricultural commodities Nigeria', 'Willstone Strategic Industries',
          'industrial solutions Nigeria', 'Nigerian export company',
        ]}
        image="/assets/images/prime-banner.png"
        jsonLd={HOME_JSON_LD}
      />

      {/* 1 — Header */}
      <SiteHeader />

      {/* 2 — Hero carousel */}
      <HeroBannerCarousel />

      {/* 3 — Ticker strip */}
      <div className="ticker-strip overflow-hidden py-3" style={{ background: 'var(--gold)' }}>
        <div className="ticker-track flex whitespace-nowrap">
          {[0, 1].map((i) => (
            <div key={i} className="ticker-items flex shrink-0 items-center" aria-hidden={i === 1}>
              {['15+ COUNTRIES', '500+ PROJECTS DELIVERED', '100+ PARTNERS WORLDWIDE', '10+ INDUSTRIES SERVED'].map((item) => (
                <span key={item} className="flex items-center gap-4 px-6 text-[12px] font-bold tracking-[0.18em] text-[#1a1408]">
                  {item}
                  <span style={{ opacity: 0.4 }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 4 — About / Company intro */}
      <section id="about" className="py-20 px-6 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> ABOUT WILLSTONE
            </p>
            <h2
              className="font-bold leading-tight mb-5"
              style={{ color: 'var(--ink)', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
            >
              Strategic Industries.<br />Stronger Tomorrow.
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-md">
              Willstone Strategic Industries Limited is a Nigerian enterprise built around one idea. Businesses and governments deserve a single capable partner across every sector that matters. From technology and software to agriculture, defence, energy, electrical engineering, and logistics, we design solutions, source commodities, and deliver results that move industries forward.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-[13px] rounded-lg"
              style={{ background: 'var(--navy)', color: '#fff', padding: '12px 26px' }}
            >
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mt-10 pt-10 border-t border-gray-100">
              {[
                { stat: '15+', label: 'Countries' },
                { stat: '500+', label: 'Projects' },
                { stat: '10+', label: 'Sectors' },
                { stat: '100+', label: 'Partners' },
              ].map(({ stat, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-bold text-2xl sm:text-3xl" style={{ color: 'var(--gold)' }}>{stat}</span>
                  <span className="text-slate-400 text-[12px] mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image mosaic */}
          <div className="about-mosaic">
            <div className="about-mosaic-main">
              <img
                src="/assets/images/about-banner.png"
                alt="Willstone Strategic Industries operations"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="about-mosaic-side">
              <div className="about-mosaic-sm">
                <img
                  src="/assets/images/agric-banner.avif"
                  alt="Agricultural operations"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="about-mosaic-sm">
                <img
                  src="/assets/images/electrical-electronic.jpg"
                  alt="Electrical and electronic infrastructure"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5 — Scroll Accordion (What We Do) */}
      <ScrollAccordion />

      {/* 6 — Services */}
      <section id="services" className="py-20 px-6 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> OUR SERVICES
          </p>
          <h2
            className="font-bold leading-tight mb-10"
            style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
          >
            Integrated solutions. Strategic execution.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <div key={service.title} className="service-card-new">
                <span className="service-card-icon">{service.icon}</span>
                <h4 className="font-semibold text-[14px] mt-3 mb-1 leading-snug" style={{ color: 'var(--ink)' }}>
                  {service.title}
                </h4>
                <p className="text-[12.5px] text-slate-500 leading-snug">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6b — Global Footprint */}
      <section className="py-16 sm:py-20 px-6 lg:px-16 xl:px-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/assets/images/willstone-global-map-13427658877738_m.png?v=738"
                alt="Global Footprint"
                className="w-full h-auto object-cover rounded-2xl"
                style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="eyebrow text-[11px] font-semibold flex items-center gap-2 mb-4" style={{ color: 'var(--gold)' }}>
                <span className="gold-rule" /> OUR GLOBAL REACH
              </p>
              <h2
                className="display font-bold text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
              >
                Global Footprint
              </h2>
              <div className="w-12 h-[3px] rounded-full mb-5" style={{ background: 'var(--gold)' }} />
              <p className="leading-relaxed text-[15px]" style={{ color: 'rgba(255,255,255,0.60)' }}>
                Delivering innovative solutions across borders with worldwide impact.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7 — Industries */}
      <section id="industries" className="py-20 px-6 lg:px-16 xl:px-24" style={{ background: 'var(--paper)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> INDUSTRIES WE SERVE
          </p>
          <h2
            className="font-bold leading-tight mb-10"
            style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
          >
            Diverse expertise across 10+ sectors
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {INDUSTRIES.map((tile) => (
              <div key={tile.name} className="industry-tile rounded-lg aspect-[3/4] relative overflow-hidden">
                <img
                  src={tile.src}
                  alt={tile.alt}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(11,27,51,0) 40%, rgba(11,27,51,.85) 100%)' }}
                />
                <p className="absolute bottom-3 left-3 text-white font-bold text-sm">{tile.name}</p>
                <div
                  className="absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(201,162,75,.2)', border: '1px solid rgba(201,162,75,.4)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Our Services: End-to-End Digital Transformation */}
      <section className="py-20 px-6 lg:px-16 xl:px-24" style={{ background: 'var(--paper)' }}>
        <div className="max-w-screen-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="display font-bold mb-2" style={{ color: 'var(--ink)', fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}>
              Our Services – End-to-End Digital Transformation
            </h2>
            <p className="text-[13px]" style={{ color: 'var(--slate)' }}>
              Comprehensive <span style={{ color: 'var(--gold)' }}>solutions</span> designed to innovate, automate, and accelerate{' '}
              <span style={{ color: 'var(--gold)' }}>growth.</span>
            </p>
          </div>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">

            {/* Card 1 — navy featured */}
            <div className="rounded-2xl p-7 flex flex-col justify-between" style={{ background: 'var(--navy)', minHeight: '200px' }}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-white text-[15px] leading-snug">Website Design &amp;<br />Development</h3>
                <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,162,75,0.20)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.2">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <p className="font-bold leading-none mb-1" style={{ color: 'var(--gold)', fontSize: 'clamp(2.2rem, 5vw, 3rem)' }}>1,500+</p>
                <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.65)' }}>Businesses built for</p>
              </div>
            </div>

            {/* Card 2 — Web Applications */}
            <div className="rounded-2xl p-6 flex flex-col justify-between bg-white" style={{ minHeight: '200px' }}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-[15px] mb-0.5" style={{ color: 'var(--ink)' }}>Web Applications</h3>
                  <p className="text-[12px]" style={{ color: '#888' }}>(Software Development)</p>
                </div>
                <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,162,75,0.12)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.2">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                  </svg>
                </span>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-[13.5px] mb-0.5" style={{ color: 'var(--ink)' }}>One system, every warehouse</p>
                <p className="text-[12px] mb-4" style={{ color: '#999' }}>Live across multiple sites and countries</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold" style={{ color: 'var(--ink)', fontSize: '2rem' }}>40+</span>
                  <span className="text-[12px]" style={{ color: '#888' }}>Warehouses on one stock figure</span>
                </div>
              </div>
            </div>

            {/* Card 3 — Mobile Applications */}
            <div className="rounded-2xl p-6 flex flex-col justify-between bg-white" style={{ minHeight: '200px' }}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-[15px] mb-0.5" style={{ color: 'var(--ink)' }}>Mobile Applications</h3>
                  <p className="text-[12px]" style={{ color: '#888' }}>Scanner apps on the warehouse floor</p>
                </div>
                <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,162,75,0.12)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.2">
                    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                </span>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-[13.5px] mb-0.5" style={{ color: 'var(--ink)' }}>Branded apps on Shopaccino</p>
                <p className="text-[12px] mb-4" style={{ color: '#999' }}>Customer, picker and rider apps</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold" style={{ color: 'var(--ink)', fontSize: '2rem' }}>50+</span>
                  <span className="text-[12px]" style={{ color: '#888' }}>Apps live with clients</span>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2 — 2 wide cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Card 4 — Digital Marketing */}
            <div className="rounded-2xl p-6 flex flex-col justify-between bg-white" style={{ minHeight: '180px' }}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-[15px]" style={{ color: 'var(--ink)' }}>Digital Marketing</h3>
                <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,162,75,0.12)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.2">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                  </svg>
                </span>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-[13.5px] mb-0.5" style={{ color: 'var(--ink)' }}>Google Premier Partner</p>
                <p className="text-[12px] mb-4" style={{ color: '#999' }}>Ads, SEO, Shopping and marketplaces</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold" style={{ color: 'var(--ink)', fontSize: '2rem' }}>10</span>
                  <span className="text-[12px]" style={{ color: 'var(--gold)' }}>Years start-up to UK category leader</span>
                </div>
              </div>
            </div>

            {/* Card 5 — Dedicated Resource */}
            <div className="rounded-2xl p-6 flex flex-col justify-between bg-white" style={{ minHeight: '180px' }}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-[15px]" style={{ color: 'var(--ink)' }}>Dedicated Resource</h3>
                <span className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,162,75,0.12)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </span>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-[13.5px] mb-0.5" style={{ color: 'var(--ink)' }}>A named team, not a body shop</p>
                <p className="text-[12px] mb-4" style={{ color: 'var(--gold)' }}>Your priorities, scaling as the roadmap changes</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold" style={{ color: 'var(--ink)', fontSize: '2rem' }}>22</span>
                  <span className="text-[12px]" style={{ color: '#888' }}>Years of delivery behind them</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9 — Our SaaS Products */}
      <section className="py-20 px-6 lg:px-16 xl:px-24" style={{ background: 'var(--paper)' }}>
        <div className="max-w-screen-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="display font-bold mb-2" style={{ color: 'var(--ink)', fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}>
              Our SaaS Products for Ecommerce, Warehousing, CRM &amp; ERP
            </h2>
            <p className="text-[13px]" style={{ color: 'var(--slate)' }}>
              Our Software Products –{' '}
              <span style={{ color: '#c0392b' }}>Proprietary SaaS Innovations</span>
            </p>
          </div>

          {/*
            Desktop layout (grid-cols-3, grid-rows-2):
            [ Shopaccino (col-1, rows 1-2) ][ Smart Warehousing (col 2-3, row 1) ]
            [ Shopaccino cont.             ][ Task Officer (col-2, row 2) ][ Service ERP (col-3, row 2) ]

            Mobile: all cards stack in a single column.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4">

            {/* Shopaccino — spans 2 rows on desktop */}
            <div
              className="rounded-2xl p-7 flex flex-col bg-white lg:row-span-2"
              style={{ border: '1px solid #e8ecf2' }}
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <h3 className="font-bold text-[20px]" style={{ color: 'var(--ink)' }}>Shopaccino</h3>
                <span className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#f3f4f6' }}>
                  {/* shopping bag emoji-style icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 01-8 0"/>
                  </svg>
                </span>
              </div>
              <p className="text-[13.5px] leading-relaxed flex-1" style={{ color: '#555' }}>
                A SaaS commerce platform for{' '}
                <span style={{ color: '#e05a4e' }}>retail and wholesale brands</span>. One store sells B2C and B2B, on the web, on iOS and Android and at the counter — with one catalogue, one stock figure and one order queue behind all of it.
              </p>
              <a
                href="/services/information-technology"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold mt-8 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--ink)' }}
              >
                Explore More →
              </a>
            </div>

            {/* Smart Warehousing — col 2-3, row 1 */}
            <div
              className="rounded-2xl p-7 flex flex-col bg-white lg:col-span-2"
              style={{ border: '1px solid #e8ecf2' }}
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <h3 className="font-bold text-[20px]" style={{ color: 'var(--ink)' }}>Smart Warehousing</h3>
                <span className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#f3f4f6' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </span>
              </div>
              <p className="text-[13.5px] leading-relaxed" style={{ color: '#555' }}>
                Smart Warehousing gives you <span style={{ color: '#e05a4e' }}>bin-level visibility</span> of your stock across one or many warehouses. Scanner-driven picking and packing keeps your team accurate on the floor, while inventory stays in sync with your website, ERP and accounting tools.
              </p>
            </div>

            {/* Task Officer — col 2, row 2 */}
            <div
              className="rounded-2xl p-7 flex flex-col bg-white"
              style={{ border: '1px solid #e8ecf2' }}
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <h3 className="font-bold text-[20px]" style={{ color: 'var(--ink)' }}>Task Officer</h3>
                <span className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#ede9fe' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
              </div>
              <p className="text-[13.5px] leading-relaxed flex-1" style={{ color: '#555' }}>
                Task Officer is a <span style={{ color: '#e05a4e' }}>lead management and CRM platform</span> that captures every online and offline lead in one place. Assign each enquiry to your team, track it through to conversion, and deliver projects without losing sight of a single follow-up.
              </p>
              <a
                href="/services/information-technology"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold mt-6 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--ink)' }}
              >
                View Details →
              </a>
            </div>

            {/* Service ERP — col 3, row 2 */}
            <div
              className="rounded-2xl p-7 flex flex-col bg-white"
              style={{ border: '1px solid #e8ecf2' }}
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <h3 className="font-bold text-[20px]" style={{ color: 'var(--ink)' }}>Service ERP</h3>
                <span className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#d1fae5' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>
                  </svg>
                </span>
              </div>
              <p className="text-[13.5px] leading-relaxed" style={{ color: '#555' }}>
                Service ERP brings every part of your service business into one system. Customer requests, <span style={{ color: '#e05a4e' }}>job scheduling</span>, technician assignments, spare parts and <span style={{ color: '#e05a4e' }}>billing</span> all stay connected, so your team always knows what is{' '}
                <span style={{ color: '#e05a4e' }}>booked</span>, who is on the job and what is yet to be invoiced.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 10 — Contact CTA */}
      <section className="py-20 px-6 lg:px-16 xl:px-24" style={{ background: 'var(--paper)' }}>
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <h2 className="font-bold leading-tight mb-10" style={{ color: 'var(--ink)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
              Interested in our services, products, or a potential partnership?
            </h2>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@willstonestrategic.com"
                className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--gold)] transition-colors group"
              >
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(201,162,75,0.10)', color: 'var(--gold)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400 mb-0.5">You can email us here</p>
                  <p className="text-[13px] font-semibold truncate" style={{ color: 'var(--ink)' }}>info@willstonestrategic.com</p>
                </div>
                <svg className="ml-auto shrink-0 opacity-30 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>

              <a
                href="tel:+2347061964340"
                className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--gold)] transition-colors group"
              >
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(201,162,75,0.10)', color: 'var(--gold)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.5a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z"/>
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400 mb-0.5">Give us a call</p>
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--ink)' }}>+234 706 196 4340</p>
                </div>
                <svg className="ml-auto shrink-0 opacity-30 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>

              <a
                href="https://maps.app.goo.gl/ZjZ5eCgY7MjJnvvj6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--gold)] transition-colors group"
              >
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(201,162,75,0.10)', color: 'var(--gold)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400 mb-0.5">Get directions to our location</p>
                  <p className="text-[13px] font-semibold leading-snug" style={{ color: 'var(--ink)' }}>20 Cambridge House, Onireke Jericho, Ibadan</p>
                </div>
                <svg className="ml-auto shrink-0 opacity-30 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>
            </div>
          </div>

          {/* Right — quick contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[20px] mb-1" style={{ color: 'var(--ink)' }}>Let&apos;s Work Together</h3>
            <p className="text-slate-400 text-[13px] mb-6">We are here to answer your questions and explore new possibilities.</p>

            <form action="/contact" method="get" className="flex flex-col gap-4">
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[13.5px] outline-none focus:border-[var(--gold)] transition-colors bg-gray-50"
                  style={{ color: 'var(--ink)' }}
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>E-mail address</label>
                <input
                  type="email"
                  placeholder="Enter your e-mail address"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[13.5px] outline-none focus:border-[var(--gold)] transition-colors bg-gray-50"
                  style={{ color: 'var(--ink)' }}
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>Message</label>
                <textarea
                  rows={3}
                  placeholder="Let us know what you are interested in"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-[13.5px] outline-none focus:border-[var(--gold)] transition-colors bg-gray-50 resize-none"
                  style={{ color: 'var(--ink)' }}
                />
              </div>
              <a
                href="/contact"
                className="w-full py-3 rounded-lg text-[13px] font-semibold text-center transition-colors"
                style={{ background: 'var(--navy)', color: '#fff' }}
              >
                Send a message
              </a>
            </form>
          </div>

        </div>
      </section>

      {/* 9 — Footer */}
      <SiteFooter />

      {/* 10 — Back to top */}
      <BackToTop />

      {/* 11 — WhatsApp button */}
      <WhatsAppButton />

    </div>
  )
}
