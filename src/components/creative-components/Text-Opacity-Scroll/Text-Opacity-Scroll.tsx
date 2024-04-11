"use client";
import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

function TextOpacityScroll({ text }: { text: string }) {
  return (
    <div className="w-full">
      <Paragraph text={text} />
    </div>
  );
}

function Paragraph({ text }: { text: string }) {
  const element = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.7", "end 0.25"],
  });
  const words = text.split(" ");
  return (
    <p
      ref={element}
      className="text-[50px] max-w-7xl p-[40px] flex flex-wrap leading-none"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: Array<number>;
  progress: MotionValue;
}) => {
  const charactors = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mx-3 relative">
      {charactors.map((charactor, i) => {
        const start = range[0] + i * step;
        const end = range[0] + step * (i + 1);
        return (
          <Charactor key={i} range={[start, end]} progress={progress}>
            {charactor}
          </Charactor>
        );
      })}
    </span>
  );
};

const Charactor = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export { TextOpacityScroll };
