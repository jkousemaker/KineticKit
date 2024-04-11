import { MultiStep } from "@/components/creative-components/Multi-Step/Multi-Step";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";

export default function MultiStepPage() {
  const codeString = `console.log('gay nikit')`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader
        title="Multi Step"
        description="A multi-step component that can be used to guide users through a process."
      />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <MultiStep />
        </Tabs>
      </div>
    </main>
  );
}
