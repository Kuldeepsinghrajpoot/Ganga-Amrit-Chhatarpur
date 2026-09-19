"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Leaf } from "lucide-react";

// Note: GST + FSSAI are shown separately (with the real registration
// numbers) via <LicenseBadges />, so they're intentionally left out here to
// avoid showing the same two credentials twice side by side.
const BADGES = [
  { icon: Award, label: "Quality Tested", bg: "bg-amber-100", text: "text-amber-600" },
  { icon: Leaf, label: "Hygiene Standards", bg: "bg-teal-100", text: "text-teal-600" },
];

export default function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`}>
      {BADGES.map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          whileHover={{ y: -3, scale: 1.03 }}
          className="flex items-center gap-2 bg-white border border-slate-200 rounded-full pl-2 pr-4 py-1.5 shadow-sm"
        >
          <span className={`w-7 h-7 rounded-full flex items-center justify-center ${b.bg}`}>
            <b.icon className={`w-4 h-4 ${b.text}`} />
          </span>
          <span className="text-xs sm:text-sm font-bold text-slate-700 whitespace-nowrap">{b.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
