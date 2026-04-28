// pages/portfolio/js/timeline.js
// Timeline-Initialisierung (Höhenberechnung)

export function initTimeline() {
  console.log('📅 Initialisiere Timeline...');
  
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;

  items.forEach(item => {
    // Dauer aus data-duration oder berechnen
    const start = item.dataset.start;
    const end = item.dataset.end;
    
    let duration = 1; // Standard
    
    if (start && end) {
      // Einfache Berechnung: Monatsdifferenz
      const startDate = new Date(start);
      const endDate = new Date(end);
      const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 
                   + (endDate.getMonth() - startDate.getMonth());
      duration = Math.max(1, Math.ceil(months / 3)); // 1 pro Quartal
    }
    
    item.style.setProperty('--item-duration', duration);
    item.style.minHeight = `${40 + duration * 5}px`;
  });

  console.log(`✅ ${items.length} Timeline-Items initialisiert`);
}