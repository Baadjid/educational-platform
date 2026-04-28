// pages/projekte/lernzettel/faecher/informatik/themen/projektmanagement/qualitaetssicherung.js
// Informatik 10.2 — Qualitätssicherung, Testen & Verifikation

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }        from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderAccordion, renderMerkboxGrid, renderFormulaBox, renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { COLOR, COLOR_RGB, BASE } from '../../informatik.js';

function renderPageNav({ prev, next }) {
  return `<nav class="lz-page-nav">
    ${prev ? `<button class="lz-page-nav-btn lz-page-nav-btn--prev" data-link="${prev.link}"><i class="fas fa-arrow-left"></i><span>${prev.label}</span></button>` : '<div></div>'}
    <button class="lz-page-nav-btn lz-page-nav-btn--up" data-link="${BASE}"><i class="fas fa-th-large"></i><span>Übersicht</span></button>
    ${next ? `<button class="lz-page-nav-btn lz-page-nav-btn--next" data-link="${next.link}"><span>${next.label}</span><i class="fas fa-arrow-right"></i></button>` : '<div></div>'}
  </nav>`;
}

const NAV = {
  prev: { label: '10.1 Scrum', link: `${BASE}/themen/projektmanagement/scrum` },
  next: { label: '10.3 DevOps', link: `${BASE}/themen/projektmanagement/devops` },
};

const TABS = [
  { key: 'grundlagen', label: '🏅 QS‑Grundlagen' },
  { key: 'testarten',  label: '🧪 Testarten & Testpyramide' },
  { key: 'testdesign', label: '📝 Testfalldesign' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class QualitaetssicherungPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-informatik-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css'; document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color', COLOR); el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html(); return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Informatik</button>
            <i class="fas fa-chevron-right"></i>
            <span>10.2 · Qualitätssicherung</span>
          </nav>
          <h1 class="lz-sub-title">Qualitätssicherung, Testen & Verifikation</h1>
          <p class="lz-sub-subtitle">ISO 25010, Testpyramide, Unit‑Tests, Äquivalenzklassen, Grenzwertanalyse</p>
          ${renderTags(['QS', 'Testpyramide', 'Unit-Test', 'Integrationstest', 'Black-Box', 'BPE 14'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="qsTabs" aria-label="Qualitätssicherung">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundlagen()}
          ${this._panelTestarten()}
          ${this._panelTestdesign()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelGrundlagen() {
    return `<div class="wim-category active" data-wim-cat="grundlagen">
      ${renderInfobox({ icon: 'fas fa-medal', title: 'Was ist Qualitätssicherung (QS)?', type: 'info',
        body: `QS umfasst alle Maßnahmen, die sicherstellen, dass Software die geforderten Qualitätseigenschaften erfüllt.
               QS ist ein <strong>Prozess</strong> – nicht nur Testen am Ende, sondern Qualität von Anfang an.` })}
      <h3 class="lz-h3">Softwarequalitätsmerkmale (ISO 25010)</h3>
      ${renderTable({
        headers: ['Merkmal', 'Beschreibung', 'Beispiel'],
        rows: [
          ['Funktionalität', 'Tut die Software was sie soll?', 'Login funktioniert korrekt'],
          ['Zuverlässigkeit', 'Stabil unter Last, keine Abstürze', 'Läuft 99,9% ohne Fehler'],
          ['Benutzbarkeit', 'Einfach zu bedienen', 'Neue User finden sich zurecht'],
          ['Effizienz', 'Schnell, ressourcenschonend', 'Seite lädt < 2 Sekunden'],
          ['Wartbarkeit', 'Leicht zu ändern', 'Neue Funktion in < 1 Tag'],
          ['Portabilität', 'Läuft auf verschiedenen Plattformen', 'Windows, Linux, macOS'],
          ['Sicherheit', 'Schutz vor unbefugtem Zugriff', 'Keine SQL‑Injection möglich'],
        ],
      })}
      <h4 class="lz-h4">Konstruktive vs. Analytische QS</h4>
      ${renderCompare({
        titleA: '🔧 Konstruktive QS (Fehler vermeiden)',
        titleB: '🔍 Analytische QS (Fehler finden)',
        listA: [
          'Qualität von Anfang an einbauen',
          'Standards, Code‑Reviews, Pair Programming',
          'Schulungen, Checklisten',
          'Continuous Integration (CI)',
          'Definition of Done',
        ],
        listB: [
          'Vorhandene Fehler aufspüren',
          'Unit‑Tests, Integrationstests',
          'Systemtests, Akzeptanztests',
          'Statische Codeanalyse (Linter)',
          'Last‑ und Performancetests',
        ],
      })}
    </div>`;
  }

  _panelTestarten() {
    return `<div class="wim-category hidden" data-wim-cat="testarten">
      <h3 class="lz-h3">Testpyramide – Strategie für automatisierte Tests</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
                    ▲
                   /E2E\           ← Wenige, langsame, teure End‑to‑End‑Tests
                  /─────\
                 /Integr.\        ← Mittlere Anzahl, Modulzusammenspiel
                /─────────\
               / Unit Tests \     ← Viele, schnelle, billige Unit‑Tests
              /───────────────\

Goldene Regel: Viele Unit‑Tests, wenige manuelle Tests!
</pre>
      ${renderTable({
        headers: ['Testart', 'Testet', 'Automatisierbar', 'Beispiel'],
        rows: [
          ['Unit‑Test', 'Einzelne Funktion/Methode', 'Ja (JUnit, pytest)', 'add(2,3) == 5'],
          ['Integrationstest', 'Zusammenspiel von Komponenten', 'Ja', 'Datenbank + API'],
          ['Systemtest', 'Gesamtes System (End‑to‑End)', 'Teilweise', 'Login‑Workflow komplett'],
          ['Abnahmetest (UAT)', 'Akzeptanz durch Kunden', 'Selten', 'Kunde testet finale Version'],
          ['Regressionstest', 'Alte Fehler nicht wieder eingeführt', 'Ja (CI)', 'Alle Tests nach Änderung'],
          ['Lasttest', 'Verhalten unter hoher Last', 'Ja (JMeter, k6)', '1000 gleichzeitige Nutzer'],
          ['Exploratives Testen', 'Unbekannte Fehler finden', 'Nein (manuell)', 'Freies Durchklicken'],
        ],
      })}
      <h4 class="lz-h4">Black‑Box vs. White‑Box Testing</h4>
      ${renderCompare({
        titleA: '⬛ Black‑Box (funktional)',
        titleB: '⬜ White‑Box (strukturell)',
        listA: [
          'Kein Wissen über internen Code',
          'Testet Ein‑/Ausgabe',
          'Äquivalenzklassen, Grenzwerte',
          'Findet fehlende Funktionen',
        ],
        listB: [
          'Code bekannt (z.B. durch Reviews)',
          'Testet alle Pfade, Schleifen',
          'Zweigüberdeckung, Pfadüberdeckung',
          'Findet versteckte Logikfehler',
        ],
      })}
    </div>`;
  }

  _panelTestdesign() {
    return `<div class="wim-category hidden" data-wim-cat="testdesign">
      <h3 class="lz-h3">Testfalldesign – Systematisch testen</h3>
      ${renderTable({
        headers: ['Methode', 'Prinzip', 'Beispiel'],
        rows: [
          ['Äquivalenzklassen', 'Repräsentanten einer Klasse gleichartiger Eingaben', 'Note: gültig 1‑6, ungültig <1, >6'],
          ['Grenzwertanalyse', 'Werte an den Grenzen von Bereichen testen', '1, 6, 0, 7 statt beliebige'],
          ['Entscheidungstabelle', 'Kombinationen von Bedingungen', 'Kreditantrag: Einkommen, Schufa, Alter'],
          ['Zustandsbasierte Tests', 'Testen von Zustandsübergängen', 'Ampel: Rot → Rot‑Gelb → Grün → Gelb → Rot'],
        ],
      })}
      <h4 class="lz-h4">Beispiel: Äquivalenzklassen & Grenzwerte</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Aufgabe: Eingabe einer Note zwischen 1,0 und 6,0 (0,1‑Schritte).
Äquivalenzklassen:
  - gültig: 1,0 ≤ note ≤ 6,0
  - ungültig (zu klein): note < 1,0
  - ungültig (zu groß): note > 6,0

Grenzwerte:
  - 0,9 (ungültig), 1,0 (gültig), 1,1 (gültig)
  - 5,9 (gültig), 6,0 (gültig), 6,1 (ungültig)

Testfälle: 0,9; 1,0; 1,1; 5,9; 6,0; 6,1
</pre>
      ${renderFormulaBox({
        label: 'Code‑Überdeckung (Code Coverage)',
        formula: 'Coverage = (getestete Zeilen / Gesamtzeilen) × 100%',
        desc: 'Ziel: mind. 80% für kritischen Code. 100% bedeutet nicht fehlerfrei – nur ausgeführte Pfade, nicht korrekte Ausgaben.',
      })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Nenne die drei Ebenen der Testpyramide und erkläre ihren Zweck.',
          content: `• <strong>Unit‑Tests:</strong> Testen einzelner Funktionen – schnell, viele.<br>
          • <strong>Integrationstests:</strong> Testen des Zusammenspiels von Modulen.<br>
          • <strong>End‑to‑End‑Tests (E2E):</strong> Testen des gesamten Systems – wenige, langsam.`,
        },
        {
          title: 'A2: Wende die Grenzwertanalyse auf eine Funktion an, die das Alter für die Volljährigkeit prüft (18 Jahre).',
          content: `Grenzwerte: 17 (ungültig), 18 (gültig), 19 (gültig). Testfälle: 17, 18, 19.`,
        },
        {
          title: 'A3: Was ist der Unterschied zwischen einem Unit‑Test und einem Integrationstest?',
          content: `Unit‑Test isoliert eine einzelne Funktion/Methode (z.B. mit Mocks). Integrationstest prüft das Zusammenspiel mehrerer Komponenten (z.B. Datenbank + Service).`,
        },
        {
          title: 'A4: Warum ist eine hohe Code‑Coverage allein kein Garant für fehlerfreie Software?',
          content: `Coverage misst nur, welche Codezeilen ausgeführt wurden, nicht ob die Ausgabe korrekt ist. Auch können Randfälle oder Logikfehler übersehen werden, obwohl die Zeile "getestet" wurde.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Qualitätssicherung für die Prüfung', type: 'success',
        body: `• ISO 25010 Qualitätsmerkmale.<br>
               • Testpyramide: Unit (viele) → Integration → E2E (wenige).<br>
               • Black‑Box vs. White‑Box Testing.<br>
               • Äquivalenzklassen, Grenzwertanalyse.<br>
               • Unit‑Tests automatisieren (JUnit, pytest).` })}
    </div>`;
  }

  init() {
    i18n.init(); initScrollReveal();
    initInteractive(document.querySelector('.page-informatik-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { if (btn.dataset.navLink) window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}