export type FooterLink = {
  href: string;
  label: string;
};

export type FooterContactItem = {
  href: string;
  label: string;
  value: string;
};

/** Links legales / soporte */
export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { href: "/soporte", label: "Soporte" },
  { href: "/terms", label: "Términos y condiciones" },
  { href: "/privacy", label: "Política de privacidad" },
];

/** Contacto del footer */
export const FOOTER_CONTACT: FooterContactItem[] = [
  {
    href: "tel:+580000000000",
    label: "Teléfono",
    value: "+58 000 000 0000",
  },
  {
    href: "mailto:hola@condominiosya.com",
    label: "Correo",
    value: "hola@condominiosya.com",
  },
];

/** Alias para la barra inferior */
export const FOOTER_LINKS = FOOTER_LEGAL_LINKS;
