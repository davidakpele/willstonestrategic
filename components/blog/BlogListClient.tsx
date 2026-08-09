'use client'

import { useEffect, useMemo, useState } from 'react'
import BlogCard from './BlogCard'
import Link from 'next/link'

interface Post { id: string; title: string; category: string; date: string; readTime: string; excerpt: string; image: string; href: string }

export default function BlogListClient({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [page, setPage] = useState(1)
  const pageSize = 6

  const categories = useMemo(() => ['All Categories', ...Array.from(new Set(posts.map(p => p.category)))], [posts])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter(p => {
      if (category !== 'All Categories' && p.category !== category) return false
      if (!q) return true
      return p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    })
  }, [posts, query, category])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))

  useEffect(() => { setPage(1) }, [query, category])

  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize)

  const popular = posts.slice(0, 3)

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-[18px]">Latest Articles</h2>
          <div>
            <select value={category} onChange={e => setCategory(e.target.value)} className="contact-input">
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pageItems.map(p => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>

        {/* pagination */}
        <div className="flex items-center justify-center mt-8 gap-2">
          <button onClick={() => setPage(1)} disabled={page === 1} className="px-3 py-1 rounded border">1</button>
          <button onClick={() => setPage(prev => Math.max(1, prev - 1))} disabled={page === 1} className="px-3 py-1 rounded border">Prev</button>
          <span className="px-3 py-1">Page {page} of {totalPages}</span>
          <button onClick={() => setPage(prev => Math.min(totalPages, prev + 1))} disabled={page === totalPages} className="px-3 py-1 rounded border">Next</button>
          <button onClick={() => setPage(totalPages)} disabled={page === totalPages} className="px-3 py-1 rounded border">{totalPages}</button>
        </div>
      </div>

      {/* Sidebar */}
      <aside>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <input
              type="search"
              placeholder="Search articles..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="contact-input p-3"
            />
            <button className="btn-gold px-3 py-2">Search</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-3">Categories</h4>
            <ul className="space-y-2 text-[14px]">
              {categories.map(c => (
                <li key={c}>
                  <button onClick={() => setCategory(c)} className={`w-full text-left p-2 rounded ${category === c ? 'bg-[#0b1b33] text-white' : 'text-slate-600'}`}>
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h4 className="font-semibold mb-3">Popular Posts</h4>
          <ul className="space-y-3">
            {popular.map(p => (
              <li key={p.id} className="flex items-center gap-3">
                <img src={p.image} alt="" className="w-14 h-10 object-cover rounded" />
                <div>
                  <Link href={p.href} className="font-semibold text-[14px]">{p.title}</Link>
                  <div className="text-[12px] text-slate-400">{p.date}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <Link href="/blog" className="text-[13px] font-semibold" style={{ color: 'var(--gold)' }}>View all posts →</Link>
          </div>
        </div>

      </aside>
    </div>
  )
}
