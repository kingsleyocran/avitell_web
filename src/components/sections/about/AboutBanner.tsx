import React from "react";
import Image from "next/image";
import LinkButton from "@/components/button/LinkButton";
import { aboutBannerContent } from "@/utils/content";

type Props = {};

export default function AboutBanner({}: Props) {
  return (
    <div className="bg-white relative">
      <div className="z-10 relative w-full flex flex-col gap-8 max-w-[1600px] xl:mx-auto pt-[65px] px-6 md:px-12 lg:px-12">
        <div className="h-600 w-full relative ">
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

      <div className=" h-400 w-full bg-gradient-to-t from-[#E7912C] via-[#E7912C]/95 to-transparent absolute z-20 bottom-0">
        <div className="flex flex-col gap-8 max-w-[1200px] xl:mx-auto pt-[70px] px-6 md:px-12 lg:px-12">
          <div className="flex-none w-[500px] h-full flex flex-col gap-4">
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
  );
}
