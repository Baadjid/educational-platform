// pages/projekte/lernzettel/faecher/englisch/themen/skills/text-analysis.js
// Writing Skills — 6.2: Text Analysis

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable, renderSubhead,
  renderTags, renderAccordion, renderMerkboxGrid, renderTabs, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

// ─── WIM-Tab-Daten für device accordions (innere Tabs) ───
// Die Datei hat keine renderTabs auf oberster Ebene, sondern viele renderAccordion.
// Wir müssen trotzdem initWimTabs importieren und initialisieren, falls später Tabs hinzukommen.
// Derzeit keine Tabs – also nur initWimTabs aufrufen, aber kein Tab-Navigation.

export default class TextAnalysisPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-writing-text-analysis';
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
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="${BASE}/themen/writing">Writing Skills</button>
            <i class="fas fa-chevron-right"></i><span>6.2 Text Analysis</span>
          </nav>
          <h1 class="lz-sub-title">Text<br><em>Analysis</em></h1>
          <p class="lz-sub-desc">Structure · Content · Language · Stylistic Devices · Rhetorical Devices · Useful Phrases</p>
          ${renderTags(['Text Analysis', 'Stylistic Devices', 'Rhetoric', 'Register', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-sitemap', title: 'Structure First', text: 'Always analyse structure before language. How is the text organised? Introduction → argument → counter-argument → conclusion? How do paragraphs connect? What is foregrounded?' },
            { icon: 'fas fa-bullseye', title: 'Author\'s Purpose', text: 'Every text has a purpose: to inform, persuade, entertain, provoke, or a combination. Identify it early — it shapes every other choice the author makes.' },
            { icon: 'fas fa-palette', title: 'Language Choices', text: 'Why did the author choose these words and not others? Connotation, register, tone, rhetorical devices — language is never accidental in a well-crafted text.' },
            { icon: 'fas fa-users', title: 'Audience & Context', text: 'Who is this text written for? A broadsheet reader, a voter, a student? Context shapes everything: when was it written, where was it published, what was happening politically?' },
          ])}

          ${renderSubhead('Step 1 — Pre-Reading: TASK Framework')}
          ${renderInfobox({ type: 'blue', icon: 'fas fa-crosshairs', title: 'Before you read a word — identify:', body:
            '<strong>T — Text type:</strong> Is it a newspaper article, speech, letter, essay, advertisement, blog post?<br>' +
            '<strong>A — Author / speaker:</strong> Who wrote it? What is their position, background, agenda?<br>' +
            '<strong>S — Source / setting:</strong> Where was it published? The Guardian vs The Sun vs a political pamphlet — very different.<br>' +
            '<strong>K — Key topic:</strong> What is the text about at a glance? The headline, first sentence, date.'
          })}

          ${renderSubhead('Step 2 — Structure & Organisation')}
          ${renderTable({
            headers: ['Question', 'What to Look For'],
            rows: [
              ['How is the text organised?','Linear argument / chronological / problem-solution / compare-contrast / cause-effect?'],
              ['How does it begin?','Anecdote, rhetorical question, shocking statistic, bold claim, scene-setting? Why this opening?'],
              ['How does it end?','Call to action, return to opening image, summary, open question, warning?'],
              ['How are paragraphs structured?','Topic sentence + evidence + comment? Short punchy paragraphs vs long complex ones?'],
              ['How does the text progress?','Does it build an argument? Shift perspective? Introduce counter-arguments?'],
              ['What is foregrounded / emphasised?','What comes first in a sentence or paragraph is given prominence. Why?'],
              ['What is headline / subheadings?','Newspapers: how does the headline frame the story before you read a word?'],
            ],
          })}

          ${renderSubhead('Step 3 — Content & Argument')}
          ${renderTable({
            headers: ['Aspect', 'What to Analyse'],
            rows: [
              ['Main argument / thesis','What is the central claim? Is it stated explicitly or implied?'],
              ['Supporting arguments','What evidence, examples, or statistics are used? Are they reliable and relevant?'],
              ['Counter-arguments','Does the author acknowledge other views? How are they handled — refuted, conceded, dismissed?'],
              ['Bias & perspective','What viewpoint does the text represent? Whose voice is absent? What assumptions are made?'],
              ['Logical fallacies','Straw man, false dichotomy, ad hominem, appeal to authority — are any used?'],
              ['Factual vs opinion','How does the author blend fact and opinion? Are they clearly distinguished?'],
              ['Use of examples','Are examples specific or vague? Anecdotal or data-driven? Typical or exceptional?'],
            ],
          })}

          ${renderSubhead('Step 4 — Stylistic & Rhetorical Devices')}
          ${renderAccordion([
            {
              title: '🔤 Word-Level Devices (Lexis)',
              content: `
                ${renderTable({ headers: ['Device', 'German', 'Effect / Example'], rows: [
                  ['connotation','Konnotation','Words carry associations beyond literal meaning. "Refugee" vs "migrant" vs "economic migrant" — each frames the person differently.'],
                  ['denotation','Denotation','The literal, dictionary meaning of a word — without emotional loading.'],
                  ['emotive / loaded language','emotionale Sprache','Words chosen to provoke a strong emotional response: "slaughter," "innocent victims," "brave warriors."'],
                  ['register','Sprachebene','The level of formality — formal, informal, colloquial, technical, academic. Must match audience and purpose.'],
                  ['jargon','Fachjargon','Technical or specialist language. Establishes credibility with insiders; alienates outsiders.'],
                  ['colloquial language','Umgangssprache','Informal, everyday language. Creates warmth and familiarity; may undermine authority in formal writing.'],
                  ['euphemism','Euphemismus','"Friendly fire" for killing allies, "enhanced interrogation" for torture — softens harsh realities.'],
                  ['dysphemism','Dysphemismus','The opposite of euphemism — deliberately harsh: "die" instead of "pass away." Used for shock effect.'],
                  ['abstract noun','abstraktes Nomen','Love, freedom, justice — vague and emotionally resonant. Politicians use them to appeal broadly without being specific.'],
                  ['concrete noun','konkretes Nomen','Specific, tangible details ground the text and make it vivid and credible.'],
                  ['neologism','Neologismus','A newly coined word. Reveals cultural change and often has persuasive connotations: "fake news," "cancel culture," "woke."'],
                  ['archaism','Archaismus','Deliberately old-fashioned language — creates authority, tradition, solemnity.'],
                ]})}
              `,
            },
            {
              title: '🎭 Figures of Speech (Figurative Language)',
              content: `
                ${renderTable({ headers: ['Device', 'German', 'Effect / Example'], rows: [
                  ['simile','Vergleich','Direct comparison using "like" or "as": "The city spread out like a broken circuit board." Vivid and immediate.'],
                  ['metaphor','Metapher','Implicit comparison — calling something something else: "The government is a sinking ship." More powerful than a simile.'],
                  ['extended metaphor','ausgedehnte Metapher','A metaphor sustained over several sentences or the whole text — creates coherence and depth.'],
                  ['personification','Personifikation','Giving human qualities to non-human things: "Nature weeps," "The economy breathed a sigh of relief."'],
                  ['hyperbole','Hyperbel','Extreme exaggeration for effect: "I\'ve told you a million times." Emphasises emotion or importance.'],
                  ['understatement','Untertreibung / Litotes','Deliberately playing something down: "Losing your job is a bit inconvenient." Creates irony.'],
                  ['irony','Ironie','Saying one thing while meaning the opposite. Subtle and often used for satire.'],
                  ['sarcasm','Sarkasmus','A sharper, more aggressive form of irony — often meant to wound.'],
                  ['oxymoron','Oxymoron','Contradictory terms placed together: "deafening silence," "bitter sweet," "living death."'],
                  ['paradox','Paradox','A seemingly contradictory statement that contains truth: "The more we know, the more we realise we don\'t know."'],
                  ['symbolism','Symbolik','Using an object or image to represent something abstract — the dove for peace, the winter for death.'],
                  ['allusion','Anspielung','Reference to another text, historical event, or figure — relies on shared cultural knowledge.'],
                ]})}
              `,
            },
            {
              title: '🔊 Sound Devices',
              content: `
                ${renderTable({ headers: ['Device', 'German', 'Effect / Example'], rows: [
                  ['alliteration','Alliteration','Repetition of initial consonant sounds: "Peter Piper picked a peck." Creates rhythm, emphasis, memorability.'],
                  ['assonance','Assonanz','Repetition of vowel sounds within words: "The rain in Spain stays mainly on the plain." Creates musicality.'],
                  ['consonance','Konsonanz','Repetition of consonant sounds within or at the end of words. Creates texture.'],
                  ['onomatopoeia','Onomatopöie / Lautmalerei','Words that sound like what they describe: buzz, crash, sizzle, murmur. Makes writing vivid and sensory.'],
                  ['rhyme','Reim','In non-poetry contexts, end-rhyme makes phrases memorable: slogans, propaganda, political rhetoric.'],
                  ['rhythm','Rhythmus','The pattern of stressed and unstressed syllables. Short sentences = urgency. Long, flowing = calm authority.'],
                ]})}
              `,
            },
            {
              title: '📣 Rhetorical Devices (Persuasion Techniques)',
              content: `
                ${renderTable({ headers: ['Device', 'German', 'Effect / Example'], rows: [
                  ['rhetorical question','rhetorische Frage','A question not meant to be answered: "Can we really afford to wait?" Engages reader; implies an obvious answer.'],
                  ['repetition','Wiederholung','Repeating a word or phrase for emphasis: "We shall fight on the beaches, we shall fight on the landing grounds…" (Churchill).'],
                  ['anaphora','Anapher','Repetition of a word or phrase at the beginning of successive clauses. Very powerful in speeches.'],
                  ['epistrophe','Epiphora','Repetition at the END of successive clauses: "…of the people, by the people, for the people."'],
                  ['tricolon / rule of three','Dreiklang','Three parallel items: "Life, liberty, and the pursuit of happiness." Feels complete and satisfying.'],
                  ['antithesis','Antithese','Contrasting ideas placed in parallel: "That\'s one small step for man, one giant leap for mankind." Dramatic effect.'],
                  ['climax / gradation','Klimax','Ideas arranged in ascending order of importance or intensity — builds to a peak.'],
                  ['anticlimax','Antiklimax','Deliberate bathos — a high point followed by a sudden deflation. Often used for ironic effect.'],
                  ['apostrophe','Apostrophe (rhetorisch)','Directly addressing an absent person, group, or abstract idea: "O Death, where is thy sting?"'],
                  ['direct address','direkte Anrede','Speaking directly to the reader: "You must decide." Creates urgency and personal responsibility.'],
                  ['inclusive language','inklusive Sprache','"We," "us," "our" — draws the reader into a shared identity or responsibility.'],
                  ['appeal to emotion (pathos)','Pathos','Stirring feelings — fear, anger, compassion, hope — to persuade. Can manipulate.'],
                  ['appeal to logic (logos)','Logos','Using facts, statistics, and reasoned argument to persuade. Rational credibility.'],
                  ['appeal to authority (ethos)','Ethos','Establishing credibility through expertise, character, or shared values.'],
                  ['appeal to authority (external)','Berufung auf Autorität','Citing experts, statistics, or respected institutions to support a claim.'],
                  ['concession + rebuttal','Eingeständnis + Widerlegung','Acknowledging the opposing view then refuting it — shows intellectual honesty while strengthening your position.'],
                ]})}
              `,
            },
            {
              title: '📐 Sentence-Level Devices (Syntax)',
              content: `
                ${renderTable({ headers: ['Device', 'German', 'Effect'], rows: [
                  ['short sentence / minor sentence','kurzer / fragmentierter Satz','Creates impact, urgency, emphasis. "It stopped. The world held its breath."'],
                  ['long / complex sentence','langer / komplexer Satz','Shows intellectual depth; builds argument; can create a sense of flow or accumulation.'],
                  ['parataxis','Parataxe','Short, simple sentences in sequence — direct, powerful, urgent style (Hemingway).'],
                  ['hypotaxis','Hypotaxe','Complex, subordinated sentences showing nuanced relationships between ideas.'],
                  ['passive voice','Passiv','Hides the agent of an action: "Mistakes were made." Used to avoid responsibility or focus on the receiver of action.'],
                  ['active voice','Aktiv','The subject performs the action — direct, clear, energetic.'],
                  ['parenthesis','Einschub / Klammer','An aside inserted into a sentence — adds information without breaking the main flow.'],
                  ['colon','Doppelpunkt','Introduces an explanation or list — creates anticipation.'],
                  ['dash (—)','Gedankenstrich','Marks a pause or adds an afterthought — can create a dramatic effect — or seem breathless.'],
                  ['ellipsis (…)','Auslassungszeichen','Suggests an unfinished thought or trailing off… creates a sense of things unsaid.'],
                  ['inversion','Inversion','Reversing normal word order: "Rarely have I seen such courage." Creates emphasis and formality.'],
                  ['fronting','Frontstellung','Moving an element to the front of a sentence for emphasis: "This I cannot accept."'],
                ]})}
              `,
            },
          ])}

          ${renderSubhead('Step 5 — Tone, Register & Style')}
          ${renderTable({
            headers: ['Aspect', 'What to Identify', 'Examples'],
            rows: [
              ['Tone','The author\'s attitude to the subject and reader','Authoritative, cautious, ironic, passionate, objective, sympathetic, hostile, satirical, nostalgic'],
              ['Register','Level of formality','Formal (academic/legal), semi-formal (quality press), informal (blog/tabloid), colloquial (spoken)'],
              ['Mood','The atmosphere created in the reader','Urgent, hopeful, threatening, melancholy, outraged, reassuring'],
              ['Voice','First, second, or third person — and what effect','1st (personal, subjective), 2nd (direct address), 3rd (objective distance)'],
              ['Style','The overall character of the writing','Dense/accessible, journalistic/literary, clinical/emotive, concise/verbose'],
            ],
          })}

          ${renderSubhead('Text Types — What to Look For')}
          ${renderAccordion([
            { title: '📰 Newspaper Article / Editorial', content: `
              ${renderTable({ headers: ['Feature', 'Notes'], rows: [
                ['Headline','Creates a frame before reading begins. Plays on words, uses alliteration, omits articles (telegraphic style).'],
                ['Inverted pyramid structure','Most important information first; background and detail later. News articles can be cut from the bottom.'],
                ['Lead paragraph','Answers: Who? What? Where? When? Why? How? — in the first 1–3 sentences.'],
                ['Attribution','Quoting sources: "according to…", "she said…", "officials claimed…" — crucial for credibility.'],
                ['Broadsheet vs tabloid','Broadsheet (e.g. The Times, The Guardian): formal register, complex sentences, nuanced analysis. Tabloid (e.g. The Sun): short sentences, emotive language, sensationalism, larger fonts.'],
                ['Opinion vs news','News: attempts (but doesn\'t always achieve) objectivity. Editorial/comment: openly expresses opinion.'],
              ]})}
            `},
            { title: '🎤 Speech', content: `
              ${renderTable({ headers: ['Feature', 'Notes'], rows: [
                ['Audience address','Direct address ("my fellow Americans"), inclusive "we," second person "you."'],
                ['Rhetorical devices','Speeches rely heavily on the rule of three, anaphora, rhetorical questions, antithesis — designed to be spoken and remembered.'],
                ['Emotional arc','A good speech moves through emotional stages: establish common ground → identify problem → emotional peak → call to action.'],
                ['Repetition','Much more prominent than in written texts — needed because listeners can\'t re-read.'],
                ['Simple vocabulary','Great speeches use plain language. Complexity in ideas, not words: "I have a dream" — not "I have an aspiration."'],
                ['Rhythm and cadence','Sentences are designed to be spoken. Notice where a speaker would pause, breathe, build.'],
              ]})}
            `},
            { title: '✉️ Letter / Open Letter', content: `
              ${renderTable({ headers: ['Feature', 'Notes'], rows: [
                ['Salutation and closing','Formal: "Dear Sir/Madam… Yours faithfully." Informal: "Dear John… Best wishes."'],
                ['Direct personal address','A letter is written to a specific person — creates intimacy or formality depending on relationship.'],
                ['Open letter','Written to a named individual but intended for a public audience — the real audience is the readership.'],
                ['Tone','Can range from deferential to confrontational — how does the writer position themselves relative to the recipient?'],
                ['Purpose','What does the writer want? Information, apology, action, accountability?'],
              ]})}
            `},
            { title: '📝 Essay / Comment / Opinion Piece', content: `
              ${renderTable({ headers: ['Feature', 'Notes'], rows: [
                ['Thesis','Every good essay has a central argument — stated clearly, usually at the end of the introduction.'],
                ['Evidence','Quality of examples, statistics, quotations — how are they integrated and cited?'],
                ['Counterargument','Does the author engage with opposition? A sophisticated essay acknowledges and refutes counterarguments.'],
                ['Register','Academic essays: formal, hedged, impersonal. Opinion/comment pieces: may use first person, more direct.'],
                ['Conclusion','Returns to the thesis; synthesises the argument; may project forward or issue a call to action.'],
              ]})}
            `},
            { title: '📢 Advertisement', content: `
              ${renderTable({ headers: ['Feature', 'Notes'], rows: [
                ['Target audience','Every element is aimed at a specific demographic — identify who is being addressed.'],
                ['Appeal type','Emotional (pathos), rational (logos), aspirational (ethos/lifestyle). Which dominates?'],
                ['USP','Unique Selling Proposition — what makes this product different from competitors?'],
                ['Slogan','Short, memorable, often using alliteration, rhyme, or pun.'],
                ['Implicit vs explicit','Ads rarely state "buy this" directly — they imply a lifestyle, identity, or emotional benefit.'],
                ['Omission','What is deliberately not shown or said? What negative aspects are absent?'],
              ]})}
            `},
          ])}

          ${renderSubhead('Useful Phrases — Introducing & Structuring')}
          ${renderTable({
            headers: ['Function', 'Phrases'],
            rows: [
              ['Identifying the text','The text is a [newspaper editorial / political speech / open letter] published in / delivered at…'],
              ['Identifying the author\'s purpose','The author aims to / seeks to / intends to [inform / persuade / provoke / criticise]…'],
              ['Identifying the audience','The text appears to be aimed at / targeted at [a general readership / young voters / business leaders]…'],
              ['Introducing an analysis point','The author uses [device] to [effect]…'],
              ['Quoting the text','As the author states, "…" / The author\'s claim that "…" is supported by…'],
              ['Commenting on word choice','The choice of the word "[word]" is significant because it [connotes / implies / suggests]…'],
              ['Discussing tone','The tone is [authoritative / ironic / sympathetic] — this is conveyed through…'],
              ['Discussing structure','The text follows a [linear / problem-solution / climactic] structure, which [effect]…'],
              ['Linking analysis to purpose','This [device] reinforces the author\'s central argument that…'],
              ['Evaluating effectiveness','This technique is particularly effective because it [engages / persuades / provokes]…'],
            ],
          })}

          ${renderSubhead('Useful Phrases — Analysing Language')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['The use of [rhetorical question / tricolon / anaphora] creates…','Naming a device and its effect'],
              ['By employing [emotive language / euphemism], the author…','Connecting technique to authorial intent'],
              ['The word "[word]" carries connotations of…','Discussing lexical choice and connotation'],
              ['The author\'s diction is predominantly [formal / colloquial / technical], which…','Discussing register'],
              ['The passive construction "…" is used to obscure agency — suggesting…','Analysing passive voice for evasion'],
              ['The repetition of "…" throughout the text creates a sense of…','Discussing structural repetition'],
              ['The shift in tone from [X] to [Y] signals a change in…','Discussing tonal shifts'],
              ['The metaphor of "…" is extended throughout the paragraph, suggesting…','Discussing extended metaphor'],
              ['The inclusive pronoun "we" draws the reader into…','Analysing pronoun use'],
              ['The appeal to [emotion / logic / authority] is achieved through…','Identifying persuasive appeal'],
            ],
          })}

          ${renderSubhead('Useful Phrases — Evaluating')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['The text is [persuasive / one-sided / well-balanced] because…','Overall evaluation with justification'],
              ['While the argument is logically structured, it relies heavily on emotional appeals, which…','Critical evaluation of method'],
              ['The use of [device] is particularly effective in engaging the intended audience because…','Positive evaluation of technique'],
              ['However, the absence of [counter-argument / statistical evidence] weakens the author\'s claim that…','Identifying a weakness'],
              ['The text\'s most striking feature is its [tone / structure / use of language] — specifically…','Focusing the evaluation'],
              ['One could argue that the author\'s use of [emotive language] is manipulative because…','Critical/ethical evaluation'],
              ['The overall effect on the reader is one of [urgency / reassurance / outrage] — achieved primarily through…','Describing reader impact'],
            ],
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Useful Phrases', link: `${BASE}/themen/skills/useful-phrases` },
            next: { label: 'Writing Strategies', link: `${BASE}/themen/skills/writing-strategies` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}