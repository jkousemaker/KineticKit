"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
export default function TextScaleHeroPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const y = useTransform(
    scrollYProgress || new MotionValue(),
    [0, 1],
    ["0%", "-50%"]
  );
  return (
    <main className="bg-black">
      <div
        ref={container}
        className="h-screen absolute inset-0 w-screen bg-black/50"
      ></div>
      <div className="h-screen  grid content-center sticky top-0 z-10">
        <motion.div
          style={{ scale: scaleImg }}
          className="h-full w-full absolute z-20"
        >
          <Image
            src="https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg"
            alt="dev"
            fill
            className="object-cover"
          />
        </motion.div>

        <h1 className="relative z-20 text-center text-[14vw] uppercase">
          <motion.span style={{ scale, y }} className="relative inline-block">
            Givenchy
          </motion.span>
        </h1>
      </div>
      <div className="h-screen w-full relative bg-white rounded-t-[8rem] z-50"></div>
    </main>
  );
}
