import React from "react";
import Image from "next/image";
import { ctaButton, ctaSection } from "@/utils/content";
import LinkButton from "@/components/button/LinkButton";
import OpacityMoveYInViewAnimation from "../animation/OpacityMoveYInViewAnimation";
import TextOpacityInViewAnimation from "../animation/TextOpacityInViewAnimation";
import OpacityInViewAnimation from "../animation/OpacityInViewAnimation";

type Props = {};

export default function Section({}: Props) {
  return (
    <div className="relative h-600 md:h-500 lg:h-500 w-full bg-white">
      <div className="absolute h-600 md:h-500 lg:h-500 w-full z-0">
        <div className="h-500 w-full z-0 relative ">
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

      <div
        className=" relative w-full flex flex-col items-center gap-8 max-w-[1200px] xl:mx-auto py-24
      px-6 md:px-12 lg:px-12 "
      >
        <OpacityMoveYInViewAnimation
          animationDelay={0.3}
          positionFrom={50}
          triggerOnce
        >
          <div
            className="text-center text-white bg-th-accent-medium w-full max-w-[800px]
        gap-4 rounded-lg py-16 px-12 md:px-16 lg:px-24 flex flex-col items-center justify-center"
          >
            <h1 className="text-3xl">
              <TextOpacityInViewAnimation
                phrases={[ctaSection.title]}
                animationDelay={0.7}
                extraClassNames="text-center"
              />
            </h1>

            <p>
              <TextOpacityInViewAnimation
                phrases={[ctaSection.content]}
                animationDelay={0.9}
                extraClassNames="text-center"
              />
            </p>

            <OpacityInViewAnimation animationDelay={1}>
              <LinkButton
                classNames="bg-[#F8A85A] ctaButtonGlow border border-[#FFD0A2] hover:bg-th-accent-dark"
                title={ctaButton.title}
                href={ctaButton.href}
              />
            </OpacityInViewAnimation>
          </div>
        </OpacityMoveYInViewAnimation>
      </div>
    </div>
  );
}
