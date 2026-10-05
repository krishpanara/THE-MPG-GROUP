import type { Metadata, Viewport } from "next";
import { Carlito, Gelasio, Tinos } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { home, site } from "@/lib/content";
import "./globals.css";

// next/font downloads these at build time and serves them from the site itself (brief tab 3).
const gelasio = Gelasio({ subsets: ["latin"], weight: ["700"], variable: "--font-gelasio", display: "swap" });
const carlito = Carlito({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-carlito", display: "swap" });
// Lining numerals for the big 01–05 and 100+ figures.
const tinos = Tinos({ subsets: ["latin"], weight: ["700"], variable: "--font-tinos", display: "swap" });

const assets = "/mpgw-brand-assets";
const shareImage = { url: `${assets}/social-share-1200x630.png`, width: 1200, height: 630, alt: site.name };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: home.title, template: `%s | ${site.name}` },
  description: home.description,
  applicationName: site.name,
  icons: {
    icon: [
      { url: `${assets}/favicon.svg`, type: "image/svg+xml" },
      { url: `${assets}/favicon.ico`, sizes: "16x16 32x32 48x48" },
    ],
    apple: { url: `${assets}/apple-touch-icon.png`, sizes: "180x180" },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: home.title,
    description: home.description,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: home.title,
    description: home.description,
    images: [shareImage.url],
  },
};

export const viewport: Viewport = { themeColor: "#2D3748" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${gelasio.variable} ${carlito.variable} ${tinos.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-50 bg-ink px-4 py-2 font-bold text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
