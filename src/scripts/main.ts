export {};

document.documentElement.classList.add('js');

const pageIsEnglish = document.documentElement.lang === 'en';
const heroVideo = document.querySelector<HTMLVideoElement>('[data-hero-video-media]');
const heroVideoBookingLink = document.querySelector<HTMLAnchorElement>('[data-hero-video-booking]');
const heroFireSlogan = document.querySelector<HTMLElement>('[data-hero-fire-title]');
const embeddedCtaLeadTime = 3.1;
const embeddedCtaFreezeLeadTime = 0.45;

if (heroFireSlogan) {
  const fireMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let fireFrame = 0;

  const syncHeroFire = (): void => {
    fireFrame = 0;
    const bounds = heroFireSlogan.getBoundingClientRect();
    const activationStart = Math.max(0, window.scrollY + bounds.top - window.innerHeight * .72);
    const progress = fireMotionQuery.matches ? 1 : Math.min(Math.max((window.scrollY - activationStart) / 180, 0), 1);
    const isVisible = bounds.bottom > 0 && bounds.top < window.innerHeight;

    heroFireSlogan.style.setProperty('--hero-fire-scale', String(.34 + progress * .66));
    heroFireSlogan.style.setProperty('--hero-fire-glow', `${2 + progress * 8}px`);
    heroFireSlogan.classList.toggle('is-burning', !fireMotionQuery.matches && progress > .08 && isVisible && !document.hidden);
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
  const scheduleVideoPlayback = (): void => {
    const startPlayback = (): void => { window.setTimeout(applyVideoPreference, 800); };
    if (document.readyState === 'complete') startPlayback();
    else window.addEventListener('load', startPlayback, { once: true });
  };

  setHeroVideoBookingActive(false);
  scheduleVideoPlayback();
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

  menuButton.setAttribute('aria-label', open ? (pageIsEnglish ? 'Close menu' : 'Cerrar menú') : (pageIsEnglish ? 'Open menu' : 'Abrir menú'));

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
