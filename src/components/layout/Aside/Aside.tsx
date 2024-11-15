"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { creativeComponents } from "@/data/creative-components";
import { components } from "@/data/components";
import { wrappers } from "@/data/wrappers";
const starters = [
  { title: "Installation", href: "/docs/installation" },
  { title: "Configuration", href: "/docs/configuration" },
  { title: "Usage", href: "/docs/usage" },
  { title: "Examples", href: "/docs/examples" },
];
import { usePathname } from "next/navigation";
export default function Aside() {
  return (
    <aside>
      <div className="relative overflow-hidden h-full py-6 pr-6 lg:py-8">
        <Section title="Getting started" links={starters} />
        <Section
          title="Creative"
          links={creativeComponents}
          toggleable={true}
        />
        <Section title="Components" links={components} toggleable={true} />
        <Section title="Wrappers" links={wrappers} toggleable={true} />
      </div>
    </aside>
  );
}

interface Links {
  title: string;
  href: string;
}

const Section = ({
  title,
  links,
  toggleable = true,
}: {
  title: string;
  links: Array<Links>;
  toggleable?: Boolean;
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div>
      <div className=" mb-1">
        {toggleable ? (
          <Accordion title={title} state={open} setState={setOpen} />
        ) : (
          <h4 className=" py-1 px-2  text-lg font-semibold">{title}</h4>
        )}
      </div>
      <motion.ul
        initial={false}
        animate={open ? "open" : toggleable && "collapsed"}
        variants={{
          open: { opacity: 1, height: "auto", y: 0 },
          collapsed: { opacity: 0, height: 0, y: 0 },
        }}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        className={cn(
          "mx-2 border-l",
          !open && toggleable && "pointer-events-none",
        )}
      >
        {links.map((link, index) => (
          <li key={index} className="my-1.5 px-2">
            <Button
              variant="link"
              asChild
              className="text-start w-full justify-start  py-1 px-2 group"
            >
              <Link
                href={link.href}
                className={cn(link.href === pathname && "underline")}
              >
                <span
                  className={cn(
                    "block  group-hover:translate-x-1 group-hover:text-theme-light transition-all duration-200",
                    link.href === pathname ? "text-theme" : "text-[#71717a]",
                  )}
                >
                  {link.title}
                </span>
              </Link>
            </Button>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

const Accordion = ({
  title,
  state,
  setState,
}: {
  title: string;
  state: boolean;
  setState: Function;
}) => {
  return (
    <Button
      variant="link"
      onClick={() => setState(!state)}
      className="py-1 px-2  w-full justify-between group !no-underline"
    >
      <h4
        className={cn(
          "!text-lg !font-semibold group-hover:!text-theme-light",
          state && "!text-theme",
        )}
      >
        {title}
      </h4>
      <ChevronUpIcon
        className={cn(
          "h-5 w-5 transition-transform group-hover:!text-theme-light group-hover:scale-150 rotate-90 ",
          state && "!rotate-180 !text-theme",
        )}
      />
    </Button>
  );
};
