'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

import { PRODUCTS, type AgriProduct } from '@/lib/agriProducts'
// Span pattern for masonry grid
const SPAN_CLASSES: string[] = [
  'row-span-2', 'row-span-1', 'row-span-1', 'row-span-1',
  'row-span-2', 'row-span-1', 'row-span-1', 'row-span-1',
  'row-span-2', 'row-span-1', 'row-span-1', 'row-span-1',
  'row-span-2', 'row-span-1', 'row-span-1', 'row-span-1',
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
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ background: 'rgba(8,16,32,0.88)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={product.name}
    >
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
            className="font-bold text-2xl mb-1 leading-tight"
            style={{ color: '#fff', fontFamily: 'var(--font-display, sans-serif)' }}
          >
            {product.name}
          </h2>

          {product.scientificName && (
            <p className="text-xs italic mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {product.scientificName}
            </p>
          )}

          <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {product.description}
          </p>

          {/* Quick specs preview */}
          {product.origin && (
            <div className="mb-6 flex flex-col gap-1.5">
              {product.origin && (
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <span style={{ color: 'var(--gold)' }}>Origin: </span>{product.origin}
                </p>
              )}
              {product.packaging && (
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <span style={{ color: 'var(--gold)' }}>Packaging: </span>{product.packaging}
                </p>
              )}
            </div>
          )}

          {/* View Details button → goes to detail page */}
          <Link
            href={`/products/agri-inputs/${product.slug}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
            style={{ background: 'var(--gold)', color: '#1a1408' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            View Details
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
      <div
        className="agri-grid grid gap-3"
        style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '220px' }}
      >
        {PRODUCTS.map((product, idx) => (
          <button
            key={product.id}
            onClick={() => openModal(idx)}
            aria-label={`View ${product.name}`}
            className={`relative overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] ${SPAN_CLASSES[idx] ?? ''}`}
            style={{ display: 'block', padding: 0, border: 'none', background: 'none' }}
          >
            <Image
              src={product.src}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
              style={{ background: 'linear-gradient(to top, rgba(11,27,51,0.88) 0%, rgba(11,27,51,0.3) 60%, transparent 100%)' }}
            >
              <p className="text-white font-semibold text-sm leading-tight mb-1" style={{ fontFamily: 'var(--font-display, sans-serif)' }}>
                {product.name}
              </p>
              <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--gold-light)' }}>
                <ZoomIn size={11} /> View details
              </span>
            </div>
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .agri-grid { grid-template-columns: repeat(2, 1fr) !important; grid-auto-rows: 160px !important; }
        }
        @media (max-width: 479px) {
          .agri-grid { grid-template-columns: repeat(2, 1fr) !important; grid-auto-rows: 140px !important; }
        }
      `}</style>

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

// Export PRODUCTS so the detail page can look up by slug
export { PRODUCTS } from '@/lib/agriProducts'
