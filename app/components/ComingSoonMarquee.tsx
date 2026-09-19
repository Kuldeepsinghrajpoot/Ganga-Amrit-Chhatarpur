"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import {
  Package,
  Milk,
  Droplets,
  Droplet,
  Box,
  CupSoda,
  Sparkles,
  LucideIcon,
} from "lucide-react";

const ITEMS: { name: string; icon: LucideIcon }[] = [
  { name: "Paneer", icon: Package },
  { name: "Dahi / Curd", icon: Milk },
  { name: "Ghee", icon: Droplets },
  { name: "Makkhan (Butter)", icon: Box },
  { name: "Lassi", icon: CupSoda },
  { name: "Flavoured Milk", icon: Sparkles },
  { name: "Chaas (Buttermilk)", icon: Droplet },
];

/**
 * Auto-scrolling row of "coming soon" dairy product teasers. Pauses on
 * hover, loops seamlessly (list rendered twice back-to-back).
 */
export default function ComingSoonMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    if (!trackRef.current) return;
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.fromTo(
        trackRef.current,
        { xPercent: 0 },
        { xPercent: -50, duration: 26, ease: "none", repeat: -1 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.resume()}
    >
      <div ref={trackRef} className="flex w-max gap-5 px-4">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="relative overflow-hidden text-center bg-white rounded-2xl border border-slate-200 p-6 w-40 shrink-0"
          >
            <span
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{ animation: "shimmerSweep 2.8s ease-in-out infinite", animationDelay: `${(i % ITEMS.length) * 0.4}s` }}
            />
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: (i % ITEMS.length) * 0.3 }}
              className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl mb-4 relative"
            >
              <item.icon className="w-7 h-7" />
            </motion.div>
            <h3 className="font-bold text-slate-900 relative text-sm">{item.name}</h3>
            <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full relative">
              Coming Soon
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
