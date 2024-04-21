"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { GlassButton } from "@/components/creative-components/buttons/Glass-Button";
import { GlowButton } from "@/components/creative-components/buttons/Glow-Button";
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
          <div className="h-full py-10 w-full bg-black flex flex-col gap-20 justify-center items-center">
            <GlowButton>Gloww</GlowButton>
            <GlowButton variant="round" size="xl">
              Test
            </GlowButton>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
