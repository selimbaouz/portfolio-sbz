import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function SkeletonCases() {
  return (
    <div className={cn("h-full w-full")}>
      <Skeleton
        className={cn(
          "h-2 w-14",
          "md:w-48",
          "xl:w-32",
        )}
      />
      <div
        className={cn(
          "space-y-10",
          "xl:pb-28 xl:space-y-20",
        )}
      >
        <div
          className={cn(
            "xl:flex xl:flex-col xl:h-[80vh] xl:justify-end",
          )}
        >
          <div
            className={cn(
              "pt-24 pb-14 text-left flex flex-col",
              "xl:flex-row xl:justify-between xl:items-end",
            )}
          >
            <Skeleton className={cn("h-3 w-52", "xl:w-[1600px] xl:h-32")} />
            <div
              className={cn(
                "space-y-2 pt-5 flex flex-col justify-end w-full items-end",
              )}
            >
              <Skeleton className={cn("h-2 w-10")} />
              <Skeleton className={cn("h-2 w-14")} />
              <Skeleton className={cn("h-2 w-20")} />
              <Skeleton className={cn("h-2 w-36")} />
              <div className={cn("pt-5")}>
                <Skeleton className={cn("h-2 w-20")} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "space-y-4 pt-6",
            "sm:space-y-6",
            "xl:flex xl:justify-between xl:gap-4 xl:space-y-0 xl:items-center",
          )}
        >
          <Skeleton
            className={cn(
              "h-44 w-full rounded-3xl",
              "sm:h-56",
              "md:h-96",
              "lg:h-[500px]",
              "xl:h-[450px]",
            )}
          />
          <Skeleton
            className={cn(
              "h-44 w-full rounded-3xl",
              "sm:h-56",
              "md:h-96",
              "lg:h-[500px]",
              "xl:h-[450px]",
            )}
          />
        </div>
        <div className={cn("pt-5 flex justify-between items-center")}>
          <Skeleton className={cn("h-2 w-24")} />
          <Skeleton className={cn("h-2 w-24")} />
        </div>
      </div>
    </div>
  );
}
