export interface ServiceItem {
  id: string;
  chip: string;
  number: string;
  name: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  text: string;
  author: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  nav: {
    services: string;
    howItWorks: string;
    reviews: string;
    areas: string;
    callButton: string;
    compactCall: string;
    openMenu: string;
    closeMenu: string;
  };
  drawer: {
    callButton: string;
    quoteButton: string;
  };
  hero: {
    label: string;
    open24Badge: string;
    h1Open24: string;
    h1Standard: string;
    sentenceOpen24: string;
    sentenceStandard: string;
    speaksSpanishText: string;
    callButton: string;
    quoteButton: string;
    ratingStarText: string;
    reviewsCountText: (count: string) => string;
  };
  trust: {
    open24: string;
    ratingStars: (rating: string, count: string) => string;
    location: string;
    speaksSpanish: string;
  };
  services: {
    label: string;
    h2: string;
    callButton: string;
    requestButton: string;
    items: ServiceItem[];
  };
  craftsmanship: {
    label: string;
    h2: string;
    description: string;
    points: { title: string; text: string }[];
    callButton: string;
  };
  preparedness: {
    label: string;
    h2: string;
    description: string;
    tips: { step: string; title: string; text: string }[];
    callPrompt: string;
    callButton: string;
  };
  fixturesShowcase: {
    label: string;
    h2: string;
    description: string;
    highlights: { title: string; text: string }[];
    quoteButton: string;
  };
  neighborhoodsShowcase: {
    label: string;
    h2: string;
    description: string;
    chips: string[];
    callPrompt: string;
    callButton: string;
  };
  faq: {
    label: string;
    h2: string;
    items: FaqItem[];
  };
  howItWorks: {
    h2: string;
    steps: StepItem[];
  };
  reviews: {
    h2: string;
    ratingSubtext: (count: string) => string;
    readMoreGoogle: string;
    items: ReviewItem[];
  };
  serviceArea: {
    h2: string;
    callUsPrompt: string;
  };
  finalCta: {
    label: string;
    h2: string;
    open24Line: string;
    form: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      serviceLabel: string;
      selectServicePlaceholder: string;
      notesLabel: string;
      notesPlaceholder: string;
      submitButton: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      resetButton: string;
      errorName: string;
      errorPhone: string;
      errorService: string;
      errorNotes: string;
      validationSummary: string;
      srSuccessAnnouncement: string;
    };
  };
  footer: {
    allRightsReserved: string;
  };
  stickyBar: {
    call: string;
    quote: string;
  };
}

export const content: { en: SiteContent; es: SiteContent } = {
  en: {
    nav: {
      services: "Services",
      howItWorks: "How it works",
      reviews: "Reviews",
      areas: "Areas",
      callButton: "Call us",
      compactCall: "Call us",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    drawer: {
      callButton: "Call us",
      quoteButton: "Book or contact us",
    },
    hero: {
      label: "Plumber in Los Angeles, CA",
      open24Badge: "Open 24 hours",
      h1Open24: "Plumbing trouble? Call anytime.",
      h1Standard: "Plumbing trouble? Call us.",
      sentenceOpen24:
        "Plumbing service in Los Angeles, open 24 hours. Leaks, clogs, water heaters and more.",
      sentenceStandard:
        "Plumbing service in Los Angeles. Leaks, clogs, water heaters and more.",
      speaksSpanishText: "Se habla español.",
      callButton: "Call us",
      quoteButton: "Book or contact us",
      ratingStarText: "★",
      reviewsCountText: (count: string) => `from ${count} Google reviews`,
    },
    trust: {
      open24: "Open 24 hours",
      ratingStars: (rating: string, count: string) =>
        `${rating} stars from ${count} Google reviews`,
      location: "Los Angeles, CA",
      speaksSpanish: "Se habla español",
    },
    services: {
      label: "Services",
      h2: "What's going on?",
      callButton: "Call us",
      requestButton: "Book or contact us",
      items: [
        {
          id: "emergency",
          chip: "Burst pipe or flooding",
          number: "01",
          name: "Emergency plumbing",
          description:
            "Burst pipes, flooding and urgent leaks handled any hour of the day.",
        },
        {
          id: "drain-cleaning",
          chip: "Clogged drain",
          number: "02",
          name: "Drain cleaning",
          description: "Clogged sinks, tubs, toilets and main drains cleared.",
        },
        {
          id: "leak-detection",
          chip: "Leak",
          number: "03",
          name: "Leak detection & repair",
          description:
            "Locate and repair leaking pipes before they cause damage.",
        },
        {
          id: "water-heaters",
          chip: "No hot water",
          number: "04",
          name: "Water heaters",
          description: "Water heater repair and replacement.",
        },
        {
          id: "sewer-service",
          chip: "Sewer backup",
          number: "05",
          name: "Sewer line service",
          description: "Sewer backups diagnosed and repaired.",
        },
        {
          id: "fixtures",
          chip: "Broken fixture",
          number: "06",
          name: "Fixtures & installations",
          description:
            "Faucets, toilets, showers and garbage disposals repaired or installed.",
        },
      ],
    },
    craftsmanship: {
      label: "Piping & Systems",
      h2: "Built to last in Los Angeles homes.",
      description:
        "From vintage bungalows to modern builds, every pipe repair and valve replacement uses durable materials and clean craftsmanship.",
      points: [
        {
          title: "Copper & PEX Piping",
          text: "Properly secured lines with leak-resistant fittings designed for Los Angeles water conditions.",
        },
        {
          title: "Clean Valve Isolation",
          text: "Direct shutoff access for quick maintenance and reliable protection.",
        },
        {
          title: "Pressure Balance",
          text: "Carefully checked to ensure consistent household flow without damaging seals.",
        },
      ],
      callButton: "Call us",
    },
    preparedness: {
      label: "Emergency Protocol",
      h2: "What to do before your plumber arrives.",
      description:
        "Quick steps you can take immediately while our technician is in transit to protect your floors and walls.",
      tips: [
        {
          step: "01",
          title: "Shut off the water",
          text: "Locate your main shutoff valve or the fixture angle stop and turn it clockwise until closed.",
        },
        {
          step: "02",
          title: "Clear the surrounding area",
          text: "Move rugs, furniture, and valuables away from the leak or wet floor.",
        },
        {
          step: "03",
          title: "Avoid chemical drain cleaners",
          text: "Store-bought chemicals can corrode pipes and pose splash hazards during manual clearing.",
        },
      ],
      callPrompt: "Need urgent phone guidance?",
      callButton: "Call us",
    },
    fixturesShowcase: {
      label: "Fixtures & Upgrades",
      h2: "Precision fixture installations.",
      description:
        "Upgrading a bathroom or kitchen requires exact alignments and watertight connections. We handle every detail cleanly.",
      highlights: [
        {
          title: "Faucets & Shower Valves",
          text: "Flawless pressure balancing and drip-free seals for new and existing rough-ins.",
        },
        {
          title: "Freestanding Tubs & Drains",
          text: "Underfloor waste alignments tested thoroughly before finishing.",
        },
        {
          title: "High-Efficiency Toilets",
          text: "Solid wax ring seals, secure mounting, and quiet fill valve calibration.",
        },
      ],
      quoteButton: "Book or contact us",
    },
    neighborhoodsShowcase: {
      label: "Local Expertise",
      h2: "Plumbing knowledge across every district.",
      description:
        "Los Angeles spans a wide variety of plumbing styles, from historic cast-iron lines to modern manifold systems.",
      chips: [
        "Single-Family Residences",
        "Historic Bungalows",
        "Townhomes & Condos",
        "Commercial Storefronts",
      ],
      callPrompt: "Have questions about your building's plumbing?",
      callButton: "Call us",
    },
    faq: {
      label: "Frequently Asked Questions",
      h2: "Answers before you call.",
      items: [
        {
          question: "How do I request a quote or book service?",
          answer:
            "You can call us directly or submit our online form with your contact details and notes about the issue.",
        },
        {
          question: "What information should I have ready?",
          answer:
            "Having your location in Los Angeles, the affected plumbing fixture (such as a water heater, main drain, or sink), and any visible symptoms helps us arrive prepared.",
        },
        {
          question: "Can someone come out any time of day?",
          answer:
            "Yes, our phones are answered around the clock and we assist with urgent plumbing issues at any hour of the day or night.",
        },
        {
          question: "Do you serve South Los Angeles and surrounding areas?",
          answer:
            "Yes, we cover Los Angeles, South Los Angeles, and the Greater Los Angeles area.",
        },
      ],
    },
    howItWorks: {
      h2: "Three steps.",
      steps: [
        {
          number: "1",
          title: "Call or message us",
          description:
            "Tell us what happened and we will give you clear options right away.",
        },
        {
          number: "2",
          title: "We diagnose and explain the fix",
          description:
            "We inspect the problem thoroughly and quote upfront before any work starts.",
        },
        {
          number: "3",
          title: "Fixed, tested, cleaned up",
          description:
            "Your plumbing is fully restored, tested for leaks, and left spotless.",
        },
      ],
    },
    reviews: {
      h2: "What neighbors say.",
      ratingSubtext: (count: string) => `from ${count} Google reviews`,
      readMoreGoogle: "Read more reviews on Google",
      items: [
        {
          id: "review-1",
          text: "Victor was very professional, communicative, and efficient. He quickly identified the issue, explained everything clearly, and gave an honest assessment and fair price. Highly recommend!",
          author: "David M., South Los Angeles",
          rating: 5,
        },
        {
          id: "review-2",
          text: "Quick response time and great customer service. He efficiently repaired our leaking water heater, worked clean, and gave transparent pricing. Definitely a keeper for plumbers!",
          author: "Sarah T., Los Angeles",
          rating: 5,
        },
        {
          id: "review-3",
          text: "Extremely knowledgeable, polite, and honest. He located our pipe leak immediately, walked us through the fix, and finished the job without delay. Quality work and great integrity.",
          author: "Carlos R., Greater Los Angeles",
          rating: 5,
        },
      ],
    },
    serviceArea: {
      h2: "Where we work.",
      callUsPrompt: "Don't see your area? Call us.",
    },
    finalCta: {
      label: "Get in touch",
      h2: "Ready when you are.",
      open24Line: "Open 24 hours. Call anytime.",
      form: {
        title: "Book or contact us",
        subtitle:
          "Tell us about your issue and we will get back to you with next steps.",
        nameLabel: "Name",
        namePlaceholder: "Your full name",
        phoneLabel: "Phone number",
        phonePlaceholder: "(310) 000-0000",
        serviceLabel: "Service needed",
        selectServicePlaceholder: "Select a service",
        notesLabel: "Details or notes",
        notesPlaceholder: "Briefly describe the issue...",
        submitButton: "Book or contact us",
        submitting: "Submitting...",
        successTitle: "Request received",
        successMessage:
          "Thank you! We received your request and will call you shortly.",
        resetButton: "Submit another request",
        errorName: "Please enter a name between 2 and 100 characters.",
        errorPhone:
          "Please enter a valid US phone number with 10 digits (or 11 including 1).",
        errorService: "Please select a service from the list.",
        errorNotes: "Please limit your notes to 1,000 characters.",
        validationSummary:
          "Please review and correct the highlighted fields.",
        srSuccessAnnouncement:
          "Your request has been submitted successfully! Our team will contact you shortly.",
      },
    },
    footer: {
      allRightsReserved: "All rights reserved.",
    },
    stickyBar: {
      call: "Call us",
      quote: "Book or contact us",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      howItWorks: "Cómo trabajamos",
      reviews: "Reseñas",
      areas: "Zonas",
      callButton: "Llámenos",
      compactCall: "Llámenos",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
    },
    drawer: {
      callButton: "Llámenos",
      quoteButton: "Reservar o contactarnos",
    },
    hero: {
      label: "Plomería en Los Ángeles, CA",
      open24Badge: "Abierto las 24 horas",
      h1Open24: "¿Problemas de plomería? Llámenos a cualquier hora.",
      h1Standard: "¿Problemas de plomería? Llámenos.",
      sentenceOpen24:
        "Servicio de plomería en Los Ángeles, abierto las 24 horas. Fugas, drenajes, calentadores y más.",
      sentenceStandard:
        "Servicio de plomería en Los Ángeles. Fugas, drenajes, calentadores y más.",
      speaksSpanishText: "Se habla español.",
      callButton: "Llámenos",
      quoteButton: "Reservar o contactarnos",
      ratingStarText: "★",
      reviewsCountText: (count: string) => `de ${count} reseñas en Google`,
    },
    trust: {
      open24: "Abierto las 24 horas",
      ratingStars: (rating: string, count: string) =>
        `${rating} estrellas de ${count} reseñas en Google`,
      location: "Los Ángeles, CA",
      speaksSpanish: "Se habla español",
    },
    services: {
      label: "Servicios",
      h2: "¿Qué problema tiene?",
      callButton: "Llámenos",
      requestButton: "Reservar o contactarnos",
      items: [
        {
          id: "emergency",
          chip: "Tubería rota o inundación",
          number: "01",
          name: "Plomería de emergencia",
          description:
            "Tuberías rotas, inundaciones y fugas urgentes atendidas a cualquier hora del día.",
        },
        {
          id: "drain-cleaning",
          chip: "Drenaje tapado",
          number: "02",
          name: "Limpieza de drenajes",
          description:
            "Fregaderos, tinas, inodoros y drenajes principales destapados.",
        },
        {
          id: "leak-detection",
          chip: "Fuga",
          number: "03",
          name: "Detección y reparación de fugas",
          description:
            "Ubicamos y reparamos tuberías con fugas antes de que causen daños.",
        },
        {
          id: "water-heaters",
          chip: "Sin agua caliente",
          number: "04",
          name: "Calentadores de agua",
          description: "Reparación y reemplazo de calentadores de agua.",
        },
        {
          id: "sewer-service",
          chip: "Respaldo de drenaje",
          number: "05",
          name: "Servicio de alcantarillado",
          description:
            "Problemas y respaldos de drenaje diagnosticados y reparados.",
        },
        {
          id: "fixtures",
          chip: "Accesorio roto",
          number: "06",
          name: "Instalación de accesorios",
          description:
            "Grifos, inodoros, regaderas y trituradores reparados o instalados.",
        },
      ],
    },
    craftsmanship: {
      label: "Tuberías y Sistemas",
      h2: "Instalaciones duraderas en hogares de Los Ángeles.",
      description:
        "Desde casas clásicas hasta construcciones modernas, cada reparación y reemplazo de tubería se realiza con materiales resistentes y acabados limpios.",
      points: [
        {
          title: "Tuberías de Cobre y PEX",
          text: "Líneas firmemente aseguradas y diseñadas para el agua y clima de Los Ángeles.",
        },
        {
          title: "Válvulas de Cierre Accesibles",
          text: "Acceso rápido para cerrar el paso de agua en caso de mantenimiento.",
        },
        {
          title: "Equilibrio de Presión",
          text: "Verificación de presión adecuada para proteger empaques y calentadores.",
        },
      ],
      callButton: "Llámenos",
    },
    preparedness: {
      label: "Protocolo de Emergencia",
      h2: "Qué hacer antes de que llegue el plomero.",
      description:
        "Medidas rápidas que puede tomar de inmediato mientras nuestro técnico se traslada a su domicilio.",
      tips: [
        {
          step: "01",
          title: "Cierre el paso de agua",
          text: "Ubique la llave de paso principal o la llave individual y gírela en sentido de las manecillas del reloj.",
        },
        {
          step: "02",
          title: "Despeje el área afectada",
          text: "Retire tapetes, muebles y artículos personales del área con humedad o fuga.",
        },
        {
          step: "03",
          title: "Evite químicos destapacaños",
          text: "Los productos químicos pueden dañar las tuberías y salpicar durante la reparación manual.",
        },
      ],
      callPrompt: "¿Necesita orientación telefónica urgente?",
      callButton: "Llámenos",
    },
    fixturesShowcase: {
      label: "Accesorios e Instalaciones",
      h2: "Instalación precisa de accesorios.",
      description:
        "Renovar accesorios en cocina o baño requiere alineación exacta y sellos herméticos duraderos.",
      highlights: [
        {
          title: "Grifos y Válvulas de Regadera",
          text: "Balance de temperatura y sellos sin goteos para instalaciones nuevas y existentes.",
        },
        {
          title: "Tinas y Desagües",
          text: "Alineaciones de desagüe probadas cuidadosamente antes de concluir el trabajo.",
        },
        {
          title: "Inodoros de Alta Eficiencia",
          text: "Sellos de cera firmes, montaje seguro y calibración silenciosa de flotador.",
        },
      ],
      quoteButton: "Reservar o contactarnos",
    },
    neighborhoodsShowcase: {
      label: "Experiencia Local",
      h2: "Conocimiento en cada zona de la ciudad.",
      description:
        "Los Ángeles tiene diversos estilos arquitectónicos con sistemas de tuberías de diferentes épocas.",
      chips: [
        "Casas Unifamiliares",
        "Bungalows Históricos",
        "Condominios y Departamentos",
        "Comercios y Locales",
      ],
      callPrompt: "¿Tiene dudas sobre la plomería de su propiedad?",
      callButton: "Llámenos",
    },
    faq: {
      label: "Preguntas Frecuentes",
      h2: "Respuestas antes de llamar.",
      items: [
        {
          question: "¿Cómo pido una cotización o reservo un servicio?",
          answer:
            "Puede llamarnos directamente o completar nuestro formulario en línea con sus datos de contacto y una nota del problema.",
        },
        {
          question: "¿Qué información conviene tener lista?",
          answer:
            "Tener a la mano su zona aproximada en Los Ángeles, el accesorio afectado (como calentador o drenaje) y lo que observa nos ayuda a coordinar mejor.",
        },
        {
          question: "¿Pueden acudir a cualquier hora?",
          answer:
            "Sí, atendemos llamadas día y noche para resolver urgencias de plomería a cualquier hora.",
        },
        {
          question: "¿Atienden South Los Angeles y áreas cercanas?",
          answer:
            "Sí, cubrimos Los Ángeles, South Los Angeles y toda el área de Greater Los Angeles.",
        },
      ],
    },
    howItWorks: {
      h2: "Tres pasos.",
      steps: [
        {
          number: "1",
          title: "Llámenos o envíenos un mensaje",
          description:
            "Cuéntenos qué sucede y le daremos opciones claras de inmediato.",
        },
        {
          number: "2",
          title: "Diagnosticamos y explicamos la solución",
          description:
            "Revisamos a fondo el problema y cotizamos antes de iniciar el trabajo.",
        },
        {
          number: "3",
          title: "Reparado, probado y limpio",
          description:
            "Su plomería queda restaurada, probada sin fugas y el área limpia.",
        },
      ],
    },
    reviews: {
      h2: "Lo que dicen los vecinos.",
      ratingSubtext: (count: string) => `de ${count} reseñas en Google`,
      readMoreGoogle: "Ver más reseñas en Google",
      items: [
        {
          id: "review-1",
          text: "Victor fue muy profesional, atento y eficiente. Identificó el problema de inmediato, explicó el proceso con claridad y dio una cotización honesta y justa. ¡Ampliamente recomendado!",
          author: "David M., South Los Angeles",
          rating: 5,
        },
        {
          id: "review-2",
          text: "Excelente tiempo de respuesta y gran servicio al cliente. Reparó la fuga del calentador de agua rápidamente, dejó todo impecable y con precios transparentes. ¡Un plomero de total confianza!",
          author: "Sarah T., Los Angeles",
          rating: 5,
        },
        {
          id: "review-3",
          text: "Muy conocedor, educado y honesto. Encontró el origen de la fuga en las tuberías de inmediato, nos explicó la solución y terminó sin demoras. Excelente experiencia y trabajo de calidad.",
          author: "Carlos R., Greater Los Angeles",
          rating: 5,
        },
      ],
    },
    serviceArea: {
      h2: "Dónde trabajamos.",
      callUsPrompt: "¿No ve su zona? Llámenos.",
    },
    finalCta: {
      label: "Contáctenos",
      h2: "Listos cuando usted lo esté.",
      open24Line: "Abierto las 24 horas. Llame a cualquier hora.",
      form: {
        title: "Reservar o contactarnos",
        subtitle:
          "Explíquenos su problema y nos pondremos en contacto con los siguientes pasos.",
        nameLabel: "Nombre",
        namePlaceholder: "Su nombre completo",
        phoneLabel: "Número de teléfono",
        phonePlaceholder: "(310) 000-0000",
        serviceLabel: "Servicio requerido",
        selectServicePlaceholder: "Seleccione un servicio",
        notesLabel: "Detalles o notas",
        notesPlaceholder: "Describa brevemente el problema...",
        submitButton: "Reservar o contactarnos",
        submitting: "Enviando...",
        successTitle: "Solicitud recibida",
        successMessage:
          "¡Gracias! Recibimos su solicitud y le llamaremos en breve.",
        resetButton: "Enviar otra solicitud",
        errorName: "Por favor ingrese un nombre de 2 a 100 caracteres.",
        errorPhone:
          "Por favor ingrese un teléfono válido de EE. UU. con 10 dígitos (u 11 si incluye el 1).",
        errorService: "Por favor seleccione un servicio.",
        errorNotes: "Limite sus notas a 1,000 caracteres.",
        validationSummary:
          "Por favor revise y corrija los campos marcados.",
        srSuccessAnnouncement:
          "¡Su solicitud ha sido enviada con éxito! Nos comunicaremos con usted en breve.",
      },
    },
    footer: {
      allRightsReserved: "Todos los derechos reservados.",
    },
    stickyBar: {
      call: "Llámenos",
      quote: "Reservar o contactarnos",
    },
  },
};
