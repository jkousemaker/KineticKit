"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";

const ctaButtonVariants = cva(
  "cursor-pointer z-50 focus:ring  whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: " bg-transparent ",
        light:
          "!text-theme bg-transparent group-hover:translate-y-[5px] !shadow-theme/50 !ring-theme-light",
      },
      size: {
        default: "h-[17.5rem] w-[17.5rem] ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface CtaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean;
}

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ className, asChild = false, variant, size, children, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={cn(ctaButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <motion.span
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="w-full h-full relative inline-flex justify-center items-center"
        >
          <motion.span
            variants={{
              initial: {
                backgroundColor: "#00000000",
                scale: 1,
              },
              hover: {
                backgroundColor: "#A374FF",
                scale: 0.3,
              },
            }}
            transition={{
              duration: 0.6,
              ease: "linear",
              scale: {
                duration: 1.5,
                ease: [0.19, 1, 0.22, 1],
              },
            }}
            className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-2 border-[#A374FF] z-0"
          ></motion.span>
          <span className="relative z-20 overflow-hidden h-14">
            <motion.span
              variants={{
                initial: {
                  y: "-100%",
                },
                hover: {
                  y: 0,
                },
              }}
              transition={{
                duration: 1.5,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="absolute inset-0"
            >
              {children}
            </motion.span>
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hover: {
                  y: "100%",
                },
              }}
              transition={{
                duration: 1.5,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="relative inline-block"
            >
              {children}
            </motion.span>
          </span>
        </motion.span>
      </Component>
    );
  },
);

CtaButton.displayName = "CtaButton";

export { CtaButton, ctaButtonVariants };
