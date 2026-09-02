"use client";

import { FunctionCard } from "@/components/Functions/FunctionCard";
import type { FunctionItem } from "@/components/Functions/function-items";

type FunctionCarouselProps = {
  items: FunctionItem[];
  showEdgeFade?: boolean;
};

export function FunctionCarousel({
  items,
  showEdgeFade = true,
}: FunctionCarouselProps) {
  const loopItems = [...items, ...items];

  return (
    <div className="function-carousel group relative overflow-hidden">
      {showEdgeFade ? (
        <>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 lg:w-32"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24 lg:w-32"
            aria-hidden="true"
          />
        </>
      ) : null}

      <div className="function-carousel__track flex w-max gap-5 px-6 py-10 sm:gap-6 lg:px-10">
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
