import CustomHead from "@/components/layout/CustomHead";
import NavigationAnimation from "@/components/animation/navigationAnimation/Stairs";
import { useEffect } from "react";
import Lenis from "lenis";
import { NextPage } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import IndustryBanner from "@/components/sections/industries/IndustryBanner";
import IndustrySection from "@/components/sections/industries/IndustrySection";

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

const IndustriesPage: NextPage<Props> = ({ pageData }) => {
  const metaDataTag = {
    title: "Industry Solutions | Avitell Technologies",
    authors: [
      {
        name: "Avitell Technologies",
      },
    ],
    description:
      "Avitell Technologies provides specialized IT solutions for Healthcare, Finance, Education, Retail, and Manufacturing industries. From secure healthcare systems to scalable retail solutions, we deliver industry-specific technology services that drive growth and innovation.",
    keywords:
      "Healthcare IT Solutions, Financial Technology Services, Education Technology, Retail IT Systems, Manufacturing Technology, Industry-Specific IT, Digital Transformation, Cybersecurity Solutions, Cloud Services, Enterprise IT",
    openGraph: {
      title: "Industry Solutions | Avitell Technologies",
      description:
        "Transform your industry with Avitell's specialized IT solutions. Expert technology services for Healthcare, Finance, Education, Retail, and Manufacturing sectors, delivering security, scalability, and innovation.",
      type: "website",
      url: "https://www.avitelltechnologies.com/industries",
      publishedTime: "2025-01-01",
      modifiedTime: new Date().toISOString().split("T")[0],
      authors: ["Avitell Technologies", "Yao Avidi"],
      tags: "Healthcare IT, Financial Technology, EdTech, Retail Solutions, Manufacturing IT",
      images: [
        {
          url: "https://www.avitelltechnologies.com/assets/images/industries-og-image.png",
          width: 1200,
          height: 630,
          alt: "Avitell Technologies Industry Solutions",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@AvitellTech",
      creator: "@AvitellTech",
      title: "Industry Solutions | Avitell Technologies",
      description:
        "Transform your industry with Avitell's specialized IT solutions. Expert technology services for Healthcare, Finance, Education, Retail, and Manufacturing sectors, delivering security, scalability, and innovation.",
      images: [
        {
          url: "https://www.avitelltechnologies.com/assets/images/industries-og-image.png",
          width: 1200,
          height: 630,
          alt: "Avitell Technologies Industry Solutions",
        },
      ],
    },
    alternates: {
      canonical: "https://www.avitelltechnologies.com/industries",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://www.avitelltechnologies.com/industries",
    name: "Industry Solutions | Avitell Technologies",
    description:
      "Specialized IT Solutions That Make a Difference across Healthcare, Finance, Education, Retail, and Manufacturing sectors.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "Service",
          position: 1,
          name: "Healthcare IT Solutions",
          description:
            "Transforming Healthcare with Secure, Scalable IT Solutions. From scalable infrastructures and 24/7 operational support to seamless cloud transitions, Avitell empowers healthcare providers to enhance collaboration, streamline workflows, and enable faster decision-making.",
          image:
            "https://www.avitelltechnologies.com/assets/images/industries/healthcare.jpeg",
        },
        {
          "@type": "Service",
          position: 2,
          name: "Financial Technology Solutions",
          description:
            "Powering Financial Growth with Secure, Scalable IT Solutions. From scalable infrastructures and real-time data access to advanced cybersecurity, Avitell empowers financial organizations to optimize operations, enhance client experiences, and drive growth.",
          image:
            "https://www.avitelltechnologies.com/assets/images/industries/finance.jpeg",
        },
        {
          "@type": "Service",
          position: 3,
          name: "Education Technology Solutions",
          description:
            "Empowering Education with Scalable IT & Secure Digital Learning Solutions. By providing scalable infrastructures, seamless connectivity, and secure cloud-based learning platforms, Avitell empowers educational institutions.",
          image:
            "https://www.avitelltechnologies.com/assets/images/industries/education.jpeg",
        },
        {
          "@type": "Service",
          position: 4,
          name: "Retail IT Solutions",
          description:
            "Driving Retail Innovation with Scalable IT & Cybersecurity Solutions. From omnichannel networks and cloud-based inventory management to data-driven decision-making, Avitell empowers retailers to boost efficiency.",
          image:
            "https://www.avitelltechnologies.com/assets/images/industries/retail.jpeg",
        },
        {
          "@type": "Service",
          position: 5,
          name: "Manufacturing Technology Solutions",
          description:
            "Powering Smart Manufacturing with Scalable IT & Cybersecurity Solutions. From scalable infrastructures and real-time analytics to robust cybersecurity and regulatory compliance, Avitell empowers manufacturers.",
          image:
            "https://www.avitelltechnologies.com/assets/images/industries/manufacturing.jpeg",
        },
      ],
    },
    provider: {
      "@type": "Organization",
      name: "Avitell Technologies",
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
        title="Avitell | Industries"
        jsonLd={jsonLd}
        metaDataTag={metaDataTag}
      />

      <NavigationAnimation>
        <Header />

        <IndustryBanner />

        <IndustrySection />

        <Footer />
      </NavigationAnimation>
    </>
  );
};

export default IndustriesPage;
