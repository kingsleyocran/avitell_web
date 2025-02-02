import React from "react";
import Image from "next/image";
import { industriesBannerContent } from "@/utils/content";

type Props = {};

export default function Section({}: Props) {
  return (
    <div className="bg-white relative">
      <div className="z-10 relative w-full flex flex-col gap-8 max-w-[1600px] xl:mx-auto pt-[60px] px-6 md:px-12 lg:px-12">
        <div className="h-550 w-full relative ">
          <Image
            src={"/assets/images/industries-banner.jpeg"}
            alt={"about-banner-image"}
            fill
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
            priority
          />
        </div>
      </div>

      <div className="absolute z-20 h-[450px] w-full bottom-0 pt-36">
        <div className="relative h-full w-full flex flex-col gap-8 max-w-[1600px] xl:mx-auto px-6 md:px-12 lg:px-12">
          <div
            className="p-6 md:p-12 h-full rounded-b-[10px] w-full bg-gradient-to-t 
          from-[#5596C2] via-[#5596C2]/90 to-transparent relative"
          >
            <div className="flex-none md:max-w-[900px] h-full flex flex-col justify-end gap-4">
              <h1 className="text-white text-3xl md:text-4xl lg:text-4xl text-start">
                {industriesBannerContent.title}
              </h1>
              <p className="text-white text-opacity-80 text-start">
                {industriesBannerContent.subText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
