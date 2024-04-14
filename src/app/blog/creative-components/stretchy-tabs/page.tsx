"use client";

import { useState } from "react";
import { StretchyTabs } from "@/components/creative-components/Stretchy-Tabs";
const tabs = [
  { name: "Hello", id: 0 },
  { name: "How are you?", id: 1 },
  { name: "Button 3", id: 2 },
];

export default function StretchyTabsPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  return (
    <main className="bg-black p-10">
      <StretchyTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hoveredTab={hoveredTab}
        setHoveredTab={setHoveredTab}
      />
    </main>
  );
}
