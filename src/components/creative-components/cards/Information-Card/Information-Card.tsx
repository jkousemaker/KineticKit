"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const InformationCard = ({
  href,
  className,
  children,
  onMouseEnter,
  onMouseLeave,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  return (
    <motion.div
      variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={cn(
        "z-[1] cursor-pointer flex flex-col relative w-[350px] ",
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href={href}
        className={cn("w-full h-full absolute inset-0 z-10 ")}
      />
      <div className="z-[1] relative overflow-hidden flex flex-col gap-6">
        {children}
      </div>
    </motion.div>
  );
};

const InformationCardImage = ({ src }: { src: StaticImageData | string }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 1.04 },
        animate: { scale: 1 },
        hover: { scale: 1.04 },
      }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: [0.32, 0.99, 0.49, 0.99],
      }}
      className="absolute w-full max-w-none h-full inset-0"
    >
      <Image
        src={src}
        alt="Album Cover"
        className="object-cover z-0  relative w-full h-full"
        fill={true}
      />
    </motion.div>
  );
};

const InformationCardPopup = ({ stack }: { stack: string[] }) => {
  return (
    <motion.div
      variants={{ initial: { y: "140%" }, hover: { y: "0%" } }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: [0.32, 0.99, 0.49, 0.99],
      }}
      className="z-[1] flex flex-col p-6 absolute bg-[#141414e6] backdrop-blur top-auto left-6 right-6 bottom-6 rounded-2xl"
    >
      <div>
        <p className="text-sm leading-[140%] opacity-60 pb-2 text-[#f3efef]">
          Used tools
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tool, i) => (
            <ToolChip key={i} title={tool} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ToolChip = ({ title }: { title: string }) => {
  return (
    <div className="rounded-full items-center px-2 py-1 flex bg-[#222] text-[#f3efef]">
      <span className="text-sm leading-[140%]">{title}</span>
    </div>
  );
};

const InformationCardBadge = ({ title }: { title: string }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0 },
        animate: { scale: 1 },
        hover: { scale: 1.2 },
      }}
      transition={{ duration: 0.5 }}
      className="absolute origin-top-right rounded-bl-2xl h-10 pl-4 -top-px bottom-auto left-auto -right-px bg-[#141414] text-foreground flex justify-end items-start"
    >
      <ToolChip title={title} />
    </motion.div>
  );
};

const InformationCardBody = ({
  text,
  subText,
  className,
}: {
  text: string;
  subText: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h3 className="text-balance text-2xl font-normal leading-[110%]">
        {text}
      </h3>
      <p className="text-sm leading-[140%] opacity-60 ">{subText}</p>
    </div>
  );
};

export {
  InformationCard,
  InformationCardImage,
  InformationCardPopup,
  ToolChip,
  InformationCardBadge,
  InformationCardBody,
};
