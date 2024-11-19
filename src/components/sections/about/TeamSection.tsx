import React from "react";
import Image from "next/image";
import { teamList } from "@/utils/content";
import TextOpacityInViewAnimation from "@/components/animation/TextOpacityInViewAnimation";
import OpacityMoveYInViewAnimation from "@/components/animation/OpacityMoveYInViewAnimation";

type Props = {};

export default function Section({}: Props) {
  return (
    <div className="bg-white">
      <div className="relative w-full flex flex-col gap-8 max-w-[1200px] xl:mx-auto py-24 md:py-36 px-3 md:px-12 lg:px-12">
        {/* Title */}
        <div className="flex flex-row">
          <h3 className="text-4xl text-black font-medium max-w-[400px]">
            <TextOpacityInViewAnimation
              phrases={["Meet The Team"]}
              animationDelay={0.5}
            />
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-3">
          {teamList.map((t, idx) => (
            <OpacityMoveYInViewAnimation
              animationDelay={0.3 + idx * 0.2}
              positionFrom={90}
            >
              <TeamCard key={idx} data={t} />
            </OpacityMoveYInViewAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamCard({ data }: { data: any }) {
  return (
    <div
      className="w-full flex-none flex text-start flex-col justify-between  h-400 
    bg-[#F7F7F7] transition-all duration-200"
    >
      <div className="flex-1 w-full  relative ">
        <Image
          src={data.imgUrl}
          alt={data.title}
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </div>

      <div className="p-8 flex flex-col gap-2 justify-between bg-[#3F7295]">
        <h3 className="text-xl text-white line-clamp-3">{data.title}</h3>
        <p className="text-base text-opacity-60 text-white line-clamp-3">
          {data.portfolio}
        </p>
      </div>
    </div>
  );
}
