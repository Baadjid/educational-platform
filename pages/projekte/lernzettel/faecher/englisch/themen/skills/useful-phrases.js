// pages/projekte/lernzettel/faecher/englisch/themen/skills/useful-phrases.js
// Skills – Nützliche Formulierungen für Analyse, Kommentar, Briefe etc.

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
  renderMerkboxGrid,
  renderTabs,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const PHRASES_TABS = [
  { key: 'analysis',      label: '🔍 Analysis' },
  { key: 'argumentation', label: '⚖️ Argumentation' },
  { key: 'linking',       label: '🔗 Linking Words' },
  { key: 'formal',        label: '✉️ Formal Writing' },
];

export default class UsefulPhrasesPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-skills-phrases';
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
            <button data-link="${BASE}/themen/skills" class="lz-bread-link">Skills</button>
            <i class="fas fa-chevron-right"></i><span>Useful Phrases</span>
          </div>
          <h1 class="lz-sub-title">Useful<br><em>Phrases</em></h1>
          <p class="lz-sub-desc">Schnellreferenz für Analyse, Argumentation, Konnektoren und formelle Texte</p>
          ${renderTags(['Phrases', 'Writing', 'Analysis', 'Argumentation', 'Abitur'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-magnifying-glass', title: 'Text Analysis', text: 'Formulierungen zum Einleiten, Analysieren und Bewerten von Texten, Autoren und Argumenten.' },
            { icon: 'fas fa-scale-balanced', title: 'Argumentation', text: 'Meinungen einleiten, Zustimmung/Ablehnung, Argumente strukturieren, Belege anführen.' },
            { icon: 'fas fa-link', title: 'Linking Words', text: 'Konnektoren für Addition, Kontrast, Ursache/Wirkung, Sequenzierung und Betonung.' },
            { icon: 'fas fa-envelope', title: 'Formal Writing', text: 'Briefe, E-Mails, Empfehlungen — Eröffnungen, Bitten, Abschlüsse.' },
          ])}

          <nav class="wim-tabs" id="phrases-tabs" aria-label="Useful phrases categories">
            ${PHRASES_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="analysis">
            ${renderSubhead('Introducing the Text')}
            ${renderTable({ headers: ['Function', 'Phrases'], rows: [
              ['Title/author', 'The text/article/extract titled "…" by … · The [article/speech/editorial] written by …'],
              ['Topic', '… deals with / focuses on / examines / addresses / explores the issue of …'],
              ['Publication', '… was published in … on … and is aimed at a [general/specialist] audience.'],
              ['Main theme', 'The central theme / main topic / key issue of the text is …'],
              ['Purpose', 'The author\'s purpose is to inform / persuade / entertain / criticise / warn …'],
            ]})}
            ${renderSubhead('Analysing Structure')}
            ${renderTable({ headers: ['Function', 'Phrases'], rows: [
              ['Opening', 'In the opening paragraph, the author … · The author begins by / starts with …'],
              ['Development', 'The text moves on to / proceeds to / continues by … · The author then …'],
              ['Conclusion', 'In conclusion, / Finally, / To sum up, the author … · The text closes with …'],
              ['Organisation', 'The text is divided into … / consists of … / is structured in …'],
              ['Transitions', 'The author uses transitions to … · The shift from X to Y is marked by …'],
            ]})}
            ${renderSubhead('Analysing Language and Style')}
            ${renderTable({ headers: ['Function', 'Phrases'], rows: [
              ['Device use', 'The author uses / employs / makes use of [metaphor / statistics / anecdote] …'],
              ['Tone', 'The tone of the text is formal / informal / objective / subjective / critical / satirical / ironic …'],
              ['Register', 'The language is descriptive / emotive / technical / accessible / academic / colloquial …'],
              ['Appeal', 'The author appeals to the reader\'s emotions / sense of logic / authority by …'],
              ['Effect', 'Through the use of …, the author achieves / creates / conveys / suggests …'],
              ['Intention', 'By [doing X], the author intends to / aims to / seeks to / hopes to …'],
            ]})}
            ${renderSubhead('Quoting and Referring')}
            ${renderTable({ headers: ['Function', 'Phrases'], rows: [
              ['Direct quote', 'The author states/writes/argues: "…" (l. X) · As the author puts it: "…"'],
              ['Indirect ref.', 'The author argues/claims/suggests/maintains/points out/highlights that …'],
              ['Line reference', 'In line(s) …, the author … · As stated in paragraph …, …'],
              ['Interpretation', 'This implies / suggests / indicates / conveys / reveals that …'],
              ['Evaluation', 'This is effective because … · The reader is [likely to / invited to] feel/think …'],
            ]})}
            ${renderInfobox({ type: 'blue', icon: 'fas fa-lightbulb', title: 'PEA — The Golden Rule', body: '<strong>P</strong>oint — make your analytical claim.<br><strong>E</strong>vidence — quote or refer to the text.<br><strong>A</strong>nalysis — explain the effect and why the author chose this.' })}
          </div>

          <div class="wim-category hidden" data-wim-cat="argumentation">
            ${renderSubhead('Introducing Opinions')}
            ${renderTable({ headers: ['Formality', 'Phrases'], rows: [
              ['Neutral', 'In my opinion / view, … · From my perspective / point of view, …'],
              ['Strong', 'I am convinced that … · I firmly believe that … · It is my firm conviction that …'],
              ['Tentative', 'It seems to me that … · It appears that … · I tend to think that …'],
              ['Distanced', 'One could argue that … · It could be said that … · There is a case for saying that …'],
            ]})}
            ${renderSubhead('Agreeing and Disagreeing')}
            ${renderTable({ headers: ['Stance', 'Phrases'], rows: [
              ['Full agreement', 'I (completely / entirely / wholeheartedly) agree with … · I share this view entirely.'],
              ['Valid point', 'The author makes a good/valid/compelling point when he/she says that … · This argument is convincing.'],
              ['Full disagreement', 'I (completely) disagree with … · I cannot agree with … · I take issue with …'],
              ['Flawed argument', 'I find this argument unconvincing / problematic / flawed / overstated …'],
              ['Partial agreement', 'While I agree that …, I believe that … · I agree with X, but / however …'],
              ['Conceding', 'Admittedly, … · It is true that …, however … · While this may be so, …'],
            ]})}
            ${renderSubhead('Structuring Arguments')}
            ${renderTable({ headers: ['Function', 'Phrases'], rows: [
              ['First point', 'First of all, / Firstly, / In the first place, / To begin with, …'],
              ['Adding', 'Secondly, / Furthermore, / Moreover, / In addition, / What is more, …'],
              ['Contrast', 'However, / Nevertheless, / On the other hand, / Whereas, / In contrast, …'],
              ['Final point', 'Finally, / Lastly, / Last but not least, / To conclude, …'],
              ['Emphasis', 'It is important / essential / crucial to note that … · Particularly, / Above all, …'],
              ['Example', 'For example, / For instance, / To illustrate, / A case in point is … / Such as …'],
              ['Evidence', 'Evidence suggests that … · Research shows that … · Statistics reveal that …'],
            ]})}
            ${renderSubhead('Discussing Advantages and Disadvantages')}
            ${renderTable({ headers: ['Function', 'Phrases'], rows: [
              ['Advantage', 'One [major/key/clear] advantage / benefit of … is that … · … has the merit of …'],
              ['Disadvantage', 'A [significant/major] drawback / disadvantage / downside is that … · … has the drawback of …'],
              ['Balance', 'On the one hand … / On the other hand … · While … has its merits, it also has …'],
              ['Problem', 'One of the main problems / issues / challenges is … · A pressing concern is …'],
              ['Solution', 'A possible solution would be to … · This could be addressed by … · Steps should be taken to …'],
            ]})}
            ${renderSubhead('Conclusions and Recommendations')}
            ${renderTable({ headers: ['Function', 'Phrases'], rows: [
              ['Summarising', 'In summary, / To summarise, / To sum up, / In brief, / On the whole, …'],
              ['What emerged', 'What emerges from this is … · What becomes clear is … · The main takeaway is …'],
              ['Recommending', 'It is recommended that … · Action should be taken to … · There is a need for …'],
              ['Future outlook', 'In the future, / In the long run, / If current trends continue, …'],
              ['Open question', 'It remains to be seen whether … · Only time will tell if … · The question remains …'],
            ]})}
          </div>

          <div class="wim-category hidden" data-wim-cat="linking">
            ${renderTable({
              headers: ['Function', 'Connectors'],
              rows: [
                ['➕ Adding', 'Furthermore · Moreover · In addition · Additionally · Besides · What is more · Not only … but also · As well as · On top of that'],
                ['🔀 Contrasting', 'However · Nevertheless · Nonetheless · Yet · On the contrary · In contrast · Conversely · Although · Even though · Despite · In spite of · Regardless of'],
                ['⚡ Conceding', 'Admittedly · It is true that · Of course · Naturally · Granted · While it may be true that · Although one could argue that'],
                ['📊 Result/Cause', 'Therefore · Thus · Hence · Consequently · As a result · For this reason · That is why · Accordingly · So'],
                ['🔢 Sequencing', 'First(ly) · Second(ly) · Finally · To begin with · Next · Then · Subsequently · Eventually · In the first place · Last but not least'],
                ['📝 Exemplifying', 'For example · For instance · Such as · Like · To illustrate · As an illustration · Namely · In particular · Specifically'],
                ['🔍 Clarifying', 'In other words · That is to say · To put it differently · More specifically · To be more precise · To clarify · Put simply'],
                ['✨ Emphasising', 'Indeed · In fact · Actually · Certainly · Undoubtedly · Clearly · Obviously · Particularly · Especially · Above all · Most importantly'],
                ['🔄 Comparing', 'Similarly · Likewise · In the same way · By the same token · Equally · Just as · Correspondingly'],
                ['🏁 Concluding', 'In conclusion · To conclude · In summary · To sum up · All in all · Overall · On the whole · Taking everything into account'],
              ],
            })}
            ${renderInfobox({ type: 'success', icon: 'fas fa-exclamation-circle', title: 'Häufige Fehler beim Gebrauch', body: '<strong>However</strong> steht am Satzanfang mit Komma oder in der Mitte ("I do, however, think…"). <strong>Although / Even though</strong> leiten Nebensätze ein, nicht Hauptsätze alleine. <strong>Despite / In spite of</strong> folgt ein Nomen oder Gerundium, kein that-Satz. <strong>Nevertheless</strong> = "trotzdem" — stärker als "however".' })}
            ${renderSubhead('Register: Formal vs. Informal')}
            ${renderTable({ headers: ['Informal', 'Formal Equivalent'], rows: [
              ['But', 'However / Nevertheless / Nonetheless'],
              ['So', 'Therefore / Consequently / Thus'],
              ['Also', 'Furthermore / Moreover / In addition'],
              ['Because', 'Due to the fact that / Owing to / Since'],
              ['A lot of', 'A significant number of / Considerable / Substantial'],
              ['Think', 'Believe / Consider / Be of the opinion that'],
              ['Show', 'Demonstrate / Illustrate / Indicate / Reveal'],
              ['Use', 'Employ / Utilise / Make use of'],
              ['Say', 'State / Assert / Claim / Argue / Contend / Maintain'],
              ['Good / Bad', 'Advantageous / Beneficial / Detrimental / Problematic'],
            ]})}
          </div>

          <div class="wim-category hidden" data-wim-cat="formal">
            ${renderSubhead('Formal Letter / Letter to the Editor')}
            ${renderTable({ headers: ['Part', 'Phrases'], rows: [
              ['Salutation (unknown)', 'Dear Sir/Madam,'],
              ['Salutation (known)', 'Dear Mr./Ms./Dr. [Name],'],
              ['Opening purpose', 'I am writing to … · I am writing in response to … · I am writing with regard to …'],
              ['Referring to article', 'Having read your article on … / With reference to your recent article about …'],
              ['Strong concern', 'I am deeply concerned / troubled / alarmed by … · I strongly object to …'],
              ['Requesting', 'I would appreciate it if … · I would be grateful if … · Could you please … · Would it be possible to …'],
              ['Closing', 'I look forward to hearing from you. · Thank you for your time and consideration.'],
              ['Yours faithfully', '(when you opened with Dear Sir/Madam)'],
              ['Yours sincerely', '(when you used the person\'s name)'],
            ]})}
            ${renderSubhead('Comment / Opinion Essay — Structure')}
            ${renderTable({ headers: ['Part', 'What to Write', 'Useful Phrases'], rows: [
              ['Introduction', 'Introduce topic, state your position', 'The question of … has become increasingly important … · This essay will argue that …'],
              ['Body §1', 'First argument + evidence', 'First and foremost, / The most compelling argument is … · This is supported by … · For instance, …'],
              ['Body §2', 'Second argument + evidence', 'Furthermore, / A second important consideration is … · Evidence suggests that …'],
              ['Counterargument', 'Acknowledge opposing view, then refute', 'While some argue that …, this view overlooks … · Admittedly, …, however, …'],
              ['Conclusion', 'Restate position, broader point', 'In conclusion, / To sum up, … · The evidence clearly shows that … · Ultimately, …'],
            ]})}
            ${renderSubhead('Useful Advanced Vocabulary')}
            ${renderTable({ headers: ['Category', 'Words & Phrases'], rows: [
              ['Verbs for stance', 'advocate · contend · maintain · assert · concede · refute · challenge · acknowledge'],
              ['Nouns for arguments', 'assertion · contention · premise · implication · ramification · paradox · dichotomy'],
              ['Adjectives (positive)', 'compelling · persuasive · insightful · nuanced · well-reasoned · substantiated · valid'],
              ['Adjectives (negative)', 'flawed · unconvincing · oversimplified · overstated · misleading · biased · contentious'],
              ['Hedging', 'arguably · presumably · apparently · seemingly · it could be suggested that · to some extent'],
            ]})}
            ${renderInfobox({ type: 'warning', icon: 'fas fa-pen', title: 'Abitur Writing — Common Mistakes', body: '• Never start a formal essay sentence with "I" as the very first word.<br>• Avoid contractions (don\'t → do not; it\'s → it is).<br>• No colloquialisms (a lot → a considerable number; kids → children).<br>• Always embed quotes: don\'t just drop in a quote — introduce and explain it.<br>• Vary your vocabulary: don\'t repeat "says" — use argues, claims, suggests, points out.' })}
          </div>

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Cartoon Analysis Vocabulary', link: `${BASE}/themen/vocab/cartoon` },
            next: { label: 'Different Writing Strategies', link: `${BASE}/themen/skills/text-analysis` },
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
    initWimTabs(document);
  }
}