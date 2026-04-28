// pages/projekte/lernzettel/faecher/englisch/themen/gb/europe-brexit.js
// Great Britain – Kapitel 13 / 2.3: Britain and Europe

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderInfobox,
  renderTable,
  renderSubhead,
  renderTags,
  renderAccordion,
  renderVTimeline,
  renderMerkboxGrid,
  renderCompare,
  renderTabs,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const BREXIT_IMPACT_TABS = [
  { key: 'division',   label: '📊 Division Pattern' },
  { key: 'economic',   label: '💷 Economic Impact' },
  { key: 'political',  label: '🏛️ Political Consequences' },
];

export default class EuropeBrexitPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-gb-europe';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
        <div class="lz-sub-hero-inner">
          <div class="lz-sub-hero-orb" aria-hidden="true"></div>
          <div class="lz-sub-breadcrumb">
            <button data-link="${BASE}/themen/gb" class="lz-bread-link">Great Britain</button>
            <i class="fas fa-chevron-right"></i><span>Kapitel 13</span>
            <i class="fas fa-chevron-right"></i><span>Britain and Europe</span>
          </div>
          <h1 class="lz-sub-title">Britain and<br><em>Europe</em></h1>
          <p class="lz-sub-desc">Geography is Destiny · Foreign Policy · Brexit · British-German Relations</p>
          ${renderTags(['Brexit', 'EU', 'Foreign Policy', 'Euroscepticism', 'British-German Relations'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-water', title: 'The Channel', text: '34 km of water that shaped centuries of British foreign policy — psychological as much as physical separation from "the Continent."' },
            { icon: 'fas fa-percent', title: '51.9% Leave', text: 'The Brexit referendum result on June 23, 2016. 17.4 million voted Leave; 16.1 million voted Remain. 72% turnout.' },
            { icon: 'fas fa-calendar', title: '31 Jan 2020', text: 'The day the UK officially left the European Union — the first country ever to do so.' },
            { icon: 'fas fa-chart-line', title: '−4% GDP', text: 'Estimated long-term economic impact of Brexit on UK GDP, according to the Office for Budget Responsibility (2023).' },
          ])}

          ${renderSubhead('13.1 Geography is Destiny')}
          <h2 class="lz-h2 reveal">An Island Nation's Mentality</h2>
          <p class="lz-prose reveal">
            Britain's status as an island has profoundly shaped its relationship with continental Europe.
            The English Channel created not just physical but <strong>psychological distance</strong> — a sense
            of separateness that persisted even after Britain joined the EEC in 1973.
          </p>

          ${renderAccordion([
            {
              title: '🌊 Historical Patterns of British Foreign Policy',
              content: `<p class="lz-prose">• <strong>Balance of Power:</strong> Britain's core strategy — prevent any single power dominating Europe (Napoleon, Kaiser Wilhelm, Hitler). Intervene to restore balance, then withdraw.<br>
                        • <strong>Splendid Isolation (19th century):</strong> Policy of non-alignment; focus on empire and trade rather than European entanglements.<br>
                        • <strong>Maritime focus:</strong> The Royal Navy, not a land army, was Britain's primary instrument. The seas — not the Rhine — were Britain's frontier.<br>
                        • <strong>Empire over Europe:</strong> For 300 years, Britain's attention was the world, not the continent next door.</p>`
            },
            {
              title: '🎭 Cultural Exceptionalism',
              content: `<p class="lz-prose">• A sense of being fundamentally different from, even superior to, continental Europeans.<br>
                        • <strong>Common Law</strong> vs. civil law tradition (influenced by Roman/Napoleonic law).<br>
                        • <strong>Protestant heritage</strong> vs. Catholic majority on the continent.<br>
                        • The "Continent" as somewhere slightly chaotic and unreliable — stereotypes with deep roots.<br>
                        • The "Special Relationship" with the United States (shared language, culture, WWII alliance) was always felt more strongly than European solidarity.</p>`
            },
          ])}

          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-quote-left',
            title: '"Britain is in Europe but not of Europe"',
            body: 'This phrase, often attributed to Churchill, captures Britain\'s fundamental ambiguity. Churchill advocated a "United States of Europe" — but for others, not for Britain. He envisioned Britain as a sponsor and friend of European unity, not a member.'
          })}

          ${renderSubhead('13.2 Foreign Policy until 1949')}
          <h2 class="lz-h2 reveal">From Isolation to Alliance</h2>

          ${renderVTimeline([
            { year: '19th century', title: 'Splendid Isolation', text: 'Avoided permanent alliances; focused on empire and naval power; intervened in Europe only to restore balance.' },
            { year: '1904/07', title: 'Entente Cordiale & Triple Entente', text: 'Alliance with France and Russia against the growing German threat — end of isolation.' },
            { year: '1914–18', title: 'World War One', text: 'Entered to honour treaty obligations to Belgium. 900,000 British dead. Fought to prevent German domination of Europe.' },
            { year: '1919', title: 'Treaty of Versailles', text: 'Britain helped write the harsh peace terms. Some historians argue this made WWII inevitable.' },
            { year: '1930s', title: 'Appeasement', text: 'Tried to avoid another catastrophic war. Munich Agreement (1938) allowed Hitler to take Czechoslovakia — seen as cowardice or pragmatism.' },
            { year: '1939–45', title: 'World War Two', text: '"Britain\'s finest hour." Churchill rejected appeasement. Battle of Britain. D-Day. Cost: 450,000 British dead; national debt tripled.' },
            { year: '1948', title: 'Marshall Plan', text: 'US economic aid for European reconstruction — cemented US-European alliance.' },
            { year: '1949', title: 'NATO Founded', text: 'Permanent US military commitment to European security. End of British isolationism — permanently.' },
          ])}

          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-exclamation-triangle',
            title: 'The Failure of Appeasement — Lessons Learned',
            body: 'The Munich Agreement (1938) handed Hitler the Sudetenland (part of Czechoslovakia) in exchange for a promise of "peace in our time." Within six months, Hitler occupied all of Czechoslovakia. Within a year, WWII had begun. <strong>The lesson:</strong> Never appease aggressors. This shaped post-war British foreign policy — and explains why Britain has been quicker than others to support military intervention against authoritarian regimes.'
          })}

          ${renderSubhead('13.3 Brexit')}
          <h2 class="lz-h2 reveal">The Great Divorce (2016–2020)</h2>
          <p class="lz-prose reveal">
            The United Kingdom joined the European Economic Community in 1973. After decades of growing
            Euroscepticism — mostly on the Conservative right — a referendum was held on June 23, 2016.
            The result shocked Britain, Europe, and the world.
          </p>

          ${renderVTimeline([
            { year: '1973', title: 'UK joins EEC', text: 'PM Edward Heath took Britain in after two French vetoes (de Gaulle 1963, 1967).' },
            { year: '1975', title: 'First Referendum', text: '67.2% voted to Remain in the EEC. Result accepted by all parties.' },
            { year: '1992', title: 'Maastricht Treaty', text: 'Created the European Union; Black Wednesday — UK forced out of the Exchange Rate Mechanism; Euroscepticism surges.' },
            { year: '2004', title: 'EU Enlargement', text: 'Eastern European nations join; UK (unlike France/Germany) immediately grants full free movement — significant immigration.' },
            { year: '2013', title: 'Cameron\'s Bloomberg Speech', text: 'Promised an "in/out" referendum if Conservatives won 2015 election.' },
            { year: '2015', title: 'Conservative majority', text: 'Cameron\'s promise activated — referendum set for June 2016.' },
            { year: '23 Jun 2016', title: 'Brexit Referendum', text: 'Leave: 51.9% (17.4m). Remain: 48.1% (16.1m). 72.2% turnout. Cameron resigns.' },
            { year: '2016–19', title: 'Political chaos', text: 'Three years of failed negotiations; Parliament rejected May\'s deal three times; two Prime Ministers.' },
            { year: '31 Jan 2020', title: 'UK leaves EU', text: '"Brexit Day." Trade deal signed December 24, 2020 — hours before the transition period ended.' },
          ])}

          ${renderCompare({
            titleA: '📢 Leave Campaign Arguments',
            titleB: '🛡️ Remain Campaign Arguments',
            listA: [
              '"Take Back Control" — sovereignty from Brussels',
              'Control immigration, reduce numbers',
              '"£350 million/week to the NHS" (false — widely criticised)',
              'Make our own trade deals globally',
              'EU is undemocratic and unaccountable',
              'Restore British parliamentary sovereignty',
            ],
            listB: [
              'Economic damage — trade barriers, jobs, investment',
              'Frictionless access to the world\'s largest single market',
              'Security cooperation on terrorism and crime',
              'EU maintained peace in Europe since 1945',
              'Workers\' rights, environmental protections from EU',
              'Better to reform from the inside',
            ],
          })}

          <nav class="wim-tabs" id="brexit-impact-tabs" aria-label="Brexit impact">
            ${BREXIT_IMPACT_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelBrexitDivision()}
          ${this._panelBrexitEconomic()}
          ${this._panelBrexitPolitical()}

          ${renderSubhead('13.4 British-German Relations')}
          <h2 class="lz-h2 reveal">From Enemies to Partners</h2>

          ${renderTable({
            headers: ['Period', 'Character', 'Key Events'],
            rows: [
              ['19th century', 'Royal connections', 'Queen Victoria married Prince Albert of Saxe-Coburg and Gotha; intertwined royal families'],
              ['1914–18', 'Bitter enemies', '900,000 British dead; propaganda dehumanised Germans as "Huns"'],
              ['1939–45', 'Total war', 'The Blitz destroyed British cities; Churchill called Germany the gravest threat to civilisation'],
              ['1945–49', 'Occupation and rebuilding', 'Britain occupied NW Germany; helped rebuild — a remarkable change from WWI\'s punitive peace'],
              ['Cold War', 'NATO allies', 'Both faced the Soviet threat; reconciliation; West Germany joined NATO 1955'],
              ['EU membership', 'Partners', 'Both in EEC/EU; Germany became Britain\'s most important European partner'],
              ['Post-Brexit', 'Strained but cooperative', 'Germany regrets UK departure; still major trading partners; defence cooperation continues'],
            ],
          })}

          ${renderCompare({
            titleA: '🇬🇧 British Views of Germans',
            titleB: '🇩🇪 German Views of the British',
            listA: [
              'Efficient, organised, punctual, hard-working',
              'Strong economy, impressive engineering',
              'Older generation: wartime memory still present',
              'Younger generation: largely positive',
              'Brexit seen as mutual loss',
              '"Humourless" — unfair but persistent stereotype',
            ],
            listB: [
              'Humorous, eccentric, culturally rich',
              'Polite but emotionally reserved',
              'Brexit seen as self-defeating mistake',
              'Respect for parliamentary democracy',
              'British culture highly popular (music, TV, literature)',
              '"Pragmatic but unpredictable" — post-Brexit assessment',
            ],
          })}

          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-handshake',
            title: 'A Remarkable Reconciliation',
            body: 'The transformation from enemies in two World Wars to close partners within 30 years is one of the most remarkable stories of 20th century diplomacy. It was built on the Marshall Plan, NATO, and ultimately the European project. Brexit has not reversed this — but it has complicated it.'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Post-colonial Developments', link: `${BASE}/themen/gb/post-colonial` },
            next: { label: 'Political System', link: `${BASE}/themen/gb/political-system` },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelBrexitDivision() {
    return `
      <div class="wim-category" data-wim-cat="division">
        ${renderTable({ headers: ['Dimension', 'Leave', 'Remain'], rows: [
          ['Geography', 'England & Wales (outside London)', 'Scotland (62%), Northern Ireland (55.8%), London (60%)'],
          ['Age', '65+ voted 65% Leave', '18–24 voted 73% Remain'],
          ['Education', 'No degree: 70% Leave', 'Degree-level: 68% Remain'],
          ['Urban/Rural', 'Rural areas strongly Leave', 'Cities, university towns strongly Remain'],
          ['Income', 'Lower income areas: Leave', 'Higher income areas: Remain (mixed)'],
        ]})}
        <p class="lz-prose" style="margin-top:1rem;">Brexit revealed deep fault lines in British society — not left vs. right, but <strong>cosmopolitan vs. communitarian</strong>, <strong>globally connected vs. left behind</strong>.</p>
      </div>
    `;
  }

  _panelBrexitEconomic() {
    return `
      <div class="wim-category hidden" data-wim-cat="economic">
        ${renderAccordion([
          { title: 'Trade Barriers', content: '<p class="lz-prose">The UK left the Single Market and Customs Union. Businesses now face customs checks, paperwork, and delays. UK exports to the EU down ~15% relative to trend. Food, fish, and automotive sectors most affected.</p>' },
          { title: 'Investment', content: '<p class="lz-prose">Foreign direct investment into the UK fell significantly post-Brexit. Financial services firms moved operations to Dublin, Amsterdam, Frankfurt, and Paris. Estimated £1.3 trillion in assets relocated from London.</p>' },
          { title: 'Growth', content: '<p class="lz-prose">The Office for Budget Responsibility estimates Brexit reduced UK GDP by about 4% in the long run compared to remaining in the EU. In 2023, the UK was the only G7 economy not to have recovered to its pre-pandemic level.</p>' },
          { title: 'Labour Shortages', content: '<p class="lz-prose">End of EU free movement created severe shortages: NHS (nurses, doctors), hospitality, agriculture, logistics. The government introduced a points-based immigration system — but many sectors argue it is too restrictive.</p>' },
        ])}
      </div>
    `;
  }

  _panelBrexitPolitical() {
    return `
      <div class="wim-category hidden" data-wim-cat="political">
        ${renderAccordion([
          { title: 'UK Unity', content: '<p class="lz-prose">Scotland and Northern Ireland voted Remain. Brexit reinvigorated Scottish independence demands. The Northern Ireland Protocol created a de facto trade border in the Irish Sea — deeply controversial with unionists.</p>' },
          { title: 'Northern Ireland Protocol', content: '<p class="lz-prose">To avoid a hard border between Northern Ireland (UK) and the Republic of Ireland (EU), Northern Ireland follows EU Single Market rules. This means customs checks between Great Britain and Northern Ireland. Unionists feel NI is being separated from the rest of the UK. Renegotiated as the Windsor Framework (2023).</p>' },
          { title: 'Party Realignment', content: '<p class="lz-prose">Brexit replaced class as the main political dividing line. Labour lost many working-class Leave voters. The Conservatives absorbed the UKIP/Brexit Party vote — at the cost of their educated, professional base. By 2024, Labour won back many seats under Keir Starmer.</p>' },
        ])}
      </div>
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initWimTabs(document);
  }
}