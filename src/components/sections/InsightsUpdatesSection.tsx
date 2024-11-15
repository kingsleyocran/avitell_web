import { mediumLink, sampleBlogList } from "@/utils/content";
import Link from "next/link";
import React, { useState } from "react";
import ArrowUpIcon from "../../../public/assets/icons/menu_arrow_up.svg";
import MediumLogo from "../../../public/assets/icons/medium_logo.svg";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

function InsightsUpdatesSection({}: Props) {
  return (
    <div className="bg-white">
      <div className=" relative w-full flex flex-col gap-8 max-w-[1200px] xl:mx-auto py-24  px-6 md:px-12 lg:px-12 ">
        {/* Title */}
        <div className="flex flex-row">
          <h3 className="text-4xl text-black font-medium max-w-[400px]">
            Insights and Updates
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {sampleBlogList.map((e, idx) => (
            <BlogCard data={e} key={idx} />
          ))}
        </div>

        <div className="flex flex-row">
          <Link
            href={mediumLink}
            passHref
            rel="noopener noreferrer"
            target="_blank"
            className="flex flex-row gap-4 items-center text-2xl text-black"
          >
            <MediumLogo  width="55" height="41" viewBox="0 0 73 41"/>
            Follow us on Medium 
          </Link>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ data }: { data: any }) {
  const [onHoverComponent, setOnHoverComponent] = useState(false);

  return (
    <Link href={data.link} passHref rel="noopener noreferrer" target="_blank">
      <button
        type="button"
        onMouseEnter={() => {
          setOnHoverComponent(true);
        }}
        onMouseLeave={() => {
          setOnHoverComponent(false);
        }}
        className="flex text-start flex-col justify-between p-8 h-400 flex-1 border-[1px] hover:bg-white border-transparent
    hover:border-neutral-200 bg-[#F7F7F7] transition-all duration-200"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-xl text-black line-clamp-3">{data.title}</h3>
          <div className="flex flex-row">
            <AnimatePresence mode="sync">
              {onHoverComponent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0 },
                  }} // Delay added to animate
                  exit={{ opacity: 0, transition: { duration: 0.1, delay: 0 } }}
                  className="flex flex-row justify-center items-center gap-2 bg-th-primary-medium
                px-4 py-2 rounded-full"
                >
                  <p className="text-sm text-white">Read on Medium</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-row gap-3 items-end">
          <h3 className="text-sm text-black line-clamp-4">
            {data.description}
          </h3>

          <div
            className={`${
              onHoverComponent
                ? " bg-neutral-400 rotate-[90deg]"
                : "bg-neutral-300"
            } flex-none flex flex-row justify-center items-center rounded-full
            h-[40px] w-[40px] ransition-all duration-200`}
          >
            <ArrowUpIcon />
          </div>
        </div>
      </button>
    </Link>
  );
}

export default InsightsUpdatesSection;
