// pages/projekte/lernzettel/faecher/englisch/themen/gb/multicultural.js
// Great Britain – Kapitel 16 / 2.6: Britain's Multicultural Society

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
const DISCRIMINATION_TABS = [
  { key: 'forms',    label: '🚫 Forms' },
  { key: 'lawrence', label: '🏛️ Stephen Lawrence Case' },
];

export default class MulticulturalBritainPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-gb-multicultural';
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
            <i class="fas fa-chevron-right"></i><span>Kapitel 16</span>
            <i class="fas fa-chevron-right"></i><span>Multicultural Society</span>
          </div>
          <h1 class="lz-sub-title">Britain's<br><em>Multicultural Society</em></h1>
          <p class="lz-sub-desc">Class · Immigration Waves · Discrimination · 7/7 · Segregation · Arranged Marriage</p>
          ${renderTags(['Multiculturalism', 'Immigration', 'Windrush', 'Discrimination', 'Integration'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-users', title: '18% Ethnic Minority', text: 'Share of the UK population from ethnic minority backgrounds (Census 2021), up from 6% in 1991. London: over 40%.' },
            { icon: 'fas fa-language', title: '300+ Languages', text: 'Languages spoken in London, making it one of the most linguistically diverse cities in the world.' },
            { icon: 'fas fa-ship', title: 'HMT Empire Windrush', text: 'The ship that arrived in June 1948 carrying ~492 Caribbean migrants — symbol of post-war immigration. Given name to a generation and a scandal.' },
            { icon: 'fas fa-bomb', title: '7/7 — 7 July 2005', text: '52 killed in London bomb attacks by four British-born Muslim men. Forced Britain to confront "homegrown" radicalisation.' },
          ])}

          ${renderSubhead('16.1 A Class-Ridden Society')}
          <h2 class="lz-h2 reveal">The Persistence of British Class</h2>
          <p class="lz-prose reveal">
            Britain has historically been one of the most class-stratified societies in the developed world.
            Unlike the USA's myth of classlessness, or Germany's post-war levelling, Britain retained
            strong class consciousness into the 21st century — with class overlapping significantly with
            ethnicity and immigration status.
          </p>

          ${renderAccordion([
            {
              title: '📊 The "Great British Class Survey" (2013)',
              content: `<p class="lz-prose">A BBC study of 161,000 people found <strong>seven classes</strong> — not the traditional three:<br>
                        1. <strong>Elite</strong> — 6%; top occupations, exclusive education, inherited wealth; most powerful<br>
                        2. <strong>Established Middle Class</strong> — 25%; professionals, managers; high cultural capital<br>
                        3. <strong>Technical Middle Class</strong> — 6%; highly skilled technical workers; less social engagement<br>
                        4. <strong>New Affluent Workers</strong> — 15%; younger, more culturally active; upwardly mobile<br>
                        5. <strong>Traditional Working Class</strong> — 14%; older, low income but not deprived; house owners<br>
                        6. <strong>Emergent Service Workers</strong> — 19%; young, urban, low pay; high social/cultural engagement<br>
                        7. <strong>Precariat (Precarious Proletariat)</strong> — 15%; lowest income, least cultural capital; most deprived</p>`
            },
            {
              title: '🎓 How Class is Marked in Britain',
              content: `<p class="lz-prose">• <strong>Accent:</strong> Received Pronunciation ("BBC English") marks the upper class; regional accents mark working class — still a major source of discrimination.<br>
                        • <strong>Education:</strong> "Public schools" (private — Eton, Harrow, Winchester) vs. state schools. Oxbridge filled by ~7% who attend independent schools.<br>
                        • <strong>Occupation:</strong> Professional vs. manual. The "collar colour" distinction — white collar vs. blue collar.<br>
                        • <strong>Cultural capital:</strong> What you read, watch, eat, where you holiday. Pierre Bourdieu's concept deeply applicable to Britain.<br>
                        • <strong>Geography:</strong> Postcode as destiny — North/South, urban/rural; property ownership as class marker.</p>`
            },
          ])}

          ${renderSubhead('16.2 Immigration Waves')}
          <h2 class="lz-h2 reveal">Building a Diverse Britain</h2>

          ${renderVTimeline([
            { year: '1948', title: 'Windrush Generation', text: 'HMT Empire Windrush arrives from Jamaica. 492 Caribbean migrants invited to fill post-war labour shortages. First major non-white immigration wave. Faced extreme racism: "No Blacks, No Irish, No Dogs" signs.' },
            { year: '1950s–60s', title: 'South Asian Immigration', text: 'From India and Pakistan (and after partition, Bangladesh). Recruited for NHS, transport, textile industries. Settled in Bradford, Leicester, Birmingham.' },
            { year: '1972', title: 'Ugandan Asians', text: 'Idi Amin expelled 60,000 Asians from Uganda; many settled in UK. Highly entrepreneurial — transformed areas like Leicester.' },
            { year: '1962, 1968, 1971', title: 'Commonwealth Immigration Acts', text: 'Restricted non-white Commonwealth immigration. Explicitly designed to limit Black and Asian immigration while allowing white Commonwealth citizens.' },
            { year: '2004', title: 'EU Enlargement', text: 'Poland, Czech Republic, Hungary etc. join EU. UK (unlike France/Germany) immediately grants full free movement. ~1 million Poles arrive in five years.' },
            { year: '2010s', title: 'Net migration rises', text: 'Austerity era but immigration high. Became central to Brexit vote. EU referendum partly a vote against EU free movement.' },
            { year: '2021', title: 'Post-Brexit', text: 'EU free movement ended. Points-based immigration system. But net migration actually rose — from non-EU sources (India, Nigeria, Ukraine, Hong Kong).' },
          ])}

          ${renderInfobox({
            type: 'danger',
            icon: 'fas fa-exclamation-triangle',
            title: 'The Windrush Scandal (2018)',
            body: 'Hundreds of Windrush generation members — who had lived legally in the UK for decades — were wrongly declared illegal immigrants due to the "hostile environment" policy. Many were detained, threatened with deportation, or deported. Lost jobs, benefits, homes. Some died waiting for compensation. Home Secretary Amber Rudd resigned. A government review found the Home Office acted in a "racist" way. Compensation scheme still ongoing — severely underfunded and slow.'
          })}

          ${renderSubhead('16.3 The Multi-Ethnic Society')}
          <h2 class="lz-h2 reveal">Who Lives in Britain?</h2>

          ${renderTable({
            headers: ['Ethnic Group', '% (Census 2021)', 'Key Characteristics'],
            rows: [
              ['White British', '74.4%', 'Declining share; still dominant in rural areas, Wales, Scotland'],
              ['White Other (incl. Irish, EU)', '7.4%', 'Largest increase pre-Brexit: Polish, Romanian, other EU nationals'],
              ['Asian / Asian British: Indian', '3.1%', 'High educational/professional achievement; concentrated in East Midlands, South East'],
              ['Asian / Asian British: Pakistani', '2.7%', 'Higher poverty rates; concentrated in Bradford, Birmingham, parts of London'],
              ['Asian / Asian British: Bangladeshi', '1.1%', 'Largest concentration in Tower Hamlets (London East)'],
              ['Black / Black British: African', '2.5%', 'Fastest growing group; increasingly high-achieving educationally'],
              ['Black / Black British: Caribbean', '1.2%', 'Windrush generation legacy; face persistent discrimination'],
              ['Mixed', '2.9%', 'Fastest growing category; reflects intermarriage across generations'],
              ['Chinese', '0.9%', 'High academic achievement; concentrated in cities; less visible in politics'],
            ],
          })}

          ${renderSubhead('16.4 Discrimination and Inequality')}
          <h2 class="lz-h2 reveal">Persistent Racial Inequality</h2>

          <nav class="wim-tabs" id="discrimination-tabs" aria-label="Discrimination">
            ${DISCRIMINATION_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelDiscriminationForms()}
          ${this._panelDiscriminationLawrence()}

          ${renderSubhead('16.5 The 7/7 London Bombings (2005)')}
          <h2 class="lz-h2 reveal">"Homegrown" Terror</h2>
          <p class="lz-prose reveal">
            On July 7, 2005, four suicide bombs exploded on London's transport network — three on the Underground
            and one on a bus. <strong>52 people were killed, over 700 injured.</strong> The bombers were four
            young British Muslim men from Leeds — apparently integrated, working-class citizens.
          </p>

          ${renderAccordion([
            {
              title: '🔍 Background and Radicalisation',
              content: `<p class="lz-prose">• All four bombers were <strong>British-born or raised</strong>, mainly second-generation Pakistanis.<br>
                        • Motivated by: UK foreign policy (Iraq War, Afghanistan), Al-Qaeda ideology, sense of global Muslim identity under attack.<br>
                        • Radicalised through <strong>local networks, online content, and travel to Pakistan</strong> for training.<br>
                        • Attacks occurred two weeks after London won the 2012 Olympics bid — maximum psychological impact.</p>`
            },
            {
              title: '💔 Impact on Multiculturalism',
              content: `<p class="lz-prose">• Anti-Muslim hate crimes increased 500% in the week after 7/7.<br>
                        • Debate about whether multiculturalism had "failed" — had created isolated communities where extremism could grow?<br>
                        • "Prevent" counter-terrorism strategy introduced — criticised for treating Muslim community as suspect.<br>
                        • Mainstream Muslim organisations condemned the attacks; but many Muslims felt targeted by the backlash.<br>
                        • Shift in political discourse: from celebration of diversity to questions about integration.</p>`
            },
          ])}

          ${renderSubhead('16.6 Multiculturalism vs. Integration Debate')}
          <h2 class="lz-h2 reveal">Celebration or Failure?</h2>

          ${renderCompare({
            titleA: '🌍 Multiculturalism (1980s–2000s)',
            titleB: '🤝 Integration Model (2000s–present)',
            listA: [
              'Celebrate difference; preserve cultural identities',
              'State accommodates diverse practices (halal food, hijab, faith schools)',
              'Diversity is a strength — enriches society',
              '"Salad bowl" — communities mix but retain identity',
              'Anti-racist; challenges institutional discrimination',
              'Trevor Phillips, Tariq Modood as advocates',
            ],
            listB: [
              'Shared British values required — not cultural relativism',
              'Integration into mainstream society is the goal',
              '7/7 showed isolated communities are dangerous',
              '"Melting pot" — common identity should emerge',
              'Citizenship tests, language requirements, civic education',
              'David Cameron: multiculturalism has "failed" (2011)',
            ],
          })}

          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-balance-scale',
            title: '"Sleepwalking into Segregation" — Trevor Phillips (2005)',
            body: 'Trevor Phillips, as head of the Commission for Racial Equality, controversially warned that Britain was "sleepwalking into segregation." The evidence: many Northern cities had almost entirely separate Muslim and white communities, different schools, no mixing. The <strong>Cantle Report (2001)</strong> after riots in Oldham and Bradford found communities living "parallel lives" with little knowledge of each other. Critics said this scapegoated immigrant communities; supporters said it was a necessary warning.'
          })}

          ${renderSubhead('16.7 Arranged Marriage')}
          <h2 class="lz-h2 reveal">Tradition, Choice, and the Law</h2>

          ${renderCompare({
            titleA: '💍 Arranged Marriage (Legal)',
            titleB: '⛔ Forced Marriage (Illegal)',
            listA: [
              'Both parties consent freely',
              'Family introduces potential partners',
              'Individual has right to refuse',
              'Traditional in South Asian, Middle Eastern cultures',
              'Often: "assisted" — family suggests, individual decides',
              'Legal; respected cultural practice',
            ],
            listB: [
              'One or both parties do not consent',
              'Coercion: emotional, physical, financial pressure',
              'Victim cannot freely refuse',
              'Criminalised in UK since 2014',
              'Forced Marriage Unit handles ~1,500 cases/year',
              'Can involve deception, abduction, violence',
            ],
          })}

          ${renderAccordion([
            {
              title: '📊 Generational Change',
              content: `<p class="lz-prose">• <strong>First generation</strong> (1950s–70s immigrants): Strong adherence to arranged marriage; community pressure intense; few refused.<br>
                        • <strong>Second generation</strong> (British-born, 1970s–90s): Balancing cultures; more choice given; "assisted" marriages more common.<br>
                        • <strong>Third generation</strong> (current): Increasingly autonomous; "love marriages" more common; still many choose arranged marriages as a cultural preference.<br>
                        • Intermarriage rates: ~50% of British-born South Asians marry outside their ethnic group — a dramatic change from the first generation.</p>`
            },
            {
              title: '⚠️ Honour-Based Violence',
              content: `<p class="lz-prose">• <strong>Definition:</strong> Violence committed to "restore family honour" — when a woman is perceived to have brought shame through disobedience, relationships outside the community, or refusing to marry.<br>
                        • <strong>Scale:</strong> Police receive ~15,000+ reports of honour-based abuse annually in the UK.<br>
                        • <strong>"Honour killings":</strong> In extreme cases, murder — estimated 12 cases/year in the UK.<br>
                        • <strong>Condemned</strong> by mainstream Muslim, Hindu, and Sikh organisations as having no religious basis.<br>
                        • <strong>Legal response:</strong> Forced Marriage Protection Orders; Domestic Abuse Act 2021 includes honour-based abuse.</p>`
            },
          ])}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'United Kingdom & Devolution', link: `${BASE}/themen/gb/united-kingdom` },
            next: { label: 'Religion in Britain', link: `${BASE}/themen/gb/religion` },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelDiscriminationForms() {
    return `
      <div class="wim-category" data-wim-cat="forms">
        ${renderAccordion([
          { title: 'Employment Discrimination', content: '<p class="lz-prose">A landmark study sent identical CVs with "White British" vs. ethnic minority names: those with "white" names received 74% more callbacks. Ethnic minority graduates earn 8-16% less than white graduates with the same qualifications. "Ethnic penalty" in the labour market is well-documented.</p>' },
          { title: 'Stop and Search', content: '<p class="lz-prose">Black people are 9× more likely to be stopped and searched by police than white people (2022). Disproportionate use of Section 60 (which requires no suspicion) in Black communities. Creates deep alienation from police.</p>' },
          { title: 'Housing', content: '<p class="lz-prose">Ethnic minorities face higher rates of rejection from private rental accommodation. Concentrated in poorer quality housing. Geographic segregation in many cities creates "parallel lives."</p>' },
          { title: 'Criminal Justice System', content: '<p class="lz-prose">Black people 5× more likely to be imprisoned than white people. Harsher sentences for same offences. Under-represented in the judiciary and legal profession.</p>' },
        ])}
      </div>
    `;
  }

  _panelDiscriminationLawrence() {
    return `
      <div class="wim-category hidden" data-wim-cat="lawrence">
        <p class="lz-prose"><strong>April 22, 1993:</strong> Stephen Lawrence, an 18-year-old Black student, was murdered by a gang of white racists at a bus stop in Eltham, South London. The Metropolitan Police investigation was catastrophically bungled — failure to pursue suspects, racist assumptions, evidence mishandled.</p>
        ${renderVTimeline([
          { year: '1993', title: 'Murder', text: 'Stephen stabbed by gang shouting racist abuse; suspects immediately identified but not charged.' },
          { year: '1995', title: 'Private prosecution collapses', text: 'Stephen\'s parents bring private prosecution; collapsed due to inadmissible evidence.' },
          { year: '1999', title: 'Macpherson Report', text: 'Public inquiry concludes Metropolitan Police "institutionally racist." Definition: "collective failure of an organisation to provide appropriate service due to colour, culture, or ethnic origin."' },
          { year: '2012', title: 'Convictions — 19 years later', text: 'Gary Dobson and David Norris finally convicted. New forensic evidence from original crime scene.' },
        ])}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-landmark', title: 'Legal Legacy', body: 'The Macpherson Report led to major changes: double jeopardy abolished (a person can be retried after acquittal with new evidence), improved hate crime legislation, police diversity targets, mandatory equality training.' })}
      </div>
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initWimTabs(document);
  }
}