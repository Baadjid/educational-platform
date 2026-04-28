// ─────────────────────────────────────────────────────────────
// 5.3  Ecology Vocabulary
// pages/projekte/lernzettel/faecher/englisch/themen/vocab/ecology.js
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
export default class EcologyVocabPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-vocab-ecology';
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
            <i class="fas fa-chevron-right"></i><span>5.3 Ecology</span>
          </nav>
          <h1 class="lz-sub-title">Ecology<br><em>Vocabulary</em></h1>
          <p class="lz-sub-desc">Climate Change · Pollution · Biodiversity · Sustainability · Energy · Solutions</p>
          ${renderTags(['Climate Change', 'Sustainability', 'Biodiversity', 'Pollution', 'Renewable Energy', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-thermometer-half', title: 'Global Warming', text: 'The long-term rise in Earth\'s average temperature — primarily caused by greenhouse gas emissions from fossil fuels. The IPCC states this is "unequivocal" and human-caused.' },
            { icon: 'fas fa-seedling', title: 'Sustainability', text: 'Meeting the needs of the present without compromising the ability of future generations to meet their own needs. (Brundtland Commission, 1987)' },
            { icon: 'fas fa-dove', title: 'Biodiversity', text: 'The variety of life on Earth — species, ecosystems, genetic diversity. The current "Sixth Mass Extinction" is caused by habitat loss, pollution, climate change, and overexploitation.' },
            { icon: 'fas fa-bolt', title: 'Renewable Energy', text: 'Energy from sources that are naturally replenished — solar, wind, hydro, geothermal, tidal. The cost of solar and wind has fallen dramatically — now cheaper than new fossil fuel plants in most places.' },
          ])}

          ${renderSubhead('Climate & Atmosphere')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes / Example'],
            rows: [
              ['climate change','Klimawandel','Long-term shifts in temperatures and weather patterns. Since the 1800s, primarily driven by human activities.'],
              ['global warming','Erderwärmung','The long-term rise in Earth\'s average surface temperature caused by the greenhouse effect.'],
              ['greenhouse effect','Treibhauseffekt','The process by which greenhouse gases trap heat in the atmosphere — like glass in a greenhouse.'],
              ['greenhouse gas (GHG)','Treibhausgas','Gases that trap heat: CO₂, methane (CH₄), nitrous oxide (N₂O), water vapour. CO₂ is the main one from human activity.'],
              ['carbon dioxide (CO₂)','Kohlenstoffdioxid','The primary greenhouse gas emitted by burning fossil fuels. Measured in ppm (parts per million) — now above 420 ppm.'],
              ['methane (CH₄)','Methan','Greenhouse gas 25× more potent than CO₂ over 100 years. Emitted by cattle, landfills, and gas pipelines.'],
              ['carbon footprint','CO₂-Fußabdruck','The total greenhouse gases emitted by an individual, organisation, or product. '],
              ['carbon neutral / net zero','klimaneutral / netto null','Balancing carbon emitted with carbon removed. Achieved by reducing emissions and offsetting the rest.'],
              ['carbon offset','CO₂-Kompensation','Paying to reduce emissions elsewhere (e.g. planting trees) to compensate for your own emissions. Controversial — seen as "greenwashing."'],
              ['carbon tax','CO₂-Steuer','A tax on fossil fuel use to internalise the environmental cost. Incentivises switching to cleaner alternatives.'],
              ['cap and trade','Emissionshandel','A system where companies buy and sell permits to emit CO₂ — creating a market price for carbon. E.g. EU Emissions Trading System (ETS).'],
              ['Paris Agreement','Pariser Abkommen','2015 international treaty: limit warming to well below 2°C, aiming for 1.5°C. Nationally Determined Contributions (NDCs) — voluntary pledges.'],
              ['IPCC','Intergovernmentaler Ausschuss für Klimaänderungen','Intergovernmental Panel on Climate Change — the UN\'s scientific body on climate. Issues assessment reports.'],
              ['tipping point','Kipppunkt','A threshold beyond which a change becomes self-reinforcing and irreversible — e.g. Greenland ice sheet collapse, Amazon dieback.'],
              ['permafrost','Permafrost','Permanently frozen ground in Arctic regions. Thawing releases vast amounts of methane — a dangerous feedback loop.'],
              ['feedback loop','Rückkopplungsschleife','A process where an initial change triggers further change in the same direction — e.g. ice melts → less reflection → more warming → more melting.'],
              ['sea level rise','Meeresspiegelanstieg','Caused by melting ice sheets and thermal expansion of warming oceans. Threatens coastal cities and small island states.'],
              ['extreme weather event','extremes Wetterereignis','Heatwaves, droughts, floods, and storms — all intensified by climate change.'],
              ['drought','Dürre','A prolonged period of abnormally low rainfall — increasingly common with climate change.'],
              ['heatwave','Hitzewelle','An extended period of excessively hot weather — more frequent and intense due to global warming.'],
              ['desertification','Desertifikation','The process by which fertile land becomes desert — driven by drought, deforestation, and poor land management.'],
            ],
          })}

          ${renderSubhead('Pollution & Waste')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes / Example'],
            rows: [
              ['pollution','Verschmutzung / Umweltverschmutzung','The introduction of harmful substances into the environment. Types: air, water, soil, noise, light, plastic.'],
              ['air pollution','Luftverschmutzung','7 million deaths/year (WHO). Caused by fossil fuels, transport, industry. 90% of world breathes unsafe air.'],
              ['particulate matter (PM2.5)','Feinstaub','Tiny particles in the air that penetrate deep into the lungs — from diesel engines, wood burning, industry.'],
              ['acid rain','saurer Regen','Rain made acidic by sulphur dioxide (SO₂) and nitrogen oxides — damages forests and aquatic ecosystems.'],
              ['plastic pollution','Plastikverschmutzung','8+ million tonnes of plastic enter the oceans annually. Breaks down into microplastics — found in food, water, and human bodies.'],
              ['microplastics','Mikroplastik','Tiny plastic particles under 5mm. Found in oceans, drinking water, fish, salt, and human blood and lungs.'],
              ['oil spill','Ölpest / Ölkatastrophe','Accidental release of oil into the environment — e.g. BP Deepwater Horizon (2010). Devastating to marine ecosystems.'],
              ['e-waste','Elektroschrott','Discarded electronics — the world\'s fastest growing waste stream. Often shipped to developing countries.'],
              ['landfill','Deponie / Mülldeponie','Site for disposal of waste. Produces methane and leaches toxins. Many countries are running out of landfill space.'],
              ['eutrophication','Eutrophierung','Excess nutrients (from fertilisers) cause algae blooms in water, depleting oxygen and killing aquatic life.'],
              ['toxic waste','Giftmüll','Hazardous chemical waste — requires careful disposal. Often illegally dumped in developing countries.'],
            ],
          })}

          ${renderSubhead('Biodiversity & Ecosystems')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes / Example'],
            rows: [
              ['biodiversity','Biodiversität / Artenvielfalt','The variety of life — species, ecosystems, genetic diversity. Crucial for ecosystem resilience.'],
              ['ecosystem','Ökosystem','A community of living organisms interacting with their physical environment — forest, reef, wetland.'],
              ['habitat','Lebensraum','The natural environment where a species lives and finds food, water, and shelter.'],
              ['habitat destruction / loss','Lebensraumzerstörung','The main driver of biodiversity loss — deforestation, agriculture, urbanisation.'],
              ['deforestation','Entwaldung / Abholzung','Clearing forests for agriculture, logging, or development. Destroys habitat and releases stored carbon.'],
              ['extinction','Aussterben','The permanent disappearance of a species from Earth. Current rate is 1,000× the natural background rate.'],
              ['endangered species','gefährdete Art','A species at serious risk of extinction. Listed on the IUCN Red List.'],
              ['invasive species','invasive Art','Non-native species introduced into an ecosystem that outcompetes native species.'],
              ['keystone species','Schlüsselart','A species that has a disproportionately large effect on its ecosystem — e.g. wolves, sea otters, bees.'],
              ['ecosystem services','Ökosystemleistungen','Benefits ecosystems provide to humans: clean air, water, pollination, flood protection, climate regulation.'],
              ['pollinator','Bestäuber','Insects (bees, butterflies) that transfer pollen — essential for 75% of food crops. In serious decline.'],
              ['coral bleaching','Korallenbleiche','Corals expel the algae that give them colour and nutrients when water is too warm — caused by climate change.'],
              ['rewilding','Renaturierung / Rewilding','Restoring ecosystems by reintroducing species and reducing human intervention — e.g. wolves in Yellowstone.'],
              ['protected area','Schutzgebiet','Areas designated to conserve biodiversity — national parks, nature reserves, marine protected areas.'],
            ],
          })}

          ${renderSubhead('Sustainability & Solutions')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes / Example'],
            rows: [
              ['renewable energy','erneuerbare Energie','Solar, wind, hydro, tidal, geothermal — inexhaustible and low-carbon.'],
              ['fossil fuels','fossile Brennstoffe','Coal, oil, and natural gas — formed over millions of years. Burning them releases CO₂. Must be phased out.'],
              ['solar energy','Solarenergie','Energy from the sun — cheapest source of electricity in history (2023). Costs fell 89% in a decade.'],
              ['wind energy','Windenergie','Onshore and offshore wind turbines — now competitive with fossil fuels in most markets.'],
              ['energy transition','Energiewende','The shift from fossil fuels to renewable energy. Germany\'s Energiewende is a famous example.'],
              ['electric vehicle (EV)','Elektrofahrzeug','Powered by electricity rather than petrol/diesel. Crucial for reducing transport emissions.'],
              ['circular economy','Kreislaufwirtschaft','An economic model where waste is minimised — products designed to be reused, repaired, remanufactured, and recycled.'],
              ['zero waste','Zero Waste / Null-Abfall','Aiming to eliminate waste through reduction, reuse, and recycling. Refuse → Reduce → Reuse → Recycle.'],
              ['sustainability','Nachhaltigkeit','Meeting present needs without compromising future generations\' ability to meet theirs. (Brundtland, 1987)'],
              ['green economy','grüne Wirtschaft','An economy that aims for sustainable development and minimal environmental impact.'],
              ['greenwashing','Greenwashing','Making false or misleading claims about the environmental benefits of a product or company.'],
              ['eco-friendly / environmentally friendly','umweltfreundlich','Products or practices that cause minimal harm to the environment.'],
              ['carbon capture','Kohlenstoffabscheidung','Technology that captures CO₂ from the atmosphere or at emission sources and stores it underground.'],
              ['nature-based solutions','naturbasierte Lösungen','Using natural processes to address climate and environmental challenges — wetland restoration, urban forests, etc.'],
              ['sustainable development goals (SDGs)','Nachhaltige Entwicklungsziele','17 UN goals adopted in 2015, target 2030. Include climate action, clean energy, zero hunger.'],
              ['climate justice','Klimagerechtigkeit','The recognition that climate change affects the poorest most — who contributed least. Rich countries should compensate.'],
              ['environmental activist','Umweltaktivist/in','E.g. Greta Thunberg, who sparked the Fridays for Future movement, demanding political action on climate change.'],
            ],
          })}

          ${renderSubhead('Useful Phrases for Essays')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['Climate change is the defining challenge of the 21st century.','Strong, attention-grabbing opener'],
              ['The window of opportunity to limit warming to 1.5°C is rapidly closing.','Creating urgency — IPCC framing'],
              ['We are the last generation that can prevent the worst effects of climate change.','Moral urgency'],
              ['Individual action is necessary but insufficient — systemic change is essential.','Countering "personal responsibility" framing'],
              ['The polluter pays principle demands that those who cause environmental damage bear the costs.','Policy argument for carbon pricing'],
              ['Biodiversity loss and climate change are twin crises that reinforce each other.','Linking two major environmental themes'],
              ['Sustainable development seeks to balance economic growth with environmental protection.','Definition and framing'],
              ['Developed countries, as the primary historical emitters, have a responsibility to lead.','Climate justice argument'],
            ],
          })}

        </div>
      </section>
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Diversity', link: `${BASE}/themen/vocab/diversity` },
            next: { label: 'Consumerism', link: `${BASE}/themen/vocab/consumerism` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}