import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { ScaleUp } from "@/components/wrappers/Scale-Up";

export default function ScaleUpPage() {
  const codeString = `console.log("Hey")`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Scale Up" />
      <Tabs codeString={codeString}>
        <ScaleUp>
          <h1 className="font-bold text-2xl">Scale Up Animation</h1>
        </ScaleUp>
      </Tabs>
    </main>
  );
}
