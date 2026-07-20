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
  title: "Willstone Strategic Industries Limited – IT, Agriculture, Trading, Real Estate & Energy Solutions",
  description: "Willstone Strategic Industries Limited is a diversified Nigerian private company offering general software development, IT consultancy, agricultural production and processing, import/export trading, logistics and procurement, real estate development, infrastructure projects, renewable energy solutions, and warehousing services. Based in Ibadan, Oyo State, we are committed to corporate governance, innovation, and global trade. Partner with us for technology, agribusiness, supply chain, and industrial services.",
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
    title: "Willstone Strategic Industries Limited",
    description: "Building Solutions. Delivering Impact. Creating Tomorrow.",
    url: "https://willstone.com.ng",
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
    card: "summary",
    title: "Willstone Strategic Industries Limited",
    description: "Building Solutions. Delivering Impact. Creating Tomorrow.",
    images: ["/assets/images/logo/PNG/Willstone-Logo-FullColor.png"],
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}