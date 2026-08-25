'use client'

import { useEffect, useRef } from 'react'

// World map dot-grid paths as simplified SVG polylines
// These define the dot-matrix silhouette of continents
const CONTINENT_DOTS: { cx: number; cy: number }[] = [
  // North America
  { cx: 120, cy: 80 }, { cx: 135, cy: 75 }, { cx: 150, cy: 70 }, { cx: 165, cy: 72 }, { cx: 180, cy: 78 },
  { cx: 125, cy: 95 }, { cx: 140, cy: 90 }, { cx: 155, cy: 88 }, { cx: 170, cy: 90 }, { cx: 185, cy: 95 },
  { cx: 115, cy: 110 }, { cx: 130, cy: 108 }, { cx: 145, cy: 105 }, { cx: 160, cy: 104 }, { cx: 175, cy: 108 },
  { cx: 125, cy: 122 }, { cx: 140, cy: 120 }, { cx: 155, cy: 118 }, { cx: 168, cy: 120 }, { cx: 150, cy: 133 },
  { cx: 138, cy: 135 }, { cx: 125, cy: 138 }, { cx: 112, cy: 125 }, { cx: 108, cy: 112 }, { cx: 160, cy: 147 },
  { cx: 148, cy: 150 }, { cx: 136, cy: 152 },
  // South America
  { cx: 165, cy: 175 }, { cx: 178, cy: 170 }, { cx: 190, cy: 168 }, { cx: 172, cy: 188 }, { cx: 185, cy: 185 },
  { cx: 168, cy: 200 }, { cx: 180, cy: 198 }, { cx: 173, cy: 215 }, { cx: 183, cy: 210 }, { cx: 175, cy: 228 },
  { cx: 185, cy: 225 }, { cx: 178, cy: 242 }, { cx: 172, cy: 258 }, { cx: 180, cy: 255 },
  // Europe
  { cx: 310, cy: 65 }, { cx: 325, cy: 62 }, { cx: 340, cy: 60 }, { cx: 355, cy: 63 }, { cx: 370, cy: 68 },
  { cx: 315, cy: 78 }, { cx: 330, cy: 75 }, { cx: 345, cy: 73 }, { cx: 360, cy: 76 }, { cx: 375, cy: 80 },
  { cx: 320, cy: 90 }, { cx: 335, cy: 88 }, { cx: 350, cy: 87 }, { cx: 365, cy: 89 }, { cx: 380, cy: 84 },
  { cx: 325, cy: 102 }, { cx: 340, cy: 100 }, { cx: 355, cy: 100 }, { cx: 370, cy: 98 }, { cx: 342, cy: 112 },
  { cx: 357, cy: 110 },
  // Africa
  { cx: 330, cy: 130 }, { cx: 345, cy: 125 }, { cx: 360, cy: 123 }, { cx: 375, cy: 127 }, { cx: 338, cy: 143 },
  { cx: 352, cy: 140 }, { cx: 366, cy: 140 }, { cx: 380, cy: 138 }, { cx: 340, cy: 155 }, { cx: 355, cy: 153 },
  { cx: 368, cy: 153 }, { cx: 380, cy: 153 }, { cx: 342, cy: 168 }, { cx: 356, cy: 166 }, { cx: 370, cy: 167 },
  { cx: 344, cy: 182 }, { cx: 358, cy: 180 }, { cx: 370, cy: 180 }, { cx: 346, cy: 195 }, { cx: 360, cy: 193 },
  { cx: 350, cy: 208 }, { cx: 362, cy: 205 }, { cx: 353, cy: 222 }, { cx: 358, cy: 235 },
  // Middle East
  { cx: 390, cy: 115 }, { cx: 405, cy: 112 }, { cx: 420, cy: 115 }, { cx: 395, cy: 128 }, { cx: 410, cy: 125 },
  { cx: 424, cy: 128 }, { cx: 400, cy: 140 }, { cx: 415, cy: 138 },
  // Asia
  { cx: 435, cy: 60 }, { cx: 450, cy: 58 }, { cx: 465, cy: 56 }, { cx: 480, cy: 58 }, { cx: 495, cy: 62 },
  { cx: 510, cy: 65 }, { cx: 525, cy: 70 }, { cx: 440, cy: 73 }, { cx: 455, cy: 70 }, { cx: 470, cy: 68 },
  { cx: 485, cy: 70 }, { cx: 500, cy: 73 }, { cx: 515, cy: 78 }, { cx: 445, cy: 85 }, { cx: 460, cy: 83 },
  { cx: 475, cy: 82 }, { cx: 490, cy: 83 }, { cx: 505, cy: 86 }, { cx: 520, cy: 90 }, { cx: 535, cy: 93 },
  { cx: 450, cy: 97 }, { cx: 465, cy: 95 }, { cx: 480, cy: 95 }, { cx: 495, cy: 97 }, { cx: 510, cy: 100 },
  { cx: 525, cy: 103 }, { cx: 538, cy: 106 }, { cx: 455, cy: 110 }, { cx: 470, cy: 108 }, { cx: 485, cy: 108 },
  { cx: 500, cy: 110 }, { cx: 515, cy: 113 }, { cx: 528, cy: 117 }, { cx: 460, cy: 122 }, { cx: 475, cy: 120 },
  { cx: 490, cy: 120 }, { cx: 505, cy: 122 }, { cx: 518, cy: 126 }, { cx: 530, cy: 130 }, { cx: 465, cy: 134 },
  { cx: 480, cy: 133 }, { cx: 495, cy: 133 }, { cx: 508, cy: 135 }, { cx: 480, cy: 145 }, { cx: 494, cy: 144 },
  { cx: 507, cy: 146 }, { cx: 490, cy: 156 }, { cx: 503, cy: 155 }, { cx: 514, cy: 158 }, { cx: 495, cy: 168 },
  { cx: 507, cy: 167 }, { cx: 540, cy: 145 }, { cx: 552, cy: 148 }, { cx: 543, cy: 158 }, { cx: 555, cy: 160 },
  // Oceania
  { cx: 520, cy: 195 }, { cx: 535, cy: 193 }, { cx: 550, cy: 192 }, { cx: 525, cy: 207 }, { cx: 540, cy: 205 },
  { cx: 553, cy: 205 }, { cx: 530, cy: 218 }, { cx: 545, cy: 217 }, { cx: 575, cy: 188 }, { cx: 578, cy: 200 },
]

// Connection arcs: [x1, y1, x2, y2, label]
const CONNECTIONS: [number, number, number, number, string][] = [
  // Nigeria (hub) → London
  [355, 148, 335, 82, 'NG→UK'],
  // Nigeria → New York
  [355, 148, 162, 108, 'NG→US'],
  // Nigeria → Dubai
  [355, 148, 410, 122, 'NG→AE'],
  // Nigeria → Singapore
  [355, 148, 507, 155, 'NG→SG'],
  // Nigeria → Johannesburg
  [355, 148, 360, 225, 'NG→ZA'],
  // Nigeria → China (Shanghai)
  [355, 148, 530, 105, 'NG→CN'],
  // Nigeria → Brazil
  [355, 148, 175, 195, 'NG→BR'],
  // London → New York
  [335, 82, 162, 108, 'UK→US'],
]

// City dots (hub is Nigeria/Lagos)
const CITIES = [
  { cx: 355, cy: 148, label: 'Lagos', isHub: true },
  { cx: 335, cy: 82, label: 'London', isHub: false },
  { cx: 162, cy: 108, label: 'New York', isHub: false },
  { cx: 410, cy: 122, label: 'Dubai', isHub: false },
  { cx: 507, cy: 155, label: 'Singapore', isHub: false },
  { cx: 360, cy: 225, label: 'Johannesburg', isHub: false },
  { cx: 530, cy: 105, label: 'Shanghai', isHub: false },
  { cx: 175, cy: 195, label: 'São Paulo', isHub: false },
]

// Compute a quadratic bezier control point that arcs above the line
function arcControlPoint(
  x1: number, y1: number,
  x2: number, y2: number,
  curvature = 0.35,
): [number, number] {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  // Perpendicular offset — always bow upward (subtract from y)
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.sqrt(dx * dx + dy * dy)
  const nx = -dy / len  // normal x
  const ny = dx / len   // normal y
  const bow = len * curvature
  return [mx + nx * bow, my + ny * bow]
}

export default function WorldMapReach() {
  const canvasRef = useRef<SVGSVGElement>(null)

  // Animate the dashed arcs via stroke-dashoffset
  useEffect(() => {
    const svg = canvasRef.current
    if (!svg) return
    const paths = svg.querySelectorAll<SVGPathElement>('.arc-path')

    const animations: Animation[] = []
    paths.forEach((path, i) => {
      const len = path.getTotalLength()
      path.style.strokeDasharray = `${len}`
      path.style.strokeDashoffset = `${len}`
      const anim = path.animate(
        [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
        {
          duration: 2200,
          delay: 300 + i * 320,
          fill: 'forwards',
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      )
      animations.push(anim)
    })

    // Pulsing dots after arcs draw
    const dots = svg.querySelectorAll<SVGCircleElement>('.city-pulse')
    dots.forEach((dot, i) => {
      dot.animate(
        [{ opacity: 0, r: '4' }, { opacity: 1, r: '6' }, { opacity: 0.6, r: '4' }],
        {
          duration: 1600,
          delay: 800 + i * 200,
          iterations: Infinity,
          easing: 'ease-in-out',
          fill: 'forwards',
        },
      )
    })

    return () => animations.forEach((a) => a.cancel())
  }, [])

  const W = 620
  const H = 320

  return (
    <svg
      ref={canvasRef}
      viewBox={`0 0 ${W} ${H}`}
      aria-label="Animated world map showing Willstone's global connections"
      className="w-full max-w-[620px]"
      style={{ display: 'block' }}
    >
      {/* Background faint dots — continent silhouette */}
      <g>
        {CONTINENT_DOTS.map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r="1.8"
            fill="#C9A24B"
            opacity="0.18"
          />
        ))}
      </g>

      {/* Connection arcs */}
      {CONNECTIONS.map(([x1, y1, x2, y2, key], i) => {
        const [cpx, cpy] = arcControlPoint(x1, y1, x2, y2, 0.38)
        const d = `M ${x1} ${y1} Q ${cpx} ${cpy} ${x2} ${y2}`
        return (
          <path
            key={key}
            d={d}
            className="arc-path"
            fill="none"
            stroke="#C9A24B"
            strokeWidth="1.2"
            strokeOpacity="0.65"
            strokeLinecap="round"
          />
        )
      })}

      {/* City dots */}
      {CITIES.map((city) => (
        <g key={city.label}>
          {/* Outer glow ring */}
          {city.isHub ? (
            <>
              <circle cx={city.cx} cy={city.cy} r="12" fill="#C9A24B" fillOpacity="0.08" />
              <circle cx={city.cx} cy={city.cy} r="7" fill="#C9A24B" fillOpacity="0.18" />
            </>
          ) : (
            <circle cx={city.cx} cy={city.cy} r="5" fill="#C9A24B" fillOpacity="0.12" />
          )}

          {/* Core dot */}
          <circle
            className="city-pulse"
            cx={city.cx}
            cy={city.cy}
            r={city.isHub ? 5 : 3.5}
            fill={city.isHub ? '#C9A24B' : '#E4CD8C'}
            opacity="0"
          />

          {/* Label — only visible on wider maps */}
          {city.isHub && (
            <text
              x={city.cx}
              y={city.cy - 14}
              textAnchor="middle"
              fill="#C9A24B"
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.08em"
              opacity="0.9"
            >
              WILLSTONE HQ
            </text>
          )}
        </g>
      ))}
    </svg>
  )
}
