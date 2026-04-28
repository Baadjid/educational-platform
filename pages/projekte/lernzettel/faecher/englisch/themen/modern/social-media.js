// pages/projekte/lernzettel/faecher/englisch/themen/modern/social-media.js
// Living in a Modern World – 3.9: Social Media

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
const SM_TABS = [
  { key: 'teens',     label: '😟 Teen Mental Health' },
  { key: 'misinfo',   label: '📰 Misinformation & Democracy' },
  { key: 'platforms', label: '📱 Platform Issues' },
];

export default class SocialMediaPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-modern-socialmedia';
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
            <i class="fas fa-chevron-right"></i><span>3.9</span>
            <i class="fas fa-chevron-right"></i><span>Social Media</span>
          </div>
          <h1 class="lz-sub-title">Social<br><em>Media</em></h1>
          <p class="lz-sub-desc">Benefits · Mental Health Crisis · Misinformation · Democracy · Platform Issues</p>
          ${renderTags(['Social Media', 'Mental Health', 'Misinformation', 'Democracy', 'Algorithms'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-hashtag', title: '4.9 Billion Users', text: '60%+ of the global population — on social media. Average: 2 hours 27 minutes per day. Teenagers: 5+ hours. Social media has replaced television as the primary media diet for the under-30s.' },
            { icon: 'fas fa-brain', title: 'Teen Mental Health Crisis', text: 'ER admissions for self-harm among girls aged 10–14 up 188% (USA, 2009–2021). Correlates directly with smartphone adoption. Jonathan Haidt: "The Anxious Generation." Instagram knew and hid the research.' },
            { icon: 'fas fa-virus', title: 'Fake News: 6× Faster', text: 'False news spreads 6× faster than true news on Twitter/X, reaches 10× more people, and is 70% more likely to be retweeted — MIT study. The algorithm rewards engagement; outrage drives engagement.' },
            { icon: 'fas fa-shield-halved', title: 'Frances Haugen, 2021', text: 'Facebook whistleblower leaked internal research showing Facebook knew Instagram harmed teenage girls. Internal slide: "32% of teen girls said Instagram made them feel worse about their bodies." The company suppressed the findings.' },
          ])}

          ${renderSubhead('3.9.1 Benefits and Harms')}
          ${renderCompare({
            titleA: '✅ Benefits of Social Media',
            titleB: '⚠️ Harms of Social Media',
            listA: [
              'Maintain relationships across distance and time zones',
              'Amplify marginalised voices — #MeToo, #BlackLivesMatter',
              'Citizen journalism — Arab Spring, Iran protests, Myanmar',
              'Creative economy — musicians, artists, YouTubers reach global audience',
              'Community — support groups for rare diseases, LGBT+ youth in hostile areas',
              'Small businesses market globally without advertising budget',
            ],
            listB: [
              'Mental health — depression, anxiety, body dysmorphia, addiction, loneliness paradox',
              'Misinformation — false news travels 6× faster than true news',
              'Political polarisation — outrage algorithms, filter bubbles, tribalism',
              'Cyberbullying — 24/7 harassment; no spatial escape',
              'Addiction — dopamine-driven design; average user checks phone 96×/day',
              'Democracy — election interference, erosion of shared reality, radicalisation',
            ],
          })}

          ${renderSubhead('3.9.2 The Mental Health Crisis')}
          <h2 class="lz-h2 reveal">The Evidence and the Algorithms</h2>

          <nav class="wim-tabs" id="sm-tabs" aria-label="Social Media topics">
            ${SM_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <div class="wim-category" data-wim-cat="teens">
            ${renderAccordion([
              { title: 'The Evidence — What the Numbers Show', content: '<p class="lz-prose">• US teen depression rates rose sharply from 2012 (year smartphone use became widespread)<br>• Girls 10–14: ER admissions for self-harm up 188% (2009–2021)<br>• Anxiety disorders: now affect 1 in 3 teenagers<br>• Loneliness: rising despite being more "connected" than ever<br>• Sleep: average teen loses 1+ hour of sleep per night due to phone use — critical for development<br>• The correlation with smartphone adoption is not coincidental: it follows the same timeline globally across different countries</p>' },
              { title: 'How the Algorithms Work Against You', content: '<p class="lz-prose">Social media platforms are <strong>attention machines</strong> — designed to maximise "engagement" (time on platform). The algorithm learns what keeps you scrolling. What keeps you scrolling is often:<br>• <strong>Outrage</strong> — anger is more engaging than contentment<br>• <strong>Fear</strong> — threat is more engaging than safety<br>• <strong>Social comparison</strong> — curated "highlight reels" trigger envy<br>A Facebook internal memo (2018): "We have evidence that the algorithm may be making news feed worse for the world." They made it more extreme anyway — because it increased engagement. This is not a bug. It is the business model.</p>' },
              { title: 'Frances Haugen and the Whistleblower Documents', content: '<p class="lz-prose">Facebook (Meta) internal researcher Frances Haugen leaked internal documents to the Wall Street Journal and testified before the US Senate and EU Parliament (2021). Key findings:<br>• Instagram knows it causes body image problems in teenage girls<br>• Internal slide: "32% of teen girls said when they felt bad about their bodies, Instagram made them feel worse"<br>• Facebook\'s own researchers recommended design changes to reduce harm; executives overruled them because it would reduce engagement<br>Haugen compared Meta to the tobacco industry hiding evidence of harm from cigarettes.</p>' },
            ])}
          </div>

          <div class="wim-category hidden" data-wim-cat="misinfo">
            ${renderAccordion([
              { title: 'How Misinformation Spreads', content: '<p class="lz-prose">MIT Sloan Study (2018) — 10 years of Twitter data, 126,000 stories:<br>• False news spreads 6× faster than true news<br>• Reaches 10× more people<br>• 70% more likely to be retweeted<br><strong>Why?</strong> False news is more novel and emotionally provocative. The algorithm rewards engagement — not accuracy. There is no economic incentive for platforms to slow down viral misinformation — it drives traffic.</p>' },
              { title: 'Filter Bubbles and Echo Chambers', content: '<p class="lz-prose">Personalisation algorithms show content similar to what you\'ve engaged with before — creating information environments where you only encounter views that confirm existing beliefs. Democrats and Republicans in the USA now live in almost entirely separate information ecosystems. This makes democratic deliberation — the process of reasoning together — increasingly impossible. Note: research is mixed on how strong this effect is; some argue people actively seek confirming information regardless of algorithms.</p>' },
              { title: 'Deepfakes', content: '<p class="lz-prose">AI-generated fake videos of real people saying things they never said. Now achievable by anyone with a laptop and basic software. Political applications: fake concession speech; fake evidence of crime; fake audio of a candidate. The fundamental democratic threat: when we can no longer trust video and audio evidence, how does a society maintain a shared factual reality — the prerequisite for democracy?</p>' },
            ])}
          </div>

          <div class="wim-category hidden" data-wim-cat="platforms">
            ${renderTable({ headers: ['Platform', 'Monthly Users', 'Key Problem'], rows: [
              ['Facebook/Meta', '3.1 billion', 'Myanmar genocide: algorithm amplified anti-Rohingya hate speech; UN found Facebook played "determining role." Company knew for years.'],
              ['Instagram', '2.0 billion', 'Teen body image crisis; "pro-anorexia" content accessible; internal research suppressed; algorithm promotes unattainable beauty standards.'],
              ['TikTok', '1.5 billion', 'Chinese ownership (ByteDance); data privacy concerns; US ban attempted; extremely addictive algorithm; dangerous viral "challenges."'],
              ['Twitter/X', '550 million', 'Musk acquisition (2022): mass layoffs in trust/safety teams; hate speech increased; advertiser exodus; verification system changed; free speech vs. harm debate.'],
              ['YouTube', '2.5 billion', '"Rabbit hole" radicalisation: algorithm repeatedly recommends more extreme content (fitness → far-right; baby videos → conspiracy theories).'],
            ]})}
          </div>

          ${renderSubhead('3.9.3 Solutions')}
          ${renderAccordion([
            { title: '👤 Individual Actions', content: '<p class="lz-prose">• Limit usage: set screen time limits; put phone in another room while sleeping<br>• Curate feed: unfollow accounts that make you feel worse<br>• Fact-check before sharing: look for multiple sources; check the date<br>• Digital detox: regular breaks; "phone-free" zones and times<br>• Mindful use: notice how you feel before, during, and after using social media</p>' },
            { title: '🏛️ Platform Responsibility', content: '<p class="lz-prose">• Reduce addictive design features (infinite scroll, auto-play, notification frequency)<br>• Algorithmic transparency: publish how the algorithm works<br>• Content moderation: consistent enforcement against misinformation and hate speech<br>• Age verification: protect children from harmful content<br>• "Friction": add delays or prompts before sharing potentially false content</p>' },
            { title: '⚖️ Regulation', content: '<p class="lz-prose">• <strong>EU Digital Services Act (2022):</strong> Requires platforms to assess and reduce harms; transparency requirements; ban on microtargeting of minors<br>• <strong>UK Online Safety Act (2023):</strong> Requires platforms to protect children; Ofcom enforcement<br>• <strong>US Kids Online Safety Act:</strong> Under debate; Section 230 reform proposals<br>• <strong>Antitrust action:</strong> Break up Meta (Facebook + Instagram + WhatsApp)?<br>• <strong>Media literacy:</strong> Mandatory in schools; teach critical evaluation of sources</p>' },
          ])}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Big Data & Privacy', link: `${BASE}/themen/modern/big-data` },
            next: { label: 'Media Corporations', link: `${BASE}/themen/modern/media-corporations` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}