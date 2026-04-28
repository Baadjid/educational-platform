// pages/projekte/lernzettel/faecher/englisch/themen/literature/alternative-worlds.js
// Literature and Film – Kapitel 24 / 4.3: Exploring Alternative Worlds (Dystopias)

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

export default class AlternativeWorldsPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-literature-dystopia';
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
            <button data-link="${BASE}/themen/literature" class="lz-bread-link">Literature & Film</button>
            <i class="fas fa-chevron-right"></i><span>Kapitel 24</span>
            <i class="fas fa-chevron-right"></i><span>Exploring Alternative Worlds</span>
          </div>
          <h1 class="lz-sub-title">
            Exploring<br><em>Alternative Worlds</em>
          </h1>
          <p class="lz-sub-desc">
            Brave New World · Nineteen Eighty‑Four · Fahrenheit 451 · The Hunger Games · Common Features of Dystopias
          </p>
          ${renderTags(['Dystopia', 'Orwell', 'Huxley', 'Bradbury', 'Collins'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('24.1 Aldous Huxley: Brave New World (Novel, 1932)')}
          <h2 class="lz-h2 reveal">A World of Pleasure and Conditioning</h2>
          <p class="lz-prose reveal">
            Set in the year 2540 (AF 632), <em>Brave New World</em> imagines a future where humans are genetically
            engineered (Bokanovsky’s Process), psychologically conditioned, and kept docile by the drug <strong>soma</strong>
            and promiscuous sex. The World State is stable but shallow – art, love, family, and individuality have
            been eliminated.
          </p>
          ${renderAccordion([
            {
              title: '📖 Plot Summary',
              content: `<p class="lz-prose">• Bernard Marx (Alpha‑Plus) feels alienated; he visits a Savage Reservation with Lenina.<br>
                        • There they meet John “the Savage” (son of a woman from the World State) and his mother Linda.<br>
                        • John is brought to London, becomes a celebrity, but is disgusted by the World State’s emptiness.<br>
                        • He isolates himself, practices self‑flagellation, but is watched by tourists.<br>
                        • He eventually kills himself – unable to live in either world.</p>`
            },
            {
              title: '🏛️ Key Concepts',
              content: `<p class="lz-prose">• Bokanovsky’s Process – mass production of identical humans (Alpha to Epsilon castes)<br>
                        • Hypnopaedia – sleep‑teaching (“Ending is better than mending”)<br>
                        • Soma – pleasure drug with no side effects; keeps citizens happy and compliant<br>
                        • “Everyone belongs to everyone else” – promiscuity replaces love and monogamy</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Technology as social control – not through fear but through pleasure<br>
                        • Loss of humanity – art, religion, love, suffering are eliminated<br>
                        • Individual vs. society – Bernard and John are outsiders<br>
                        • Freedom vs. happiness – the World State offers happiness at the cost of freedom</p>`
            },
          ])}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-dna',
            title: 'Huxley’s Warning',
            body: 'Huxley feared that we would be destroyed by what we love – pleasure, entertainment, comfort. Neil Postman argued that Huxley’s vision (not Orwell’s) is more accurate for contemporary society.'
          })}

          ${renderSubhead('24.2 George Orwell: Nineteen Eighty‑Four (Novel, 1949)')}
          <h2 class="lz-h2 reveal">Big Brother Is Watching You</h2>
          <p class="lz-prose reveal">
            Set in Oceania, a totalitarian state ruled by the Party and its leader <strong>Big Brother</strong>.
            The protagonist, <strong>Winston Smith</strong>, works at the Ministry of Truth altering historical records.
            He begins a forbidden love affair with Julia and joins an underground resistance led by O’Brien – only
            to be betrayed, tortured, and ultimately broken.
          </p>
          ${renderAccordion([
            {
              title: '🏛️ Key Concepts',
              content: `<p class="lz-prose">• Big Brother – omnipresent leader (image on posters: “Big Brother is watching you”)<br>
                        • Thought Police – enforce orthodoxy; punish thoughtcrime<br>
                        • Newspeak – language designed to eliminate unorthodox thought<br>
                        • Doublethink – holding two contradictory beliefs simultaneously<br>
                        • Telescreens – surveillance devices in every room<br>
                        • Room 101 – contains the subject’s worst fear (Winston’s: rats)</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Totalitarianism and surveillance – the Party controls every aspect of life<br>
                        • Power – “Power is not a means, it is an end”<br>
                        • Truth and manipulation – “He who controls the past controls the future”<br>
                        • Resistance – Winston’s doomed attempt at rebellion<br>
                        • The fragility of truth – history is constantly rewritten</p>`
            },
            {
              title: '📜 Famous Quotes',
              content: `<p class="lz-prose">• “Big Brother is watching you.”<br>
                        • “War is peace. Freedom is slavery. Ignorance is strength.”<br>
                        • “If you want a picture of the future, imagine a boot stamping on a human face – forever.”<br>
                        • “He loved Big Brother.” (final line)</p>`
            },
          ])}
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-eye',
            title: 'Orwell’s Warning',
            body: 'Orwell feared that we would be destroyed by what we hate – surveillance, propaganda, totalitarianism. Many concepts (surveillance state, thought control, doublethink) remain highly relevant today.'
          })}

          ${renderSubhead('24.3 Ray Bradbury: Fahrenheit 451 (Novel, 1953)')}
          <h2 class="lz-h2 reveal">Burn the Books</h2>
          <p class="lz-prose reveal">
            In a future America, “firemen” burn books instead of putting out fires. The protagonist,
            <strong>Guy Montag</strong>, enjoys his job – until a young neighbour, Clarisse, makes him question his life.
            He begins stealing books, becomes a fugitive, and joins a community of outcasts who memorise books to preserve them.
          </p>
          ${renderAccordion([
            {
              title: '📖 Plot Summary',
              content: `<p class="lz-prose">• Montag meets Clarisse – she asks “Are you happy?”<br>
                        • He witnesses a woman burn with her books – a turning point.<br>
                        • Montag starts reading forbidden books; his wife Mildred reports him.<br>
                        • He kills Captain Beatty and flees.<br>
                        • Joins “the Book People” – intellectuals who memorise books; watches his city destroyed by war.</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Censorship – books are banned because they make people unhappy/uncomfortable<br>
                        • Technology and alienation – “parlor walls” (giant TVs) replace human interaction<br>
                        • Knowledge vs. ignorance – “There is nothing more frightening than ignorance in action”<br>
                        • Individuality – Montag’s transformation from conformist to rebel</p>`
            },
            {
              title: '🔥 Fire as Symbol',
              content: `<p class="lz-prose">• At first: destructive (burning books)<br>
                        • Later: transformative (the campfire where outcasts share knowledge)<br>
                        • Montag’s journey mirrors a phoenix – destruction and rebirth</p>`
            },
          ])}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-fire',
            title: 'Title Meaning',
            body: 'Fahrenheit 451 is the temperature at which paper burns (451°F / 233°C). The novel is a warning against censorship, anti‑intellectualism, and the dominance of mass media.'
          })}

          ${renderSubhead('24.4 Suzanne Collins: The Hunger Games (Trilogy, 2008‑2010)')}
          <h2 class="lz-h2 reveal">Teen Dystopian Phenomenon</h2>
          <p class="lz-prose reveal">
            Set in the nation of Panem (post‑apocalyptic North America), the wealthy Capitol rules over twelve
            impoverished districts. As punishment for a past rebellion, each year one boy and one girl from each
            district are chosen to fight to the death in the <strong>Hunger Games</strong>, broadcast live on television.
            The protagonist, <strong>Katniss Everdeen</strong>, volunteers to save her sister and becomes a symbol of rebellion.
          </p>
          ${renderAccordion([
            {
              title: '📖 Plot Summary (Book 1)',
              content: `<p class="lz-prose">• Katniss volunteers after her sister Prim is chosen.<br>
                        • She and Peeta Mellark are District 12’s tributes.<br>
                        • They are mentored by Haymitch (a former winner).<br>
                        • In the arena, Katniss survives through skill and cunning.<br>
                        • The “star‑crossed lovers” strategy wins public sympathy.<br>
                        • They threaten double suicide – forcing the Capitol to let both win.</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Media manipulation – the Games are reality TV designed to control the districts<br>
                        • Rebellion and revolution – Katniss becomes the “Mockingjay” (symbol of resistance)<br>
                        • Wealth inequality – the Capitol’s excess vs. the districts’ starvation<br>
                        • Survival and morality – how far will Katniss go to survive?<br>
                        • The spectacle of violence – televised death as entertainment</p>`
            },
            {
              title: '🎭 Main Characters',
              content: `<p class="lz-prose">• Katniss Everdeen – hunter, survivor, reluctant rebel<br>
                        • Peeta Mellark – kind, empathetic, skilled with words<br>
                        • Gale Hawthorne – Katniss’s hunting partner; represents violent resistance<br>
                        • President Snow – the Capitol’s ruthless leader<br>
                        • Haymitch Abernathy – cynical alcoholic mentor (former Games winner)</p>`
            },
          ])}
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-film',
            title: 'Film Adaptations',
            body: 'The Hunger Games film series (2012‑2015) starred Jennifer Lawrence as Katniss. It was a massive box office success and brought dystopian young adult fiction into the mainstream.'
          })}

          ${renderSubhead('24.5 Common Features of Dystopias')}
          <h2 class="lz-h2 reveal">What Makes a Dystopia?</h2>
          ${renderTable({
            headers: ['Feature', 'Description', 'Examples'],
            rows: [
              ['Totalitarian government', 'State controls all aspects of life', '1984 (Big Brother), Brave New World (World State)'],
              ['Surveillance', 'Constant monitoring to suppress dissent', '1984 (telescreens), Hunger Games (Capitol cameras)'],
              ['Loss of individuality', 'Conformity enforced; individual identity suppressed', 'Brave New World (castes), Fahrenheit 451 (conformist society)'],
              ['Manipulation of information', 'History rewritten, propaganda replaces truth', '1984 (Ministry of Truth), Hunger Games (Capitol propaganda)'],
              ['Technology as control', 'Technology used to oppress, not liberate', 'Brave New World (conditioning), 1984 (telescreens)'],
              ['The protagonist as rebel', 'Individual awakens to the truth and resists', 'Winston, Montag, Katniss, John the Savage'],
              ['Warnings about present trends', 'Dystopias exaggerate contemporary problems', 'Surveillance, consumerism, censorship, inequality'],
            ],
          })}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-book-open',
            title: 'Why Dystopian Fiction Matters',
            body: 'Dystopias serve as warnings. They ask: “If we continue on this path, where will we end up?” By imagining the worst, they inspire us to protect what we value – freedom, privacy, individuality, truth.'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Identity and Racial Prejudices', link: `${BASE}/themen/literature/identity-racial` },
            next: { label: 'Migration and Cross‑Cultural Encounters', link: `${BASE}/themen/literature/migration-cross-cultural` },
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