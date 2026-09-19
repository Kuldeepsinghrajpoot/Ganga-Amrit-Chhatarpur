"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const PRODUCTS = [
  { name: "Gold - Full Cream", image: "/products/gold-full-cream.png", tag: "6% Fat" },
  { name: "Double Toned Milk", image: "/products/double-toned.png", tag: "1.5% Fat" },
  { name: "Chai Special", image: "/products/chai-special.png", tag: "For the perfect chai" },
];

export default function ProductsStrip() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div>
            <h2 className="text-orange-600 font-bold uppercase tracking-widest mb-3">Our Products</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">Fresh milk, every variant.</h3>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 bg-white"
            >
              <Link href="/products">
                <div className="aspect-[3/4] relative bg-gradient-to-b from-orange-50 to-white p-6">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white/90 to-transparent">
                    <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">{p.tag}</div>
                    <div className="text-lg font-extrabold text-slate-900 flex items-center justify-between">
                      {p.name}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
