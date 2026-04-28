// pages/projekte/lernzettel/faecher/englisch/themen/skills/writing-strategies.js
// Writing Skills — 6.5: Different Writing Strategies

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

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const WS_TABS = [
  { key: 'texttypes',   label: '📄 Text Types' },
  { key: 'process',     label: '⚙️ Writing Process' },
  { key: 'phrasebank',  label: '📚 Phrasebank' },
];

export default class WritingStrategiesPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-writing-strategies';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() {
    const textTypesContent = renderAccordion([
      {
        title: '📝 Argumentative Essay',
        content: `
          ${renderInfobox({ type: 'blue', icon: 'fas fa-layer-group', title: 'Structure', body:
            '<strong>Introduction:</strong> Hook → Context → Thesis (your central claim)<br>' +
            '<strong>Body paragraph 1:</strong> Point → Evidence → Explanation → Link back<br>' +
            '<strong>Body paragraph 2:</strong> Point → Evidence → Explanation → Link back<br>' +
            '<strong>Counter-argument paragraph:</strong> Acknowledge → Refute or concede<br>' +
            '<strong>Conclusion:</strong> Restate thesis (new words) → Synthesis → Wider significance'
          })}
          ${renderTable({ headers: ['Do', 'Avoid'], rows: [
            ['State your thesis clearly in the introduction','Vague opening: "There are many opinions about this topic…"'],
            ['Use topic sentences to begin each paragraph','Starting paragraphs with evidence before the claim'],
            ['Integrate evidence with explanation (PEE/PEEL)','Listing evidence without explaining its significance'],
            ['Engage with counter-arguments — then refute them','Ignoring opposing views entirely'],
            ['Use hedged language where appropriate','Overclaiming: "It is absolutely certain that…"'],
            ['End with a strong synthesis, not just a summary','Merely repeating what you already said'],
          ]})}
          ${renderSubhead('Key Connectives')}
          ${renderTable({ headers: ['Function', 'Phrases'], rows: [
            ['Adding a point','Furthermore, / Moreover, / In addition, / What is more, / Not only that, but…'],
            ['Contrasting','However, / Nevertheless, / On the other hand, / Despite this, / Conversely,'],
            ['Conceding a point','Admittedly, / It is true that… / One could argue that… / Granted,'],
            ['Refuting','Yet, / Even so, / This argument fails to account for… / However, the evidence suggests…'],
            ['Giving reasons','because / since / as a result of / due to / given that'],
            ['Drawing conclusions','Therefore, / Consequently, / Thus, / It follows that… / This demonstrates that…'],
            ['Exemplifying','For example, / For instance, / To illustrate, / A case in point is…'],
            ['Emphasising','Indeed, / In fact, / It is significant that… / Crucially, / Above all,'],
          ]})}
        `,
      },
      {
        title: '💬 Discursive Essay (Discuss Both Sides)',
        content: `
          ${renderInfobox({ type: 'blue', icon: 'fas fa-balance-scale', title: 'Key Difference from Argumentative', body:
            'A discursive essay <strong>explores</strong> multiple perspectives without necessarily committing to one position — or commits only at the end. It is more exploratory and balanced. Common in Abitur tasks: "Discuss the advantages and disadvantages of…" or "Consider different views on…"'
          })}
          ${renderTable({ headers: ['Structure Option A (Block)', 'Structure Option B (Point-by-Point)'], rows: [
            ['Intro + Thesis','Intro + framing question'],
            ['All arguments FOR','Point FOR → Point AGAINST'],
            ['All arguments AGAINST','Point FOR → Point AGAINST'],
            ['Evaluation / your view','Point FOR → Point AGAINST'],
            ['Conclusion','Conclusion + nuanced position'],
          ]})}
          ${renderTable({ headers: ['Presenting both sides — Useful Phrases', ''], rows: [
            ['Proponents of [X] argue that…','Those who support [X] claim that…'],
            ['Critics, however, contend that…','On the other hand, it can be argued that…'],
            ['While it is true that… , one must also consider…','Although [X] has advantages, it also carries risks…'],
            ['The evidence suggests a more nuanced picture:…','Neither side has a monopoly on the truth here.'],
            ['Taking all considerations into account, it seems that…','On balance, the arguments in favour of… outweigh those against…'],
          ]})}
        `,
      },
      {
        title: '🎤 Speech',
        content: `
          ${renderInfobox({ type: 'blue', icon: 'fas fa-microphone', title: 'Key Principle', body:
            'A speech is written to be <strong>spoken</strong> and <strong>heard</strong> — not read. Every sentence should sound natural when delivered aloud. Use shorter sentences, more repetition, direct address, and rhetorical devices than you would in an essay.'
          })}
          ${renderTable({ headers: ['Structure', 'Content'], rows: [
            ['Opening','Greet the audience. Establish your authority/connection to the topic. Hook the audience with a bold statement, anecdote, or rhetorical question.'],
            ['Context','Briefly explain why this topic matters now. Create urgency.'],
            ['Main arguments (2–4)','Develop each clearly with evidence and examples. Use transitions the audience can hear.'],
            ['Call to action','What do you want the audience to do, feel, or think differently about?'],
            ['Closing','Return to your opening image/question. End memorably — a quote, a challenge, a vision.'],
          ]})}
          ${renderTable({ headers: ['Rhetorical Device', 'Example'], rows: [
            ['Direct address','Ladies and gentlemen, / My fellow citizens, / You — yes, you — have the power to…'],
            ['Inclusive "we"','We cannot afford to look away. / Together, we can build a better future.'],
            ['Rhetorical question','How much longer can we remain silent? / Is this the world we want to leave our children?'],
            ['Rule of three','We need courage, commitment, and collective action.'],
            ['Anaphora','We will not stop. We will not give up. We will not be silenced.'],
            ['Antithesis','The question is not whether we can afford to act — it is whether we can afford not to.'],
            ['Repetition for emphasis','This matters. This has always mattered. And this will continue to matter long after today.'],
          ]})}
        `,
      },
      {
        title: '✉️ Formal Letter',
        content: `
          ${renderTable({ headers: ['Layout Element', 'Notes'], rows: [
            ['Your address (top right)','Street, City, Postcode — or omit if not required'],
            ['Date','15 January 2026 (British) / January 15, 2026 (American)'],
            ['Recipient\'s address (left)','Name, Title, Organisation, Address'],
            ['Salutation','Dear Mr/Ms [Surname], (known) / Dear Sir or Madam, (unknown)'],
            ['Opening paragraph','State the purpose immediately: "I am writing to…"'],
            ['Body paragraphs','One point per paragraph. Evidence and explanation.'],
            ['Closing paragraph','State what you want to happen: "I would be grateful if…" / "I look forward to hearing from you."'],
            ['Sign-off','Yours sincerely, (if you used their name) / Yours faithfully, (if "Dear Sir/Madam")'],
          ]})}
          ${renderTable({ headers: ['Purpose → Useful Phrase', ''], rows: [
            ['Complaining','I am writing to express my deep concern about… / I was extremely disappointed to discover that…'],
            ['Applying (job/uni)','I am writing to apply for the position of… / I would like to be considered for…'],
            ['Requesting information','I would be grateful if you could provide… / I am writing to enquire about…'],
            ['Making a recommendation','I would strongly urge you to consider… / It is my firm belief that…'],
            ['Expressing support','I write to express my wholehearted support for… / I commend the decision to…'],
            ['Requesting action','I would ask that you take immediate steps to… / I call upon you to…'],
          ]})}
          ${renderInfobox({ type: 'warning', icon: 'fas fa-spell-check', title: 'Formal Letter Language Rules', body:
            '✅ Full forms only: "I am" not "I\'m" · "do not" not "don\'t"<br>' +
            '✅ Formal vocabulary: "obtain" not "get" · "request" not "ask" · "assist" not "help"<br>' +
            '✅ Hedged language: "I would be grateful if…" not "Give me…"<br>' +
            '❌ No colloquialisms, slang, or contractions<br>' +
            '❌ No exclamation marks<br>' +
            '❌ No emotionally charged language (even in a complaint — be firm, not aggressive)'
          })}
        `,
      },
      {
        title: '📄 Comment / Opinion Article',
        content: `
          ${renderInfobox({ type: 'blue', icon: 'fas fa-newspaper', title: 'What Makes a Comment Piece Different?', body:
            'A comment or opinion article (also called a column or op-ed) is a piece of writing in which the author <strong>openly expresses their own view</strong>. Unlike a news article, it is explicitly subjective. Unlike an essay, it can be more personal, vivid, and stylistically adventurous. Common in The Guardian, The Times, The Atlantic.'
          })}
          ${renderTable({ headers: ['Feature', 'Notes'], rows: [
            ['Strong opening','Begin with an anecdote, a striking image, a bold claim, or a provocative question — not a definition.'],
            ['Personal voice','First person is common. The author\'s personality should come through.'],
            ['Clear position','Unlike a discursive essay, a comment piece takes a clear side — usually from the start.'],
            ['Evidence + flair','Facts and statistics matter, but so does vivid language, metaphor, and wit.'],
            ['Audience awareness','Written for a specific outlet with a specific readership — the tone must match.'],
            ['Strong conclusion','End with a memorable line — a challenge, a vision, a twist, a return to the opening image.'],
          ]})}
          ${renderTable({ headers: ['Opening Strategies', 'Example'], rows: [
            ['Anecdote','Last Tuesday, I watched a politician claim poverty is a personal failing — while three food banks opened within a mile of his constituency office.'],
            ['Bold claim','The internet has made us simultaneously the most connected and most isolated generation in human history.'],
            ['Rhetorical question','When did we decide that our data was a fair price for free email?'],
            ['Striking statistic','Every 14 days, a language disappears. With it goes a way of seeing the world that can never be recovered.'],
            ['Paradox','In a country that prides itself on free speech, fewer and fewer people feel free to speak.'],
          ]})}
        `,
      },
      {
        title: '📊 Report',
        content: `
          ${renderInfobox({ type: 'blue', icon: 'fas fa-clipboard-list', title: 'Key Principle', body:
            'A report is a formal, structured document presenting findings and making recommendations. The tone is <strong>objective, impersonal, and factual</strong>. Unlike an essay, it uses headings, bullet points, and a clear layout to aid navigation.'
          })}
          ${renderTable({ headers: ['Section', 'Content'], rows: [
            ['Title / Heading','A clear title: "Report on…" or "An Investigation into…"'],
            ['Introduction / Aim','State the purpose of the report: "This report aims to examine… / The purpose of this report is to assess…"'],
            ['Findings','Present information — often using subheadings. Objective, factual. No personal opinion here.'],
            ['Conclusion','Summarise the key findings — concisely.'],
            ['Recommendations','What should be done? "It is recommended that… / The following measures are proposed…"'],
          ]})}
          ${renderTable({ headers: ['Formal Report Phrases', ''], rows: [
            ['This report aims to examine…','Opening purpose statement'],
            ['The findings indicate that…','Introducing findings neutrally'],
            ['It is evident from the data that…','Drawing a conclusion from evidence'],
            ['It is recommended that… be implemented.','Formal recommendation'],
            ['Further research would be required to…','Acknowledging limitations'],
            ['In light of the above, the following measures are proposed:','Transitioning to recommendations'],
          ]})}
        `,
      },
      {
        title: '✍️ Creative / Narrative Writing',
        content: `
          ${renderTable({ headers: ['Element', 'Notes'], rows: [
            ['Opening','Grab attention immediately — in media res (in the middle of the action), sensory detail, or a compelling voice. Avoid starting with "My name is…" or "It was a dark and stormy night."'],
            ['Voice','First or third person? Reliable or unreliable narrator? Consistent throughout.'],
            ['Show, don\'t tell','Don\'t write "She was sad." Write "She stared at the cold cup of tea for a long time before she poured it down the sink."'],
            ['Pacing','Short sentences = speed and urgency. Long sentences = reflection and slowdown. Vary consciously.'],
            ['Dialogue','Reveals character; advances plot; varies the texture of prose. Each speaker on a new line.'],
            ['Setting','Establish the where and when efficiently. Setting can reflect character or theme (pathetic fallacy).'],
            ['Structure','Consider: non-linear? Circular (return to opening)? Epistolary (letters/diary)? Frame narrative?'],
            ['Ending','Avoid neat resolutions unless deliberate. Ambiguity is often more powerful. Return to an opening image or theme.'],
          ]})}
          ${renderInfobox({ type: 'success', icon: 'fas fa-pen-fancy', title: '"Show, Don\'t Tell" — The Core Principle', body:
            '<strong>Tell:</strong> "John was nervous."<br>' +
            '<strong>Show:</strong> "John turned his phone over three times on the table. He cleared his throat twice. He checked the door again."<br><br>' +
            '<strong>Tell:</strong> "The city was depressing."<br>' +
            '<strong>Show:</strong> "Every shop front on the high street was boarded up except the pawnbroker and the pound shop, and they both had security cameras."'
          })}
          ${renderTable({ headers: ['Useful Vocabulary for Creative Writing', ''], rows: [
            ['Verbs of movement (precise)','shuffled, darted, lurched, sauntered, crept, froze, bolted'],
            ['Verbs of speaking (precise)','muttered, hissed, announced, conceded, whispered, snapped, ventured'],
            ['Sensory adjectives','acrid, velvet, metallic, searing, muffled, jagged, luminous'],
            ['Time phrases','Meanwhile, / Moments later, / The following morning, / For a long time, / Instantly,'],
            ['Transition into dialogue','"Well," she said finally. / He opened his mouth. Closed it. Then: "I don\'t know."'],
          ]})}
        `,
      },
      {
        title: '🔍 Summary / Précis',
        content: `
          ${renderInfobox({ type: 'blue', icon: 'fas fa-compress', title: 'Key Principle', body:
            'A summary (or précis) restates the main points of a text <strong>concisely, in your own words, in a logical order</strong>. Do not include your own opinion. Do not include minor details or examples — only the central argument and key points.'
          })}
          ${renderTable({ headers: ['Rule', 'Explanation'], rows: [
            ['Use your own words','Do not copy phrases from the original. Paraphrase everything.'],
            ['Be concise','Typical summary = ¼ to ⅓ of the original length. Cut all examples, illustrations, and repetition.'],
            ['Main points only','Identify the topic sentence of each paragraph — that is usually the key point.'],
            ['Maintain order','Follow the logic of the original (unless instructed otherwise).'],
            ['No personal opinion','A summary is objective — "The author argues that…" not "I think this is wrong."'],
            ['No quotation','Summarise in your own words — don\'t quote the text back.'],
          ]})}
          ${renderTable({ headers: ['Useful Phrases', ''], rows: [
            ['The author / writer argues that…','Introducing a summarised point'],
            ['According to the text / the author,…','Attributing the content to the source'],
            ['The main point of the passage is that…','Introducing the central argument'],
            ['The author goes on to explain that…','Moving to the next point'],
            ['Furthermore, the author notes that…','Adding another summarised point'],
            ['In conclusion, the text states that…','Closing the summary'],
          ]})}
        `,
      },
    ]);

    const processContent = `
      ${renderSubhead('The Writing Process — 5 Steps')}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-list-ol', title: 'PLAN → DRAFT → REVISE → EDIT → PROOFREAD', body:
        '<strong>1. Plan (5–10 min):</strong> Analyse the task. Identify text type, audience, purpose, register. Brainstorm ideas. Decide structure. Choose 3–4 main points.<br>' +
        '<strong>2. Draft:</strong> Write without stopping to correct. Get ideas on paper. Don\'t self-edit while writing.<br>' +
        '<strong>3. Revise (content):</strong> Does the argument make sense? Are there gaps? Is the structure clear? Does every paragraph earn its place?<br>' +
        '<strong>4. Edit (style):</strong> Vary sentence length. Upgrade weak verbs. Cut wordiness. Check transitions. Improve word choices.<br>' +
        '<strong>5. Proofread:</strong> Grammar. Spelling. Punctuation. Tense consistency. Subject-verb agreement.'
      })}
      ${renderSubhead('Analysing the Task — Before You Write')}
      ${renderTable({
        headers: ['Question', 'Why It Matters'],
        rows: [
          ['What text type is required?','Essay, speech, letter, report, comment — each has different conventions.'],
          ['Who is the audience?','A classmate? A politician? A newspaper readership? Determines register and vocabulary.'],
          ['What is the purpose?','To persuade? Inform? Entertain? Provoke? Different purposes need different strategies.'],
          ['What is the required register?','Formal / semi-formal / informal — this determines contractions, vocabulary, sentence length.'],
          ['How long should it be?','Know the word count — plan how many paragraphs and how much detail each needs.'],
          ['What is the topic?','What do you actually know about it? What examples can you use? Do you have a view?'],
        ],
      })}
      ${renderSubhead('Paragraph Structure — PEE / PEAL')}
      ${renderInfobox({ type: 'success', icon: 'fas fa-cube', title: 'P–E–E–L (Point · Evidence · Explanation · Link)', body:
        '<strong>Point:</strong> State your argument clearly in a topic sentence.<br>' +
        '<strong>Evidence:</strong> Support it with a fact, quotation, statistic, or example.<br>' +
        '<strong>Explanation:</strong> Explain HOW the evidence proves your point. This is the most important part and is most often missed.<br>' +
        '<strong>Link:</strong> Connect back to the thesis or forward to the next paragraph.<br><br>' +
        '<em>Example:</em><br>' +
        '<strong>P:</strong> Globalisation has failed to reduce inequality within wealthy nations.<br>' +
        '<strong>E:</strong> In the USA, the top 1% of earners captured 70% of all income growth between 1980 and 2020 (Piketty, 2020).<br>' +
        '<strong>E:</strong> This suggests that the benefits of free trade and open markets have been captured by those already at the top, rather than being distributed across society.<br>' +
        '<strong>L:</strong> It follows, therefore, that globalisation requires stronger redistributive policy if it is to serve as a force for social justice.'
      })}
      ${renderSubhead('Register — Matching Language to Context')}
      ${renderTable({
        headers: ['Feature', 'Formal', 'Semi-Formal', 'Informal'],
        rows: [
          ['Contractions','No contractions: "I am", "do not"','Mostly avoided','Common: "I\'m", "don\'t"'],
          ['Vocabulary','Latinate, precise: "obtain", "endeavour", "ascertain"','Mixed: "find out", "try"','Everyday: "get", "try", "find"'],
          ['Sentence length','Long, complex, subordinated','Varied','Short, punchy, colloquial'],
          ['First person','Avoided or used carefully','Acceptable','Common'],
          ['Passive voice','Common for impersonality','Sometimes','Rare'],
          ['Hedging','Frequent: "it could be argued that…"','Some hedging','Direct assertions'],
          ['Examples','"For instance,", "To illustrate,"','Same but shorter','"Like…", "For example,"'],
          ['Use','Academic essays, reports, formal letters','Quality press, speeches','Blogs, social media, personal letters'],
        ],
      })}
      ${renderSubhead('Common Weaknesses — and How to Fix Them')}
      ${renderTable({
        headers: ['Weakness', 'Problem', 'Fix'],
        rows: [
          ['Listing without explaining','Evidence cited but its significance never explained','Always ask "So what?" after every piece of evidence.'],
          ['Vague thesis','"There are many views on this topic…"','State your actual position: "I will argue that…" / "This essay contends that…"'],
          ['Missing counter-argument','One-sided — ignores opposition','Include one strong counter-argument and refute it specifically.'],
          ['Inconsistent register','Mixing formal and informal language','Decide register at the planning stage; check again when editing.'],
          ['Repetitive sentence structure','All sentences the same length and structure','Vary: long → short → medium. Subject-verb-object → inverted → subordinate clause first.'],
          ['Weak vocabulary','"very good", "very bad", "a lot of"','Upgrade: "exceptional", "inadequate", "considerable/substantial".'],
          ['No link sentences','Paragraphs feel disconnected','End each paragraph with a sentence that connects to the overall argument or next point.'],
          ['Factual errors','Making up statistics or misattributing quotes','Only use facts you are confident about; use hedged language otherwise: "It has been reported that…"'],
          ['Overlong conclusion','Merely repeating the essay in different words','Synthesise — show how the points together support a larger insight. Then stop.'],
        ],
      })}
    `;

    const phrasebankContent = `
      ${renderSubhead('Opening a Text')}
      ${renderTable({ headers: ['Text Type', 'Opening Phrases'], rows: [
        ['Essay','This essay will examine… / The central question addressed in this essay is… / Few issues are as contested as…'],
        ['Speech','Ladies and gentlemen, / My fellow [citizens/students/colleagues], / I stand before you today because…'],
        ['Formal letter','I am writing to [complain / enquire / request / express my concern about]…'],
        ['Comment piece','[Striking claim / anecdote / statistic]. / It is time to ask a question we have been avoiding.'],
        ['Report','This report aims to examine… / The purpose of this report is to assess…'],
      ]})}
      ${renderSubhead('Developing an Argument')}
      ${renderTable({ headers: ['Function', 'Phrases'], rows: [
        ['Stating a point','It is clear that… / One of the most significant factors is… / Central to this issue is…'],
        ['Adding evidence','This is evidenced by… / According to [source], … / As [X] demonstrates, …'],
        ['Explaining evidence','This suggests that… / This demonstrates that… / What this reveals is…'],
        ['Adding another point','Furthermore, / Moreover, / In addition, / What is more, / A further consideration is…'],
        ['Contrasting','However, / On the other hand, / In contrast, / Despite this, / Conversely,'],
        ['Conceding','Admittedly, … / It is true that… / One must acknowledge that… / Granted, … / While it may be the case that…'],
        ['Refuting','Nevertheless, … / Yet the evidence contradicts this… / This argument fails to account for…'],
        ['Giving an example','For instance, / For example, / To illustrate, / A case in point is… / Consider the example of…'],
        ['Emphasising','Crucially, / It is worth noting that… / Of particular significance is… / Indeed, / Above all,'],
        ['Expressing degree of certainty','It is certain that… / It is likely that… / It could be argued that… / It is possible that…'],
      ]})}
      ${renderSubhead('Concluding')}
      ${renderTable({ headers: ['Function', 'Phrases'], rows: [
        ['Summarising','In conclusion, / To sum up, / In summary, / Taking all this into account,'],
        ['Restating thesis','It is clear, therefore, that… / The evidence strongly suggests that…'],
        ['Synthesising','These factors together indicate… / Taken collectively, the arguments demonstrate…'],
        ['Looking forward','Unless action is taken, … / The coming years will determine whether…'],
        ['Call to action (speech/comment)','The time for debate is over. / We must act now. / The choice is ours to make.'],
        ['Final thought','As [X] once wrote, "…" / The question is no longer whether but when. / This is not the end of the story.'],
      ]})}
      ${renderSubhead('Hedging & Academic Caution')}
      ${renderTable({ headers: ['Instead of…', 'Consider…'], rows: [
        ['"It is definitely true that…"','"It is widely argued that… / The evidence suggests… / It appears that…"'],
        ['"Everyone agrees that…"','"It is generally accepted that… / Many commentators argue that…"'],
        ['"This proves that…"','"This demonstrates / indicates / implies / suggests that…"'],
        ['"Scientists say…"','"According to the IPCC / Research published in [journal] indicates that…"'],
        ['"I think…" (in formal essay)','This essay will argue that… / It can be contended that… / One may conclude that…'],
        ['"Obviously…"','"It is worth noting that… / It is significant that… / Crucially,"'],
      ]})}
      ${renderSubhead('Expressing Opinion — Formal to Informal')}
      ${renderTable({ headers: ['Formal (essay/report)', 'Semi-formal (comment/speech)', 'Avoid in formal writing'], rows: [
        ['This essay argues that…','I would argue that…','I think…'],
        ['It can be contended that…','In my view, …','I feel that…'],
        ['The evidence strongly suggests…','It seems to me that…','I believe that…'],
        ['One may conclude that…','What strikes me most is…','I reckon…'],
        ['It would appear that…','Surely we can all agree that…','Obviously…'],
      ]})}
    `;

    return `
      <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
        <div class="lz-sub-hero-inner">
          <div class="lz-sub-hero-orb" aria-hidden="true"></div>
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="${BASE}/themen/writing">Writing Skills</button>
            <i class="fas fa-chevron-right"></i><span>6.5 Writing Strategies</span>
          </nav>
          <h1 class="lz-sub-title">Writing<br><em>Strategies</em></h1>
          <p class="lz-sub-desc">Essay · Speech · Letter · Comment · Report · Creative · Summary · Phrasebank</p>
          ${renderTags(['Writing', 'Essay', 'Speech', 'Argument', 'Phrasebank', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section" style="padding-bottom:0;">
        <div class="lz-section-wrap">
          ${renderMerkboxGrid([
            { icon: 'fas fa-layer-group', title: '8 Text Types', text: 'Argumentative essay · Discursive essay · Speech · Formal letter · Comment piece · Report · Creative writing · Summary — each with structure, conventions, and key phrases.' },
            { icon: 'fas fa-gears', title: 'Writing Process', text: 'PLAN → DRAFT → REVISE → EDIT → PROOFREAD. Task analysis, paragraph structure (PEEL), register matching, and the 9 most common weaknesses with fixes.' },
            { icon: 'fas fa-book-open', title: 'Phrasebank', text: 'Comprehensive phrase lists for opening, developing, concluding, hedging, and expressing opinion — organised by function and formality level.' },
            { icon: 'fas fa-sliders', title: 'Register Guide', text: 'Full table comparing formal vs semi-formal vs informal across vocabulary, contractions, sentence length, hedging, and use of passive voice.' },
          ])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="ws-main-tabs" aria-label="Writing strategies">
            ${WS_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="texttypes">
            ${textTypesContent}
          </div>
          <div class="wim-category hidden" data-wim-cat="process">
            ${processContent}
          </div>
          <div class="wim-category hidden" data-wim-cat="phrasebank">
            ${phrasebankContent}
          </div>
        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Analyzing Fiction', link: `${BASE}/themen/skills/analyzing-fiction` },
            next: { label: 'Grammar Reference', link: `${BASE}/themen/grammar/reference` }
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}