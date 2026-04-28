// pages/projekte/lernzettel/faecher/englisch/themen/modern/poverty.js
// Living in a Modern World – 3.2: Poverty as a Global Challenge

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable, renderSubhead, renderTags,
  renderAccordion, renderVTimeline, renderMerkboxGrid, renderCompare, renderTabs, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const POVERTY_CAUSES_TABS = [
  { key: 'structural', label: '🏛️ Structural' },
  { key: 'governance', label: '🏛️ Governance' },
  { key: 'environment', label: '🌍 Environment' },
];

export default class PovertyPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-modern-poverty';
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
            <button data-link="${BASE}/themen/modern" class="lz-bread-link">Living in a Modern World</button>
            <i class="fas fa-chevron-right"></i><span>3.2</span>
            <i class="fas fa-chevron-right"></i><span>Poverty</span>
          </div>
          <h1 class="lz-sub-title">Poverty<br><em>Global Challenge</em></h1>
          <p class="lz-sub-desc">Scale · Root Causes · Consequences · Solutions · SDGs</p>
          ${renderTags(['Poverty', 'SDGs', 'Inequality', 'Development Aid', 'Microfinance'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-scale-unbalanced', title: '700 Million', text: 'People living in extreme poverty (under $2.15/day). Down from 1.9 billion in 1990 — mostly due to China\'s growth. COVID-19 reversed recent gains for the first time in decades.' },
            { icon: 'fas fa-globe-africa', title: 'Sub-Saharan Africa', text: 'The only region where the absolute number of people in extreme poverty is still rising — despite progress elsewhere. Home to ~60% of the world\'s extreme poor.' },
            { icon: 'fas fa-utensils', title: '828 Million Hungry', text: 'People who are chronically undernourished. Food insecurity worsened by COVID-19, the Ukraine war (disrupted grain supplies), and climate-driven crop failures.' },
            { icon: 'fas fa-child', title: '160 Million Child Labourers', text: 'Children in labour instead of school. The most direct way poverty perpetuates itself across generations — trapped in a cycle with no education exit.' },
          ])}

          ${renderSubhead('3.2.1 Scale and Definition')}
          <h2 class="lz-h2 reveal">What Is Poverty?</h2>
          <p class="lz-prose reveal">
            Poverty is not simply a lack of money — it is a multidimensional condition encompassing lack of
            education, healthcare, clean water, security, and political voice. The World Bank measures
            <strong>extreme poverty</strong> at $2.15/day (2022 revised threshold). The UN measures
            <strong>multidimensional poverty</strong> using 10 indicators across health, education, and living standards.
          </p>

          ${renderTable({
            headers: ['Region', 'Extreme Poverty Rate', 'Absolute Numbers', 'Trend'],
            rows: [
              ['Sub-Saharan Africa', '~36%', '~490 million', '▲ Rising — only region increasing'],
              ['South Asia (incl. India)', '~5%', '~90 million', '▼ Dramatic fall — Indian growth lifted 400m+'],
              ['East Asia (incl. China)', '<2%', '~25 million', '▼ Extraordinary — China alone lifted 800 million'],
              ['Latin America', '~4%', '~27 million', '→ Stagnant; inequality remains extreme'],
              ['Middle East & N. Africa', '~3%', '~15 million', '▲ Rising due to conflicts'],
              ['Global', '~9%', '~700 million', '▼ Down from 36% in 1990 — but progress stalling'],
            ],
            highlight: [0, 5],
          })}

          ${renderSubhead('3.2.2 Root Causes')}
          <h2 class="lz-h2 reveal">Why Does Poverty Persist?</h2>

          <nav class="wim-tabs" id="poverty-causes-tabs" aria-label="Poverty causes">
            ${POVERTY_CAUSES_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="structural">
            ${renderAccordion([
              { title: 'Colonial Legacy', content: '<p class="lz-prose">Centuries of extraction left institutions designed for exploitation rather than development. Borders drawn at the Berlin Conference (1884) without regard for ethnic groups created conflict-prone states. Infrastructure built to extract resources, not develop local economies. This isn\'t ancient history — its effects are measurable today.</p>' },
              { title: 'Unfair Trade', content: '<p class="lz-prose">Rich countries subsidise their agriculture (~$700bn/year), undercutting farmers in poor countries who cannot compete. WTO rules were written largely by wealthy nations and often favour their interests. Cotton subsidies in the US destroy African cotton farmers who are far more efficient but cannot compete against subsidised prices.</p>' },
              { title: 'Debt Burden', content: '<p class="lz-prose">Many developing countries pay more in debt service annually than on healthcare or education. Money flows from poor to rich economies — the opposite of development aid. Odious debt: loans taken by authoritarian regimes, repaid by successor populations who never benefited from the money.</p>' },
              { title: 'Resource Curse', content: '<p class="lz-prose">Countries with abundant oil and minerals often have worse development outcomes than resource-poor neighbours (Nigeria vs. Botswana). Resource revenues fund elite corruption, create "Dutch disease" (currency appreciation kills other industries), and attract foreign exploitation rather than domestic investment.</p>' },
            ])}
          </div>

          <div class="wim-category hidden" data-wim-cat="governance">
            ${renderAccordion([
              { title: 'Corruption', content: '<p class="lz-prose">Transparency International estimates corruption costs developing countries $1.26 trillion per year — more than the entire aid budget many times over. Corruption diverts public funds from schools and hospitals to private pockets. It also discourages foreign investment and undermines rule of law.</p>' },
              { title: 'Conflict and Fragility', content: '<p class="lz-prose">Of the world\'s 50 poorest countries, 30+ have experienced significant conflict since 1990. War destroys infrastructure, displaces populations, disrupts agriculture, and drains government budgets. Conflict is both a cause and a consequence of poverty — creating vicious cycles that last generations.</p>' },
              { title: 'Weak Institutions', content: '<p class="lz-prose">Without functioning courts, property rights, contract enforcement, or reliable public services, investment is impossible and savings are insecure. Secure property rights have been shown to be one of the strongest predictors of economic development — why the formalization of land rights is a key development priority.</p>' },
            ])}
          </div>

          <div class="wim-category hidden" data-wim-cat="environment">
            ${renderAccordion([
              { title: 'Climate Vulnerability', content: '<p class="lz-prose">The poorest countries are least responsible for climate change (Sub-Saharan Africa emits ~4% of global CO₂) but most vulnerable to its effects: droughts, floods, rising seas, crop failures. The climate crisis is simultaneously a poverty crisis — every degree of warming increases poverty rates in tropical regions.</p>' },
              { title: 'Geographic Disadvantage', content: '<p class="lz-prose">Landlocked countries face higher trade costs (no sea access). Tropical climates have higher disease burdens. Resource-poor regions cannot attract investment. These are not insurmountable — Botswana and Singapore have overcome geographic challenges — but they raise the baseline difficulty significantly.</p>' },
            ])}
          </div>

          ${renderSubhead('3.2.3 Consequences')}
          ${renderTable({
            headers: ['Dimension', 'Specific Consequences'],
            rows: [
              ['Health', 'Malnutrition stunts physical and cognitive development; preventable diseases (diarrhoea, malaria) kill millions; maternal mortality high; life expectancy 20+ years shorter than in rich countries'],
              ['Education', 'Children miss school to work or care for siblings; school quality poor; no quiet space to study; hunger impairs concentration; girls often pulled out first'],
              ['Child Labour', '160 million children in labour — agriculture (71%), industry, services; perpetuates poverty cycle; denies childhood and future opportunities'],
              ['Gender Inequality', 'Women and girls bear disproportionate burden of poverty; restricted access to education, credit, property rights, healthcare; poverty and gender discrimination reinforce each other'],
              ['Migration', 'Poverty drives economic migration; families separated; brain drain from developing countries; political instability from inequality'],
              ['Conflict', 'Economic inequality and resource competition fuel conflict; conflict destroys development gains; trapped in poverty-conflict cycle'],
            ],
          })}

          ${renderSubhead('3.2.4 What Actually Works — Solutions')}
          ${renderAccordion([
            { title: '💰 Conditional Cash Transfers (CCTs)', content: '<p class="lz-prose"><strong>Brazil\'s Bolsa Família</strong> is the most studied poverty programme in history. Direct cash transfers to poor families — conditional on children attending school (85% attendance) and health check-ups. Results: 14% reduction in poverty; significant reduction in inequality; school attendance and health outcomes improved. CCTs now used in 60+ countries. Key insight: poor people, given reliable income, make rational decisions about education and health investment.</p>' },
            { title: '🏦 Microfinance', content: '<p class="lz-prose"><strong>Grameen Bank (Bangladesh, Muhammad Yunus — Nobel Peace Prize 2006)</strong> provides small loans to the very poor (mostly women) to start or expand small businesses. 97% of borrowers are women — challenging traditional gender roles. Results: mixed evidence; most effective for women\'s empowerment and social capital, less so for income growth. Works best as part of broader financial inclusion, not as a silver bullet.</p>' },
            { title: '📚 Universal Primary Education', content: '<p class="lz-prose">Each additional year of schooling increases future earnings by ~10% (World Bank). Girls\' education especially powerful — educated women have fewer children, invest more in their health, and are more economically productive. Mass literacy campaigns (Cuba\'s 1961 campaign; Kerala\'s model in India) show rapid gains are possible with political will.</p>' },
            { title: '🌍 Trade Reform', content: '<p class="lz-prose">Eliminating agricultural subsidies in rich countries would allow developing countries to compete fairly. The OECD estimates this would benefit developing countries more than all current foreign aid combined. Political difficulty: powerful farming lobbies in USA, EU, and Japan resist reform. The Doha Development Round of WTO negotiations collapsed partly over this issue.</p>' },
            { title: '📋 UN Sustainable Development Goals', content: '<p class="lz-prose">17 goals, 169 targets adopted by all 193 UN member states in 2015, target date 2030. Key goals: No Poverty, Zero Hunger, Good Health, Quality Education, Gender Equality, Clean Water. <strong>2023 Progress Report:</strong> Only 15% of SDG targets on track. COVID-19, climate change, and the Ukraine war have set back progress by years in many areas. The gap between ambition and reality is vast.</p>' },
          ])}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-question-circle', title: 'Aid Effectiveness Debate', body: '<strong>Pro-aid (Jeffrey Sachs):</strong> Countries trapped in a "poverty trap" — too poor to invest, too uninvested to grow. External aid breaks the cycle. Evidence: aid-funded health programmes (bed nets, vaccines) have saved millions of lives. <br><strong>Aid sceptics (Dambisa Moyo):</strong> Aid creates dependency, undermines local industries, funds corrupt governments, replaces development with charity. "Dead Aid": 60 years of $1 trillion in aid to Africa produced declining per capita incomes. <br><strong>Pragmatist view:</strong> Some aid works (health, infrastructure); much aid is poorly designed or politically motivated. Better institutions and trade reform matter more than aid volumes.' })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Globalization', link: `${BASE}/themen/modern/globalization` },
            next: { label: 'Migration', link: `${BASE}/themen/modern/migration` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}