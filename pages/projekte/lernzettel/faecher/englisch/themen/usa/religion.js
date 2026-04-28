// pages/projekte/lernzettel/faecher/englisch/themen/usa/religion.js
// USA – Kapitel 10: Religion

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

export default class ReligionPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-usa-religion';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 10</span>
            <i class="fas fa-chevron-right"></i><span>Religion</span>
          </div>
          <h1 class="lz-sub-title">
            Religion<br><em>in the United States</em>
          </h1>
          <p class="lz-sub-desc">
            The Puritans' heritage · Religious diversity · Liberal vs. fundamentalist Protestantism
          </p>
          ${renderTags(['USA', 'Religion', 'Puritans', 'Protestantism'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('10.1 The Puritans\' Heritage')}
          <h2 class="lz-h2 reveal">“City upon a Hill”</h2>
          <p class="lz-prose reveal">
            The Puritans were English Protestants who sought to “purify” the Church of England. They settled in
            Plymouth (1620) and Massachusetts Bay Colony (1630), intending to create a model Christian society.
          </p>
          ${renderAccordion([
            {
              title: '🏛️ Lasting Impact on American Culture',
              content: `<p class="lz-prose">• <strong>Work Ethic:</strong> Hard work as religious duty<br>
                        • <strong>Success as Virtue:</strong> Material success = God’s favor<br>
                        • <strong>Moral Reform:</strong> Desire to improve society<br>
                        • <strong>American Exceptionalism:</strong> America as chosen nation with a mission<br>
                        • <strong>Education:</strong> Founded Harvard (1636), emphasis on literacy<br>
                        • <strong>Self‑Governance:</strong> Town meetings, democratic participation</p>`
            },
          ])}
          <div class="lz-quote" style="margin:1rem 0;">
            <p>“We shall be as a city upon a hill. The eyes of all people are upon us.” – John Winthrop, 1630</p>
          </div>

          ${renderSubhead('10.2 Religious Diversity')}
          <h2 class="lz-h2 reveal">No Official Religion</h2>
          <p class="lz-prose reveal">
            The First Amendment guarantees freedom of religion and prohibits an established state church.
            This has led to extraordinary religious diversity.
          </p>
          ${renderTable({
            headers: ['Religious Group', 'Percentage', 'Notes'],
            rows: [
              ['Christian (total)', '63%', 'Declining from 80%+ in 1970s'],
              ['– Protestant', '40%', 'Mainline + Evangelical'],
              ['– Catholic', '21%', 'Largest single denomination'],
              ['“Nones” (Unaffiliated)', '29%', 'Growing rapidly, especially among youth'],
              ['Jewish', '2%', 'Concentrated in Northeast'],
              ['Muslim, Hindu, Buddhist', '1% each', 'Growing due to immigration'],
            ],
          })}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-church',
            title: 'More Religious Than Europe',
            body: '• Higher church attendance than other developed nations<br>• Religion plays a larger role in politics<br>• But also more religious diversity and freedom (no established church)<br>• Growing secularization, especially among younger generations'
          })}

          ${renderSubhead('10.3 Liberal Protestantism and Conservative Fundamentalism')}
          <h2 class="lz-h2 reveal">The Protestant Divide</h2>
          ${renderTable({
            headers: ['Liberal/Mainline', 'Conservative/Evangelical'],
            rows: [
              ['Denominations: Episcopal, Presbyterian, Methodist, Lutheran', 'Denominations: Southern Baptist, Pentecostal, megachurches'],
              ['Beliefs: Bible metaphorical, emphasis on social justice, accept science', 'Beliefs: Bible literal and inerrant, born‑again experience, evangelism'],
              ['Social Issues: Support LGBTQ+ rights, pro‑choice or nuanced', 'Social Issues: Pro‑life, traditional marriage, oppose LGBTQ+ rights'],
              ['Trend: Declining membership since 1960s', 'Trend: Growing, especially megachurches'],
            ],
          })}
          ${renderAccordion([
            {
              title: '🏛️ Political Alignment',
              content: `<p class="lz-prose">• Evangelicals: 70‑80% Republican<br>
                        • Religious Right – major force in GOP since 1970s (Moral Majority, Christian Coalition)<br>
                        • Culture Wars: abortion, LGBTQ+ rights, education (school prayer, evolution) are central issues</p>`
            },
            {
              title: '📊 Current Trends',
              content: `<p class="lz-prose">• Growing polarization between liberal and conservative Christians<br>
                        • Young people leaving churches, especially evangelical (rise of “Nones”)<br>
                        • Political divisions splitting congregations<br>
                        • However, evangelical support for Trump remained very high (81% in 2020)</p>`
            },
          ])}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Political System', link: `${BASE}/themen/usa/political-system` },
            next: { label: 'Great Britain – Overview', link: `${BASE}/themen/gb/world-power` },
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