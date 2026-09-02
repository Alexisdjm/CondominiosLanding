import type { StaticImageData } from "next/image";
import dashboardPreview from "@/assets/images/DCN.png";
import edificiosPreview from "@/assets/images/torre.webp";
import multitorrePreview from "@/assets/images/multitorre.webp";
import urbanizacionesPreview from "@/assets/images/urb.webp";

const DASHBOARD_ASPECT_RATIO = 423 / 800;
const DASHBOARD_DISPLAY_WIDTH = 700;

export const images = {
  dashboard: {
    src: dashboardPreview,
    alt: "Panel de control de CondominiosYa",
    displayWidth: DASHBOARD_DISPLAY_WIDTH,
    displayHeight: Math.round(DASHBOARD_DISPLAY_WIDTH * DASHBOARD_ASPECT_RATIO),
  },
  urbanizaciones: {
    src: urbanizacionesPreview,
    alt: "Urbanización y conjunto de casas",
  },
  edificios: {
    src: edificiosPreview,
    alt: "Edificio de apartamentos",
  },
  multitorre: {
    src: multitorrePreview,
    alt: "Complejo residencial multitorre",
  },
} as const satisfies Record<
  string,
  {
    src: StaticImageData;
    alt: string;
    displayWidth?: number;
    displayHeight?: number;
  }
>;

export type ImageKey = keyof typeof images;
