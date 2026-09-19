"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * A looping SVG illustration of a dairy processing line: rotating gears, a
 * filling nozzle that actually drips milk into a Ganga Amrit pouch (the
 * fill level visibly rises), then the finished, branded pouch joins the
 * others travelling along a conveyor belt.
 */
export default function MilkMachine({ className = "" }: { className?: string }) {
  const gear1 = useRef<SVGGElement>(null);
  const gear2 = useRef<SVGGElement>(null);
  const pouchesRef = useRef<SVGGElement>(null);
  const nozzleRef = useRef<SVGRectElement>(null);
  const dropRef = useRef<SVGRectElement>(null);
  const fillRef = useRef<SVGRectElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (gear1.current) gsap.to(gear1.current, { rotation: 360, duration: 6, repeat: -1, ease: "none", transformOrigin: "center" });
      if (gear2.current) gsap.to(gear2.current, { rotation: -360, duration: 4.5, repeat: -1, ease: "none", transformOrigin: "center" });

      // The whole fill cycle: nozzle bobs, a drip falls, the pouch beneath
      // it visibly fills up, then resets for the next pouch.
      const fillTl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });
      if (nozzleRef.current) {
        fillTl.to(nozzleRef.current, { scaleY: 1.4, transformOrigin: "top", duration: 0.25, repeat: 5, yoyo: true, ease: "power1.inOut" }, 0);
      }
      if (dropRef.current) {
        gsap.set(dropRef.current, { opacity: 0, y: 0 });
        fillTl.to(dropRef.current, { opacity: 1, y: 10, duration: 0.3, repeat: 5, ease: "power1.in" }, 0);
      }
      if (fillRef.current) {
        gsap.set(fillRef.current, { attr: { height: 0, y: 146 } });
        fillTl.to(fillRef.current, { attr: { height: 16, y: 130 }, duration: 2.2, ease: "power1.out" }, 0);
        fillTl.to(fillRef.current, { attr: { height: 0, y: 146 }, duration: 0.2 }, 2.6);
      }

      if (pouchesRef.current) {
        gsap.set(pouchesRef.current, { x: -60 });
        gsap.to(pouchesRef.current, { x: 260, duration: 4, repeat: -1, ease: "none" });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <svg viewBox="0 0 320 180" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* base / conveyor */}
      <rect x="10" y="140" width="300" height="12" rx="4" fill="#CBD5E1" />
      <rect x="10" y="150" width="300" height="6" fill="#94A3B8" />

      {/* machine tower */}
      <rect x="120" y="30" width="80" height="60" rx="8" fill="#1E3A5F" />
      <rect x="150" y="90" width="20" height="30" fill="#2563EB" />
      {/* nozzle */}
      <rect ref={nozzleRef} x="155" y="118" width="10" height="14" fill="#60A5FA" />
      {/* falling drip */}
      <rect ref={dropRef} x="158" y="130" width="4" height="8" rx="2" fill="#FDE9D2" />

      {/* Pouch being filled directly under the nozzle - a static station,
          separate from the conveyor - so the fill level is always visible
          in the same spot rather than moving. */}
      <g transform="translate(151,126)">
        <rect x="0" y="0" width="18" height="20" rx="3" fill="white" stroke="#FDBA74" strokeWidth="1.5" />
        <clipPath id="fillingPouchClip">
          <rect x="1.5" y="1.5" width="15" height="17" rx="2" />
        </clipPath>
        <rect ref={fillRef} x="149" width="21" fill="#FDE9D2" clipPath="url(#fillingPouchClip)" transform="translate(-149,0)" />
        <path d="M3 5 Q9 8 15 5" stroke="#EA580C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>

      {/* gears */}
      <g ref={gear1} transform="translate(80,50)">
        <circle r="16" fill="#F97316" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="-2.5" y="-22" width="5" height="10" fill="#F97316" transform={`rotate(${i * 45})`} />
        ))}
        <circle r="5" fill="#FFF7ED" />
      </g>
      <g ref={gear2} transform="translate(240,55)">
        <circle r="12" fill="#16A34A" />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x="-2" y="-17" width="4" height="8" fill="#16A34A" transform={`rotate(${i * 60})`} />
        ))}
        <circle r="4" fill="#F0FDF4" />
      </g>

      {/* Finished, branded pouches travelling on the belt (clipped to the
          visible line). Each carries a small wave mark echoing the Ganga
          Amrit logo, so they read as "our" pouches, not generic packets. */}
      <clipPath id="beltClip">
        <rect x="10" y="120" width="300" height="30" />
      </clipPath>
      <g clipPath="url(#beltClip)">
        <g ref={pouchesRef}>
          {[0, 40, 80].map((dx) => (
            <g key={dx} transform={`translate(${dx},0)`}>
              <rect x="150" y="126" width="18" height="20" rx="3" fill="white" stroke="#FDBA74" strokeWidth="1.5" />
              <rect x="150" y="126" width="18" height="7" fill="#EA580C" />
              <path d="M153 137 Q159 140 165 137" stroke="#EA580C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}
