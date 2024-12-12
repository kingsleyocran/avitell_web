import HomeServiceVector1 from "../../public/assets/vector/home_service_1.svg";
import HomeServiceVector2 from "../../public/assets/vector/home_service_2.svg";
import HomeServiceVector3 from "../../public/assets/vector/home_service_3.svg";
import HomeServiceVector4 from "../../public/assets/vector/home_service_4.svg";
import HomeServiceVector5 from "../../public/assets/vector/home_service_5.svg";

import ProcessVector1 from "../../public/assets/vector/process_1.svg";
import ProcessVector2 from "../../public/assets/vector/process_2.svg";
import ProcessVector3 from "../../public/assets/vector/process_3.svg";
import ProcessVector4 from "../../public/assets/vector/process_4.svg";

export const navlinks = [
  {
    href: "/services",
    title: "Service Solutions",
    subPages: [
      { href: "/network-solutions", title: "Network Solutions" },
      { href: "/windows-services", title: "Windows Services" },
      { href: "/cloud-and-hybrid-services", title: "Cloud & Hybrid Services" },
      { href: "/unified-communications", title: "Unified Communications" },
      {
        href: "/advanced-security",
        title: "Advanced Security",
      },
    ],
  },
  { href: "/industries", title: "Industries" },
  { href: "/about-us", title: "About Us" },
];

export const ctaSection = {
  title: "Speak with a knowledgeable professional",
  content:
    "We should have a conversation about finding a solution that aligns with both your business objectives and technical requirements.",
};

export const footerContactDetails = {
  phone: "214-713-7194",
  email: "info@avitelltechnologies.com",
  address: "500 N Central Expressway, Suite 500. Plano, Texas 75074",
};

export const footerCTASection = {
  title: "Discover How We Work",
  content:
    "We would be delighted to assist you in discovering more about Avitell services if you have any interest.",
};

export const ctaButton = {
  title: "Get a free consultation",
  href: "/consultation",
};

export const termPrivacyList = [
  { title: "Terms", href: "/terms" },
  { title: "Privacy", href: "/privacy" },
];

export const homeBannerContent = {
  title: "Empowering Your Business Through Technology",
  subText:
    "Avitell utilizes top-notch Project Management methodologies to handle its projects. As a \
    result, you can expect a dynamic, superior, and constantly improving environment.",
};

export const homeServicesContent = [
  {
    title: "Enterprise Network Solutions",
    content:
      "With the prevalence of extensive communication channels, companies cannot rely on a haphazard approach to network planning and management. ",
    iconDesktop: <HomeServiceVector1 />,
    iconMobile: (
      <HomeServiceVector1 width="90" height="90" viewBox="0 0 106 106" />
    ),
  },
  {
    title: "Windows Services",
    content:
      "Our industry-leading IT consulting services can help you achieve a competitive edge by providing highly effective strategies and innovative solutions.",
    iconDesktop: <HomeServiceVector2 />,
    iconMobile: (
      <HomeServiceVector2 width="90" height="90" viewBox="0 0 106 106" />
    ),
  },
  {
    title: "Cloud & Hybrid Services",
    content:
      "Throughout your entire Cloud experience, our team of hands-on DevOps experts and Cloud Engineers will guarantee that you fully leverage Azure. ",
    iconDesktop: <HomeServiceVector3 />,
    iconMobile: (
      <HomeServiceVector3 width="90" height="90" viewBox="0 0 106 106" />
    ),
  },
  {
    title: "Unified Communications",
    content:
      "Our IaaS solution provides clients with quick access to the infrastructure they require, without the need for extensive time and resources. ",
    iconDesktop: <HomeServiceVector4 />,
    iconMobile: (
      <HomeServiceVector4 width="90" height="90" viewBox="0 0 106 106" />
    ),
  },
  {
    title: "Advanced Security",
    content:
      "Our tailored managed services eliminate the expenses and difficulties associated with managing your intricate hybrid Cloud setups.",
    iconDesktop: <HomeServiceVector5 />,
    iconMobile: (
      <HomeServiceVector5 width="90" height="90" viewBox="0 0 106 106" />
    ),
  },
];

export const contactDetails = [{}];

export const homeAboutContent = {
  ctaButtonTitle: "Learn more",
  ctaHref: "/about-us",
  title: "Transforming Businesses with Smarter, Scalable IT Solutions",
  content:
    "Since 2017, Avitell Technologies has been a trusted partner for small and medium-sized enterprises (SMEs), delivering tailored IT solutions that drive growth, innovation, and security. With over a decade of expertise in network, cloud, and cybersecurity, we help businesses across industries — from healthcare to finance — modernize IT infrastructures, enhance operational efficiency, and achieve compliance. Our mission is to provide reliable, cost-effective IT support, enabling businesses to focus on their core operations while we manage their technology needs. Experience proactive, end-to-end IT solutions designed to keep your business ahead of the curve.",
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
        "Applying up-to-date industry knowledge and practical expertise to provide innovative solutions in Cloud and Cybersecurity, based on our comprehensive experience and skillset.",
    },
    {
      title: "Accessible & Proactive Management",
      imgUrl: "/assets/images/plan-3.png",
      content:
        "Our management style is both accessible and proactive. Our team of US-based professionals keeps a watchful eye on your critical systems around the clock, every day of the year, and is always ready to anticipate your needs.",
    },
  ],
};

export const industriesHomeContent = [
  {
    industry: "Healthcare",
    title: "Transforming Healthcare with Secure, Scalable IT Solutions",
    content:
      "Avitell Technologies delivers tailored IT solutions to meet the unique demands of the healthcare industry. From scalable infrastructures and 24/7 operational support to seamless cloud transitions, Avitell empowers healthcare providers to enhance collaboration, streamline workflows, and enable faster decision-making. With advanced cybersecurity and HIPAA compliance at the core, they safeguard sensitive patient data and ensure regulatory adherence. As a strategic partner, Avitell supports healthcare transformation by modernizing IT infrastructures and building future-ready digital environments that prioritize patient care and operational excellence.",
    imgUrl: "/assets/images/industries/healthcare.png",
  },
  {
    industry: "Finance",
    title: "Powering Financial Growth with Secure, Scalable IT Solutions",
    content:
      "Avitell Technologies delivers tailored IT solutions to meet the precision, efficiency, and security demands of the finance sector. From scalable infrastructures and real-time data access to advanced cybersecurity, Avitell empowers financial organizations to optimize operations, enhance client experiences, and drive growth. Their solutions ensure compliance with standards like PCI DSS and GDPR, safeguarding sensitive financial data. As a strategic partner, Avitell supports digital transformation by modernizing legacy systems, securing IT frameworks, and integrating next-gen financial technologies for sustainable success in a rapidly evolving industry.",
    imgUrl: "/assets/images/industries/finance.png",
  },
  {
    industry: "Education",
    title:
      "Empowering Education with Scalable IT & Secure Digital Learning Solutions",
    content:
      "Avitell Technologies delivers advanced IT solutions tailored to modern education. By providing scalable infrastructures, seamless connectivity, and secure cloud-based learning platforms, Avitell empowers educational institutions to enhance learning experiences, foster collaboration, and drive operational efficiency. Their advanced cybersecurity solutions protect student data and ensure compliance with regulations like FERPA. As a strategic partner, Avitell supports digital transformation by modernizing legacy systems, integrating next-gen learning technologies, and enabling institutions to thrive in the digital age. ",
    imgUrl: "/assets/images/industries/education.png",
  },
  {
    industry: "Retail",
    title:
      "Driving Retail Innovation with Scalable IT & Cybersecurity Solutions",
    content:
      "Avitell Technologies delivers advanced IT solutions tailored to the fast-paced retail sector. From omnichannel networks and cloud-based inventory management to data-driven decision-making, Avitell empowers retailers to boost efficiency, enhance customer engagement, and achieve long-term growth. With a focus on advanced cybersecurity and PCI DSS compliance, they protect customer data and business operations. As a strategic partner, Avitell supports retail transformation by modernizing IT systems, integrating innovative technologies, and enhancing both digital and in-store experiences",
    imgUrl: "/assets/images/industries/retail.png",
  },
  {
    industry: "Manufacturing",
    title:
      "Powering Smart Manufacturing with Scalable IT & Cybersecurity Solutions",
    content:
      "Avitell Technologies delivers advanced IT solutions tailored to the unique demands of the manufacturing sector. From scalable infrastructures and real-time analytics to robust cybersecurity and regulatory compliance, Avitell empowers manufacturers to optimize processes, boost productivity, and drive sustainable growth. As a strategic partner, they modernize legacy systems, integrate IoT and AI, and support digital transformation to maintain a competitive edge. ",
    imgUrl: "/assets/images/industries/manufacturing.png",
  },
];

export const industriesBannerContent = {
  title: "Industry Specific IT Solutions That Leave a Mark",
  subText:
    "Avitell Technologies delivers custom IT solutions that drive growth, efficiency, and security for important sectors with major industry specificity. Starting from healthcare and finance, to education, retail, and manufacturing, we offer scalable infrastructures along with cloud integration and advanced security which caters to the unique demands of every sector. This allows for improved operations with ease in compliance to regulations and digital transformation for agility and competitiveness. Thus, Avitell Technologies is a partner that drives innovation to optimize workflows while securing the digital future for any industry.",
};

export const industriesPageContent = [
  {
    industry: "Healthcare",
    title: "Transforming Healthcare with Secure, Scalable IT Solutions",
    content: (
      <>
        With deep expertise in healthcare IT and a steadfast focus on
        innovation, Avitell Technologies specializes in creating tailored
        solutions that address the unique challenges of the healthcare industry.
        We understand the critical importance of seamless communication,
        efficient workflows, and uncompromising security in delivering quality
        patient care.
        <br />
        <br />
        Our approach combines state-of-the-art technology with industry best
        practices to enhance your network performance, ensuring that your
        systems are reliable, scalable, and optimized for 24/7 healthcare
        operations. By facilitating smooth transitions to cloud or hybrid
        environments, we empower healthcare providers with secure and flexible
        access to critical data, enabling better collaboration and faster
        decision-making.
        <br />
        <br />
        Security is at the core of everything we do. With advanced cybersecurity
        measures, we protect sensitive patient data and help you navigate
        complex regulatory requirements like HIPAA, so you can focus on what
        matters most delivering excellent care.
        <br />
        <br />
        At Avitell Technologies, we are not just service providers; we are
        partners in your journey toward technology-driven healthcare
        transformation. Whether you are looking to modernize your IT
        infrastructure or build a future-ready digital environment, our team is
        here to support you every step of the way.
        <br />
        <br />
        Ready to revolutionize your healthcare technology? Contact us today to
        discuss your needs and explore how Avitell Technologies can help your
        organization thrive.
      </>
    ),
    imgUrl: "/assets/images/industries/healthcare.png",
  },
  {
    industry: "Finance",
    title: "Powering Financial Growth with Secure, Scalable IT Solutions",
    content: (
      <>
        Avitell Technologies brings extensive expertise in financial IT
        solutions and a strong focus on innovation to deliver customized
        services that address the unique demands of the finance industry. In a
        field where precision, efficiency, and security are critical, we help
        organizations optimize their operations, elevate client experiences, and
        stay competitive in a rapidly changing digital environment.
        <br />
        <br />
        We ensure your IT infrastructure is reliable, scalable, and built for
        performance. From boosting network efficiency to deploying cloud and
        hybrid solutions, our services provide the backbone for seamless
        financial operations, enabling real-time data access and enhanced
        collaboration across teams and systems.
        <br />
        <br />
        Data security is at the heart of everything we do. Our advanced
        cybersecurity solutions are designed to protect sensitive financial data
        from ever-evolving threats while ensuring full compliance with
        regulatory standards such as PCI DSS and GDPR. By prioritizing security,
        we help build trust and confidence with your clients.
        <br />
        <br />
        At Avitell Technologies, we are more than a service provider—we are your
        partner in digital transformation. Whether you’re modernizing legacy
        systems, securing your IT framework, or integrating cutting-edge
        technologies, we are committed to driving innovation, growth, and
        long-term success for your organization.
        <br />
        <br />
        Ready to redefine your financial technology? Get in touch with Avitell
        Technologies today and explore how we can help your business thrive in
        the digital era.
      </>
    ),
    imgUrl: "/assets/images/industries/finance.png",
  },
  {
    industry: "Education",
    title:
      "Empowering Education with Scalable IT & Secure Digital Learning Solutions",
    content: (
      <>
        Avitell Technologies is committed to driving innovation in the education
        sector by providing cutting-edge IT solutions that address the evolving
        needs of modern learning environments. In a world where technology is
        integral to teaching, collaboration, and research, we empower
        educational institutions to enhance operational efficiency, elevate
        learning experiences, and foster meaningful connections among students,
        educators, and administrators.
        <br />
        <br />
        We specialize in designing and implementing scalable, secure IT
        infrastructures tailored to the unique demands of schools, universities,
        and training organizations. From high-performance networks supporting
        seamless connectivity to flexible cloud and hybrid solutions, our
        services enable real-time learning, improve accessibility, and support
        dynamic collaboration.
        <br />
        <br />
        Recognizing the critical importance of safeguarding sensitive data, we
        deliver advanced cybersecurity solutions to protect student records and
        institutional information against emerging threats. Our expertise
        ensures compliance with education-specific regulations such as FERPA,
        helping institutions maintain trust and operational integrity.
        <br />
        <br />
        At Avitell Technologies, we go beyond providing services; we serve as a
        trusted partner in your digital transformation journey. Whether
        modernizing outdated systems, developing secure and efficient digital
        learning platforms, or integrating state-of-the-art technologies, we are
        dedicated to helping educational institutions excel in an increasingly
        digital landscape.
        <br />
        <br />
        Elevate the future of education with technology that inspires success.
        Contact Avitell Technologies today to learn how we can empower your
        institution to achieve its goals.
      </>
    ),
    imgUrl: "/assets/images/industries/education.png",
  },
  {
    industry: "Retail",
    title:
      "Driving Retail Innovation with Scalable IT & Cybersecurity Solutions",
    content: (
      <>
        Avitell Technologies is a leader in providing advanced IT solutions for
        the retail sector, offering innovative services designed to meet the
        unique demands of today’s dynamic retail landscape. In an industry where
        exceptional customer experiences, operational efficiency, and data
        security are critical to success, we enable retailers to optimize their
        operations, elevate customer engagement, and achieve long-term growth.
        <br />
        <br />
        Our expertise lies in designing scalable, high-performance IT
        infrastructures tailored to the fast-paced requirements of retail
        businesses. From reliable networks that support seamless omnichannel
        operations to flexible cloud and hybrid solutions that streamline
        inventory management and enable data-driven decision-making, our
        solutions empower retailers to adapt and excel in a competitive market.
        <br />
        <br />
        Data security is a top priority at Avitell Technologies. We deliver
        advanced cybersecurity solutions to protect sensitive customer
        information and safeguard business operations against emerging threats.
        Our services also ensure compliance with industry standards such as PCI
        DSS, helping retailers maintain trust and uphold their brand reputation.
        <br />
        <br />
        At Avitell Technologies, we are more than a service provider—we are your
        strategic partner in driving retail transformation. Whether modernizing
        IT systems, implementing innovative technologies, or enhancing digital
        and physical retail experiences, we are committed to helping your
        business succeed in an ever-evolving retail environment.
        <br />
        <br />
        Discover how technology can transform your retail operations. Contact
        Avitell Technologies today to learn how we can help your business
        thrive.
      </>
    ),
    imgUrl: "/assets/images/industries/retail.png",
  },
  {
    industry: "Manufacturing",
    title:
      "Powering Smart Manufacturing with Scalable IT & Cybersecurity Solutions",
    content: (
      <>
        Avitell Technologies is a leading provider of advanced IT solutions for
        the manufacturing sector, offering innovative services designed to meet
        the unique challenges of today’s complex manufacturing environments. In
        an industry where operational efficiency, scalability, and data security
        are essential, we empower manufacturers to optimize their processes,
        enhance productivity, and drive sustainable growth.
        <br />
        <br />
        We specialize in designing and implementing robust, scalable IT
        infrastructures that cater to the specific demands of manufacturing
        operations. From high-performance networks that ensure seamless
        communication across facilities to flexible cloud and hybrid solutions
        that optimize supply chain management, production monitoring, and
        real-time data analytics, our solutions enable manufacturers to stay
        ahead of the curve and maintain a competitive advantage.
        <br />
        <br />
        Data security and regulatory compliance are top priorities for
        manufacturers, and Avitell Technologies provides advanced cybersecurity
        solutions to protect sensitive operational data, intellectual property,
        and supply chain information from evolving threats. Our expertise
        ensures adherence to industry standards, enabling manufacturers to
        safeguard their assets while maintaining compliance with relevant
        regulations.
        <br />
        <br />
        At Avitell Technologies, we are more than just a service provider—we are
        your strategic partner in driving digital transformation within
        manufacturing. Whether modernizing legacy systems, enhancing production
        workflows, or integrating advanced technologies such as IoT and AI, we
        are committed to helping your business innovate, improve efficiency, and
        achieve long-term success.
        <br />
        <br />
        Unlock the potential of your manufacturing operations with cutting-edge
        technology solutions. Contact Avitell Technologies today to learn how we
        can support your business in achieving operational excellence and
        sustainable growth.
      </>
    ),
    imgUrl: "/assets/images/industries/manufacturing.png",
  },
];

export const sampleBlogList = [
  {
    title:
      "We believe in fostering robust and individualized partnerships with our clients. ",
    description:
      "At Avitell, we believe in fostering robust and individualized partnerships with our clients. Through open communication, transparency, and trust, we are able to cater to each client's specific requirements and build lasting relationships.",
    link: "https://google.com",
  },
  {
    title:
      "We believe in fostering robust and individualized partnerships with our clients. ",
    description:
      "At Avitell, we believe in fostering robust and individualized partnerships with our clients. Through open communication, transparency, and trust, we are able to cater to each client's specific requirements and build lasting relationships.",
    link: "https://google.com",
  },
  {
    title:
      "We believe in fostering robust and individualized partnerships with our clients. ",
    description:
      "At Avitell, we believe in fostering robust and individualized partnerships with our clients. Through open communication, transparency, and trust, we are able to cater to each client's specific requirements and build lasting relationships.",
    link: "https://google.com",
  },
];

export const mediumLink = "https://google.com";

export const servicesContent = [
  // Network Solutions //TODO
  {
    id: navlinks[0]?.subPages?.[0]?.href,
    title: "Enterprise Network Solutions",
    imgUrl: "/assets/images/services/network.png",
    subText:
      "Avitell utilizes top-notch Project Management methodologies to handle its projects. As a result, you can expect a dynamic, superior, and constantly improving environment.",
    subList: [
      {
        title: "Server Management",
        content:
          "Provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "Monitoring and maintenance of Windows servers.",
          "Regular updates and patch management.",
          "Backup and disaster recovery solutions.",
        ],
        benefits: [
          "Increased uptime and reliability.",
          "Enhanced security and compliance.",
          "Reduced operational costs through efficient management.",
        ],
      },

      {
        title: "Active Directory",
        content:
          "Provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "User account creation and management.",
          "Group policy management.",
          "Security auditing and reporting.",
        ],
        benefits: [
          "Simplified user access management.",
          "Improved security through centralized control.",
          "Enhanced productivity with efficient user provisioning.",
        ],
      },

      {
        title: "Remote Desktop Solutions",
        content:
          "Provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "Remote Desktop Services (RDS) setup and management.",
          "VPN solutions for secure connections.",
          "User training and support.",
        ],
        benefits: [
          "Flexibility for remote work.",
          "Enhanced security for remote access.",
          "Improved collaboration among teams.",
        ],
      },
    ],
    whyContent: {
      title: "Why Choose Us For Your Enterprise Network Solutions Needs?",
      content:
        "Our team of experienced network engineers brings a wealth of knowledge and expertise to every project. \
      We combine cutting-edge technology with a customer-centric approach to deliver tailored network solutions that drive \
      business success. Our team of experienced network engineers brings a wealth of knowledge and expertise to every project. \
      We combine cutting-edge technology with a customer-centric approach to deliver tailored network solutions that drive business success. \
      Our team of experienced network engineers brings a wealth of knowledge and expertise to every project. We combine cutting-edge \
      technology with a customer-centric approach to deliver tailored network solutions that drive business success.",
    },
  },

  // Windows Services
  {
    id: navlinks[0]?.subPages?.[1]?.href,
    title: "Windows Services",
    imgUrl: "/assets/images/services/windows.png",
    subText:
      "Avitell utilizes top-notch Project Management methodologies to handle its projects. As a result, you can expect a dynamic, superior, and constantly improving environment.",
    subList: [
      {
        title: "Server Management",
        content:
          "We provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "Monitoring and maintenance of Windows servers.",
          "Regular updates and patch management.",
          "Backup and disaster recovery solutions.",
        ],
        benefits: [
          "Increased uptime and reliability.",
          "Enhanced security and compliance.",
          "Reduced operational costs through efficient management.",
        ],
      },

      {
        title: "Active Directory",
        content:
          "We provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "User account creation and management.",
          "Group policy management.",
          "Security auditing and reporting.",
        ],
        benefits: [
          "Simplified user access management.",
          "Improved security through centralized control.",
          "Enhanced productivity with efficient user provisioning.",
        ],
      },

      {
        title: "Remote Desktop Solutions",
        content:
          "We provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "Remote Desktop Services (RDS) setup and management.",
          "VPN solutions for secure connections.",
          "User training and support.",
        ],
        benefits: [
          "Flexibility for remote work.",
          "Enhanced security for remote access.",
          "Improved collaboration among teams.",
        ],
      },
    ],
    whyContent: {
      title: "Why Choose Us For Your Windows Service Needs?",
      content:
        "Avitell leverages top-notch project management methodologies to deliver exceptional Windows Services solutions, ensuring a dynamic and continually improving environment tailored to business needs.\n\n \
We offer comprehensive server management to optimize performance, security, and reliability through continuous monitoring, updates, and disaster recovery, resulting in increased uptime, enhanced compliance, and reduced operational costs. \n\n \
Our services also include Active Directory management, simplifying user access, improving security with centralized controls, and boosting productivity through efficient user provisioning.\n\n \
Additionally, we provide secure remote desktop solutions with flexible remote work capabilities, enhanced collaboration, and robust security for remote access. Together, these solutions ensure efficient operations, secure environments, and seamless connectivity across teams.”",
    },
  },

  // Cloud & Hybrid Services //TODO
  {
    id: navlinks[0]?.subPages?.[2]?.href,
    title: "Cloud & Hybrid Services",
    imgUrl: "/assets/images/services/cloud.png",
    subText:
      "Avitell utilizes top-notch Project Management methodologies to handle its projects. As a result, you can expect a dynamic, superior, and constantly improving environment.",
    subList: [
      {
        title: "Server Management",
        content:
          "Provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "Monitoring and maintenance of Windows servers.",
          "Regular updates and patch management.",
          "Backup and disaster recovery solutions.",
        ],
        benefits: [
          "Increased uptime and reliability.",
          "Enhanced security and compliance.",
          "Reduced operational costs through efficient management.",
        ],
      },

      {
        title: "Active Directory",
        content:
          "Provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "User account creation and management.",
          "Group policy management.",
          "Security auditing and reporting.",
        ],
        benefits: [
          "Simplified user access management.",
          "Improved security through centralized control.",
          "Enhanced productivity with efficient user provisioning.",
        ],
      },

      {
        title: "Remote Desktop Solutions",
        content:
          "Provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "Remote Desktop Services (RDS) setup and management.",
          "VPN solutions for secure connections.",
          "User training and support.",
        ],
        benefits: [
          "Flexibility for remote work.",
          "Enhanced security for remote access.",
          "Improved collaboration among teams.",
        ],
      },
    ],
    whyContent: {
      title: "Why Choose Us For Your Network Solution Needs?",
      content:
        "Our team of experienced network engineers brings a wealth of knowledge and expertise to every project. \
        We combine cutting-edge technology with a customer-centric approach to deliver tailored network solutions that drive \
        business success. Our team of experienced network engineers brings a wealth of knowledge and expertise to every project. \
        We combine cutting-edge technology with a customer-centric approach to deliver tailored network solutions that drive business success. \
        Our team of experienced network engineers brings a wealth of knowledge and expertise to every project. We combine cutting-edge \
        technology with a customer-centric approach to deliver tailored network solutions that drive business success.",
    },
  },

  // Unified Communications
  {
    id: navlinks[0]?.subPages?.[3]?.href,
    title: "Unified Communications",
    imgUrl: "/assets/images/services/communications.png",
    subText:
      "Avitell utilizes top-notch Project Management methodologies to handle its projects. As a result, you can expect a dynamic, superior, and constantly improving environment.",
    subList: [
      {
        title: "VoIP Systems",
        content:
          "We provide scalable Voice over Internet Protocol (VoIP) systems that offer clear, reliable communication.",
        features: [
          "High-definition voice quality.",
          "Call routing, voicemail-to-email, and call recording.",
          "Integration with existing business applications.",
        ],
        benefits: [
          "Cost savings on phone bills.",
          "Flexibility to scale with your business.",
          "Enhanced mobility for remote workers.",
        ],
      },

      {
        title: "Collaboration Tools",
        content:
          "We implement collaboration tools that facilitate seamless teamwork and communication across departments.",
        features: [
          "Instant messaging, file sharing, and team workspaces.",
          "Integration with project management tools.",
          "Customizable user interfaces.",
        ],
        benefits: [
          "Improved productivity through real-time communication.",
          "Enhanced project management and coordination.",
          "Centralized access to important documents and resources.",
        ],
      },

      {
        title: "Video Solutions",
        content:
          "We offer robust video conferencing solutions that connect teams and clients effortlessly.",
        features: [
          "High-quality video and audio with minimal latency.",
          "Screen sharing, recording, and virtual backgrounds.",
          "Compatibility with various devices and platforms.",
        ],
        benefits: [
          "Foster better relationships with remote teams and clients.",
          "Reduce travel costs and time.",
          "Enable effective virtual meetings and presentations.",
        ],
      },
    ],
    whyContent: {
      title: "Why Choose Us For Your Unified Communications Needs?",
      content:
        "Our team of experienced network engineers combines cutting-edge technology with a customer-centric approach to deliver tailored solutions under Unified Communications. Leveraging robust project management methodologies, we ensure a dynamic and continuously improving environment that meets business needs.\n\n \
We provide scalable systems that enable clear and reliable communication, enhance mobility for remote workers, and integrate seamlessly with existing applications, leading to significant cost savings and flexibility. Our solutions improve productivity through real-time communication, streamline project coordination, and centralize access to essential resources.  \n\n \
Additionally, we offer high-quality conferencing tools that foster better relationships with remote teams, reduce travel costs, and support effective virtual meetings. Together, these solutions drive efficiency, connectivity, and success across your organization",
    },
  },

  // Advanced Security //TODO
  {
    id: navlinks[0]?.subPages?.[4]?.href,
    title: "Advanced Security",
    imgUrl: "/assets/images/services/security.png",
    subText:
      "Avitell utilizes top-notch Project Management methodologies to handle its projects. As a result, you can expect a dynamic, superior, and constantly improving environment.",
    subList: [
      {
        title: "Firewall and VPN",
        content:
          "Provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "Monitoring and maintenance of Windows servers.",
          "Regular updates and patch management.",
          "Backup and disaster recovery solutions.",
        ],
        benefits: [
          "Increased uptime and reliability.",
          "Enhanced security and compliance.",
          "Reduced operational costs through efficient management.",
        ],
      },

      {
        title: "Appilcaiton Visibility Control",
        content:
          "Provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "User account creation and management.",
          "Group policy management.",
          "Security auditing and reporting.",
        ],
        benefits: [
          "Simplified user access management.",
          "Improved security through centralized control.",
          "Enhanced productivity with efficient user provisioning.",
        ],
      },

      {
        title: "Advance Threat Protection",
        content:
          "Provide comprehensive server management solutions, ensuring optimal performance, security, and reliability.",
        features: [
          "Remote Desktop Services (RDS) setup and management.",
          "VPN solutions for secure connections.",
          "User training and support.",
        ],
        benefits: [
          "Flexibility for remote work.",
          "Enhanced security for remote access.",
          "Improved collaboration among teams.",
        ],
      },
    ],
    whyContent: {
      title: "Why Choose Us For Your Advanced Security Needs?",
      content:
        "Our team of experienced network engineers brings a wealth of knowledge and expertise to every project. \
              We combine cutting-edge technology with a customer-centric approach to deliver tailored network solutions that drive \
              business success. Our team of experienced network engineers brings a wealth of knowledge and expertise to every project. \
              We combine cutting-edge technology with a customer-centric approach to deliver tailored network solutions that drive business success. \
              Our team of experienced network engineers brings a wealth of knowledge and expertise to every project. We combine cutting-edge \
              technology with a customer-centric approach to deliver tailored network solutions that drive business success.",
    },
  },
];

export const partnersList = [
  {
    title: "VM Ware",
    imgUrl: "/assets/images/partners/vmware.png",
  },
  {
    title: "Microsoft",
    imgUrl: "/assets/images/partners/microsoft.png",
  },
  {
    title: "Palo Alto Network",
    imgUrl: "/assets/images/partners/paloalto.png",
  },
  {
    title: "Sophos",
    imgUrl: "/assets/images/partners/sophos.png",
  },
  {
    title: "Ruckus",
    imgUrl: "/assets/images/partners/ruckus.png",
  },
  {
    title: "Cisco",
    imgUrl: "/assets/images/partners/cisco.png",
  },
];

export const teamList = [
  {
    title: "Mr. Google",
    portfolio: "CEO",
    imgUrl: "/assets/images/plan-1.png",
  },
  {
    title: "Palo Alto Network",
    portfolio: "COO",
    imgUrl: "/assets/images/plan-2.png",
  },
  {
    title: "Sophos",
    portfolio: "CPO",
    imgUrl: "/assets/images/plan-3.png",
  },
];

export const missionText = (
  <>
    Avitell Technologies aims to provide cutting-edge, scalable, and secure
    information technology solutions for the optimization of the operations and
    productivity of small and medium enterprises to achieve sustainable growth.
    It specializes in cybersecurity, cloud integration, IT infrastructure, and
    data management. These are special services specifically prepared to tackle
    the unique challenges of the dynamic digital landscape. Avitell Technologies
    upholds the principles of integrity, innovation, and excellence in building
    a partnership of trust with the customer. The company is always committed to
    improving its services and leading the industry to drive real value for its
    clients while contributing to their long-term success.
  </>
);

export const visionText = (
  <>
    Our vision is to become a trusted pioneer in innovatory and scalable IT
    solutions that enable SMEs within core sectors. Creating a new benchmark for
    excellence, by leading the way in the progression of security, cloud
    technologies, and IT modernization to help businesses succeed within a
    constantly changing digital world. Creating an environment that fosters
    teamwork, learning, and development to ensure our staff stays at the leading
    edge of technological innovation. Inspiring a legacy with positive change by
    enabling clients to transform industries through a commitment to excellence.
  </>
);

export const aboutBannerContent = {
  title: "About Us",
  subText:
    "Avitell Technologies empowers small and medium-sized enterprises (SMEs) with cutting-edge IT solutions that drive growth, security, and operational excellence. Since 2017, we’ve partnered with businesses across healthcare, finance, retail, and more to modernize IT systems, enhance cloud capabilities, and fortify cybersecurity. Backed by over a decade of industry experience, we deliver scalable, cost-effective solutions that enable businesses to thrive in an ever-evolving digital landscape. Let us handle your IT needs so you can focus on driving your business forward.",
};

export const ourPrcocessContent = {
  title: "Our Process",
  subTitle:
    "Avitell utilizes top-notch Project Management methodologies to handle its projects. As a result, you can expect a dynamic, superior, and constantly improving environment.",
  processList: [
    {
      title: "Plan",
      iconDesktop: (
        <ProcessVector1 width="80" height="80" viewBox="0 0 106 106" />
      ),
      iconMobile: (
        <ProcessVector1 width="40" height="40" viewBox="0 0 106 106" />
      ),
      content: (
        <p>
          Before project execution, it is common to have a preliminary phase of
          discovery and prototyping.
          <br />
          <br />
          The initial steps of a project typically involve defining the scope,
          gathering requirements, establishing an architecture, and developing a
          detailed work breakdown and schedule.",
        </p>
      ),
    },
    {
      title: "Design",
      iconDesktop: (
        <ProcessVector2 width="80" height="80" viewBox="0 0 106 106" />
      ),
      iconMobile: (
        <ProcessVector2 width="40" height="40" viewBox="0 0 106 106" />
      ),
      content: (
        <p>
          Our strategy involves iterating to achieve early learning and ROI by
          conducting research and analysis, creating a detailed design, and
          defining test scenarios.
        </p>
      ),
    },
    {
      title: "Implement",
      iconDesktop: (
        <ProcessVector3 width="90" height="95" viewBox="0 0 120 95" />
      ),
      iconMobile: (
        <ProcessVector3 width="40" height="45" viewBox="0 0 120 95" />
      ),
      content: (
        <ul className=" text-start">
          <li className="list-disc">
            Break down work into multiple iterations of planning, designing, and
            implementing.
          </li>
          <li className="list-disc">
            Carry out engineering tasks and provide a solution.
          </li>
          <li className="list-disc">
            Perform testing to validate the solution.
          </li>
          <li className="list-disc">
            Execute the cutover process and launch the solution.
          </li>
        </ul>
      ),
    },
    {
      title: "Manage",
      iconDesktop: (
        <ProcessVector4 width="80" height="80" viewBox="0 0 106 106" />
      ),
      iconMobile: (
        <ProcessVector4 width="40" height="40" viewBox="0 0 106 106" />
      ),
      content: (
        <p>
          We provide comprehensive system administration, management, and
          optimization services, which include round-the-clock monitoring,
          patching and maintenance, as well as continuous efforts to enhance and
          optimize your systems.
        </p>
      ),
    },
  ],
};

export const contactContent = {
  title: "Schedule a consultation with us",
  subText:
    "Avitell utilizes top-notch Project Management methodologies to handle its projects. As a result, you can expect a dynamic, superior, and constantly improving environment. Avitell utilizes top-notch Project Management methodologies to handle its projects. As a result, you can expect a dynamic, superior, and constantly improving environment.",
  formTitle: "Arrange a complimentary 30-minute consultation.",
  formText:
    "Would you like to schedule a brief conversation to discuss your organization's IT strategy, services, business solutions, compliance concerns, or any other high-priority technology matters? Please feel free to use our calendar to set up a convenient time. We are excited to learn more about your organization, share our approach, and offer our assistance in delivering value to you regularly and promptly. We are committed to supporting you in every way we can.",
  processTitle:
    "How our consultation process works and what can be anticipated from it?",
  process: [
    {
      title: "Strategy Session",
      content:
        "We'll delve into your current configuration and future objectives, guiding you through our IT approach and illustrating how it might be applicable to your situation.",
    },
    {
      title: "Technology Assessment",
      content:
        "Our engineering team will examine your system, evaluate the infrastructure, and identify any security weaknesses to deliver a thorough solution.",
    },
    {
      title: "Solutions Presentation",
      content:
        "We will thoroughly evaluate the assessment and provide recommendations to enhance your surroundings. Upon agreeing to the proposed terms, we will furnish you with a definitive cost and contract indicating your commencement date.",
    },
    {
      title: "Executive Q&A Session",
      content:
        "Your executive team will be given the chance to engage in a discussion with us regarding the presented information, during which we will address and resolve any queries or apprehensions they may have.",
    },
    {
      title: "Kick-Off Meeting",
      content:
        "Avitell will introduce you to your new IT department and provide guidance on how to access support and initiate your first project.",
    },
  ],
};
