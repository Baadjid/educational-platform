// shared/js/index.js
// Zentrale Export-Datei für alle Shared-Funktionen

import { initTheme, getCurrentTheme, applyTheme } from './theme.js';
import { initSidebar, openSidebar, closeSidebar } from './sidebar.js';
import { initScrollTop, initScrollReveal, refreshScrollReveal } from './scroll.js';
import { initStatCounters, animateNumber, animateNumberWithSuffix } from './counters.js';
import { throttle, debounce, lerp, clamp, round, adjust, createElement, getCSSVariable, isInViewport } from './utils.js';

// Stelle sicher, dass alle Funktionen exportiert werden
export { 
  initTheme, 
  getCurrentTheme, 
  applyTheme,
  initSidebar, 
  openSidebar, 
  closeSidebar,
  initScrollTop, 
  initScrollReveal, 
  refreshScrollReveal,
  initStatCounters, 
  animateNumber, 
  animateNumberWithSuffix,
  throttle, 
  debounce, 
  lerp, 
  clamp, 
  round, 
  adjust, 
  createElement, 
  getCSSVariable, 
  isInViewport 
};

// Verbesserte Aktivitäten-Scroll Funktion
export function initActivitiesScroll() {
  const containers = document.querySelectorAll('.footer-activities-column');
  if (containers.length === 0) return;
  
  containers.forEach(container => {
    const list = container.querySelector('.activities-list');
    const btn = container.querySelector('.activities-next-btn');
    
    if (!list || !btn) return;
    
    const items = list.querySelectorAll('li');
    if (!items.length) return;
    
    const itemHeight = 36;
    const visibleCount = 3;
    const totalItems = items.length;
    
    let currentIndex = 0;
    
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    newBtn.addEventListener('click', () => {
      if (currentIndex + visibleCount >= totalItems) {
        currentIndex = 0;
        newBtn.innerHTML = '<span>Weiter</span> <i class="fas fa-chevron-down"></i>';
      } else {
        currentIndex += visibleCount;
        if (currentIndex + visibleCount >= totalItems) {
          newBtn.innerHTML = '<span>Von vorne</span> <i class="fas fa-chevron-up"></i>';
        }
      }
      list.style.transform = `translateY(-${currentIndex * itemHeight}px)`;
    });
    
    if (totalItems <= visibleCount) {
      newBtn.style.display = 'none';
    }
  });
}

// Automatische Initialisierung der Core-Features
export function initSharedFeatures() {
  if (typeof initTheme === 'function')       initTheme();
  if (typeof initSidebar === 'function')     initSidebar();
  if (typeof initScrollTop === 'function')   initScrollTop();
  if (typeof initScrollReveal === 'function') initScrollReveal();
  if (typeof initStatCounters === 'function') initStatCounters();
  initActivitiesScroll();
}