"use client";

import Link from "next/link";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { NAV_LINKS } from "@/components/Header/nav-links";
import { isLinkActive } from "@/components/Header/utils";
import { CustomCTA } from "@/components/UI/CustomCTA";

type MobileSidebarProps = {
  pathname: string;
  isOpen: boolean;
  onClose: () => void;
};

export function MobileSidebar({
  pathname,
  isOpen,
  onClose,
}: MobileSidebarProps) {
  return (
    <>
      <button
        type="button"
        aria-label="Cerrar menú"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
      />

      <aside
        id="mobile-sidebar"
        aria-hidden={!isOpen}
        className={`fixed left-0 top-0 z-50 flex h-full w-[min(280px,85vw)] flex-col bg-white shadow-xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-gray-light px-6">
          <span className="text-lg font-bold text-black">Menú</span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={onClose}
            className="flex items-center justify-center text-black"
            tabIndex={isOpen ? 0 : -1}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-6">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                tabIndex={isOpen ? 0 : -1}
                className={`rounded-md px-3 py-3 text-base text-black transition-colors ${
                  isActive ? "font-semibold" : "font-medium"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-gray-light p-6">
          <CustomCTA
            href="/contacto"
            label="Contáctanos"
            className="w-full justify-center"
            onClick={onClose}
          />
        </div>
      </aside>
    </>
  );
}
