"use client";
import { motion } from "framer-motion";

const AnimatedLightning = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block h-14 w-14 stroke-yellow-500 stroke-[1px]"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"
        fill="rgba(253, 235, 155, 1)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          delay: 2,
          repeatDelay: 1,
        }}
        strokeDashoffset={"0px"}
        strokeDasharray={"0.6126666666666551px 1px"}
      ></motion.path>
    </svg>
  );
};

export { AnimatedLightning };
