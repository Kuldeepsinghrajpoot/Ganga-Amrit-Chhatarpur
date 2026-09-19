import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Ganga Amrit collects, uses, and protects the information you share with us.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}
