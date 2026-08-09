import type { Metadata } from 'next'
import Link from 'next/link'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Logistics Platform | Willstone',
  description: 'Digital and physical logistics services to connect suppliers and markets efficiently.',
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })

export default function LogisticsPlatformPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      <SiteHeader variant="solid" />

      <main style={{ paddingTop: 96 }} className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <h1 className="display font-semibold text-[26px] mb-3" style={{ color: 'var(--ink)' }}>Logistics Platform</h1>
        <p className="text-slate-500 leading-relaxed mb-6">A combined digital and physical logistics offering to help businesses move goods reliably. Our platform connects shippers, carriers and warehouses for better visibility and cost control.</p>

        <h2 className="font-semibold mt-6 mb-2">Features</h2>
        <ul className="list-disc ml-5 text-slate-500 mb-6">
          <li>Order tracking and routing</li>
          <li>Partner network of carriers and warehouses</li>
          <li>Cold chain and aggregated distribution</li>
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
