import Link from "next/link";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BestLoansLogo({ className = "", size = "md" }: Props) {
  const dims = { sm: 32, md: 44, lg: 56 };
  const textSize = { sm: "text-lg", md: "text-2xl", lg: "text-3xl" };
  const d = dims[size];

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {/* Icon */}
      <svg
        width={d}
        height={d}
        viewBox="0 0 60 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* House roof */}
        <polygon points="30,2 4,22 56,22" fill="#1E3A8A" />
        {/* Left wall */}
        <rect x="4" y="22" width="11" height="22" fill="#1E3A8A" />
        {/* Right wall */}
        <rect x="45" y="22" width="11" height="22" fill="#1E3A8A" />
        {/* Rupee circle */}
        <circle cx="30" cy="30" r="13" fill="white" />
        {/* Rupee symbol */}
        <text
          x="30"
          y="36"
          textAnchor="middle"
          fontFamily="Arial"
          fontWeight="700"
          fontSize="15"
          fill="#1E3A8A"
        >
          ₹
        </text>
        {/* Green upward arrow */}
        <polygon points="47,6 54,19 50,19 50,28 44,28 44,19 40,19" fill="#22C55E" />
        {/* Stacked green bars */}
        <rect x="6" y="46" width="48" height="5" rx="2.5" fill="#22C55E" />
        <rect x="11" y="53" width="38" height="5" rx="2.5" fill="#22C55E" opacity="0.65" />
        <rect x="17" y="60" width="26" height="4" rx="2" fill="#22C55E" opacity="0.35" />
      </svg>

      {/* Wordmark */}
      <span className={`${textSize[size]} leading-none font-extrabold text-[#1E3A8A] tracking-tight`}>
        Best<span className="font-normal">Loans</span>
      </span>
    </Link>
  );
}
