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
import CertificationsPartnersSection from "@/components/sections/about/CertificationsPartnersSection";

interface Props {
  networkMemberData: any;
}

export async function getServerSideProps(context: any) {
  let returnData = null;
  return {
    props: {
      networkMemberData: returnData,
    },
  };
}

const Homepage: NextPage<Props> = ({ networkMemberData }) => {
  const metaDataTag = {
    title: "Avitell Technologies | Empowering Your Business Through Technology",
    authors: [
      {
        name: "Avitell Technologies",
      },
    ],
    description:
      "Since 2017, Avitell Technologies has been delivering tailored IT solutions for SMEs, specializing in network solutions, cloud services, cybersecurity, and IT infrastructure modernization. Transform your business with our reliable, cost-effective technology solutions.",
    keywords:
      "IT Solutions, Enterprise Network Solutions, Cloud Services, Cybersecurity, Windows Services, Unified Communications, IT Infrastructure, SME Technology, Managed IT Services, IT Consulting",
    openGraph: {
      title:
        "Avitell Technologies | Empowering Your Business Through Technology",
      description:
        "Transform your business with Avitell Technologies' comprehensive IT solutions. Specializing in network solutions, cloud services, cybersecurity, and IT infrastructure for SMEs since 2017.",
      type: "website",
      url: "https://www.avitelltechnologies.com/",
      publishedTime: "2025-01-01",
      modifiedTime: new Date().toISOString().split("T")[0],
      authors: ["Avitell Technologies", "Yao Avidi"],
      tags: "IT Solutions, Cloud Services, Cybersecurity, Network Solutions, IT Infrastructure",
      images: [
        {
          url: "https://www.avitelltechnologies.com/assets/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Avitell Technologies - IT Solutions",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@AvitellTech",
      creator: "@AvitellTech",
      title:
        "Avitell Technologies | Empowering Your Business Through Technology",
      description:
        "Transform your business with Avitell Technologies' comprehensive IT solutions. Specializing in network solutions, cloud services, cybersecurity, and IT infrastructure for SMEs since 2017.",
      images: [
        {
          url: "https://www.avitelltechnologies.com/assets/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Avitell Technologies - IT Solutions",
        },
      ],
    },
    alternates: {
      canonical: "https://www.avitelltechnologies.com/",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.avitelltechnologies.com/",
    name: "Avitell Technologies",
    description:
      "Since 2017, Avitell Technologies has been a trusted partner for small and medium-sized enterprises (SMEs), delivering tailored IT solutions that drive growth, innovation, and security.",
    foundingDate: "2017",
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
    sameAs: [
      "https://www.linkedin.com/company/avitell-technologies",
      // Add other social media links here
    ],
    services: [
      {
        "@type": "Service",
        name: "Enterprise Network Solutions",
        description:
          "With the prevalence of extensive communication channels, companies cannot rely on a haphazard approach to network planning and management.",
      },
      {
        "@type": "Service",
        name: "Windows Services",
        description:
          "Industry-leading IT consulting services helping achieve competitive edge through highly effective strategies and innovative solutions.",
      },
      {
        "@type": "Service",
        name: "Cloud & Hybrid Services",
        description:
          "Expert DevOps and Cloud Engineering team ensuring full leverage of Azure throughout your entire Cloud experience.",
      },
      {
        "@type": "Service",
        name: "Unified Communications",
        description:
          "IaaS solutions providing quick access to required infrastructure without extensive time and resource investment.",
      },
      {
        "@type": "Service",
        name: "Advanced Security",
        description:
          "Tailored managed services eliminating expenses and difficulties associated with managing intricate hybrid Cloud setups.",
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.avitelltechnologies.com/",
    },
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
      <CustomHead title="Avitell | Empowering Your Business Through Technology" jsonLd={jsonLd} metaDataTag={metaDataTag} />

      <NavigationAnimation>
        <Header />

        <HomeBanner />

        <HomeAboutSection />

        <HomePlanSection />

        <HomeIndustriesSection />

        <CertificationsPartnersSection />

        <CTASection />

        <InsightsUpdatesSection />

        <Footer />
      </NavigationAnimation>
    </>
  );
};

export default Homepage;
