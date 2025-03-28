import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  readingTime: string;
  date: string;
}

const ArticleCard = ({
  title,
  readingTime,
  date,
}: ArticleCardProps) => {
  return (
    <Card
      className={cn(
        "min-h-80 flex flex-col h-full text-primary font-ms px-2 font-[Montserrat]  py-6 space-y-4",
        "md:space-y-8",
        "duration-500 hover:scale-95",
        "lg:space-y-10 lg:min-h-96",
        "xl:space-y-14 xl:min-h-[400px]",
        "hover:bg-foreground hover:border-none group",
      )}
    >
      <CardHeader
        className={cn(
          "text-base font-light text-ms",
          "md:text-lg",
          "group-hover:text-background",
        )}
      >
        {date}
      </CardHeader>
      <CardContent
        className={cn(
          "text-base flex-grow",
          "xs:leading-9 xs:text-lg",
          "sm:text-xl",
          "lg:text-2xl lg:w-[350px]",
          "xl:w-[400px] xl:leading-8",
          "2xl:w-[450px]",
          "group-hover:text-background",
        )}
      >
        <h6>{title}</h6>
      </CardContent>
      <CardFooter
        className={cn(
          "font-ms text-base flex items-center justify-between text-primary",
          "md:text-lg",
          "group-hover:text-background",
        )}
      >
        {readingTime}
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
