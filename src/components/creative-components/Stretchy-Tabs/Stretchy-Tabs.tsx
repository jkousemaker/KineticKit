"use client";
import { cn } from "@/lib/utils";
import {
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState, useEffect } from "react";
function isPositive(num: number) {
  return num > 0;
}
const StretchyTabs = ({
  tabs,
  hoveredTab,
  activeTab,
  setHoveredTab,
  setActiveTab,
}: {
  tabs: { name: string; id: number }[];
  hoveredTab: number | null;
  activeTab: number;
  setHoveredTab: (tab: null | number) => void;
  setActiveTab: (tab: number) => void;
}) => {
  const difference = useMotionValue(0);
  const scaleX = useSpring(
    useTransform(
      difference,
      [0 - tabs.length, 0, tabs.length - 1],
      [1.2, 1, 1.2]
    )
  );
  const scaleY = useSpring(
    useTransform(
      difference,
      [0 - tabs.length, 0, tabs.length - 1],
      [0.8, 1, 0.8]
    )
  );
  const x = useSpring(
    useTransform(
      difference,
      [0 - tabs.length, 0, tabs.length],
      ["-20%", "0%", "20%"]
    )
  );

  useEffect(() => {
    if (hoveredTab !== null) {
      const differenceV = hoveredTab - activeTab;
      const positiveDifference = isPositive(differenceV);
      difference.set(differenceV);
    } else {
      difference.set(0);
    }
  }, [hoveredTab, activeTab]);
  return (
    <div className="flex flex-row gap-5 justify-center">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          setHoveredTab={setHoveredTab}
          setActiveTab={setActiveTab}
          tab={tab}
          activeTab={activeTab}
          x={x}
          scaleX={scaleX}
          scaleY={scaleY}
          hoveredTab={hoveredTab}
        />
      ))}
    </div>
  );
};

const Tab = ({
  setHoveredTab,
  setActiveTab,
  tab,
  activeTab,
  x,
  scaleX,
  scaleY,
}: {
  tab: { name: string; id: number };
  hoveredTab: number | null;
  activeTab: number;
  setHoveredTab: (tab: null | number) => void;
  setActiveTab: (tab: number) => void;
  x: MotionValue;
  scaleX: MotionValue;
  scaleY: MotionValue;
}) => {
  return (
    <button
      onMouseEnter={() => setHoveredTab(tab.id)}
      onMouseLeave={() => setHoveredTab(null)}
      onClick={() => setActiveTab(tab.id)}
      className={`${
        activeTab === tab.id ? "" : "hover:text-white/60"
      } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {activeTab === tab.id && (
        <motion.span
          layoutId="bubble"
          className={cn("absolute inset-0 z-10 bg-white mix-blend-difference")}
          style={{
            borderRadius: 9999,
            x,
            scaleX: scaleX,
            scaleY,
          }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {tab.name}
    </button>
  );
};

export { StretchyTabs, Tab };
