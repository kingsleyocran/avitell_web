import React from "react";
import Image from "next/image";
import { industriesPageContent } from "@/utils/content";
import OpacityInViewAnimation from "@/components/animation/OpacityInViewAnimation";

type Props = {};

export default function Section({}: Props) {
  return (
    <div className="bg-white">
      <div
        className="relative w-full h-full flex flex-col gap-8 max-w-[1200px]
    xl:mx-auto py-24 px-6 md:px-12 lg:px-12 "
      >
        <div className="flex flex-col gap-36 relative">
          {industriesPageContent.map((i, idx) => (
            <div className="flex flex-col md:flex-row gap-12 ">
              <div className="flex-none relative md:sticky md:top-[60px]  bg-neutral-100 h-300 md:h-400 w-full md:w-350 lg:w-450">
                <Image
                  src={i.imgUrl}
                  alt={i.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              <div className="flex-1 flex text-black flex-col gap-4">
                <OpacityInViewAnimation animationDelay={0.2}>
                  <h2 className=" font-medium text-4xl"> {i.industry}</h2>
                </OpacityInViewAnimation>

                <OpacityInViewAnimation animationDelay={0.2}>
                  {i.content.split("\n\n").map((paragraph, index) => (
                    <>
                      <p key={index}>{paragraph}</p>
                      <p key={index}>{paragraph}</p>
                      <p key={index}>{paragraph}</p>
                    </>
                  ))}
                </OpacityInViewAnimation>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
