import type { PlanItem } from "@/components/Plans/plan-items";
import { CustomCTA } from "@/components/UI";

type PlanCardProps = {
  plan: PlanItem;
};

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-turquoise/20 text-turquoise">
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        aria-hidden="true"
      >
        <path
          d="M3.5 8.5l3 3 6-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <article
      className={`relative flex h-full w-[min(88vw,380px)] shrink-0 flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_12px_rgba(0,0,0,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_18px_rgba(80,218,205,0.55)] md:w-auto ${
        plan.featured ? "ring-1 ring-turquoise/50" : "border border-black/5"
      }`}
    >
      {plan.featured ? (
        <>
          <div
            className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-turquoise/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-8 -bottom-8 h-36 w-36 rounded-full bg-turquoise/25 blur-3xl"
            aria-hidden="true"
          />
        </>
      ) : null}

      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-8">
        <div className="relative flex min-h-70 flex-col justify-between overflow-hidden rounded-2xl bg-[#fcfcfc] p-5 sm:p-6">
          <div
            className="pointer-events-none absolute -bottom-24 -right-20 h-42 w-42 rounded-full bg-gradient-to-br from-turquoise via-turquoise to-turquoise/75 blur-[60px]"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h3 className="text-lg font-bold text-black sm:text-xl">
              {plan.name}
            </h3>

            <p className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-black to-turquoise bg-clip-text text-transparent">
                {plan.price}
              </span>
              {plan.priceSuffix ? (
                <span className="ml-1 text-sm font-medium text-black/40">
                  {plan.priceSuffix}
                </span>
              ) : null}
            </p>

            <p className="mt-3 text-sm font-medium leading-relaxed text-black/55">
              {plan.description}
            </p>
          </div>

          <div className="relative z-10 mt-6">
            <CustomCTA
              href={plan.ctaHref}
              label={plan.ctaLabel}
              color="turquoise"
              className="w-[65%] !min-h-10 rounded-full border-none px-5 py-2.5 text-sm hover:text-white"
            />
          </div>
        </div>

        <ul className="mt-8 flex flex-col gap-3.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-sm font-medium leading-relaxed text-black/70">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
