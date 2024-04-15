import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const ctaButtonVariants = cva(
  "flex flex-col justify-center rounded-full border-0 items-center relative cursor-pointer z-50 focus:ring  whitespace-nowrap transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: " bg-transparent border-2 border-theme-light ",
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
  }
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
      <div className="relative group flex justify-center">
        <CtaButtonShadow variant={variant} size={size} />
        <Component
          className={cn(ctaButtonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Component>
      </div>
    );
  }
);

CtaButton.displayName = "CtaButton";

const ctaButtonShadowVariants = cva(
  "mx-auto   rounded-full  absolute -bottom-1/2 transition-all duration-200  ease-out",
  {
    variants: {
      variant: {
        default: "bg-[#80ffca] opacity-40 group-hover:opacity-20 ",
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

export interface CtaButtonShadowProps
  extends React.ButtonHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof ctaButtonShadowVariants> {}

const CtaButtonShadow = React.forwardRef<HTMLSpanElement, CtaButtonShadowProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        className={cn(ctaButtonShadowVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CtaButtonShadow.displayName = "CtaButtonShadow";
export { CtaButton, ctaButtonVariants };
