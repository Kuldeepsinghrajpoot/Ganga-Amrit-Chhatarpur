"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Snowflake,
  Flame,
  Package,
  Refrigerator,
  Cog,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const INFRASTRUCTURE = [
  { label: "Milk Testing Lab", icon: FlaskConical, bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-600" },
  { label: "Bulk Milk Cooling (BMC)", icon: Snowflake, bg: "bg-cyan-50", border: "border-cyan-100", text: "text-cyan-600" },
  { label: "Pasteurization System", icon: Flame, bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-600" },
  { label: "Automatic Packaging", icon: Package, bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-600" },
  { label: "Cold Storage", icon: Refrigerator, bg: "bg-indigo-50", border: "border-indigo-100", text: "text-indigo-600" },
  { label: "Stainless-Steel Equipment", icon: Cog, bg: "bg-slate-100", border: "border-slate-200", text: "text-slate-600" },
  { label: "Dedicated QC Team", icon: ShieldCheck, bg: "bg-green-50", border: "border-green-100", text: "text-green-600" },
];

/**
 * Simple, colorful, gently-animated cards describing the facility's
 * real infrastructure - shared across Home, About, and Products so the
 * same honest list stays consistent everywhere it's used.
 */
export default function InfrastructureCards({
  title = "Built the Right Way.",
  subtitle = "A modern, hygienic facility equipped to process fresh milk safely, every single day.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div>
      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto mb-10">
          {title && <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">{title}</h3>}
          {subtitle && <p className="text-slate-600 leading-relaxed">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {INFRASTRUCTURE.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.07}>
            <motion.div
              whileHover={{ y: -5, scale: 1.03 }}
              className={`p-5 rounded-2xl border h-full text-center ${item.bg} ${item.border}`}
            >
              <motion.span
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                className="inline-flex mb-3"
              >
                <item.icon className={`w-8 h-8 ${item.text}`} />
              </motion.span>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.label}</h4>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
