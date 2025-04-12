"use client";
import { cn } from "@/lib/utils";
import { WorksData } from "@/types/types";
import Image from "next/image";
import { GoArrowDownRight } from "react-icons/go";
import Container from "./Container";
import { useIsHydrated } from "@/hook/useIsHydrated";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { isWorkCursorStore } from "@/stores";

interface WorksProps {
  works: WorksData[] | null;
}
const Works = ({ works }: WorksProps) => {
  const isHydrated = useIsHydrated();
  const ref = useRef<HTMLDivElement>(null);
  const selector = gsap.utils.selector(ref);  
  const {setIsWorkCursor} = isWorkCursorStore();
  let circle: HTMLElement;
  
  useGSAP(() => {
      const workCursorMouse = selector('.works');
      circle = document.querySelector(".circle") as HTMLElement;
      workCursorMouse.forEach((work) => {
        work.onmousemove = () => {
          gsap.to(circle, {
            scale: 25,
          });
          setIsWorkCursor(true);
        };

        work.onmouseleave = () => {
          gsap.to(circle, {
            scale: 1,
          });
          setIsWorkCursor(false);
        };
      });

      return () => {
        window.onmousemove = null;
        if (workCursorMouse) {
          workCursorMouse.forEach((work) => {
            work.onmousemove = null;
            work.onmouseleave = null;
          });
        }
      };
    }, [selector, ref]);
  
  if(!isHydrated) {
    return;
  }
  
  return (
    <Container>
      <div ref={ref} className={cn("py-4 border-t")}>
        <div className="flex items-center gap-2">
          <h3
            className={cn(
              "uppercase font-semibold text-base",
              "lg:text-4xl",
              "xl:text-2xl",
            )}
          >
            Works
          </h3>
          <GoArrowDownRight
            className={cn("text-lg", "xl:text-2xl")}
          />
        </div>
        {works?.map((work, index) => (
          <div key={index} className="pt-20">
            {/* <div
              className={cn(
                "flex justify-between border-t pt-4",
                index % 2 === 0
                  ? "xl:flex-row-reverse"
                  : "xl:flex-row",
                index === 0 && "border-none",
              )}
            >
              <div className={cn("xl:text-2xl")}>
                {work.category}
              </div>
              <p className={cn("xl:text-xl")}>{work.date}</p>
            </div> */}
            <Link
              href={`/cases/${work.slug}`}
              onClick={() => {
                setIsWorkCursor(false);
                gsap.to(circle, {
                  scale: 1,
                });
              }}
              className={cn(
                "py-20 block space-y-6",
                "lg:flex lg:items-center lg:gap-8 lg:py-44",
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse",
              )}
            >
              <div>
                <Image
                  alt="Picture of project"
                  src={work.image}
                  width={1000}
                  height={750}
                  className={cn(
                    "works rounded-3xl border border-foreground/20 object-cover",
                    "lg:max-w-[650px]",
                    "xl:max-w-[1000px]",
                  )}
                />
                <div className="flex justify-between items-center mt-4">
                  <p className={cn(
                    "text-3xl font-medium",
                    "lg:text-6xl", 
                    "xl:text-8xl"
                  )}>
                    {work.title}
                  </p>
                  <p className={cn(
                    "lg:text-2xl",
                    "xl:text-4xl"
                  )}>{work.date}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Works;
