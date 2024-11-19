import React from "react";
import Image from "next/image";
import { ctaButton, homeBannerContent } from "@/utils/content";
import LinkButton from "@/components/button/LinkButton";
import TriangleVector from "../../../../../public/assets/vector/home-triangle.svg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import TextOpacityWithMoveOnYAnimation from "@/components/animation/TextOpacityWithMoveOnYAnimation";
import OpacityInViewAnimation from "@/components/animation/OpacityInViewAnimation";

type Props = {};

export default function Hero({}: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1024px)",
  });
  const isDesktop= useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1280px)",
  });

  return (
    <div className=" h-700 w-full bg-white">
      <div className="absolute h-700 w-full z-0">
        <div className="h-700 w-full z-0 relative ">
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

      <div className="absolute z-30 h-700 w-full">
        <div className=" relative h-700 w-full flex flex-col max-w-[1200px] xl:mx-auto px-6 md:px-12 lg:px-12">
          <div className="h-full w-[320px] md:w-[500px] flex flex-col justify-start md:justify-center pt-[100px] md:pt-0 gap-4">
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl">
              <h1 className="header-text">
                <TextOpacityWithMoveOnYAnimation
                  positionFrom={90}
                  phrases={[homeBannerContent.title]}
                  animationDelay={0.5}
                />
              </h1>
            </h1>

            <p className="text-black">
              <TextOpacityWithMoveOnYAnimation
                positionFrom={60}
                phrases={[homeBannerContent.subText]}
                animationDelay={0.7}
              />
            </p>

            <OpacityInViewAnimation animationDelay={1}>
              <LinkButton
                classNames="ctaButtonGlow md:!gap-12 bg-th-primary-medium  hover:bg-th-primary-dark"
                title={ctaButton.title}
                href={ctaButton.href}
              />
            </OpacityInViewAnimation>
          </div>
        </div>
      </div>

      <motion.div
        className="z-10 absolute bg-gradient-to-t
        from-[#5799C4] via-[#5799C4] to-[#2866A3] ml-[37px]"
        style={{
          left: isMobile ? "170px" : isTablet ? "400px" : isDesktop ? "1007px" : "1207px",
          top: isMobile ? "500px" : isTablet ? "530px" : isDesktop ? "50px" : "50px",
          width: isMobile ? "2273px" : isTablet ? "2273px" : isDesktop ? "2273px" : "2273px",
          height: isMobile ? "200px" : isTablet ? "300px" : isDesktop ? "400px" : "400px",
        }}
        initial={{ opacity: 0 }} // Start fully transparent
        animate={{ opacity: 1 }} // End fully visible
        transition={{
          delay: 2.5, // Start animation after 3 seconds
          duration: 0.2, // Animation lasts 1 second
          ease: "easeIn", // Use ease-in for gradual entry
        }}
      />

      <motion.div
        className="z-10 absolute left-[730px] top-[45px]"
        initial={{ left: "100vw", top: "100vh" }}
        animate={{
          left: isMobile ? "100px" : isTablet ? "300px" : isDesktop ? "730px" : "930px",
          top: isMobile ? "470px" : isTablet ? "470px" : isDesktop ? "45px" : "45px",
        }}
        transition={{
          delay: 1, // Start animation after 1 second
          duration: 3, // Animation duration for ease-in-out motion
          type: "spring", // Use spring animation for bounce
          damping: 11, // Controls the "bounce" (lower = more bounce)
          stiffness: 40, // Controls the "springiness" (higher = faster motion)
        }}
      >
        <TriangleVector
          width={isMobile ? "800" : isTablet ? "1000" : isDesktop ? "2273" : "2273"}
          height={isMobile ? "600" : isTablet ? "800" : isDesktop ? "1570" : "1570"}
          viewBox="0 0 2889 1996"
        />
      </motion.div>

      <motion.div
        className="z-10 absolute left-[730px] top-[45px]"
        initial={{ left: "100vw", top: "100vh" }}
        animate={{
          left: isMobile ? "50px" : isTablet ? "250px" : isDesktop ? "570px" : "770px",
          top: isMobile ? "570px" : isTablet ? "595px" : isDesktop ? "327px" : "327px",
        }}
        transition={{
          delay: 1.3, // Start animation after 1 second
          duration: 3, // Animation duration for ease-in-out motion
          type: "spring", // Use spring animation for bounce
          damping: 11, // Controls the "bounce" (lower = more bounce)
          stiffness: 40, // Controls the "springiness" (higher = faster motion)
        }}
      >
        <TriangleVector
          className=""
          width={isMobile ? "800" : isTablet ? "1000" : isDesktop ? "2273" : "2273"}
          height={isMobile ? "600" : isTablet ? "800" : isDesktop ? "1570" : "1570"}
          viewBox="0 0 2889 1996"
        />
      </motion.div>
    </div>
  );
}
