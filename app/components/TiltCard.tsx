"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Wraps children in a perspective/tilt effect that follows the mouse.
 * Falls back to a flat, un-tilted card on touch devices (no mousemove there).
 */
export default function TiltCard({
  children,
  className = "",
  max = 10,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRot({ x: py * -max, y: px * max });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setRot({ x: 0, y: 0 })}
      style={{ perspective: 900 }}
      className={className}
    >
      <motion.div
        animate={{ rotateX: rot.x, rotateY: rot.y, scale: rot.x || rot.y ? 1.03 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
