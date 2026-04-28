// pages/projekte/lernzettel/faecher/englisch/themen/gb/political-system.js
// Great Britain – Kapitel 14 / 2.4: Political System

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
const MONARCHY_TABS = [
  { key: 'powers',     label: '👑 Powers & Functions' },
  { key: 'for',        label: '✅ For Monarchy' },
  { key: 'against',    label: '❌ Against Monarchy' },
];

export default class PoliticalSystemGbPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-gb-political';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 14</span>
            <i class="fas fa-chevron-right"></i><span>Political System</span>
          </div>
          <h1 class="lz-sub-title">Political System<br><em>of the United Kingdom</em></h1>
          <p class="lz-sub-desc">Constitution · Monarchy · Parliament · Parties · Electoral System · 2019 Election</p>
          ${renderTags(['UK Politics', 'Westminster', 'FPTP', 'Monarchy', 'Parliament'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-file-alt', title: 'No Written Constitution', text: 'The UK is one of only three democracies without a codified constitution (alongside Israel and New Zealand). It is governed by conventions, statutes, and common law.' },
            { icon: 'fas fa-crown', title: 'Constitutional Monarchy', text: 'King Charles III "reigns but does not rule." Royal Prerogative powers are exercised on ministerial advice in practice.' },
            { icon: 'fas fa-building-columns', title: '650 MPs', text: 'Members of Parliament in the House of Commons, elected by First-Past-The-Post from individual constituencies.' },
            { icon: 'fas fa-vote-yea', title: 'FPTP System', text: 'Winner takes all in each constituency. Produces strong governments but severely disproportionate representation of smaller parties.' },
          ])}

          ${renderSubhead('14.1 The Uncodified Constitution')}
          <h2 class="lz-h2 reveal">No Single Document — Multiple Sources</h2>
          <p class="lz-prose reveal">
            Unlike the USA, Germany, or France, the UK has no single document called "The Constitution."
            Instead, the British constitution is <strong>uncodified</strong> — assembled from multiple
            sources accumulated over 800 years.
          </p>

          ${renderTable({
            headers: ['Source', 'Examples', 'Significance'],
            rows: [
              ['Statute Law', 'Magna Carta (1215), Bill of Rights (1689), Human Rights Act (1998)', 'Acts of Parliament — the most important source; can be changed by simple parliamentary majority'],
              ['Common Law', 'Judge-made law; precedent (stare decisis)', 'Builds up over centuries; provides rights not in any single document'],
              ['Conventions', 'PM must be from the Commons; Cabinet collective responsibility', 'Unwritten rules — not legally enforceable but politically binding'],
              ['EU Law (1973–2020)', 'European Communities Act (1972) — now largely repealed post-Brexit', 'Was supreme over UK law during membership; Brexit raised question of parliamentary sovereignty'],
              ['Authoritative Works', 'Bagehot\'s "The English Constitution" (1867)', 'Influential descriptions of how the system actually works'],
            ],
          })}

          ${renderCompare({
            titleA: '✅ Advantages of Uncodified Constitution',
            titleB: '❌ Disadvantages of Uncodified Constitution',
            listA: [
              'Flexible — adapts easily to changing circumstances',
              'Organic — evolved gradually over centuries, not imposed',
              'Stable — the system has survived for hundreds of years',
              'Practical — based on what works, not abstract ideals',
              'Parliamentary sovereignty — elected representatives supreme',
            ],
            listB: [
              'Unclear — hard to know what is constitutional',
              'No higher law — Parliament can change anything with a majority',
              'Executive dominance — a PM with majority can act unilaterally',
              'Conventions can be broken — no legal enforcement',
              'No guaranteed rights — Parliament can abolish any right',
            ],
          })}

          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-gavel',
            title: 'Key Constitutional Documents',
            body: '• <strong>Magna Carta (1215)</strong> — limited royal power; "no one is above the law."<br>• <strong>Bill of Rights (1689)</strong> — parliamentary sovereignty; free elections; limits on monarchy.<br>• <strong>Act of Settlement (1701)</strong> — Protestant succession; judicial independence.<br>• <strong>Parliament Acts (1911 & 1949)</strong> — removed the Lords\' veto over legislation.<br>• <strong>Human Rights Act (1998)</strong> — incorporated European Convention on Human Rights into UK law.'
          })}

          ${renderSubhead('14.2 The Monarchy')}
          <h2 class="lz-h2 reveal">King Charles III — The Constitutional Monarch</h2>
          <p class="lz-prose reveal">
            King Charles III became monarch on <strong>September 8, 2022</strong>, following the death of
            Queen Elizabeth II (reigned 70 years: 1952–2022). The monarch is head of state but
            <strong>"reigns without ruling"</strong> — all Royal Prerogative powers are exercised
            in practice on the advice of the Prime Minister.
          </p>

          <nav class="wim-tabs" id="monarchy-tabs" aria-label="Monarchy">
            ${MONARCHY_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelMonarchyPowers()}
          ${this._panelMonarchyFor()}
          ${this._panelMonarchyAgainst()}

          ${renderSubhead('14.3 Parliament: Commons and Lords')}
          <h2 class="lz-h2 reveal">Bicameral Legislature</h2>

          ${renderCompare({
            titleA: '🏛️ House of Commons (Elected)',
            titleB: '🎩 House of Lords (Appointed)',
            listA: [
              '650 Members of Parliament (MPs)',
              'Elected by First-Past-The-Post',
              'Maximum 5-year term',
              'Controls finance (money bills)',
              'Can pass any law; overrides the Lords',
              'Prime Minister sits here; accountable to Commons',
            ],
            listB: [
              '~800 members (Life Peers, Hereditary, Bishops)',
              'Unelected — appointed for life',
              'No power to block; can delay up to 1 year',
              'Revising chamber — improves legislation',
              '26 Church of England bishops sit here',
              'More independent — not seeking re-election',
            ],
          })}

          ${renderAccordion([
            {
              title: '⚙️ How Laws Are Made (Legislative Process)',
              content: `<p class="lz-prose">1. <strong>First Reading:</strong> Bill introduced — no debate.<br>
                        2. <strong>Second Reading:</strong> Main debate on principles.<br>
                        3. <strong>Committee Stage:</strong> Detailed line-by-line scrutiny.<br>
                        4. <strong>Report Stage:</strong> Further amendments considered.<br>
                        5. <strong>Third Reading:</strong> Final vote in the Commons.<br>
                        6. <strong>House of Lords:</strong> Same process in the upper chamber; can amend or delay.<br>
                        7. <strong>Royal Assent:</strong> Formal signature by the monarch — becomes law.</p>`
            },
            {
              title: '📋 Key Functions of Parliament',
              content: `<p class="lz-prose">• <strong>Legislation:</strong> Making and passing laws.<br>
                        • <strong>Scrutiny:</strong> Holding the government to account (PMQs, Select Committees, debates).<br>
                        • <strong>Finance:</strong> Approving taxation and government spending.<br>
                        • <strong>Representation:</strong> MPs represent their constituencies.<br>
                        • <strong>Legitimacy:</strong> Provides democratic mandate for government action.</p>`
            },
            {
              title: '🗣️ Prime Minister\'s Questions (PMQs)',
              content: `<p class="lz-prose">Every Wednesday at noon, the PM faces questions from MPs for 30 minutes. The Leader of the Opposition gets six questions. Intensely combative — Prime Ministers must be quick, confident, and well-briefed. A bad PMQ performance can damage a PM\'s authority significantly. Broadcast live — watched by political observers worldwide as a barometer of government confidence.</p>`
            },
          ])}

          ${renderSubhead('14.4 Political Parties')}
          <h2 class="lz-h2 reveal">The Main Players</h2>

          ${renderTable({
            headers: ['Party', 'Ideology', 'Core Beliefs', 'Base'],
            rows: [
              ['🔵 Conservative (Tories)', 'Centre-right to right', 'Free market, low taxes, strong defence, traditional values, law and order', 'Middle class, rural, older voters, small business, Southern England'],
              ['🔴 Labour', 'Centre-left to left', 'Social justice, welfare state, workers\' rights, NHS, redistribution', 'Urban, young, working class (traditionally), ethnic minorities, public sector'],
              ['🟡 Liberal Democrats', 'Centrist/Liberal', 'Individual liberty, pro-EU, constitutional reform, environment, civil liberties', 'Middle-class professionals, students, South-West, suburban'],
              ['🟡 SNP', 'Centre-left / nationalist', 'Scottish independence, social democracy, pro-EU', 'Scotland — dominant force since 2015'],
              ['🟢 Green Party', 'Left/Green', 'Environmental, anti-growth, radical democracy', 'Young, urban, educated'],
              ['🔴 Reform UK', 'Right-wing populist', 'Anti-immigration, anti-establishment, Eurosceptic', 'Former UKIP/Brexit Party voters; working class Leave voters'],
            ],
            highlight: [0, 1],
          })}

          ${renderSubhead('14.5 First-Past-The-Post Electoral System')}
          <h2 class="lz-h2 reveal">The British Way of Voting</h2>
          <p class="lz-prose reveal">
            Each of the 650 constituencies elects one MP. The candidate with the <strong>most votes wins</strong>
            — even if they get only 30% and three opponents split the rest. There is no requirement for a majority.
          </p>

          ${renderAccordion([
            {
              title: '📊 How Disproportionate Is It? (Real Examples)',
              content: `${renderTable({ headers: ['Election', 'Party', '% Votes', 'Seats', '% Seats'], rows: [
                ['2015', 'UKIP', '12.6%', '1', '0.2%'],
                ['2015', 'SNP', '4.7%', '56', '8.6%'],
                ['2019', 'Conservatives', '43.6%', '365', '56.2%'],
                ['2024', 'Labour', '33.7%', '412', '63.4%'],
                ['2024', 'Reform UK', '14.3%', '5', '0.8%'],
              ]})}`
            },
            {
              title: '✅ Advantages of FPTP',
              content: `<p class="lz-prose">• <strong>Simple:</strong> One vote, one MP — easy to understand.<br>
                        • <strong>Strong governments:</strong> Usually delivers a parliamentary majority for one party.<br>
                        • <strong>Clear accountability:</strong> Voters can throw out a government decisively.<br>
                        • <strong>Constituency link:</strong> Every voter has a named, local MP to contact.<br>
                        • <strong>Excludes extremes:</strong> Makes it very hard for fringe parties to win seats.</p>`
            },
            {
              title: '❌ Disadvantages of FPTP',
              content: `<p class="lz-prose">• <strong>Disproportional:</strong> Seat share rarely matches vote share.<br>
                        • <strong>Wasted votes:</strong> Votes for losing candidates count for nothing.<br>
                        • <strong>Safe seats:</strong> Most constituencies never change — MPs safe for life.<br>
                        • <strong>Tactical voting:</strong> People often vote against a party, not for one they like.<br>
                        • <strong>Two-party squeeze:</strong> Third parties struggle to convert votes into seats.<br>
                        • <strong>Winner's bonus:</strong> A party can win a large majority with well under 50% of votes.</p>`
            },
          ])}

          ${renderSubhead('14.6 The 2019 General Election')}
          <h2 class="lz-h2 reveal">"Get Brexit Done" — A Political Earthquake</h2>

          ${renderVTimeline([
            { year: 'Sep 2019', title: 'Parliament prorogued', text: 'Boris Johnson prorogued Parliament — Supreme Court ruled it illegal. Constitutional crisis.' },
            { year: 'Nov 2019', title: 'Election called', text: 'Johnson called snap election after MPs blocked his Brexit deal.' },
            { year: '12 Dec 2019', title: 'Results', text: 'Conservatives: 365 seats (+47); Labour: 202 seats (−60) — worst result since 1935; SNP: 48 seats (+13).' },
            { year: '31 Jan 2020', title: 'Brexit completed', text: '"Get Brexit Done" — delivered as promised. UK left the EU.' },
          ])}

          ${renderAccordion([
            {
              title: '🔴 The "Red Wall" — Why Labour Collapsed',
              content: `<p class="lz-prose">The "Red Wall" — traditional Labour seats in Northern England and the Midlands, held for generations — fell to the Conservatives for the first time. Why?<br><br>
                        • <strong>Brexit:</strong> These areas voted heavily Leave (60-70%). Labour's ambiguous "second referendum" position alienated them.<br>
                        • <strong>Corbyn factor:</strong> Jeremy Corbyn was deeply unpopular in these traditional, patriotic communities.<br>
                        • <strong>Identity shift:</strong> Cultural values (Brexit, national identity, traditional community) replaced class as the key voting factor.<br>
                        • <strong>Johnson's appeal:</strong> His populist, anti-establishment message resonated with voters who felt left behind.</p>`
            },
            {
              title: '📜 Historical Significance',
              content: `<p class="lz-prose">2019 represented a <strong>political realignment</strong> — the most significant shift in British voting patterns since the 1945 election. Traditional class-based voting (working class = Labour, middle class = Conservative) broke down. Brexit replaced class as the primary political dividing line. The question after 2019: was this a permanent realignment, or a one-off Brexit effect? The 2024 election, when Labour won a large majority, suggested the latter — but the political landscape remained fragmented and volatile.</p>`
            },
          ])}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Britain and Europe', link: `${BASE}/themen/gb/europe-brexit` },
            next: { label: 'United Kingdom & Devolution', link: `${BASE}/themen/gb/united-kingdom` },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelMonarchyPowers() {
    return `
      <div class="wim-category" data-wim-cat="powers">
        ${renderTable({ headers: ['Power', 'Theory', 'Reality'], rows: [
          ['Appoint PM', 'Monarch chooses PM', 'Always appoints leader of largest Commons party — no real choice'],
          ['Dissolve Parliament', 'Can dissolve Parliament', 'Fixed-term Parliament Act (2011) removed this; repealed 2022'],
          ['Royal Assent', 'Can refuse to sign laws', 'Last refused in 1707 — now purely ceremonial'],
          ['Declare war', 'Commander-in-chief', 'In practice: Prime Minister decides, using royal prerogative as cover'],
          ['Weekly audience', 'Informal meetings with PM', 'Churchill called it "the right to be consulted, to encourage, and to warn"'],
        ]})}
      </div>
    `;
  }

  _panelMonarchyFor() {
    return `
      <div class="wim-category hidden" data-wim-cat="for">
        ${renderAccordion([
          { title: 'National Symbol', content: '<p class="lz-prose">A non-partisan head of state above party politics provides stability and continuity. No matter which party governs, the monarch provides national identity and unity.</p>' },
          { title: 'Constitutional Safety', content: '<p class="lz-prose">If a government ever became authoritarian, the monarch provides a constitutional check — able to refuse to sign laws or appoint a PM. A theoretical but important safeguard.</p>' },
          { title: 'Soft Power and Tourism', content: '<p class="lz-prose">The monarchy generates enormous tourism revenue and is one of Britain\'s most powerful global brands. Royal visits, weddings, and coronations attract worldwide attention.</p>' },
          { title: 'Popularity', content: '<p class="lz-prose">Polls consistently show 60-70% support for keeping the monarchy. The Queen\'s funeral (2022) drew enormous public mourning — though Charles III is less popular.</p>' },
        ])}
      </div>
    `;
  }

  _panelMonarchyAgainst() {
    return `
      <div class="wim-category hidden" data-wim-cat="against">
        ${renderAccordion([
          { title: 'Undemocratic', content: '<p class="lz-prose">The head of state is determined by birth, not merit or election. Hereditary principle contradicts democratic ideals of equal opportunity.</p>' },
          { title: 'Class and Inequality', content: '<p class="lz-prose">The monarchy sits atop a class system of hereditary privilege. It normalises the idea that birth determines one\'s place in society.</p>' },
          { title: 'Cost', content: '<p class="lz-prose">The Sovereign Grant (2022): £86.3 million from taxpayers. Plus security, maintenance of palaces, etc. Republic.org estimates total cost over £345 million per year.</p>' },
          { title: 'Scandals', content: '<p class="lz-prose">Prince Andrew and Jeffrey Epstein; Harry and Meghan\'s departure and media interviews; Charles III\'s difficulties — scandals repeatedly damage the institution\'s credibility.</p>' },
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