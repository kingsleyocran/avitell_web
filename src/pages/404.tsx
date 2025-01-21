import CustomHead from "@/components/layout/CustomHead";
import NavigationAnimation from "@/components/animation/navigationAnimation/Stairs";
import React from "react";
import Header from "@/components/layout/Header";
import PageEmptySection from "@/components/layout/PageEmptySection";

export default function PageEmpty() {
  return (
    <>
      <CustomHead
        title="Avitell - 404"
        jsonLd={undefined}
        metaDataTag={undefined}
      />

      <NavigationAnimation>
        <Header />

        <div className="h-[100vh] flex flex-col">
          <div className="flex-1">
            <PageEmptySection />
          </div>
        </div>
      </NavigationAnimation>
    </>
  );
}
