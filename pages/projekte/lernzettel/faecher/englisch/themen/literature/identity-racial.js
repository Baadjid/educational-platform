// pages/projekte/lernzettel/faecher/englisch/themen/literature/identity-racial.js
// Literature and Film – Kapitel 23 / 4.2: Identity and Racial Prejudices

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

export default class IdentityRacialPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-literature-identity';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 23</span>
            <i class="fas fa-chevron-right"></i><span>Identity and Racial Prejudices</span>
          </div>
          <h1 class="lz-sub-title">
            Identity &<br><em>Racial Prejudices</em>
          </h1>
          <p class="lz-sub-desc">
            Crash · Crooked Letter, Crooked Letter · Gran Torino · Green Book
          </p>
          ${renderTags(['Race', 'Prejudice', 'Identity', 'Film', 'Novel'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('23.1 Crash (Film, 2004)')}
          <h2 class="lz-h2 reveal">Interlocking Stories of Prejudice</h2>
          <p class="lz-prose reveal">
            Directed by Paul Haggis, <em>Crash</em> weaves together multiple characters in Los Angeles over 36 hours,
            exploring racial and social tensions among African Americans, Latinos, Caucasians, Asians, and Persians.
            The film shows how prejudice is not limited to one group but exists across all races.
          </p>
          ${renderAccordion([
            {
              title: '🎬 Key Characters and Storylines',
              content: `<p class="lz-prose">• Jean and Rick Cabot – wealthy white couple; Jean fears a Hispanic locksmith<br>
                        • Officer Ryan (racist white cop) and his partner Hansen<br>
                        • Daniel (Hispanic locksmith) – protective father<br>
                        • Farhad (Persian shopkeeper) – buys a gun for protection<br>
                        • Cameron and Christine – Black TV director and his wife (stopped by police)<br>
                        • Anthony and Peter – two Black carjackers who stereotype others</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Ubiquity of prejudice – everyone is capable of racism and stereotyping<br>
                        • “We are all crashing into each other” – interconnectedness, chance encounters<br>
                        • Stereotyping – both whites stereotyping minorities and minorities stereotyping whites<br>
                        • Redemption – some characters overcome their prejudices<br>
                        • Irony – characters often become the very thing they hate</p>`
            },
            {
              title: '🎭 Notable Scenes',
              content: `<p class="lz-prose">• Officer Ryan sexually assaults Christine during a traffic stop, then later saves her life – ambiguous morality<br>
                        • Farhad tries to shoot Daniel but shoots his own daughter instead (blank bullets)<br>
                        • Officer Hansen kills Peter (catching a ride) because he reaches for a statue that looks like a gun<br>
                        • Anthony releases Asian immigrants he was trafficking, showing surprising humanity</p>`
            },
          ])}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-trophy',
            title: 'Academy Awards',
            body: 'Crash won three Oscars in 2006: Best Picture, Best Original Screenplay, and Best Editing. It remains controversial, with critics debating whether its message is profound or overly simplistic.'
          })}

          ${renderSubhead('23.2 Tom Franklin: Crooked Letter, Crooked Letter (Novel, 2010)')}
          <h2 class="lz-h2 reveal">Secrets in Rural Mississippi</h2>
          <p class="lz-prose reveal">
            Set in rural Mississippi, the novel follows two men: <strong>Larry Ott</strong> (a quiet, bookish white man)
            and <strong>Silas Jones</strong> (a Black constable). They were childhood friends until a terrible secret
            tore them apart. When a local girl disappears, Larry becomes the prime suspect, and Silas must confront
            their shared past.
          </p>
          ${renderAccordion([
            {
              title: '📖 Plot Summary (No Major Spoilers)',
              content: `<p class="lz-prose">• Larry Ott, a social outcast, was suspected of murdering a girl 25 years ago (case never solved).<br>
                        • Another girl disappears from Larry’s property – he is the prime suspect again.<br>
                        • Silas Jones, the local constable, must investigate his childhood friend.<br>
                        • The novel alternates between past and present, revealing a shared secret about Silas’s mother and Larry’s father.<br>
                        • Themes of friendship, race, guilt, and redemption.</p>`
            },
            {
              title: '🎭 Main Characters',
              content: `<p class="lz-prose">• Larry Ott – gentle, lonely, ostracised by the community; a tragic figure<br>
                        • Silas Jones – conflicted, carrying guilt from the past; torn between duty and friendship<br>
                        • Larry’s father – a controlling, racist man (key to the secret)<br>
                        • The victims – missing girls whose disappearances haunt the town</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Racial prejudice – the South’s legacy; Larry and Silas’s friendship is forbidden in the 1970s<br>
                        • Isolation and scapegoating – Larry is judged by appearance and past suspicion<br>
                        • Truth and memory – the past is slowly uncovered; characters must face painful truths<br>
                        • Redemption – both Larry and Silas seek to atone for past failures</p>`
            },
          ])}
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-book',
            title: 'Awards',
            body: 'Crooked Letter, Crooked Letter won the CWA Gold Dagger for Best Crime Novel in 2011 and was nominated for the Edgar Award.'
          })}

          ${renderSubhead('23.3 Gran Torino (Film, 2008)')}
          <h2 class="lz-h2 reveal">Clint Eastwood as a Grumpy Veteran</h2>
          <p class="lz-prose reveal">
            Directed by and starring Clint Eastwood, <em>Gran Torino</em> tells the story of <strong>Walt Kowalski</strong>,
            a Korean War veteran and retired auto worker. His neighbourhood is now predominantly Hmong immigrant.
            Walt is racist and angry, but after a Hmong teenager (Thao) tries to steal his prized Gran Torino,
            Walt becomes involved in the boy’s life – and eventually sacrifices himself to protect Thao’s family.
          </p>
          ${renderAccordion([
            {
              title: '🎭 Main Characters',
              content: `<p class="lz-prose">• Walt Kowalski – racist, grieving widower, but ultimately heroic<br>
                        • Thao – shy Hmong teenager pressured by a gang<br>
                        • Sue – Thao’s strong, assertive sister; befriends Walt<br>
                        • The Hmong gang – pressures Thao, threatens the family</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Racism and redemption – Walt’s arc from bigot to protector<br>
                        • Masculinity – Walt’s traditional, stoic masculinity vs. Thao’s gentle nature<br>
                        • Community – the Hmong family’s collectivism vs. Walt’s isolation<br>
                        • Sacrifice – Walt’s final act (drawing his lighter, not a gun) ensures the gang is arrested</p>`
            },
            {
              title: '🎬 Notable Scenes',
              content: `<p class="lz-prose">• Walt points his finger at gang members and says “Get off my lawn” – iconic<br>
                        • Walt teaches Thao how to talk like a man (construction job, barbershop)<br>
                        • The ending – Walt is shot while reaching for his lighter, not a gun; his sacrifice is captured on video</p>`
            },
          ])}

          ${renderSubhead('23.4 Green Book (Film, 2018)')}
          <h2 class="lz-h2 reveal">A Road Trip Through the Jim Crow South</h2>
          <p class="lz-prose reveal">
            Directed by Peter Farrelly, <em>Green Book</em> is based on the true story of <strong>Dr. Don Shirley</strong>,
            a Black classical pianist, and <strong>Tony Vallelonga</strong> (“Tony Lip”), his Italian‑American driver/bouncer.
            In 1962, they tour the Deep South, using the <em>Negro Motorist Green Book</em> (a guide to safe places for
            Black travellers). The film explores their unlikely friendship and the racism they face.
          </p>
          ${renderAccordion([
            {
              title: '🎭 Main Characters',
              content: `<p class="lz-prose">• Don Shirley – virtuoso pianist, refined, lonely, trapped between Black and white worlds<br>
                        • Tony Vallelonga – working‑class, street‑smart, initially racist, but evolves</p>`
            },
            {
              title: '📖 Key Themes',
              content: `<p class="lz-prose">• Racism in the South – segregated venues, hotels, bars; the “Green Book” itself<br>
                        • Friendship – two men from different backgrounds learn from each other<br>
                        • Identity – Don is not “Black enough” for Black audiences, not “white enough” for white audiences<br>
                        • Dignity vs. survival – Don refuses to play where he can’t eat; Tony uses charm and bribery</p>`
            },
            {
              title: '🎬 Notable Scenes',
              content: `<p class="lz-prose">• The “fried chicken” scene – Tony teaches Don to eat with his hands; Don teaches Tony to write romantic letters<br>
                        • Don breaks down: “If I’m not black enough and if I’m not white enough, then tell me, Tony, what am I?”<br>
                        • The finale – Don walks out of a segregated club; they share a drink at a Black bar<br>
                        • The film ends with Don spending Christmas at Tony’s house – Tony’s wife thanks Don for helping write his letters</p>`
            },
          ])}
          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-trophy',
            title: 'Academy Awards',
            body: 'Green Book won three Oscars in 2019: Best Picture, Best Original Screenplay, and Best Supporting Actor (Mahershala Ali as Don Shirley). It was also nominated for Best Actor (Viggo Mortensen).'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'William Shakespeare', link: `${BASE}/themen/literature/shakespeare` },
            next: { label: 'Exploring Alternative Worlds', link: `${BASE}/themen/literature/alternative-worlds` },
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