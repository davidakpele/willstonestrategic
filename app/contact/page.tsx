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
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSendError('')
    setSending(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Send failed')
      setSubmitted(true)
    } catch {
      setSendError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

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
            className="w-full max-w-[400px]"
            style={{
              background: 'rgba(11,27,51,0.90)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              borderRadius: '18px',
              padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center text-center py-10">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(201,162,75,.15)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-bold text-[18px] text-white mb-2">Message sent!</h3>
                <p className="text-white/60 text-[13px] leading-relaxed mb-6">
                  Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', message:'' }) }}
                  className="btn-gold px-6 py-2.5 rounded-full text-[13px] font-semibold cursor-pointer"
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-[22px] text-white mb-1">
                  Let&apos;s Work{' '}
                  <span style={{ color: 'var(--gold)' }}>Together</span>
                </h2>
                <div className="w-8 h-[2px] mb-4" style={{ background: 'var(--gold)' }} />
                <p className="text-white/60 text-[13px] leading-relaxed mb-6">
                  We&apos;re here to answer your questions and explore new possibilities.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label className="block text-white/80 text-[13px] font-semibold mb-1.5">Name</label>
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
                    <label className="block text-white/80 text-[13px] font-semibold mb-1.5">E-mail address</label>
                    <input
                      type="email"
                      value={form.email}
                      placeholder="Enter your e-mail address"
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={`contact-input contact-input-dark${errors.email ? ' error' : ''}`}
                    />
                    {errors.email && <p className="contact-error">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-white/80 text-[13px] font-semibold mb-1.5">Message</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      placeholder="Let us know what you are interested in"
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className={`contact-input contact-input-dark resize-none${errors.message ? ' error' : ''}`}
                    />
                    {errors.message && <p className="contact-error">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-gold w-full py-3 rounded-lg text-[13px] font-semibold cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-60"
                  >
                    {sending ? 'Sending…' : 'Send a message'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                  {sendError && <p className="contact-error mt-2">{sendError}</p>}
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── WE'RE ALWAYS HERE ── */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="display font-semibold mb-3" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', color: 'var(--ink)' }}>
              We&apos;re always here to help.
            </h2>
            <p className="text-slate-500 text-[14px] leading-relaxed mb-8 max-w-md">
              Our team is committed to providing fast, reliable assistance. Reach out through any channel
              that&apos;s convenient — we typically respond within one business day.
            </p>

            <div className="space-y-5">
              
                href="mailto:willstonestrategic@gmail.com"
                className="contact-info-row group"
              >
                <span className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-400 mb-0.5">Email us</p>
                  <p className="text-[14px] font-medium truncate" style={{ color: 'var(--ink)' }}>
                    willstonestrategic@gmail.com
                  </p>
                </div>
                <svg className="text-slate-300 group-hover:text-[var(--gold)] transition-colors shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>

              
                href="tel:+2349019384496"
                className="contact-info-row group"
              >
                <span className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2.1z"/>
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-400 mb-0.5">Call us</p>
                  <p className="text-[14px] font-medium" style={{ color: 'var(--ink)' }}>+234 901 938 4496 &nbsp;/&nbsp; +234 802 345 6789</p>
                </div>
                <svg className="text-slate-300 group-hover:text-[var(--gold)] transition-colors shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>

              
                href="https://maps.app.goo.gl/ZjZ5eCgY7MjJnvvj6"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-row group"
              >
                <span className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-400 mb-0.5">Visit us</p>
                  <p className="text-[14px] font-medium leading-snug" style={{ color: 'var(--ink)' }}>
                    20 Cambridge House, Onireke Jericho,<br />Ibadan, Oyo State, Nigeria
                  </p>
                </div>
                <svg className="text-slate-300 group-hover:text-[var(--gold)] transition-colors shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: '420px' }}>
            <iframe
              title="Willstone Strategic Industries Limited location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0!2d3.9!3d7.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed2f0000001%3A0x1!2sIbadan%2C+Oyo+State%2C+Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
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
