import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Span } from "next/dist/trace";

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
    <div className="flex flex-col h-full bg-[url('/photography-bg.jpg')] bg-top bg-cover">
      <header className="flex justify-between items-center h-[90px] px-6">
        <div>Photography Portfolio</div>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>
      <main className="grow">
        <div className="flex h-full flex-col items-center">
          <TabGroup>
            <TabList className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={selected ? "text-white" : "text-stone-600"}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="h-full bg-stone-900 bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 my-6">
              <TabPanel>All Photos</TabPanel>
              <TabPanel>Oceans</TabPanel>
              <TabPanel>Forests</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center">
        <p>Photography Portfolio</p>
      </footer>
    </div>
  );
}
