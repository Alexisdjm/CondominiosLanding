import Image from "next/image";
import { images } from "@/assets/images";
import { CustomCTA, GradientBG, GridBG } from "@/components/UI";

export function HeroBanner() {
  const { dashboard } = images;

  return (
    <section className="relative -mt-20 overflow-hidden bg-white pt-32 pb-0 lg:pt-36">
      <GridBG gap={85} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-10">
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl">
          <span className="block">
            Gestión de{" "}
            <span className="bg-gradient-to-r from-black to-turquoise bg-clip-text text-transparent">
              condominios
            </span>
          </span>
          <span className="block">clara y efectiva.</span>
        </h1>

        <p className="hidden mx-auto mt-2 max-w-2xl text-sm font-medium leading-relaxed text-black/60 sm:block sm:text-base lg:mt-2">
          Enfocada en automatización y tranquilidad Simplifica la
          administración, automatiza cobros y mantén a tu comunidad conectada
        </p>

        <div className="mt-2 flex justify-center lg:mt-4">
          <CustomCTA href="/" label="Comienza ahora" className="hover:text-black hover:border-white rounded-xl mt-6 sm:mt-0" color="black" />
        </div>
      </div>

      <div className="relative mt-6 lg:mt-8">
        <GradientBG />

        <div className="relative z-10 mx-auto w-full max-w-[748px] translate-y-10 px-4 sm:translate-y-12 lg:translate-y-10 lg:px-6">
          <div className="mx-auto w-full max-w-[700px]">
            <div className="rounded-2xl border border-white/70 bg-white/45 p-3 backdrop-blur-md sm:p-4 lg:rounded-3xl lg:p-5">
              <Image
                src={dashboard.src}
                alt={dashboard.alt}
                width={dashboard.displayWidth}
                height={dashboard.displayHeight}
                priority
                quality={92}
                className="mx-auto h-auto w-full max-w-[700px] object-contain"
                sizes="(max-width: 768px) 90vw, 700px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
