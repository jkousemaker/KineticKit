"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
  motion,
  MotionConfig,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const shinyButtonVariants = cva(
  "inline-flex relative items-center justify-center whitespace-nowrap rounded-md text-sm font-medium overflow-hidden transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#111016]/20 border-[2px] border-[#333339] parent text-primary-foreground after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:z-10 after:bg-gradient-to-t after:from-[#333339] after:translate-y-full hover:after:translate-y-0 after:transition-transform after:duration-500 after:ease-out",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        pill: "px-8 py-3 rounded-[1.75rem] font-light text-md",
        padded: "h-10 rounded-lg px-12 py-8 text-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "pill",
    },
  },
);

export interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof shinyButtonVariants> {
  asChild?: boolean;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(shinyButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

ShinyButton.displayName = "ShinyButton";

export { ShinyButton, shinyButtonVariants };
