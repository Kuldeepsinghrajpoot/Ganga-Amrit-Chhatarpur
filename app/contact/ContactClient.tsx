"use client";

import React from "react";
import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Reveal } from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import { SITE } from "../lib/site";

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <main>
        {/* HERO */}
        <section className="relative pt-20 pb-24 bg-orange-50/30 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 C30,40 70,40 100,0 L100,100 L0,100 Z" fill="url(#contact-grad)" />
              <defs>
                <linearGradient id="contact-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "rgb(255,237,213)", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "rgb(255,255,255)", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Reveal className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-orange-700 font-bold text-sm tracking-widest uppercase mb-6 bg-orange-100 px-4 py-2 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                <span>B2B Inquiries</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Let&apos;s talk supply.
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Whether you&apos;re scaling a distribution network or need a private-label manufacturing partner,
                our B2B team is one message away.
              </p>

              {/* Quick actions - talk to us right away, or fill the form below */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-slate-900/10"
                >
                  <Phone className="w-4 h-4" /> Call Us Now
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
                    "Hi Ganga Amrit, I'd like to know more about your products."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb355] text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-green-600/10"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                Prefer not to call? Just fill in the inquiry form below and we&apos;ll reach out to you.
              </p>
            </div>
          </Reveal>
        </section>

        {/* CONTACT GRID */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10">
              {/* Company info + map */}
              <Reveal className="lg:col-span-2 space-y-6">
                <div>
                  <div className="bg-slate-900 text-white rounded-3xl p-8">
                    <h3 className="text-xl font-bold mb-6">Contact HQ</h3>
                    <ul className="space-y-5 text-sm">
                      <li className="flex items-start">
                        <MapPin className="w-5 h-5 mr-3 text-orange-500 shrink-0 mt-0.5" />
                        <span className="text-slate-300">
                          {SITE.address.line1},<br />
                          {SITE.address.line2},<br />
                          {SITE.address.line3}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Phone className="w-5 h-5 mr-3 text-orange-500 shrink-0 mt-0.5" />
                        <a href={`tel:${SITE.phoneTel}`} className="text-slate-300 hover:text-orange-400 transition-colors">
                          {SITE.phoneDisplay}
                        </a>
                      </li>
                      <li className="flex items-start">
                        <Mail className="w-5 h-5 mr-3 text-orange-500 shrink-0 mt-0.5" />
                        <a href={`mailto:${SITE.email}`} className="text-slate-300 hover:text-orange-400 transition-colors">
                          {SITE.email}
                        </a>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-400">
                      {SITE.hours}
                    </div>
                  </div>

                  <div className="mt-6 rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-72">
                    <iframe
                      title="Ganga Amrit facility location"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address.mapQuery)}&z=13&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Form */}
              <Reveal delay={0.15} className="lg:col-span-3">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}