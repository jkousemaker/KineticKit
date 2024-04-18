"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { GlassButton } from "@/components/creative-components/buttons/Glass-Button";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import btnBg1 from "@public/btn-bg/button-bg-2.png";
import btnBg2 from "@public/btn-bg/button-small-4.png";
import { motion, useTime, useTransform } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
export default function GlassButtonPage() {
  const codeString = `import { GlassButton } from "@/components/Glass-Button";

  export default function Page() {
    return (
      <main>
        <GlassButton variant="light" size="default"></GlassButton>
      </main>
    );
  }
  `;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Glass Button" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <div className="p-5 bg-black">
            <GlassButton variant="default" size="default">
              <p>Default</p>
            </GlassButton>
          </div>
          <div className="ml-5">
            <GlassButton variant="light" size="default">
              <p>Light</p>
            </GlassButton>
          </div>
        </Tabs>
      </div>
      <PageHeader title="Glow Button" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <div className="h-full py-10 w-full bg-black flex flex-col gap-10 justify-center items-center">
            <GlowButton />
            <GlowButtonRound />
          </div>
        </Tabs>
      </div>
    </main>
  );
}

const GlowButton = () => {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 10000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );
  return (
    <Button className="bg-[#ffffff0d] overflow-hidden shadow-none text-white relative group">
      <motion.span style={{ rotate }} className="absolute z-10 w-[120%]">
        <Image
          src={btnBg1}
          alt="btn-bg"
          className="object-cover bg-no-repeat w-full h-full"
        />
      </motion.span>
      <span className="relative z-40 group-hover:tracking-wider transition-all duration-300">
        Get Started
      </span>
    </Button>
  );
};

const GlowButtonRound = () => {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 10000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );
  return (
    <Button className="bg-[#ffffff0d] w-[13vw] h-[13vw] rounded-full p-0 flex justify-center hover:bg-[#ffffff0d] items-center overflow-hidden shadow-none text-white relative group">
      <motion.span
        style={{ rotate }}
        className="absolute z-10 w-[110%] h-[110%]"
      >
        <Image
          src={btnBg2}
          alt="btn-bg"
          className="object-cover bg-no-repeat w-full h-full group-hover:scale-125 transition-transform duration-300"
        />
      </motion.span>
      <span className="relative z-40 flex flex-col">
        <span className="">
          View all <br /> Services
        </span>
        <ArrowRightIcon className="w-7 h-7 mx-auto -rotate-45 group-hover:rotate-0 transition-all duration-300" />
      </span>
    </Button>
  );
};
