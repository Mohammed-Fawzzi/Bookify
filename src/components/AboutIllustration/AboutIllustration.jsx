export default function AboutIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration of open books and reading"
    >
      <rect width="560" height="420" rx="16" fill="#E8F1F7" />
      <circle cx="460" cy="80" r="48" fill="#BAE6FD" opacity="0.7" />
      <circle cx="90" cy="340" r="36" fill="#7DD3FC" opacity="0.35" />

      {/* Desk */}
      <rect x="60" y="300" width="440" height="18" rx="4" fill="#0284C7" />
      <rect x="80" y="318" width="16" height="50" rx="2" fill="#0369A1" />
      <rect x="464" y="318" width="16" height="50" rx="2" fill="#0369A1" />

      {/* Closed book left */}
      <g transform="translate(95 210)">
        <rect width="110" height="90" rx="4" fill="#0EA5E9" />
        <rect x="10" width="8" height="90" fill="#0369A1" />
        <rect x="28" y="22" width="64" height="6" rx="2" fill="#E0F2FE" />
        <rect x="28" y="38" width="48" height="6" rx="2" fill="#E0F2FE" />
        <rect x="28" y="54" width="56" height="6" rx="2" fill="#E0F2FE" />
      </g>

      {/* Closed book middle stack */}
      <g transform="translate(220 245)">
        <rect y="30" width="130" height="25" rx="3" fill="#0369A1" />
        <rect y="15" width="130" height="25" rx="3" fill="#0284C7" />
        <rect width="130" height="25" rx="3" fill="#38BDF8" />
      </g>

      {/* Open book */}
      <g transform="translate(300 160)">
        <path
          d="M10 20 C40 8 80 8 100 20 L100 130 C70 118 40 118 10 130 Z"
          fill="#F8FAFC"
          stroke="#0284C7"
          strokeWidth="3"
        />
        <path
          d="M100 20 C120 8 160 8 190 20 L190 130 C160 118 120 118 100 130 Z"
          fill="#F1F5F9"
          stroke="#0284C7"
          strokeWidth="3"
        />
        <line x1="100" y1="20" x2="100" y2="130" stroke="#0EA5E9" strokeWidth="2" />
        <rect x="28" y="42" width="52" height="4" rx="2" fill="#94A3B8" />
        <rect x="28" y="56" width="44" height="4" rx="2" fill="#94A3B8" />
        <rect x="28" y="70" width="50" height="4" rx="2" fill="#94A3B8" />
        <rect x="28" y="84" width="38" height="4" rx="2" fill="#94A3B8" />
        <rect x="118" y="42" width="52" height="4" rx="2" fill="#94A3B8" />
        <rect x="118" y="56" width="44" height="4" rx="2" fill="#94A3B8" />
        <rect x="118" y="70" width="50" height="4" rx="2" fill="#94A3B8" />
        <rect x="118" y="84" width="38" height="4" rx="2" fill="#94A3B8" />
      </g>

      {/* Bookmark */}
      <path d="M150 210 L150 170 L165 182 L180 170 L180 210" fill="#F97316" />
    </svg>
  );
}
