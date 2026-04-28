// pages/projekte/lernzettel/faecher/englisch/themen/gb/united-kingdom.js
// Great Britain – Kapitel 15 / 2.5: United Kingdom & Devolution

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
const DEVOLUTION_TABS = [
  { key: 'scotland', label: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland' },
  { key: 'wales',    label: '🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales' },
  { key: 'ni',       label: '🏴󠁧󠁢󠁮󠁩󠁲󠁿 Northern Ireland' },
  { key: 'england',  label: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England' },
];

const TROUBLES_TABS = [
  { key: 'causes', label: '💥 Causes' },
  { key: 'events', label: '🔫 Key Events' },
  { key: 'gfa',    label: '🕊️ Good Friday Agreement' },
];

export default class UnitedKingdomPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-gb-uk';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 15</span>
            <i class="fas fa-chevron-right"></i><span>United Kingdom</span>
          </div>
          <h1 class="lz-sub-title">United Kingdom<br><em>Devolution & Conflict</em></h1>
          <p class="lz-sub-desc">Devolution · Scottish Independence · Anglo-Irish Relations · The Troubles (1968–1998)</p>
          ${renderTags(['Devolution', 'Scotland', 'Northern Ireland', 'The Troubles', 'Good Friday Agreement'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-map-location-dot', title: 'Four Nations', text: 'England, Scotland, Wales, Northern Ireland — one state, four nations. Each has its own identity, history, and — since 1999 — its own devolved government.' },
            { icon: 'fas fa-percent', title: '55.3% No', text: 'Result of the 2014 Scottish independence referendum. Turnout: 84.6% — one of the highest in any democratic vote.' },
            { icon: 'fas fa-skull-crossbones', title: '3,500+ Killed', text: 'Deaths in the Northern Ireland Troubles (1968–1998). 30 years of conflict between republicans and unionists.' },
            { icon: 'fas fa-dove', title: 'Good Friday Agreement', text: 'The 1998 peace deal that ended the Troubles. Approved by 71% in NI and 94% in the Republic of Ireland.' },
          ])}

          ${renderSubhead('15.1 Devolution')}
          <h2 class="lz-h2 reveal">Sharing Power with the Nations</h2>
          <p class="lz-prose reveal">
            <strong>Devolution</strong> is the transfer of legislative powers from the UK Parliament at Westminster
            to regional bodies in Scotland, Wales, and Northern Ireland. It was introduced by Tony Blair's Labour
            government in 1997–99 as a constitutional reform and response to growing nationalist sentiment.
          </p>

          ${renderVTimeline([
            { year: '1979', title: 'Failed Referendums', text: 'Scotland and Wales voted on devolution — but the Yes vote in Scotland failed to reach the required 40% of the electorate threshold. Bitterly contested.' },
            { year: '1997', title: 'Referendums Won', text: 'Scotland: 74.3% Yes. Wales: 50.3% Yes (very narrow). New Labour\'s constitutional programme launched.' },
            { year: '1998', title: 'Scotland Act & Government of Wales Act', text: 'Created the Scottish Parliament and Welsh Assembly. Northern Ireland Assembly created by Good Friday Agreement.' },
            { year: '1999', title: 'Devolved Institutions Open', text: 'Scottish Parliament opens in Edinburgh; Welsh Assembly in Cardiff; NI Assembly in Stormont.' },
            { year: '2003–16', title: 'Powers Expanded', text: 'Further devolution Acts gave Scotland, Wales greater powers — including some taxation.' },
            { year: '2016', title: 'Brexit Complication', text: 'Scotland (62%) and NI (55.8%) voted Remain. Devolved legislatures had no veto on Brexit. Tensions escalated.' },
          ])}

          <nav class="wim-tabs" id="devolution-tabs" aria-label="Devolution">
            ${DEVOLUTION_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelDevolutionScotland()}
          ${this._panelDevolutionWales()}
          ${this._panelDevolutionNI()}
          ${this._panelDevolutionEngland()}

          ${renderSubhead('15.2 Scottish Independence Referendum (2014)')}
          <h2 class="lz-h2 reveal">"Should Scotland be an Independent Country?"</h2>
          <p class="lz-prose reveal">
            On September 18, 2014, Scotland voted on independence. <strong>No: 55.3% — Yes: 44.7%.</strong>
            Turnout was an extraordinary <strong>84.6%</strong>. The debate divided Scottish society deeply
            and the question remains far from settled.
          </p>

          ${renderCompare({
            titleA: '✅ Yes Campaign (Independence)',
            titleB: '❌ No Campaign (Better Together)',
            listA: [
              'National self-determination — Scotland should govern itself',
              'North Sea oil wealth belongs to Scotland',
              'Democratic deficit — Conservatives rule despite losing in Scotland',
              'Scotland more left-wing; dragged rightward by England',
              'Pro-EU: Scotland would stay in the EU',
              'Scotland is already a distinct nation with its own institutions',
            ],
            listB: [
              'Economic risk — currency, deficit, trade barriers',
              'EU membership: would have to reapply; Spain might veto',
              'Stronger together — UK more influential globally',
              'Shared history, family, culture — social union',
              '"The Vow" — promise of more devolution ("Devo Max")',
              'Defence and intelligence sharing',
            ],
          })}

          ${renderAccordion([
            {
              title: '💷 The Currency Question — The Key Economic Issue',
              content: `<p class="lz-prose">The Yes campaign proposed a <strong>Currency Union</strong> — an independent Scotland keeping the pound. The UK government (and all three main parties) refused. Without currency union, Scotland faced three options:<br>
                        1. <strong>Keep the pound unilaterally</strong> — possible but no lender of last resort, no monetary policy control.<br>
                        2. <strong>Join the euro</strong> — would require EU membership (uncertain) and meeting convergence criteria.<br>
                        3. <strong>Create a new Scottish currency</strong> — risky, transition costs, uncertainty.<br>
                        The currency uncertainty became the No campaign's most effective argument.</p>`
            },
            {
              title: '🔄 Post-Brexit: The Case for Indyref2',
              content: `<p class="lz-prose">• Scotland voted 62% Remain — taken out of the EU against its will.<br>
                        • The SNP argues "material change in circumstances" justifies a second referendum.<br>
                        • Scottish Parliament has voted for a second referendum.<br>
                        • UK Supreme Court ruled (2022) that Scotland cannot hold a referendum without Westminster consent — a Section 30 Order is required.<br>
                        • UK Government under Johnson, Sunak, and Starmer has refused to grant one.<br>
                        • Current polls: roughly 47-53% split — close to 2014 but No slightly ahead.</p>`
            },
          ])}

          ${renderSubhead('15.3 Anglo-Irish Relations (to 1921)')}
          <h2 class="lz-h2 reveal">800 Years of Conflict</h2>

          ${renderVTimeline([
            { year: '12th century', title: 'English Invasion', text: 'Anglo-Norman lords invade Ireland; beginning of English presence.' },
            { year: '16th–17th c.', title: 'Plantations', text: 'English and Scottish Protestant settlers given confiscated Catholic land. Ulster heavily settled — roots of today\'s sectarian division.' },
            { year: '1691', title: 'Penal Laws', text: 'Catholics could not vote, own land, hold office, or bear arms. Systematic oppression of the majority.' },
            { year: '1798', title: 'United Irishmen Rebellion', text: 'Inspired by French Revolution; aimed at a non-sectarian republic. Brutally suppressed; 30,000+ dead.' },
            { year: '1800', title: 'Act of Union', text: 'Ireland formally absorbed into the United Kingdom. Irish Parliament abolished. Opposed by Catholics.' },
            { year: '1845–52', title: 'The Great Famine', text: '1 million dead from starvation; 1–2 million emigrated. British response widely seen as inadequate or genocidal. Population halved over a generation.' },
            { year: '1916', title: 'Easter Rising', text: 'Armed rebellion in Dublin; crushed within a week; leaders executed. Executions created martyrs and transformed public opinion toward independence.' },
            { year: '1919–21', title: 'War of Independence', text: 'IRA guerrilla campaign; Black and Tans (British paramilitaries) notorious for brutality.' },
            { year: '1921', title: 'Anglo-Irish Treaty', text: 'Ireland partitioned: Irish Free State (26 counties) and Northern Ireland (6 counties, remained in UK).' },
          ])}

          ${renderSubhead('15.4 The Troubles (1968–1998)')}
          <h2 class="lz-h2 reveal">Thirty Years of Conflict</h2>
          <p class="lz-prose reveal">
            The <strong>Troubles</strong> was a multi-sided conflict in Northern Ireland between
            <strong>Nationalists/Republicans</strong> (mostly Catholic, wanted Irish unity) and
            <strong>Unionists/Loyalists</strong> (mostly Protestant, wanted to remain in the UK),
            with the British Army and state in the middle.
          </p>

          <nav class="wim-tabs" id="troubles-tabs" aria-label="The Troubles">
            ${TROUBLES_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelTroublesCauses()}
          ${this._panelTroublesEvents()}
          ${this._panelTroublesGFA()}

          ${renderAccordion([
            {
              title: '📊 The Human Cost of the Troubles',
              content: `<p class="lz-prose">• <strong>3,500+ killed</strong> (1968–1998); ~3,700 including post-Agreement violence<br>
                        • <strong>47,000+ injured</strong><br>
                        • Approximately <strong>60% civilians</strong>, 30% paramilitary members, 10% security forces<br>
                        • <strong>IRA responsible</strong> for ~58% of deaths; Loyalists ~30%; security forces ~11%<br>
                        • Psychological trauma across a generation — post-traumatic stress widespread<br>
                        • Economic damage: billions in property destruction; deterred investment; "the Troubles tax"</p>`
            },
            {
              title: '⚠️ Legacy Issues — Unresolved in 2024',
              content: `<p class="lz-prose">• <strong>Segregation persists:</strong> Most schools and housing estates still separated along Catholic/Protestant lines.<br>
                        • <strong>"Peace walls":</strong> 99 "peace walls" (barriers between communities) still stand in Belfast — more than in 1998.<br>
                        • <strong>Truth and justice:</strong> Many victims' families have never seen perpetrators prosecuted. Legacy of Troubles Act (2023) — controversial amnesty provisions.<br>
                        • <strong>Brexit:</strong> Windsor Framework (2023) resolved the Irish Sea border issue — but unionist anger remains.<br>
                        • <strong>Reunification debate:</strong> 2024 polls show ~45% support for a united Ireland in NI — a significant shift from 2016.</p>`
            },
          ])}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Political System', link: `${BASE}/themen/gb/political-system` },
            next: { label: 'Multicultural Society', link: `${BASE}/themen/gb/multicultural` },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelDevolutionScotland() {
    return `
      <div class="wim-category" data-wim-cat="scotland">
        ${renderTable({ headers: ['Aspect', 'Details'], rows: [
          ['Parliament', 'Scottish Parliament (Holyrood), Edinburgh — 129 MSPs, proportional representation'],
          ['Devolved Powers', 'Health (NHS Scotland), education, justice, police, environment, agriculture, housing, transport, some taxation'],
          ['Reserved Powers', 'Defence, foreign policy, immigration, social security, most taxation — stay at Westminster'],
          ['Dominant Party', 'SNP (Scottish National Party) — in government since 2007; supports independence'],
          ['Key Difference', 'Tuition fees: free in Scotland (£9,250/year in England). NHS prescriptions: free. Different exam system.'],
        ]})}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-flag', title: 'The Barnett Formula', body: 'The funding mechanism for devolved nations. Scotland, Wales, and NI receive per-capita funding linked to English spending. Controversial — England claims Scotland is overfunded; Scotland claims it\'s not enough. Formula dates from 1978 and was never intended to be permanent.' })}
      </div>
    `;
  }

  _panelDevolutionWales() {
    return `
      <div class="wim-category hidden" data-wim-cat="wales">
        ${renderTable({ headers: ['Aspect', 'Details'], rows: [
          ['Parliament', 'Senedd Cymru (Welsh Parliament), Cardiff — 60 Members of the Senedd (MSs)'],
          ['Devolved Powers', 'Health (NHS Wales), education, environment, transport, Welsh language, housing, some taxation since 2018'],
          ['Welsh Language', 'Welsh and English are co-official languages. Welsh is compulsory in schools to age 16.'],
          ['Dominant Party', 'Labour — in government since 1999, often in coalition or minority'],
          ['Independence Debate', 'Growing but minority view — Plaid Cymru (Welsh nationalists) support independence; polling around 30-35%'],
        ]})}
      </div>
    `;
  }

  _panelDevolutionNI() {
    return `
      <div class="wim-category hidden" data-wim-cat="ni">
        ${renderTable({ headers: ['Aspect', 'Details'], rows: [
          ['Assembly', 'Northern Ireland Assembly (Stormont), Belfast — 90 MLAs'],
          ['Power-Sharing', 'Mandatory coalition: must include both unionist and nationalist parties (d\'Hondt system)'],
          ['Devolved Powers', 'Health, education, justice, agriculture, environment, regional development'],
          ['Suspensions', 'Assembly suspended multiple times (2002–07, 2017–20, 2022–24) when power-sharing breaks down'],
          ['Brexit Impact', 'Windsor Framework (2023): NI follows some EU Single Market rules; trade border in Irish Sea'],
        ]})}
      </div>
    `;
  }

  _panelDevolutionEngland() {
    return `
      <div class="wim-category hidden" data-wim-cat="england">
        <p class="lz-prose">England has no devolved parliament — it is governed directly by the UK Parliament. This creates a constitutional anomaly known as the <strong>West Lothian Question.</strong></p>
        ${renderInfobox({ type: 'warning', icon: 'fas fa-question-circle', title: 'The West Lothian Question', body: 'Scottish, Welsh, and Northern Irish MPs at Westminster can vote on matters (like English health or education) that have been devolved away from their own constituencies. English MPs cannot vote on the equivalent Welsh or Scottish matters. Is this fair? No satisfactory solution has been found.' })}
        <p class="lz-prose" style="margin-top:1rem;">• EVEL ("English Votes for English Laws") — introduced 2015, abolished 2021 — a failed attempt to address the anomaly.<br>• English regional assemblies: proposed but North East England rejected them in 2004 referendum.<br>• Combined authorities (e.g., Greater Manchester) given some powers — "metro mayors" system.</p>
      </div>
    `;
  }

  _panelTroublesCauses() {
    return `
      <div class="wim-category" data-wim-cat="causes">
        ${renderAccordion([
          { title: 'Discrimination', content: '<p class="lz-prose">Catholics faced systematic discrimination in housing (gerrymandered away from good areas), employment (Protestant firms favoured Protestants), and voting (gerrymandering gave Protestants disproportionate representation). The Unionist-controlled Stormont government openly discriminated.</p>' },
          { title: 'Civil Rights Movement', content: '<p class="lz-prose">Inspired by the American Civil Rights Movement, Catholic activists marched for equal rights from 1968. Police (RUC — overwhelmingly Protestant) responded with violence. British troops deployed August 1969 — initially welcomed by Catholics, soon became part of the problem.</p>' },
          { title: 'Historical Roots', content: '<p class="lz-prose">Partition (1921) had created a state with a built-in Protestant majority. The nationalist minority never accepted partition. Centuries of British rule, the Famine, and sectarian division created deep wounds that partition had not healed — it had merely frozen them.</p>' },
        ])}
      </div>
    `;
  }

  _panelTroublesEvents() {
    return `
      <div class="wim-category hidden" data-wim-cat="events">
        ${renderVTimeline([
          { year: '1971', title: 'Internment Without Trial', text: 'Hundreds of suspects (almost exclusively Catholic) imprisoned without charge. Massively counter-productive — created more recruits for the IRA.' },
          { year: '30 Jan 1972', title: 'Bloody Sunday', text: 'British paratroopers shot 28 unarmed civil rights marchers in Derry; 14 died. Saville Inquiry (2010): killings "unjustified and unjustifiable." PM Cameron apologised.' },
          { year: '1981', title: 'Hunger Strikes', text: 'IRA prisoners demanded political status. Bobby Sands elected MP while on hunger strike; died May 1981. 10 men died. Radicalised a generation.' },
          { year: '1984', title: 'Brighton Bombing', text: 'IRA nearly killed PM Margaret Thatcher and her cabinet at the Conservative Party conference. 5 dead.' },
          { year: '1993', title: 'Downing Street Declaration', text: 'UK and Irish governments agreed: NI\'s future determined by consent of its people. Foundation for peace talks.' },
          { year: '1998', title: 'Good Friday Agreement', text: 'Peace settlement. Power-sharing, decommissioning, early prisoner releases.' },
        ])}
      </div>
    `;
  }

  _panelTroublesGFA() {
    return `
      <div class="wim-category hidden" data-wim-cat="gfa">
        <p class="lz-prose">Signed April 10, 1998 (Good Friday). Negotiated under US Senator George Mitchell's mediation.</p>
        ${renderTable({ headers: ['Provision', 'Details'], rows: [
          ['Power-Sharing', 'Mandatory coalition — must include both unionist and nationalist parties. First Minister and Deputy First Minister co-govern.'],
          ['North-South Bodies', 'Cross-border cooperation with the Republic of Ireland on agriculture, transport, language, etc.'],
          ['British-Irish Council', 'Forum including all devolved governments and the two sovereign states.'],
          ['Decommissioning', 'Paramilitaries to decommission weapons. IRA completed 2005; loyalist groups slower.'],
          ['Prisoner Release', 'Paramilitaries with less than 2 years remaining released early — hugely controversial with victims.'],
          ['Self-Determination', 'NI\'s constitutional status only by consent of its people. No change without majority support.'],
          ['Rights', 'Human Rights Commission; equality requirements; reform of police (RUC → PSNI).'],
        ]})}
        ${renderInfobox({ type: 'success', icon: 'fas fa-check-circle', title: 'Referendum Results', body: 'Northern Ireland: <strong>71.1% Yes.</strong> Republic of Ireland: <strong>94.4% Yes</strong> (voted to remove territorial claim over NI from constitution). Remarkable that former enemies voted so decisively for peace.' })}
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