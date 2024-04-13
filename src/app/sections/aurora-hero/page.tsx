"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { NeumorphHeader } from "@/components/elements/NeumorphHeader";
import { DotButton } from "@/components/creative-components/buttons/Dot-Button";
import Image from "next/image";

import picture from "@public/aurora.webp";

import { AnimatedAurora } from "@/components/sections/Animated-Aurora";

export default function AuroraHeroPage() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end 1.2"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <main className="h-[400vh] w-full relative bg-[#0c0117] overflow-clip">
      <AnimatedAurora progress={scrollYProgress} />
      <Header containerRef={container}>
        <motion.div
          style={{ scale, opacity }}
          className="z-0 w-full min-h-[65vh] text-center flex flex-col justify-center items-start mx-auto pt-[6rem] pb-[4rem] sticky top-0"
        >
          <div className="flex flex-col items-center mx-auto">
            <div className="flex flex-row w-full justify-between items-center mt-8 mb-10">
              {Array.from({ length: 6 }).map((_, index) => (
                <p key={index} className="text-7xl text-white">
                  {index + 1}
                </p>
              ))}
            </div>
            <NeumorphHeader>Accelerate Your Designs</NeumorphHeader>
            <div className="w-full max-w-[32rem] relative p-8">
              <p className="text-white text-xl ">
                Sidebar is an exclusive program that grows your career or
                business through the power of peers.
              </p>
            </div>
            <DotButton>Explore</DotButton>
          </div>
        </motion.div>
        <BottomSection progress={scrollYProgress} />
      </Header>
    </main>
  );
}

const Header = ({
  children,
  containerRef,
}: {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <header className=" relative z-20 h-full flex flex-col origin-bottom">
      <div className="px-10 w-full">
        <div className="w-full max-w-[80rem] mx-auto">
          <div ref={containerRef} className="flex flex-col relative">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};

const BottomSection = ({ progress }: { progress: MotionValue }) => {
  const width = useTransform(progress, [0, 0.4, 1], ["30%", "60%", "100%"]);
  const value = useTransform(progress, [0, 1], [-11, 0]);

  const transfor = useMotionTemplate`translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${value}deg) skew(0deg, 0deg)`;
  const transforr = useMotionTemplate`translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, ${value}deg)`;
  return (
    <div className="z-[2] flex flex-col justify-start pt-[6rem] sticky top-[10vh]">
      <div className="flex items-start flex-col ">
        <div
          className="z-[2] w-full flex flex-col items-start relative gap-5"
          id="grid"
        >
          <motion.div
            style={{
              transform: transfor,
              transformStyle: "preserve-3d",
            }}
            className="z-[2] w-full flex flex-row items-center relative"
          >
            <motion.div
              style={{
                width,
              }}
              className="z-[4] w-full h-[.28125rem] relative rounded-[100rem] bg-[#e8daff] "
            >
              <div className="absolute w-auto h-[300%] -bottom-1/2 scale-75 aspect-square  right-0">
                <div className="w-full h-full bg-white  rounded-full relative"></div>
                <div className="w-full h-full bg-white  rounded-full blur-[2px] absolute inset-0 scale-[2]"></div>
                <div className="absolute inset-0 w-full h-full scale-[4] bg-white/80 rounded-full blur-[2px]"></div>
                <div className="absolute inset-0 w-full h-full scale-[7] bg-white/40 rounded-full blur-[6px]"></div>
                <div className="absolute inset-0 w-full h-full scale-[10] bg-white/80 rounded-full blur-[5px]"></div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              transform: transforr,
              transformStyle: "preserve-3d",
            }}
            className="w-full h-full relative"
          >
            <Image
              src={picture}
              priority
              height={1000}
              width={1600}
              className="w-full h-full object-cover"
              alt="dev"
            />
          </motion.div>

          <div className="px-0 p-16"></div>
        </div>
      </div>
    </div>
  );
};
