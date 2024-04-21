"use client";
import React, { useEffect, useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useDragControls,
  useTime,
  useTransform,
} from "framer-motion";
import { BubbleLetters } from "@/components/wrappers/Bubble-Letters";
import { ScaleIn } from "@/components/wrappers/Scale-In";
import { FadeIn } from "@/components/wrappers/Fade-In";
import { CtaButton } from "@/components/creative-components/buttons/Cta-Button/Cta-Button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { ColorButton } from "@/components/creative-components/buttons/Color-Button";
import Image from "next/image";
import noise from "@public/noise.jpg";
const ROTATION_RANGE = 20.5;
const HALF_ROTATION_RANGE = 20.5 / 2;

export default function CardHeroPage({}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) => {
    if (!ref.current) return [0, 0];
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  return (
    <main onMouseMove={handleMouseMove} className="h-screen">
      <section
        style={{ perspective: "5000px" }}
        className="relative z-20 grid w-full place-content-center  px-4 py-12 h-screen inset-0"
      >
        <div className="">
          <h2 className="text-[11rem] lowercase text-white text-center  -tracking-[0.08em] relative z-50 font-bold">
            <span className="block -ml-[.5rem] leading-[0.75]">
              <ScaleIn>
                <BubbleLetters>conversion </BubbleLetters>
              </ScaleIn>
            </span>

            <span className="leading-[0.8] flex flex-row overflow-visible items-center">
              <span className="text-[11rem] lowercase text-white text-center pointer-events-none  -tracking-[0.08em] relative z-50">
                through
              </span>
              <ColorButton size="lerge" className="ml-20">
                Discover what we do
              </ColorButton>
            </span>
            <FadeIn>
              <span className="block ml-[14.3rem] leading-[.9]">Immersion</span>
            </FadeIn>
          </h2>
        </div>
        <div className="absolute bottom-0 left-0 -ml-14 -mb-14 z-30">
          <CtaButton className="border-none">
            <ArrowDownIcon className="h-14 w-12 text-black" />
          </CtaButton>
        </div>
        <TiltCard x={x} y={y} ref={ref} />
      </section>
      <section className="relative z-10 pt-40 pb-44">
        <div className="px-10 w-full mx-auto block">
          <div className="grid gap-8 grid-cols-[repeat(12,minmax(0,1fr))]">
            <div className="col-start-4 col-span-2 text-center">
              <h3 className="-ml-2 mt-1 font-bold text-[#a374ff] text-[0.9rem] uppercase tracking-[0.15em]">
                Selected work
              </h3>
            </div>
            <div className="col-start-6 col-span-5">
              <p className=" min-w-[33rem] pr-16 text-5xl leading-tight font-medium tracking-tighter">
                Enjoy some of our best work in immersive
                <span className="text-[#a374ff]"> web</span>,
                <span className="text-[#17f1d1]"> augmented reality </span>
                and
                <span className="text-[#ffd074]"> virtual reality </span>
                experiences
              </p>
            </div>
          </div>
        </div>
        <Carousal />
      </section>
      <NoiseTexture />
      <SpotlightBackground />
    </main>
  );
}

const Carousal = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const controls = useDragControls();
  return (
    <motion.div
      drag="x"
      dragControls={controls}
      className="flex flex-row gap-5"
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="w-1/3">
          <div className="relative w-full h-96 bg-black rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h4 className="text-white text-2xl font-semibold tracking-tighter">
                Project Name
              </h4>
              <p className="text-white text-lg font-light tracking-tighter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                etiam, sit amet nunc.
              </p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
});

Carousal.displayName = "Carousal";

const NoiseTexture = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const time = useTime();

  return (
    <motion.div
      style={{}}
      ref={ref}
      className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] overflow-hidden pointer-events-none select-none z-50 bg-[url('/noise.jpg')] bg-repeat bg-center bg-[length:10%] opacity-[0.08]"
    ></motion.div>
  );
});

NoiseTexture.displayName = "NoiseTexture";

const SpotlightBackground = React.forwardRef<HTMLDivElement>(({}, ref) => {
  let bgX = useSpring(0, { stiffness: 350, damping: 100 });
  let bgY = useSpring(0, { stiffness: 350, damping: 100 });
  const handleMouseMove = (e: MouseEvent) => {
    //Update the parameter type to MouseEvent
    const { clientX, clientY } = e;

    bgX.set(clientX);
    bgY.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="z-10 fixed inset-0 w-screen h-screen bg-gradient-to-br from-indigo-500/20 to-violet-500/20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 ? 1 : 0 }}
        className="absolute inset-0 w-full h-full mix-blend-difference   z-0 pointer-events-none"
        style={{
          background: useMotionTemplate`
          radial-gradient(circle at ${bgX}px ${bgY}px,#706ab6 15%,#000 70%)
            
          `,
        }}
      ></motion.div>
    </div>
  );
});
SpotlightBackground.displayName = "SpotlightBackground";

export interface GlassButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const TiltCard = React.forwardRef<HTMLDivElement, GlassButtonProps>(
  ({ className, children, x, y, ...props }, ref) => {
    const xSpring = useSpring(x, {
      stiffness: 1800,
      damping: 150,
    });
    const ySpring = useSpring(y, {
      stiffness: 1800,
      damping: 150,
    });
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
    return (
      <div className="absolute w-full h-full z-20 inset-0 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 360, damping: 40 }}
          ref={ref}
          style={{
            transformStyle: "preserve-3d",
            transform,
          }}
          className="absolute mx-auto  back   z-20  bg-gradient-to-br from-indigo-500 to-violet-300 rounded-[50px] h-[45rem] w-[55rem]"
        >
          <div
            className=""
            style={{
              transform: "translateZ(200px)",
              transformStyle: "preserve-3d",
            }}
          ></div>
          <div
            style={{
              transform: "translateZ(80px)",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-4  place-content-center rounded-[50px] z-10 bg-black shadow-lg flex justify-center items-center w-full h-full overflow-hidden"
          >
            <div className="relative z-0 w-full h-full">
              <video
                autoPlay
                playsInline
                loop
                muted
                src="/video.mp4"
                className="object-cover w-full h-full grayscale-[50%] sepia-[50%]"
              ></video>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);

TiltCard.displayName = "TiltCard";

// Remove the unnecessary closing curly brace
// }
