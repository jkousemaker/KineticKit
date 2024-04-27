"use client";
import React from "react";
import { Model } from "./Aztec";
import {
  Stage,
  PresentationControls,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  MotionValue,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { motion } from "framer-motion-3d";
import { useRef } from "react";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
const Scene = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const controls = useRef<any>(null);

  return (
    <Canvas
      ref={controls}
      dpr={[1, 2]}
      camera={{ fov: 45 }}
      style={{ position: "fixed" }}
      className="!h-screen top-0"
    >
      <directionalLight intensity={0.1} position={[0, 5, 2]} />

      <Stage preset={"soft"} environment={"night"}>
        <Model scrollYProgress={scrollYProgress} className="h-screen" />
      </Stage>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
};

export default Scene;
