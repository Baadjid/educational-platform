// pages/portfolio/js/flip-cards.js
// Flip-Cards für Skills-Sektion — mit Timeout-Management

let activeTimeouts = [];

export function initSkillCards() {
  console.log('🃏 Initialisiere Flip-Cards...');
  
  const cards = document.querySelectorAll('.skill-card-flip');
  if (!cards.length) return;

  cards.forEach(card => {
    // Accessibility
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-pressed', 'false');

    let flipTimeout = null;

    const flip = () => {
      if (card.classList.contains('transitioning')) return;
      
      card.classList.add('transitioning');
      card.classList.toggle('flipped');
      card.setAttribute('aria-pressed', card.classList.contains('flipped'));
      
      // Vorherigen Timeout löschen, falls vorhanden
      if (flipTimeout) {
        clearTimeout(flipTimeout);
        // Aus dem aktiven Timeouts-Array entfernen
        const index = activeTimeouts.indexOf(flipTimeout);
        if (index > -1) activeTimeouts.splice(index, 1);
        flipTimeout = null;
      }
      
      // Auto-Zurückdrehen nach 10 Sekunden
      if (card.classList.contains('flipped')) {
        flipTimeout = setTimeout(() => {
          if (card.classList.contains('flipped')) {
            card.classList.remove('transitioning');
            flip();
          }
          // Timeout aus dem Array entfernen
          const idx = activeTimeouts.indexOf(flipTimeout);
          if (idx > -1) activeTimeouts.splice(idx, 1);
          flipTimeout = null;
        }, 10000);
        activeTimeouts.push(flipTimeout);
      }
      
      // Transition-State zurücksetzen
      setTimeout(() => {
        card.classList.remove('transitioning');
      }, 2600);
    };

    card.addEventListener('click', flip);
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flip();
      }
    });
  });

  console.log(`✅ ${cards.length} Flip-Cards initialisiert`);
}

// Aufräumfunktion für den Router
export function cleanupSkillCards() {
  console.log('🧹 Cleanup Flip-Card Timeouts...');
  activeTimeouts.forEach(timeout => {
    clearTimeout(timeout);
  });
  activeTimeouts = [];
  
  // Zusätzlich: Alle offenen Flip-Cards schließen
  document.querySelectorAll('.skill-card-flip.flipped').forEach(card => {
    card.classList.remove('flipped');
    card.setAttribute('aria-pressed', 'false');
  });
}