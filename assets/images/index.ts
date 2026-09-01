import dashboardPreview from "@/assets/images/DCN.png";

const DASHBOARD_ASPECT_RATIO = 423 / 800;
const DASHBOARD_DISPLAY_WIDTH = 700;

export const images = {
  dashboard: {
    src: dashboardPreview,
    alt: "Panel de control de CondominiosYa",
    displayWidth: DASHBOARD_DISPLAY_WIDTH,
    displayHeight: Math.round(DASHBOARD_DISPLAY_WIDTH * DASHBOARD_ASPECT_RATIO),
  },
} as const;

export type ImageKey = keyof typeof images;
