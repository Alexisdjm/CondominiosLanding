type TargetProgressProps = {
  activeId: string;
  durationMs: number;
  enabled?: boolean;
};

export function TargetProgress({
  activeId,
  durationMs,
  enabled = true,
}: TargetProgressProps) {
  if (!enabled) return null;

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center px-6 pb-12 md:hidden">
      <div
        className="h-0.5 w-[70%] overflow-hidden rounded-full bg-white/35"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progreso del slide"
      >
        <div
          key={activeId}
          className="target-progress-bar h-full w-full origin-left rounded-full bg-turquoise"
          style={{ animationDuration: `${durationMs}ms` }}
        />
      </div>
    </div>
  );
}
