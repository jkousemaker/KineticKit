"use client";
import { cn } from "@/lib/utils";
import { motion, Variant } from "framer-motion";
import Image from "next/image";
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
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
        className="loader-inner h-screen w-screen overflow-hidden relative grid place-content-center"
      >
        <ImageBlock
          className="w-[450px] h-[250px] left-[16%] bottom-[14%] z-0"
          variants={item}
          id="image-1"
        />

        <motion.img
          variants={itemMain}
          layoutId="transition-image"
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="dev"
          className="relative z-20 flex w-[800px]"
        />

        <ImageBlock
          className="w-[300px] h-[500px] right-[18%] top-[8%] z-30"
          variants={item}
          id="image-3"
        />
        <ImageBlock
          className="max-w-[400px] w-[40%] h-[200px] right-[20%] bottom-[10%] z-30"
          variants={item}
          id="image-4"
        />
        <ImageBlock
          className="w-[300px] h-[400px] left-[18%] top-[12%] z-30"
          variants={item}
          id="image-5"
        />
      </motion.div>
    </motion.div>
  );
};

const ImageBlock = ({
  className,
  posX = 0,
  posY = 0,
  variants,
  id,
}: {
  className?: string;
  posX?: number;
  posY?: number;
  variants?: { hidden: Variant; visible: Variant; exit: Variant };
  id: string;
}) => {
  return (
    <motion.div
      variants={variants}
      className={cn(
        "absolute origin-center flex justify-center items-center",
        className
      )}
    >
      <Image src={`/apple.jpg`} fill alt={id} />
    </motion.div>
  );
};

export { LayoutLoader };
