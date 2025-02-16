import { getServerSideSitemapLegacy, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields: ISitemapField[] = [
    {
      loc: "https://www.avitelltechnologies.com/services/network-solutions", // Absolute url
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: "https://www.avitelltechnologies.com/services/windows-services", // Absolute url
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: "https://www.avitelltechnologies.com/services/cloud-and-hybrid-services", // Absolute url
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: "https://www.avitelltechnologies.com/services/unified-communications", // Absolute url
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: "https://www.avitelltechnologies.com/services/advanced-security", // Absolute url
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.9,
    }
  ];

  return getServerSideSitemapLegacy(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
