"use client";
import {
  useScroll,
  motion,
  useTransform,
  MotionValue,
  useMotionTemplate,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  {
    zIndex: 10,
    transform: { x: -1420.8, y: -659.7 },
    imgSrc:
      "https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/11.jpg",
  },
  {
    zIndex: 10,
    transform: { x: 0.2, y: -659.7 },
    imgSrc:
      "https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/13.jpg",
  },
  {
    zIndex: 10,
    transform: { x: 1421.2, y: -659.7 },
    imgSrc:
      "https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/10.jpg",
  },
  {
    zIndex: 10,
    transform: { x: -1420.8, y: 0.3 },
    imgSrc:
      "https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/14.jpg",
  },
  {
    zIndex: 50,
    transform: { x: 0.2, y: 0.3 },
    imgSrc:
      "https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/12.jpg",
  },
  {
    zIndex: 10,
    transform: { x: 1421.2, y: 0.3 },
    imgSrc:
      "https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/9.jpg",
  },
  {
    zIndex: 10,
    transform: { x: -1420.8, y: 660.3 },
    imgSrc:
      "https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/15.jpg",
  },
  {
    zIndex: 10,
    transform: { x: 0.2, y: 660.3 },
    imgSrc:
      "https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/7.jpg",
  },
  {
    zIndex: 10,
    transform: { x: 1421.2, y: 660.3 },
    imgSrc:
      "https://tympanus.net/Development/ScrollBasedLayoutAnimations/img/8.jpg",
  },
];

export default function ScrollLayoutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 0", "end end"],
  });

  return (
    <main className="">
      <div className="h-screen"></div>
      <div ref={containerRef} className="h-[200vh]  ">
        <div className="h-screen sticky w-full  top-0 border-2  grid  grid-cols-[repeat(3,_auto)] grid-rows-[repeat(3,_auto)]   flex-none box-border">
          {images.map((image, index) => (
            <Card key={index} image={image} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
      <div className="h-screen"></div>
    </main>
  );
}

const Card = ({
  image,
  scrollYProgress,
}: {
  image: {
    zIndex: number;
    imgSrc: string;
    transform: { x: number; y: number };
  };
  scrollYProgress: MotionValue;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3.33333]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [0, image.transform.x]);
  const y = useTransform(scrollYProgress, [0, 1], [0, image.transform.y]);

  return (
    <motion.div
      style={{
        transform: useMotionTemplate`translate3d(${x}px, ${y}px, 0px) scale(${scale})`,
        zIndex: image.zIndex,
      }}
      className="w-[33vw] h-[33v]   grid items-center overflow-hidden rounded-md relative !box-content"
    >
      <motion.div
        style={{ scale: imgScale, backgroundImage: `url(${image.imgSrc})` }}
        className="w-full h-full bg-[50%_50%] bg-cover bg-no-repeat "
      />
    </motion.div>
  );
};
