import React from "react";
import Image from "next/image";
import Link from "next/link";

const LOGO_URL = "/cloudinary-logo.webp";

interface LogoProps {
  variant?: "navbar" | "footer";
  href?: string;
}

export function Logo({ variant = "navbar", href = "/workshop" }: LogoProps) {
  const height = variant === "footer" ? 64 : 52;
  return (
    <Link href={href} className="flex items-center shrink-0" aria-label="WebScraft home">
      <Image
        src={LOGO_URL}
        alt="WebScraft"
        width={0}
        height={0}
        sizes="(max-width: 768px) 130px, 170px"
        style={{ width: "auto", height, objectFit: "contain" }}
        priority
        className="object-contain"
      />
    </Link>
  );
}
