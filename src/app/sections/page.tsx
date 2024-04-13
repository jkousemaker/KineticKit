import { NeumorphHeader } from "@/components/elements/NeumorphHeader";
import { Metadata } from "next";
import { sections } from "@/data/sections";
import { HighlightCard } from "@/components/creative-components/cards/Highlight-Card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Next.js",
};
export default function SectionsPage() {
  return (
    <main>
      <NeumorphHeader mode="dark">Sections</NeumorphHeader>
      <div className="flex flex-row flex-wrap gap-5">
        {sections.map((section) => (
          <HighlightCard
            key={section.title}
            title={section.title}
            description="Make motion component text - stagger per letter Finish pill nav bar"
          >
            <Button asChild variant="outline" size="lg">
              <Link href={section.href}>{section.title}</Link>
            </Button>
          </HighlightCard>
        ))}
      </div>
    </main>
  );
}
