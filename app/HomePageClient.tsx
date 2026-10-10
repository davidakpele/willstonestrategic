'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Space_Grotesk, Inter } from 'next/font/google'
import './willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ScrollAccordion from '@/components/ScrollAccordion'
import Link from 'next/link'

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

const INDUSTRIES = [
  {
    name: 'Technology',
    alt: 'Circuit board representing the technology sector',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Agriculture',
    alt: 'Green farmland rows representing agriculture',
    src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Logistics',
    alt: 'Cargo ship carrying containers representing logistics',
    src: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Infrastructure',
    alt: 'Suspension bridge representing infrastructure',
    src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Energy',
    alt: 'Wind turbines and solar panels representing energy',
    src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Real Estate',
    alt: 'Modern building facade representing real estate',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Defence',
    alt: 'Defence and security solutions',
    src: '/assets/images/Security-Defense-about.png',
  },
]

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

const PARTNER_PILLARS = [
  {
    title: 'Expertise',
    desc: 'Deep industry knowledge and technical excellence.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l2.4 5 5.6.6-4 3.9 1 5.5L12 14l-5 3 1-5.5-4-3.9 5.6-.6z" />
      </svg>
    ),
  },
  {
    title: 'Reliability',
    desc: 'Delivering on promises with integrity.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    desc: 'Creating solutions for a better tomorrow.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 3z" />
      </svg>
    ),
  },
  {
    title: 'Impact',
    desc: 'Driving growth that builds a stronger world.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M9.5 10.5L6.5 7.5M14.5 10.5l3-3M9.5 13.5l-3 3M14.5 13.5l3 3" />
      </svg>
    ),
  },
]

const COMMITMENTS = [
  {
    title: 'Excellence',
    desc: 'Delivering quality in everything we do',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l2.4 5 5.6.6-4 3.9 1 5.5L12 14l-5 3 1-5.5-4-3.9 5.6-.6z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    desc: 'Building trust through transparency',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    desc: 'Creating solutions for a better tomorrow',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0012 3z" />
      </svg>
    ),
  },
  {
    title: 'Sustainability',
    desc: 'Building a better world for future generations',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C6 2 3 8 3 12c0 2.5 1.5 5 3 6.5L12 22l6-3.5C19.5 17 21 14.5 21 12c0-4-3-10-9-10z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
]

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
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

const GR_TARGETS = [15, 500, 100]

function GlobalReachSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0])
  const [countDone, setCountDone] = useState(false)
  const [iconHovers, setIconHovers] = useState([false, false, false, false, false])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const duration = 1400
    const steps = 60
    const interval = duration / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setCounts(GR_TARGETS.map((t) => Math.round(t * eased)))
      if (step >= steps) {
        clearInterval(timer)
        setCountDone(true)
      }
    }, interval)
    return () => clearInterval(timer)
  }, [isVisible])

  const STATS = [
    { val: counts[0], suffix: '+', label: 'Countries' },
    { val: counts[1], suffix: '+', label: 'Projects Delivered' },
    { val: counts[2], suffix: '+', label: 'Global Partners' },
  ]

  // Floating sector icons config
  const ICONS = [
    {
      label: 'Agribusiness',
      pos: { top: '8%', left: '2%' },
      dur: 4.2,
      delay: 0,
      svg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-label="Agribusiness">
          <title>Agribusiness</title>
          <path d="M12 2 Q14 5 12 8 Q10 5 12 2 M12 8 L12 20 M9 10 Q7 12 9 14 M15 10 Q17 12 15 14 M9 14 Q7 16 9 18 M15 14 Q17 16 15 18" stroke="#C9A24B" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      label: 'Oil & Commodities',
      pos: { top: '30%', right: '2%' },
      dur: 5.1,
      delay: 0.8,
      svg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-label="Oil &amp; Commodities">
          <title>Oil &amp; Commodities</title>
          <path d="M12 2 L18 10 A6 6 0 1 1 6 10 Z" fill="#C9A24B" opacity="0.7"/>
        </svg>
      ),
    },
    {
      label: 'Electrical & Energy',
      pos: { bottom: '20%', right: '5%' },
      dur: 3.8,
      delay: 1.5,
      svg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-label="Electrical &amp; Energy">
          <title>Electrical &amp; Energy</title>
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="#C9A24B" opacity="0.7"/>
        </svg>
      ),
    },
    {
      label: 'Defence & Security',
      pos: { bottom: '15%', left: '2%' },
      dur: 4.6,
      delay: 0.4,
      svg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-label="Defence &amp; Security">
          <title>Defence &amp; Security</title>
          <path d="M12 3l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V6z" fill="none" stroke="#C9A24B" strokeWidth="1.5" opacity="0.7"/>
        </svg>
      ),
    },
    {
      label: 'Software & IT',
      pos: { top: '5%', right: '4%' },
      dur: 5.5,
      delay: 1.1,
      svg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-label="Software &amp; IT">
          <title>Software &amp; IT</title>
          <rect x="7" y="7" width="10" height="10" rx="1" fill="none" stroke="#C9A24B" strokeWidth="1.5"/>
          <path d="M9 7V4M12 7V4M15 7V4M9 17v3M12 17v3M15 17v3M7 9H4M7 12H4M7 15H4M17 9h3M17 12h3M17 15h3" stroke="#C9A24B" strokeWidth="1.2"/>
        </svg>
      ),
    },
  ]

  return (
    <section
      ref={sectionRef}
      style={{ background: '#06101f', overflow: 'hidden', position: 'relative' }}
    >
      <style>{`
        @keyframes gr-globe-spin { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
        @keyframes gr-dash-flow { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
        @keyframes gr-pulse { 0%,100% { opacity:0.5; transform:scale(1); } 50% { opacity:1; transform:scale(1.2); } }
        @keyframes gr-float-icon { from { transform: translateY(-8px); } to { transform: translateY(8px); } }
        @keyframes gr-drift { from { transform: translateX(0) translateY(0); } to { transform: translateX(30px) translateY(20px); } }
        @keyframes gr-fade-up { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes gr-stat-pop { from { transform:scale(0.5); opacity:0; } to { transform:scale(1); opacity:1; } }
        @keyframes gr-line-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes gr-shimmer-text { 0% { background-position:-200% center; } 100% { background-position:200% center; } }

        .gr-eyebrow { opacity: 0; }
        .gr-visible .gr-eyebrow { animation: gr-fade-up 0.7s ease forwards; animation-delay: 0.1s; }
        .gr-word-inner-0 { opacity: 0; }
        .gr-visible .gr-word-inner-0 { animation: gr-fade-up 0.7s ease forwards; animation-delay: 0.3s; }
        .gr-word-inner-1 { opacity: 0; }
        .gr-visible .gr-word-inner-1 { animation: gr-fade-up 0.7s ease forwards; animation-delay: 0.5s; }
        .gr-body { opacity: 0; }
        .gr-visible .gr-body { animation: gr-fade-up 0.7s ease forwards; animation-delay: 0.7s; }
        .gr-stat-0 { opacity: 0; }
        .gr-stat-1 { opacity: 0; }
        .gr-stat-2 { opacity: 0; }
        .gr-visible .gr-stat-0 { animation: gr-stat-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards; animation-delay: 1.0s; }
        .gr-visible .gr-stat-1 { animation: gr-stat-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards; animation-delay: 1.15s; }
        .gr-visible .gr-stat-2 { animation: gr-stat-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards; animation-delay: 1.3s; }
        .gr-globe-fade { opacity: 0; transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s; transform: scale(0.92); }
        .gr-visible .gr-globe-fade { opacity: 1; transform: scale(1); }
        .gr-stat-card { transition: transform 0.25s ease, box-shadow 0.25s ease; border: 1px solid transparent; border-radius: 8px; padding: 8px 12px; }
        .gr-stat-card:hover { transform: translateY(-3px); box-shadow: 0 0 20px rgba(201,162,75,0.2); border-color: rgba(201,162,75,0.3); }
        .gr-shimmer-active {
          background: linear-gradient(90deg, #c9a24b 0%, #f5e199 50%, #c9a24b 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gr-shimmer-text 1.5s linear 1 forwards;
        }
      `}</style>

      {/* Background atmosphere */}
      {/* Dot grid */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(201,162,75,0.05) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />
      {/* Gold blob bottom-right */}
      <div aria-hidden="true" style={{
        position: 'absolute', width: '500px', height: '500px',
        bottom: '-100px', right: '-100px', borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(201,162,75,0.08) 0%, transparent 70%)',
        animation: 'gr-drift 18s ease-in-out infinite alternate',
      }} />
      {/* Cyan blob top-left */}
      <div aria-hidden="true" style={{
        position: 'absolute', width: '400px', height: '400px',
        top: '-80px', left: '-80px', borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
        animation: 'gr-drift 22s ease-in-out infinite alternate',
      }} />
      {/* Shimmer line at bottom */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '2px', pointerEvents: 'none',
        background: 'linear-gradient(90deg, transparent, #c9a24b, transparent)',
        backgroundSize: '200% 100%',
        animation: 'gr-line-shimmer 3s linear infinite',
      }} />

      {/* Main content */}
      <div className="relative z-10 px-6 py-16 lg:py-20 lg:px-16 xl:px-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center${isVisible ? ' gr-visible' : ''}`}>

          {/* Left col: SVG Globe + floating icons */}
          <div className="relative flex justify-center items-center" style={{ minHeight: '360px' }}>
            <div className="gr-globe-fade" style={{ position: 'relative', width: '400px', maxWidth: '100%' }}>
              {/* SVG Globe */}
              <svg viewBox="0 0 400 400" width="400" height="400" style={{ display: 'block', maxWidth: '100%' }}>
                {/* Globe body */}
                <circle cx="200" cy="200" r="140" fill="rgba(6,182,212,0.04)" stroke="rgba(201,162,75,0.2)" strokeWidth="1"/>
                {/* Latitude ellipses */}
                <ellipse cx="200" cy="200" rx="140" ry="40" stroke="rgba(201,162,75,0.12)" strokeWidth="0.8" fill="none"/>
                <ellipse cx="200" cy="200" rx="140" ry="80" stroke="rgba(201,162,75,0.12)" strokeWidth="0.8" fill="none"/>
                <ellipse cx="200" cy="200" rx="140" ry="120" stroke="rgba(201,162,75,0.12)" strokeWidth="0.8" fill="none"/>
                {/* Longitude lines — spinning group */}
                <g style={{ transformOrigin: '200px 200px', animation: 'gr-globe-spin 40s linear infinite' }}>
                  <ellipse cx="200" cy="200" rx="40" ry="140" stroke="rgba(201,162,75,0.12)" strokeWidth="0.8" fill="none"/>
                  <ellipse cx="200" cy="200" rx="80" ry="140" stroke="rgba(201,162,75,0.12)" strokeWidth="0.8" fill="none"/>
                  <ellipse cx="200" cy="200" rx="120" ry="140" stroke="rgba(201,162,75,0.12)" strokeWidth="0.8" fill="none"/>
                  <ellipse cx="200" cy="200" rx="140" ry="140" stroke="rgba(201,162,75,0.08)" strokeWidth="0.8" fill="none"/>
                </g>
                {/* Trade route arcs */}
                {/* Europe */}
                <path d="M 210 230 Q 180 150 190 110" fill="none" stroke="rgba(201,162,75,0.7)" strokeWidth="1.2" strokeDasharray="4 3" style={{ strokeDashoffset: 100, animation: 'gr-dash-flow 4s linear infinite' }}/>
                {/* UK */}
                <path d="M 210 230 Q 170 140 170 105" fill="none" stroke="rgba(201,162,75,0.7)" strokeWidth="1.2" strokeDasharray="4 3" style={{ strokeDashoffset: 100, animation: 'gr-dash-flow 5s linear infinite', animationDelay: '0.5s' }}/>
                {/* Asia */}
                <path d="M 210 230 Q 280 180 310 160" fill="none" stroke="rgba(201,162,75,0.7)" strokeWidth="1.2" strokeDasharray="4 3" style={{ strokeDashoffset: 100, animation: 'gr-dash-flow 3s linear infinite', animationDelay: '1s' }}/>
                {/* Middle East */}
                <path d="M 210 230 Q 260 200 280 190" fill="none" stroke="rgba(201,162,75,0.7)" strokeWidth="1.2" strokeDasharray="4 3" style={{ strokeDashoffset: 100, animation: 'gr-dash-flow 6s linear infinite', animationDelay: '1.5s' }}/>
                {/* Americas */}
                <path d="M 210 230 Q 120 180 80 170" fill="none" stroke="rgba(201,162,75,0.7)" strokeWidth="1.2" strokeDasharray="4 3" style={{ strokeDashoffset: 100, animation: 'gr-dash-flow 4.5s linear infinite', animationDelay: '0.8s' }}/>
                {/* East Africa */}
                <path d="M 210 230 Q 240 240 260 250" fill="none" stroke="rgba(201,162,75,0.7)" strokeWidth="1.2" strokeDasharray="4 3" style={{ strokeDashoffset: 100, animation: 'gr-dash-flow 3.5s linear infinite', animationDelay: '2s' }}/>

                {/* Nigeria origin dot */}
                <circle cx="210" cy="230" r="4" fill="#C9A24B"/>
                {/* Pulsing ring — SVG-native animate for browser compatibility */}
                <circle cx="210" cy="230" r="4" fill="none" stroke="#C9A24B" strokeWidth="1.2" opacity="0.8">
                  <animate attributeName="r" from="4" to="14" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite"/>
                </circle>

                {/* Destination dots */}
                <circle cx="190" cy="110" r="3" fill="#C9A24B" style={{ animation: 'gr-pulse 2s ease-in-out infinite', animationDelay: '0s' }}/>
                <circle cx="170" cy="105" r="3" fill="#C9A24B" style={{ animation: 'gr-pulse 2s ease-in-out infinite', animationDelay: '0.3s' }}/>
                <circle cx="310" cy="160" r="3" fill="#C9A24B" style={{ animation: 'gr-pulse 2s ease-in-out infinite', animationDelay: '0.6s' }}/>
                <circle cx="280" cy="190" r="3" fill="#C9A24B" style={{ animation: 'gr-pulse 2s ease-in-out infinite', animationDelay: '0.9s' }}/>
                <circle cx="80"  cy="170" r="3" fill="#C9A24B" style={{ animation: 'gr-pulse 2s ease-in-out infinite', animationDelay: '1.2s' }}/>
                <circle cx="260" cy="250" r="3" fill="#C9A24B" style={{ animation: 'gr-pulse 2s ease-in-out infinite', animationDelay: '1.5s' }}/>

                {/* Moving trade particles */}
                <circle r="2.5" fill="#C9A24B">
                  <animateMotion path="M 210 230 Q 180 150 190 110" dur="4s" repeatCount="indefinite" begin="0s"/>
                </circle>
                <circle r="2.5" fill="#C9A24B">
                  <animateMotion path="M 210 230 Q 170 140 170 105" dur="5s" repeatCount="indefinite" begin="0.5s"/>
                </circle>
                <circle r="2.5" fill="#C9A24B">
                  <animateMotion path="M 210 230 Q 280 180 310 160" dur="3s" repeatCount="indefinite" begin="1s"/>
                </circle>
                <circle r="2.5" fill="#C9A24B">
                  <animateMotion path="M 210 230 Q 260 200 280 190" dur="6s" repeatCount="indefinite" begin="1.5s"/>
                </circle>
                <circle r="2.5" fill="#C9A24B">
                  <animateMotion path="M 210 230 Q 120 180 80 170" dur="4.5s" repeatCount="indefinite" begin="0.8s"/>
                </circle>
                <circle r="2.5" fill="#C9A24B">
                  <animateMotion path="M 210 230 Q 240 240 260 250" dur="3.5s" repeatCount="indefinite" begin="2s"/>
                </circle>
              </svg>

              {/* Floating sector icons — absolutely positioned around globe */}
              {ICONS.map((icon, i) => (
                <div
                  key={icon.label}
                  title={icon.label}
                  onMouseEnter={() => setIconHovers(h => h.map((v, j) => j === i ? true : v))}
                  onMouseLeave={() => setIconHovers(h => h.map((v, j) => j === i ? false : v))}
                  style={{
                    position: 'absolute',
                    ...icon.pos,
                    opacity: iconHovers[i] ? 1 : 0.7,
                    transform: iconHovers[i] ? 'scale(1.15)' : 'scale(1)',
                    animation: `gr-float-icon ${icon.dur}s ease-in-out infinite alternate`,
                    animationDelay: `${icon.delay}s`,
                    cursor: 'default',
                    transition: 'opacity 0.2s ease, transform 0.2s ease',
                  }}
                >
                  {icon.svg}
                </div>
              ))}
            </div>
          </div>

          {/* Right col: text content */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <p
              className="gr-eyebrow font-semibold mb-4 uppercase tracking-widest"
              style={{ color: '#C9A24B', fontSize: '11px' }}
            >
              GLOBAL REACH
            </p>

            {/* Headline */}
            <h2 className="display font-bold leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              <span className="gr-word-inner-0 block" style={{ color: '#C9A24B' }}>Nigeria to the World.</span>
              <span className="gr-word-inner-1 block" style={{ color: '#fff' }}>Every Deal. Every Distance.</span>
            </h2>

            {/* Body */}
            <p
              className="gr-body leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(13px, 1.6vw, 16px)', maxWidth: '480px' }}
            >
              From Ibadan to international markets — we move agricultural commodities, deliver technology solutions, and power industries across borders.
            </p>

            {/* Stats row */}
            <div className="flex items-start gap-0 mb-6">
              {STATS.map(({ val, suffix, label }, i) => (
                <div key={label} className="flex items-stretch">
                  {i > 0 && (
                    <div aria-hidden="true" style={{
                      width: '1px',
                      background: 'rgba(201,162,75,0.3)',
                      margin: '0 clamp(16px,3vw,32px)',
                      alignSelf: 'stretch',
                    }} />
                  )}
                  <div className={`gr-stat-${i} gr-stat-card flex flex-col`}>
                    <p
                      className={`display font-bold${countDone ? ' gr-shimmer-active' : ''}`}
                      style={{
                        color: '#C9A24B',
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                        lineHeight: 1,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {val}{suffix}
                    </p>
                    <p
                      className="uppercase tracking-widest mt-2"
                      style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(9px, 1vw, 11px)', letterSpacing: '0.18em' }}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trusted text */}
            <p style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', fontSize: '12px', marginTop: '1rem' }}>
              Trusted across Africa, Europe &amp; Asia
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function HomePageClient() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} bg-white`}>
      <SiteHeader />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section id="home" className="relative w-full overflow-hidden" style={{ background: '#0B1B33' }}>
        <div className="hero-banner-frame relative w-full">
          <Image
            src="/assets/images/prime-banner.png"
            alt="Willstone Strategic Industries — advancing industries through technology, trade and energy"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(6,15,31,.30) 0%, rgba(6,15,31,.55) 55%, rgba(6,15,31,.82) 100%)',
          }} />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 sm:px-8 lg:px-16 pb-8 sm:pb-10 lg:pb-0 lg:justify-center" style={{ paddingTop: '0px' }}>
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
              <p className="fade-up fade-up-1 eyebrow font-semibold mb-1 sm:mb-3"
                style={{ color: 'var(--gold)', fontSize: 'clamp(9px, 2vw, 13px)', letterSpacing: '0.16em' }}>
                WELCOME TO WILLSTONE
              </p>
              <h1 className="hero-heading fade-up fade-up-2 display text-white w-full"
                style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontSize: 'clamp(1.05rem, 4vw, 3.8rem)', lineHeight: 1.12 }}>
                Advancing Industries Through Technology, Trade and Energy and Securing Tomorrow
              </h1>
              <p className="hero-subtext fade-up fade-up-3 text-white/80 mt-2 sm:mt-4 w-full max-w-2xl leading-relaxed"
                style={{ fontSize: 'clamp(10.5px, 1.8vw, 17px)' }}>
                Willstone Strategic Industries Limited delivers innovative solutions and
                trusted services across industries, driving growth, enabling progress, and
                building a stronger tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TICKER STRIP
      ══════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════ */}
      <section id="industries" className="py-20 px-6 lg:px-16 xl:px-24" style={{ background: 'var(--paper)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-2" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> OUR INDUSTRIES
          </p>
          <h2 className="display text-2xl sm:text-3xl font-semibold mb-2" style={{ color: 'var(--ink)' }}>
            Diverse expertise.
          </h2>
          <p className="text-slate-500 text-[15px] mb-10 max-w-lg">
            We operate across a broad range of industries, bringing deep expertise and innovative solutions to the sectors that power the world.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {INDUSTRIES.map((tile) => (
              <div key={tile.name} className="industry-tile rounded-lg aspect-[3/4]">
                <Image src={tile.src} alt={tile.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" className="object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,27,51,0) 40%, rgba(11,27,51,.85) 100%)' }} />
                <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">{tile.name}</p>
                <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,162,75,.2)', border: '1px solid rgba(201,162,75,.4)' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A24B" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SCROLL ACCORDION  (What We Do)
      ══════════════════════════════════════════ */}
      <ScrollAccordion />

      {/* ══════════════════════════════════════════
          GLOBAL REACH — STRONGER IMPACT
      ══════════════════════════════════════════ */}
      <GlobalReachSection />

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section id="services" className="py-20 px-6 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
                <span className="gold-rule" /> OUR SERVICES
              </p>
              <h2 className="display font-semibold leading-tight" style={{ color: 'var(--ink)', fontSize: 'clamp(1.6rem, 3vw, 2.1rem)' }}>
                Integrated solutions.<br />Strategic execution.<br /><span style={{ color: 'var(--gold)' }}>Sustainable impact.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => (
                <div key={service.title} className="service-card-new">
                  <span className="service-card-icon">{service.icon}</span>
                  <h4 className="font-semibold text-[14px] mt-3 mb-1 leading-snug" style={{ color: 'var(--ink)' }}>{service.title}</h4>
                  <p className="text-[12.5px] text-slate-500 leading-snug">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PARTNER CTA
      ══════════════════════════════════════════ */}
      <section className="partner-banner relative overflow-hidden">
        <div className="partner-banner-bg" aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: 'rgba(5,12,26,.78)' }} />
        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16 xl:px-24 py-12 lg:py-20">
          <div className="mb-10 lg:hidden text-center">
            <p className="eyebrow text-[11px] font-semibold mb-3 tracking-widest" style={{ color: 'var(--gold)' }}>PARTNER WITH US</p>
            <h2 className="display font-bold text-white leading-tight mb-6" style={{ fontSize: 'clamp(1.7rem, 7vw, 2.5rem)' }}>
              One partner,<br />every step of the journey.
            </h2>
            <div className="flex justify-center">
              <Link href="/contact" className="inline-flex items-center gap-3 font-semibold"
                style={{ background: 'var(--gold)', color: '#1a1408', padding: '12px 24px', fontSize: '14px', borderRadius: '8px' }}>
                Let&apos;s Work Together
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 lg:hidden">
            {PARTNER_PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-center text-center">
                <span className="partner-pillar-icon mb-3">{pillar.icon}</span>
                <h4 className="font-semibold text-white text-[14px] mb-1 leading-snug">{pillar.title}</h4>
                <p className="text-white/55 text-[12px] leading-snug">{pillar.desc}</p>
              </div>
            ))}
          </div>
          <div className="hidden lg:grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
            <div>
              <p className="eyebrow text-[11px] font-semibold mb-3 tracking-widest" style={{ color: 'var(--gold)' }}>PARTNER WITH US</p>
              <h2 className="display font-bold text-white leading-tight mb-8" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                One partner,<br />every step of the journey.
              </h2>
              <Link href="/contact" className="inline-flex items-center gap-3 font-semibold"
                style={{ background: 'var(--gold)', color: '#1a1408', padding: '12px 28px', fontSize: '14px', borderRadius: '8px' }}>
                Let&apos;s Work Together
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {PARTNER_PILLARS.map((pillar) => (
                <div key={pillar.title} className="partner-pillar">
                  <span className="partner-pillar-icon">{pillar.icon}</span>
                  <h4 className="font-semibold text-white text-[15px] mt-3 mb-1">{pillar.title}</h4>
                  <p className="text-white/55 text-[12.5px] leading-snug">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════ */}
      <section id="about" className="py-16 px-6 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> ABOUT WILLSTONE
            </p>
            <h2 className="display font-semibold leading-tight mb-5" style={{ color: 'var(--ink)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
              Strategic industries.<br />Stronger tomorrow.
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-md">
              Willstone Strategic Industries Limited is a multi-sector company delivering
              integrated solutions across technology, agriculture, logistics, infrastructure,
              real estate, energy, and more.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-[13px] cursor-pointer"
              style={{ background: 'var(--navy)', color: '#fff', padding: '12px 26px', borderRadius: '8px' }}>
              Learn More About Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
          <div className="about-mosaic">
            <div className="about-mosaic-main">
              <Image src="/assets/images/about-banner.png" alt="Cargo plane on tarmac representing Willstone's logistics operations" fill sizes="(max-width: 1024px) 80vw, 40vw" className="object-cover" />
            </div>
            <div className="about-mosaic-side">
              <div className="about-mosaic-sm">
                <Image src="/assets/images/agric-banner.avif" alt="Shipping containers stacked at a port" fill sizes="20vw" className="object-cover" />
              </div>
              <div className="about-mosaic-sm">
                <Image src="/assets/images/electrical-electronic.jpg" alt="Industrial facility representing infrastructure" fill sizes="20vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMITMENT BAR
      ══════════════════════════════════════════ */}
      <section className="py-14 px-6 lg:px-16 xl:px-24 border-t border-gray-100 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {COMMITMENTS.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="commit-icon-light shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-[14px]" style={{ color: 'var(--ink)' }}>{item.title}</p>
                <p className="text-slate-500 text-[12.5px] leading-snug mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  )
}
