// pages/projekte/lernzettel/faecher/englisch/themen/modern/big-data.js
// Living in a Modern World – 3.8: Big Data & Privacy

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
const BIGDATA_TABS = [
  { key: 'surveillance', label: '📱 Surveillance Economy' },
  { key: 'bias',         label: '⚠️ Algorithmic Bias' },
  { key: 'gdpr',         label: '🛡️ GDPR' },
];

export default class BigDataPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-modern-bigdata';
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
            <i class="fas fa-chevron-right"></i><span>3.8</span>
            <i class="fas fa-chevron-right"></i><span>Big Data &amp; Privacy</span>
          </div>
          <h1 class="lz-sub-title">Big Data<br><em>&amp; Privacy</em></h1>
          <p class="lz-sub-desc">The 5 Vs · Surveillance Economy · Cambridge Analytica · GDPR · Algorithmic Bias</p>
          ${renderTags(['Big Data', 'Privacy', 'GDPR', 'Surveillance', 'Cambridge Analytica', 'AI'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-database', title: '120 Zettabytes (2023)', text: 'Total global data stored — 120,000,000,000,000,000,000,000 bytes. 90% of the world\'s data was created in the last two years. Every click, purchase, location, and search tracked.' },
            { icon: 'fas fa-user-secret', title: 'Surveillance Capitalism', text: 'Harvard professor Shoshana Zuboff\'s thesis: tech companies extract human experience as raw material and sell predictions of behaviour to advertisers. You are the product, not the customer.' },
            { icon: 'fas fa-gavel', title: '€4bn+ GDPR Fines', text: 'Since the EU\'s General Data Protection Regulation came into force (2018). Meta fined €1.2 billion in 2023 alone. GDPR has become a de facto global standard.' },
            { icon: 'fas fa-robot', title: 'Algorithmic Bias', text: 'Amazon Rekognition: 31% error rate for dark-skinned women vs. 1% for light-skinned men. Algorithms trained on historical data reproduce historical biases — at machine scale.' },
          ])}

          ${renderSubhead('3.8.1 What Is Big Data?')}
          <h2 class="lz-h2 reveal">The 5 Vs</h2>
          <p class="lz-prose reveal">
            <strong>Big Data</strong> refers to datasets so large and complex they require new computational
            tools to process and analyse. Characterised by the <strong>5 Vs</strong>:
          </p>

          ${renderTable({
            headers: ['V', 'Meaning', 'Example'],
            rows: [
              ['Volume', 'Enormous scale of data', 'Google processes 8.5 billion searches per day'],
              ['Velocity', 'Speed at which data is generated', 'Twitter generates 500 million tweets per day'],
              ['Variety', 'Different forms — text, image, video, location, biometric', 'Your phone generates GPS, voice, camera, app usage, health data simultaneously'],
              ['Veracity', 'Accuracy and reliability of the data', 'Social media data includes bots, fake accounts, misinformation'],
              ['Value', 'The insights and decisions that can be extracted', 'Netflix saves $1bn/year through its recommendation algorithm'],
            ],
          })}

          ${renderSubhead('3.8.2 Applications and Benefits')}

          ${renderTable({
            headers: ['Sector', 'Application', 'Real Example'],
            rows: [
              ['Healthcare', 'Disease prediction, drug discovery, personalised treatment', 'DeepMind\'s AlphaFold solved protein structure — potential for new medicines. AI detects cancer from scans with superhuman accuracy.'],
              ['Business', 'Recommendation systems, dynamic pricing, demand forecasting', 'Amazon: 35% of purchases from recommendations. Netflix recommendation engine saves $1bn/year.'],
              ['Government', 'Fraud detection, urban planning, disaster response', 'HMRC detects tax fraud at scale. Smart traffic management reduces congestion.'],
              ['Science', 'Climate modelling, genomics, particle physics', 'CERN produces 15 petabytes from LHC per year. UK Biobank: 500,000 genomes for research.'],
              ['Finance', 'Credit scoring, fraud detection, trading', '70%+ of US stock market trading is algorithmic. Real-time fraud detection on every transaction.'],
              ['Crime', 'Predictive policing, facial recognition', 'PredPol software predicts crime hotspots — proven to reinforce racial bias.'],
            ],
          })}

          ${renderSubhead('3.8.3 Surveillance and Privacy Risks')}
          <h2 class="lz-h2 reveal">The Dark Side of Big Data</h2>

          <nav class="wim-tabs" id="bigdata-tabs" aria-label="Big Data topics">
            ${BIGDATA_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="surveillance">
            ${renderAccordion([
              { title: 'How You Are Being Tracked', content: '<p class="lz-prose">• <strong>Cookies and tracking pixels:</strong> Follow you across the web even on sites you haven\'t visited<br>• <strong>Device fingerprinting:</strong> Browser type, plugins, screen resolution uniquely identify you without cookies<br>• <strong>Location data:</strong> Your phone\'s GPS is constantly tracked; sold to data brokers<br>• <strong>Purchase data:</strong> Every transaction creates a profile; loyalty cards are surveillance tools<br>• <strong>Social graph:</strong> Who you know, how often you interact, relationship strength — all mapped<br>• <strong>Voice assistants:</strong> Alexa, Siri, Google Home — constantly listening for activation words (and sometimes more)</p>' },
              { title: 'Cambridge Analytica (2016–18)', content: '<p class="lz-prose">Political consulting firm harvested data of <strong>87 million Facebook users</strong> without consent through a personality quiz app. Used to build psychographic profiles (OCEAN model) and micro-target political advertising — claimed to influence Brexit referendum and 2016 US election. Facebook fined $5bn (called inadequate by critics). Mark Zuckerberg testified before Congress. Revealed: social media data can be weaponised to manipulate democratic outcomes at scale.</p>' },
              { title: 'China\'s Social Credit System', content: '<p class="lz-prose">Developing system assigns scores based on financial behaviour, law compliance, and social conduct. Consequences: unable to buy train/flight tickets; restricted access to schools. Western media has exaggerated its comprehensiveness — but the direction is clear: using data to enforce social conformity and reward "good citizens." For defenders: reduces financial fraud, improves social trust. For critics: surveillance state, chilling effect on dissent, digital authoritarianism.</p>' },
            ])}
          </div>

          <div class="wim-category hidden" data-wim-cat="bias">
            <p class="lz-prose">Algorithms trained on historical data reproduce historical biases — then automate and amplify them at machine scale without human accountability.</p>
            ${renderTable({ headers: ['System', 'Bias Found', 'Consequence'], rows: [
              ['Amazon Rekognition (facial recognition)', '31% error rate for dark-skinned women; 1% for light-skinned men', 'Wrong identification by police; innocent people detained'],
              ['COMPAS (criminal risk assessment)', 'Black defendants twice as likely to be wrongly flagged as "high risk"', 'Longer sentences based on biased algorithmic prediction'],
              ['Amazon hiring algorithm', 'Trained on historical hires (mostly male) — penalised CVs containing "women\'s"', 'Discriminated against women candidates automatically'],
              ['Credit scoring algorithms', 'Incorporate postcodes and purchasing patterns that correlate with race', 'Reinforces redlining effects in digital form'],
              ['Predictive policing', 'Trained on biased arrest data → predicts more crime in overpoliced areas', 'Creates self-fulfilling prophecy; reinforces racial disparities'],
            ]})}
            ${renderInfobox({ type: 'danger', icon: 'fas fa-triangle-exclamation', title: 'The Black Box Problem', body: 'Most commercial algorithms are proprietary — their logic is not disclosed. There is no explanation, no appeal, no accountability. A biased human decision-maker can be challenged; a biased algorithm that processes millions of decisions is effectively invisible. The EU AI Act (2024) requires high-risk AI systems to be explainable and auditable.' })}
          </div>

          <div class="wim-category hidden" data-wim-cat="gdpr">
            <p class="lz-prose">The EU's <strong>General Data Protection Regulation</strong> (in force May 2018) is the world's strongest data protection law. It applies to any organisation processing EU residents' data — globally.</p>
            ${renderTable({ headers: ['Right', 'What It Means in Practice'], rows: [
              ['Right to Information', 'Must be told what data is collected, why, by whom, and how long retained'],
              ['Right of Access', 'Can request a free copy of all personal data held about you within 30 days'],
              ['Right to Erasure', '"Right to be forgotten" — demand deletion; exceptions for public interest, legal obligation'],
              ['Right to Portability', 'Receive your data in a usable format; transfer to a competitor'],
              ['Right to Object', 'Stop use for direct marketing or profiling at any time; no justification needed'],
              ['Consent Requirements', 'Must be freely given, specific, informed, unambiguous — pre-ticked boxes invalid'],
              ['Penalties', 'Up to €20 million or 4% of global annual revenue — whichever is higher'],
            ]})}
            ${renderInfobox({ type: 'success', icon: 'fas fa-shield-halved', title: '"Brussels Effect" — GDPR Goes Global', body: 'GDPR has become a de facto global standard. Rather than maintaining different systems for EU and non-EU users, most companies applied GDPR standards globally. California\'s CCPA, Brazil\'s LGPD, India\'s PDPB — all modelled on GDPR. €4bn+ in fines since 2018 — Meta €1.2bn (2023), Amazon €746m (2021), WhatsApp €225m (2021). The EU has effectively regulated global data practices.' })}
          </div>

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Genetic Engineering', link: `${BASE}/themen/modern/genetic-engineering` },
            next: { label: 'Social Media', link: `${BASE}/themen/modern/social-media` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}