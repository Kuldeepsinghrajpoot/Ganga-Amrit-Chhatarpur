"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const COLORS = ["#EA580C", "#F59E0B", "#16A34A", "#2563EB", "#DB2777"];

type Bit = { id: number; x: number; rotate: number; color: string; delay: number; size: number };

/**
 * A short, self-contained confetti burst - no external confetti library.
 * Mount it conditionally (e.g. on form-success) and let it play once.
 */
export default function ConfettiBurst({ pieces = 24 }: { pieces?: number }) {
  // Lazy initializer: this component only ever mounts client-side, in
  // response to a user action (form success), so generating the random
  // burst once here - rather than via a post-mount effect - is safe and
  // avoids an extra cascading render.
  const [bits] = useState<Bit[]>(() =>
    Array.from({ length: pieces }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 260,
      rotate: Math.random() * 360,
      color: COLORS[i % COLORS.length],
      delay: Math.random() * 0.15,
      size: 6 + Math.random() * 5,
    }))
  );

  return (
    <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-visible" aria-hidden="true">
      {bits.map((b) => (
        <motion.span
          key={b.id}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ x: b.x, y: 220, opacity: 0, rotate: b.rotate }}
          transition={{ duration: 1.4, delay: b.delay, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: 0,
            width: b.size,
            height: b.size * 0.5,
            backgroundColor: b.color,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
}
