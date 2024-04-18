"use client";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { FadeUp } from "@/components/wrappers/scroll/Fade-Up";
import { useState } from "react";
import { DotButton } from "@/components/creative-components/buttons/Dot-Button";
export default function FadeUpPage() {
  const [key, setKey] = useState(0);
  const codeString = `console.log("Hey")`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Scale Up" />
      <Tabs codeString={codeString}>
        <div className="absolute top-0 right-0 m-5">
          <DotButton onClick={() => setKey(key + 1)} direction="left">
            Reset
          </DotButton>
        </div>

        <div className="h-screen"></div>
        <div className="border-y-2" key={key}>
          <FadeUp yStart={-100}>
            <h2 className="text-7xl">Hey</h2>
          </FadeUp>
        </div>
        <div className="h-screen"></div>
      </Tabs>
    </main>
  );
}
