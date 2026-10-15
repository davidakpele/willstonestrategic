import { Link, useParams, useNavigate } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { PRODUCTS } from '../lib/agriProducts'

export default function AgriInputsProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const slugStr = slug ?? ''
  const product = PRODUCTS.find((p) => p.slug === slugStr)

  if (!product) {
    navigate('/products/agri-inputs', { replace: true })
    return null
  }

  // Adjacent products for prev/next navigation
  const idx = PRODUCTS.indexOf(product)
  const prevProduct = idx > 0 ? PRODUCTS[idx - 1] : null
  const nextProduct = idx < PRODUCTS.length - 1 ? PRODUCTS[idx + 1] : null

  return (
    <div className="bg-white" style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      <SiteHeader variant="solid" />

      {/* ── Hero banner ── */}
      <section className="relative overflow-hidden" style={{ height: 'clamp(280px, 45vw, 420px)', background: 'var(--navy)' }}>
        <img
          src={product.src}
          alt={product.name}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(6,15,31,0.3) 0%, rgba(6,15,31,0.75) 100%)',
        }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-8 px-5 sm:px-10 lg:px-16 xl:px-24"
          style={{ paddingTop: '88px' }}>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-3 text-xs flex-wrap" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <Link to="/products/agri-inputs" className="hover:text-white transition-colors">Agri Inputs</Link>
            <span>/</span>
            <span style={{ color: 'var(--gold-light)' }}>{product.name}</span>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {product.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{ background: 'rgba(201,162,75,0.18)', color: 'var(--gold-light)', border: '1px solid rgba(201,162,75,0.3)' }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-white font-bold leading-tight"
            style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            {product.name}
          </h1>
          {product.scientificName && (
            <p className="italic mt-1 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {product.scientificName}
            </p>
          )}
        </div>
      </section>

      {/* ── Main content ── */}
      <main className="max-w-screen-xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-14">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12">

          {/* ── Left column ── */}
          <div>
            {/* Description */}
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--slate)', maxWidth: 640 }}>
              {product.description}
            </p>

            {/* Specs table */}
            {product.specs && product.specs.length > 0 && (
              <div className="mb-10">
                <h2 className="font-bold text-lg mb-4" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display, sans-serif)' }}>
                  Technical Specifications
                </h2>
                <div className="rounded-xl overflow-hidden border" style={{ borderColor: '#eaecf2' }}>
                  {/* Fixed rows: origin, type, moisture, packaging */}
                  {[
                    { label: 'Origin', value: product.origin },
                    { label: 'Type', value: product.type },
                    { label: 'Moisture', value: product.moisture },
                    { label: 'Packaging', value: product.packaging },
                  ].filter((r): r is { label: string; value: string } => Boolean(r.value)).map((row, i) => (
                    <div key={row.label} className="grid grid-cols-2 text-sm"
                      style={{ borderBottom: i < 3 ? '1px solid #eaecf2' : undefined, background: i % 2 === 0 ? '#f8f9fb' : '#fff' }}>
                      <div className="px-5 py-3 font-semibold" style={{ color: 'var(--navy)' }}>{row.label}</div>
                      <div className="px-5 py-3" style={{ color: 'var(--slate)' }}>{row.value}</div>
                    </div>
                  ))}
                  {/* Dynamic quality specs */}
                  {product.specs.map((spec, i) => (
                    <div key={spec.label} className="grid grid-cols-2 text-sm"
                      style={{ borderTop: '1px solid #eaecf2', background: (i + 4) % 2 === 0 ? '#f8f9fb' : '#fff' }}>
                      <div className="px-5 py-3 font-semibold" style={{ color: 'var(--navy)' }}>{spec.label}</div>
                      <div className="px-5 py-3" style={{ color: 'var(--slate)' }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Target markets */}
            {product.targetMarkets && product.targetMarkets.length > 0 && (
              <div className="mb-10">
                <h2 className="font-bold text-lg mb-4" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display, sans-serif)' }}>
                  Target Markets
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.targetMarkets.map((market) => (
                    <div key={market.region} className="rounded-xl p-5"
                      style={{ border: '1px solid #eaecf2', background: '#f8f9fb' }}>
                      <p className="font-semibold text-sm mb-3 flex items-center gap-2"
                        style={{ color: 'var(--navy)', fontFamily: 'var(--font-display, sans-serif)' }}>
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                        {market.region}
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {market.buyers.map((buyer) => (
                          <li key={buyer} className="text-sm flex items-start gap-2" style={{ color: 'var(--slate)' }}>
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--slate)' }} />
                            {buyer}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Right sidebar ── */}
          <div className="flex flex-col gap-5">

            {/* Request Quote card */}
            <div className="rounded-2xl p-7 sticky top-28"
              style={{ background: 'var(--navy)', border: '1px solid rgba(201,162,75,0.2)' }}>
              <p className="eyebrow text-[11px] font-semibold tracking-widest mb-2" style={{ color: 'var(--gold)' }}>
                INTERESTED?
              </p>
              <h3 className="font-bold text-lg text-white mb-2 leading-snug"
                style={{ fontFamily: 'var(--font-display, sans-serif)' }}>
                Request a Quote for {product.name}
              </h3>
              <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Tell us your required volume, packaging, and delivery destination and we'll respond within 24 hours.
              </p>
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold transition-colors"
                style={{ background: 'var(--gold)', color: '#1a1408' }}
              >
                Request Quote for {product.name}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>

              <div className="mt-5 pt-5 flex flex-col gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <a href="mailto:info@willstonestrategic.com"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                  info@willstonestrategic.com
                </a>
                <a href="tel:+2348000000000"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call our sales team
                </a>
              </div>
            </div>

            {/* Back link */}
            <Link to="/products/agri-inputs"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-lg transition-colors text-center justify-center"
              style={{ border: '1px solid #eaecf2', color: 'var(--navy)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
              All Agri Products
            </Link>
          </div>
        </div>

        {/* ── Prev / Next navigation ── */}
        {(prevProduct || nextProduct) && (
          <div className="mt-14 pt-8 grid sm:grid-cols-2 gap-4" style={{ borderTop: '1px solid #eaecf2' }}>
            {prevProduct ? (
              <Link to={`/products/agri-inputs/${prevProduct.slug}`}
                className="flex items-center gap-4 p-4 rounded-xl transition-all group"
                style={{ border: '1px solid #eaecf2' }}>
                <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={prevProduct.src}
                    alt={prevProduct.name}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'var(--slate)' }}>← Previous</p>
                  <p className="font-semibold text-sm group-hover:text-[var(--gold)] transition-colors"
                    style={{ color: 'var(--ink)' }}>{prevProduct.name}</p>
                </div>
              </Link>
            ) : <div />}

            {nextProduct ? (
              <Link to={`/products/agri-inputs/${nextProduct.slug}`}
                className="flex items-center justify-end gap-4 p-4 rounded-xl transition-all group sm:text-right"
                style={{ border: '1px solid #eaecf2' }}>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'var(--slate)' }}>Next →</p>
                  <p className="font-semibold text-sm group-hover:text-[var(--gold)] transition-colors"
                    style={{ color: 'var(--ink)' }}>{nextProduct.name}</p>
                </div>
                <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={nextProduct.src}
                    alt={nextProduct.name}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </Link>
            ) : <div />}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
