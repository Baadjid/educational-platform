// pages/projekte/lernzettel/faecher/englisch/themen/modern/globalization.js
// Living in a Modern World – Kapitel 20 / 3.1: Globalization

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
const GLOB_WAVES_TABS = [
  { key: 'waves',   label: '📜 Historical Waves' },
  { key: 'winners', label: '🌏 Winners and Losers' },
];

const MIGRATION_TABS = [
  { key: 'impact',    label: '🌍 Impact on Countries' },
  { key: 'policies',  label: '⚖️ Policy Approaches' },
];

const ENV_TABS = [
  { key: 'climate',   label: '🌡️ Climate Change' },
  { key: 'biodiv',    label: '🦋 Biodiversity' },
  { key: 'pollution', label: '💨 Pollution' },
];

export default class GlobalizationPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-modern-globalization';
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
            <button data-link="${BASE}/themen/modern" class="lz-bread-link">Living in a Modern World</button>
            <i class="fas fa-chevron-right"></i><span>Kapitel 20</span>
            <i class="fas fa-chevron-right"></i><span>Globalization</span>
          </div>
          <h1 class="lz-sub-title">Globalization<br><em>Pros, Cons &amp; Challenges</em></h1>
          <p class="lz-sub-desc">
            Interconnectedness · Poverty · Migration · Climate Change · Paris Agreement ·
            Americanization · English as a World Language
          </p>
          ${renderTags(['Globalization', 'Poverty', 'Migration', 'Climate Change', 'Americanization'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-earth-americas', title: '$32 Trillion Trade', text: 'Total value of global merchandise trade in 2022 — nearly double 2005 levels. Globalization has created an unprecedented volume of international exchange.' },
            { icon: 'fas fa-arrow-trend-down', title: '700M in Poverty', text: 'People still living on under $2.15/day. Down from 1.9 billion in 1990 — mostly due to China\'s economic growth — but COVID-19 reversed recent gains.' },
            { icon: 'fas fa-person-walking-luggage', title: '281 Million Migrants', text: '3.6% of the world\'s population live outside their country of birth — the highest number ever recorded.' },
            { icon: 'fas fa-thermometer-half', title: '+1.2°C Since 1850', text: 'Average global warming since pre-industrial times. The last decade (2014–2023) was the warmest on record. 1.5°C threshold could be crossed by 2030.' },
          ])}

          ${renderSubhead('20.1 Pros and Cons of Globalization')}
          <h2 class="lz-h2 reveal">One World — Shared Opportunities and Risks</h2>
          <p class="lz-prose reveal">
            Globalization is the process of increasing interconnectedness and interdependence among countries,
            driven by trade, technology, capital flows, and cultural exchange. It is not a new phenomenon —
            the Silk Road, the Atlantic slave trade, and the British Empire were all forms of globalization.
            What is new is the <strong>speed, scale, and depth</strong> of today's integration.
          </p>

          ${renderCompare({
            titleA: '✅ Arguments FOR Globalization',
            titleB: '❌ Arguments AGAINST Globalization',
            listA: [
              'Economic growth — trade creates efficiency, specialisation, wealth',
              'Poverty reduction — lifted 1.2 billion out of extreme poverty since 1990',
              'Technology diffusion — innovations spread faster globally',
              'Cultural enrichment — access to music, food, art, ideas',
              '"When goods cross borders, soldiers don\'t" — interdependence reduces war',
              'Consumer benefits — lower prices, more variety',
            ],
            listB: [
              'Inequality — wealth gap widens; gains concentrated at the top',
              'Job losses — manufacturing moves to lower-wage countries',
              'Cultural homogenization — local traditions and languages disappear',
              'Environmental damage — race to the bottom on regulations',
              'Loss of sovereignty — corporations and international bodies override national decisions',
              'Financial contagion — crises spread instantly (2008, COVID-19)',
            ],
          })}

          <nav class="wim-tabs" id="glob-waves-tabs" aria-label="Globalization waves">
            ${GLOB_WAVES_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="waves">
            ${renderVTimeline([
              { year: '1450–1850', title: 'First Wave: Age of Exploration', text: 'European powers establish global trade routes. Colonialism. Transatlantic slave trade. Silver from Americas. Spices from Asia.' },
              { year: '1850–1914', title: 'Second Wave: Industrial Globalization', text: 'Railways, steamships, telegraph. "Pax Britannica." Gold standard. Mass migration. Peak: trade as % of GDP not surpassed until 1990s.' },
              { year: '1914–1945', title: 'Retreat', text: 'WWI, Great Depression, WWII. Tariffs, protectionism. Proof that globalization can reverse.' },
              { year: '1945–1990', title: 'Bretton Woods Era', text: 'IMF, World Bank, GATT. Managed globalization. Mostly among developed nations. Cold War limits integration.' },
              { year: '1990–2008', title: 'Hyperglobalization', text: 'WTO (1995), China joins (2001). Internet. Container shipping. Global supply chains. Fastest growth in world trade ever.' },
              { year: '2008–present', title: 'Slowbalization?', text: 'Post-crisis caution. Rise of populism (Trump, Brexit). COVID-19 supply chain crises. Russia-Ukraine war. "Reshoring" and "friendshoring." Deglobalization or just reconfiguration?' },
            ])}
          </div>

          <div class="wim-category hidden" data-wim-cat="winners">
            ${renderTable({ headers: ['Who', 'Won', 'Lost'], rows: [
              ['China / SE Asia', 'Hundreds of millions lifted from poverty; manufacturing hub', 'Environmental damage; labour rights suppressed; dependent on exports'],
              ['US / European consumers', 'Cheap goods; lower inflation; tech innovation', 'Manufacturing jobs; wage stagnation for lower-skilled workers; "hollowed out" communities'],
              ['Multinational corporations', 'Global markets; cheap labour; tax avoidance opportunities', 'Reputational risk; regulation increasing'],
              ['Developing countries (Africa)', 'Some trade growth; technology access; remittances', 'Commodity dependency; debt; brain drain; unequal trade terms'],
              ['Global elite (top 1%)', 'Enormous wealth gains; capital mobility', 'Growing political backlash'],
            ]})}
            ${renderInfobox({ type: 'blue', icon: 'fas fa-chart-line', title: 'The "Elephant Curve"', body: 'Economist Branko Milanovic\'s famous graph shows: middle classes in China and other emerging economies gained enormously from globalization. The very rich globally gained enormously. The middle-lower classes in rich countries (the US "Rust Belt," British "Red Wall") gained almost nothing. This explains both the popularity of globalization in Asia and the backlash against it in Western democracies.' })}
          </div>

          ${renderSubhead('20.2 Poverty as a Global Challenge')}
          <h2 class="lz-h2 reveal">Scale, Causes, and Solutions</h2>

          ${renderTable({
            headers: ['Region', 'Extreme Poverty Rate', 'Trend'],
            rows: [
              ['Sub-Saharan Africa', '~36%', '▲ Rising — only region where absolute numbers increasing'],
              ['South Asia (incl. India)', '~5%', '▼ Dramatic fall — Indian growth lifted 400+ million'],
              ['East Asia (incl. China)', '<2%', '▼ Extraordinary decline — China alone 800 million'],
              ['Latin America', '~4%', '→ Stagnant; inequality remains high'],
              ['Middle East & N. Africa', '~3%', '▲ Rising due to conflicts'],
              ['Global', '~9%', '▼ Down from 36% in 1990 — but progress stalling'],
            ],
            highlight: [0],
          })}

          ${renderAccordion([
            {
              title: '⚠️ Root Causes — Why Poverty Persists',
              content: `<p class="lz-prose">• <strong>Colonial legacy:</strong> Centuries of extraction left institutions designed for exploitation, not development. Borders drawn for convenience created conflict-prone states.<br>
                        • <strong>Unfair trade:</strong> Rich countries subsidise their agriculture, undercutting African farmers. WTO rules often favour developed nations.<br>
                        • <strong>Debt:</strong> Many poor countries pay more in debt service than on healthcare — money extracted from poor to rich economies.<br>
                        • <strong>Governance failures:</strong> Corruption, conflict, weak institutions prevent investment and service delivery.<br>
                        • <strong>"Resource curse":</strong> Countries with oil and minerals often have worse development outcomes — resource revenues fund elites, not citizens.<br>
                        • <strong>Climate vulnerability:</strong> The poorest countries are least responsible for climate change but most affected by it.</p>`
            },
            {
              title: '💡 What Actually Works — Evidence-Based Solutions',
              content: `<p class="lz-prose">• <strong>Conditional Cash Transfers (Brazil's Bolsa Família):</strong> Direct cash payments to poor families in exchange for children attending school and health check-ups. Reduced poverty by 14%, cut inequality.<br>
                        • <strong>Microfinance (Grameen Bank, Bangladesh):</strong> Small loans to the very poor (mostly women) to start businesses. Muhammad Yunus won Nobel Peace Prize 2006. Mixed evidence — works best for women's empowerment.<br>
                        • <strong>Universal primary education:</strong> Each additional year of schooling increases future earnings by ~10%. Girls' education especially powerful for development.<br>
                        • <strong>Trade reform:</strong> Eliminating agricultural subsidies in rich countries would help poor farmers compete.<br>
                        • <strong>Debt relief:</strong> HIPC (Heavily Indebted Poor Countries) initiative freed up resources for health/education.</p>`
            },
          ])}

          ${renderInfobox({
            type: 'success',
            icon: 'fas fa-bullseye',
            title: 'UN Sustainable Development Goals (SDGs) — 2015–2030',
            body: '17 goals, 169 targets adopted by all 193 UN member states. Key goals: No Poverty, Zero Hunger, Good Health, Quality Education, Gender Equality, Clean Water, Affordable Energy, Decent Work. <strong>Progress report 2023:</strong> Only 15% of SDG targets on track. COVID-19, conflicts, and climate change have set back many goals by years. The gap between ambition and reality is vast.'
          })}

          ${renderSubhead('20.3 Migration')}
          <h2 class="lz-h2 reveal">Push and Pull — The World in Motion</h2>
          <p class="lz-prose reveal">
            281 million people live outside their country of birth — 3.6% of world population.
            Over <strong>100 million</strong> are forcibly displaced (refugees, asylum seekers, internally
            displaced). Climate scientists project <strong>200+ million climate migrants</strong> by 2050,
            as rising seas, droughts, and extreme heat make regions uninhabitable.
          </p>

          ${renderCompare({
            titleA: '⬆️ Push Factors (Why People Leave)',
            titleB: '⬇️ Pull Factors (Why People Choose a Destination)',
            listA: [
              'Poverty and lack of economic opportunity',
              'War, conflict, political persecution',
              'Climate change: drought, floods, rising seas',
              'Environmental disasters',
              'Family separation — joining relatives who already migrated',
              'Human rights violations, authoritarianism',
            ],
            listB: [
              'Higher wages and better job opportunities',
              'Political stability and rule of law',
              'Better healthcare, education, social services',
              'Family reunification — joining relatives',
              'Higher standard of living',
              'Geographic proximity and language links',
            ],
          })}

          <nav class="wim-tabs" id="migration-tabs" aria-label="Migration">
            ${MIGRATION_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="impact">
            ${renderCompare({
              titleA: '📤 Impact on Source Countries', titleB: '📥 Impact on Destination Countries',
              listA: ['Remittances: $800bn/year — more than all foreign aid combined', 'Brain drain: doctors, engineers, teachers leave', 'Reduced unemployment pressure', 'Skills transferred when migrants return', 'Family separation and community fragmentation'],
              listB: ['Labour force: fills shortages in healthcare, agriculture, tech', 'Economic growth: immigrants often more entrepreneurial than natives', 'Demographic balance: migrants are typically working-age', 'Cultural enrichment: food, music, innovation', 'Short-term fiscal costs: housing, education, integration', 'Political backlash: immigration fuels populism'],
            })}
          </div>

          <div class="wim-category hidden" data-wim-cat="policies">
            ${renderTable({ headers: ['Model', 'Countries', 'Mechanism', 'Outcome'], rows: [
              ['Points-Based', 'Canada, Australia, UK (post-Brexit)', 'Select immigrants by skills, language, age, qualifications', 'Higher-skilled immigrants; public acceptance; but ignores humanitarian needs'],
              ['Open Borders', 'EU internal migration', 'Free movement of EU citizens', 'Economic efficiency; political backlash; Brexit partly driven by this'],
              ['Family Reunification', 'USA (historically)', 'Priority to those with family members already resident', 'Builds community; may not optimise economic skills mix'],
              ['Humanitarian', 'Germany 2015–16, UNHCR model', 'Priority for refugees and asylum seekers', 'Moral imperative; political controversy; integration challenges'],
              ['Restrictive', 'UK (post-2010), Hungary, Poland', 'Strict limits, deterrence, border enforcement', 'Reduces numbers; doesn\'t address demand; human cost'],
            ]})}
            ${renderInfobox({ type: 'warning', icon: 'fas fa-balance-scale', title: 'The Asylum Paradox', body: 'Under the 1951 Refugee Convention, any person who arrives in a country fearing persecution has the right to claim asylum — regardless of how they arrived. Yet many countries have criminalised the act of irregular entry. This creates a legal and moral contradiction: people with valid asylum claims are prosecuted for arriving "illegally."' })}
          </div>

          ${renderSubhead('20.4 Environmental Challenges')}
          <h2 class="lz-h2 reveal">The Planetary Emergency</h2>

          <nav class="wim-tabs" id="env-tabs" aria-label="Environment">
            ${ENV_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="climate">
            <p class="lz-prose">The <strong>Intergovernmental Panel on Climate Change (IPCC)</strong> — the world's leading authority — says: warming is "unequivocal," human activity is the cause, and consequences will be severe.</p>
            ${renderTable({ headers: ['Warming Level', 'Expected Consequences'], rows: [
              ['+1.2°C (now)', 'Extreme weather more frequent; Arctic warming 4× faster; coral bleaching; sea level rise beginning'],
              ['+1.5°C', 'Coral reefs 70–90% destroyed; 350 million more people exposed to extreme heat; small island nations at risk'],
              ['+2.0°C', 'Arctic sea ice gone in summer; hundreds of millions face water scarcity; 550 million more exposed to flooding'],
              ['+3.0°C', 'Uninhabitable zones in tropics; catastrophic food insecurity; hundreds of millions displaced; potential civilisational destabilisation'],
              ['+4.0°C+', '"Worst case": parts of Earth uninhabitable; mass extinction events; collapse of ecosystems'],
            ], highlight: [0]})}
          </div>

          <div class="wim-category hidden" data-wim-cat="biodiv">
            ${renderAccordion([
              { title: 'The Sixth Mass Extinction', content: '<p class="lz-prose">Species are going extinct at <strong>1,000× the natural background rate</strong>. 1 million species are threatened with extinction (IPBES 2019). We have already lost 69% of vertebrate wildlife populations since 1970 (Living Planet Report 2022). This is called the <strong>"Sixth Mass Extinction"</strong> — the previous five were caused by asteroid impacts, volcanoes, etc. This one is caused by humans.</p>' },
              { title: 'Why It Matters', content: '<p class="lz-prose">• <strong>Ecosystem services:</strong> Bees pollinate 75% of our food crops. Wetlands purify water. Forests regulate climate. Loss of these services would cost trillions.<br>• <strong>Medicines:</strong> 25% of modern medicines derive from rainforest plants. Unknown species may hold cures we haven\'t discovered yet.<br>• <strong>Food security:</strong> Genetic diversity in wild plants is essential for breeding disease-resistant crops.</p>' },
            ])}
          </div>

          <div class="wim-category hidden" data-wim-cat="pollution">
            ${renderTable({ headers: ['Type', 'Scale', 'Consequences'], rows: [
              ['Air pollution', '7 million premature deaths/year (WHO)', 'Respiratory and cardiovascular disease; cognitive impairment'],
              ['Ocean plastic', '8+ million tonnes enter oceans annually', 'Marine life death; microplastics in food chain; enters human bodies'],
              ['Water pollution', '2 billion lack safe drinking water', 'Waterborne diseases; childhood mortality; development costs'],
              ['Soil degradation', '33% of Earth\'s soils degraded', 'Reduced agricultural yields; desertification; food insecurity'],
              ['Light/noise pollution', 'Urban sprawl', 'Wildlife disruption; human sleep and health impacts'],
            ]})}
          </div>

          ${renderSubhead('20.5 Paris Climate Agreement (2015)')}
          <h2 class="lz-h2 reveal">The World's Climate Framework</h2>

          ${renderVTimeline([
            { year: '1992', title: 'Rio Earth Summit', text: 'UNFCCC established — first international framework. Non-binding. Recognises climate as a problem.' },
            { year: '1997', title: 'Kyoto Protocol', text: 'First binding targets — but only for developed nations. USA never ratified. Canada withdrew. Limited impact.' },
            { year: '2009', title: 'Copenhagen Failure', text: 'COP15 — supposed to replace Kyoto. Collapsed. USA and China refused binding targets. Seen as catastrophic failure.' },
            { year: '2015', title: 'Paris Agreement', text: '196 parties. Historic: all countries commit, not just developed ones. Adopted December 12, 2015. Universal.' },
            { year: '2017', title: 'Trump withdraws', text: 'USA announces withdrawal. Effective November 2020. Undermined credibility and finance commitments.' },
            { year: '2021', title: 'Biden rejoins; COP26 Glasgow', text: 'USA re-enters first day of presidency. COP26: 1.5°C re-confirmed; coal phased down (not out); methane pledge; finance commitments disputed.' },
            { year: '2022', title: 'COP27 Sharm el-Sheikh', text: 'Loss and Damage Fund established — historic for developing nations. But emission reduction targets not strengthened.' },
            { year: '2023', title: 'COP28 Dubai', text: 'First Global Stocktake: world is "not on track." First time agreement explicitly mentions "transition away from fossil fuels."' },
          ])}

          ${renderCompare({
            titleA: '✅ Strengths of Paris Agreement',
            titleB: '❌ Weaknesses of Paris Agreement',
            listA: [
              'Universal — 196 parties, including China, India, USA',
              'Flexible — each country sets own targets (NDCs)',
              'Long-term vision — net zero in second half of century',
              'Regular review — 5-year ratchet mechanism',
              'Includes developing countries — unlike Kyoto',
              'Loss & Damage Fund (2022) — addresses climate justice',
            ],
            listB: [
              'Voluntary — no penalties for missing targets',
              'Insufficient — current pledges lead to ~2.5–2.7°C warming',
              'No enforcement mechanism',
              'Finance gap — $100bn/year promised, not delivered',
              'USA withdrawal showed vulnerability to domestic politics',
              'Fossil fuel industry still heavily subsidised ($7 trillion/year)',
            ],
          })}

          ${renderInfobox({
            type: 'danger',
            icon: 'fas fa-triangle-exclamation',
            title: 'The Gap Between Pledges and Reality',
            body: 'Even if every country fulfils its current Paris NDC commitments, Earth will warm by approximately 2.5–2.7°C above pre-industrial levels — far above the 1.5°C limit. Scientists say global emissions must fall 45% by 2030 to stay at 1.5°C. They are currently <em>still rising</em>. The IPCC (2023): "There is a rapidly closing window of opportunity to secure a liveable and sustainable future for all."'
          })}

          ${renderSubhead('20.6 Americanization')}
          <h2 class="lz-h2 reveal">Cultural Imperialism or Global Hybridization?</h2>

          ${renderMerkboxGrid([
            { icon: 'fas fa-burger', title: 'McDonald\'s Everywhere', text: '40,000+ restaurants in 100+ countries. In many cities, McDonald\'s was the first affordable "modern" restaurant — symbol of both opportunity and cultural imposition.' },
            { icon: 'fas fa-film', title: 'Hollywood Dominates', text: 'US films take 70–80% of global box office revenue. US streaming services (Netflix, Disney+, Prime) dominate worldwide. Local film industries struggle.' },
            { icon: 'fas fa-brands fa-google', title: 'Big Tech = American', text: 'Google (90% of search), Facebook/Meta, Amazon, Apple, Microsoft — five American companies dominate the global digital economy.' },
            { icon: 'fas fa-music', title: 'English Pop Globalised', text: 'But also: K-pop conquers the USA. Bollywood. Latin music. Afrobeats. "Glocalization" is a two-way street — American culture dominates but is also being reshaped.' },
          ])}

          ${renderAccordion([
            {
              title: '📺 Forms of Americanization',
              content: `<p class="lz-prose">• <strong>Food:</strong> Fast food culture — McDonald's, KFC, Starbucks, Domino's — in every major city globally.<br>
                        • <strong>Entertainment:</strong> Hollywood films, US TV shows, streaming platforms dominate globally. Even non-English speakers consume American content.<br>
                        • <strong>Language:</strong> English as global lingua franca — spread primarily through American cultural dominance, not British imperial legacy.<br>
                        • <strong>Fashion:</strong> Jeans (Levi's), sneakers (Nike, Adidas), baseball caps — originally American workwear, now global uniform.<br>
                        • <strong>Values:</strong> Individualism, consumerism, the "American Dream" ideology of meritocracy and self-reliance spreads with cultural products.<br>
                        • <strong>Tech culture:</strong> Silicon Valley startup mentality, "disruption" culture, tech billionaires as heroes.</p>`
            },
            {
              title: '🔄 Glocalization — The Counter-Narrative',
              content: `<p class="lz-prose"><strong>Glocalization</strong> = global + local. The idea that global products and culture are always adapted to local contexts — creating hybrids, not uniformity:<br>
                        • <strong>McDonald's in India:</strong> No beef; McAloo Tikki, Maharaja Mac. Vegetarian menu for Hindu majority.<br>
                        • <strong>K-pop conquers America:</strong> BTS, BLACKPINK — Korean artists using American pop formulas but creating distinctly Korean product now dominating US charts.<br>
                        • <strong>Bollywood:</strong> Indian film industry produces more films than Hollywood; influences global South Asian diaspora.<br>
                        • <strong>Afrobeats:</strong> Nigerian Afrobeats becoming mainstream globally — Burna Boy, Wizkid.<br>
                        The flow is not one-directional. America absorbs as well as exports.</p>`
            },
          ])}

          ${renderSubhead('20.7 English as a World Language')}
          <h2 class="lz-h2 reveal">Lingua Franca of the 21st Century</h2>
          <p class="lz-prose reveal">
            English has approximately <strong>1.5 billion speakers</strong> worldwide — but fewer than
            400 million are native speakers. The majority of English communication globally happens
            between <strong>non-native speakers</strong> talking to other non-native speakers
            (ELF — English as a Lingua Franca). This fundamentally changes what "correct English" means.
          </p>

          ${renderTable({
            headers: ['Domain', 'English\'s Role', 'Example'],
            rows: [
              ['Science', '80%+ of scientific papers in English', 'Publish or perish — non-English scientists must write in English'],
              ['Business', 'Default language of multinationals', 'Airbus uses English; Japanese companies require English for promotion'],
              ['Technology', 'All programming languages based on English', 'Code comments, documentation, Stack Overflow — all English'],
              ['Aviation', 'Mandated by ICAO for all international flights', 'Every pilot and air traffic controller must use English'],
              ['Diplomacy', 'One of 6 UN official languages', 'Most actual UN diplomacy happens in English'],
              ['Education', 'Medium of instruction worldwide', 'University lectures in Netherlands, Scandinavia, India — often in English'],
              ['Internet', '60%+ of web content in English', 'Non-English speakers excluded from majority of online information'],
            ],
          })}

          ${renderCompare({
            titleA: '✅ Benefits of English as Lingua Franca',
            titleB: '❌ Costs and Criticisms',
            listA: [
              'Global communication made possible without translators',
              'Access to 80%+ of scientific knowledge',
              'Economic advantage — better jobs, international business',
              'Cultural exchange — shared medium enables understanding',
              'Efficiency — reduces translation costs for international organisations',
              'Education — world\'s largest knowledge base in English',
            ],
            listB: [
              'Native speaker advantage — unfair cognitive "tax" on non-native speakers',
              'Language death — 7,000 languages; one dies every 14 days',
              'Cultural loss — language carries irreplaceable worldviews and knowledge',
              'Linguistic imperialism (Robert Phillipson) — spreads through power, not merit',
              'Exclusion — those without English miss economic and educational opportunities',
              '"Epistemicide" — indigenous knowledge systems lost with their languages',
            ],
          })}

          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-comment-dots',
            title: 'World Englishes — No Single Standard',
            body: '<strong>British English</strong> (RP) — historically the prestige variety. <strong>American English</strong> — dominant globally through media. <strong>World Englishes</strong> (Braj Kachru\'s "Three Circles"): Inner Circle (native: UK, US, Australia), Outer Circle (official: India, Nigeria, Singapore), Expanding Circle (EFL: China, Germany, Brazil). Key debate: <strong>should non-native Englishes be "errors" or legitimate varieties?</strong> Increasingly, linguists say yes — Singlish, Hinglish, Nigerian English are valid forms, not deviations from a British/American standard.'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Economy', link: `${BASE}/themen/gb/economy` },
            next: { label: 'Poverty', link: `${BASE}/themen/modern/poverty` },
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