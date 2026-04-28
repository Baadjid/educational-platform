// pages/projekte/lernzettel/faecher/englisch/themen/modern/environment.js
// Living in a Modern World – 3.4: Environmental Challenges

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable, renderSubhead, renderTags,
  renderAccordion, renderVTimeline, renderMerkboxGrid, renderCompare, renderTabs, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class EnvironmentPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-modern-environment';
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
            <i class="fas fa-chevron-right"></i><span>3.4</span>
            <i class="fas fa-chevron-right"></i><span>Environmental Challenges</span>
          </div>
          <h1 class="lz-sub-title">Environmental<br><em>Challenges</em></h1>
          <p class="lz-sub-desc">Climate Change · Biodiversity Loss · Pollution · Paris Agreement · Solutions</p>
          ${renderTags(['Climate Change', 'Paris Agreement', 'Biodiversity', 'Sustainability', 'IPCC'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-thermometer-half', title: '+1.2°C Since 1850', text: 'Global average temperature rise since pre-industrial times. The last decade (2014–2023) was the hottest on record. The IPCC: warming is "unequivocal" and human-caused.' },
            { icon: 'fas fa-dove', title: '1 Million Species Threatened', text: 'At risk of extinction — the Sixth Mass Extinction. Species disappear at 1,000× the natural background rate. 69% of vertebrate wildlife populations lost since 1970.' },
            { icon: 'fas fa-smog', title: '7 Million Deaths per Year', text: 'From air pollution — the world\'s single largest environmental health risk. 90% of the global population breathes air that exceeds WHO guidelines.' },
            { icon: 'fas fa-earth-europe', title: '$7 Trillion in Fossil Subsidies', text: 'Annual global fossil fuel subsidies (IMF estimate, 2023) — more than all renewable energy investment. The economics of climate inaction are political, not rational.' },
          ])}

          ${renderSubhead('3.4.1 Climate Change')}
          <h2 class="lz-h2 reveal">The Defining Challenge of the 21st Century</h2>
          <p class="lz-prose reveal">
            The IPCC (Intergovernmental Panel on Climate Change) — the world's leading scientific authority —
            states that warming is <strong>"unequivocal," human-caused, and the consequences will be severe
            and wide-ranging.</strong> 75% of emissions come from burning fossil fuels; 14% from agriculture;
            11% from deforestation.
          </p>

          ${renderTable({
            headers: ['Warming Level', 'When?', 'Key Consequences'],
            rows: [
              ['+1.2°C (now)', 'Present', 'Extreme weather more frequent; Arctic warming 4× faster; coral bleaching; sea level rise accelerating'],
              ['+1.5°C', 'Mid-2030s (likely)', 'Coral reefs 70–90% destroyed; 350m more people in extreme heat; small island nations critically threatened'],
              ['+2.0°C', 'Before 2100 (current policies)', 'Arctic sea ice gone in summer; hundreds of millions face water scarcity; food insecurity crisis'],
              ['+3.0°C', 'Possible if action insufficient', 'Uninhabitable zones in tropics; catastrophic food system disruption; hundreds of millions displaced'],
              ['+4.0°C+', 'Worst case without action', 'Parts of Earth physiologically uninhabitable; mass extinction events; collapse of ecosystems'],
            ],
            highlight: [0],
          })}

          ${renderSubhead('3.4.2 The Paris Agreement (2015)')}

          ${renderVTimeline([
            { year: '1992', title: 'UNFCCC — Rio Earth Summit', text: 'First international framework recognising climate as a problem. Non-binding. Established the principle of "common but differentiated responsibilities."' },
            { year: '1997', title: 'Kyoto Protocol', text: 'First binding targets — but only for developed nations. USA never ratified. Canada withdrew. Covered only 15% of global emissions. Limited impact.' },
            { year: '2009', title: 'Copenhagen Failure (COP15)', text: 'Supposed to replace Kyoto. Collapsed. USA and China refused binding targets. Widely seen as a catastrophic diplomatic failure.' },
            { year: '2015', title: 'Paris Agreement (COP21)', text: '196 parties. Historic: all countries commit, not just developed ones. Limit warming to "well below 2°C," aiming for 1.5°C. Nationally Determined Contributions (NDCs).' },
            { year: '2017', title: 'Trump withdraws USA', text: 'First ever withdrawal. Undermined credibility and finance commitments. USA returned under Biden (January 20, 2021).' },
            { year: '2022', title: 'COP27 — Loss and Damage Fund', text: 'Historic: fund established to compensate developing nations for climate damage they didn\'t cause. But emission reduction targets not strengthened.' },
            { year: '2023', title: 'COP28 — First Global Stocktake', text: 'First assessment of progress. Verdict: world is "not on track." First time agreement explicitly mentioned "transition away from fossil fuels."' },
          ])}

          ${renderCompare({
            titleA: '✅ Strengths of Paris Agreement',
            titleB: '❌ Weaknesses of Paris Agreement',
            listA: [
              'Universal — 196 parties, including China, India, USA',
              'Flexible — each country sets own NDCs',
              'Regular review — 5-year "ratchet mechanism"',
              'Recognises climate justice (Loss & Damage Fund)',
              'Long-term signal to investors and businesses',
              'Survived Trump withdrawal and returned stronger',
            ],
            listB: [
              'Voluntary — no penalties for missing targets',
              'Insufficient — current pledges lead to ~2.5–2.7°C warming',
              'Finance gap — $100bn/year promised, not delivered',
              'Fossil fuel industry subsidised $7 trillion/year',
              'USA withdrawal showed vulnerability to domestic politics',
              'No binding enforcement mechanism',
            ],
          })}

          ${renderInfobox({ type: 'danger', icon: 'fas fa-triangle-exclamation', title: 'The Gap Between Pledges and Reality', body: 'Even if every Paris NDC commitment is fully met, Earth will warm approximately 2.5–2.7°C — far above the 1.5°C limit. Global emissions must fall <strong>45% by 2030</strong> to stay at 1.5°C. They are currently still rising. The IPCC (2023): "There is a rapidly closing window of opportunity to secure a liveable and sustainable future for all."' })}

          ${renderSubhead('3.4.3 Biodiversity Loss')}
          <h2 class="lz-h2 reveal">The Sixth Mass Extinction</h2>

          ${renderAccordion([
            { title: '📊 Scale of the Crisis', content: '<p class="lz-prose">• 1 million species threatened with extinction (IPBES 2019)<br>• Species disappearing at 1,000× the natural background rate<br>• 69% of vertebrate wildlife populations lost since 1970 (Living Planet Report 2022)<br>• The previous five mass extinctions were caused by asteroid impacts and volcanic eruptions. This one is caused by human activity.<br>• Scientists warn we may be crossing a "planetary boundary" that destabilises Earth\'s systems.</p>' },
            { title: '💥 Main Causes', content: '<p class="lz-prose">• <strong>Habitat destruction</strong> (70% of biodiversity loss): deforestation (3.8 million hectares/year), wetland drainage, agricultural expansion<br>• <strong>Climate change:</strong> shifting ecosystems faster than species can adapt<br>• <strong>Overexploitation:</strong> overfishing, poaching, hunting<br>• <strong>Pollution:</strong> pesticides, plastics, nitrogen/phosphorus runoff<br>• <strong>Invasive species:</strong> introduced species outcompete natives</p>' },
            { title: '🌿 Why It Matters', content: '<p class="lz-prose">• <strong>Ecosystem services:</strong> bees pollinate 75% of food crops (worth $235bn/year); wetlands purify water; forests regulate rainfall<br>• <strong>Medicine:</strong> 25% of modern medicines derived from natural compounds; unknown species may hold undiscovered cures<br>• <strong>Food security:</strong> genetic diversity in wild plant relatives is essential for breeding disease-resistant crops<br>• <strong>Climate regulation:</strong> healthy ecosystems absorb carbon — their destruction accelerates climate change</p>' },
          ])}

          ${renderSubhead('3.4.4 Pollution')}

          ${renderTable({
            headers: ['Type', 'Scale', 'Key Consequences'],
            rows: [
              ['Air pollution', '7 million premature deaths/year (WHO); 90% breathe unsafe air', 'Respiratory and cardiovascular disease; cognitive impairment in children; reduced life expectancy'],
              ['Ocean plastic', '8+ million tonnes enter oceans annually; 150 million tonnes already there', 'Marine animal death; microplastics in food chain; human body contamination'],
              ['Water pollution', '2 billion lack safe drinking water; 800 million lack basic sanitation', 'Waterborne diseases; childhood mortality; economic development loss'],
              ['Soil degradation', '33% of Earth\'s soils degraded (FAO)', 'Reduced agricultural yields; desertification; food insecurity'],
              ['Chemical pollution', '350,000+ chemicals released into environment', 'Endocrine disruption; cancer; decline of insect populations'],
            ],
          })}

          ${renderSubhead('3.4.5 Solutions')}

          ${renderAccordion([
            { title: '⚡ Energy Transition', content: '<p class="lz-prose">Renewable energy (solar, wind) is now cheaper than new fossil fuel power plants in most of the world. Solar costs fell 89% between 2010 and 2020. Electric vehicles reaching cost parity with petrol cars. Challenge: <strong>political will</strong> rather than technology is the bottleneck. Fossil fuel industry lobbying, subsidies, and political donations delay the transition.</p>' },
            { title: '🌳 Nature-Based Solutions', content: '<p class="lz-prose">Protecting and restoring forests, wetlands, and ocean ecosystems could provide 30% of needed emissions reductions at low cost. The "30×30" target (protect 30% of land and ocean by 2030) is a global target. Critically: protecting existing forests is far more cost-effective than planting new ones. Indigenous land management often outperforms government conservation.</p>' },
            { title: '🏙️ Individual and Collective Action', content: '<p class="lz-prose">• <strong>High-impact individual actions:</strong> have one fewer child (saves 58 tonnes CO₂/year), live car-free (2.4t), avoid one transatlantic flight (1.5t), adopt plant-based diet (0.8t)<br>• <strong>Collective/systemic action:</strong> carbon pricing, renewable energy mandates, building codes, urban planning, public transport<br>• <strong>The debate:</strong> should the focus be individual or systemic? Oil companies promoted the "personal carbon footprint" concept to shift responsibility from corporations to individuals.</p>' },
          ])}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Migration', link: `${BASE}/themen/modern/migration` },
            next: { label: 'Americanization', link: `${BASE}/themen/modern/americanization` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}