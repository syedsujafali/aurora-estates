import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center" | "right";
  bg?: string;
  text?: string;
  size?: "md" | "lg" | "xl";
  className?: string;
}

export function LargeTextBlock({
  eyebrow,
  children,
  align = "center",
  bg = "bg-background",
  text = "text-cream",
  size = "lg",
  className = "",
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : align === "right" ? "text-right ml-auto" : "text-left";
  const sizeCls =
    size === "xl" ? "text-[10vw] md:text-[7vw]" :
    size === "lg" ? "text-[8vw] md:text-[5.5vw]" :
    "text-[6vw] md:text-[3.5vw]";
  return (
    <section className={`${bg} ${text} px-6 md:px-12 py-28 md:py-44 ${className}`}>
      <div className={`max-w-[1300px] ${alignCls} reveal`}>
        {eyebrow && (
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] mb-10 opacity-70">{eyebrow}</p>
        )}
        <h2 className={`font-display ${sizeCls} leading-[0.95] tracking-tight`}>
          {children}
        </h2>
      </div>
    </section>
  );
}
