"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Milk,
  Package,
  Droplets,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import MilkPouch from "../components/MilkPouch";
import MarqueeBanner from "../components/MarqueeBanner";
import FloatingMilkDrops from "../components/FloatingMilkDrops";
import ComingSoonMarquee from "../components/ComingSoonMarquee";
import InfrastructureCards from "../components/InfrastructureCards";

type MilkType = {
  name: string;
  tagline: string;
  fat: string;
  snf: string;
  description: string;
  packs: string[];
  accent: string; // tailwind color stem, e.g. "orange"
  color: string; // hex used inside the MilkPouch illustration
  liquid: string; // light hex tint used for the illustration's liquid fill
  image?: string; // real packaging photo, when available
};

const MILK_TYPES: MilkType[] = [
  {
    name: "Gold - Full Cream Milk",
    tagline: "Rich, creamy, and packed with nutrition",
    fat: "6% Fat",
    snf: "9% SNF",
    description:
      "Our richest variant, standardized for a thick mouthfeel and higher energy content - pasteurized full cream milk, popular for desserts and growing children.",
    packs: ["500 ml pouch", "1 L pouch"],
    accent: "amber",
    color: "#D97706",
    liquid: "#FDE68A",
    image: "/products/gold-full-cream.png",
  },
  {
    name: "Double Toned Milk",
    tagline: "Low-fat milk for the health-conscious",
    fat: "1.5% Fat",
    snf: "9% SNF",
    description:
      "Skimmed of most of its fat while keeping the protein and calcium intact - a favourite for fitness-focused households.",
    packs: ["500 ml pouch", "1 L pouch"],
    accent: "blue",
    color: "#2563EB",
    liquid: "#BFDBFE",
    image: "/products/double-toned.png",
  },
  {
    name: "Chai Special",
    tagline: "Strong, creamy milk made for the perfect chai",
    fat: "4.5% Fat (Min.)",
    snf: "6.0% SNF (Min.)",
    description:
      "Specially standardized so your chai comes out rich and creamy every single time - a favourite with tea stalls and home kitchens alike.",
    packs: ["1 L pouch"],
    accent: "orange",
    color: "#9A3412",
    liquid: "#FED7AA",
    image: "/products/chai-special.png",
  },
];

const accentClasses: Record<string, { bg: string; text: string; border: string; chip: string }> = {
  orange: { bg: "bg-orange-50/60", text: "text-orange-600", border: "border-orange-100 hover:border-orange-300", chip: "bg-white text-orange-700 border-orange-200" },
  amber: { bg: "bg-amber-50/60", text: "text-amber-600", border: "border-amber-100 hover:border-amber-300", chip: "bg-white text-amber-700 border-amber-200" },
  blue: { bg: "bg-blue-50/60", text: "text-blue-600", border: "border-blue-100 hover:border-blue-300", chip: "bg-white text-blue-700 border-blue-200" },
  green: { bg: "bg-green-50/60", text: "text-green-600", border: "border-green-100 hover:border-green-300", chip: "bg-white text-green-700 border-green-200" },
};

export default function ProductsClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <main>
        {/* HERO */}
        <section className="relative pt-20 pb-24 bg-orange-50/30 overflow-hidden">
          <FloatingMilkDrops count={6} />
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 C30,40 70,40 100,0 L100,100 L0,100 Z" fill="url(#prod-grad)" />
              <defs>
                <linearGradient id="prod-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "rgb(255,237,213)", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "rgb(255,255,255)", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Reveal className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-orange-700 font-bold text-sm tracking-widest uppercase mb-6 bg-orange-100 px-4 py-2 rounded-full">
                <Milk className="w-4 h-4" />
                <span>Our Products</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Pure milk, precisely standardized.
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Every variant is fat-and-SNF standardized on the same automated lines, pasteurized within hours
                of collection, and packed in formats built for retail and bulk B2B supply.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Promo banner */}
        <div className="bg-orange-600 text-white py-3 border-y border-orange-700/40">
          <MarqueeBanner
            items={["🥛 Gold Full Cream", "🥛 Double Toned", "☕ Chai Special", "✅ FSSAI Licensed"]}
          />
        </div>

        {/* MILK TYPES */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MILK_TYPES.map((milk, i) => {
                const accent = accentClasses[milk.accent];
                return (
                  <Reveal key={milk.name} delay={i * 0.1}>
                    <TiltCard>
                    <div className={`h-full rounded-2xl p-6 sm:p-7 border transition-all ${accent.bg} ${accent.border}`}>
                      <div className="flex flex-col items-center text-center gap-4 mb-5">
                        {milk.image ? (
                          <motion.div
                            whileHover={{ y: -6, rotate: -1 }}
                            className="w-32 shrink-0 rounded-xl overflow-hidden shadow-md border border-white bg-gradient-to-b from-orange-50 to-white p-2"
                          >
                            <Image
                              src={milk.image}
                              alt={milk.name}
                              width={160}
                              height={200}
                              className="w-full h-full object-contain"
                            />
                          </motion.div>
                        ) : (
                          <MilkPouch
                            color={milk.color}
                            fill={milk.liquid}
                            label={milk.name}
                            fat={milk.fat}
                            className="w-32 shrink-0 drop-shadow-md"
                          />
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{milk.name}</h3>
                          <p className="text-slate-500 text-sm mb-3">{milk.tagline}</p>
                          <div className="flex flex-wrap justify-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${accent.chip}`}>{milk.fat}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${accent.chip}`}>{milk.snf}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-5 leading-relaxed text-sm text-center">{milk.description}</p>

                      <div className="border-t border-slate-200/70 pt-4">
                        <div className="flex items-center justify-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                          <Package className="w-4 h-4 mr-2" /> Available Packaging
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                          {milk.packs.map((pack) => (
                            <span key={pack} className="inline-flex items-center text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg">
                              <CheckCircle2 className={`w-3.5 h-3.5 mr-1.5 ${accent.text}`} />
                              {pack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* MORE VARIANTS TEASER */}
        <section className="py-16 bg-slate-50 border-t border-slate-100 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">More dairy products, coming soon.</h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                As we grow, we plan to bring you more dairy essentials - while keeping our one
                promise constant: no compromise on quality.
              </p>
            </div>
          </div>
          <ComingSoonMarquee />
        </section>

        {/* INFRASTRUCTURE */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <InfrastructureCards
              title="Built the Right Way."
              subtitle="A modern, hygienic facility equipped to process fresh milk safely, every single day."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-orange-600">
          <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Want to know more or place a bulk order?
              </h2>
              <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
                We&apos;re happy to help with retail stocking, distributorship, or any questions about our milk.
              </p>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center bg-white text-orange-700 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl cursor-pointer"
                >
                  Talk to our team <ArrowRight className="ml-2 w-5 h-5" />
                </motion.span>
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
