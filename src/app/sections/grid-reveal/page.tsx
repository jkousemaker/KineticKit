"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
  gridArea: string;
  clipPath: { hidden: string; visible: string };
}

interface Work {
  id: number;
  href: string;
  title: string;
  thumbnail: string;
  images: Image[];
}

const works = [
  {
    id: 0,
    href: "#",
    title: "Herex Aether",
    thumbnail: "https://tympanus.net/Development/HoverGrid/media/beige1.jpg",
    images: [
      {
        src: "https://tympanus.net/Development/HoverGrid/media/1.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "1 / 1 / 5 / 5",
        clipPath: {
          hidden: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
      {
        src: "https://tympanus.net/Development/HoverGrid/media/2.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "5 / 8 / 10 / 11",
        clipPath: {
          hidden: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
      {
        src: "https://tympanus.net/Development/HoverGrid/media/3.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "8 / 3 / 11 / 5",
        clipPath: {
          hidden: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
    ],
  },
  {
    id: 1,
    href: "#",
    title: "Cosmic SIlence",
    thumbnail: "https://tympanus.net/Development/HoverGrid/media/red1.jpg",
    images: [
      {
        src: "https://tympanus.net/Development/HoverGrid/media/4.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "3 / 5 / 8 / 10",
        clipPath: {
          hidden: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
      {
        src: "https://tympanus.net/Development/HoverGrid/media/5.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "7 / 4 / 10 / 7",
        clipPath: {
          hidden: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
      {
        src: "https://tympanus.net/Development/HoverGrid/media/6.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "2 / 2 / 4 / 4",

        clipPath: {
          hidden: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
    ],
  },
  {
    id: 2,
    href: "#",
    title: "Mystic Trails",
    thumbnail: "https://tympanus.net/Development/HoverGrid/media/pink.jpg",
    images: [
      {
        src: "https://tympanus.net/Development/HoverGrid/media/7.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "8 / 2 / 11 / 5",
        clipPath: {
          hidden: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
      {
        src: "https://tympanus.net/Development/HoverGrid/media/8.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "2 / 8 / 8 / 11",
        clipPath: {
          hidden: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
      {
        src: "https://tympanus.net/Development/HoverGrid/media/9.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "3 / 3 / 6 / 6",

        clipPath: {
          hidden: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
    ],
  },
  {
    id: 3,
    href: "#",
    title: "Metamorph",
    thumbnail: "https://tympanus.net/Development/HoverGrid/media/beige2.jpg",
    images: [
      {
        src: "https://tympanus.net/Development/HoverGrid/media/10.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "7 / 7 / 10 / 9",
        clipPath: {
          hidden: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
      {
        src: "https://tympanus.net/Development/HoverGrid/media/11.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "4 / 1 / 10 / 4",
        clipPath: {
          hidden: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
      {
        src: "https://tympanus.net/Development/HoverGrid/media/12.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "2 / 5 / 6 / 9",

        clipPath: {
          hidden: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
    ],
  },
  {
    id: 4,
    href: "#",
    title: "Prismatica",
    thumbnail: "https://tympanus.net/Development/HoverGrid/media/red2.jpg",
    images: [
      {
        src: "https://tympanus.net/Development/HoverGrid/media/13.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "3 / 8 / 8 / 11",
        clipPath: {
          hidden: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
      {
        src: "https://tympanus.net/Development/HoverGrid/media/14.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "1 / 5 / 5 / 7",

        clipPath: {
          hidden: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
      {
        src: "https://tympanus.net/Development/HoverGrid/media/15.jpg",
        alt: "dev",
        width: 200,
        height: 100,
        gridArea: "6 / 2 / 11 / 5",
        clipPath: {
          hidden: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          visible: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
      },
    ],
  },
];

export default function GridRevealPage() {
  const [hoveredWork, setHoveredWork] = useState<Work | null>(null);
  return (
    <main className="uppercase">
      <div className="min-h-screen w-screen overflow-clip p-10 z-[100] [grid-row-gap:_1rem] [grid-column-gap:_2rem] justify-items-start grid grid-cols-[20%_15%_30%_1fr_1fr] grid-rows-[auto_auto_1fr_1fr_auto] content-between [grid-template-areas:_'tagline_..._site_year_menu'_'tagline_content_content_content_content'_'contact_content_content_content_content'_'works_content_content_content_content'_'title_title_links_links_sponsor']">
        <div
          className="[grid-area:_title;] flex flex-col gap-2 self-end text-[12.5px] text-[#777674]"
          id="title"
        >
          <h1 className="">
            <Link className="underline" href="#">
              #Hover
            </Link>{" "}
            <Link className="underline" href="#">
              #Grid
            </Link>{" "}
            Animations
          </h1>
          <span className="">
            Want animations like these?{" "}
            <Link className="underline" href="#">
              Hire us
            </Link>
          </span>
        </div>
        <WorkLinks works={works} setHoveredWork={setHoveredWork} />
        <div
          className="[grid-area:_tagline;] max-w-[220px] leading-[1.4] text-[#777674] text-[12.5px]"
          id="tagline"
        >
          Blending artistry with technology, we transform visionary ideas into
          tangible, captivating realities that inspire and connect.
        </div>
        <div
          className="[grid-area:_site;] text-[#777674] text-[12.5px]"
          id="site"
        >
          Grafixo
        </div>
        <div
          className="[grid-area:_year;] text-[#777674] text-[12.5px]"
          id="year"
        >
          2024
        </div>
        <div
          className="[grid-area:_contact;] text-[#777674] text-[12.5px] pt-12"
          id="contact"
        >
          <Link href="#" className="underline">
            Get in touch ↗
          </Link>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: !hoveredWork ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, ease: [0.73, 0.03, 0.53, 1.01] }}
          className="[grid-area:_5_/_3_/_2_/_6;] normal-case leading-[0.9] font-normal text-[clamp(2rem,8vw,9rem)] grid content-center w-full pointer-events-none text-white"
          id="title-main"
        >
          <span>Studio</span>
          <span className="ml-[1em]">Grafixo</span>
        </motion.h2>
        <WorkContents works={works} hoveredWork={hoveredWork} />
      </div>
      <Background works={works} hoveredWork={hoveredWork} />
    </main>
  );
}

const WorkLinks = ({
  works,
  setHoveredWork,
}: {
  works: Work[];
  setHoveredWork: (work: Work | null) => void;
}) => {
  return (
    <nav
      className="[grid-area:_works;] flex flex-col pointer-events-none text-[12.5px] mb-[10vh] "
      id="works"
    >
      <span className=" text-[#777674] mb-6">Recent works</span>
      {works.map((work, index) => (
        <motion.div
          key={work.id}
          initial={{ opacity: 0, y: 10, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        >
          <Link
            href={work.href}
            className="text-white text-xl py-1 hover:text-[#f4d88c] pointer-events-auto leading-[1.1]"
            onMouseEnter={() => setHoveredWork(work)}
            onMouseLeave={() => setHoveredWork(null)}
          >
            {work.title}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

const WorkContents = ({
  works,
  hoveredWork,
}: {
  works: Work[];
  hoveredWork: Work | null;
}) => {
  function getRandVal() {
    const randomNumber = Math.floor(Math.random() * 21) - 10;
    return randomNumber;
  }
  return (
    <div
      className="[grid-area:_content;] w-full h-full grid [grid-template-areas:_'content-item';]"
      id="content"
    >
      {works.map((work) => (
        <motion.div
          key={work.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoveredWork === work ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.73, 0.03, 0.53, 1.01],
          }}
          style={{ zIndex: hoveredWork === work ? 10 : 1 }}
          className="pointer-events-none relative grid [grid-area:_content-item;] grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)] w-full h-full"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: hoveredWork === work ? 1 : 0.9 }}
            transition={{ stiffness: 200 }}
            className="relative z-50 normal-case font-normal [grid-area:_1_/_2_/_-1_/_-2;] w-full h-full grid content-center leading-none text-white text-[clamp(2rem,10vw,9rem)] whitespace-nowrap"
          >
            {work.title}
          </motion.h2>
          {work.images.map((image, index) => {
            const x = getRandVal();
            const y = getRandVal();
            return (
              <motion.div
                initial={{
                  opacity: 0,
                  x: `${x}%`,
                  y: `${y}%`,
                  clipPath: image.clipPath.hidden,
                  filter: "brightness(300%)",
                }}
                animate={{
                  opacity: hoveredWork === work ? 1 : 0,
                  x: hoveredWork === work ? "0%" : `${x}%`,
                  y: hoveredWork === work ? "0%" : `${y}%`,
                  clipPath:
                    hoveredWork === work
                      ? image.clipPath.visible
                      : image.clipPath.hidden,
                  filter:
                    hoveredWork === work
                      ? "brightness(100%)"
                      : "brightness(300%)",
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.65, 0.05, 0.36, 1],
                  filter: {
                    duration: 1,
                  },
                  opacity: {
                    duration: 0.1,
                    delay: hoveredWork != work ? 0.7 : 0,
                  },
                }}
                key={index}
                style={{ gridArea: image.gridArea }}
                className={`relative z-10 w-full h-full`}
              >
                <motion.div
                  initial={{ scale: 1.5 }}
                  animate={{ scale: hoveredWork === work ? 1 : 1.5 }}
                  transition={{ duration: 1 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

const Background = ({
  works,
  hoveredWork,
}: {
  works: Work[];
  hoveredWork: Work | null;
}) => {
  return (
    <div
      className="fixed inset-0 w-screen h-screen grid -z-[1] [grid-template-areas:_'background';] grid-cols-[100%] grid-rows-[100%] pointer-events-none place-items-center"
      id="background"
    >
      {works.map((work) => (
        <motion.div
          initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          animate={{
            opacity: hoveredWork === work ? 1 : 0,
            scale: hoveredWork === work ? 1 : 1.05,
            filter: hoveredWork === work ? "blur(0px)" : "blur(20px)",
          }}
          transition={{
            duration: 0.5,
            delay: hoveredWork != work ? 0.5 : 0,
          }}
          style={{ zIndex: hoveredWork === work ? 10 : 1 }}
          key={work.id}
          className="relative z-[1] w-full h-full [grid-area:_background] object-cover "
        >
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            className="relative brightness-[0.2]"
          />
        </motion.div>
      ))}
      <motion.video
        initial={{ opacity: 1, scale: 1.1, filter: "blur(20px)" }}
        animate={{
          opacity: !hoveredWork ? 1 : 0,
          scale: !hoveredWork ? 1 : 1.1,
          filter: !hoveredWork ? "blur(0px)" : "blur(20px)",
        }}
        transition={{
          duration: 0.5,
          ease: [0.73, 0.03, 0.53, 1.01],
        }}
        width="1920"
        height="1080"
        autoPlay
        muted
        loop
        className="relative -z-[1] [grid-area:_background] object-cover w-full h-full"
      >
        <source src="/grid-reveal/bg-video.mp4" type="video/mp4" />
      </motion.video>
    </div>
  );
};
