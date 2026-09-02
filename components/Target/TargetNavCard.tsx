import type { ReactNode } from "react";

type TargetNavCardProps = {
  label: string;
  icon: ReactNode;
  isActive: boolean;
  onSelect: () => void;
};

export function TargetNavCard({
  label,
  icon,
  isActive,
  onSelect,
}: TargetNavCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-[border-color,background-color] duration-300 ${
        isActive
          ? "border-2 border-white bg-white/15 backdrop-blur-md"
          : "border border-white/35 bg-white/10 backdrop-blur-md hover:bg-white/15"
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-white">
        {icon}
      </span>
      <span className="text-sm font-semibold leading-snug text-white">
        {label}
      </span>
    </button>
  );
}
