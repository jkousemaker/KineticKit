"use client";
import * as React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface scaleUpProps {
  children: React.ReactNode;
  opacityOffsets?: { scroll: [number, number]; value: [number, number] };
  scaleStart?: number | string;
  scaleOffsets?: { scroll: [number, number]; value: [number, number] };
  origin?:
    | string
    | "bottom"
    | "top"
    | "left"
    | "right"
    | "center"
    | "top left"
    | "top right"
    | "bottom left"
    | "bottom right"
    | "left top"
    | "left bottom"
    | "right top"
    | "right bottom"
    | "center top"
    | "center bottom"
    | "center left"
    | "center right"
    | "top center"
    | "bottom center";
  axis?: "x" | "y";
  offsets?: any;
}

const ScaleUp: React.FC<scaleUpProps> = ({
  children,
  opacityOffsets = { scroll: [0, 1], value: [0, 1] },
  scaleStart = 0,
  scaleOffsets = { scroll: [0, 1], value: [scaleStart, 1] },
  axis = "y",
  origin = "center",
  offsets = { start: "end end", end: "start center" },
}) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    axis: axis,
    offset: [offsets.start, offsets.end],
  });
  const opacity = useTransform(
    scrollYProgress,
    opacityOffsets.scroll,
    opacityOffsets.value
  );
  const scale = useTransform(
    scrollYProgress,
    scaleOffsets.scroll,
    scaleOffsets.value
  );

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, scale, transformOrigin: origin }}
    >
      {children}
    </motion.div>
  );
};

export { ScaleUp };
