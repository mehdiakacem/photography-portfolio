import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Span } from "next/dist/trace";
import Masonry from "react-masonry-css";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "oceans",
    display: "Oceans",
  },
  {
    key: "forests",
    display: "Forests",
  },
];

export default function Home() {
  return (
    <div className="h-full bg-[url('/photography-bg.jpg')] bg-top bg-cover overflow-auto">
      <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
        <span className="uppercase text-lg font-medium">Photography Portfolio</span>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>
      <main className="pt-[110px]">
        <div className="flex flex-col items-center">
          <TabGroup>
            <TabList className="flex items-center place-content-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames("uppercase text-lg", selected ? "text-white" : "text-stone-600")}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="h-full bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 my-6">
              <TabPanel>
                <Masonry
                  breakpointCols={2}
                  className="flex gap-4"
                  columnClassName=""
                >
                  <img src="/ocean-1.jpeg" alt="ocean-1" className="my-4" />
                  <img src="/ocean-2.jpeg" alt="ocean-2" className="my-4" />
                  <img src="/ocean-3.jpeg" alt="ocean-3" className="my-4" />
                  <img src="/ocean-4.jpeg" alt="ocean-4" className="my-4" />
                  <img src="/ocean-5.jpeg" alt="ocean-5" className="my-4" />
                </Masonry>
              </TabPanel>
              <TabPanel>Oceans</TabPanel>
              <TabPanel>Forests</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase text-lg font-medium">
        <p>Photography Portfolio</p>
      </footer>
    </div>
  );
}
