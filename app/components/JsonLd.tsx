import React from "react";
import { SITE } from "../lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Dairy", "LocalBusiness"],
    name: SITE.brandName,
    alternateName: ["Ganga Amrit Milk Agency", "गंगा अमृत"],
    legalName: SITE.companyLegalName,
    description:
      "Milk agency and dairy in Chhatarpur, Madhya Pradesh, supplying Gold Full Cream, Double Toned, and Chai Special pasteurized milk. Distributor, dealer and agency enquiries welcome.",
    keywords:
      "milk agency Chhatarpur, milk distributor Chhatarpur, dairy Chhatarpur, doodh agency Chhatarpur, milk supplier Madhya Pradesh",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: "Chhatarpur",
      addressRegion: "Madhya Pradesh",
      postalCode: "471001",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Chhatarpur" },
      { "@type": "State", name: "Madhya Pradesh" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.9178,
      longitude: 79.5941,
    },
    telephone: SITE.phoneTel,
    email: SITE.email,
    openingHours: "Mo-Sa 09:00-18:30",
    priceRange: "₹₹",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}