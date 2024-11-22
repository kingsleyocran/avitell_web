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

const Page: NextPage<Props> = ({ pageData }) => {
  const metaDataTag = {
    title: `We believe in the power of storytelling to challenge the status quo | Global Climate Storytellers Network`,
    authors: [
      {
        name: "Global Climate Storytellers Network",
      },
    ],
    description:
      "Join a global community harnessing the power of storytelling to tackle climate change. Empowering storytellers to drive sustainable action through collaboration, resources, and impactful climate-themed narratives.",
    keywords:
      "Climate Storytelling, Sustainability, Climate Justice, Storytelling Network, Climate Action, Climate Change, Environmental Storytelling",
    openGraph: {
      title: `We believe in the power of storytelling to challenge the status quo | Global Climate Storytellers Network`,
      description:
        "Join a global community harnessing the power of storytelling to tackle climate change. Empowering storytellers to drive sustainable action through collaboration, resources, and impactful climate-themed narratives.",
      type: "website",
      url: `https://www.climatestorytellers.earth/`,
      publishedTime: "2024-11-07",
      modifiedTime: "2024-11-07",
      authors: ["Global Climate Storytellers Network"],
      tags: "Climate Action, Storytelling, Sustainability, Community, Climate Justice",
      images: [
        {
          url: `https://www.climatestorytellers.earth/hero-image.png`,
          width: 1200,
          height: 630,
          alt: "Global Climate Storytellers Network Hero Image",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@climatestorytellers",
      creator: "@climatestorytellers",
      title: `We believe in the power of storytelling to challenge the status quo | Global Climate Storytellers Network`,
      description:
        "Join a global community harnessing the power of storytelling to tackle climate change. Empowering storytellers to drive sustainable action through collaboration, resources, and impactful climate-themed narratives.",
      images: [
        {
          url: `https://www.climatestorytellers.earth/hero-image.png`,
          width: 1200,
          height: 630,
          alt: "Global Climate Storytellers Network Hero Image",
        },
      ],
    },
    alternates: {
      canonical: `https://www.climatestorytellers.earth/`,
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://www.climatestorytellers.earth/",
    name: "Global Climate Storytellers Network",
    description:
      "Join a global community harnessing the power of storytelling to tackle climate change. Empowering storytellers to drive sustainable action through collaboration, resources, and impactful climate-themed narratives.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.climatestorytellers.earth/",
    },
    datePublished: "2024-11-07",
    dateModified: "2024-11-07",
    publisher: {
      "@type": "Organization",
      name: "Global Climate Storytellers Network",
      logo: {
        "@type": "ImageObject",
        url: "https://www.climatestorytellers.earth/logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.climatestorytellers.earth/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    about: [
      {
        "@type": "Organization",
        name: "Global Climate Storytellers Network",
        description:
          "A network dedicated to empowering storytellers to drive action towards climate justice and sustainability.",
        url: "https://www.climatestorytellers.earth/",
        image: "https://www.climatestorytellers.earth/logo.png",
        memberOf: [
          {
            "@type": "CreativeWork",
            name: "Who Are We?",
            text: "Our mission is to empower storytellers to drive action towards a sustainable and climate-just future. We provide a space for collaboration, learning, and sharing resources to amplify the impact of climate-themed stories and projects.",
          },
          {
            "@type": "CreativeWork",
            name: "Meet Our Storytelling Community",
            text: "We aim to bring new energy, ideas, and perspectives from all who are working on climate-themed stories and projects. A community for storytellers to access resources, share opportunities, and collaborate for impactful storytelling.",
          },
        ],
      },
    ],
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
      <CustomHead title="Avitell" jsonLd={jsonLd} metaDataTag={metaDataTag} />

      <NavigationAnimation>
        <Header />

        <IndustryBanner />

        <IndustrySection />

        <Footer />
      </NavigationAnimation>
    </>
  );
};

export default Page;
