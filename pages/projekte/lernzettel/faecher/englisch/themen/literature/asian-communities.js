// pages/projekte/lernzettel/faecher/englisch/themen/literature/asian-communities.js
// Literature and Film – Kapitel 26 / 4.5: Asian Communities in Britain

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

export default class AsianCommunitiesPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-literature-asian';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 26</span>
            <i class="fas fa-chevron-right"></i><span>Asian Communities in Britain</span>
          </div>
          <h1 class="lz-sub-title">
            Asian Communities<br><em>in Britain</em>
          </h1>
          <p class="lz-sub-desc">
            Hanif Kureishi · Qaisra Shahraz · Bali Rai · East is East · Bend It Like Beckham
          </p>
          ${renderTags(['Asian British', 'Migration', 'Identity', 'Film', 'Short Story'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('26.1 Hanif Kureishi: My Son the Fanatic (Short Story, 1994)')}
          <h2 class="lz-h2 reveal">Father and Son – Secularism vs. Fundamentalism</h2>
          <p class="lz-prose reveal">
            Parvez, a Pakistani immigrant cab driver in London, has worked hard to build a secular, Western life.
            His son, Ali, rejects this – he becomes a devout Muslim, criticises his father’s lifestyle (drinking,
            gambling, prostitution), and cleans out his bank account to donate to Islamic charities.
          </p>
          ${renderAccordion([
            {
              title: '📖 Plot Summary',
              content: `<p class="lz-prose">• Parvez notices his son Ali has changed – he no longer studies, works, or socialises.<br>
                        • Ali gives away his belongings, prays constantly, and criticises his father.<br>
                        • Parvez confides in Bettina, a prostitute friend.<br>
                        • Parvez discovers Ali’s room filled with religious books and a prayer mat.<br>
                        • Ali confronts his father: “So who’s the fanatic now?” – the story ends with Parvez beaten by fundamentalists.</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Generational conflict – immigrant parents’ assimilation vs. children’s religious revival<br>
                        • Secularism vs. fundamentalism – Parvez’s Western lifestyle vs. Ali’s Islamic purity<br>
                        • Identity crisis – Ali rejects both British and his father’s secular Pakistani identity<br>
                        • The title’s irony – who is the fanatic? Parvez (obsessed with his son) or Ali?</p>`
            },
          ])}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-film',
            title: 'Film Adaptation',
            body: 'My Son the Fanatic was adapted into a 1997 film directed by Udayan Prasad, starring Om Puri as Parvez and Akbar Kurtha as Ali.'
          })}

          ${renderSubhead('26.2 Qaisra Shahraz: A Pair of Jeans (Novel, 2001)')}
          <h2 class="lz-h2 reveal">Clothing as Cultural Battleground</h2>
          <p class="lz-prose reveal">
            The novel explores the tensions within a Pakistani family in Britain. A teenage girl wants to wear
            jeans – a seemingly small act that becomes a symbol of Westernisation and rebellion against traditional
            Pakistani values. The story examines the clash between generations, gender expectations, and the
            struggle to balance two cultures.
          </p>
          ${renderAccordion([
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Clothing as identity – jeans represent Western freedom; traditional dress represents cultural loyalty<br>
                        • Gender roles – stricter expectations for daughters than sons<br>
                        • Generational conflict – parents vs. British‑born children<br>
                        • The “double life” – code‑switching between home and outside world</p>`
            },
            {
              title: '📖 Significance',
              content: `<p class="lz-prose">• One of the first British‑Pakistani novels written by a woman<br>
                        • Realistic portrayal of everyday conflicts in immigrant families<br>
                        • Highlights the often overlooked perspective of Muslim women</p>`
            },
          ])}
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-female',
            title: 'Qaisra Shahraz',
            body: 'British‑Pakistani novelist and activist. Founder of the Muslim Writers Awards. Her work focuses on women, identity, and cultural conflict.'
          })}

          ${renderSubhead('26.3 Bali Rai: (Un)Arranged Marriage (Novel, 2001)')}
          <h2 class="lz-h2 reveal">Young Adult Novel about Forced Marriage</h2>
          <p class="lz-prose reveal">
            The novel follows Manny, a British‑Punjabi teenager whose parents plan to take him to India for an
            arranged marriage. Manny is horrified – he wants to choose his own partner. The book explores
            the pressure of family expectations, the clash between traditional and modern values, and the
            courage to stand up for oneself.
          </p>
          ${renderAccordion([
            {
              title: '📖 Plot Summary',
              content: `<p class="lz-prose">• Manny’s parents announce they are taking him to India for a wedding – his wedding.<br>
                        • He is not consulted; his bride has been chosen.<br>
                        • Manny rebels, confiding in his friends and sister.<br>
                        • He confronts his parents, refusing the marriage.<br>
                        • The novel ends with a compromise – Manny will have a say in his future.</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Forced vs. arranged marriage – the difference between coercion and consent<br>
                        • Teenage rebellion – Manny’s struggle for autonomy<br>
                        • Family honour and shame – the parents’ fear of community judgment<br>
                        • British vs. Punjabi values – the second‑generation perspective</p>`
            },
          ])}
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-book-open',
            title: 'Bali Rai',
            body: 'British‑Punjabi author of young adult fiction. (Un)Arranged Marriage won the Leicester Book of the Year Award and is widely taught in schools.'
          })}

          ${renderSubhead('26.4 East is East (Film, 1999)')}
          <h2 class="lz-h2 reveal">Comedy and Tragedy of a Mixed‑Race Family</h2>
          <p class="lz-prose reveal">
            Directed by Damien O’Donnell, <em>East is East</em> is set in 1970s Salford. George Khan, a Pakistani
            father, tries to raise his seven children strictly Muslim, while his British wife, Ella, is more
            lenient. The film balances comedy (the sons’ rebellion, a disastrous arranged marriage) with tragedy
            (George’s violence, family breakdown).
          </p>
          ${renderAccordion([
            {
              title: '🎭 Main Characters',
              content: `<p class="lz-prose">• George Khan – authoritarian father, obsessed with tradition<br>
                        • Ella Khan – long‑suffering British wife, protects her children<br>
                        • The sons – Nazir (flees arranged marriage), Tariq (disco‑loving), Abdul (sensitive), Maneer (quiet)<br>
                        • Sajida – the only daughter, more traditional</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Generational conflict – children reject George’s strictness<br>
                        • Arranged marriage – Nazir runs away, leading to shame<br>
                        • British vs. Pakistani identity – the sons are “chips and curry” – both cultures<br>
                        • Abuse – George’s violence towards his family<br>
                        • The ending – ambiguous: George returns, but the family is fractured</p>`
            },
            {
              title: '🎬 Notable Scenes',
              content: `<p class="lz-prose">• The circumcision scene – George tries to have his youngest son circumcised; the family flees.<br>
                        • The “Great English Breakfast” – Ella’s defiant statement of British identity.<br>
                        • The final scene – George sits alone; the children ignore him.<br>
                        • The mosque scene – the sons mock the imam.</p>`
            },
          ])}
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-trophy',
            title: 'Awards and Sequel',
            body: 'East is East won the BAFTA for Outstanding British Film (2000). A sequel, West is West (2010), follows the family to Pakistan.'
          })}

          ${renderSubhead('26.5 Bend It Like Beckham (Film, 2002)')}
          <h2 class="lz-h2 reveal">Football, Friendship, and Family</h2>
          <p class="lz-prose reveal">
            Directed by Gurinder Chadha, <em>Bend It Like Beckham</em> follows Jess Bhamra, a British‑Sikh teenager
            who dreams of playing professional football. Her traditional parents want her to focus on studying
            and learning to cook. Jess secretly joins a women’s team, befriends Jules (a white girl), and must
            navigate cultural expectations, love, and her passion for the sport.
          </p>
          ${renderAccordion([
            {
              title: '🎭 Main Characters',
              content: `<p class="lz-prose">• Jess Bhamra – talented footballer, torn between family and passion<br>
                        • Joe – coach, love interest<br>
                        • Jules – Jess’s best friend, also loves football<br>
                        • Mr. Bhamra – Jess’s father, who gave up his own cricket dream due to racism<br>
                        • Mrs. Bhamra – mother, worried about what “people will say”</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Gender roles – women’s football as rebellion against traditional expectations<br>
                        • Generational conflict – parents’ fears of assimilation vs. children’s desires<br>
                        • Racism – Mr. Bhamra’s past experience, microaggressions on the pitch<br>
                        • Friendship – Jess and Jules’s bond (and a brief misunderstanding about sexuality)<br>
                        • The “bending” metaphor – bending the rules, bending traditions</p>`
            },
            {
              title: '🎬 Notable Scenes',
              content: `<p class="lz-prose">• Jess playing football in a sari – iconic image of cultural blending.<br>
                        • The final match – Jess’s family comes to support her.<br>
                        • Mr. Bhamra’s speech: “I never had a chance to follow my dream. I don’t want the same for Jess.”<br>
                        • Jess gets a scholarship to the US – she can play professionally.</p>`
            },
          ])}
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-futbol',
            title: 'Cultural Impact',
            body: 'Bend It Like Beckham was a global hit, grossing $76 million on a $3.5 million budget. It helped launch the careers of Keira Knightley and Parminder Nagra. The film was adapted into a stage musical in 2015.'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Migration and Cross‑Cultural Encounters', link: `${BASE}/themen/literature/migration-cross-cultural` },
            next: { label: 'Globalization', link: `${BASE}/themen/vocab/globalization` }
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