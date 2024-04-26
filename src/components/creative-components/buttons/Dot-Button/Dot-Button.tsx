"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { motion, MotionProps } from "framer-motion";
import React, { FC } from "react";
import { ThickArrowRightIcon } from "@radix-ui/react-icons";

const dotButtonVariants = cva(
  "relative cursor-pointer overflow-hidden text-white    z-50 focus:ring whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary ",
        light: "bg-slate-200",
      },
      size: {
        default: "h-14 px-8 rounded-lg text-lg font-semibold tracking-tighter",
        small: "h-10 px-4 rounded-lg text-sm font-semibold tracking-tighter",
        large:
          "h-[68px] px-10 rounded-full text-xl font-semibold tracking-tighter",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface DotButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof dotButtonVariants> {
  asChild?: boolean;
  direction?: "left" | "right";
  icon?: React.ReactNode;
}

const createComponent = (asChild: boolean) => {
  return asChild ? Slot : "button";
};

const DotButton = React.forwardRef<HTMLButtonElement, DotButtonProps>(
  (
    { className, asChild = false, variant, size, children, icon, ...props },
    ref,
  ) => {
    const Component = createComponent(asChild);

    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className=""
      >
        <Component
          className={cn(dotButtonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          <div className="w-full h-full inline-flex items-center">
            <DotButtonDot
              variant={variant}
              size={size}
              className="origin-[33%]"
            />
            <motion.span
              variants={{
                initial: { x: -10, opacity: 0 },
                animate: { x: 5, opacity: 1 },
                hover: { x: -15 },
              }}
              className="relative pointer-events-none block mix-blend-difference"
            >
              {children}
            </motion.span>
          </div>
        </Component>
      </motion.div>
    );
  },
);

DotButton.displayName = "DotButton";

const DotButtonDotVariants = cva("rounded-full absolute left-5", {
  variants: {
    variant: {
      default: "bg-white",
      light: "bg-theme",
    },
    size: {
      default: "h-2 w-2 mr-2",
      small: "",
      large: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface DotButtonDotProps
  extends MotionProps,
    VariantProps<typeof DotButtonDotVariants> {
  className?: string;
}

const scaleValues = {
  default: 16,
  large: 50,
  small: 10,
};

const DotButtonDot = ({
  className,
  variant,
  size,
  ...props
}: DotButtonDotProps) => {
  const scaleValue = scaleValues[size || "default"];
  return (
    <motion.span
      variants={{
        initial: { scale: 0 },
        animate: { scale: 1 },
        hover: { scale: scaleValue },
      }}
      className={cn(DotButtonDotVariants({ variant, size, className }))}
      {...props}
    />
  );
};

const DotButtonIconVariants = cva("rounded-full absolute right-0", {
  variants: {
    variant: {
      default: "",
      light: "",
    },
    size: {
      default: "h-5 w-5",
      small: "",
      large: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface DotButtonIconProps
  extends MotionProps,
    VariantProps<typeof DotButtonIconVariants> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "light" | null | undefined;
  size?: "small" | "default" | "large" | null | undefined;
}

const createDotButtonIcon = (props: DotButtonIconProps) => {
  const { className, variant, size, children, ...rest } = props;
  return (
    <motion.span
      variants={{
        initial: { opacity: 0, x: 50 },
        animate: { x: 50, opacity: 1 },
        hover: { x: 0 },
      }}
      className={
        cn(DotButtonIconVariants({ variant, size, className })) +
        " mix-blend-difference absolute right-0"
      }
      {...rest}
    >
      {children}
    </motion.span>
  );
};

const DotButtonIcon = React.forwardRef<HTMLSpanElement, DotButtonIconProps>(
  (props, ref) => {
    return createDotButtonIcon(props);
  },
);
DotButtonIcon.displayName = "DotButtonIcon";
export { DotButton, dotButtonVariants, DotButtonIcon };
