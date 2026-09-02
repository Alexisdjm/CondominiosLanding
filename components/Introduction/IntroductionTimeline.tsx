import type { CSSProperties, ReactNode } from "react";
import { IntroductionStep } from "@/components/Introduction/IntroductionStep";
import type { IntroductionStepItem } from "@/components/Introduction/introduction-items";

type IntroductionTimelineProps = {
  steps: IntroductionStepItem[];
  icons: ReactNode[];
  activeIndex: number;
  stepDurationMs: number;
};

export function IntroductionTimeline({
  steps,
  icons,
  activeIndex,
  stepDurationMs,
}: IntroductionTimelineProps) {
  const segments = Math.max(steps.length - 1, 1);
  const completedWidth = (activeIndex / segments) * 100;

  return (
    <div className="relative mt-12 lg:mt-16">
      <div className="pointer-events-none absolute top-10 right-[12.5%] left-[12.5%] hidden h-0.5 bg-black/10 md:block sm:top-12" />

      <div
        className="pointer-events-none absolute top-10 left-[12.5%] hidden h-0.5 overflow-hidden md:block sm:top-12"
        style={{ width: "75%" }}
      >
        <div
          className="absolute inset-y-0 left-0 bg-turquoise transition-[width] duration-300 ease-linear"
          style={{ width: `${completedWidth}%` }}
        />
        {activeIndex < segments ? (
          <div
            key={`progress-${activeIndex}`}
            className="introduction-progress-segment absolute inset-y-0 bg-turquoise"
            style={
              {
                left: `${completedWidth}%`,
                width: `${100 / segments}%`,
                animationDuration: `${stepDurationMs}ms`,
              } as CSSProperties
            }
          />
        ) : null}
      </div>

      <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-12 md:grid-cols-4 md:gap-6">
        {steps.map((step, index) => (
          <IntroductionStep
            key={step.id}
            title={step.title}
            description={step.description}
            icon={icons[index]}
            isActive={index === activeIndex}
            isCompleted={index < activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
