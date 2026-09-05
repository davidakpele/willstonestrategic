'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  {
    src: '/assets/images/prime0-banner.jpg',
    alt: 'Willstone Strategic Industries — prime operations',
  },
  {
    src: '/assets/images/home-banner.png',
    alt: 'Willstone Strategic Industries — global trade and logistics',
  },
  {
    src: '/assets/images/agric-banner.avif',
    alt: 'Willstone Agriculture and Agribusiness division',
  },
  {
    src: '/assets/images/about-banner.png',
    alt: 'Willstone cargo and aviation logistics',
  },
  {
    src: '/assets/images/WILLSTONE BANNER.png',
    alt: 'Willstone Strategic Industries — company banner',
  },
]

const AUTO_PLAY_MS = 5000
const COUNT = SLIDES.length

export default function HeroBannerCarousel() {
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const activeRef = useRef(active)
  activeRef.current = active

  function goTo(idx: number) {
    setActive(((idx % COUNT) + COUNT) % COUNT)
  }

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % COUNT)
    }, AUTO_PLAY_MS)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function onPointerDown(e: React.PointerEvent) {
    startX.current = e.clientX
    setDragging(true)
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!dragging) return
    setDragging(false)
    const delta = e.clientX - startX.current
    if (Math.abs(delta) < 40) return
    goTo(delta < 0 ? activeRef.current + 1 : activeRef.current - 1)
    startTimer()
  }

  function handleDotClick(i: number) {
    goTo(i)
    startTimer()
  }

  return (
    /* Fills the hero section absolutely */
    <div
      className="hero-carousel-root"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={(e) => { if (dragging) onPointerUp(e) }}
      style={{ cursor: dragging ? 'grabbing' : 'grab' }}
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero-carousel-slide${i === active ? ' active' : ''}`}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            className="hero-carousel-img"
            priority={i === 0}
            draggable={false}
          />
        </div>
      ))}

      {/* Dots — pinned to bottom of the image, above the text overlay */}
      <div className="hero-carousel-dots" role="tablist" aria-label="Slide indicators">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to slide ${i + 1}`}
            className={`hero-carousel-dot${i === active ? ' active' : ''}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  )
}
