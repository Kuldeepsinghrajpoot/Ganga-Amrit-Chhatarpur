"use client";

import React from "react";
import { FileText } from "lucide-react";
import LegalPage from "../components/LegalPage";
import { SITE } from "../lib/site";

export default function TermsClient() {
  return (
    <LegalPage
      icon={FileText}
      title="Terms & Conditions"
      subtitle={`The terms that govern your use of the ${SITE.brandName} website and our products.`}
      updated="September 2026"
      sections={[
        {
          heading: "1. Acceptance of Terms",
          body: (
            <p>
              By accessing or using this website, you agree to be bound by these Terms & Conditions.
              If you do not agree with any part of these terms, please do not use this site.
            </p>
          ),
        },
        {
          heading: "2. About Us",
          body: (
            <p>
              This website is operated by {SITE.companyLegalName}, located at {SITE.address.full}.
              All references to &quot;we&quot;, &quot;us&quot; or &quot;{SITE.brandName}&quot; refer to this entity.
            </p>
          ),
        },
        {
          heading: "3. Products & Availability",
          body: (
            <p>
              Product images, packaging and descriptions on this site are for informational purposes
              and may vary slightly from the actual product due to ongoing improvements. Availability
              of specific SKUs may vary by region and distributor.
            </p>
          ),
        },
        {
          heading: "4. Orders & B2B Inquiries",
          body: (
            <p>
              Inquiries submitted through our contact form or WhatsApp are not binding purchase orders.
              All bulk, distributor and private-label arrangements are subject to a separate written
              agreement between {SITE.brandName} and the concerned party.
            </p>
          ),
        },
        {
          heading: "5. Intellectual Property",
          body: (
            <p>
              The {SITE.brandName} name, logo, product packaging designs and all content on this
              website are the property of {SITE.companyLegalName} and may not be reproduced without
              prior written consent.
            </p>
          ),
        },
        {
          heading: "6. Limitation of Liability",
          body: (
            <p>
              While we take every care to keep information on this site accurate, we make no
              warranties about the completeness or accuracy of the content and are not liable for
              any loss arising from its use.
            </p>
          ),
        },
        {
          heading: "7. Contact",
          body: (
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${SITE.email}`} className="text-orange-600 font-semibold hover:underline">
                {SITE.email}
              </a>{" "}
              or {SITE.phoneDisplay}.
            </p>
          ),
        },
      ]}
    />
  );
}
