"use client";
import * as React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface fadeUpProps {
  children: React.ReactNode;
  opacityOffsets?: { scroll: [number, number]; value: [number, number] };
  yStart?: number | string;
  yOffsets?: { scroll: [number, number]; value: [number, number] };
  axis?: "x" | "y";
  offsets?: { start: string; end: string };
}

const FadeUp: React.FC<fadeUpProps> = ({
  children,
  opacityOffsets = { scroll: [0, 1], value: [0, 1] },
  yStart = 50,
  yOffsets = { scroll: [0, 1], value: [yStart, 0] },
  axis = "y",
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
  const y = useTransform(scrollYProgress, yOffsets.scroll, yOffsets.value);

  return (
    <motion.div ref={targetRef} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
};

export { FadeUp };
