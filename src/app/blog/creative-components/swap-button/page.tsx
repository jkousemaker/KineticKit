import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { SwapButton } from "@/components/creative-components/buttons/Swap-Button";
export default function SwapButtonPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Swap Button" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <SwapButton text="Learn more" />
        </Tabs>
      </div>
      <PageHeader title="Reactive Button" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <SwapButton text="Learn more" />
        </Tabs>
      </div>
    </main>
  );
}
