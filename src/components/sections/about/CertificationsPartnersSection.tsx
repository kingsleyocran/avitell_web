import React, { useState } from "react";
import ArrowUpIcon from "../../../../public/assets/icons/menu_arrow_up.svg";
import Image from "next/image";
import { partnersList } from "@/utils/content";

type Props = {};

export default function Section({}: Props) {
  return (
    <div className="bg-white">
      <div className="relative w-full flex flex-col gap-8 max-w-[1200px] xl:mx-auto py-24 px-3 md:px-12 lg:px-12">
        {/* Title */}
        <div className="flex flex-row">
          <h3 className="text-4xl text-black font-medium max-w-[400px]">
            Our Partners
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {partnersList.map((p, idx) => (
            <PartnerCard key={idx} data={p}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnerCard({ data }: { data: any }) {
  return (
    <div
      className="w-300 flex-none flex text-start flex-col justify-between p-8 h-200 
    bg-[#F7F7F7] transition-all duration-200"
    >
      <div className="flex flex-row gap-4 justify-between">
        <h3 className="text-xl text-black line-clamp-3">{data.title}</h3>

        <div
          className={`bg-neutral-300 flex-none flex flex-row justify-center items-center rounded-full
            h-[40px] w-[40px] ransition-all duration-200`}
        >
          <ArrowUpIcon />
        </div>
      </div>

      <div className="h-[60px] w-full  relative ">
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
