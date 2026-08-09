import type { Metadata } from 'next'
import Link from 'next/link'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Products | Willstone Strategic Industries Limited',
  description: 'Overview of Willstone products — Agri inputs, power systems, logistics platform and more.',
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })

export default function ProductsPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      <SiteHeader variant="solid" />

      <main style={{ paddingTop: 96 }} className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <header className="text-center mb-10">
          <p className="eyebrow text-[11px] font-semibold mb-3" style={{ color: 'var(--gold)' }}>OUR PRODUCTS</p>
          <h1 className="display font-semibold text-[28px]" style={{ color: 'var(--ink)' }}>Products & Solutions</h1>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Products that complement our services and deliver practical value — from agri inputs to power systems and logistics platforms.</p>
        </header>

        <div className="grid sm:grid-cols-3 gap-6">
          <Link href="/products/agri-inputs" className="contact-card">
            <h3 className="font-semibold mb-2">Agri Inputs</h3>
            <p className="text-slate-500 text-[14px]">Seeds, fertilizers and farm inputs sourced and distributed across Nigeria to support higher yields.</p>
          </Link>

          <Link href="/products/power-systems" className="contact-card">
            <h3 className="font-semibold mb-2">Power Systems</h3>
            <p className="text-slate-500 text-[14px]">Modular power solutions, generators and solar systems for commercial and industrial use.</p>
          </Link>

          <Link href="/products/logistics-platform" className="contact-card">
            <h3 className="font-semibold mb-2">Logistics Platform</h3>
            <p className="text-slate-500 text-[14px]">Digital and physical logistics services connecting suppliers and markets efficiently.</p>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="btn-gold px-6 py-2.5 rounded-full">Contact Sales</Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
