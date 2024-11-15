import {
  ctaButton,
  footerCTASection,
  navlinks,
  termPrivacyList,
} from "@/utils/content";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <nav className="flex flex-col">
      <div className="bg-[#031223] transition-all duration-200">
        <div className="w-full flex flex-col gap-12 transition-all max-w-[1920px] 2xl:mx-auto">
          <div
            className="flex flex-col md:flex-row gap-12 md:gap-2
          justify-between items-center md:items-start h-full mx-4 pt-16 md:mx-8"
          >
            <div className="flex flex-col items-center md:items-start gap-4 ">
              {/* Logo */}
              <Link
                className=" flex gap-1 relative h-[95px] w-[260px]"
                href={"/"}
                passHref
              >
                <Image
                  src={"/assets/brand/logo-2.png"}
                  alt={"gscn_logo"}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Link>

              <div className="flex flex-row gap-3 ">
                <p className="paragraph-text font-light text-white tracking-[0px]">
                  Dallas
                </p>
                <div className=" w-[2px] bg-white/30"> </div>

                <p className="paragraph-text font-light text-white tracking-[0px]">
                  Houston
                </p>
                <div className=" w-[2px] bg-white/30"> </div>

                <p className="paragraph-text font-light text-white tracking-[0px]">
                  Austin
                </p>
              </div>
            </div>

            {/* Sitemap */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-white text-opacity-70 text-sm md:text-xs px-3">
                Sitemap
              </p>
              <div className="flex flex-col items-center md:items-start gap-3 md:gap-2">
                {navlinks.map((navlink, idx) => (
                  <Link
                    key={idx}
                    className="paragraph-text text-white tracking-[0px]
                  rounded-full hover:bg-th-primary-medium transition-all duration-200 px-3 py-1 bg-transparent"
                    href={navlink.href}
                    passHref
                  >
                    {navlink.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center md:items-start gap-2 md:max-w-[200px] lg:max-w-[300px] text-white">
              <h1 className="text-xl">{footerCTASection.title}</h1>
              <p className="text-sm text-center">{footerCTASection.content}</p>
              <Link
                className="paragraph-text mt-2 bg-[#5596C2] px-6 py-2 text-white tracking-[0px]
                  rounded-full"
                href={ctaButton.href}
                passHref
              >
                {ctaButton.title}
              </Link>
            </div>
          </div>

          <div className="bg-[#002F54] flex flex-col gap-6 md:flex-row justify-between items-center mx-4 py-6 px-6 md:mx-8">
            <p className="paragraph-text text-white">
              {currentYear} Avitell Technologies. All Rights reserved
            </p>

            <div className="flex flex-row gap-4 ">
              <Link
                className="paragraph-text text-white tracking-[0px]
                  rounded-full hover:underline"
                href={termPrivacyList[0].href}
                passHref
              >
                {termPrivacyList[0].title}
              </Link>

              <div className=" w-[2px] bg-white/30"> </div>

              <Link
                className="paragraph-text text-white tracking-[0px]
                  rounded-full hover:underline"
                href={termPrivacyList[1].href}
                passHref
              >
                {termPrivacyList[1].title}
              </Link>
            </div>
          </div>

          <div className="flex flex-row justify-center w-full  paragraph-text text-white pb-10  px-6">
            Website by OneClick Creative Agency
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
