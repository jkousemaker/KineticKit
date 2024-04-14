"use client";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import AlbumCover from "@public/Album-Cover.png";
import FeaturedProject from "@public/Featured-Project-Image.jpg";
import Link from "next/link";

export default function SleekCardPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Highlight Card" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <div className="w-full flex">
            <SleekCard href="/blog/components/sleek-card">
              <SleekCardImage src={AlbumCover} />
              <SleekCardBody>
                <SleekCardTitle title="Album Cover" />
                <SleekCardDescription description="Logo Design, Album Cover Design" />
              </SleekCardBody>
            </SleekCard>
          </div>
        </Tabs>
      </div>
    </main>
  );
}

const SleekCard = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className={cn("w-1/2 mr-24 relative group", className)}>
      {children}
    </Link>
  );
};

const SleekCardImage = ({ src }: { src: StaticImageData | string }) => {
  return (
    <span className="relative overflow-hidden block group-hover:scale-95 transition-all duration-500 ease-css">
      <div className="absolute w-full h-full inset-0 opacity-0 z-10 mix-blend-multiply transition-all duration-500 bg-red-500 group-hover:opacity-50"></div>
      <Image
        src={src}
        alt="Album Cover"
        className="object-cover group-hover:scale-110 transition-all duration-500 ease-css"
      />
    </span>
  );
};

const SleekCardBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start justify-between pt-10 pb-[30px] text-left group-hover:px-5 group-hover:pt-[25px] group-hover:pb-[45px] transition-all duration-500 ease-css">
      <div className="block">{children}</div>
    </div>
  );
};

const SleekCardTitle = ({ title }: { title: string }) => {
  return <h5 className="text-base">{title}</h5>;
};

const SleekCardDescription = ({ description }: { description: string }) => {
  return (
    <p className="relative before:content-[''] before:w-[0%] before:absolute before:-z-[1] before:bottom-[5px] before:h-2 before:opacity-30 before:bg-red-500 before:right-0 group-hover:before:left-0 group-hover:before:w-full before:transition-all before:duration-500 before:ease-css">
      {description}
    </p>
  );
};
