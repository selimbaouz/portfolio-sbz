import { cn } from "@/lib/utils";
import {
  isDragCursorStore,
  isWorkCursorStore,
} from "@/stores";
import { GoArrowDownRight } from "react-icons/go";

interface CircleMouseProps {
  FrameSelectorName?: string;
}
const CircleMouse = ({
  FrameSelectorName = "circle",
}: CircleMouseProps) => {
  const {isWorkCursor} = isWorkCursorStore();
  const {isDragCursor} = isDragCursorStore();

  return (
    <div
      className={cn(
        "hidden z-10 size-2 rounded-full bg-white absolute mix-blend-exclusion translate-x-[50%] translate-y-[50%] top-0 left-0 pointer-events-none",
        "md:block",
        "circle",
        FrameSelectorName,
      )}
    >
      {isWorkCursor && (
        <GoArrowDownRight
          className="text-black h-full w-full rotate-[-90deg]"
          style={{ fontSize: 5 }}
        />
      )}
      {isDragCursor && (
        <p
          className="text-black h-full w-full flex justify-center items-center"
          style={{ fontSize: 2 }}
        >
          Drag
        </p>
      )}
    </div>
  );
};

export default CircleMouse;
