// pages/projekte/lernzettel/faecher/englisch/themen/usa/security-freedom.js
// USA – Kapitel 5: Security and Freedom

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

export default class SecurityFreedomPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-usa-security';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 5</span>
            <i class="fas fa-chevron-right"></i><span>Security & Freedom</span>
          </div>
          <h1 class="lz-sub-title">
            Security & Freedom<br><em>in the USA</em>
          </h1>
          <p class="lz-sub-desc">
            9/11 · Patriot Act · NSA Scandal · Gun Control · Crime
          </p>
          ${renderTags(['USA', 'Security', 'Freedom', '9/11'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('5.1 Nine Eleven (9/11)')}
          <h2 class="lz-h2 reveal">The Attacks and Their Aftermath</h2>
          <p class="lz-prose reveal">
            On September 11, 2001, 19 al‑Qaeda terrorists hijacked four commercial airplanes. American Airlines
            Flight 11 and United Airlines Flight 175 struck the World Trade Center towers. American Airlines Flight 77
            hit the Pentagon. United Airlines Flight 93 crashed in Pennsylvania after passengers fought the hijackers.
            2,977 people were killed – the deadliest terrorist attack in world history.
          </p>
          ${renderVTimeline([
            { year: '8:46 AM', title: 'North Tower hit', text: 'American Airlines Flight 11' },
            { year: '9:03 AM', title: 'South Tower hit', text: 'United Airlines Flight 175' },
            { year: '9:37 AM', title: 'Pentagon hit', text: 'American Airlines Flight 77' },
            { year: '10:03 AM', title: 'Flight 93 crashes', text: 'Passengers overwhelmed hijackers' },
          ])}
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-tower-cell',
            title: 'Long‑term Consequences',
            body: '• Afghanistan War (2001‑2021) – overthrew Taliban<br>• Iraq War (2003‑2011) – controversial invasion based on false WMD claims<br>• Department of Homeland Security created<br>• Surveillance expansion (Patriot Act, NSA)<br>• Islamophobia and discrimination against Muslims<br>• TSA and airport security transformed'
          })}

          ${renderSubhead('5.2 The Patriot Act')}
          <h2 class="lz-h2 reveal">Security vs. Civil Liberties</h2>
          <p class="lz-prose reveal">
            Passed 45 days after 9/11 with minimal debate. The Patriot Act expanded government surveillance powers
            significantly.
          </p>
          ${renderAccordion([
            {
              title: '🔍 Key Provisions',
              content: `<p class="lz-prose">• Expanded surveillance – easier wiretapping, email monitoring<br>
                        • National Security Letters – FBI can demand records without court order<br>
                        • Business records access – library, medical, financial records<br>
                        • Immigration detention – indefinite detention of non‑citizens</p>`
            },
            {
              title: '✅ Supporters’ Arguments',
              content: `<p class="lz-prose">• Necessary to prevent another 9/11<br>
                        • Modernizes laws for the digital age<br>
                        • Successfully prevented attacks</p>`
            },
            {
              title: '❌ Critics’ Arguments',
              content: `<p class="lz-prose">• Privacy violations – infringes on Fourth Amendment<br>
                        • Lack of oversight – too much power, little review<br>
                        • Mission creep – powers used beyond terrorism</p>`
            },
          ])}

          ${renderSubhead('5.3 The NSA Scandal')}
          <h2 class="lz-h2 reveal">Edward Snowden’s Revelations (2013)</h2>
          <p class="lz-prose reveal">
            Former NSA contractor Edward Snowden leaked documents revealing extensive surveillance programs.
          </p>
          ${renderInfobox({
            type: 'danger',
            icon: 'fas fa-database',
            title: 'What Was Revealed',
            body: '• PRISM program – direct access to tech company data (Google, Facebook, Apple)<br>• Phone metadata – NSA collected millions of phone records<br>• Spying on foreign leaders, including Angela Merkel<br>• Mass surveillance affecting hundreds of millions worldwide'
          })}
          <p class="lz-prose reveal">
            <strong>Consequences:</strong> The USA Freedom Act (2015) ended bulk phone metadata collection.
            Tech companies increased encryption. Snowden was charged with espionage and fled to Russia.
          </p>

          ${renderSubhead('5.4 Gun Control')}
          <h2 class="lz-h2 reveal">The Second Amendment Debate</h2>
          <div class="lz-quote" style="margin:1rem 0;">
            <p>“A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.” – Second Amendment</p>
          </div>
          ${renderTable({
            headers: ['Statistics', 'Value'],
            rows: [
              ['Civilian‑owned guns', '393 million (more than people)'],
              ['Annual gun deaths', '45,000+'],
              ['Mass shootings', 'Regular occurrence'],
              ['School shootings', 'Uniquely American phenomenon'],
            ],
          })}
          ${renderAccordion([
            {
              title: '🔫 Arguments For Gun Rights',
              content: `<p class="lz-prose">• Constitutional right (Second Amendment)<br>
                        • Self‑defense – protect home and family<br>
                        • Deterrent to tyranny – armed populace prevents oppression<br>
                        • Other factors (mental health, culture) – not guns themselves</p>`
            },
            {
              title: '🛡️ Arguments For Gun Control',
              content: `<p class="lz-prose">• Public safety – reduce gun deaths<br>
                        • International comparison – stricter laws = fewer deaths<br>
                        • Mass shootings – military weapons enable massacres<br>
                        • Suicide prevention – guns make attempts more lethal</p>`
            },
            {
              title: '📜 Proposed Regulations',
              content: `<p class="lz-prose">• Universal background checks – close private sale loophole<br>
                        • Assault weapons ban – prohibit military‑style rifles<br>
                        • Red flag laws – remove guns from dangerous people</p>`
            },
          ])}
          <p class="lz-prose reveal">
            <strong>Political landscape:</strong> The NRA is a powerful gun rights lobby. Democrats generally support
            more regulations; Republicans generally oppose restrictions. After mass shootings, momentum for reform
            usually fades.
          </p>

          ${renderSubhead('5.5 Crime')}
          <h2 class="lz-h2 reveal">Crime Rates and Mass Incarceration</h2>
          <p class="lz-prose reveal">
            Crime rates peaked in the 1990s, then dramatically decreased (the “Great Crime Decline”). However,
            the United States has the highest incarceration rate in the world – 2.3 million people incarcerated.
          </p>
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-prison',
            title: 'Mass Incarceration',
            body: '• War on Drugs – main driver since 1980s<br>• Racial disparities – African Americans and Hispanics disproportionately imprisoned<br>• Costs – $80+ billion annually'
          })}
          ${renderAccordion([
            {
              title: '⚖️ Criminal Justice Reform',
              content: `<p class="lz-prose"><strong>“Tough on Crime” vs Reform Approach:</strong><br>
                        • Rehabilitation vs. punishment debate<br>
                        • Reduce incarceration for non‑violent offenses<br>
                        • Drug treatment instead of prison<br>
                        • End cash bail</p>`
            },
            {
              title: '📈 Recent Reforms',
              content: `<p class="lz-prose">• First Step Act (2018) – reduced some federal sentences<br>
                        • Marijuana legalization – reducing drug arrests<br>
                        • Bail reform – some jurisdictions eliminating cash bail<br>
                        • Police reform – body cameras, de‑escalation training</p>`
            },
          ])}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Multiculturalism', link: `${BASE}/themen/usa/multiculturalism` },
            next: { label: 'Foreign Policy', link: `${BASE}/themen/usa/foreign-policy` },
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