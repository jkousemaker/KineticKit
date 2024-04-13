import { NeumorphHeader } from "@/components/elements/NeumorphHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
};
export default function SectionsPage() {
  return (
    <main>
      <NeumorphHeader mode="dark">Sections</NeumorphHeader>
    </main>
  );
}
