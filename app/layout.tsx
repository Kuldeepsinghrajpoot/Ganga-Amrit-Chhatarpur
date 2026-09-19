import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./(landing-page)/footer/page";
import Navbar from "./(landing-page)/navbar/page";
import WhatsAppButton from "./components/WhatsAppButton";
import TopAnnouncementBar from "./components/TopAnnouncementBar";
import StickyMobileBar from "./components/StickyMobileBar";
import CursorMilkTrail from "./components/CursorMilkTrail";
import JsonLd from "./components/JsonLd";
import SplashScreen from "./components/SplashScreen";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gangaamrit.co.in"),
  title: {
    default: "Ganga Amrit | Milk Agency, Distributor & Dairy in Chhatarpur, MP",
    template: "%s | Ganga Amrit",
  },
  description:
    "Ganga Amrit (Ganga Ice Factory and Dairy Products) - Chhatarpur's own milk agency and dairy. Fresh pasteurized milk, Gold Full Cream, Double Toned & Chai Special variants. Milk distributor, dealer & agency enquiries welcome for Chhatarpur and nearby areas. FSSAI licensed & GST registered.",
  keywords: [
    "Ganga Amrit",
    "गंगा अमृत",
    "Ganga Amrit milk",
    "Ganga Amrit dairy",
    "Ganga Ice Factory and Dairy Products",
    "Ganga Amrit Chhatarpur",
    "Ganga Amrit MP",
    "milk agency in Chhatarpur",
    "milk agency Chhatarpur",
    "milk agency near me",
    "best milk agency Chhatarpur",
    "milk distributor Chhatarpur",
    "milk distributorship Chhatarpur",
    "milk distributorship Madhya Pradesh",
    "milk dealer Chhatarpur",
    "milk dealership Chhatarpur",
    "milk supplier Chhatarpur",
    "milk suppliers near me",
    "dairy agency Chhatarpur",
    "dairy distributor Madhya Pradesh",
    "dairy dealer Chhatarpur",
    "milk franchise Chhatarpur",
    "milk franchise Madhya Pradesh",
    "milk agency business Chhatarpur",
    "new milk agency Chhatarpur",
    "milk agency contact number Chhatarpur",
    "milk agency enquiry",
    "doodh agency Chhatarpur",
    "doodh distributor Chhatarpur",
    "doodh supplier Chhatarpur",
    "doodh dealer Chhatarpur",
    "doodh company Chhatarpur",
    "doodh business Chhatarpur",
    "दूध एजेंसी छतरपुर",
    "दूध वितरक छतरपुर",
    "दूध सप्लायर छतरपुर",
    "दूध डीलर छतरपुर",
    "दूध व्यापार छतरपुर",
    "दूध की एजेंसी कैसे लें",
    "दूध एजेंसी संपर्क नंबर",
    "milk Chhatarpur",
    "fresh milk Chhatarpur",
    "pure milk Chhatarpur",
    "pasteurized milk Chhatarpur",
    "full cream milk Chhatarpur",
    "double toned milk Chhatarpur",
    "toned milk Chhatarpur",
    "chai special milk Chhatarpur",
    "cow milk Chhatarpur",
    "packet milk Chhatarpur",
    "milk pouch Chhatarpur",
    "milk packet price Chhatarpur",
    "milk price Chhatarpur",
    "milk rate Chhatarpur",
    "milk fat percentage",
    "SNF milk",
    "best milk brand Chhatarpur",
    "best dairy Chhatarpur",
    "top milk brand Madhya Pradesh",
    "dairy products Chhatarpur",
    "dairy Madhya Pradesh",
    "dairy company Chhatarpur",
    "gold full cream milk",
    "double toned milk benefits",
    "chai special milk price",
    "milk home delivery Chhatarpur",
    "daily milk delivery Chhatarpur",
    "buy milk online Chhatarpur",
    "milk delivery near me",
    "subscribe milk Chhatarpur",
    "milk subscription Chhatarpur",
    "cheap milk Chhatarpur",
    "milk shop near me Chhatarpur",
    "milk booth Chhatarpur",
    "wholesale milk Chhatarpur",
    "bulk milk supplier MP",
    "bulk milk order Chhatarpur",
    "milk supply for hotels Chhatarpur",
    "milk supply for restaurants",
    "milk supply for sweet shops",
    "milk supply for tea stall",
    "milk supply contract Madhya Pradesh",
    "B2B milk supplier MP",
    "milk for bakery Chhatarpur",
    "milk vendor Chhatarpur",
    "FSSAI licensed milk Chhatarpur",
    "GST registered dairy Chhatarpur",
    "adulteration free milk",
    "quality milk brand Chhatarpur",
    "trusted dairy Chhatarpur",
    "hygienic milk packaging",
    "शुद्ध दूध छतरपुर",
    "शुद्धता का वादा",
    "milk agency Khajuraho",
    "milk agency Panna",
    "milk agency Nowgong",
    "milk agency Tikamgarh",
    "milk agency Bijawar",
    "milk agency Maharajpur",
    "milk agency Chandla",
    "milk agency Laundi",
    "dairy Bundelkhand",
    "milk supplier Bundelkhand",
    "milk distributor Panna",
    "milk distributor Khajuraho",
    "milk agency Sagar Madhya Pradesh",
    "dairy near Chhatarpur",
    "milk supply Bundelkhand region",
    "milk manufacturer Madhya Pradesh",
    "dairy manufacturer MP",
    "local milk brand MP",
    "milk company near me",
    "dairy plant Chhatarpur",
    "milk processing unit Chhatarpur",
    "how to start milk agency",
    "milk agency investment",
    "milk agency profit margin",
    "milk agency requirements India",
    "apply for milk distributorship",
  ],
  authors: [{ name: "Ganga Ice Factory and Dairy Products" }],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Ganga Amrit | Milk Agency & Dairy in Chhatarpur, MP",
    description:
      "Chhatarpur's own milk agency and dairy - Gold Full Cream, Double Toned, and Chai Special milk. Distributor & agency enquiries welcome.",
    url: "https://gangaamrit.co.in",
    siteName: "Ganga Amrit",
    images: ["/opengraph-image.jpg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganga Amrit | Milk Agency & Dairy in Chhatarpur, MP",
    description: "Fresh pasteurized milk from Chhatarpur, Madhya Pradesh. Distributor & agency enquiries welcome.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <SplashScreen />
        <CursorMilkTrail />
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 scroll-smooth pb-16 md:pb-0">
          <NextTopLoader color="#EA580C" showSpinner={false} />
          <TopAnnouncementBar />
          {/* Navigation */}
          <Navbar />
          {children}
          {/* footer */}
          <Footer />
          <WhatsAppButton />
          <StickyMobileBar />
        </div>
     
      </body>
    </html>
  );
}