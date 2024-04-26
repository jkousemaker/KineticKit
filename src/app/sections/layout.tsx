"use client";
import { NavPill } from "@/components/layout/Nav-Pill";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <ReactLenis root options={{ lerp: 0.08 }}>
      <div className="">
        <NavPill />
        <div className="relative z-10">{children}</div>
      </div>
    </ReactLenis>
  );
}
