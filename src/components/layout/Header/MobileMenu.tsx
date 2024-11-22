import ArrowRightIcon from "../../../../public/assets/icons/menu_arrow_right.svg";
import MenuIcon from "../../../../public/assets/icons/menu.svg";
import CloseIcon from "../../../../public/assets/icons/close.svg";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { navlinks } from "@/utils/content";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [servicesIsOpen, setServicesIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
    setServicesIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        type="button"
        className="md:hidden text-black text-base md:text-sm lg:text-base tracking-[0px]
                  px-4 py-2 
                  rounded-full"
      >
        <MenuIcon width="26" height="20" viewBox="0 0 26 20" fill="#2866A3" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[99]" onClose={closeModal}>
          <Transition
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed h-[100vh] inset-0 bg-black/50" />
          </Transition>

          <div
            className="fixed inset-0 overflow-y-auto "
            data-lenis-prevent="true"
          >
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md max-h-[500px] transform overflow-y-auto rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="grid grid-col-1 transition-all duration-200">
                    {/* Title */}
                    <div
                      className="flex flex-row items-center justify-end  text-xl md:text-base lg:text-base tracking-[0px]
                    pl-8 pr-5 py-4 font-bold"
                    >
                      <button
                        onClick={() => {
                          closeModal();
                        }}
                        type="button"
                        className="p-2.5 bg-neutral-500 rounded-full"
                      >
                        <CloseIcon
                          width="15"
                          height="15"
                          viewBox="0 0 21 21"
                          fill="white"
                        />
                      </button>
                    </div>

                    {/* For Home */}
                    <button
                      onClick={() => {
                        closeModal();
                      }}
                      type="button"
                    >
                      <Link
                        className="flex flex-row items-center justify-between text-xl md:text-base lg:text-base tracking-[0px]
                    px-8 py-8 active:scale-95 active:bg-th-menu-highlight-secondary  text-black hover:border-th-stroke-primary"
                        href={"/"}
                        passHref
                      >
                        Home
                        <ArrowRightIcon
                          width="8"
                          height="10"
                          viewBox="0 0 5 7"
                          fill="black"
                        />
                      </Link>
                    </button>

                    {/* Navigation Links */}
                    {navlinks.slice(0).map((navlink, idx) => (
                      <>
                        {navlink.subPages ? (
                          <>
                            {/** Button with Subpages */}
                            <button
                              key={idx}
                              onClick={() => {
                                setServicesIsOpen(!servicesIsOpen);
                              }}
                              className="flex flex-row items-center justify-between text-black text-xl md:text-base lg:text-base tracking-[0px]
                          transition-all duration-200 px-8 py-8 active:scale-95 active:bg-th-menu-highlight-secondary  hover:border-th-stroke-primary"
                              type="button"
                            >
                              {navlink.title}
                              <ArrowRightIcon
                                width="8"
                                height="10"
                                viewBox="0 0 5 7"
                                fill="black"
                                className={`${
                                  servicesIsOpen
                                    ? "rotate-[270deg]"
                                    : "rotate-[90deg]"
                                }`}
                              />
                            </button>

                            {/** Button with Subpages */}
                            {servicesIsOpen &&
                              navlink.subPages.slice(0).map((link, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    window.location.href = `${navlink.href}/${link.href}`;
                                    closeModal();
                                  }}
                                  type="button"
                                  className="ml-12 flex flex-row items-center justify-between text-black text-xl md:text-base lg:text-base tracking-[0px]
                                    transition-all duration-200 px-8 py-8 active:scale-95 active:bg-th-menu-highlight-secondary  hover:border-th-stroke-primary"
                                >
                                  {link.title}
                                  <ArrowRightIcon
                                    width="8"
                                    height="10"
                                    viewBox="0 0 5 7"
                                    fill="black"
                                  />
                                </button>
                              ))}
                          </>
                        ) : (
                          <button
                            key={idx}
                            onClick={() => {
                              closeModal();
                            }}
                            type="button"
                          >
                            <Link
                              className="flex flex-row items-center justify-between text-black text-xl md:text-base lg:text-base tracking-[0px]
                          transition-all duration-200 px-8 py-8 active:scale-95 active:bg-th-menu-highlight-secondary  hover:border-th-stroke-primary"
                              href={navlink.href}
                              passHref
                            >
                              {navlink.title}
                              <ArrowRightIcon
                                width="8"
                                height="10"
                                viewBox="0 0 5 7"
                                fill="black"
                              />
                            </Link>
                          </button>
                        )}
                      </>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
