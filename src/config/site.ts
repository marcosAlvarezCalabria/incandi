const provisionalSiteUrl = 'https://incamdi.com';
const whatsappBookingUrl = 'https://wa.me/34687414574';

const envSiteUrl = import.meta.env.PUBLIC_SITE_URL?.trim();
const envContactEmail = import.meta.env.PUBLIC_CONTACT_EMAIL?.trim();

export const siteConfig = {
  name: 'Incamdi',
  url: (envSiteUrl || provisionalSiteUrl).replace(/\/$/, ''),
  email: envContactEmail || undefined,
  phone: '+34687414574',
  bookingUrl: whatsappBookingUrl,
  bookingIsExternal: true,
  bookingLabel: { es: 'Reservar por WhatsApp', en: 'Book via WhatsApp' },
  locale: 'es_ES',
  alternateLocale: 'en_IE',
  title: {
    es: 'Desarrollo web, SEO y automatización | Incamdi',
    en: 'Web development, SEO and automation | Incamdi',
  },
  description: {
    es: 'Desarrollo web a medida, SEO técnico, software y automatizaciones con IA para negocios en España e Irlanda. Trabaja directamente con Marcos Álvarez.',
    en: 'Custom websites, technical SEO, software and AI automation for businesses in Ireland and Spain. Work directly with Marcos Álvarez.',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/marcos-alvarez-calabria',
    github: 'https://github.com/marcosAlvarezCalabria',
    x: 'https://x.com/MarcosGalwayDev',
  },
} as const;
