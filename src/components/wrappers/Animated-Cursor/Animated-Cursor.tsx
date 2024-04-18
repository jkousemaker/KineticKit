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

const AnimatedCursor = () => {
  const state = useCursorStore((state) => state.state);
  const size = useCursorStore((state) => state.size);
  const color = useCursorStore((state) => state.color);
  const margin = useCursorStore((state) => state.margin);
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
    console.log(state);
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [state]);

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          backgroundColor: color,
          width: size,
          height: size,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: state ? 1 : 0,
          scale: 1,

          transition: {
            left: { duration: 0.5 },
            top: { duration: 0.5 },
          },
        }}
        className="fixed h-10 w-10 top-0 z-[99999999999] pointer-events-none rounded-full text-white"
        ref={cursor}
      ></motion.div>
    </div>
  );
};

export { AnimatedCursor };
