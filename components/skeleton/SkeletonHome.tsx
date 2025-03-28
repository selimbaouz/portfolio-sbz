"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function SkeletonHome() {
  /* useGSAP(() => {
    const counterElement = document.querySelector(".counter");
    let currentValue = 0;
    let delay = Math.floor(Math.random() + 200) + 50;

    if(!counterElement) {
      return;
    }
    
    setTimeout(() => {
      if(currentValue === 100) {
        return;
      }
    
      currentValue += Math.floor(Math.random() * 10) + 1;
    
      if(currentValue > 100) {
        currentValue = 100;
      } 
    
      counterElement.textContent = currentValue;

    }, delay); 

    gsap.to(".counter", 0.25, {
      delay: 3.5,
      opacity: 0,
    });

    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5
      },
      ease: "power4.inOut"
    });
  }); */
  return (
    <div className="h-screen w-screen overflow-hidden bg-background top-0 left-0 fixed">
      {/* <h3 className="counter text-white fixed font-medium font-montserrat text-[20vw] w-full h-full flex justify-end items-end z-50 pr-10">0</h3>
      <div className="overlay fixed w-screen h-screen z-10">
        <div className="bar w-screen h-[105vh] bg-foreground"></div>
      </div>  */}
      <div
        className={cn(
          "flex flex-col mt-6 h-screen",
          "md:mt-10",
          "lg:mt-14",
          "xl:mt-20 xl:h-[85vh]",
        )}
      >
        <Skeleton
          className={cn(
            "h-8 w-full text-center",
            "md:h-20",
            "xl:h-44",
            "2xl:h-64",
          )}
        />
        <div
          className={cn(
            "flex justify-between w-full pt-4 border-t mt-4",
            "md:mt-6 md:pt-6",
            "xl:pt-10 xl:mt-10",
          )}
        >
          <Skeleton
            className={cn(
              "hidden",
              "xl:block xl:h-4 xl:w-[300px]",
            )}
          />
          <Skeleton
            className={cn(
              "h-4 w-36",
              "md:w-44",
              "xl:w-[300px]",
            )}
          />
          <Skeleton
            className={cn(
              "h-4 w-32",
              "md:w-44",
              "xl:w-[300px]",
            )}
          />
        </div>
        <div
          className={cn(
            "flex items-end justify-end h-[75vh]",
          )}
        >
          <div
            className={cn(
              "space-y-4 flex flex-col items-end",
              "xl:space-y-6",
            )}
          >
            <Skeleton
              className={cn(
                "h-4 w-[180px]",
                "md:w-[460px]",
                "xl:w-[750px]",
              )}
            />
            <Skeleton
              className={cn(
                "h-4 w-60",
                "md:w-[360px]",
                "xl:w-[600px]",
              )}
            />
            <Skeleton
              className={cn("h-4 w-60", "md:hidden")}
            />
            <Skeleton
              className={cn("h-4 w-32", "md:hidden")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
