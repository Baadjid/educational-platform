// pages/projekte/lernzettel/faecher/englisch/themen/literature/migration-cross-cultural.js
// Literature and Film – Kapitel 25 / 4.4: Migration and Cross‑Cultural Encounters

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

export default class MigrationCrossCulturalPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-literature-migration';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 25</span>
            <i class="fas fa-chevron-right"></i><span>Migration & Cross‑Cultural Encounters</span>
          </div>
          <h1 class="lz-sub-title">
            Migration &<br><em>Cross‑Cultural Encounters</em>
          </h1>
          <p class="lz-sub-desc">
            Joseph Conrad · Rabbit‑Proof Fence · Ngũgĩ wa Thiong’o · Salman Rushdie · Arrival · Zadie Smith
          </p>
          ${renderTags(['Migration', 'Colonialism', 'Cross‑cultural', 'Short Story', 'Film'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('25.1 Joseph Conrad: An Outpost of Progress (Short Story, 1896)')}
          <h2 class="lz-h2 reveal">Colonial Incompetence in the Congo</h2>
          <p class="lz-prose reveal">
            This early short story by Joseph Conrad (pre‑<em>Heart of Darkness</em>) follows two European traders,
            Kayerts and Carlier, who are left to manage a trading post in the African Congo. They are incompetent,
            lazy, and quickly descend into squalor and madness. The story critiques colonialism as self‑destructive
            and morally bankrupt.
          </p>
          ${renderAccordion([
            {
              title: '📖 Plot Summary',
              content: `<p class="lz-prose">• Kayerts and Carlier are stationed at a remote trading post.<br>
                        • They have little to do; boredom leads to arguments and decay.<br>
                        • A local African worker, Makola, actually runs the post.<br>
                        • Makola trades ivory with passing slave traders without the Europeans’ knowledge.<br>
                        • When Kayerts accidentally kills Carlier in a quarrel, he hangs himself.</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Colonial incompetence – the Europeans are useless and dependent on Africans<br>
                        • Moral decay – isolation strips away civilised veneer<br>
                        • The brutality of colonialism – Makola’s involvement in the slave trade<br>
                        • Irony – the outpost is an “outpost of progress” that achieves nothing</p>`
            },
          ])}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-ship',
            title: 'Connection to Heart of Darkness',
            body: 'An Outpost of Progress anticipates many themes of Heart of Darkness (1899): the failure of colonialism, the thin veneer of civilisation, and the Congo as a place of moral testing.'
          })}

          ${renderSubhead('25.2 Rabbit‑Proof Fence (Film, 2002)')}
          <h2 class="lz-h2 reveal">The Stolen Generations</h2>
          <p class="lz-prose reveal">
            Directed by Phillip Noyce, <em>Rabbit‑Proof Fence</em> tells the true story of three Aboriginal girls –
            Molly, Daisy, and Gracie – who were forcibly removed from their families in 1931 as part of Australian
            government policy (the “Stolen Generations”). They escape the settlement and walk 1,500 miles along the
            rabbit‑proof fence to return home.
          </p>
          ${renderAccordion([
            {
              title: '📖 Historical Background',
              content: `<p class="lz-prose">• The “Stolen Generations” (1910‑1970) – Aboriginal children forcibly removed from their families.<br>
                        • Official policy of assimilation – “Kill the Indian, save the man” (similar to US boarding schools).<br>
                        • Children were placed in institutions or with white families; many suffered abuse.<br>
                        • The policy caused lasting trauma and cultural loss.</p>`
            },
            {
              title: '🎬 Key Scenes and Themes',
              content: `<p class="lz-prose">• The girls’ capture and removal to Moore River settlement.<br>
                        • Their escape and journey following the fence (using traditional tracking skills).<br>
                        • The relentless pursuer (Moodoo, a tracker) who ultimately lets them go.<br>
                        • The fence as symbol of white control over Aboriginal land.<br>
                        • Resilience, family bonds, and the connection to the land.</p>`
            },
            {
              title: '🏆 Awards and Impact',
              content: `<p class="lz-prose">• Nominated for numerous awards (AFI, BAFTA).<br>
                        • Increased public awareness of the Stolen Generations.<br>
                        • In 2008, Prime Minister Kevin Rudd issued a formal apology to Indigenous Australians.</p>`
            },
          ])}
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-child',
            title: 'The Stolen Generations',
            body: 'An estimated 100,000 Aboriginal children were removed from their families between 1910 and 1970. The trauma continues to affect Indigenous communities today.'
          })}

          ${renderSubhead('25.3 Ngũgĩ wa Thiong’o: A Meeting in the Dark (Short Story, 1974)')}
          <h2 class="lz-h2 reveal">Colonialism, Religion, and Family</h2>
          <p class="lz-prose reveal">
            Set in colonial Kenya, the story follows <strong>John</strong>, a young Kikuyu man studying to become a pastor.
            He has a secret relationship with a girl named Wamuhu, who becomes pregnant. John’s father, a devout
            Christian convert, would be shamed by this. Fearing expulsion and disgrace, John makes a fateful decision.
          </p>
          ${renderAccordion([
            {
              title: '📖 Plot Summary (Spoilers)',
              content: `<p class="lz-prose">• John has impregnated Wamuhu.<br>
                        • He cannot marry her because his father (a strict Christian elder) would disown him.<br>
                        • He fears losing his chance to become a pastor.<br>
                        • In desperation, he strangles Wamuhu.<br>
                        • The story ends with John returning home, his soul “dark” – a meeting with evil.</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Colonial Christianity – the father’s rigid morality, judgment, and hypocrisy<br>
                        • Shame and reputation – John’s fear of losing status drives him to murder<br>
                        • The clash of traditional and colonial values – the “darkness” within John<br>
                        • The destructive effects of colonialism on African psyches</p>`
            },
          ])}

          ${renderSubhead('25.4 Salman Rushdie: Good Advice Is Rarer than Rubies (Short Story, 1994)')}
          <h2 class="lz-h2 reveal">Visa Bureaucracy and Deception</h2>
          <p class="lz-prose reveal">
            Miss Rehana, a young Pakistani woman, arrives at the British embassy in Lahore to apply for a visa
            to join her fiancé in London. A man named Muhammad Ali (a “visa‑fixer”) offers to help her, claiming
            he can get her the visa for a price. She refuses – but it turns out she doesn’t want the visa anyway.
            The story explores gender, power, and the illusions of the West.
          </p>
          ${renderAccordion([
            {
              title: '📖 Plot Summary',
              content: `<p class="lz-prose">• Miss Rehana waits outside the British embassy.<br>
                        • Muhammad Ali approaches her, offering to “fix” her visa application.<br>
                        • He gives her “good advice” – what to say to the visa officer.<br>
                        • She refuses his help and goes in for her interview.<br>
                        • Later, Ali sees her coming out – she has been rejected, but she smiles.<br>
                        • She admits she never wanted the visa; her family forced her to apply.<br>
                        • Ali realises his “good advice” was worthless – her freedom was not in the visa but in staying.</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Gender and autonomy – Rehana defies family expectations<br>
                        • The myth of the West – not everyone wants to emigrate<br>
                        • Power and manipulation – Ali thinks he has the answers but is outwitted<br>
                        • Irony – the “good advice” is irrelevant</p>`
            },
          ])}
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-feather-alt',
            title: 'Salman Rushdie',
            body: 'British‑Indian novelist known for <em>Midnight’s Children</em> and <em>The Satanic Verses</em> (which led to a fatwa). His work explores migration, identity, and postcolonialism.'
          })}

          ${renderSubhead('25.5 Arrival (Film, 2016)')}
          <h2 class="lz-h2 reveal">First Contact and Language</h2>
          <p class="lz-prose reveal">
            Directed by Denis Villeneuve, <em>Arrival</em> stars Amy Adams as Dr. Louise Banks, a linguist hired
            by the US military to communicate with extraterrestrial visitors. The aliens’ language (circular symbols)
            has no concept of linear time – learning it rewires Louise’s brain, allowing her to experience past,
            present, and future simultaneously.
          </p>
          ${renderAccordion([
            {
              title: '📖 Plot Summary (Spoilers)',
              content: `<p class="lz-prose">• Twelve alien spacecraft appear around the world.<br>
                        • Louise works with physicist Ian Donnelly (Jeremy Renner) to decipher the aliens’ language.<br>
                        • The aliens’ language is non‑linear; it changes how Louise perceives time.<br>
                        • She learns that the aliens have come to give humanity a gift (their language).<br>
                        • She also sees her future: a daughter who will die of cancer.<br>
                        • Despite knowing this, she chooses to have the child anyway.</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Language shapes thought (Sapir‑Whorf hypothesis)<br>
                        • Determinism vs. free will – Louise knows the future but chooses it anyway<br>
                        • Communication and understanding – the key to peace<br>
                        • Grief and acceptance – Louise’s relationship with her daughter</p>`
            },
            {
              title: '🎬 Notable Scenes',
              content: `<p class="lz-prose">• The first contact sequence – tension and wonder.<br>
                        • Louise’s “flash‑forwards” to her daughter’s birth, childhood, and death.<br>
                        • The Chinese general shows Louise his wife’s last words – which Louise will deliver to him in the future.<br>
                        • The final line: “If you could see your whole life from start to finish, would you change things?”</p>`
            },
          ])}
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-trophy',
            title: 'Academy Awards',
            body: 'Arrival won the Oscar for Best Sound Editing (2017) and was nominated for Best Picture, Best Director, and Best Adapted Screenplay.'
          })}

          ${renderSubhead('25.6 Zadie Smith: Embassy of Cambodia (Short Story, 2013)')}
          <h2 class="lz-h2 reveal">Immigrant Life in London</h2>
          <p class="lz-prose reveal">
            The story follows <strong>Fatou</strong>, a young woman from Ivory Coast working as a domestic servant
            for a wealthy Pakistani family in London. She lives in Willesden, near the real Embassy of Cambodia.
            The story explores the quiet struggles of immigration – exploitation, loneliness, small acts of resistance,
            and the dream of a better life.
          </p>
          ${renderAccordion([
            {
              title: '📖 Plot Summary',
              content: `<p class="lz-prose">• Fatou works long hours with little pay, no day off.<br>
                        • She is not free to leave; her passport is held by her employers.<br>
                        • She joins a local badminton club – her only pleasure.<br>
                        • She befriends Andrew, a young man at the club.<br>
                        • The story ends ambiguously – Fatou considers running away.<br>
                        • The repeated phrase: “The Embassy of Cambodia is a real building. Many people pass it every day. They don’t know what happens inside.”</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Modern slavery – domestic servitude, withheld passports, exploitation<br>
                        • Isolation and invisibility – Fatou is unseen by the family and the wider world<br>
                        • Small rebellions – badminton as escape, the decision to leave<br>
                        • The unknown – the embassy as metaphor for hidden stories</p>`
            },
          ])}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-book',
            title: 'Zadie Smith',
            body: 'British novelist of Jamaican and English heritage. Her debut <em>White Teeth</em> (2000) is a classic of multicultural London literature. She explores race, immigration, and identity.'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Exploring Alternative Worlds', link: `${BASE}/themen/literature/alternative-worlds` },
            next: { label: 'Asian Communities in Britain', link: `${BASE}/themen/literature/asian-communities` },
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