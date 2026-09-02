import Image from "next/image";
import type { FunctionItem } from "@/components/Functions/function-items";

type FunctionCardProps = FunctionItem;

export function FunctionCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
}: FunctionCardProps) {
  return (
    <article className="relative top-0 flex w-[min(88vw,300px)] flex-col overflow-hidden rounded-3xl bg-black shadow-[0_8px_12px_rgba(0,0,0,0.35)] transition-[top,box-shadow] duration-300 sm:w-[320px] md:hover:-top-[15px] md:hover:shadow-[0_8px_12px_rgba(0,0,0,0.55)]">
      <div className="relative aspect-[4/3] bg-black">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top"
            sizes="320px"
          />
        ) : (
          <div className="absolute inset-3 rounded-2xl border border-white/10 bg-white/5" />
        )}
      </div>

      <div className="px-5 py-4">
        <h3 className="font-display text-base font-bold text-white sm:text-lg">
          {title}
        </h3>
        <p className="mt-1 text-xs font-medium leading-relaxed text-white/65 sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
}
