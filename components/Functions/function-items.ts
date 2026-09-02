export type FunctionItem = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const FUNCTION_ITEMS: FunctionItem[] = [
  {
    title: "Casas y Deudas",
    description:
      "Consulta saldos por vivienda y gestiona convenios de pago.",
  },
  {
    title: "Registro de Casas",
    description:
      "Organiza el directorio de viviendas y asigna accesos a propietarios.",
  },
  {
    title: "Formulario de Pago",
    description:
      "Recibe notificaciones y comprobantes de pago de los residentes.",
  },
  {
    title: "Panel de responsable",
    description:
      "Visualiza el estado general del condominio desde un solo panel.",
  },
  {
    title: "Notificaciones",
    description:
      "Envía avisos a residentes y lleva un historial de comunicaciones.",
  },
];
