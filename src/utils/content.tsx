import HomeServiceVector1 from "../../public/assets/vector/home_service_1.svg";
import HomeServiceVector2 from "../../public/assets/vector/home_service_1.svg";
import HomeServiceVector3 from "../../public/assets/vector/home_service_1.svg";
import HomeServiceVector4 from "../../public/assets/vector/home_service_1.svg";
import HomeServiceVector5 from "../../public/assets/vector/home_service_1.svg";
import HomeServiceVector6 from "../../public/assets/vector/home_service_1.svg";
import HomeServiceVector7 from "../../public/assets/vector/home_service_1.svg";
import HomeServiceVector8 from "../../public/assets/vector/home_service_1.svg";

export const navlinks = [
  {
    href: "/services",
    title: "Service Solutions",
    subPages: [
      { href: "/network-solutions", title: "Network Solutions" },
      { href: "/windows-services", title: "Windows Services" },
      { href: "/cloud-and-hybrid-services", title: "Cloud & Hybrid Services" },
      { href: "/unified-communications", title: "Unified Communications" },
      { href: "/advanced-security", title: "Advanced Security" },
    ],
  },
  { href: "/industries", title: "Industries" },
  {
    href: "/insights",
    title: "Insights",
    subPages: [{ href: "/network-solutions", title: "Network Solutions" }],
  },
  { href: "/about-us", title: "About Us" },
];

export const ctaButton = {
  title: "Get a free consultation",
  href: "/consultation",
};

export const homeBannerContent = {
  title: "Empowering Your Business Through Technology",
  subText:
    "Avitell utilizes top-notch Project Management methodologies to handle its projects. As a \
    result, you can expect a dynamic, superior, and constantly improving environment.",
};

export const homeServicesContent = [
  {
    title: "Consultings",
    content:
      "Our industry-leading IT consulting services can help you achieve a competitive edge by providing highly effective strategies and innovative solutions.",
    iconDesktop: <HomeServiceVector1 />,
    iconMobile: <HomeServiceVector1 />,
  },
  {
    title: "Infrastructure",
    content:
      "Our IaaS solution provides clients with quick access to the infrastructure they require, without the need for extensive time and resources. ",
    iconDesktop: <HomeServiceVector2 />,
    iconMobile: <HomeServiceVector2 />,
  },
  {
    title: "Cloud Management",
    content:
      "Our tailored managed services eliminate the expenses and difficulties associated with managing your intricate hybrid Cloud setups.",
    iconDesktop: <HomeServiceVector3 />,
    iconMobile: <HomeServiceVector3 />,
  },
  {
    title: "Managed Cybersecurity",
    content:
      "Our role as a provider of Azure managed services is to assist clients in operating successfully and securely in the cloud.",
    iconDesktop: <HomeServiceVector4 />,
    iconMobile: <HomeServiceVector4 />,
  },
  {
    title: "Networking",
    content:
      "With the prevalence of extensive communication channels, companies cannot rely on a haphazard approach to network planning and management. ",
    iconDesktop: <HomeServiceVector5 />,
    iconMobile: <HomeServiceVector5 />,
  },
  {
    title: "Azure Solutions",
    content:
      "Throughout your entire Cloud experience, our team of hands-on DevOps experts and Cloud Engineers will guarantee that you fully leverage Azure. ",
    iconDesktop: <HomeServiceVector5 />,
    iconMobile: <HomeServiceVector5 />,
  },
];

export const contactDetails = [{}];

export const homeAboutContent = {
  ctaButtonTitle: "Learn more",
  ctaHref: "/about-us",
  title:
    "Empowering Your Business Through Technology. Empowering Your Business",
  content:
    "With the prevalence of extensive communication channels, companies cannot rely on a haphazard approach to network planning and management.  With the prevalence of extensive communication channels, companies cannot rely on a haphazard approach to network planning and management. ",
};

export const homePlanContent = {
  title: "Start developing a thorough defense plan",
  contentList: [
    {
      title: "Strong Partnerships",
      imgUrl: "/assets/images/plan-1.png",
      content:
        "At Avitell, we believe in fostering robust and individualized partnerships with our clients. Through open communication, transparency, and trust, we are able to cater to each client's specific requirements and build lasting relationships.",
    },
    {
      title: "Relevant, Current Industry Experience",
      imgUrl: "/assets/images/plan-2.png",
      content:
        "At Avitell, we believe in fostering robust and individualized partnerships with our clients. Through open communication, transparency, and trust, we are able to cater to each client's specific requirements and build lasting relationships.",
    },
    {
      title: "Accessible & Proactive Management",
      imgUrl: "/assets/images/plan-3.png",
      content:
        "At Avitell, we believe in fostering robust and individualized partnerships with our clients. Through open communication, transparency, and trust, we are able to cater to each client's specific requirements and build lasting relationships.",
    },
  ],
};
