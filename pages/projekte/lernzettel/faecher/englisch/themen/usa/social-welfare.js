// pages/projekte/lernzettel/faecher/englisch/themen/usa/social-welfare.js
// USA – Kapitel 8: Social Welfare

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

export default class SocialWelfarePage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-usa-welfare';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 8</span>
            <i class="fas fa-chevron-right"></i><span>Social Welfare</span>
          </div>
          <h1 class="lz-sub-title">
            Social Welfare<br><em>in the United States</em>
          </h1>
          <p class="lz-sub-desc">
            American individualism · Healthcare system · Affordable Care Act
          </p>
          ${renderTags(['USA', 'Social Welfare', 'Healthcare', 'Individualism'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('8.1 Help Yourself – an American Point of View')}
          <h2 class="lz-h2 reveal">Individualism and Self‑Reliance</h2>
          <p class="lz-prose reveal">
            American attitudes toward welfare are shaped by core cultural values: <strong>individualism</strong>,
            <strong>self‑reliance</strong>, <strong>work ethic</strong>, and belief in the <strong>American Dream</strong>.
            There is often a stigma attached to accepting government help, with concerns about “welfare dependency.”
          </p>
          ${renderTable({
            headers: ['Value', 'Description'],
            rows: [
              ['Individualism', 'Personal responsibility for one’s own success or failure'],
              ['Self‑Reliance', 'Independence, not depending on others or the state'],
              ['Work Ethic', 'Hard work should be rewarded; idleness is discouraged'],
              ['American Dream', 'Anyone can succeed through effort and talent'],
            ],
          })}
          ${renderAccordion([
            {
              title: '🇺🇸 American Exceptionalism in Welfare',
              content: `<p class="lz-prose">• Smaller welfare state than other developed nations<br>
                        • Less generous benefits (unemployment, family support)<br>
                        • More private solutions (employer‑based health insurance, 401k retirement plans)<br>
                        • Greater emphasis on charity and volunteerism (e.g., religious organizations, food banks)<br>
                        • Distinction between “deserving” poor (disabled, elderly) and “undeserving” poor (able‑bodied adults)</p>`
            },
            {
              title: '🤔 Contradictions',
              content: `<p class="lz-prose">• Many Americans receive government help but don’t see it as “welfare” (e.g., Social Security, Medicare, mortgage interest deduction)<br>
                        • Corporate welfare less controversial than aid to individuals<br>
                        • Structural barriers (racism, geography, education) often beyond individual control<br>
                        • Success depends heavily on family background, not just effort</p>`
            },
          ])}

          ${renderSubhead('8.2 Health Care')}
          <h2 class="lz-h2 reveal">The Most Expensive System in the World</h2>
          <p class="lz-prose reveal">
            The United States has a hybrid public‑private healthcare system. Most Americans get insurance through
            their employers. It is the most expensive system in the world ($12,000+ per person annually) – yet
            the only developed nation without universal coverage.
          </p>
          ${renderTable({
            headers: ['Program', 'Coverage', 'Since'],
            rows: [
              ['Medicare', '65+ and disabled', '1965'],
              ['Medicaid', 'Low‑income individuals and families', '1965'],
              ['ACA (Obamacare)', 'Subsidized private plans for those without employer coverage', '2010'],
              ['Employer‑sponsored', 'Most working Americans', '–'],
              ['Uninsured', '~8% of population (down from 18% pre‑ACA)', '–'],
            ],
          })}
          ${renderAccordion([
            {
              title: '⚠️ Major Problems',
              content: `<p class="lz-prose">• <strong>Cost:</strong> Medical bills leading cause of bankruptcy<br>
                        • <strong>Access:</strong> Millions still uninsured or underinsured<br>
                        • <strong>Quality:</strong> Lower life expectancy than comparable countries<br>
                        • <strong>Complexity:</strong> Bureaucracy of multiple insurers, networks, formularies</p>`
            },
            {
              title: '📜 The Affordable Care Act (“Obamacare”)',
              content: `<p class="lz-prose">• Signed into law in 2010<br>
                        • 20+ million gained coverage<br>
                        • Cannot deny coverage for pre‑existing conditions<br>
                        • Young adults can stay on parents’ plan until 26<br>
                        • Subsidized marketplace plans for low‑income individuals<br>
                        • Medicaid expansion in many states<br>
                        • Still politically controversial – survived multiple repeal attempts</p>`
            },
            {
              title: '💬 Current Debates',
              content: `<p class="lz-prose">• <strong>Medicare for All:</strong> Single‑payer system (proposed by progressives)<br>
                        • <strong>Public Option:</strong> Government plan competing with private insurers<br>
                        • <strong>Drug Prices:</strong> Allowing Medicare to negotiate lower prices<br>
                        • Deep partisan divisions – Democrats generally support expanding coverage, Republicans favor market‑based solutions</p>`
            },
          ])}
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-heartbeat',
            title: 'Key Fact',
            body: 'The US spends nearly 18% of GDP on healthcare – more than any other country – yet ranks poorly on health outcomes: lower life expectancy, higher infant mortality, and higher avoidable death rates compared to peer nations.'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Economy', link: `${BASE}/themen/usa/economy` },
            next: { label: 'Political System', link: `${BASE}/themen/usa/political-system` },
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