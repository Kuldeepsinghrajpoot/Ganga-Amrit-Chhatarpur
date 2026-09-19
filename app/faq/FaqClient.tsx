"use client";

import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SITE } from "../lib/site";

const FAQS = [
  {
    q: "What is Ganga Amrit?",
    a: "Ganga Amrit is a milk brand from Chhatarpur, Madhya Pradesh, made by Ganga Ice Factory and Dairy Products. Our promise is simple: शुद्धता का वादा, the promise of purity.",
  },
  {
    q: "Which milk products do you offer?",
    a: "Three variants today: Ganga Amrit Gold (Full Cream Milk), Ganga Amrit Chai Special, and Ganga Amrit Double Toned Milk. See our Products page for Fat% and SNF% details.",
  },
  {
    q: "Do you sell paneer, ghee, or curd?",
    a: "Not yet. Right now we only make milk. As we grow, we plan to introduce more dairy products while keeping our one promise constant: no compromise on quality.",
  },
  {
    q: "Where is Ganga Amrit based?",
    a: `Our facility is at ${SITE.address.full}.`,
  },
  {
    q: "Is your milk pasteurized and tested?",
    a: "Yes. Our milk goes through testing, chilling, and pasteurization at our facility, with daily checks by our quality control team before it reaches the market.",
  },
  {
    q: "Is Ganga Amrit FSSAI licensed and GST registered?",
    a: `Yes. FSSAI License No. ${SITE.fssaiLicense}, GSTIN ${SITE.gstin}.`,
  },
  {
    q: "What packaging sizes are available?",
    a: "Our milk comes in standard pouches suited for daily retail sale. For bulk or distributor needs, please contact us directly.",
  },
  {
    q: "How should I store the milk pouch?",
    a: "Keep it refrigerated and use it fresh. Once opened, we recommend finishing it within the same day for the best taste and quality.",
  },
  {
    q: "Is the Chai Special milk different from your regular milk?",
    a: "Yes. It's specially standardized with a higher Fat% and SNF%, made to give your chai a richer, creamier taste.",
  },
  {
    q: "Can I become a distributor or retailer?",
    a: "Yes, we'd love to hear from you. Reach out through our Contact page or WhatsApp with your city and expected volume, and our team will get back to you.",
  },
  {
    q: "Do you deliver outside Chhatarpur?",
    a: "Our journey starts with Chhatarpur, and we're working on expanding to the wider region. Contact us to check availability in your area.",
  },
  {
    q: "How can I contact you?",
    a: `Call us at ${SITE.phoneDisplay}, email ${SITE.email}, or use the WhatsApp button on this site.`,
  },
];

export default function FaqClient() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-20 pb-16 bg-orange-50/30 overflow-hidden">
        <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl mb-6">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600">
              Everything you need to know about our products, ordering, and support.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="py-16">
        <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div>
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 open:border-orange-400 transition-all mb-4"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-orange-500 transition-transform group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
