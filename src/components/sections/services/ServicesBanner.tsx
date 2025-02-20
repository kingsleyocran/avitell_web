import React from "react";
import Image from "next/image";
import { ctaButton, servicesContent } from "@/utils/content";
import LinkButton from "@/components/button/LinkButton";
import { useMediaQuery } from "react-responsive";
import TextOpacityWithMoveOnYAnimation from "@/components/animation/TextOpacityWithMoveOnYAnimation";
import OpacityInViewAnimation from "@/components/animation/OpacityInViewAnimation";

type Props = {
  pageData: (typeof servicesContent)[0];
};

export default function Section({ pageData }: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1024px)",
  });

  return (
    <div className="relative h-800 md:h-700 w-full bg-[#002E52]">
      <div className="absolute h-800 md:h-700 w-full z-0">
        <div className="absolute h-800 md:h-700 w-full z-0 flex flex-row justify-evenly">
          {Array.from({ length: isTablet ? 4 : 5 }).map((_, index) => (
            <div className="h-full w-full relative ">
              <Image
                src={"/assets/vector/lines-blue.svg"}
                alt={"background"}
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute pt-[50px] z-10 h-800 md:h-700 w-full flex flex-col md:flex-row items-end md:items-center
      justify-center md:justify-between gap-12 md:gap-12"
      >
        {/* Left Image */}
        <div className="h-[400px] hidden md:flex flex-1 relative">
          <Image
            src={"/assets/vector/services_left.svg"}
            alt={"background"}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center right",
            }}
            priority
          />
        </div>

        {/* Content */}
        <div className="px-6 md:px-0 flex-none w-full md:w-[500px] md:h-full flex flex-col items-center justify-center gap-1 md:gap-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-4xl text-center">
            <TextOpacityWithMoveOnYAnimation
              positionFrom={90}
              phrases={[pageData.title]}
              animationDelay={0.5}
              extraClassNames="text-center"
            />
          </h1>

          <p className="text-white text-opacity-60 text-center">
            <TextOpacityWithMoveOnYAnimation
              positionFrom={60}
              phrases={[pageData.subText]}
              animationDelay={0.7}
              extraClassNames="text-center"
            />
          </p>

          <OpacityInViewAnimation animationDelay={1}>
            <LinkButton
              classNames="ctaButtonGlow bg-th-primary-medium  hover:bg-th-accent-medium"
              title={ctaButton.title}
              href={ctaButton.href}
            />
          </OpacityInViewAnimation>
        </div>

        {/* Right Image */}
        <div className="h-300 md:h-[400px] w-3/4 flex-none md:flex-1 relative">
          <Image
            src={"/assets/vector/services_right.svg"}
            alt={"background"}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center left",
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
