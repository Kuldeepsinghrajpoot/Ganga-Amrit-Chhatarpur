"use client";

import React, { useEffect, useState } from "react";

/**
 * Types out `text` character by character on mount. Good for a hero
 * headline/tagline. Purely visual - the full text is still in the DOM
 * immediately for SEO/accessibility via the `aria-label`.
 */
export default function TypewriterText({
  text,
  className = "",
  speed = 70,
  startDelay = 300,
}: {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{shown}</span>
      <span aria-hidden="true" className="inline-block w-[2px] h-[0.9em] bg-current ml-1 align-middle animate-pulse" />
    </span>
  );
}
