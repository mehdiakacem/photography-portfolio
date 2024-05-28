import type { Photo } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import classNames from "classnames";

import bgImage from "../public/photography-bg.jpg";
import { GetStaticProps } from "next";
import { createApi } from "unsplash-js";
import nodeFetch from "node-fetch";
import { Gallery } from "@/components/Gallery";
import { getImages } from "@/utils/image-utils";

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

type HomeProps = {
  oceans: Photo[];
  forests: Photo[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY!,
    fetch: nodeFetch as unknown as typeof fetch,
  });

  const [oceans, forests] = await Promise.all([
    getImages(unsplash, "oceans"),
    getImages(unsplash, "forests"),
  ]);

  return {
    props: {
      oceans,
      forests,
    },
  };
};

export default function Home({ oceans, forests }: HomeProps) {
  return (
    <div className="h-full overflow-auto">
      <Image
        className="fixed left-0 top-0 z-0"
        src={bgImage}
        alt="background-image"
        placeholder="blur"
      />
      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t"></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-10">
        <span className="uppercase text-lg font-medium">
          Photography Portfolio
        </span>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>
      <main className="relative pt-[110px] z-20">
        <div className="flex flex-col items-center">
          <TabGroup>
            <TabList className="flex items-center place-content-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        "uppercase text-lg",
                        selected ? "text-white" : "text-stone-600"
                      )}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="h-full bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 my-6">
              <TabPanel>
                <Gallery photos={[...oceans, ...forests]} />
              </TabPanel>
              <TabPanel>
                <Gallery photos={oceans} />
              </TabPanel>
              <TabPanel>
                <Gallery photos={forests} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>

      <footer className="relative z-20 h-[90px] flex justify-center items-center uppercase text-lg font-medium">
        <p>Photography Portfolio</p>
      </footer>
    </div>
  );
}
