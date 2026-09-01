export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/planes", label: "Planes" },
  { href: "/funcionamiento", label: "Funcionamiento" },
  { href: "/introduccion", label: "Introducción" },
  { href: "/faqs", label: "FAQs" },
];
