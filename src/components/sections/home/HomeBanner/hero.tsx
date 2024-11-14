import React from "react";
import Image from "next/image";
import { ctaButton, homeBannerContent } from "@/utils/content";
import Link from "next/link";
import ArrowRightIcon from "../../../../../public/assets/icons/menu_arrow_right.svg";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="relative h-700 w-full">
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

      <div className="absolute z-10 h-700 w-[500px] flex flex-col justify-center items-start ml-16 gap-4">
        <h1 className="text-black text-5xl">{homeBannerContent.title}</h1>

        <p>{homeBannerContent.subText}</p>

        <button type="button">
          <Link
            className={` text-white rounded-full  flex flex-row gap-12 items-center
          justify-between text-lg md:text-sm tracking-[0px] px-8 py-4  bg-th-primary-medium
          hover:bg-th-primary-dark transition-all duration-200`}
            href={ctaButton.href}
            passHref
          >
            {ctaButton.title}
            <ArrowRightIcon
              className="fill-white"
              width="7"
              height="9"
              viewBox="0 0 5 7"
            />
          </Link>
        </button>
      </div>
    </div>
  );
}
