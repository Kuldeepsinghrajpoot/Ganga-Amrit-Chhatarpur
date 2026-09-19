import React from "react";

/**
 * Wrap a heading's text in this for a slowly shifting gradient fill -
 * a subtle "automatic color changing" effect for section titles.
 */
export default function GradientText({
  children,
  className = "",
  from = "from-orange-600",
  via = "via-amber-500",
  to = "to-orange-600",
}: {
  children: React.ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-r ${from} ${via} ${to} bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradientShift_4s_ease_infinite] ${className}`}
    >
      {children}
    </span>
  );
}
