'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export interface AgriProduct {
  id: number
  name: string
  description: string
  src: string
  tags?: string[]
}

const PRODUCTS: AgriProduct[] = [
  {
    id: 1,
    name: 'Soybeans',
    description: 'Premium-grade soybeans sourced from certified farms across Nigeria. Rich in protein, suitable for oil processing, animal feed, and direct export.',
    src: '/assets/images/soybeans.jpg',
    tags: ['Export', 'Protein Crop', 'Oil Seed'],
  },
  {
    id: 2,
    name: 'Cocoa Beans',
    description: 'Sun-dried and fermented cocoa beans of the highest quality. Traceable from farm to export, meeting EU and US import standards.',
    src: '/assets/images/cocoawebp.webp',
    tags: ['Export', 'Cash Crop', 'West Africa'],
  },
  {
    id: 3,
    name: 'Maize (Corn)',
    description: 'Dried yellow maize grains ideal for food processing, animal feed production, and starch extraction. Consistently graded and cleaned.',
    src: '/assets/images/Maize.jpg',
    tags: ['Food Crop', 'Feed Grain', 'Processing'],
  },
  {
    id: 4,
    name: 'Cassava',
    description: 'Fresh and processed cassava including dried chips and pellets. Suitable for ethanol production, starch extraction, and export markets.',
    src: '/assets/images/cassava.jpg',
    tags: ['Starch', 'Processed', 'Export'],
  },
  {
    id: 5,
    name: 'Sesame Seeds',
    description: 'High-purity sesame seeds (natural and hulled) sourced from Benue, Nassarawa, and Jigawa states. Meets Japanese, Chinese, and EU quality benchmarks.',
    src: '/assets/images/sesame.webp',
    tags: ['Export', 'Oil Seed', 'Premium'],
  },
  {
    id: 6,
    name: 'Palm Oil',
    description: 'Fresh crude palm oil (CPO) and refined palm olein available in bulk. Produced under responsible farming practices with complete documentation.',
    src: '/assets/images/palm-oil-main.png',
    tags: ['Oil', 'Export', 'Bulk'],
  },
  {
    id: 7,
    name: 'Irish Potatoes',
    description: 'Fresh Irish potatoes sourced from Jos Plateau and Kaduna highlands. Available in retail and bulk quantities for domestic distribution.',
    src: '/assets/images/potatos.jpg',
    tags: ['Fresh Produce', 'Domestic', 'Highlands'],
  },
  {
    id: 9,
    name: 'Charcoal',
    description: 'High-grade hardwood charcoal produced from sustainably sourced Nigerian timber. Available in lump and briquette form, suitable for industrial, restaurant, and export markets.',
    src: '/assets/images/charcoal.jpg',
    tags: ['Export', 'Energy', 'Industrial'],
  },
  {
    id: 10,
    name: 'Charcoal Briquettes',
    description: 'Compressed charcoal briquettes offering longer burn time and consistent heat output. Ideal for BBQ, hospitality, and packaged retail export.',
    src: '/assets/images/charcoal-2.jpg',
    tags: ['Export', 'Briquettes', 'BBQ'],
  },
  {
    id: 11,
    name: 'Ginger',
    description: 'Dried and fresh ginger root sourced from Kaduna and Nassarawa states — among the world\'s top ginger-producing regions. Available split-dried or whole for spice processing and export.',
    src: '/assets/images/ginger.jpg',
    tags: ['Export', 'Spice', 'Premium'],
  },
  {
    id: 12,
    name: 'Palm Oil (Gallon)',
    description: 'Refined and packaged palm oil in 5L, 10L, and 25L gallon containers. Ready for retail distribution, food service, and wholesale domestic supply.',
    src: '/assets/images/palm-oil-gallon.jpg',
    tags: ['Oil', 'Packaged', 'Retail'],
  },
  {
    id: 13,
    name: 'Haricot Beans',
    description: 'Clean, dried haricot (white) beans sourced from smallholder farms across Nigeria. Ideal for canning, food processing, and direct export to European and Asian markets.',
    src: '/assets/images/Harich-potato.webp',
    tags: ['Export', 'Legume', 'Processing'],
  },
  {
    id: 14,
    name: 'Sweet Potatoes',
    description: 'Fresh sweet potatoes available in orange and white flesh varieties. Sourced from Benue and Plateau states, supplied in bulk bags for domestic retail and processing.',
    src: '/assets/images/sweet-potato-2.jpg',
    tags: ['Fresh Produce', 'Domestic', 'Tuber'],
  },
]

// Span pattern: tall anchors every 4 items (index 0, 4, 8, 12) to keep the masonry rhythm
// 14 products — last row-group has 2 items after the anchor, that's fine
const SPAN_CLASSES: string[] = [
  'row-span-2', // 0  soybeans        — tall anchor row-group 1
  '',           // 1
  '',           // 2
  '',           // 3
  'row-span-2', // 4  sesame          — tall anchor row-group 2
  '',           // 5
  '',           // 6
  '',           // 7
  'row-span-2', // 8  charcoal        — tall anchor row-group 3
  '',           // 9
  '',           // 10
  '',           // 11
  'row-span-2', // 12 haricot beans   — tall anchor row-group 4
  '',           // 13
]

interface ModalProps {
  product: AgriProduct
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}

function ProductModal({ product, onClose, onPrev, onNext, hasPrev, hasNext }: ModalProps) {
  // Close on Escape, navigate with arrow keys
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    },
    [onClose, onPrev, onNext, hasPrev, hasNext],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ background: 'rgba(8, 16, 32, 0.88)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={product.name}
    >
      {/* Card — stop propagation so clicks inside don't close */}
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden flex flex-col md:flex-row"
        style={{ background: '#0d1f3b', border: '1px solid rgba(201,162,75,0.25)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(201,162,75,0.25)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
        >
          <X size={16} />
        </button>

        {/* Image */}
        <div className="relative w-full md:w-[52%] flex-shrink-0" style={{ minHeight: 260 }}>
          <Image
            src={product.src}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 52vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-7 overflow-y-auto" style={{ flex: 1 }}>
          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{ background: 'rgba(201,162,75,0.12)', color: 'var(--gold-light)', border: '1px solid rgba(201,162,75,0.25)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h2
            className="font-bold text-2xl mb-3 leading-tight"
            style={{ color: '#fff', fontFamily: 'var(--font-display, sans-serif)' }}
          >
            {product.name}
          </h2>

          <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {product.description}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
            style={{ background: 'var(--gold)', color: '#1a1408' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Enquire About This Product
          </Link>
        </div>

        {/* Prev / Next arrows */}
        {hasPrev && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            aria-label="Previous product"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(0,0,0,0.45)', color: '#fff', zIndex: 10 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(201,162,75,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.45)')}
          >
            <ChevronLeft size={18} />
          </button>
        )}
        {hasNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            aria-label="Next product"
            className="absolute right-14 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(0,0,0,0.45)', color: '#fff', zIndex: 10 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(201,162,75,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.45)')}
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  )
}

export default function AgriProductsGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openModal = (index: number) => setActiveIndex(index)
  const closeModal = () => setActiveIndex(null)
  const prev = () => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i))
  const next = () => setActiveIndex((i) => (i !== null && i < PRODUCTS.length - 1 ? i + 1 : i))

  return (
    <>
      {/* ── Grid ── */}
      <div
        className="agri-grid grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '220px',
        }}
      >
        {PRODUCTS.map((product, idx) => (
          <button
            key={product.id}
            onClick={() => openModal(idx)}
            aria-label={`View ${product.name}`}
            className={`relative overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] ${SPAN_CLASSES[idx] ?? ''}`}
            style={{ display: 'block', padding: 0, border: 'none', background: 'none' }}
          >
            {/* Image */}
            <Image
              src={product.src}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
              sizes="(max-width: 640px) 50vw, 25vw"
            />

            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
              style={{ background: 'linear-gradient(to top, rgba(11,27,51,0.88) 0%, rgba(11,27,51,0.3) 60%, transparent 100%)' }}
            >
              <p className="text-white font-semibold text-sm leading-tight mb-1" style={{ fontFamily: 'var(--font-display, sans-serif)' }}>
                {product.name}
              </p>
              <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--gold-light)' }}>
                <ZoomIn size={11} />
                View details
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Responsive: collapse to 2-col on small screens */}
      <style>{`
        @media (max-width: 767px) {
          .agri-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 160px !important;
          }
        }
        @media (max-width: 479px) {
          .agri-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 140px !important;
          }
        }
      `}</style>

      {/* ── Modal ── */}
      {activeIndex !== null && (
        <ProductModal
          product={PRODUCTS[activeIndex]}
          onClose={closeModal}
          onPrev={prev}
          onNext={next}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < PRODUCTS.length - 1}
        />
      )}
    </>
  )
}
