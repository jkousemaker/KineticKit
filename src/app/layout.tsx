import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Nav } from "@/components/layout/Nav";
import { Aside } from "@/components/layout/Aside";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Nav />
        <div className="">
          <div className="container md:grid md:gap-6 md:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
            <Aside />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
