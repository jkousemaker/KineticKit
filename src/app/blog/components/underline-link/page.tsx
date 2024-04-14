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

export default function UnderlineLinkPage() {
  const codeString = ``;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Underline Link" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <UnderlineLink href="#">Underline Link</UnderlineLink>
        </Tabs>
      </div>
    </main>
  );
}

const UnderlineLink = ({
  children,
  href,
}: {
  children: string;
  href: string;
}) => {
  return (
    <Link href={href} className="group relative">
      <span className="absolute left-0 bottom-0 w-full bg-gray-800/20 h-1">
        <span className="absolute inset-0 w-full h-full bg-gray-800 scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span>{children}</span>
    </Link>
  );
};
