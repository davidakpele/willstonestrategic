import { useEffect } from 'react'

type SeoProps = {
  title?: string
  description?: string
  canonical?: string
  keywords?: string[]
  image?: string
  type?: string
  locale?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

const DEFAULT_TITLE = 'Willstone Strategic Industries Limited | Supplier, Exporter & Procurement Partner — Nigeria'
const DEFAULT_DESCRIPTION =
  'Willstone Strategic Industries Limited supplies agricultural commodities, logistics, procurement, technology, energy, and industrial solutions from Nigeria to global markets.'
const SITE_NAME = 'Willstone Strategic Industries Limited'
const SITE_URL = 'https://willstonestrategic.com'

function ensureMeta(tagName: string, attribute: 'name' | 'property', content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${tagName}"]`) as HTMLMetaElement | null

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, tagName)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function ensureLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  keywords = [],
  image = '/assets/images/prime-banner.png',
  type = 'website',
  locale = 'en_NG',
  jsonLd,
}: SeoProps) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
  const pageUrl = canonical ? `${SITE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}` : `${SITE_URL}${window.location.pathname}`

  useEffect(() => {
    document.title = pageTitle

    ensureMeta('description', 'name', description)
    ensureMeta('robots', 'name', 'index,follow,max-image-preview:large,max-snippet:-1')
    ensureMeta('og:type', 'property', type)
    ensureMeta('og:title', 'property', pageTitle)
    ensureMeta('og:description', 'property', description)
    ensureMeta('og:url', 'property', pageUrl)
    ensureMeta('og:site_name', 'property', SITE_NAME)
    ensureMeta('og:image', 'property', `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`)
    ensureMeta('og:locale', 'property', locale)
    ensureMeta('twitter:card', 'name', 'summary_large_image')
    ensureMeta('twitter:title', 'name', pageTitle)
    ensureMeta('twitter:description', 'name', description)
    ensureMeta('twitter:image', 'name', `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`)

    if (keywords.length > 0) {
      ensureMeta('keywords', 'name', keywords.join(', '))
    }

    ensureLink('canonical', pageUrl)

    if (jsonLd) {
      let scriptTag = document.head.querySelector('script[data-seo-jsonld="true"]') as HTMLScriptElement | null

      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.setAttribute('type', 'application/ld+json')
        scriptTag.setAttribute('data-seo-jsonld', 'true')
        document.head.appendChild(scriptTag)
      }

      scriptTag.textContent = JSON.stringify(jsonLd)
    }
  }, [canonical, description, image, jsonLd, keywords, locale, pageTitle, pageUrl, type])

  return null
}

export const seoDefaults = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
}
