import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider"
import React from "react";
import LayoutClient from "@/components/LayoutClient";

export const metadata: Metadata = {
  title: {
    default: "Selim Baouz | Multidisciplinary Developer",
    template: "%s | Selim Baouz"
  },
  description: "Offrez une expérience headless mémorable à vos clients grâce à une boutique en ligne rapide, performante et sur mesure avec Next.js et Shopify.",
  keywords: ["shopify headless", "shopify", "headless", "boutique headless", "boutique shopify headless", "dropshipping", "boutique dropshipping", "e-commerce", "design sur mesure", "design ux/ui", "designer web", "développeur shopify headless", "développeur shopify", "développeur fullstack", "shopify seo"],
  authors: [{ name: "Selim Baouz" }],
  creator: "Selim Baouz",
  publisher: "Selim Baouz",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://selimbaouz.com",
    siteName: "Selim Baouz",
    title: "Selim Baouz | Multidisciplinary Developer",
    description: "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance, pour offrir à votre marque une expérience utilisateur fluide et mémorable.",
    images: [
      {
        url: "https://selimbaouz.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Selim Baouz - Multidisciplinary Developer"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@selimbaouz",
    creator: "@selimbaouz",
    title: "Selim Baouz | Multidisciplinary Developer",
    description: "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance, pour offrir à votre marque une expérience utilisateur fluide et mémorable.",
    images: ["https://selimbaouz.com/images/og-image.webp"],
  },
  verification: {
    google: "VeUQ003CQJEmqI8Jhat7AsydV1Lf4NOuzEaViRaR5BQ",
  },
  alternates: {
    canonical: "https://selimbaouz.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
      <LayoutClient>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <SpeedInsights />
        <Analytics />
          <div className="flex-1">{children}</div>  
        </ThemeProvider>
      </LayoutClient>
  );
}
