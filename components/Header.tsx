"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "@/components/LogoIcon";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/planes", label: "Planes" },
  { href: "/funcionamiento", label: "Funcionamiento" },
  { href: "/introduccion", label: "Introducción" },
  { href: "/faqs", label: "FAQs" },
];

function UserIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20c0-3.314 3.134-6 7-6s7 2.686 7 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname() ?? "";

  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 text-black">
          <LogoIcon />
          <span className="text-lg font-bold tracking-tight">
            CondominiosYa
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-sm font-medium text-black transition-colors hover:text-turquoise ${
                  isActive
                    ? "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black after:content-['']"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <button
            type="button"
            aria-label="Cuenta de usuario"
            className="flex items-center justify-center text-black transition-colors hover:text-turquoise"
          >
            <UserIcon />
          </button>

          <Link
            href="/contacto"
            className="flex items-center gap-1.5 rounded-full bg-turquoise px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Contáctanos
            <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
