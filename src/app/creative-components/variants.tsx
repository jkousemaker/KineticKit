"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DotButton } from "@/components/Creative-Buttons/dot-button";
import { useState } from "react";

export default function Variants() {
  const [variant, setVariant] = useState<any>("default");

  return (
    <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
      <div className="flex items-center justify-between p-4">
        <Select
          onValueChange={(event) => {
            console.log(event);
            setVariant(event);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
            <SelectItem value="outline">Outline</SelectItem>
            <SelectItem value="destructive">Destructive</SelectItem>
            <SelectItem value="ghost">Ghost</SelectItem>
            <SelectItem value="link">Link</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full">
        <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center">
          <DotButton variant={variant} size="default">
            Hey
          </DotButton>
        </div>
      </div>
    </div>
  );
}
