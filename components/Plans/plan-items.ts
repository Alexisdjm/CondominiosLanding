export type PlanItem = {
  id: string;
  name: string;
  price: string;
  priceSuffix?: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  features: string[];
  featured?: boolean;
};

export const PLAN_ITEMS: PlanItem[] = [
  {
    id: "prueba",
    name: "Prueba gratis",
    price: "Gratis por 30 días",
    description:
      "Experimenta el control financiero total de tu condominio durante 1 mes sin compromiso.",
    ctaLabel: "Empieza ahora",
    ctaHref: "/contacto",
    features: [
      "Acceso completo a todas las funciones del Plan Básico.",
      "Configuración e importación de datos en minutos.",
      "Soporte guiado para la puesta en marcha.",
      "Cancela o cambia de plan en cualquier momento.",
    ],
  },
  {
    id: "basico",
    name: "Plan básico",
    price: "$0.25/casa",
    priceSuffix: "(mensual)",
    description:
      "Ideal para administraciones que buscan digitalizar cobros, deudas y presupuestos de forma ágil.",
    ctaLabel: "Empieza ahora",
    ctaHref: "/contacto",
    featured: true,
    features: [
      "Control de recaudación mensual y expectativa vs. real.",
      "Gestión de deudas por vivienda y convenios de pago.",
      "Formulario web para que los propietarios notifiquen pagos.",
      "Historial financiero y exportación de reportes a PDF/Excel.",
    ],
  },
];
