"use client";
import React, { useEffect } from "react";
import { PageHeader } from "@/components/elements/Page-Header";
import { Tabs } from "@/components/elements/Tabs";
import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { GlowButton } from "@/components/creative-components/buttons/Glow-Button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function ExpandedHeaderPage() {
  const codeString = `import { useState } from "react"`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Expandable Nav" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <Header />
          <div className="h-screen bg-black w-full "></div>
        </Tabs>
      </div>
    </main>
  );
}

const navItems = [
  {
    name: "About",
  },
  { name: "Projects" },
  { name: "Image Bank" },
  { name: "Toolkits" },
  { name: "Exhibition" },
  { name: "Resources" },
  { name: "Blog" },
  { name: "Contact" },
];
const Header = () => {
  const [activeLink, setActiveLink] = useState<null | string>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  useEffect(() => {
    console.log(menuOpen);
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [menuOpen]);
  return (
    <header
      onMouseLeave={() => setMenuOpen(false)}
      className={cn(
        "sticky top-10 w-full bg-blue-500   z-50 flex flex-row justify-between pt-10 px-20 pointer-events-none",
        !scrolled && "mix-blend-difference",
      )}
    >
      <div className="">
        <Link
          href="#"
          className="text-2xl font-medium  leading-none text-white scale-x-75 origin-left uppercase pointer-events-auto"
        >
          The <br />
          Company <br />
          Name
        </Link>
      </div>
      <div className="relative" onMouseLeave={() => setActiveLink(null)}>
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, x: scrolled ? "300%" : "0%" }}
          className="pointer-events-auto"
        >
          <ul className="flex flex-col items-end">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative uppercase font-semibold text-base leading-none mb-1 text-white"
              >
                <Link
                  onMouseEnter={() => setActiveLink(item.name)}
                  onMouseLeave={() => setActiveLink(null)}
                  href="#"
                  className="flex flex-row flex-nowrap items-center gap-1"
                >
                  <motion.span layout>{item.name}</motion.span>

                  {activeLink === item.name && (
                    <motion.svg
                      initial={{
                        opacity: 0,
                        scale: 0.01,
                        rotate: -90,
                        x: "100%",
                      }}
                      animate={{ opacity: 1, scale: 1, rotate: 0, x: "0%" }}
                      transition={{
                        duration: 0.6,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      viewBox="0 0 40 80"
                      className="w-auto h-[1em]"
                    >
                      <path
                        fill="#fff"
                        d="M0,0V80A40,40,0,0,0,40,40,40,40,0,0,0,0,0Z"
                      ></path>
                    </motion.svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
        <motion.div>
          {menuOpen && (
            <Menu
              menuOpen={menuOpen}
              setActiveLink={setActiveLink}
              activeLink={activeLink}
            />
          )}
        </motion.div>
        <motion.div
          initial={{ x: "200%", scale: 0 }}
          animate={{ x: scrolled ? "0%" : "200%", scale: scrolled ? 1 : 0 }}
          className="absolute z-[250] top-0 right-0 pointer-events-auto "
        >
          <GlowButton
            size="default"
            variant="round"
            onMouseEnter={() => setMenuOpen(true)}
          >
            <ChevronRightIcon className="w-8 h-8 text-white" />
          </GlowButton>
        </motion.div>
      </div>
    </header>
  );
};

const Menu = ({
  menuOpen,
  setActiveLink,
  activeLink,
}: {
  menuOpen: boolean;
  setActiveLink: (menuOpen: any) => void;
  activeLink: string | null;
}) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: menuOpen ? "0%" : "100%" }}
      className="absolute top-0 h-screen w-auto  z-[200] px-20 flex justify-center pointer-events-auto shadow-md  right-0 bg-red-500 origin-left"
    >
      <motion.nav className="pointer-events-auto">
        <ul className="flex flex-col items-end">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative uppercase font-bold text-lg mb-1 text-white"
            >
              <Link
                onMouseEnter={() => setActiveLink(item.name)}
                href="#"
                className="flex flex-row flex-nowrap items-center gap-1"
              >
                <motion.span layout>{item.name}</motion.span>

                {activeLink === item.name && (
                  <motion.svg
                    initial={{
                      opacity: 0,
                      scale: 0.01,
                      rotate: -90,
                      x: "100%",
                    }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, x: "0%" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    viewBox="0 0 40 80"
                    className="w-auto h-[1em]"
                  >
                    <path
                      fill="#fff"
                      d="M0,0V80A40,40,0,0,0,40,40,40,40,0,0,0,0,0Z"
                    ></path>
                  </motion.svg>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
};
