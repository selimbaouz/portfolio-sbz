"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { FaArrowRight  } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useIsHydrated } from "@/hook/useIsHydrated";

const HeaderPage = () => {

  const isHydrated = useIsHydrated();
  const ref = useRef<HTMLDivElement>(null);
  const selector = gsap.utils.selector(ref);  
  
  useGSAP(() => {
    const circle = document.querySelector(".circle") as HTMLElement;
    const titleCursorMouse = selector(".bigTitle");

      if (!circle) return;

      titleCursorMouse.forEach((title) => {
        title.onmousemove = () => {
          gsap.to(circle, {
            scale: 40,
          });
        };
        title.onmouseleave = () => {
          gsap.to(circle, {
            scale: 1,
          });
        };
      });

    return () => {
      window.onmousemove = null;
       if (titleCursorMouse) {
        titleCursorMouse.forEach((title) => {
          title.onmousemove = null;
          title.onmouseleave = null;
        });
      }
    };
  }, [selector, ref]);

  if(!isHydrated) {
    return;
  }

  return (
    <header ref={ref} id="home" className={cn("overflow-hidden size-full h-[90dvh] lg:h-[100dvh] flex relative flex-col justify-center", "md:gap-10", "xl:justify-center")}>
      <Spotlight />
      <div className={cn("px-6 text-center space-y-6", "md:mx-auto md:max-w-xl", "lg:max-w-4xl", "xl:px-10 xl:max-w-full")}>
        <h1  className={cn(
          "text-[50px] px-2 font-bold leading-12 bigTitle",
          "md:text-8xl md:px-0 md:leading-20",
          "lg:text-[100px]",
          "xl:text-[150px] xl:leading-32",
          "whitespace-pre-wrap",
          "text-foreground text-center uppercase",
        )}>Web/3D<br />Designer<br />developer</h1>
        <p className={cn("text-base w-full px-4 font-[Montserrat] text-foreground", "lg:text-lg lg:leading-relaxed lg:px-0 lg:mx-auto text-subtitle/80 lg:pb-2 lg:w-[700px]")}>Hey👋, I{"'"}m Selim, an enthusiastic multidisciplinary developer based on the French Riviera, specializing in the creation of digital products, SaaS, and headless e-commerce.</p>
        <div className={cn("pt-4")}>
          <Link href="mailto:selim.baouz@hotmail.fr
          " target="_blank" rel="preload" className={cn(
            "font-semibold", 
            "w-[80%] h-12 mx-auto",
            "md:w-[60%] md:h-14",
            "lg:w-60",
            "p-[1px]",
            "*:transition ease-out *:hover:duration-300", 
            "transition-all ease-in",
            "bg-foreground text-background backdrop-blur-xl flex items-center justify-center gap-2 text-xl antialiased rounded-full",
            "hover:bg-transparent hover:border hover:border-foreground hover:text-foreground group hover:gap-4",
              
          )}>
            Let{"'"}s Talk
            <FaArrowRight  className="text-background group-hover:text-foreground" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;