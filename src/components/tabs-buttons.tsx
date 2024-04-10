import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CardStackMinusIcon, FrameIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export default function TabsButtons({
  setTab,
  isPreview,
}: {
  setTab: (tab: "preview" | "code") => void;
  isPreview: boolean;
}) {
  return (
    <div className="flex flex-row space-x-2">
      <Button
        variant="ghost"
        className={cn(
          "w-32 gap-1 relative z-10",
          isPreview && "!text-white z-20"
        )}
        onClick={() => setTab("preview")}
      >
        <FrameIcon className="w-4 h-4 relative z-50" />
        <span className={cn("relative z-50")}>Preview</span>
        {isPreview && (
          <motion.div
            layoutId="test"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute inset-0 w-full h-full bg-primary rounded-md"
          ></motion.div>
        )}
      </Button>

      <Button
        variant="ghost"
        className={cn(
          "w-32 gap-1 relative z-10",
          !isPreview && "!text-white z-20"
        )}
        onClick={() => setTab("code")}
      >
        <CardStackMinusIcon className="w-4 h-4 relative z-50" />
        <span className={cn("relative z-50")}>Code</span>
        {!isPreview && (
          <motion.div
            layoutId="test"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute inset-0 w-full h-full bg-primary rounded-md"
          ></motion.div>
        )}
      </Button>
    </div>
  );
}
