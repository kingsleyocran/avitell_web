import React from "react";
import Image from "next/image";
import { contactContent } from "@/utils/content";
import { useMediaQuery } from "react-responsive";
import TextOpacityWithMoveOnYAnimation from "@/components/animation/TextOpacityWithMoveOnYAnimation";
import TextOpacityInViewAnimation from "@/components/animation/TextOpacityInViewAnimation";

export default function Section() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1024px)",
  });

  return (
    <div className="relative h-800 md:h-600 w-full bg-[#002E52]">
      <div className="absolute h-800 md:h-600 w-full z-0">
        <div className="absolute h-800 md:h-600 w-full z-0 flex flex-row justify-evenly">
          {Array.from({ length: isTablet ? 4 : 5 }).map((_, index) => (
            <div className="h-full w-full relative ">
              <Image
                src={"/assets/vector/lines-blue.svg"}
                alt={"background"}
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute pt-[50px] z-10 h-800 md:h-600 w-full  overflow-hidden flex flex-col">
        <div
          className="flex flex-col md:flex-row items-end md:items-center
          justify-center md:justify-between gap-12 md:gap-12 max-w-[1200px] pt-12 xl:mx-auto pl-6 md:pl-12 lg:pl-12 "
        >
          {/* Content */}
          <div className="px-6 md:px-0 flex-none w-full md:w-2/4 md:h-full flex flex-col items-start justify-center gap-1 md:gap-4">
            <h1 className="text-white text-3xl md:text-4xl lg:text-4xl text-center">
              <TextOpacityInViewAnimation
                phrases={[contactContent.title]}
                animationDelay={0.5}
                extraClassNames="text-start"
              />
            </h1>

            <p className="text-white text-opacity-60 text-center">
              <TextOpacityInViewAnimation
                phrases={[contactContent.subText]}
                animationDelay={0.7}
                extraClassNames="text-start"
              />
            </p>
          </div>

          {/* Right Image */}
          <div className="h-300 md:h-[400px] w-full flex-none   relative">
            <Image
              src={"/assets/vector/vector_1.svg"}
              alt={"background"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top left",
                overflow: "hidden"
              }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
