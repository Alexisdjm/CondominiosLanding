"use client";

import { useRef } from "react";
import { PlanCard } from "@/components/Plans/PlanCard";
import type { PlanItem } from "@/components/Plans/plan-items";

type PlansSliderProps = {
  plans: PlanItem[];
};

export function PlansSlider({ plans }: PlansSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(min-width: 768px)").matches) return;

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };
    track.setPointerCapture(event.pointerId);
    track.classList.add("cursor-grabbing");
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragState.current.isDragging) return;

    const delta = event.clientX - dragState.current.startX;
    track.scrollLeft = dragState.current.scrollLeft - delta;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragState.current.isDragging) return;

    dragState.current.isDragging = false;
    track.releasePointerCapture(event.pointerId);
    track.classList.remove("cursor-grabbing");
  };

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      className="plans-slider flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing md:grid md:max-w-4xl md:mx-auto md:cursor-default md:snap-none md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
    >
      {plans.map((plan) => (
        <div key={plan.id} className="snap-center md:snap-align-none md:w-auto">
          <PlanCard plan={plan} />
        </div>
      ))}
    </div>
  );
}
