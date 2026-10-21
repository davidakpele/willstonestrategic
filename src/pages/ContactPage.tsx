import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Seo from '../components/Seo'

const INQUIRY_TYPES = [
  { value: 'inquiry',     label: 'Inquiries' },
  { value: 'complaint',   label: 'Complaint' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'support',     label: 'Technical Support' },
  { value: 'other',       label: 'Other' },
]

const MESSAGE_PLACEHOLDERS: Record<string, string> = {
  inquiry:     'Tell us what you would like to know..',
  complaint:   'Please describe the issue you experienced so we can look into it and resolve it quickly...',
  partnership: 'Tell us about your organisation and the kind of partnership you have in mind...',
  support:     'Describe the technical issue you\u2019re facing, including any error messages or steps to reproduce...',
  other:       'Tell us more about your inquiry...',
}

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

interface FormState {
  name:        string
  email:       string
  phone:       string
  whatsapp:    string
  inquiryType: string
  message:     string
}

const EMPTY_FORM: FormState = {
  name:        '',
  email:       '',
  phone:       '',
  whatsapp:    '',
  inquiryType: 'inquiry',
  message:     '',
}

const PHONE_RE = /^[+\d][\d\s-]{6,}$/

const CONTACT_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://willstonestrategic.com/contact',
  name: 'Contact Willstone Strategic Industries Limited',
  url: 'https://willstonestrategic.com/contact',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://willstonestrategic.com' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://willstonestrategic.com/contact' },
    ],
  },
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://willstonestrategic.com/#organization',
    name: 'Willstone Strategic Industries Limited',
    telephone: '+2347061964340',
    email: 'info@willstonestrategic.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '20 Cambridge House, Onireke Jericho',
      addressLocality: 'Ibadan',
      addressRegion: 'Oyo State',
      postalCode: '200284',
      addressCountry: 'NG',
    },
  },
}

export default function ContactPage() {
  const [form, setForm]               = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors]           = useState<Record<string, string>>({})
  const [openFaq, setOpenFaq]         = useState<number | null>(null)
  const [sending, setSending]         = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitError]                 = useState('')

  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (form.phone.trim()    && !PHONE_RE.test(form.phone.trim()))    e.phone    = 'Enter a valid phone number'
    if (form.whatsapp.trim() && !PHONE_RE.test(form.whatsapp.trim())) e.whatsapp = 'Enter a valid WhatsApp number'
    if (!form.inquiryType)    e.inquiryType = 'Please select an inquiry type'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Please provide a little more detail (min. 10 characters)'
    return e
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSending(true)
    // No API call — show success immediately
    setSending(false)
    setShowSuccess(true)
    setForm(EMPTY_FORM)
  }

  const handleFieldChange = (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }))

  const closeSuccess = () => setShowSuccess(false)

  const formContent = (
    <>
      <h2 className="font-bold text-[22px] mb-1" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display, sans-serif)' }}>
        Message us
      </h2>
      <div className="w-10 h-[2px] mb-3" style={{ background: 'var(--gold)' }} />
      <p className="text-slate-500 text-[13px] leading-relaxed mb-6">
        We&apos;re here to answer your questions and explore new possibilities. Our team are trained to the highest standard to answer and solve any technical or product queries you may have.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>Name</label>
          <input
            type="text"
            value={form.name}
            placeholder="Enter your name"
            onChange={handleFieldChange('name')}
            className={`w-full px-4 py-2.5 rounded-lg border text-[13.5px] outline-none transition-all${errors.name ? ' border-red-400 bg-red-50' : ' border-gray-200 bg-white focus:border-[var(--gold)]'}`}
            style={{ color: 'var(--ink)' }}
          />
          {errors.name && <p className="text-red-500 text-[11.5px] mt-1">{errors.name}</p>}
        </div>

        {/* Email + Phone */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>E-mail address</label>
            <input
              type="email"
              value={form.email}
              placeholder="Email address"
              onChange={handleFieldChange('email')}
              className={`w-full px-4 py-2.5 rounded-lg border text-[13.5px] outline-none transition-all${errors.email ? ' border-red-400 bg-red-50' : ' border-gray-200 bg-white focus:border-[var(--gold)]'}`}
              style={{ color: 'var(--ink)' }}
            />
            {errors.email && <p className="text-red-500 text-[11.5px] mt-1">{errors.email}</p>}
          </div>
          <div className="flex-1">
            <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>
              Phone <span className="font-normal text-slate-400">(Optional)</span>
            </label>
            <input
              type="tel"
              value={form.phone}
              placeholder="+234 ..."
              onChange={handleFieldChange('phone')}
              className={`w-full px-4 py-2.5 rounded-lg border text-[13.5px] outline-none transition-all${errors.phone ? ' border-red-400 bg-red-50' : ' border-gray-200 bg-white focus:border-[var(--gold)]'}`}
              style={{ color: 'var(--ink)' }}
            />
            {errors.phone && <p className="text-red-500 text-[11.5px] mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>Inquiry Type</label>
          <div className="relative">
            <select
              value={form.inquiryType}
              onChange={handleFieldChange('inquiryType')}
              className={`w-full px-4 py-2.5 rounded-lg border text-[13.5px] outline-none transition-all appearance-none pr-9 cursor-pointer${errors.inquiryType ? ' border-red-400 bg-red-50' : ' border-gray-200 bg-white focus:border-[var(--gold)]'}`}
              style={{ color: 'var(--ink)' }}
            >
              {INQUIRY_TYPES.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          {errors.inquiryType && <p className="text-red-500 text-[11.5px] mt-1">{errors.inquiryType}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-[12px] font-semibold mb-1.5" style={{ color: 'var(--ink)' }}>Message</label>
          <textarea
            rows={4}
            value={form.message}
            placeholder={MESSAGE_PLACEHOLDERS[form.inquiryType] ?? 'Let us know what you are interested in...'}
            onChange={handleFieldChange('message')}
            className={`w-full px-4 py-2.5 rounded-lg border text-[13.5px] outline-none transition-all resize-none${errors.message ? ' border-red-400 bg-red-50' : ' border-gray-200 bg-white focus:border-[var(--gold)]'}`}
            style={{ color: 'var(--ink)' }}
          />
          {errors.message && <p className="text-red-500 text-[11.5px] mt-1">{errors.message}</p>}
        </div>

        {submitError && <p className="text-red-500 text-[12px]">{submitError}</p>}

        <button
          type="submit"
          disabled={sending}
          className="w-full py-3 rounded-lg text-[13px] font-semibold cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 transition-all"
          style={{ background: 'var(--navy)', color: '#fff' }}
          onMouseEnter={e => { if (!sending) (e.currentTarget as HTMLElement).style.background = 'var(--navy-2)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--navy)' }}
        >
          {sending ? (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 0.8s linear infinite' }}>
                <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                <path d="M12 2a10 10 0 0 1 10 10" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send a message
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </>
          )}
        </button>
      </form>
    </>
  )

  return (
    <div>
      <Seo
        title="Contact Us | Get in Touch with Willstone Strategic Industries Limited"
        description="Contact Willstone Strategic Industries Limited in Ibadan, Nigeria. Reach our team for inquiries about agricultural commodity supply, software development, logistics, energy, or defence solutions."
        canonical="/contact"
        keywords={[
          'contact Willstone Strategic Industries', 'Ibadan Nigeria contact',
          'Nigerian supplier contact', 'agricultural export inquiry Nigeria',
          'IT company contact Ibadan', 'business inquiry Nigeria',
        ]}
        image="/assets/images/contact-us-image.png"
        jsonLd={CONTACT_JSON_LD}
      />
      <SiteHeader variant="solid" />

      {/* ── HERO + FORM ── */}
      <section className="bg-white" style={{ paddingTop: '88px' }}>
        <div className="w-full px-5 sm:px-10 lg:px-16 xl:px-24 pt-14 pb-8">
          <div className="max-w-screen-2xl mx-auto">
            <p className="eyebrow text-[11px] font-semibold flex items-center gap-3 mb-5" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> GET IN TOUCH
            </p>
            <h1
              className="display font-bold leading-[1.08]"
              style={{ color: 'var(--ink)', fontSize: 'clamp(2rem, 5vw, 3.6rem)', maxWidth: '680px' }}
            >
              Let&apos;s Work Together
            </h1>
          </div>
        </div>

        <div className="w-full px-5 sm:px-10 lg:px-16 xl:px-24 pb-16">
          <div className="max-w-screen-2xl mx-auto">
            {/* Mobile: form only */}
            <div className="md:hidden">
              <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 8px 32px rgba(11,27,51,0.10)', border: '1px solid #eaecf2' }}>
                {formContent}
              </div>
            </div>
            {/* Desktop: form + image */}
            <div className="hidden md:flex rounded-2xl overflow-hidden" style={{ minHeight: '560px', boxShadow: '0 20px 60px rgba(11,27,51,0.12)', border: '1px solid #eaecf2' }}>
              <div className="bg-white p-8 lg:p-10 flex flex-col justify-center" style={{ width: '520px', flexShrink: 0 }}>
                {formContent}
              </div>
              <div className="relative flex-1 min-h-full">
                <img
                  src="/assets/images/contact-us-image.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(270deg, rgba(6,15,31,.05) 0%, rgba(6,15,31,.18) 100%)' }} />
              </div>
            </div>
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
            style={{ background: '#0d1f3b', border: '1px solid rgba(201,162,75,0.25)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeSuccess}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.07)', color: '#fff' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,162,75,0.2)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{ background: 'rgba(201,162,75,0.12)', border: '1px solid rgba(201,162,75,0.3)' }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2" style={{ color: '#fff', fontFamily: 'var(--font-display, sans-serif)' }}>
              Message Sent!
            </h3>
            <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={closeSuccess}
              className="px-7 py-2.5 rounded-full text-sm font-semibold transition-colors"
              style={{ background: 'var(--gold)', color: '#1a1408' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold-light)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold)' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ── WE'RE ALWAYS HERE ── */}
      <section className="py-24 px-5 sm:px-10 lg:px-16 xl:px-24" style={{ background: '#f8f9fc' }}>
        <div className="max-w-screen-2xl mx-auto">

          {/* Section header */}
          <div className="max-w-xl mb-14">
            <p className="eyebrow text-[11px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
              <span className="gold-rule" /> REACH US
            </p>
            <h2 className="display font-bold leading-tight mb-4" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', color: 'var(--ink)' }}>
              We're always here<br />to help.
            </h2>
            <p className="text-slate-500 text-[14px] leading-relaxed">
              Reach out through any channel that works best for you. Our team is ready to discuss your needs and find the right solution.
            </p>
          </div>

          {/* 3-column contact cards + map */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

            {/* LEFT — 3 stacked contact cards */}
            <div className="flex flex-col gap-4">

              {/* Email */}
              <a
                href="mailto:info@willstonestrategic.com"
                className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-200"
                style={{ background: '#fff', border: '1px solid #e8ecf2', boxShadow: '0 2px 12px rgba(11,27,51,0.06)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,162,75,0.4)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(11,27,51,0.10)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e8ecf2'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(11,27,51,0.06)' }}
              >
                <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl" style={{ background: 'rgba(11,27,51,0.07)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10.5px] font-bold tracking-widest uppercase mb-1.5" style={{ color: 'var(--gold)' }}>Email Us</p>
                  <p className="text-[13px] font-medium leading-relaxed" style={{ color: 'var(--ink)' }}>info@willstonestrategic.com</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+2347061964340"
                className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-200"
                style={{ background: '#fff', border: '1px solid #e8ecf2', boxShadow: '0 2px 12px rgba(11,27,51,0.06)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,162,75,0.4)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(11,27,51,0.10)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e8ecf2'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(11,27,51,0.06)' }}
              >
                <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl" style={{ background: 'rgba(11,27,51,0.07)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2L8 9.6a16 16 0 006 6l1.2-1.5a2 2 0 012-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10.5px] font-bold tracking-widest uppercase mb-1.5" style={{ color: 'var(--gold)' }}>Call Us</p>
                  <p className="text-[13px] font-medium" style={{ color: 'var(--ink)' }}>+234 706 196 4340</p>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://maps.app.goo.gl/ZjZ5eCgY7MjJnvvj6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-200"
                style={{ background: '#fff', border: '1px solid #e8ecf2', boxShadow: '0 2px 12px rgba(11,27,51,0.06)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,162,75,0.4)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(11,27,51,0.10)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e8ecf2'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(11,27,51,0.06)' }}
              >
                <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl" style={{ background: 'rgba(11,27,51,0.07)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2">
                    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10.5px] font-bold tracking-widest uppercase mb-1.5" style={{ color: 'var(--gold)' }}>Visit Us</p>
                  <p className="text-[13px] font-medium leading-snug" style={{ color: 'var(--ink)' }}>
                    20 Cambridge House, Onireke Jericho, Ibadan - Oyo State, Nigeria
                  </p>
                </div>
              </a>

            </div>

            {/* RIGHT — map spans 2 columns */}
            <div
              className="lg:col-span-2 rounded-2xl overflow-hidden"
              style={{ minHeight: '420px', border: '1px solid #e8ecf2', boxShadow: '0 4px 24px rgba(11,27,51,0.08)' }}
            >
              <iframe
                title="Willstone Strategic Industries Limited location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.589121213974!2d3.8767668999999993!3d7.399849499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d17c93da759%3A0x9673f63345eff0d7!2sJoop%20Berkhout%20Cres%2C%20Ibadan%20200284%2C%20Oyo!5e0!3m2!1sen!2sng!4v1787437492114!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-5 sm:px-10 lg:px-16 xl:px-24" style={{ background: 'rgba(11,27,51,0.06)' }}>
        <div className="max-w-screen-2xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">

            {/* LEFT — sticky label */}
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-[11px] font-semibold flex items-center gap-3 mb-4" style={{ color: 'var(--gold)' }}>
                <span className="gold-rule" /> FAQ
              </p>
              <h2 className="display font-bold leading-tight mb-4" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', color: 'var(--ink)' }}>
                Frequently asked<br />questions
              </h2>
              <p className="text-[13.5px] leading-relaxed mb-8 text-slate-500">
                Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
              </p>
              <a
                href="#"
                onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-colors"
                style={{ background: 'var(--gold)', color: '#1a1408' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold-light)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold)' }}
              >
                Ask a question
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            {/* RIGHT — accordion */}
            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden transition-all duration-200"
                  style={{
                    background: openFaq === i ? '#fff' : 'rgba(255,255,255,0.7)',
                    border: `1px solid ${openFaq === i ? 'rgba(201,162,75,0.45)' : '#e2e8f0'}`,
                    boxShadow: openFaq === i ? '0 4px 20px rgba(11,27,51,0.08)' : 'none',
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-[14px] font-semibold leading-snug" style={{ color: 'var(--ink)' }}>{faq.q}</span>
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                      style={{
                        background: openFaq === i ? 'var(--gold)' : 'rgba(11,27,51,0.08)',
                        color: openFaq === i ? '#1a1408' : 'var(--navy)',
                      }}
                    >
                      <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <div className="h-px mb-4" style={{ background: 'rgba(201,162,75,0.25)' }} />
                      <p className="text-[13.5px] leading-relaxed text-slate-500">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
