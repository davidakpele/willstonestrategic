import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Willstone Strategic Industries Limited | Supplier, Exporter & Procurement Partner — Nigeria",
  description: "Willstone Strategic Industries Limited is a diversified Nigerian supplier, exporter, and procurement partner headquartered in Ibadan, Oyo State. We supply agricultural commodities, deliver software and IT solutions, electrical engineering, logistics, real estate, energy, and defence services across Nigeria and beyond.",
  keywords: [
    "agribusiness Nigeria",
    "agro-business Ibadan",
    "buying and selling Nigeria",
    "commodity trading Nigeria",
    "software development Nigeria",
    "IT consultancy Ibadan",
    "digital transformation Nigeria",
    "engineering solutions Nigeria",
    "electrical engineering Nigeria",
    "logistics Nigeria",
    "supply chain management Nigeria",
    "import export Nigeria",
    "procurement services Nigeria",
    "agriculture Nigeria",
    "crop processing Nigeria",
    "real estate development Nigeria",
    "energy solutions Nigeria",
    "renewable energy Nigeria",
    "defence security Nigeria",
    "protective solutions Nigeria",
    "Willstone Strategic Industries",
    "multi-sector company Nigeria",
    "strategic industries Ibadan",
    "Nigerian enterprise",
  ],
  authors: [{ name: "Willstone Strategic Industries Limited", url: "https://willstonestrategic.com" }],
  creator: "Willstone Strategic Industries Limited",
  publisher: "Willstone Strategic Industries Limited",
  category: "business",
  metadataBase: new URL("https://willstonestrategic.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/assets/images/logo/PNG/Willstone-Logo-Navy.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets/images/logo/PNG/Willstone-Logo-Navy.png", type: "image/png" },
    ],
    shortcut: "/assets/images/logo/PNG/Willstone-Logo-Navy.png",
  },
  openGraph: {
    title: "Willstone Strategic Industries Limited – Building Solutions. Delivering Impact.",
    description: "Agribusiness, software development, logistics, engineering, real estate, energy, and defence solutions. Based in Ibadan, Nigeria — serving the world.",
    url: "https://willstonestrategic.com",
    siteName: "Willstone Strategic Industries Limited",
    images: [
      {
        url: "/assets/images/logo/PNG/Willstone-Logo-FullColor.png",
        width: 1200,
        height: 630,
        alt: "Willstone Strategic Industries Limited",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Willstone Strategic Industries Limited",
    description: "Agribusiness · Software Development · Logistics · Engineering · Real Estate · Energy · Defence — Nigeria's trusted multi-sector partner.",
    images: ["/assets/images/logo/PNG/Willstone-Logo-White.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "",   // add Google Search Console verification token here when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0B1B33" />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="Cache-control" content="no-cache" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="msapplication-TileColor" content="#0B1B33" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/assets/images/Willstone-AppIcon-Navy.png" />
        {/* JSON-LD: Organization + WebSite entities with stable @id anchors */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://willstonestrategic.com/#organization",
                "name": "Willstone Strategic Industries Limited",
                "legalName": "Willstone Strategic Industries Limited",
                "url": "https://willstonestrategic.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://willstonestrategic.com/assets/images/logo/PNG/Willstone-Logo-FullColor.png",
                  "width": 400,
                  "height": 96
                },
                "description": "Willstone Strategic Industries Limited is a diversified Nigerian enterprise headquartered in Ibadan, Oyo State. We are a trusted supplier, exporter, and procurement partner across agribusiness, software development, electrical engineering, logistics, real estate, energy, and defence sectors.",
                "foundingDate": "2010",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "20 Cambridge House, Onireke Jericho",
                  "addressLocality": "Ibadan",
                  "addressRegion": "Oyo State",
                  "addressCountry": "NG",
                  "postalCode": "200001"
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+234-901-938-4496",
                    "contactType": "customer service",
                    "areaServed": ["NG", "GLOBAL"],
                    "availableLanguage": "English"
                  },
                  {
                    "@type": "ContactPoint",
                    "email": "willstonestrategic@gmail.com",
                    "contactType": "sales",
                    "areaServed": ["NG", "GLOBAL"],
                    "availableLanguage": "English"
                  }
                ],
                "sameAs": [],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Willstone Products & Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agriculture & Agribusiness", "description": "Agro-logistics, crop processing, commodity trading, bulk sesame seeds, palm oil, cassava, maize, cocoa, soybeans, and farm input supply." } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Development & IT Consultancy", "description": "Custom software, ERP systems, digital transformation, and IT consultancy for businesses across Nigeria." } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical & Electronic Engineering", "description": "Power systems, automation, and industrial electrical installations." } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Defence, Security & Protective Solutions", "description": "Surveillance, threat assessment, and asset protection systems." } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Logistics, Procurement & Import/Export", "description": "Supply chain management, international trade, and general procurement services." } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real Estate & Energy Solutions", "description": "Property development and renewable energy infrastructure projects." } }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://willstonestrategic.com/#website",
                "url": "https://willstonestrategic.com",
                "name": "Willstone Strategic Industries Limited",
                "description": "Official website of Willstone Strategic Industries Limited — supplier, exporter, and procurement partner for agribusiness, technology, logistics, engineering, energy, and defence solutions.",
                "publisher": {
                  "@id": "https://willstonestrategic.com/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://willstonestrategic.com/products?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                },
                "inLanguage": "en-NG"
              }
            ])
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}