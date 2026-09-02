import type { ReactNode } from "react";

type IntroductionStepProps = {
  title: string;
  description: string;
  icon: ReactNode;
  isActive: boolean;
  isCompleted: boolean;
};

export function IntroductionStep({
  title,
  description,
  icon,
  isActive,
  isCompleted,
}: IntroductionStepProps) {
  const highlighted = isActive || isCompleted;

  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <div
        className={`relative flex h-20 w-20 items-center justify-center rounded-full transition-colors duration-500 sm:h-24 sm:w-24 ${
          highlighted
            ? "bg-turquoise text-black"
            : "bg-[#ececec] text-black/55"
        }`}
      >
        {isActive ? (
          <span
            className="absolute -inset-2 rounded-full border-2 border-turquoise"
            aria-hidden="true"
          />
        ) : null}
        <span className="relative z-10 [&_svg]:h-10 [&_svg]:w-10 sm:[&_svg]:h-12 sm:[&_svg]:w-12">
          {icon}
        </span>
      </div>

      <h3
        className={`mt-5 max-w-[200px] text-sm font-bold leading-snug sm:text-base ${
          highlighted ? "text-black" : "text-black/50"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 max-w-[220px] text-xs font-medium leading-relaxed sm:text-sm ${
          highlighted ? "text-black/70" : "text-black/40"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
