"use client";

import React, { useEffect, useRef } from "react";

/**
 * Leaves a trail of small fading milk-drop dots behind the cursor.
 * Desktop only (skips touch devices via a pointer:fine media check) and
 * throttled so it never spams the DOM.
 */
export default function CursorMilkTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTime = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    function handleMove(e: MouseEvent) {
      const now = Date.now();
      if (now - lastTime.current < 60) return;
      lastTime.current = now;

      const drop = document.createElement("span");
      drop.textContent = "•";
      drop.style.position = "fixed";
      drop.style.left = `${e.clientX}px`;
      drop.style.top = `${e.clientY}px`;
      drop.style.color = "#FDBA74";
      drop.style.fontSize = "14px";
      drop.style.pointerEvents = "none";
      drop.style.zIndex = "9999";
      drop.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";
      drop.style.transform = "translate(-50%, -50%) scale(1)";
      drop.style.opacity = "0.7";
      containerRef.current?.appendChild(drop);

      requestAnimationFrame(() => {
        drop.style.transform = "translate(-50%, 10px) scale(0.3)";
        drop.style.opacity = "0";
      });

      setTimeout(() => drop.remove(), 650);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div ref={containerRef} aria-hidden="true" />;
}
