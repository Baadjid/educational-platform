// ─────────────────────────────────────────────────────────────
// 5.6  UK Vocabulary
// pages/projekte/lernzettel/faecher/englisch/themen/vocab/uk.js
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

export default class UkVocabPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-vocab-uk';
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
            <i class="fas fa-chevron-right"></i><span>5.6 UK</span>
          </nav>
          <h1 class="lz-sub-title">UK<br><em>Vocabulary</em></h1>
          <p class="lz-sub-desc">Politics · Brexit · Society · Class · Monarchy · Multiculturalism</p>
          ${renderTags(['Brexit', 'Parliament', 'NHS', 'Class', 'Multiculturalism', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-crown', title: 'Constitutional Monarchy', text: 'The UK is a constitutional monarchy — the monarch (currently King Charles III) is head of state but has largely ceremonial powers. Real power lies with the elected Parliament and Prime Minister.' },
            { icon: 'fas fa-landmark', title: 'Westminster System', text: 'The model for parliamentary democracy — upper house (House of Lords) and lower house (House of Commons). The Commons is dominant; the party with a majority forms the government.' },
            { icon: 'fas fa-hospital', title: 'NHS', text: 'The National Health Service (1948) — free universal healthcare funded by taxation. One of the most cherished British institutions. Under pressure from underfunding and an ageing population.' },
            { icon: 'fas fa-door-open', title: 'Brexit', text: 'The UK\'s withdrawal from the European Union — voted for in the 2016 referendum (52% leave) and completed in 2020. Deeply divisive; ongoing debate about its economic and political effects.' },
          ])}

          ${renderSubhead('Political System')}
          ${renderTable({
            headers: ['Term', 'German', 'Notes'],
            rows: [
              ['United Kingdom (UK)','Vereinigtes Königreich','England, Scotland, Wales, and Northern Ireland. Each has some degree of devolved government.'],
              ['constitutional monarchy','konstitutionelle Monarchie','The monarch is head of state but operates within constitutional constraints. Powers are largely ceremonial.'],
              ['parliamentary democracy','parlamentarische Demokratie','The government is formed by the party commanding a majority in the elected House of Commons.'],
              ['House of Commons','Unterhaus','The elected lower chamber of Parliament. 650 MPs. The dominant chamber — government is formed here.'],
              ['House of Lords','Oberhaus','Unelected upper chamber — appointed peers (life and hereditary). Can delay but not block legislation. Subject to reform debate.'],
              ['Prime Minister (PM)','Premierminister/in','The head of government — leader of the largest party in the Commons. Not directly elected by the public.'],
              ['Cabinet','Kabinett','Senior ministers who collectively make major decisions. "Cabinet responsibility" — all must support official policy publicly.'],
              ['First Past the Post (FPTP)','relatives Mehrheitswahlrecht','Electoral system where the candidate with the most votes wins — even without a majority. Favours two-party dominance; "wastes" many votes.'],
              ['devolution','Devolution / Dezentralisierung','Transfer of powers from Westminster to the Scottish Parliament, Welsh Senedd, and Northern Ireland Assembly.'],
              ['Conservative Party (Tories)','Konservative Partei','Centre-right. Supports lower taxes, free markets, controlled immigration. Governed 2010–2024.'],
              ['Labour Party','Labour-Partei','Centre-left. Supports workers\' rights, public services, progressive taxation. Founded 1900 from trade union movement.'],
              ['Liberal Democrats','Liberaldemokraten','Centrist. Strongly pro-European, civil liberties. Third party. Coalition government with Conservatives 2010–2015.'],
              ['SNP (Scottish National Party)','Schottische Nationalpartei','Centre-left, Scottish nationalist. Seeks Scottish independence. Dominant in Scotland since 2015.'],
              ['snap election','vorgezogene Neuwahl','An early election called by the Prime Minister (now requires a 2/3 majority of Commons under the Fixed-term Parliaments Act).'],
              ['by-election','Nachwahl','An election held to fill a vacant parliamentary seat between general elections.'],
            ],
          })}

          ${renderSubhead('Brexit')}
          ${renderTable({
            headers: ['Term', 'German', 'Notes'],
            rows: [
              ['Brexit','Brexit','Britain + Exit. The UK\'s withdrawal from the European Union.'],
              ['referendum (2016)','Volksabstimmung (2016)','52% voted Leave, 48% Remain. Turnout 72.2%. The most divisive political event in recent British history.'],
              ['Leave campaign','Leave-Kampagne','Key slogan: "Take back control." Emphasised sovereignty, immigration control, ending EU budget contributions.'],
              ['Remain campaign','Remain-Kampagne','Emphasised economic benefits of EU membership, trade access, workers\' rights. Project Fear label by opponents.'],
              ['sovereignty','Souveränität','Control over one\'s own laws and borders — the central Leave argument. "We make our own laws."'],
              ['the Withdrawal Agreement','Austrittsabkommen','The legal treaty governing the UK\'s exit — negotiated by Boris Johnson, ratified 2020. Included the Northern Ireland Protocol.'],
              ['the Northern Ireland Protocol','Nordirland-Protokoll','The most contentious part of Brexit — kept Northern Ireland aligned with EU single market rules to avoid a hard border with the Republic.'],
              ['hard border','harte Grenze','A physical border between Northern Ireland and the Republic — avoided under Good Friday Agreement. The core of the Northern Ireland problem.'],
              ['Good Friday Agreement (1998)','Karfreitagsabkommen','Peace agreement ending the Northern Ireland conflict. Required open border between North and South.'],
              ['soft Brexit / hard Brexit','weicher / harter Brexit','Soft: remain in single market and customs union. Hard: complete separation from EU economic structures.'],
              ['Single Market','Binnenmarkt','The EU\'s free movement of goods, services, capital, and people. The UK left in January 2021.'],
              ['Customs Union','Zollunion','Common tariff on goods from outside. UK left — now faces border checks and tariffs on EU trade.'],
              ['Brexiteer / Brexiter','Brexit-Befürworter/in','A supporter of Brexit. Often also called "Leaver." Dominant in the Conservative Party.'],
              ['Remainer','Brexit-Gegner/in','A supporter of remaining in or rejoining the EU.'],
              ['trade deal','Handelsabkommen','The UK-EU Trade and Cooperation Agreement (TCA, 2020) — governs trade post-Brexit. No tariffs but increased bureaucracy.'],
            ],
          })}

          ${renderSubhead('Society & Culture')}
          ${renderTable({
            headers: ['Term', 'German', 'Notes'],
            rows: [
              ['class','Klasse / Stand','Social class — working, middle, upper — remains a powerful organising principle in British society. Determined by income, education, accent, occupation.'],
              ['class system','Klassengesellschaft','The UK\'s historically rigid social hierarchy. Still influences education, opportunity, and culture.'],
              ['social mobility','sozialer Aufstieg','Movement between classes. The UK\'s "class ceiling" remains one of the least mobile in the developed world.'],
              ['NHS (National Health Service)','Nationaler Gesundheitsdienst','Free at the point of use, funded by taxation. Founded 1948. Under severe financial pressure. Deeply cherished — described as "the closest thing the English have to a religion."'],
              ['welfare state','Wohlfahrtsstaat','The system of social protection: NHS, unemployment benefits, state pension, housing support. Established by the Attlee government (1945–51).'],
              ['multicultural society','multikulturelle Gesellschaft','Britain has large communities of South Asian, Caribbean, African, and Eastern European heritage. Windrush generation arrived from 1948.'],
              ['Windrush generation','Windrush-Generation','Caribbean migrants invited to the UK from 1948–1971 to fill labour shortages. The Windrush Scandal (2018) saw some wrongly deported.'],
              ['post-colonial Britain','postkoloniales Großbritannien','Britain\'s relationship with its former empire shapes contemporary race relations, immigration, and national identity.'],
              ['identity politics','Identitätspolitik','Political mobilisation based on shared identity — race, gender, sexuality. Debated: empowering marginalised groups vs. fragmenting common ground.'],
              ['establishment','Establishment','The traditional elite — Oxbridge-educated politicians, journalists, civil servants who run the country\'s institutions.'],
              ['public school','Privatschule (Eliteschule)','Confusingly, "public school" in Britain means elite fee-paying private schools — Eton, Harrow, Winchester. About 7% attend them but they supply a disproportionate share of politicians, judges, and journalists.'],
              ['Oxbridge','Oxbridge','Oxford and Cambridge universities — elite, highly selective, produce many leaders. Symbol of class privilege.'],
              ['austerity','Sparkurs / Austeritätspolitik','Government spending cuts — implemented by Conservative-led governments 2010–2020 to reduce the deficit. Reduced public services and welfare. Debated: economic necessity vs. political choice.'],
              ['privatisation','Privatisierung','Selling state-owned industries to private companies — accelerated under Thatcher (1979–90): British Telecom, British Gas, British Rail, water companies.'],
              ['Thatcherism','Thatcherismus','Margaret Thatcher\'s ideology: free markets, privatisation, deregulation, trade union restrictions, individual responsibility over state provision. Reshaped British economy.'],
            ],
          })}

          ${renderSubhead('Useful Phrases for Essays')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['Britain remains a deeply class-conscious society despite decades of social change.','On class persistence'],
              ['Brexit exposed and deepened fault lines in British society — between generations, regions, and classes.','On Brexit\'s social impact'],
              ['The NHS represents the closest the British have to a shared national religion.','On the NHS\'s cultural significance'],
              ['Devolution has created a "union" in name only — the centrifugal forces pulling the UK apart are growing.','On Scottish independence, Northern Ireland, Welsh devolution'],
              ['The Windrush Scandal revealed that "British values" of fairness did not always extend to those of Caribbean heritage.','On race and post-colonial identity'],
              ['The FPTP electoral system distorts representation and entrenches a two-party duopoly.','On democratic reform'],
            ],
          })}

        </div>
      </section>
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'USA', link: `${BASE}/themen/vocab/usa` },
            next: { label: 'Work & Career', link: `${BASE}/themen/vocab/work` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}