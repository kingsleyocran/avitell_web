import { homePlanContent } from "@/utils/content";
import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

type Props = {};

function HomePlanSection({}: Props) {
  return (
    <div className="bg-th-primary-dark">
      <div className="h-[900px] relative w-full flex flex-col gap-12 max-w-[1200px] xl:mx-auto py-24  px-10 md:px-12 lg:px-12 ">
        {/* Title */}
        <div className="flex flex-row">
          <h3 className="text-4xl font-medium text-white max-w-[400px]">
            {homePlanContent.title}
          </h3>
        </div>

        {/* Cards */}
        <div className="flex flex-row gap-12">
          {homePlanContent.contentList.map((data, index) => (
            <HomePlanCard key={index} e={data} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HomePlanCard({
  e,
  index,
}: {
  e: (typeof homePlanContent.contentList)[0];
  index: number;
}) {
  const [onHoverComponent, setOnHoverComponent] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"], // Triggers the scroll animations at different points
  });

  // Define the Y translation for each card based on its index for staggered effect
  const translateY = useTransform(scrollYProgress, [0, 1], [index * 150, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: translateY }}
      className="h-[420px] flex-1 relative"
    >
      <div
        onMouseEnter={() => setOnHoverComponent(true)}
        onMouseLeave={() => setOnHoverComponent(false)}
        className="h-[420px] flex-1 relative"
      >
        <div className="h-full w-full absolute">
          <div className="h-full w-full relative">
            <Image
              src={e.imgUrl}
              alt={e.title}
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
          className={`${
            onHoverComponent
              ? "bg-gradient-to-t from-[#3F7295] via-[#3F7295] to-[#3F7295]/90"
              : "bg-gradient-to-t from-[#3F7295] via-[#3F7295]/70 to-transparent"
          } w-full h-auto  absolute bottom-0 p-8 flex flex-col gap-4 flex-1 transition-all duration-300`}
        >
          <h6 className="text-lg font-medium text-white max-w-[400px]">
            {e.title}
          </h6>

          <AnimatePresence>
            {onHoverComponent && (
              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  transition: { duration: 0.2 },
                }}
                exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                className="overflow-hidden"
              >
                <p className="text-sm text-opacity-70 text-white max-w-[400px]">
                  {e.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePlanSection;
