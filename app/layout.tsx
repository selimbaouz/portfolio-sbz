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
  description: "Passionate multidisciplinary developer specializing in digital products, SaaS, and headless e-commerce with Next.js and Shopify.",
  keywords: [
    "full-stack developer",
    "e-commerce developer",
    "shopify headless",
    "next developer",
    "react developer",
    "headless commerce",
    "SaaS development",
    "web development",
    "UX/UI design",
    "web design",
    "3D design",
    "SEO optimization",
    "freelance developer",
    "digital product creation"
  ],
  authors: [{ name: "Selim Baouz" }],
  creator: "Selim Baouz",
  publisher: "Selim Baouz",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://selimbaouz.com",
    siteName: "Selim Baouz",
    title: "Selim Baouz | Multidisciplinary Developer",
    description: "Specialized in SaaS and headless e-commerce development, I help brands create high-performance, tailor-made digital experiences.",
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
    description: "Specialized in SaaS and headless e-commerce development, I help brands create high-performance, tailor-made digital experiences.",
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
