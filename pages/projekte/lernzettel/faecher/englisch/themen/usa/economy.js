// pages/projekte/lernzettel/faecher/englisch/themen/usa/economy.js
// USA – Kapitel 7: Economy

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
  renderVTimeline,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class EconomyPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-usa-economy';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 7</span>
            <i class="fas fa-chevron-right"></i><span>Economy</span>
          </div>
          <h1 class="lz-sub-title">
            US Economy<br><em>Boom, Bust, and Recovery</em>
          </h1>
          <p class="lz-sub-desc">
            Roaring Twenties · Great Depression · New Deal · 2008 Financial Crisis · Current Problems
          </p>
          ${renderTags(['USA', 'Economy', 'Great Depression', '2008 Crisis'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('7.1 The Roaring Twenties and the Great Depression')}
          <h2 class="lz-h2 reveal">From Boom to Bust</h2>
          <p class="lz-prose reveal">
            The 1920s were a period of economic boom, mass consumption, new technologies (automobiles, radio),
            and stock market speculation. However, growing inequality and risky speculation created a bubble.
          </p>
          ${renderVTimeline([
            { year: 'October 1929', title: 'Stock Market Crash', text: 'Black Thursday (Oct 24) and Black Tuesday (Oct 29) – billions lost' },
            { year: '1929‑1933', title: 'Bank Failures', text: '9,000 banks failed; credit dried up' },
            { year: '1933', title: 'Great Depression Peak', text: '25% unemployment, industrial production dropped 50%' },
          ])}
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-chart-line',
            title: 'The Great Depression (1929‑1939)',
            body: '• Widespread poverty, hunger, homelessness<br>• Dust Bowl environmental disaster worsened rural suffering<br>• Worst economic crisis in American history<br>• Led to fundamental changes in government’s role'
          })}

          ${renderSubhead('7.2 Roosevelt\'s New Deal')}
          <h2 class="lz-h2 reveal">A New Role for Government</h2>
          <p class="lz-prose reveal">
            President Franklin D. Roosevelt’s New Deal (1933‑1939) aimed at “Relief, Recovery, Reform.” It
            dramatically expanded the federal government’s role in the economy.
          </p>
          ${renderAccordion([
            {
              title: '🏛️ Key Programs',
              content: `<p class="lz-prose">• <strong>CCC</strong> – Civilian Conservation Corps: jobs in conservation<br>
                        • <strong>WPA</strong> – Works Progress Administration: public works jobs (roads, bridges, art)<br>
                        • <strong>Social Security (1935)</strong> – old‑age pensions, unemployment insurance<br>
                        • <strong>FDIC</strong> – bank deposit insurance (prevents bank runs)<br>
                        • <strong>SEC</strong> – Securities and Exchange Commission (regulates stock market)<br>
                        • <strong>Fair Labor Standards Act</strong> – minimum wage, 40‑hour week<br>
                        • <strong>Union rights</strong> – protected collective bargaining (Wagner Act)</p>`
            },
            {
              title: '📈 Legacy',
              content: `<p class="lz-prose">• Didn’t end the Depression (WWII did)<br>
                        • Transformed government’s role – created the welfare state and safety net<br>
                        • Social Security, FDIC, SEC remain<br>
                        • Established principle of government responsibility for economic stability</p>`
            },
          ])}

          ${renderSubhead('7.3 The Financial Crisis in 2008')}
          <h2 class="lz-h2 reveal">The Great Recession</h2>
          <p class="lz-prose reveal">
            The 2008 financial crisis was the deepest recession since the Great Depression. It was caused by a
            housing bubble, subprime mortgages, securitization, deregulation, and excessive risk‑taking by banks.
          </p>
          ${renderVTimeline([
            { year: 'March 2008', title: 'Bear Stearns collapses', text: 'Rescued by JP Morgan with Fed support' },
            { year: 'September 2008', title: 'Lehman Brothers bankruptcy', text: 'Triggered global panic' },
            { year: '2008‑2009', title: 'Stock market plunge', text: 'S&P 500 dropped 40%' },
            { year: '2009‑2010', title: 'Great Recession', text: 'Unemployment peaked at 10%' },
          ])}
          ${renderAccordion([
            {
              title: '💰 Government Response',
              content: `<p class="lz-prose">• <strong>TARP</strong> ($700 billion) – bank bailout program<br>
                        • <strong>Federal Reserve actions</strong> – zero interest rates, quantitative easing<br>
                        • <strong>Auto bailout</strong> – saved GM and Chrysler<br>
                        • <strong>Stimulus (2009)</strong> – $787 billion spending (Obama)<br>
                        • <strong>Dodd‑Frank Act (2010)</strong> – financial regulation reform (Volcker Rule, Consumer Financial Protection Bureau)</p>`
            },
            {
              title: '⚖️ Controversies',
              content: `<p class="lz-prose">• “Too big to fail” – banks bailed out, homeowners foreclosed<br>
                        • Few executives held accountable<br>
                        • Widened wealth inequality<br>
                        • Occupy Wall Street protests (2011) highlighted inequality</p>`
            },
          ])}

          ${renderSubhead('7.4 Current Problems of the American Economy')}
          <h2 class="lz-h2 reveal">Challenges Today</h2>
          ${renderTable({
            headers: ['Problem', 'Description'],
            rows: [
              ['Income Inequality', 'Top 1% owns 40% of wealth; bottom 50% owns 2%'],
              ['National Debt', 'Over $34 trillion (>100% of GDP)'],
              ['Manufacturing Decline', 'Jobs moved overseas or lost to automation'],
              ['Healthcare Costs', '18% of GDP – highest in world'],
              ['Student Debt', '$1.7 trillion total burden'],
              ['Infrastructure', 'Aging, needs modernization'],
              ['Gig Economy', 'Less job security, fewer benefits'],
              ['Trade Debates', 'Globalization benefits vs. job losses'],
              ['Climate Impact', 'Extreme weather, transition costs'],
            ],
          })}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-chart-pie',
            title: 'Key Statistics',
            body: '• GDP: ~$27 trillion (largest economy)<br>• Unemployment: historically low (~3.7%) but with underemployment<br>• Inflation: has moderated from 2022 peak but still above target<br>• Labor force participation: below pre‑pandemic levels'
          })}
          <p class="lz-prose reveal">
            Despite these challenges, the US economy remains the world’s largest and most innovative, with strong
            consumer spending, technological leadership, and a resilient labor market. However, addressing
            inequality, debt, and climate change will be critical for long‑term prosperity.
          </p>

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Foreign Policy', link: `${BASE}/themen/usa/foreign-policy` },
            next: { label: 'Social Welfare', link: `${BASE}/themen/usa/social-welfare` },
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