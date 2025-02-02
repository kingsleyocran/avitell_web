import React from "react";
import Image from "next/image";
import { aboutBannerContent } from "@/utils/content";
import TextOpacityWithMoveOnYAnimation from "@/components/animation/TextOpacityWithMoveOnYAnimation";

type Props = {};

export default function AboutBanner({}: Props) {
  return (
    <div className="bg-white relative">
      <div className="z-10 relative w-full flex flex-col gap-8 max-w-[1600px] xl:mx-auto pt-[65px] px-4 md:px-12 lg:px-12">
        <div className="h-600 w-full relative ">
          <Image
            src={"/assets/images/about-banner.jpeg"}
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
        <div className="flex flex-col justify-end h-full gap-8 max-w-[1200px] xl:mx-auto px-12 md:px-24 lg:px-24">
          <div className="flex-none w-full md:max-w-[750px] h-full flex flex-col gap-4 justify-end pb-12">
            <h1 className="text-white text-3xl md:text-4xl lg:text-4xl text-start">
              <TextOpacityWithMoveOnYAnimation
                positionFrom={90}
                phrases={[aboutBannerContent.title]}
                animationDelay={0.5}
              />
            </h1>
            <p className="text-white text-opacity-60 text-start">
              <TextOpacityWithMoveOnYAnimation
                positionFrom={60}
                phrases={[aboutBannerContent.subText]}
                animationDelay={0.7}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
