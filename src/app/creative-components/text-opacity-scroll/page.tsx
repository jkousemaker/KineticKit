import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { TextOpacityScroll } from "@/components/creative-components/Text-Opacity-Scroll";
export default function TextOpacityScrollPage() {
  const codeString = `console.log("Hey")`;
  return (
    <main className="py-6 lg:py-8 !relative">
      <PageHeader
        title="Text Opacity Scroll"
        description="A component that allows text to follow a path."
      />
      <Tabs codeString={codeString}>
        <div className="!relative w-full py-[10rem]">
          <TextOpacityScroll text="This is a text opacity scroll component." />
        </div>
      </Tabs>
      <div className="h-[300vh]"></div>
    </main>
  );
}
