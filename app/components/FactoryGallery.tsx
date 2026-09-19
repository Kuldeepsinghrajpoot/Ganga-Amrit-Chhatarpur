"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Link from "next/link";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

const IMAGES: GalleryItem[] = [
  {
    src: "/gallery/factory-1.jpg",
    alt: "Ganga Amrit processing hall with pasteurization and packaging lines",
    caption: "Processing Hall — Pasteurization Line",
  },
  {
    src: "/gallery/factory-2.jpg",
    alt: "In-house milk quality testing laboratory",
    caption: "In-House Quality Testing Lab",
  },
  {
    src: "/gallery/factory-3.jpg",
    alt: "Bulk milk chilling and receiving dock",
    caption: "Bulk Milk Chilling & Receiving Dock",
  },
  {
    src: "/gallery/factory-4.jpg",
    alt: "Lab testing setup for Fat% and SNF% analysis",
    caption: "Fat% & SNF% Lab Analysis",
  },
  {
    src: "/gallery/factory-5.jpg",
    alt: "Automatic pouch packing machine",
    caption: "Automatic Pouch Packing Line",
  },
  {
    src: "/gallery/factory-6.jpg",
    alt: "Stainless-steel milk processing plant",
    caption: "Stainless-Steel Processing Plant",
  },
  {
    src: "/gallery/factory-7.jpg",
    alt: "Chilled milk tanker used for daily dispatch",
    caption: "Daily Chilled Milk Dispatch",
  },
  {
    src: "/gallery/factory-8.jpg",
    alt: "Overhead piping and processing tanks at the facility",
    caption: "Processing Tanks & Piping",
  },
];

const AUTOPLAY_MS = 2800;

// Shortest signed distance from `index` to `active` on a circular track of
// length `len` — e.g. with 8 items, going from 0 to 7 is a distance of -1,
// not +7. This is what lets the deck wrap around seamlessly in both
// directions instead of snapping backwards.
function circularOffset(index: number, active: number, len: number) {
  let diff = index - active;
  if (diff > len / 2) diff -= len;
  if (diff < -len / 2) diff += len;
  return diff;
}

export default function FactoryGallery() {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const len = IMAGES.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback((dir: 1 | -1) => {
    setActive((prev) => (prev + dir + len) % len);
  }, [len]);

  // Autoplay — paused while hovering the deck or while the lightbox is open.
  useEffect(() => {
    if (isHovering || lightboxIndex !== null) return;
    timerRef.current = setInterval(() => advance(1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovering, lightboxIndex, advance]);

  // Keyboard navigation inside the lightbox.
  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % len));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + len) % len));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, len]);

  return (
    <section
      id="factory-gallery"
      className="relative py-20 sm:py-24 bg-slate-950 overflow-hidden"
    >
      {/* soft ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-orange-600/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-orange-400 font-bold text-sm tracking-widest uppercase mb-4 bg-orange-500/10 px-4 py-2 rounded-full">
            <Maximize2 className="w-4 h-4" />
            <span>Inside The Facility</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            A Look Inside Our Factory
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Hover to pause, click any photo to zoom in — a real glimpse of our processing floor,
            testing lab and dispatch, straight from Chhatarpur.
          </p>
        </div>

        {/* Coverflow deck */}
        <div
          className="relative h-[300px] sm:h-[380px] lg:h-[440px] select-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {IMAGES.map((item, index) => {
            const offset = circularOffset(index, active, len);
            const abs = Math.abs(offset);
            const visible = abs <= 2;

            // Center card lifts up and scales up; side cards sit lower,
            // smaller, and fade out toward the edges of the deck.
            const translateX = offset * 230;
            const translateY = offset === 0 ? -18 : 24 + abs * 8;
            const scale = offset === 0 ? 1 : abs === 1 ? 0.78 : 0.58;
            const opacity = !visible ? 0 : abs === 0 ? 1 : abs === 1 ? 0.85 : 0.45;
            const zIndex = 20 - abs;
            const rotateY = offset === 0 ? 0 : offset > 0 ? -10 : 10;

            return (
              <motion.button
                type="button"
                key={item.src}
                aria-label={`Open photo: ${item.caption}`}
                onClick={() => setLightboxIndex(index)}
                animate={{
                  x: translateX,
                  y: translateY,
                  scale,
                  opacity,
                  rotateY,
                  zIndex,
                }}
                whileHover={
                  visible
                    ? { scale: scale + 0.06, y: translateY - 6, transition: { duration: 0.25 } }
                    : undefined
                }
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                style={{ pointerEvents: visible ? "auto" : "none" }}
                className="absolute left-1/2 top-1/2 -ml-[140px] -mt-[190px] sm:-ml-[160px] sm:-mt-[210px] w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/50 cursor-pointer group"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm sm:text-base font-bold drop-shadow-sm">
                    {item.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </motion.button>
            );
          })}

          {/* Prev / Next controls */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => advance(-1)}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-orange-600 text-white backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => advance(1)}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-orange-600 text-white backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {IMAGES.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Go to photo ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? "w-7 bg-orange-500" : "w-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-600/20"
          >
            Schedule a Factory Visit
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : (i - 1 + len) % len));
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-orange-600 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : (i + 1) % len));
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-orange-600 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.div
              key={IMAGES[lightboxIndex].src}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={IMAGES[lightboxIndex].src}
                alt={IMAGES[lightboxIndex].alt}
                className="w-full h-full max-h-[85vh] object-contain bg-slate-900"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-white font-bold">{IMAGES[lightboxIndex].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}