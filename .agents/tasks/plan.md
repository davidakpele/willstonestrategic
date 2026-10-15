# Implementation Plan
## Convert Products, Agri-Inputs, and Agriculture-Agribusiness pages to React + Vite

### Context

**Target project:** `c:\Users\USER\OneDrive\Desktop\willstone`
- React 19 + TypeScript + Vite 8 + TailwindCSS v4 + `react-router-dom` v7
- `lucide-react` v1.57.0 is already installed — can import `ChevronLeft`, `ChevronRight`, `ZoomIn`, `X`, `SlidersHorizontal`, `GitBranch`, `BadgeCheck`, `Truck` directly.
- No `next/image` → use plain `<img>` with `style` or className for sizing.
- No `next/link` → use `<Link>` from `react-router-dom` (or `<a href>` for external/hash anchors, as already done in the existing pages).
- No `next/navigation` → use `useParams` and `useNavigate` from `react-router-dom`.
- No `notFound()` → render a fallback or redirect to `/products/agri-inputs`.
- No `Metadata` / `generateStaticParams` → omit entirely (React SPA).
- `@/` path aliases are **not** configured in the Vite project — use relative imports like the existing pages do (`'../components/SiteHeader'`).
- CSS lives in `src/index.css`; no separate `willstone.css` import is needed.
- The `btn-outline-gold` CSS class is used in the Next.js source but **not** defined in `src/index.css` — it must be added.
- Source files are **READ-ONLY**; write only to the `willstone` project.

**Build command:** `npm run build` (runs `tsc -b && vite build`)
**Dev command:** `npm run dev`
**Test:** no automated tests exist; verification = `npm run build` passes with 0 errors.

---

### Files to create

| # | New file | Converted from |
|---|----------|----------------|
| 1 | `src/data/agriProducts.ts` | `lib/agriProducts.ts` |
| 2 | `src/components/AgriProductsGallery.tsx` | `components/agri/AgriProductsGallery.tsx` |
| 3 | `src/components/ProductsCatalogue.tsx` | `components/products/ProductsCatalogue.tsx` |
| 4 | `src/pages/ProductsPage.tsx` | `app/products/page.tsx` |
| 5 | `src/pages/AgriInputsPage.tsx` | `app/products/agri-inputs/page.tsx` |
| 6 | `src/pages/AgriProductDetailPage.tsx` | `app/products/agri-inputs/[slug]/page.tsx` |
| 7 | `src/pages/AgricultureAgribusinessPage.tsx` | `app/services/agriculture-agribusiness/AgriculturePageClient.tsx` |

**Files to modify:**
- `src/App.tsx` — add 4 new routes
- `src/index.css` — add `btn-outline-gold` class

---

## Step 1 — Add `btn-outline-gold` CSS class to `src/index.css`

The Next.js source uses `btn-outline-gold` in two places (`ProductsPage` and `AgriInputsPage`) but this class doesn't exist in `src/index.css`. Add it after the existing `.btn-gold` block.

**What to add in `src/index.css`** (after the `.btn-gold:hover` rule):

```css
.btn-outline-gold {
  background: transparent;
  color: var(--gold);
  font-weight: 600;
  border: 1.5px solid var(--gold);
  box-shadow: none;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}
.btn-outline-gold:hover {
  background: rgba(201, 162, 75, 0.1);
  transform: translateY(-2px);
}
```

Files: `c:\Users\USER\OneDrive\Desktop\willstone\src\index.css`
Verify: `npm run build` — no TypeScript or Vite errors.

---

## Step 2 — Create `src/data/agriProducts.ts`

Copy the `PRODUCTS` array and all interfaces verbatim from `lib/agriProducts.ts`. No Next.js APIs exist in this file — it is pure TypeScript data. The only change is the file path/location.

Files: `c:\Users\USER\OneDrive\Desktop\willstone\src\data\agriProducts.ts`

API changes:
- None. Pure data file, no framework imports.

Verify: `npm run build` — compiles cleanly.

---

## Step 3 — Create `src/components/AgriProductsGallery.tsx`

Convert `components/agri/AgriProductsGallery.tsx`.

**API replacements:**
- `import Image from 'next/image'` → remove; use `<img>` instead
- `import Link from 'next/link'` → `import { Link } from 'react-router-dom'`
- `import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'` → keep as-is (lucide-react is installed)
- `import { PRODUCTS, type AgriProduct } from '@/lib/agriProducts'` → `import { PRODUCTS, type AgriProduct } from '../data/agriProducts'`
- Remove `'use client'` directive (not needed in React)
- Remove the re-export at the bottom: `export { PRODUCTS } from '@/lib/agriProducts'` (import directly in consumer files instead)

**`<Image>` → `<img>` conversions inside this file:**

1. Modal product image (inside `ProductModal`):
   ```tsx
   // Before (next/image with fill):
   <Image src={product.src} alt={product.name} fill className="object-cover" sizes="..." priority />
   
   // After:
   <img
     src={product.src}
     alt={product.name}
     style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
   />
   ```
   The parent `<div>` already has `position: relative` and `minHeight: 260` — add `overflow: hidden` to it.

2. Gallery grid tile images:
   ```tsx
   // Before (next/image with fill):
   <Image src={product.src} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.07]" sizes="..." />
   
   // After:
   <img
     src={product.src}
     alt={product.name}
     className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
     style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
   />
   ```

**`<Link>` change in `ProductModal`:**
- `href={...}` prop stays the same; `react-router-dom` Link uses `to` not `href`.
  ```tsx
  // Before:
  <Link href={`/products/agri-inputs/${product.slug}`} ...>
  // After:
  <Link to={`/products/agri-inputs/${product.slug}`} ...>
  ```
- Remove the `onMouseEnter`/`onMouseLeave` inline style handlers on the Link (or convert to className-based hover — the simplest option is to keep them as-is since `react-router-dom` Link forwards all props).

Files: `c:\Users\USER\OneDrive\Desktop\willstone\src\components\AgriProductsGallery.tsx`
Verify: `npm run build` — no errors.

---

## Step 4 — Create `src/components/ProductsCatalogue.tsx`

Convert `components/products/ProductsCatalogue.tsx`.

**API replacements:**
- `import Image from 'next/image'` → remove; use `<img>`
- `import Link from 'next/link'` → `import { Link } from 'react-router-dom'`
- `import { X, ChevronLeft, ChevronRight, ZoomIn, SlidersHorizontal } from 'lucide-react'` → keep as-is
- Remove `'use client'` directive

**`<Image>` → `<img>` conversions:**

1. Modal product image (inside `ProductModal`):
   ```tsx
   // After:
   <img
     src={product.src}
     alt={product.name}
     style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
   />
   ```
   Ensure the parent `<div>` (already `w-full md:w-[52%] flex-shrink-0`, `minHeight: 260`) has `position: 'relative'` and `overflow: 'hidden'` in its style.

2. Product card grid images:
   ```tsx
   // After:
   <img
     src={product.src}
     alt={product.name}
     className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
     style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
   />
   ```
   The parent container already has `height: 200` and `relative overflow-hidden`.

**`<Link>` in `ProductModal`:**
- Change `href="/contact"` → `to="/contact"`.

Files: `c:\Users\USER\OneDrive\Desktop\willstone\src\components\ProductsCatalogue.tsx`
Verify: `npm run build` — no errors.

---

## Step 5 — Create `src/pages/ProductsPage.tsx`

Convert `app/products/page.tsx` (the Next.js server component).

**API replacements:**
- Remove `import type { Metadata } from 'next'` and the entire `export const metadata` block
- `import Image from 'next/image'` → remove; use `<img>`
- `import Link from 'next/link'` → `import { Link } from 'react-router-dom'`
- `import '../willstone.css'` → remove (CSS is global via `src/index.css`)
- `import SiteHeader from '@/components/SiteHeader'` → `import SiteHeader from '../components/SiteHeader'`
- `import SiteFooter from '@/components/SiteFooter'` → `import SiteFooter from '../components/SiteFooter'`
- `import ProductsCatalogue from '@/components/products/ProductsCatalogue'` → `import ProductsCatalogue from '../components/ProductsCatalogue'`
- Function `export default function ProductsPage()` — keep as-is

**`<Image>` → `<img>` conversion (hero banner):**
```tsx
// Before:
<div className="absolute inset-0">
  <Image src="/assets/images/banner.png" alt="Willstone products" fill className="object-cover object-center" priority sizes="100vw" />
  <div className="absolute inset-0" style={{ background: '...' }} />
</div>

// After:
<div className="absolute inset-0" style={{ overflow: 'hidden' }}>
  <img
    src="/assets/images/banner.png"
    alt="Willstone products"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
  />
  <div className="absolute inset-0" style={{ background: '...' }} />
</div>
```

**`<Link>` changes:**
All `<Link href="...">` → `<Link to="...">` for internal paths.
- `<Link href="/" ...>` → `<Link to="/" ...>`
- `<Link href="/contact" ...>` → `<Link to="/contact" ...>`
- `<Link href="/services/agriculture-agribusiness" ...>` → `<Link to="/services/agriculture-agribusiness" ...>`
- The `href="#catalogue"` anchor pills remain as `<a href="#catalogue">` (hash links, not router Links).

Files: `c:\Users\USER\OneDrive\Desktop\willstone\src\pages\ProductsPage.tsx`
Verify: `npm run build` — no errors.

---

## Step 6 — Create `src/pages/AgriInputsPage.tsx`

Convert `app/products/agri-inputs/page.tsx`.

**API replacements:**
- Remove `import type { Metadata } from 'next'` and `export const metadata`
- `import Image from 'next/image'` → remove; use `<img>`
- `import Link from 'next/link'` → `import { Link } from 'react-router-dom'`
- `import { GitBranch, BadgeCheck, Truck } from 'lucide-react'` → keep as-is
- `import '../../willstone.css'` → remove
- `import SiteHeader from '@/components/SiteHeader'` → `import SiteHeader from '../components/SiteHeader'`
- `import SiteFooter from '@/components/SiteFooter'` → `import SiteFooter from '../components/SiteFooter'`
- `import AgriProductsGallery from '@/components/agri/AgriProductsGallery'` → `import AgriProductsGallery from '../components/AgriProductsGallery'`

**`<Image>` → `<img>` conversion (hero banner):**
```tsx
// After:
<div className="absolute inset-0" style={{ overflow: 'hidden' }}>
  <img
    src="/assets/images/agric-banner.avif"
    alt="Agricultural fields"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
  />
  <div className="absolute inset-0" style={{ background: '...' }} />
</div>
```

**`<Link>` changes:**
- All `<Link href="...">` → `<Link to="...">` for internal paths:
  - `href="/"` → `to="/"`
  - `href="/products"` → `to="/products"`
  - `href="/contact"` → `to="/contact"`
  - `href="/services/agriculture-agribusiness"` → `to="/services/agriculture-agribusiness"`

Files: `c:\Users\USER\OneDrive\Desktop\willstone\src\pages\AgriInputsPage.tsx`
Verify: `npm run build` — no errors.

---

## Step 7 — Create `src/pages/AgriProductDetailPage.tsx`

Convert `app/products/agri-inputs/[slug]/page.tsx` (Next.js dynamic route) to a React component that reads the slug from `useParams`.

**API replacements:**
- Remove `import type { Metadata } from 'next'`, `generateStaticParams`, `generateMetadata`
- Remove `import { notFound } from 'next/navigation'`
- `import Image from 'next/image'` → remove; use `<img>`
- `import Link from 'next/link'` → `import { Link, useParams, useNavigate } from 'react-router-dom'`
- `import '../../../willstone.css'` → remove
- `import SiteHeader from '@/components/SiteHeader'` → `import SiteHeader from '../components/SiteHeader'`
- `import SiteFooter from '@/components/SiteFooter'` → `import SiteFooter from '../components/SiteFooter'`
- `import { PRODUCTS } from '@/lib/agriProducts'` → `import { PRODUCTS } from '../data/agriProducts'`
- Remove the `<script type="application/ld+json">` block (SEO only, not needed in SPA)

**Component signature change:**
```tsx
// Before (Next.js async server component):
export default async function AgriProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) notFound()
  ...
}

// After (React client component):
export default function AgriProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const product = PRODUCTS.find((p) => p.slug === slug)

  // Redirect to parent listing if slug not found
  if (!product) {
    navigate('/products/agri-inputs', { replace: true })
    return null
  }
  ...
}
```

**`<Image>` → `<img>` conversions:**

1. Hero banner image:
   ```tsx
   <img
     src={product.src}
     alt={product.name}
     style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
   />
   ```

2. Prev/Next navigation thumbnails (two instances):
   ```tsx
   // Before:
   <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
     <Image src={prevProduct.src} alt={prevProduct.name} fill className="object-cover" sizes="56px" />
   </div>

   // After:
   <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
     <img
       src={prevProduct.src}
       alt={prevProduct.name}
       style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
     />
   </div>
   ```

**`<Link>` changes:**
- All `<Link href="...">` → `<Link to="...">`:
  - `href="/"` → `to="/"`
  - `href="/products"` → `to="/products"`
  - `href="/products/agri-inputs"` → `to="/products/agri-inputs"`
  - `href={`/products/agri-inputs/${prevProduct.slug}`}` → `to={...}`
  - `href={`/products/agri-inputs/${nextProduct.slug}`}` → `to={...}`
  - `href={`/contact?product=${encodeURIComponent(product.name)}`}` → `to={...}`

Files: `c:\Users\USER\OneDrive\Desktop\willstone\src\pages\AgriProductDetailPage.tsx`
Verify: `npm run build` — no errors.

---

## Step 8 — Create `src/pages/AgricultureAgribusinessPage.tsx`

Convert `app/services/agriculture-agribusiness/AgriculturePageClient.tsx`. This is already a `'use client'` component, so it's the closest to a React component in the Next.js project.

**API replacements:**
- Remove `'use client'` directive
- `import Image from 'next/image'` → remove; use `<img>`
- `import Link from 'next/link'` → `import { Link } from 'react-router-dom'`
- `import '../../willstone.css'` → remove
- `import SiteHeader from '@/components/SiteHeader'` → `import SiteHeader from '../components/SiteHeader'`
- `import SiteFooter from '@/components/SiteFooter'` → `import SiteFooter from '../components/SiteFooter'`
- The local `const PRODUCTS` array inside this file (6 product image entries) conflicts with the name from `agriProducts.ts`. Rename the local array to `AGRI_SHOWCASE_PRODUCTS` to avoid any future confusion.

**`<Image>` → `<img>` conversions (6 instances):**

1. Hero background image:
   ```tsx
   <img
     src="/assets/images/agric-banner.avif"
     alt="Vast green farmland at sunrise"
     style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
   />
   ```
   Parent `<section>` already has `position: relative` and `overflow-hidden`.

2. "Why Willstone Agri" right column image:
   ```tsx
   <img
     src="/assets/images/photo-1574943320219-553eb213f72d.avif"
     alt="Agricultural produce"
     style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
   />
   ```
   Parent `<div>` already has `position: relative`, `height: '420px'`, `overflow: hidden` via `rounded-2xl overflow-hidden`.

3. "Products We Work With" circular product images (6 in a `.map()`):
   ```tsx
   // Before:
   <div className="relative w-[88px] h-[88px] rounded-full overflow-hidden border-2" style={{ ... }}>
     <Image src={p.src} alt={p.label} fill sizes="88px" className="object-cover" />
   </div>

   // After:
   <div className="relative w-[88px] h-[88px] rounded-full overflow-hidden border-2" style={{ ... }}>
     <img
       src={p.src}
       alt={p.label}
       style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
     />
   </div>
   ```

**`<Link>` changes:**
All `<Link href="...">` → `<Link to="...">`:
- `href="/contact"` → `to="/contact"`
- All service hrefs like `href="/services/information-technology"` → `to="/services/information-technology"` etc.
- Note: the `OTHER_SERVICES` links point to routes like `/services/logistics-supply-chain` and `/services/import-export` which don't exist yet in `App.tsx` — that's fine, they render as links and the missing routes will 404 gracefully. Do not add them to App.tsx.

Files: `c:\Users\USER\OneDrive\Desktop\willstone\src\pages\AgricultureAgribusinessPage.tsx`
Verify: `npm run build` — no errors.

---

## Step 9 — Register new routes in `src/App.tsx`

Add 4 new routes to the existing `<Routes>` block.

**Current `App.tsx`:**
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

**Updated `App.tsx`:**
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'
import AgriInputsPage from './pages/AgriInputsPage'
import AgriProductDetailPage from './pages/AgriProductDetailPage'
import AgricultureAgribusinessPage from './pages/AgricultureAgribusinessPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/agri-inputs" element={<AgriInputsPage />} />
        <Route path="/products/agri-inputs/:slug" element={<AgriProductDetailPage />} />
        <Route path="/services/agriculture-agribusiness" element={<AgricultureAgribusinessPage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

Files: `c:\Users\USER\OneDrive\Desktop\willstone\src\App.tsx`
Verify: `npm run build` — all routes compile, zero TypeScript errors.

---

## Summary of all API replacements

| Next.js pattern | React + Vite replacement |
|---|---|
| `import Image from 'next/image'` | Remove import; use `<img style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}>`|
| `<Image fill ...>` | `<img style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} ...>` |
| `import Link from 'next/link'` | `import { Link } from 'react-router-dom'` |
| `<Link href="/path">` | `<Link to="/path">` |
| `import type { Metadata }` + `export const metadata` | Remove entirely |
| `export async function generateStaticParams()` | Remove entirely |
| `export async function generateMetadata()` | Remove entirely |
| `import { notFound } from 'next/navigation'` | Remove; use `useNavigate` + `navigate('/path', { replace: true }); return null` |
| `const { slug } = await params` (server component) | `const { slug } = useParams<{ slug: string }>()` |
| `'use client'` directive | Remove |
| `import 'X/willstone.css'` | Remove (global CSS already in `src/index.css`) |
| `import X from '@/components/...'` | `import X from '../components/...'` |
| `import X from '@/lib/...'` | `import X from '../data/...'` |
| `<script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}>` | Remove (SEO only, no `document.head` injection in SPA) |

## Summary of CSS additions

Add to `src/index.css` (after `.btn-gold:hover`):
```css
.btn-outline-gold {
  background: transparent;
  color: var(--gold);
  font-weight: 600;
  border: 1.5px solid var(--gold);
  box-shadow: none;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}
.btn-outline-gold:hover {
  background: rgba(201, 162, 75, 0.1);
  transform: translateY(-2px);
}
```

## Summary of new routes in `src/App.tsx`

| Path | Component |
|---|---|
| `/products` | `ProductsPage` |
| `/products/agri-inputs` | `AgriInputsPage` |
| `/products/agri-inputs/:slug` | `AgriProductDetailPage` |
| `/services/agriculture-agribusiness` | `AgricultureAgribusinessPage` |

## Execution order (dependency-ordered)

Steps 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9.

- Step 3 (`AgriProductsGallery`) depends on step 2 (`agriProducts.ts`) being created first.
- Steps 5, 6, 7 (`ProductsPage`, `AgriInputsPage`, `AgriProductDetailPage`) depend on steps 3 and 4.
- Step 9 (`App.tsx`) depends on all page files existing.
- The build (`npm run build`) after step 9 is the single end-to-end verification that all TypeScript types, imports, and route wiring are correct.
