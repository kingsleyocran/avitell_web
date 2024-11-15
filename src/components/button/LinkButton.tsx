import React from "react";
import Link from "next/link";
import ArrowRightIcon from "../../../public/assets/icons/menu_arrow_right.svg";

type Props = { classNames?: string; title: string; href: string };

export default function LinkButton({
  title,
  classNames = "bg-th-accent-medium hover:bg-th-accent-dark",
  href,
}: Props) {
  return (
    <button type="button">
      <Link
        className={`${classNames} mt-6 text-white rounded-full  flex flex-row gap-4 items-center
          justify-between text-lg md:text-sm tracking-[0px] px-8 py-4   transition-all duration-200`}
        href={href}
        passHref
      >
        {title}
        <ArrowRightIcon
          className="fill-white"
          width="7"
          height="9"
          viewBox="0 0 5 7"
        />
      </Link>
    </button>
  );
}
