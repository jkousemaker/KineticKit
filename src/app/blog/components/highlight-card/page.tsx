import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { HighlightCard } from "@/components/creative-components/cards/Highlight-Card";
import { Button } from "@/components/ui/button";

export default function HighlightCardPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Highlight Card" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <HighlightCard
            title="Gabryella Silva"
            description="Dribbble shot featuring one of our previous projects. We've uncovered some hidden gems and wanted to showcase how even small projects"
          >
            <Button>Explore</Button>
          </HighlightCard>
        </Tabs>
      </div>
    </main>
  );
}
