"use client";
import Image from "next/image";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function StickySectionsPage({}: {}) {
  const searchParams = useSearchParams();
  const activeVariant = searchParams.get("variants");
  const firstContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: firstContainerRef,
    offset: ["start end", "start start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    console.log(progress);
  });
  const secondContainerRef = useRef(null);
  const { scrollYProgress: scroll2 } = useScroll({
    target: secondContainerRef,
    offset: ["start end", "start start"],
  });
  const thirdContainerRef = useRef(null);
  const { scrollYProgress: scroll3 } = useScroll({
    target: thirdContainerRef,
    offset: ["start end", "start start"],
  });
  const fourthContainerRef = useRef(null);
  const { scrollYProgress: scroll4 } = useScroll({
    target: fourthContainerRef,
    offset: ["start end", "start start"],
  });
  const fifthContainerRef = useRef(null);
  const { scrollYProgress: scroll5 } = useScroll({
    target: fifthContainerRef,
    offset: ["start end", "start start"],
  });
  const sections = [
    {
      img: "/sticky-sections-icons/1.png",
      title: "ALGORITHM",
      text: "The algorithm's workings are shrouded in complexity, and its decision-making processes are inscrutable to the general populace.",
      bgColor: "#1e293b",
    },
    {
      img: "/sticky-sections-icons/2.png",
      title: "DOGMA",
      text: "The digital gospel etched into the very code of the algorithmic society, served as the bedrock of the cognitive regime.",
      bgColor: "#12151a",
    },
    {
      img: "/sticky-sections-icons/3.png",
      title: "ARCHITECTS",
      text: "The elusive entities, lacking human form, operate in the shadows, skillfully shaping societal norms through the complex interplay of algorithms and Dogmas.",
      bgColor: "#000b1c",
    },
    {
      img: "/sticky-sections-icons/4.png",
      title: "WASTELAND",
      text: "This overlooked realm, a consequence of algorithmic judgments, is a haunting landscape filled with the echoes of untold stories and uncharted thoughts.",
      bgColor: "#1e293b",
    },
    {
      img: "/sticky-sections-icons/5.png",
      title: "ALGORITHM",
      text: "The algorithm's workings are shrouded in complexity, and its decision-making processes are inscrutable to the general populace.",
      bgColor: "#1e293b",
    },
    {
      img: "/sticky-sections-icons/6.png",
      title: "DOGMA",
      text: "The digital gospel etched into the very code of the algorithmic society, served as the bedrock of the cognitive regime.",
      bgColor: "#12151a",
    },
  ];

  const variants = [
    { id: 0, title: "Regular" },
    { id: 1, title: "Scale Down" },
  ];
  return (
    <main className="relative">
      <div className="h-screen"></div>
      <div className="">
        <Section section={sections[0]} scrollYProgress={scrollYProgress} />
        <Section
          section={sections[1]}
          ref={firstContainerRef}
          scrollYProgress={scroll2}
        />
        <Section
          section={sections[2]}
          ref={secondContainerRef}
          scrollYProgress={scroll3}
        />
        <Section
          section={sections[3]}
          ref={thirdContainerRef}
          scrollYProgress={scroll4}
        />
        <Section
          section={sections[4]}
          ref={fourthContainerRef}
          scrollYProgress={scroll5}
        />
        <Section section={sections[5]} ref={fifthContainerRef} />
      </div>
      <div className="h-screen"></div>
      <div className="fixed bottom-0 z-[9999]">
        {variants.map((variant, index) => (
          <Link key={index} href={`?variant=${variant.id}`}>
            {variant.title}
          </Link>
        ))}
      </div>
    </main>
  );
}

const sectionVariants = cva(
  "relative cursor-pointer overflow-hidden text-white    z-50 focus:ring whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary ",
        light: "bg-slate-200",
      },
      size: {
        default: "h-14 px-8 rounded-lg text-lg font-semibold tracking-tighter",
        small: "h-10 px-4 rounded-lg text-sm font-semibold tracking-tighter",
        large:
          "h-[68px] px-10 rounded-full text-xl font-semibold tracking-tighter",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  section: {
    img: string;
    bgColor: string;
    title: string;
    text: string;
  };
  scrollYProgress?: MotionValue<number>;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ section, scrollYProgress, ...props }, ref) => {
    const filter = useTransform(
      scrollYProgress || new MotionValue(),
      [0, 0.7, 1],
      [
        "brightness(100%) contrast(100%)",
        "brightness(80%) contrast(135%)",
        "brightness(0%) contrast(200%)",
      ]
    );
    const y = useTransform(
      scrollYProgress || new MotionValue(),
      [0, 1],
      ["0%", "-20%"]
    );
    const imgY = useTransform(
      scrollYProgress || new MotionValue(),
      [0, 1.5],
      ["0%", "-40%"]
    );
    const imgRotate = useTransform(
      scrollYProgress || new MotionValue(),
      [0, 1],
      ["0deg", "-20deg"]
    );

    return (
      <motion.section
        style={{ filter, y, backgroundColor: section.bgColor }}
        ref={ref}
        className="text-white w-screen h-screen px-12 py-8 justify-center items-center sticky top-0 grid overflow-hidden gap-x-[5vw] gap-y-[2vh] content-center [grid-template-areas:_'content-img_content-title'_'content-img_content-text'] grid-cols-[30%_1fr] justify-items-start "
      >
        <motion.div
          style={{ y: imgY, rotate: imgRotate }}
          className="relative justify-self-end w-[160%] h-full [grid-area:_content-img] max-w-72"
        >
          <Image
            src={section.img}
            alt="dev"
            fill
            className="w-full h-full object-contain"
          />
        </motion.div>
        <h2 className="text-[80px]  font-bold tracking-[-0.04em] uppercase self-end [grid-area:_content-title]">
          <span className="font-thin">The </span>
          {section.title}
        </h2>
        <p className="text-left self-start max-w-[500px] leading-normal py-4 [grid-area:_content-text;] [backface-visibility:_hidden;]">
          {section.text}
        </p>
      </motion.section>
    );
  }
);
Section.displayName = "Section";
