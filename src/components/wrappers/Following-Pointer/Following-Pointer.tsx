"use client";
import * as React from "react";
import { useState } from "react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface FollowingPointerProps {
  children: React.ReactNode;
}

const FollowingPointer: React.FC<FollowingPointerProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative"
    >
      <AnimatePresence>
        {isHovered && <Pointer x={mouseX} y={mouseY} />}
      </AnimatePresence>

      {children}
    </div>
  );
};

const Pointer = ({ x, y }: { x: MotionValue; y: MotionValue }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="absolute  pointer-events-none origin-bottom"
      style={{ x, y }}
    >
      <div className="relative bg-white/60 backdrop-blur-sm border py-2 px-4 rounded-md top-5">
        <p>Tooltip</p>
      </div>
    </motion.div>
  );
};

export { FollowingPointer };

// Add a way to use Pointer component as export to put children in it
