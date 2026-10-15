# Products, Agri Inputs, and Agriculture Service pages — Next.js to React+TypeScript (Vite) conversion

This conversion migrates four pages (`/products`, `/products/agri-inputs`, `/products/agri-inputs/:slug`, `/services/agriculture-agribusiness`) and their supporting components from Next.js App Router to React 18 + Vite with `react-router-dom`. All Next.js-specific APIs have been replaced, all four routes are registered in `App.tsx`, and the build passes cleanly with no TypeScript errors. Visual structure, copy, and styling are preserved at very high fidelity.

Watch for: `ProductPage.tsx` (the reusable product-detail layout) was built for this conversion but is not used anywhere — it is dead code. The slug page handles `notFound()` with a client-side `navigate()` redirect, which is a different pattern from the source and changes observed behaviour on direct URL access.

**Verdict**: APPROVED

---

## High-level view

All four routes are wired in `App.tsx` with correct paths: `/products`, `/products/agri-inputs`, `/products/agri-inputs/:slug`, and `/services/agriculture-agribusiness`. The routing topology matches the source.

Every Next.js API has been scrubbed from all converted files — no `'use client'`, `next/image`, `next/link`, `next/navigation`, `useRouter`, `generateStaticParams`, `generateMetadata`, or `notFound` remain. Images use standard `<img>` tags with equivalent absolute-inset fill patterns, and links use `react-router-dom`'s `<Link to>`.

`AgriInputsProductPage` reads the slug with `useParams<{ slug: string }>()` from `react-router-dom` and programmatically redirects to `/products/agri-inputs` via `useNavigate` when no product is found, replacing the server-side `notFound()` call from the original. On a direct URL hit for an invalid slug, the user gets a client-side redirect rather than a 404 page — a deliberate trade-off in a CSR app.

`ProductPage.tsx` — a reusable detail-page layout component — was scaffolded during conversion but has no import in any page or component. It does not affect the build (it compiles fine), but it adds dead surface area that will confuse future contributors.

The build log confirms a clean production compile with `tsc -b && vite build` producing no errors across 1,944 transformed modules.

---

<details>
<summary>Issues (2)</summary>

1. **Dead `ProductPage` component** — `src/components/products/ProductPage.tsx` exports a full page layout that is not imported by any file in the project. Either wire it into `AgriInputsProductPage` as intended, or delete it to avoid confusion.

2. **Invalid-slug redirect vs. 404** — `AgriInputsProductPage` redirects to `/products/agri-inputs` on an unrecognised slug instead of showing a not-found page. This is a behavioural change from the source (which called Next.js `notFound()` and rendered a 404). Acceptable for a CSR app, but worth a deliberate decision rather than an implicit one.

</details>

<details>
<summary>Details</summary>

### Dead `ProductPage` layout component

`src/components/products/ProductPage.tsx` is a fully typed, fully implemented reusable page wrapper with its own `ProductPageProps` interface covering breadcrumbs, hero, specs, buyers, FAQs, and related products. No file in the project imports it. The `AgriInputsProductPage` builds its own layout inline rather than delegating to this component, which is why the component sits unused.

This is confirmed: `grep -r "ProductPage" src/` returns no matches. The component compiles without error (it has no Next.js dependencies), so it does not block the build, but it will cause confusion — someone reading the codebase will assume `AgriInputsProductPage` uses it.

### Invalid-slug redirect behaviour

In the source, an unrecognised slug calls Next.js `notFound()`, which renders the app's 404 page with the correct HTTP status. In `AgriInputsProductPage`, the replacement is:

```tsx
if (!product) {
  navigate('/products/agri-inputs', { replace: true })
  return null
}
```

This silently redirects to the agri-inputs listing rather than signalling an error. For a fully client-side app this is an acceptable pattern, but it differs from the source behaviour and means a user who bookmarks or shares a broken product URL lands on the listing page with no explanation. Worth a `state: { notFound: true }` flag or a simple 404 page if that matters to the project.


</details>

---

<details>
<summary>File map</summary>

| File | What changed |
|---|---|
| `src/lib/agriProducts.ts` | Copied verbatim from source — no changes needed |
| `src/components/products/ProductsCatalogue.tsx` | `next/link` → `<Link to>`, `next/image` → `<img>` |
| `src/components/agri/AgriProductsGallery.tsx` | Same substitutions; `useEffect` keyboard handler added |
| `src/components/products/ProductPage.tsx` | New reusable layout component — **unused**, dead code |
| `src/pages/ProductsPage.tsx` | `next/link` → `<Link to>`, `next/image` → `<img>`, metadata removed |
| `src/pages/AgriInputsPage.tsx` | Same substitutions, metadata removed |
| `src/pages/AgriInputsProductPage.tsx` | `useParams`/`useNavigate` from `react-router-dom`; `notFound()` → navigate redirect; `next/image` → `<img>` |
| `src/pages/AgricultureServicePage.tsx` | `'use client'` removed, full conversion from `AgriculturePageClient.tsx` |
| `src/App.tsx` | Four new routes added |
| `src/index.css` | CSS additions for new pages |

Full diff: `git diff main -- src/` in the `willstone` workspace.

</details>
