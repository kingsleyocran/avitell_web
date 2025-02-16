import CustomHead from "@/components/layout/CustomHead";
import NavigationAnimation from "@/components/animation/navigationAnimation/Stairs";
import { useEffect } from "react";
import Lenis from "lenis";
import { NextPage } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ContactForm from "@/components/sections/consultation/ContactForm";
import ConsultationBanner from "@/components/sections/consultation/ConsultationBanner";
import ConsultationProcess from "@/components/sections/consultation/ConsultationProcess";

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

const ConsultationPage: NextPage<Props> = ({ pageData }) => {
  const metaDataTag = {
    title: "Schedule a Consultation | Avitell Technologies",
    authors: [
      {
        name: "Avitell Technologies",
      },
    ],
    description:
      "Schedule a complimentary 30-minute consultation with Avitell Technologies. Discuss your IT strategy, services, business solutions, and compliance concerns with our experts. Let us help optimize your technology infrastructure for sustainable growth.",
    keywords:
      "IT Consultation, Technology Assessment, Business IT Strategy, IT Solutions Consultation, Enterprise IT Planning, Technology Consulting, IT Infrastructure Assessment, Digital Transformation Consultation",
    openGraph: {
      title: "Schedule a Consultation | Avitell Technologies",
      description:
        "Book a free 30-minute consultation with Avitell Technologies' experts. We'll discuss your organization's IT strategy, services, compliance, and technology priorities to deliver value promptly and consistently.",
      type: "website",
      url: "https://www.avitelltechnologies.com/consultation",
      publishedTime: "2025-01-01",
      modifiedTime: new Date().toISOString().split("T")[0],
      authors: ["Avitell Technologies", "Yao Avidi"],
      tags: "IT Consultation, Technology Assessment, Business Strategy, Digital Transformation",
      images: [
        {
          url: "https://www.avitelltechnologies.com/assets/images/consultation-og-image.png",
          width: 1200,
          height: 630,
          alt: "Schedule a Consultation with Avitell Technologies",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@AvitellTech",
      creator: "@AvitellTech",
      title: "Schedule a Consultation | Avitell Technologies",
      description:
        "Book a free 30-minute consultation with Avitell Technologies' experts. We'll discuss your organization's IT strategy, services, compliance, and technology priorities to deliver value promptly and consistently.",
      images: [
        {
          url: "https://www.avitelltechnologies.com/assets/images/consultation-og-image.png",
          width: 1200,
          height: 630,
          alt: "Schedule a Consultation with Avitell Technologies",
        },
      ],
    },
    alternates: {
      canonical: "https://www.avitelltechnologies.com/consultation",
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: "https://www.avitelltechnologies.com/consultation",
    name: "Schedule a Consultation with Avitell Technologies",
    description:
      "Schedule a complimentary 30-minute consultation to discuss your organization's IT strategy and technology needs with our experts.",
    mainEntity: {
      "@type": "Service",
      name: "IT Consultation Service",
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
      offers: {
        "@type": "Offer",
        name: "Free IT Consultation",
        description: "30-minute complimentary consultation session",
        price: "0",
        priceCurrency: "USD",
      },
      serviceType: "IT Consultation",
      steps: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Strategy Session",
          text: "We'll delve into your current configuration and future objectives, guiding you through our IT approach and illustrating how it might be applicable to your situation.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Technology Assessment",
          text: "Our engineering team will examine your system, evaluate the infrastructure, and identify any security weaknesses to deliver a thorough solution.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Solutions Presentation",
          text: "We will thoroughly evaluate the assessment and provide recommendations to enhance your surroundings.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Executive Q&A Session",
          text: "Your executive team will be given the chance to engage in a discussion with us regarding the presented information.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Kick-Off Meeting",
          text: "Avitell will introduce you to your new IT department and provide guidance on how to access support and initiate your first project.",
        },
      ],
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
        title="Avitell | Consultation"
        jsonLd={jsonLd}
        metaDataTag={metaDataTag}
      />

      <NavigationAnimation>
        <Header />

        <ConsultationBanner />

        <ConsultationProcess />

        <ContactForm />

        <Footer />
      </NavigationAnimation>
    </>
  );
};

export default ConsultationPage;
