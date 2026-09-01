"use client";

import { usePathname } from "next/navigation";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { DesktopNav } from "@/components/Header/DesktopNav";
import { HeaderActions } from "@/components/Header/HeaderActions";
import { HeaderBrand } from "@/components/Header/HeaderBrand";
import { MobileSidebar } from "@/components/Header/MobileSidebar";
import { useSidebar } from "@/components/Header/useSidebar";

export function Header() {
  const pathname = usePathname() ?? "";
  const { isOpen, open, close } = useSidebar();

  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          aria-controls="mobile-sidebar"
          onClick={open}
          className="flex h-10 w-10 items-center justify-start text-black md:hidden"
        >
          <MenuIcon />
        </button>

        <HeaderBrand />
        <DesktopNav pathname={pathname} />
        <HeaderActions />
      </div>

      <MobileSidebar pathname={pathname} isOpen={isOpen} onClose={close} />
    </header>
  );
}
