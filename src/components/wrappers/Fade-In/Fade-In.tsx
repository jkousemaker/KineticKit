"use client";
import * as React from "react";
import { motion } from "framer-motion";

interface fadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const FadeIn: React.FC<fadeInProps> = ({
  children,
  duration = 2,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export { FadeIn };
