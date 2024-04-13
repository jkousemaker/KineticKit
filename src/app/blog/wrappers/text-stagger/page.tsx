"use client";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { TextStagger } from "@/components/wrappers/Text-Stagger";
import { useState } from "react";
import { DotButton } from "@/components/creative-components/buttons/Dot-Button";
export default function ScaleUpPage() {
  const [key, setKey] = useState(0);
  const codeString = `console.log("Hey")`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Text Stagger" />
      <Tabs codeString={codeString}>
        <div className="absolute top-0 right-0 m-5">
          <DotButton onClick={() => setKey(key + 1)} direction="left">
            Reset
          </DotButton>
        </div>
        <div className="" key={key}>
          <TextStagger>Test</TextStagger>
        </div>
      </Tabs>
    </main>
  );
}
