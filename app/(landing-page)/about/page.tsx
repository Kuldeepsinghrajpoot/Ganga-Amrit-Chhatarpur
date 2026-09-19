import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us - Ganga Amrit Dairy & Milk Agency, Chhatarpur",
  description:
    "Ganga Amrit is made by Ganga Ice Factory and Dairy Products in Chhatarpur, Madhya Pradesh - fresh, honestly-processed milk backed by FSSAI licensing and GST registration.",
};

export default function AboutPage() {
  return <AboutClient />;
}