"use client";
import React, { useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function CardHeroPage({}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <main
      className="min-h-screen"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900 h-screen">
        <TiltCard x={x} y={y} ref={ref} />
      </div>
    </main>
  );
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export interface GlassButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const TiltCard = React.forwardRef<HTMLDivElement, GlassButtonProps>(
  ({ className, variant, size, children, x, y, ...props }, ref) => {
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
    return (
      <motion.div
        ref={ref}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
        >
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-2xl font-bold"
          >
            HOVER ME
          </p>
        </div>
      </motion.div>
    );
  }
);

TiltCard.displayName = "TiltCard";

// Remove the unnecessary closing curly brace
// }
