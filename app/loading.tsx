import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 bg-white">
      <div className="relative w-16 h-20">
        {/* pouch outline */}
        <div className="absolute inset-0 rounded-t-full rounded-b-2xl border-2 border-orange-200 overflow-hidden bg-orange-50">
          {/* filling liquid */}
          <div className="absolute bottom-0 left-0 right-0 bg-orange-400/70 animate-[fill_1.1s_ease-in-out_infinite]" />
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-orange-500 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <p className="text-sm font-semibold text-slate-500 tracking-wide">Loading Ganga Amrit…</p>

      <style>{`
        @keyframes fill {
          0%, 100% { height: 20%; }
          50% { height: 80%; }
        }
      `}</style>
    </div>
  );
}
