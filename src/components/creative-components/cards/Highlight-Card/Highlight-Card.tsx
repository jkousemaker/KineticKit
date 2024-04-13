import picture from "@public/selfie.jpg";
import Image from "next/image";
import * as React from "react";

const HighlightCard = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="border w-96 rounded-2xl overflow-hidden">
      <div className=" h-60 relative">
        <Image src={picture} alt="selfie" fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="text-sm text-[#71717a] leading-6 font-medium mr-5 mb-8">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export { HighlightCard };
