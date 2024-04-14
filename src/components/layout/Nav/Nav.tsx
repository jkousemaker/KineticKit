"use client";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { cn } from "@/app/utils/cn";
import { forwardRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@public/logo.png";
import { Teko } from "next/font/google";
import * as React from "react";

const teko = Teko({ subsets: ["latin"] });
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";
const Nav = ({}) => {
  const { scrollY } = useScroll();
  //State to keep track if page is past scroll-margin.
  const [active, setActive] = useState<Boolean>(false);

  const scrollMargin = 20;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= scrollMargin) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <motion.header
      initial={{ y: "-100%", filter: "blur(40px)" }}
      animate={{ y: 0, filter: "blur(0px)" }}
      transition={{
        type: "tween",
        duration: 0.35,
        ease: [0.45, 0.05, 0.55, 0.95],
      }}
      className={cn(
        "z-50 sticky top-0 h-16 w-full flex items-center border-b",
        active
          ? "bg-white/60 border-gray-200 backdrop-blur-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <nav className="container flex flex-row items-center justify-between">
        <CompanyLogo />
        <div className="">
          <Link href="/blog">Blog</Link>
          <Link href="/sections">Sections</Link>
        </div>
      </nav>
    </motion.header>
  );
};

const CompanyLogo = () => {
  return (
    <div className="">
      <Link href="/" className="flex flex-row items-center flex-nowrap">
        <div className="h-10 w-10 md:h-8 md:w-8">
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </div>
        <div className="ml-2 hidden md:block">
          <h1
            className={cn(teko.className, "text-3xl font-black tracking-wide")}
          >
            KineticKit
          </h1>
        </div>
      </Link>
    </div>
  );
};

export { Nav, CompanyLogo };
