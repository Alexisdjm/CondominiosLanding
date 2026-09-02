import Link from "next/link";
import { LogoIcon } from "@/components/icons/LogoIcon";

export function HeaderBrand() {
  return (
    <>
      <Link
        href="/"
        className="hidden items-center gap-2.5 shrink-0 text-black nav:flex"
      >
        <LogoIcon />
        <span className="text-lg font-bold tracking-tight">CondominiosYa</span>
      </Link>

      <Link
        href="/"
        aria-label="CondominiosYa"
        className="flex shrink-0 text-black nav:hidden"
      >
        <LogoIcon />
      </Link>
    </>
  );
}
