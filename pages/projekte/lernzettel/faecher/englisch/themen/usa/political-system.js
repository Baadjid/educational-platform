// pages/projekte/lernzettel/faecher/englisch/themen/usa/political-system.js
// USA – Kapitel 9: Political System

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

export default class PoliticalSystemPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-usa-political';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 9</span>
            <i class="fas fa-chevron-right"></i><span>Political System</span>
          </div>
          <h1 class="lz-sub-title">
            US Political System<br><em>Checks, Balances & Elections</em>
          </h1>
          <p class="lz-sub-desc">
            Checks and balances · Presidency · Electoral College · Congress · Democrats vs. Republicans ·
            Obama · Trump · Biden/Harris
          </p>
          ${renderTags(['USA', 'Political System', 'Constitution', 'Elections'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('9.1 Checks and Balances')}
          <h2 class="lz-h2 reveal">Separate Branches, Shared Powers</h2>
          <p class="lz-prose reveal">
            The US Constitution divides power among three branches: <strong>Legislative</strong> (Congress),
            <strong>Executive</strong> (President), and <strong>Judicial</strong> (Courts). Each branch checks
            the others to prevent tyranny.
          </p>
          ${renderTable({
            headers: ['Branch', 'Main Powers', 'Checks on Others'],
            rows: [
              ['Congress', 'Makes laws, declares war, controls budget', 'Can override veto; approves judicial/executive appointments; can impeach'],
              ['President', 'Enforces laws, commands military, vetoes legislation', 'Vetoes bills; appoints judges; can pardon'],
              ['Courts', 'Interprets laws, judicial review', 'Can declare laws unconstitutional; lifetime tenure protects independence'],
            ],
          })}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-scale-balanced',
            title: 'Purpose and Modern Issues',
            body: '• Prevents any single branch from becoming too powerful<br>• Requires cooperation and compromise – but can lead to gridlock<br>• Increased executive power (executive orders, national security)<br>• Partisan polarization makes compromise difficult'
          })}

          ${renderSubhead('9.2 How to Become President')}
          ${renderSubhead('9.3 Problems of the Electoral System')}
          <h2 class="lz-h2 reveal">The Path to the White House</h2>
          <p class="lz-prose reveal">
            Requirements: natural‑born citizen, at least 35 years old, resident for 14+ years. Limited to two
            4‑year terms (22nd Amendment). The election process involves primaries, national conventions, the
            general campaign, and the Electoral College.
          </p>
          ${renderAccordion([
            {
              title: '🗳️ The Electoral College',
              content: `<p class="lz-prose">• 538 electors (based on congressional representation)<br>
                        • Winner‑take‑all in most states (except Maine and Nebraska)<br>
                        • Candidate needs 270 electoral votes to win</p>`
            },
            {
              title: '⚠️ Problems of the Electoral System',
              content: `<p class="lz-prose">• Can win presidency without popular vote (happened 5 times: 1824, 1876, 1888, 2000, 2016)<br>
                        • Focus on “swing states” – safe states ignored<br>
                        • Small states have disproportionate power (overrepresentation)<br>
                        • Winner‑take‑all wastes votes for losing party<br>
                        • <strong>Other problems:</strong> Campaign costs billions (Citizens United ruling allows unlimited donations); gerrymandering of congressional districts; voter suppression (ID laws, polling place closures); low turnout (60‑65% in presidential elections)</p>`
            },
          ])}

          ${renderSubhead('9.4 Congress')}
          <h2 class="lz-h2 reveal">The Legislative Branch</h2>
          ${renderTable({
            headers: ['Chamber', 'Members', 'Term', 'Special Powers'],
            rows: [
              ['House of Representatives', '435', '2 years', 'Initiates revenue bills; impeaches officials'],
              ['Senate', '100 (2 per state)', '6 years (staggered)', 'Approves treaties and appointments; conducts impeachment trials'],
            ],
          })}
          <p class="lz-prose reveal">
            <strong>Problems:</strong> Gridlock (partisan polarization), low approval ratings (often below 20%),
            safe seats reduce accountability, influence of money and lobbying.
          </p>

          ${renderSubhead('9.5 Democrats')}
          ${renderSubhead('9.6 Republicans')}
          <h2 class="lz-h2 reveal">The Two Major Parties</h2>
          ${renderTable({
            headers: ['Democrats', 'Republicans'],
            rows: [
              ['Economic: Higher taxes on wealthy, stronger safety net, regulate business', 'Economic: Lower taxes, less regulation, free market'],
              ['Social: LGBTQ+ rights, pro‑choice, gun control, racial justice', 'Social: Traditional values, pro‑life, gun rights, law and order'],
              ['Environment: Climate action, renewable energy', 'Environment: Skeptical of climate urgency, support fossil fuels'],
              ['Healthcare: Expand coverage, support ACA, public option', 'Healthcare: Market‑based, oppose government‑run systems'],
              ['Base: Minorities, young voters, urban, college‑educated', 'Base: White voters, rural, older, evangelical Christians'],
            ],
          })}

          ${renderSubhead('9.7 Barack Obama (2009‑2017)')}
          <h2 class="lz-h2 reveal">The First African American President</h2>
          ${renderVTimeline([
            { year: '2008', title: 'Elected', text: 'Defeated John McCain; historic first Black president' },
            { year: '2010', title: 'Affordable Care Act', text: 'Expanded health coverage to 20+ million' },
            { year: '2011', title: 'Osama bin Laden killed', text: 'Navy SEALs raid in Pakistan' },
            { year: '2012', title: 'Re‑elected', text: 'Defeated Mitt Romney' },
            { year: '2015', title: 'Paris Climate Agreement', text: 'Committed US to emissions reductions' },
            { year: '2017', title: 'Left office', text: 'High approval ratings, but faced Republican obstruction' },
          ])}
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-check-circle',
            title: 'Legacy',
            body: '• Affordable Care Act (Obamacare)<br>• Economic recovery from Great Recession<br>• Ended Iraq War, authorized bin Laden raid<br>• Iran nuclear deal (JCPOA)<br>• Still very popular among Democrats'
          })}

          ${renderSubhead('9.8 Donald Trump (2017‑2021)')}
          <h2 class="lz-h2 reveal">The Outsider President</h2>
          ${renderVTimeline([
            { year: '2016', title: 'Elected', text: 'Defeated Hillary Clinton; won Electoral College despite losing popular vote' },
            { year: '2017', title: 'Tax Cuts and Jobs Act', text: 'Major tax reform' },
            { year: '2018‑2020', title: 'Trade war with China', text: 'Tariffs on Chinese goods' },
            { year: '2019', title: 'First impeachment', text: 'Abuse of power (Ukraine) – acquitted by Senate' },
            { year: '2020', title: 'COVID‑19 pandemic', text: 'Economic shutdown, Operation Warp Speed for vaccines' },
            { year: '2021', title: 'Second impeachment', text: 'Inciting January 6 Capitol riot – acquitted again' },
          ])}
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-exclamation-triangle',
            title: 'Controversies and Legacy',
            body: '• “Make America Great Again” – populist, anti‑establishment message<br>• Conservative judges – appointed three Supreme Court justices (Gorsuch, Kavanaugh, Barrett)<br>• Criminal justice reform (First Step Act)<br>• Withdrew from Paris Agreement and Iran nuclear deal<br>• Denied 2020 election results, leading to January 6 attack<br>• Transformed the Republican Party'
          })}

          ${renderSubhead('9.9 Joe Biden and Kamala Harris (2021‑present)')}
          <h2 class="lz-h2 reveal">Restoring Alliances and Domestic Investment</h2>
          ${renderVTimeline([
            { year: '2020', title: 'Elected', text: 'Defeated Trump; Kamala Harris first woman, Black, and South Asian VP' },
            { year: '2021', title: 'American Rescue Plan', text: '$1.9 trillion COVID relief' },
            { year: '2021', title: 'Infrastructure Investment and Jobs Act', text: 'Bipartisan infrastructure bill' },
            { year: '2022', title: 'Inflation Reduction Act', text: 'Climate and healthcare investment' },
            { year: '2022', title: 'CHIPS and Science Act', text: 'Boost domestic semiconductor production' },
            { year: '2022‑present', title: 'Ukraine support', text: 'Massive military and economic aid' },
          ])}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-handshake',
            title: 'Key Priorities',
            body: '• “America is back” – rejoined Paris Agreement, strengthened NATO<br>• Economic agenda focused on manufacturing, clean energy, and middle class<br>• Challenges: Inflation, border crisis, low approval ratings, age concerns'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Social Welfare', link: `${BASE}/themen/usa/social-welfare` },
            next: { label: 'Religion', link: `${BASE}/themen/usa/religion` },
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