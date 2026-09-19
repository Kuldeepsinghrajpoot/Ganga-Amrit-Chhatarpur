import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQs - Milk Agency, Distributorship & Products",
  description:
    "Answers to common questions about Ganga Amrit's milk products, packaging, distributorship, and support.",
};

export default function FaqRoute() {
  return <FaqClient />;
}