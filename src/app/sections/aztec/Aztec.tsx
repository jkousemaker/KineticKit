"use client";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { motion } from "framer-motion-3d";
import { MotionValue, useTransform } from "framer-motion";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
("/three/lamborghini_huracan_evo_spyder.glb");
import { useControls } from "leva";
export function Model({
  scrollYProgress,
  colorMap,
  className,
  ...props
}: {
  scrollYProgress: MotionValue;
  colorMap?: any;
  className?: string;
}) {
  useFrame(() => {
    //console.log("Hey, I'm executing every frame!");
  });
  const gltf = useLoader(
    GLTFLoader,
    "/three/lamborghini_huracan_evo_spyder.glb",
  );

  return <primitive {...props} object={gltf.scene} />;
}
