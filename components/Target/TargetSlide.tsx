import Image from "next/image";
import type { TargetItem } from "@/components/Target/target-items";
import { CustomCTA } from "@/components/UI";

type TargetSlideProps = {
  item: TargetItem;
  priority?: boolean;
};

export function TargetSlide({ item, priority = false }: TargetSlideProps) {
  return (
    <div className="relative h-full min-h-[640px] overflow-hidden lg:min-h-[720px]">
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="relative z-10 flex h-full min-h-[640px] flex-col justify-start px-6 pt-20 pb-24 md:justify-start md:px-10 md:py-24 lg:min-h-[720px] lg:px-16 xl:px-24">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-[#9bf8ee] px-4 py-1.5 text-sm font-regular text-black">
            {item.badge}
          </span>

          <h2 className="mt-5 font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            {item.title}{" "}
            <span className="bg-gradient-to-r from-white to-turquoise bg-clip-text text-transparent">
              {item.titleHighlight}
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-white/85 sm:text-base">
            {item.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CustomCTA
              href="/funcionamiento"
              label="Ver más"
              color="transparent"
              className="rounded-full border text-white hover:text-black"
            />
            <CustomCTA
              href="/contacto"
              label="Contáctanos"
              color="turquoise"
              className="rounded-full border-none hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
