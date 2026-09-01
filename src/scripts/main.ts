export {};

document.documentElement.classList.add('js');

type SupportedLanguage = 'es' | 'en';

const body = document.body;
const translatableElements = Array.from(document.querySelectorAll<HTMLElement>('[data-en]'));
const ariaTranslatableElements = Array.from(document.querySelectorAll<HTMLElement>('[data-en-aria-label]'));
const languageButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-lang]'));
const heroVideo = document.querySelector<HTMLVideoElement>('[data-hero-video-media]');
const heroVideoBookingLink = document.querySelector<HTMLAnchorElement>('[data-hero-video-booking]');
const heroFireTitle = document.querySelector<HTMLElement>('[data-hero-fire-title]');
const embeddedCtaLeadTime = 3.1;
const embeddedCtaFreezeLeadTime = 0.45;

if (heroFireTitle) {
  const fireMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let fireFrame = 0;

  const syncHeroFire = (): void => {
    fireFrame = 0;
    const bounds = heroFireTitle.getBoundingClientRect();
    const activationStart = Math.max(0, window.scrollY + bounds.top - window.innerHeight * .72);
    const progress = fireMotionQuery.matches ? 1 : Math.min(Math.max((window.scrollY - activationStart) / 180, 0), 1);
    const isVisible = bounds.bottom > 0 && bounds.top < window.innerHeight;

    heroFireTitle.style.setProperty('--hero-fire-scale', String(.34 + progress * .66));
    heroFireTitle.style.setProperty('--hero-fire-glow', `${2 + progress * 8}px`);
    heroFireTitle.classList.toggle('is-burning', !fireMotionQuery.matches && progress > .08 && isVisible && !document.hidden);
  };

  const scheduleHeroFire = (): void => {
    if (fireFrame) return;
    fireFrame = window.requestAnimationFrame(syncHeroFire);
  };

  window.addEventListener('scroll', scheduleHeroFire, { passive: true });
  window.addEventListener('resize', scheduleHeroFire);
  document.addEventListener('visibilitychange', scheduleHeroFire);
  fireMotionQuery.addEventListener('change', scheduleHeroFire);
  syncHeroFire();
}

for (const element of translatableElements) {
  if (!element.dataset.es) element.dataset.es = element.innerHTML;
}

for (const element of ariaTranslatableElements) {
  if (!element.dataset.esAriaLabel) element.dataset.esAriaLabel = element.getAttribute('aria-label') ?? '';
}

function setHeroVideoBookingActive(isActive: boolean): void {
  if (!heroVideoBookingLink) return;
  heroVideoBookingLink.hidden = !isActive;
}

function syncHeroVideoBooking(): void {
  if (!heroVideo || !Number.isFinite(heroVideo.duration)) return;

  const remainingTime = heroVideo.duration - heroVideo.currentTime;
  const isEmbeddedCtaVisible = remainingTime <= embeddedCtaLeadTime;
  setHeroVideoBookingActive(isEmbeddedCtaVisible);

  if (isEmbeddedCtaVisible && remainingTime <= embeddedCtaFreezeLeadTime && !heroVideo.paused) {
    heroVideo.pause();
  }
}

function setMetaContent(selector: string, value: string): void {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', value);
}

function setLanguage(language: SupportedLanguage): void {
  document.documentElement.lang = language;

  for (const element of translatableElements) {
    element.innerHTML = language === 'en' ? element.dataset.en ?? element.innerHTML : element.dataset.es ?? element.innerHTML;
  }

  for (const element of ariaTranslatableElements) {
    const label = language === 'en' ? element.dataset.enAriaLabel : element.dataset.esAriaLabel;
    if (label) element.setAttribute('aria-label', label);
  }

  for (const button of languageButtons) {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  }

  const title = language === 'en' ? body.dataset.titleEn : body.dataset.titleEs;
  const description = language === 'en' ? body.dataset.descriptionEn : body.dataset.descriptionEs;
  if (title) {
    document.title = title;
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[name="twitter:title"]', title);
  }
  if (description) {
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:description"]', description);
  }
  setMetaContent('meta[property="og:locale"]', language === 'en' ? 'en_IE' : 'es_ES');

  try {
    localStorage.setItem('incamdi-language', language);
  } catch {
    // Local storage can be unavailable in private browsing contexts.
  }
}

let savedLanguage: string | null = null;
try {
  savedLanguage = localStorage.getItem('incamdi-language');
} catch {
  savedLanguage = null;
}

const browserLanguage: SupportedLanguage = navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
const routeLanguage: SupportedLanguage | null = document.documentElement.lang === 'en' ? 'en' : null;
const initialLanguage: SupportedLanguage = routeLanguage ?? (savedLanguage === 'en' || savedLanguage === 'es' ? savedLanguage : browserLanguage);
setLanguage(initialLanguage);

for (const button of languageButtons) {
  button.addEventListener('click', () => setLanguage(button.dataset.lang === 'en' ? 'en' : 'es'));
}

if (heroVideo && heroVideoBookingLink) {
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;

  const applyVideoPreference = (): void => {
    if (reduceMotionQuery.matches || connection?.saveData) {
      heroVideo.pause();
      syncHeroVideoBooking();
      return;
    }

    heroVideo.play().catch(() => {
      heroVideo.pause();
      syncHeroVideoBooking();
    });
  };

  heroVideo.addEventListener('timeupdate', syncHeroVideoBooking);
  heroVideo.addEventListener('durationchange', syncHeroVideoBooking);
  heroVideo.addEventListener('ended', () => setHeroVideoBookingActive(true));
  reduceMotionQuery.addEventListener('change', applyVideoPreference);
  setHeroVideoBookingActive(false);
  applyVideoPreference();
}

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileMenu = document.querySelector<HTMLElement>('.mobile-menu');
const menuLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.mobile-menu a'));
let previouslyFocused: HTMLElement | null = null;

function setMenu(open: boolean, restoreFocus = true): void {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
  previouslyFocused = open ? document.activeElement as HTMLElement : previouslyFocused;

  const language = document.documentElement.lang as SupportedLanguage;
  menuButton.setAttribute('aria-label', open ? (language === 'en' ? 'Close menu' : 'Cerrar menú') : (language === 'en' ? 'Open menu' : 'Abrir menú'));

  if (open) window.setTimeout(() => menuLinks[0]?.focus(), 80);
  else if (restoreFocus) previouslyFocused?.focus();
}

menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
for (const link of menuLinks) link.addEventListener('click', () => setMenu(false));
window.matchMedia('(min-width: 861px)').addEventListener('change', (event) => {
  if (event.matches && menuButton?.getAttribute('aria-expanded') === 'true') setMenu(false, false);
});

document.addEventListener('keydown', (event) => {
  if (!menuButton || menuButton.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') setMenu(false);
  if (event.key !== 'Tab') return;

  const focusable = [menuButton, ...menuLinks];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
  for (const item of revealItems) item.classList.add('in');
} else {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -7% 0px', threshold: 0.08 });

  for (const item of revealItems) {
    if (item.getBoundingClientRect().top < window.innerHeight * 0.96) item.classList.add('in');
    else observer.observe(item);
  }
}

const floatingLogo = document.querySelector<HTMLElement>('[data-floating-logo]');

if (floatingLogo) {
  const floatingMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let logoIsVisible = false;

  const syncFloatingLogo = (): void => {
    floatingLogo.classList.toggle('is-floating', logoIsVisible && !document.hidden && !floatingMotionQuery.matches);
  };

  if ('IntersectionObserver' in window) {
    const logoObserver = new IntersectionObserver(([entry]) => {
      logoIsVisible = entry?.isIntersecting ?? false;
      syncFloatingLogo();
    }, { threshold: 0.15 });

    logoObserver.observe(floatingLogo);
  } else {
    logoIsVisible = true;
  }

  document.addEventListener('visibilitychange', syncFloatingLogo);
  floatingMotionQuery.addEventListener('change', syncFloatingLogo);
  syncFloatingLogo();
}

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
    umami?: { track: (event: string) => void };
    dataLayer?: Array<Record<string, string>>;
  }
}

for (const link of document.querySelectorAll<HTMLElement>('[data-track]')) {
  link.addEventListener('click', () => {
    const eventName = link.dataset.track ?? 'cta';
    window.plausible?.(eventName);
    window.umami?.track(eventName);
    window.dataLayer?.push({ event: eventName });
    window.dispatchEvent(new CustomEvent('incamdi:analytics', { detail: { event: eventName } }));
  });
}
