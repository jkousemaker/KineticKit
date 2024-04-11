import { EmployeeAvatars } from "@/components/creative-components/Employee-Avatars";
import { employees } from "@/data/employees";
export default function HomePage() {
  return (
    <main className="py-6 lg:py-8 flex flex-row items-center justify-center mb-10 w-full">
      <EmployeeAvatars items={employees} />
    </main>
  );
}
