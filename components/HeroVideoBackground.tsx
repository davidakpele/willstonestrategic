'use client'

import { useRef, useState } from 'react'

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)

  function handleCanPlay() {
    setReady(true)
    videoRef.current?.play().catch(() => {
      // autoplay blocked — poster stays visible, no crash
    })
  }

  return (
    <video
      ref={videoRef}
      className="hero-video-bg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"        // start fetching immediately on page load
      poster="/assets/images/prime-banner.png"
      aria-hidden="true"
      onCanPlayThrough={handleCanPlay}
      style={{
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      <source
        src="/videos/436d4497982da99eb163df6590f4ba91_720w.mp4"
        type="video/mp4"
      />
    </video>
  )
}
