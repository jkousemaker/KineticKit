"use client";
import Image from "next/image";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

const fullscreenOffset = 0.7; //When scrollYProgress is this value, the image is fullscreen
const halfScreenOffset = fullscreenOffset / 1.75;

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
  return (
    <main className="bg-[#0b0826] relative">
      <div className="h-screen"></div>
      <FullscreenSection />
      <FlipSection />
      <div className="h-screen"></div>
    </main>
  );
}

const FullscreenSection = ({}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.3", "end end"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, halfScreenOffset, halfScreenOffset, fullscreenOffset],
    [
      defaults.clipPaths.step1.initial,
      defaults.clipPaths.step1.final,
      defaults.clipPaths.step2.initial,
      defaults.clipPaths.step2.final,
    ]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, halfScreenOffset, fullscreenOffset, 1],
    [0.3, 0.7, 1, 1.2]
  );
  const filter = useTransform(
    scrollYProgress,
    [0, halfScreenOffset, fullscreenOffset, 1],
    [
      "brightness(100%) contrast(100%) opacity(100%)",
      "brightness(60%) contrast(400%) opacity(100%)",
      "brightness(100%) contrast(100%) opacity(100%)",
      "brightness(60%) contrast(400%) opacity(0%)",
    ]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, halfScreenOffset, fullscreenOffset, 1],
    [0, 35, 0, 2]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, halfScreenOffset, fullscreenOffset, 1],
    [0, -35, 0, 25]
  );
  const transform = useMotionTemplate`translate3d(0px, 0px, 0px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`;
  const opacity = useTransform(() =>
    scrollYProgress.get() < halfScreenOffset ? 1 : 0
  );
  const opacity2 = useTransform(() =>
    scrollYProgress.get() >= halfScreenOffset ? 1 : 0
  );
  return (
    <div className="grid  [grid-template-areas:_'title'_'layout'_'...';] place-items-center grid-cols-[3.5vw_auto_3.5vw]  leading-tight gap-4">
      <div className="[grid-area:_title;] row-[1_/_span_3] flex text-center self-stretch justify-between text-[clamp(2rem,_7vw,_6rem)] relative z-[100] flex-col uppercase">
        <h1 className="">Hey</h1>
      </div>
      <div className="h-[250vh] [grid-area:_layout;] w-full" ref={containerRef}>
        <div className=" sticky top-0 h-screen  w-full">
          <ContentText scrollYProgress={scrollYProgress} />
          <motion.div
            className="relative w-screen h-screen [perspective:_400px]"
            style={{ clipPath, filter, transform }}
          >
            <motion.div
              style={{ opacity }}
              className="h-full w-full absolute inset-0"
            >
              <Image
                src="https://tympanus.net/Development/OnScrollShapeMorph/img/7.jpg"
                alt="dev"
                fill
              />
            </motion.div>
            <motion.div
              style={{ opacity: opacity2 }}
              className="h-full w-full absolute inset-0"
            >
              <Image
                src="https://tympanus.net/Development/OnScrollShapeMorph/img/8.jpg"
                alt="dev"
                fill
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FlipSection = ({}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, halfScreenOffset, halfScreenOffset, fullscreenOffset],
    [
      defaults.clipPaths.step1.initial,
      defaults.clipPaths.step1.final,
      defaults.clipPaths.step2.initial,
      defaults.clipPaths.step2.final,
    ]
  );
  const opacity = useTransform(() =>
    scrollYProgress.get() < halfScreenOffset ? 1 : 0
  );
  const opacity2 = useTransform(() =>
    scrollYProgress.get() >= halfScreenOffset ? 1 : 0
  );
  return (
    <section
      ref={containerRef}
      className=" grid  [grid-template-areas:_'title'_'layout'_'...';] place-items-center grid-cols-[3.5vw_auto_3.5vw]  leading-tight gap-4 [perspective:_800px;]"
    >
      <div className="[grid-area:_layout;] col-[2_/_span_1] flex justify-center items-center">
        <div className="[perspective:_1000px;] relative overflow-hidden grid place-items-center w-[70vh] h-auto aspect-[16/8]">
          <motion.div
            style={{ opacity }}
            className="h-full w-full absolute inset-0"
          >
            <Image
              src="https://tympanus.net/Development/OnScrollShapeMorph/img/4.jpg"
              alt="dev"
              fill
            />
          </motion.div>
          <motion.div
            style={{ opacity: opacity2 }}
            className="h-full w-full absolute inset-0"
          >
            <Image
              src="https://tympanus.net/Development/OnScrollShapeMorph/img/3.jpg"
              alt="dev"
              fill
            />
          </motion.div>
        </div>
      </div>
      <p className="text-center text-white self-stretch justify-between  text-[clamp(2rem,7vw,6rem)] relative [grid-area:_title;] row-[1_/_span_3] uppercase z-[100] flex flex-col font-normal leading-[0.8]">
        <span className="">Obey the silence</span>
        <span className="">Rebels in shadows</span>
      </p>
    </section>
  );
};

const ContentText = ({
  children,
  scrollYProgress,
}: {
  children?: React.ReactNode;
  scrollYProgress: MotionValue;
}) => {
  const opacity = useTransform(scrollYProgress, [fullscreenOffset, 1], [0, 1]);
  const y = useTransform(
    scrollYProgress,
    [fullscreenOffset * 0.8, 1],
    ["20%", "-30%"]
  );
  return (
    <motion.p
      style={{ opacity, y }}
      className="justify-self-start p-12 self-center absolute bottom-0 [grid-area:_layout;]  z-[100] flex flex-col text-white"
    >
      <span className="uppercase text-[clamp(2rem,_6vw,_4rem)] font-normal leading-[0.8] whitespace-nowrap">
        You make me dream{" "}
      </span>
      <span className="uppercase text-[clamp(2rem,_6vw,_4rem)] font-normal leading-[0.8] whitespace-nowrap">
        Your dreams
      </span>
      <span className="mt-[10vh] text-xl font-light leading-tight max-w-md">
        Do you ever dream of a dream so real it makes you question reality? What
        is reality? Do you question it? Turn off the light switch. Does it turn
        off? Question right now: is it a dream? You always wake up once you
        realize it's a dream. So, don't wake up. Realize it's a dream. That's
        how you enter the real world.
      </span>
    </motion.p>
  );
};

//https://tympanus.net/Development/OnScrollShapeMorph/
//https://github.com/codrops/OnScrollShapeMorph/blob/main/js/index.js
