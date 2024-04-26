"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const images = [
  "apple.jpg",

  "apple.jpg",

  "apple.jpg",

  "apple.jpg",

  "apple.jpg",

  "apple.jpg",

  "apple.jpg",

  "apple.jpg",

  "apple.jpg",

  "apple.jpg",

  "apple.jpg",

  "apple.jpg",
];

export default function GalleryParralaxPage() {
  const gallery = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,

    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <main className="min-h-screen">
      <div className="h-screen"></div>
      <div ref={gallery} className="h-[175vh] overflow-hidden bg-slate-900">
        <div className="relative -top-[12.5vh] h-[200vh] flex gap-[2vw] p-[2vw]">
          <Column
            className="-top-[30%]"
            y={y}
            images={[images[0], images[1], images[2]]}
          />
          <Column
            className="-top-[70%]"
            y={y2}
            images={[images[3], images[4], images[5]]}
          />
          <Column
            className="-top-[30%]"
            y={y3}
            images={[images[6], images[7], images[8]]}
          />
          <Column
            className="-top-[60%]"
            y={y4}
            images={[images[9], images[10], images[11]]}
          />
        </div>
      </div>
      <div className="h-screen"></div>
    </main>
  );
}

const Column = ({
  images,
  y,
  className,
}: {
  images: string[];
  y: MotionValue;
  className?: string;
}) => {
  return (
    <motion.div
      style={{ y }}
      className={cn(
        "relative h-full w-1/4 min-w-60 flex flex-col gap-[2vw] whitespace-nowrap",
        className,
      )}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="rounded-[1vw] relative h-1/3 w-full overflow-hidden"
        >
          <Image src={`/${image}`} fill alt="dev" className="object-cover" />
        </div>
      ))}
    </motion.div>
  );
};
