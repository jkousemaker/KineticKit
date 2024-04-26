"use client";
import Image from "next/image";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

let defaults = {
  clipPaths: {
    step1: {
      initial: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      final: "polygon(50% 0%, 50% 50%, 50% 50%, 50% 100%)",
    },
    step2: {
      initial: "polygon(50% 50%, 50% 0%, 50% 100%, 50% 50%)",
      final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
  },
};

export default function ClipPathScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 0.5, 1],
    [
      defaults.clipPaths.step1.initial,
      defaults.clipPaths.step1.final,
      defaults.clipPaths.step2.initial,
      defaults.clipPaths.step2.final,
    ]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 1]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "brightness(100%) contrast(100%)",
      "brightness(60%) contrast(400%)",
      "brightness(100%) contrast(100%)",
    ]
  );

  return (
    <main className="">
      <div className="h-screen"></div>
      <div
        ref={containerRef}
        className="grid h-[200vh] place-items-center leading-tight [grid-template-areas:_'title'_'layout'_'...'] [grid-template-rows:_3.5vw_auto_3.5vw] gap-4"
      >
        <div className="[grid-area:_layout] sticky top-0 h-screen">
          <motion.div
            className="relative w-screen h-screen [perspective:_400px]"
            style={{ clipPath, scale, filter }}
          >
            <Image src="/selfie.jpg" alt="dev" fill />
          </motion.div>
        </div>
        <p className="justify-self-start p-12 self-center [grid-area:_layout] relative z-[100] uppercase text-6xl flex flex-col font-normal leading-[0.8]">
          <span>You make me dream </span>
          <span>Your dreams</span>
        </p>
      </div>
      <div className="h-screen"></div>
    </main>
  );
}

//https://tympanus.net/Development/OnScrollShapeMorph/
//https://github.com/codrops/OnScrollShapeMorph/blob/main/js/index.js
