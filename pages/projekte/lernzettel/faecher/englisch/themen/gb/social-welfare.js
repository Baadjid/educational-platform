// pages/projekte/lernzettel/faecher/englisch/themen/gb/social-welfare.js
// Great Britain – Kapitel 18 / 2.8: Social Welfare

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
const WELFARE_TABS = [
  { key: 'benefits', label: '💰 Current Benefits' },
  { key: 'debate',   label: '🏛️ Political Debate' },
];

const NHS_TABS = [
  { key: 'structure', label: '🏥 Structure' },
  { key: 'crisis',    label: '⚠️ Current Crisis' },
  { key: 'compare',   label: '🌍 International Comparison' },
];

export default class SocialWelfareGbPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-gb-welfare';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 18</span>
            <i class="fas fa-chevron-right"></i><span>Social Welfare</span>
          </div>
          <h1 class="lz-sub-title">Social Welfare<br><em>in Great Britain</em></h1>
          <p class="lz-sub-desc">The Welfare State · The National Health Service (NHS) · Austerity · Debates</p>
          ${renderTags(['Welfare State', 'NHS', 'Beveridge', 'Austerity', 'Social Policy'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-baby', title: '"Cradle to Grave"', text: 'The founding principle: the state supports citizens from birth to death. Every person, regardless of wealth, is entitled to basic security.' },
            { icon: 'fas fa-file-alt', title: 'Beveridge Report (1942)', text: 'Wartime blueprint for the welfare state. Identified five "Giant Evils" to be slain: Want, Disease, Ignorance, Squalor, and Idleness.' },
            { icon: 'fas fa-hospital', title: 'NHS Founded 1948', text: 'The National Health Service — free healthcare for all at the point of use. Arguably Britain\'s greatest post-war achievement.' },
            { icon: 'fas fa-scissors', title: 'Austerity 2010–2019', text: '£37 billion cut from welfare spending. Real-terms cuts to benefits, NHS, social care. Food bank use rose 2,400% over the decade.' },
          ])}

          ${renderSubhead('18.1 The Welfare State')}
          <h2 class="lz-h2 reveal">Beveridge's Five Giant Evils</h2>
          <p class="lz-prose reveal">
            The British <strong>welfare state</strong> was created after World War Two, based on the
            <strong>Beveridge Report (1942)</strong>. Sir William Beveridge identified five "Giant Evils"
            that the post-war state must slay. The Attlee Labour government (1945–51) implemented them
            comprehensively — one of the most radical peacetime transformations of any democracy.
          </p>

          ${renderTable({
            headers: ['Giant Evil', 'Modern Equivalent', 'Policy Response'],
            rows: [
              ['Want (Poverty)', 'Income poverty, food banks, homelessness', 'National Insurance, Universal Credit, pension, child benefit'],
              ['Disease (Ill Health)', 'NHS crisis, mental health epidemic', 'National Health Service (free at point of use)'],
              ['Ignorance (Lack of Education)', 'Skills gaps, educational inequality', 'Free compulsory education; later: university expansion'],
              ['Squalor (Poor Housing)', 'Housing crisis, homelessness', 'Council housing programme (built 1 million homes in 5 years)'],
              ['Idleness (Unemployment)', 'Long-term unemployment, precarious work', 'Jobseeker\'s Allowance, active labour market policies'],
            ],
          })}

          ${renderVTimeline([
            { year: '1942', title: 'Beveridge Report', text: '"Social Insurance and Allied Services" — bestseller. 635,000 copies sold. Blueprint for post-war social policy.' },
            { year: '1945', title: 'Labour landslide', text: 'Attlee\'s Labour wins despite Churchill\'s war leadership — voters wanted social change, not a return to pre-war inequality.' },
            { year: '1945–51', title: 'Welfare State Created', text: 'NHS, National Insurance, National Assistance, housing programme, education reform — all implemented in 6 years.' },
            { year: '1948', title: 'NHS founded', text: 'July 5, 1948 — Health Minister Aneurin ("Nye") Bevan opens the NHS. Free healthcare for all.' },
            { year: '1979–90', title: 'Thatcher: Retrenchment', text: 'Means-testing, privatisation, reduced state role. "There is no such thing as society." Benefits tightened; council houses sold.' },
            { year: '1997–2010', title: 'New Labour: Third Way', text: 'Blair: investment with conditionality. Sure Start centres, tax credits, minimum wage. Child poverty cut significantly.' },
            { year: '2010–19', title: 'Coalition/Conservative Austerity', text: '£37bn in welfare cuts. Universal Credit introduced (troubled). Food bank use explodes. UN rapporteur condemns "poverty" in UK.' },
            { year: '2020', title: 'COVID-19 and Furlough', text: 'Furlough scheme supported 11 million jobs — an extraordinary expansion of state support. Showed the welfare state can be expanded rapidly when political will exists.' },
          ])}

          <nav class="wim-tabs" id="welfare-tabs" aria-label="Welfare benefits">
            ${WELFARE_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelWelfareBenefits()}
          ${this._panelWelfareDebate()}

          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-exclamation-triangle',
            title: 'The Austerity Debate',
            body: 'The 2010–19 austerity programme cut welfare spending by £37 billion. UN Special Rapporteur on Poverty (2019): "14 million people in poverty in the UK … a staggering number … austerity could have been done differently." Government defended cuts as fiscally necessary. Critics: austerity is a political choice, not an economic necessity. Life expectancy improvements stalled; food bank use grew 2,400%.'
          })}

          ${renderSubhead('18.2 The National Health Service (NHS)')}
          <h2 class="lz-h2 reveal">Britain's Most Beloved Institution</h2>
          <p class="lz-prose reveal">
            The NHS was established on <strong>July 5, 1948</strong> by Health Minister
            <strong>Aneurin Bevan</strong>. Its founding principles — still formally intact — are:
            <strong>free at the point of use, universal, and comprehensive</strong>.
            It was the first system in the world to offer free healthcare to the entire population.
          </p>

          ${renderMerkboxGrid([
            { icon: 'fas fa-user-md', title: '1.3 Million Staff', text: 'NHS England alone employs 1.3 million people — the world\'s fifth-largest employer and Britain\'s largest by far.' },
            { icon: 'fas fa-pound-sign', title: '£182 Billion', text: 'Total NHS budget for England in 2023/24. About 40% of all public spending.' },
            { icon: 'fas fa-calendar-times', title: '7.5 Million Waiting', text: 'Record NHS waiting list in 2024 — 7.5 million people waiting for treatment, up from 4.5 million pre-COVID.' },
            { icon: 'fas fa-heart', title: '96% Support', text: 'Regular polling shows ~96% of British people want to keep the NHS as a publicly funded system. The most popular institution in the country.' },
          ])}

          <nav class="wim-tabs" id="nhs-tabs" aria-label="NHS">
            ${NHS_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelNHSStructure()}
          ${this._panelNHSCrisis()}
          ${this._panelNHSCompare()}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Religion in Britain', link: `${BASE}/themen/gb/religion` },
            next: { label: 'Economy', link: `${BASE}/themen/gb/economy` },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelWelfareBenefits() {
    return `
      <div class="wim-category" data-wim-cat="benefits">
        ${renderTable({ headers: ['Benefit', 'Who', 'Amount (approx. 2024)'], rows: [
          ['Universal Credit', 'Working-age unemployed/low-income (replaced 6 benefits)', '£368–617/month + housing element'],
          ['State Pension', 'Retired (men 66+, women 66+)', '£221.20/week (full new state pension)'],
          ['Child Benefit', 'Families with children under 16', '£25.60/week for first child'],
          ['Housing Benefit (UC housing)', 'Help with rent for low-income', 'Varies by area'],
          ['Disability Benefits (PIP)', 'People with disabilities', '£28.70–108.55/week'],
          ['Jobseeker\'s Allowance', 'For those not qualifying for UC', '£84.80/week'],
        ]})}
      </div>
    `;
  }

  _panelWelfareDebate() {
    return `
      <div class="wim-category hidden" data-wim-cat="debate">
        ${renderCompare({
          titleA: '🔵 Conservative View', titleB: '🔴 Labour/Left View',
          listA: ['"Welfare trap" — benefits discourage work', 'Individual responsibility; not state dependency', 'Universal Credit: rationalise the system', 'Means-testing: target those who really need it', 'Reduce benefits to balance the budget', 'Private sector more efficient than state'],
          listB: ['Benefits too low to live on — dignity crisis', 'Structural unemployment: system failure, not individual failure', 'Austerity harmed the most vulnerable', 'Universal benefits: remove stigma, ensure coverage', 'Invest in welfare as economic stimulus', 'Welfare state is a mark of civilised society'],
        })}
      </div>
    `;
  }

  _panelNHSStructure() {
    return `
      <div class="wim-category" data-wim-cat="structure">
        ${renderTable({ headers: ['Level', 'Service', 'Details'], rows: [
          ['Primary Care', 'GPs (General Practitioners)', 'First point of contact; free to register; referral system gates secondary care'],
          ['Secondary Care', 'Hospital specialists', 'NHS hospitals; A&E; surgery; specialist consultants'],
          ['Mental Health', 'NHS Trusts + charities', 'Historically underfunded; IAPT (Improving Access to Psychological Therapies)'],
          ['Dentistry', 'NHS dentists', 'Charges apply (subsidised); shortage of NHS dentists acute'],
          ['Prescriptions', 'GPs prescribe', 'England: £9.90 per item (many exemptions); free in Scotland, Wales, NI'],
          ['Structure', 'NHS England (oversight)', 'Separate systems: NHS Scotland, NHS Wales, HSC Northern Ireland'],
        ]})}
      </div>
    `;
  }

  _panelNHSCrisis() {
    return `
      <div class="wim-category hidden" data-wim-cat="crisis">
        ${renderAccordion([
          { title: 'Staff Shortages', content: '<p class="lz-prose">NHS England short of 154,000 staff (2023). Nurses leave for better pay abroad or to the private sector. Brexit ended free movement of EU healthcare workers. Many doctors emigrate to Australia, Canada, the USA for better pay and working conditions. NHS depends on overseas recruitment — especially from India and the Philippines.</p>' },
          { title: 'Waiting Lists', content: '<p class="lz-prose">7.5 million on waiting lists (2024) — one in eight people. Some waiting 18+ months for routine surgery. A&E waiting times at record highs. "Corridor care" — patients treated in corridors for lack of beds. The longest waiting times since the NHS was founded.</p>' },
          { title: 'Mental Health Crisis', content: '<p class="lz-prose">Mental health spending historically 11% of NHS budget despite representing 23% of disease burden. 1 in 4 people experience mental health problems. Young people especially: 1 in 6 children has a probable mental health disorder (2023, up from 1 in 9 in 2017). CAMHS (Children and Adolescent Mental Health Services) under severe pressure.</p>' },
          { title: 'Privatisation Concerns', content: '<p class="lz-prose">Increasing use of private providers for NHS-funded treatment. Health & Social Care Act (2012, Lansley reforms) required NHS services to be put out to competitive tender. Critics: this is "backdoor privatisation." Post-2024, Wes Streeting (Health Secretary) has signalled more private sector use to clear backlogs — controversial within Labour.</p>' },
        ])}
      </div>
    `;
  }

  _panelNHSCompare() {
    return `
      <div class="wim-category hidden" data-wim-cat="compare">
        ${renderTable({ headers: ['System', 'Country', 'Key Features', 'Strengths / Weaknesses'], rows: [
          ['NHS (Beveridge)', 'UK, Spain, Italy', 'Tax-funded, free at point of use', '✅ Universal, cheap to admin. ❌ Underinvestment, waiting lists.'],
          ['Social Insurance (Bismarck)', 'Germany, France', 'Employment-based contributions, statutory insurance funds', '✅ Good quality, patient choice. ❌ Complex, self-employed gaps.'],
          ['Private Insurance', 'USA', 'Market-based, employer-provided', '✅ Fast for those insured. ❌ 30M uninsured; bankruptcies; most expensive in world.'],
          ['Mixed', 'Australia, Canada', 'Public base + private top-up', '✅ Balance of access and quality. ❌ Inequality between public/private.'],
        ]})}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-chart-bar', title: 'NHS vs USA', body: 'The UK spends ~10% of GDP on healthcare; the USA ~17%. Yet the USA has lower life expectancy, higher infant mortality, and 30 million uninsured. The NHS achieves similar or better outcomes at roughly 60% of the cost per capita — but American advocates for "socialised medicine" point to the UK\'s waiting lists as a warning.' })}
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