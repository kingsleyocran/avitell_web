import React from "react";
import Image from "next/image";
import { ctaButton, homeBannerContent, servicesContent } from "@/utils/content";
import LinkButton from "@/components/button/LinkButton";
import { useMediaQuery } from "react-responsive";

type Props = {
  pageData: (typeof servicesContent)[0];
};

export default function Section({ pageData }: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1024px)",
  });

  return (
    <div className="relative h-700 w-full bg-[#002E52]">
      <div className="absolute h-700 w-full z-0">
        <div className="absolute h-700 w-full z-0 flex flex-row justify-evenly">
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

      <div className="absolute pt-[50px] z-10 h-700 w-full flex flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <div className="h-[400px] flex-1 relative">
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
        <div className="flex-none w-[500px] h-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-4xl text-center">
            {pageData.title}
          </h1>

          <p className="text-white text-opacity-60 text-center">{pageData.subText}</p>

          <LinkButton
            classNames="ctaButtonGlow bg-th-primary-medium  hover:bg-th-accent-medium"
            title={ctaButton.title}
            href={ctaButton.href}
          />
        </div>

        {/* Right Image */}
        <div className="h-[400px] flex-1 relative">
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
