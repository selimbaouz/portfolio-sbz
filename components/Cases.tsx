"use client";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Case, WorksData } from "@/types/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

interface CasesProps {
  cases: Case;
  previousProjectSlug?: WorksData;
  nextProjectSlug?: WorksData;
}
const Cases = ({
  cases,
  previousProjectSlug,
  nextProjectSlug,
}: CasesProps) => {
  
  return (
    <Container>
      <div
        className={cn(
          "font-montserrat text-xl w-full text-center h-full",
          "md:text-left md:text-2xl",
          "xl:text-4xl",
        )}
      >
        <Link
          href="/"
          className={cn(
            "text-xs uppercase font-medium gap-2 flex items-center hover:gap-4 cursor-pointer",
            "xl:text-lg",
          )}
        >
          <GoArrowLeft
            className={cn("text-xs", "lg:text-lg")}
          />
          Back
        </Link>
        <div
          className={cn(
            "space-y-10",
            "xl:pb-28 xl:space-y-20",
          )}
        >
          <div
            className={cn(
              "xl:flex xl:flex-col xl:h-[60vh] xl:justify-end",
            )}
          >
            <div
              className={cn(
                "pt-[400px] text-left flex flex-col",
                "xs:pt-[350px]",
                "sm:pt-[300px]",
                "xl:flex-row xl:justify-between xl:items-end",
              )}
            >
              <p
                className={cn(
                  "text-5xl pt-10",
                  "sm:text-6xl",
                  "xl:pt-0 xl:text-[150px]",
                )}
              >
                {cases?.title}
              </p>
              <div
                className={cn(
                  "text-sm text-right pt-14",
                  "xl:text-base xl:pt-0 font-[Montserrat]",
                )}
              >
                <p>{cases?.date}</p>
                <p>{cases?.company}</p>
                <p>{cases?.construction}</p>
                <p>{cases?.role}</p>
                {cases?.siteUrl && (
                  <div
                    className={cn(
                      "text-xs gap-2 mt-5 flex justify-end items-center hover:gap-4 cursor-pointer",
                      "xl:text-lg",
                    )}
                  >
                    <Link
                      href={cases?.siteUrl}
                      className={cn(
                        "font-medium uppercase",
                        "duration-500 delay-75",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Launch
                    </Link>
                    <GoArrowRight
                      className={cn("text-xs", "lg:text-lg")}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={cn(
              "space-y-4",
              "xl:space-y-0",
              cases?.images && cases.images.length === 1 ? "xl:flex xl:justify-center xl:items-center xl:w-max xl:mx-auto" : "xl:grid xl:grid-cols-2 xl:items-center xl:gap-6"
            )}
          >
            {cases?.images?.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Pictures of projects"
                width={1200}
                height={750}
                className={cn(
                  "w-full bg-gray-300 rounded-3xl object-cover",
                )}
              />
            ))}
          </div>
          <div
            className={cn("flex items-center", {
              "justify-start":
                previousProjectSlug && !nextProjectSlug,
              "justify-between":
                previousProjectSlug && nextProjectSlug,
              "justify-end":
                !previousProjectSlug && nextProjectSlug,
            })}
          >
            <div
              className={cn(
                "gap-2 flex items-center hover:gap-4 cursor-pointer",
                {
                  hidden: !previousProjectSlug?.slug,
                },
              )}
            >
              <GoArrowLeft
                className={cn("text-xs", "lg:text-lg")}
              />
              <Link
                href={`/cases/${previousProjectSlug?.slug}`}
                className={cn(
                  "font-medium uppercase text-xs",
                  "xl:text-lg",
                )}
              >
                Previous projet
              </Link>
            </div>
            <div
              className={cn(
                "gap-2 flex items-center hover:gap-4 cursor-pointer",
                {
                  hidden: !nextProjectSlug?.slug,
                },
              )}
            >
              <Link
                href={`/cases/${nextProjectSlug?.slug}`}
                className={cn(
                  "font-medium uppercase text-xs",
                  "xl:text-lg",
                )}
              >
                Next project
              </Link>
              <GoArrowRight
                className={cn("text-xs", "lg:text-lg")}
              />
            </div>
          </div>
          <div
            className={cn(
              "w-full pt-14 text-center flex justify-center font-[Montserrat]",
            )}
          >
            <p
              className={cn(
                "text-sm font-light",
                "xl:w-[900px] xl:text-lg",
              )}
            >
              {cases?.content}
            </p>
          </div>
        </div>
        <p
          className={cn(
            "font-[Montserrat] pt-14 w-full text-center font-ms font-normal text-xs",
            "md:text-sm",
          )}
        >
          ©2023 - Selim Baouz. All Rights Reserved.
        </p>
      </div>
    </Container>
  );
};

export default Cases;
