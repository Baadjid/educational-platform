// shared/js/utils.js
// Allgemeine Hilfsfunktionen

// Lineare Interpolation
export function lerp(start, end, factor) {
  if (isNaN(start) || isNaN(end) || isNaN(factor)) return start;
  return start + (end - start) * factor;
}

// Clamping
export function clamp(value, min = 0, max = 100) {
  if (isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
}

// Runden auf Nachkommastellen
export function round(value, precision = 3) {
  if (isNaN(value)) return 0;
  return parseFloat(value.toFixed(precision));
}

// Wertebereich umrechnen
export function adjust(value, fromMin, fromMax, toMin, toMax) {
  if (isNaN(value)) return toMin;
  const ratio = (value - fromMin) / (fromMax - fromMin);
  return round(toMin + ratio * (toMax - toMin));
}

// Throttle-Funktion
export function throttle(fn, wait) {
  let timeout = null;
  let lastArgs = null;
  let lastContext = null;
  let lastCall = null;

  return function(...args) {
    if (!timeout) {
      fn.apply(this, args);
      
      timeout = setTimeout(() => {
        timeout = null;
        if (lastArgs) {
          fn.apply(lastContext, lastArgs);
          lastArgs = lastContext = null;
        }
      }, wait);
    } else {
      lastArgs = args;
      lastContext = this;
    }
  };
}

// Debounce-Funktion
export function debounce(fn, delay) {
  let timeout = null;
  
  return function(...args) {
    if (timeout) clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      fn.apply(this, args);
      timeout = null;
    }, delay);
  };
}

// DOM-Element erstellen mit Attributen
export function createElement(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);
  
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(element.style, value);
    } else if (key.startsWith('data-')) {
      element.setAttribute(key, value);
    } else {
      element[key] = value;
    }
  });
  
  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });
  
  return element;
}

// CSS-Variable auslesen
export function getCSSVariable(name, element = document.documentElement) {
  return getComputedStyle(element).getPropertyValue(name).trim();
}

// Prüfen ob Element im Viewport
export function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return (
    rect.top <= windowHeight - offset &&
    rect.bottom >= offset
  );
}

