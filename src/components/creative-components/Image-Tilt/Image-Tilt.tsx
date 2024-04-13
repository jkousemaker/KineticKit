"use client";
import Image, { StaticImageData } from "next/image";

import { motion, useTransform, useScroll } from "framer-motion";
import * as React from "react";
type OffsetType =
  | "start end"
  | "end start"
  | "start start"
  | "end end"
  | `${number} ${number}`
  | `${number} center`
  | `${number} end`
  | `${number} start`
  | `${number} ${number}px`
  | `${number} ${number}vw`
  | `${number} ${number}vh`
  | `${number} ${number}%`
  | `center ${number}`
  | "center center";

interface ImageTiltProps extends React.HTMLAttributes<HTMLDivElement> {
  container: React.RefObject<HTMLDivElement>;
  image: StaticImageData | string;
  offsets?: [OffsetType, OffsetType];
}

const ImageTilt = React.forwardRef<HTMLDivElement, ImageTiltProps>(
  (
    { container, image, offsets = ["start end", "end start"], ...props },
    ref
  ) => {
    const { scrollYProgress: progress } = useScroll({
      target: container,
      offset: offsets,
    });
    const scale = useTransform(progress, [0, 0.6, 1], [0.8, 0.9, 1]);
    const y = useTransform(progress, [0, 1], [-200, 0]);
    const rotateX = useTransform(progress, [0, 1], [10, 1]);
    return (
      <div className=" relative [perspective:800px]  w-full hover:scale-110 origin-bottom transition-transform  min-h-[12rem] flex items-end px-6 bg-gradient-to-b from-transparent to-gray-100">
        <motion.div
          style={{ scale, y, rotateX }}
          className="relative origin-bottom flex justify-center items-center  z-20  mx-auto -mb-20  md:-mb-20 h-full w-full "
        >
          <Image src={image} width={1400} height={720} alt="hero" />
        </motion.div>
      </div>
    );
  }
);

ImageTilt.displayName = "ImageTilt";

export { ImageTilt };
