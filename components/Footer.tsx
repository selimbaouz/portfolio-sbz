"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";
import Container from "./Container";
import { useIsHydrated } from "@/hook/useIsHydrated";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { legalsLinksData } from "@/data/work";

const Footer = () => {
  const isHydrated = useIsHydrated();
  const ref = useRef<HTMLDivElement>(null);
  const selector = gsap.utils.selector(ref);  
  
  useGSAP(() => {
    const circle = document.querySelector(".circle") as HTMLElement;
    const linkCursorMouse = selector(".linkCursor");
    linkCursorMouse.forEach((linkCursor) => {
      linkCursor.onmousemove = () => {
        gsap.to(circle, {
          scale: 15,
        });
      };
      linkCursor.onmouseleave = () => {
        gsap.to(circle, {
          scale: 1,
        });
      };
    });

    return () => {
      window.onmousemove = null;
      if (linkCursorMouse) {
        linkCursorMouse.forEach((linkCursor) => {
          linkCursor.onmousemove = null;
          linkCursor.onmouseleave = null;
        });
      }
    };
  }, [selector, ref]);
  
  if(!isHydrated) {
    return;
  }

  return (
    <Container>
      <div
        ref={ref}
        className={cn(
          "py-4 border-t space-y-24",
          "xl:space-y-36 font-[Montserrat]",
        )}
      >
        <div className="flex items-center gap-2">
          <h3
            className={cn(
              "uppercase font-semibold text-base",
              "lg:text-4xl",
              "xl:text-2xl",
            )}
          >
            Inquiries
          </h3>
          <GoArrowDownRight
            className={cn("text-lg", "xl:text-2xl")}
          />
        </div>
        <div className={cn("space-y-10", "md:space-y-20")}>
          <div className="flex flex-col justify-center items-center text-center">
            <div>
              <Link
                href="mailto:hello@selimbaouz.com"
                className={cn(
                  "linkCursor font-medium cursor-pointer text-xl",
                  "md:text-3xl",
                  "xl:text-5xl xl:w-[850px]",
                  "hover:underline",
                )}
                >
                hello@selimbaouz.com
              </Link>
            </div>
          </div>
        </div>
        <div className="space-x-4 lg:flex lg:items-center lg:justify-between lg:gap-4 text-center space-y-4 lg:space-y-0 lg:text-left">
          <p
            className={cn(
              "hidden font-montserrat w-full font-ms font-normal text-xs",
              "lg:text-base lg:block"
            )}
            >
            ©2023 - Selim Baouz. All rights reserved.
          </p>
            {[
                {
                  title: "Github",
                  slug: "https://github.com/selimbaouz",
                },
                {
                  title: "Medium",
                  slug: "https://medium.com/@selimbaouz",
                },
                {
                  title: "Pinterest",
                  slug: "https://www.pinterest.fr/sejiux/",
                },
                {
                  title: "Discord",
                  slug: "https://discordapp.com/users/849428669180542976",
                },
                {
                  title: "X",
                  slug: "https://x.com/sejiux",
                },
              ].map((data, index) => (
                <Link
                key={index}
                href={data.slug}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-white/30"
              >
                  {data.title}
                </Link>
              ))}
        </div>
        <div className={cn("flex flex-col gap-2 items-center", "lg:flex-row lg:gap-4 lg:justify-center")}>
          {legalsLinksData.map((data, i) => (
              <Link
              key={i}
              href={data.slug ?? ""}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-white/30"
            >
                {data.title}
              </Link>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Footer;