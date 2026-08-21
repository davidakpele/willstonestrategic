'use client'

import { useState, type FormEvent } from 'react'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

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

const INQUIRY_TYPES = [
  { value: 'inquiry', label: 'Inquiries' },
  { value: 'complaint', label: 'Complaint' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'support', label: 'Technical Support' },
  { value: 'other', label: 'Other' },
]

const FAQS = [
  {
    q: 'Do you provide support and maintenance after project delivery?',
    a: 'Yes. We offer ongoing support and maintenance packages tailored to every project, ensuring your solution stays up to date and fully operational.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We operate across technology, agriculture, logistics, infrastructure, real estate, energy, trade, procurement, defence, and security sectors.',
  },
  {
    q: 'Do you offer customised solutions?',
    a: 'Absolutely. Every engagement is scoped to your specific needs — we do not sell off-the-shelf packages. Our team works with you from discovery to delivery.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary by scope and complexity. Small projects can be completed in weeks; large infrastructure or technology engagements typically run 3–12 months.',
  },
  {
    q: 'Can we partner with Willstone as a vendor or supplier?',
    a: 'Yes. We are always open to strategic partnerships. Please use the contact form above or email us directly with your company profile.',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', inquiryType: 'inquiry', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [sending, setSending] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.inquiryType)    e.inquiryType = 'Please select an inquiry type'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSending(true)
    // Simulate a short network delay then show success modal
    setTimeout(() => {
      setSending(false)
      setShowSuccess(true)
      setForm({ name: '', email: '', phone: '', inquiryType: 'inquiry', message: '' })
    }, 2000)
  }

  const closeSuccess = () => setShowSuccess(false)

  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      style={{ fontFamily: 'var(--font-body, sans-serif)' }}
    >
      <SiteHeader variant="solid" />

      {/* ── HERO + FORM ── */}
      <section
        className="relative overflow-hidden flex items-stretch"
        style={{ paddingTop: '88px', minHeight: '100svh' }}
      >
        <img
          src="/assets/images/contact-us-image.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(100deg, rgba(6,15,31,.94) 0%, rgba(6,15,31,.78) 38%, rgba(6,15,31,.35) 65%, rgba(6,15,31,.05) 100%)',
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-20 flex items-center">
          <div
            className="w-full max-w-[450px]"
            style={{
              background: 'rgba(11,27,51,0.92)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              borderRadius: '20px',
              padding: 'clamp(28px, 4vw, 40px)',
              border: '1px solid rgba(201,162,75,0.15)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
            }}
          >
            <>
              <h2 className="font-bold text-[24px] text-white mb-1">
                Let&apos;s Connect
              </h2>
              <div className="w-10 h-[2px] mb-5" style={{ background: 'var(--gold)' }} />
              <p className="text-white/60 text-[13px] leading-relaxed mb-7">
                Tell us how we can help. We respond within one business day.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label className="contact-label">Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    placeholder="Enter your name"
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className={`contact-input contact-input-dark${errors.name ? ' error' : ''}`}
                  />
                  {errors.name && <p className="contact-error">{errors.name}</p>}
                </div>

                <div>
                  <label className="contact-label">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    placeholder="your@email.com"
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={`contact-input contact-input-dark${errors.email ? ' error' : ''}`}
                  />
                  {errors.email && <p className="contact-error">{errors.email}</p>}
                </div>

                <div>
                  <label className="contact-label">Phone (Optional)</label>
                  <input
                    type="tel"
                    value={form.phone}
                    placeholder="+234 ..."
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="contact-input contact-input-dark"
                  />
                </div>

                <div>
                  <label className="contact-label">Inquiry Type</label>
                  <select
                    value={form.inquiryType}
                    onChange={e => setForm(f => ({ ...f, inquiryType: e.target.value }))}
                    className={`contact-input contact-input-dark${errors.inquiryType ? ' error' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    {INQUIRY_TYPES.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                  {errors.inquiryType && <p className="contact-error">{errors.inquiryType}</p>}
                </div>

                <div>
                  <label className="contact-label">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    placeholder="Tell us more about your inquiry..."
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={`contact-input contact-input-dark resize-none${errors.message ? ' error' : ''}`}
                  />
                  {errors.message && <p className="contact-error">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-gold w-full py-3 rounded-lg text-[13px] font-semibold cursor-pointer flex items-center justify-center gap-2 mt-6 disabled:opacity-70 transition-all"
                >
                  {sending ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="15" height="15" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        style={{ animation: 'spin 0.8s linear infinite' }}
                      >
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </>
          </div>
        </div>
      </section>

      {/* ── Success Modal ── */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-[400] flex items-center justify-center p-4"
          style={{ background: 'rgba(8,16,32,0.80)', backdropFilter: 'blur(6px)' }}
          onClick={closeSuccess}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl p-8 flex flex-col items-center text-center"
            style={{
              background: '#0d1f3b',
              border: '1px solid rgba(201,162,75,0.25)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeSuccess}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.07)', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,162,75,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Checkmark */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{ background: 'rgba(201,162,75,0.12)', border: '1px solid rgba(201,162,75,0.3)' }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>

            <h3
              className="font-bold text-xl mb-2"
              style={{ color: '#fff', fontFamily: 'var(--font-display, sans-serif)' }}
            >
              Message Sent!
            </h3>
            <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>

            <button
              onClick={closeSuccess}
              className="px-7 py-2.5 rounded-full text-sm font-semibold transition-colors"
              style={{ background: 'var(--gold)', color: '#1a1408' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Spinner keyframes */}
      <style>{`\n        @keyframes spin { to { transform: rotate(360deg); } }\n        .animate-spin { animation: spin 0.8s linear infinite; }\n      `}</style>

      {/* ── WE'RE ALWAYS HERE ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Centered heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="display font-semibold mb-3" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', color: 'var(--ink)' }}>
              We&apos;re always here to help.
            </h2>
            <p className="text-slate-500 text-[14px] leading-relaxed">
              Reach out through any channel that works best for you. Our team is ready to discuss your needs and find the right solution.
            </p>
          </div>

          {/* Contact cards grid (3 columns centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">

            <a
              href="mailto:willstonestrategic@gmail.com"
              className="p-6 rounded-2xl border border-white/10 shadow-sm bg-white/60 hover:shadow-md transition-all hover:border-[var(--gold)]/30 flex flex-col items-center text-center"
            >
              <span className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'rgba(201,162,75,0.08)', border: '1px solid rgba(201,162,75,0.12)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </span>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-400 mb-1">Email</p>
              <p className="text-[14px] font-medium" style={{ color: 'var(--ink)' }}>willstonestrategic@gmail.com</p>
            </a>

            <a
              href="tel:+2349019384496"
              className="p-6 rounded-2xl border border-white/10 shadow-sm bg-white/60 hover:shadow-md transition-all hover:border-[var(--gold)]/30 flex flex-col items-center text-center"
            >
              <span className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'rgba(201,162,75,0.08)', border: '1px solid rgba(201,162,75,0.12)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.5a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z"/>
                </svg>
              </span>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-400 mb-1">Call</p>
              <p className="text-[13px] font-medium" style={{ color: 'var(--ink)' }}>+234 901 938 4496</p>
              <p className="text-[13px] font-medium" style={{ color: 'var(--ink)' }}>+234 706 1964 340</p>
            </a>

            <a
              href="https://maps.app.goo.gl/ZjZ5eCgY7MjJnvvj6"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl border border-white/10 shadow-sm bg-white/60 hover:shadow-md transition-all hover:border-[var(--gold)]/30 flex flex-col items-center text-center"
            >
              <span className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'rgba(201,162,75,0.08)', border: '1px solid rgba(201,162,75,0.12)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-400 mb-1">Visit</p>
              <p className="text-[13px] font-medium leading-snug" style={{ color: 'var(--ink)' }}>
                20 Cambridge House,<br />Onireke Jericho, Ibadan<br />Oyo State, Nigeria
              </p>
            </a>

          </div>

          {/* Full-width map below */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: '420px' }}>
            <iframe
              title="Willstone Strategic Industries Limited location"
              src="https://www.google.com/maps?q=20%20Cambridge%20House%2C%20Onireke%20Jericho%2C%20Ibadan%2C%20Oyo%20State%2C%20Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-[11px] font-semibold flex items-center justify-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> FAQ <span className="gold-rule" />
            </p>
            <h2 className="display font-semibold text-[24px] sm:text-[28px]" style={{ color: 'var(--ink)' }}>
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-trigger"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-left">{faq.q}</span>
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.2"
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', flexShrink: 0 }}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <div className={`faq-body${openFaq === i ? ' open' : ''}`}>
                  <p className="text-slate-500 text-[14px] leading-relaxed pb-5 px-5">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
