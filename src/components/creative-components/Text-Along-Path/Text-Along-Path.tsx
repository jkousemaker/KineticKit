"use client";
import { useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

type ScrollVariant = "normal" | "full";
type OffsetValue =
  | "start end"
  | "end end"
  | "end start"
  | `${number} ${number}`;
type UseScrollOffset = OffsetValue[];

interface VariantStyles {
  offset: UseScrollOffset;
  multiplier: number;
}

const variantMapping: Record<ScrollVariant, VariantStyles> = {
  normal: { offset: ["start end", "end end"], multiplier: 40 },
  full: { offset: ["start end", "end start"], multiplier: 80 },
};

interface TextProps {
  text: string;
  viewBox?: string;
  pathValues?: string;
  variant?: ScrollVariant;
  textSize?: number;
}

function TextAlongPath({
  text,
  viewBox = "0 0 250 90",
  pathValues = "m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68",
  variant = "normal",
  textSize = 6,
}: TextProps) {
  const container = useRef<HTMLDivElement>(null);
  const paths = useRef<SVGTextPathElement[]>([]);
  const { offset, multiplier } = variantMapping[variant];

  const { scrollYProgress } = useScroll({
    target: container,
    offset: offset,
  });
  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        (path as SVGTextPathElement).setAttribute(
          "startOffset",
          -40 + i * 40 + e * multiplier + "%"
        );
      });
    });
  }, []);

  return (
    <div ref={container} className="w-full relative">
      <svg className="w-full relative" viewBox={viewBox}>
        <path id={"curve"} fill="none" d={pathValues} />
        <text style={{ fontSize: textSize }} className="uppercase font-serif">
          {[...Array(3)].map((_, index) => {
            return (
              <textPath
                key={`path-text-${index}`}
                ref={(ref) => {
                  if (ref) {
                    paths.current[index] = ref;
                  }
                }}
                href={"#curve"}
                startOffset={index * 40 + "%"}
              >
                {text}
              </textPath>
            );
          })}
        </text>
      </svg>
    </div>
  );
}

export { TextAlongPath };
