"use client";
import TabsButtons from "@/components/tabs-buttons";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function Tabs({
  children,
  codeString,
}: {
  children: React.ReactNode;
  codeString: string;
}) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const isPreview = tab === "preview";
  return (
    <div className="my-4">
      <TabsButtons setTab={setTab} isPreview={isPreview} />
      {isPreview ? (
        <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border bg-grid-small-black/[0.1]">
          <div className="preview flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
            {children}
          </div>
        </div>
      ) : (
        <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
            <SyntaxHighlighter
              wrapLongLines={true}
              language="typescript"
              style={docco}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
}
