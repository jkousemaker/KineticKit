"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Apple from "@public/apple.jpg";

const StickyApple = ({}) => {
  return (
    <>
      <section className="bg-transparent h-[160vh] relative">
        <StickyAppleHeader />
        <StickyAppleBanner />
      </section>
      <section className=" flex flex-row w-[980px] mx-auto">
        <div className="pt-[80px] w-full flex flex-row">
          <h3 className="text-[32px] font-bold leading-[1.125] tracking-[.004em] w-1/3">
            Your apps live in your space.
          </h3>
          <p className="text-[21px] leading-[1.381002381] font-semibold tracking-[.011em] ml-[8.3%] max-w-[58%]">
            With Apple Vision Pro, you have an infinite canvas that transforms
            how you use the apps you love. Arrange apps anywhere and scale them
            to the perfect size, making the workspace of your dreams a reality —
            all while staying present in the world around you. Browse the web in
            Safari, create a to‑do list in Notes, chat in Messages, and
            seamlessly move between them with a glance. You can even bring your
            Mac workflows into Apple Vision Pro wirelessly with Mac Virtual
            Display.
          </p>
        </div>
      </section>
    </>
  );
};

const StickyAppleHeader = ({}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [450, 0]);
  return (
    <div
      ref={container}
      className="text-white text-center relative z-50 h-screen flex justify-center items-center"
    >
      <motion.div style={{ y }} className="">
        <h2 className="text-2xl font-extrabold tracking-[.009em] leading-[1.1666666667]">
          Apps
        </h2>
        <p className="text-[80px] leading-[1.05] font-bold tracking-[-0.015em] mt-[13px]">
          Free your desktop. <br /> And your apps will follow.
        </p>
      </motion.div>
    </div>
  );
};

const StickyAppleBanner = ({}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "85%"]);
  return (
    <div ref={container} className="absolute top-0 z-10 inset-0 w-full h-full">
      <motion.div
        style={{ width }}
        className="sticky top-0 w-full h-screen mx-auto"
      >
        <Image src={Apple} alt="apple" fill className="object-cover" />
      </motion.div>
    </div>
  );
};

export { StickyApple };
