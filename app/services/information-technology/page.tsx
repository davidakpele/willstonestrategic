import { Space_Grotesk, Inter } from 'next/font/google'
import type { Metadata } from 'next'
import '../../willstone.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ITPageClient from './ITPageClient'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Information Technology & Software Solutions | Willstone Strategic Industries',
  description:
    'Custom software development, cloud solutions, system integration, cybersecurity and IT services — built to power your business.',
}

export default function ITPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <SiteHeader variant="transparent" />
      <ITPageClient />
      <SiteFooter />
    </div>
  )
}
