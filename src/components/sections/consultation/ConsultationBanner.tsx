import React from "react";
import Image from "next/image";
import { aboutBannerContent } from "@/utils/content";

type Props = {};

export default function ConsultationBanner({}: Props) {
  return (
    <div className="bg-th-primary-dark relative">
      <div className="z-10 relative w-full flex flex-col gap-8 max-w-[1600px] xl:mx-auto pt-[80px] px-6 md:px-12 lg:px-12">
        <div className="h-400 w-full relative ">
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

      <div className=" h-400 w-full bg-gradient-to-t  absolute z-20 bottom-0 pt-[65px]">
        <div className="relative  h-400 w-full flex flex-col gap-8 max-w-[1600px] xl:mx-auto  px-6 md:px-12 lg:px-12">
          <div className="p-12 h-400 rounded-b-[10px] w-full bg-gradient-to-t from-[#3F7295] via-[#3F7295]/95 to-transparent relative">
            <div className="flex-none w-[500px] h-full flex flex-col justify-end gap-4">
              <h1 className="text-white text-3xl md:text-4xl lg:text-4xl text-start">
                {aboutBannerContent.title}
              </h1>
              <p className="text-white text-opacity-60 text-start">
                {aboutBannerContent.subText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
