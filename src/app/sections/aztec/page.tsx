"use client";
import { useRef } from "react";
import Scene from "./scene";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function AztecPage() {
  const controls = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: controls,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value);
  });
  return (
    <main ref={controls} className="h-screen my-[100vh]">
      <Scene scrollYProgress={scrollYProgress} />
    </main>
  );
}
