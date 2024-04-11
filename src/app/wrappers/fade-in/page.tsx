import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { FadeIn } from "@/components/wrappers/Fade-In";

export default function FadeInPage() {
  const codeString = `console.log("Hey")`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Fade In" />
      <Tabs codeString={codeString}>
        <FadeIn>
          <h1 className="font-bold text-2xl">Fade In Animation</h1>
        </FadeIn>
      </Tabs>
    </main>
  );
}
