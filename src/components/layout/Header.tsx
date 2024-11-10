import React, { Fragment, useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { navlinks } from "@/utils/content";
import Link from "next/link";
import ArrowRightOutwardIcon from "../../../public/assets/icons/arrow_right_outward.svg";
import MenuIcon from "../../../public/assets/icons/menu.svg";
import CloseIcon from "../../../public/assets/icons/close.svg";
import Image from "next/image";
import { motion } from "framer-motion";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
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
      className="bg-th-background h-[55px] w-full fixed z-50"
    >
      <div
        className={`w-full relative transition-all duration-200 h-[55px]
        flex flex-row items-center justify-between max-w-[1920px] 2xl:mx-auto gap-16`}
      >
        {/* Logo */}
        <Link
          className="relative flex items-center gap-1 px-6"
          href={"/"}
          passHref
        >
          <div className="relative h-[45px] w-[130px]">
            <Image
              src={"/assets/brand/logo.png"}
              alt={"gscn_logo"}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>

        <div className="flex flex-row px-4 items-center gap-2">
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-row gap-2 items-center">
            {navlinks.map((navlink, idx) => (
              <Link
                key={idx}
                className="text-th-text-primary paragraph-text-small tracking-[0px]
                  px-4 py-1 rounded-full"
                href={navlink.href}
                passHref
              >
                {navlink.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <MobileNav />
        </div>
      </div>
    </motion.nav>
  );
}

function MobileNav() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        type="button"
        className="md:hidden text-th-text-primary text-base md:text-sm lg:text-base tracking-[0px]
                  px-4 py-2 
                  rounded-full"
      >
        <MenuIcon width="30" height="18" viewBox="0 0 36 24" fill="black" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[99]" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed h-[100vh] inset-0 bg-black/50" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-th-background-surface text-left align-middle shadow-xl transition-all">
                  <div className="grid grid-col-1">
                    <div
                      className="flex flex-row items-center justify-end text-th-text-primary text-xl md:text-base lg:text-base tracking-[0px]
                    pl-8 pr-5 py-4  font-bold"
                    >

                      <button
                        onClick={() => {
                          closeModal();
                        }}
                        type="button"
                        className="p-3 bg-neutral-600 rounded-full"
                      >
                        <CloseIcon
                          width="12"
                          height="12"
                          viewBox="0 0 27.1 27.1"
                          fill="white"
                        />
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        closeModal();
                      }}
                      type="button"
                    >
                      <Link
                        className="flex flex-row items-center justify-between text-th-text-primary text-xl md:text-base lg:text-base tracking-[0px]
                    px-8 py-8 active:scale-95 active:bg-th-menu-highlight-secondary  hover:border-th-stroke-primary"
                        href={"/"}
                        passHref
                      >
                        Home
                        <ArrowRightOutwardIcon
                          width="12"
                          height="12"
                          viewBox="0 0 23 23"
                          fill="black"
                        />
                      </Link>
                    </button>
                    <div className="border-t-[0.5px] border-th-stroke-secondary"></div>

                    <button
                      onClick={() => {
                        closeModal();
                      }}
                      type="button"
                    >
                      <Link
                        className="flex flex-row items-center justify-between text-th-text-primary text-xl md:text-base lg:text-base tracking-[0px]
                    px-8 py-8 active:scale-95 active:bg-th-menu-highlight-secondary  hover:border-th-stroke-primary"
                        href={navlinks[0].href}
                        passHref
                      >
                        {navlinks[0].title}

                        <ArrowRightOutwardIcon
                          width="12"
                          height="12"
                          viewBox="0 0 23 23"
                          fill="black"
                        />
                      </Link>
                    </button>
                    <div className="border-t-[0.5px] border-th-stroke-secondary"></div>

                    <button
                      onClick={() => {
                        closeModal();
                      }}
                      type="button"
                    >
                      <Link
                        className="flex flex-row items-center justify-between text-th-text-primary text-xl md:text-base lg:text-base tracking-[0px]
                    px-8 py-8 active:scale-95 active:bg-th-menu-highlight-secondary  hover:border-th-stroke-primary"
                        href={navlinks[1].href}
                        passHref
                      >
                        {navlinks[1].title}

                        <ArrowRightOutwardIcon
                          width="12"
                          height="12"
                          viewBox="0 0 23 23"
                          fill="black"
                        />
                      </Link>
                    </button>

                    <div className="border-t-[0.5px] border-th-stroke-secondary"></div>

                    <button
                      onClick={() => {
                        closeModal();
                      }}
                      type="button"
                    >
                      <Link
                        className="flex flex-row items-center justify-between text-th-text-primary text-xl md:text-base lg:text-base tracking-[0px]
                    px-8 py-8 active:scale-95 active:bg-th-menu-highlight-secondary  hover:border-th-stroke-primary"
                        href={navlinks[2].href}
                        passHref
                      >
                        {navlinks[2].title}

                        <ArrowRightOutwardIcon
                          width="12"
                          height="12"
                          viewBox="0 0 23 23"
                          fill="black"
                        />
                      </Link>
                    </button>
                    <div className="border-t-[0.5px] border-th-stroke-secondary"></div>

                    <button
                      onClick={() => {
                        closeModal();
                      }}
                      type="button"
                    >
                      <Link
                        className="flex flex-row items-center justify-between text-th-text-primary text-xl md:text-base lg:text-base tracking-[0px]
                    px-8 py-8 active:scale-95 active:bg-th-menu-highlight-secondary  hover:border-th-stroke-primary"
                        href={navlinks[3].href}
                        passHref
                      >
                        {navlinks[3].title}

                        <ArrowRightOutwardIcon
                          width="12"
                          height="12"
                          viewBox="0 0 23 23"
                          fill="black"
                        />
                      </Link>
                    </button>

                    <button
                      onClick={() => {
                        closeModal();
                      }}
                      type="button"
                    >
                      <Link
                        className="flex flex-row items-center justify-between text-th-text-primary text-xl md:text-base lg:text-base tracking-[0px]
                    px-8 py-8 active:scale-95 active:bg-th-menu-highlight-secondary  hover:border-th-stroke-primary"
                        href={navlinks[4].href}
                        passHref
                      >
                        {navlinks[4].title}

                        <ArrowRightOutwardIcon
                          width="12"
                          height="12"
                          viewBox="0 0 23 23"
                          fill="black"
                        />
                      </Link>
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default NavBar;
