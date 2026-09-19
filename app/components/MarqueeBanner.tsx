"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type MarqueeBannerProps = {
  items: string[];
  className?: string;
  speed?: number; // seconds for one full loop
  reverse?: boolean;
};

/**
 * A seamless GSAP-driven horizontal marquee. Renders the item list twice
 * back-to-back and tweens the track by -50% in a repeating loop, so it never
 * shows a visible seam or restart.
 */
export default function MarqueeBanner({
  items,
  className = "",
  speed = 22,
  reverse = false,
}: MarqueeBannerProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!trackRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        trackRef.current,
        { xPercent: reverse ? -50 : 0 },
        {
          xPercent: reverse ? 0 : -50,
          duration: speed,
          ease: "none",
          repeat: -1,
        }
      );
    });
    return () => ctx.revert();
  }, [speed, reverse]);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div ref={trackRef} className="inline-flex w-max">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center px-8 text-sm sm:text-base font-bold uppercase tracking-widest"
          >
            {text}
            <span className="mx-8 opacity-50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
