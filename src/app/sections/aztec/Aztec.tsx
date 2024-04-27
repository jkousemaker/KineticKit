"use client";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { motion } from "framer-motion-3d";
import { MotionValue, useTransform } from "framer-motion";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
("/three/lamborghini_huracan_evo_spyder.glb");
export function Model({
  scrollYProgress,
  colorMap,
  className,
  ...props
}: {
  scrollYProgress: MotionValue;
  colorMap?: any;
  className: string;
}) {
  useFrame(() => {
    //console.log("Hey, I'm executing every frame!");
  });
  const gltf = useLoader(
    GLTFLoader,
    "/three/lamborghini_huracan_evo_spyder.glb",
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return <primitive {...props} object={gltf.scene} />;
}
