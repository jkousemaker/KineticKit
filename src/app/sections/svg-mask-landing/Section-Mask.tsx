"use client";
import { cn } from "@/lib/utils";
import {
  AnimationSequence,
  motion,
  useAnimate,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function HeroMask({ children }: { children: React.ReactNode }) {
  const [scope, animate] = useAnimate();
  const rotate = useSpring(0);
  return (
    <section className={cn(" w-full mt-60 relative")}>
      <div className="relative z-[999]">
        <svg ref={scope} width={2000} height={2000} className="h-full w-full">
          <defs>
            <clipPath id="repeat-bg">
              <motion.path
                style={{ rotate }}
                onMouseEnter={() => {
                  rotate.set(rotate.get() + 180);
                  console.log("enter");
                }}
                d="M2,2V158c41.974,0,76-34.922,76-78S43.974,2,2,2Z"
                className="sc-r9yo2h-0 dkfidh"
              ></motion.path>
            </clipPath>
          </defs>
          <g className="h-full w-full"></g>
        </svg>
        <svg
          ref={scope}
          width={2000}
          height={2000}
          className="h-full w-full absolute inset-0"
        >
          <g>
            <motion.path
              style={{ rotate }}
              onMouseEnter={() => {
                rotate.set(rotate.get() + 180);
                console.log("enter");
              }}
              d="M2,2V158c41.974,0,76-34.922,76-78S43.974,2,2,2Z"
              className="sc-r9yo2h-0 dkfidh"
            ></motion.path>
          </g>
        </svg>
      </div>
      {children}
    </section>
  );
}

const Path = ({
  d,

  width,
  height,
  enter,
}: {
  d: string;
  style: any;
  width: string;
  height: string;
  enter?: () => void;
}) => {
  const rotate = useMotionValue(0);
  return (
    <motion.path
      style={{ rotate }}
      d="M2,2V158c41.974,0,76-34.922,76-78S43.974,2,2,2Z"
      width={width}
      height={height}
      stroke="black"
      onMouseEnter={() => {
        rotate.set(90);
        console.log("enter");
      }}
    ></motion.path>
  );
};
