import { Tabs } from "@/components/elements/Tabs/Tabs";

import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { employees } from "@/data/employees";
import { EmployeeAvatars } from "@/components/creative-components/Employee-Avatars";
export default function ColorButtonPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Employee Avatars" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <EmployeeAvatars items={employees} />
        </Tabs>
      </div>
    </main>
  );
}
