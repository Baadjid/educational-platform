// pages/projekte/lernzettel/faecher/englisch/themen/usa/multiculturalism.js
// USA – Kapitel 4: Multiculturalism

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

export default class MulticulturalismPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-usa-multiculturalism';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 4</span>
            <i class="fas fa-chevron-right"></i><span>Multiculturalism</span>
          </div>
          <h1 class="lz-sub-title">
            Multiculturalism<br><em>in the USA</em>
          </h1>
          <p class="lz-sub-desc">
            Native Americans · Hispanics · Muslims · Asians · Melting Pot vs. Salad Bowl · Racism
          </p>
          ${renderTags(['USA', 'Multiculturalism', 'Diversity'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('4.1 Native Americans')}
          <h2 class="lz-h2 reveal">The First Americans</h2>
          <p class="lz-prose reveal">
            Before European contact, an estimated 5‑15 million Native Americans lived in North America, divided into
            over 500 distinct tribes with diverse cultures, sophisticated civilizations, and complex political systems.
          </p>
          ${renderAccordion([
            {
              title: '📜 European Colonization and Displacement',
              content: `<p class="lz-prose">• Disease: European diseases killed 90% of the Native population<br>
                        • Land Theft: Treaties repeatedly broken<br>
                        • <strong>Indian Removal Act (1830)</strong> – forced relocation eastward<br>
                        • <strong>Trail of Tears (1838)</strong> – forced Cherokee march; thousands died<br>
                        • Indian Wars (1860s‑1890s) – military conflicts across the West</p>`
            },
            {
              title: '🏞️ Reservation System and Cultural Suppression',
              content: `<p class="lz-prose">• Confined to reservations on marginal land<br>
                        • By 1900, population reduced to about 250,000<br>
                        • Boarding schools – “Kill the Indian, save the man” – children forbidden to speak native languages<br>
                        • Traditional religions banned until 1978</p>`
            },
            {
              title: '📊 Current Status',
              content: `<p class="lz-prose">• Population: 5.2 million, 574 federally recognized tribes<br>
                        • Challenges: Highest poverty rates; unemployment often over 50%<br>
                        • Health issues: Lower life expectancy, high diabetes rates<br>
                        • Missing and Murdered Indigenous Women – crisis of violence<br>
                        • Recent developments: Gaming industry (some tribes economically successful), cultural revival, Land Back movement</p>`
            },
          ])}

          ${renderSubhead('4.2 Hispanics')}
          <h2 class="lz-h2 reveal">The Largest Minority Group</h2>
          <p class="lz-prose reveal">
            Hispanics (or Latinos) are people of Spanish‑speaking origin. Currently the largest minority group at
            62 million (18.9% of the population). The term covers diverse origins: Mexican Americans (62%),
            Puerto Ricans (9%), Cubans (4%), and growing Central American populations.
          </p>
          ${renderTable({
            headers: ['Aspect', 'Profile'],
            rows: [
              ['Income', 'Lower than white/Asian, higher than Black'],
              ['Education', 'Lower college graduation rates'],
              ['Employment', 'Construction, agriculture, service industries'],
              ['Entrepreneurship', 'Growing Hispanic‑owned businesses'],
              ['Cultural contributions', 'Spanish language, food, music (reggaeton, salsa), Día de los Muertos, Cinco de Mayo'],
              ['Political influence', 'Swing voters in key states; increasing Hispanic elected officials – not a monolithic voting bloc'],
            ],
          })}

          ${renderSubhead('4.3 Muslims')}
          <h2 class="lz-h2 reveal">Diverse and Growing</h2>
          <p class="lz-prose reveal">
            Approximately 3.45 million Muslims (1.1% of the population), diverse in origin: Middle Eastern,
            South Asian, African, and African American. Highly educated (39% hold bachelor’s degree or higher),
            income comparable to the general population.
          </p>
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-mosque',
            title: 'Post‑9/11 Experiences',
            body: 'Islamophobia, surveillance, airport profiling, backlash (mosque vandalism, harassment), travel bans targeting Muslim‑majority countries. Community responses include civic engagement, interfaith dialogue, legal advocacy (CAIR), and increasing Muslim representation in elected office.'
          })}

          ${renderSubhead('4.4 Asians')}
          <h2 class="lz-h2 reveal">Fastest Growing Group</h2>
          <p class="lz-prose reveal">
            Approximately 24 million (6.1%), fastest growing percentage‑wise. Major groups: Chinese, Indian,
            Filipino, Vietnamese, Korean, Japanese. Extremely diverse in language, culture, religion.
          </p>
          ${renderAccordion([
            {
              title: '📜 Immigration History',
              content: `<p class="lz-prose">• <strong>Chinese Exclusion Act (1882)</strong> – first law targeting specific nationality<br>
                        • <strong>Japanese Internment (1942‑1945)</strong> – 120,000 imprisoned during WWII<br>
                        • Post‑1965: Immigration Act opened doors to Asian immigration</p>`
            },
            {
              title: '📊 Socioeconomic Status and “Model Minority” Myth',
              content: `<p class="lz-prose">• Highest median household income and college graduation rates<br>
                        • BUT huge diversity within Asian American category – some groups face poverty<br>
                        • <strong>“Model Minority” Myth:</strong> Ignores diversity, masks real problems, used to pit minorities against each other, creates pressure and mental health issues</p>`
            },
            {
              title: '⚠️ Current Challenges',
              content: `<p class="lz-prose">• Discrimination – despite success, face racism<br>
                        • COVID‑19 Anti‑Asian hate – surge in violence<br>
                        • Bamboo ceiling – underrepresented in leadership<br>
                        • Identity issues – balancing Asian and American identities</p>`
            },
          ])}

          ${renderSubhead('4.5 Melting Pot and Salad Bowl')}
          <h2 class="lz-h2 reveal">Two Models of Integration</h2>
          ${renderTable({
            headers: ['Model', 'Idea', 'Contemporary Reality'],
            rows: [
              ['Melting Pot', 'Immigrants blend together, losing distinct characteristics to create uniform “American” identity', 'Assimilation into dominant Anglo‑American culture – “E pluribus unum” (Out of many, one)'],
              ['Salad Bowl', 'Immigrants maintain distinct cultural identities while coexisting', 'Cultural pluralism – maintaining traditions, bilingualism, ethnic enclaves, “Unity through diversity”'],
            ],
          })}
          <p class="lz-prose reveal">
            Contemporary America represents a complex mix of both models. Second/third generations learn English and
            adopt customs, but many maintain cultural traditions, speak heritage languages, and intermarriage creates
            new blended identities.
          </p>

          ${renderSubhead('4.6 Racism, Stereotyping, Prejudices and a Culture of Fear')}
          <h2 class="lz-h2 reveal">Definitions and Impacts</h2>
          ${renderTable({
            headers: ['Term', 'Definition'],
            rows: [
              ['Racism', 'Discrimination based on belief one race is superior'],
              ['Stereotypes', 'Oversimplified generalizations about groups'],
              ['Prejudice', 'Preconceived negative opinions'],
              ['Discrimination', 'Actions treating people unequally'],
            ],
          })}
          ${renderAccordion([
            {
              title: '🧠 Individual vs. Systemic Racism',
              content: `<p class="lz-prose"><strong>Individual Racism:</strong> Personal prejudices and discriminatory actions (hate crimes, slurs).<br>
                        <strong>Systemic/Institutional Racism:</strong> Policies embedded in institutions disadvantaging groups – may not require individual racist intent. Examples: redlining, school funding disparities, sentencing guidelines.</p>`
            },
            {
              title: '🎭 Common Stereotypes',
              content: `<p class="lz-prose">• African Americans: criminal, dangerous, athletic<br>
                        • Hispanics: illegal immigrants, lazy<br>
                        • Asians: model minority, good at math, foreign<br>
                        • Native Americans: alcoholic, savage<br>
                        • Muslims: terrorists, oppressed women</p>`
            },
            {
              title: '📺 Culture of Fear',
              content: `<p class="lz-prose">Media and political rhetoric emphasize threats from minority groups:<br>
                        • Crime reporting overrepresents minorities as criminals<br>
                        • Immigration rhetoric portrays immigrants as threats<br>
                        • Terrorism fears associate Muslims with terrorism</p>`
            },
            {
              title: '🤝 Combating Racism',
              content: `<p class="lz-prose">• Education: learning accurate history, exposing bias<br>
                        • Diversity training in workplaces, schools<br>
                        • Personal relationships – cross‑racial friendships<br>
                        • Representation – diverse voices in media, politics<br>
                        • Policy reform – addressing systemic discrimination</p>`
            },
          ])}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Immigration', link: `${BASE}/themen/usa/immigration` },
            next: { label: 'Security & Freedom', link: `${BASE}/themen/usa/security-freedom` },
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