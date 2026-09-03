"use client";

import type { FAQItem } from "@/components/FAQ/faq-items";

type FAQItemProps = {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
};

function MinusIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M3 8h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M8 3v10M3 8h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      className={`rounded-2xl transition-colors duration-300 ${
        isOpen
          ? "bg-black text-white"
          : "border border-black/10 bg-white text-black"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="text-sm font-bold leading-snug sm:text-base">
          {item.question}
        </span>
        <span
          className={`flex shrink-0 items-center justify-center text-turquoise ${
            isOpen ? "" : ""
          }`}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-white/85 sm:px-6 sm:pb-6 sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
