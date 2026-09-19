import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us - Milk Agency & Distributor Enquiries, Chhatarpur",
  description:
    "Get in touch with Ganga Amrit for distributorship, bulk supply, or retail stocking. Facility in Chhatarpur, Madhya Pradesh - call, WhatsApp, or email us.",
};

export default function ContactPage() {
  return <ContactClient />;
}