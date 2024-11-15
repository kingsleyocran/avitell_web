import React from "react";
import Image from "next/image";
import OpacityInViewAnimation from "@/components/animation/OpacityInViewAnimation";
import { homeServicesContent } from "@/utils/content";
import { useMediaQuery } from "react-responsive";

type Props = {};

export default function Services({ }: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1024px)",
  });
  
  return (
    <div className="bg-white">
      <div
        className="h-full relative w-full flex flex-row
    max-w-[1200px] xl:mx-auto  px-6 md:px-12 lg:px-12 "
      >
        <div className="md:basis-3/5 py-36">
          <div className="grid grid-cols-2 gap-x-10 md:gap-x-24 md:gap-y-24 gap-y-12">
            {homeServicesContent.map((e, idx) => (
              <OpacityInViewAnimation animationDelay={0.5}>
                <div key={idx} className="flex flex-col gap-8">
                  {isMobile ? e.iconMobile : e.iconDesktop}

                  <div className="flex flex-col gap-2">
                    <h4 className="primarynormal mb-0 text-xl md:text-lg lg:text-lg tracking-[0px] text-black">
                      {e.title}
                    </h4>
                    <p className="text-black paragraph-text ">{e.content}</p>
                  </div>
                </div>
              </OpacityInViewAnimation>
            ))}
          </div>
        </div>
        
        <div className="md:basis-2/5 hidden md:flex flex-row justify-evenly">
          {Array.from({ length: isTablet ? 2 : 3 }).map((_, index) => (
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
