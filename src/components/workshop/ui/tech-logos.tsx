import React from "react";

export function AntigravityLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" {...props}>
      {/* Smooth Bell/Arch Wave matching Google Antigravity logo */}
      <path d="M100 28 C126 28 148 60 162 108 C172 142 188 168 194 172 C184 172 166 166 150 142 C134 116 122 84 100 84 C78 84 66 116 50 142 C34 166 16 172 6 172 C12 168 28 142 38 108 C52 60 74 28 100 28 Z" />
    </svg>
  );
}

export function OpenCodeLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      {/* OpenCode frame emblem */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10 H85 V90 H15 V10 Z M32 26 H68 V74 H32 V26 Z"
      />
      <rect x="32" y="26" width="36" height="22" opacity="0.4" />
    </svg>
  );
}

export function NextjsLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 180" fill="none" {...props}>
      <mask
        height="180"
        id="mask0_next"
        maskUnits="userSpaceOnUse"
        width="180"
        x="0"
        y="0"
        style={{ maskType: "alpha" }}
      >
        <circle cx="90" cy="90" fill="black" r="90" />
      </mask>
      <g mask="url(#mask0_next)">
        <circle
          cx="90"
          cy="90"
          fill="currentColor"
          r="88"
          stroke="currentColor"
          strokeWidth="4"
          fillOpacity="0.1"
        />
        <path
          d="M149.508 157.438L69.1478 54H54V125.979H66.6346V69.856L139.73 164.717C143.208 162.484 146.488 160.038 149.508 157.438Z"
          fill="currentColor"
        />
        <rect fill="currentColor" height="72" width="12.6316" x="115" y="54" />
      </g>
    </svg>
  );
}

export function SupabaseLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      {/* Supabase folded lightning emblem */}
      <path d="M21.362 9.354H12V.304a.3.3 0 0 0-.528-.198L.308 13.064a.3.3 0 0 0 .228.498H12v9.05a.3.3 0 0 0 .528.198l11.164-12.958a.3.3 0 0 0-.228-.498z" />
    </svg>
  );
}

export function ClerkLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      {/* Clerk arc & avatar geometry */}
      <path d="M50 12 C70.98 12 88 29.02 88 50 C88 70.98 70.98 88 50 88 C38.5 88 28.2 82.8 21.3 74.6 L31.5 65.2 C35.8 70.8 42.5 74.4 50 74.4 C63.48 74.4 74.4 63.48 74.4 50 C74.4 36.52 63.48 25.6 50 25.6 C41.2 25.6 33.6 30.2 29.4 37.2 L17.8 29.6 C24.4 18.9 36.3 12 50 12 Z" />
      <circle cx="50" cy="46" r="11" />
      <path d="M35 73 C35 63 41.7 60 50 60 C58.3 60 65 63 65 73 Z" />
    </svg>
  );
}

export function CloudinaryLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      {/* Cloudinary cloud outline with 3 upward arrows */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72 32 C69.5 22.8 61.2 16 51.2 16 C40.8 16 32.2 23.3 30.1 33 C20.3 34.5 12.8 43 12.8 53.2 C12.8 64.6 22 73.8 33.4 73.8 H70 C79.9 73.8 88 65.7 88 55.8 C88 46.4 80.8 38.6 71.6 37.9 L72 32 Z M33.4 67.8 C25.3 67.8 18.8 61.3 18.8 53.2 C18.8 45.7 24.3 39.5 31.7 38.7 L34.5 38.4 L35.2 35.6 C36.9 28.2 43.5 22.8 51.2 22.8 C59.2 22.8 66 28.6 67.4 36.4 L68.2 41 L72.8 41.3 C78.8 41.8 83.5 46.9 83.5 53 C83.5 59.5 78.2 64.8 71.7 64.8 H33.4 V67.8 Z"
      />
      {/* Arrow 1 */}
      <path d="M36 62 V48 L32 52 L36 42 L40 52 L36 48 V62 Z" />
      {/* Arrow 2 (Center taller) */}
      <path d="M50 62 V44 L45 49 L50 36 L55 49 L50 44 V62 Z" />
      {/* Arrow 3 */}
      <path d="M64 62 V48 L60 52 L64 42 L68 52 L64 48 V62 Z" />
    </svg>
  );
}

export function VercelGitHubLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      {/* Vercel Equilateral Triangle */}
      <path d="M50 16 L88 78 H12 Z" />
    </svg>
  );
}

export function GitHubLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}
