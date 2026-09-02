export type IntroductionStepItem = {
  id: string;
  title: string;
  description: string;
};

export const INTRODUCTION_STEPS: IntroductionStepItem[] = [
  {
    id: "registro",
    title: "Registro y prueba gratis",
    description:
      "Completa el formulario inicial y accede al sistema al instante, sin tarjetas ni compromisos.",
  },
  {
    id: "configuracion",
    title: "Configuración y Migración",
    description:
      "Nos envías tus listas de propietarios y deudas, y nosotros digitalizamos todo.",
  },
  {
    id: "formacion",
    title: "Formación guiada",
    description:
      "Enseñamos a la administración y a los vecinos a usar la plataforma para una adopción sin fricción.",
  },
  {
    id: "gestion",
    title: "Gestión y recaudación",
    description:
      "Recibe notificaciones de pago, valida transferencias y exporta tus reportes financieros en segundos.",
  },
];
