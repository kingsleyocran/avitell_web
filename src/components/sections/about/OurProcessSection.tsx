import React, { useEffect, useState } from "react";
import { ourPrcocessContent } from "@/utils/content";
import TextOpacityInViewAnimation from "@/components/animation/TextOpacityInViewAnimation";
import OpacityMoveYInViewAnimation from "@/components/animation/OpacityMoveYInViewAnimation";
import { useMediaQuery } from "react-responsive";

type Props = {};

export default function Section({ }: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1024px)",
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isPaused) {
      timer = setInterval(() => {
        setSelectedIndex(
          (prevIndex) => (prevIndex + 1) % ourPrcocessContent.processList.length
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
    <div className="bg-white flex flex-row justify-center">
      <div className="relative w-full flex flex-col gap-8 max-w-[900px] xl:mx-auto pt-24 md:py-24 px-6 md:px-12 lg:px-12">
        {/* Title */}
        <div className="flex flex-row justify-center w-full">
          <h3 className="text-4xl text-black font-medium max-w-[400px]">
            <TextOpacityInViewAnimation
              phrases={[ourPrcocessContent.title]}
              animationDelay={0.5}
              extraClassNames="text-center"
            />
          </h3>
        </div>

        {/* Cards */}
        <OpacityMoveYInViewAnimation animationDelay={0.7} positionFrom={50}>
          <div className="relative h-full flex flex-col gap-1 md:gap-1 lg:gap-1">
            {/* Tab */}
            <div className="flex md:flex-row flex-wrap md:justify-between">
              {ourPrcocessContent.processList.map((e, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleClick(index)}
                  className={`${
                    selectedIndex === index
                      ? "bg-th-primary-medium"
                      : "border-transparent hover:bg-neutral-100"
                  }
                  flex-1 text-base lg:text-lg font-medium rounded-xl
                  flex flex-row justify-center text-center py-6 
                hover:text-white text-black cursor-pointer px-4 md:px-3 transition-all duration-200`}
                >
                  {React.cloneElement(isMobile ? e.iconMobile : e.iconDesktop, {
                    className: `${
                      selectedIndex === index ? " fill-white " : "fill-black"
                    }`,
                  })}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="relative h-[400px] md:h-350 lg:h-250 w-full bg-th-primary-dark rounded-xl">
              {ourPrcocessContent.processList.map((e, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-4 pt-12 text-white p-12"
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
                  <h4 className="primarynormal text-center mb-0 text-2xl md:text-lg lg:text-3xl">
                    {e.title}
                  </h4>
                  <p className="text-base text-center md:text-sm">
                    {e.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </OpacityMoveYInViewAnimation>
      </div>
    </div>
  );
}
