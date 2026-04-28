// ─────────────────────────────────────────────────────────────
// 5.1  Globalization Vocabulary
// pages/projekte/lernzettel/faecher/englisch/themen/vocab/globalization.js
// ─────────────────────────────────────────────────────────────
import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable, renderSubhead,
  renderTags, renderAccordion, renderMerkboxGrid, renderTabs, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class GlobalizationVocabPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-vocab-globalization';
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
            <i class="fas fa-chevron-right"></i><span>5.1 Globalization</span>
          </nav>
          <h1 class="lz-sub-title">Globalization<br><em>Vocabulary</em></h1>
          <p class="lz-sub-desc">Trade · Economy · Culture · Technology · Migration · Key Arguments</p>
          ${renderTags(['Globalization', 'Free Trade', 'Interdependence', 'Glocalization', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-earth-americas', title: 'Globalization', text: 'The process of increasing interconnectedness and interdependence of the world\'s economies, cultures, and populations. Driven by trade, technology, and migration.' },
            { icon: 'fas fa-handshake', title: 'Free Trade', text: 'Trade between countries without tariffs, quotas, or restrictions. Associated with the WTO, NAFTA, and the EU Single Market. Debate: who benefits?' },
            { icon: 'fas fa-arrows-spin', title: 'Interdependence', text: 'Countries rely on each other for goods, services, and stability. A crisis in one country (financial, environmental) ripples globally — as shown by COVID-19 and 2008.' },
            { icon: 'fas fa-globe-europe', title: 'Glocalization', text: '"Think globally, act locally." Global products adapted to local cultures — e.g. McDonald\'s local menus. Neither pure globalisation nor isolation, but a blend.' },
          ])}

          ${renderSubhead('Core Nouns')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Example sentence'],
            rows: [
              ['globalization','Globalisierung','Globalization has reduced extreme poverty in parts of Asia.'],
              ['interconnectedness','Vernetzung / Verbundenheit','The interconnectedness of financial markets means crises spread rapidly.'],
              ['interdependence','gegenseitige Abhängigkeit','Economic interdependence makes war between trading partners less likely.'],
              ['free trade','Freihandel','Supporters argue that free trade lowers prices for consumers.'],
              ['trade barrier','Handelsschranke','Tariffs are a common trade barrier used to protect domestic industries.'],
              ['tariff','Zoll / Einfuhrzoll','The US imposed heavy tariffs on Chinese goods during the trade war.'],
              ['outsourcing','Auslagerung','Many companies outsource manufacturing to countries with lower wages.'],
              ['offshoring','Verlagerung ins Ausland','Offshoring creates jobs abroad but can lead to unemployment at home.'],
              ['supply chain','Lieferkette','The pandemic exposed the fragility of global supply chains.'],
              ['multinational corporation (MNC)','multinationaler Konzern','MNCs like Apple and Nike operate across dozens of countries.'],
              ['transnational corporation (TNC)','transnationales Unternehmen','TNCs often shift profits to low-tax countries to avoid taxation.'],
              ['Foreign Direct Investment (FDI)','Auslandsdirektinvestition','FDI flows have increased dramatically since the 1990s.'],
              ['trade deficit / surplus','Handelsdefizit / -überschuss','The USA runs a large trade deficit with China.'],
              ['emerging economy','Schwellenland','China and India are often cited as major emerging economies.'],
              ['developed country','Industrieland / Industrienation','Developed countries often struggle with deindustrialisation.'],
              ['developing country','Entwicklungsland','Many developing countries depend on the export of raw materials.'],
              ['migration','Migration','Economic migration has been accelerated by globalization.'],
              ['brain drain','Abwanderung von Fachkräften','Brain drain deprives developing countries of their most educated citizens.'],
              ['remittances','Überweisungen (an Familie im Ausland)','Remittances now exceed foreign aid for many developing countries.'],
              ['homogenization','Vereinheitlichung / Gleichmachung','Critics fear cultural homogenization — the spread of a single global culture.'],
              ['glocalization','Glokalisierung','Glocalization allows companies to balance global efficiency with local appeal.'],
              ['cultural imperialism','Kulturimperialismus','American fast food and pop culture are seen by some as cultural imperialism.'],
              ['inequality','Ungleichheit','Globalization has reduced inequality between countries but increased it within them.'],
              ['race to the bottom','Wettlauf nach unten','The race to the bottom in labour standards drives down wages globally.'],
              ['protectionism','Protektionismus','Protectionism shields domestic industries from foreign competition.'],
              ['deregulation','Deregulierung','Deregulation of financial markets contributed to the 2008 global crisis.'],
              ['neoliberalism','Neoliberalismus','Critics blame neoliberalism for growing wealth gaps.'],
              ['sustainable development','nachhaltige Entwicklung','The SDGs aim to achieve sustainable development by 2030.'],
            ],
          })}

          ${renderSubhead('Core Verbs & Adjectives')}
          ${renderTable({
            headers: ['Word', 'German', 'Example'],
            rows: [
              ['to globalise','globalisieren','The internet has globalised access to information.'],
              ['to integrate','integrieren / eingliedern','European countries have integrated their economies through the EU.'],
              ['to liberalise','liberalisieren','Many countries liberalised their trade regimes in the 1990s.'],
              ['to exploit','ausbeuten','Critics argue that MNCs exploit cheap labour in developing countries.'],
              ['to outsource','auslagern','The company outsourced its call centres to India.'],
              ['to bridge the gap','die Kluft überbrücken','Technology can bridge the gap between rich and poor nations.'],
              ['to widen the gap','die Kluft vergrößern','Critics argue that free trade widens the gap between rich and poor.'],
              ['global','global / weltweit','Climate change is a global problem requiring a global solution.'],
              ['transnational','transnational','Transnational companies operate across national borders.'],
              ['interconnected','vernetzt / verbunden','Our world is more interconnected than ever before.'],
              ['interdependent','voneinander abhängig','Modern economies are highly interdependent.'],
              ['diverse','vielfältig','A diverse workforce brings multiple perspectives and creativity.'],
              ['homogeneous','homogen / einheitlich','Critics fear a homogeneous global culture dominated by the West.'],
              ['sustainable','nachhaltig','We need a sustainable model of globalisation.'],
              ['inequitable','ungerecht / ungleich','The current global trading system is arguably inequitable.'],
            ],
          })}

          ${renderSubhead('Key Arguments — For & Against')}
          ${renderAccordion([
            { title: '✅ Arguments FOR Globalization', content: `
              ${renderTable({ headers: ['Argument', 'Key Evidence / Phrase'], rows: [
                ['Reduces extreme poverty','800 million lifted out of poverty since 1990 — largely driven by trade-led growth in Asia.'],
                ['Lowers consumer prices','Free trade allows countries to specialise → goods produced more efficiently → lower prices for all.'],
                ['Drives innovation','Global competition forces companies to innovate; international collaboration accelerates R&D.'],
                ['Promotes peace','Interdependent economies have strong incentives to avoid conflict (Kant\'s democratic peace theory).'],
                ['Spreads democracy and human rights','Economic development tends to produce pressure for democratic governance over time.'],
                ['Cultural enrichment','Exposure to diverse cultures broadens perspectives; cuisine, music, art all benefit from exchange.'],
              ]})}
            `},
            { title: '❌ Arguments AGAINST Globalization', content: `
              ${renderTable({ headers: ['Argument', 'Key Evidence / Phrase'], rows: [
                ['Increases inequality within countries','While global inequality fell, inequality within many developed nations rose sharply since the 1980s.'],
                ['Job losses in developed countries','Deindustrialisation: factory jobs moved to low-wage countries; left-behind communities in the US Rust Belt, UK North.'],
                ['Exploitation of workers','"Race to the bottom" — companies seek countries with lowest wages and weakest regulations.'],
                ['Environmental damage','Global supply chains increase carbon emissions; "pollution havens" where regulations are weak.'],
                ['Loss of cultural identity','Homogenization: local languages, traditions, and products replaced by Western/American culture.'],
                ['Tax avoidance by MNCs','Companies shift profits to low-tax jurisdictions; developing countries lose billions in tax revenue.'],
                ['Financial contagion','2008 crisis spread globally within weeks; interconnectedness transmits crises as well as growth.'],
              ]})}
            `},
          ])}

          ${renderSubhead('Useful Phrases for Essays')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['Globalization has undeniably transformed…','Opening claim — strong, neutral-sounding start'],
              ['While proponents argue that… , critics contend that…','Presenting two sides in one sentence'],
              ['The benefits of free trade are unevenly distributed.','Acknowledging inequality within a positive framing'],
              ['Rather than homogenization, what we see is hybridization.','Counter to cultural imperialism argument'],
              ['The race to the bottom in labour standards…','Describing the downward pressure on workers\' rights'],
              ['No country is an island in today\'s interconnected world.','Dramatic opener about interdependence'],
              ['Globalisation is not a zero-sum game.','Arguing that gains in one place don\'t require losses in another'],
              ['The fruits of globalisation have been unequally shared.','Nuanced critique — acknowledges benefits, notes inequality'],
            ],
          })}

        </div>
      </section>
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({ 
            prev: { label: 'Asian Communities', link: `${BASE}/themen/literature/asian-communities` },  
            next: { label: 'Diversity', link: `${BASE}/themen/vocab/diversity` } 
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}