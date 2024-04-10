import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function Card({
  imgSrc,
  title,
  description,
  href,
}: {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className=" w-[330px] relative   ">
        <div className="w-full h-[170px] overflow-hidden rounded-[1.4rem] mb-[1.6rem]">
          <Image
            src={imgSrc}
            alt="Photo"
            fill
            className="h-full w-full object-cover bg-center !relative"
          />
        </div>
        <p className="text-2xl leading-5 font-medium tracking-tight -mx-[0.025em] mb-[0.8rem]">
          {title}
        </p>
        <p className="text-sm text-[#000000a6]">{description}</p>
      </div>
    </Link>
  );
}
