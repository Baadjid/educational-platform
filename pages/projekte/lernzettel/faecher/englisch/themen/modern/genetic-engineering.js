// pages/projekte/lernzettel/faecher/englisch/themen/modern/genetic-engineering.js
// Living in a Modern World – 3.7: Genetic Engineering

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable, renderSubhead, renderTags,
  renderAccordion, renderMerkboxGrid, renderCompare, renderTabs, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const GENETICS_TABS = [
  { key: 'medicine',   label: '💊 Medicine' },
  { key: 'agriculture', label: '🌾 Agriculture' },
  { key: 'ethics',     label: '🧬 Ethics' },
];

export default class GeneticEngineeringPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-modern-genetics';
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
            <i class="fas fa-chevron-right"></i><span>3.7</span>
            <i class="fas fa-chevron-right"></i><span>Genetic Engineering</span>
          </div>
          <h1 class="lz-sub-title">Genetic<br><em>Engineering</em></h1>
          <p class="lz-sub-desc">CRISPR · Medicine · Agriculture · Designer Babies · Ethics · Regulation</p>
          ${renderTags(['CRISPR', 'GMO', 'Gene Therapy', 'Ethics', 'Biotechnology'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-dna', title: 'CRISPR-Cas9 — 2012', text: 'Jennifer Doudna and Emmanuelle Charpentier developed CRISPR — "molecular scissors" that cut DNA at a precise location. Nobel Prize 2020. Called the most important biological tool since PCR.' },
            { icon: 'fas fa-syringe', title: 'First Gene Therapy Cure', text: 'Casgevy (2023): first CRISPR-based gene therapy approved for sickle cell disease. Potentially a one-time cure for a lifelong condition. Cost: ~$2 million per patient.' },
            { icon: 'fas fa-seedling', title: '94% of US Soy is GMO', text: 'And 90% of US corn. Americans have been eating GMOs since the 1990s with no detectable harm. Yet GMOs remain politically controversial — especially in Europe.' },
            { icon: 'fas fa-baby', title: 'He Jiankui — 2018', text: 'Chinese scientist created the first gene-edited human babies (twin girls). Global scientific community condemned it as reckless and unethical. He was imprisoned for 3 years.' },
          ])}

          ${renderSubhead('3.7.1 What Is Genetic Engineering?')}
          <p class="lz-prose reveal">
            Genetic engineering is the direct manipulation of an organism's DNA using biotechnology.
            Key distinction: <strong>somatic editing</strong> (changes only the treated individual — not heritable)
            vs. <strong>germline editing</strong> (changes eggs, sperm, or embryos — passed to all future generations).
            The latter is far more ethically controversial because the changes are permanent and irreversible.
          </p>

          ${renderSubhead('3.7.2 Applications')}
          <nav class="wim-tabs" id="genetics-tabs" aria-label="Genetic engineering applications">
            ${GENETICS_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="medicine">
            ${renderTable({ headers: ['Application', 'How It Works', 'Status'], rows: [
              ['Gene therapy — sickle cell', 'Edit patient\'s own stem cells; correct the faulty haemoglobin gene; reinfuse', 'Approved 2023 (Casgevy); transformative but ~$2m/patient'],
              ['Cancer (CAR-T therapy)', 'Engineer patient\'s immune cells to recognise and attack cancer cells', 'Approved for blood cancers; remarkable results; expanding to solid tumours'],
              ['mRNA vaccines (COVID-19)', 'Instruct cells to produce a protein; immune system learns to fight it', 'Pfizer/Moderna vaccines: entirely new vaccine platform; developed in months'],
              ['Personalised medicine', 'Match drug and dosage to patient\'s genetic profile (pharmacogenomics)', 'Growing; reduces adverse reactions; avoids ineffective treatments'],
              ['Insulin production', 'Bacteria engineered to produce human insulin since 1982', 'Universal now; transformed diabetes treatment; affordable'],
            ]})}
          </div>

          <div class="wim-category hidden" data-wim-cat="agriculture">
            ${renderAccordion([
              { title: 'GMO Crops — What They Do', content: '<p class="lz-prose">• <strong>Bt crops:</strong> Gene from Bacillus thuringiensis — plant produces its own insecticide; reduces chemical pesticide use by 37%<br>• <strong>Herbicide-resistant (Roundup Ready):</strong> Survives glyphosate spraying — "superweeds" developing resistance is a serious concern<br>• <strong>Golden Rice:</strong> Contains beta-carotene; designed to combat Vitamin A deficiency (blinds ~500,000 children/year); controversial delay in deployment<br>• <strong>Drought-tolerant varieties:</strong> Climate change adaptation; crucial for food security</p>' },
              { title: 'Arguments FOR GMO Crops', content: '<p class="lz-prose">• Higher yields needed to feed 10 billion by 2050 without converting more wilderness<br>• Reduced chemical use — fewer pesticides, less environmental damage<br>• Climate adaptation — drought/heat/flood resistance<br>• Nutritional enhancement — Golden Rice, iron-fortified crops<br>• 70% of US corn and 94% of US soy is GMO — widely consumed without detected harm</p>' },
              { title: 'Arguments AGAINST GMO Crops', content: '<p class="lz-prose">• <strong>Corporate control:</strong> Bayer/Monsanto, Syngenta, Corteva control 60%+ of global seed market; patent law means farmers can\'t save seeds<br>• <strong>Biodiversity loss:</strong> Monocultures vulnerable to new diseases; wild crop relatives threatened by gene flow<br>• <strong>Long-term uncertainty:</strong> Consequences for ecosystems not fully understood<br>• <strong>Social inequality:</strong> Small farmers in developing world become dependent on corporate suppliers<br>• <strong>Consumer choice:</strong> EU has strict GMO labelling and approval requirements; many consumers prefer non-GMO</p>' },
            ])}
          </div>

          <div class="wim-category hidden" data-wim-cat="ethics">
            ${renderAccordion([
              { title: 'The He Jiankui Scandal (2018)', content: '<p class="lz-prose">Chinese scientist He Jiankui edited the CCR5 gene in twin embryos — aiming to make them resistant to HIV. Global scientific community condemned it:<br>• <strong>Germline editing:</strong> Changes permanent — passed to all descendants<br>• <strong>No consent possible:</strong> The children and their descendants cannot consent<br>• <strong>No medical necessity:</strong> HIV can be prevented by other means<br>• <strong>Off-target effects:</strong> Other genes may have been inadvertently altered<br>He was sentenced to 3 years imprisonment. Widely seen as the "Hiroshima of biology" in terms of ethical line-crossing.</p>' },
              { title: '"Designer Babies" — The Slippery Slope', content: '<p class="lz-prose">• <strong>Currently acceptable:</strong> Editing embryos to remove fatal disease genes — most ethicists support this "therapeutic" use<br>• <strong>Grey area:</strong> Editing for non-disease traits — height, intelligence, appearance<br>• <strong>Clearly unacceptable (consensus):</strong> Selecting for "enhancements" that create genetic advantage — eugenics<br>The slope argument: once we permit editing for diseases, what stops us editing for everything? And who decides what counts as a "disease"? Deafness? Below-average height? ADHD?<br>The inequality argument: if only wealthy parents can afford genetic enhancements, inequality becomes heritable — permanently encoded in DNA.</p>' },
              { title: '"Playing God" — Religious Objections', content: '<p class="lz-prose">• Christianity, Islam, and Judaism all raise concerns about humans manipulating the "code of life" — seen as exceeding human authority<br>• Kantian objection: creating people to specification treats them as means (products) not ends (persons)<br>• Precautionary principle: if we cannot predict consequences, and consequences are irreversible, we should not proceed<br>• Counter-argument: medical intervention always involves "playing God" — why is genetic intervention different from surgery, vaccines, or IVF?</p>' },
            ])}
          </div>

          ${renderCompare({
            titleA: '✅ Overall Benefits',
            titleB: '⚠️ Overall Risks',
            listA: [
              'Cure genetic diseases that cause lifelong suffering',
              'Cancer treatment — CAR-T producing remissions in terminal patients',
              'Agricultural food security for growing global population',
              'Reduced environmental impact (fewer pesticides, less land needed)',
              'New medicines: insulin, vaccines, biologics all GM-derived',
              'Scientific knowledge — understanding life at its most fundamental level',
            ],
            listB: [
              'Germline changes irreversible — mistakes affect all future generations',
              'Off-target effects — CRISPR may cut unintended DNA sequences',
              'Corporate patents on life forms — access and inequality',
              'Eugenics risk — "enhancement" becomes mandatory for competitive parents',
              'Unknown long-term ecological effects of GMO release',
              'Regulation struggling to keep pace with technology',
            ],
          })}

          ${renderInfobox({ type: 'warning', icon: 'fas fa-gavel', title: 'Regulatory Landscape', body: '<strong>UK:</strong> Germline editing banned for reproduction; research allowed under strict HFEA oversight. <strong>EU:</strong> Strict GMO regulation; patenting of natural sequences restricted; Precision Breeding Act (2023) creates new category for gene-edited crops. <strong>USA:</strong> FDA regulates; relatively permissive for research; USDA regulates GMO crops. <strong>Global gap:</strong> No binding international treaty governs human germline editing — a dangerous vacuum as the technology becomes cheaper and more accessible.' })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'English as a World Language', link: `${BASE}/themen/modern/english-language` },
            next: { label: 'Big Data & Privacy', link: `${BASE}/themen/modern/big-data` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}