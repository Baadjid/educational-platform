// pages/projekte/lernzettel/faecher/englisch/themen/literature/shakespeare.js
// Literature and Film – Kapitel 22 / 4.1: William Shakespeare

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

export default class ShakespearePage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-literature-shakespeare';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 22</span>
            <i class="fas fa-chevron-right"></i><span>William Shakespeare</span>
          </div>
          <h1 class="lz-sub-title">
            William Shakespeare<br><em>The Bard of Avon</em>
          </h1>
          <p class="lz-sub-desc">
            The Globe Theatre · Elizabethan World Picture · Romeo and Juliet · Othello ·
            The Merchant of Venice · A Midsummer Night‘s Dream · Relevance Today
          </p>
          ${renderTags(['Shakespeare', 'Theatre', 'Tragedy', 'Comedy', 'Elizabethan'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('22.1 The Globe – Shakespeare’s Theatre')}
          <h2 class="lz-h2 reveal">The Original Playhouse</h2>
          <p class="lz-prose reveal">
            The Globe Theatre was built in 1599 by Shakespeare’s acting company, the Lord Chamberlain’s Men.
            It was an open‑air, octagonal amphitheatre holding up to 3,000 spectators. The original Globe
            burned down in 1613 during a performance of <em>Henry VIII</em>. A modern reconstruction, “Shakespeare’s Globe,”
            opened in London in 1997.
          </p>
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-theater-masks',
            title: 'Key Features',
            body: '• Open‑air – performances only in daylight<br>• “Groundlings” stood in the yard (1 penny)<br>• Wealthier patrons sat in galleries<br>• No scenery – language created the setting<br>• Trapdoors and balcony used for special effects'
          })}

          ${renderSubhead('22.2 The Elizabethan World Picture')}
          <h2 class="lz-h2 reveal">A Hierarchical Universe</h2>
          <p class="lz-prose reveal">
            Elizabethans believed in a divinely ordered universe – the <strong>Great Chain of Being</strong>.
            Everything had its place: God → Angels → Humans → Animals → Plants → Inanimate matter.
            Disrupting this order (e.g., regicide, disobedience) was seen as unnatural and caused chaos.
            This worldview underpins Shakespeare’s tragedies (e.g., <em>Macbeth</em>, <em>Hamlet</em>).
          </p>
          ${renderAccordion([
            {
              title: '📜 The Great Chain of Being',
              content: `<p class="lz-prose">God → Angels → Kings/Queens → Nobility → Commoners → Animals → Plants → Rocks.<br>
                        • The monarch was God’s representative on Earth<br>
                        • Any attack on the monarch was an attack on divine order<br>
                        • Disruption led to unnatural events (storms, strange behaviour)</p>`
            },
            {
              title: '🌍 Correspondences',
              content: `<p class="lz-prose">• Macrocosm (universe) ↔ Microcosm (human body) ↔ Body politic (state)<br>
                        • Disorder in one realm mirrored disorder in others<br>
                        • Used extensively in Shakespeare’s tragedies</p>`
            },
          ])}

          ${renderSubhead('22.3 Romeo and Juliet (Tragedy, 1597)')}
          <h2 class="lz-h2 reveal">“A pair of star‑crossed lovers”</h2>
          <p class="lz-prose reveal">
            Set in Verona, Italy, the play tells the story of two young lovers from feuding families – the Montagues
            and Capulets. Their secret marriage, a series of misunderstandings, and a flawed plan lead to their
            tragic deaths, which ultimately reconcile the families.
          </p>
          ${renderAccordion([
            {
              title: '🎭 Main Characters',
              content: `<p class="lz-prose">• Romeo Montague – passionate, impulsive, romantic<br>
                        • Juliet Capulet – intelligent, determined, defies family<br>
                        • Friar Laurence – well‑intentioned but flawed advisor<br>
                        • Mercutio – witty, cynical, Romeo’s friend (killed by Tybalt)<br>
                        • Tybalt – hot‑headed Capulet, Juliet’s cousin</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Love vs. hate – the power of love amidst family hatred<br>
                        • Fate vs. free will – “star‑crossed lovers” / fortune’s fools<br>
                        • Impulsivity – rash decisions lead to tragedy<br>
                        • Light vs. dark – imagery of day/night, love/death<br>
                        • The individual vs. society – lovers against social conventions</p>`
            },
            {
              title: '⚔️ Structure (Classical Tragedy)',
              content: `<p class="lz-prose">• Prologue – announces the tragic outcome<br>
                        • Rising action – secret marriage, Mercutio’s death, Romeo’s banishment<br>
                        • Climax – Romeo kills Tybalt (turning point)<br>
                        • Falling action – Juliet’s fake death, Friar’s letter fails<br>
                        • Catastrophe – double suicide; families reconcile</p>`
            },
          ])}

          ${renderSubhead('22.4 Baz Luhrmann: Romeo + Juliet (Film, 1996)')}
          <h2 class="lz-h2 reveal">Modern Adaptation</h2>
          <p class="lz-prose reveal">
            Baz Luhrmann’s film updates the setting to modern‑day “Verona Beach” (Miami) while keeping
            Shakespeare’s original dialogue. The Montagues and Capulets are portrayed as rival business empires.
            The film uses fast‑paced editing, pop music, and visual symbolism (guns labelled “Sword”).
          </p>
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-film',
            title: 'Luhrmann’s Stylistic Choices',
            body: '• Setting – contemporary urban, neon lights, TV news<br>• Costumes – modern suits, beachwear, religious imagery<br>• Music – choir, pop songs, opera (designed to heighten emotion)<br>• Visual motifs – water (baptism/death), fire (passion/destruction), religious iconography'
          })}

          ${renderSubhead('22.5 Othello (Tragedy, 1603/04)')}
          <h2 class="lz-h2 reveal">The Moor of Venice</h2>
          <p class="lz-prose reveal">
            Othello, a Black general in the Venetian army, secretly marries Desdemona, a white noblewoman.
            His ensign Iago, resentful over being passed over for promotion, manipulates Othello into believing
            Desdemona is unfaithful. Consumed by jealousy, Othello murders Desdemona, then kills himself when
            he discovers the truth.
          </p>
          ${renderAccordion([
            {
              title: '🎭 Main Characters',
              content: `<p class="lz-prose">• Othello – noble, heroic, but insecure about his race and age<br>
                        • Desdemona – loyal, innocent, ultimately a victim<br>
                        • Iago – “honest Iago” – manipulative, motiveless malignity<br>
                        • Cassio – lieutenant, framed as Desdemona’s lover</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Jealousy – “the green‑eyed monster”<br>
                        • Race and otherness – Othello as an outsider in Venetian society<br>
                        • Appearance vs. reality – Iago’s deceit, the handkerchief<br>
                        • Reputation – “O, I have lost my reputation!”<br>
                        • Gender – misogyny, domestic violence</p>`
            },
          ])}

          ${renderSubhead('22.6 The Merchant of Venice (Comedy, 1596‑98)')}
          <h2 class="lz-h2 reveal">Justice and Mercy</h2>
          <p class="lz-prose reveal">
            Bassanio borrows money from the Jewish moneylender Shylock to court Portia. Shylock demands a pound
            of flesh as penalty if the loan isn’t repaid. In the famous trial scene, Portia (disguised as a lawyer)
            saves Antonio by arguing that Shylock may take his pound of flesh but not a drop of Christian blood.
          </p>
          ${renderAccordion([
            {
              title: '⚖️ Key Themes',
              content: `<p class="lz-prose">• Justice vs. mercy – “The quality of mercy is not strain’d”<br>
                        • Anti‑Semitism – Shylock as a controversial stereotype<br>
                        • Appearance vs. reality – the caskets, Portia disguised<br>
                        • Love and friendship – Bassanio/Antonio, Portia/Bassanio</p>`
            },
            {
              title: '📜 Shylock’s Famous Speech',
              content: `<p class="lz-prose">“Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions?” – Shylock demands human recognition, making the play’s anti‑Semitism deeply uncomfortable for modern audiences.</p>`
            },
          ])}

          ${renderSubhead('22.7 A Midsummer Night’s Dream (Comedy, 1595/96)')}
          <h2 class="lz-h2 reveal">Love, Magic, and Mistaken Identity</h2>
          <p class="lz-prose reveal">
            The play weaves together four plots: the marriage of Theseus and Hippolyta, four young Athenian lovers
            (Hermia, Lysander, Helena, Demetrius), a group of amateur actors (the “mechanicals”), and the fairy
            king and queen (Oberon and Titania). Love potions cause chaos, but all is resolved happily.
          </p>
          ${renderAccordion([
            {
              title: '🎭 Key Characters',
              content: `<p class="lz-prose">• Oberon – fairy king<br>
                        • Titania – fairy queen<br>
                        • Puck (Robin Goodfellow) – mischievous sprite<br>
                        • Bottom – pompous amateur actor, transformed into a donkey</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Love – irrational, fickle, blind (“The course of true love never did run smooth”)<br>
                        • Order vs. disorder – Athens (order) vs. the forest (chaos)<br>
                        • Dream vs. reality – “If we shadows have offended…”<br>
                        • Art and theatre – the play within a play (Pyramus and Thisbe)</p>`
            },
          ])}

          ${renderSubhead('22.8 The Interest of Young Audiences in Shakespeare')}
          <h2 class="lz-h2 reveal">Why Shakespeare Still Matters</h2>
          ${renderTable({
            headers: ['Reason', 'Explanation'],
            rows: [
              ['Universal themes', 'Love, jealousy, ambition, betrayal – still relevant today'],
              ['Language', 'Invented over 1,700 words and countless phrases (“break the ice”, “wild goose chase”)'],
              ['Complex characters', 'Psychological depth – characters are neither purely good nor evil'],
              ['Modern adaptations', 'Films (Luhrmann, Branagh, Kurosawa), TV, graphic novels, hip‑hop versions'],
              ['Cultural literacy', 'Quotes and references appear everywhere in Western culture'],
            ],
          })}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-users',
            title: 'Teaching Shakespeare Today',
            body: '• Active learning – performing scenes, watching adaptations<br>• Contextualising – Elizabethan history, theatre conventions<br>• Connecting to modern issues – racism (Othello), prejudice (Merchant of Venice), mental health (Hamlet)<br>• Accessible language – modern translations, No Fear Shakespeare'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Media Corporations', link: `${BASE}/themen/modern/media-corporations` },
            next: { label: 'Identity and Racial Prejudices', link: `${BASE}/themen/literature/identity-racial` }
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