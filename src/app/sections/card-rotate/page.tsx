"use client";
import Image from "next/image";
import { animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const images = [
  {
    x: 91,
    y: -213,
    rotate: 0,
    img: "https://images.unsplash.com/photo-1500625597061-d472abd2afbb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    x: 128,
    y: -122,
    rotate: 0,
    img: "https://images.unsplash.com/photo-1500625597061-d472abd2afbb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    x: 91,
    y: -31,
    rotate: 0,
    img: "https://images.unsplash.com/photo-1500625597061-d472abd2afbb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    x: 0,
    y: 6,
    rotate: 0,
    img: "https://images.unsplash.com/photo-1500625597061-d472abd2afbb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    x: -91,
    y: -31,
    rotate: 0,
    img: "https://images.unsplash.com/photo-1500625597061-d472abd2afbb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    x: -128,
    y: -122,
    rotate: 0,
    img: "https://images.unsplash.com/photo-1500625597061-d472abd2afbb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    x: -91,
    y: -213,
    rotate: 0,
    img: "https://images.unsplash.com/photo-1500625597061-d472abd2afbb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    x: 0,
    y: -250,
    rotate: 0,
    img: "https://images.unsplash.com/photo-1500625597061-d472abd2afbb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function CardRotatePage() {
  return (
    <main
      className="w-full h-screen bg-[#b9ccce] flex justify-center items-center"
      id="content"
    >
      <div
        className="[perspective:1000px] overflow-hidden absolute flex justify-center items-center h-screen w-screen top-0 left-0"
        id="scene"
      >
        <div className="[transform-style:preserve-3d] relative" id="group">
          {images.map((image, index) => {
            return (
              <Card
                key={index}
                url={image.img}
                index={index}
                length={images.length}
              />
            );
          })}
        </div>
      </div>
      <div className="text-center relative z-50">
        <h1 className="text-8xl font-thin uppercase font-serif">Astral</h1>
        <h1 className="text-8xl font-thin uppercase font-serif">Aesthetics</h1>
        <h4 className="text-4xl font-thin uppercase font-serif mt-10">2024</h4>
      </div>
    </main>
  );
}

const Card = ({
  url,
  index,
  length,
}: {
  url: string;
  index: number;
  length: number;
}) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const image = useRef(null);
  const height = 200;
  const radius1 = 50 + height / 2;
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: (window as Window).innerWidth,
        height: (window as Window).innerHeight,
      });
    }
  }, []);
  return (
    <motion.div
      initial={{
        y: windowSize.height / 2 + height * 1.5,
        rotateX: -180,
        scale: 3,
      }}
      animate={{
        y: -radius1,
        rotate: (index * 360) / length,
        rotateY: 15,
        transition: {
          duration: 1,
        },
      }}
      style={{
        height: height,
        transformOrigin: `center ${radius1 + height / 2}px`,
      }}
      className="w-[6em] aspect-[2/3] absolute left-1/2 top-1/2 origin-[50%_194px]"
    >
      <Image ref={image} src={url} alt="dev" fill />
    </motion.div>
  );
};
