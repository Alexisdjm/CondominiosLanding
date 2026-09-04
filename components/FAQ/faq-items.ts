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
  steps?: {
    title: string;
    description: string;
  }[];
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
    id: "admin-validacion-pagos",
    categoryId: "administracion",
    question:
      "¿Cómo es el proceso de validación e ingreso de los pagos reportados por los propietarios?",
    answer:
      "El proceso se realiza de forma semi-automatizada para garantizar un control total:",
    steps: [
      {
        title: "Notificación",
        description:
          "El propietario completa y envía el formulario de pago con los datos de la transferencia o depósito.",
      },
      {
        title: "Revisión en panel",
        description:
          "La junta o administración recibe la notificación en el panel de control con todos los detalles adjuntos.",
      },
      {
        title: "Verificación bancaria",
        description:
          "Se confirma manualmente la recepción del dinero en la cuenta bancaria del condominio.",
      },
      {
        title: "Aprobación",
        description:
          "Una vez verificado el fondo, se valida el pago en la plataforma con un solo clic, actualizando de inmediato el saldo e historial del propietario.",
      },
    ],
  },
  {
    id: "admin-deudas",
    categoryId: "administracion",
    question: "¿Cómo gestiono las deudas por vivienda?",
    answer:
      "Desde el panel de administración puedes ver el estado de cada unidad, registrar convenios y hacer seguimiento de pagos pendientes.",
  },
  {
    id: "admin-cuotas-especiales",
    categoryId: "administracion",
    question:
      "¿Cómo funcionan las cuotas especiales y a quiénes se les pueden aplicar?",
    answer:
      "Las cuotas especiales son cobros ocasionales destinados a proyectos u obras específicas del condominio. Se configuran directamente desde la sección de Ajustes, donde puedes definir el monto y concepto.\n\nAl crearlas, tienes la flexibilidad de seleccionar si se aplicarán a todo el condominio o únicamente a una o varias viviendas en específico. Una vez asignadas, el sistema genera automáticamente los avisos de cobro correspondientes para las casas seleccionadas.",
  },
  {
    id: "admin-convenios",
    categoryId: "administracion",
    question:
      "¿Cómo se gestionan los convenios de pago para propietarios con deuda y qué pasa si no se cumplen?",
    answer:
      "Los convenios de pago están diseñados exclusivamente para viviendas que presentan morosidad. Se configuran ingresando directamente al perfil individual de la vivienda correspondiente, donde se establece el acuerdo y se generan los recibos programados.\n\nCada cuota del convenio genera un enlace de pago único que facilita el abono por parte del propietario. Si el propietario no cumple con el acuerdo, la administración tiene la opción de deshacer el convenio, restableciendo el saldo deudor original según el estado previo de la cuenta.",
  },
  {
    id: "admin-reportes",
    categoryId: "administracion",
    question: "¿Es posible exportar reportes financieros desde la plataforma?",
    answer:
      "Sí. Puedes generar y exportar reportes en PDF o Excel para reuniones, auditorías o respaldos.",
  },
  {
    id: "propietarios-pagos",
    categoryId: "propietarios",
    question: "¿Cómo notifico un pago desde la plataforma?",
    answer:
      "Para notificar un pago, debes completar el formulario correspondiente, al cual puedes acceder mediante el enlace directo del recibo o ingresando con tu cuenta al portal personal de propietario. En el formulario indicas los datos de la transacción de tu Pago Móvil, Transferencia o Zelle y, de forma opcional, puedes adjuntar el capture de la pantalla o comprobante. Una vez enviado, la administración confirmará la acreditación en el banco para validar la transacción.",
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
      "El plan se calcula por vivienda, pero cuenta con un costo mínimo base de $15 USD al mes. Esto significa que si el cálculo total de tu condominio es inferior a $15 USD, la mensualidad final a pagar será de $15 USD. Consulta la sección de precios para ver la tarifa por vivienda actualizada.",
  },
  {
    id: "precios-actualizaciones",
    categoryId: "precios",
    question: "¿Las actualizaciones del sistema tienen costo adicional?",
    answer:
      "No. Las mejoras y actualizaciones de la plataforma están incluidas en tu suscripción.",
  },
];
