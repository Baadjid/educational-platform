// pages/projekte/lernzettel/faecher/englisch/themen/usa/foundations.js
// USA – Kapitel 1: Foundations
// Inhalt aus UnitedStatesOfAmerica.html (1. Foundations)

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderInfobox,
  renderTable,
  renderAccordion,
  renderSubhead,
  renderTags,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class FoundationsPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    // Zusätzliches CSS für Zitate (nur einmal laden)
    if (!document.querySelector('#usa-foundations-styles')) {
      const style = document.createElement('style');
      style.id = 'usa-foundations-styles';
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
    el.className = 'page page-englisch page-usa-foundations';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);

    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `
      <!-- ══════════════ HERO ══════════════ -->
      <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
        <div class="lz-sub-hero-inner">
          <div class="lz-sub-hero-orb" aria-hidden="true"></div>
          <div class="lz-sub-breadcrumb">
            <button data-link="${BASE}/themen/usa" class="lz-bread-link">USA</button>
            <i class="fas fa-chevron-right"></i><span>Kapitel 1</span>
            <i class="fas fa-chevron-right"></i><span>Foundations</span>
          </div>
          <h1 class="lz-sub-title">
            Foundations of the<br><em>United States of America</em>
          </h1>
          <p class="lz-sub-desc">
            Declaration of Independence · Westward Movement · Manifest Destiny ·
            Difficulties in Forming a Nation
          </p>
          ${renderTags(['USA', 'Foundations', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <!-- ================= 1.1 Declaration of Independence ================= -->
          ${renderSubhead('1.1 Declaration of Independence (1776)')}
          <h2 class="lz-h2 reveal">The Birth of a Nation</h2>
          <p class="lz-prose reveal">
            The Declaration of Independence, adopted on July 4, 1776, marked the thirteen American colonies'
            formal separation from Great Britain. Written primarily by Thomas Jefferson, this foundational document
            established the philosophical basis for American democracy.
          </p>

          <div class="lz-quote">
            <p>“We hold these truths to be self‑evident, that all men are created equal, that they are endowed by
            their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit
            of Happiness.”</p>
          </div>

          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-gavel',
            title: 'Key Principles',
            body: `<strong>Natural Rights:</strong> All people possess inherent rights that cannot be taken away.<br>
                   <strong>Equality:</strong> All men are created equal (though initially excluding women, enslaved people, and Native Americans).<br>
                   <strong>Popular Sovereignty:</strong> Government derives its power from the consent of the governed.<br>
                   <strong>Right to Revolution:</strong> People have the right to overthrow oppressive governments.`
          })}

          <p class="lz-prose reveal">
            <strong>Historical Context:</strong> The Declaration emerged after years of colonial grievances
            against British rule, including “taxation without representation”, the Quartering Acts, and restrictions
            on colonial self‑governance. The document listed 27 specific grievances against King George III
            and Parliament.
          </p>

          <!-- ================= 1.2 Westward Movement & Frontier Spirit ================= -->
          ${renderSubhead('1.2 The Westward Movement and the Frontier Spirit')}
          <h2 class="lz-h2 reveal">Pioneers, Homesteaders and the Frontier</h2>
          <p class="lz-prose reveal">
            The westward expansion shaped American identity profoundly, creating what became known as the
            <strong>Frontier Spirit</strong> or <strong>Pioneer Spirit</strong>.
          </p>

          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-people-arrows',
            title: 'Characteristics of the Frontier Spirit',
            body: `<strong>Individualism</strong> – Self‑reliance and personal initiative.<br>
                   <strong>Optimism</strong> – Belief in unlimited possibilities and a better future.<br>
                   <strong>Pragmatism</strong> – Focus on practical solutions rather than abstract theories.<br>
                   <strong>Mobility</strong> – Willingness to move for opportunity.<br>
                   <strong>Egalitarianism</strong> – Rejection of rigid class structures.<br>
                   <strong>Work Ethic</strong> – Emphasis on hard work and perseverance.`
          })}

          ${renderTable({
            headers: ['Key Event', 'Year', 'Significance'],
            rows: [
              ['Louisiana Purchase', '1803', 'Doubled the size of the United States'],
              ['Lewis and Clark Expedition', '1804–1806', 'Explored the western territories'],
              ['California Gold Rush', '1848', 'Hundreds of thousands moved westward'],
              ['Homestead Act', '1862', 'Provided free land to settlers'],
              ['Transcontinental Railroad completed', '1869', 'Connected East and West'],
              ['U.S. Census declares frontier “closed”', '1890', 'End of the frontier era'],
            ],
          })}

          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-exclamation-triangle',
            title: 'Critical Perspective',
            body: 'While westward expansion represented opportunity for European Americans, it resulted in the displacement, violence against, and cultural destruction of Native American peoples through forced removals, broken treaties, and warfare.'
          })}

          <!-- ================= 1.3 Manifest Destiny ================= -->
          ${renderSubhead('1.3 Manifest Destiny')}
          <h2 class="lz-h2 reveal">“The empire on which the sun never sets”</h2>
          <p class="lz-prose reveal">
            <strong>Manifest Destiny</strong> was the 19th‑century belief that American expansion across the continent
            was both justified and inevitable. The term was coined by journalist John O’Sullivan in 1845.
          </p>

          ${renderInfobox({
            type: '',
            icon: 'fas fa-globe-americas',
            title: 'Core Beliefs',
            body: `<ul><li>Americans were destined by God to expand across North America.</li>
                   <li>American institutions and democracy were superior and should be spread.</li>
                   <li>Expansion would bring progress, democracy, and civilization.</li>
                   <li>Continental expansion from Atlantic to Pacific was America’s right and duty.</li></ul>`
          })}

          <p class="lz-prose reveal">
            <strong>Consequences:</strong><br>
            • <strong>Mexican‑American War (1846–1848):</strong> U.S. acquisition of California, Nevada, Utah, Arizona, New Mexico, and parts of Colorado and Wyoming.<br>
            • <strong>Native American displacement:</strong> Trail of Tears, reservation system, systematic destruction of indigenous cultures.<br>
            • <strong>Slavery expansion debate:</strong> New territories reignited conflicts over whether slavery would expand westward.<br>
            • <strong>Cultural impact:</strong> Reinforced American exceptionalism and interventionist foreign policy tendencies.
          </p>

          <!-- ================= 1.4 Difficulties in Forming a Nation ================= -->
          ${renderSubhead('1.4 Difficulties in Forming a Nation')}
          <h2 class="lz-h2 reveal">From Confederation to Constitution</h2>
          <p class="lz-prose reveal">
            Creating a unified nation from thirteen independent colonies presented enormous challenges between 1776 and 1789.
          </p>

          ${renderAccordion([
            {
              title: '📜 Articles of Confederation (1781–1789)',
              content: `<p class="lz-prose">The first attempt at national government proved too weak:
                         no executive branch or federal courts; Congress couldn't levy taxes or regulate commerce;
                         required unanimous consent for amendments; no national currency or army.</p>`
            },
            {
              title: '⚖️ Balancing State and Federal Power',
              content: `<p class="lz-prose"><strong>Federalists</strong> (Hamilton, Madison, Jay) supported strong central government.
                         <strong>Anti‑Federalists</strong> (Patrick Henry, George Mason) feared centralized power.
                         Compromise: federal system with division of powers and Bill of Rights (1791).</p>`
            },
            {
              title: '🌾 Regional Differences (North vs. South vs. West)',
              content: `<p class="lz-prose">North: industrial, commercial, opposed slavery expansion.<br>
                         South: agricultural, plantation economy dependent on slavery.<br>
                         West: frontier territories seeking statehood and representation.</p>`
            },
            {
              title: '⛓️ The Slavery Question',
              content: `<p class="lz-prose"><strong>Three‑Fifths Compromise:</strong> enslaved people counted as 3/5 of a person for representation purposes.<br>
                         <strong>Slave Trade Compromise:</strong> Congress couldn't ban slave trade until 1808.<br>
                         This issue ultimately led to the Civil War (1861–1865).</p>`
            },
            {
              title: '💰 Economic Challenges',
              content: `<p class="lz-prose">War debt and economic depression, lack of unified currency,
                         interstate trade barriers, foreign trade restrictions.</p>`
            },
          ])}

          <p class="lz-prose reveal">
            <strong>Constitutional Solutions:</strong> Separation of Powers, Checks and Balances, Federalism,
            Bill of Rights, Amendment Process.
          </p>

        </div>
      </section>

      <!-- Seiten‑Navigation (Weiter zu African American History) -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Grammar Exercises', link: `${BASE}/themen/grammar/exercises` },
            next: { label: 'African American History', link: `${BASE}/themen/usa/african-american` },
          },BASE)}
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