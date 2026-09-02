import type { StaticImageData } from "next/image";
import { images } from "@/assets/images";

export type TargetItem = {
  id: string;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  navLabel: string;
  imageSrc: StaticImageData;
  imageAlt: string;
};

export const TARGET_ITEMS: TargetItem[] = [
  {
    id: "urbanizaciones",
    badge: "Esencial para:",
    title: "Urbanizaciones y",
    titleHighlight: "conjuntos de casas",
    description:
      "Controla cobros, áreas comunes y comunicación en comunidades horizontales. Ideal para urbanizaciones donde cada casa tiene su propio estado de cuenta y se comparten gastos de vigilancia, jardinería y amenidades.",
    navLabel: "Urbanizaciones y Conjuntos de Casas",
    imageSrc: images.urbanizaciones.src,
    imageAlt: images.urbanizaciones.alt,
  },
  {
    id: "edificios",
    badge: "Esencial para:",
    title: "Edificios de",
    titleHighlight: "apartamentos",
    description:
      "Administra un edificio completo desde un solo panel. Gestiona cuotas, asambleas y servicios comunes con claridad para residentes y junta de condominio.",
    navLabel: "Edificios de Apartamentos",
    imageSrc: images.edificios.src,
    imageAlt: images.edificios.alt,
  },
  {
    id: "multitorre",
    badge: "Esencial para:",
    title: "Complejo residencial con",
    titleHighlight: "varias torres",
    description:
      "La solución ideal para proyectos de gran escala. Administra múltiples torres desde un panel centralizado, permitiéndote agrupar los gastos de áreas comunes generales o independizar los estados de cuenta y cobranzas por cada torre de forma autónoma.",
    navLabel: "Complejos y Residenciales Multitorre",
    imageSrc: images.multitorre.src,
    imageAlt: images.multitorre.alt,
  },
];
