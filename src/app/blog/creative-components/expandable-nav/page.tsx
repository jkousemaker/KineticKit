import React from "react";
import { PageHeader } from "@/components/elements/Page-Header";
import { Tabs } from "@/components/elements/Tabs";
export default function ExpandableNavPage() {
  const codeString = `import { useState } from "react"`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader title="Expandable Nav" />
      <div className="pt-8 pb-12">
        <Tabs codeString={codeString}>
          <div className="h-[20rem] w-full bg-[#060606]">
            <Header />
          </div>
        </Tabs>
      </div>
    </main>
  );
}

const navItems = [
  {
    name: "Products",
    subItems: [
      { name: "Product 1" },
      { name: "Product 2" },
      { name: "Product 3" },
    ],
  },
  { name: "Services", subItems: null },
];
const Header = () => {
  return (
    <header className="w-full bg-transparent relative z-50">
      <hr
        className="absolute bottom-0 w-full h-px -translate-x-1/2 border-0 opacity-10 left-1/2"
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 52.07%, rgba(255, 255, 255, 0) 100%)",
        }}
      />
      <div className="max-w-6xl px-8 w-full mx-auto">
        <div className="flex items-center relative justify-between h-20">
          <Logo>
            <h2 className="text-xl text-white">Logo</h2>
          </Logo>
          <Nav>
            <NavItems>
              <NavItem item={navItems[0]} />
            </NavItems>
          </Nav>
        </div>
      </div>
    </header>
  );
};

const Logo = ({ children }: { children: React.ReactNode }) => {
  return <div className="">{children}</div>;
};

const Nav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="static">
      <div className="">{children}</div>
    </div>
  );
};

const NavItems = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="z-auto hidden -translate-y-1/2 top-1/2 lg:absolute lg:left-0 lg:right-0 lg:justify-center lg:items-center lg:flex">
      <div>
        <nav className="m-auto">
          <ul className="flex justify-center list-none m-0">{children}</ul>
        </nav>
      </div>
    </div>
  );
};

const NavItem = ({ item }: { item: any }) => {
  return <li className="text-white">{item.name}</li>;
};
