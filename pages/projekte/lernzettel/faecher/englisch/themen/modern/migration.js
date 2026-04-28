// pages/projekte/lernzettel/faecher/englisch/themen/modern/migration.js
// Living in a Modern World – 3.3: Migration

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable, renderSubhead, renderTags,
  renderAccordion, renderMerkboxGrid, renderCompare, renderTabs, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const MIGRATION_IMPACT_TABS = [
  { key: 'source',      label: '📤 Source Countries' },
  { key: 'destination', label: '📥 Destination Countries' },
  { key: 'policies',    label: '⚖️ Policy Approaches' },
];

export default class MigrationPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-modern-migration';
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
            <i class="fas fa-chevron-right"></i><span>3.3</span>
            <i class="fas fa-chevron-right"></i><span>Migration</span>
          </div>
          <h1 class="lz-sub-title">Migration<br><em>A World in Motion</em></h1>
          <p class="lz-sub-desc">Push &amp; Pull · Types · Impact · Policy Approaches · Climate Migration</p>
          ${renderTags(['Migration', 'Refugees', 'Asylum', 'Climate Migration', 'Remittances'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-person-walking-luggage', title: '281 Million Migrants', text: '3.6% of the world\'s population live outside their country of birth — the highest absolute number ever recorded. International migration has tripled since 1970.' },
            { icon: 'fas fa-tents', title: '100+ Million Displaced', text: 'Over 100 million people are forcibly displaced — by war, persecution, or disaster. More than at any point since WWII. UNHCR calls it a "global displacement crisis."' },
            { icon: 'fas fa-dollar-sign', title: '$800bn in Remittances', text: 'Money sent home by migrants annually — more than three times all foreign aid combined. The most direct form of global wealth redistribution.' },
            { icon: 'fas fa-temperature-high', title: '200M Climate Migrants by 2050', text: 'World Bank estimate: rising seas, droughts, and extreme heat could force 200+ million people to move within their own countries by 2050 — a crisis barely beginning.' },
          ])}

          ${renderSubhead('3.3.1 Push and Pull Factors')}
          <h2 class="lz-h2 reveal">Why People Move</h2>

          ${renderCompare({
            titleA: '⬆️ Push Factors (Why People Leave)',
            titleB: '⬇️ Pull Factors (Why They Choose a Destination)',
            listA: [
              'Economic hardship — poverty, unemployment, no prospects',
              'War and armed conflict — Syria, Afghanistan, Sudan, Myanmar',
              'Gang violence and crime — "Northern Triangle" of Central America',
              'Political persecution — authoritarianism, ethnic/religious targeting',
              'Natural disasters and climate disruption',
              'Lack of basic services — healthcare, education, water',
            ],
            listB: [
              'Higher wages — often 5–10× higher than in home country',
              'Political freedom — democracy, rule of law, safety',
              'Better healthcare, education, social services',
              'Family reunification — joining established communities',
              'The "American Dream" / European welfare state',
              'Geographic and linguistic proximity',
            ],
          })}

          ${renderSubhead('3.3.2 Types of Migration')}
          ${renderTable({
            headers: ['Type', 'Definition', 'Legal Status', 'Scale'],
            rows: [
              ['Economic migrant', 'Moves for better economic opportunities', 'Varies — legal if visa obtained; undocumented if not', 'Largest category: ~170 million'],
              ['Refugee', 'Flees persecution based on race, religion, nationality, political opinion, or social group', 'Protected under 1951 Refugee Convention if recognised', '~26 million UNHCR-recognised refugees'],
              ['Asylum seeker', 'Claims refugee status; case not yet decided', 'Legal right to apply; status uncertain', '~4 million cases pending globally'],
              ['Internally Displaced Person (IDP)', 'Forced to move within own country', 'No international legal protection — overlooked crisis', '~62 million IDPs'],
              ['Climate migrant', 'Displaced by environmental change', 'No specific legal protection — major gap in international law', 'Projected 200m+ by 2050'],
              ['Stateless person', 'Has no nationality — belongs to no state', 'Extremely vulnerable; no rights or documentation', '~10 million globally'],
            ],
          })}

          ${renderSubhead('3.3.3 Impact of Migration')}
          <h2 class="lz-h2 reveal">Effects on Source and Destination</h2>

          <nav class="wim-tabs" id="migration-impact-tabs" aria-label="Migration impact">
            ${MIGRATION_IMPACT_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="source">
            ${renderCompare({
              titleA: '✅ Benefits for Source Countries', titleB: '❌ Costs for Source Countries',
              listA: ['Remittances: $800bn/year — often exceeds foreign aid and FDI for some countries', 'Reduced unemployment and pressure on labour market', 'Skills acquired abroad brought back upon return', 'Diaspora investment and knowledge transfer', 'Political pressure relieved — less domestic unrest'],
              listB: ['Brain drain: doctors, engineers, teachers are exactly who leave', 'Family separation — children raised without a parent', 'Labour shortages in key sectors', 'Dependency on remittances (can be 20–30% of GDP in some countries)', 'Loss of most educated and entrepreneurial citizens'],
            })}
          </div>

          <div class="wim-category hidden" data-wim-cat="destination">
            ${renderCompare({
              titleA: '✅ Benefits for Destination Countries', titleB: '❌ Concerns in Destination Countries',
              listA: ['Fills labour shortages — especially in healthcare, agriculture, construction', 'Economic growth: migrants are disproportionately entrepreneurial', 'Demographic balance: migrants are typically working-age', 'Cultural enrichment — food, music, ideas, innovation', 'Fiscal contribution: most pay taxes over a lifetime'],
              listB: ['Short-term costs: housing, education, integration services', 'Cultural and social tensions — especially rapid influx', 'Political backlash — immigration fuels populism', 'Integration failures can create parallel societies', 'Strain on public services in receiving communities'],
            })}
            ${renderInfobox({ type: 'blue', icon: 'fas fa-chart-bar', title: 'The Evidence on Economics', body: 'Most economic research shows migration is net positive for destination economies over the medium term. The fiscal impact is positive for working-age migrants; negative for elderly migrants or those with limited labour market access. The distributional effects matter: employers benefit, some competing workers face wage pressure. The political perception often diverges sharply from the economic reality.' })}
          </div>

          <div class="wim-category hidden" data-wim-cat="policies">
            ${renderTable({ headers: ['Model', 'Countries', 'Mechanism', 'Outcome'], rows: [
              ['Points-Based', 'Canada, Australia, UK (post-Brexit)', 'Select by skills, language, age', 'Higher-skilled immigrants; public acceptance; ignores humanitarian needs'],
              ['Open Borders', 'EU internal', 'Free movement of EU citizens', 'Economic efficiency; political backlash (Brexit partly)'],
              ['Family Reunification', 'USA (historically)', 'Sponsor relatives', 'Builds community; may not optimise for skills'],
              ['Humanitarian First', 'Germany 2015, UNHCR model', 'Priority for refugees/asylum seekers', 'Moral imperative; integration challenges'],
              ['Restrictive/Deterrence', 'UK, Hungary, Australia', 'Strict limits, offshore processing', 'Reduces numbers; severe human rights concerns'],
            ]})}
            ${renderInfobox({ type: 'warning', icon: 'fas fa-gavel', title: 'The Asylum Paradox', body: 'Under the 1951 Refugee Convention, anyone who arrives in a country fearing persecution has the legal right to claim asylum — regardless of how they arrived. Yet many countries have criminalised irregular entry. This creates a legal and moral contradiction: people with valid asylum claims are prosecuted for arriving "illegally" because there is no safe legal route.' })}
          </div>

          ${renderSubhead('3.3.4 Climate Migration — The Coming Crisis')}
          <p class="lz-prose reveal">
            Climate migration is qualitatively different from other migration: it is involuntary, often
            permanent, and will affect entire nations. It is also largely unaddressed in international law —
            there is no "climate refugee" legal category under the 1951 Refugee Convention.
          </p>

          ${renderTable({
            headers: ['Region', 'Climate Threat', 'Migration Risk'],
            rows: [
              ['Small Island States (Kiribati, Tuvalu, Maldives)', 'Sea level rise; entire nations could be submerged', 'Entire populations may need to relocate — nation disappears'],
              ['Bangladesh', 'Flooding (30% of land at risk), cyclones', '13–30 million displaced by 2050'],
              ['Sahel (Sub-Saharan Africa)', 'Drought, desertification, crop failure', 'Hundreds of millions face food insecurity and forced movement'],
              ['Central America', 'Drought, crop failure ("Dry Corridor")', 'Already driving migration to the USA; will intensify'],
              ['South Asia', 'Extreme heat, flooding (Pakistan, India)', 'Parts becoming physiologically uninhabitable — wet-bulb temperature'],
            ],
          })}

          ${renderInfobox({ type: 'danger', icon: 'fas fa-triangle-exclamation', title: 'Legal Gap — No "Climate Refugee" Status', body: 'The 1951 Refugee Convention was written for political persecution — it does not recognise climate displacement. People fleeing uninhabitable conditions have no international legal protection. Multiple court cases are challenging this: in 2022, a UN Human Rights Committee ruled that returning a Kiribati man to his climate-threatened island could violate his right to life — the first such ruling. But comprehensive legal protection remains absent.' })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Poverty', link: `${BASE}/themen/modern/poverty` },
            next: { label: 'Environmental Challenges', link: `${BASE}/themen/modern/environment` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}