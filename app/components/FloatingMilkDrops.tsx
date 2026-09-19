"use client";

import React from "react";
import { motion } from "framer-motion";
import { Droplet } from "lucide-react";

/**
 * Subtle floating milk-drop decoration. Unlike the earlier version, this is
 * NOT wrapped in `hidden lg:block` - it renders (smaller) on mobile too, just
 * with fewer drops and lower opacity so it never crowds small screens.
 */
export default function FloatingMilkDrops({
  count = 6,
  className = "",
  tone = "text-orange-200",
}: {
  count?: number;
  className?: string;
  tone?: string;
}) {
  const drops = Array.from({ length: count });
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {drops.map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${tone}`}
          style={{
            left: `${(i * 37 + 6) % 92}%`,
            top: `${(i * 23 + 4) % 88}%`,
          }}
          animate={{ y: [0, -14, 0], opacity: [0.25, 0.55, 0.25] }}
          transition={{
            duration: 3.5 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
        >
          <Droplet className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
        </motion.div>
      ))}
    </div>
  );
}
