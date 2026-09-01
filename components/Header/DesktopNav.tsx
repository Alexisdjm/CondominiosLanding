"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "@/components/Header/NavLink";
import { NAV_LINKS } from "@/components/Header/nav-links";
import { isLinkActive } from "@/components/Header/utils";

type DesktopNavProps = {
  pathname: string;
};

export function DesktopNav({ pathname }: DesktopNavProps) {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeIndex = NAV_LINKS.findIndex((link) =>
    isLinkActive(pathname, link.href),
  );

  const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  const updateUnderline = useCallback(() => {
    const underlineEl = underlineRef.current;
    if (!underlineEl) return;

    if (targetIndex < 0) {
      underlineEl.style.opacity = "0";
      return;
    }

    const link = linkRefs.current[targetIndex];
    if (!link) return;

    underlineEl.style.left = `${link.offsetLeft}px`;
    underlineEl.style.width = `${link.offsetWidth}px`;
    underlineEl.style.opacity = "1";
  }, [targetIndex]);

  useLayoutEffect(() => {
    updateUnderline();
  }, [updateUnderline]);

  useLayoutEffect(() => {
    const handleResize = () => updateUnderline();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateUnderline]);

  return (
    <nav
      className="relative hidden items-center gap-8 md:flex"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {NAV_LINKS.map((link, index) => (
        <NavLink
          key={link.href}
          ref={(el) => {
            linkRefs.current[index] = el;
          }}
          href={link.href}
          label={link.label}
          isActive={isLinkActive(pathname, link.href)}
          onMouseEnter={() => setHoveredIndex(index)}
        />
      ))}

      <span
        ref={underlineRef}
        className="pointer-events-none absolute bottom-0 h-0.5 bg-black opacity-0 transition-[left,width,opacity] duration-300 ease-out"
        aria-hidden="true"
      />
    </nav>
  );
}
