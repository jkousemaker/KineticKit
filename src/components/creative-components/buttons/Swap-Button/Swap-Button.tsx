"use client";
import * as React from "react";
import { motion } from "framer-motion";

import { ArrowLeftIcon } from "@radix-ui/react-icons";

const SwapButton = ({ text }: { text: string }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex">
        {!hovered && <SwapButtonIcon />}
        <motion.div
          layout
          className="px-4 bg-black text-white rounded-2xl flex justify-center items-center"
        >
          <div className="">{text}</div>
        </motion.div>

        {hovered && <SwapButtonIcon />}
      </div>
    </motion.button>
  );
};

const SwapButtonIcon = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="w-12 h-12 bg-black rounded-2xl flex justify-center items-center"
    >
      <ArrowLeftIcon className="w-5 h-5 text-white" />
    </motion.div>
  );
};

export { SwapButton };
