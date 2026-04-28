// shared/js/counters.js
// Animierte Statistik-Zähler

let counterObserver = null;

export function initStatCounters() {
  const elements = document.querySelectorAll('[data-counter]');
  if (!elements.length) return;

  if (!counterObserver) {
    counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        const el = entry.target;
        const targetValue = parseInt(el.textContent) || parseInt(el.dataset.target) || 0;
        
        animateNumber(el, 0, targetValue, 1800);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
  }

  elements.forEach(el => counterObserver.observe(el));
}

export function animateNumber(element, start, end, duration) {
  let startTime = null;
  
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    
    const progress = Math.min((timestamp - startTime) / duration, 1);
    // Easing: easeOutCubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * (end - start) + start);
    
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = end;
    }
  };
  
  requestAnimationFrame(step);
}

// Für Zahlen mit Suffixen (z.B. "3+")
export function animateNumberWithSuffix(element, targetText, duration) {
  // Extrahiere Zahl und Suffix
  const match = targetText.match(/^(\d+)(.*)$/);
  if (!match) return;
  
  const targetNumber = parseInt(match[1], 10);
  const suffix = match[2];
  
  let startTime = null;
  
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * targetNumber);
    
    element.textContent = current + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = targetNumber + suffix;
    }
  };
  
  requestAnimationFrame(step);
}