import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurelux Group | Privacy. Precision. No Circumvention.",
  description: "Aurelux Group brokers what is not openly sold: aircraft that are not listed, tax strategies few understand, and financial advantages most overlook.",
  keywords: "private aviation, off-market aircraft, corporate charter, financial concierge, Section 125, high-value assets",
  authors: [{ name: "Aurelux Group LLC" }],
  openGraph: {
    title: "Aurelux Group | Privacy. Precision. No Circumvention.",
    description: "Access the invisible. Off-market aircraft, bespoke financial strategies, and high-value asset connections.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Grain Overlay for Cinematic Texture */}
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
