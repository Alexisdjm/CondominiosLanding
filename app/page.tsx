import { FAQ } from "@/components/FAQ";
import { Function } from "@/components/Functions";
import { HeroBanner } from "@/components/HeroBanner";
import { Introduction } from "@/components/Introduction";
import { Plans } from "@/components/Plans";
import { Target } from "@/components/Target";
import { GridBG } from "@/components/UI";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Function />
      <Target />
      <Introduction />
      <section className="relative overflow-hidden bg-white">
        <GridBG gap={85} />
        <Plans />
        <FAQ />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-white to-transparent sm:h-32 lg:h-40"
          aria-hidden="true"
        />
      </section>
    </>
  );
}
