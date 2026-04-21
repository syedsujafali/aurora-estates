import type { ReactNode } from "react";

interface Props {
  src: string;
  alt: string;
  height?: string;
  overlay?: ReactNode;
  parallax?: boolean;
  className?: string;
}

export function FullBleedImage({ src, alt, height = "h-screen", overlay, className = "" }: Props) {
  return (
    <section className={`relative w-full ${height} overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover reveal-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/70" />
      {overlay && <div className="relative z-10 h-full w-full">{overlay}</div>}
    </section>
  );
}
