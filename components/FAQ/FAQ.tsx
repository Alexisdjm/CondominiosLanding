"use client";

import { useMemo, useState } from "react";
import { FAQAccordion } from "@/components/FAQ/FAQAccordion";
import { FAQNav } from "@/components/FAQ/FAQNav";
import {
  FAQ_CATEGORIES,
  FAQ_ITEMS,
  type FAQCategoryId,
} from "@/components/FAQ/faq-items";
import { SectionBadge } from "@/components/UI";

export function FAQ() {
  const [activeCategoryId, setActiveCategoryId] =
    useState<FAQCategoryId>("general");

  const categoryItems = useMemo(
    () => FAQ_ITEMS.filter((item) => item.categoryId === activeCategoryId),
    [activeCategoryId],
  );

  return (
    <div className="relative py-16 lg:py-24">
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <SectionBadge>FAQs</SectionBadge>

          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-black to-turquoise bg-clip-text text-transparent">
              Preguntas
            </span>{" "}
            <span className="text-black">Frecuentes</span>
          </h2>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-5xl px-6 sm:mt-12 lg:px-10">
        <FAQNav
          categories={FAQ_CATEGORIES}
          activeCategoryId={activeCategoryId}
          onSelect={setActiveCategoryId}
        />
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-3xl px-6 sm:mt-12 lg:px-10">
        <FAQAccordion key={activeCategoryId} items={categoryItems} />
      </div>
    </div>
  );
}
