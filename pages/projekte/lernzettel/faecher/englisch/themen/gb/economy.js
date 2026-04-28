// pages/projekte/lernzettel/faecher/englisch/themen/gb/economy.js
// Great Britain – Kapitel 19 / 2.9: Economy

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
  renderCompare,
  renderTabs,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const ECONOMY_ERAS_TABS = [
  { key: 'thatcher',   label: '🔵 Thatcher (1979–90)' },
  { key: 'newlabour',  label: '🔴 New Labour (1997–2010)' },
  { key: 'post2010',   label: '🟣 Post-2010' },
];

export default class EconomyGbPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-gb-economy';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 19</span>
            <i class="fas fa-chevron-right"></i><span>Economy</span>
          </div>
          <h1 class="lz-sub-title">British Economy<br><em>Rise, Decline & Reorientation</em></h1>
          <p class="lz-sub-desc">Workshop of the World · "British Disease" · Thatcher Revolution · North-South Divide · Post-Brexit</p>
          ${renderTags(['Economy', 'Industrial Revolution', 'Thatcher', 'North-South Divide', 'Brexit'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-industry', title: '1st Industrial Nation', text: 'Britain was the world\'s first industrialised economy — "Workshop of the World." By 1850, it produced more than half the world\'s iron and cotton cloth.' },
            { icon: 'fas fa-sterling-sign', title: '6th Largest GDP', text: 'UK GDP in 2024: ~$3.1 trillion. 6th largest economy globally. But growth has lagged behind comparable economies since 2008.' },
            { icon: 'fas fa-building', title: '80% Services', text: 'Services — finance, insurance, retail, hospitality, creative industries — make up about 80% of the UK economy. Manufacturing is just 10%.' },
            { icon: 'fas fa-map-marker-alt', title: 'The North-South Divide', text: 'London\'s GDP per capita is roughly double that of Northern England. The widest regional inequality of any comparable developed nation.' },
          ])}

          ${renderSubhead('19.1 The Workshop of the World')}
          <h2 class="lz-h2 reveal">19th Century Economic Superpower</h2>
          <p class="lz-prose reveal">
            Britain was the <strong>first nation to industrialise</strong> (from the 1760s). By the mid-19th
            century, it dominated global trade, manufacturing, and finance. The phrase
            <strong>"Pax Britannica"</strong> described a British-dominated world order — enforced by the
            Royal Navy and funded by industrial wealth.
          </p>

          ${renderAccordion([
            {
              title: '🏭 Industrial Revolution Key Inventions',
              content: `<p class="lz-prose">• <strong>Steam engine</strong> (James Watt, 1769) — powered factories, railways, ships<br>
                        • <strong>Spinning jenny</strong> (James Hargreaves, 1764) — mechanised textile production<br>
                        • <strong>Railways</strong> (George Stephenson, 1825) — connected nation; created national market<br>
                        • <strong>Iron and steel production</strong> — Bessemer process (1856); Sheffield, Middlesbrough<br>
                        • <strong>Coal mining</strong> — South Wales, Yorkshire, Durham, Scotland<br>
                        • <strong>Shipbuilding</strong> — Clyde (Glasgow), Newcastle, Belfast</p>`
            },
            {
              title: '💷 Financial Supremacy',
              content: `<p class="lz-prose">• <strong>Pound sterling</strong> was the global reserve currency — most international trade settled in pounds.<br>
                        • <strong>City of London</strong> — the world's financial centre; Lloyd's of London (insurance since 1688); Bank of England (1694).<br>
                        • <strong>25% of world trade</strong> passed through British hands at its peak.<br>
                        • <strong>Foreign investment:</strong> By 1914, Britain had invested more abroad than any other nation — railways in Argentina, tea estates in India, mines in South Africa.</p>`
            },
          ])}

          ${renderSubhead('19.2 The "British Disease" — Decline (1945–1979)')}
          <h2 class="lz-h2 reveal">The Sick Man of Europe</h2>
          <p class="lz-prose reveal">
            After WWII, Britain emerged victorious but exhausted. It had lost its empire, its manufacturing
            was outdated, and it was overtaken successively by the USA, then Germany, then Japan. The period
            was marked by low growth, industrial conflict, and humiliating crises.
          </p>

          ${renderVTimeline([
            { year: '1945', title: 'Austerity begins', text: 'Despite winning WWII, Britain was bankrupt. Rationing continued until 1954. Borrowed heavily from the USA (loan repaid only in 2006).' },
            { year: '1950s–60s', title: 'Decline relative to rivals', text: 'West Germany and Japan rebuilt from destruction — more modern factories, better management. Britain failed to invest adequately in new technology.' },
            { year: '1973–74', title: 'Oil Crisis and Three-Day Week', text: 'Global oil prices quadrupled. Energy shortages so severe that industry limited to three working days/week to save power.' },
            { year: '1976', title: 'IMF Bailout', text: 'Britain had to borrow from the International Monetary Fund — humiliating for a G7 nation. PM Callaghan: "The party is over."' },
            { year: '1978–79', title: 'Winter of Discontent', text: 'Wave of strikes by lorry drivers, refuse collectors, gravediggers, hospital workers. Rubbish piled in streets; bodies unburied. Destroyed Labour\'s reputation for managing the unions.' },
          ])}

          ${renderInfobox({
            type: 'danger',
            icon: 'fas fa-chart-line-down',
            title: 'Why Did Britain Decline?',
            body: '• <strong>Old industries:</strong> Outdated factories not replaced; managers and workers resistant to change.<br>• <strong>Trade unions:</strong> Powerful unions resisted modernisation; frequent strikes disrupted production.<br>• <strong>Empire mentality:</strong> Assumed world markets were guaranteed; failed to compete with Germany/Japan.<br>• <strong>Underinvestment in education:</strong> Engineering and science underfunded vs. arts/classics.<br>• <strong>Class system:</strong> Manufacturing seen as inferior to finance and the professions.'
          })}

          ${renderSubhead('19.3 The Thatcher Revolution (1979–1990)')}
          <h2 class="lz-h2 reveal">From "British Disease" to "Cool Britannia"</h2>

          <nav class="wim-tabs" id="economy-eras-tabs" aria-label="Economy eras">
            ${ECONOMY_ERAS_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="thatcher">
            ${renderAccordion([
              { title: 'Economic Programme', content: '<p class="lz-prose">• <strong>Monetarism:</strong> Control money supply to defeat inflation — interest rates up to 17%. Caused severe recession 1980–82; 3 million unemployed.<br>• <strong>Privatisation:</strong> British Telecom, British Gas, British Airways, British Steel, water, electricity — all sold. Raised £65bn.<br>• <strong>Trade union reform:</strong> Step-by-step legislation limiting strike action. Miners\' Strike 1984–85 — decisive confrontation; miners defeated after a year.<br>• <strong>"Big Bang" (1986):</strong> Deregulation of financial markets. London financial sector exploded; new banks and instruments.</p>' },
              { title: 'Legacy', content: '<p class="lz-prose">• <strong>Positive:</strong> Inflation conquered; overmanned nationalised industries reformed; productivity improved; City of London reinvigorated.<br>• <strong>Negative:</strong> Deindustrialisation devastated mining and manufacturing communities; inequality widened; social fabric of Northern England, Wales, Scotland damaged; public services run down.</p>' },
            ])}
          </div>

          <div class="wim-category hidden" data-wim-cat="newlabour">
            ${renderAccordion([
              { title: '"Third Way" Economics', content: '<p class="lz-prose">Blair/Brown accepted Thatcherite economic framework (no renationalisation, relatively low taxes) but added significant public spending. "Prudence" — discipline with investment. Minimum wage introduced (1999). Working Tax Credit reduced child poverty. NHS investment doubled in real terms.</p>' },
              { title: '"Cool Britannia"', content: '<p class="lz-prose">Cultural and economic renaissance: Oasis, Damien Hirst, Blur; London became a global hub for finance, creative industries, fashion, tech. Strong growth 1997–2007. Low unemployment. London house prices soared.</p>' },
              { title: '2008 Financial Crisis', content: '<p class="lz-prose">Northern Rock bank run (2007) — first UK bank run since 1866. Gordon Brown\'s "save the banks" — £500bn in state guarantees. Recession. National debt doubled. Led to Conservative austerity programme 2010.</p>' },
            ])}
          </div>

          <div class="wim-category hidden" data-wim-cat="post2010">
            ${renderAccordion([
              { title: 'Austerity (2010–2019)', content: '<p class="lz-prose">Coalition/Conservative governments cut public spending sharply to reduce the deficit. £83bn in cuts. Public sector employment fell 1 million. Welfare cuts £37bn. By 2019 — slowest recovery of any G7 economy from the 2008 crisis.</p>' },
              { title: 'COVID-19 (2020)', content: '<p class="lz-prose">GDP fell 11% — the largest fall in 300 years. Furlough scheme: government paid 80% of wages for 11 million workers. National debt surged past £2 trillion. V-shaped recovery in 2021.</p>' },
              { title: 'Post-Brexit + Cost of Living Crisis', content: '<p class="lz-prose">2022–23: Inflation hit 11% — highest in 40 years. Energy prices doubled due to Ukraine war + UK dependency on gas. "Trussonomics" — PM Liz Truss\'s mini-budget (Sep 2022) crashed the pound and bond markets; she resigned after 45 days. Interest rate rises hit mortgage holders. Real wages fell for two years.</p>' },
            ])}
          </div>

          ${renderSubhead('19.4 Deindustrialisation and the Service Economy')}
          <h2 class="lz-h2 reveal">From Factories to Finance</h2>
          <p class="lz-prose reveal">
            Over the past 50 years, Britain has transformed from a manufacturing economy into a
            <strong>service economy</strong>. Manufacturing fell from ~30% of GDP in 1970 to ~10% today.
            Services — finance, retail, hospitality, creative industries, tech — now account for ~80%.
          </p>

          ${renderTable({
            headers: ['Sector', 'Share of GDP', 'Key Industries'],
            rows: [
              ['Financial Services', '~8–9%', 'Banking, insurance, fund management; City of London is Europe\'s premier financial centre even post-Brexit'],
              ['Creative Industries', '~6%', 'Music, film, TV, advertising, fashion, video games; UK is 2nd globally in creative exports'],
              ['Technology / Digital', 'Fast-growing', 'London is Europe\'s largest tech hub; fintech, AI, cybersecurity'],
              ['Tourism and Hospitality', '~5%', '37 million international visitors pre-COVID; £26bn in visitor spending'],
              ['Manufacturing', '~10%', 'Aerospace (Rolls-Royce, Airbus UK), pharmaceuticals, automotive (Jaguar, Mini, Nissan Sunderland)'],
              ['Agriculture', '<1%', 'Highly productive but tiny; food security debates post-Brexit'],
            ],
            highlight: [0, 1],
          })}

          ${renderSubhead('19.5 The North-South Divide')}
          <h2 class="lz-h2 reveal">One Country, Two Economies</h2>

          ${renderCompare({
            titleA: '🏙️ London and the South East',
            titleB: '🏭 The North and Midlands',
            listA: [
              'GDP per capita: ~£56,000 (London)',
              'Finance, tech, creative industries dominate',
              'Highest property values in Europe',
              'High graduate employment; young talent attracted',
              'Investment concentrated: HS2, Crossrail, tech clusters',
              'Life expectancy higher; health outcomes better',
            ],
            listB: [
              'GDP per capita: ~£22–26,000 (North East)',
              'Lost manufacturing; limited replacement jobs',
              'Lower property values; cheaper cost of living',
              'Brain drain: graduates leave for London',
              'Infrastructure underfunded for decades',
              'Higher mortality; lower life expectancy',
            ],
          })}

          ${renderAccordion([
            {
              title: '📊 The Divide in Numbers',
              content: `<p class="lz-prose">• <strong>London GDP per capita</strong> (~£56,000) is more than <strong>double</strong> the North East (~£26,000) — the widest regional gap in any comparable developed nation.<br>
                        • <strong>Life expectancy:</strong> Men in Kensington (London): 86 years. Men in Blackpool: 73 years — a 13-year gap.<br>
                        • <strong>Investment:</strong> London receives ~£3,000 per person in infrastructure spending annually; North East receives ~£700.<br>
                        • <strong>Public transport:</strong> London has the world-class Underground; much of the North relies on roads and underfunded rail.</p>`
            },
            {
              title: '🏗️ "Levelling Up" — Promise vs. Reality',
              content: `<p class="lz-prose">Boris Johnson's signature domestic policy was "Levelling Up" — reducing regional inequality. The Levelling Up White Paper (2022) set ambitious targets.<br><br>
                        <strong>Critics argued:</strong> Levelling Up Fund (£4.8bn) was dwarfed by austerity cuts (£37bn). Towns chosen for funding often happened to be marginal Conservative seats. HS2 — the Northern leg cancelled (2023) — was supposed to be the centrepiece of levelling up. Now just runs London-Birmingham.</p>`
            },
            {
              title: '🚆 HS2 — The Cancelled Ambition',
              content: `<p class="lz-prose">High Speed 2 (HS2) was designed to run from London to Birmingham, then to Manchester and Leeds — cutting journey times and increasing capacity. Cost ballooned from £37bn (2010) to £100bn+ (2023). In October 2023, PM Sunak cancelled the Northern legs — saving ~£36bn but gutting the "Levelling Up" ambition. Manchester and Northern city mayors were furious. Critics noted HS2 was always primarily about London-Birmingham, not the North.</p>`
            },
            {
              title: '🇪🇺 Brexit and the Northern Paradox',
              content: `<p class="lz-prose">Many of the most economically deprived Northern English towns voted most heavily for Brexit — despite benefiting significantly from EU Structural Funds and EU trade. Why?<br><br>
                        • Perceived loss of identity and control — not primarily economic calculation.<br>
                        • Immigration as a proxy for cultural change.<br>
                        • Anti-establishment anger — Brexit as a protest vote.<br>
                        • Post-Brexit economic performance has been weakest in regions that voted most heavily Leave — an ironic outcome that remains politically sensitive.</p>`
            },
          ])}

          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-chart-simple',
            title: 'Key Economic Statistics (2024)',
            body: '• <strong>GDP:</strong> ~$3.1 trillion (6th globally)<br>• <strong>GDP growth:</strong> ~0.5% — among slowest in G7<br>• <strong>Inflation:</strong> ~2.3% (down from 11% peak in 2022)<br>• <strong>Unemployment:</strong> ~4.2%<br>• <strong>National Debt:</strong> ~100% of GDP<br>• <strong>Trade deficit:</strong> Persistent — UK imports more than it exports<br>• <strong>Post-Brexit trade:</strong> Exports to EU down ~15% relative to trend'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Social Welfare', link: `${BASE}/themen/gb/social-welfare` },
            next: { label: 'Globalization', link: `${BASE}/themen/modern/globalization` }
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
    initWimTabs(document);
  }
}