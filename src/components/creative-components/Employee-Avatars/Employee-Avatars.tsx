"use client";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const EmployeeAvatars = ({ employees }: { employees: Array<any> }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0); // going to set this value on mouse move
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const scale = useSpring(
    useTransform(x, [-100, 100], [0.8, 1.2]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };
  return (
    <div className="flex flex-row items-center justify-center mb-10">
      {employees.map((employee, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredIndex(employee.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="-mr-4  relative group hover:z-50"
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === employee.id && (
              <motion.div
                //layoutId="test"
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {employee.name}
                </div>
                <div className="text-white text-xs">{employee.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            src={employee.image}
            width={100}
            height={100}
            alt={employee.name}
            onMouseMove={handleMouseMove}
            className="object-cover origin-bottom !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export { EmployeeAvatars };
