import React from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

function Section() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1024px)",
  });

  return (
    <div className="h-full w-full bg-th-background  relative flex flex-col transition-all duration-200">
      <div
        className="h-full relative flex flex-col justify-center
        max-w-[1920px] 2xl:mx-auto px-4 md:px-8 lg:px-24"
      >
        {/** Our Story Content */}
        <div className="flex flex-col items-center gap-4 w-full h-fullrelative">
          <h1
            style={{
              lineHeight: isMobile ? "40px" : isTablet ? "60px" : "130px",
            }}
            className="secondarynormal flex flex-col text-[50px] md:text-[80px] lg:text-[150px] uppercase text-th-accent-medium"
          >
            404
          </h1>

          <p
            className={`text-th-accent-dark md:max-w-[1200px] w-full paragraph-text text-center`}
          >
            This page does not exist
          </p>

          <Link className="" href={"/"} passHref>
            <button className="secondarynormal mt-2 py-2 px-8 bg-th-accent-medium text-white
            rounded-full text-center text-lg md:text-lg lg:text-lg uppercase cursor-pointer
            transition-all duration-200 active:scale-[97%]">
              Return to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section;
