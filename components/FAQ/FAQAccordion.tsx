"use client";

import { useState } from "react";
import { FAQItem } from "@/components/FAQ/FAQItem";
import type { FAQItem as FAQItemType } from "@/components/FAQ/faq-items";

type FAQAccordionProps = {
  items: FAQItemType[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(
    items[0]?.id ?? null,
  );

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  if (items.length === 0) {
    return (
      <p className="text-center text-sm font-medium text-black/50">
        Próximamente agregaremos preguntas en esta categoría.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {items.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
