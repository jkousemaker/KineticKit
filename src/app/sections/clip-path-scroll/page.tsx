"use client";
import Image from "next/image";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  MotionValue,
  useSpring,
  useAnimate,
  useMotionValue,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { useCursorStore, useCursorStoreProps } from "@/stores/cursorStore";
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

let vertical = {
  clipPaths: {
    step1: {
      initial: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      final: "polygon(40% 50%, 60% 50%, 80% 50%, 20% 50%)",
    },
    step2: {
      initial: "polygon(20% 50%, 80% 50%, 60% 50%, 40% 50%)",
      final: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
  },
};

export default function ClipPathScroll() {
  return (
    <main className="bg-[#0b0826] relative flex flex-col gap-60">
      <div className="h-screen"></div>
      <FullscreenSection />
      <FlipSection />
      <SwitchSection />
      <Clickable />
      <div className="h-screen"></div>
    </main>
  );
}

const FullscreenSection = ({}) => {
  const containerRef = useRef(null);
  const fullscreenOffset = 0.6; //When scrollYProgress is this value, the image is fullscreen
  const halfScreenOffset = fullscreenOffset / 2;
  const { scrollYProgress: scroll } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "end 0.7"],
  });
  const scrollYProgress = useSpring(scroll, { damping: 50, stiffness: 500 });
  const clipPath = useTransform(
    scrollYProgress,
    [0, halfScreenOffset, halfScreenOffset, fullscreenOffset],
    [
      defaults.clipPaths.step1.initial,
      defaults.clipPaths.step1.final,
      defaults.clipPaths.step2.initial,
      defaults.clipPaths.step2.final,
    ],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, halfScreenOffset, fullscreenOffset, 1],
    [0.3, 0.7, 1, 1.2],
  );
  const filter = useTransform(
    scrollYProgress,
    [0, halfScreenOffset, fullscreenOffset, 1],
    [
      "brightness(100%) contrast(100%) opacity(100%)",
      "brightness(60%) contrast(200%) opacity(100%)",
      "brightness(100%) contrast(100%) opacity(100%)",
      "brightness(60%) contrast(200%) opacity(0%)",
    ],
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, halfScreenOffset, fullscreenOffset, 1],
    [0, 35, 0, 2],
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, halfScreenOffset, fullscreenOffset, 1],
    [0, -35, 0, 25],
  );
  const transform = useMotionTemplate`translate3d(0px, 0px, 0px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`;
  const opacity = useTransform(() =>
    scrollYProgress.get() < halfScreenOffset ? 1 : 0,
  );
  const opacity2 = useTransform(() =>
    scrollYProgress.get() >= halfScreenOffset ? 1 : 0,
  );
  return (
    <div className="grid  [grid-template-areas:_'title'_'layout'_'...';] place-items-center grid-cols-[3.5vw_auto_3.5vw]  leading-tight gap-4">
      <div className="h-[350vh] [grid-area:_layout;] w-full" ref={containerRef}>
        <div className=" sticky top-0 h-screen  w-full">
          <ContentText
            offset={fullscreenOffset}
            scrollYProgress={scrollYProgress}
          />
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
                quality={100}
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
                quality={100}
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
  const { scrollYProgress: scroll } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "end 0.7"],
  });
  const scrollYProgress = useSpring(scroll, { damping: 50, stiffness: 500 });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 0.5, 1],
    [
      defaults.clipPaths.step1.initial,
      defaults.clipPaths.step1.final,
      defaults.clipPaths.step2.initial,
      defaults.clipPaths.step2.final,
    ],
  );
  const filter = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["brightness(100%)", "brightness(800%)", "brightness(100%)"],
  );
  const opacity = useTransform(() => (scrollYProgress.get() < 0.5 ? 1 : 0));
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.4]);
  const transform = useMotionTemplate`translate3d(0px, 0px, 0px) rotateY(${rotateY}deg) scale(${scale})`;
  const opacity2 = useTransform(() => (scrollYProgress.get() >= 0.5 ? 1 : 0));
  const rotateY2 = useTransform(scrollYProgress, [0.5, 1], [40, 0]);
  const scale2 = useTransform(scrollYProgress, [0.5, 1], [1.4, 1]);
  const transform2 = useMotionTemplate`translate3d(0px, 0px, 0px) rotateY(${rotateY2}deg) scale(${scale2})`;
  return (
    <section
      ref={containerRef}
      className=" flex justify-center items-center  leading-tight gap-4 [perspective:_800px;]"
    >
      <div className="  flex justify-center items-center">
        <motion.div
          style={{ clipPath, filter }}
          className="[perspective:_1000px;] relative overflow-hidden grid place-items-center w-[70vw] h-auto aspect-[16/8]"
        >
          <motion.div
            style={{ opacity, transform }}
            className="h-full w-full absolute inset-0"
          >
            <Image
              src="https://tympanus.net/Development/OnScrollShapeMorph/img/4.jpg"
              alt="dev"
              quality={100}
              fill
            />
          </motion.div>
          <motion.div
            style={{ opacity: opacity2, transform: transform2 }}
            className="h-full w-full absolute inset-0"
          >
            <Image
              src="https://tympanus.net/Development/OnScrollShapeMorph/img/3.jpg"
              alt="dev"
              quality={100}
              fill
            />
          </motion.div>
        </motion.div>
      </div>
      <p className="text-center text-white self-stretch justify-between  text-[clamp(2rem,7vw,6rem)] h-[150%] top-[-25%]  uppercase z-[100] flex flex-col font-normal leading-[0.8] absolute inset-0">
        <span className="">Obey the silence</span>
        <span className="">Rebels in shadows</span>
      </p>
    </section>
  );
};

const SwitchSection = ({}) => {
  const containerRef = useRef(null);
  const { scrollYProgress: scroll } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "end 0.7"],
  });
  const scrollYProgress = useSpring(scroll, { damping: 50, stiffness: 500 });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 0.5, 1],
    [
      vertical.clipPaths.step1.initial,
      vertical.clipPaths.step1.final,
      vertical.clipPaths.step2.initial,
      vertical.clipPaths.step2.final,
    ],
  );
  const filter = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "brightness(100%) hue-rotate(0deg) invert(0)",
      "brightness(800%) hue-rotate(90deg) invert(0)",
      "brightness(100%) hue-rotate(0deg) invert(0)",
    ],
  );
  const opacity = useTransform(() => (scrollYProgress.get() < 0.5 ? 1 : 0));
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);
  const scaleX = useTransform(scrollYProgress, [0, 0.5], [1, 1.8]);
  const transform = useMotionTemplate`translate3d(0px, 0px, 0px) rotate(${rotate}deg) scaleX(${scaleX})`;
  const opacity2 = useTransform(() => (scrollYProgress.get() >= 0.5 ? 1 : 0));
  const rotate2 = useTransform(scrollYProgress, [0.5, 1], [5, 0]);
  const scaleX2 = useTransform(scrollYProgress, [0.5, 1], [1.8, 1]);
  const transform2 = useMotionTemplate`translate3d(0px, 0px, 0px) rotateY(${rotate2}deg) scale(${scaleX2})`;
  return (
    <section
      ref={containerRef}
      className=" flex justify-center items-center  leading-tight gap-4 [perspective:_500px;] "
    >
      <div className="  flex justify-center items-center">
        <motion.div
          style={{ clipPath, filter }}
          className="[perspective:_1000px;] relative overflow-hidden grid place-items-center w-[70vw] h-auto aspect-[16/8]"
        >
          <motion.div
            style={{ opacity, transform }}
            className="h-full w-full absolute inset-0"
          >
            <Image
              src="https://tympanus.net/Development/OnScrollShapeMorph/img/5.jpg"
              alt="dev"
              quality={100}
              fill
            />
          </motion.div>
          <motion.div
            style={{ opacity: opacity2, transform: transform2 }}
            className="h-full w-full absolute inset-0"
          >
            <Image
              src="https://tympanus.net/Development/OnScrollShapeMorph/img/6.jpg"
              alt="dev"
              quality={100}
              fill
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Clickable = ({}) => {
  const updateVariant = useCursorStore(
    (state: useCursorStoreProps) => state.updateVariant,
  );
  const [scope, animate] = useAnimate();
  const clipPath = useMotionValue(vertical.clipPaths.step1.initial);
  const rotate = useMotionValue(0);
  const scale = useMotionValue(1);

  async function handleClick() {
    await animate(clipPath, vertical.clipPaths.step1.final);
    await animate(clipPath, vertical.clipPaths.step2.initial);
    await animate(clipPath, vertical.clipPaths.step2.final);
  }

  return (
    <section
      ref={scope}
      className=" flex justify-center items-center  leading-tight gap-4 [perspective:_500px;] "
    >
      <div className="  flex justify-center items-center">
        <motion.div
          style={{
            clipPath,
            //filter: useMotionTemplate`brightness(${brightness}%) grayscale(${grayscale}%)`,
            transform: useMotionTemplate`rotate(${rotate}deg) scale(${scale})`,
          }}
          onMouseEnter={() => updateVariant("Custom")}
          onMouseLeave={() => updateVariant("Default")}
          onClick={() => handleClick()}
          id="clip-mask-parent"
          className="[perspective:_1000px;] relative overflow-hidden grid place-items-center w-[70vw] h-auto aspect-[16/8]"
        >
          <motion.div className="h-full w-full absolute inset-0">
            <Image
              src="https://tympanus.net/Development/OnScrollShapeMorph/img/9.jpg"
              alt="dev"
              quality={100}
              fill
            />
          </motion.div>
          <motion.div className="h-full w-full absolute inset-0">
            <Image
              src="https://tympanus.net/Development/OnScrollShapeMorph/img/10.jpg"
              alt="dev"
              quality={100}
              fill
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ContentText = ({
  children,
  scrollYProgress,
  offset = 0.7,
}: {
  children?: React.ReactNode;
  scrollYProgress: MotionValue;
  offset?: number;
}) => {
  const opacity = useTransform(scrollYProgress, [offset, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [offset * 0.8, 1], ["20%", "-30%"]);
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
