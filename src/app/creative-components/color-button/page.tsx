import { Tabs } from "@/components/elements/Tabs/Tabs";
import { ColorButton } from "@/components/creative-components/buttons/Color-Button";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";

export default function ColorButtonPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Color Button" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <ColorButton variant="default" size="default">
            Hey
          </ColorButton>
        </Tabs>
      </div>
    </main>
  );
}
