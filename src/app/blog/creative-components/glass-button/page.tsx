import { Tabs } from "@/components/elements/Tabs/Tabs";
import { GlassButton } from "@/components/creative-components/buttons/Glass-Button";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";

export default function GlassButtonPage() {
  const codeString = `import { GlassButton } from "@/components/Glass-Button";

  export default function Page() {
    return (
      <main>
        <GlassButton variant="light" size="default"></GlassButton>
      </main>
    );
  }
  `;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Glass Button" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <div className="p-5 bg-black">
            <GlassButton variant="default" size="default">
              <p>Default</p>
            </GlassButton>
          </div>
          <div className="ml-5">
            <GlassButton variant="light" size="default">
              <p>Light</p>
            </GlassButton>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
