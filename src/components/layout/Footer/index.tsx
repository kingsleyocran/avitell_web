import { navlinks } from "@/utils/content";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <nav className="flex flex-col">
      <div className="bg-[#F7FDFA] transition-all duration-200">
        <div className="w-full transition-all max-w-[1920px] 2xl:mx-auto">
          <div
            className="flex flex-col md:flex-row md:items-start gap-12 md:gap-2
          justify-between items-start h-full mx-4 py-16 md:mx-8"
          >
            {/* Logo */}
            <Link
              className=" flex gap-1 px-6 relative h-[90px] w-[260px]"
              href={"/"}
              passHref
            >
              <Image
                src={"/assets/brand/logo.png"}
                alt={"gscn_logo"}
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>

            {/* Sitemap */}
            <div className="flex flex-col gap-2">
              <p className="text-th-text-secondary text-sm md:text-xs">
                Sitemap
              </p>
              <div className=" flex flex-col items-start gap-3 md:gap-2">
                {navlinks.map((navlink, idx) => (
                  <Link
                    key={idx}
                    className="paragraph-text tracking-[0px]
                  rounded-full hover:underline"
                    href={navlink.href}
                    passHref
                  >
                    {navlink.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-2">
              <p className="text-th-text-secondary text-sm md:text-xs">
                Contact Us
              </p>

              <div className="flex flex-col gap-4">
                {/* <div className=" flex flex-col gap-3">
                  {contactDetails.map((contactData, idx) => (
                    <Link
                      key={idx}
                      href={contactData.link}
                      passHref
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className=" flex flex-row gap-2  items-center paragraph-text">
                        {contactData.iconDesktop}{" "}
                        <p className="max-w-[300px]">{contactData.value}</p>
                      </div>
                    </Link>
                  ))}
                </div> */}

                {/* <div className=" flex flex-row gap-2">
                  {socialLinks.map((socialLink, idx) => (
                    <Link
                      key={idx}
                      href={socialLink.link}
                      passHref
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="h-[42px] w-[42px] bg-[#25B7EB] rounded-xl flex flex-row justify-center items-center">
                        {socialLink.iconDesktop}
                      </div>
                    </Link>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#5FBA46] h-[60px] w-full ">
        <div className="w-full h-full flex flex-row justify-between items-center max-w-[1920px] 2xl:mx-auto  px-4 md:px-8 ">
          <p className="paragraph-text text-white">
            {currentYear} Global Climate Storyteller Network. All Rights
            reserved
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
