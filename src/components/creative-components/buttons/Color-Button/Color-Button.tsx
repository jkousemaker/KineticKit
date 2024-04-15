"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, MotionConfig } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const colorButtonVariants = cva(
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

export interface ColorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof colorButtonVariants> {
  href?: string;
}

const ColorButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ColorButtonProps
>(({ className, children, href, variant, size, ...props }, ref) => {
  const button = React.useRef<HTMLButtonElement>(null);
  const link = React.useRef<HTMLAnchorElement>(null);
  return (
    <Button
      className={cn(
        colorButtonVariants({ variant, size, className }),
        " w-48 h-20 group !bg-transparent p-0 !border-none !shadow-none interactable"
      )}
    >
      <div className="relative h-[inherit] w-[inherit] transition-transform duration-[1.5s] group-hover:scale-[0.94] overflow-hidden rounded-full bg-theme">
        <span className="bg-theme-light absolute rounded-t-full group-hover:rounded-t-[60%]  translate-y-full group-hover:translate-y-4 w-[120%] h-[200%] left-1/2 -translate-x-1/2 bottom-0  group-hover:[transition:_transform_1s_cubic-bezier(0.19,_1,_0.22,_1)_200ms,_border-radius_0.2s_cubic-bezier(0.19,_1,_0.22,_1)_270ms] z-10"></span>
        <span className="bg-red-800 absolute rounded-t-full group-hover:rounded-t-[60%]   translate-y-full group-hover:translate-y-4 w-[120%] h-[200%] left-1/2 -translate-x-1/2 bottom-0 group-hover:[transition:_transform_1s_cubic-bezier(0.19,_1,_0.22,_1)_300ms,_border-radius_0.2s_cubic-bezier(0.19,_1,_0.22,_1)_470ms] z-20"></span>
        <span className="bg-theme absolute rounded-t-full group-hover:rounded-t-[60%]   translate-y-full group-hover:translate-y-4 w-[120%] h-[200%] left-1/2 -translate-x-1/2 bottom-0 group-hover:[transition:_transform_1s_cubic-bezier(0.19,_1,_0.22,_1)_480ms,_border-radius_0.2s_cubic-bezier(0.19,_1,_0.22,_1)_670ms] z-30 "></span>
      </div>
      <motion.span className="relative flex items-center justify-center inset-0 m-auto z-50 text-lg group-hover:!-translate-y-[33%] group-hover:!opacity-0 transition-none group-hover:transition-all !duration-1000 !ease-custom ">
        {children}
      </motion.span>
      <motion.span className="absolute flex items-center justify-center inset-0 m-auto z-50 text-lg translate-y-[33%] opacity-0 group-hover:!opacity-100 group-hover:!translate-y-0 transition-none group-hover:transition-all !duration-1000 !ease-custom">
        {children}
      </motion.span>
    </Button>
  );
});

ColorButton.displayName = "ColorButton";

export { ColorButton, colorButtonVariants };
