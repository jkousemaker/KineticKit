import { Nav } from "@/components/layout/Nav";
import { Aside } from "@/components/layout/Aside";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Nav />
      <div className="">
        <div className="container md:grid md:gap-6 md:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
          <Aside />
          {children}
        </div>
      </div>
    </div>
  );
}
