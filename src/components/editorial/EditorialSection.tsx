import type { ReactNode } from "react";

interface Props {
  number?: string;
  eyebrow?: string;
  title?: ReactNode;
  children?: ReactNode;
  bg?: string;
  text?: string;
  className?: string;
}

export function EditorialSection({
  number,
  eyebrow,
  title,
  children,
  bg = "bg-background",
  text = "text-cream",
  className = "",
}: Props) {
  return (
    <section className={`${bg} ${text} ${className}`}>
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 py-24 md:py-40 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3 reveal-left">
          {number && (
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] opacity-60 mb-3">
              — {number}
            </p>
          )}
          {eyebrow && (
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] opacity-80">{eyebrow}</p>
          )}
        </div>
        <div className="col-span-12 md:col-span-9 reveal">
          {title && (
            <h2 className="font-display text-[10vw] md:text-[5vw] leading-[0.95] tracking-tight mb-10">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
