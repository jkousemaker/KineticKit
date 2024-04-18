"use client";
import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
  useVelocity,
  AnimatePresence,
} from "framer-motion";
import { useCursorStore } from "@/stores/cursorStore";
import type { useCursorStoreProps } from "@/stores/cursorStore";
import { ArrowRightIcon } from "@radix-ui/react-icons";
const variants = {
  Default: {
    scale: 1,
    opacity: 1,
  },
  Link: {
    scale: 1.5,
    opacity: 0.5,
  },
  Hover: {
    scale: 1.5,
    opacity: 0.5,
  },
};

const AnimatedCursor = () => {
  const state = useCursorStore((state: useCursorStoreProps) => state.state);
  const variant = useCursorStore((state: useCursorStoreProps) => state.variant);
  const [size, setSize] = useState(20);
  const color = "#fff";
  //const size = useCursorStore((state: useCursorStoreProps) => state.size);
  //const color = useCursorStore((state: useCursorStoreProps) => state.color);
  const margin = useCursorStore((state: useCursorStoreProps) => state.margin);
  const cursor = useRef(null);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  //Smooth out the mouse values
  const smoothOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
    //velocity: 1.5,
  };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    //Update the parameter type to MouseEvent
    const { clientX, clientY } = e;

    mouse.x.set(clientX + margin.left - size / 2);
    mouse.y.set(clientY + margin.top - size / 2);
  };

  useEffect(() => {
    if (variant) {
      switch (variant) {
        case "Default":
          setSize(20);
          break;
        case "Link":
          setSize(60);
          break;
        case "Hover":
          setSize(40);
          break;
      }
    }
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [variant, size]);

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          backgroundColor: color,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: state ? 1 : 0,
          scale: 1,
          width: size,
          height: size,
          transition: {
            left: { duration: 0.5 },
            top: { duration: 0.5 },
          },
        }}
        className="fixed h-10 w-10 top-0 z-[99999999999] pointer-events-none rounded-full mix-blend-difference flex items-center justify-center"
        ref={cursor}
      >
        <AnimatePresence>
          {variant == "Link" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArrowRightIcon className="w-5 h-5 text-black" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export { AnimatedCursor };
