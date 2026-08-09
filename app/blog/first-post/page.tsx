import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Introducing Willstone — Building Solutions, Delivering Impact',
  description: 'An introduction to Willstone Strategic Industries — who we are and what we do.',
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })

export default function FirstPost() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      <SiteHeader variant="solid" />

      <main style={{ paddingTop: 96 }} className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <h1 className="display font-semibold text-[26px] mb-4" style={{ color: 'var(--ink)' }}>Introducing Willstone: Building Solutions, Delivering Impact</h1>
        <p className="text-slate-500 mb-6">Welcome to the Willstone blog. This space will share company updates, sector insights and case studies about our work across technology, agriculture, energy and logistics.</p>

        <section className="prose text-slate-700">
          <p>Willstone Strategic Industries Limited is a diversified Nigerian enterprise delivering integrated solutions across multiple sectors. We combine local knowledge with global best-practice to design and deliver projects that drive economic growth and create meaningful impact.</p>

          <h3>What to expect</h3>
          <ul>
            <li>Announcements about our projects and partnerships</li>
            <li>Practical insights on technology, agriculture and energy</li>
            <li>Case studies and lessons learned from the field</li>
          </ul>

          <p className="mt-6">Stay tuned — more articles will be published here soon. If you have topic suggestions, <a href="/contact" style={{ color: 'var(--gold)' }}>get in touch</a>.</p>
        </section>

        <div className="mt-8">
          <a href="/blog" className="btn-outline-gold px-4 py-2 rounded-lg">Back to blog</a>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
