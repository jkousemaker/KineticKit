"use client";
import { useRef } from "react";
import Scene from "./scene";
import { useScroll } from "framer-motion";

export default function AztecPage() {
  const controls = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: controls,
    offset: ["start end", "end start"],
  });
  return (
    <main ref={controls} className="h-screen">
      <Scene scrollYProgress={scrollYProgress} />
    </main>
  );
}
