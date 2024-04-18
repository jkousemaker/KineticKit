"use client";
import { NeumorphHeader } from "@/components/elements/NeumorphHeader";
import { Metadata } from "next";
import { sections } from "@/data/sections";
import {
  InformationCard,
  InformationCardImage,
  InformationCardPopup,
  InformationCardBadge,
  InformationCardBody,
} from "@/components/creative-components/cards/Information-Card";
import { useCursorStore } from "@/stores/cursorStore";
import type { useCursorStoreProps } from "@/stores/cursorStore";
export default function SectionsPage() {
  const updateState = useCursorStore(
    (state: useCursorStoreProps) => state.updateState
  );
  const updateColor = useCursorStore(
    (state: useCursorStoreProps) => state.updateColor
  );
  const updateMargin = useCursorStore(
    (state: useCursorStoreProps) => state.updateMargin
  );
  return (
    <main className="">
      <NeumorphHeader mode="dark">Sections</NeumorphHeader>
      <div className=" flex-row flex-wrap gap-5 bg-[#141414] pt-20 p-5 grid grid-cols-3 items-center justify-center">
        {sections.map((section, i) => (
          <InformationCard
            onMouseEnter={() => {
              updateState(true);
              updateColor("#fff");
              updateMargin({ top: -50, left: -50 });
            }}
            onMouseLeave={() => {
              updateState(false);
            }}
            key={i}
            href={section.href}
            className="mx-auto interactable"
          >
            <div className="rounded-2xl pt-[133.33%] z-0 w-full relative overflow-hidden">
              <InformationCardPopup
                stack={section.stack}
              ></InformationCardPopup>
              <InformationCardImage src={section.imgSrc} />
              {section.badge && <InformationCardBadge title={section.badge} />}
            </div>
            <InformationCardBody
              className="!text-white"
              text={section.description}
              subText={section.title}
            />
          </InformationCard>
        ))}
      </div>
    </main>
  );
}
