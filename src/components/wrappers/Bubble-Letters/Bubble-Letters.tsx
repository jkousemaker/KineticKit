"use client";
import { motion } from "framer-motion";

import React from "react";

const BubbleLetters = ({
  children,
  weight = 900,
}: {
  children: string;
  weight?: number;
}) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <motion.span
          className="inline-block relative cursor-default origin-bottom"
          whileHover={{
            fontWeight: weight,
            scale: 1.05,
            color: "white",
            paddingInline: "0.2rem",
          }}
          key={idx}
        >
          {child}
        </motion.span>
      ))}
    </>
  );
};

export { BubbleLetters };
