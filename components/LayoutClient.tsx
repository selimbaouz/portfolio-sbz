"use client";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { Montserrat } from "next/font/google";
/* import { menuStore } from "@/stores"; */
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import useMouseFollower from "@/animations/useMouseFollower";
import Head from "next/head";
import CircleMouse from "./CircleMouse";

const montserrat = Montserrat({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
  variable: "--font-ms",
});

const LayoutClient = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  /* const isMenuOpen = menuStore((state) => state.isMenuOpen); */

  useMouseFollower();
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', () => {});
  
    lenis.on('scroll', ScrollTrigger.update);
  
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000);
    });
  
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup si nécessaire
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  /* useEffect(() => {
    if (isMenuOpen) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = 'static';
    }

    return () => {
      document.body.style.position = 'static';
    };
  }, [isMenuOpen]); */

  return (
    <html
      lang="en"
      className="h-full"
      suppressHydrationWarning
    >
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro" rel="stylesheet" />
      </Head>
      <body className={cn(montserrat.variable, "relative bg-background font-sans antialiased")}>
        <CircleMouse />
        {children}
      </body>
    </html>
  );
};

export default LayoutClient;

