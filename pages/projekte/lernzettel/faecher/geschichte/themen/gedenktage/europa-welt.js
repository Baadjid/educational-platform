// pages/projekte/lernzettel/faecher/geschichte/themen/gedenktage/europa-welt.js
// 6.2 — Gedenktage Europa & Welt

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
const EURAWELT_TABS = [
  { key: 'europatag',  label: '🇪🇺 Europatag 9. Mai' },
  { key: 'remembrance', label: '🌍 11. November & Remembrance' },
  { key: 'hiroshima',  label: '☮️ Hiroshima & Nagasaki' },
  { key: 'vergleich',  label: '⚖️ Vergleich' },
];

export default class GeschichteEuropaWelt {
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
          <span>6.2 · Gedenktage Europa &amp; Welt</span>
        </nav>
        <h1 class="lz-sub-title">Gedenktage<br><em>Europa &amp; Welt.</em></h1>
        <p class="lz-sub-desc">
          Wie Europa und die Welt gemeinsam erinnern — internationale Gedenktage,
          ihre Entstehung und ihre Funktion.
        </p>
        ${renderTags(['6.2', 'Gedenktage', 'Europa', 'UN', 'Erinnerungskultur', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Übersicht')}
        <h2 class="lz-h2 reveal">Internationale Gedenktage</h2>
        ${renderTable({
          headers: ['Datum', 'Tag', 'Anlass', 'Träger'],
          rows: [
            ['1. September',  'Antikriegstag',                              'Beginn Zweiter Weltkrieg (1939)', 'Deutschland, Polen'],
            ['9. Mai',        'Europatag',                                  'Schuman-Erklärung (1950) — Grundstein EU', 'Europäische Union'],
            ['11. November',  'Waffenstillstand / Remembrance Day',         'Ende Erster Weltkrieg (1918)', 'UK, Frankreich, Commonwealth'],
            ['27. Januar',    'Internationaler Holocaust-Gedenktag',        'Befreiung Auschwitz (1945)', 'UN (seit 2005)'],
            ['9. August',     'Gedenken Nagasaki / Hiroschima',             'Atombombenabwürfe 1945', 'Japan, Friedensbewegung'],
            ['10. Dezember',  'Tag der Menschenrechte',                     'Allg. Erklärung der Menschenrechte (1948)', 'UN'],
            ['25. November',  'Internationaler Tag gegen Gewalt an Frauen', 'Ermordung Mirabal-Schwestern (1960)', 'UN'],
            ['12. August',    'Internationaler Jugendtag',                  'Weltjugendkonferenz (1998)', 'UN'],
          ],
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Europäische &amp; globale Gedenkkultur</h2>

        <nav class="wim-tabs" id="eurawelt-tabs" aria-label="Gedenktage Europa & Welt">
          ${EURAWELT_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelEuropatag()}
        ${this._panelRemembrance()}
        ${this._panelHiroshima()}
        ${this._panelVergleich()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderInfobox({ type: 'success', icon: 'fas fa-check-circle', title: 'Abschluss: Geschichte — Lernzettel vollständig', body: `Du hast alle 25 Unterkapitel des Geschichte-Lernzettels abgeschlossen:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>1. Frühe Neuzeit: Renaissance, Entdeckungen, Reformation, Dreißigjähriger Krieg</li><li>2. Industrialisierung: England, Deutschland/USA, Soziale Frage, Bismarck, New Deal</li><li>3. Kalter Krieg: Anfänge, NATO/Korea, Kuba, Vietnam/Entspannung, Ende</li><li>4. Erinnerungskultur: Theorie, NS-Aufarbeitung, Denkmäler, Historikerstreit</li><li>5. Gegenwart: Terrorismus, EU-Krisen, Ukraine, Klima/Migration, Demokratie</li><li>6. Gedenktage: Deutschland, Europa &amp; Welt</li></ul>` })}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/gedenktage/deutschland`,   label: '6.1 · Gedenktage Deutschland' },
          next: null,
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelEuropatag() {
    return `
      <div class="wim-category" data-wim-cat="europatag">
        ${renderInfobox({ type: 'blue', icon: 'fas fa-star', title: '9. Mai — Europatag', body: `Am 9. Mai 1950 hielt der französische Außenminister Robert Schuman eine Erklärung, in der er die Zusammenlegung der deutsch-französischen Kohle- und Stahlproduktion unter gemeinsame Kontrolle vorschlug. Die <em>Schuman-Erklärung</em> gilt als Geburtsstunde der Europäischen Union.` })}
        ${renderAccordion([
          { title: 'Schumans Kalkül', content: `Frankreich und Deutschland hatten dreimal innerhalb von 70 Jahren Krieg geführt. Schuman und Jean Monnet erkannten: <em>Wirtschaftliche Verflechtung macht Krieg materiell unmöglich.</em><br><br>Wer gemeinsam Kohle und Stahl (Grundstoffe der Kriegswirtschaft) produziert, kann nicht mehr gegeneinander Krieg führen. Wirtschaftliche Integration als Friedensstrategie — das Fundament der EU.` },
          { title: 'Vom Europatag zum EU-Identitätsgedenken', content: `Der Europatag ist kein gesetzlicher Feiertag in den Mitgliedstaaten. Er dient als Symbol der europäischen Identität.<br><br>Herausforderung: Wie entsteht kollektives europäisches Gedächtnis? Gemeinsame Geschichte oder gemeinsame Werte?<br><br>Unterschiedliche nationale Kriegserinnerungen: Was in Deutschland als Befreiung gilt (8. Mai), ist in Polen die Fortführung der Besatzung durch die UdSSR.` },
        ])}
      </div>
    `;
  }

  _panelRemembrance() {
    return `
      <div class="wim-category hidden" data-wim-cat="remembrance">
        <p class="lz-prose">Der 11. November 1918 — 11:11 Uhr — trat der Waffenstillstand des Ersten Weltkriegs in Kraft.</p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-poppy', title: 'Remembrance Day (UK)', text: 'Rote Mohnblume (Poppy) als Symbol: Mohnblumen wuchsen auf den Schlachtfeldern Flanderns. Zwei-Minuten-Schweigen, Cenotaph-Gedenkfeier in London.' },
          { icon: 'fas fa-fire', title: 'Frankreich: 11. November', text: 'Gesetzlicher Feiertag. Gedenkfeier am Arc de Triomphe, am Grab des Unbekannten Soldaten. Staatspräsident legt Kranz nieder.' },
          { icon: 'fas fa-cross', title: 'Belgien: Ypern / Diksmuide', text: 'Flandern als Symbol des Massensterbens. Letzte Post täglich um 20 Uhr am Menentor in Ypern (seit 1928). Internationaler Pilgerort.' },
          { icon: 'fas fa-person-military-rifle', title: 'Unbekannter Soldat', text: 'Symbol in vielen Ländern: Ein nicht identifizierter Gefallener steht für alle Toten. Paris, London, Washington, Moskau, Wien — unterschiedliche Traditionen, gleiche Idee.' },
        ])}
      </div>
    `;
  }

  _panelHiroshima() {
    return `
      <div class="wim-category hidden" data-wim-cat="hiroshima">
        ${renderInfobox({ type: 'warning', icon: 'fas fa-radiation', title: '6. und 9. August 1945', body: `6. August: Atombombe auf Hiroshima (~70.000–80.000 Soforttote, insgesamt ~140.000 bis Ende 1945). 9. August: Atombombe auf Nagasaki (~40.000 Soforttote, insgesamt ~80.000). Erste und bisher einzige Verwendung von Atomwaffen im Krieg.` })}
        ${renderAccordion([
          { title: 'Friedensgedenken in Hiroshima', content: `Jährlich 6. August: Gedenkfeier im Friedenspark Hiroshima. Glocke der Frieden läutet. Internationale Würdenträger.<br><br><strong>Genbaku-Dom</strong>: Einziges stehengebliebenes Gebäude nach Bombenabwurf — heute UNESCO-Welterbe als mahnendes Symbol.<br><br>Botschaft: Keine Feindseligkeit gegenüber USA — sondern universelle Anti-Atomwaffen-Botschaft.` },
          { title: 'Politische Dimension', content: `Japan als einziges Land, das Atomangriff erlitt, hat besondere moralische Autorität. Aber: Japans eigene Kriegsverbrechen (Nanking, Zwangsarbeit) werden in Gedenkkultur kaum thematisiert.<br><br>Spannungsverhältnis: Opfergedächtnis ohne Täteranerkennung? Vergleich mit Deutschland: unterschiedliche Aufarbeitungskulturen.` },
        ])}
      </div>
    `;
  }

  _panelVergleich() {
    return `
      <div class="wim-category hidden" data-wim-cat="vergleich">
        <p class="lz-prose">Wie unterscheiden sich nationale und internationale Gedenktraditionen?</p>
        ${renderCompare({
          titleA: 'Nationale Gedenktage', titleB: 'Internationale Gedenktage (UN)',
          listA: ['Beziehen sich auf nationale Geschichte und Identität', 'Können exklusiv und abgrenzend sein', 'Oft mit nationalen Mythen verbunden', 'Können politisch instrumentalisiert werden', 'Aber: tiefe emotionale Verwurzelung'],
          listB: ['Universelle Werte (Menschenrechte, Frieden)', 'Inklusiv — alle Länder können teilnehmen', 'Weniger emotionale Bindung', 'Gefahr: leere Rituale ohne Substanz', 'Aber: normative Kraft durch Wiederholung'],
        })}
        ${renderInfobox({ type: '', icon: 'fas fa-lightbulb', title: 'Für das Abitur — Reflexionsfragen', body: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>Wie entsteht gemeinsames europäisches Gedächtnis bei verschiedenen nationalen Erfahrungen?</li><li>Kann Gedenken zur Versöhnung führen — oder nur zur Festigung von Opfer-/Täternarrativen?</li><li>Welche Ereignisse sollten neue Gedenktage erhalten? (Kolonialismus, Klimakatastrophen)</li><li>Wie gedenkt man, wenn keine Zeitzeugen mehr leben?</li><li>Wer entscheidet, wessen Geschichte erinnert wird?</li></ul>` })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}