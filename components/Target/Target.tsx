"use client";

import { useEffect, useState } from "react";
import { TargetNav } from "@/components/Target/TargetNav";
import { TargetProgress } from "@/components/Target/TargetProgress";
import { TargetSlide } from "@/components/Target/TargetSlide";
import { TARGET_ITEMS } from "@/components/Target/target-items";

type TargetProps = {
  /** Delay entre slides en milisegundos. Por defecto 8000 (8s). */
  autoplayDelayMs?: number;
  /** Activa o desactiva el autoslide. Por defecto true. */
  autoplay?: boolean;
};

export function Target({
  autoplay = true,
  autoplayDelayMs = 8000,
}: TargetProps) {
  const [activeId, setActiveId] = useState(
    TARGET_ITEMS[2]?.id ?? TARGET_ITEMS[0].id,
  );
  const activeIndex = Math.max(
    0,
    TARGET_ITEMS.findIndex((item) => item.id === activeId),
  );

  useEffect(() => {
    if (!autoplay || autoplayDelayMs <= 0) return;

    const timer = window.setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = TARGET_ITEMS.findIndex(
          (item) => item.id === currentId,
        );
        const nextIndex = (currentIndex + 1) % TARGET_ITEMS.length;
        return TARGET_ITEMS[nextIndex].id;
      });
    }, autoplayDelayMs);

    return () => window.clearInterval(timer);
  }, [autoplay, autoplayDelayMs, activeId]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[800px] lg:min-h-[720px]">
        {TARGET_ITEMS.map((item, index) => {
          const isActive = item.id === activeId;
          const offset = index - activeIndex;

          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${
                isActive
                  ? "z-10 translate-x-0 opacity-100"
                  : offset < 0
                    ? "z-0 -translate-x-8 opacity-0"
                    : "z-0 translate-x-8 opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <TargetSlide item={item} priority={isActive} />
            </div>
          );
        })}
      </div>

      <TargetNav
        items={TARGET_ITEMS}
        activeId={activeId}
        onSelect={setActiveId}
      />

      <TargetProgress
        activeId={activeId}
        durationMs={autoplayDelayMs}
        enabled={autoplay}
      />
    </section>
  );
}
