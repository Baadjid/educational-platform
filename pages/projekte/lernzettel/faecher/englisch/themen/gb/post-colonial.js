// pages/projekte/lernzettel/faecher/englisch/themen/gb/post-colonial.js
// Great Britain – Kapitel 12 / 2.2: Post-colonial Developments

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderInfobox,
  renderTable,
  renderSubhead,
  renderTags,
  renderAccordion,
  renderVTimeline,
  renderMerkboxGrid,
  renderTabs,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const GANDHI_TABS = [
  { key: 'philosophy', label: '🕊️ Philosophy' },
  { key: 'partition',  label: '💔 Partition Tragedy' },
  { key: 'legacy',     label: '🌍 Global Legacy' },
];

export default class PostColonialPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-gb-postcolonial';
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
            <button data-link="${BASE}/themen/gb" class="lz-bread-link">Great Britain</button>
            <i class="fas fa-chevron-right"></i><span>Kapitel 12</span>
            <i class="fas fa-chevron-right"></i><span>Post-colonial Developments</span>
          </div>
          <h1 class="lz-sub-title">Post-colonial<br><em>Developments</em></h1>
          <p class="lz-sub-desc">Gandhi · India · South Africa · Australia · Multiculturalism in Three Nations</p>
          ${renderTags(['Post-colonial', 'Gandhi', 'Apartheid', 'Australia', 'Commonwealth'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-dove', title: 'Satyagraha', text: 'Gandhi\'s philosophy of nonviolent resistance — "truth-force." The method that defeated an empire without a single battle.' },
            { icon: 'fas fa-gavel', title: 'Apartheid 1948–1994', text: '46 years of legally enforced racial segregation in South Africa, dismantled through boycotts, resistance, and Mandela\'s leadership.' },
            { icon: 'fas fa-map', title: 'Terra Nullius', text: 'The legal fiction Britain used to justify colonising Australia — "land belonging to no one." Overturned by the Mabo decision in 1992.' },
            { icon: 'fas fa-globe-americas', title: 'Three Models', text: 'Australia, Canada, and Great Britain — three different approaches to multiculturalism, all rooted in their colonial pasts.' },
          ])}

          ${renderSubhead('12.1 Gandhi and the Independence of India')}
          <h2 class="lz-h2 reveal">The Great Soul — Mahatma Gandhi (1869–1948)</h2>
          <p class="lz-prose reveal">
            Mohandas Karamchand Gandhi is one of the 20th century's most influential figures. Through
            <strong>nonviolent civil disobedience</strong>, he led India to independence and inspired
            liberation movements on every continent — from the American Civil Rights Movement to
            anti-apartheid South Africa.
          </p>

          ${renderVTimeline([
            { year: '1869', title: 'Born in Porbandar, India', text: 'Son of a Hindu merchant family; studied law in London (1888–91).' },
            { year: '1893–1914', title: 'South Africa', text: 'Experienced severe racial discrimination; threw off a first-class train in Pietermaritzburg (1893). Developed Satyagraha (nonviolent resistance).' },
            { year: '1919', title: 'Amritsar Massacre', text: 'British troops killed 400+ peaceful protesters in Jallianwala Bagh. Turned Gandhi against cooperation with the British.' },
            { year: '1920–22', title: 'Non-Cooperation Movement', text: 'Boycott of British goods, schools, courts. Mass civil disobedience. Gandhi imprisoned (1922).' },
            { year: '1930', title: 'Salt March (Dandi March)', text: '240-mile march to the sea to make salt illegally, defying the British salt tax. 60,000 arrested. Global media attention.' },
            { year: '1942', title: '"Quit India" Movement', text: '"Do or Die" — demanded immediate British withdrawal. Gandhi arrested; mass protests across India.' },
            { year: '1947', title: 'Independence and Partition', text: 'India and Pakistan created. Gandhi mourned partition; fasted to stop communal violence. Called it "the vivisection of India."' },
            { year: '1948', title: 'Assassination', text: 'Shot by Hindu nationalist Nathuram Godse on January 30, 1948. Gandhi forgave his assassin as he fell.' },
          ])}

          <nav class="wim-tabs" id="gandhi-tabs" aria-label="Gandhi">
            ${GANDHI_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelGandhiPhilosophy()}
          ${this._panelGandhiPartition()}
          ${this._panelGandhiLegacy()}

          ${renderSubhead('12.2 India Today')}
          <h2 class="lz-h2 reveal">The World's Largest Democracy</h2>

          ${renderTable({
            headers: ['Dimension', 'Facts & Analysis'],
            rows: [
              ['Population', '1.4+ billion (surpassed China in 2023 as the world\'s most populous nation)'],
              ['Political System', 'Federal parliamentary democracy; 28 states + 8 union territories; bicameral Parliament'],
              ['Economy', '5th largest GDP globally; IT powerhouse (Bangalore = "Silicon Valley of India"); space programme (Mars orbiter 2014); fastest-growing major economy'],
              ['Current Government', 'PM Narendra Modi (BJP — Bharatiya Janata Party, Hindu nationalist). In power since 2014. Growing concerns about democratic backsliding.'],
              ['British Legacy (+)', 'English as unifying language; parliamentary democracy; railways; common law system; civil service'],
              ['British Legacy (−)', 'Partition\'s ongoing trauma; economic underdevelopment from extraction; communal divisions partly stoked by "divide and rule"'],
              ['UK–India Relations', '1.5 million-strong diaspora in the UK; important trade partner; Commonwealth ties; Kohinoor diamond dispute ongoing'],
            ],
            highlight: [2],
          })}

          ${renderAccordion([
            {
              title: '📊 Challenges Facing Modern India',
              content: `<p class="lz-prose">• <strong>Poverty:</strong> Despite rapid growth, ~10% still in extreme poverty; inequality is rising, not falling.<br>
                        • <strong>Caste system:</strong> Formal discrimination illegal, but deep social divisions persist. Dalits ("untouchables") still face violence and exclusion.<br>
                        • <strong>Religious tensions:</strong> Hindu nationalism (Hindutva) under Modi has increased Muslim-Hindu tensions; mob violence, demolition of mosques.<br>
                        • <strong>Press freedom:</strong> India fell to 161/180 in the 2023 World Press Freedom Index. Journalists arrested or intimidated.<br>
                        • <strong>Women's rights:</strong> High rates of gender-based violence; legal reforms slow and unevenly enforced.<br>
                        • <strong>Environment:</strong> Air pollution in Delhi among the world's worst; climate vulnerability high.</p>`
            },
          ])}

          ${renderSubhead('12.3 South Africa')}
          <h2 class="lz-h2 reveal">Apartheid and the Rainbow Nation</h2>
          <p class="lz-prose reveal">
            <strong>Apartheid</strong> (Afrikaans for "separateness") was a legally enforced system of racial
            segregation (1948–1994) that gave the white minority (~20%) total political, economic, and social
            control over the Black majority (~80%).
          </p>

          ${renderVTimeline([
            { year: '1948', title: 'Apartheid Begins', text: 'National Party wins election on apartheid platform; systematic racial legislation begins.' },
            { year: '1960', title: 'Sharpeville Massacre', text: 'Police killed 69 peaceful protesters; ANC banned; international outcry.' },
            { year: '1961', title: 'Republic of South Africa', text: 'Left the Commonwealth after international criticism of apartheid.' },
            { year: '1962', title: 'Mandela Imprisoned', text: 'Sentenced to life imprisonment on Robben Island; remained for 27 years.' },
            { year: '1976', title: 'Soweto Uprising', text: 'Students protest against Afrikaans as the language of instruction; 176+ killed. Global media coverage shifts international opinion.' },
            { year: '1980s', title: 'International Sanctions', text: 'Sports boycotts, economic sanctions, cultural isolation. South Africa increasingly pariah state.' },
            { year: '1990', title: 'Mandela Released', text: 'F.W. de Klerk releases Mandela; apartheid laws repealed; negotiations begin.' },
            { year: '1994', title: 'First Democratic Elections', text: 'ANC wins landslide; Mandela becomes president. End of apartheid.' },
            { year: '1995–98', title: 'Truth and Reconciliation Commission', text: 'Chaired by Archbishop Desmond Tutu; perpetrators confessed in exchange for amnesty; victims testified. Model for post-conflict societies worldwide.' },
          ])}

          ${renderCompare({
            titleA: '🚫 Apartheid Laws',
            titleB: '✊ Resistance Methods',
            listA: [
              'Population Registration Act — classified everyone by race',
              'Group Areas Act — forced removals, residential segregation',
              'Pass Laws — Black people needed permits to enter white areas',
              'Bantu Education Act — deliberately inferior education for Black students',
              'No right to vote — Black people had no political representation',
              'Separate facilities — beaches, hospitals, schools all segregated',
            ],
            listB: [
              'ANC (African National Congress) — political and armed resistance',
              'Defiance Campaign (1952) — mass civil disobedience',
              'International boycotts — sports, culture, economics',
              'Underground networks — pamphlets, organising, strikes',
              'International solidarity — worldwide anti-apartheid movement',
              'Truth & Reconciliation — transitional justice after 1994',
            ],
          })}

          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-handshake',
            title: 'Nelson Mandela (1918–2013) — Key Facts',
            body: '<strong>Early life:</strong> Trained as a lawyer; joined the ANC Youth League in 1944.<br><strong>Imprisonment:</strong> 27 years on Robben Island and elsewhere (1964–1990).<br><strong>Presidency:</strong> 1994–1999; chose reconciliation over revenge.<br><strong>Nobel Peace Prize:</strong> 1993, shared with F.W. de Klerk.<br><strong>Legacy:</strong> Symbol of forgiveness and moral courage; "Rainbow Nation" concept — a multiracial democratic South Africa.'
          })}

          ${renderSubhead('12.4 Australia')}
          <h2 class="lz-h2 reveal">65,000 Years of History — Then Britain Arrived</h2>

          ${renderAccordion([
            {
              title: '📜 Colonisation and Terra Nullius',
              content: `<p class="lz-prose">• Aboriginal and Torres Strait Islander peoples have lived in Australia for at least <strong>65,000 years</strong> — the oldest continuous culture on Earth.<br>
                        • British colonisation began in 1788 with the <strong>First Fleet</strong> — a penal colony at Port Jackson (Sydney).<br>
                        • Legal fiction of <strong>terra nullius</strong> ("land belonging to no one") used to justify taking the land — despite it being inhabited by up to 1 million Indigenous people.<br>
                        • The Aboriginal population fell by an estimated <strong>90%</strong> in the first century of colonisation, due to violence, disease (especially smallpox), and dispossession.</p>`
            },
            {
              title: '⚠️ The Stolen Generations (1910–1970)',
              content: `<p class="lz-prose">• Government policy to <strong>forcibly remove</strong> Aboriginal and Torres Strait Islander children from their families.<br>
                        • Purpose: destroy Indigenous culture and assimilate children into white society.<br>
                        • Estimated <strong>100,000+</strong> children removed over 60 years.<br>
                        • Effects: trauma, loss of language and culture, family breakdown lasting to the present.<br>
                        • 2008: PM Kevin Rudd issued a formal <strong>National Apology</strong> — historic moment. But no compensation paid.</p>`
            },
            {
              title: '🕊️ Path to Recognition',
              content: `<p class="lz-prose">• <strong>1967 Referendum:</strong> 90.77% voted to include Aboriginal people in the national census and allow the federal government to make laws for them.<br>
                        • <strong>1992 Mabo Decision:</strong> High Court overturned terra nullius — ruled that Aboriginal land rights existed before colonisation.<br>
                        • <strong>2008 National Apology:</strong> "Sorry" — the word Aboriginal people had waited for since the end of the Stolen Generations.<br>
                        • <strong>2023 Voice Referendum:</strong> Proposal to enshrine an Indigenous advisory body in the constitution — rejected 60% to 40%. Seen by many Aboriginal leaders as a major setback.</p>`
            },
            {
              title: '🇦🇺 Australia Today',
              content: `<p class="lz-prose">• Population: 26 million; 3.8% identify as Indigenous.<br>
                        • One of the world's most multicultural nations: <strong>30% born overseas</strong>.<br>
                        • Constitutional monarchy: King Charles III is head of state; ongoing republic debate.<br>
                        • <strong>"Close the Gap"</strong> campaign: aims to close 17-year life expectancy gap between Indigenous and non-Indigenous Australians. Progress has been slow.<br>
                        • Indigenous Australians: 3× more likely to be imprisoned; 3× higher rates of suicide; poverty and unemployment significantly higher.</p>`
            },
          ])}

          ${renderSubhead('12.5 Multiculturalism — Three Nations Compared')}
          <h2 class="lz-h2 reveal">Australia, Canada, and Great Britain</h2>

          ${renderTable({
            headers: ['', 'Australia', 'Canada', 'Great Britain'],
            rows: [
              ['Official Policy', 'Official multiculturalism since 1970s; "White Australia Policy" abolished 1973', 'First nation to adopt official multiculturalism (1971); Multiculturalism Act 1988', 'No formal multiculturalism policy; integration rhetoric dominant since 2001'],
              ['Foreign-Born', '30%', '23%', '14%'],
              ['Key Groups', 'British, Chinese, Indian, Vietnamese, Middle Eastern', 'British, French, Chinese, South Asian, Filipino', 'South Asian, Caribbean, Polish, Pakistani, Chinese'],
              ['Success Rating', '⭐⭐⭐⭐ High', '⭐⭐⭐⭐⭐ Highest', '⭐⭐⭐ Mixed'],
              ['Key Challenge', 'Indigenous reconciliation; asylum seeker policy (offshore detention)', 'Indigenous peoples; Quebec identity; affordability', 'Islamophobia; Brexit tensions; segregation in Northern cities'],
            ],
          })}

          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-lightbulb',
            title: 'Why Canada and Australia Score Higher',
            body: '<strong>Geographic isolation:</strong> Distance reduces "immigration panic." <br><strong>Points-based systems:</strong> Both select immigrants by skills — less resentment than "uncontrolled" migration. <br><strong>Political consensus:</strong> Multiculturalism has cross-party support. <br><strong>No colonial guilt trap:</strong> Less fraught history with non-white immigration (though both have severe Indigenous rights problems). <br><strong>Britain\'s challenges:</strong> Postcolonial return migration, class divisions, and the Brexit debate complicated the multicultural narrative.'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'History of a World Power', link: `${BASE}/themen/gb/world-power` },
            next: { label: 'Britain and Europe', link: `${BASE}/themen/gb/europe-brexit` },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelGandhiPhilosophy() {
    return `
      <div class="wim-category" data-wim-cat="philosophy">
        ${renderAccordion([
          { title: 'Ahimsa — Nonviolence', content: '<p class="lz-prose">Absolute refusal to use violence, even when oppressed. Gandhi believed violence corrupts the soul and creates a cycle of revenge. Nonviolence is not weakness — it requires more courage than violence.</p>' },
          { title: 'Satyagraha — Truth-Force', content: '<p class="lz-prose">"Satyagraha" = Satya (truth) + agraha (holding firmly). Peaceful resistance to injustice through non-cooperation, civil disobedience, and fasting. The opponent is not destroyed but converted through suffering.</p>' },
          { title: 'Swadeshi — Self-Sufficiency', content: '<p class="lz-prose">Economic self-reliance: buy Indian goods, reject British products. Gandhi\'s <strong>spinning wheel (charkha)</strong> became the symbol — every Indian should spin their own cloth and reject the Manchester textile mills that had destroyed Indian weaving.</p>' },
          { title: 'Fasting as Protest', content: '<p class="lz-prose">Gandhi undertook 17 fasts during his lifetime. They were not hunger strikes in the Western sense — they were acts of moral pressure and self-purification, intended to awaken the conscience of his opponents.</p>' },
        ])}
      </div>
    `;
  }

  _panelGandhiPartition() {
    return `
      <div class="wim-category hidden" data-wim-cat="partition">
        ${renderInfobox({ type: 'danger', icon: 'fas fa-exclamation-triangle', title: 'The Human Cost of Partition', body: '• <strong>1–2 million killed</strong> in communal riots between Hindus, Muslims, and Sikhs<br>• <strong>10–20 million refugees</strong> crossed the new borders in both directions — the largest mass migration in history<br>• Gandhi went on a fast to stop the violence — partly effective<br>• The Kashmir dispute created in 1947 remains unresolved today' })}
        <p class="lz-prose" style="margin-top:1rem;">Gandhi had fought for a united India — he was devastated by partition. He called it "a spiritual tragedy." His assassination came partly from Hindu nationalists who blamed him for being too sympathetic to Muslims during partition.</p>
      </div>
    `;
  }

  _panelGandhiLegacy() {
    return `
      <div class="wim-category hidden" data-wim-cat="legacy">
        ${renderMerkboxGrid([
          { icon: 'fas fa-fist-raised', title: 'Martin Luther King Jr.', text: 'Directly inspired by Gandhi\'s methods for the American Civil Rights Movement. "Christ gave us the goals, Gandhi gave us the tactics."' },
          { icon: 'fas fa-handshake', title: 'Nelson Mandela', text: 'Anti-apartheid struggle drew on Gandhi\'s model of peaceful resistance and moral authority.' },
          { icon: 'fas fa-calendar-day', title: 'UN Peace Day', text: 'October 2 (Gandhi\'s birthday) is the International Day of Non-Violence, declared by the UN General Assembly.' },
          { icon: 'fas fa-globe', title: 'Worldwide Impact', text: 'Inspired independence movements in Kenya, Ghana, and across Asia. Proved that nonviolence could defeat an empire.' },
        ])}
      </div>
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initWimTabs(document);
  }
}