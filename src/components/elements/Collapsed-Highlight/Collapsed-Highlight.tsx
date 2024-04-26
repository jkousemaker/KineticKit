"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "@/components/ui/button";

function CollapsedHighlight({ codeString }: { codeString: string }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="relative my-6 overflow-hidden rounded-md">
      <div
        className={cn(
          "",
          collapsed
            ? " max-h-64 overflow-hidden"
            : " max-h-[600px] overflow-auto",
        )}
      >
        <SyntaxHighlighter
          wrapLongLines={true}
          language="typescript"
          style={docco}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div
        className={cn(
          "absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2",
          !collapsed ? "bottom-0  inset-x-0" : "inset-0",
        )}
      >
        <Button
          variant="secondary"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          {collapsed ? "Expand" : "Collapse"}
        </Button>
      </div>
    </div>
  );
}

export { CollapsedHighlight };
