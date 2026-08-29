export type BilingualText = Readonly<{ es: string; en: string }>;

export type IconName =
  | 'arrow'
  | 'browser'
  | 'calendar'
  | 'check'
  | 'chevron'
  | 'code'
  | 'document'
  | 'graduation'
  | 'linkedin'
  | 'location'
  | 'monitor'
  | 'payment'
  | 'search'
  | 'spark'
  | 'x'
  | 'github';

export const navItems = [
  { href: '#servicios', label: { es: 'Servicios', en: 'Services' } },
  { href: '#inkendar', label: { es: 'Inkendar', en: 'Inkendar' } },
  { href: '#casos', label: { es: 'Casos', en: 'Work' } },
  { href: '#sobre', label: { es: 'Sobre mí', en: 'About' } },
] as const;

export const services = [
  {
    icon: 'browser',
    title: { es: 'Webs a medida', en: 'Custom websites' },
    description: {
      es: 'Diseño y desarrollo propio, rápidas y pensadas para convertir. Nada de plantillas: tu web única, optimizada para móvil y lista para posicionar.',
      en: 'Designed and built from scratch, fast and made to convert. No templates: a unique site, mobile-optimized and ready to rank.',
    },
  },
  {
    icon: 'search',
    title: { es: 'SEO & marketing', en: 'SEO & marketing' },
    description: {
      es: 'Posicionamiento técnico y de contenido para que te encuentren en Google. Velocidad, estructura y las palabras clave que traen clientes.',
      en: 'Technical and content SEO so people find you on Google. Speed, structure and the keywords that bring in clients.',
    },
  },
  {
    icon: 'code',
    title: { es: 'Software & SaaS a medida', en: 'Custom software & SaaS' },
    description: {
      es: 'Aplicaciones que automatizan tu operativa: gestión, pedidos, facturación. Como los SaaS que ya tengo funcionando en empresas reales.',
      en: 'Apps that automate your operation: management, orders, invoicing. Like the SaaS I already have running in real companies.',
    },
  },
  {
    icon: 'monitor',
    title: { es: 'Automatizaciones con IA', en: 'AI-powered automation' },
    description: {
      es: 'Agentes, integraciones y flujos que eliminan tareas repetitivas y conectan las herramientas que ya utiliza tu negocio.',
      en: 'Agents, integrations and workflows that remove repetitive tasks and connect the tools your business already uses.',
    },
  },
] as const satisfies ReadonlyArray<{ icon: IconName; title: BilingualText; description: BilingualText }>;

export const inkendarFeatures = [
  {
    icon: 'browser',
    title: { es: 'Web premium a medida', en: 'Custom premium website' },
    description: { es: 'Diseñada desde el estilo real del estudio.', en: "Designed from the studio's real style." },
  },
  {
    icon: 'calendar',
    title: { es: 'Citas integradas', en: 'Integrated bookings' },
    description: { es: 'Reservas online dentro de tu propia web.', en: 'Online booking inside your own website.' },
  },
  {
    icon: 'payment',
    title: { es: 'Depósitos anti no-show', en: 'No-show deposits' },
    description: { es: 'Cobra la señal al reservar y protege tu agenda.', en: 'Charge a deposit on booking and protect your calendar.' },
  },
  {
    icon: 'document',
    title: { es: 'Consentimiento con firma digital', en: 'Digital consent forms' },
    description: { es: 'Formularios legales firmados desde el móvil.', en: 'Legal forms signed from the phone.' },
  },
] as const satisfies ReadonlyArray<{ icon: IconName; title: BilingualText; description: BilingualText }>;

export const projects = [
  {
    name: 'Epoxiron',
    badgeClass: 'priv',
    badge: { es: 'Privado · En uso diario', en: 'Private · Daily use' },
    description: {
      es: 'SaaS full-stack para un taller industrial: albaranes, reglas de precios y entrada de pedidos por voz. Lo usa un cliente real todos los días.',
      en: 'Full-stack SaaS for an industrial workshop: delivery notes, pricing rules and voice order entry. Used every day by a real client.',
    },
    tags: ['Full-stack', 'SaaS', 'Voz / Voice'],
    visual: {
      src: '/assets/projects/epoxiron-delivery-notes.webp',
      width: 1200,
      height: 802,
      variant: 'product',
    },
    links: [],
  },
  {
    name: 'Epoxi',
    badgeClass: 'ai',
    badge: { es: 'Agente como servicio', en: 'Agent as a Service' },
    description: {
      es: 'Agente propio creado sobre el núcleo Hermes y refinado con la información, los procesos y los permisos del cliente. Opera Epoxiron por Telegram y API: IA conectada a software real.',
      en: "A proprietary agent built on the Hermes core and refined with the client's information, processes and permissions. It operates Epoxiron through Telegram and API: AI connected to real software.",
    },
    tags: ['AaaS', 'Hermes', 'Telegram', 'API'],
    visual: {
      src: '/assets/projects/epoxiron-delivery-notes.webp',
      width: 1200,
      height: 802,
      variant: 'agent',
    },
    links: [],
  },
  {
    name: 'Peru Inkas Travel',
    badgeClass: 'pub',
    badge: { es: 'Público', en: 'Public' },
    description: {
      es: 'Landing de turismo optimizada: SEO, velocidad, mobile-first y visualización de rutas con Google Maps. Pensada para captar reservas.',
      en: 'Optimized tourism landing: SEO, speed, mobile-first and route visualization with Google Maps. Built to capture bookings.',
    },
    tags: ['SEO', 'Landing', 'Google Maps'],
    visual: {
      src: '/assets/projects/peru-inkas-travel.webp',
      width: 1200,
      height: 546,
      variant: 'website',
    },
    links: [
      {
        href: 'https://peruinkastravel.netlify.app/',
        label: { es: 'Visitar web', en: 'Visit website' },
        track: 'project-peru-website',
      },
      {
        href: 'https://youtu.be/GQmT85SFWLo',
        label: { es: 'Ver vídeo', en: 'Watch video' },
        track: 'project-peru-video',
      },
    ],
  },
] as const;

export const aboutFacts = [
  {
    icon: 'code',
    title: { es: 'Full Stack Developer', en: 'Full Stack Developer' },
    description: {
      es: 'Frontend, backend y bases de datos — el proyecto entero de una mano.',
      en: 'Frontend, backend and databases — the whole project from one hand.',
    },
  },
  {
    icon: 'location',
    title: { es: 'Galway & Madrid', en: 'Galway & Madrid' },
    description: {
      es: 'Trabajo con clientes en Irlanda y España. Web y trato bilingüe ES/EN.',
      en: 'I work with clients in Ireland and Spain. Bilingual site and service, EN/ES.',
    },
  },
  {
    icon: 'spark',
    title: { es: 'SaaS & agentes de IA', en: 'SaaS & AI agents' },
    description: {
      es: 'Especializado en software a medida y automatización con IA (RAG, agentes).',
      en: 'Specialized in custom software and AI automation (RAG, agents).',
    },
  },
  {
    icon: 'graduation',
    title: { es: 'Formación continua', en: 'Always learning' },
    description: {
      es: 'Bootcamp IronHack + Máster en Desarrollo de Software con IA.',
      en: "IronHack bootcamp + Master's in Software Development with AI.",
    },
  },
] as const satisfies ReadonlyArray<{ icon: IconName; title: BilingualText; description: BilingualText }>;
