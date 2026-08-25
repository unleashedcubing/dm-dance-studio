import { business } from './data/business.js';

document.title = `${document.body.dataset.pageTitle ?? 'Information'} | ${business.name}`;

document.querySelectorAll('[data-business-name]').forEach((node) => { node.textContent = business.shortName; });
document.querySelectorAll('[data-business-phone]').forEach((node) => { node.textContent = business.phone.display; });
document.querySelectorAll('[data-call-link]').forEach((node) => { node.href = `tel:${business.phone.tel}`; });
document.querySelectorAll('[data-map-link]').forEach((node) => { node.href = business.mapUrl; });
document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = String(new Date().getFullYear()); });
