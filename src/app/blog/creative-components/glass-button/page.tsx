import { Tabs } from "@/components/elements/Tabs/Tabs";
import { GlassButton } from "@/components/creative-components/buttons/Glass-Button";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";

export default function GlassButtonPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Glass Button" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <GlassButton variant="default" size="default">
            Hey
          </GlassButton>
        </Tabs>
      </div>
    </main>
  );
}
