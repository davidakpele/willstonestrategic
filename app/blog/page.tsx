import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import BlogHero from '@/components/blog/BlogHero'
import NewsletterCTA from '@/components/blog/NewsletterCTA'
import BlogListClient from '@/components/blog/BlogListClient'
import '../willstone.css'

const BASE = 'https://willstonestrategic.com'

const POSTS = [
  {
    id: 'global-connections',
    title: 'Global Connections, Local Impact',
    category: 'Industry Insights',
    date: 'May 20, 2024',
    readTime: '5 min read',
    excerpt: 'How strategic partnerships and global networks drive sustainable growth and long-term value.',
    image: '/assets/images/about-banner.png',
    href: '/blog/global-connections-local-impact',
  },
  {
    id: 'building-supply-chains',
    title: 'Building Resilient Supply Chains',
    category: 'Logistics & Supply Chain',
    date: 'May 15, 2024',
    readTime: '6 min read',
    excerpt: 'Best practices for creating agile and resilient supply chains in a dynamic global market.',
    image: '/assets/images/contact-us-image.png',
    href: '/blog/building-resilient-supply-chains',
  },
  {
    id: 'partnerships-drive-progress',
    title: 'Partnerships That Drive Progress',
    category: 'Business Strategy',
    date: 'May 10, 2024',
    readTime: '4 min read',
    excerpt: 'Why collaboration and trust are at the heart of every successful business.',
    image: '/assets/images/NavItem.png',
    href: '/blog/partnerships-that-drive-progress',
  },
  {
    id: 'sustainable-solutions',
    title: 'Sustainable Solutions for a Better Tomorrow',
    category: 'Sustainability',
    date: 'May 5, 2024',
    readTime: '5 min read',
    excerpt: "Our commitment to responsible practices and a sustainable future for communities.",
    image: '/assets/images/about.png',
    href: '/blog/sustainable-solutions-better-tomorrow',
  },
  {
    id: 'innovation-core',
    title: 'Innovation at the Core of What We Do',
    category: 'Innovation',
    date: 'Apr 28, 2024',
    readTime: '4 min read',
    excerpt: 'Leveraging innovation and technology to deliver smarter solutions for our clients.',
    image: '/assets/images/about-banner.png',
    href: '/blog/innovation-at-core',
  },
  {
    id: 'willstone-business-update',
    title: 'Willstone Business Update - Q2 2024',
    category: 'Company News',
    date: 'Apr 20, 2024',
    readTime: '3 min read',
    excerpt: 'A look at our recent milestones, expansions, and the road ahead.',
    image: '/assets/images/contact-us-image.png',
    href: '/blog/willstone-business-update-q2-2024',
  },
]

export const metadata: Metadata = {
  title: 'Blog | Industry Insights & Company News — Willstone Strategic Industries',
  description: 'Read the latest insights, industry updates, thought leadership articles, and company news from Willstone Strategic Industries Limited — covering agribusiness, technology, logistics, energy, and more.',
  keywords: [
    'Willstone blog', 'agribusiness news Nigeria',
    'commodity trading insights', 'logistics Nigeria news',
    'technology Nigeria blog', 'Nigerian business insights',
    'Willstone Strategic Industries news', 'supply chain Africa',
    'export Nigeria articles', 'industry trends Nigeria',
  ],
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    title: 'Blog | Willstone Strategic Industries Limited',
    description: 'Industry insights, thought leadership, and company news from Willstone — covering agribusiness, technology, logistics, energy, and more.',
    url: `${BASE}/blog`,
    siteName: 'Willstone Strategic Industries Limited',
    images: [{ url: `${BASE}/assets/images/about-banner.png`, width: 1200, height: 630, alt: 'Willstone Strategic Industries Blog' }],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Willstone Strategic Industries Limited',
    description: 'Industry insights and company news from Willstone — agribusiness, technology, logistics, energy.',
    images: [`${BASE}/assets/images/about-banner.png`],
  },
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            '@id': `${BASE}/blog#blog`,
            'url': `${BASE}/blog`,
            'name': 'Willstone Strategic Industries Blog',
            'description': 'Industry insights, thought leadership, and company news from Willstone Strategic Industries Limited.',
            'publisher': { '@id': `${BASE}/#organization` },
            'inLanguage': 'en-NG',
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
                { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${BASE}/blog` },
              ],
            },
            'blogPost': POSTS.map((post, i) => ({
              '@type': 'BlogPosting',
              'position': i + 1,
              'headline': post.title,
              'description': post.excerpt,
              'url': `${BASE}${post.href}`,
              'datePublished': post.date,
              'articleSection': post.category,
              'author': { '@id': `${BASE}/#organization` },
              'publisher': { '@id': `${BASE}/#organization` },
            })),
          }),
        }}
      />
      <div>
        <SiteHeader variant="solid" />
        <BlogHero />
        <main className="max-w-screen-2xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 py-12">
          <BlogListClient posts={POSTS} />
        </main>
        <NewsletterCTA />
        <SiteFooter />
      </div>
    </>
  )
}
