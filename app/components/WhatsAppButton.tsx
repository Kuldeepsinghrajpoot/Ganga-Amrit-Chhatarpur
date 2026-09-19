"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE } from "../lib/site";

export default function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi Ganga Amrit, I'd like to know more about your products."
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="hidden md:flex fixed bottom-6 right-6 z-[60] items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-xl shadow-green-900/30"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <svg
        viewBox="0 0 32 32"
        className="relative w-8 h-8 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.35 3 3.96 8.39 3.96 15.04c0 2.24.6 4.36 1.65 6.18L3 29l7.95-2.55a12.03 12.03 0 0 0 5.05 1.1h.01c6.65 0 12.04-5.39 12.04-12.04C28.05 8.39 22.66 3 16.004 3Zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-4.72 1.51 1.53-4.6-.24-.38a9.86 9.86 0 0 1-1.5-5.24c0-5.45 4.43-9.88 9.87-9.88a9.83 9.83 0 0 1 9.87 9.87c0 5.45-4.43 9.32-9.39 9.32Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </motion.a>
  );
}
