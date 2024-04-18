"use client";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { motion, useDragControls, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import image1 from "@public/apple.jpg";
import image2 from "@public/aurora.webp";
import { CaretSortIcon } from "@radix-ui/react-icons";
import React, { useRef } from "react";
export default function ComparatorPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Underline Link" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <Comparator />
        </Tabs>
      </div>
    </main>
  );
}

const Comparator = () => {
  const constraintsRef = useRef(null);
  const controls = useDragControls();

  function startDrag(event: React.PointerEvent<HTMLButtonElement>) {
    controls.start(event);
  }
  return (
    <div className="w-full -ml-5">
      <div ref={constraintsRef} className="relative block">
        <figure className="pointer-events-none select-none w-full h-full">
          <picture className="block">
            <Image
              src={image1}
              alt="Image"
              className="w-full max-w-full h-auto align-middle"
            />
          </picture>
        </figure>
        <motion.div
          style={{ x: "50%" }}
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
        >
          <motion.figure
            style={{ x: "-50%" }}
            className="pointer-events-none select-none w-full h-full"
          >
            <picture className="block">
              <Image
                src={image2}
                alt="Image"
                className="w-full max-w-full h-auto align-middle"
              />
            </picture>
          </motion.figure>
        </motion.div>
        <motion.div
          drag="x"
          dragControls={controls}
          dragConstraints={constraintsRef}
          dragElastic={0}
          onDrag={(event, info) => console.log(info)}
          className="absolute left-0 top-[-2.77778vw] bottom-[-2.77778vw] w-[.2rem] ml-[-.1rem] bg-white z-1 flex justify-center items-center"
        >
          <Button
            onPointerDown={startDrag}
            variant="default"
            className="p-0 w-10 h-10"
          >
            <CaretSortIcon className="w-6 h-6 rotate-90" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
