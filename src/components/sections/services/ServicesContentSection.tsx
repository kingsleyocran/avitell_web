import { industriesContent, servicesContent } from "@/utils/content";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  pageData: (typeof servicesContent)[0];
};

function HomeIndustriesSection({ pageData }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isPaused) {
      timer = setInterval(() => {
        setSelectedIndex(
          (prevIndex) => (prevIndex + 1) % pageData.subList.length
        );
      }, 5000); // Change index every 5 seconds
    }

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    setIsPaused(true);

    // Resume after 1 minute
    setTimeout(() => setIsPaused(false), 60000);
  };

  return (
    <div>
      <div className="bg-[#002E52]">
        <div className="relative w-full h-full flex flex-col gap-8 max-w-[1200px] xl:mx-auto pb-24  px-6 md:px-12 lg:px-12 ">
          <div className="relative h-full flex flex-row">
            {/* Tab */}
            <div className="flex flex-col md:justify-between w-[40%] gap-2">
              {pageData.subList.map((e, index) => (
                <button
                  type="button"
                  onClick={() => handleClick(index)}
                  className={`${
                    selectedIndex == index
                      ? "bg-[#3F7295] text-white hover:text-white"
                      : "bg-[#C9E1F4] text-black hover:bg-th-primary-medium hover:text-white"
                  }
                  h-full flex-1 text-base lg:text-lg font-medium hover:bg-th-primary-medium flex flex-row
                  justify-center items-center text-center py-8 cursor-pointer px-4 md:px-3 transition-all duration-200`}
                >
                  {e.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="relative h-550 w-[60%] bg-[#3F7295] flex flex-row">
              {pageData.subList.map((e, index) => (
                <div
                  key={index}
                  className="text-white p-12 flex flex-col gap-6"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    //width: "100%",
                    //height: "100%",
                    opacity: selectedIndex === index ? 1 : 0,
                    transition: "opacity 0.8s ease-in-out",
                  }}
                >
                  <p className="text-sm ">{e.content}</p>

                  {/* Feautures */}
                  <div className="bg-white/10 p-4 flex flex-col gap-2">
                    <p className="text-sm font-bold">Features</p>
                    <ul className="flex flex-col gap-2">
                      {e.features.map((f, idx) => (
                        <li className="text-sm bg-white/10 p-3">{f}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="bg-black/10 p-4 flex flex-col gap-2">
                    <p className="text-sm font-bold">Benefits</p>
                    <ul className="flex flex-row gap-2">
                      {e.benefits.map((f, idx) => (
                        <li className="flex-1 text-sm bg-[#3F7295] p-3">{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className=" relative w-full flex flex-row items-center gap-24 max-w-[1200px] xl:mx-auto py-24  px-6 md:px-12 lg:px-12 ">
          {/* Images */}
          <div className="flex-none relative bg-neutral-100 h-500 w-450 ">
            <Image
              src={pageData.imgUrl}
              alt={pageData.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 flex-1">
            <h4 className="primarynormal mb-0 text-2xl md:text-lg lg:text-3xl ">
              {pageData.whyContent.title}
            </h4>

            {pageData.whyContent.content
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIndustriesSection;