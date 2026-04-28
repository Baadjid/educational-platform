// pages/projekte/lernzettel/faecher/sport/themen/bewegungslehre/phasenmodelle.js
// Bewegungslehre 3.5 — Phasenmodelle

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderTable,
  renderTabs, renderAccordion, renderMerkboxGrid, renderCompare,
  renderVTimeline, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const PHASEN_TABS = [
  { key: 'meinel', label: '📐 Meinel & Schnabel' },
  { key: 'goehner', label: '⚙️ Göhner' },
];

export default class SportPhasenmodellePage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color', COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Sport</button>
            <i class="fas fa-chevron-right"></i>
            <span>3.5 · Phasenmodelle</span>
          </nav>
          <h1 class="lz-sub-title">Phasen-<em>modelle.</em></h1>
          <p class="lz-sub-desc">
            Das Phasenmodell nach Meinel & Schnabel und das Funktionsphasenmodell
            nach Göhner — zwei Wege, sportliche Bewegungen systematisch zu gliedern.
          </p>
          ${renderTags(['Bewegungslehre', '3.5', 'Meinel', 'Göhner', 'Anlauf', 'Hauptphase'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="phasenTabs" aria-label="Phasenmodelle">
            ${PHASEN_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelMeinel()}
          ${this._panelGoehner()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/bewegungslehre/biomechanik`,   label: 'Biomechanische Prinzipien' },
            next: { link: `${BASE}/themen/gesundheit/gesundheitsbegriff`,     label: 'Sport & Gesundheit' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelMeinel() {
    return `
      <div class="wim-category" data-wim-cat="meinel">
        <h2 class="lz-h2">Phasenmodell nach Meinel & Schnabel</h2>
        <p class="lz-prose">
          Das Phasenmodell nach Meinel & Schnabel gliedert sportliche Bewegungen 
          in drei aufeinanderfolgende <strong>zeitlich-funktionale Abschnitte</strong>. 
          Es eignet sich besonders für die Beschreibung geschlossener, zyklischer 
          und azyklischer Bewegungen (Sprünge, Würfe, Starts).
        </p>
        ${renderVTimeline([
          {
            year: 'Phase 1',
            title: 'Vorbereitungsphase (VP)',
            text: 'Schafft die Voraussetzungen für die Hauptphase. Aufbau von Anlaufgeschwindigkeit, Vorlastspannung, Körperhaltung. Qualität der VP bestimmt direkt die Qualität der HP. Beispiel: Anlauf beim Hochsprung, Ausholbewegung beim Wurf.',
          },
          {
            year: 'Phase 2',
            title: 'Hauptphase (HP)',
            text: 'Kernphase der Bewegung — hier wird das sportliche Ziel realisiert. Höchste Kraftentfaltung, maximale Leistungsausgabe. Qualitativ wichtigste Phase. Beispiel: Absprung beim Hochsprung, Abwurf beim Speer.',
          },
          {
            year: 'Phase 3',
            title: 'Nachbereitungsphase / Endphase (NP)',
            text: 'Abschluss der Bewegung, Rückkehr zur Ausgangsposition oder Vorbereitung des nächsten Zyklus. Landung, Follow-through, Auspendeln. Vernachlässigung kann zu Verletzungen führen (harte Landung).',
          },
        ])}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Analyse-Beispiel: Weitsprung',
          body: `<strong>VP:</strong> Anlauf (Geschwindigkeit aufbauen, Rhythmus), 
                 letzter Schritt (KSP absenken, Abdruckvorbereitung).<br>
                 <strong>HP:</strong> Abdruckphase (Bodenreaktionskraft, Abflugwinkel ~20–23°) + 
                 Flugphase (Körperhaltung, Luftarbeit).<br>
                 <strong>NP:</strong> Landevorbereitung (Beine vorn), Landung (Füße aufsetzen, 
                 Körper nachschwingen).`,
        })}
        ${renderTable({
          headers: ['Sportübung', 'Vorbereitungsphase', 'Hauptphase', 'Nachbereitungsphase'],
          rows: [
            ['Hochsprung (Fosbury)', 'Anlauf, Kurvenanlauf, KSP-Senkung', 'Absprung, Lattenüberquerung', 'Landung auf Matte'],
            ['Speerwurf', 'Anlauf, Auslage, Ausholbewegung', 'Abwurf (Impulsübertragung)', 'Follow-through, Ausschritt'],
            ['Volleyball-Aufschlag', 'Ballwurf, Ausholbewegung', 'Aufschlagbewegung, Handkontakt', 'Follow-through, Positionieren'],
            ['Kugelstoßen', 'Stoßglide / Drehanlauf, Auslage', 'Abdruckphase, Ausstoßbewegung', 'Follow-through, Abfangen'],
          ],
        })}
      </div>
    `;
  }

  _panelGoehner() {
    return `
      <div class="wim-category hidden" data-wim-cat="goehner">
        <h2 class="lz-h2">Funktionsphasenmodell nach Göhner</h2>
        <p class="lz-prose">
          Das Funktionsphasenmodell (Göhner, 1979) analysiert Bewegungen nach ihrer 
          <strong>funktionalen Bedeutung</strong> — nicht zeitlich, sondern nach dem 
          motorischen Zweck jedes Abschnitts. Besonders geeignet für komplexe, 
          mehrteilige sportliche Techniken.
        </p>
        ${renderInfobox({
          icon: 'fas fa-sitemap', title: 'Grundprinzip des Funktionsphasenmodells',
          body: `Jede sportliche Bewegung besteht aus <strong>Funktionsphasen</strong>, 
                 die jeweils einen spezifischen motorischen Beitrag zur Gesamtbewegung leisten.<br><br>
                 <strong>Hierarchie:</strong> Hauptfunktionsphase → Subfunktionsphasen → 
                 Einzelbewegungen.<br><br>
                 Im Gegensatz zu Meinel sind die Phasen <em>nicht zwingend zeitlich sequenziell</em> — 
                 sie können überlappen oder gleichzeitig ablaufen.`,
        })}
        ${renderTable({
          headers: ['Funktionsphase', 'Zweck', 'Beispiel Weitsprung'],
          rows: [
            ['Hauptphase', 'Realisierung des Bewegungsziels', 'Flugphase: Weite durch Vortrag der Beine'],
            ['Vorbereitende Phase', 'Schafft optimale Bedingungen für HP', 'Anlauf: Horizontalgeschwindigkeit aufbauen'],
            ['Einleitende Phase', 'Initiiert die Bewegung', 'Erster Anlaufschritt'],
            ['Abschlussphase', 'Sichert Ergebnis, vermeidet Fehler', 'Landung ohne Rückfallen'],
            ['Hilfsfunktionsphase', 'Unterstützende Teilbewegungen', 'Armschwung beim Absprung'],
          ],
          highlight: [0],
        })}
        ${renderCompare({
          titleA: 'Meinel & Schnabel', titleB: 'Göhner',
          listA: [
            'Zeitlich-sequenziell (VP → HP → NP)',
            'Drei klare Phasen',
            'Einfacher anzuwenden',
            'Gut für einfache Bewegungen',
            'Bewährt in der Schulsportdidaktik',
          ],
          listB: [
            'Funktional (nach Zweck)',
            'Flexible Anzahl von Phasen',
            'Detailliertere Analyse möglich',
            'Besser für komplexe Techniken',
            'Forschung und Hochleistungssport',
          ],
        })}
        ${renderAccordion([
          {
            title: 'Anwendungsbeispiel: Rückwärtssalto nach Göhner',
            content: `<strong>Einleitende Phase:</strong> Anlauf / Abholung (optional).<br>
                       <strong>Vorbereitungsphase:</strong> Einleitung der Rückwärtsrotation durch 
                       Arme und Kopf, leichte Rumpfstreckung.<br>
                       <strong>Hauptphase:</strong> Absprung (maximale Vertikalgeschwindigkeit + Rotation), 
                       Gruppierung im Flug (I ↓ → ω ↑).<br>
                       <strong>Hilfsfunktionsphasen:</strong> Armbewegung, Kopfhaltung als Rotationsinitiator.<br>
                       <strong>Abschlussphase:</strong> Öffnen zum Stand, Landung gedämpft.`,
          },
        ])}
      </div>
    `;
  }

  init() {
    i18n.init(); initScrollReveal();
    initInteractive(document.querySelector('.page-sport-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}