"use client";
import { useState } from "react";
import { LayoutLoader } from "@/components/sections/Layout-Loader/Layout-Loader";
import { motion } from "framer-motion";
import { ScaleIn } from "@/components/wrappers/Scale-In";
export default function LayoutLoaderPage() {
  const [loading, setLoading] = useState(true);

  return (
    <main>
      {loading ? (
        <motion.div key="loader">
          <LayoutLoader setLoading={setLoading} />
        </motion.div>
      ) : (
        <div className="h-auto w-full relative mt-52">
          <ScaleIn>
            <h1 className="text-8xl mx-10 mb-20">Layout Loader</h1>
          </ScaleIn>
          <motion.img
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            layoutId="main-image-1"
            src="/apple.jpg"
          />
        </div>
      )}
    </main>
  );
}
