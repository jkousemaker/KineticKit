import Image from "next/image";

import getBase64 from "../../../lib/getLocalBase64";
import HeroMask from "./Hero-Mask";

export default async function SvgMaskLandingPage() {
  const myBlurDataURL = await getBase64(
    "https://images.unsplash.com/photo-1471893370050-2c1a36cf555c?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  );
  return (
    <main className="min-h-screen relative">
      <HeroMask>
        <Image
          src="https://images.unsplash.com/photo-1471893370050-2c1a36cf555c?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ clipPath: "url(#cut-bottom)", objectFit: "cover" }}
          className=" w-full h-full absolute inset-0 "
          placeholder="blur"
          blurDataURL={myBlurDataURL}
          width={5000}
          height={5000}
          alt="A person standing in front of a mountain"
        />{" "}
      </HeroMask>
    </main>
  );
}
