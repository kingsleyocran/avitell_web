import { industriesContent } from "@/utils/content";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {};

function HomeIndustriesSection({}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isPaused) {
      timer = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % industriesContent.length);
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
    <div className="bg-white">
      <div className="relative w-full flex flex-col gap-8 max-w-[1200px] xl:mx-auto py-24 px-6 md:px-12 lg:px-12">
        {/* Title */}
        <div className="flex flex-row">
          <h3 className="text-4xl text-black font-medium max-w-[400px]">Industries</h3>
        </div>

        {/* Cards */}
        <div className="relative h-full flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-12">
          {/* Images */}
          <div className="flex-none relative h-300 w-full md:h-[440px] md:w-300 lg:h-350 lg:w-350">
            {industriesContent.map((e, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: selectedIndex === index ? 1 : 0,
                  transition: "opacity 0.8s ease-in-out",
                }}
              >
                <Image
                  src={e.imgUrl}
                  alt={e.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            ))}
          </div>

          <div className="flex-1">
            {/* Tab */}
            <div className="flex md:flex-row flex-wrap md:justify-between">
              {industriesContent.map((e, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleClick(index)}
                  className={`${
                    selectedIndex === index
                      ? "border-th-accent-medium hover:border-th-accent-light"
                      : "border-transparent"
                  }
                  flex-1 text-base lg:text-lg font-medium border-b-[3px]
                  flex flex-row justify-center text-center py-3 hover:bg-th-accent-medium
                hover:text-white text-black cursor-pointer px-4 md:px-3 transition-all duration-200`}
                >
                  {e.industry}
                </button>
              ))}
            </div>
            <div className="h-[1px] bg-[#E7E7E7] w-full"></div>

            {/* Content */}
            <div className="relative h-[300px] md:h-350 lg:h-300 w-full">
              {industriesContent.map((e, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 pt-12 text-black"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: selectedIndex === index ? 1 : 0,
                    transition: "opacity 0.8s ease-in-out",
                  }}
                >
                  <h4 className="primarynormal mb-0 text-2xl md:text-lg lg:text-2xl">
                    {e.title}
                  </h4>
                  <p className="text-base md:text-sm">{e.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIndustriesSection;