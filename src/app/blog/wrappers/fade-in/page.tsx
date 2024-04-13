"use client";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { FadeIn } from "@/components/wrappers/Fade-In";
import { useState } from "react";
import { DotButton } from "@/components/creative-components/buttons/Dot-Button";

export default function FadeInPage() {
  const [key, setKey] = useState(0);
  const codeString = `console.log("Hey")`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Fade In" />

      <Tabs codeString={codeString}>
        <div className="absolute top-0 right-0 m-5">
          <DotButton onClick={() => setKey(key + 1)} direction="left">
            Reset
          </DotButton>
        </div>
        <FadeIn key={key}>
          <h1 className="font-bold text-2xl">Fade In Animation</h1>
        </FadeIn>
      </Tabs>
    </main>
  );
}
