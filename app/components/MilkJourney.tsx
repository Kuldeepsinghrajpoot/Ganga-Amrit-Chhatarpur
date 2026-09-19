"use client";

import React from "react";
import { motion } from "framer-motion";
import { Milk, Cog, Store, User } from "lucide-react";

const STEPS = [
  { icon: Milk, label: "Milked at the farm", color: "bg-green-100 text-green-700" },
  { icon: Cog, label: "Pasteurized & packed", color: "bg-blue-100 text-blue-700" },
  { icon: Store, label: "Reaches the dukaan", color: "bg-orange-100 text-orange-700" },
  { icon: User, label: "In your glass", color: "bg-amber-100 text-amber-700" },
];

/**
 * A simple animated "farm to customer" strip: a milk drop travels along a
 * dashed path through each stage, pulsing at every stop.
 */
export default function MilkJourney() {
  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="hidden sm:block absolute top-9 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-orange-200" />

      {/* travelling drop */}
      <motion.div
        className="hidden sm:flex absolute top-4 w-7 h-7 rounded-full bg-orange-500 shadow-lg items-center justify-center text-white"
        animate={{ left: ["12%", "37.3%", "62.6%", "88%"] }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 1, ease: "easeInOut", times: [0, 0.33, 0.66, 1] }}
      >
        <Milk className="w-3.5 h-3.5" />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 relative">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm ${s.color}`}
            >
              <s.icon className="w-7 h-7" />
            </motion.div>
            <span className="text-sm font-bold text-slate-700">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
