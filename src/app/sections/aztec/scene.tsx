"use client";
import React from "react";

import { MotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";

const Scene = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const x = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 7, 0]);

  return (
    <Canvas
      camera={{ fov: 10, position: [0, 0, 100] }}
      className="!fixed top-0"
    >
      <ambientLight intensity={2} />
      <motion.mesh position={[x, y, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
      </motion.mesh>
    </Canvas>
  );
};

export default Scene;
