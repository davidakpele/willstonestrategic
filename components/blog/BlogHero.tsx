'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogHero() {
  return (
    <section className="bg-[#071633] text-white" style={{ paddingTop: 96 }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-16 grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <p className="eyebrow text-[11px] font-semibold mb-3" style={{ color: 'var(--gold)' }}>OUR BLOG</p>
          <h1 className="display font-semibold text-[32px] sm:text-[40px] leading-tight mb-4">Insights. Ideas. Impact.</h1>
          <p className="text-white/75 max-w-xl">Stay informed with expert insights, industry updates, and valuable perspectives from the Willstone team.</p>
        </div>

        <div className="hidden md:block">
          <div className="rounded-lg overflow-hidden" style={{ height: 200 }}>
            <Image src="/assets/images/logo/PNG/Willstone-Logo-White.png" alt="Willstone" width={420} height={200} className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
