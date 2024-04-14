"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

import { CompanyLogo } from "@/components/layout/Nav";

function useBoundedScroll(threshold: number) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, threshold],
    [0, 1]
  );

  useEffect(() => {
    return scrollY.on("change", (current) => {
      let previous = scrollY.getPrevious();
      let diff = current - (previous as number);
      let newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    });
  }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

const NavPill = ({}) => {
  let { scrollYBoundedProgress } = useBoundedScroll(300);
  let scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  return (
    <div className="w-full fixed top-0 left-0 py-2 px-4 z-50 pointer-events-none">
      <motion.header
        style={{
          height: useTransform(scrollYBoundedProgressDelayed, [0, 1], [80, 50]),
          backgroundColor: useMotionTemplate`rgb(255 255 255 / ${useTransform(
            scrollYBoundedProgressDelayed,
            [0, 1],
            [1, 0.1]
          )})`,
        }}
        className=" flex max-w-xl mx-auto border-2 rounded-full py-2 px-6 pointer-events-auto"
      >
        <nav className=" flex w-full items-center justify-between">
          <CompanyLogo />
          <motion.div
            style={{
              opacity: useTransform(
                scrollYBoundedProgressDelayed,
                [0, 1],
                [1, 0]
              ),
            }}
            className="flex space-x-4 text-sm font-medium text-slate-400"
          >
            <a href="#">News</a>
            <a href="#">Sports</a>
            <a href="#">Culture</a>
          </motion.div>
        </nav>
      </motion.header>
    </div>
  );
};

let clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

export { NavPill };
