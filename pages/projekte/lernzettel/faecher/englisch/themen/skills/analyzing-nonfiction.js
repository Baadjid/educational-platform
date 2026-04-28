// pages/projekte/lernzettel/faecher/englisch/themen/skills/analyzing-nonfiction.js
// Skills – Kapitel 27 / 5.1: Analyzing Non-fictional Texts

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
  renderMerkboxGrid,
  renderTabs,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class AnalyzingNonfictionPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-skills-nonfiction';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 27</span>
            <i class="fas fa-chevron-right"></i><span>Analyzing Non-fictional Texts</span>
          </div>
          <h1 class="lz-sub-title">Analyzing<br><em>Non-fictional Texts</em></h1>
          <p class="lz-sub-desc">Cartoons · Graphs and Charts · Non-fictional Texts · Rhetorical Devices</p>
          ${renderTags(['Analysis', 'Cartoons', 'Graphs', 'Non-fiction', 'Rhetoric'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-newspaper', title: 'Non-fictional Texts', text: 'Articles, editorials, speeches, reports, letters — real-world texts that inform, persuade, or argue. Focus: content, structure, tone, rhetorical devices.' },
            { icon: 'fas fa-pencil', title: 'Political Cartoons', text: 'Combine visual symbolism, caricature, and irony to make a political or social point. Always ask: what is the cartoonist\'s message and how is it conveyed?' },
            { icon: 'fas fa-chart-bar', title: 'Graphs & Charts', text: 'Visual data requires DAIT analysis: Describe, Analyse trends, Interpret meaning, Think critically about limitations and sources.' },
            { icon: 'fas fa-bullhorn', title: 'Ethos · Pathos · Logos', text: 'Aristotle\'s three pillars of persuasion. Every persuasive text uses at least one. Identifying them shows analytical depth.' },
          ])}

          ${renderTabs({ id: 'nonfiction-tabs', tabs: [

            { label: '🖼️ Cartoons', content: `
              <p class="lz-prose" style="margin-top:0.5rem;">A <strong>political / editorial cartoon</strong> uses art and satire to comment on current events. Unlike illustrated stories, they convey a point in a single image — every detail is deliberate.</p>

              ${renderSubhead('Visual and Verbal Techniques')}
              ${renderTable({
                headers: ['Technique', 'Definition', 'What to Look For'],
                rows: [
                  ['Symbolism', 'Object/figure represents abstract idea', 'Uncle Sam = USA · Dove = peace · Scales = justice · Broken chain = freedom'],
                  ['Caricature', 'Exaggerating physical features to identify/mock', 'Huge ears = listening; tiny hands = weakness; big nose = nosiness'],
                  ['Labelling', 'Text directly on objects or figures to clarify', '"The Economy," "Voters," "Wall Street" written on characters'],
                  ['Irony / Satire', 'Gap between what is shown and what is meant', 'Leader shown handing out "freedom" while people are in chains'],
                  ['Juxtaposition', 'Two contrasting elements placed side by side', 'Rich/poor; before/after; war/peace'],
                  ['Analogy', 'Comparing political situation to familiar scenario', 'Government as a sinking ship; economy as a rollercoaster'],
                  ['Allusion', 'Reference to historical events, culture, literature', 'Titanic = doomed policy; David vs. Goliath = underdog fight'],
                  ['Speech Bubbles', 'Character dialogue or thoughts shown in bubbles', 'Reveal hypocrisy, irony, or direct opinion'],
                  ['Caption', 'Explanatory text above or below the image', 'Often a pun or punchline that unlocks the meaning'],
                ],
              })}

              ${renderSubhead('6-Step Analysis Method')}
              ${renderAccordion([
                { title: 'Step 1 — First Impression', content: '<p class="lz-prose">What is the general topic? What is your immediate emotional reaction? What strikes you first about the image? (Write this down before analysing — first impressions matter.)</p>' },
                { title: 'Step 2 — Describe Visual Elements', content: '<p class="lz-prose">Who and what is depicted? What are the figures doing? What is the setting? What text is included (captions, speech bubbles, labels)? Be factual — no interpretation yet. Use: "In the foreground/background… · The figure on the left/right… · The cartoon depicts…"</p>' },
                { title: 'Step 3 — Identify Techniques and Symbols', content: '<p class="lz-prose">Which specific visual techniques are used? (See table above.) What does each element symbolise? Why has the cartoonist chosen THIS symbol rather than another?</p>' },
                { title: 'Step 4 — Interpret the Message', content: '<p class="lz-prose">What is the cartoonist\'s central argument or criticism? What view of the situation does the cartoon present? What is NOT shown that might be deliberately omitted? Use: "The cartoon criticises… · The cartoonist\'s main point is… · This implies that…"</p>' },
                { title: 'Step 5 — Consider Context', content: '<p class="lz-prose">When was the cartoon published? What current event does it respond to? Who is the intended audience? What background knowledge is assumed? (A cartoon without context often cannot be fully understood.)</p>' },
                { title: 'Step 6 — Evaluate Effectiveness', content: '<p class="lz-prose">Is the message clear or ambiguous? Is the humour/satire effective? Does the cartoon achieve its purpose? Could it be misunderstood? Is it fair, exaggerated, or one-sided? Use: "The cartoon is effective because… · One limitation is… · A viewer who lacks context might…"</p>' },
              ])}

              ${renderInfobox({ type: 'blue', icon: 'fas fa-quote-left', title: 'Model Phrases for Cartoon Analysis', body: 'Describing: "The cartoon depicts / shows / portrays / illustrates…"<br>Identifying techniques: "The cartoonist uses [irony/symbolism/caricature] to…"<br>Interpreting: "The figure/object represents / symbolises / stands for…"<br>Cartoonist\'s message: "The cartoonist criticises / satirises / mocks / warns against…"<br>Evaluating: "The cartoon is effective / striking / thought-provoking because…"' })}
            `},

            { label: '📊 Graphs', content: `

              ${renderSubhead('Types of Visual Data')}
              ${renderTable({
                headers: ['Type', 'Best Used For', 'Analyse For'],
                rows: [
                  ['Line Graph', 'Changes over time, trends', 'Upward/downward trend, peaks, troughs, rate of change, comparisons between lines'],
                  ['Bar Chart', 'Comparing quantities across categories', 'Ranking, relative sizes, gaps between groups, changes over time if grouped'],
                  ['Pie Chart', 'Proportions of a whole (100%)', 'Dominant segment, minority segments, whether one category dominates'],
                  ['Table', 'Precise numerical comparison', 'Specific values, patterns across rows/columns, outliers, relative sizes'],
                  ['Scatter Plot', 'Relationship between two variables', 'Correlation (positive/negative/none), outliers, strength of relationship'],
                  ['Histogram', 'Distribution of continuous data', 'Skewness (left/right), normal distribution, range, modal class'],
                  ['Stacked Bar/Area', 'Composition AND comparison', 'Both overall size and internal proportions'],
                ],
              })}

              ${renderSubhead('DAIT Analysis Framework')}
              ${renderAccordion([
                { title: 'D — Describe', content: '<p class="lz-prose"><strong>What does the graph show?</strong><br>• Type: "The [bar chart / line graph / pie chart / table] …"<br>• Title, axes, units, time period, source<br>• Overall range of values<br>Use: "The graph/chart/diagram shows / illustrates / depicts / displays…" · "According to the [source], …"</p>' },
                { title: 'A — Analyse', content: '<p class="lz-prose"><strong>What patterns and trends are visible?</strong><br>• Overall direction (increasing/decreasing/stable?)<br>• Rate of change (sharp, steady, gradual, dramatic?)<br>• Notable peaks, troughs, turning points<br>• Comparisons between groups/countries/years<br>• Anomalies or outliers<br><br><strong>Trend vocabulary:</strong><br>UP: rise · increase · grow · climb · soar · surge · rocket · jump · double · triple<br>DOWN: fall · decrease · decline · drop · plunge · plummet · tumble · dip · halve<br>STABLE: remain stable · level off · plateau · hover around · stay constant · fluctuate<br>DEGREE: sharply · steeply · dramatically · rapidly · steadily · gradually · slightly · marginally</p>' },
                { title: 'I — Interpret', content: '<p class="lz-prose"><strong>What does this mean?</strong><br>• What conclusions can be drawn?<br>• What might explain the patterns?<br>• Are there correlations? (Careful: correlation ≠ causation!)<br>• What are the implications for policy, society, or behaviour?<br>Use: "This suggests / indicates / implies / demonstrates that…" · "One possible explanation is…" · "This could be attributed to…"</p>' },
                { title: 'T — Think Critically', content: '<p class="lz-prose"><strong>What are the limitations?</strong><br>• Source: who produced this data and why? Could it be biased?<br>• Sample: how was the data collected? How large is the sample?<br>• Time: is the data current? What might have changed?<br>• Misleading presentation: Y-axis not starting at zero; cherry-picked time period; 3D effects distorting proportions; correlation presented as causation<br>Use: "It should be noted that… · One limitation is… · The data does not show… · Correlation does not imply causation."</p>' },
              ])}

              ${renderInfobox({ type: 'warning', icon: 'fas fa-triangle-exclamation', title: 'Misleading Graphs — What to Look For', body: '<strong>Truncated Y-axis:</strong> Starting the axis at a high value makes small differences look dramatic.<br><strong>Cherry-picking:</strong> Showing only the years that support a particular narrative.<br><strong>3D effects:</strong> Distort proportions — front slices in a 3D pie chart appear larger.<br><strong>Correlation presented as causation:</strong> Two trends moving together does NOT mean one causes the other.' })}
            `},

            { label: '📄 Non-fictional Texts', content: `

              ${renderSubhead('Text Types at a Glance')}
              ${renderTable({
                headers: ['Text Type', 'Purpose', 'Key Features'],
                rows: [
                  ['News Article', 'Inform', 'Inverted pyramid; headline + lead; quotes; neutral (ostensibly)'],
                  ['Opinion Piece / Editorial', 'Persuade', 'Clear thesis; arguments + evidence; rhetorical appeals; counterarguments addressed'],
                  ['Speech', 'Persuade / inspire', 'Direct address ("you", "we"); tricolon; anaphora; call to action; emotional climax'],
                  ['Letter to the Editor', 'Argue / criticise / praise', 'Personal voice; clear position; formal register; specific references'],
                  ['Blog / Online Article', 'Inform / entertain', 'Conversational tone; short paragraphs; catchy headline; informal language possible'],
                  ['Report', 'Present findings', 'Sections/headings; impersonal; data and evidence; recommendations'],
                  ['Review', 'Evaluate', 'Description + judgment; evidence from the work; personal but supported opinion'],
                  ['Interview', 'Inform / reveal character', 'Question-answer format; quotation of responses; reveals attitude through language'],
                ],
              })}

              ${renderSubhead('5-Step Text Analysis Framework')}
              ${renderAccordion([
                { title: 'Step 1 — CONTEXT: Who, Where, When, Why', content: '<p class="lz-prose">• <strong>Author:</strong> Who wrote it? What is their perspective/background/agenda?<br>• <strong>Audience:</strong> Who is it aimed at? How does this shape the language?<br>• <strong>Purpose:</strong> To inform / persuade / entertain / critique / inspire?<br>• <strong>Publication:</strong> Where was it published? (Broadsheet vs. tabloid; left vs. right-wing; specialist vs. general)<br>• <strong>Date:</strong> When? What was happening politically/socially at the time?</p>' },
                { title: 'Step 2 — STRUCTURE: How is it organised?', content: '<p class="lz-prose">• <strong>Introduction:</strong> How does it open? Does it state a thesis? Ask a question? Use a hook?<br>• <strong>Body:</strong> How are arguments ordered? (strongest first? Chronological? Problem-solution?)<br>• <strong>Conclusion:</strong> Call to action? Summary? Question? Circular structure?<br>• <strong>Paragraphing:</strong> Short, punchy (tabloid) or long, developed (broadsheet, academic)?<br>• <strong>Transitions:</strong> Are arguments well-connected?</p>' },
                { title: 'Step 3 — CONTENT: What is argued?', content: '<p class="lz-prose">• <strong>Main claim / thesis:</strong> What is the writer\'s central argument or position?<br>• <strong>Supporting evidence:</strong> Statistics? Anecdotes? Expert testimony? Historical examples?<br>• <strong>Counterarguments:</strong> Are opposing views acknowledged and addressed?<br>• <strong>Bias:</strong> What is omitted? Whose perspective is missing?</p>' },
                { title: 'Step 4 — LANGUAGE: How is it said?', content: '<p class="lz-prose">• <strong>Tone:</strong> formal/informal, objective/subjective, angry/calm, ironic/sincere?<br>• <strong>Diction:</strong> emotive/neutral, technical/accessible, positive/negative connotations?<br>• <strong>Sentence structure:</strong> short/punchy or long/complex? Active or passive voice?<br>• <strong>Rhetorical devices:</strong> (see table below)<br>• <strong>Register:</strong> academic, journalistic, colloquial, political?</p>' },
                { title: 'Step 5 — EVALUATE: Does it achieve its purpose?', content: '<p class="lz-prose">• Is the argument logically consistent?<br>• Is the evidence credible and sufficient?<br>• Does the tone suit the purpose and audience?<br>• Is the text likely to persuade its target audience? Why/why not?<br>• What are its weaknesses or blind spots?<br>Use: "The text is effective because… · One weakness is… · The reader is likely to… · A more critical reader might question…"</p>' },
              ])}

              ${renderSubhead('Ethos · Pathos · Logos')}
              ${renderTable({
                headers: ['Appeal', 'Definition', 'How It Appears', 'Example'],
                rows: [
                  ['Ethos (Credibility)', 'Builds trust and authority', 'Credentials, expertise, balanced tone, appropriate register, acknowledging counterarguments', '"As a doctor with 20 years experience, I can tell you…"'],
                  ['Pathos (Emotion)', 'Appeals to feelings and values', 'Personal stories, vivid imagery, emotive vocabulary, appeals to fear/hope/guilt/pride', '"Think of the children who will suffer…"'],
                  ['Logos (Logic)', 'Appeals to reason and evidence', 'Statistics, facts, logical structure, cause-and-effect, expert testimony, analogies', '"Studies show that 87% of cases…"'],
                ],
              })}

              ${renderSubhead('Rhetorical Devices Quick Reference')}
              ${renderTable({
                headers: ['Device', 'Definition', 'Example', 'Effect'],
                rows: [
                  ['Anaphora', 'Repetition of word/phrase at start of sentences', '"We shall fight on the beaches… We shall fight on the seas…"', 'Builds rhythm, emphasis, emotional momentum'],
                  ['Tricolon / Rule of Three', 'Three parallel words or clauses', '"Government of the people, by the people, for the people"', 'Memorable, rhythmic, feels complete'],
                  ['Rhetorical Question', 'Question expecting no answer', '"Is this the kind of country we want to live in?"', 'Engages reader, implies answer, challenges assumptions'],
                  ['Direct Address', '"You," "we," "us" to include the reader', '"You have the power to change this"', 'Creates intimacy, shared identity, urgency'],
                  ['Hyperbole', 'Deliberate exaggeration', '"I\'ve told you a thousand times"', 'Emphasis, emotional intensity'],
                  ['Metaphor', 'Direct comparison (X is Y)', '"Society is a ship drifting without a captain"', 'Compresses meaning, makes abstract concrete'],
                  ['Contrast / Antithesis', 'Opposing ideas in parallel structure', '"Ask not what your country can do for you…"', 'Highlights difference, memorable, forceful'],
                  ['Parallelism', 'Similar grammatical structure', '"We need better schools, safer streets, cleaner air"', 'Rhythm, emphasis, feels balanced'],
                  ['Emotive Language', 'Words chosen to provoke strong emotion', '"innocent victims," "brutal regime," "devastating consequences"', 'Creates emotional response, sways opinion'],
                  ['Statistics / Data', 'Numbers used as evidence', '"Nine out of ten experts agree…"', 'Logos appeal — gives argument credibility'],
                ],
              })}

              ${renderCompare({
                titleA: '📰 Broadsheet (Quality Press)',
                titleB: '📰 Tabloid (Popular Press)',
                listA: [
                  'Longer, complex sentences and paragraphs',
                  'Technical / specialist vocabulary',
                  'Formal register',
                  'More balanced reporting (ostensibly)',
                  'Larger word count; more background',
                  'Examples: The Times, The Guardian, The Telegraph',
                ],
                listB: [
                  'Short, punchy sentences; bold headlines',
                  'Simple, accessible vocabulary',
                  'Informal / emotive register',
                  'More opinionated; emotional appeals',
                  'Short articles; sensationalist angle',
                  'Examples: The Sun, The Daily Mail, The Mirror',
                ],
              })}
            `},

          ]})}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Text Analysis', link: `${BASE}/themen/skills/text-analysis` },
            next: { label: 'Analyzing Fictional Texts', link: `${BASE}/themen/skills/analyzing-fiction` }
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