"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";
const steps = [
  {
    title: "Step 1",
    description: "This is the first step.",
    img: "/steps/step1.webp",
  },
  {
    title: "Step 2",
    description: "This is the second step.",
    img: "/steps/step2.jpg",
  },
  {
    title: "Step 3",
    description: "This is the third step.",
    img: "/steps/step3.webp",
  },
  {
    title: "Step 4",
    description: "This is the fourth step.",
    img: "/steps/step4.webp",
  },
  {
    title: "Step 5",
    description: "This is the fifth step.",
    img: "/steps/step5.webp",
  },
];

export default function StepsPage() {
  const [activeStep, setActiveStep] = useState("Step 1");
  const codeString = `console.log("Hey")`;
  return (
    <main className="py-6 lg:py-8 !relative">
      <PageHeader
        title="Steps"
        description="A component that allows text to follow a path."
      />
      <Tabs codeString={codeString}>
        <div className="!relative w-full py-[10rem]">
          <h2 className="text-5xl font-semibold text-center">How it works</h2>
          <div className="flex flex-row justify-center items-center">
            <div className="w-80 h-80 rounded-3xl overflow-hidden relative bg-white mr-5">
              <div className="w-full h-full relative bg-white">
                <AnimatePresence mode="wait">
                  {steps.map((step, index) => {
                    if (step.title !== activeStep) return null;
                    return (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={index}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image src={step.img} alt={step.title} fill />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
            <div className="px-12">
              {steps.map((step, index) => (
                <div className="" key={index}>
                  <h4
                    onClick={() => setActiveStep(step.title)}
                    className={cn(
                      "text-black",
                      step.title == activeStep && "text-red-500"
                    )}
                  >
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Tabs>
    </main>
  );
}
