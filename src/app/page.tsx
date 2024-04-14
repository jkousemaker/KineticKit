import { DotButton } from "@/components/creative-components/buttons/Dot-Button";
import { EmployeeAvatars } from "@/components/creative-components/Employee-Avatars";
import { employees } from "@/data/employees";
import Phones from "@public/phones.png";
import { ImageTilt } from "@/components/creative-components/Image-Tilt";
import { AnimatedLightning } from "@/components/creative-components/Animated-Lightning";
import { Nav } from "@/components/layout/Nav";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <div>
        <main className="w-full relative overflow-clip">
          <div className="">
            <div className="relative  p-2 md:p-4 lg:p-10 flex flex-col items-center justify-center z-20">
              <div className="relative flex flex-col items-center justify-center mt-10">
                <h1 className="text-4xl md:text-6xl font-bold mt-20 mb-28 relative text-center text-foreground max-w-6xl mx-auto !leading-snug __className_399708">
                  Crafting High-Performance Websites{" "}
                  <br className="hidden md:block"></br>
                  with{" "}
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8] z-10">
                    Stunning Design & Speed
                  </span>
                  <span className="ml-5">
                    <AnimatedLightning />
                  </span>
                </h1>
                <h2 className="relative font-regular text-base md:text-xl text-zinc-500 tracking-wide mb-8 text-center max-w-3xl mx-auto antialiased">
                  We build websites that drive results and help your business
                  grow.
                  <br />
                  No Calls. No BS.
                  <span className="font-medium">Just Results.</span>
                </h2>
              </div>
              <div className="relative z-10 group mb-20 flex flex-row gap-10">
                <DotButton variant="dark" href="/blog" size="pill">
                  View Blog
                </DotButton>
                <DotButton variant="dark" href="/sections" size="pill">
                  View Sections
                </DotButton>
              </div>
              <div>
                <h2 className="text-neutral-500 text-center mb-4 relative z-40 ">
                  Trusted by Founders and Entrepreneurs from all over the world
                </h2>
                <EmployeeAvatars items={employees} />
              </div>
            </div>
            <div className="z-10">
              <ImageTilt image={Phones} offsets={["start end", "end end"]} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
