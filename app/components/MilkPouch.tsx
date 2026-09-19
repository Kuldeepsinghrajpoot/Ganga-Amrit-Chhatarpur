
type MilkPouchProps = {
  /** Main brand accent color for this variant, e.g. "#EA580C" */
  color: string;
  /** Lighter tint of the accent used for the liquid fill */
  fill: string;
  label: string;
  fat: string;
  className?: string;
};

/**
 * A stylized stand-up milk pouch carrying the Ganga Amrit wordmark -
 * pure SVG so it renders crisp on every screen size and needs no image asset.
 */
export default function MilkPouch({ color, fill, label, fat, className = "" }: MilkPouchProps) {
  return (
    <svg viewBox="0 0 200 260" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Drop shadow */}
      <ellipse cx="100" cy="248" rx="55" ry="8" fill="#0f172a" opacity="0.08" />

      {/* Pouch body */}
      <path
        d="M40 70 Q40 30 100 28 Q160 30 160 70 L156 220 Q156 238 138 238 L62 238 Q44 238 44 220 Z"
        fill="white"
        stroke="#E2E8F0"
        strokeWidth="2"
      />

      {/* Top heat-seal band */}
      <path d="M40 70 Q40 30 100 28 Q160 30 160 70 L160 84 L40 84 Z" fill="#F1F5F9" />
      <line x1="40" y1="84" x2="160" y2="84" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 4" />
      {/* Corner notch */}
      <path d="M154 86 L168 86 L154 100 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />

      {/* Liquid fill */}
      <path d="M48 226 L152 226 L155 150 Q100 138 45 150 Z" fill={fill} opacity="0.9" />
      <path d="M45 150 Q100 138 155 150" fill="none" stroke={color} strokeWidth="2.5" opacity="0.55" />

      {/* Brand mark: small droplet badge in the variant's accent color */}
      <circle cx="100" cy="110" r="18" fill="white" stroke={color} strokeWidth="1.5" />
      <path
        d="M100 99c3.4 4.4 6.3 8.3 6.3 11.8a6.3 6.3 0 0 1-12.6 0c0-3.5 2.9-7.4 6.3-11.8Z"
        fill={color}
      />

      <text x="100" y="158" textAnchor="middle" fontSize="11" fontWeight="800" letterSpacing="0.5" fill={color}>
        GANGA AMRIT
      </text>
      <text x="100" y="176" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">
        {label}
      </text>

      {/* Fat% badge */}
      <rect x="68" y="192" width="64" height="22" rx="11" fill={color} />
      <text x="100" y="207" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">
        {fat}
      </text>
    </svg>
  );
}
