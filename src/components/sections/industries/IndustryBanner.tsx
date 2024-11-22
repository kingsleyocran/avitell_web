import React from "react";
import Image from "next/image";
import { contactBannerContent, industriesBannerContent } from "@/utils/content";

type Props = {};

export default function Section({}: Props) {
  return (
    <div className="bg-white relative">
      <div className="z-10 relative w-full flex flex-col gap-8 max-w-[1600px] xl:mx-auto pt-[60px] px-6 md:px-12 lg:px-12">
        <div className="h-450 w-full relative ">
          <Image
            src={"/assets/images/about-banner.png"}
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
          from-black via-black/50 to-transparent relative"
          >
            <div className="flex-none md:w-[500px] h-full flex flex-col justify-end gap-4">
              <h1 className="text-white text-3xl md:text-4xl lg:text-4xl text-start">
                {industriesBannerContent.title}
              </h1>
              <p className="text-white text-opacity-60 text-start">
                {industriesBannerContent.subText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
