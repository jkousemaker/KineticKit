import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import {
  SnugCard,
  SnugCardHeader,
  SnugCardFooter,
  SnugCardTitle,
  SnugCardDescription,
  SnugCardContent,
  DefaultSnugCard,
} from "@/components/creative-components/cards/Snug-Card";
import selfie from "@public/selfie.jpg";

export default function SnugCardPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Snug Card" />
      <Tabs codeString={codeString}>
        <DefaultSnugCard
          title="In converstion"
          description="Description of card"
          img={selfie}
        />
      </Tabs>
    </main>
  );
}
