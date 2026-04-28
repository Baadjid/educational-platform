// pages/projekte/lernzettel/faecher/geschichte/themen/gegenwart/terrorismus.js
// 5.1 — Terrorismus & internationale Sicherheit

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }       from '../../../../../../../components/Footer.js';
import { i18n }             from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }      from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderTable,
  renderTabs, renderAccordion, renderMerkboxGrid, renderCompare,
  renderVTimeline, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../geschichte.js';


// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const TERRORISMUS_TABS = [
  { key: '9_11',      label: '✈️ 11. September 2001' },
  { key: 'is',        label: '☪️ Islamischer Staat (IS)' },
  { key: 'sicherheit', label: '🔐 Sicherheit vs. Freiheit' },
];

export default class GeschichteTerrorismus {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['sub.css',        'pages/projekte/lernzettel/styles/sub.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });
    const el = document.createElement('div');
    el.className = 'page page-geschichte page-geschichte-sub';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() { return `
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-orb" aria-hidden="true"></div>
      <div class="lz-sub-hero-inner">
        <nav class="lz-sub-breadcrumb">
          <button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button>
          <i class="fas fa-chevron-right"></i>
          <button class="lz-bread-link" data-link="${BASE}">Geschichte</button>
          <i class="fas fa-chevron-right"></i>
          <span>5.1 · Terrorismus</span>
        </nav>
        <h1 class="lz-sub-title">Terrorismus &amp;<br><em>internationale Sicherheit.</em></h1>
        <p class="lz-sub-desc">
          Von 9/11 zum „Islamischen Staat" — wie transnationaler Terrorismus die Weltpolitik
          und die liberale Demokratie herausfordert.
        </p>
        ${renderTags(['5.1', '2001–heute', 'Terrorismus', '9/11', 'IS', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Grundbegriffe')}
        <h2 class="lz-h2 reveal">Was ist Terrorismus?</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-bomb', title: 'Definition', text: 'Politisch motivierte Gewalt gegen Zivilisten oder Symbole mit dem Ziel, Angst zu erzeugen und dadurch politischen Druck auszuüben. Terror als Kommunikationsstrategie.' },
          { icon: 'fas fa-earth-americas', title: 'Transnationaler Terrorismus', text: 'Seit 1990er: Netzwerke ohne festen Staat (al-Qaida, IS). Angriffe weltweit, Finanzierung global, Rekrutierung über Internet. Schwerst zu bekämpfen mit klassischen Mitteln.' },
          { icon: 'fas fa-scale-balanced', title: 'Legitimationsproblem', text: 'Terroristen verstehen sich meist als Widerstandskämpfer. Staatliche Gegengewalt riskiert, neue Terroristen zu erzeugen (counterproductive force). Politische Lösung oft wichtiger.' },
          { icon: 'fas fa-shield-halved', title: 'Sicherheit vs. Freiheit', text: 'Anti-Terror-Gesetze nach 9/11 weiteten Überwachung massiv aus (Patriot Act, NSA). Spannung: Wie viel Freiheit gibt man auf, um Sicherheit zu gewinnen?' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Terrorismus seit 9/11</h2>

        <nav class="wim-tabs" id="terror-tabs" aria-label="Terrorismus">
          ${TERRORISMUS_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panel911()}
        ${this._panelIS()}
        ${this._panelSicherheit()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Schlüsseldaten</h2>
        ${renderVTimeline([
          { year: '11.09.2001', title: '9/11',                           text: '~3.000 Tote — Zäsur. USA rufen „War on Terror" aus.' },
          { year: 'Okt. 2001',  title: 'Afghanistan-Invasion',           text: 'NATO-Bündnisfall — Taliban-Regime gestürzt.' },
          { year: 'März 2003',  title: 'Irak-Krieg',                    text: 'USA / UK ohne UN-Mandat — WMD-Behauptung falsch. Destabilisierung.' },
          { year: '2004',       title: 'Madrid-Attentat',                text: '191 Tote — al-Qaida in Europa.' },
          { year: '2005',       title: 'London-Attentat',                text: '52 Tote — Inlandsterroristen.' },
          { year: '2011',       title: 'Bin Laden getötet (Pakistan)',   text: 'SEAL-Operation. Al-Qaida geschwächt, aber nicht besiegt.' },
          { year: 'Jun. 2014',  title: 'IS-Kalifat ausgerufen',          text: 'Abu Bakr al-Baghdadi — größtes Terrorreich der Geschichte.' },
          { year: 'Nov. 2015',  title: 'Paris-Attentat',                 text: '130 Tote — koordinierte IS-Angriffe.' },
          { year: '2013',       title: 'Snowden-Enthüllungen',           text: 'NSA überwacht weltweit — Sicherheit vs. Freiheit auf neuer Ebene.' },
          { year: '2019',       title: 'IS-Territorium zerstört',        text: 'al-Baghdadi stirbt. Aber Netzwerk bleibt.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/erinnerungskultur/historikerstreit`,  label: '4.4 · Historikerstreit' },
          next: { link: `${BASE}/themen/gegenwart/eu-krisen`,                 label: '5.2 · EU-Krisen' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panel911() {
    return `
      <div class="wim-category" data-wim-cat="9_11">
        ${renderInfobox({ type: 'warning', icon: 'fas fa-plane-circle-xmark', title: '11. September 2001 — Zäsur der Weltpolitik', body: `19 Attentäter der al-Qaida entführten vier Flugzeuge. World Trade Center (New York), Pentagon (Virginia) zerstört; viertes Flugzeug abgestürzt. ~3.000 Tote. Teuerster Terroranschlag der Geschichte.` })}
        ${renderAccordion([
          { title: 'Al-Qaida und Osama bin Laden', content: `Al-Qaida (arab.: „die Basis") wurde ca. 1988 von Osama bin Laden in Afghanistan gegründet. Ideologie: Jihadistischer Salafismus — westliche Präsenz in muslimischen Ländern als Kreuzzug, Pflicht zum Widerstand.<br><br>Bin Laden: Millionärssohn aus Saudi-Arabien, finanzierte Mudschahedin im Afghanistan-Krieg (mit US-Unterstützung gegen die UdSSR) — wendete sich dann gegen den Westen.` },
          { title: 'US-Reaktion: War on Terror', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li><strong>Afghanistan-Invasion (Oktober 2001):</strong> Sturz der Taliban, die al-Qaida beherbergten. 20 Jahre Besatzung; Taliban kehrten 2021 zurück.</li><li><strong>Irak-Krieg (März 2003):</strong> USA behaupteten WMD-Bedrohung (falsch). Saddam Hussein gestürzt. Destabilisierung des Nahen Ostens.</li><li><strong>Patriot Act:</strong> Masshafte Ausweitung von Überwachungsbefugnissen.</li><li><strong>Guantánamo:</strong> Gefangenenlager ohne Rechtsstatus — internationale Kritik.</li></ul>` },
          { title: 'Folgen für Europa', content: `Madrid 2004 (191 Tote), London 2005 (52 Tote): al-Qaida in Europa.<br><br>Deutschland: NSU-Morde (2000–2011) rechtsextrem, aber Behörden fokussierten auf islamistischen Terror. Datenschutz vs. Sicherheit wurde in allen EU-Staaten neu verhandelt.` },
        ])}
      </div>
    `;
  }

  _panelIS() {
    return `
      <div class="wim-category hidden" data-wim-cat="is">
        <p class="lz-prose">Der <strong>Islamische Staat</strong> (auch ISIS / ISIL / Daesh) war 2013–2019 die gefährlichste terroristische Organisation weltweit — weil er ein echtes Staatsgebiet kontrollierte.</p>
        ${renderAccordion([
          { title: 'Entstehung und Aufstieg', content: `Wurzeln in al-Qaida im Irak (Abu Musab al-Zarqawi, nach 2003). Destabilisierung durch den Irak-Krieg schuf Vakuum.<br><br>2013: Abspaltung von al-Qaida, Expansion nach Syrien (Bürgerkrieg). Juni 2014: Ausrufung des <em>Kalifats</em> unter Abu Bakr al-Baghdadi. Kontrolliertes Gebiet: größer als Großbritannien, ~8 Millionen Menschen.` },
          { title: 'Methoden und Propaganda', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>Hochprofessionelle Social-Media-Propaganda: HD-Videos, Mehrsprachigkeit</li><li>Rekrutierung von ~40.000 ausländischen Kämpfern aus 110 Ländern</li><li>Anschläge in Europa: Paris Nov. 2015 (130 Tote), Brüssel 2016, Nizza 2016, Berlin 2016</li><li>Versklavung jesidischer Frauen, Vernichtung kultureller Stätten</li><li>Finanzierung durch Ölverkauf, Lösegelder, Steuern</li></ul>` },
          { title: 'Niedergang und Nachwirkungen', content: `2017–19: Territorium zerstört durch Koalitionstruppen (USA, Russland, kurdische Kräfte). Al-Baghdadi stirbt 2019 bei US-Razzia.<br><br>Aber: IS existiert als globales Netzwerk weiter. „Lone Wolf"-Anschläge in Europa. Zehntausende Kämpfer kehrten in Heimatländer zurück — neue Sicherheitsbedrohung.` },
        ])}
      </div>
    `;
  }

  _panelSicherheit() {
    return `
      <div class="wim-category hidden" data-wim-cat="sicherheit">
        ${renderCompare({
          titleA: 'Für mehr Sicherheitsmaßnahmen', titleB: 'Für Schutz bürgerlicher Freiheiten',
          listA: ['Terror ist existentielle Bedrohung — Prävention nötig', 'Massenüberwachung verhindert Anschläge', 'Einschränkungen temporär und verhältnismäßig', 'Staat hat Schutzpflicht gegenüber Bürgern', 'Feinde nutzen unsere Offenheit gegen uns'],
          listB: ['Überwachungsstaat untergräbt die Freiheit, die er schützt', 'NSA-Enthüllungen (Snowden 2013): Massenüberwachung ohne Kontrolle', 'Einmal eingeführte Befugnisse werden selten zurückgenommen', 'Terroristen wollen uns zur Unfreiheit zwingen — wir sollten nicht kooperieren', 'Verhältnismäßigkeit: Statistisch gefährlicher: Autounfall, Herzkrankheit'],
        })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-lightbulb', title: 'Für das Abitur', body: `<strong>Kernthese:</strong> Terrorismus ist kein neues Phänomen — aber der transnationale jihadistische Terrorismus seit 9/11 hat die internationale Sicherheitsarchitektur grundlegend verändert.<br><br>Entscheidende Frage: Wie bekämpft eine liberale Demokratie existentielle Bedrohungen, ohne ihre eigenen Grundwerte zu opfern? Die Spannung zwischen Sicherheit und Freiheit ist unauflöslich — sie muss demokratisch ausgehandelt werden.` })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}