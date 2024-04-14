"use client";
import { PageHeader } from "@/components/elements/Page-Header";
import { Tabs } from "@/components/elements/Tabs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
const tools = [
  { title: "Next.js" },
  { title: "Tailwind CSS" },
  { title: "Framer Motion" },
  { title: "TypeScript" },
];
export default function InformationCardPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8 ">
      <PageHeader title="Information Card" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <InformationCard href="#">
            <div className="rounded-2xl pt-[133.33%] z-0 w-full relative overflow-hidden">
              <InformationCardPopup tools={tools}></InformationCardPopup>
              <InformationCardImage src="/selfie.jpg" />
              <InformationCardBadge title="Next.js" />
            </div>
            <InformationCardBody
              text="A new era of education at the Dutch Creative Technology Academy"
              subText="Reducations"
            />
          </InformationCard>
        </Tabs>
      </div>
    </main>
  );
}

const InformationCard = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={cn(
        "z-[1] cursor-pointer flex flex-col relative w-[350px] ",
        className
      )}
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

const InformationCardPopup = ({ tools }: { tools: { title: string }[] }) => {
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
          {tools.map((tool, i) => (
            <ToolChip key={i} title={tool.title} />
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
    <div className="absolute rounded-bl-2xl h-10 pl-4 -top-px bottom-auto left-auto -right-px bg-[#141414] text-foreground flex justify-end items-start">
      <ToolChip title={title} />
    </div>
  );
};

const InformationCardBody = ({
  text,
  subText,
}: {
  text: string;
  subText: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-balance text-2xl font-normal leading-[110%]">
        {text}
      </h3>
      <p className="text-sm leading-[140%] opacity-60 ">{subText}</p>
    </div>
  );
};
