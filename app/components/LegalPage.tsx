"use client";

import React from "react";
import { Reveal } from "./Reveal";
import { LucideIcon } from "lucide-react";

type Section = { heading: string; body: React.ReactNode };

export default function LegalPage({
  icon: Icon,
  title,
  subtitle,
  updated,
  sections,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  updated: string;
  sections: Section[];
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <section className="relative pt-20 pb-16 bg-orange-50/30 overflow-hidden">
        <Reveal className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl mb-6">
              <Icon className="w-7 h-7" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">{title}</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
            <p className="text-sm text-slate-500 mt-4">Last updated: {updated}</p>
          </div>
        </Reveal>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.05}>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{s.heading}</h2>
                <div className="text-slate-600 leading-relaxed space-y-3">{s.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
