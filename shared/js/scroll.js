// shared/js/scroll.js
// Scroll-to-Top und Scroll-Reveal

import { throttle } from './utils.js';

let scrollTopInitialized = false;
let revealObserver = null;

export function initScrollTop() {
  if (scrollTopInitialized) return;
  scrollTopInitialized = true;

  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  const footer = document.querySelector('.footer');
  
  const updateButton = throttle(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // 1. Prüfen, ob wir uns im Footer-Bereich befinden (am Ende der Seite)
    const distanceToBottom = documentHeight - (scrollY + windowHeight);
    const footerHeight = footer ? footer.offsetHeight : 0;
    const isInFooterArea = distanceToBottom < footerHeight + 50; // 50px Puffer
    
    // 2. Button-Logik:
    if (scrollY > 400 && !isInFooterArea) {
      // Sichtbar: Wenn wir mehr als 400px gescrollt haben UND nicht im Footer-Bereich sind
      btn.classList.add('visible');
      btn.classList.remove('hide-in-footer');
    } else if (isInFooterArea && scrollY > 400) {
      // Unsichtbar im Footer: Wenn wir im Footer-Bereich sind UND vorher sichtbar waren
      btn.classList.remove('visible');
      btn.classList.add('hide-in-footer');
    } else {
      // Unsichtbar oben: Weniger als 400px gescrollt
      btn.classList.remove('visible');
      btn.classList.remove('hide-in-footer');
    }
  }, 50);

  window.addEventListener('scroll', updateButton, { passive: true });
  window.addEventListener('resize', updateButton, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Initial check
  setTimeout(updateButton, 100);
}

export function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal:not(.revealed)');
  if (!elements.length) return;

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.08,
      rootMargin: '0px 0px -10px 0px'
    });
  }

  elements.forEach(el => revealObserver.observe(el));
}

// Für dynamisch nachgeladene Inhalte
export function refreshScrollReveal() {
  if (revealObserver) {
    const elements = document.querySelectorAll('.reveal:not(.revealed)');
    elements.forEach(el => revealObserver.observe(el));
  }
}