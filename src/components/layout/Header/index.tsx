import React, { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { ctaButton, navlinks } from "@/utils/content";
import Link from "next/link";

import Image from "next/image";
import { motion } from "framer-motion";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }} // Moves the navbar out of view when hidden
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white h-[55px] w-full fixed z-50"
    >
      <div
        className={`w-full relative transition-all duration-200 h-[55px]
        flex flex-row items-center justify-between max-w-[1920px] 2xl:mx-auto gap-4`}
      >
        {/* Logo */}
        <Link
          className="relative flex items-start gap-1 px-6"
          href={"/"}
          passHref
        >
          <div className="relative h-[40px] w-[100px]">
            <Image
              src={"/assets/brand/logo.png"}
              alt={"avitell_logo"}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>

        <div className="flex flex-row px-4 items-center gap-2">
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-row items-center">
            {navlinks.map((navlink, idx) => (
              <>
                {navlink.subPages ? (
                  <DesktopMenu navlink={navlink} />
                ) : (
                  <Link
                    key={idx}
                    className="flex flex-row text-th-text-primary paragraph-text-small tracking-[0px]
                  rounded-full items-center gap-2 px-4 lg:px-6 py-2 bg-white hover:bg-neutral-100 outline-none"
                    href={navlink.href}
                    passHref
                  >
                    <p className="line-clamp-1">{navlink.title}</p>
                  </Link>
                )}
              </>
            ))}

            {/* CTA Button */}
            <Link
              className="ml-2 flex-none flex flex-row items-center justify-center paragraph-text-small
              text-white bg-th-primary-medium hover:bg-th-primary-dark px-6 py-2 rounded-full
              transition-all duration-300"
              href={ctaButton.href}
              passHref
            >
              <p>{ctaButton.title}</p>
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
