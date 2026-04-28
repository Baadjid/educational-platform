// pages/projekte/lernzettel/js/components/audio-card.js
// ══════════════════════════════════════════════════════════════
// Audio-Card Komponente — universell für alle Lernzettel-Unterseiten
//
// Nutzung in einer Unterseite:
//   import { renderAudioCard } from '../../js/components/audio-card.js';
//   // ...
//   ${renderAudioCard('https://...')}
//
// Voraussetzung:
//   - ensureAudioCardCSS() muss einmalig aufgerufen werden (oder
//     audio-card.css manuell geladen sein)
//   - --audio-color und --audio-color-rgb müssen am Elternelement
//     per el.style.setProperty gesetzt sein (Fachfarbe)
// ══════════════════════════════════════════════════════════════

import { loadComponentCSS } from './components.js';

// ─── CSS einmalig laden ──────────────────────────────────────

export function ensureAudioCardCSS() {
  loadComponentCSS('pages/projekte/lernzettel/styles/components/audio-card.css');
}

// ─── Render-Funktion ─────────────────────────────────────────

/**
 * Gibt HTML für eine Audio-Card zurück.
 * @param {string} src  — direkte URL zur Audiodatei
 * @returns {string}    — fertiges HTML
 */
export function renderAudioCard(title,desc,src) {
  return `
    <div class="lz-audio-card reveal">
      <div class="lz-audio-card-inner">

        <div class="lz-audio-badge">
          <i class="fas fa-headphones"></i>
          <span class="lz-audio-sub-title">${title}</span>
        </div>

        <p class="lz-audio-desc">
            ${desc}
        </p>

        <audio
          class="lz-audio-player"
          controls
          preload="none"
          src="${src}">
          <p>Dein Browser unterstützt kein HTML5-Audio.</p> 
        </audio>

        <div class="lz-audio-meta">
          <span><i class="fas fa-user"></i> Kirill Heldt</span>
          <span><i class="fas fa-tag"></i> Frames · Linguistik · Politik</span>
        </div>

      </div>
      <div class="lz-audio-orb" aria-hidden="true"></div>
    </div>
  `;
}