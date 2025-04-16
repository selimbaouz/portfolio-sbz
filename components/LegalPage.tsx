import { legalsPagesData } from "@/data/work";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface LegalPageProps {
  handle: string;
}
const LegalPage: FC<LegalPageProps> = ({handle}) => {
  return (
    <div className={cn("px-6 text-left space-y-6", "lg:max-w-4xl lg:mx-auto")}>
      <h2 className={cn(
        "text-[28px] text-white text-left pb-14 leading-tight font-semibold ",
        "lg:text-6xl",
        "xl:text-5xl xl:leading-[1.4]",
        "pointer-events-none whitespace-pre-wrap",
      )}>{legalsPagesData(handle).title}</h2>
      {legalsPagesData(handle).data.map((data, index) => (
        <div key={index} className="space-y-6">
          <h3 className={cn(
            "text-xl text-white text-left leading-tight font-semibold",
            "lg:text-3xl lg:mx-auto",
            "xl:leading-[1.4]",
            "pointer-events-none whitespace-pre-wrap",
          )}>{data.title}</h3>
          <p className={cn("text-base font-light w-full", "lg:text-base lg:mx-auto text-subtitle lg:pb-2", "xl:text-lg xl:leading-relaxed")}>{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default LegalPage;