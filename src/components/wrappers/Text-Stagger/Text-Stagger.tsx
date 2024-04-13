"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TextStagger = ({
  children,
  className,
  staggerDelay = 0.1,
  duration = 1,
  easing = [0.6, 0.01, -0.05, 0.95],
}: {
  children: string;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  easing?: number[];
}) => {
  const charactors = children.split("");
  return (
    <div className="overflow-hidden">
      <span
        className={cn(
          "text-[280px] text-black leading-normal font-medium relative -tracking-[0.8rem] whitespace-nowrap",
          className
        )}
      >
        {charactors.map((charactor, i) => {
          const delay = i * staggerDelay;
          return (
            <Charactor
              key={i}
              char={charactor}
              delay={delay}
              duration={duration}
              easing={easing}
            />
          );
        })}
      </span>
    </div>
  );
};

const Charactor = ({
  char,
  delay,
  duration,
  easing,
}: {
  char: string;
  delay: number;
  duration: number;
  easing: number[];
}) => {
  return (
    <motion.span
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: duration, delay: delay, ease: easing }}
      className="relative inline-block"
    >
      {char}
    </motion.span>
  );
};

export { TextStagger };
