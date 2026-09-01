import type { CSSProperties } from "react";

type GridBGProps = {
  gap?: number;
  mobileGap?: number;
  lineColor?: string;
  className?: string;
};

export function GridBG({
  gap = 85,
  mobileGap,
  lineColor = "rgba(0, 0, 0, 0.07)",
  className = "",
}: GridBGProps) {
  const resolvedMobileGap = mobileGap ?? gap;

  return (
    <div
      className={`grid-bg pointer-events-none absolute inset-0 ${className}`}
      style={
        {
          "--grid-gap-mobile": `${resolvedMobileGap}px`,
          "--grid-gap-desktop": `${gap}px`,
          "--grid-line-color": lineColor,
        } as CSSProperties
      }
      aria-hidden="true"
    />
  );
}
