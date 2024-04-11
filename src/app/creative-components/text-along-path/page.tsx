import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { TextAlongPath } from "@/components/creative-components/Text-Along-Path/Text-Along-Path";
export default function TextAlongPathPage() {
  const codeString = `console.log("Hey")`;
  return (
    <main className="py-6 lg:py-8 !relative">
      <PageHeader
        title="Text Along Path"
        description="A component that allows text to follow a path."
      />
      <Tabs codeString={codeString}>
        <div className="!relative w-full py-[10rem]">
          <TextAlongPath text="Gaby is super pretty" variant="full" />
        </div>
      </Tabs>
      <div className="h-[300vh]"></div>
    </main>
  );
}
