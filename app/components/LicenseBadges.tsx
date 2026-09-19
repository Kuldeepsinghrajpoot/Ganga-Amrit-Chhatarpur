"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, FileCheck2 } from "lucide-react";
import { SITE } from "../lib/site";

/**
 * Shows the real FSSAI license number and GSTIN as a pair of animated
 * pill badges. Use `dark` on dark backgrounds (e.g. the footer).
 */
export default function LicenseBadges({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const base = dark
    ? "bg-slate-900 border-slate-800 text-slate-300"
    : "bg-white border-slate-200 text-slate-700";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.4 }}
        className={`flex items-center gap-2 border rounded-full pl-2 pr-4 py-1.5 shadow-sm ${base}`}
      >
        <span className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0">
          <BadgeCheck className="w-4 h-4 text-green-600" />
        </span>
        <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
          FSSAI Lic. No. <span className="font-bold">{SITE.fssaiLicense}</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`flex items-center gap-2 border rounded-full pl-2 pr-4 py-1.5 shadow-sm ${base}`}
      >
        <span className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
          <FileCheck2 className="w-4 h-4 text-blue-600" />
        </span>
        <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
          GSTIN: <span className="font-bold">{SITE.gstin}</span>
        </span>
      </motion.div>
    </div>
  );
}
