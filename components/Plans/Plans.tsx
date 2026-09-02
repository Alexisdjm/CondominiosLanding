import { PlansSlider } from "@/components/Plans/PlansSlider";
import { PLAN_ITEMS } from "@/components/Plans/plan-items";
import { GridBG } from "@/components/UI";

export function Plans() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <GridBG gap={85} />

      <div className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <span className="inline-flex rounded-full bg-turquoise/15 px-4 py-1.5 text-sm font-medium">
            <span className="bg-gradient-to-r from-black to-turquoise bg-clip-text text-transparent">
              Precio
            </span>
          </span>

          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Elige el mejor plan para tu{" "}
            <span className="bg-gradient-to-r from-black to-turquoise bg-clip-text text-transparent">
              condominio
            </span>
          </h2>
        </div>

        <div className="mt-12 lg:mt-14">
          <PlansSlider plans={PLAN_ITEMS} />
        </div>
      </div>
    </section>
  );
}
