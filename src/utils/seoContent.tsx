export const servicesSEOContent = {
  "network-solutions": {
    title: "Enterprise Network Solutions | Avitell Technologies",
    description:
      "Transform your business with Avitell's Enterprise Network Solutions. From route and switch infrastructure to wireless networking and SD-WAN, we deliver reliable, scalable network solutions that optimize performance and security.",
    keywords:
      "Enterprise Network Solutions, Network Infrastructure, Route and Switch, Wireless Networking, SD-WAN, Network Security, Network Management, Business Network Solutions",
  },
  "windows-services": {
    title: "Windows Services & Support | Avitell Technologies",
    description:
      "Optimize your Windows environment with Avitell's comprehensive Windows Services. From server management and desktop support to Active Directory administration, we ensure your Windows infrastructure runs efficiently and securely.",
    keywords:
      "Windows Services, Server Management, Desktop Support, Active Directory, Windows Infrastructure, IT Support, System Administration, Windows Security",
  },
  "cloud-and-hybrid-services": {
    title: "Cloud & Hybrid Services | Avitell Technologies",
    description:
      "Accelerate your digital transformation with Avitell's Cloud & Hybrid Services. From backup and disaster recovery to infrastructure management and productivity tools, we deliver scalable cloud solutions that drive business growth.",
    keywords:
      "Cloud Services, Hybrid Cloud, Disaster Recovery, Cloud Infrastructure, Cloud Security, Cloud Management, Digital Transformation, Cloud Migration",
  },
  "unified-communications": {
    title: "Unified Communications Solutions | Avitell Technologies",
    description:
      "Enhance collaboration with Avitell's Unified Communications solutions. From VoIP systems to video conferencing and collaboration tools, we deliver integrated communication solutions that keep your team connected.",
    keywords:
      "Unified Communications, VoIP Systems, Video Conferencing, Collaboration Tools, Business Communications, Team Collaboration, Communication Solutions",
  },
  "advanced-security": {
    title: "Advanced Security Solutions | Avitell Technologies",
    description:
      "Protect your business with Avitell's Advanced Security solutions. From endpoint protection to threat detection and firewall security, we provide comprehensive cybersecurity services that safeguard your digital assets.",
    keywords:
      "Advanced Security, Cybersecurity, Endpoint Protection, Threat Detection, Network Security, Data Protection, Security Solutions, IT Security",
  },
};

export const generateServiceSEO = (pageID: string) => {
  const service = servicesSEOContent[pageID as keyof typeof servicesSEOContent];

  return {
    metaDataTag: {
      title: service.title,
      authors: [
        {
          name: "Avitell Technologies",
        },
      ],
      description: service.description,
      keywords: service.keywords,
      openGraph: {
        title: service.title,
        description: service.description,
        type: "website",
        url: `https://www.avitelltechnologies.com/services${pageID}`,
        publishedTime: "2025-01-01",
        modifiedTime: new Date().toISOString().split("T")[0],
        authors: ["Avitell Technologies", "Yao Avidi"],
        tags: service.keywords,
        images: [
          {
            url: `https://www.avitelltechnologies.com/assets/images/services/${pageID}-og-image.png`,
            width: 1200,
            height: 630,
            alt: `${service.title} - Avitell Technologies`,
            type: "image/png",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@AvitellTech",
        creator: "@AvitellTech",
        title: service.title,
        description: service.description,
        images: [
          {
            url: `https://www.avitelltechnologies.com/assets/images/services/${pageID}-og-image.png`,
            width: 1200,
            height: 630,
            alt: `${service.title} - Avitell Technologies`,
          },
        ],
      },
      alternates: {
        canonical: `https://www.avitelltechnologies.com/services/${pageID}`,
      },
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      url: `https://www.avitelltechnologies.com/services/${pageID}`,
      name: service.title,
      description: service.description,
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
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      datePublished: "2025-01-01",
      dateModified: new Date().toISOString().split("T")[0],
    },
  };
};
