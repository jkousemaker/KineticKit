"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
const tabs = [
  { id: 0, title: "All" },
  { id: 1, title: "Motion buttons" },
  { id: 2, title: "Animated cards" },
  { id: 3, title: "Creative tabs" },
  { id: 4, title: "Modern navs" },
  { id: 5, title: "Wrappers" },
];

export default function DotTabsPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  return (
    <main className="bg-accent p-10">
      <ul className="text-lg tracking-tighter relative inline-flex mt-8">
        {tabs.map((tab, index) => (
          <DotTab
            key={index}
            tab={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            hoveredTab={hoveredTab}
            setHoveredTab={setHoveredTab}
          />
        ))}
      </ul>
    </main>
  );
}

const DotTab = ({
  tab,
  activeTab,
  setActiveTab,
  hoveredTab,
  setHoveredTab,
}: {
  tab: { title: string; id: number };
  activeTab: number;
  setActiveTab: (tab: number) => void;
  hoveredTab: number | null;
  setHoveredTab: (tab: number | null) => void;
}) => {
  const hasIndicator =
    hoveredTab === tab.id
      ? true
      : activeTab === tab.id && hoveredTab == null
        ? true
        : false;
  return (
    <li
      className="relative flex justify-center"
      onMouseEnter={() => setHoveredTab(tab.id)}
      onMouseLeave={() => setHoveredTab(null)}
    >
      {hasIndicator ? <DotIndicator /> : null}

      <Link
        onClick={() => setActiveTab(tab.id)}
        href="#"
        className={cn(
          "py-4 px-5 transition-color duration-300 ease-linear hover:text-active",
          tab.id === activeTab && "text-active"
        )}
      >
        <span>{tab.title}</span>
      </Link>
    </li>
  );
};

const DotIndicator = () => {
  return (
    <motion.div
      layoutId="Dot-Tabs-Indicator"
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="bg-active h-2 w-2 rounded-full absolute top-11"
    ></motion.div>
  );
};
