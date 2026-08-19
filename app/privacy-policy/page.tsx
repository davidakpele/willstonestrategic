import type { Metadata } from 'next'
import Link from 'next/link'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Privacy Policy | Willstone Strategic Industries Limited',
  description: 'Privacy Policy for Willstone Strategic Industries Limited — how we collect, use, and protect personal information on willstonestrategic.com.',
  alternates: { canonical: 'https://willstonestrategic.com/privacy-policy' },
  robots: { index: true, follow: false },
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })

export default function PrivacyPolicyPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-body,sans-serif)' }}>
      <SiteHeader variant="solid" />
      <main className="max-w-3xl mx-auto px-5 sm:px-8 py-24" style={{ paddingTop: 128 }}>
        <nav className="flex items-center gap-2 mb-8 text-[12px] text-slate-400">
          <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--ink)' }}>Privacy Policy</span>
        </nav>
        <h1 className="display font-semibold text-[28px] mb-2" style={{ color: 'var(--ink)' }}>Privacy Policy</h1>
        <p className="text-slate-400 text-[13px] mb-10">Last updated: August 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-[15px] leading-relaxed text-slate-600">
          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>1. Who we are</h2>
            <p>Willstone Strategic Industries Limited (&ldquo;Willstone&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a company registered in Nigeria, headquartered at 20 Cambridge House, Onireke Jericho, Ibadan, Oyo State. This privacy policy explains how we handle personal information collected through <strong>willstonestrategic.com</strong> and our business communications.</p>
          </section>

          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>2. Information we collect</h2>
            <p>We collect information you voluntarily provide when you contact us or submit an enquiry, including:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Name and contact details (email address, phone number)</li>
              <li>Company name and role (where provided)</li>
              <li>The content of your message or enquiry</li>
            </ul>
            <p className="mt-3">We also collect standard technical data automatically when you visit our website (e.g. browser type, pages visited, referring URL) through server logs and analytics tools.</p>
          </section>

          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>3. How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Respond to your enquiries and provide quotations</li>
              <li>Communicate with you about our products and services</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>4. Data retention</h2>
            <p>We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law.</p>
          </section>

          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>5. Your rights</h2>
            <p>You may contact us at any time to request access to, correction of, or deletion of personal information we hold about you. Please write to us at <a href="mailto:willstonestrategic@gmail.com" className="underline" style={{ color: 'var(--gold)' }}>willstonestrategic@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>6. Contact</h2>
            <p>For any privacy-related questions, please contact us at <a href="mailto:willstonestrategic@gmail.com" className="underline" style={{ color: 'var(--gold)' }}>willstonestrategic@gmail.com</a> or by post at our registered address in Ibadan, Nigeria.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
