"use client";

import { FunctionCard } from "@/components/Functions/FunctionCard";
import type { FunctionItem } from "@/components/Functions/function-items";

type FunctionCarouselProps = {
  items: FunctionItem[];
};

export function FunctionCarousel({ items }: FunctionCarouselProps) {
  const loopItems = [...items, ...items];

  return (
    <div className="function-carousel group overflow-hidden">
      <div className="function-carousel__track flex w-max gap-5 px-6 sm:gap-6 lg:px-10 py-10">
        {loopItems.map((item, index) => (
          <FunctionCard
            key={`${item.title}-${index}`}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
