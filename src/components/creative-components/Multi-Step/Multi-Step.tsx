"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DotButton } from "@/components/creative-components/buttons/Dot-Button";
import {
  motion,
  AnimatePresence,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";

function MultiStep({}) {
  const length = 4;
  const [step, setStep] = useState<number>(1);
  function setNext() {
    if (step >= length + 1) {
      return;
    }
    setStep(step + 1);
  }
  function setPrevious() {
    if (step === 1) {
      return;
    }
    setStep(step - 1);
  }
  return (
    <div className="border p-5 relative flex flex-col gap-10">
      <ProgressBar state={step} length={length} />
      <div className="flex flex-row gap-10 w-full justify-between">
        {Array.from({ length: length }).map((_, index) => (
          <StepIndicator key={index} value={index + 1} state={step} />
        ))}
      </div>
      <div className="">
        <AnimatePresence mode="wait">
          {Array.from({ length: length }).map((_, index) => {
            if (index === step - 1) {
              return (
                <Tab key={index}>
                  <h1 className="text-2xl">Step {index + 1}</h1>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam
                  </p>
                </Tab>
              );
            }
          })}
        </AnimatePresence>
      </div>
      <div className="flex flex-row justify-between items-center">
        <DotButton size="sm" onClick={setPrevious} direction="left">
          Previous
        </DotButton>
        <DotButton size="sm" onClick={setNext}>
          Next
        </DotButton>
      </div>
    </div>
  );
}

const ProgressBar = ({ state, length }: { state: number; length: number }) => {
  const step = useSpring(state);
  const progress = useTransform(step, [1, length + 1], ["0%", "100%"]);

  useEffect(() => {
    step.set(state);
  }, [state]);
  return (
    <div className="absolute -top-5 w-full h-1 inset-0">
      <motion.div
        style={{ width: progress }}
        className="relative w-full h-full bg-[#cfadff] origin-left"
      >
        <div className="absolute h-full w-auto aspect-square right-0 scale-[2]">
          <div
            className="bg-[#8d00df] rounded-full h-full w-full relative z-50"
            style={{
              boxShadow:
                "0px 0px 3px 2px rgba(141,0,223,0.67), 0px 0px 9px 7px rgb(141 0 223 / 45%)",
            }}
          ></div>
        </div>
      </motion.div>
    </div>
  );
};

const StepIndicator = ({ value, state }: { value: number; state: number }) => {
  const isActive = state === value;
  const isCompleted = state > value;

  return (
    <div
      className={cn(
        "  h-10 w-10 flex justify-center items-center relative transition-colors duration-500 ease-out",
      )}
    >
      <div
        className={cn(
          "absolute w-full h-full inset-0 z-20 rounded-full",
          isCompleted ? "bg-purple-500" : "bg-black",
        )}
      ></div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            exit={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute w-full h-full inset-0 border-2 border-purple-500 rounded-full z-10"
          ></motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-50">
        {isCompleted ? (
          <CheckMark />
        ) : (
          <p className="text-white text-xl relative z-10">{String(value)}</p>
        )}
      </div>
    </div>
  );
};

const CheckMark = () => {
  return (
    <svg
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            delay: 0.2,
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
          },
          opacity: { delay: 0.2, duration: 0.05 },
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

const Tab = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {children}
    </motion.div>
  );
};

export { MultiStep };
