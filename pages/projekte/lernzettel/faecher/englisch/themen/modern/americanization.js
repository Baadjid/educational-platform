// pages/projekte/lernzettel/faecher/englisch/themen/modern/americanization.js
// Living in a Modern World – 3.5: Americanization

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable, renderSubhead, renderTags,
  renderAccordion, renderMerkboxGrid, renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class AmericanizationPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-modern-americanization';
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
            <i class="fas fa-chevron-right"></i><span>3.5</span>
            <i class="fas fa-chevron-right"></i><span>Americanization</span>
          </div>
          <h1 class="lz-sub-title">Americanization<br><em>Cultural Imperialism or Hybridization?</em></h1>
          <p class="lz-sub-desc">Forms · Arguments For &amp; Against · Glocalization · Reverse Cultural Flow</p>
          ${renderTags(['Americanization', 'Glocalization', 'Pop Culture', 'Soft Power', 'Cultural Exchange'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-burger', title: '40,000+ McDonald\'s', text: 'In 100+ countries. In many cities, McDonald\'s was the first affordable "modern" restaurant — symbol of both opportunity and cultural imposition.' },
            { icon: 'fas fa-film', title: '70–80% Box Office', text: 'US films capture 70–80% of global box office revenue. US streaming services (Netflix, Disney+, Prime) dominate worldwide. Local film industries struggle to compete.' },
            { icon: 'fas fa-google', title: 'Big Tech = American', text: 'Google (90%+ of search), Meta/Facebook, Amazon, Apple, Microsoft — five American companies dominate the global digital economy and shape what the world sees and buys.' },
            { icon: 'fas fa-music', title: 'But K-pop Conquered the USA', text: 'BTS topped US charts; Afrobeats went global; Bollywood is the world\'s largest film industry. Americanization is real — but the cultural flow is increasingly two-directional.' },
          ])}

          ${renderSubhead('3.5.1 Forms of Americanization')}
          <h2 class="lz-h2 reveal">How American Culture Spreads</h2>

          ${renderTable({
            headers: ['Domain', 'How It Spreads', 'Examples'],
            rows: [
              ['Food', 'Franchise expansion; fast food culture', 'McDonald\'s, KFC, Starbucks, Domino\'s — now in virtually every major city globally'],
              ['Entertainment', 'Hollywood dominance; streaming platforms', 'US films; Netflix, Disney+, Prime; US TV shows; Pop music (Billboard charts still mostly English)'],
              ['Technology', 'Market monopolies; Silicon Valley culture', 'Google, Facebook, iPhone, Amazon — the platforms that mediate global communication'],
              ['Language', 'English as default global language', 'Business, science, aviation, internet — all use English (primarily American English)'],
              ['Fashion', 'Youth culture exports', 'Jeans, sneakers, baseball caps, hoodies — originally American workwear, now global uniform'],
              ['Values', 'Cultural products embed ideology', 'Individualism, consumerism, "the American Dream," meritocracy — spread through films and TV'],
              ['Sports', 'NBA, NFL, baseball global expansion', 'NBA is now genuinely global; US sports merchandise worldwide'],
            ],
          })}

          ${renderCompare({
            titleA: '✅ Arguments FOR Americanization',
            titleB: '❌ Arguments AGAINST Americanization',
            listA: [
              'Modernisation — brings progress, higher living standards',
              'Democracy and freedom promoted globally',
              'Consumer benefits — more choice, lower prices',
              'Creates a shared global culture and communication',
              'Drives innovation — Silicon Valley model',
              'People choose American products freely — no coercion',
            ],
            listB: [
              'Cultural loss — homogenisation destroys diversity',
              'Economic domination — American corporations extract profit',
              'Negative values: consumerism, materialism, individualism over community',
              'Health problems — fast food and obesity epidemic',
              'Environmental unsustainability of American consumption patterns',
              'Resentment — perceived cultural imperialism breeds anti-Americanism',
            ],
          })}

          ${renderSubhead('3.5.2 Glocalization — The Counter-Narrative')}
          <h2 class="lz-h2 reveal">Global + Local = Glocal</h2>
          <p class="lz-prose reveal">
            <strong>Glocalization</strong> describes how global products and cultural forms are always adapted to
            local contexts — creating hybrids rather than uniform global homogenisation.
            The term was developed by sociologist Roland Robertson.
          </p>

          ${renderTable({
            headers: ['Global Product', 'Local Adaptation', 'Result'],
            rows: [
              ['McDonald\'s (USA)', 'India: McAloo Tikki, Maharaja Mac; no beef; full vegetarian menu', 'Global brand with local taste and religious accommodation'],
              ['K-pop (Korea)', 'Korean artists adopt American pop formulas but create distinctly Korean product', 'BTS, BLACKPINK now dominating US charts — "reverse Americanization"'],
              ['Football (England)', 'Adopted worldwide but each culture gives it local identity (Ultra culture in Germany; Samba football in Brazil)', 'Global game, local passion'],
              ['Christmas (Christian/Western)', 'Japan: Christmas Eve as romantic date night; KFC as Christmas meal tradition', 'Completely reinterpreted through local culture'],
              ['Hip-hop (USA)', 'French rap engages with French political themes; Korean hip-hop; Arabic rap', 'Form taken global; content becomes local'],
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-arrow-right-arrow-left', title: 'The Flow Goes Both Ways', body: 'America also absorbs global culture:<br>• Sushi, yoga, and K-pop all became mainstream in the USA<br>• Mexican cuisine has transformed American food culture (salsa outsells ketchup)<br>• Bollywood influences Hollywood special effects and dance sequences<br>• African American culture has always been a global export from within America<br>• The "authentic America" being exported is itself a hybrid of countless immigrant cultures' })}

          ${renderSubhead('3.5.3 Soft Power')}
          <p class="lz-prose reveal">
            American cultural dominance is not incidental — it is a deliberate instrument of foreign policy.
            Political scientist Joseph Nye coined the term <strong>"soft power"</strong>: the ability to
            attract and persuade through culture, values, and ideas rather than coerce through military or
            economic force. Hollywood, universities, and social media platforms are instruments of American
            soft power — making others want what America wants.
          </p>
          ${renderInfobox({ type: 'warning', icon: 'fas fa-question-circle', title: 'Is Cultural Influence Always Imperialism?', body: 'Not necessarily. Key distinction: <strong>cultural exchange</strong> is mutual, voluntary, and enriching for all. <strong>Cultural imperialism</strong> is one-directional, economically coercive (local industry cannot compete), and replaces rather than adds to local culture. The line is contested — and often depends on economic power relations, not just cultural content.' })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Environmental Challenges', link: `${BASE}/themen/modern/environment` },
            next: { label: 'English as a World Language', link: `${BASE}/themen/modern/english-language` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}