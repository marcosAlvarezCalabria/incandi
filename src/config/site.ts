const provisionalSiteUrl = 'https://incandi.com';
const whatsappBookingUrl = 'https://wa.me/34687414574';

const envSiteUrl = import.meta.env.PUBLIC_SITE_URL?.trim();
const envContactEmail = import.meta.env.PUBLIC_CONTACT_EMAIL?.trim();

export const siteConfig = {
  name: 'Incandi',
  url: (envSiteUrl || provisionalSiteUrl).replace(/\/$/, ''),
  email: envContactEmail || undefined,
  bookingUrl: whatsappBookingUrl,
  bookingIsExternal: true,
  bookingLabel: { es: 'Reservar por WhatsApp', en: 'Book via WhatsApp' },
  locale: 'es_ES',
  alternateLocale: 'en_IE',
  title: {
    es: 'Incandi — Desarrollo web, SEO y automatizaciones a medida',
    en: 'Incandi — Web development, SEO and custom automation',
  },
  description: {
    es: 'Incandi — Agencia de desarrollo web, SEO y automatizaciones a medida en Galway y Madrid. Webs que venden, SaaS en producción y posicionamiento en Google.',
    en: 'Incandi — Web development, SEO and custom automation agency in Galway and Madrid. Websites that sell, SaaS in production and Google rankings.',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/marcos-alvarez-calabria',
    github: 'https://github.com/marcosAlvarezCalabria',
    x: 'https://x.com/MarcosGalwayDev',
  },
} as const;
