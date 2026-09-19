import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for using the Ganga Amrit website and products.",
};

export default function TermsPage() {
  return <TermsClient />;
}
