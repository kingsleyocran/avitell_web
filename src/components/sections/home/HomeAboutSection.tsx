import RippleEffect from "@/components/animation/RippleEffect";
import TextRevealByWord from "@/components/animation/TextRevealByWord";
import { homeAboutContent } from "@/utils/content";
import Link from "next/link";
import React from "react";
import ArrowRightIcon from "../../../../public/assets/icons/menu_arrow_right.svg";

type Props = {};

function HomeAboutSection({}: Props) {
  return (
    <div className="bg-gradient-to-t from-[#FBEFE3] via-[#FEFCFA] to-white pt-48">
      <div className="h-full relative w-full flex flex-col max-w-[1200px] xl:mx-auto  px-10 md:px-12 lg:px-12 ">
        <div className="w-full flex flex-col gap-6 items-center">
          <h6 className="text-xs md:text-xs lg:text-xs uppercase tracking-[7px]">
            ABOUT US
          </h6>

          <TextRevealByWord text={homeAboutContent.title} />

          <p className="text-black paragraph-text max-w-[600px] text-center">
            {homeAboutContent.content}
          </p>

          <button type="button">
            <Link
              className={`mt-6  text-white rounded-full  flex flex-row gap-4 items-center
          justify-between text-lg md:text-sm tracking-[0px] px-8 py-4  bg-th-accent-medium
          hover:bg-th-accent-dark transition-all duration-200`}
              href={homeAboutContent.ctaHref}
              passHref
            >
              {homeAboutContent.ctaButtonTitle}
              <ArrowRightIcon
                className="fill-white"
                width="7"
                height="9"
                viewBox="0 0 5 7"
              />
            </Link>
          </button>
        </div>

        <div className="h-350 relative w-full overflow-hidden">
          <RippleEffect />
        </div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
