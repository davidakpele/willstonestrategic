import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import BlogHero from '@/components/blog/BlogHero'
import NewsletterCTA from '@/components/blog/NewsletterCTA'
import BlogListClient from '@/components/blog/BlogListClient'
import '../willstone.css'

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

export const metadata = {
  title: 'Blog | Willstone Strategic Industries Limited',
  description: 'Insights, ideas, and impact from Willstone — industry updates, thought leadership, and company news.',
}

export default function BlogPage() {
  return (
    <div>
      <SiteHeader variant="solid" />

      <BlogHero />

      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
        {/* Blog list + sidebar client-side */}
        <BlogListClient posts={POSTS} />
      </main>

      <NewsletterCTA />

      <SiteFooter />
    </div>
  )
}
