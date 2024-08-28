"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function GridClipMaskPage() {
  
  return (
    <main className="h-screen w-full relative grid place-items-center">
       
      <div className="h-[400px] w-[300px] overflow-hidden relative">
      <svg width="1000" height="1000" className="size-full absolute">
  <defs>
    <clipPath id="myClip">
      <motion.rect initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 0, ease: [0.34, 0.31, 0.26, 0.89]}} width={"33%"} height={"33%"} />
      <motion.rect initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 0.1, ease: [0.34, 0.31, 0.26, 0.89]}} width={"33%"} height={"33%"} x={"33%"} />
      <motion.rect initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 0.2, ease: [0.34, 0.31, 0.26, 0.89]}} width={"33%"} height={"33%"} x={"66%"} />
      <motion.rect initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 0.3, ease: [0.34, 0.31, 0.26, 0.89]}} width={"33%"} height={"33%"} y={"33%"} />
      <motion.rect initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 0.4, ease: [0.34, 0.31, 0.26, 0.89]}} width={"33%"} height={"33%"} y={"33%"} x={"33%"} />
      <motion.rect initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 0.5, ease: [0.34, 0.31, 0.26, 0.89]}} width={"33%"} height={"33%"} y={"33%"} x={"66%"} />
      <motion.rect initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 0.6, ease: [0.34, 0.31, 0.26, 0.89]}} width={"33%"} height={"33%"} y={"66%"} />
      <motion.rect initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 0.7, ease: [0.34, 0.31, 0.26, 0.89]}} width={"33%"} height={"33%"} y={"66%"} x={"33%"} />
      <motion.rect initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 0.8, ease: [0.34, 0.31, 0.26, 0.89]}} width={"33%"} height={"33%"} y={"66%"} x={"66%"} />
    </clipPath>
  </defs>
</svg>
        <Image style={{clipPath: 'url(#myClip)'}} src="https://images.unsplash.com/photo-1500625597061-d472abd2afbb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dev" fill className="!relative size-full object-cover" />
      </div>
    </main>
  );
}
