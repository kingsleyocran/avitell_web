import RippleEffect from "@/components/animation/RippleEffect";
import TextRevealByWord from "@/components/animation/TextRevealByWord";
import { homeAboutContent } from "@/utils/content";
import React from "react";
import LinkButton from "@/components/button/LinkButton";
import { useMediaQuery } from "react-responsive";
import TextOpacityWithMoveOnYAnimation from "@/components/animation/TextOpacityWithMoveOnYAnimation";
import OpacityMoveYInViewAnimation from "@/components/animation/OpacityMoveYInViewAnimation";

type Props = {};

function HomeAboutSection({}: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1024px)",
  });

  return (
    <div className="bg-gradient-to-t from-[#FBEFE3] via-[#FEFCFA] to-white md:pt-48">
      <div className="h-full relative w-full flex flex-col max-w-[1200px] xl:mx-auto   ">
        <div className="w-full flex flex-col gap-6 items-center px-10 md:px-12 lg:px-12">
          <h6 className="text-xs md:text-xs lg:text-xs uppercase tracking-[7px]">
            ABOUT US
          </h6>

          <TextRevealByWord text={homeAboutContent.title} />

          <p className="text-black paragraph-text max-w-[600px] text-center">
            <TextOpacityWithMoveOnYAnimation
              positionFrom={50}
              phrases={[homeAboutContent.content]}
              animationDelay={0.5}
              extraClassNames="text-center"
            />
          </p>

          <OpacityMoveYInViewAnimation positionFrom={50} animationDelay={0.6}>
            <LinkButton
              title={homeAboutContent.ctaButtonTitle}
              href={homeAboutContent.ctaHref}
            />
          </OpacityMoveYInViewAnimation>
        </div>

        <div className="h-[230px] md:h-300 lg:h-350 relative w-full overflow-hidden">
          <RippleEffect mainCircleSize={isMobile ? 20 : 210} />
        </div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
