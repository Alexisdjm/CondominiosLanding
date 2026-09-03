export type FAQCategoryId =
  | "general"
  | "administracion"
  | "propietarios"
  | "precios";

export type FAQCategory = {
  id: FAQCategoryId;
  label: string;
};

export type FAQItem = {
  id: string;
  categoryId: FAQCategoryId;
  question: string;
  answer: string;
};

export const FAQ_CATEGORIES: FAQCategory[] = [
  { id: "general", label: "General" },
  { id: "administracion", label: "Administración" },
  { id: "propietarios", label: "Propietarios" },
  { id: "precios", label: "Precios y actualizaciones" },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "prueba-gratis",
    categoryId: "general",
    question: "¿Cómo funcionan los 30 días de prueba gratuita?",
    answer:
      "Tienes acceso total a la plataforma sin costo y sin registrar tarjetas de crédito. Al finalizar el periodo, eliges si deseas suscribirte o exportar tus datos.",
  },
  {
    id: "empezar",
    categoryId: "general",
    question: "¿Qué necesito para empezar a usar CondominiosYa?",
    answer:
      "Solo necesitas los datos básicos de tu condominio y una lista de propietarios. Nosotros te ayudamos con el resto durante la configuración inicial.",
  },
  {
    id: "migrar",
    categoryId: "general",
    question: "¿Es difícil migrar la información de mi condominio?",
    answer:
      "No. Puedes enviarnos tus listas en Excel o PDF y nuestro equipo digitaliza la información por ti en pocos días.",
  },
  {
    id: "seguridad",
    categoryId: "general",
    question: "¿Mis datos financieros y los de los propietarios están seguros?",
    answer:
      "Sí. La plataforma utiliza cifrado y buenas prácticas de seguridad para proteger la información financiera de tu condominio y de cada propietario.",
  },
  {
    id: "capacitacion",
    categoryId: "general",
    question: "¿Recibiré ayuda o capacitación para configurar mi condominio?",
    answer:
      "Sí. Incluimos acompañamiento para la administración y materiales para que los propietarios aprendan a usar la plataforma.",
  },
  {
    id: "cancelar-prueba",
    categoryId: "general",
    question:
      "¿Puedo cancelar la prueba gratis si el sistema no se adapta a lo que busco?",
    answer:
      "Por supuesto. Puedes cancelar durante el periodo de prueba sin costo y exportar tus datos si lo necesitas.",
  },
  {
    id: "admin-reportes",
    categoryId: "administracion",
    question: "¿Puedo exportar reportes financieros?",
    answer:
      "Sí. Puedes generar y exportar reportes en PDF o Excel para reuniones, auditorías o respaldos.",
  },
  {
    id: "admin-deudas",
    categoryId: "administracion",
    question: "¿Cómo gestiono las deudas por vivienda?",
    answer:
      "Desde el panel de administración puedes ver el estado de cada unidad, registrar convenios y hacer seguimiento de pagos pendientes.",
  },
  {
    id: "propietarios-pagos",
    categoryId: "propietarios",
    question: "¿Cómo notifico un pago desde la plataforma?",
    answer:
      "Los propietarios pueden usar el formulario web para reportar transferencias o pagos y la administración los valida desde su panel.",
  },
  {
    id: "propietarios-historial",
    categoryId: "propietarios",
    question: "¿Puedo ver mi historial de pagos?",
    answer:
      "Sí. Cada propietario puede consultar su historial y el estado de sus obligaciones desde su acceso personal.",
  },
  {
    id: "precios-plan",
    categoryId: "precios",
    question: "¿Cómo se calcula el costo del plan básico?",
    answer:
      "El plan básico se calcula por vivienda. Consulta la sección de precios para ver el detalle actualizado.",
  },
  {
    id: "precios-actualizaciones",
    categoryId: "precios",
    question: "¿Las actualizaciones del sistema tienen costo adicional?",
    answer:
      "No. Las mejoras y actualizaciones de la plataforma están incluidas en tu suscripción.",
  },
];
