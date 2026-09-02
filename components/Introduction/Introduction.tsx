"use client";

import { useCallback, useEffect, useState } from "react";
import { IntroductionTimeline } from "@/components/Introduction/IntroductionTimeline";
import { INTRODUCTION_STEPS } from "@/components/Introduction/introduction-items";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LaptopMigrateIcon,
  PaymentIcon,
  TrainingIcon,
  UserPlusIcon,
} from "@/components/Introduction/introduction-icons";

type IntroductionProps = {
  /** Duración de cada paso en milisegundos. Por defecto 3500. */
  stepDurationMs?: number;
  /** Activa o desactiva la animación automática. Por defecto true. */
  autoplay?: boolean;
};

const STEP_ICONS = [
  <UserPlusIcon key="registro" />,
  <LaptopMigrateIcon key="config" />,
  <TrainingIcon key="formacion" />,
  <PaymentIcon key="gestion" />,
];

export function Introduction({
  stepDurationMs = 3500,
  autoplay = true,
}: IntroductionProps) {
  const lastIndex = INTRODUCTION_STEPS.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current >= lastIndex ? 0 : current + 1));
  }, [lastIndex]);

  const goPrev = useCallback(() => {
    setActiveIndex((current) => (current <= 0 ? lastIndex : current - 1));
  }, [lastIndex]);

  useEffect(() => {
    if (!autoplay || stepDurationMs <= 0) return;

    const timer = window.setTimeout(goNext, stepDurationMs);
    return () => window.clearTimeout(timer);
  }, [activeIndex, autoplay, stepDurationMs, goNext]);

  return (
    <section className="bg-[#f7f7f7] py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-start justify-between gap-6">
          <h2 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Digitaliza tu comunidad en{" "}
            <span className="bg-gradient-to-r from-black to-turquoise bg-clip-text text-transparent">
              cuatro pasos
            </span>
          </h2>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Paso anterior"
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black transition-colors hover:border-turquoise hover:text-turquoise"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Paso siguiente"
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-turquoise text-turquoise transition-colors hover:bg-turquoise/10"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <IntroductionTimeline
          steps={INTRODUCTION_STEPS}
          icons={STEP_ICONS}
          activeIndex={activeIndex}
          stepDurationMs={stepDurationMs}
        />
      </div>
    </section>
  );
}
