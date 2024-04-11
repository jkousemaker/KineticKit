import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { ScaleUp } from "@/components/wrappers/Scale-Up";

export default function ScaleUpPage() {
  const codeString = `console.log("Hey")`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Scale Up" />
      <Tabs codeString={codeString}>
        <div className="">
          <ScaleUp duration={0.5}>
            <PageHeader title="Cool Animation" />
          </ScaleUp>
          <ScaleUp delay={0.2} duration={0.5}>
            <PageHeader title="Delay Cool Animation" />
          </ScaleUp>
        </div>
      </Tabs>
    </main>
  );
}
