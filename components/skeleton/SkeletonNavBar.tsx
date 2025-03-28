import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function SkeletonNavBar() {
  return (
    <div className={cn("space-y-8 mt-2")}>
      <div
        className={cn("flex items-center justify-between")}
      >
        <Skeleton className={cn("h-4 w-20", "lg:w-32")} />
        <Skeleton className={cn("h-4 w-20", "lg:w-32")} />
      </div>
      <Skeleton className={cn("w-full h-1")} />
    </div>
  );
}
