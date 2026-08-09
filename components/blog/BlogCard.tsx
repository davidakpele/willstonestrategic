'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard({ post }: { post: any }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div style={{ height: 160, position: 'relative' }}>
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <p className="text-[11px] font-semibold mb-2" style={{ color: 'var(--gold)' }}>{post.category}</p>
        <h3 className="font-semibold text-[16px] mb-2"><Link href={post.href}>{post.title}</Link></h3>
        <p className="text-slate-500 text-[14px] mb-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-[12px] text-slate-400">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  )
}
