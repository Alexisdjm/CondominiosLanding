"use client";

import { useCallback, useLayoutEffect, useRef } from "react";
import type { FAQCategory, FAQCategoryId } from "@/components/FAQ/faq-items";

type FAQNavProps = {
  categories: FAQCategory[];
  activeCategoryId: FAQCategoryId;
  onSelect: (categoryId: FAQCategoryId) => void;
};

export function FAQNav({
  categories,
  activeCategoryId,
  onSelect,
}: FAQNavProps) {
  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  const activeIndex = categories.findIndex(
    (category) => category.id === activeCategoryId,
  );

  const updateIndicator = useCallback(() => {
    const indicatorEl = indicatorRef.current;
    if (!indicatorEl) return;

    if (activeIndex < 0) {
      indicatorEl.style.opacity = "0";
      return;
    }

    const button = buttonRefs.current[activeIndex];
    if (!button) return;

    indicatorEl.style.left = `${button.offsetLeft}px`;
    indicatorEl.style.top = `${button.offsetTop}px`;
    indicatorEl.style.width = `${button.offsetWidth}px`;
    indicatorEl.style.height = `${button.offsetHeight}px`;
    indicatorEl.style.opacity = "1";
  }, [activeIndex]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useLayoutEffect(() => {
    const handleResize = () => updateIndicator();
    window.addEventListener("resize", handleResize);

    const nav = navRef.current;
    const resizeObserver =
      typeof ResizeObserver !== "undefined" && nav
        ? new ResizeObserver(handleResize)
        : null;
    resizeObserver?.observe(nav!);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
    };
  }, [updateIndicator]);

  return (
    <nav
      ref={navRef}
      className="relative flex flex-nowrap items-center justify-center gap-x-4 overflow-x-auto sm:gap-x-8 lg:gap-x-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Categorías de preguntas frecuentes"
    >
      {categories.map((category, index) => {
        const isActive = category.id === activeCategoryId;

        return (
          <button
            key={category.id}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            type="button"
            onClick={() => onSelect(category.id)}
            className={`relative z-10 shrink-0 whitespace-nowrap px-5 py-2 text-sm font-semibold transition-colors sm:text-base ${
              isActive ? "text-black" : "text-black/70 hover:text-black"
            }`}
          >
            {category.label}
          </button>
        );
      })}

      <span
        ref={indicatorRef}
        className="pointer-events-none absolute border border-dashed border-turquoise opacity-0 transition-[left,top,width,height,opacity] duration-300 ease-out"
        aria-hidden="true"
      />
    </nav>
  );
}
