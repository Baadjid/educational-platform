// pages/projekte/lernzettel/faecher/geschichte/themen/industrialisierung/bismarck-sozialgesetze.js
// 2.4 — Bismarcksche Sozialgesetze

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
const BISMARCK_TABS = [
  { key: 'motive',   label: '🎯 Motive Bismarcks' },
  { key: 'gesetze',  label: '📊 Die drei Gesetze' },
  { key: 'bewertung', label: '⚖️ Bewertung' },
];

export default class GeschichteBismarckSozialgesetze {
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
          <span>2.4 · Bismarcksche Sozialgesetze</span>
        </nav>
        <h1 class="lz-sub-title">Bismarcksche<br><em>Sozialgesetze.</em></h1>
        <p class="lz-sub-desc">
          Zuckerbrot und Peitsche — wie Bismarck mit staatlicher Sozialpolitik
          die Arbeiterbewegung neutralisieren und den Staat stärken wollte.
        </p>
        ${renderTags(['2.4', '1878–1891', 'Sozialgesetze', 'Bismarck', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Auf einen Blick')}
        <h2 class="lz-h2 reveal">Zuckerbrot und Peitsche</h2>
        <p class="lz-prose reveal">Bismarcks Sozialpolitik war ein kalkulierter Doppelgriff: Sozialdemokraten verbieten (<em>Peitsche</em>) und gleichzeitig ihre Anhänger durch staatliche Sozialversicherung an den Staat binden (<em>Zuckerbrot</em>).</p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-ban', title: 'Sozialistengesetz (1878)', text: 'Verbot aller sozialdemokratischen und sozialistischen Vereine, Treffen und Schriften. Ziel: SPD zerschlagen. Ergebnis: SPD wächst trotzdem — im Untergrund und als Partei.' },
          { icon: 'fas fa-hospital', title: 'Krankenversicherung (1883)', text: 'Erstes Gesetz. 2/3 Arbeitnehmer-, 1/3 Arbeitgeberbeitrag. Freie Ärztewahl, Krankengeld. Weltweit erste staatliche Krankenversicherung.' },
          { icon: 'fas fa-hard-hat', title: 'Unfallversicherung (1884)', text: 'Vollständig vom Arbeitgeber finanziert. Entschädigung bei Arbeitsunfällen und Berufskrankheiten. Absicherung ohne Eigenbeitrag für Arbeiter.' },
          { icon: 'fas fa-person-cane', title: 'Alters- und Invalidenversicherung (1889)', text: 'Gemeinsam finanziert (Arbeitnehmer + Arbeitgeber + Staat). Rente ab 70 Jahren (Lebenserwartung damals ~45 Jahre). Trotzdem: politisches Symbol.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Hintergründe &amp; Bewertung</h2>

        <nav class="wim-tabs" id="bismarck-tabs" aria-label="Bismarcksche Sozialgesetze">
          ${BISMARCK_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelMotive()}
        ${this._panelGesetze()}
        ${this._panelBewertung()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Die Sozialgesetzgebung im Überblick</h2>
        ${renderVTimeline([
          { year: '1871', title: 'Gründung des Kaiserreichs',          text: 'Nationalstaat als Rahmen — soziale Frage wird zum Staatsproblem.' },
          { year: '1878', title: 'Sozialistengesetz',                   text: 'Verbot SPD — Peitsche. Wächst im Untergrund trotzdem.' },
          { year: '1881', title: 'Kaiserliche Botschaft',               text: 'Wilhelm I. kündigt Sozialgesetzgebung an — Zuckerbrot.' },
          { year: '1883', title: 'Krankenversicherungsgesetz',          text: 'Erste staatliche KV weltweit.' },
          { year: '1884', title: 'Unfallversicherungsgesetz',           text: 'Arbeitgeberfinanzierte Berufsunfallversicherung.' },
          { year: '1889', title: 'Alters- und Invalidenversicherung',   text: 'Rente ab 70 — symbolisch, aber strukturell wichtig.' },
          { year: '1890', title: 'Bismarcks Entlassung durch Wilhelm II.', text: 'Sozialistengesetz läuft aus — SPD wächst offen.' },
          { year: '1891', title: 'Arbeiterschutzgesetze unter Caprivi', text: 'Max. 11-h-Tag für Frauen, Verbot Sonntagsarbeit, Kinderschutz.' },
          { year: '1912', title: 'SPD stärkste Reichstagsfraktion',     text: 'Trotz Sozialgesetzen: Arbeiter blieben sozialistisch.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/industrialisierung/soziale-frage`,       label: '2.3 · Soziale Frage' },
          next: { link: `${BASE}/themen/industrialisierung/new-deal`,             label: '2.5 · New Deal' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelMotive() {
    return `
      <div class="wim-category" data-wim-cat="motive">
        <p class="lz-prose">Bismarck war kein Sozialreformer aus Überzeugung — er handelte aus politischem Kalkül.</p>
        ${renderAccordion([
          { title: 'Politisches Kalkül: SPD schwächen', content: `Das Sozialistengesetz sollte die SPD organisatorisch zerschlagen. Die Sozialgesetze sollten die Arbeiter durch materielle Verbesserungen vom Sozialismus abbringen — <em>„Wer Pension hat, ist viel eher zufrieden und viel leichter zu regieren"</em> (Bismarck, sinngemäß).<br><br>Ziel: Arbeiter sollen sich dem preußisch-konservativen Obrigkeitsstaat verpflichtet fühlen, nicht der internationalen Sozialdemokratie.` },
          { title: 'Staatsautorität stärken', content: `Bismarck wollte den Staat als Schutzinstanz der Arbeiter profilieren — gegen Kirche (Kulturkampf), gegen Liberale (Laissez-faire) und gegen Sozialdemokraten (Revolution).<br><br><em>Staatsinterventionismus</em> als konservative Alternative zu liberalem Markt und sozialistischer Revolution.` },
          { title: 'Dynastisch-nationale Loyalität', content: `Arbeiter sollten sich als Staatsbürger des Kaiserreichs verstehen, nicht als internationale Klasse. Die Sozialversicherung schuf ein <strong>institutionelles Band</strong> zwischen Arbeiter und Staat.<br><br>Dies war Kalkül — aber es funktionierte teilweise: Viele Arbeiter waren 1914 bereit, für Kaiser und Vaterland in den Krieg zu ziehen.` },
        ])}
      </div>
    `;
  }

  _panelGesetze() {
    return `
      <div class="wim-category hidden" data-wim-cat="gesetze">
        ${renderTable({
          headers: ['Gesetz', 'Jahr', 'Finanzierung', 'Leistung', 'Besonderheit'],
          rows: [
            ['Krankenversicherung', '1883', 'Arbeitnehmer 2/3, Arbeitgeber 1/3', 'Krankengeldzahlung, Arztkosten, 13 Wochen', 'Erste staatl. KV weltweit'],
            ['Unfallversicherung',  '1884', 'Nur Arbeitgeber',                   'Entschädigung bei Berufsunfällen und -krankheiten', 'Berufsgenossenschaften verwalten'],
            ['Alters- und Invalidenversicherung', '1889', 'Arbeitnehmer + Arbeitgeber + Staatszuschuss', 'Rente ab 70 / bei Invalidität', 'Staatszuschuss als Novum'],
          ],
        })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-chart-line', title: 'Wirkung der Gesetze', body: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>1885 waren 4,3 Millionen Arbeiter krankenversichert</li><li>Das System wuchs rapide — 1913: 13 Millionen Krankenversicherte</li><li>Modellcharakter für andere Länder: England (1911), USA (New Deal, 1935)</li><li>Grundstruktur gilt noch heute: GKV, GUV, Rentenversicherung</li></ul>` })}
      </div>
    `;
  }

  _panelBewertung() {
    return `
      <div class="wim-category hidden" data-wim-cat="bewertung">
        ${renderCompare({
          titleA: 'Erfolge', titleB: 'Grenzen & Kritik',
          listA: ['Weltweit erste staatliche Sozialversicherung — Pionierleistung', 'Materielle Verbesserung für Millionen Arbeiter', 'Modell für modernen Sozialstaat', 'Strukturelle Absicherung gegen absolute Not', 'Institutionelle Bindung der Arbeiter an den Staat'],
          listB: ['SPD wuchs trotz Sozialistengesetz — von 311.000 (1881) auf 1,4 Mio. (1912)', 'Rente ab 70 bei Lebenserwartung 45 — Symbolcharakter', 'Keine politischen Rechte für Arbeiter', 'Kein Schutz vor Kündigung, keine Mindestlöhne', 'Autoritäre Motivation: Zuckerbrot, keine Demokratisierung'],
        })}
        ${renderInfobox({ type: '', icon: 'fas fa-lightbulb', title: 'Für das Abitur', body: `<strong>Kernthese:</strong> Bismarcks Sozialgesetze sind das erste staatliche Sozialversicherungssystem der Geschichte — entstanden nicht aus humanitärer Überzeugung, sondern aus Machterhaltungskalkül. Sie zeigen, dass sozialpolitischer Fortschritt aus konservativen Motiven entstehen kann.<br><br>Der Vergleich mit dem <strong>New Deal</strong> (demokratische Krisenpolitik) oder der <strong>Rerum Novarum</strong> (kirchliche Soziallehre) ist prüfungsrelevant.` })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}