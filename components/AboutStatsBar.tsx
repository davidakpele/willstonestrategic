'use client'

// Partner logo ticker — infinite auto-scroll
// Swap the `src` paths once real logos are uploaded to /assets/images/partners/

const PARTNERS = [
  { name: 'Dangote Group' },
  { name: 'NNPC' },
  { name: 'Flour Mills Nigeria' },
  { name: 'BUA Group' },
  { name: 'Stanbic IBTC' },
  { name: 'MTN Nigeria' },
  { name: 'Olam Nigeria' },
  { name: 'Guinness Nigeria' },
  { name: 'TotalEnergies' },
  { name: 'Access Bank' },
]

export default function AboutStatsBar() {
  // Duplicate for seamless loop
  const items = [...PARTNERS, ...PARTNERS]

  return (
    <div
      className="relative z-10 w-full border-t border-white/10 shrink-0 overflow-hidden"
      style={{ background: 'rgba(6,14,29,.92)', backdropFilter: 'blur(8px)' }}
    >
      {/* label row */}
      <p className="text-center text-[10px] uppercase tracking-[0.22em] text-white/35 pt-4 pb-2 font-medium">
        Trusted by leading companies across Africa &amp; beyond
      </p>

      {/* fade masks on left and right */}
      <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
        style={{background: 'linear-gradient(to right, rgba(6,14,29,0.95), transparent)'}} />
      <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
        style={{background: 'linear-gradient(to left, rgba(6,14,29,0.95), transparent)'}} />

      {/* ticker track */}
      <div className="flex items-center pb-4 pt-1" style={{overflow: 'hidden'}}>
        <div
          className="flex items-center gap-6 shrink-0"
          style={{animation: 'partner-scroll 28s linear infinite', width: 'max-content'}}
        >
          {items.map((p, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center px-5 py-2 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                minWidth: '130px',
              }}
            >
              <span className="text-[12px] font-semibold whitespace-nowrap" style={{color: 'rgba(255,255,255,0.55)'}}>
                {p.name}
              </span>
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
