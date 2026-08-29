"use client";

import { useId } from "react";

type LogoProps = {
  variant?: "inline" | "stacked";
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Virella Publishers logo, rebuilt in the brand colors.
 * "dark" tone = maroon text (for light backgrounds).
 * "light" tone = cream text (for the dark footer).
 * To use your exact logo image instead, drop it in /public and
 * swap this component for an <Image> in Header.tsx and Footer.tsx.
 */
export function Logo({ variant = "inline", tone = "dark", className = "" }: LogoProps) {
  const gid = useId();
  const textColor = tone === "light" ? "#f7f1e3" : "#5c1d12";
  const subColor = tone === "light" ? "#e7c77e" : "#7c3a22";

  const Mark = (
    <span
      className="relative inline-block shrink-0"
      style={{ width: "2.55em", height: "2.75em" }}
      aria-hidden="true"
    >
      {/* Serif V */}
      <span
        className="absolute inset-0 flex items-center justify-center font-display"
        style={{
          color: textColor,
          fontSize: "2.7em",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        V
      </span>

      {/* Gold feather resting over the right arm of the V */}
      <svg
        viewBox="0 0 64 128"
        className="absolute"
        style={{
          width: "1.15em",
          height: "2.3em",
          right: "0.12em",
          top: "0.16em",
          transform: "rotate(19deg)",
          filter: "drop-shadow(0 2px 3px rgba(60,24,12,0.28))",
        }}
      >
        <defs>
          <linearGradient id={`fth-${gid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f3e2b4" />
            <stop offset="0.45" stopColor="#d8ab55" />
            <stop offset="1" stopColor="#b47f2c" />
          </linearGradient>
        </defs>
        {/* blade */}
        <path
          d="M34 5 C48 20 55 44 52 64 C50 84 41 104 31 121 C22 104 14 84 13 64 C11 43 20 20 34 5 Z"
          fill={`url(#fth-${gid})`}
        />
        {/* shaft */}
        <path
          d="M33 11 C32 46 31 82 31 118"
          fill="none"
          stroke="#7c3a22"
          strokeOpacity="0.55"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* barbs */}
        <g stroke="#8a5a24" strokeOpacity="0.4" strokeWidth="1.1" strokeLinecap="round">
          <path d="M32 24 L22 20 M32 24 L42 20" />
          <path d="M32 40 L18 35 M32 40 L46 35" />
          <path d="M32 56 L16 52 M32 56 L48 52" />
          <path d="M31 72 L17 70 M31 72 L47 70" />
          <path d="M31 88 L20 88 M31 88 L44 88" />
          <path d="M31 103 L23 105 M31 103 L40 105" />
        </g>
      </svg>
    </span>
  );

  const Wordmark = (
    <span className={variant === "stacked" ? "flex flex-col items-center" : "flex flex-col"}>
      <span
        className="font-display leading-none"
        style={{
          color: textColor,
          fontSize: "1.5em",
          fontWeight: 800,
          letterSpacing: "0.12em",
        }}
      >
        VIRELLA
      </span>
      <span
        className="leading-none"
        style={{
          color: subColor,
          fontSize: "0.82em",
          fontWeight: 700,
          letterSpacing: "0.32em",
          marginTop: "0.35em",
          textTransform: "uppercase",
        }}
      >
        Publisher&rsquo;s
      </span>
    </span>
  );

  if (variant === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center gap-2 ${className}`}>
        {Mark}
        {Wordmark}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {Mark}
      {Wordmark}
    </span>
  );
}
