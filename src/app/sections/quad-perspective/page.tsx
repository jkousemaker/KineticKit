"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Logo from "@public/selfie.jpg";

export default function QuadPerspectivePage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(scrollYProgress.getVelocity());
  });
  const scaleImgWrap = useTransform(
    scrollYProgress,
    [0.1, 0.8, 1],
    [0.5, 2, 3.5],
  );
  const rotateZImgWrap = useTransform(scrollYProgress, [0.1, 1], [0, 180]);
  const opacityImgWrap = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const text1Scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const text2Scale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.5],
    [0, 1, 0],
  );
  const text3Scale = useTransform(scrollYProgress, [0.5, 0.7], [0.8, 1]);
  const text3Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.8],
    [0, 1, 0],
  );
  return (
    <main className="h-[4500px] w-full relative ">
      <div
        ref={container}
        className="h-5/6 w-full text-white overflow-clip bg-black"
      >
        <div className="h-screen w-full fixed top-0 flex items-center justify-center">
          <motion.p
            style={{ scale: text1Scale, opacity: text1Opacity }}
            className="text-[8vw] -top-[1vw] relative"
          >
            Smooth Scroll
          </motion.p>
        </div>
        <div className="h-screen w-full fixed top-0 flex items-center justify-center">
          <motion.p
            style={{ scale: text2Scale, opacity: text2Opacity }}
            className="text-[3vw]  relative"
          >
            So smoooth
          </motion.p>
        </div>
        <div className="h-screen w-full fixed top-0 flex items-center justify-center">
          <motion.p
            style={{ scale: text3Scale, opacity: text3Opacity }}
            className="text-[3vw]  relative"
          >
            Weeeee
          </motion.p>
        </div>
        <div className="h-screen w-full sticky top-0  flex items-center justify-center">
          <motion.div
            style={{
              scale: scaleImgWrap,
              opacity: opacityImgWrap,
              rotateZ: rotateZImgWrap,
            }}
            className="absolute w-[calc(130vh_+_10vw)] h-[calc(130vh_+_10vw)]"
          >
            <div
              style={{
                transformStyle: "preserve-3d",
                transform: "perspective(1000px) rotateX(-60deg)",
              }}
              className="w-[60vh] h-[60vh] absolute inset-0 m-auto !bottom-auto"
            >
              <Image
                src={Logo}
                alt="Logo"
                fill
                sizes="1000px"
                priority={true}
                style={{ transformStyle: "preserve-3d" }}
                className=" w-full h-full object-contain rounded-3xl -rotate-90 "
              />
            </div>
            <div
              style={{
                transform: "perspective(1000px) rotateY(-60deg)",
              }}
              className="w-[60vh] h-[60vh] absolute inset-0 m-auto !left-auto"
            >
              <Image
                src={Logo}
                alt="Logo"
                fill
                sizes="1000px"
                priority={true}
                style={{ transformStyle: "preserve-3d" }}
                className=" w-full h-full object-contain rounded-3xl "
              />
            </div>
            <div
              style={{
                transform: "perspective(1000px) rotateX(60deg)",
              }}
              className="w-[60vh] h-[60vh] absolute inset-0 m-auto !top-auto"
            >
              <Image
                src={Logo}
                alt="Logo"
                fill
                sizes="1000px"
                priority={true}
                style={{ transformStyle: "preserve-3d" }}
                className=" w-full h-full object-contain rounded-3xl -rotate-90"
              />
            </div>
            <div
              style={{
                transform: "perspective(1000px) rotateY(60deg)",
              }}
              className="w-[60vh] h-[60vh] absolute inset-0 m-auto !right-auto"
            >
              <Image
                src={Logo}
                alt="Logo"
                fill
                sizes="1000px"
                priority={true}
                style={{ transformStyle: "preserve-3d" }}
                className=" w-full h-full object-contain rounded-3xl "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
