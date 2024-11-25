import Link from "next/link";
import React from "react";

type Props = {};

export default function Section({}: Props) {
  const websiteName = "Avitell Technologies website";
  const websiteState = "United States of America";

  return (
    <div className="bg-white">
      <div className="relative w-full flex flex-col gap-8 max-w-[1200px] xl:mx-auto py-24 md:py-36 px-6 md:px-24 lg:px-36">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-black font-medium">Terms of Service</h1>

          <p>
            Welcome to the {websiteName}! By accessing or using our website, you
            agree to comply with and be bound by the following terms of service.
            Please read them carefully.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            1. Acceptance of Terms
          </h3>

          <p className="text-base md:text-sm">
            By using this website, you acknowledge that you have read,
            understood, and agree to be bound by these terms. If you do not
            agree, you are prohibited from using this site.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            2. Changes to Terms
          </h3>

          <p className="text-base md:text-sm">
            We reserve the right to update or modify these terms at any time
            without prior notice. Your continued use of the website after
            changes are made indicates your acceptance of the revised terms.
          </p>
        </div>

        {/* Use of the Website */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            3. Use of the Website
          </h3>
          <p className="text-base md:text-sm">
            You agree to use this website only for lawful purposes and in a
            manner that does not infringe on the rights of others. Prohibited
            activities include, but are not limited to:
          </p>
          <ul className="text-base md:text-sm list-disc list-inside">
            <li>Unauthorized access to our systems or services.</li>
            <li>Distribution of harmful or malicious software.</li>
            <li>
              Posting or transmitting illegal, offensive, or inappropriate
              content.
            </li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            4. Intellectual Property
          </h3>
          <p className="text-base md:text-sm">
            All content, including text, images, logos, and graphics, is the
            property of {websiteName} and is protected by copyright laws. You
            may not reproduce, distribute, or modify any content without our
            express written consent.
          </p>
        </div>

        {/* Third-Party Links */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            5. Third-Party Links
          </h3>
          <p className="text-base md:text-sm">
            Our website may include links to third-party websites for your
            convenience. We are not responsible for the content, accuracy, or
            practices of these external sites. Accessing them is at your own
            risk.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            6. Limitation of Liability
          </h3>
          <p className="text-base md:text-sm">
            We strive to provide accurate and reliable information, but we do
            not guarantee that the content is error-free or up to date.{" "}
            {websiteName} will not be liable for any damages resulting from the
            use or inability to use the site.
          </p>
        </div>

        {/* Privacy */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">7. Privacy</h3>
          <p className="text-base md:text-sm">
            Your use of this website is also governed by our{" "}
            <Link className="underline" href={"/privacy"} passHref>
              Privacy Policy
            </Link>
            . By using the site, you agree to the collection and use of your
            information as described in the policy.
          </p>
        </div>

        {/* Termination */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">8. Termination</h3>
          <p className="text-base md:text-sm">
            We reserve the right to terminate or restrict access to the website
            for any user who violates these terms or engages in harmful
            activities.
          </p>
        </div>

        {/* Governing Law */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">9. Governing Law</h3>
          <p className="text-base md:text-sm">
            These terms are governed by and construed in accordance with the
            laws of {websiteState}. Any disputes arising will be subject to the
            exclusive jurisdiction of the courts of {websiteState}.
          </p>
        </div>

        {/* Last updated */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <p className="text-base md:text-sm">
            <span className="font-bold">Last updated: </span>
            November 25, 2024
          </p>
        </div>
      </div>
    </div>
  );
}
