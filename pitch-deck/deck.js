import { business } from '../src/data/business.js';

const slides = [...document.querySelectorAll('[data-slide]')];
const previousButton = document.querySelector('#previous-slide');
const nextButton = document.querySelector('#next-slide');
const counter = document.querySelector('#slide-counter');
const progress = document.querySelector('#progress-fill');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let currentIndex = 0;
let touchStart = null;

const pad = (value) => String(value).padStart(2, '0');

document.querySelectorAll('[data-rating]').forEach((element) => { element.textContent = business.rating.value; });
document.querySelectorAll('[data-review-count]').forEach((element) => { element.textContent = business.rating.count; });
document.querySelectorAll('[data-instagram-link]').forEach((element) => { element.href = business.instagramUrl; });

function showSlide(index, { updateHash = true } = {}) {
  const nextIndex = Math.max(0, Math.min(index, slides.length - 1));
  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === nextIndex;
    slide.hidden = !active;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });

  currentIndex = nextIndex;
  counter.value = `${pad(currentIndex + 1)} / ${pad(slides.length)}`;
  counter.textContent = counter.value;
  progress.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
  previousButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;

  if (updateHash) history.replaceState(null, '', `#slide-${currentIndex + 1}`);
  document.title = `${pad(currentIndex + 1)} · DM Dance Studio Website Concept`;
}

function scrollActive(amount) {
  slides[currentIndex].scrollBy({ top: amount, behavior: reduceMotion ? 'auto' : 'smooth' });
}

previousButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

document.addEventListener('keydown', (event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) return;

  if (event.key === 'ArrowLeft') { event.preventDefault(); showSlide(currentIndex - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showSlide(currentIndex + 1); }
  if (event.key === 'Home') { event.preventDefault(); showSlide(0); }
  if (event.key === 'End') { event.preventDefault(); showSlide(slides.length - 1); }
  if (event.key === 'ArrowDown') { event.preventDefault(); scrollActive(120); }
  if (event.key === 'ArrowUp') { event.preventDefault(); scrollActive(-120); }
  if (event.key === 'PageDown') { event.preventDefault(); scrollActive(slides[currentIndex].clientHeight * .82); }
  if (event.key === 'PageUp') { event.preventDefault(); scrollActive(slides[currentIndex].clientHeight * -.82); }
  if (event.key === ' ') { event.preventDefault(); scrollActive(slides[currentIndex].clientHeight * (event.shiftKey ? -.82 : .82)); }
});

document.addEventListener('touchstart', (event) => {
  const touch = event.changedTouches[0];
  touchStart = { x: touch.clientX, y: touch.clientY };
}, { passive: true });

document.addEventListener('touchend', (event) => {
  if (!touchStart) return;
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - touchStart.x;
  const deltaY = touch.clientY - touchStart.y;
  touchStart = null;
  if (Math.abs(deltaX) < 60 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
  showSlide(currentIndex + (deltaX < 0 ? 1 : -1));
}, { passive: true });

const initialMatch = location.hash.match(/^#slide-(\d+)$/);
const initialIndex = initialMatch ? Number(initialMatch[1]) - 1 : 0;
showSlide(Number.isInteger(initialIndex) ? initialIndex : 0, { updateHash: false });
