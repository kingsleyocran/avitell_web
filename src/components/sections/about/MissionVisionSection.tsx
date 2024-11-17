import { missionText, visionText } from "@/utils/content";
import React from "react";

type Props = {};

export default function Section({}: Props) {
  return (
    <div className="bg-th-accent-medium">
      <div className="relative w-full flex flex-col gap-24 max-w-[1200px] xl:mx-auto py-24 md:py-36 px-3 md:px-12 lg:px-12">
        {/* Mission */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-36">
          <h3 className="flex-none basis-1/3 text-4xl text-white font-medium max-w-[400px]">
            Our Mission
          </h3>
          <p className="text-white text-lg md:text-base flex-1">{missionText}</p>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-36">
          <h3 className="flex-none basis-1/3  text-4xl text-white font-medium max-w-[400px]">
            Our Vision
          </h3>
          <p className="text-white text-lg md:text-base flex-1">{visionText}</p>
        </div>
      </div>
    </div>
  );
}
