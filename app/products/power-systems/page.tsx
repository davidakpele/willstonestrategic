import type { Metadata } from 'next'
import Link from 'next/link'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Power Systems | Willstone',
  description: 'Modular power solutions, generators and solar systems for commercial and industrial use.',
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })

export default function PowerSystemsPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      <SiteHeader variant="solid" />

      <main style={{ paddingTop: 96 }} className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <h1 className="display font-semibold text-[26px] mb-3" style={{ color: 'var(--ink)' }}>Power & Energy Solutions</h1>
        <p className="text-slate-500 leading-relaxed mb-6">Willstone supplies modular power solutions including solar, storage and generator systems tailored to commercial and industrial needs. We handle design, procurement, installation and maintenance through trusted partners.</p>

        <h2 className="font-semibold mt-6 mb-2">Applications</h2>
        <ul className="list-disc ml-5 text-slate-500 mb-6">
          <li>Commercial & industrial backup power</li>
          <li>Solar + storage microgrids</li>
          <li>Site assessments and O&M services</li>
        </ul>

        <div className="flex gap-3">
          <Link href="/products" className="btn-outline-gold px-4 py-2 rounded-lg">Back to products</Link>
          <Link href="/contact" className="btn-gold px-4 py-2 rounded-lg">Contact Sales</Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
