"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SESSION_KEY = "ganga-amrit-splash-shown";

/**
 * A short branded splash shown once per browser session (first page load
 * only - not on every route change) before revealing the site. Skips
 * itself entirely if it's already played this session.
 */
export default function SplashScreen() {
  // Both the server and the very first client render must produce
  // identical output, so this always starts as `false` here. Whether to
  // actually show the splash (based on sessionStorage, which only exists
  // in the browser) is decided a moment later inside useEffect, which
  // never runs during SSR - this avoids a hydration mismatch.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.sessionStorage.getItem(SESSION_KEY)) {
        // Reading sessionStorage (browser-only) can't happen during SSR, so
        // this one-time "should we show it" check has to run after mount.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(true);
      }
    } catch {
      // sessionStorage unavailable (privacy mode, etc.) - just skip the splash.
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
      try {
        window.sessionStorage.setItem(SESSION_KEY, "yes");
      } catch {}
    }, 3600);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center px-6"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/logo-color.png" alt="Ganga Amrit" width={210} height={172} priority />
            </motion.div>

            {/* Explicit brand text, in case the logo artwork reads small -
                this guarantees "Ganga Amrit" and "शुद्धता का वादा" are both
                clearly, separately visible on the splash. */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-2 text-center"
            >
              <div className="text-2xl font-extrabold text-slate-900 tracking-tight">Ganga Amrit</div>
              <div className="text-orange-600 font-bold text-lg mt-1">शुद्धता का वादा</div>
            </motion.div>

            <motion.div
              className="mt-6 h-1 w-40 bg-orange-100 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="h-full bg-orange-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.9, ease: "easeInOut", delay: 0.2 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}