import * as React from "react";
import { cn } from "@/lib/utils";

import Image, { StaticImageData } from "next/image";

const SnugCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className,
    )}
    {...props}
  />
));
SnugCard.displayName = "SnugCard";

const SnugCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
SnugCardHeader.displayName = "SnugCardHeader";

const SnugCardThumbnail = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
SnugCardThumbnail.displayName = "SnugCardThumbnail";

const SnugCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl leading-5 font-medium tracking-tight -mx-[0.025em] mb-[0.8rem]",
      className,
    )}
    {...props}
  />
));
SnugCardTitle.displayName = "SnugCardTitle";

const SnugCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SnugCardDescription.displayName = "SnugCardDescription";

const SnugCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
SnugCardContent.displayName = "SnugCardContent";

const SnugCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
SnugCardFooter.displayName = "SnugCardFooter";

export {
  SnugCard,
  SnugCardHeader,
  SnugCardFooter,
  SnugCardTitle,
  SnugCardDescription,
  SnugCardContent,
  SnugCardThumbnail,
};
