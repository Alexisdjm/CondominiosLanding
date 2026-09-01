import Link from "next/link";
import { FOOTER_LINKS } from "@/components/Footer/footer-links";

export function FooterBar() {
  const year = new Date().getFullYear();

  return (
    <div className="px-6 py-6 lg:px-10 lg:py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-black/70">
          © {year} CondominiosYa. Todos los derechos reservados.
        </p>

        <ul className="flex flex-wrap gap-x-8 gap-y-2 lg:gap-x-10">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-black/70 transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
