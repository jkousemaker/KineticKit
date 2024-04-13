import { Tabs } from "@/components/elements/Tabs/Tabs";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { ShinyButton } from "@/components/creative-components/buttons/Shiny-Button";
export default function ShinyButtonPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Shiny Button" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <div className="p-10 bg-[#111016]/60">
            <ShinyButton>
              <span className="relative z-20">Button</span>
            </ShinyButton>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
