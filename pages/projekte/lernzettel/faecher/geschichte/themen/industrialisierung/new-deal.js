// pages/projekte/lernzettel/faecher/geschichte/themen/industrialisierung/new-deal.js
// 2.5 — New Deal (USA 1933–1939)

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
const NEWDEAL_TABS = [
  { key: 'newdeal1', label: '🏛️ New Deal I (1933)' },
  { key: 'newdeal2', label: '🏗️ New Deal II (1935)' },
  { key: 'bewertung', label: '⚖️ Bewertung' },
];

export default class GeschichteNewDealPage {
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
          <span>2.5 · New Deal</span>
        </nav>
        <h1 class="lz-sub-title">New Deal<br><em>USA 1933–1939.</em></h1>
        <p class="lz-sub-desc">
          Roosevelts Antwort auf die Weltwirtschaftskrise — staatlicher Aktivismus,
          Sozialversicherung und die Rettung der amerikanischen Demokratie.
        </p>
        ${renderTags(['2.5', '1929–1939', 'New Deal', 'Roosevelt', 'Weltwirtschaftskrise', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Vorgeschichte')}
        <h2 class="lz-h2 reveal">Die Weltwirtschaftskrise (1929–1933)</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-chart-line', title: 'Schwarzer Donnerstag (24.10.1929)', text: 'Börsenkrach an der New Yorker Wall Street. Aktienwerte verloren 89 % — Bankpleiten, Kreditstopp, Investitionskollaps.' },
          { icon: 'fas fa-person-walking-arrow-right', title: '25 % Arbeitslosigkeit', text: 'USA 1933: 13–15 Millionen Arbeitslose. Breadlines, Hoovervilles (Zeltlager Arbeitsloser). Präsident Hoover blieb passiv — Laissez-faire.' },
          { icon: 'fas fa-globe', title: 'Globaler Dominoeffekt', text: 'US-Banken zogen Auslandskredite zurück. Deutschland traf es besonders hart → Wirtschaftskrise + Weimarer Republik → Nazi-Aufstieg.' },
          { icon: 'fas fa-person', title: 'Politische Radikalisierung', text: 'Weltweit: Kommunismus und Faschismus gewannen. USA: Radikale Linke und Rechte wuchsen. Demokratie schien als Krisenmanager zu versagen.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">New Deal im Detail</h2>

        <nav class="wim-tabs" id="newdeal-tabs" aria-label="New Deal">
          ${NEWDEAL_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelNewDeal1()}
        ${this._panelNewDeal2()}
        ${this._panelBewertung()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Wichtige Daten</h2>
        ${renderVTimeline([
          { year: '24.10.1929', title: 'Schwarzer Donnerstag',                  text: 'Wall-Street-Krach — Beginn der Weltwirtschaftskrise.' },
          { year: '1930–32',    title: 'Hoover: Passivität',                    text: 'Präsident Hoover vertraut auf Selbstheilung des Marktes. Krise vertieft sich.' },
          { year: '04.03.1933', title: 'Roosevelt tritt Amt an',                text: '„The only thing we have to fear is fear itself."' },
          { year: '09.03.1933', title: 'Emergency Banking Act',                 text: 'Bank Holiday + Notfall-Bankgesetz — Vertrauen wiederhergestellt.' },
          { year: '1933',       title: 'CCC, AAA, NIRA',                        text: 'Erste Welle der New-Deal-Gesetze in 100 Tagen.' },
          { year: '1935',       title: 'Social Security Act',                   text: 'Geburtsstunde des US-Sozialstaats.' },
          { year: '1935',       title: 'Wagner Act',                            text: 'Gewerkschaftsrechte gesetzlich geschützt.' },
          { year: '1935–43',    title: 'WPA',                                   text: '8,5 Millionen Jobs in öffentlichen Projekten.' },
          { year: '1937',       title: 'Court-Packing-Kontroverse',             text: 'Roosevelt versucht Supreme Court zu erweitern — scheitert, aber Gericht schwenkt um.' },
          { year: '1941–45',    title: 'Rüstung und WW2',                       text: 'Erst Kriegswirtschaft bringt echte Vollbeschäftigung.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/industrialisierung/bismarck-sozialgesetze`, label: '2.4 · Bismarcksche Sozialgesetze' },
          next: { link: `${BASE}/themen/kalter-krieg/anfaenge`,                     label: '3.1 · Anfänge des Kalten Krieges' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelNewDeal1() {
    return `
      <div class="wim-category" data-wim-cat="newdeal1">
        ${renderInfobox({ type: 'blue', icon: 'fas fa-bolt', title: 'Die ersten 100 Tage', body: `Franklin D. Roosevelt trat am 4. März 1933 sein Amt an — mit riesiger Kongressmehrheit und Mandat für radikale Maßnahmen. In den ersten 100 Tagen verabschiedete der Kongress 15 große Gesetze. Roosevelts Versprechen: <em>„Action, and action now."</em>` })}
        ${renderAccordion([
          { title: 'Emergency Banking Act (März 1933)', content: `Roosevelt schloss alle Banken für 4 Tage (<em>Bank Holiday</em>), ließ sie prüfen und öffnete nur solvente wieder. Gleichzeitig erste <em>Fireside Chat</em> im Radio — Roosevelt erklärte dem Volk direkt, was er tat und warum. Vertrauen in das Bankensystem wurde wiederhergestellt.` },
          { title: 'Agricultural Adjustment Act (AAA)', content: `Staat zahlte Bauern dafür, <strong>Produktion zu senken</strong> — um Preise zu stabilisieren. Umstritten: Vernichtung von Lebensmitteln während Millionen hungerten. Ziel: Kaufkraft der Farmer heben → Nachfrage steigern.` },
          { title: 'National Industrial Recovery Act (NIRA)', content: `Industrie-Selbstregulierung durch <em>Codes of Fair Competition</em>: Mindestlöhne, Höchstarbeitszeiten, Recht auf Gewerkschaftsorganisation. 1935 vom Supreme Court für verfassungswidrig erklärt.` },
          { title: 'Civilian Conservation Corps (CCC)', content: `~2,5 Millionen junge Männer in staatlichen Arbeitslagern: Aufforstung, Nationalparks, Brücken, Straßen. Ziel: Jobs, Disziplin, Würde — kein Almosen, sondern Arbeit.` },
        ])}
      </div>
    `;
  }

  _panelNewDeal2() {
    return `
      <div class="wim-category hidden" data-wim-cat="newdeal2">
        <p class="lz-prose">Nach Rückschlägen (Supreme Court-Urteile) und Druck von Links (Huey Long) und Rechts startete Roosevelt 1935 einen zweiten, radikaleren Schub.</p>
        ${renderAccordion([
          { title: 'Social Security Act (1935)', content: `<strong>Kernstück des modernen US-Sozialstaats:</strong><ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Staatliche Altersrente (finanziert durch Lohnsteuer)</li><li>Arbeitslosenversicherung</li><li>Unterstützung für blinde und behinderte Menschen</li><li>Kinderhilfe</li></ul>USA hatten bis 1935 keine staatliche Sozialversicherung — 50 Jahre nach Bismarck.` },
          { title: 'Wagner Act / National Labor Relations Act (1935)', content: `Schutz des <strong>Streikrechts</strong> und Recht auf Gewerkschaftsorganisation. Arbeitgeber dürfen nicht mehr Gewerkschafter entlassen.<br><br>Folge: Gewerkschaftsmitgliedschaft explodiert von 3 Mio. (1933) auf 9 Mio. (1939).` },
          { title: 'Works Progress Administration (WPA)', content: `Größtes öffentliches Arbeitsprogramm der US-Geschichte: 8,5 Millionen Jobs in 8 Jahren. Schulen, Krankenhäuser, Flughäfen, Straßen. Auch: Künstler, Schriftsteller, Schauspieler bezahlt durch staatliche Aufträge (Federal Art, Theatre, Writers' Projects).` },
        ])}
      </div>
    `;
  }

  _panelBewertung() {
    return `
      <div class="wim-category hidden" data-wim-cat="bewertung">
        ${renderCompare({
          titleA: 'Erfolge', titleB: 'Grenzen & Kritik',
          listA: ['Demokratie in der Krise gerettet — keine Diktatur', 'Sozialstaat begründet (Social Security bis heute)', 'Bankensystem stabilisiert, Vertrauen wiederhergestellt', 'Millionen Jobs durch öffentliche Arbeitsprogramme', 'Gewerkschaftsrechte gestärkt', 'New Deal-Koalition: Demokraten als Partei der Arbeiter'],
          listB: ['Vollbeschäftigung erst durch Rüstungsausgaben WW2', 'Schwarze Amerikaner weitgehend ausgeschlossen (Southern Democrats)', 'Frauen benachteiligt in Sozialprogrammen', 'Supreme Court erklärte wichtige Gesetze für verfassungswidrig', 'Staatsschulden stiegen massiv', 'Wirtschaftliche Erholung war langsam und unvollständig'],
        })}
        ${renderInfobox({ type: '', icon: 'fas fa-lightbulb', title: 'Keynesianismus', body: `John Maynard Keynes (<em>General Theory</em>, 1936) lieferte die theoretische Grundlage für den New Deal im Nachhinein:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>In Depressionen soll der Staat mit <strong>Deficit Spending</strong> die Nachfrage ankurbeln</li><li>Staatliche Investitionen haben einen <em>Multiplikatoreffekt</em></li><li>Keynesianismus wurde nach WW2 zur dominanten Wirtschaftstheorie westlicher Wohlfahrtsstaaten</li></ul>` })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-scale-balanced', title: 'New Deal vs. Bismarcksche Sozialgesetze', body: `<strong>Gemeinsamkeit:</strong> Staatliche Sozialpolitik als Antwort auf kapitalistische Krisen.<br><br><strong>Unterschied:</strong> Bismarck handelte aus konservativem Machterhalt und anti-demokratischem Kalkül. Roosevelt handelte unter demokratischem Druck, im Rahmen einer parlamentarischen Demokratie — mit dem Ziel, die Demokratie zu retten, nicht zu unterhöhlen.` })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}