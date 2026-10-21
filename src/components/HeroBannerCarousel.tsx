import { useEffect, useRef, useState, useCallback } from 'react'

interface Slide {
  src: string
  alt: string
  eyebrow: string
  heading: string
  sub: string
  cta?: { label: string; href: string }
  objectPosition?: string
  overlayStrength?: 'normal' | 'strong'
}

const SLIDES: Slide[] = [
  {
    src: '/assets/images/prime-banner.png',
    alt: 'Willstone Strategic Industries — advancing industries through technology, trade and energy',
    eyebrow: 'WELCOME TO WILLSTONE',
    heading: 'Advancing Industries Through Technology, Trade and Energy',
    sub: 'Willstone Strategic Industries Limited delivers innovative solutions and trusted services across industries, driving growth, enabling progress, and building a stronger tomorrow.',
    cta: { label: 'Our Services', href: '/services/agriculture-agribusiness' },
    objectPosition: 'center 30%',
  },
  {
    src: '/assets/images/Global-Business-Networking-at-Trade-Expo.png',
    alt: 'Global trade and business networking representing Willstone export operations',
    eyebrow: 'GLOBAL REACH',
    heading: 'Connecting Nigerian Markets to the World',
    sub: 'From bulk agricultural commodities to industrial supplies — we source, grade, and deliver to buyers across Africa, Europe, Asia, and beyond.',
    cta: { label: 'View Products', href: '/products' },
    objectPosition: 'center 20%',
    overlayStrength: 'strong',
  },
  {
    src: '/assets/images/agric-banner.avif',
    alt: 'Agricultural operations and commodity supply chain managed by Willstone',
    eyebrow: 'AGRICULTURE & AGRIBUSINESS',
    heading: 'Cultivating Value Across the Agricultural Value Chain',
    sub: 'Sesame seeds, palm oil, cocoa, cassava, ginger and more — sourced from verified Nigerian farms and delivered to global markets.',
    cta: { label: 'Agri Products', href: '/products/agri-inputs' },
    objectPosition: 'center 40%',
  },
  {
    src: '/assets/images/software-engineers.jpg',
    alt: 'Software engineers working on digital transformation solutions',
    eyebrow: 'TECHNOLOGY & SOFTWARE',
    heading: 'Building Digital Solutions That Drive Real Business Results',
    sub: 'Custom software, enterprise platforms, ERP systems and IT consultancy for organisations across Nigeria and West Africa.',
    cta: { label: 'IT Services', href: '/services/information-technology' },
    objectPosition: 'center 25%',
  },
  {
    src: '/assets/images/Energy-renewable.jpg',
    alt: 'Solar panels representing Willstone energy and power systems solutions',
    eyebrow: 'ENERGY SOLUTIONS',
    heading: 'Powering Homes and Businesses With Clean, Reliable Energy',
    sub: 'Solar panels, battery systems, and energy-saving appliances for homes, businesses, and off-grid communities across Nigeria.',
    cta: { label: 'Power Systems', href: '/products/power-systems' },
    objectPosition: 'center 50%',
  },
]

const INTERVAL = 5500

export default function HeroBannerCarousel() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [animating, setAnimating] = useState(false)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((index: number) => {
    if (animating) return
    setPrev(current)
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => {
      setPrev(null)
      setAnimating(false)
    }, 700)
  }, [animating, current])

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length)
  }, [current, goTo])

  const previous = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(next, INTERVAL)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, paused, next])

  return (
    <section
      id="home"
      className="hero-carousel-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero banner carousel"
    >
      <div className="hero-carousel-track">
        <div className="hero-carousel-media">
          {SLIDES.map((slide, i) => {
            const isActive = i === current
            const isPrev   = i === prev
            const strong   = slide.overlayStrength === 'strong'
            return (
              <div
                key={slide.src}
                aria-hidden={!isActive}
                className="hero-carousel-slide"
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.75s ease',
                  zIndex: isActive ? 2 : isPrev ? 1 : 0,
                }}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  className="hero-slide-image"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: slide.objectPosition ?? 'center',
                  }}
                />
                {/* Per-slide overlay — stronger for light/washed-out images */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: strong
                      ? 'linear-gradient(160deg, rgba(6,15,31,0.82) 0%, rgba(6,15,31,0.65) 50%, rgba(6,15,31,0.78) 100%)'
                      : 'linear-gradient(160deg, rgba(6,15,31,0.60) 0%, rgba(6,15,31,0.40) 55%, rgba(6,15,31,0.65) 100%)',
                  }}
                />
              </div>
            )
          })}

          {/* Base overlay for extra text contrast at bottom */}
          <div className="hero-carousel-overlay" />
        </div>

        {/* Text content */}
        <div className="hero-carousel-content">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            <p
              key={`eyebrow-${current}`}
              className="carousel-text-in eyebrow font-semibold mb-2 sm:mb-3"
              style={{ color: 'var(--gold)', fontSize: 'clamp(10px, 2.5vw, 13px)', letterSpacing: '0.16em' }}
            >
              {SLIDES[current].eyebrow}
            </p>
            <h1
              key={`heading-${current}`}
              className="carousel-text-in carousel-text-delay-1 hero-heading display text-white w-full"
              style={{ fontSize: 'clamp(1.55rem, 5.5vw, 3.8rem)', lineHeight: 1.12 }}
            >
              {SLIDES[current].heading}
            </h1>
            <p
              key={`sub-${current}`}
              className="carousel-text-in carousel-text-delay-2 hero-subtext text-white/80 mt-3 sm:mt-5 w-full max-w-2xl leading-relaxed"
              style={{ fontSize: 'clamp(13px, 2vw, 17px)' }}
            >
              {SLIDES[current].sub}
            </p>
            {SLIDES[current].cta && (
              <a
                key={`cta-${current}`}
                href={SLIDES[current].cta!.href}
                className="carousel-text-in carousel-text-delay-3 inline-flex items-center gap-2 font-semibold mt-5 sm:mt-7"
                style={{
                  background: 'var(--gold)',
                  color: '#1a1408',
                  padding: '11px 26px',
                  borderRadius: '8px',
                  fontSize: 'clamp(12px, 1.5vw, 14px)',
                }}
              >
                {SLIDES[current].cta!.label}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button onClick={previous} aria-label="Previous slide" className="carousel-arrow carousel-arrow-left">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button onClick={next} aria-label="Next slide" className="carousel-arrow carousel-arrow-right">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div
          className="absolute bottom-6 left-0 right-0 flex justify-center gap-2"
          style={{ zIndex: 5 }}
          role="tablist"
          aria-label="Slide indicators"
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 9999,
                background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.35)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'width 0.35s ease, background 0.35s ease',
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        {!paused && (
          <div key={`progress-${current}`} className="carousel-progress" style={{ zIndex: 5 }} />
        )}
      </div>
    </section>
  )
}
