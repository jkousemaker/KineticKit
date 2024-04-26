"use client";
import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const markerEngageVariants = cva(
  "!bg-transparent  relative whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "!text-white",
        dark: "!text-black",
      },
      origin: {
        default: "left",
        right: "right",
        center: "center",
      },
    },
    defaultVariants: {
      variant: "default",
      origin: "default",
    },
  },
);

export interface MarkerEngageProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof markerEngageVariants> {
  bgColor?: string;
  once?: boolean;
  margin?: string;
  children: string;
}

const MarkerEngage = React.forwardRef<HTMLElement, MarkerEngageProps>(
  (
    { className, children, once = true, margin = "-100px", variant, origin },
    ref,
  ) => {
    const letters = children.split("") as string[];
    return (
      <motion.mark
        ref={ref}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: once, margin: margin, amount: "all" }}
        className={cn(markerEngageVariants({ variant, origin, className }))}
      >
        <span className="relative z-20">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 1 },
                visible: { opacity: [0, 1] },
              }}
              transition={{
                duration: 10.3,
                delay: (letters.length - 1 - index) * 0.06, // Adjusted delay calculation
                scale: {
                  duration: 0.5,
                  delay: (letters.length - 1 - index) * 0.06,
                }, // Adjusted delay calculation
              }}
              className="relative inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
        <Background letters={letters} variant={variant} origin={origin} />
      </motion.mark>
    );
  },
);

const backgroundVariants = cva("absolute inset-0 w-full h-full z-10", {
  variants: {
    variant: {
      default: "!bg-indigo-500",
      dark: "!bg-purple-500",
    },
    origin: {
      default: "origin-left",
      right: "origin-right",
      center: "origin-center",
    },
  },
  defaultVariants: {
    variant: "default",
    origin: "default",
  },
});

export interface BackgroundProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof backgroundVariants> {
  bgColor?: string;
  once?: boolean;
  margin?: string;
  children: string;
}

const Background = ({
  className,
  letters,
  variant,
  origin,
}: {
  className?: string;
  letters: string[];
  variant?: string | null | undefined;
  origin?: string | null | undefined;
}) => {
  return (
    <motion.span
      variants={{ hidden: { scaleX: 1 }, visible: { scaleX: 1 } }}
      transition={{ duration: letters.length * 0.06 }}
      className={cn(
        backgroundVariants({
          variant: variant as any,
          origin: origin as any,
          className,
        }),
      )}
    ></motion.span>
  );
};

MarkerEngage.displayName = "Marker";

export { MarkerEngage };
