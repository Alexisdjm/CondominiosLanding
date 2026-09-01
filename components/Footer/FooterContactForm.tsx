"use client";

import { SendCTA } from "@/components/UI";

export function FooterContactForm() {
  return (
    <section className="px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center">
        <h2 className="mb-12 text-center font-display text-3xl font-bold tracking-tight text-black lg:mb-8 lg:text-5xl">
          Usa{" "}
          <span className="bg-gradient-to-r from-black to-turquoise bg-clip-text text-transparent">
            CondominiosYa!
          </span>
        </h2>

        <form
          className="rounded-3xl w-[45vw] border border-white/70 bg-white/45 p-6 backdrop-blur-sm lg:p-10"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-4 lg:gap-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              <input
                type="text"
                name="name"
                placeholder="Nombre y Apellido"
                className="w-full rounded-xl border border-white bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-turquoise/40"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                className="w-full rounded-xl border border-white bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-turquoise/40"
              />
            </div>

            <input
              type="text"
              name="development"
              placeholder="Urbanización o conjunto"
              className="w-full rounded-xl border border-white bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-turquoise/40"
            />

            <input
              type="text"
              name="address"
              placeholder="Dirección"
              className="w-full rounded-xl border border-white bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-turquoise/40"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Cuéntanos algo que necesites saber..."
              className="w-full resize-none rounded-xl border border-white bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-turquoise/40"
            />
          </div>

          <div className="mt-5 flex justify-end lg:mt-6">
            <SendCTA />
          </div>
        </form>
      </div>
    </section>
  );
}
