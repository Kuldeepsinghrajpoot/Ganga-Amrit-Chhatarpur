"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "../lib/site";
import MagneticButton from "./MagneticButton";

export default function CtaBanner({
  title = "Want Ganga Amrit milk at your store?",
  subtitle = "Talk to us about distributorship, bulk supply, or retail stocking.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const waHref = `https://wa.me/${SITE.whatsappNumber}`;
  return (
    <section className="py-16 bg-linear-to-r from-orange-600 to-amber-600 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">{title}</h3>
          <p className="text-orange-50/90">{subtitle}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shrink-0">
          <MagneticButton>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center px-6 py-3 rounded-md bg-white text-orange-700 font-bold shadow-lg cursor-pointer"
              >
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </motion.span>
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a href={waHref} target="_blank" rel="noopener noreferrer">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center px-6 py-3 rounded-md bg-slate-900/30 border border-white/40 text-white font-bold cursor-pointer"
              >
                <MessageCircle className="mr-2 w-4 h-4" /> WhatsApp
              </motion.span>
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
