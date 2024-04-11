"use client";
import { Tabs } from "@/components/elements/Tabs/Tabs";
import { PageHeader } from "@/components/elements/Page-Header/Page-Header";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function PerspectiveNavDropdownPage() {
  const codeString = `console.log('gay nikit')`;
  return (
    <main className="py-6 lg:py-8">
      <PageHeader
        title="Perspective Nav Dropdown"
        description="A multi-step component that can be used to guide users through a process."
      />
      <div className="pt-8 pb-12 ">
        <Tabs codeString={codeString}>
          <div className="h-[20rem] w-full bg-[#060606]">
            <Header />
          </div>
        </Tabs>
      </div>
    </main>
  );
}

interface navItemsProps {
  name: string;
}
const navItems = [{ name: "Products" }, { name: "Services" }];
const Header = () => {
  const [tab, setTab] = useState<string | null>(null);

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
              {navItems.map((item: navItemsProps, i: number) => (
                <NavItem key={i} item={item} setTab={setTab} tab={tab}>
                  <div className="min-w-max shrink-0">
                    <h4 className="leading-6 font-medium text-base mb-8 text-blue-300">
                      Build AI
                    </h4>
                    <div className="">
                      <p className="text-neutral-300">Test</p>
                      <p className="text-neutral-300">Test</p>
                    </div>
                  </div>
                  <div className="min-w-max shrink-0">
                    <h4 className="leading-6 font-medium text-base mb-8 text-blue-300">
                      Build AI
                    </h4>
                    <div className="">
                      <p className="text-neutral-300">Test</p>
                      <p className="text-neutral-300">Test</p>
                      {i == 1 && <div className="w-[200px] h-5 bg-black"></div>}
                    </div>
                  </div>
                </NavItem>
              ))}
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

const NavItem = ({
  item,
  children,
  setTab,
  tab,
}: {
  item: {
    name: string;
  };
  children: React.ReactNode;
  setTab: (item: string | null) => void;
  tab: null | string;
}) => {
  return (
    <li className="relative z-[60]">
      <div onMouseLeave={() => setTab(null)} className="relative z-[60]">
        <button
          onMouseEnter={() => setTab(item.name)}
          className="text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70"
        >
          {item.name}
        </button>
        <div
          className="absolute pt-8 transform -translate-x-1/2 left-1/2"
          style={{ perspective: "1500px" }}
        >
          <AnimatePresence>
            {tab == item.name && (
              <motion.div
                initial={{
                  rotateX: "-25deg",

                  opacity: 0,
                }}
                animate={{
                  rotateX: "0deg",

                  opacity: 1,
                }}
                exit={{
                  rotateX: "-25deg",

                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className="-top-[20px] flex flex-col items-center relative origin-[0px_0px]"
              >
                <div className="relative z-50">
                  <motion.div
                    layoutId="active-indicator"
                    className="w-[15px] h-[15px] bg-black shadow-md shadow-black relative top-2 rotate-45"
                  ></motion.div>
                </div>
                <div className="relative shadow-md rounded-2xl">
                  <div className="relative   origin-[0px_0px]">
                    <motion.div
                      layoutId="active"
                      transition={{
                        duration: 0.8,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      }}
                      className="absolute inset-0 w-full h-full bg-neutral-900 z-0 rounded-2xl"
                    ></motion.div>
                    <div className=" relative top-0 left-0 z-50">
                      <div className="">
                        <div className="pt-10 pb-12 px-14 gap-12 flex">
                          {children}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </li>
  );
};
