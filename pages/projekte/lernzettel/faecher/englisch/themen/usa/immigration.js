// pages/projekte/lernzettel/faecher/englisch/themen/usa/immigration.js
// USA – Kapitel 3: Immigration

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderInfobox,
  renderTable,
  renderSubhead,
  renderTags,
  renderAccordion,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class ImmigrationPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    // Stil für Zitate (einmalig, falls noch nicht vorhanden)
    if (!document.querySelector('#usa-immigration-styles')) {
      const style = document.createElement('style');
      style.id = 'usa-immigration-styles';
      style.textContent = `
        .lz-quote {
          background: var(--bg-elevated);
          border-left: 4px solid var(--lz-accent, ${COLOR});
          padding: 1.2rem 1.5rem;
          margin: 1.5rem 0;
          border-radius: 12px;
          font-style: italic;
          color: var(--text-secondary);
        }
        .lz-quote p {
          margin-bottom: 0;
        }
      `;
      document.head.appendChild(style);
    }

    const el = document.createElement('div');
    el.className = 'page page-englisch page-usa-immigration';
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
            <button data-link="${BASE}/themen/usa" class="lz-bread-link">USA</button>
            <i class="fas fa-chevron-right"></i><span>Kapitel 3</span>
            <i class="fas fa-chevron-right"></i><span>Immigration</span>
          </div>
          <h1 class="lz-sub-title">
            Immigration<br><em>to the United States</em>
          </h1>
          <p class="lz-sub-desc">
            Push and pull factors · Immigration patterns · Policy · Illegal immigration ·
            Changing social structure
          </p>
          ${renderTags(['USA', 'Immigration', 'Melting Pot'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('3.1 Push and Pull Factors')}
          <h2 class="lz-h2 reveal">Why People Leave, Why They Choose America</h2>
          <p class="lz-prose reveal">
            Immigration is driven by <strong>push factors</strong> (conditions that drive people to leave) and
            <strong>pull factors</strong> (attractions that draw people to a destination).
          </p>
          ${renderAccordion([
            {
              title: '🚫 Push Factors (Why People Leave)',
              content: `<p class="lz-prose">• Economic hardship – poverty, unemployment<br>
                        • Political persecution – authoritarian regimes, human rights violations<br>
                        • War and violence – civil wars, ethnic conflicts, gang violence<br>
                        • Religious persecution<br>
                        • Natural disasters – droughts, floods, climate change<br>
                        • Lack of services – poor education, inadequate healthcare</p>`
            },
            {
              title: '✨ Pull Factors (Why Choose America)',
              content: `<p class="lz-prose">• Economic opportunity – jobs, higher wages, entrepreneurship<br>
                        • Political freedom – democracy, rule of law, human rights<br>
                        • Religious freedom – constitutional protection<br>
                        • Education – world‑class universities, free public schools<br>
                        • Family reunification<br>
                        • The “American Dream” – belief in meritocracy and upward mobility<br>
                        • Safety and security – escape from violence</p>`
            },
          ])}
          <p class="lz-prose reveal">
            <strong>Historical examples:</strong> Irish (1840s‑1850s) – Potato Famine (push) / Jobs (pull);
            Jews (1880s‑1920s) – Pogroms (push) / Religious freedom (pull);
            Mexicans (ongoing) – Economic inequality, violence (push) / Jobs, family (pull);
            Vietnamese (1970s‑1980s) – Communist takeover (push) / Refugee programs (pull).
          </p>

          ${renderSubhead('3.2 Immigration Patterns')}
          <h2 class="lz-h2 reveal">Waves of Immigration</h2>
          ${renderTable({
            headers: ['Wave', 'Period', 'Origins', 'Numbers', 'Reception'],
            rows: [
              ['First Wave', '1820s‑1860s', 'Ireland, Germany, Scandinavia, Britain', '5 million', 'Some nativist opposition, especially to Irish Catholics'],
              ['Second Wave', '1880s‑1920s', 'Italy, Poland, Russia, Austria‑Hungary, Greece', '23 million', 'Significant nativist backlash, viewed as “unassimilable”'],
              ['Restriction Era', '1924‑1965', 'Immigration Act of 1924 – national origins quotas favoring Northern Europeans', 'Immigration dropped dramatically', 'Asian immigration completely banned'],
              ['Third Wave', '1965‑present', 'Latin America, Asia, Africa, Middle East', '59+ million (since 1965)', 'Current: 45 million foreign‑born (14% of population)'],
            ],
          })}
          <p class="lz-prose reveal">
            <strong>Current demographics:</strong> Top countries – Mexico, China, India, Philippines, El Salvador.
            Geographic distribution – California, Texas, Florida, New York.
          </p>

          ${renderSubhead('3.3 Immigration Policy')}
          <h2 class="lz-h2 reveal">Laws and Regulations</h2>
          ${renderTable({
            headers: ['Year', 'Law/Event', 'Significance'],
            rows: [
              ['1790', 'Naturalization Act', 'Restricted citizenship to “free white persons”'],
              ['1882', 'Chinese Exclusion Act', 'First law restricting by nationality'],
              ['1924', 'Immigration Act', 'National origins quotas'],
              ['1965', 'Hart‑Celler Act', 'Abolished discriminatory quotas'],
              ['1986', 'Immigration Reform and Control Act', 'Amnesty for 3 million undocumented'],
            ],
          })}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-passport',
            title: 'Current Immigration Categories',
            body: `<strong>Family‑Based Immigration:</strong> Largest category – U.S. citizens sponsor relatives.<br>
                   <strong>Employment‑Based Immigration:</strong> H‑1B visas for skilled workers.<br>
                   <strong>Diversity Visa Program:</strong> 50,000 visas annually by lottery.<br>
                   <strong>Refugees and Asylum Seekers:</strong> Protection for those fleeing persecution.`
          })}
          <p class="lz-prose reveal">
            <strong>Contemporary policy debates:</strong> Border security, DACA (“Dreamers”), path to citizenship,
            guest worker programs.
          </p>

          ${renderSubhead('3.4 Illegal Immigration')}
          <h2 class="lz-h2 reveal">Undocumented Immigration</h2>
          <p class="lz-prose reveal">
            Approximately <strong>11 million undocumented immigrants</strong> live in the U.S. (about 50% from Mexico,
            also Central America, Asia). Many overstay visas rather than crossing the border illegally.
          </p>
          ${renderAccordion([
            {
              title: '💼 Economic Impact – Perspectives',
              content: `<p class="lz-prose"><strong>Negative view:</strong> Compete with low‑skilled native workers, depress wages, burden on public services.<br>
                        <strong>Positive view:</strong> Fill jobs Americans won't take, contribute more in taxes than they consume, essential to certain industries, keep Social Security solvent.</p>`
            },
            {
              title: '⚠️ Human Costs',
              content: `<p class="lz-prose">• Deaths crossing the desert border (thousands since 2000)<br>
                        • Family separations through deportation<br>
                        • Exploitation by employers (vulnerable to wage theft, unsafe conditions)<br>
                        • Vulnerability to crime (can't report to police)<br>
                        • Human trafficking operations</p>`
            },
          ])}
          <p class="lz-prose reveal">
            <strong>Enforcement approaches:</strong> Border enforcement (barriers, surveillance, Border Patrol),
            interior enforcement (ICE raids and detentions), employer sanctions (rarely enforced), detention and
            deportation.
          </p>

          ${renderSubhead('3.5 Changing Social Structure')}
          <h2 class="lz-h2 reveal">Demographic Transformation</h2>
          <p class="lz-prose reveal">
            Immigration is fundamentally changing America's demographic composition.
          </p>
          ${renderTable({
            headers: ['Group', 'Current %', 'Projected (2045)'],
            rows: [
              ['White (Non‑Hispanic)', '59.3% (declining)', 'Under 50% (plurality)'],
              ['Hispanic/Latino', '18.9% (fastest growing)', '~25%'],
              ['Black', '13.6%', '~13%'],
              ['Asian', '6.1% (fastest growing percentage‑wise)', '~8%'],
              ['Multiracial / Other', '2.1%', 'Growing'],
            ],
          })}
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-globe-americas',
            title: 'Cultural Impact',
            body: `• Food: diverse cuisine (Mexican, Chinese, Italian, Thai, Ethiopian)<br>
                   • Language: over 350 languages spoken<br>
                   • Religion: growing religious diversity<br>
                   • Arts: diverse cultural influences in music, film, literature`
          })}
          <p class="lz-prose reveal">
            <strong>Social tensions:</strong> Cultural anxiety, economic competition, language debates (“English‑only”
            vs. bilingual accommodation), national identity questions. However, similar anxieties emerged with
            previous immigration waves (Irish, Italians, Jews), and those groups eventually integrated successfully.
          </p>

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'African American History', link: `${BASE}/themen/usa/african-american` },
            next: { label: 'Multiculturalism', link: `${BASE}/themen/usa/multiculturalism` },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
  }
}