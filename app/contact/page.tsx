'use client'

import { useState } from 'react'
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

const CONTACT_INFO = [
  {
    icon: (
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2.1z" />
    ),
    label: 'Phone',
    value: '+234 901 938 4496',
    sub1: 'Customer support',
    sub2: 'Mon–Sat: 8:00 – 18:00',
    href: 'tel:+2349019384496',
  },
  {
    icon: <path d="M4 4h16v16H4zM4 4l8 8 8-8" />,
    label: 'Email',
    value: 'info@willstone.com.ng',
    sub1: '24/7 customer support',
    sub2: 'General questions',
    href: 'mailto:willstonestrategic@gmail.com',
  },
  {
    icon: (
      <>
        <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    label: 'Address',
    value: '20 Cambridge House, Onireke Jericho - Joop Berkhout Crescent, Ibadan, Oyo State, Nigeria',
    sub1: 'Main office location',
    sub2: '',
    href: 'https://maps.app.goo.gl/ZjZ5eCgY7MjJnvvj6',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', consent: false })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    if (!form.consent) e.consent = 'You must agree to proceed'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-body, sans-serif)' }}>

      <SiteHeader variant="solid" />

      {/* push content below fixed header */}
      <div className="pt-[65px]">

      {/* ── HERO STRIP ── */}
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A24B" strokeWidth="0.5"/></pattern><rect width="100%" height="100%" fill="url(#grid)"/></svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="eyebrow text-[12px] font-semibold flex items-center gap-3 mb-3" style={{ color: 'var(--gold)' }}>
            <span className="gold-rule" /> GET IN TOUCH
          </p>
          <h1 className="display text-white font-semibold leading-tight" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
            Let&apos;s Build Something<br />
            <span style={{ color: 'var(--gold-light)' }}>Together.</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-xl text-[15px] leading-relaxed">
            Reach out to us for partnerships, enquiries, or any questions. Our team is ready to help you take the next step.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="py-14 px-5 sm:px-8 lg:px-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6">
          {CONTACT_INFO.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === 'Address' ? '_blank' : undefined}
              rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
              className="contact-card group"
            >
              <span className="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {item.icon}
                </svg>
              </span>
              <div className="mt-4">
                <p className="font-semibold text-[16px] mt-1 group-hover:text-[var(--gold)] transition-colors" style={{ color: 'var(--ink)' }}>
                  {item.value}
                </p>
                <p className="text-[13px] text-slate-500 mt-1">{item.sub1}</p>
                {item.sub2 && <p className="text-[13px] text-slate-400">{item.sub2}</p>}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section className="py-16 px-5 sm:px-8 lg:px-10" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
            <h2 className="display font-semibold text-[22px] mb-1" style={{ color: 'var(--ink)' }}>
              Ask us. We are here to help!
            </h2>
            <p className="text-slate-500 text-[13px] mb-8">Fill in the form and we&apos;ll get back to you within 24 hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(201,162,75,.12)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[18px] mb-2" style={{ color: 'var(--ink)' }}>Message sent!</h3>
                <p className="text-slate-500 text-[14px] max-w-xs">Thank you for reaching out. A member of our team will be in touch shortly.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', subject:'', message:'', consent:false }) }}
                  className="btn-gold mt-6 px-6 py-2.5 rounded-full text-[13px] font-semibold cursor-pointer">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="contact-label">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text" value={form.name} placeholder="Your full name"
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={`contact-input${errors.name ? ' error' : ''}`}
                    />
                    {errors.name && <p className="contact-error">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="contact-label">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email" value={form.email} placeholder="your@email.com"
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={`contact-input${errors.email ? ' error' : ''}`}
                    />
                    {errors.email && <p className="contact-error">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="contact-label">Phone</label>
                    <input
                      type="tel" value={form.phone} placeholder="+234 000 000 0000"
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label className="contact-label">Subject</label>
                    <input
                      type="text" value={form.subject} placeholder="How can we help?"
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="contact-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="contact-label">Message <span className="text-red-500">*</span></label>
                  <textarea
                    rows={5} value={form.message} placeholder="Tell us more about your enquiry…"
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={`contact-input resize-none${errors.message ? ' error' : ''}`}
                  />
                  {errors.message && <p className="contact-error">{errors.message}</p>}
                </div>
                <div>
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox" checked={form.consent}
                      onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))}
                      className="contact-checkbox mt-0.5"
                    />
                    <span className="text-[13px] text-slate-500 leading-snug">
                      I allow Willstone Strategic Industries Limited to process my personal data for the purpose of responding to my enquiry.
                    </span>
                  </label>
                  {errors.consent && <p className="contact-error mt-1">{errors.consent}</p>}
                </div>
                <button type="submit" className="btn-gold w-full sm:w-auto px-8 py-3 rounded-full text-[13px] font-semibold cursor-pointer inline-flex items-center justify-center gap-2">
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* MAP */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="display font-semibold text-[22px] mb-1" style={{ color: 'var(--ink)' }}>How to find us</h2>
              <p className="text-slate-500 text-[13px]">Plot 10, Industrial Avenue, Lagos, Nigeria</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: '420px' }}>
              <iframe
                title="Willstone Strategic Industries Limited location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45317912035!2d3.1438710500000003!3d6.548055399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Quick contact chips */}
            <div className="flex flex-wrap gap-3">
              <a href="tel:+2348051234567" className="quick-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2.1z" />
                </svg>
                +234 805 123 4567
              </a>
              <a href="mailto:info@willstone.com.ng" className="quick-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4zM4 4l8 8 8-8" />
                </svg>
                info@willstone.com.ng
              </a>
            </div>
          </div>
        </div>
      </section>

      </div>{/* end pt-[65px] wrapper */}

      <SiteFooter />
    </div>
  )
}
