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
    <div className="relative h-full w-full bg-[#E7912C]">
      <div
        className="flex flex-col items-end md:items-center
       justify-center md:justify-between gap-12 md:gap-12 max-w-[900px] py-24 md:py-36 xl:mx-auto px-6 md:px-12 lg:px-12"
      >
        { /* Title */}
        <div className="px-6 md:px-12">
          <h1 className="text-white text-3xl md:text-3xl lg:text-4xl text-center">
            <TextOpacityInViewAnimation
              phrases={[contactContent.processTitle]}
              animationDelay={0.5}
              extraClassNames="text-center"
            />
          </h1>
        </div>

        <ul className="grid grid-cols-1 gap-y-24 md:gap-y-12 bg-[#D97C21] py-12 px-6 md:p-12 rounded-2xl">
          {contactContent.process.map((c, idx) => (
            <li className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex-none basis-[22%]">
                <h1 className="text-white text-7xl md:text-8xl lg:text-8xl text-end text-opacity-25 font-bold">
                  <TextOpacityInViewAnimation
                    phrases={[`0${idx + 1}`]}
                    animationDelay={0.5}
                    extraClassNames="text-center"
                  />
                </h1>
              </div>

              <div
                className="basis-[78%] flex flex-col items-start justify-center gap-1 md:gap-1"
              >
                <h1 className="text-white text-2xl md:text-2xl lg:text-2xl text-center">
                  <TextOpacityWithMoveOnYAnimation
                    positionFrom={90}
                    phrases={[c.title]}
                    animationDelay={0.5}
                    extraClassNames="text-start"
                  />
                </h1>

                <p className="text-white break-words text-opacity-60 text-center">
                  <TextOpacityWithMoveOnYAnimation
                    positionFrom={60}
                    phrases={[c.content]}
                    animationDelay={0.7}
                    extraClassNames="text-start"
                  />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
