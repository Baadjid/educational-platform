// pages/projekte/lernzettel/faecher/sport/themen/sportbiologie/herz-kreislauf.js
// Sportbiologie 1.1 — Herz-Kreislauf-System

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead,
  renderTags,
  renderInfobox,
  renderFormulaBox,
  renderTable,
  renderTabs,
  renderAccordion,
  renderMerkboxGrid,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const HERZKREISLAUF_TABS = [
  { key: 'anatomie',    label: '❤️ Anatomie' },
  { key: 'kenngroessen', label: '📊 Kenngrößen' },
  { key: 'blut',        label: '🩸 Blutgefäße & Blut' },
  { key: 'atmung',      label: '🌬️ Atmung' },
  { key: 'vo2max',      label: '📈 VO₂max' },
];

export default class SportHerzKreislaufPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';

    if (!document.querySelector('link[href*="sub.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(link);
    }

    el.style.setProperty('--kap-color',     COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent',     COLOR);
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
            <span>1.1 · Herz-Kreislauf-System</span>
          </nav>
          <h1 class="lz-sub-title">Herz-Kreislauf-<em>System.</em></h1>
          <p class="lz-sub-desc">
            Anatomie des Herzens, Kenngrößen, Blutgefäße, Blut,
            Atmung und die maximale Sauerstoffaufnahme VO₂max.
          </p>
          ${renderTags(['Sportbiologie', '1.1', 'VO₂max', 'Herzfrequenz', 'Atmung'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="herzkreislaufTabs" aria-label="Herz-Kreislauf-System">
            ${HERZKREISLAUF_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelAnatomie()}
          ${this._panelKenngroessen()}
          ${this._panelBlut()}
          ${this._panelAtmung()}
          ${this._panelVo2max()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: null,
            next: { link: `${BASE}/themen/sportbiologie/passiver-bewegungsapparat`,     label: 'Passiver Bewegungsapparat' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelAnatomie() {
    return `
      <div class="wim-category" data-wim-cat="anatomie">
        <h2 class="lz-h2">Aufbau und Funktion des Herzens</h2>
        <p class="lz-prose">
          Das Herz ist ein Hohlmuskel und besteht aus vier Kammern. 
          Der Körperkreislauf (Hochdrucksystem) wird vom linken Herzen,
          der Lungenkreislauf (Niederdrucksystem) vom rechten Herzen versorgt.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-heart',         title: 'Rechtes Atrium',    text: 'Sammelt sauerstoffarmes Blut aus dem Körperkreislauf (V. cava superior/inferior).' },
          { icon: 'fas fa-heart',         title: 'Rechter Ventrikel', text: 'Pumpt sauerstoffarmes Blut durch die Pulmonalarterie in den Lungenkreislauf.' },
          { icon: 'fas fa-heart-pulse',   title: 'Linkes Atrium',     text: 'Nimmt sauerstoffreiches Blut aus den Lungenvenen auf.' },
          { icon: 'fas fa-heart-pulse',   title: 'Linker Ventrikel',  text: 'Stärkste Kammer — pumpt Blut mit hohem Druck in den Körperkreislauf (Aorta).' },
        ])}
        ${renderInfobox({
          icon: 'fas fa-circle-nodes', title: 'Erregungsleitungssystem',
          body: `<strong>Sinusknoten</strong> (Schrittmacher, ~70/min) → 
                 <strong>AV-Knoten</strong> (Verzögerung) → 
                 <strong>His-Bündel</strong> → 
                 <strong>Tawara-Schenkel</strong> → 
                 <strong>Purkinje-Fasern</strong>. 
                 Das Herz kann autonom schlagen — unabhängig vom ZNS.`,
        })}
        ${renderTable({
          headers: ['Struktur', 'Funktion', 'Besonderheit'],
          rows: [
            ['Herzklappen (AV)', 'Verhindern Rückfluss Vorhof → Kammer', 'Mitralklappe (li.) · Trikuspidalklappe (re.)'],
            ['Semilunarklappen', 'Verhindern Rückfluss aus Aorta/Pulmonalis', 'Aortenklappe · Pulmonalklappe'],
            ['Perikard', 'Schutzhülle, Reibungsreduktion', 'Doppelwandiger Herzbeutel'],
            ['Herzmuskel (Myokard)', 'Kontraktiles Gewebe, unwillkürlich', 'Quergestreifte Muskulatur, ausdauerresistent'],
          ],
        })}
      </div>
    `;
  }

  _panelKenngroessen() {
    return `
      <div class="wim-category hidden" data-wim-cat="kenngroessen">
        <h2 class="lz-h2">Kenngrößen des Herzens</h2>
        ${renderFormulaBox({
          label: 'Herzzeitvolumen (HZV)',
          formula: 'HZV = HF × SV',
          desc: 'HF = Herzfrequenz [S/min] · SV = Schlagvolumen [ml/Schlag] · HZV [ml/min]',
        })}
        ${renderTable({
          headers: ['Kenngröße', 'Ruhewert (untrainiert)', 'Ruhewert (trainiert)', 'Maximalwert trainiert'],
          rows: [
            ['Herzfrequenz (HF)', '70–80 S/min', '40–55 S/min (Bradykardie)', '180–220 S/min'],
            ['Schlagvolumen (SV)', '70–80 ml', '90–120 ml', '150–200 ml'],
            ['HZV (Ruhe)', '5–6 l/min', '4–5 l/min', '—'],
            ['HZV (max.)', '~20 l/min', '30–40 l/min', '—'],
          ],
          highlight: [3],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Sportlerherz',
          body: `Durch Ausdauertraining entsteht das <strong>Sportlerherz</strong>: 
                 Exzentrische Hypertrophie (größere Kammern) + leichte konzentrische Hypertrophie 
                 (dickerer Muskel). Resultat: höheres SV → niedrigere Ruhe-HF bei gleichem HZV.`,
        })}
      </div>
    `;
  }

  _panelBlut() {
    return `
      <div class="wim-category hidden" data-wim-cat="blut">
        ${renderCompare({
          titleA: 'Arterien', titleB: 'Venen',
          listA: [
            'Führen Blut <strong>vom Herz weg</strong>',
            'Hoher Druck (Pulswelle spürbar)',
            'Dicke, muskulöse Wand (Tunica media)',
            'Ausnahme: Pulmonalarterie führt O₂-armes Blut',
          ],
          listB: [
            'Führen Blut <strong>zum Herz hin</strong>',
            'Niedriger Druck, Venenklappen',
            'Dünnere Wand, größeres Lumen',
            'Ausnahme: Pulmonalvene führt O₂-reiches Blut',
          ],
        })}
        ${renderInfobox({
          icon: 'fas fa-circle', title: 'Kapillaren',
          body: `Feinste Gefäße (Ø 5–10 µm) — Ort des <strong>Gasaustauschs</strong>. 
                 Einschichtige Wand ermöglicht Diffusion von O₂, CO₂, Nährstoffen und Stoffwechselprodukten. 
                 Kapillarisierung nimmt durch Ausdauertraining zu.`,
        })}
        <h3 class="lz-h3" style="margin-top:1.5rem;">Blutbestandteile</h3>
        ${renderTable({
          headers: ['Bestandteil', 'Anteil', 'Funktion'],
          rows: [
            ['Plasma', '55 %', 'Transport von Nährstoffen, Hormonen, Wärme; enthält Gerinnungsfaktoren'],
            ['Erythrozyten', '44 %', 'O₂-Transport via Hämoglobin; kernlos; ~120 Tage Lebensdauer'],
            ['Leukozyten', '< 1 %', 'Immunabwehr (Phagozytose, Antikörper)'],
            ['Thrombozyten', '< 1 %', 'Blutgerinnung bei Verletzungen'],
          ],
          highlight: [1],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-droplet', title: 'Sauerstofftransport',
          body: `<strong>Hämoglobin</strong> (Hb) im Erythrozyten bindet O₂. 
                 100 ml Blut transportieren ~20 ml O₂. 
                 Sportler haben oft erhöhtes Blutvolumen (+10–15 %) und mehr Hb — 
                 verbesserte Sauerstofftransportkapazität.`,
        })}
      </div>
    `;
  }

  _panelAtmung() {
    return `
      <div class="wim-category hidden" data-wim-cat="atmung">
        <h2 class="lz-h2">Atemtechnik und Ventilationsgrößen</h2>
        ${renderFormulaBox({
          label: 'Atemminutenvolumen (AMV)',
          formula: 'AMV = AF × AZV',
          desc: 'AF = Atemfrequenz [Atemzüge/min] · AZV = Atemzugvolumen [ml] · AMV [l/min]',
        })}
        ${renderTable({
          headers: ['Größe', 'Ruhewert', 'Belastungswert', 'Bedeutung'],
          rows: [
            ['Atemfrequenz (AF)', '12–15 /min', '40–60 /min', 'Anzahl Atemzüge pro Minute'],
            ['Atemzugvolumen (AZV)', '0,5 l', '2–3 l', 'Luftmenge pro Atemzug'],
            ['AMV', '6–8 l/min', '80–150 l/min', 'Gesamte Ventilation pro Minute'],
            ['Totalkapazität', '6 l', '—', 'Gesamtfassungsvermögen der Lunge'],
            ['VC (Vitalkapazität)', '4–5 l', '—', 'Max. ein- + ausatembare Luftmenge'],
            ['Totraumvolumen', '0,15 l', '—', 'Nicht am Gasaustausch beteiligtes Volumen'],
          ],
          highlight: [2],
        })}
        ${renderInfobox({
          icon: 'fas fa-wind', title: 'Gasaustausch',
          body: `<strong>Äußere Atmung:</strong> O₂ diffundiert aus Alveolen ins Blut, CO₂ umgekehrt (Lungenkapillaren).<br>
                 <strong>Innere Atmung:</strong> O₂ diffundiert aus Blut in die Muskelzellen, CO₂ ins Blut (Körperkapillaren).<br>
                 Treibende Kraft: Partialdruckgradient (Fick'sches Diffusionsgesetz).`,
        })}
      </div>
    `;
  }

  _panelVo2max() {
    return `
      <div class="wim-category hidden" data-wim-cat="vo2max">
        <h2 class="lz-h2">Maximale Sauerstoffaufnahme</h2>
        ${renderFormulaBox({
          label: 'VO₂max (Fick-Prinzip)',
          formula: 'VO₂max = HZVmax × (CaO₂ − CvO₂)',
          desc: 'CaO₂ = arterieller O₂-Gehalt · CvO₂ = venöser O₂-Gehalt · Differenz = a-v-O₂-Differenz',
        })}
        ${renderTable({
          headers: ['Gruppe', 'VO₂max (ml/min/kg)', 'Einordnung'],
          rows: [
            ['Untrainierte Männer', '35–45', 'Durchschnitt'],
            ['Untrainierte Frauen', '28–38', 'Durchschnitt'],
            ['Ausdauertrainierte', '55–70', 'Gut bis sehr gut'],
            ['Weltklasse Radfahrer / Läufer', '80–90+', 'Elite'],
          ],
          highlight: [3],
        })}
        ${renderAccordion([
          {
            title: 'Sauerstoffdefizit',
            content: `Zu Belastungsbeginn kann die aerobe Energiebereitstellung den O₂-Bedarf 
                      noch nicht vollständig decken. Die Differenz zwischen <em>benötigtem</em> und 
                      <em>tatsächlich aufgenommenem</em> O₂ heißt <strong>Sauerstoffdefizit</strong>. 
                      Diese „Lücke" wird durch anaerobe Prozesse (ATP-PC + Glykolyse) überbrückt.`,
          },
          {
            title: 'Sauerstoffschuld (EPOC)',
            content: `Nach Belastungsende bleibt O₂-Aufnahme erhöht — die sog. 
                      <strong>Sauerstoffschuld</strong> (Excess Post-exercise Oxygen Consumption, EPOC). 
                      Ursachen: Wiederauffüllung der Phosphatspeicher, Laktatabbau, Temperaturerhöhung, 
                      Normalisierung von Herzfrequenz und Hormonspiegel.`,
          },
          {
            title: 'Anpassungen durch Ausdauertraining',
            content: `<ul style="margin:0; padding-left:1.2rem; line-height:1.9;">
              <li>↑ Schlagvolumen (Herzvergrößerung)</li>
              <li>↓ Ruhepuls (Bradykardie des Sportlers)</li>
              <li>↑ Blutvolumen und Hämoglobinmenge</li>
              <li>↑ Kapillarisierung der Muskulatur</li>
              <li>↑ Mitochondrienanzahl und -größe</li>
              <li>↑ VO₂max um 10–30 % möglich</li>
            </ul>`,
          },
        ])}
      </div>
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document.querySelector('.page-sport-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => {
        const link = btn.dataset.navLink;
        if (link) window.location.hash = link;
      });
    });
    initWimTabs(document);
  }
}