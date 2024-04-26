"use client";
import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const markerVariants = cva("!bg-transparent  relative whitespace-nowrap", {
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
});

export interface MarkerProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof markerVariants> {
  bgColor?: string;
  once?: boolean;
  margin?: string;
  children: string;
}

const Marker = React.forwardRef<HTMLElement, MarkerProps>(
  (
    { className, children, once = true, margin = "-100px", variant, origin },
    ref
  ) => {
    const letters = children.split("") as string[];
    return (
      <motion.mark
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: once, margin: margin, amount: "all" }}
        className={cn(markerVariants({ variant, origin, className }))}
      >
        <span className="relative z-20">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 1.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.06,
                scale: { duration: 0.5, delay: index * 0.06 },
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
  }
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
      variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
      transition={{ duration: letters.length * 0.06 }}
      className={cn(
        backgroundVariants({
          variant: variant as any,
          origin: origin as any,
          className,
        })
      )}
    ></motion.span>
  );
};

Marker.displayName = "Marker";

export { Marker };
