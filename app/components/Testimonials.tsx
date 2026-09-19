"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    name: "Rajeev Traders",
    role: "Distributor, Chhatarpur",
    quote:
      "Ganga Amrit ka doodh roz time pe milta hai aur quality bilkul consistent rehti hai. Hamare customers ko fark saaf pata chalta hai.",
  },
  {
    name: "Meena General Store",
    role: "Retailer, Ward No. 04",
    quote:
      "Gold full cream sabse jyada bikta hai humare yahan - packaging bhi mazboot hai aur leakage ki complaint kabhi nahi aayi.",
  },
  {
    name: "Sharma Tea Stall",
    role: "Chai Special customer",
    quote:
      "Chai Special milk se chai ka taste alag hi level pe chala jaata hai. Ab hum aur kisi brand ka doodh use hi nahi karte.",
  },
  {
    name: "Anita Kirana Store",
    role: "Retailer, Chhatarpur",
    quote:
      "Supply kabhi late nahi hoti aur rate bhi fair hai. Customers baar baar Ganga Amrit hi maangte hain.",
  },
  {
    name: "Patel Dairy Corner",
    role: "Retailer",
    quote:
      "Double Toned milk ke regular customers bahut hai - health conscious log isi ko pasand karte hain.",
  },
  {
    name: "Gupta Restaurant",
    role: "Bulk buyer",
    quote:
      "Bulk order bhi time pe deliver hota hai, quality mein kabhi compromise nahi dekha humne.",
  },
];

const CARD_STYLES = [
  "bg-orange-50/60 border-orange-100",
  "bg-blue-50/60 border-blue-100",
  "bg-green-50/60 border-green-100",
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    if (!trackRef.current) return;
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.fromTo(
        trackRef.current,
        { xPercent: 0 },
        { xPercent: -50, duration: 32, ease: "none", repeat: -1 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div>
            <h2 className="text-orange-600 font-bold uppercase tracking-widest mb-3">Customer Voices</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">Trusted across the market.</h3>
          </div>
        </Reveal>
      </div>

      <div
        className="overflow-hidden py-4"
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.resume()}
      >
        <div ref={trackRef} className="flex w-max gap-6 px-4 items-center">
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              style={{
                ["--tilt" as string]: i % 2 === 0 ? "-2deg" : "2deg",
                ["--ty" as string]: i % 2 === 0 ? "-10px" : "10px",
              } as React.CSSProperties}
              className={`w-[300px] shrink-0 border rounded-2xl p-6 shadow-sm transition-all duration-300 [transform:rotate(var(--tilt))_translateY(var(--ty))] hover:[transform:rotate(0deg)_translateY(-4px)] hover:shadow-lg ${CARD_STYLES[i % CARD_STYLES.length]}`}
            >
              <Quote className="w-6 h-6 text-orange-300 mb-3" />
              <p className="text-slate-700 leading-relaxed mb-4 text-sm">{r.quote}</p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <div className="font-bold text-slate-900 text-sm">{r.name}</div>
              <div className="text-xs text-slate-500">{r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
