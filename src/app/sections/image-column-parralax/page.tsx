import Link from "next/link";

export default function ImageColumnParralaxPage() {
  return (
    <main className="min-h-screen">
      <div className="h-screen"></div>
      <div className="relative h-[400vh] bg-neutral-950 text-white uppercase whitespace-nowrap text-xl leading-[1.1]">
        <div className="h-screen sticky top-0 z-0 grid place-content-center">
          <nav className="flex flex-col w-[15.8em]">
            <div className="flex justify-between">
              <h1 className="">Justin Kousemaker</h1>
              <div className="h-[1em] w-[1em]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                >
                  {" "}
                  <path
                    fill="#fff"
                    stroke="#000"
                    strokeWidth=".3"
                    d="m9.145 7.98 3.069 4.394-2.019 1.415-3.07-4.638-.124-.188-.126.188-3.07 4.589-2.02-1.415 3.021-4.346.116-.167-.193-.061-4.54-1.444.745-2.341L5.57 5.602l.2.071V.15H8.18v5.522l.2-.07 4.685-1.636.745 2.34-4.588 1.445-.195.06.117.168Z"
                  ></path>{" "}
                </svg>
              </div>
            </div>
            <div className="">
              <h2 className="w-[15.8em]">Freelance Design Director</h2>
            </div>
            <div className="flex flex-row flex-nowrap justify-between">
              <p className="">18.24</p>
              <p className="">-</p>
              <p className="">Selected Works</p>
            </div>
          </nav>
        </div>
        <div>
          <section className="relative z-20 w-full h-screen">
            <div className="h-screen px-[5vw] grid place-content-center">
              <h2 className="text-[14.8vw] w-10/12 text-center">Title</h2>
            </div>
            <div className="">
              <div className="px-[5vw] grid place-content-center h-[40vh]">
                <figure className="w-4/12 aspect-[4/5] flex">
                  <Link href="/" className="h-full w-full" />
                </figure>
              </div>
              <div className="z-50  pointer-events-none px-[5vw] grid place-content-center w-screen h-screen st top-0 left-0">
                Test
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
