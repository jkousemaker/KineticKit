"use client";
import { motion, useAnimationFrame, useAnimate } from "framer-motion";
import { useRef } from "react";
export default function HeroMask() {
  const ref = useRef<SVGRectElement>(null);

  useAnimationFrame((time, delta) => {
    if (ref.current) {
      ref.current.setAttribute("ry", `${time}px`);
      ref.current.setAttribute("rx", `${time}px`);
    }
  });
  const initialPath =
    "m256.46149,1051.96152c-224.72163,3.84615 -182.30769,20.99872 -120.76923,-286.15384c61.53846,-307.15257 39.12452,-273.07692 96.92308,-273.07692c57.79855,0 34.61538,-27.9218 112.30769,273.07692c77.69231,300.99872 136.26009,282.30769 -88.46154,286.15384z";
  const targetPath =
    "m256.46149,1051.96152c-218.91945,-2.78491 -170,-244.38589 -120.76923,-286.15384c49.23077,-41.76796 41.43221,-46.92308 99.23077,-46.92308c57.79855,0 59.23077,17.46281 110,46.92308c50.76923,29.46026 130.45791,288.93875 -88.46154,286.15384z";
  const curve = {
    initial: {
      d: initialPath,
    },

    enter: {
      d: targetPath,

      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: initialPath,

      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <svg width={2000} height={2000} className="h-full w-full">
      <defs>
        <clipPath id="cut-bottom">
          <motion.rect
            ref={ref}
            x="10%"
            y="10%"
            width="10vw"
            height="15vw"
            className="overflow-hidden"
          />
          <motion.rect
            x="80%"
            y="70%"
            width="10vw"
            height="10vw"
            className="overflow-hidden"
          />
          <motion.rect
            x="65%"
            y="50%"
            width="20vw"
            height="10vw"
            className="overflow-hidden"
          />
          <motion.rect
            x="10vw"
            y="35vh"
            rx="20"
            ry="20"
            width="20vw"
            height="60vh"
          />
        </clipPath>
      </defs>
      <g className="h-full w-full"></g>
    </svg>
  );
}
