import React from "react";
import Image from "next/image";
import { ctaButton, homeBannerContent } from "@/utils/content";
import LinkButton from "@/components/button/LinkButton";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="relative h-700 w-full bg-white">
      <div className="absolute h-700 w-full z-0">
        <div className="h-700 w-full z-0 relative ">
          <Image
            src={"/assets/images/home-banner-background.png"}
            alt={"background"}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority
          />
        </div>
      </div>

      <div className="absolute z-10 h-700 w-[320px] md:w-[500px] flex flex-col pt-[100px] md:pt-0 md:justify-center items-start ml-8 md:ml-16 gap-4">
        <h1 className="text-black text-3xl md:text-4xl lg:text-5xl">{homeBannerContent.title}</h1>

        <p className="text-black">{homeBannerContent.subText}</p>

        <LinkButton
          classNames="ctaButtonGlow md:!gap-12 bg-th-primary-medium  hover:bg-th-primary-dark"
          title={ctaButton.title}
          href={ctaButton.href}
        />
      </div>
    </div>
  );
}
