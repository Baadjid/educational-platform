// pages/projekte/lernzettel/faecher/englisch/themen/skills/analyzing-fiction.js
// Skills – Kapitel 28 / 5.2: Analyzing Fictional Texts

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

export default class AnalyzingFictionPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-skills-fiction';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 28</span>
            <i class="fas fa-chevron-right"></i><span>Analyzing Fictional Texts</span>
          </div>
          <h1 class="lz-sub-title">Analyzing<br><em>Fictional Texts</em></h1>
          <p class="lz-sub-desc">Setting · Structure · Characterization · Stylistic Devices · Narrative Perspective</p>
          ${renderTags(['Fiction', 'Drama', 'Narrative', 'Stylistic Devices', 'Characterization'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-map-location', title: 'Setting', text: 'Time, place, social environment, and atmosphere. Setting is never neutral — it reflects character psychology, drives plot, and embodies themes.' },
            { icon: 'fas fa-chart-line', title: 'Plot Structure', text: 'Freytag\'s Pyramid: Exposition → Rising Action → Climax → Falling Action → Resolution/Catastrophe. Shakespeare and classical drama follow this.' },
            { icon: 'fas fa-user', title: 'Characterization', text: 'Direct (told) vs. Indirect (shown). Speech, thoughts, actions, appearance, effect on others, name. Round/flat, dynamic/static, foil.' },
            { icon: 'fas fa-eye', title: 'Narrative Perspective', text: 'Who tells the story shapes everything. First-person (intimate, unreliable?), third-person limited, omniscient, objective. Always ask: how reliable is the narrator?' },
          ])}

          ${renderTabs({ id: 'fiction-tabs', tabs: [

            { label: '🗺️ Setting & Structure', content: `

              ${renderSubhead('Setting — Time, Place, Atmosphere')}
              <p class="lz-prose">The <strong>setting</strong> creates the world of the text. It is never merely a backdrop — in skilled fiction, setting directly reflects character, drives conflict, and embodies themes.</p>

              ${renderTable({
                headers: ['Dimension', 'What to Analyse', 'Interpretive Questions'],
                rows: [
                  ['Temporal', 'Historical period, time of day, season, duration', 'What does the period reveal about social constraints? Does winter symbolise death or isolation? Does the single day create claustrophobia?'],
                  ['Spatial', 'Location, interior/exterior, social class of space', 'Does the city represent corruption and anonymity? Does the countryside suggest freedom or danger? Is the house a prison?'],
                  ['Atmospheric', 'Mood, sensory details, pathetic fallacy', 'Does the storm mirror the protagonist\'s inner turmoil? Does the darkness suggest moral ambiguity?'],
                  ['Social', 'Class, community, institutions', 'Does the setting constrain the characters? What freedoms/restrictions does it impose?'],
                ],
              })}

              ${renderInfobox({ type: 'blue', icon: 'fas fa-cloud-rain', title: 'Pathetic Fallacy', body: '<strong>Pathetic fallacy</strong> = when the natural environment mirrors a character\'s emotional state. Coined by John Ruskin. Examples: a storm during a character\'s breakdown; bright sunshine when they find hope; fog when confused. Always ask: is this coincidence in the narrative, or deliberate authorial choice? It is always the latter.' })}

              ${renderSubhead('Freytag\'s Pyramid — Classical Drama Structure')}
              ${renderTable({
                headers: ['Stage', 'Function', 'Romeo and Juliet', 'Macbeth'],
                rows: [
                  ['1. Exposition', 'Introduce characters, setting, conflict', 'Capulet-Montague feud; Romeo loves Rosaline', 'Witches\' prophecy; King Duncan; Macbeth\'s honour'],
                  ['2. Rising Action', 'Conflict develops; tension escalates', 'Romeo meets Juliet; secret marriage; Tybalt kills Mercutio', 'Macbeth kills Duncan; becomes king; kills Banquo'],
                  ['3. Climax / Turning Point', 'Peak tension; protagonist\'s fate sealed', 'Romeo kills Tybalt and is banished — point of no return', 'Banquo\'s ghost at the banquet — Macbeth\'s sanity fractures'],
                  ['4. Falling Action', 'Consequences unfold; doom approaches', 'Juliet fakes death; message doesn\'t reach Romeo', 'Macduff\'s family murdered; forces march on Macbeth'],
                  ['5. Catastrophe / Resolution', 'Final outcome (tragedy = death; comedy = marriage)', 'Double suicide; families reconcile — too late', 'Macbeth killed; Malcolm crowned; order restored'],
                ],
              })}

              ${renderSubhead('Types of Endings')}
              ${renderTable({
                headers: ['Type', 'Description', 'Example'],
                rows: [
                  ['Closed / resolved', 'All conflicts answered; we know what happens next', 'Comedy ending with marriage; mystery solved'],
                  ['Open / ambiguous', 'Questions remain; meaning is uncertain', '"The Turn of the Screw" — are the ghosts real?'],
                  ['Tragic', 'Protagonist dies or suffers irreversible loss', 'Romeo and Juliet; Hamlet; Macbeth'],
                  ['Twist', 'Unexpected revelation reframes everything', '"The Lottery"; "Fight Club"'],
                  ['Circular', 'Returns to the beginning; cyclical structure', '"The Great Gatsby" — Nick\'s final reflection'],
                  ['Ambivalent', 'Neither happy nor tragic; reality is complex', 'Most modern literary fiction'],
                ],
              })}

              ${renderInfobox({ type: 'warning', icon: 'fas fa-triangle-exclamation', title: 'Modern Variations', body: 'Not all works follow Freytag\'s structure. <strong>Modernist</strong> works often lack a clear climax. <strong>Postmodernist</strong> works may have non-linear or multiple timelines, meta-fictional elements, or deliberately refuse resolution. <strong>Stream of consciousness</strong> (Woolf, Joyce) replaces plot with interior experience. Always check whether the text follows or deliberately subverts expectations — the subversion is often the point.' })}
            `},

            { label: '👤 Characterization', content: `

              ${renderSubhead('Methods of Characterization')}
              ${renderCompare({
                titleA: '📢 Direct Characterization (Explicit)',
                titleB: '🎭 Indirect Characterization (Implicit)',
                listA: [
                  'Narrator tells the reader directly',
                  '"He was a greedy, calculating man."',
                  'Common in 19th century realist novels',
                  'Reader told what to think',
                  'Faster; less subtle',
                  'Can feel prescriptive — leaves little room for reader interpretation',
                ],
                listB: [
                  '"Show, don\'t tell" — reader infers character',
                  'Speech: what they say and how they say it',
                  'Thoughts: internal monologue, stream of consciousness',
                  'Actions: what they do (especially under pressure)',
                  'Appearance: dress, body language, facial expressions',
                  'Effect on others: how characters react to them',
                  'Name: symbolic names (Gradgrind = grinding people down)',
                ],
              })}

              ${renderSubhead('Character Types')}
              ${renderTable({
                headers: ['Type', 'Definition', 'Example'],
                rows: [
                  ['Protagonist', 'Central character; the story follows their journey', 'Hamlet, Scout Finch, Jay Gatsby'],
                  ['Antagonist', 'Opposes the protagonist; creates the central conflict', 'Claudius (Hamlet), Bob Ewell (TKAM)'],
                  ['Round character', 'Complex, multi-dimensional; has contradictions; surprises us', 'Elizabeth Bennet, Atticus Finch'],
                  ['Flat character', 'One-dimensional; a single dominant trait; often a stereotype', 'Minor characters in Victorian novels; Mr Collins (P&P)'],
                  ['Dynamic character', 'Changes significantly during the narrative', 'Scrooge (A Christmas Carol); Nora (A Doll\'s House)'],
                  ['Static character', 'Remains unchanged; often used as a contrast', 'Most minor characters; some antagonists'],
                  ['Foil', 'Character whose contrasting traits highlight the protagonist\'s qualities', 'Laertes vs. Hamlet; Tom vs. Gatsby'],
                  ['Anti-hero', 'Protagonist lacking conventional heroic qualities; morally ambiguous', 'Humbert Humbert (Lolita); Tony Soprano'],
                ],
              })}

              ${renderSubhead('Analysing Character Development')}
              ${renderAccordion([
                { title: '❓ Key Questions to Ask', content: '<p class="lz-prose">• Does the character change? How and why? Is it growth, deterioration, or revelation?<br>• What <strong>motivates</strong> the character? (internal desires vs. external pressures)<br>• What <strong>conflicts</strong> does the character face? (person vs. self | person vs. person | person vs. society | person vs. nature | person vs. fate)<br>• Does the character have an <strong>epiphany</strong> (sudden realisation)? What triggers it?<br>• How does the character\'s <strong>language and behaviour</strong> shift across the text?<br>• Are they <strong>reliable</strong> as a narrator or commentator, or are they self-deceived?</p>' },
                { title: '✍️ Analysing Dialogue', content: '<p class="lz-prose">• <strong>What is said vs. what is meant:</strong> Subtext — what the character cannot or will not say directly.<br>• <strong>How they speak:</strong> Vocabulary level, sentence length, use of questions vs. statements, hedging vs. confidence.<br>• <strong>Who they address:</strong> Are they honest with some characters and deceptive with others?<br>• <strong>What they avoid:</strong> Significant silences, topic changes, and evasions reveal as much as direct speech.<br>• <strong>Stage directions:</strong> In drama, how something is said (aside, whisper, shout) is as important as what is said.</p>' },
              ])}
            `},

            { label: '✨ Stylistic Devices', content: `

              ${renderSubhead('Complete Stylistic Devices Reference')}
              ${renderTable({
                headers: ['Device', 'Definition', 'Example', 'Effect'],
                rows: [
                  ['Simile', 'Comparison using "like" or "as"', '"My love is like a red, red rose" (Burns)', 'Creates vivid imagery; makes abstract concrete'],
                  ['Metaphor', 'Direct comparison (X is Y)', '"All the world\'s a stage" (Shakespeare)', 'Compresses meaning; reveals unexpected connections'],
                  ['Extended metaphor', 'A metaphor developed across a passage or whole text', 'Life as a journey throughout a novel', 'Creates structural unity; thematic depth'],
                  ['Personification', 'Giving human traits to objects/abstract concepts', '"The wind whispered through the trees"', 'Creates atmosphere; empathy with non-human things'],
                  ['Pathetic fallacy', 'Nature mirrors human emotion', '"The night was dark and stormy as she received the news"', 'Externalises inner state; creates atmosphere'],
                  ['Alliteration', 'Repetition of initial consonant sounds', '"Peter picked pickled peppers"', 'Musicality; emphasis; memorable'],
                  ['Assonance', 'Repetition of vowel sounds within words', '"Hear the lark and harken / To the barking dark"', 'Creates rhythm and mood; often melancholy (long vowels)'],
                  ['Onomatopoeia', 'Words that imitate the sounds they describe', '"Buzz," "hiss," "crack," "murmur"', 'Sensory immersion; immediacy'],
                  ['Symbol', 'Object/action/person representing an abstract idea', 'The green light in Gatsby = hope/the unattainable', 'Adds deeper meaning; rewards attentive reading'],
                  ['Motif', 'Recurring element that gains meaning through repetition', 'Blood in Macbeth; the colour white in Great Gatsby', 'Builds thematic significance; creates cohesion'],
                  ['Hyperbole', 'Deliberate exaggeration for effect', '"I\'ve told you a million times"', 'Emphasis; humour; emotional intensity'],
                  ['Understatement / Litotes', 'Deliberate minimising of something significant', '"It was not the most pleasant experience" (of a terrible event)', 'Irony; British restraint; reveals by hiding'],
                  ['Irony (verbal)', 'Saying the opposite of what is meant', '"Oh, brilliant plan!" (about a terrible plan)', 'Humour; critique; reveals hypocrisy'],
                  ['Irony (situational)', 'Events turn out the opposite of what is expected', 'A fire station burns down', 'Tragedy; critique; fate\'s indifference'],
                  ['Irony (dramatic)', 'Audience knows something the character doesn\'t', 'We know Romeo is alive when Juliet wakes', 'Suspense; pathos; tragedy'],
                  ['Foreshadowing', 'Hints of future events', 'A black cat crossing a character\'s path before disaster', 'Builds suspense; creates sense of fate'],
                  ['Flashback (analepsis)', 'Interruption to show past events', '"In Search of Lost Time" — triggered by taste of madeleine', 'Provides context; reveals motivation; creates contrast'],
                  ['Parallelism', 'Similar grammatical structures', '"We came, we saw, we conquered" (veni, vidi, vici)', 'Rhythm; emphasis; creates equivalence'],
                  ['Anaphora', 'Repetition of word/phrase at the start of successive clauses', '"We shall fight on the beaches…"', 'Builds rhythm and emotional intensity'],
                  ['Antithesis', 'Contrasting ideas in parallel structure', '"To be or not to be" · "It was the best of times, it was the worst of times"', 'Highlights contrast; memorable; philosophical'],
                  ['Juxtaposition', 'Placing contrasting elements side by side', 'Wealth next to poverty; innocence next to experience', 'Highlights contrast; creates meaning through comparison'],
                  ['Stream of consciousness', 'Unfiltered flow of thoughts and associations', 'James Joyce\'s "Ulysses"; Virginia Woolf\'s "Mrs Dalloway"', 'Psychological realism; intimacy; subjectivity'],
                ],
              })}

              ${renderInfobox({ type: 'blue', icon: 'fas fa-lightbulb', title: 'The Golden Rule of Device Analysis', body: '<strong>NEVER just name a device.</strong> Always follow with effect and purpose. The formula: "The author uses [device] — "[quote]" — which creates/suggests/conveys [effect]. This is effective because [reason/purpose]." Ask yourself: why THIS device? What would be lost if the author had simply stated the idea directly?' })}
            `},

            { label: '👁️ Narrative Perspective', content: `

              ${renderSubhead('The Five Narrative Perspectives')}
              ${renderTable({
                headers: ['Perspective', 'Pronouns', 'Knowledge', 'Effect', 'Examples'],
                rows: [
                  ['1st person (protagonist narrator)', 'I, we', 'Only own thoughts; limited to own experience', 'Intimacy; subjectivity; unreliable narrator possible; reader identifies with narrator', '"The Catcher in the Rye"; "Jane Eyre"; "Lolita"'],
                  ['1st person (peripheral narrator)', 'I, we', 'Observes the protagonist; limited knowledge', 'Allows objective view of protagonist while retaining human perspective; sense of mystery', '"The Great Gatsby" (Nick narrates Gatsby\'s story)'],
                  ['3rd person limited', 'He, she, they', 'Access to one character\'s thoughts only', 'Balance of intimacy and objectivity; reader limited to one perspective', '"Harry Potter"; most modern fiction'],
                  ['3rd person omniscient', 'He, she, they', 'All characters\' thoughts, past, future', 'Authoritative; allows multiple perspectives; "god-like" narrator; can be ironic', '19th century novels: Austen, Dickens, Tolstoy'],
                  ['3rd person objective (dramatic)', 'He, she, they', 'External actions only; no thoughts', 'Detached; cinematic; reader must interpret behaviour; creates ambiguity', 'Hemingway\'s "Hills Like White Elephants"'],
                  ['2nd person', 'You', 'Varies', 'Rare; immerses reader as protagonist; experimental; unsettling', '"If on a winter\'s night a traveller" (Calvino)'],
                ],
              })}

              ${renderSubhead('The Unreliable Narrator')}
              <p class="lz-prose">An <strong>unreliable narrator</strong> is one whose account of events cannot be fully trusted. The reader must read "between the lines" to piece together what is really happening.</p>

              ${renderTable({
                headers: ['Type of Unreliability', 'Description', 'Example'],
                rows: [
                  ['Mentally unstable / paranoid', 'Narrator is not in control of their faculties', '"The Tell-Tale Heart" (Poe) — insists he is sane while describing his own murder'],
                  ['Naive / innocent', 'Narrator lacks the knowledge to interpret events correctly', '"To Kill a Mockingbird" — Scout misunderstands adult racism; "The Curious Incident…" — Christopher processes events differently'],
                  ['Self-deceiving', 'Narrator lies to themselves, not consciously to us', '"The Remains of the Day" (Ishiguro) — Stevens cannot admit to himself that he wasted his life'],
                  ['Deliberately lying', 'Narrator tries to deceive the reader', '"Lolita" — Humbert Humbert attempts to justify his crimes'],
                  ['Limited knowledge', 'Narrator genuinely doesn\'t know what is happening', '"Gone Girl" — both narrators lack full information'],
                ],
              })}

              ${renderAccordion([
                {
                  title: '🔍 Analysing Narrative Perspective — Key Questions',
                  content: `<p class="lz-prose">• <strong>Why has the author chosen this perspective?</strong> What is gained that another perspective would not give?<br>
                            • <strong>How reliable is the narrator?</strong> Are there signs of self-deception, limited knowledge, or bias?<br>
                            • <strong>What do we NOT know?</strong> What is withheld from us, and why?<br>
                            • <strong>Narrative distance:</strong> Is the narrator close to events (present tense; present-day first person) or reflecting from the future (past tense; retrospective narration)?<br>
                            • <strong>Does the perspective shift?</strong> Some novels shift between narrators — each shift reveals what the previous narrator couldn't see or wouldn't admit.</p>`
                },
                {
                  title: '📖 Free Indirect Style (Erlebte Rede)',
                  content: `<p class="lz-prose"><strong>Free indirect style</strong> is a blend of third-person narration and first-person thought — the narrator "inhabits" a character without quotation marks or "she thought."<br><br>
                            Example: "She would write the letter tomorrow. There was no need to rush. He would understand."<br><br>
                            We can't tell if this is the narrator or the character's thoughts — it's deliberately both. Perfected by Jane Austen and used throughout modern fiction. Effect: irony; the reader often sees what the character cannot see about themselves.</p>`
                },
              ])}

              ${renderSubhead('Narrative Time')}
              ${renderTable({
                headers: ['Concept', 'Definition', 'Effect'],
                rows: [
                  ['Analepsis (Flashback)', 'Narrative returns to earlier event', 'Provides background; reveals hidden motivation; creates contrast with the present'],
                  ['Prolepsis (Flash-forward)', 'Narrative moves ahead of the present timeline', 'Creates anticipation; irony if reader knows outcome before character; sense of fate'],
                  ['In medias res', 'Story begins in the middle of action', 'Immediate engagement; context provided retrospectively'],
                  ['Ellipsis', 'Period of time deliberately omitted', 'Creates suspense or implies irrelevance of skipped period'],
                  ['Scene', 'Detailed, "real-time" narration', 'Slows pace; emphasises the moment; immersive'],
                  ['Summary', 'Condensed narration of longer periods', 'Speeds pace; covers necessary background quickly'],
                ],
              })}
            `},

          ]})}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Analyzing Non-fictional Texts', link: `${BASE}/themen/skills/analyzing-nonfiction` },
            next: { label: 'Different Writing Strategies', link: `${BASE}/themen/skills/writing-strategies` },
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