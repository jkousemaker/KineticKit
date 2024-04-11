"use client";
import * as React from "react";
import { motion } from "framer-motion";

interface scaleUpProps {
  children: React.ReactNode;
  scale?: number;
  duration?: number;
  delay?: number;
}

const ScaleUp: React.FC<scaleUpProps> = ({
  children,
  scale = 0.5,
  duration = 2,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: scale }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: scale }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export { ScaleUp };
