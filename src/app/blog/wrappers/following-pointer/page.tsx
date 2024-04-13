import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { FollowingPointer } from "@/components/wrappers/Following-Pointer";
export default function FollowingPointerPage() {
  const codeString = `console.log("Hey")`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Following Pointer" />
      <Tabs codeString={codeString}>
        <FollowingPointer>
          <h1 className="font-bold text-2xl">Fade In Animation</h1>
        </FollowingPointer>
      </Tabs>
    </main>
  );
}
