import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import Image from "next/image";
import image1 from "@public/apple.jpg";
import getBase64 from "../../../../lib/getLocalBase64";

export default function ComparatorPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Underline Link" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <Comparator />
        </Tabs>
      </div>
    </main>
  );
}

const Comparator = async () => {
  const myBlurDataURL = getBase64(
    "https://images.unsplash.com/photo-1707617961911-889e9ab306bb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  );
  console.log(myBlurDataURL);
  return (
    <div className="w-full -ml-5">
      <div className="relative block">
        <figure className="pointer-events-none select-none w-full h-full">
          <picture className="block">
            <Image
              src="https://images.unsplash.com/photo-1707617961911-889e9ab306bb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              //placeholder="blur"
              //blurDataURL={myBlurDataURL}
              //fill
              alt="Image"
              className="w-full max-w-full h-auto align-middle"
              //src="https://images.unsplash.com/photo-1707617961911-889e9ab306bb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={1000}
              height={1000}
              style={{ width: "100%", height: "100%" }}
            />
          </picture>
        </figure>
      </div>
    </div>
  );
};
