import type { ReactNode } from "react";

interface Props {
  left: ReactNode;
  right: ReactNode;
  ratio?: "balanced" | "left-wide" | "right-wide";
  bg?: string;
  className?: string;
}

export function SplitLayout({
  left,
  right,
  ratio = "balanced",
  bg = "bg-background",
  className = "",
}: Props) {
  const cols =
    ratio === "left-wide"
      ? "md:grid-cols-[1.6fr_1fr]"
      : ratio === "right-wide"
        ? "md:grid-cols-[1fr_1.6fr]"
        : "md:grid-cols-2";
  return (
    <section className={`${bg} ${className}`}>
      <div
        className={`grid grid-cols-1 ${cols} gap-10 md:gap-16 lg:gap-24 items-center px-5 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-24 md:py-40 max-w-[1500px] mx-auto`}
      >
        <div className="reveal-left">{left}</div>
        <div className="reveal-right">{right}</div>
      </div>
    </section>
  );
}
