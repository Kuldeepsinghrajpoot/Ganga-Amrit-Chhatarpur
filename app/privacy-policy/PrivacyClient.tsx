"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import LegalPage from "../components/LegalPage";
import { SITE } from "../lib/site";

export default function PrivacyClient() {
  return (
    <LegalPage
      icon={ShieldCheck}
      title="Privacy Policy"
      subtitle="How we collect, use, and protect the information you share with us."
      updated="September 2026"
      sections={[
        {
          heading: "1. Information We Collect",
          body: (
            <p>
              When you submit our contact form, we collect your name, email address, phone number,
              address and any message you provide. We do not collect payment information through
              this website.
            </p>
          ),
        },
        {
          heading: "2. How We Use Your Information",
          body: (
            <p>
              Information submitted is used only to respond to your inquiry - for example, to discuss
              distributorship, bulk supply, or private-label opportunities. We do not sell or rent
              your personal information to third parties.
            </p>
          ),
        },
        {
          heading: "3. WhatsApp & Phone Contact",
          body: (
            <p>
              If you contact us via WhatsApp or phone, the same principle applies - we use the
              conversation only to address your query and do not share it outside {SITE.brandName}.
            </p>
          ),
        },
        {
          heading: "4. Cookies",
          body: (
            <p>
              This site may use basic, non-invasive cookies to remember preferences and improve
              performance. No third-party advertising cookies are used.
            </p>
          ),
        },
        {
          heading: "5. Data Security",
          body: (
            <p>
              We take reasonable technical measures to protect the information you share with us
              against unauthorized access or disclosure.
            </p>
          ),
        },
        {
          heading: "6. Your Rights",
          body: (
            <p>
              You may request access to, correction of, or deletion of your personal information at
              any time by writing to{" "}
              <a href={`mailto:${SITE.email}`} className="text-orange-600 font-semibold hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          ),
        },
        {
          heading: "7. Changes to this Policy",
          body: (
            <p>
              We may update this policy from time to time. Continued use of the site after changes
              indicates acceptance of the revised policy.
            </p>
          ),
        },
      ]}
    />
  );
}
