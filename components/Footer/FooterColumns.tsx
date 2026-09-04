import Link from "next/link";
import { NAV_LINKS } from "@/components/Header/nav-links";
import {
  FOOTER_CONTACT,
  FOOTER_LEGAL_LINKS,
} from "@/components/Footer/footer-links";
import { LogoIcon } from "@/components/icons/LogoIcon";

export function FooterColumns() {
  return (
    <section className="border-t border-black/5 px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-20">
        <div className="flex w-full max-w-sm flex-col gap-4 lg:w-[35%] lg:max-w-none lg:shrink-0">
          <Link href="/" className="flex items-center gap-2.5 text-black">
            <LogoIcon width={36} height={34} />
            <span className="text-lg font-bold tracking-tight">
              CondominiosYa
            </span>
          </Link>
          <p className="text-sm font-medium leading-relaxed text-black/55">
            Gestión clara y efectiva para la administración de tu condominio.
          </p>
        </div>

        <div className="grid w-full grid-cols-3 gap-4 sm:gap-8 lg:flex-1">
          <div>
            <h3 className="text-sm font-bold tracking-tight text-black">
              Navegación
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-black/60 transition-colors hover:text-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-tight text-black">
              Contacto
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_CONTACT.map((item) => (
                <li key={item.href} className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-black/40">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="text-sm font-medium break-all text-black/70 transition-colors hover:text-black"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-tight text-black">
              Legal
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-black/60 transition-colors hover:text-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
