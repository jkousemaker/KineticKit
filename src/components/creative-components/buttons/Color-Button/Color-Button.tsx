"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";

const colorButtonVariants = cva(
  "relative cursor-pointer overflow-hidden z-50 focus:ring whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent text-[#1d1d1f]",
        light: "",
      },
      size: {
        default: "h-14 rounded-full text-lg font-semibold tracking-tighter",
        lerge: "h-[68px] rounded-full text-xl font-semibold tracking-tighter",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ColorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof colorButtonVariants> {
  asChild?: boolean;
  bgColors?: string[];
}

const ColorButton = React.forwardRef<HTMLButtonElement, ColorButtonProps>(
  (
    {
      className,
      asChild = false,
      bgColors = ["#a374ff", "#17f1d1", "#ffd074"],
      variant,
      size,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={cn(colorButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <motion.div
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="w-full h-full inline-flex items-center px-10"
        >
          <motion.span
            className="absolute w-full h-full inset-0 block pointer-events-none rounded-full overflow-hidden"
            variants={{
              hover: {
                scale: 0.95,
              },
            }}
            transition={{
              duration: 1.8,
              ease: [0.19, 1, 0.22, 1],
            }}
            style={{
              backgroundColor: bgColors.findLast((color) => color),
            }}
          >
            <span className="absolute w-[max(200%,_10rem)] aspect-square left-1/2 -top-[60%] -translate-x-1/2 block">
              {bgColors.map((color, index) => (
                <motion.span
                  key={index}
                  style={{
                    backgroundColor: color,
                  }}
                  variants={{
                    initial: {
                      scale: 0,
                    },
                    hover: {
                      scale: 1,
                    },
                  }}
                  transition={{
                    duration: 1.3,
                    delay: index * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="absolute inset-0 w-full h-full rounded-full block"
                />
              ))}
            </span>
          </motion.span>
          <span className="relative pointer-events-none block">
            <motion.span
              className="relative inline-block"
              variants={{
                hover: {
                  opacity: 0,
                  y: "-70%",
                },
              }}
              transition={{
                duration: 1.4,
                ease: [0.19, 1, 0.22, 1],
                opacity: {
                  duration: 0.5,
                  ease: "linear",
                },
              }}
            >
              {children}
            </motion.span>
            <motion.span
              variants={{
                initial: {
                  opacity: 0,
                  y: "70%",
                },
                hover: {
                  opacity: 1,
                  y: "0%",
                },
              }}
              transition={{
                duration: 1.4,
                ease: [0.19, 1, 0.22, 1],
                opacity: {
                  duration: 0.5,
                  ease: [0.64, 0.49, 0.2, 0.95],
                },
              }}
              className="absolute top-0 left-0"
            >
              {children}
            </motion.span>
          </span>
        </motion.div>
      </Component>
    );
  },
);

ColorButton.displayName = "ColorButton";

/*const colorButtonShadowVariants = cva(
  "mx-auto   rounded-full  absolute -bottom-1/2 transition-all duration-200  ease-out",
  {
    variants: {
      variant: {
        default: "bg-[#80ffca] opacity-40 group-hover:opacity-20",
        light: "bg-theme opacity-40 group-hover:opacity-20",
      },
      size: {
        default: "w-[100px] h-[60px] blur-[20px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ColorButtonShadowProps
  extends React.ButtonHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof colorButtonShadowVariants> {}

const ColorButtonShadow = React.forwardRef<
  HTMLSpanElement,
  ColorButtonShadowProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <span
      className={cn(colorButtonShadowVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
ColorButtonShadow.displayName = "ColorButtonShadow";*/
export { ColorButton, colorButtonVariants };
