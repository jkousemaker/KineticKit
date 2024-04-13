import { NavPill } from "@/components/layout/Nav-Pill";

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <NavPill />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
