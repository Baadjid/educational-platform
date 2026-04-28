// pages/projekte/lernzettel/faecher/geschichte/themen/industrialisierung/soziale-frage.js
// 2.3 — Die Soziale Frage

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
const SOZIALE_FRAGE_TABS = [
  { key: 'marxismus',    label: '📕 Marxismus' },
  { key: 'bewegung',     label: '⚒️ Arbeiterbewegung' },
  { key: 'kirche',       label: '✝️ Kirche & Katechismus' },
  { key: 'liberalismus', label: '🏛️ Liberalismus' },
];

export default class GeschichteSozialeFrage {
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
          <span>2.3 · Die Soziale Frage</span>
        </nav>
        <h1 class="lz-sub-title">Die Soziale<br><em>Frage.</em></h1>
        <p class="lz-sub-desc">
          Pauperismus, Proletariat und die Antworten der Zeit — Marxismus,
          Gewerkschaften, Kirche und Staat im Ringen um soziale Gerechtigkeit.
        </p>
        ${renderTags(['2.3', '~1830–1900', 'Soziale Frage', 'Marx', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Auf einen Blick')}
        <h2 class="lz-h2 reveal">Was war die Soziale Frage?</h2>
        <p class="lz-prose reveal">Mit der Industrialisierung entstand ein massenhafte <strong>Verelendung</strong> (<em>Pauperismus</em>) der Fabrikarbeiter — trotz wachsendem Wohlstand. Die „Soziale Frage" war die Frage: <em>Wie kann die moderne Gesellschaft mit sozialer Ungleichheit umgehen?</em></p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-person-digging', title: 'Pauperismus', text: 'Massenarmut der Fabrikarbeiter und landlosen Bauern. Niedrigste Löhne, keine Absicherung bei Krankheit, Unfall, Alter. Kinderarbeit als Normalzustand.' },
          { icon: 'fas fa-city', title: 'Urbanisierung & Elend', text: 'Slums ohne Kanalisation in Manchester, Berlin, New York. Cholera-Epidemien (1831, 1848) als Ausdruck sozialer Missstände. Engels dokumentierte Manchester 1845.' },
          { icon: 'fas fa-scale-unbalanced', title: 'Klassengesellschaft', text: 'Bourgeoisie (Kapitalbesitzer) vs. Proletariat (Lohnarbeiter). Keine politischen Rechte für Arbeiter — kein allgemeines Wahlrecht, keine Parteien, keine Gewerkschaften.' },
          { icon: 'fas fa-bullhorn', title: 'Politisierung', text: '1848: Kommunistisches Manifest (Marx/Engels). Gewerkschaftsbewegung, SPD (1875), Internationale — die Arbeiterbewegung organisiert sich als politische Kraft.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Antworten auf die Soziale Frage</h2>

        <nav class="wim-tabs" id="sozfrage-tabs" aria-label="Soziale Frage">
          ${SOZIALE_FRAGE_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelMarxismus()}
        ${this._panelBewegung()}
        ${this._panelKirche()}
        ${this._panelLiberalismus()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Wichtige Daten</h2>
        ${renderVTimeline([
          { year: '1845',  title: 'Engels: Lage der arbeitenden Klasse in England', text: 'Erste wissenschaftliche Bestandsaufnahme proletarischer Lebensbedingungen.' },
          { year: '1848',  title: 'Kommunistisches Manifest',                       text: 'Marx/Engels: Kampfschrift und Gesellschaftsanalyse in einem.' },
          { year: '1863',  title: 'ADAV gegründet (Lassalle)',                      text: 'Erste deutsche Arbeiterpartei fordert allgemeines Wahlrecht.' },
          { year: '1864',  title: '1. Internationale',                              text: 'Marx koordiniert internationale Arbeiterbewegung.' },
          { year: '1867',  title: 'Marx: Das Kapital I',                            text: 'Systematische Analyse des Kapitalismus.' },
          { year: '1871',  title: 'Pariser Kommune',                                text: 'Erste Arbeiterregierung (72 Tage) — brutal niedergeschlagen.' },
          { year: '1875',  title: 'SPD gegründet (Gotha)',                          text: 'Vereinigung der deutschen Arbeiterbewegung.' },
          { year: '1878',  title: 'Sozialistengesetz (Bismarck)',                   text: 'Verbote, aber SPD wächst im Untergrund weiter.' },
          { year: '1891',  title: 'Rerum Novarum (Leo XIII.)',                      text: 'Katholische Soziallehre als Antwort auf Klassenkampf.' },
          { year: '1899',  title: 'Bernstein: Revisionismus',                       text: 'Reform statt Revolution — Spaltung der Sozialdemokratie.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/industrialisierung/deutschland-usa`,         label: '2.2 · Deutschland & USA' },
          next: { link: `${BASE}/themen/industrialisierung/bismarck-sozialgesetze`,  label: '2.4 · Bismarcksche Sozialgesetze' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelMarxismus() {
    return `
      <div class="wim-category" data-wim-cat="marxismus">
        <p class="lz-prose">Karl Marx (1818–1883) und Friedrich Engels (1820–1895) entwickelten eine <strong>wissenschaftliche Gesellschaftstheorie</strong> und einen Aufruf zur Revolution.</p>
        ${renderAccordion([
          { title: 'Historischer Materialismus', content: `Gesellschaft wird durch <strong>Produktionsverhältnisse</strong> bestimmt — wer die Produktionsmittel besitzt, bestimmt das politische und kulturelle Überbau. Geschichte ist Abfolge von Klassenkämpfen: Sklavenhalter/Sklaven → Adel/Leibeigene → Bourgeoisie/Proletariat.` },
          { title: 'Mehrwerttheorie', content: `Arbeiter produzieren mehr Wert als ihr Lohn beträgt — der Überschuss (<em>Mehrwert</em>) wird vom Kapitalisten angeeignet. Das ist strukturelle Ausbeutung, keine Willkür.<br><br>Je mehr Kapital akkumuliert, desto ärmer das Proletariat (<em>Verelendungstheorie</em>).` },
          { title: 'Kommunistisches Manifest (1848)', content: `<em>„Ein Gespenst geht um in Europa — das Gespenst des Kommunismus."</em><br><br>Forderungen: Abschaffung des Privateigentums an Produktionsmitteln, progressive Einkommensteuer, kostenlose Bildung, Aufhebung der Kinderarbeit.<br><br><em>„Proletarier aller Länder, vereinigt euch!"</em> — Internationalismus als Gegenmittel zur nationalen Spaltung.` },
          { title: 'Das Kapital (1867)', content: `Marxens Hauptwerk: Systematische Analyse des kapitalistischen Wirtschaftssystems. Kernthese: Kapitalismus trägt den Keim seiner eigenen Zerstörung in sich — Konzentrierung des Kapitals → Verelendung → Revolution → Sozialismus → Kommunismus.` },
        ])}
      </div>
    `;
  }

  _panelBewegung() {
    return `
      <div class="wim-category hidden" data-wim-cat="bewegung">
        <p class="lz-prose">Die Arbeiterbewegung entstand nicht aus Theorie, sondern aus dem Alltag der Fabriken.</p>
        ${renderTable({
          headers: ['Organisation', 'Gegründet', 'Land', 'Bedeutung'],
          rows: [
            ['Trade Unions (Gewerkschaften)', 'ab 1820er', 'England', 'Erste legale Gewerkschaften — erkämpften kürzere Arbeitszeiten'],
            ['Chartistische Bewegung', '1838', 'England', 'Politische Rechte (Wahlrecht) für Arbeiter — erste Massenbewegung'],
            ['1. Internationale (IAA)', '1864', 'International', 'Marx koordiniert internationale Arbeiterbewegung; zerfiel 1876'],
            ['ADAV (Lassalle)', '1863', 'Deutschland', 'Erste deutsche Arbeiterpartei — Lassalles Staatssozialismus'],
            ['SPD (Eisenach + Gotha)', '1875', 'Deutschland', 'Vereinigung: marxistisch geprägte Massenpartei'],
            ['Sozialistengesetz (Bismarck)', '1878–90', 'Deutschland', 'Verbot sozialdemokratischer Organisationen — SPD wächst trotzdem'],
            ['2. Internationale', '1889', 'International', '1. Mai als Kampftag; reformerische und revolutionäre Flügel'],
          ],
        })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-person-raised-fist', title: 'Revisionismus-Debatte', body: `Eduard Bernstein (1899: <em>Die Voraussetzungen des Sozialismus</em>) argumentierte: Kapitalismus zerfällt <em>nicht</em> automatisch. Stattdessen: Reformismus — schrittweise Verbesserung durch parlamentarische Demokratie.<br><br>Gegenposition (Rosa Luxemburg, Karl Liebknecht): Nur Revolution führt zum Ziel. Diese Spaltung prägte die Arbeiterbewegung bis 1933.` })}
      </div>
    `;
  }

  _panelKirche() {
    return `
      <div class="wim-category hidden" data-wim-cat="kirche">
        <p class="lz-prose">Auch die Kirchen sahen sich zur Antwort auf die Soziale Frage gezwungen.</p>
        ${renderAccordion([
          { title: 'Katholische Soziallehre', content: `Papst Leo XIII.: <strong>Rerum Novarum (1891)</strong> — erstes päpstliches Sozialrundschreiben.<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Privateigentum ist legitim (gegen Marx)</li><li>Aber: Arbeitgeber hat Pflichten gegenüber Arbeitnehmer</li><li>Gerechter Lohn, Recht auf Vereinigung, Sonntagsruhe</li><li>Staat soll bei sozialen Konflikten regulierend eingreifen</li><li>Subsidiaritätsprinzip: Kleinere Einheiten vor großen</li></ul>` },
          { title: 'Innere Mission (protestantisch)', content: `Johann Hinrich Wichern (1848) rief zur <em>Inneren Mission</em> auf: Kirche soll aktiv soziale Not lindern — Arbeiterheime, Krankenhäuser, Schulen. Friedrich von Bodelschwingh: Bethel als Modelleinrichtung.<br><br>Ansatz: Karitativer Ausgleich statt struktureller Veränderung.` },
        ])}
      </div>
    `;
  }

  _panelLiberalismus() {
    return `
      <div class="wim-category hidden" data-wim-cat="liberalismus">
        <p class="lz-prose">Der wirtschaftliche Liberalismus (Laissez-faire) war die dominierende Ideologie der Industriebourgeoisie — und wurde von seinen Kritikern als Teil des Problems gesehen.</p>
        ${renderCompare({
          titleA: 'Klassischer Liberalismus', titleB: 'Sozialer Liberalismus (Sozialliberalismus)',
          listA: ['Freier Markt reguliert sich selbst (Adam Smith)', 'Staatseingriffe schaden dem Wachstum', 'Individuelle Freiheit > kollektive Sicherheit', 'Eigenverantwortung des Arbeiters', 'Armut als Ergebnis mangelnder Tugend'],
          listB: ['Markt produziert soziale Ungleichheit', 'Staat muss Mindeststandards garantieren', 'Freiheit setzt materielle Grundsicherung voraus', 'Soziale Rechte als Ergänzung politischer Rechte', 'John Stuart Mill: Utilitarismus → größtes Glück der meisten'],
        })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}