"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const sections = [
  {
    id: 0,
    title: "Section 1",
    description:
      "The issue could be the fact that the scale up/down is triggered constantly. Yeah I don't have time to make that work with the blend mode.",
  },
  {
    id: 1,
    title: "Section 2",
    description:
      "The issue could be the fact that the scale up/down is triggered constantly. Yeah I don't have time to make that work with the blend mode.",
  },
  {
    id: 2,
    title: "Section 3",
    description:
      "The issue could be the fact that the scale up/down is triggered constantly. Yeah I don't have time to make that work with the blend mode.",
  },
];

export default function StickyShowcasePage() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);
  return (
    <main className="">
      <div className="h-screen"></div>
      <div className="border relative">
        {sections.map((section) => (
          <StickyShowcaseSection
            key={section.id}
            section={section}
            setSection={setActiveSection}
          />
        ))}
      </div>
      <div className="h-screen"></div>
    </main>
  );
}

const StickyShowcaseSection = ({
  section,
  setSection,
}: {
  section: { id: number; title: string; description: string };
  setSection: (section: number) => void;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    console.log("SECTION: ", section.id, progress);
  });
  return (
    <section className="h-[200vh] relative" ref={container}>
      <div className="sticky h-screen top-0 border-2 border-red-500">
        {section.id}
      </div>
    </section>
  );
};
