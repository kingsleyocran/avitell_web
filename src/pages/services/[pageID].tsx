import CustomHead from "@/components/layout/CustomHead";
import NavigationAnimation from "@/components/animation/navigationAnimation/Stairs";
import { useEffect } from "react";
import Lenis from "lenis";
import { NextPage } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CTASection from "@/components/sections/CTASection";
import InsightsUpdatesSection from "@/components/sections/InsightsUpdatesSection";
import { servicesContent } from "@/utils/content";
import ServicesBanner from "@/components/sections/services/ServicesBanner";
import ServicesContentSection from "@/components/sections/services/ServicesContentSection";
import { generateServiceSEO } from "@/utils/seoContent";

interface Props {
  pageData: (typeof servicesContent)[0] | null;
}

export async function getServerSideProps(context: any) {
  const { pageID } = context.query;
  let returnData = null;
  returnData = servicesContent.filter((e) => `/${pageID}` === e.id)[0];
  return {
    props: {
      pageData: returnData ?? null,
    },
  };
}

const Homepage: NextPage<Props> = ({ pageData }) => {
  const pageID = pageData?.id?.replace("/", "") || "";
  const seoData = generateServiceSEO(pageID);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <>
      <CustomHead
        title={`Avitell | ${pageData?.title}`}
        jsonLd={seoData.jsonLd}
        metaDataTag={seoData.metaDataTag}
      />

      <NavigationAnimation>
        <Header />

        {pageData && <ServicesBanner pageData={pageData} />}

        {pageData && <ServicesContentSection pageData={pageData} />}

        <CTASection />

        <InsightsUpdatesSection />

        <Footer />
      </NavigationAnimation>
    </>
  );
};

export default Homepage;
