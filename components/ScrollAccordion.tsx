'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const ITEMS = [
  {
    num: '01',
    title: 'Agriculture & Agribusiness',
    desc: 'We deliver end-to-end agribusiness solutions — from crop production and processing to bulk commodity trading and export. Our agro-logistics network connects farmers to markets across Nigeria, West Africa, Europe and Asia.',
    keywords: 'Agro-business · Crop Processing · Commodity Trading · Farm Inputs',
    link: '/services/agriculture-agribusiness',
    linkLabel: 'Agribusiness services',
    dark: false,
  },
  {
    num: '02',
    title: 'Information Technology & Software',
    desc: 'Custom software, enterprise platforms, and digital transformation services tailored to your business. We build scalable web applications, mobile applications, ERP systems, Geospatial Systems and IT infrastructure for organisations of every size.',
    keywords: 'Software Development · IT Consultancy · Digital Transformation · ERP · Geospatial',
    link: '/services/information-technology',
    linkLabel: 'Technology services',
    dark: false,
  },
  {
    num: '03',
    title: 'Electrical & Electronic Solutions',
    desc: 'Industrial electrical installations, power systems, automation engineering, and electronic solutions for commercial and industrial facilities. We handle design, supply, and full installation.',
    keywords: 'Electrical Engineering · Power Systems · Solar · Automation · Installation',
    link: '/services/electrical-electronic',
    linkLabel: 'Engineering services',
    dark: false,
  },
  {
    num: '04',
    title: 'Defence, Security & Protective Solutions',
    desc: 'Integrated surveillance systems, threat assessment, access control, and protective equipment for critical infrastructure, organisations, and high-value assets across Nigeria.',
    keywords: 'Security Systems · Surveillance · Asset Protection · Defence · Drones',
    link: '/contact',
    linkLabel: 'Partner with us',
    dark: true,
  },
]

export default function ScrollAccordion() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
     const handleScroll = () => {
      // Walk cards from last to first — the highest index whose top edge has
      // scrolled past (or reached) its sticky threshold is the active one.
      for (let i = cardRefs.current.length - 1; i >= 0; i--) {
        const el = cardRefs.current[i]
        if (!el) continue
        const stickyTop = 96 + i * 16
        const rect = el.getBoundingClientRect()
        // Once this card's natural top is at or above its sticky threshold,
        // it has become (or is about to become) sticky — mark it active.
        if (rect.top <= stickyTop + 1) {
          setActiveIndex(i)
          return
        }
      }
      // Nothing stuck yet — first card is active
      setActiveIndex(0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-20 px-6 lg:px-10 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Mobile header */}
        <div className="lg:hidden text-center mb-12">
          <p className="eyebrow text-[12px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> WHAT WE DO <span className="gold-rule" />
          </p>
          <h2 className="display text-2xl sm:text-3xl font-semibold" style={{ color: 'var(--ink)' }}>
            Integrated solutions,<br />across every sector.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── LEFT — sticky panel ── */}
          <div className="hidden lg:flex flex-col justify-start w-[340px] shrink-0 sticky top-28">
            <p className="eyebrow text-[11px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> WHAT WE DO
            </p>
            <h2
              className="display font-semibold leading-tight mb-5"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--ink)' }}
            >
              Integrated solutions,<br />
              <span style={{ color: 'var(--gold)' }}>across every sector.</span>
            </h2>
            <p className="text-slate-500 text-[14px] leading-relaxed mb-8">
              Willstone operates across four core verticals — each delivering real impact
              for clients, communities, and partners across Nigeria and beyond.
            </p>

            {/* ── Step tracker ── */}
            <div className="flex flex-col gap-2 mb-8">
              {ITEMS.map((item, i) => {
                const isPast    = i < activeIndex
                const isCurrent = i === activeIndex

                return (
                  <div key={item.num} className="flex items-center gap-3">

                    {/* Circle indicator */}
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                      style={{
                        transition: 'background 0.35s ease, color 0.35s ease, border-color 0.35s ease',
                        background: isCurrent
                          ? 'var(--navy)'
                          : isPast
                          ? 'rgba(201,162,75,.15)'
                          : 'rgba(11,27,51,.06)',
                        border: isCurrent
                          ? '2px solid var(--navy)'
                          : isPast
                          ? '2px solid rgba(201,162,75,.5)'
                          : '2px solid rgba(11,27,51,.15)',
                        color: isCurrent
                          ? '#fff'
                          : isPast
                          ? 'var(--gold)'
                          : 'rgba(11,27,51,.3)',
                      }}
                    >
                      {isPast ? (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>

                    {/* Label */}
                    <span
                      className="text-[13px] font-medium leading-snug"
                      style={{
                        transition: 'color 0.35s ease',
                        color: isCurrent
                          ? 'var(--ink)'
                          : isPast
                          ? 'rgba(11,27,51,.4)'
                          : 'rgba(11,27,51,.28)',
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── RIGHT — stacking cards ── */}
          <div className="flex-1 flex flex-col gap-4">
            {ITEMS.map((card, i) => (
              <div
                key={card.num}
                ref={(el) => { cardRefs.current[i] = el }}
                className={`stack-card${card.dark ? ' stack-card-dark' : ''}`}
                style={{ top: `calc(96px + ${i * 16}px)` }}
              >
                <div className={`stack-card-num${card.dark ? ' dark' : ''}`}>
                  {card.num}
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className="font-bold text-[19px] sm:text-[21px] mb-3"
                    style={{ color: card.dark ? '#fff' : 'var(--ink)' }}
                  >
                    {card.title}
                  </h3>
                  <p className={`text-[14px] leading-relaxed mb-3 ${card.dark ? 'text-white/70' : 'text-slate-500'}`}>
                    {card.desc}
                  </p>
                  <p
                    className="text-[11px] font-semibold tracking-wide mb-6"
                    style={{ color: card.dark ? 'rgba(255,255,255,.35)' : 'rgba(11,27,51,.35)' }}
                  >
                    {card.keywords}
                  </p>
                  <Link
                    href={card.link}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-colors ${
                      card.dark
                        ? 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                        : 'bg-[var(--paper)] text-[var(--ink)] hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {card.linkLabel}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
