import Link from "next/link";
import type { Ref } from "react";

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  onMouseEnter?: () => void;
  ref?: Ref<HTMLAnchorElement>;
};

export function NavLink({
  href,
  label,
  isActive,
  onMouseEnter,
  ref,
}: NavLinkProps) {
  return (
    <Link
      ref={ref}
      href={href}
      onMouseEnter={onMouseEnter}
      className="group relative pb-1.5 text-sm text-black"
    >
      <span className="inline-grid whitespace-nowrap">
        <span
          className="invisible col-start-1 row-start-1 font-semibold"
          aria-hidden="true"
        >
          {label}
        </span>
        <span
          className={`col-start-1 row-start-1 font-medium group-hover:font-semibold ${
            isActive ? "font-semibold" : ""
          }`}
        >
          {label}
        </span>
      </span>
    </Link>
  );
}
