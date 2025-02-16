import CustomHead from "@/components/layout/CustomHead";
import NavigationAnimation from "@/components/animation/navigationAnimation/Stairs";
import { useEffect } from "react";
import Lenis from "lenis";
import { NextPage } from "next";
import HomeBanner from "@/components/sections/home/HomeBanner";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HomeAboutSection from "@/components/sections/home/HomeAboutSection";
import HomePlanSection from "@/components/sections/home/HomePlanSection";
import HomeIndustriesSection from "@/components/sections/home/HomeIndustriesSection";
import CTASection from "@/components/sections/CTASection";
import InsightsUpdatesSection from "@/components/sections/InsightsUpdatesSection";
import MissionVisionSection from "@/components/sections/about/MissionVisionSection";
import TeamSection from "@/components/sections/about/TeamSection";
import CertificationsPartnersSection from "@/components/sections/about/CertificationsPartnersSection";
import AboutBanner from "@/components/sections/about/AboutBanner";
import OurProcessSection from "@/components/sections/about/OurProcessSection";

interface Props {
  pageData: any;
}

export async function getServerSideProps(context: any) {
  let returnData = null;
  return {
    props: {
      pageData: returnData,
    },
  };
}

const AboutUspage: NextPage<Props> = ({ pageData }) => {
  const metaDataTag = {
    title:
      "About Avitell Technologies | Transforming Businesses with IT Solutions",
    authors: [
      {
        name: "Avitell Technologies",
      },
    ],
    description:
      "Since 2017, Avitell Technologies empowers SMEs with cutting-edge IT solutions that drive growth, security, and operational excellence. Learn about our mission, vision, and commitment to delivering scalable, cost-effective technology solutions.",
    keywords:
      "About Avitell, IT Solutions Provider, Technology Partner, SME IT Services, IT Infrastructure, Cloud Solutions, Cybersecurity Experts, IT Consulting, Business Technology, Digital Transformation",
    openGraph: {
      title:
        "About Avitell Technologies | Transforming Businesses with IT Solutions",
      description:
        "Discover how Avitell Technologies transforms SMEs through innovative IT solutions. With expertise in network solutions, cloud services, and cybersecurity, we've been driving business growth since 2017.",
      type: "website",
      url: "https://www.avitelltechnologies.com/about-us",
      publishedTime: "2025-01-01",
      modifiedTime: new Date().toISOString().split("T")[0],
      authors: ["Avitell Technologies", "Yao Avidi"],
      tags: "IT Solutions Provider, Technology Partner, SME Services, Digital Transformation",
      images: [
        {
          url: "https://www.avitelltechnologies.com/assets/images/about-og-image.png",
          width: 1200,
          height: 630,
          alt: "About Avitell Technologies - Transforming Businesses",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@AvitellTech",
      creator: "@AvitellTech",
      title:
        "About Avitell Technologies | Transforming Businesses with IT Solutions",
      description:
        "Discover how Avitell Technologies transforms SMEs through innovative IT solutions. With expertise in network solutions, cloud services, and cybersecurity, we've been driving business growth since 2017.",
      images: [
        {
          url: "https://www.avitelltechnologies.com/assets/images/about-og-image.png",
          width: 1200,
          height: 630,
          alt: "About Avitell Technologies - Transforming Businesses",
        },
      ],
    },
    alternates: {
      canonical: "https://www.avitelltechnologies.com/about-us",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: "https://www.avitelltechnologies.com/about-us",
    name: "About Avitell Technologies",
    description:
      "Since 2017, Avitell Technologies empowers SMEs with cutting-edge IT solutions that drive growth, security, and operational excellence.",
    mainEntity: {
      "@type": "Organization",
      name: "Avitell Technologies",
      foundingDate: "2017",
      description:
        "Avitell Technologies aims to provide cutting-edge, scalable, and secure information technology solutions for the optimization of the operations and productivity of small and medium enterprises to achieve sustainable growth.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "500 N Central Expressway, Suite 500",
        addressLocality: "Plano",
        addressRegion: "Texas",
        postalCode: "75074",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "214-713-7194",
        email: "info@avitelltechnologies.com",
        contactType: "customer service",
      },
      mission: {
        "@type": "Thing",
        name: "Mission",
        description:
          "Avitell Technologies aims to provide cutting-edge, scalable, and secure information technology solutions for the optimization of the operations and productivity of small and medium enterprises to achieve sustainable growth. It specializes in cybersecurity, cloud integration, IT infrastructure, and data management.",
      },
      vision: {
        "@type": "Thing",
        name: "Vision",
        description:
          "Our vision is to become a trusted pioneer in innovatory and scalable IT solutions that enable SMEs within core sectors. Creating a new benchmark for excellence, by leading the way in the progression of security, cloud technologies, and IT modernization to help businesses succeed within a constantly changing digital world.",
      },
      process: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Plan",
            description:
              "Before project execution, it is common to have a preliminary phase of discovery and prototyping.",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Design",
            description:
              "Our strategy involves iterating to achieve early learning and ROI by conducting research and analysis.",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Implement",
            description:
              "Break down work into multiple iterations of planning, designing, and implementing.",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Manage",
            description:
              "We provide comprehensive system administration, management, and optimization services.",
          },
        ],
      },
    },
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

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
        title="Avitell | About Us"
        jsonLd={jsonLd}
        metaDataTag={metaDataTag}
      />

      <NavigationAnimation>
        <Header />

        <AboutBanner />

        <MissionVisionSection />

        <OurProcessSection />

        {/* <TeamSection /> */}

        {/* <CertificationsPartnersSection /> */}

        <CTASection />

        <InsightsUpdatesSection />

        <Footer />
      </NavigationAnimation>
    </>
  );
};

export default AboutUspage;
