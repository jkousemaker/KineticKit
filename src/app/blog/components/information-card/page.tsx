import { PageHeader } from "@/components/elements/Page-Header";
import { Tabs } from "@/components/elements/Tabs";
import {
  InformationCard,
  InformationCardImage,
  InformationCardPopup,
  InformationCardBadge,
  InformationCardBody,
} from "@/components/creative-components/cards/Information-Card";
import { sections } from "@/data/sections";

export default function InformationCardPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8 ">
      <PageHeader title="Information Card" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <div className="">
            <InformationCard href="#">
              <div className="rounded-2xl pt-[133.33%] z-0 w-full relative overflow-hidden">
                <InformationCardPopup
                  stack={sections[0].stack}
                ></InformationCardPopup>
                <InformationCardImage src={sections[0].imgSrc} />
                <InformationCardBadge title="Next.js" />
              </div>
              <InformationCardBody
                text="A new era of education at the Dutch Creative Technology Academy"
                subText="Reducations"
              />
            </InformationCard>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
