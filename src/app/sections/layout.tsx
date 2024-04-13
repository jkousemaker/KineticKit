import { NavPill } from "@/components/layout/Nav-Pill";

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <NavPill />
      <div className="h-[500vh]">{children}</div>
    </div>
  );
}
