// pages/projekte/lernzettel/faecher/englisch/themen/gb/world-power.js
// Great Britain – Kapitel 11 / 2.1: History of a World Power (Empire & Commonwealth)

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
  renderTabs,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const EMPIRE_REGIONS_TABS = [
  { key: 'asia',    label: '🌏 Asia & Middle East' },
  { key: 'africa',  label: '🌍 Africa' },
  { key: 'americas', label: '🌎 Americas & Pacific' },
];

export default class WorldPowerPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-gb-worldpower';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 11</span>
            <i class="fas fa-chevron-right"></i><span>History of a World Power</span>
          </div>
          <h1 class="lz-sub-title">History of a<br><em>World Power</em></h1>
          <p class="lz-sub-desc">The British Empire · The Commonwealth · Legacy and Responsibility</p>
          ${renderTags(['Great Britain', 'British Empire', 'Commonwealth', 'Decolonisation'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-globe', title: '¼ of the World', text: 'At its peak in the 1920s, the British Empire covered ~25% of the Earth\'s land surface — the largest empire in history.' },
            { icon: 'fas fa-users', title: '400–500 Million', text: 'The number of people living under British rule at the empire\'s height, roughly one-fifth of humanity.' },
            { icon: 'fas fa-map-marker-alt', title: '56 Countries Today', text: 'Members of the Commonwealth of Nations — the successor organisation to the empire.' },
            { icon: 'fas fa-calendar', title: '1947–1997', text: 'The main era of decolonisation: from Indian independence to the handover of Hong Kong to China.' },
          ])}

          ${renderSubhead('11.1 The British Empire')}
          <h2 class="lz-h2 reveal">The Empire on Which the Sun Never Sets</h2>
          <p class="lz-prose reveal">
            The British Empire grew over three centuries from small trading posts into the largest empire in
            history. The phrase <strong>"the empire on which the sun never sets"</strong> reflected the reality
            that, due to its global reach, it was always daytime somewhere in the empire.
          </p>

          ${renderVTimeline([
            { year: '16th–17th c.', title: 'Early Expansion', text: 'North America and Caribbean colonies established; slave trade begins; East India Company founded (1600).' },
            { year: '18th century', title: 'India & Seven Years\' War', text: 'India becomes the "Jewel in the Crown"; defeat of France secures global dominance.' },
            { year: '19th century', title: 'Scramble for Africa', text: 'At the Berlin Conference (1884–85), Britain secures vast African territories; industrial and military power at its height.' },
            { year: '1920s', title: 'Maximum Extent', text: 'After WWI, Britain gains German and Ottoman territories — empire reaches its largest size ever.' },
            { year: '1947', title: 'Indian Independence', text: 'The jewel leaves the crown; partition of India and Pakistan signals the end of empire.' },
            { year: '1947–1997', title: 'Decolonisation', text: 'Colonies gain independence in rapid succession; process largely complete by the 1980s.' },
            { year: '1997', title: 'Hong Kong Handover', text: 'The last major colony returned to China — symbolic end of the empire.' },
          ])}

          <nav class="wim-tabs" id="empire-regions-tabs" aria-label="Empire regions">
            ${EMPIRE_REGIONS_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelAsia()}
          ${this._panelAfrica()}
          ${this._panelAmericas()}

          ${renderAccordion([
            {
              title: '⚙️ Methods of Control',
              content: `<p class="lz-prose">• <strong>Direct Rule:</strong> British governors administered colonies directly — typical in smaller or less stable territories.<br>
                        • <strong>Indirect Rule:</strong> Working through existing local rulers (especially common in Africa and India) — cheaper, less resistance.<br>
                        • <strong>Royal Navy:</strong> The world's dominant naval force enabled global reach and rapid military response.<br>
                        • <strong>Economic Exploitation:</strong> Raw materials extracted cheaply; finished goods sold back to colonies at full price.<br>
                        • <strong>Cultural Imperialism:</strong> English language, British education system, Christianity spread to "civilise" the colonies.<br>
                        • <strong>Railway Networks:</strong> Built primarily to move troops and resources, not to develop local economies.</p>`
            },
            {
              title: '📜 Justifications for Empire',
              content: `<p class="lz-prose">• <strong>"The White Man's Burden" (Rudyard Kipling, 1899):</strong> Duty to "civilise" non-European peoples — paternalistic racism.<br>
                        • <strong>Racial superiority:</strong> Social Darwinism — belief in Anglo-Saxon inherent superiority.<br>
                        • <strong>Christian mission:</strong> Spreading Christianity as moral justification for conquest.<br>
                        • <strong>Economic necessity:</strong> Markets, resources, investment opportunities for industrialising Britain.<br>
                        • <strong>Strategic interests:</strong> Naval bases, trade routes, buffer zones against rivals (France, Russia, Germany).</p>`
            },
          ])}

          ${renderCompare({
            titleA: '✅ What the Empire Built',
            titleB: '❌ What the Empire Destroyed',
            listA: [
              'Railways, roads, telegraphs in India and Africa',
              'Legal systems still in use today',
              'English as a global language',
              'Parliamentary institutions',
              'Universities and hospitals (in some territories)',
              'Trade networks and economic links',
            ],
            listB: [
              'Sovereignty and self-determination of millions',
              'Indigenous cultures, languages, and religions',
              'Economic potential — raw materials extracted, not invested',
              'Political stability — artificial borders created lasting conflicts',
              '3–4 million dead in the Bengal Famine (1943) alone',
              'Psychological damage from racism and subjugation',
            ],
          })}

          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-balance-scale',
            title: 'The Reparations Debate',
            body: 'Should Britain pay reparations to former colonies? <strong>For:</strong> Wealth was extracted; descendants still suffer. <strong>Against:</strong> Current generations not responsible; aid and trade preferable. India, Jamaica, and Caribbean nations have formally demanded compensation. Britain has so far refused.'
          })}

          ${renderSubhead('11.2 The Commonwealth')}
          <h2 class="lz-h2 reveal">A Voluntary Association of Nations</h2>
          <p class="lz-prose reveal">
            The <strong>Commonwealth of Nations</strong> is a voluntary association of 56 independent countries
            — most former British colonies — representing ~2.5 billion people (one-third of the world's
            population). Unlike the empire, membership is voluntary and all members are equal in theory.
          </p>

          ${renderVTimeline([
            { year: '1926', title: 'Balfour Declaration', text: 'Dominions (Canada, Australia, etc.) recognised as "autonomous communities … equal in status" — birth of the Commonwealth idea.' },
            { year: '1931', title: 'Statute of Westminster', text: 'Formally established the British Commonwealth of Nations; dominions given full legal independence.' },
            { year: '1949', title: 'London Declaration', text: 'Republics could remain members — allowed newly independent nations (India, Pakistan) to join without a monarch.' },
            { year: '1965', title: 'Commonwealth Secretariat', text: 'Permanent secretariat established in London to coordinate activities.' },
            { year: '1971', title: 'Singapore Declaration', text: 'Core values of democracy, human rights, and rule of law formally adopted.' },
            { year: '2009', title: 'Rwanda joins', text: 'Rwanda admitted — never a British colony; shows the Commonwealth evolving beyond its imperial origins.' },
          ])}

          ${renderAccordion([
            {
              title: '👑 Structure and Leadership',
              content: `<p class="lz-prose">• <strong>Head of the Commonwealth:</strong> King Charles III (since 2022) — symbolic role, not hereditary. Agreed by member nations in 2018.<br>
                        • <strong>Commonwealth Secretary-General:</strong> Currently Patricia Scotland — chief executive, coordinates activities.<br>
                        • <strong>Commonwealth Secretariat:</strong> Based in Marlborough House, London.<br>
                        • <strong>CHOGM:</strong> Commonwealth Heads of Government Meeting — held every two years; key decisions made here.<br>
                        • <strong>Commonwealth Games:</strong> Major sporting event held every four years; 72 nations compete.</p>`
            },
            {
              title: '✅ What the Commonwealth Does',
              content: `<p class="lz-prose">• <strong>Election monitoring:</strong> Sends observers to elections in member states.<br>
                        • <strong>Rule of Law programme:</strong> Supports judicial independence and good governance.<br>
                        • <strong>Commonwealth Scholarships:</strong> Over 25,000 scholars from developing countries have studied abroad.<br>
                        • <strong>Technical assistance:</strong> Shares expertise in economic development, climate change, cybersecurity.<br>
                        • <strong>Trade:</strong> Commonwealth members trade more with each other than non-members ("Commonwealth effect").<br>
                        • <strong>Voice for small states:</strong> Small island nations get global representation they wouldn't otherwise have.</p>`
            },
            {
              title: '⚠️ Criticisms of the Commonwealth',
              content: `<p class="lz-prose">• <strong>Relevance:</strong> Is it just a post-imperial nostalgia club?<br>
                        • <strong>Human rights inconsistency:</strong> Members like Uganda, Pakistan, Cameroon have poor records — yet remain members.<br>
                        • <strong>Limited enforcement:</strong> No mechanism to enforce its own values — suspension rare.<br>
                        • <strong>Colonial legacy:</strong> Some see it as neo-colonialism — Britain retaining influence over former subjects.<br>
                        • <strong>Brexit context:</strong> Johnson promised "Global Britain" through the Commonwealth — critics called it fantasy, noting EU trade was 5× Commonwealth trade.<br>
                        • <strong>LGBTQ+ rights:</strong> 36 of 56 members criminalise homosexuality — a direct legacy of colonial-era British laws.</p>`
            },
          ])}

          ${renderTable({
            headers: ['Country', 'Population', 'Commonwealth Role'],
            rows: [
              ['India', '1.4 billion', 'Largest member; growing economic power; complex relationship with colonial past'],
              ['Nigeria', '220 million', 'Largest African member; oil wealth; significant political influence'],
              ['Pakistan', '230 million', 'Intermittently suspended; complex India-Pakistan dynamic'],
              ['Bangladesh', '170 million', 'Former East Pakistan; joined 1972'],
              ['UK', '67 million', 'Founding member; hosts the Secretariat; provides most funding'],
              ['Canada / Australia / NZ', '–', 'Wealthy anglophone members; King remains head of state; republic debates ongoing'],
              ['Rwanda', '14 million', 'Joined 2009; never colonised by Britain — shows Commonwealth\'s evolving nature'],
            ],
            highlight: [0],
          })}

          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-handshake',
            title: 'Post-Brexit: "Global Britain" and the Commonwealth',
            body: 'After leaving the EU, Britain emphasised Commonwealth relationships as an alternative trade and diplomatic network. However, the data is sobering: the EU accounted for ~43% of UK trade; all 55 other Commonwealth nations combined account for ~9%. Critics argue "Global Britain" is nostalgia dressed up as strategy.'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Religion in the USA', link: `${BASE}/themen/usa/religion` },
            next: { label: 'Post-colonial Developments', link: `${BASE}/themen/gb/post-colonial` }
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelAsia() {
    return `
      <div class="wim-category" data-wim-cat="asia">
        ${renderTable({ headers: ['Territory', 'Period', 'Significance'], rows: [
          ['India (British Raj)', '1858–1947', '"Jewel in the Crown"; textiles, raw materials, military manpower'],
          ['Burma (Myanmar)', '1885–1948', 'Strategic buffer; teak, oil, gems'],
          ['Malaya / Singapore', '1819–1957', 'Rubber, tin; Singapore key naval base'],
          ['Hong Kong', '1842–1997', 'Trade hub with China; ceded after First Opium War'],
          ['Palestine / Iraq', '1920–1948', 'League of Nations mandates after WWI; oil interests'],
        ]})}
      </div>
    `;
  }

  _panelAfrica() {
    return `
      <div class="wim-category hidden" data-wim-cat="africa">
        ${renderTable({ headers: ['Territory', 'Period', 'Significance'], rows: [
          ['Egypt / Sudan', '1882–1956', 'Control of Suez Canal; "Cape to Cairo" route'],
          ['Kenya / Uganda', '1895–1963', 'White settler farming; Mau Mau uprising (1950s)'],
          ['Nigeria / Gold Coast', '1861–1960', 'Palm oil, cocoa, gold; largest African populations'],
          ['South Africa', '1806–1910', 'Gold (Witwatersrand), diamonds; Boer Wars 1899–1902'],
          ['Rhodesia (Zimbabwe)', '1890–1980', 'White minority rule; controversial UDI 1965'],
        ]})}
      </div>
    `;
  }

  _panelAmericas() {
    return `
      <div class="wim-category hidden" data-wim-cat="americas">
        ${renderTable({ headers: ['Territory', 'Period', 'Significance'], rows: [
          ['Canada', '1763–1867', 'First self-governing dominion; furs, timber, wheat'],
          ['Australia', '1788–1901', 'Penal colony to federation; gold rushes; wool'],
          ['New Zealand', '1840–1907', 'Treaty of Waitangi; sheep farming; loyal dominion'],
          ['Jamaica / Caribbean', '1655–1962', 'Sugar plantations; slavery; rum; Windrush generation'],
          ['Falkland Islands', '1833–present', 'Strategic South Atlantic outpost; Argentina War 1982'],
        ]})}
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