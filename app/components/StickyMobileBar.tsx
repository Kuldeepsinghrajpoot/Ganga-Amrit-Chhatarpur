"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "../lib/site";

export default function StickyMobileBar() {
  const waHref = `https://wa.me/${SITE.whatsappNumber}`;
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-slate-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <a
        href={`tel:${SITE.phoneTel}`}
        className="flex items-center justify-center gap-2 py-3.5 font-bold text-slate-900 border-r border-slate-100 active:bg-slate-50"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3.5 font-bold text-white bg-[#25D366] active:bg-[#1fb355]"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
    </div>
  );
}
