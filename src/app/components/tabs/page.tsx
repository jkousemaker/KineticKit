"use client";
import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from "@/components/Tabs/Tabs";
import { PageHeader } from "@/components/elements/Page-Header";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState<string>("Preview");
  return (
    <main className="py-6 lg:py-8 ">
      <PageHeader title="Tabs" />
      <div className="pt-8 pb-12">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList
            aria-label="Manage your account"
            className="bg-black p-5 gap-5"
          >
            {tabs.map((tab) => (
              <TabsTrigger asChild key={tab.key} value={tab.value}>
                <Button
                  variant="link"
                  className="relative rounded-m px-3 py-1.5 text-sm font-medium text-white"
                >
                  {tab.value === activeTab && (
                    <motion.span
                      layoutId="tabs"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                      className="absolute inset-0 z-10 bg-white mix-blend-difference rounded-md"
                    />
                  )}
                  {tab.value}
                </Button>
              </TabsTrigger>
            ))}
          </TabsList>
          <AnimatePresence mode="popLayout" initial={false}>
            {tabs.map((tab, i) => {
              return tab.value === activeTab ? (
                <TabsContent asChild key={i} value={tab.value} forceMount>
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
                </TabsContent>
              ) : null;
            })}
          </AnimatePresence>
        </Tabs>
      </div>
    </main>
  );
}
