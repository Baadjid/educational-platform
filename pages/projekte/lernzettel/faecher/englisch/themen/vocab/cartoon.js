// ─────────────────────────────────────────────────────────────
// 5.8  Cartoon Analysis Vocabulary
// pages/projekte/lernzettel/faecher/englisch/themen/vocab/cartoon.js
// ─────────────────────────────────────────────────────────────

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable, renderSubhead,
  renderTags, renderAccordion, renderMerkboxGrid, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class CartoonVocabPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-vocab-cartoon';
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
            <button class="lz-bread-link" data-nav-link="${BASE}/themen/vocab">Vocabulary</button>
            <i class="fas fa-chevron-right"></i><span>5.8 Cartoon Analysis</span>
          </nav>
          <h1 class="lz-sub-title">Cartoon Analysis<br><em>Vocabulary</em></h1>
          <p class="lz-sub-desc">Devices · Structure · Describe · Interpret · Evaluate · Useful Phrases</p>
          ${renderTags(['Cartoon', 'Caricature', 'Satire', 'Symbolism', 'Irony', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-pencil', title: 'Political Cartoon', text: 'A drawing that uses satire, caricature, and symbolism to comment on political events or social issues. First appeared in the 18th century — still a powerful form of political commentary.' },
            { icon: 'fas fa-masks-theater', title: 'Caricature', text: 'A portrayal in which the subject\'s distinctive features are exaggerated for comic or satirical effect — e.g. a politician\'s large nose or ears emphasised to show vanity or dishonesty.' },
            { icon: 'fas fa-comment-slash', title: 'Irony & Satire', text: 'Irony: saying the opposite of what is meant. Satire: using humour, irony, and exaggeration to criticise and expose foolishness or wrongdoing in public life.' },
            { icon: 'fas fa-eye', title: 'Symbolism', text: 'Using objects, colours, or figures to represent abstract ideas. The dove = peace. The snake = danger or betrayal. Chains = oppression. The hourglass = time running out.' },
          ])}

          ${renderSubhead('Types of Cartoons')}
          ${renderTable({
            headers: ['Type', 'German', 'Notes'],
            rows: [
              ['political cartoon','politische Karikatur','Commentary on political events — uses exaggeration, symbolism, irony. Appears in newspapers and magazines.'],
              ['caricature','Karikatur','A portrait exaggerating the subject\'s features for satirical effect — not always political.'],
              ['editorial cartoon','Leitartikel-Karikatur','Published alongside or instead of a written editorial — expresses the newspaper\'s political stance.'],
              ['comic strip','Comicstrip / Comic','A sequence of panels telling a story. Can be humorous or serious; may contain social commentary.'],
              ['single-panel cartoon','Einzelbild-Karikatur','One image without a sequence — relies on a caption or label to convey its message.'],
              ['cartoon caption','Bildunterschrift / Beschriftung','The text below or within a cartoon — often contains the central message or punchline.'],
              ['speech bubble / speech balloon','Sprechblase','A bubble showing what a character is saying or thinking.'],
              ['thought bubble','Gedankenblase','Shows what a character is thinking — as opposed to saying.'],
            ],
          })}

          ${renderSubhead('Devices & Techniques')}
          ${renderTable({
            headers: ['Device', 'German', 'How it works / Example'],
            rows: [
              ['symbolism','Symbolik','Using an object or figure to represent an idea. Dove = peace; chain = oppression; hourglass = running out of time; scales = justice.'],
              ['caricature','Karikatur','Exaggerating a person\'s features — large ears (to suggest he is listening to someone), red face (anger), oversized briefcase (too much power).'],
              ['irony','Ironie','Saying or depicting the opposite of what is meant. A cartoon showing a "peace" conference with guns on the table.'],
              ['satire','Satire','Using humour, irony, and exaggeration to criticise. Satirising a politician\'s hypocrisy by showing them preaching morality while doing the opposite.'],
              ['exaggeration / hyperbole','Übertreibung / Hyperbel','Making something appear much bigger, smaller, more extreme than it is — to make a point about its importance or absurdity.'],
              ['juxtaposition','Gegenüberstellung','Placing contrasting images or figures side by side — e.g. a fat banker and a starving worker to comment on inequality.'],
              ['allusion','Anspielung','A reference to a historical event, person, or cultural text that the reader is expected to recognise.'],
              ['metaphor','Metapher','A direct comparison — the politician depicted as a puppet with strings pulled by a corporate figure.'],
              ['analogy','Analogie','A comparison between two things to explain or comment on one via the other.'],
              ['label / caption','Beschriftung / Bildunterschrift','Text on objects or characters within the cartoon that clarifies or adds meaning — e.g. a figure labelled "Government," a wall labelled "Public Opinion."'],
              ['stereotype','Stereotyp','Using a cultural shorthand to identify a character — e.g. a politician in a suit and tie, a farmer in overalls. Sometimes used critically to expose stereotyping.'],
              ['proportion / scale','Proportionen / Maßstab','Deliberately making some elements much larger or smaller — a CEO towering over tiny workers, for example.'],
              ['setting / background','Hintergrund / Kulisse','The environment depicted — provides context. A government building, a factory, a battlefield. Often symbolic.'],
              ['body language','Körpersprache','How characters are positioned and what they do — a cowering figure = weakness; raised fist = resistance; averted gaze = guilt.'],
              ['facial expression','Mimik / Gesichtsausdruck','Exaggerated expressions communicate character: smug grin, fearful eyes, righteous anger.'],
              ['pun','Wortspiel','A play on words — often in the caption. Works in English cartoons where a word has two meanings.'],
              ['black humour','Schwarzer Humor','Dark or morbid humour about serious subjects — e.g. cartoons about war or disaster that use absurdist comedy.'],
            ],
          })}

          ${renderSubhead('Structure of a Cartoon Analysis')}
          ${renderInfobox({ type: 'blue', icon: 'fas fa-list-ol', title: 'Schritt-für-Schritt: DESCRIBE → INTERPRET → EVALUATE', body:
            '<strong>1. DESCRIBE (Was ist zu sehen?):</strong> Describe what you can literally see. People, objects, setting, caption, labels, speech bubbles. Do not interpret yet.<br><br>' +
            '<strong>2. INTERPRET (Was bedeutet es?):</strong> Explain the meaning of the devices. What does the cartoonist want to say? What is the message? Which techniques are used and what do they convey?<br><br>' +
            '<strong>3. EVALUATE (Wie wirkungsvoll ist es?):</strong> Is the cartoon convincing, effective, fair? Does it oversimplify? Does it achieve its purpose? Do you agree with the cartoonist\'s position?'
          })}

          ${renderSubhead('Useful Phrases — Describing')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['The cartoon depicts / shows / illustrates…','Neutral opening for description'],
              ['In the foreground / background, we can see…','Describing different parts of the image'],
              ['The central figure / character is…','Identifying the main subject'],
              ['The caption / speech bubble reads: "…"','Introducing text within the cartoon'],
              ['The cartoon is set in / against a backdrop of…','Describing the setting'],
              ['The figure is dressed in / wearing…','Describing appearance'],
              ['At the bottom / top / left / right of the cartoon…','Spatial description'],
              ['The most striking feature of the cartoon is…','Drawing attention to a key element'],
              ['The objects / figures are labelled "…"','Describing labels'],
            ],
          })}

          ${renderSubhead('Useful Phrases — Interpreting')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['The cartoonist uses [device] to suggest / imply / convey that…','Linking technique to meaning'],
              ['The symbol of [object] represents / stands for / is used to illustrate…','Explaining symbolism'],
              ['By depicting [X] as [Y], the cartoonist emphasises / criticises / mocks…','Explaining caricature or metaphor'],
              ['The juxtaposition of [A] and [B] highlights the contrast between…','Explaining juxtaposition'],
              ['The irony lies in the fact that…','Identifying irony'],
              ['The exaggeration of [feature] serves to emphasise…','Explaining hyperbole'],
              ['This alludes to / refers to [historical event / person], suggesting that…','Explaining an allusion'],
              ['The overall message / central argument of the cartoon is that…','Summarising the message'],
              ['The cartoonist is clearly critical of / sympathetic towards…','Identifying the cartoonist\'s perspective'],
              ['This implies that the cartoonist believes / argues…','Inferring position from visual evidence'],
              ['The body language of [character] suggests…','Reading non-verbal cues'],
              ['The setting creates an atmosphere of…','Interpreting the background'],
            ],
          })}

          ${renderSubhead('Useful Phrases — Evaluating')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['The cartoon is highly effective because…','Positive evaluation'],
              ['The message is conveyed clearly and memorably through…','On clarity and impact'],
              ['However, the cartoon oversimplifies the issue by…','Balanced critique'],
              ['The use of [device] makes the cartoon particularly powerful.','Evaluating a specific technique'],
              ['One could argue that the cartoon is one-sided / biased because…','Critical evaluation of perspective'],
              ['The humour / satire makes the criticism more palatable / accessible.','On the role of humour'],
              ['The cartoon may be unfair to [group] because it relies on stereotypes.','Ethical evaluation'],
              ['While the cartoon exaggerates, it captures a fundamental truth about…','Defending exaggeration as effective'],
              ['The visual impact of the cartoon is immediate — the message is understood at a glance.','On visual efficiency'],
              ['I find the cartoon [convincing / provocative / unfair] because…','Personal evaluation with justification'],
              ['Compared to a written argument, the cartoon conveys its message more directly / emotionally.','Comparing modes of expression'],
            ],
          })}

          ${renderSubhead('Common Cartoon Symbols')}
          ${renderTable({
            headers: ['Symbol', 'What it Represents'],
            rows: [
              ['dove','peace'],
              ['olive branch','peace, reconciliation'],
              ['scales / balance','justice, law, fairness'],
              ['snake / serpent','danger, deception, evil, temptation'],
              ['chains / shackles','oppression, slavery, restriction'],
              ['hourglass','time running out, urgency'],
              ['dollar sign ($)','money, capitalism, corporate power'],
              ['eagle','the USA (also: strength, freedom)'],
              ['bear','Russia (also: strength, aggression)'],
              ['dragon','China (also: power, danger)'],
              ['lion','Great Britain, strength'],
              ['bulldog','stubbornness, British determination'],
              ['Uncle Sam','the USA government/people'],
              ['John Bull','traditional British character'],
              ['puppet on strings','lack of independence, control by another'],
              ['iceberg','hidden dangers (tip of the iceberg)'],
              ['sinking ship','failure, disaster, collapse'],
              ['ostrich (head in sand)','willful ignorance, denial of problems'],
              ['ticking clock / bomb','imminent crisis or deadline'],
              ['wall / barrier','division, exclusion, protectionism'],
              ['umbrella','protection, the welfare state'],
              ['ladder','opportunity, social mobility (or: being removed from a ladder = loss of opportunity)'],
            ],
          })}

        </div>
      </section>
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Work & Career', link: `${BASE}/themen/vocab/work` },
            next: { label: 'Useful Phrases', link: `${BASE}/themen/skills/useful-phrases` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}