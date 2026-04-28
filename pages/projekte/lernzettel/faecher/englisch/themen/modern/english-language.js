// pages/projekte/lernzettel/faecher/englisch/themen/modern/english-language.js
// Living in a Modern World – 3.6: English as a World Language

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable, renderSubhead, renderTags,
  renderAccordion, renderMerkboxGrid, renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class EnglishLanguagePage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-modern-english';
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
            <i class="fas fa-chevron-right"></i><span>3.6</span>
            <i class="fas fa-chevron-right"></i><span>English as a World Language</span>
          </div>
          <h1 class="lz-sub-title">English as a<br><em>World Language</em></h1>
          <p class="lz-sub-desc">Lingua Franca · Benefits · Costs · World Englishes · Linguistic Imperialism</p>
          ${renderTags(['English', 'Lingua Franca', 'World Englishes', 'Language Death', 'ELF'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-users', title: '1.5 Billion Speakers', text: 'Worldwide — but fewer than 400 million are native speakers. The majority of English communication globally happens between non-native speakers (ELF — English as a Lingua Franca).' },
            { icon: 'fas fa-flask', title: '80%+ of Science', text: 'Of all scientific papers published in English. Non-English scientists must write in a foreign language to be read — a significant disadvantage that filters global knowledge.' },
            { icon: 'fas fa-skull', title: 'One Language Dies Every 14 Days', text: 'The current rate of language extinction. Of 7,000 languages alive today, half may be extinct by 2100. English dominance is one driver — but not the only one.' },
            { icon: 'fas fa-plane', title: 'Mandated in Aviation', text: 'ICAO requires English for all international aviation communication. Every pilot and air traffic controller worldwide must use English — the clearest example of English as a true global standard.' },
          ])}

          ${renderSubhead('3.6.1 Domains of English Dominance')}

          ${renderTable({
            headers: ['Domain', 'English\'s Role', 'Significance'],
            rows: [
              ['Science', '80%+ of papers published in English', 'Non-English scientists disadvantaged; knowledge gatekeeping'],
              ['Business', 'Default language of multinationals', 'Airbus uses English; Japanese companies require it for promotion; international contracts in English'],
              ['Technology', 'All programming languages based on English', 'Code, documentation, Stack Overflow — entire tech ecosystem is English'],
              ['Aviation', 'ICAO-mandated for all international flights', 'Safety standard; non-compliance grounds pilots'],
              ['Diplomacy', 'One of 6 UN official languages; dominant in practice', 'Most UN negotiations actually conducted in English'],
              ['Internet', '60%+ of web content', 'Non-English speakers excluded from majority of online information'],
              ['Education', 'Medium of instruction globally', 'Universities in Netherlands, Scandinavia, Singapore, India — English-medium'],
            ],
          })}

          ${renderSubhead('3.6.2 The Benefits and Costs')}

          ${renderCompare({
            titleA: '✅ Benefits of English as Lingua Franca',
            titleB: '❌ Costs and Criticisms',
            listA: [
              'Global communication without translators',
              'Access to 80%+ of scientific and technical knowledge',
              'Economic opportunities — better jobs, international business',
              'Shared medium for intercultural understanding',
              'Efficiency — reduces translation costs for international organisations',
              'The world\'s largest knowledge base is in English',
            ],
            listB: [
              'Native speaker advantage — unfair cognitive tax on non-natives',
              'Language death — 7,000 languages; one dies every 14 days',
              'Cultural loss — language carries irreplaceable worldviews',
              'Linguistic imperialism — spreads through power, not merit',
              'Exclusion — those without English miss opportunities',
              '"Epistemicide" — indigenous knowledge systems lost with their languages',
            ],
          })}

          ${renderSubhead('3.6.3 World Englishes — Braj Kachru\'s Three Circles')}
          <p class="lz-prose reveal">
            Linguist <strong>Braj Kachru</strong> proposed the "Three Circles" model (1985) to describe
            the different roles English plays worldwide. It challenged the assumption that British or
            American English is the "correct" standard.
          </p>

          ${renderTable({
            headers: ['Circle', 'Countries', 'Role of English', 'Status'],
            rows: [
              ['Inner Circle', 'UK, USA, Australia, Canada, New Zealand', 'Native language — the "norm providers"', 'Traditional standard; but these varieties are also changing'],
              ['Outer Circle', 'India, Nigeria, Singapore, Kenya, Philippines', 'Official language; used in government, law, education', 'Legitimate local varieties: Singlish, Indian English, Nigerian English'],
              ['Expanding Circle', 'China, Germany, Brazil, Japan, Russia', 'Foreign language for international communication', 'ELF — English as Lingua Franca; largest and fastest growing'],
            ],
          })}

          ${renderAccordion([
            { title: '🌍 World Englishes — Are They "Correct"?', content: '<p class="lz-prose">Traditional view: British/American English is the standard; all other varieties are "errors" or "deviations." <strong>Modern linguistics rejects this.</strong> Singlish (Singapore English), Indian English, Nigerian English, and other varieties have their own grammar systems, vocabularies, and cultural contexts — they are not "bad" English but <strong>different Englishes</strong>. The question "which English is correct?" increasingly has no single answer when the majority of English speakers are non-native.</p>' },
            { title: '🔄 ELF — English as a Lingua Franca', content: '<p class="lz-prose">When a German engineer and a Japanese client communicate in English, neither is using their native language. This is <strong>ELF</strong> — the largest form of English communication globally. ELF research (Barbara Seidlhofer, Jennifer Jenkins) shows that ELF speakers develop their own communication norms — often diverging from native speaker norms but remaining entirely mutually intelligible. Key insight: in ELF contexts, non-native speakers are the majority; native speakers are the minority.</p>' },
            { title: '⚠️ Linguistic Imperialism', content: '<p class="lz-prose"><strong>Robert Phillipson</strong> argues in "Linguistic Imperialism" (1992) that the global spread of English was not natural or neutral — it was an active political project of British and American governments. ELT (English Language Teaching) industry exports norms of "standard" English that devalue local languages. The TESOL profession has been complicit in spreading cultural as well as linguistic dominance. Counter-argument: people voluntarily learn English for the economic benefits — imperialism implies coercion that may not be present.</p>' },
          ])}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-comment-dots', title: 'The Future of English', body: 'Will English remain dominant? Arguments for yes: network effects (everyone learns it because everyone speaks it); embedded in science, tech, business. Arguments for change: China\'s growing global influence; AI translation reducing the advantage of English speakers; growing pride in non-English languages (French, Arabic, Mandarin). Most likely scenario: English remains the global lingua franca for decades, but its form increasingly diverges from native speaker norms as the ELF majority shapes the language.' })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Americanization', link: `${BASE}/themen/modern/americanization` },
            next: { label: 'Genetic Engineering', link: `${BASE}/themen/modern/genetic-engineering` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}