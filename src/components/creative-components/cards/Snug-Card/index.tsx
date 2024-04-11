import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  SnugCard,
  SnugCardHeader,
  SnugCardFooter,
  SnugCardTitle,
  SnugCardDescription,
  SnugCardContent,
  SnugCardThumbnail,
} from "./Snug-Card";

const DefaultSnugCard = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string | StaticImageData;
}) => {
  return (
    <SnugCard>
      <SnugCardHeader>
        <SnugCardThumbnail>
          <Image src={img} alt="selfie" width={100} height={100} />
        </SnugCardThumbnail>
        <SnugCardTitle>{title}</SnugCardTitle>
        <SnugCardDescription>{description}</SnugCardDescription>
      </SnugCardHeader>
    </SnugCard>
  );
};

export {
  SnugCard,
  SnugCardHeader,
  SnugCardFooter,
  SnugCardTitle,
  SnugCardDescription,
  SnugCardContent,
  DefaultSnugCard,
};
