// ─────────────────────────────────────────────────────────────
// 5.5  USA Vocabulary
// pages/projekte/lernzettel/faecher/englisch/themen/vocab/usa.js
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

export default class UsaVocabPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-vocab-usa';
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
            <i class="fas fa-chevron-right"></i><span>5.5 USA</span>
          </nav>
          <h1 class="lz-sub-title">USA<br><em>Vocabulary</em></h1>
          <p class="lz-sub-desc">American Dream · Politics · Society · Race · Values · Culture</p>
          ${renderTags(['American Dream', 'Founding Fathers', 'Civil Rights', 'Politics', 'Diversity', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-flag-usa', title: 'American Dream', text: 'The belief that anyone — regardless of background — can achieve success through hard work and determination. "From rags to riches." Widely criticised as a myth that masks structural inequality.' },
            { icon: 'fas fa-landmark', title: 'Founding Documents', text: 'Declaration of Independence (1776): "all men are created equal." Constitution (1787): the supreme law. Bill of Rights (1791): first 10 amendments — freedom of speech, religion, right to bear arms.' },
            { icon: 'fas fa-users', title: 'Melting Pot vs Salad Bowl', text: 'Melting Pot: immigrants assimilate into one American culture. Salad Bowl: different cultures maintain their distinctiveness while coexisting. Ongoing debate about American national identity.' },
            { icon: 'fas fa-scale-balanced', title: 'Political System', text: 'Federal republic with 3 branches: Executive (President), Legislative (Congress: Senate + House), Judicial (Supreme Court). Two-party system: Democrats (liberal) vs Republicans (conservative).' },
          ])}

          ${renderSubhead('Founding & History')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes'],
            rows: [
              ['Founding Fathers','Gründerväter','Washington, Jefferson, Madison, Hamilton, Franklin — the architects of the US. Slaveholders who wrote "all men are created equal."'],
              ['Declaration of Independence','Unabhängigkeitserklärung','1776 — declared independence from Britain. "Life, liberty, and the pursuit of happiness."'],
              ['Constitution','Verfassung','1787 — the supreme law of the USA. Framework of government; hard to amend.'],
              ['Bill of Rights','Grundrechtskatalog / Bill of Rights','First 10 amendments (1791). Freedom of speech (1st), right to bear arms (2nd), protection from unreasonable searches (4th), right to remain silent (5th).'],
              ['Amendment','Zusatz / Verfassungsänderung','Changes to the Constitution. 27 amendments total — including abolishing slavery (13th, 1865), women\'s suffrage (19th, 1920), lowering voting age to 18 (26th, 1971).'],
              ['Civil War','Bürgerkrieg','1861–1865. North (Union) vs South (Confederacy) over slavery. Union victory ended slavery. Deep divisions persisted.'],
              ['Reconstruction','Wiederaufbau','1865–1877. Attempt to rebuild the South and integrate freed slaves. Ended prematurely — Black Codes and Jim Crow followed.'],
              ['Jim Crow laws','Jim-Crow-Gesetze','State and local laws enforcing racial segregation in the South (1877–1965). Separate schools, restaurants, transport.'],
              ['Civil Rights Movement','Bürgerrechtsbewegung','1950s–1960s. Led by Martin Luther King Jr. Fought against segregation and racial discrimination. Major achievements: Civil Rights Act (1964), Voting Rights Act (1965).'],
              ['slavery','Sklaverei','The enslavement of Africans and their descendants — central to American economic history. 400+ years of impact on US society and race relations.'],
              ['Manifest Destiny','Manifest Destiny','19th century belief that the USA was destined to expand westward across the continent — justified dispossession of Native Americans.'],
              ['Native Americans','Indianer / Indigene Amerikaner','The original inhabitants of North America. Dispossessed, forced onto reservations, subjected to cultural genocide. Ongoing struggles for recognition and rights.'],
            ],
          })}

          ${renderSubhead('Society & Values')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes'],
            rows: [
              ['American Dream','Amerikanischer Traum','The belief that hard work leads to success regardless of background. Critiqued as myth — social mobility is lower in the USA than in many European countries.'],
              ['meritocracy','Meritokratie','The idea that success is based on talent and effort — not birth or privilege. Widely believed in the USA; disputed by sociologists who point to inherited advantage.'],
              ['exceptionalism','Ausnahmestellung / Sonderrolle','The idea that the USA is uniquely virtuous and has a special role in the world. Used to justify foreign policy interventions.'],
              ['melting pot','Schmelztiegel','The metaphor for the USA as a place where immigrants blend into one American identity.'],
              ['salad bowl','Salatteller','Alternative metaphor: different groups coexist while maintaining their distinct identities.'],
              ['multiculturalism','Multikulturalismus','The coexistence of multiple cultural groups — increasingly contested in US politics.'],
              ['segregation','Rassentrennung','Enforced racial separation in schools, transport, etc. Legally ended by the Civil Rights Act (1964) but de facto segregation persists.'],
              ['affirmative action','positive Diskriminierung','Policies giving preference to historically disadvantaged groups in education and employment. Supreme Court struck down college admissions programmes (2023).'],
              ['gun control','Waffenkontrolle','A major political debate: 2nd Amendment rights vs. public safety. The USA has the highest rate of gun deaths among wealthy nations.'],
              ['healthcare','Gesundheitsversorgung','Unlike most developed nations, the USA lacks universal healthcare. The Affordable Care Act (Obamacare, 2010) expanded coverage but left 30M+ uninsured.'],
              ['poverty','Armut','Approximately 12% of Americans live in poverty. Child poverty rate among the highest in the developed world.'],
              ['social mobility','sozialer Aufstieg','The ability to move up the economic ladder. USA has lower social mobility than many European countries — challenging the American Dream narrative.'],
              ['inequality','Ungleichheit','The USA has one of the highest levels of income and wealth inequality among developed nations. Top 1% own ~30% of wealth.'],
              ['police brutality','Polizeigewalt','Disproportionate use of force — particularly against Black Americans. Sparked Black Lives Matter movement after the death of George Floyd (2020).'],
              ['Black Lives Matter (BLM)','Black Lives Matter','Movement against police brutality and systemic racism. Sparked globally in 2020 after George Floyd\'s murder.'],
            ],
          })}

          ${renderSubhead('Political System & Parties')}
          ${renderTable({
            headers: ['Term', 'German', 'Notes'],
            rows: [
              ['federal republic','Bundesrepublik','Power is divided between federal (national) government and 50 state governments. States have significant autonomy.'],
              ['Congress','Kongress','The legislative branch — consists of the Senate (100 senators, 2 per state) and the House of Representatives (435 members).'],
              ['Senate','Senat','Upper chamber. 2 senators per state regardless of population. 6-year terms. Approves treaties, confirms appointments.'],
              ['House of Representatives','Repräsentantenhaus','Lower chamber. 435 members proportional to state population. 2-year terms. Must originate revenue bills.'],
              ['Democrat','Demokrat','Centre-left party. Supports regulated markets, social programmes, environmental protection, stricter gun control. Donkey symbol.'],
              ['Republican','Republikaner','Centre-right to right-wing party. Supports lower taxes, deregulation, 2nd Amendment rights, stricter immigration. Elephant symbol.'],
              ['electoral college','Wahlmännerkollegium','Indirect system for electing the President. 538 electors — candidate needs 270 to win. Winner-takes-all in most states.'],
              ['filibuster','Filibuster','Senate procedure allowing unlimited debate to delay or block legislation. Requires 60 votes (not 51) to end.'],
              ['Supreme Court','Oberstes Gericht','9 justices appointed for life by the President, confirmed by the Senate. Final arbiter of constitutional questions.'],
              ['impeachment','Amtsenthebungsverfahren','Process to remove the President. House votes to impeach; Senate holds trial. Three presidents impeached: Andrew Johnson, Bill Clinton, Donald Trump (twice).'],
              ['lobbying','Lobbying','Legal paid advocacy to influence politicians — a highly developed and lucrative industry in Washington DC.'],
              ['gerrymandering','Gerrymandering','Manipulating electoral district boundaries to favour one party. Widespread in the USA.'],
              ['swing state','Swing State','A state where either party could win — these determine presidential elections. E.g. Pennsylvania, Georgia, Arizona.'],
              ['right to bear arms','Waffenrecht (2. Zusatzartikel)','The 2nd Amendment right to keep and bear arms. One of the most contested rights in American politics.'],
              ['freedom of speech','Redefreiheit (1. Zusatzartikel)','The 1st Amendment right — broader than in most countries. Protects most speech, including hate speech, unless it causes imminent harm.'],
            ],
          })}

          ${renderSubhead('Useful Phrases for Essays')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['The American Dream promises equal opportunity — but not equal outcomes.','Nuanced defence of the Dream'],
              ['The gap between the American ideal and the American reality has always been vast.','Critical framing — Frederick Douglass, MLK, Baldwin tradition'],
              ['The USA is simultaneously one of the world\'s most diverse and most unequal societies.','Capturing the central tension'],
              ['Race remains the defining fault line of American society.','Strong claim on race\'s centrality'],
              ['The two-party system leaves millions of Americans without meaningful political representation.','Democratic reform argument'],
              ['The Constitution\'s framers could not have envisioned the modern world — yet it remains almost unamendable.','On constitutional rigidity'],
              ['For many Americans, the Dream has become a nightmare of debt, insecurity, and precarity.','Critical/pessimistic framing'],
            ],
          })}

        </div>
      </section>
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Consumerism', link: `${BASE}/themen/vocab/consumerism` },
            next: { label: 'UK', link: `${BASE}/themen/vocab/uk` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}