"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
export default function LayeredParralaxPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <main className="">
      <section
        ref={ref}
        className="relative h-screen overflow-hidden grid place-items-center"
      >
        <motion.h1
          style={{ y: textY }}
          className="text-7xl font-bold text-white md:text-9xl relative z-10"
        >
          Parallax
        </motion.h1>
        <motion.div
          style={{ y: backgroundY }}
          className="absolute z-0 w-full h-full inset-0"
        >
          <Image
            src="/image-full.png"
            alt="dev"
            fill
            className="relative w-full h-full"
          />
        </motion.div>
        <div className="absolute z-50 w-full h-full inset-0">
          <Image
            src="/image-bottom.png"
            alt="dev"
            fill
            className="relative w-full h-full"
          />
        </div>
      </section>
      <div className="h-screen"></div>
    </main>
  );
}
