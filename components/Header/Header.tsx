"use client";

import { usePathname } from "next/navigation";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { DesktopNav } from "@/components/Header/DesktopNav";
import { HeaderActions } from "@/components/Header/HeaderActions";
import { HeaderBrand } from "@/components/Header/HeaderBrand";
import { MobileSidebar } from "@/components/Header/MobileSidebar";
import { useScrolled } from "@/components/Header/useScrolled";
import { useSidebar } from "@/components/Header/useSidebar";

export function Header() {
  const pathname = usePathname() ?? "";
  const { isOpen, open, close } = useSidebar();
  const isScrolled = useScrolled();

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color] duration-300 ${
          isScrolled
            ? "border-b border-black/5 bg-white/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            aria-controls="mobile-sidebar"
            onClick={open}
            className="flex h-10 w-10 items-center justify-start text-black nav:hidden"
          >
            <MenuIcon />
          </button>

          <HeaderBrand />
          <DesktopNav pathname={pathname} />
          <HeaderActions />
        </div>
      </header>

      <MobileSidebar pathname={pathname} isOpen={isOpen} onClose={close} />
    </>
  );
}
