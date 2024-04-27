"use client";
import React from "react";
import { Model } from "./Aztec";
import { Stage } from "@react-three/drei";
import { MotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useRef } from "react";

import { Canvas } from "@react-three/fiber";

const Scene = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const controls = useRef<any>(null);

  return (
    <Canvas
      ref={controls}
      dpr={[1, 2]}
      camera={{ fov: 10, position: [10, 30, -0] }}
    >
      <directionalLight intensity={0.1} position={[0, 5, 2]} />

      <Stage preset={"soft"} environment={"night"}>
        <Model scrollYProgress={scrollYProgress} scale={0.5} />
      </Stage>
    </Canvas>
  );
};

export default Scene;
