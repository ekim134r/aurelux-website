import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aureluxgroup.com'),
  title: "Aurelux Group LLC | Private Jet Charter & Aircraft Acquisition",
  description: "Private jet charter, off-market corporate aircraft acquisition and providing Section 125 enhancement for U.S. businesses. Discreet access and controlled execution through trusted partners.",
  keywords: "private jet charter, aircraft charter, private aviation, off-market aircraft acquisition, corporate jet charter, Section 125, business jet rental, luxury jet charter, executive aviation, charter flights",
  authors: [{ name: "Aurelux Group LLC" }],
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png?v=2" },
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  openGraph: {
    title: "Aurelux Group LLC | Private Jet Charter & Aircraft Acquisition",
    description: "Private jet charter, off-market corporate aircraft acquisition and providing Section 125 enhancement for U.S. businesses. Discreet access and controlled execution.",
    type: "website",
    url: "https://www.aureluxgroup.com",
    siteName: "Aurelux Group",
    images: ["/images/logo-v2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurelux Group LLC | Private Jet Charter & Aircraft Acquisition",
    description: "Private jet charter, off-market aircraft acquisition and Section 125 enhancement for U.S. businesses.",
  },
  alternates: {
    canonical: "https://www.aureluxgroup.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`antialiased ${inter.variable} ${cinzel.variable}`}>
        {/* Grain Overlay for Cinematic Texture */}
        <div className="grain" aria-hidden="true" />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aurelux Group LLC",
              "alternateName": "Aurelux Group",
              "url": "https://www.aureluxgroup.com",
              "logo": "https://www.aureluxgroup.com/images/logo-v2.png",
              "description": "Premier private jet charter and off-market aircraft acquisition firm. One of the best providers for charter flights with discreet access and controlled execution.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sheridan",
                "addressRegion": "WY",
                "addressCountry": "USA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-681-461-3153",
                "contactType": "sales",
                "email": "sales@aureluxgroup.com",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/aurelux-group/",
                "https://www.instagram.com/aureluxgroup/"
              ],
              "foundingDate": "2025",
              "areaServed": "Worldwide",
              "serviceType": ["Private Jet Charter", "Aircraft Acquisition", "Section 125 Enhancement"]
            })
          }}
        />
      </body>
    </html>
  );
}
