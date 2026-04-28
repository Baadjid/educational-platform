// pages/projekte/lernzettel/faecher/geschichte/themen/gegenwart/demokratie.js
// 5.5 — Demokratie & Autoritarismus im 21. Jahrhundert

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
const DEMOKRATIE_TABS = [
  { key: 'theorie',      label: '🏛️ Demokratietheorie' },
  { key: 'ungarn',       label: '🇭🇺 Illiberale Demokratie' },
  { key: 'populismus',   label: '📊 Rechtspopulismus' },
  { key: 'zukunft',      label: '🔮 Zukunft der Demokratie' },
];

export default class GeschichteDemokratie {
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
          <span>5.5 · Demokratie &amp; Autoritarismus</span>
        </nav>
        <h1 class="lz-sub-title">Demokratie &amp;<br><em>Autoritarismus.</em></h1>
        <p class="lz-sub-desc">
          Ist die liberale Demokratie auf dem Rückzug? Rechtspopulismus, illiberale
          Demokratien und die Frage, wie Demokratien von innen sterben.
        </p>
        ${renderTags(['5.5', '21. Jh.', 'Demokratie', 'Populismus', 'Rechtsstaat', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Überblick')}
        <h2 class="lz-h2 reveal">Demokratie unter Druck</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-chart-line', title: 'Demokratischer Rückgang', text: 'Freedom House: 2023 war das 18. Jahr in Folge mit globalem Rückgang demokratischer Freiheiten. Mehr Autokratien als Demokratien nach Bevölkerungszahl.' },
          { icon: 'fas fa-mask', title: 'Illiberale Demokratie', text: 'Begriff von Fareed Zakaria: Wahlen bleiben, aber Rechtsstaat, Minderheitenschutz und Gewaltenteilung werden ausgehöhlt. Ungarn unter Orbán als Beispiel.' },
          { icon: 'fas fa-person', title: 'Populismus', text: '„Das Volk" gegen „die Elite" — populistische Parteien mobilisieren Unzufriedenheit. Sowohl links (Podemos, Syriza) als auch rechts (AfD, RN, MAGA).' },
          { icon: 'fas fa-wifi', title: 'Digitale Bedrohungen', text: 'Desinformation, Social-Media-Algorithmen verstärken Polarisierung, Deepfakes, ausländische Einmischung (Russland, China). Neue Werkzeuge für alte Angriffe.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Demokratie &amp; ihre Herausforderer</h2>

        <nav class="wim-tabs" id="demo-tabs" aria-label="Demokratie & Autoritarismus">
          ${DEMOKRATIE_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelTheorie()}
        ${this._panelUngarn()}
        ${this._panelPopulismus()}
        ${this._panelZukunft()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Schlüsseldaten</h2>
        ${renderVTimeline([
          { year: '1989–91',    title: 'Dritte Demokratisierungswelle',     text: 'Osteuropa, Lateinamerika: ~30 neue Demokratien nach Ende Kalter Krieg.' },
          { year: '2000',       title: 'Putin wird russischer Präsident',    text: 'Schleichende Autokratisierung beginnt.' },
          { year: '2010',       title: 'Orbán in Ungarn',                    text: 'Beginn der illiberalen Transformation im EU-Mitglied.' },
          { year: '2013',       title: 'Snowden-Enthüllungen',              text: 'Massenüberwachung durch Demokratien selbst.' },
          { year: '2016',       title: 'Brexit + Trump',                    text: 'Rechtspopulismus in westlichen Demokratien.' },
          { year: '2016',       title: 'Freedom House: Trendwende',         text: 'Beginn des 18-jährigen Rückgangs demokratischer Freiheiten.' },
          { year: '2018',       title: 'Levitsky/Ziblatt: How Democracies Die', text: 'Analytischer Rahmen für demokratischen Rückgang.' },
          { year: '2021',       title: 'Sturm auf US-Kapitol (6. Jan.)',    text: 'Erstmals Angriff auf Zertifizierung einer US-Wahl.' },
          { year: '2023',       title: 'Polen: PiS abgewählt',              text: 'Demokratie schlägt zurück — Tusk wird Ministerpräsident.' },
          { year: '2024',       title: 'Superwahljahr',                     text: '>4 Mrd. Menschen bei nationalen Wahlen (Indien, USA, EU, UK...).' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/gegenwart/klima-migration`,          label: '5.4 · Klima & Migration' },
          next: { link: `${BASE}/themen/gedenktage/deutschland`,             label: '6.1 · Gedenktage Deutschland' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelTheorie() {
    return `
      <div class="wim-category" data-wim-cat="theorie">
        ${renderAccordion([
          { title: 'Was ist liberale Demokratie?', content: `Liberale Demokratie ist mehr als Mehrheitswahl:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li><strong>Volkssouveränität:</strong> Regierung durch das Volk</li><li><strong>Rechtsstaatlichkeit:</strong> Alle sind dem Gesetz unterworfen, auch die Regierung</li><li><strong>Grundrechte:</strong> Unveräußerliche Rechte auch gegen Mehrheitsentscheidungen</li><li><strong>Gewaltenteilung:</strong> Legislative, Exekutive, Judikative unabhängig</li><li><strong>Pressefreiheit:</strong> Unabhängige Medien als „vierte Gewalt"</li><li><strong>Minderheitenschutz:</strong> Mehrheit darf Minderheit nicht entrechten</li></ul>` },
          { title: 'Wie Demokratien sterben (Levitsky & Ziblatt)', content: `Das Buch <em>How Democracies Die</em> (2018) analysiert: Demokratien sterben heute meist nicht durch Militärputsch, sondern von innen.<br><br><strong>Methode:</strong> Gewählte Führer höhlen demokratische Institutionen schrittweise aus.<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Justizsystem übernehmen (Richter ernennen)</li><li>Medien schwächen oder kaufen</li><li>Zivilgesellschaft einschränken</li><li>Wahlrecht manipulieren</li><li>Politische Gegner als „Feinde des Volkes" dämonisieren</li></ul>` },
          { title: 'Populismus als Demokratiegefahr', content: `Populismus an sich ist nicht undemokratisch — er mobilisiert vernachlässigte Gruppen. Gefährlich wird er, wenn er Demokratie auf Mehrheitsherrschaft reduziert:<br><br><em>„Wir sind das Volk — alle anderen sind keine echten Bürger."</em><br><br>Diese exklusive Volksdefinition untergräbt Minderheitenschutz und Pluralismus.` },
        ])}
      </div>
    `;
  }

  _panelUngarn() {
    return `
      <div class="wim-category hidden" data-wim-cat="ungarn">
        ${renderInfobox({ type: 'warning', icon: 'fas fa-flag', title: 'Ungarn unter Viktor Orbán — Fallstudie', body: `Orbán gewann 2010 mit Zweidrittelmehrheit. Er nutzte sie für:` })}
        ${renderAccordion([
          { title: 'Systemische Veränderungen (2010–heute)', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li><strong>Verfassung:</strong> Neue Verfassung 2011 — erleichtert weitere Änderungen</li><li><strong>Justiz:</strong> Verfassungsgericht ausgehöhlt, loyale Richter ernannt</li><li><strong>Medien:</strong> 90 % der Medien unter Kontrolle Orbán-naher Besitzer</li><li><strong>Wahlrecht:</strong> Wahlkreise neu gezogen (Gerrymandering)</li><li><strong>Zivilgesellschaft:</strong> NGO-Gesetz erschwert ausländische Finanzierung (Angriff auf Soros-Stiftungen)</li><li><strong>EU:</strong> Veto-Strategie um Finanzmittel zu erhalten</li></ul>` },
          { title: 'EU-Reaktionen', content: `EU-Kommission: Artikel-7-Verfahren 2018 (Suspendierung von Stimmrechten) — bis heute nicht abgeschlossen.<br><br>EU-Gelder eingefroren wegen Rechtsstaatsverstößen. Aber: Ungarn bleibt EU-Mitglied und nutzt Vetorecht.<br><br>Dilemma: Wie reagiert die EU auf das Aushöhlen von Werten durch ein Mitglied?` },
        ])}
      </div>
    `;
  }

  _panelPopulismus() {
    return `
      <div class="wim-category hidden" data-wim-cat="populismus">
        ${renderTable({
          headers: ['Land', 'Partei', 'Merkmale', 'Wahlergebnis (Trend)'],
          rows: [
            ['Ungarn', 'Fidesz (Orbán)', 'Regierungspartei, illiberale Demokratie', '54 % (2022) — stärkste EU-Regierungspartei'],
            ['Italien', 'Fratelli d\'Italia (Meloni)', 'Postfaschistisches Erbe, nationalkonservativ', '26 % (2022), Regierungschefin'],
            ['Frankreich', 'Rassemblement National (Le Pen)', 'Nationalistisch, EU-kritisch', '33 % in 1. WG-Runde (2024)'],
            ['Deutschland', 'AfD', 'Anti-Migration, EU-kritisch, rechtsextreme Teile', '~20 % (Bundestagswahl 2025)'],
            ['USA', 'MAGA-Bewegung (Trump)', 'Anti-Establishment, Isolationismus, Wahlleugnung', '2024 Präsidentschaft gewonnen'],
            ['Polen', 'PiS (Kaczyński)', 'Nationalkonservativ, anti-EU, Justizumbau', '2023 abgewählt nach 8 Jahren'],
          ],
        })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-lightbulb', title: 'Ursachen des Rechtspopulismus', body: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>Globalisierungsverlierer: Deindustrialisierung, Lohndruck, Unsicherheit</li><li>Kulturelle Bedrohungswahrnehmung: Migration, Identitätsverlust</li><li>Vertrauensverlust in Eliten (Politiker, Medien, Experten)</li><li>Soziale Medien: Echokammern, Desinformation</li><li>Ungleichheit: Schere zwischen Reich und Arm wächst</li></ul>` })}
      </div>
    `;
  }

  _panelZukunft() {
    return `
      <div class="wim-category hidden" data-wim-cat="zukunft">
        ${renderCompare({
          titleA: 'Bedrohungen', titleB: 'Resilienz und Gegengewichte',
          listA: ['Populismus und Polarisierung', 'Desinformation und KI-Deepfakes', 'Ausländische Einmischung (Russland, China)', 'Wirtschaftliche Ungleichheit als Nährboden', 'Demokratiemüdigkeit, sinkende Wahlbeteiligung', 'Autoritäre Modelle (China) als Alternative'],
          listB: ['Zivilgesellschaft und unabhängige Medien', 'Starke Verfassungsgerichte', 'Internationale Institutionen (EU, ICC)', 'Politische Bildung als Schutzfaktor', 'Bewegungen junger Generationen (FFF, BLM)', 'Historische Erfahrung: Demokratien sind robust'],
        })}
        ${renderInfobox({ type: '', icon: 'fas fa-lightbulb', title: 'Für das Abitur — Kernthese', body: `Demokratie ist kein selbstverständlicher Dauerzustand, sondern ein <strong>fragiles Projekt</strong>, das aktiv gepflegt werden muss. Die Herausforderungen des 21. Jahrhunderts (Populismus, Desinformation, illiberale Tendenzen) erfordern <em>politische Bildung</em>, <em>demokratisches Engagement</em> und <em>institutionelle Robustheit</em>.<br><br>Geschichte zeigt: Demokratien können von innen sterben — aber sie können auch gerettet werden.` })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}