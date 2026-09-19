"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home, Milk } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-orange-50/40 px-4 overflow-hidden relative">
      {/* floating milk drops in the background */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-orange-200"
          style={{ left: `${(i * 13 + 5) % 100}%`, top: `${(i * 27 + 8) % 100}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        >
          <Milk className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Tipped-over pouch illustration */}
        <motion.svg
          viewBox="0 0 220 180"
          className="w-56 mx-auto mb-8"
          initial={{ rotate: 0 }}
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="110" cy="150" rx="70" ry="10" fill="#0f172a" opacity="0.06" />
          <g transform="rotate(70 90 90)">
            <path
              d="M60 40 Q60 15 100 12 Q140 15 140 40 L136 130 Q136 145 120 145 L80 145 Q64 145 64 130 Z"
              fill="white"
              stroke="#FDBA74"
              strokeWidth="2"
            />
            <text x="100" y="90" textAnchor="middle" fontSize="13" fontWeight="800" fill="#EA580C">
              GANGA
            </text>
            <text x="100" y="106" textAnchor="middle" fontSize="13" fontWeight="800" fill="#EA580C">
              AMRIT
            </text>
          </g>
          {/* spilled puddle */}
          <motion.path
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            d="M30 150 Q60 130 110 148 Q160 166 190 148 L190 165 L30 165 Z"
            fill="#FED7AA"
          />
        </motion.svg>

        <h1 className="text-7xl sm:text-8xl font-black text-orange-600 mb-2 tracking-tight">404</h1>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
          Lagta hai yeh doodh spill ho gaya!
        </h2>
        <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto">
          The page you&apos;re looking for has been poured out. Let&apos;s get you back to something fresh.
        </p>

        <Link href="/">
          <motion.span
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl shadow-orange-600/20 cursor-pointer"
          >
            <Home className="mr-2 w-5 h-5" /> Back to Home
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.span>
        </Link>
      </div>
    </div>
  );
}
