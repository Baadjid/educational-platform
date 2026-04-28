// pages/projekte/lernzettel/faecher/englisch/themen/modern/media-corporations.js
// Living in a Modern World – 3.10: Media Corporations

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
const MEDIACORP_TABS = [
  { key: 'concerns',   label: '⚠️ Concerns' },
  { key: 'defence',    label: '🛡️ Defence' },
  { key: 'regulation', label: '⚖️ Regulation' },
];

export default class MediaCorporationsPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-modern-mediacorp';
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
            <i class="fas fa-chevron-right"></i><span>3.10</span>
            <i class="fas fa-chevron-right"></i><span>Media Corporations</span>
          </div>
          <h1 class="lz-sub-title">Media<br><em>Corporations</em></h1>
          <p class="lz-sub-desc">Concentration of Power · Big Tech Giants · Concerns · Regulation · AI</p>
          ${renderTags(['Media Power', 'Big Tech', 'Monopoly', 'Regulation', 'Democracy', 'AI'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-chart-pie', title: '5 Companies — 90% of US Media', text: 'In 1983, 90% of US media was controlled by 50 companies. Today: 5. Comcast, Disney, News Corp/Fox, Warner Bros. Discovery, and Paramount. In digital media, concentration is even more extreme.' },
            { icon: 'fas fa-magnifying-glass', title: 'Google: 90%+ Search', text: 'Google controls over 90% of the global search market — the gateway to the internet. A 2024 US court ruled this constitutes an illegal monopoly. What people see online is determined by one company\'s algorithm.' },
            { icon: 'fas fa-newspaper', title: '1,800 Local Newspapers Closed', text: 'In the USA since 2004 — as classified advertising and local display ads moved online. "News deserts" — communities with no local coverage. Local democracy suffers when no one is watching local government.' },
            { icon: 'fas fa-robot', title: 'Generative AI — The Next Disruption', text: 'ChatGPT, Gemini, Claude can write news articles, create images, and generate video. What happens to the media industry when AI produces content at near-zero cost? The next wave of disruption is already beginning.' },
          ])}

          ${renderSubhead('3.10.1 Concentration of Media Ownership')}
          <h2 class="lz-h2 reveal">From 50 Companies to 5</h2>
          <p class="lz-prose reveal">
            Media consolidation accelerated dramatically from the 1980s onwards, driven by deregulation,
            globalisation, and the internet. Today, a handful of conglomerates control most of what the
            world reads, watches, and hears.
          </p>

          ${renderTable({
            headers: ['Corporation', 'What They Own', 'Reach / Revenue'],
            rows: [
              ['Alphabet / Google', 'Search (90%+), YouTube (2.5bn users), Android (72% of smartphones), Google Cloud, Gmail', '~$300bn revenue; ~3bn daily active users across services'],
              ['Meta', 'Facebook (3.1bn), Instagram (2bn), WhatsApp (2bn), Threads, VR (Quest headsets)', '3.9bn monthly active users; $135bn revenue (2023)'],
              ['Disney', 'ABC, ESPN, Pixar, Marvel, Star Wars, 20th Century Fox, Hulu, Disney+, National Geographic', '~$90bn revenue; cultural content empire'],
              ['News Corp / Fox', 'Fox News, Wall Street Journal, New York Post, The Sun, The Times (UK), Sky News Australia', 'Conservative media empire; Murdoch family control'],
              ['Amazon', 'E-commerce (38% of US online retail), AWS (33% of cloud market), Prime Video, Twitch', '~$550bn revenue; controls key digital infrastructure'],
              ['Apple', 'iPhones, App Store (30% commission), Apple TV+, Apple News+, Apple Pay', '~$380bn revenue; controls access to 1.3bn iPhones'],
            ],
            highlight: [0, 1],
          })}

          ${renderSubhead('3.10.2 Why This Matters')}
          <h2 class="lz-h2 reveal">Threats to Democracy, Labour and Fairness</h2>

          <nav class="wim-tabs" id="mediacorp-tabs" aria-label="Media corporations">
            ${MEDIACORP_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="concerns">
            ${renderAccordion([
              { title: 'Threat to Democracy', content: '<p class="lz-prose">A functioning democracy requires an informed citizenry. When a handful of corporations control what information people see:<br>• <strong>Agenda-setting power:</strong> They decide what is news and what is not<br>• <strong>Propaganda risk:</strong> Rupert Murdoch\'s Fox News promoted election denial; Meta\'s algorithms amplified extremism<br>• <strong>Echo chambers:</strong> Personalised algorithms create partisan information silos<br>• <strong>Advertising model:</strong> Revenue depends on engagement, not accuracy — sensationalism and outrage are profitable</p>' },
              { title: 'Death of Local News', content: '<p class="lz-prose">1,800+ US local newspapers closed since 2004; 2.5 million jobs lost in journalism. "News deserts" leave communities without local coverage. Consequences:<br>• No scrutiny of local government → more corruption<br>• Communities lose shared information space<br>• Voter turnout falls in areas without local news<br>• National partisan media fills the vacuum<br>Google and Meta captured the local advertising revenue that funded local news — without producing any journalism themselves.</p>' },
              { title: 'Labour and Platform Work', content: '<p class="lz-prose">• <strong>Amazon warehouse workers:</strong> Tracked every movement; timed bathroom breaks; injuries at twice the industry average<br>• <strong>Gig economy:</strong> Uber, DoorDash, TaskRabbit — classified as "independent contractors" to avoid benefits and minimum wage obligations<br>• <strong>Content moderators:</strong> Outsourced (often to Philippines, Kenya); exposed to extreme violence; PTSD; fired for "underperformance" when they take too long reviewing disturbing content<br>• <strong>Creator economy:</strong> YouTube/TikTok takes 45% of creator revenue; can demonetise or ban instantly with no appeal</p>' },
              { title: 'Tax Avoidance', content: '<p class="lz-prose">Large tech companies use complex international structures to minimise tax:<br>• Apple paid 0.005% effective tax rate in Ireland (2016) — EU ruled it illegal state aid; €13bn tax bill; Apple appealed and won (2024)<br>• Google\'s "Double Irish Dutch Sandwich" moved billions through Ireland and Netherlands<br>• Amazon paid $0 in US federal income tax in 2018 on $11bn profits<br>Public services are underfunded while the most profitable companies in history pay minimal taxes — a choice enabled by political influence (lobbying expenditure: Google $10m/year, Meta $19m/year).</p>' },
            ])}
          </div>

          <div class="wim-category hidden" data-wim-cat="defence">
            ${renderCompare({
              titleA: '🔵 Arguments Defending Tech Giants', titleB: '🔴 Counter-Arguments',
              listA: ['Revolutionary products that improve billions of lives', 'Free services — ad-supported models benefit consumers', 'Consumer choice — people voluntarily use these platforms', 'Still compete with each other vigorously', 'Create hundreds of thousands of well-paid jobs', 'Driven extraordinary economic growth and innovation'],
              listB: ['Innovation does not justify monopoly — competition law applies', '"Free" services extract data worth far more than any fee', 'Network effects create lock-in; "choice" is illusory once everyone is on Facebook', 'Market dominance actively prevents competition (Google\'s search deals)', 'Most workers are contractors with no benefits; exploitation hidden', 'Growth is concentrated; tax avoidance means communities don\'t share the gains'],
            })}
          </div>

          <div class="wim-category hidden" data-wim-cat="regulation">
            ${renderAccordion([
              { title: 'EU Digital Markets Act (2022)', content: '<p class="lz-prose">Forces "gatekeepers" (Alphabet, Meta, Apple, Amazon, Microsoft, ByteDance) to: allow third-party app stores; enable interoperability; give users data portability; not self-preference their own services. First real attempt to constrain platform power structurally. Apple forced to allow alternative app stores on iPhone in EU. Meta must allow data portability. Fines up to 10% of global revenue; repeat violations up to 20%.</p>' },
              { title: 'US Antitrust Actions', content: '<p class="lz-prose">• <strong>Google search (2024):</strong> US District Court ruled Google IS an illegal monopoly — paid billions to be default search on Apple and other devices. Remedy phase ongoing: could include forced sale of Chrome browser or Android.<br>• <strong>Meta (FTC suit):</strong> Alleges Facebook illegally acquired Instagram and WhatsApp to eliminate competition. Seeks to break them up. Case ongoing.<br>• <strong>Amazon:</strong> FTC suit over e-commerce marketplace practices — favouring own products, punishing sellers who offer lower prices elsewhere.<br>• Historical precedent: Microsoft antitrust (2000) was settled without break-up — critics say this allowed the current concentration.</p>' },
              { title: 'EU AI Act (2024)', content: '<p class="lz-prose">The world\'s first comprehensive AI regulation. Risk-based approach:<br>• <strong>Unacceptable risk (banned):</strong> Real-time biometric surveillance in public; social scoring; subliminal manipulation<br>• <strong>High risk (strict rules):</strong> AI in hiring, education, policing, healthcare — must be transparent, auditable, and allow human oversight<br>• <strong>Limited/minimal risk:</strong> Lighter-touch requirements<br>• Generative AI (GPT, Claude): must disclose AI-generated content; copyright compliance required<br>Critics: too slow to adapt to technology; too bureaucratic. Defenders: necessary to prevent harms before they scale.</p>' },
            ])}
          </div>

          ${renderSubhead('3.10.3 AI and the Next Disruption')}
          <p class="lz-prose reveal">
            Generative AI is the most significant disruption to media since the internet.
            It can write news articles, create images and videos, impersonate voices,
            and generate personalised content at near-zero marginal cost.
          </p>

          ${renderTable({
            headers: ['Impact Area', 'What\'s Happening', 'Implication'],
            rows: [
              ['Journalism', 'AI writing financial and sports reports; some outlets laying off journalists', 'Threatens remaining journalism jobs; risk of AI-generated misinformation at scale'],
              ['Search', 'Google Search Generative Experience; ChatGPT replacing traditional search', 'May destroy the economic model that funds news websites (traffic from search)'],
              ['Creative industry', 'AI generates images, music, video; creative jobs threatened', 'Copyright crisis: trained on creators\' work without consent or payment'],
              ['Deepfakes', 'AI-generated fake video of politicians, celebrities becoming indistinguishable from real', 'Threatens evidence, consent, and democratic discourse'],
              ['Concentration', 'Only a few companies (OpenAI/Microsoft, Google, Meta, Anthropic) have compute and data for frontier AI', 'Most extreme concentration yet; AI capability may determine global power'],
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-scale-balanced', title: 'The Core Tension', body: 'Technology offers extraordinary benefits — AI accelerates drug discovery; social media enables social movements; platforms connect isolated people. But these same technologies concentrate unprecedented power, threaten privacy and democracy, enable misinformation at scale, and are largely unaccountable to the people they affect. The question is not whether to have technology, but <strong>who controls it, for whose benefit, and with what democratic oversight</strong>.' })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Social Media', link: `${BASE}/themen/modern/social-media` },
            next: { label: 'William Shakespeare', link: `${BASE}/themen/literature/shakespeare` }
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}