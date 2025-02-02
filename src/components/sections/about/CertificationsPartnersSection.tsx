import React, { useState } from "react";
import ArrowUpIcon from "../../../../public/assets/icons/menu_arrow_up.svg";
import Image from "next/image";
import { partnersList } from "@/utils/content";
import TextOpacityInViewAnimation from "@/components/animation/TextOpacityInViewAnimation";
import OpacityInViewAnimation from "@/components/animation/OpacityInViewAnimation";

type Props = {};

export default function Section({}: Props) {
  return (
    <div className="bg-white">
      <div className="relative w-full flex flex-col gap-8 max-w-[1200px] xl:mx-auto py-4 md:py-24 px-6 md:px-12 lg:px-12">
        {/* Title */}
        <div className="flex flex-row">
          <h3 className="text-4xl text-black font-medium max-w-[400px]">
            <TextOpacityInViewAnimation
              phrases={["Our Partners"]}
              animationDelay={0.5}
            />
          </h3>
        </div>

        <div className="md:flex md:flex-wrap grid grid-cols-2 justify-center gap-3">
          {partnersList.map((p, idx) => (
            <div
              className={`${
                idx === partnersList.length - 1 ? "col-span-2" : ""
              }`}
            >
              <OpacityInViewAnimation animationDelay={0.5 + idx * 0.2}>
                <PartnerCard key={idx} data={p} />
              </OpacityInViewAnimation>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnerCard({ data }: { data: any }) {
  return (
    <div
      className=" w-full md:w-300 flex-none flex text-start flex-col justify-between p-4 md:p-8 h-200 
    bg-[#F7F7F7] transition-all duration-200"
    >
      <div className="flex flex-row gap-4 justify-between">
        <h3 className="text-xl text-black line-clamp-3 break-words">
          {data.title}
        </h3>

        <div
          className={`bg-neutral-300 flex-none flex flex-row justify-center items-center rounded-full
            h-[30px] w-[30px]  md:h-[40px] md:w-[40px] ransition-all duration-200`}
        >
          <ArrowUpIcon />
        </div>
      </div>

      <div className="h-[40px] md:h-[60px] w-full  relative ">
        <Image
          src={data.imgUrl}
          alt={data.title}
          fill
          style={{
            objectFit: "contain",
            objectPosition: "left center",
          }}
          priority
        />
      </div>
    </div>
  );
}
