"use client";
import React, { useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { TextStagger } from "@/components/wrappers/Text-Stagger";
import { BubbleLetters } from "@/components/wrappers/Bubble-Letters";
import { ScaleUp } from "@/components/wrappers/Scale-Up";
import { FadeIn } from "@/components/wrappers/Fade-In";
import { CtaButton } from "@/components/creative-components/buttons/Cta-Button/Cta-Button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
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

  return (
    <main className="h-screen ">
      <div
        onMouseMove={handleMouseMove}
        style={{ perspective: "5000px" }}
        className="z-20 grid w-full place-content-center bg-gradient-to-br from-indigo-500/20 to-violet-500/20 px-4 py-12 text-slate-900 h-screen absolute inset-0"
      >
        <h2 className="text-[11rem] lowercase text-white text-center  -tracking-[0.08em] relative z-50 font-semibold">
          <span className="block -ml-[.5rem] leading-[0.3]">
            <ScaleUp>
              <BubbleLetters>conversion </BubbleLetters>
            </ScaleUp>
          </span>

          <span className=" leading-[1.3] flex flex-row">
            <TextStagger className="text-[11rem] lowercase text-white text-center  -tracking-[0.08em] relative z-50 font-semibold">
              through
            </TextStagger>
          </span>
          <FadeIn>
            <span className="block ml-[14.3rem] leading-[.5]">components</span>
          </FadeIn>
        </h2>
        <div className="absolute bottom-0 left-0 -ml-14 -mb-14">
          <CtaButton className="border-none">
            <div className="border-2 border-theme-light rounded-full absolute w-full h-full inset-0">
              <ArrowDownIcon className="h-14 w-14 text-black" />
            </div>
          </CtaButton>
        </div>
        <TiltCard x={x} y={y} ref={ref} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 ? 1 : 0 }}
          className="absolute w-full h-full mix-blend-difference bottom-0 left-0  z-0"
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
