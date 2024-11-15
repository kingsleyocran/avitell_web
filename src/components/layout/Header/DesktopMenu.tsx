import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import ArrowDownIcon from "../../../../public/assets/icons/menu_arrow_down.svg";
import ArrowRightIcon from "../../../../public/assets/icons/menu_arrow_right.svg";
import Link from "next/link";

export default function DesktopMenu({ navlink }: { navlink: any }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsPopoverOpen(false);
    }, 200);
  };

  return (
    <div
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${!isPopoverOpen ? "bg-white" : "bg-neutral-100"}
                flex flex-row text-th-text-primary paragraph-text-small tracking-[0px]
                  rounded-full items-center gap-2 px-6 py-2 ring-transparent border-0 outline-none`}
            >
              <p className="line-clamp-1">{navlink.title}</p>
              <ArrowDownIcon
                width="8"
                height="6"
                viewBox="0 0 7 5"
                fill="black"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              show={isPopoverOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="custom-shadow-md rounded-lg overflow-hidden w-450 bg-white grid grid-cols-2">
                  {navlink.subPages.map(
                    (link: { href: string; title: string }, idx: number) => {
                      const isOddCount = navlink.subPages.length % 2 !== 0;
                      const isLastElement = idx === navlink.subPages.length - 1;

                      return (
                        <DesktopMenuLinkButton
                          isOdd={isOddCount && isLastElement}
                          idx={idx}
                          link={link}
                        />
                      );
                    }
                  )}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function DesktopMenuLinkButton({
  idx,
  link,
  isOdd,
}: {
  idx: React.Key;
  link: any;
  isOdd: boolean;
}) {

  return (
    <button
      key={idx}
      type="button"
      className={`${isOdd ? "col-span-2" : ""}`}
    >
      <Link
        className={`transition-all duration-200 text-black hover:text-white fill-black hover:fill-white  flex flex-row items-center
          justify-between text-lg md:text-sm tracking-[0px] px-4 py-4 hover:bg-th-primary-medium`}
        href={link.href}
        passHref
      >
        {link.title}
        <ArrowRightIcon width="5" height="7" viewBox="0 0 5 7" />
      </Link>
    </button>
  );
}
