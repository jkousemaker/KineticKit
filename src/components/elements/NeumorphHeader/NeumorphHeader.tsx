import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
  mode?: "light" | "dark";
}

const NeumorphHeader = React.forwardRef<HTMLButtonElement, HeaderProps>(
  ({ className, asChild = false, mode = "light", ...props }, ref) => {
    const Comp = asChild ? Slot : "h1";
    const color =
      mode === "light" ? ["#ffffff", "#d9d9d9"] : ["#000000", "#4b4b4bb3"];
    const shadow =
      mode === "light"
        ? [
            "drop-shadow(20px 20px 60px #d9d9d9)",
            "drop-shadow(-20px -20px 60px #ffffff)",
          ]
        : [
            "drop-shadow(20px 20px 60px #4b4b4bb3)",
            "drop-shadow(-20px -20px 60px #000000)",
          ];
    return (
      <Comp
        className={cn(className, "neumorph-header")}
        style={{
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: `${shadow[0]} ${shadow[1]}`,
          backgroundImage: `linear-gradient(145deg, ${color[0]}, ${color[1]})`,
        }}
        ref={ref as React.RefObject<HTMLHeadingElement>}
        {...props}
      />
    );
  }
);

NeumorphHeader.displayName = "NeumorphHeader";

export { NeumorphHeader };
