"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useEffect } from "react";

const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const gaps = ["100%", "160%", "100%", "110%"];
const spaces = ["110%", "130%", "100%", "115%"];
const rotates = ["50%", "55%", "50%", "50%"];

const AnimatedAurora = ({ progress }: { progress: MotionValue }) => {
  const y = useTransform(progress, (latest) => latest * 1000);
  const opacity = useTransform(progress, [0.8, 1], [1, 0]);
  const color = useMotionValue(colors[0]);
  const gap = useMotionValue(gaps[0]);
  const space = useMotionValue(spaces[0]);
  const rotate = useMotionValue(rotates[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(${gap} ${space} at ${rotate} 0%, #ffffff00 50%, ${color})`;

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
      delay: 1,
    });
    animate(gap, gaps, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
      delay: 1,
    });
    animate(space, spaces, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
      delay: 1,
    });
    animate(rotate, rotates, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
      delay: 1,
    });
  }, []);
  return (
    <div className="pointer-events-none  w-full h-screen min-h-[600px] inline-block absolute inset-0 z-50  ">
      <motion.div
        style={{
          backgroundImage,
          y,
          opacity,
        }}
        className="w-full h-[70vh] absolute z-[1] bottom-0 left-0 right-0"
      ></motion.div>
    </div>
  );
};

export { AnimatedAurora };
