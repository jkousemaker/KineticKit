"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import btnBg1 from "@public/btn-bg/button-bg-2.png";
import btnBg2 from "@public/btn-bg/button-small-4.png";
import { motion, useTime, useTransform } from "framer-motion";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const glowButtonVariants = cva(
  "inline-flex flex-col justify-center relat border-0 !bg-transparant overflow-hidden items-center group pointers-event-auto relative cursor-pointer z-50 focus:ring  whitespace-nowrap transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "  rounded-3xl text-white",
        light: "rounded-lg text-white",
        round: "bg-[#ffffff0d] rounded-full hover:bg-[#ffffff0d] !text-white",
      },
      size: {
        sm: "text-sm py-2 px-4 rounded-md h-9",
        default: "h-[5vw] w-[5vw]",
        lg: "h-[8vw] w-[8vw]  text-lg",
        xl: "w-[13vw] h-[13vw]  p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glowButtonVariants> {
  asChild?: boolean;
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, asChild = false, variant, size, children, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={cn(glowButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <GlowButtonBackground variant={variant} size={size} />
        <span className="relative z-40 group-hover:tracking-wider transition-all duration-300">
          {children}
        </span>
      </Component>
    );
  }
);

GlowButton.displayName = "GlowButton";

const glowButtonBackgroundVariants = cva("absolute z-50 ", {
  variants: {
    variant: {
      default: " ",
      light: "",
      round: "bg-[#ffffff0d] hover:bg-[#ffffff0d] !text-white",
    },
    size: {
      sm: "w-[120%]",
      default: "w-[120%]",
      lg: "w-[130%]",
      xl: "w-[110%] h-[110%]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface GlowButtonBackgroundProps
  extends React.ButtonHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof glowButtonBackgroundVariants> {}

const GlowButtonBackground = React.forwardRef<
  HTMLSpanElement,
  GlowButtonBackgroundProps
>(({ className, variant, size, ...props }, ref) => {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 10000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );
  return (
    <span
      className={cn(glowButtonBackgroundVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      <motion.span style={{ rotate }} className="relative inline-block">
        <Image
          src={btnBg1}
          alt="btn-bg"
          className="object-cover bg-no-repeat w-full h-full group-hover:scale-125 transition-transform duration-300 "
        />
      </motion.span>
    </span>
  );
});
GlowButtonBackground.displayName = "GlowButtonBackground";
export { GlowButton, glowButtonVariants };
