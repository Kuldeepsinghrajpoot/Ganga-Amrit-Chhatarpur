"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * A wide, looping animated scene standing in for a promotional video:
 * cow at the farm -> tanker collects milk -> a collection & testing stop
 * -> factory packs it into Ganga Amrit pouches -> a taxi carries it to the
 * shop -> a delivery person walks it the last stretch to the customer's
 * glass. Built entirely in SVG + GSAP so it's crisp at any size.
 *
 * Timing is deliberately generous and non-overlapping (each leg finishes
 * fully, with a beat to spare, before the next starts or before anything
 * fades) so the journey always visibly completes end-to-end.
 */
export default function MilkProcessVideo({ className = "" }: { className?: string }) {
  const truckRef = useRef<SVGGElement>(null);
  const taxiRef = useRef<SVGGElement>(null);
  const personRef = useRef<SVGGElement>(null);
  const smokeRefs = useRef<(SVGCircleElement | null)[]>([]);
  const pouchRef = useRef<SVGGElement>(null);
  const packLineRef = useRef<SVGGElement>(null);
  const glassLevelRef = useRef<SVGRectElement>(null);
  const udderDropRef = useRef<SVGCircleElement>(null);
  const testBadgeRef = useRef<SVGGElement>(null);
  const legRefs = useRef<(SVGGElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, defaults: { ease: "power1.inOut" } });

      // Leg 1: tanker, farm -> collection & testing stop (t 0 to 2)
      if (truckRef.current) {
        gsap.set(truckRef.current, { x: -40, y: 150 });
        tl.to(truckRef.current, { x: 190, duration: 2 }, 0);
      }
      if (udderDropRef.current) {
        gsap.set(udderDropRef.current, { opacity: 0, y: 0 });
        tl.to(udderDropRef.current, { opacity: 1, y: 10, duration: 0.5, repeat: 2 }, 0.2);
      }

      // Testing checkmark pops at the collection stop (t 2.2 to 3.4)
      if (testBadgeRef.current) {
        gsap.set(testBadgeRef.current, { scale: 0, opacity: 0, transformOrigin: "center" });
        tl.to(testBadgeRef.current, { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(2)" }, 2.2)
          .to(testBadgeRef.current, { opacity: 0, duration: 0.3 }, 3.4);
      }

      // Leg 2: tanker continues, collection stop -> factory gate (t 3.2 to 5.2)
      if (truckRef.current) {
        tl.to(truckRef.current, { x: 300, duration: 2 }, 3.2);
      }

      // Packing line: pouches stamp out on the conveyor once the tanker has
      // arrived, showing milk actually being packed into Ganga Amrit pouches
      // (t 5.4 to 7.2)
      if (packLineRef.current) {
        const stamps = packLineRef.current.querySelectorAll<SVGGElement>(".pack-stamp");
        stamps.forEach((el, i) => {
          gsap.set(el, { scale: 0, opacity: 0, transformOrigin: "center" });
          tl.to(el, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" }, 5.4 + i * 0.4);
        });
      }

      // A finished pouch pops up above the factory, ready to travel (t 6.6 to 7)
      if (pouchRef.current) {
        gsap.set(pouchRef.current, { scale: 0, opacity: 1, transformOrigin: "center" });
        tl.to(pouchRef.current, { scale: 1, duration: 0.4, ease: "back.out(2)" }, 6.6);
      }

      // Leg 3: taxi carries the pouch from the factory to the shop (t 7.2 to 10.2)
      if (taxiRef.current) {
        gsap.set(taxiRef.current, { x: 400, y: 158, opacity: 0 });
        tl.to(taxiRef.current, { opacity: 1, duration: 0.3 }, 7)
          .to(taxiRef.current, { x: 555, duration: 3, ease: "power1.inOut" }, 7.2);
      }
      if (pouchRef.current) {
        tl.to(pouchRef.current, { opacity: 0, duration: 0.3 }, 7.4);
      }
      // Taxi waits at the shop briefly, then heads off-scene (t 10.2 to 11.2)
      if (taxiRef.current) {
        tl.to(taxiRef.current, { opacity: 0, duration: 0.4 }, 10.6);
      }

      // Leg 4: delivery person walks the pouch from the shop to the
      // customer, with a little foot-bounce as they go (t 10.4 to 12.6)
      if (personRef.current) {
        gsap.set(personRef.current, { x: 570, y: 150, opacity: 0 });
        tl.to(personRef.current, { opacity: 1, duration: 0.3 }, 10.4)
          .to(personRef.current, { x: 670, duration: 2.2, ease: "power1.inOut" }, 10.6);
      }
      legRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { y: 0 });
        gsap.to(el, { y: -3, duration: 0.18, repeat: -1, yoyo: true, ease: "sine.inOut", delay: i * 0.18 });
      });

      // Customer's glass fills once the delivery person has arrived (t 12.8 to 13.8)
      if (glassLevelRef.current) {
        gsap.set(glassLevelRef.current, { attr: { height: 0, y: 150 } });
        tl.to(glassLevelRef.current, { attr: { height: 26, y: 124 }, duration: 1, ease: "power1.out" }, 12.8);
      }
      if (personRef.current) {
        tl.to(personRef.current, { opacity: 0, duration: 0.4 }, 14.2);
      }

      // Hold the finished scene for a moment before the loop restarts.
      tl.to({}, { duration: 1.2 }, 14.8);

      // Independent, always-running loops (not part of the sequential timeline).
      smokeRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: 0, y: 0, scale: 0.5 });
        gsap.to(el, {
          opacity: 0.6,
          y: -30,
          scale: 1.4,
          duration: 2.2,
          repeat: -1,
          delay: i * 0.7,
          ease: "power1.out",
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <svg viewBox="0 0 760 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* sky */}
      <rect x="0" y="0" width="760" height="160" fill="#FFF7ED" />
      {/* ground */}
      <rect x="0" y="160" width="760" height="60" fill="#FDE9D2" />
      <rect x="0" y="158" width="760" height="4" fill="#FBBF77" />

      {/* --- FARM (left) --- */}
      <g transform="translate(20,120)">
        <ellipse cx="30" cy="46" rx="34" ry="8" fill="#00000010" />
        <rect x="4" y="14" width="52" height="26" rx="12" fill="#334155" />
        <circle cx="8" cy="20" r="10" fill="#334155" />
        <rect x="8" y="34" width="6" height="12" fill="#334155" />
        <rect x="42" y="34" width="6" height="12" fill="#334155" />
        {Array.from({ length: 4 }).map((_, i) => (
          <ellipse key={i} cx={16 + i * 9} cy={22 + (i % 2) * 4} rx="4" ry="3" fill="white" />
        ))}
        <circle ref={udderDropRef} cx="20" cy="42" r="2.5" fill="#BFDBFE" />
      </g>
      <text x="20" y="200" fontSize="11" fontWeight="700" fill="#92400E">Farm</text>

      {/* --- COLLECTION & TESTING STOP (between farm and factory) --- */}
      <g transform="translate(175,130)">
        <rect x="0" y="10" width="44" height="30" rx="4" fill="#0EA5E9" />
        <polygon points="-4,10 48,10 40,0 4,0" fill="#0369A1" />
        <rect x="16" y="20" width="12" height="14" fill="#E0F2FE" />
        <g ref={testBadgeRef} transform="translate(14,-14)">
          <circle cx="8" cy="8" r="10" fill="#16A34A" />
          <path d="M4 8 L7 11 L12 5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <text x="168" y="200" fontSize="11" fontWeight="700" fill="#92400E">Collection &amp; Testing</text>

      {/* Tanker travelling (pure-GSAP positioned, no static transform) */}
      <g ref={truckRef}>
        <rect x="0" y="2" width="50" height="18" rx="9" fill="#2563EB" />
        <rect x="50" y="6" width="14" height="14" rx="2" fill="#1D4ED8" />
        <rect x="53" y="9" width="8" height="6" fill="#BFDBFE" />
        <circle cx="14" cy="22" r="5" fill="#1E293B" />
        <circle cx="50" cy="22" r="5" fill="#1E293B" />
        <circle cx="14" cy="22" r="2" fill="#94A3B8" />
        <circle cx="50" cy="22" r="2" fill="#94A3B8" />
      </g>

      {/* --- FACTORY (middle) --- */}
      <g transform="translate(330,70)">
        <rect x="0" y="30" width="90" height="60" fill="#1E3A5F" rx="6" />
        <rect x="14" y="0" width="14" height="34" fill="#475569" />
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            ref={(el) => { smokeRefs.current[i] = el; }}
            cx={21}
            cy={-4}
            r="6"
            fill="#CBD5E1"
          />
        ))}
        <rect x="38" y="50" width="16" height="16" fill="#60A5FA" />

        {/* Packing conveyor: little Ganga Amrit pouches stamp into place,
            showing milk actually being packed rather than just appearing. */}
        <g ref={packLineRef}>
          <rect x="2" y="94" width="86" height="6" fill="#94A3B8" />
          {[0, 1, 2].map((i) => (
            <g key={i} className="pack-stamp" transform={`translate(${10 + i * 26},80)`}>
              <rect x="0" y="0" width="14" height="16" rx="2.5" fill="white" stroke="#EA580C" strokeWidth="1.3" />
              <rect x="0" y="0" width="14" height="5" fill="#EA580C" />
            </g>
          ))}
        </g>

        {/* Finished pouch popping up, ready to travel (pure-GSAP positioned) */}
        <g ref={pouchRef} transform="translate(60,50)">
          <rect x="0" y="0" width="14" height="18" rx="3" fill="white" stroke="#EA580C" strokeWidth="1.5" />
          <rect x="0" y="0" width="14" height="6" fill="#EA580C" />
        </g>
      </g>
      <text x="345" y="200" fontSize="11" fontWeight="700" fill="#92400E">Factory</text>

      {/* Taxi delivering to the shop (pure-GSAP positioned, no static transform) */}
      <g ref={taxiRef}>
        <rect x="0" y="4" width="52" height="16" rx="6" fill="#FACC15" />
        <path d="M10 4 L18 -6 L38 -6 L42 4 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
        <rect x="20" y="-4" width="16" height="8" fill="#E0F2FE" />
        <rect x="16" y="9" width="6" height="4" fill="#1E293B" opacity="0.5" />
        <circle cx="12" cy="22" r="5" fill="#1E293B" />
        <circle cx="42" cy="22" r="5" fill="#1E293B" />
        <rect x="20" y="2" width="10" height="4" rx="1" fill="#1E293B" />
      </g>

      {/* --- SHOP (right-mid) --- */}
      <g transform="translate(560,110)">
        <rect x="0" y="20" width="60" height="40" fill="#F97316" rx="4" />
        <rect x="6" y="30" width="18" height="30" fill="#FFEDD5" />
        <polygon points="-6,20 66,20 60,4 0,4" fill="#9A3412" />
      </g>
      <text x="565" y="200" fontSize="11" fontWeight="700" fill="#92400E">Dukaan</text>

      {/* Delivery person walking the last stretch, carrying a pouch bag
          (pure-GSAP positioned, no static transform) */}
      <g ref={personRef}>
        <circle cx="8" cy="2" r="5" fill="#7C4A24" />
        <rect x="3" y="7" width="10" height="14" rx="3" fill="#16A34A" />
        <g ref={(el) => { legRefs.current[0] = el; }}>
          <rect x="3" y="21" width="4" height="10" fill="#334155" />
        </g>
        <g ref={(el) => { legRefs.current[1] = el; }}>
          <rect x="9" y="21" width="4" height="10" fill="#1E293B" />
        </g>
        {/* carried pouch */}
        <rect x="14" y="12" width="10" height="13" rx="2" fill="white" stroke="#EA580C" strokeWidth="1.3" />
        <rect x="14" y="12" width="10" height="4" fill="#EA580C" />
      </g>

      {/* --- CUSTOMER (right) --- */}
      <g transform="translate(680,90)">
        <path d="M0 60 L36 60 L30 15 Q30 8 18 8 Q6 8 6 15 Z" fill="white" stroke="#FDBA74" strokeWidth="2" />
        <clipPath id="videoGlassClip"><path d="M2 58 L34 58 L29 16 Q29 11 18 11 Q7 11 7 16 Z" /></clipPath>
        <rect ref={glassLevelRef} x="0" width="36" fill="#FDE9D2" clipPath="url(#videoGlassClip)" />
      </g>
      <text x="680" y="200" fontSize="11" fontWeight="700" fill="#92400E">Customer</text>
    </svg>
  );
}
