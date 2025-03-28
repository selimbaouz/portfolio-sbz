"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { GoArrowDownRight } from "react-icons/go";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Article } from "@/types/types";
import ArticleCard from "./ArticleCard";
import { useIsHydrated } from "@/hook/useIsHydrated";
import Container from "./Container";
import { isDragCursorStore } from "@/stores";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface NewsProps {
  articles: Article[] | null;
}

const News = ({ articles }: NewsProps) => {
  const isHydrated = useIsHydrated();
  const ref = useRef<HTMLDivElement>(null);
  const selector = gsap.utils.selector(ref);  
  const {setIsDragCursor} = isDragCursorStore();
  
  useGSAP(() => {
    const dragCursorMouse = selector(".drag");
    const circle = document.querySelector(".circle") as HTMLElement;
      dragCursorMouse.forEach((drag) => {
        drag.onmousemove = () => {
          gsap.to(circle, {
            scale: 13,
          });
      
          setIsDragCursor(true);
        };
        drag.onmouseleave = () => {
          gsap.to(circle, {
            scale: 1,
          });
      
          setIsDragCursor(false);
        };
      });

    return () => {
      window.onmousemove = null;
      if (dragCursorMouse) {
        dragCursorMouse.forEach((drag) => {
          drag.onmousemove = null;
          drag.onmouseleave = null;
        });
      }
    };
  }, [selector, ref]);

  if(!isHydrated) {
    return;
  }
  
  return (
    <Container>
      <section
        ref={ref} 
        className={cn(
          "py-4 border-t space-y-24",
          "xl:space-y-36",
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
            Blog
          </h3>
          <GoArrowDownRight
            className={cn("text-lg", "xl:text-2xl")}
          />
        </div>
        <div
          className={cn(
            "text-2xl",
            "xl:text-5xl xl:leading-[60px]",
          )}
        >
          <p className={cn("xl:indent-52 font-[Montserrat]")}>
          Outside projects, I write web content{" "}
            <span className="opacity-50">
            on development and psychology
            </span>{" "}
            for Stackademic on the Medium platform.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full drag"
        >
          <CarouselContent>
            {articles?.map((article, index) => (
              <CarouselItem
                className="md:basis-1/2 xl:basis-1/3 drag"
                key={index}
              >
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArticleCard
                    date={article.date}
                    title={article.title}
                    readingTime={article.ReadingTime}
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </Container>
  );
};

export default News;
