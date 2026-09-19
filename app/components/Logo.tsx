import React from "react";
import Image from "next/image";

/**
 * Ganga Amrit brand lockup (the actual supplied logo artwork).
 * Use variant="white" on dark backgrounds (footer, dark hero sections).
 */
export default function Logo({
  className = "h-10 w-auto",
  variant = "color",
}: {
  className?: string;
  variant?: "color" | "white";
}) {
  const src = variant === "white" ? "/logo-white.png" : "/logo-color.png";
  return (
    <Image
      src={src}
      alt="Ganga Amrit logo"
      width={220}
      height={180}
      className={`${className} object-contain`}
      priority
    />
  );
}
