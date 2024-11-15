"use client";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { ScaleIn } from "@/components/wrappers/Scale-In";
import { useState } from "react";
import { DotButton } from "@/components/creative-components/buttons/Dot-Button";
export default function ScaleInPage() {
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
        <div className="" key={key}>
          <ScaleIn duration={0.5}>
            <PageHeader title="Cool Animation" />
          </ScaleIn>
          <ScaleIn delay={0.2} duration={0.5}>
            <PageHeader title="Delay Cool Animation" />
          </ScaleIn>
        </div>
      </Tabs>
    </main>
  );
}
