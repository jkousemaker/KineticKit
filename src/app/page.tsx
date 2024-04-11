"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: 0,
    key: "tab1",
    value: "Preview",
    content: "Preview your changes here.",
  },
  {
    id: 1,
    key: "tab2",
    value: "Code",
    content:
      "View the code for this component. View the code for this component. View the code for this component.",
  },
];
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Code");
  console.log(activeTab);
  return (
    <main className="py-6 lg:py-8 flex flex-row items-center justify-center mb-10 w-full">
      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex flex-col w-60 shadow-xl"
      >
        <Tabs.List
          className="shrink-0 flex border-b"
          aria-label="Manage your account"
        >
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.key}
              className="bg-white px-5 h-11 flex-1 flex items-center justify-center text-lg leading-none select-none"
              value={tab.value}
            >
              {tab.value}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <AnimatePresence mode="popLayout" initial={false}>
          {tabs.map((tab, i) => {
            console.log(tab);
            return tab.value === activeTab ? (
              <Tabs.Content
                asChild
                key={i}
                className="grow p-5 "
                value={tab.value}
                forceMount
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      opacity: {
                        duration: 0.3,
                        delay: 0.2,
                        ease: [0.59, 0.28, 0.6, 0.22],
                      },
                      scale: {
                        duration: 0.3,
                        delay: 0.3,
                        ease: [0.32, 0.99, 0.49, 0.99],
                      },
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: {
                      opacity: {
                        duration: 0.3,
                        delay: 0.1,
                        ease: [0.32, 0.99, 0.49, 0.99],
                      },
                      scale: {
                        duration: 0.5,
                        delay: 0,
                        ease: [0.59, 0.28, 0.6, 0.22],
                      },
                    },
                  }}
                >
                  <p className="text-xl font-bold">{tab.content}</p>
                </motion.div>
              </Tabs.Content>
            ) : null;
          })}
        </AnimatePresence>
      </Tabs.Root>
    </main>
  );
}
