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
    "Engage in a qualified professional to explore potential solutions that align with both your business objectives and technical specifications.",
};

export const footerContactDetails = {
  phone: "214-713-7194",
  email: "info@avitelltechnologies.com",
  address: "500 N Central Expressway, Suite 500. Plano, Texas 75074",
};

export const footerCTASection = {
  title: "Discover How We Work",
  content:
    "We would be pleased to provide you with further information regarding Avitell Services if you are interested. ",
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
    "At Avitell, we harness the power of advanced project management methodologies to ensure every project is executed with precision and excellence. This approach guarantees a dynamic, high-quality environment that is always evolving to meet your business's needs. With us, you can expect consistent improvement and outstanding results, every time.",
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
    imgUrl: "/assets/images/industries/healthcare.jpeg",
  },
  {
    industry: "Finance",
    title: "Powering Financial Growth with Secure, Scalable IT Solutions",
    content:
      "Avitell Technologies delivers tailored IT solutions to meet the precision, efficiency, and security demands of the finance sector. From scalable infrastructures and real-time data access to advanced cybersecurity, Avitell empowers financial organizations to optimize operations, enhance client experiences, and drive growth. Their solutions ensure compliance with standards like PCI DSS and GDPR, safeguarding sensitive financial data. As a strategic partner, Avitell supports digital transformation by modernizing legacy systems, securing IT frameworks, and integrating next-gen financial technologies for sustainable success in a rapidly evolving industry.",
    imgUrl: "/assets/images/industries/finance.jpeg",
  },
  {
    industry: "Education",
    title:
      "Empowering Education with Scalable IT & Secure Digital Learning Solutions",
    content:
      "Avitell Technologies delivers advanced IT solutions tailored to modern education. By providing scalable infrastructures, seamless connectivity, and secure cloud-based learning platforms, Avitell empowers educational institutions to enhance learning experiences, foster collaboration, and drive operational efficiency. Their advanced cybersecurity solutions protect student data and ensure compliance with regulations like FERPA. As a strategic partner, Avitell supports digital transformation by modernizing legacy systems, integrating next-gen learning technologies, and enabling institutions to thrive in the digital age. ",
    imgUrl: "/assets/images/industries/education.jpeg",
  },
  {
    industry: "Retail",
    title:
      "Driving Retail Innovation with Scalable IT & Cybersecurity Solutions",
    content:
      "Avitell Technologies delivers advanced IT solutions tailored to the fast-paced retail sector. From omnichannel networks and cloud-based inventory management to data-driven decision-making, Avitell empowers retailers to boost efficiency, enhance customer engagement, and achieve long-term growth. With a focus on advanced cybersecurity and PCI DSS compliance, they protect customer data and business operations. As a strategic partner, Avitell supports retail transformation by modernizing IT systems, integrating innovative technologies, and enhancing both digital and in-store experiences",
    imgUrl: "/assets/images/industries/retail.jpeg",
  },
  {
    industry: "Manufacturing",
    title:
      "Powering Smart Manufacturing with Scalable IT & Cybersecurity Solutions",
    content:
      "Avitell Technologies delivers advanced IT solutions tailored to the unique demands of the manufacturing sector. From scalable infrastructures and real-time analytics to robust cybersecurity and regulatory compliance, Avitell empowers manufacturers to optimize processes, boost productivity, and drive sustainable growth. As a strategic partner, they modernize legacy systems, integrate IoT and AI, and support digital transformation to maintain a competitive edge. ",
    imgUrl: "/assets/images/industries/manufacturing.jpeg",
  },
];

export const industriesBannerContent = {
  title: "Specialized IT Solutions That Make a Difference",
  subText:
    "At Avitell Technologies, we provide tailored IT solutions that help grow, organise and protect businesses in strategic industries with very defined industry focus. From the healthcare industry to the finance industry, education, retail and manufacturing, we offer flexible infrastructures combined with cloud integration and advanced security that meet the particular needs of every industry. This makes it possible to enhance the effectiveness of the operations with simplicity of the compliance and Compliancy, as well as to prepare for the digital transformation for increased competitiveness. Therefore, Avitell Technologies is a partner that enables progress to enhance the performance of any organization and create a sustainable digital strategy for the future.",
};

export const industriesPageContent = [
  {
    industry: "Healthcare",
    title: "Transforming Healthcare with Secure, Scalable IT Solutions",
    content: (
      <>
        With the help of the extensive knowledge in healthcare IT and a constant
        emphasis on advancement, Avitell Technologies is able to offer
        sophisticated solutions that meet the specific needs of the healthcare
        sector. We realize the importance of the efficient communication,
        effective flows and high level of security in providing the best patient
        care.
        <br />
        <br />
        Our approach also integrates modern technology and best practices in the
        industry for improving your network performance to make your systems
        strong, flexible and fine-tuned for the round-the-clock operation of
        healthcare facilities. This way, we assist the healthcare organizations
        to make seamless transitions to the cloud or hybrid environments, and
        help them get secure and reliable access to the most important
        information to support better cooperation and quicker decision-making.
        <br />
        <br />
        It is our core value and we embed it in all our activities. Through
        implementing strong cybersecurity measures, we ensure the safety of
        patients’ information and assist you in meeting such compliance
        standards as HIPAA, so that you can concentrate on your primary task of
        providing excellent healthcare services.
        <br />
        <br />
        At Avitell Technologies, we are not only service providers, we are your
        partners in the process of achieving the healthcare of the future
        powered by technology. If you wish to enhance your IT systems or design
        a new advanced digital system, our experts will guide you throughout the
        process.
      </>
    ),
    imgUrl: "/assets/images/industries/healthcare.jpeg",
  },
  {
    industry: "Finance",
    title: "Powering Financial Growth with Secure, Scalable IT Solutions",
    content: (
      <>
        Avitell Technologies is a company that offers financial IT solutions and
        is highly vested in providing innovative services to meet the needs of
        the financial industry. In an industry where accuracy and fast results
        are crucial, we assist organizations to improve on their performance,
        offer a better experience to their clients and adapt to changes through
        the use of digital technologies.
        <br />
        <br />
        We make your IT structure strong, flexible and capable of meeting your
        goals. From improving the network efficiency to implementing cloud and
        hybrid solutions, our services form foundation the for smooth and
        effective financial management, which offers real-time data and
        integration of various departments and systems.
        <br />
        <br />
        Security of data is our priority and we pay much attention to it in our
        work. Our state-of-the-art cybersecurity measures are put in place to
        safeguard high-risk financial information while also meeting the most
        stringent industry regulations including the PCI DSS and the GDPR. This
        is why we focus on security to ensure that your clients are assured of
        the security of their information.
        <br />
        <br />
        At Avitell Technologies, it is not just a question of offering a
        service; it is a question of being your preferred partner in the digital
        transformation. Whether it is to evolve and modernize systems, to secure
        the framework of your IT system or to integrate new technologies, we
        strive to support you in the innovation, development, and sustainability
        of your business.
      </>
    ),
    imgUrl: "/assets/images/industries/finance.jpeg",
  },
  {
    industry: "Education",
    title:
      "Empowering Education with Scalable IT & Secure Digital Learning Solutions",
    content: (
      <>
        Avitell Technologies is focused on delivering advanced IT solutions that
        support the advancement of the education system and help to meet the
        challenges of the modern educational environment. In the modern world
        where technology plays an essential role in teaching, collaboration, and
        research, we help the educational institutions to improve performance,
        increase effectiveness of learning, and facilitate interactions between
        students, educators, and administrative staff.
        <br />
        <br />
        We offer the design and implementation of efficient and robust IT
        structures that are adaptable to the specific nature of schools,
        universities and training institutions. From highly effective networking
        solutions that enhance data transmission to the most effective cloud and
        hybrid solutions, we provide real time learning, enhanced accessibility
        and effective collaboration.
        <br />
        <br />
        Understanding the need for protection of sensitive information, we offer
        robust cybersecurity solutions for student records and other
        institutional information to help fight the increasing threats. Our
        services also ensure that the institutions adhere to education related
        laws such as the FERPA and ensure that the integrity of the institutions
        is not compromised.
        <br />
        <br />
        At Avitell Technologies, we don’t just offer services and walk away; we
        are your partner in your digital change process. Whether it is the need
        to upgrade old systems, creating secure and effective digital learning
        platforms or implementing advanced technologies in education
        institutions, we are here to offer support.
      </>
    ),
    imgUrl: "/assets/images/industries/education.jpeg",
  },
  {
    industry: "Retail",
    title:
      "Driving Retail Innovation with Scalable IT & Cybersecurity Solutions",
    content: (
      <>
        Avitell Technologies is a premier provider of state-of-the-art IT
        solutions for the retail industry and provides premium services that
        cater to the current needs of the retail industry. In an industry where
        customer satisfaction, productivity and data protection are the key
        factors to success, we assist the retailers to enhance their business,
        create better customer interactions and sustainable development.
        <br />
        <br />
        Our specialization is built on creating robust and efficient IT
        structures that address the needs of the retail industry that operates
        in the conditions of high dynamics and constant innovations. From stable
        networks that facilitate effective omnichannel strategies to the
        efficient and flexible cloud and hybrid solutions that optimize
        inventory and support data-oriented decisions, we provide the retailers
        with the tools they require to thrive in the current market.
        <br />
        <br />
        Avitell Technologies has the security of data as one of its core values.
        We offer high level of cybersecurity services that ensure the privacy of
        the customers’ data and prevention against the increasing risks. The
        services also ensure that the industry standards such as the PCI DSS are
        met so that retailers are able to build and maintain the trust and their
        brand image.
        <br />
        <br />
        At Avitell Technologies, we go beyond being a service provider to being
        your partner in the pursuit of retail revolution. In pursuing such
        objectives as the improvement of IT systems, integration of new
        technologies, improvement of the digital and physical interactions with
        customers, we are ready to contribute to your business’s growth within
        the new generation of retail.
      </>
    ),
    imgUrl: "/assets/images/industries/retail.jpeg",
  },
  {
    industry: "Manufacturing",
    title:
      "Powering Smart Manufacturing with Scalable IT & Cybersecurity Solutions",
    content: (
      <>
        Avitell Technologies is a top IT solutions company that delivers
        innovative and comprehensive IT solutions for the manufacturing industry
        to address the complexities of modern manufacturing environments. In an
        industry which demands effectiveness, flexibility, and protection of the
        information, we enable manufacturers to improve their activities,
        increase output and grow sustainably.
        <br />
        <br />
        We offer professional services in the design and deployment of robust
        and flexible IT structures that address the peculiar needs of
        manufacturing plants. From highly effective networks for linking
        different production facilities to the efficient and flexible cloud and
        hybrid systems for managing the supply chain, production, and real-time
        analysis of data, our solutions help manufacturers to keep up with the
        changes and gain the edge over the competitors.
        <br />
        <br />
        Manufacturing plants cannot afford to compromise on the security of
        their data and compliance with various regulations and that is why
        Avitell Technologies offers high-tech cybersecurity solutions for
        protection of operational data, intellectual property, and supply chain
        from increasing risks. Our knowledge and experience help manufacturers
        meet industry standards and protect their assets while also meeting the
        set legal requirements.
        <br />
        <br />
        At Avitell Technologies, it is not just a simple provision of services
        that we offer to our clients, we are their partners in the process of
        transformation of the manufacturing industry. In the areas for example,
        upgrading the old systems, improving the production processes or
        adopting new technologies like IoT and AI, we are ready to assist you to
        enhance your business and achieve the sustainability
      </>
    ),
    imgUrl: "/assets/images/industries/manufacturing.jpeg",
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
  // Network Solutions
  {
    id: navlinks[0]?.subPages?.[0]?.href,
    height: "1300px",
    title: "Enterprise Network Solutions",
    imgUrl: "/assets/images/services/network.jpeg",
    subText:
      "The IT network is the foundation of all business operations, including lead conversion, invoice generation, phone communication, and file sharing. By adopting a comprehensive enterprise networking strategy that encompasses the data center core, cloud, and edge, businesses can experience a profound transformation from within. Discover how this approach can benefit your organization.",
    subList: [
      {
        title: "Route and switch",
        content:
          "To establish a unified LAN and WAN technology environment, it is crucial to have routers and switches as the backbone of your network. Switches are responsible for connecting devices within a network, while routers enable connection between multiple networks within your infrastructure. Simply put, these networking devices serve as the fundamental building blocks of a robust and reliable network infrastructure.",
        features: [
          "High-Performance Data Routing",
          "Advanced Traffic Management",
          "Scalability",
          "Enhanced Security",
          "Redundancy and Failover",
          "Seamless Integration",
          "Centralized Management",
        ],
        benefits: [
          "Optimized routing and switching minimize delays, providing faster data transfer for applications and services.",
          "Reliable connectivity ensures employees can collaborate, communicate, and work without interruption.",
          "Efficient traffic management reduces bandwidth costs and hardware investment over time.",
          "Ensures smooth performance for voice, video, and data applications, improving customer and employee satisfaction.",
          "Protects sensitive data and systems from external and internal threats, safeguarding business continuity.",
          "Scalable solutions allow businesses to grow and adapt to new technologies without costly overhauls.",
          "Redundancy and failover capabilities ensure critical systems remain operational, minimizing revenue loss.",
          "Centralized tools save IT teams time and effort, allowing them to focus on strategic projects rather than daily troubleshooting.",
        ],
      },

      {
        title: "Wireless Networking",
        content:
          "Wireless networks offer employees the flexibility to work without being restricted to their desks, providing convenience. In today's world, where a mobile workforce heavily relies on laptops, tablets, and smartphones, wireless networking is not just a luxury, but a necessity.",
        features: [
          "High-Speed Connectivity",
          "Scalability",
          "Advanced Security Protocols",
          "Centralized Management",
          "IoT Device Support",
          "Guest Access and Network Segmentation",
          "Quality of Service (QoS)",
        ],
        benefits: [
          "Enhanced Mobility and Productivity",
          "Cost-Effective Deployment",
          "Improved User Experience",
          "Future-Proof Scalability",
          "Stronger Security Measures",
          "Centralized Management for Efficiency",
          "Support for Flexible Work Environments",
          "Competitive Advantage",
        ],
      },

      {
        title: "Software-Defined WAN",
        content:
          "SD-WAN technology empowers organizations to manage their WAN infrastructure using an extra layer of configuration that includes self-healing capabilities to detect and resolve traffic congestion. This approach not only helps to optimize resource utilization but also reduces operational costs.",
        features: [
          "Dynamic Path Selection",
          "Centralized Management",
          "Application Awareness",
          "Enhanced Security",
          "Multi-Cloud Connectivity",
          "Scalability and Flexibility",
          "Cost Efficiency",
        ],
        benefits: [
          "Improved Application Performance",
          "Cost Savings",
          "Increased Agility",
          "Enhanced Security",
          "Reliable Multi-Cloud Access",
          "Simplified Management",
          "Future-Proof Networking",
        ],
      },
    ],
    whyContent: {
      title: "Why Choose Us for Your Enterprise Network Solutions Needs?",
      content:
        "Your company requires an improved networking infrastructure. Many partners tend to stop at the point of connecting you and establishing a basic framework. However, to improve, it is necessary to surpass the fundamental LAN and WAN connectivity. As technology and security evolve quickly, networks can become outdated sooner than expected. Settling for mediocre or good enough can leave you vulnerable to problems such as congestion, underperformance, data loss, and security risks caused by inadequate integration and visibility. Our team of experts will customize our discussion to your unique needs and provide precise execution to ensure that your project is successfully completed. We can help you determine the optimal size and configuration of your network and implement it in a way that meets the specific requirements of your organization.",
    },
  },

  // Windows Services
  {
    id: navlinks[0]?.subPages?.[1]?.href,
    height: "900px",
    title: "Windows Services",
    imgUrl: "/assets/images/services/windows.jpeg",
    subText:
      "Power your business with the reliability and efficiency of Windows Services. These essential background processes keep your operations running smoothly managing security, automating updates, supporting applications, and ensuring system stability. Whether you’re handling large-scale data, critical business apps, or everyday workflows, optimized Windows Services deliver the performance, security, and scalability your organization needs to thrive. Discover how we can help you unlock their full potential.",
    subList: [
      {
        title: "Windows Server Management and Support",
        content:
          "Windows Servers are the backbone of many business infrastructures, and proper management ensures stability, security, and performance. Regular maintenance and proactive management of these servers are crucial to keeping operations running smoothly.",
        features: [
          "Server Configuration and Optimization",
          "Virtualization Support",
          "Performance Tuning",
          "High Availability and Load Balancing",
          "Cost Management and Resource Optimization",
        ],
        benefits: [
          "System monitoring and optimization to ensure servers run efficiently.",
          "Patch management and security updates to protect against vulnerabilities.",
          "Disaster recovery planning to minimize downtime in case of failure.",
          "Backup solutions to safeguard business-critical data.",
          "24/7 support to handle any issues that arise, ensuring minimal disruption.",
        ],
      },

      {
        title: "Windows Desktop Support and Management",
        content:
          "The devices that are used with Windows are very important in the daily work of the company. Managing such devices effectively, securing them and making sure that they are functioning at their best enables employees to work efficiently with utmost convenience and without much interference from the IT department.",
        features: [
          "Software Installation and Updates",
          "User Account Management",
          "Remote Support and Troubleshooting",
        ],
        benefits: [
          "Proactive monitoring and performance optimization of Windows desktops.",
          "Security enforcement with anti-virus, firewall, and malware protection.",
          "Software deployment and patch management to keep systems up-to-date.",
          "Remote desktop support for quick troubleshooting and resolution of issues, no matter where your team is located.",
          "Customization and configuration management to align with your business’s specific needs.",
        ],
      },

      {
        title: "Windows Active Directory (AD) Management",
        content:
          "Active Directory is very important as it is used for user authentication, group policies and access control.  Having an efficient AD structure helps in proper user authentication and access to resources besides supporting security and compliance standards.",
        features: [
          "User and Group Management",
          "Access Control and Permissions Management",
          "Group Policy Management",
          "Monitoring and Auditing",
        ],
        benefits: [
          "Centralized user management for easier control over user accounts, groups, and permissions.",
          "Group Policy configuration to enforce security policies and settings across the network.",
          "Directory synchronization with cloud services like Microsoft 365 for hybrid environments.",
          "Secure remote access and single sign-on capabilities, improving both user experience and security.",
          "Audit and compliance support for tracking user activities and ensuring regulatory compliance.",
        ],
      },
    ],
    whyContent: {
      title: "Why Choose Us For Your Windows Service Needs?",
      content:
        "At Avitell Technologies, we provide complete, reliable and secure Windows services that are designed to meet the specific requirements of your business. With the management of your Windows servers, desktops and Active Directory we guarantee efficient system functioning, high performance, and increased security of your IT systems. Our preventive approach to system monitoring, software updates, and user access control helps you to prevent potential problems before they occur while our 24/7 support ensures that you get the help you need anytime you need it. Let us help you achieve best in class Windows services that match your business growth, safeguard your valuable information and increase efficiency.",
    },
  },

  // Cloud & Hybrid Services
  {
    id: navlinks[0]?.subPages?.[2]?.href,
    height: "900px",
    title: "Cloud & Hybrid Services",
    imgUrl: "/assets/images/services/cloud.jpeg",
    subText:
      "Achieve your business’s greatest potential with our Cloud & Hybrid Services which provide the adaptability, security and manageability that you require to grow. Whether you wish to optimize processes, improve collaboration or protect your business from disruption, we have the solutions that can take you to the next level in today’s environment. ",
    subList: [
      {
        title: "Comprehensive Backup and Disaster Recovery",
        content:
          "Every business is at risk of losing data, getting hacked by ransomware or facing downtime. Having a reliable backup and disaster recovery solution in place is a way of protecting the business from such threats. ",
        features: ["Backup", "Disaster Recovery", "Security", "Management"],
        benefits: [
          "Regular, automated backups for critical workloads.",
          "Rapid recovery options to minimize downtime.",
          "Compliance with data retention regulations.",
          "Hybrid options: on-premises backup with replication to the cloud for redundancy.",
        ],
      },

      {
        title: "Scalable and Secure Infrastructure Management",
        content:
          "The hybrid model involves integration of on-premise and cloud-based solutions which can be intricate to manage. Customers require efficient infrastructure to manage the costs and ensure the security of the operations.",
        features: [
          "Infrastructure Scalability",
          "Security and Compliance",
          "Performance Optimization",
          "Integration and Automation",
          "High Availability and Redundancy",
        ],
        benefits: [
          "Proactive monitoring and management of workloads in both on-prem and cloud environments.",
          "Autoscaling capabilities to handle varying workloads.",
          "Security services, such as identity and access management (IAM), encryption, and advanced threat protection.",
          "Cloud cost optimization and resource utilization analysis.",
        ],
      },

      {
        title: "End-to-End Productivity and Collaboration Tools Integration",
        content:
          "It is essential for businesses to have efficient communication and collaboration tools in order to enhance the productivity of remote workers. ",
        features: [
          "Productivity Tools Integration",
          "Advanced Communication Tools",
          "Secure Collaboration",
          "Hybrid and Remote Work Support",
          "Integration with Business Applications",
          "Automation and Workflow Enhancements",
        ],
        benefits: [
          "Deployment and support for Microsoft 365 or Google Workspace for collaboration and productivity.",
          "Unified communication tools like Microsoft Teams or Zoom.",
          "Integration with existing business applications (CRM, ERP, etc.).",
          "Data security and compliance policies for sensitive communications and documents.",
        ],
      },
    ],
    whyContent: {
      title: "Why Choose Us for Your Cloud & Hybrid Services?",
      content:
        "At Avitell Technologies, we offer customized cloud and hybrid solutions that help you to sustain your business with the best backup and disaster recovery services that reduce time loss and safeguard your essential information. The solutions we offer are comprehensive and flexible to help you meet business needs and minimize downtime in case of an incident. Our secure and flexible infrastructure management enhances performance, is cost effective and also meets all the compliance requirements while providing your employees with effective productivity tools such as Microsoft 365 and collaboration tools. We have years of experience in IT and have successfully completed many projects, we offer comprehensive services, management, and monitoring as well as custom solutions that are tailored to your business needs. Join us and make your IT environment future-proof, secure, and high-performing. ",
    },
  },

  // Unified Communications
  {
    id: navlinks[0]?.subPages?.[3]?.href,
    height: "700px",
    title: "Unified Communications",
    imgUrl: "/assets/images/services/communications.jpeg",
    subText:
      "Whether you're working in the office, remotely, or on the go, our Unified Communications tools ensure that you can communicate efficiently and securely. From enhancing team collaboration to improving customer service, we provide the technology you need to keep your business connected, agile, and ahead of the competition. Choose us for a future-proof, all-in-one solution that simplifies your communication and elevates your business.",
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
        "At Avitell Technologies we offer an all-inclusive solution that integrates all your communication requirements making sure that your team is always connected and effective. Our VoIP services, video conferencing and instant messaging tools are fully integrated to provide high quality, reliable communication with real time collaboration capabilities. With such flexible and affordable options, we assist your company to change with the market and expand as a firm, enhancing the effectiveness of operations.",
    },
  },

  // Advanced Security
  {
    id: navlinks[0]?.subPages?.[4]?.href,
    height: "900px",
    title: "Advanced Security",
    imgUrl: "/assets/images/services/security.jpeg",
    subText:
      "In the modern world where technology is rapidly expanding, cyber threats are also increasing at an unprecedented rate. At Avitell Technologies, we offer advanced security services to meet the latest threats and protect your data, applications, and networks. With threat detection, monitoring, and encryption, we guarantee the security of your ordinary business threat from management, all using possible proactive threats. threat We detection, offer real-time you monitoring, comprehensive and security state-of-the-art solutions that go a mile beyond just encryption. Our approach to security is comprehensive and strategic; we employ the latest technologies and the expertise of our security professionals to manage and mitigate all your security risks.",
    subList: [
      {
        title: "Advanced Endpoint Protection",
        content:
          "As workforces become more geographically dispersed and work from remote locations, the endpoints which include the laptops, smartphones, and workstations are at high risks of getting hacked. This is where advanced endpoint protection comes in handy to ensure that these devices are protected from threats that may include malware, ransomware, and other forms of attacks.",
        features: [
          "Real-Time Malware Detection and Prevention ",
          "Device Control and Management",
          "Application Control and Whitelisting",
          "Endpoint Detection and Response (EDR) Integration",
        ],
        benefits: [
          "Real-time malware scanning and threat prevention on all endpoints.",
          "Centralized management of endpoint security across the organization.",
          "Protection for remote and hybrid workforces with cloud-based security solutions.",
          "Automated updates to defend against new and emerging threats.",
        ],
      },

      {
        title: "Managed Threat Detection and Response",
        content:
          "The threats in cyberspace are now complex and advanced, thus requiring a proactive stance.  MDR offers round the clock monitoring, threat detection, and incident response services which help in containing the damage from threats at all times.",
        features: [
          "Threat Intelligence Integration",
          "Managed Detection Technology",
          "Continuous Vulnerability Assessment",
          "Proactive Threat Hunting",
          "Incident Response and Remediation",
        ],
        benefits: [
          "Continuous monitoring of network traffic and endpoints.",
          "Rapid detection and resolution of security incidents to prevent data breaches.",
          "Expert remediation and support from a dedicated security team.",
        ],
      },

      {
        title: "Firewall and VPN Protection",
        content:
          "A strong firewall and secure VPN are essential for safeguarding your business’s network from unauthorized access and ensuring secure communication across remote locations. These solutions prevent external threats from infiltrating your network while enabling encrypted, secure connections for remote employees.",
        features: [
          "Combined Firewall and VPN Integration",
          "Firewall Protection",
          "VPN Protection",
        ],
        benefits: [
          "Firewall Protection: Safeguard against unauthorized network access, malware, and potential cyber threats.",
          "VPN (Virtual Private Network): Secure remote access for employees, ensuring encrypted data transmission and protection from cyber threats in transit.",
          "Network Segmentation: Isolate sensitive data and systems to limit the impact of potential breaches.",
          "Real-Time Traffic Filtering: Block malicious traffic before it can enter your network.",
        ],
      },
    ],
    whyContent: {
      title: "Why Choose Us for Your Advanced Security Needs?",
      content:
        "At Avitell technologies, we offer an all-inclusive security approach to meet the advanced level of threats that are present today and the emerging ones in the future. The security solutions provided are by based us on the concept of proactive defense with the aim of protecting your business’s vital assets at all times irrespective of the environment being cloud, on-premise or a hybrid model. Using threat intelligence, integration, and monitoring, we help you manage risk, meet compliance requirements, and protect information. Let us be your security solution by giving you the protection you need and the freedom to focus on other important aspects of your business. ",
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
    "At Avitell Technologies Solutions, we specialize in delivering cutting-edge technology solutions tailored to your unique business needs. Whether you're looking to optimize your operations, enhance your IT infrastructure, or explore new tech innovations, our experts are here to guide you every step of the way.",
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
