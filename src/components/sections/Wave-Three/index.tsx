import { MotionValue } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";

export default function Scene({
  scrollProgress,
}: {
  scrollProgress: MotionValue;
}) {
  return (
    <Canvas>
      <Model scrollProgress={scrollProgress} />
    </Canvas>
  );
}
