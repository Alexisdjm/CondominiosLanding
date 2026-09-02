import { Function } from "@/components/Functions";
import { HeroBanner } from "@/components/HeroBanner";
import { Introduction } from "@/components/Introduction";
import { Plans } from "@/components/Plans";
import { Target } from "@/components/Target";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Function />
      <Target />
      <Introduction />
      <Plans />
    </>
  );
}
