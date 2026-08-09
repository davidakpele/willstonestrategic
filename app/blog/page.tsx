import type { Metadata } from 'next'
import Link from 'next/link'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Blog | Willstone Strategic Industries Limited',
  description: 'Insights, updates and articles from Willstone Strategic Industries.',
}

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })

const POSTS = [
  { title: 'Introducing Willstone: Building Solutions, Delivering Impact', href: '/blog/first-post', excerpt: 'A quick overview of our mission and the industries we serve.' },
]

export default function BlogPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-body, sans-serif)' }}>
      <SiteHeader variant="solid" />

      <main style={{ paddingTop: 96 }} className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <header className="text-center mb-10">
          <p className="eyebrow text-[11px] font-semibold mb-3" style={{ color: 'var(--gold)' }}>BLOG</p>
          <h1 className="display font-semibold text-[28px]" style={{ color: 'var(--ink)' }}>Insights & Updates</h1>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Thought leadership, company news and insights from across our sectors.</p>
        </header>

        <div className="space-y-6">
          {POSTS.map((p) => (
            <article key={p.href} className="contact-card">
              <h3 className="font-semibold text-[18px] mb-1"><Link href={p.href}>{p.title}</Link></h3>
              <p className="text-slate-500 mb-3">{p.excerpt}</p>
              <Link href={p.href} className="text-[13px] font-semibold" style={{ color: 'var(--gold)' }}>Read article →</Link>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
