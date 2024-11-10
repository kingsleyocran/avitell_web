import React from "react";
import Head from "next/head";
import favicon from "../../../public/favicon/favicon.ico";

type Props = {
  title: string;
  jsonLd: any;
  metaDataTag: any;
};

function CustomHead({ title, jsonLd, metaDataTag }: Props) {
  return (
    <Head>
      
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="apple-mobile-web-app-title" content="Boxplay Ventures" />
      <meta name="application-name" content="Boxplay Ventures" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffc40d" />


      {/* Link Tags */}
      <link rel="canonical" href="https://dennissnellenberg.com"></link>
      <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      <link
        rel="alternate"
        type="application/rss+xml"
        href="https://dminhvu.com/rss.xml"
      />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      {/* add apple-touch-icon-72x72.png, apple-touch-icon-76x76.png, apple-touch-icon-114x114.png, apple-touch-icon-120x120.png, apple-touch-icon-144x144.png, apple-touch-icon-152x152.png, apple-touch-icon-180x180.png */}
      <link
        rel="icon"
        type="image/png"
        href="/favicon-16x16.png"
        sizes="16x16"
      />

      {/* <title>Code by CodeBeast - {title}</title> */}
      <meta
        name="description"
        content="Learn how to optimize your Next.js website for SEO by following this complete checklist."
      />
      <meta
        property="title"
        content="Dennis Snellenberg • Freelance Designer &amp; Developer"
      />
      <meta
        name="keywords"
        content="nextjs seo complete checklist, nextjs seo tutorial"
      />
      <meta property="robots" content="CodeBeast" />
      <meta property="robots" content="CodeBeast" />

      {/* Robot Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* OpenGraph Tags */}
      <meta
        property="og:title"
        content="Dennis Snellenberg • Freelance Designer &amp; Developer"
      />
      <meta
        property="og:description"
        content="Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis"
      />
      <meta
        property="og:image"
        content="https://ik.imagekit.io/dminhvu/assets/nextjs-seo/thumbnail.png?tr=f-png"
      />
      <meta property="og:image:alt" content="Next.js SEO" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Dennis Snellenberg" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dminhvu.com/nextjs-seo" />

      {/* OpenGraph Article TAGS */}
      <meta
        property="article:published_time"
        content="2024-01-11T11:35:00+07:00"
      />
      <meta
        property="article:modified_time"
        content="2024-01-11T11:35:00+07:00"
      />
      <meta
        property="article:author"
        content="https://www.linkedin.com/in/codebycodebeast"
      />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@codebycodebeast" />
      <meta name="twitter:creator" content="@codebycodebeast" />
      <meta
        name="twitter:title"
        content="Next.js SEO: The Complete Checklist to Boost Your Site Ranking"
      />
      <meta
        name="twitter:description"
        content="Learn how to optimize your Next.js website for SEO by following this complete checklist."
      />
      <meta
        name="twitter:image"
        content="https://ik.imagekit.io/dminhvu/assets/nextjs-seo/thumbnail.png?tr=f-png"
      />

      {/* Twitter Tags */}
      <meta name="google" content="notranslate" />

      <div>
        {/* other parts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </Head>
  );
}

export default CustomHead;
