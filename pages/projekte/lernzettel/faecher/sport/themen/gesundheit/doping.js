// pages/projekte/lernzettel/faecher/sport/themen/gesundheit/doping.js
// Sport & Gesundheit 4.5 — Doping

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderSubhead, renderTags, renderInfobox,
  renderTable, renderTabs, renderAccordion, renderMerkboxGrid, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const DOPING_TABS = [
  { key: 'stimulanzien', label: '💊 Stimulanzien & Steroide' },
  { key: 'epo',          label: '🩸 EPO · Narkotika · Diuretika' },
  { key: 'ethik',        label: '⚖️ Ethik & Prävention' },
];

export default class SportDopingPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';
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
            <button class="lz-bread-link" data-nav-link="${BASE}">Sport</button>
            <i class="fas fa-chevron-right"></i>
            <span>4.5 · Doping</span>
          </nav>
          <h1 class="lz-sub-title">Doping — <em>Mittel & Methoden.</em></h1>
          <p class="lz-sub-desc">
            Definition, Dopingmittel (Stimulanzien, anabole Steroide, EPO, 
            Narkotika, Diuretika) und verbotene Methoden im Überblick.
          </p>
          ${renderTags(['Sport & Gesundheit', '4.5', 'WADA', 'EPO', 'Steroide', 'Anti-Doping'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderInfobox({
            icon: 'fas fa-ban', title: 'WADA-Definition Doping',
            body: `Doping liegt vor, wenn eine oder mehrere der folgenden Verstöße vorliegt:<br>
                   <strong>1.</strong> Vorhandensein einer verbotenen Substanz im Körper des Athleten.<br>
                   <strong>2.</strong> Anwendung einer verbotenen Methode.<br>
                   <strong>3.</strong> Nichtverfügbarkeit bei Dopingtests.<br>
                   Der WADA-Code gilt weltweit; die Verbotsliste wird jährlich aktualisiert.`,
          })}

          <nav class="wim-tabs" id="dopingTabs" aria-label="Dopingmittel und Methoden">
            ${DOPING_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelStimulanzien()}
          ${this._panelEpo()}
          ${this._panelEthik()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/gesundheit/ernaehrung`,   label: 'Ernährung' },
            next: { link: `${BASE}/themen/psychologie/motivation`,     label: 'Motivation' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelStimulanzien() {
    return `
      <div class="wim-category" data-wim-cat="stimulanzien">
        ${renderTable({
          headers: ['Mittel', 'Wirkung', 'Gesundheitsrisiken', 'Sportart-Nutzen'],
          rows: [
            ['Stimulanzien (Amphetamine, Kokain)', 'ZNS-Aktivierung, Ermüdungshemmung, Aggressivität ↑', 'Herzrhythmusstörungen, Sucht, Herzinfarkt, Tod', 'Ausdauer, Kampfsport'],
            ['Anabole Steroide (Testosteron-Derivate)', 'Muskelhypertrophie ↑, Regeneration ↑, Aggression ↑', 'Leberschäden, Herzvergrößerung, Hormonstörungen, Akne', 'Kraftsport, Leichtathletik'],
            ['Koffein (hohe Dosis, hist. verboten)', 'Ausdauer ↑, Konzentration ↑, Fettverbrennung ↑', 'Schlafstörungen, Herzrasen (bei Überdosis)', 'Ausdauersport'],
          ],
          highlight: [1],
        })}
      </div>
    `;
  }

  _panelEpo() {
    return `
      <div class="wim-category hidden" data-wim-cat="epo">
        ${renderTable({
          headers: ['Mittel', 'Wirkung', 'Gesundheitsrisiken', 'Sportart-Nutzen'],
          rows: [
            ['Erythropoietin (EPO)', 'Erythrozyten ↑ → O₂-Transport ↑ → Ausdauer ↑', 'Thrombosen, Herzinfarkt, Schlaganfall (Blut verdickt)', 'Ausdauersport (Radsport, Laufen)'],
            ['Narkotika (Morphin, Heroin)', 'Schmerzunterdrückung → Training durch Verletzung möglich', 'Sucht, Atemdepression, Tod', 'Verletzungsmanagement (illegaler Einsatz)'],
            ['Diuretika', 'Gewichtsverlust (Gewichtsklassensportarten), Maskierung', 'Dehydration, Elektrolytstörungen, Herzprobleme', 'Boxen, Ringen, Judo'],
            ['Blutdoping (Eigen-/Fremdblut)', 'Erythrozyten ↑ → ähnlich EPO', 'Transfusionsreaktionen, Infektionen, Thrombosen', 'Ausdauersport'],
            ['Wachstumshormon (HGH)', 'Muskelmasse ↑, Fettabbau ↑, Regeneration ↑', 'Akromegalie, Diabetes, Herzvergrößerung', 'Kraftsport, Teamsport'],
          ],
          highlight: [0],
        })}
      </div>
    `;
  }

  _panelEthik() {
    return `
      <div class="wim-category hidden" data-wim-cat="ethik">
        ${renderAccordion([
          {
            title: 'Argumente gegen Doping (ethisch)',
            content: `<ul style="margin:0;padding-left:1.2rem;line-height:1.9;">
              <li><strong>Chancengleichheit:</strong> Natürliche Leistungsgrenzen werden künstlich verschoben.</li>
              <li><strong>Fairness:</strong> Nicht dopende Athleten werden benachteiligt.</li>
              <li><strong>Gesundheit:</strong> Schwerwiegende Langzeitschäden für die Athleten.</li>
              <li><strong>Vorbildfunktion:</strong> Jugendliche Sportler orientieren sich an Profis.</li>
              <li><strong>Geist des Sports:</strong> Fair Play, natürliche Exzellenz als Kernsport-Werte.</li>
            </ul>`,
          },
          {
            title: 'Dopingkontrollsystem (WADA/NADA)',
            content: `<strong>Im Wettkampf:</strong> Urin- und Blutkontrollen bei Siegerehrungen und Zufallsauswahl.<br>
                       <strong>Außerhalb:</strong> Whereabouts-System — Sportler müssen ihren Aufenthaltsort melden.<br>
                       <strong>Biologischer Pass:</strong> Längerfristige Überwachung von Blutparametern (erkennt EPO-Missbrauch).<br>
                       <strong>Sanktionen:</strong> 4 Jahre Sperre bei erstem Verstoß, lebenslang bei wiederholtem.`,
          },
        ])}
        ${renderMerkboxGrid([
          { icon: 'fas fa-flask',  title: 'Prävention', text: 'Aufklärung in Schulen und Vereinen; Clean Sport-Programme; Vorbildathleten.' },
          { icon: 'fas fa-scale-balanced', title: 'Anti-Doping-Gesetze', text: 'Deutschland: Anti-Doping-Gesetz (2015) — Besitz und Anwendung strafbar.' },
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