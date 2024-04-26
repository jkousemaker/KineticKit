"use client";
import { useState, useEffect } from "react";
import { LayoutLoader } from "@/components/sections/Layout-Loader/Layout-Loader";
import { motion, AnimatePresence } from "framer-motion";
import { ScaleIn } from "@/components/wrappers/Scale-In";
import Image from "next/image";
import { TextStagger } from "@/components/wrappers/Text-Stagger";
export default function LayoutLoaderPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.body.classList.add("loading")
      : document.body.classList.remove("loading");
  }, [loading]);
  return (
    <main className="bg-[#f0eff1]">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader">
            <LayoutLoader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <div className="relative z-50">
              <div className="flex flex-row items-center overflow-hidden">
                <div className="w-1/2 flex justify-center">
                  <TextStagger
                    text="brand"
                    once
                    className="text-[18rem] text-black font-medium relative tracking-[-.8rem] inline-block whitespace-nowrap leading-none"
                  />
                </div>
                <div className="w-1/2 flex justify-center">
                  <span className="w-[320px] font-medium text-lg leading-8 text-black">
                    We are specialised in setting up the foundation of your
                    brand and setting you up for success.
                  </span>
                </div>
              </div>
              <div className="flex items-center overflow-hidden relative">
                <motion.div
                  animate={{ x: ["-25%", "-50%"] }}
                  transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                  className="whitespace-nowrap w-fit flex relative"
                >
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <TextStagger
                        key={i}
                        text="experience"
                        once
                        className="px-[8vw] text-[18rem] text-black font-medium relative tracking-[-.8rem] inline-block whitespace-nowrap leading-none"
                      />
                    ))}
                </motion.div>
              </div>
              <div className="flex overflow-hidden items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.95] }}
                  className="absolute w-40 h-40 bg-white left-40 rounded-full flex flex-col items-center justify-center"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-lg font-semibold my-1 leading-none"
                  >
                    scroll
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-lg font-semibold my-1 leading-none"
                  >
                    down
                  </motion.span>
                </motion.div>
                <TextStagger
                  text="studio"
                  once
                  className="text-[18rem] text-black font-medium relative tracking-[-.8rem] inline-block whitespace-nowrap leading-none"
                />
              </div>
            </div>
            <motion.img
              layoutId="transition-image"
              src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="dev"
              className=" relative inset-0 z-30 -top-32 block w-[90%] mx-auto h-screen"
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
