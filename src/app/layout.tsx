import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KineticKit",
  description:
    "KineticKit: Elevate your Next.js projects with seamless animations and captivating transitions. Effortlessly integrate dynamic motion into your web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"overflow-x-clip " + poppins.className}>{children}</body>
    </html>
  );
}
