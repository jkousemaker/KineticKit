"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, MotionConfig } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const glassButtonVariants = cva(
  " relative gap-[15px] hover:scale-110 active:scale-100  focus:scale-110 focus:ring ring-slate-600 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        dark: "bg-slate-900 text-white ",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        pill: "px-[25px] py-[15px] rounded-[100rem]",
        padded: "h-10 rounded-lg px-12 py-8 text-md",
        xl: "h-12 rounded-md px-10 py-3 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof glassButtonVariants> {
  href?: string;
}

const GlassButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  GlassButtonProps
>(({ className, children, href, variant, size, ...props }, ref) => {
  const button = React.useRef<HTMLButtonElement>(null);
  const link = React.useRef<HTMLAnchorElement>(null);
  return (
    <div className="p-10 bg-slate-900">
      <Button
        className={cn(
          glassButtonVariants({ variant, size, className }),
          "h-[50px] w-[160px] border-none rounded-xl bg-[#4dffb503] shadow-[0px_-3px_15px_0px_#80ffca40_inset] text-[#b3ffdf] group overflow-visible"
        )}
        style={{}}
      >
        {children}
        <span className="w-[100px] h-[60px] bg-[#80ffca40] rounded-full blur-[20px] absolute -bottom-1/2 transition-all duration-200 group-hover:opacity-80 ease-out"></span>
      </Button>
    </div>
  );
});

GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
