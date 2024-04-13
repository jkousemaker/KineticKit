"use client";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { TabButtons } from "@/components/elements/Tab-Buttons";
import { useState } from "react";
export default function SnugCardPage() {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const isPreview = tab === "preview";
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Tab Buttons" />
      <Tabs codeString={codeString}>
        <TabButtons setTab={setTab} isPreview={isPreview} layoutId="page" />
      </Tabs>
    </main>
  );
}
