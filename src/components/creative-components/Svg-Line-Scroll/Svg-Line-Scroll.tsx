"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface svgLineProps {
  viewBox?: string;
  pathValues?: string;
  stroke?: string;
}
function SvgLineScroll({
  viewBox = "0 0 250 90",
  pathValues = "m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68",
  stroke = "black",
}: svgLineProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.5", "start start"],
  });
  return (
    <div className="w-full relative" ref={container}>
      <svg className="w-full" viewBox={viewBox}>
        <motion.path
          style={{ pathLength: scrollYProgress }}
          stroke={stroke}
          fill="none"
          d={pathValues}
        />
      </svg>
    </div>
  );
}

export { SvgLineScroll };
