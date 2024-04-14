"use client";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const LayoutLoader = ({
  setLoading,
}: {
  setLoading: (loading: boolean) => void;
}) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <motion.div className="w-screen h-screen flex justify-center items-center">
          <motion.img
            layoutId="main-image-1"
            src="/apple.jpg"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export { LayoutLoader };
