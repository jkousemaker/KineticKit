"use client";
import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const AnimatedCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cursor = useRef(null);
  const cursorSize = isHovered ? 190 : 40;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const xVelocity = useVelocity(mouse.x);
  useMotionValueEvent(xVelocity, "change", (latest) => {
    console.log(latest);
  });

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

    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered]);

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          // Remove the 'interactable' property
          // interactable,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          width: cursorSize,
          height: cursorSize,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 2,
            delay: 5,
            left: { duration: 0.5 },
            top: { duration: 0.5 },
          },
        }}
        className="fixed h-10 w-10 bg-black top-0 z-[99999999999] pointer-events-none rounded-full"
        ref={cursor}
      ></motion.div>
    </div>
  );
};

export { AnimatedCursor };
