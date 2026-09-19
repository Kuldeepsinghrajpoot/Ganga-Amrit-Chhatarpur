import React from "react";

/**
 * Soft, slow-moving color blobs for a section background. Pure CSS
 * (no JS), so it's cheap and works identically on mobile.
 */
export default function AnimatedBlobBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-orange-300/30 blur-3xl"
        style={{ animation: "blobMove 12s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-blue-300/25 blur-3xl"
        style={{ animation: "blobMove 15s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute -bottom-20 left-1/4 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-green-300/20 blur-3xl"
        style={{ animation: "blobMove 18s ease-in-out infinite" }}
      />
    </div>
  );
}
