"use client";
import React, { useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 20.5;
const HALF_ROTATION_RANGE = 20.5 / 2;

export default function CardHeroPage({}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  let bgX = useSpring(0, { stiffness: 1800, damping: 150, velocity: 1 });
  let bgY = useSpring(0, { stiffness: 1800, damping: 150, velocity: 1 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) => {
    if (!ref.current) return [0, 0];
    const rect = ref.current.getBoundingClientRect();
    let { left, top } = currentTarget.getBoundingClientRect();

    bgX.set(clientX - left);
    bgY.set(clientY - top);
    console.log(rect);

    const width = rect.width;
    const height = rect.height;

    const mouseX = (clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    console.log(width, height);
    console.log(rX, rY, mouseX, mouseY, width, height);
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
      style={{ perspective: "100px" }}
    >
      <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500/50 to-violet-500/50 px-4 py-12 text-slate-900 h-screen relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 ? 1 : 0 }}
          className="absolute w-full h-full inset-0  z-0"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              650px circle at ${bgX}px ${bgY}px,
              rgba(160, 53, 255, 0.50),
              transparent 124%
            )
          `,
          }}
        ></motion.div>
        <TiltCard x={x} y={y} ref={ref} />
      </div>
    </main>
  );
}

export interface GlassButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const TiltCard = React.forwardRef<HTMLDivElement, GlassButtonProps>(
  ({ className, children, x, y, ...props }, ref) => {
    const xSpring = useSpring(x, {
      stiffness: 1800,
      damping: 150,
      velocity: 1,
    });
    const ySpring = useSpring(y, {
      stiffness: 1800,
      damping: 150,
      velocity: 1,
    });
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 40 }}
        ref={ref}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative  back     bg-gradient-to-br from-indigo-300 to-violet-300 rounded-[50px] h-[32.5rem] w-[36.25rem]"
      >
        <div
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 grid place-content-center rounded-[50px] bg-white shadow-lg"
        >
          <p
            style={{
              transform: "translateZ(50px) scale(1.5)",
            }}
            className="text-center text-2xl font-bold  relative"
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
