import React from "react";
import Image from "next/image";
import OpacityInViewAnimation from "@/components/animation/OpacityInViewAnimation";
import { homeServicesContent } from "@/utils/content";

type Props = {};

export default function Services({}: Props) {
  return (
    <div className="">
      <div
        className="h-full relative w-full flex flex-row
    max-w-[1200px] xl:mx-auto  px-10 md:px-12 lg:px-12 "
      >
        <div className="basis-3/5 py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 md:gap-y-24 gap-y-24">
            {homeServicesContent.map((e, idx) => (
              <OpacityInViewAnimation animationDelay={0.5}>
                <div key={idx} className="flex flex-col gap-8">
                  {e.iconDesktop}

                  <div className="flex flex-col gap-2">
                    <h4 className="primarynormal mb-0 text-2xl md:text-lg lg:text-lg tracking-[0px] text-black">
                      {e.title}
                    </h4>
                    <p className="text-black paragraph-text">{e.content}</p>
                  </div>
                </div>
              </OpacityInViewAnimation>
            ))}
          </div>
        </div>
        
        <div className="basis-2/5 flex flex-row justify-evenly">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="h-full w-full relative ">
              <Image
                src={"/assets/vector/lines.svg"}
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
    </div>
  );
}
