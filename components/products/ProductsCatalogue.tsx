'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ChevronLeft, ChevronRight, ZoomIn, SlidersHorizontal } from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────
export type Category = 'All' | 'Agri Commodities' | 'Power & Energy'

export interface Product {
  id: number
  name: string
  category: Category
  description: string
  src: string
  tags: string[]
}

// ── Master product list ────────────────────────────────────────────────────
const ALL_PRODUCTS: Product[] = [
  // ── Agri Commodities ──
  {
    id: 1,
    name: 'Soybeans',
    category: 'Agri Commodities',
    description: 'Premium-grade soybeans sourced from certified farms across Nigeria. Rich in protein, suitable for oil processing, animal feed, and direct export.',
    src: '/assets/images/soybeans.jpg',
    tags: ['Export', 'Protein Crop', 'Oil Seed'],
  },
  {
    id: 2,
    name: 'Cocoa Beans',
    category: 'Agri Commodities',
    description: 'Sun-dried and fermented cocoa beans of the highest quality. Traceable from farm to export, meeting EU and US import standards.',
    src: '/assets/images/cocoawebp.webp',
    tags: ['Export', 'Cash Crop', 'West Africa'],
  },
  {
    id: 3,
    name: 'Maize (Corn)',
    category: 'Agri Commodities',
    description: 'Dried yellow maize grains ideal for food processing, animal feed production, and starch extraction. Consistently graded and cleaned.',
    src: '/assets/images/Maize.jpg',
    tags: ['Food Crop', 'Feed Grain', 'Processing'],
  },
  {
    id: 4,
    name: 'Cassava',
    category: 'Agri Commodities',
    description: 'Fresh and processed cassava including dried chips and pellets. Suitable for ethanol production, starch extraction, and export markets.',
    src: '/assets/images/cassava.jpg',
    tags: ['Starch', 'Processed', 'Export'],
  },
  {
    id: 5,
    name: 'Sesame Seeds',
    category: 'Agri Commodities',
    description: 'High-purity sesame seeds (natural and hulled) sourced from Benue, Nassarawa, and Jigawa states. Meets Japanese, Chinese, and EU quality benchmarks.',
    src: '/assets/images/sesame.webp',
    tags: ['Export', 'Oil Seed', 'Premium'],
  },
  {
    id: 6,
    name: 'Palm Oil (Bulk)',
    category: 'Agri Commodities',
    description: 'Fresh crude palm oil (CPO) and refined palm olein available in bulk. Produced under responsible farming practices with complete documentation.',
    src: '/assets/images/palm-oil-main.png',
    tags: ['Oil', 'Export', 'Bulk'],
  },
  {
    id: 7,
    name: 'Palm Oil (Gallon)',
    category: 'Agri Commodities',
    description: 'Refined and packaged palm oil in 5L, 10L, and 25L gallon containers. Ready for retail distribution, food service, and wholesale domestic supply.',
    src: '/assets/images/palm-oil-gallon.jpg',
    tags: ['Oil', 'Packaged', 'Retail'],
  },
  {
    id: 8,
    name: 'Irish Potatoes',
    category: 'Agri Commodities',
    description: 'Fresh Irish potatoes sourced from Jos Plateau and Kaduna highlands. Available in retail and bulk quantities for domestic distribution.',
    src: '/assets/images/potatos.jpg',
    tags: ['Fresh Produce', 'Domestic', 'Highlands'],
  },
  {
    id: 9,
    name: 'Sweet Potatoes',
    category: 'Agri Commodities',
    description: 'Fresh sweet potatoes available in orange and white flesh varieties. Sourced from Benue and Plateau states, supplied in bulk bags for domestic retail and processing.',
    src: '/assets/images/sweet-potato-2.jpg',
    tags: ['Fresh Produce', 'Domestic', 'Tuber'],
  },
  {
    id: 10,
    name: 'Haricot Beans',
    category: 'Agri Commodities',
    description: 'Clean, dried haricot (white) beans sourced from smallholder farms across Nigeria. Ideal for canning, food processing, and direct export.',
    src: '/assets/images/Harich-potato.webp',
    tags: ['Export', 'Legume', 'Processing'],
  },
  {
    id: 11,
    name: 'Ginger',
    category: 'Agri Commodities',
    description: 'Dried and fresh ginger root sourced from Kaduna and Nassarawa states. Available split-dried or whole for spice processing and export.',
    src: '/assets/images/ginger.jpg',
    tags: ['Export', 'Spice', 'Premium'],
  },
  {
    id: 12,
    name: 'Charcoal',
    category: 'Agri Commodities',
    description: 'High-grade hardwood charcoal produced from sustainably sourced Nigerian timber. Suitable for industrial, restaurant, and export markets.',
    src: '/assets/images/charcoal.jpg',
    tags: ['Export', 'Energy', 'Industrial'],
  },
  {
    id: 13,
    name: 'Charcoal Briquettes',
    category: 'Agri Commodities',
    description: 'Compressed charcoal briquettes offering longer burn time and consistent heat output. Ideal for BBQ, hospitality, and packaged retail export.',
    src: '/assets/images/charcoal-2.jpg',
    tags: ['Export', 'Briquettes', 'BBQ'],
  },
  {
    id: 14,
    name: 'Precision Agri Inputs',
    category: 'Agri Commodities',
    description: 'Drone-assisted precision farming inputs and field services. We supply certified seeds, micro-dosing fertilizer kits, and connect farmers to drone spraying services.',
    src: '/assets/images/drone.jpg',
    tags: ['Technology', 'Inputs', 'Precision Farming'],
  },
  // ── Power & Energy ──
  {
    id: 15,
    name: 'Solar Panels',
    category: 'Power & Energy',
    description: 'High-efficiency monocrystalline and polycrystalline solar panels in 100W–550W capacities. Suitable for residential, commercial, and off-grid installations.',
    src: '/assets/images/solar-panel.jpg',
    tags: ['Solar', 'Generation', 'Off-Grid'],
  },
  {
    id: 16,
    name: 'Solar Battery',
    category: 'Power & Energy',
    description: 'Deep-cycle lithium and gel solar batteries for daily charge-discharge cycles. Reliable storage providing clean backup power day and night.',
    src: '/assets/images/solar-battery.jpg',
    tags: ['Storage', 'Lithium', 'Backup Power'],
  },
  {
    id: 17,
    name: 'Solar Freezer',
    category: 'Power & Energy',
    description: 'DC-powered solar freezers that run directly off solar panels and batteries — no inverter required. Ideal for clinics, farms, and off-grid communities.',
    src: '/assets/images/solar-freezer.avif',
    tags: ['Appliance', 'Cold Chain', 'DC Power'],
  },
  {
    id: 18,
    name: 'Solar TV',
    category: 'Power & Energy',
    description: 'Energy-efficient LED solar televisions with built-in digital decoders. Low power draw (≤30W) perfect for solar-powered homes and rural electrification projects.',
    src: '/assets/images/solar-tv.png',
    tags: ['Appliance', 'Low Power', 'Home'],
  },
  {
    id: 19,
    name: 'Energy-Saving Freezer',
    category: 'Power & Energy',
    description: 'A-rated energy-saving chest and upright freezers designed for grid and hybrid solar systems. Available in 100L–600L capacities.',
    src: '/assets/images/energy-save-freezer.avif',
    tags: ['Appliance', 'Energy Saving', 'A-Rated'],
  },
  {
    id: 20,
    name: 'Solar TV, Fan & AC Bundle',
    category: 'Power & Energy',
    description: 'All-in-one solar appliance bundle including flat-screen TV, ceiling/standing fan, and split AC — rated for direct solar DC or hybrid inverter systems.',
    src: '/assets/images/solar-tv-fan-and-air-condition.webp',
    tags: ['Bundle', 'Appliances', 'Full System'],
  },
  {
    id: 21,
    name: 'Power Battery Bank',
    category: 'Power & Energy',
    description: 'Heavy-duty sealed lead-acid and LiFePO4 battery banks for inverter systems. Scalable from 12V 100Ah home units to 48V commercial racks.',
    src: '/assets/images/battery.jpg',
    tags: ['Storage', 'Inverter', 'Commercial'],
  },
  {
    id: 22,
    name: 'Battery Storage System',
    category: 'Power & Energy',
    description: 'Modular battery storage packs for large solar and hybrid energy systems. Stack-and-scale architecture allows capacity expansion without full replacement.',
    src: '/assets/images/battery-2.jpg',
    tags: ['Storage', 'Modular', 'Scalable'],
  },
]

const CATEGORIES: Category[] = ['All', 'Agri Commodities', 'Power & Energy']
const PAGE_SIZE = 9

// Category accent colours
const CAT_COLORS: Record<Category, { bg: string; text: string; activeBg: string; activeText: string }> = {
  'All':               { bg: '#f1f5f9', text: '#475569', activeBg: 'var(--navy)', activeText: '#fff' },
  'Agri Commodities':  { bg: '#f0fdf4', text: '#16a34a', activeBg: '#16a34a',    activeText: '#fff' },
  'Power & Energy':    { bg: '#fefce8', text: '#ca8a04', activeBg: '#ca8a04',    activeText: '#fff' },
}

// ── Modal ──────────────────────────────────────────────────────────────────
interface ModalProps {
  product: Product
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}

function ProductModal({ product, onClose, onPrev, onNext, hasPrev, hasNext }: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ background: 'rgba(8,16,32,0.88)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden flex flex-col md:flex-row"
        style={{ background: '#0d1f3b', border: '1px solid rgba(201,162,75,0.25)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)', maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,162,75,0.25)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
        >
          <X size={16} />
        </button>

        {/* Image */}
        <div className="relative w-full md:w-[52%] flex-shrink-0" style={{ minHeight: 260 }}>
          <Image src={product.src} alt={product.name} fill className="object-cover" sizes="(max-width:768px) 100vw,52vw" priority />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-7 overflow-y-auto" style={{ flex: 1 }}>
          {/* Category badge */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'rgba(201,162,75,0.15)', color: 'var(--gold)', border: '1px solid rgba(201,162,75,0.3)' }}
            >
              {product.category}
            </span>
            {product.tags.map(t => (
              <span key={t} className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}>
                {t}
              </span>
            ))}
          </div>

          <h2 className="font-bold text-2xl mb-3 leading-tight" style={{ color: '#fff', fontFamily: 'var(--font-display,sans-serif)' }}>
            {product.name}
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {product.description}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
            style={{ background: 'var(--gold)', color: '#1a1408' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Enquire About This Product
          </Link>
        </div>

        {hasPrev && (
          <button onClick={e => { e.stopPropagation(); onPrev() }} aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.45)', color: '#fff', zIndex: 10 }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,162,75,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.45)')}
          ><ChevronLeft size={18} /></button>
        )}
        {hasNext && (
          <button onClick={e => { e.stopPropagation(); onNext() }} aria-label="Next"
            className="absolute right-14 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.45)', color: '#fff', zIndex: 10 }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,162,75,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.45)')}
          ><ChevronRight size={18} /></button>
        )}
      </div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function ProductsCatalogue() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [page, setPage] = useState(1)
  const [modalIdx, setModalIdx] = useState<number | null>(null)

  // Filtered list
  const filtered = useMemo(() =>
    activeCategory === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === activeCategory),
    [activeCategory]
  )

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  // When category changes reset to page 1
  const handleCategory = (cat: Category) => { setActiveCategory(cat); setPage(1) }

  // Modal navigation is over the filtered list
  const openModal = (productId: number) => {
    const idx = filtered.findIndex(p => p.id === productId)
    setModalIdx(idx)
  }
  const closeModal = () => setModalIdx(null)
  const prevModal = () => setModalIdx(i => (i !== null && i > 0 ? i - 1 : i))
  const nextModal = () => setModalIdx(i => (i !== null && i < filtered.length - 1 ? i + 1 : i))

  return (
    <>
      {/* ── Filter bar ── */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mr-1">
          <SlidersHorizontal size={14} /> Filter
        </span>
        {CATEGORIES.map(cat => {
          const active = activeCategory === cat
          const c = CAT_COLORS[cat]
          return (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
              style={{
                background: active ? c.activeBg : c.bg,
                color: active ? c.activeText : c.text,
                border: `1.5px solid ${active ? c.activeBg : 'transparent'}`,
                boxShadow: active ? '0 2px 10px rgba(0,0,0,0.12)' : 'none',
              }}
            >
              {cat}
              <span
                className="ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                style={{
                  background: active ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.08)',
                  color: active ? '#fff' : c.text,
                }}
              >
                {cat === 'All' ? ALL_PRODUCTS.length : ALL_PRODUCTS.filter(p => p.category === cat).length}
              </span>
            </button>
          )
        })}

        {/* Result count — right side */}
        <span className="ml-auto text-xs text-slate-400">
          Showing {paginated.length} of {filtered.length} products
        </span>
      </div>

      {/* ── Product grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map(product => (
          <button
            key={product.id}
            onClick={() => openModal(product.id)}
            className="group text-left rounded-2xl overflow-hidden border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]"
            style={{ background: '#fff', border: '1px solid #e8eaf0', boxShadow: '0 2px 8px rgba(11,27,51,0.05)' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--gold)'
              e.currentTarget.style.boxShadow = '0 12px 32px -8px rgba(11,27,51,0.15)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#e8eaf0'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(11,27,51,0.05)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: 200 }}>
              <Image
                src={product.src}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
              />
              {/* Category pill on image */}
              <span
                className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: product.category === 'Agri Commodities' ? '#16a34a' : '#ca8a04',
                  color: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                }}
              >
                {product.category === 'Agri Commodities' ? 'Agri' : 'Energy'}
              </span>
              {/* Zoom hint on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: 'rgba(11,27,51,0.35)' }}>
                <span className="flex items-center gap-1.5 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(11,27,51,0.7)', backdropFilter: 'blur(4px)' }}>
                  <ZoomIn size={13} /> View details
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-5">
              <h3
                className="font-bold text-base mb-2 leading-snug"
                style={{ color: 'var(--ink)', fontFamily: 'var(--font-display,sans-serif)' }}
              >
                {product.name}
              </h3>
              <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--slate)' }}>
                {product.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map(t => (
                  <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: '#f1f5f9', color: '#64748b' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
            style={{ border: '1.5px solid #e2e8f0', color: 'var(--navy)', background: '#fff' }}
            onMouseEnter={e => { if (page > 1) e.currentTarget.style.borderColor = 'var(--gold)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0' }}
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className="w-9 h-9 rounded-full text-sm font-semibold transition-all"
              style={{
                background: page === n ? 'var(--navy)' : '#fff',
                color: page === n ? '#fff' : 'var(--navy)',
                border: `1.5px solid ${page === n ? 'var(--navy)' : '#e2e8f0'}`,
              }}
              onMouseEnter={e => { if (page !== n) { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' } }}
              onMouseLeave={e => { if (page !== n) { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = 'var(--navy)' } }}
              aria-label={`Page ${n}`}
              aria-current={page === n ? 'page' : undefined}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
            style={{ border: '1.5px solid #e2e8f0', color: 'var(--navy)', background: '#fff' }}
            onMouseEnter={e => { if (page < totalPages) e.currentTarget.style.borderColor = 'var(--gold)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0' }}
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* ── Modal ── */}
      {modalIdx !== null && (
        <ProductModal
          product={filtered[modalIdx]}
          onClose={closeModal}
          onPrev={prevModal}
          onNext={nextModal}
          hasPrev={modalIdx > 0}
          hasNext={modalIdx < filtered.length - 1}
        />
      )}
    </>
  )
}
