import { FunctionCarousel } from "@/components/Functions/FunctionCarousel";
import { FUNCTION_ITEMS } from "@/components/Functions/function-items";

export function Function({ showEdgeFade = true }: { showEdgeFade?: boolean }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <span className="inline-flex rounded-full bg-turquoise/15 px-4 py-1.5 text-sm font-regular text-black">
          Funciones
        </span>

        <h2 className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl">
          <span className="block">Gestión integral</span>
          <span className="block bg-gradient-to-r from-black from-[20%] via-turquoise via-[70%] to-[#12c2b3] bg-clip-text text-transparent">
            simplificada
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-black/60 sm:text-base">
          Explora las características activas de cobro y los próximos módulos
          diseñados para automatizar la convivencia en tu comunidad.
        </p>
      </div>

      <div className="mt-4 lg:mt-6">
        <FunctionCarousel items={FUNCTION_ITEMS} showEdgeFade={showEdgeFade} />
      </div>
    </section>
  );
}
