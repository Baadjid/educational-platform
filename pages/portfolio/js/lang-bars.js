// pages/portfolio/js/lang-bars.js
// Animierte Sprachbalken

export function initLangBars() {
  console.log('📊 Initialisiere Sprachbalken...');
  
  const bars = document.querySelectorAll('.lang-bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      const bar = entry.target;
      const pct = getComputedStyle(bar).getPropertyValue('--pct').trim();
      
      // Zurücksetzen und animieren
      bar.style.width = '0%';
      
      requestAnimationFrame(() => {
        bar.style.width = pct;
      });
      
      observer.unobserve(bar);
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
  
  console.log(`✅ ${bars.length} Sprachbalken- Observer initialisiert`);
}