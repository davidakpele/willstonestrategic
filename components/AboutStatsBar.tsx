'use client'

import Image from 'next/image'

// Partner logos via Logo.dev (free, no auth needed for display)
// Swap these for your own uploaded logos at /assets/images/partners/ when ready
const PARTNERS = [
  { name: 'Dangote Group',       src: 'https://logo.clearbit.com/dangote.com' },
  { name: 'NNPC',                src: 'https://logo.clearbit.com/nnpcgroup.com' },
  { name: 'MTN Nigeria',         src: 'https://logo.clearbit.com/mtnonline.com' },
  { name: 'Stanbic IBTC',        src: 'https://logo.clearbit.com/stanbicibtc.com' },
  { name: 'TotalEnergies',       src: 'https://logo.clearbit.com/totalenergies.com' },
  { name: 'Access Bank',         src: 'https://logo.clearbit.com/accessbankplc.com' },
  { name: 'Flour Mills Nigeria', src: 'https://logo.clearbit.com/fmnplc.com' },
  { name: 'BUA Group',           src: 'https://logo.clearbit.com/buagroup.com' },
  { name: 'Olam Nigeria',        src: 'https://logo.clearbit.com/olamgroup.com' },
  { name: 'Guinness Nigeria',    src: 'https://logo.clearbit.com/guinness-nigeria.com' },
]

export default function AboutStatsBar() {
  const items = [...PARTNERS, ...PARTNERS] // duplicate for seamless loop

  return (
    <div
      className="relative z-10 w-full border-t border-white/10 shrink-0 overflow-hidden"
      style={{ background: 'rgba(6,14,29,.95)', backdropFilter: 'blur(8px)' }}
    >
      {/* label */}
      <p className="text-center text-[10px] uppercase tracking-[0.22em] text-white/35 pt-4 pb-3 font-medium">
        Trusted by leading companies across Africa &amp; beyond
      </p>

      {/* fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(6,14,29,1), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(6,14,29,1), transparent)' }} />

      {/* scrolling track */}
      <div className="pb-5" style={{ overflow: 'hidden' }}>
        <div
          className="flex items-center gap-8"
          style={{ animation: 'partner-scroll 32s linear infinite', width: 'max-content' }}
        >
          {items.map((p, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center rounded-lg"
              style={{
                width: '110px',
                height: '44px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '8px 12px',
              }}
            >
              <Image
                src={p.src}
                alt={p.name}
                width={80}
                height={28}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.55 }}
                onError={(e) => {
                  // fallback to text if logo fails to load
                  const parent = (e.target as HTMLImageElement).parentElement
                  if (parent) {
                    parent.innerHTML = `<span style="font-size:10px;font-weight:600;color:rgba(255,255,255,0.45);text-align:center;line-height:1.2">${p.name}</span>`
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partner-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
