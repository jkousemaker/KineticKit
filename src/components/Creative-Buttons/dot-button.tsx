"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, MotionConfig } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const dotButtonVariants = cva(
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

export interface DotButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof dotButtonVariants> {
  href?: string;
  direction?: "left" | "right";
  disabled?: boolean;
}

const DotButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  DotButtonProps
>(
  (
    {
      className,
      children,
      href,
      variant,
      size,
      direction = "right",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const button = React.useRef<HTMLButtonElement>(null);
    const link = React.useRef<HTMLAnchorElement>(null);
    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {
      const { offsetWidth, offsetHeight } = button.current ?? {
        offsetWidth: 0,
        offsetHeight: 0,
      };
      setWidth(offsetWidth);
      console.log("offsetWidth: ", offsetWidth, "offsetHeight: ", offsetHeight);
      const multi = offsetWidth / 4.3;
      console.log("multi: ", multi);
      setWidth(multi);
    }, []);
    const isRight = direction === "right";
    if (href) {
      return (
        <MotionConfig transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}>
          <motion.div
            variants={{ initial: { scale: 1 }, hover: { scale: 1.2 } }}
            initial="initial"
            whileHover="hover"
            className="h-fit w-fit"
          >
            <Link
              ref={link}
              href={href}
              className={cn(
                dotButtonVariants({ variant, size, className }),
                isRight ? "flex-row" : "flex-row-reverse"
              )}
              {...props}
            >
              <motion.div
                variants={{
                  initial: { scale: 1, backgroundColor: "#fff" },
                  hover: { scale: width, backgroundColor: "#0fa5e9" },
                }}
                style={{ borderRadius: 100 }}
                className="  h-2 w-2   "
              ></motion.div>

              <motion.p
                layout
                variants={{
                  initial: { x: 0 },
                  hover: { x: isRight ? -25 : 25 },
                }}
                className={cn("  relative z-50")}
              >
                {children}
              </motion.p>
              <motion.div
                variants={{
                  initial: { x: 0 },
                  hover: { x: !isRight ? "150%" : "-150%" },
                }}
                style={{ y: "-50%" }}
                className={cn(
                  isRight ? "left-full " : "right-full",
                  "w-6 h-6 absolute top-1/2 -translate-y-1/2"
                )}
              >
                <ArrowRightIcon
                  className={cn(
                    isRight ? "rotate-0" : "rotate-180",
                    "w-full h-full "
                  )}
                />
              </motion.div>
            </Link>
          </motion.div>
        </MotionConfig>
      );
    }
    return (
      <MotionConfig transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}>
        <motion.div
          variants={{ initial: { scale: 1 }, hover: { scale: 1.2 } }}
          initial="initial"
          whileHover="hover"
          className="h-fit w-fit"
        >
          <button
            className={cn(
              dotButtonVariants({ variant, size, className }),
              isRight ? "flex-row" : "flex-row-reverse"
            )}
            ref={button}
            {...props}
          >
            <motion.div
              variants={{
                initial: { scale: 1, backgroundColor: "#fff" },
                hover: { scale: width, backgroundColor: "#0fa5e9" },
              }}
              style={{ borderRadius: 100 }}
              className="  h-2 w-2   "
            ></motion.div>

            <motion.p
              layout
              variants={{
                initial: { x: 0 },
                hover: { x: isRight ? -25 : 25 },
              }}
              className={cn("  relative z-50")}
            >
              {children}
            </motion.p>
            <motion.div
              variants={{
                initial: { x: 0 },
                hover: { x: !isRight ? "150%" : "-150%" },
              }}
              style={{ y: "-50%" }}
              className={cn(
                isRight ? "left-full " : "right-full",
                "w-6 h-6 absolute top-1/2 -translate-y-1/2"
              )}
            >
              <ArrowRightIcon
                className={cn(
                  isRight ? "rotate-0" : "rotate-180",
                  "w-full h-full "
                )}
              />
            </motion.div>
          </button>
        </motion.div>
      </MotionConfig>
    );
  }
);

DotButton.displayName = "DotButton";

export { DotButton, dotButtonVariants };
