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
          <h1 className="text-4xl text-black font-medium">Privacy Policy</h1>

          <p>
            At {websiteName}, your privacy is important to us. This Privacy
            Policy outlines how we collect, use, and protect your information
            when you visit our website.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            1. Information We Collect
          </h3>

          <p className="text-base md:text-sm">
            We may collect the following types of information when you visit our
            site:
          </p>
          <ol
            type="a"
            className="ml-6 text-base md:text-sm list-inside gap-4 flex flex-col"
          >
            <li>
              <h6 className="text-base font-medium">a. Personal Information</h6>
              <ul className="ml-4 text-base md:text-sm list-disc list-inside">
                <li>
                  Name, email address, phone number, or other details you
                  voluntarily provide through forms or contact submissions.
                </li>
              </ul>
            </li>
            <li>
              <h6 className="text-base font-medium">
                b. Non-Personal Information
              </h6>
              <ul className="ml-4 text-base md:text-sm list-disc list-inside">
                <li>
                  {" "}
                  • Browser type, operating system, IP address, and other
                  technical details collected automatically to enhance your user
                  experience.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        {/* How We Use Your Information */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            2. How We Use Your Information
          </h3>
          <p className="text-base md:text-sm">
            We use the information collected for the following purposes:
          </p>
          <ul className="text-base md:text-sm list-disc list-inside">
            <li>To respond to inquiries or provide customer support.</li>
            <li>To improve our website and personalize user experience.</li>
            <li>
              To send periodic emails or updates if you opt-in to receive
              communications.
            </li>
            <li>To ensure the security and functionality of the website.</li>
          </ul>
        </div>

        {/* Cookies and Tracking Technologies */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            3. Cookies and Tracking Technologies
          </h3>
          <p className="text-base md:text-sm">
            We use cookies and similar tracking technologies to enhance your
            browsing experience. These help us:
          </p>
          <ul className="text-base md:text-sm list-disc list-inside">
            <li>Understand website traffic and user behavior.</li>
            <li>Remember your preferences for future visits.</li>
          </ul>
          <p className="text-base md:text-sm">
            You can choose to disable cookies through your browser settings, but
            this may limit your experience on the website.
          </p>
        </div>

        {/*  Third-Party Services */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            4. Third-Party Services
          </h3>
          <p className="text-base md:text-sm">
            We may use third-party services for analytics, such as Google
            Analytics, to understand user behavior. These third-party providers
            have their own privacy policies, and we encourage you to review
            them.
          </p>
          <p className="text-base md:text-sm">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your explicit consent, except
            as required by law.
          </p>
        </div>

        {/* Data Security */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">5. Data Security</h3>
          <p className="text-base md:text-sm">
            We take reasonable measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the internet is 100% secure.
          </p>
        </div>

        {/* Your Rights */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">6. Your Rights</h3>
          <p className="text-base md:text-sm">You have the right to:</p>
          <ul className="text-base md:text-sm list-disc list-inside">
            <li>
              Access and review the personal information we have about you.
            </li>
            <li>Request corrections to inaccurate information.</li>
            <li>
              Request the deletion of your personal data, subject to legal or
              contractual obligations.
            </li>
          </ul>
        </div>

        {/* Children’s Privacy */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            7. Children’s Privacy
          </h3>
          <p className="text-base md:text-sm">
            Our website is not intended for children under the age of 13. We do
            not knowingly collect personal information from children. If we
            become aware that we have collected information from a child under
            13, we will promptly delete it.
          </p>
        </div>

        {/* Changes to This Policy */}
        <div className="flex flex-col gap-3 pt-8 border-t-[1px] border-neutral-200">
          <h3 className="text-xl text-black font-medium">
            8. Changes to This Policy
          </h3>
          <p className="text-base md:text-sm">
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be posted on this page, with the updated date
            indicated below.
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
