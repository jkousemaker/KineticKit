import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const glassButtonVariants = cva(
  "flex flex-col justify-center border-0 items-center relative cursor-pointer z-50 focus:ring  whitespace-nowrap transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          " bg-transparent !text-[#b3ffdf] group-hover:translate-y-[5px]  !shadow-[#80ffca]/25 !ring-[#b3ffdf]",
        light:
          "!text-theme bg-transparent group-hover:translate-y-[5px] !shadow-theme/50 !ring-theme-light",
      },
      size: {
        default:
          "h-[50px] w-[160px] rounded-lg text-base shadow-[inset_0px_-3px_15px_0px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, asChild = false, variant, size, children, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <div className="relative group flex justify-center">
        <GlassButtonShadow variant={variant} size={size} />
        <Component
          className={cn(glassButtonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Component>
      </div>
    );
  }
);

GlassButton.displayName = "GlassButton";

const glassButtonShadowVariants = cva(
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

export interface GlassButtonShadowProps
  extends React.ButtonHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof glassButtonShadowVariants> {}

const GlassButtonShadow = React.forwardRef<
  HTMLSpanElement,
  GlassButtonShadowProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <span
      className={cn(glassButtonShadowVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
GlassButtonShadow.displayName = "GlassButtonShadow";
export { GlassButton, glassButtonVariants };
