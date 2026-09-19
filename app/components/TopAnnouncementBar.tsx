"use client";

import React from "react";
import MarqueeBanner from "./MarqueeBanner";
import { SITE } from "../lib/site";

export default function TopAnnouncementBar() {
  return (
    <div className="bg-slate-900 text-white text-xs sm:text-sm">
      <MarqueeBanner
        speed={30}
        items={[
          `📞 ${SITE.phoneDisplay}`,
          "✅ FSSAI Licensed",
          "✅ GST Registered",
          "🥛 शुद्धता का वादा",
          "🚚 Fresh Daily Supply - Chhatarpur, MP",
        ]}
        className="py-2"
      />
    </div>
  );
}
