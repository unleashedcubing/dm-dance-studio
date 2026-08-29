import { business } from './data/business.js?v=20260829-2';
import { buildWhatsAppUrl } from './trial.js';

document.title = `${business.name} | Dance in ${business.area}`;
document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${business.name} | Dance in ${business.area}`);

const $ = (selector) => {
  const element = document.querySelector(selector);
  if (!element) throw new Error(`Missing element: ${selector}`);
  return element;
};

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => { element.textContent = value; });
};

const setHref = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => { element.href = value; });
};

setText('[data-business-name]', business.shortName);
setText('[data-business-phone]', business.phone.display);
setText('[data-business-address]', business.address.display);
setText('[data-business-hours]', business.hours[0].display);
setText('[data-business-note]', business.note);
setText('[data-instagram-handle]', business.instagramHandle);
setHref('[data-call-link]', `tel:${business.phone.tel}`);
setHref('[data-map-link]', business.mapUrl);
setHref('[data-instagram-link]', business.instagramUrl);
setHref('[data-whatsapp-link]', `https://wa.me/${business.phone.whatsapp}`);

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'DanceSchool',
  name: business.name,
  telephone: business.phone.tel,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.display,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country
  },
  openingHoursSpecification: business.hours.map((item) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: item.opens,
    closes: item.closes
  })),
  sameAs: [business.instagramUrl],
  hasMap: business.mapUrl
};

const schema = document.createElement('script');
schema.type = 'application/ld+json';
schema.textContent = JSON.stringify(structuredData);
document.head.append(schema);

const navToggle = document.querySelector('[data-nav-toggle]');
const navPanel = document.querySelector('[data-nav-panel]');
navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navPanel?.toggleAttribute('data-open', !isOpen);
});
navPanel?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navToggle?.setAttribute('aria-expanded', 'false');
  navPanel.removeAttribute('data-open');
}));

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('.section-heading, .class-card, .photo-card, .instagram-callout, .testimonials-heading, .testimonial-grid blockquote, .step-list li, .visit-panel, .faq-list, .trial-copy, .trial-form');
revealTargets.forEach((element) => element.setAttribute('data-reveal', ''));

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -9% 0px', threshold: .08 });

  revealTargets.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
    revealObserver.observe(element);
  });
}

document.querySelectorAll('[data-interest]').forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.interest;
    const select = $('#interest');
    if (value) select.value = value;
    $('#trial').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    select.focus({ preventScroll: true });
  });
});

const form = document.querySelector('#trial-form');
const status = document.querySelector('#form-status');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const url = buildWhatsAppUrl(business.phone.whatsapp, {
    firstName: String(data.get('firstName') ?? ''),
    interest: String(data.get('interest')),
    ageGroup: String(data.get('ageGroup')),
    preference: String(data.get('preference') ?? '')
  });
  if (status) status.textContent = 'Opening WhatsApp with your class enquiry.';
  window.location.assign(url);
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
