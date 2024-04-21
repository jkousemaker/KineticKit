"use client";
import { useEffect, useState } from "react";
import { ColorButton } from "@/components/creative-components/buttons/Color-Button";
import { GlowButton } from "@/components/creative-components/buttons/Glow-Button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const types = [
  { id: 0, title: "Full website" },
  { id: 1, title: "Landing page" },
  { id: 2, title: "E-commerce" },
  { id: 3, title: "Web app" },
];
const budgetRanges = [
  { id: 4, title: "15K-30K" },
  { id: 5, title: "30K-50K" },
  { id: 6, title: "50K-100K" },
  { id: 7, title: "100K-200K" },
  { id: 8, title: "200K+" },
];
const feedbacks = [
  { id: 9, title: "Google" },
  { id: 10, title: "Facebook" },
  { id: 11, title: "Instagram" },
  { id: 12, title: "LinkedIn" },
  { id: 13, title: "Other" },
];

interface ids {
  id: number;
  title: string;
}
export default function ContactPage() {
  const [state, setState] = useState({
    started: false,
    type: null as null | string,
    budget: null as null | string,
    feedback: null as null | string,
  });
  const [ids, setIds] = useState<ids[]>([]);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <main className="flex items-center h-screen overflow-clip w-full bg-[#1D2145]">
      <motion.div className="absolute flex flex-row justify-center gap-5 mt-24 top-0 left-0 w-full ">
        {ids.map((id, i) => (
          <motion.div
            key={i}
            layoutId={id.id.toString()}
            className="whitespace-nowrap block mx-[1em] relative z-[1] bg-[#272B4D] px-4 leading-[40px] rounded-3xl text-white font-bold"
          >
            {id.title}
          </motion.div>
        ))}
      </motion.div>
      <section className="relative w-full flex justify-center mx-[12.4998vw]">
        <AnimatePresence mode="wait">
          {!state.started && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: "-100%" }}
              animate={{
                opacity: 1,
                scale: 1,
                y: "calc(0% + -50%)",
                transition: { delay: 0.5 },
              }}
              exit={{ opacity: 0, scale: 0.6, y: "100%" }}
              transition={{ stiffness: 150, damping: 12 }}
              className="absolute text-white text-center top-1/2 -translate-y-1/2 w-full"
            >
              <h2 className="text-6xl font-semibold tracking-tighter">
                How can we help?
              </h2>
              <div className="flex flex-row flex-wrap justify-center mt-8">
                <ColorButton
                  onClick={() => {
                    setState({ ...state, started: true });
                  }}
                  className="m-8 mb-0"
                >
                  Start a project
                </ColorButton>
                <ColorButton className="m-8 mb-0">Join our team</ColorButton>
                <ColorButton className="m-8 mb-0">Partnership</ColorButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {state.started && !state.type && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: "-100%" }}
              animate={{
                opacity: 1,
                scale: 1,
                y: "calc(0% + -50%)",
                transition: { delay: 0.5 },
              }}
              exit={{ opacity: 0, scale: 0.6, y: "100%" }}
              transition={{ stiffness: 150, damping: 12 }}
              className="absolute text-white text-center top-1/2 -translate-y-1/2 w-full"
            >
              <h2 className="text-6xl font-semibold tracking-tighter">
                What type of product?
              </h2>
              <div className="flex flex-row flex-wrap justify-center mt-8">
                {types.map((type, i) => (
                  <div key={i} className="relative">
                    <ColorButton
                      onClick={() => {
                        setState({ ...state, type: type.title });

                        ids.push({
                          id: type.id,
                          title: type.title,
                        });
                      }}
                      className="m-8 mb-0 px-6 h-20"
                    >
                      {type.title}
                    </ColorButton>
                    <motion.div
                      layoutId={type.id.toString()}
                      className="absolute left-[20%] top-[30%] whitespace-nowrap block mx-[1em]  z-[1] bg-[#272B4D] px-4 leading-[40px] rounded-3xl text-white font-bold"
                    >
                      {type.title}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {state.started && state.type && !state.budget && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: "-100%" }}
              animate={{
                opacity: 1,
                scale: 1,
                y: "calc(0% + -50%)",
                transition: { delay: 0.5 },
              }}
              exit={{ opacity: 0, scale: 0.6, y: "100%" }}
              transition={{ stiffness: 150, damping: 12 }}
              className="absolute text-white text-center top-1/2 -translate-y-1/2 w-full"
            >
              <h2 className="text-6xl font-semibold tracking-tighter">
                Budget range
              </h2>
              <div className="flex flex-row flex-wrap justify-center mt-8">
                {budgetRanges.map((budget, i) => (
                  <div key={i} className="relative">
                    <ColorButton
                      onClick={() => {
                        setState({ ...state, budget: budget.title });
                        ids.push({
                          id: budget.id,
                          title: budget.title,
                        });
                      }}
                      className="m-8 mb-0 px-6 h-20"
                    >
                      {budget.title}
                    </ColorButton>
                    <motion.div
                      layoutId={budget.id.toString()}
                      className="absolute left-[20%] top-[30%] whitespace-nowrap block mx-[1em]  z-[1] bg-[#272B4D] px-4 leading-[40px] rounded-3xl text-white font-bold"
                    >
                      {budget.title}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {state.started && state.type && state.budget && !state.feedback && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: "-100%" }}
              animate={{
                opacity: 1,
                scale: 1,
                y: "calc(0% + -50%)",
                transition: { delay: 0.5 },
              }}
              exit={{ opacity: 0, scale: 0.6, y: "100%" }}
              transition={{ stiffness: 150, damping: 12 }}
              className="absolute text-white text-center top-1/2 -translate-y-1/2 w-full"
            >
              <h2 className="text-6xl font-semibold tracking-tighter">
                How did you hear about us?
              </h2>
              <div className="flex flex-row flex-wrap justify-center mt-8">
                {feedbacks.map((feedback, i) => (
                  <div key={i} className="relative">
                    <ColorButton
                      onClick={() => {
                        setState({ ...state, feedback: feedback.title });
                        ids.push({
                          id: feedback.id,
                          title: feedback.title,
                        });
                      }}
                      className="m-8 mb-0 px-6 h-20"
                    >
                      {feedback.title}
                    </ColorButton>
                    <motion.div
                      layoutId={feedback.id.toString()}
                      className="absolute left-[20%] top-[30%] whitespace-nowrap block mx-[1em]  z-[1] bg-[#272B4D] px-4 leading-[40px] rounded-3xl text-white font-bold"
                    >
                      {feedback.title}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <AnimatePresence mode="wait">
        {state.started && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-[2.1666vw] bottom-[2.1666vw] "
          >
            <GlowButton
              variant="round"
              size="lg"
              onClick={() => {
                setState({
                  ...state,
                  started: false,
                  type: null,
                  budget: null,
                  feedback: null,
                });
                setIds([]);
              }}
              className="m-8 "
            >
              <ChevronLeftIcon className="h-10 w-10" />
            </GlowButton>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

const Badge = ({ className, text }: { className: string; text: string }) => {
  return (
    <div
      className={cn(
        "whitespace-nowrap block mx-[1em] relative z-[1] bg-[#272B4D] px-4 leading-[40px] rounded-3xl text-white font-bold",
        className
      )}
    >
      {text}
    </div>
  );
};
