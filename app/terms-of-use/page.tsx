import type { Metadata } from 'next'
import Link from 'next/link'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Terms of Use | Willstone Strategic Industries Limited',
  description: 'Terms of Use for willstonestrategic.com — the official website of Willstone Strategic Industries Limited.',
  alternates: { canonical: 'https://willstonestrategic.com/terms-of-use' },
  robots: { index: true, follow: false },
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })

export default function TermsOfUsePage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-body,sans-serif)' }}>
      <SiteHeader variant="solid" />
      <main className="max-w-3xl mx-auto px-5 sm:px-8 py-24" style={{ paddingTop: 128 }}>
        <nav className="flex items-center gap-2 mb-8 text-[12px] text-slate-400">
          <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--ink)' }}>Terms of Use</span>
        </nav>
        <h1 className="display font-semibold text-[28px] mb-2" style={{ color: 'var(--ink)' }}>Terms of Use</h1>
        <p className="text-slate-400 text-[13px] mb-10">Last updated: August 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-slate-600">
          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>1. Acceptance of terms</h2>
            <p>By accessing or using <strong>willstonestrategic.com</strong> (&ldquo;the Site&rdquo;), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.</p>
          </section>

          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>2. About the Site</h2>
            <p>This Site is operated by Willstone Strategic Industries Limited, a company incorporated in Nigeria. The Site provides information about our products, services, and business activities. It is not an e-commerce platform and does not facilitate direct online transactions.</p>
          </section>

          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>3. Accuracy of information</h2>
            <p>We make reasonable efforts to ensure the information on this Site is accurate and current. However, product availability, specifications, and pricing are subject to change without notice. All product enquiries should be confirmed directly with our team before any purchase decision.</p>
          </section>

          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>4. Intellectual property</h2>
            <p>All content on this Site — including text, images, logos, and layout — is the property of Willstone Strategic Industries Limited or its licensors and is protected by applicable intellectual property law. You may not reproduce, distribute, or use any content without our prior written consent.</p>
          </section>

          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>5. Limitation of liability</h2>
            <p>To the extent permitted by law, Willstone Strategic Industries Limited shall not be liable for any indirect, incidental, or consequential loss arising from your use of or reliance on information provided on this Site.</p>
          </section>

          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>6. Governing law</h2>
            <p>These Terms of Use are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts of Oyo State, Nigeria.</p>
          </section>

          <section>
            <h2 className="display font-semibold text-[18px] mb-3" style={{ color: 'var(--ink)' }}>7. Contact</h2>
            <p>Questions about these terms may be directed to <a href="mailto:willstonestrategic@gmail.com" className="underline" style={{ color: 'var(--gold)' }}>willstonestrategic@gmail.com</a>.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
