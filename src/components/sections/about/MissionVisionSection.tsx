import TextOpacityWithMoveOnYAnimation from "@/components/animation/TextOpacityWithMoveOnYAnimation";
import { missionText, visionText } from "@/utils/content";
import React from "react";

type Props = {};

export default function Section({}: Props) {
  return (
    <div className="bg-th-accent-medium">
      <div className="relative w-full flex flex-col gap-24 max-w-[1200px] xl:mx-auto py-24 md:py-36 px-6 md:px-12 lg:px-12">
        {/* Mission */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-36">
          <h3 className="flex-none basis-1/3 text-4xl text-white font-medium max-w-[400px]">
            <TextOpacityWithMoveOnYAnimation
              positionFrom={90}
              phrases={["Our Mission"]}
              animationDelay={0.5}
            />
          </h3>
          <p className="text-white text-lg md:text-base flex-1">
            <TextOpacityWithMoveOnYAnimation
              positionFrom={60}
              phrases={[missionText]}
              animationDelay={0.7}
            />
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-36">
          <h3 className="flex-none basis-1/3 text-4xl text-white font-medium max-w-[400px]">
            <TextOpacityWithMoveOnYAnimation
              positionFrom={90}
              phrases={["Our Vision"]}
              animationDelay={0.5}
            />
          </h3>
          <p className="text-white text-lg md:text-base flex-1">
            <TextOpacityWithMoveOnYAnimation
              positionFrom={60}
              phrases={[visionText]}
              animationDelay={0.7}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
