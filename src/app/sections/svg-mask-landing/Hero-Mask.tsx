"use client";
import { cn } from "@/lib/utils";
import {
  AnimationSequence,
  motion,
  useAnimate,
  useMotionTemplate,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import SectionMask from "./Section-Mask";
import Image from "next/image";

export default function HeroMask({ children }: { children: React.ReactNode }) {
  const [finishedAnimation, setFinishedAnimation] = useState(false);
  const [blurDataURL, setBlurDataURL] = useState<string | undefined>(undefined);
  const [scope, animate] = useAnimate();
  const firstSequence: AnimationSequence = [
    [
      "#rect-1",
      { y: "50%" },
      { duration: 1, at: 0, ease: [0.65, 0.05, 0.36, 1] },
    ],
    [
      "#rect-2",
      { x: "5%", y: "20%" },
      { duration: 1.5, at: 0, ease: [0.65, 0.05, 0.36, 1] },
    ],
    [
      "#rect-3",
      { x: "35%", y: "65%" },
      { duration: 1, at: 0, ease: [0.65, 0.05, 0.36, 1] },
    ],
    [
      "#rect-4",
      { x: "74%", y: "15%" },
      { duration: 1, at: 0, ease: [0.65, 0.05, 0.36, 1] },
    ],
  ];

  const secondSequence: AnimationSequence = [
    [
      "#rect-1",
      { height: "25vw", width: "35vw", x: "0%", y: "0%" },
      { duration: 1, at: 0, ease: [0.65, 0.05, 0.36, 1] },
    ],
    [
      "#rect-2",
      { height: "25vw", width: "10vw", x: "10%", y: "50%" },
      { duration: 1, at: 0, ease: [0.65, 0.05, 0.36, 1] },
    ],
    [
      "#rect-3",
      { x: "75%", y: "70%" },
      { duration: 1, at: 0, ease: [0.65, 0.05, 0.36, 1] },
    ],
    [
      "#rect-4",
      { height: "40vw", width: "55vw", x: "40%", y: "10%" },
      { duration: 2, at: 0, ease: [0.65, 0.05, 0.36, 1] },
    ],
  ];
  const thirdSequence: AnimationSequence = [
    [
      "#rect-1",
      { height: "25vw", width: "25vw", x: "10%", y: "10%" },
      { duration: 1, at: 0, ease: [0.65, 0.05, 0.36, 1] },
    ],
    [
      "#rect-2",
      {
        height: "15vw",
        width: "15vw",
        x: "70%",
        y: "50%",
        ry: "100%",
        rx: "100%",
      },
      {
        duration: 1,
        at: 0,
        ease: [0.65, 0.05, 0.36, 1],
      },
    ],
    [
      "#rect-3",
      { height: "0vw" },
      { duration: 1, at: 0, ease: [0.65, 0.05, 0.36, 1] },
    ],
    [
      "#rect-4",
      { height: "40vw", width: "0vw" },
      { duration: 1, at: 0, ease: [0.65, 0.05, 0.36, 1] },
    ],
  ];
  const { scrollY } = useScroll();

  useEffect(() => {
    const animation = async () => {
      setFinishedAnimation(false);
      await animate(firstSequence, { delay: 1 });
      await animate(secondSequence, { delay: 1 });
      await animate(thirdSequence, { delay: 1 });
      setFinishedAnimation(true);
    };

    animation();
  }, []);

  return (
    <div
      className={cn(
        " w-full h-screen overflow-hidden",
        finishedAnimation && "!h-fit",
      )}
    >
      <div className="">
        <svg ref={scope} width={2000} height={2000} className="h-full w-full">
          <defs>
            <clipPath id="cut-bottom">
              <motion.rect
                initial={{
                  x: "10%",
                  y: "10%",
                  width: "10vw",
                  height: "0vw",
                }}
                animate={{
                  width: "10vw",
                  height: "25vw",
                }}
                transition={{ duration: 1, ease: [0.65, 0.05, 0.36, 1] }}
                id="rect-1"
                className="overflow-hidden"
              />
              <motion.rect
                initial={{
                  x: "35%",
                  y: "20%",
                  width: "0vw",
                  height: "10vw",
                }}
                animate={{ width: "35vw", height: "10vw" }}
                transition={{ duration: 1, ease: [0.65, 0.05, 0.36, 1] }}
                id="rect-2"
                className="overflow-hidden"
                style={{
                  transform: useMotionTemplate`translateX(${scrollY}px)`,
                }}
              />
              <motion.rect
                initial={{
                  x: "25%",
                  y: "65%",
                  width: "0vw",
                  height: "20vw",
                }}
                animate={{
                  width: "25vw",
                }}
                transition={{ duration: 1, ease: [0.65, 0.05, 0.36, 1] }}
                id="rect-3"
                className="overflow-hidden"
              />
              <motion.rect
                initial={{
                  x: "74%",
                  y: "15%",
                  width: "15vw",
                  height: "0vw",
                }}
                animate={{ width: "15vw", height: "40vw" }}
                transition={{ duration: 1, ease: [0.65, 0.05, 0.36, 1] }}
                id="rect-4"
                className="overflow-hidden"
              />
            </clipPath>
          </defs>
          <g className="h-full w-full"></g>
        </svg>
        {children}
      </div>

      <SectionMask>
        <Image
          src="https://images.unsplash.com/photo-1471893370050-2c1a36cf555c?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ clipPath: "url(#repeat-bg)", objectFit: "cover" }}
          className=" w-full h-full absolute inset-0 "
          width={5000}
          height={5000}
          alt="A person standing in front of a mountain"
        />{" "}
      </SectionMask>
    </div>
  );
}
