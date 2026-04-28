// pages/projekte/lernzettel/faecher/englisch/themen/usa/foreign-policy.js
// USA – Kapitel 6: Foreign Policy

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderInfobox,
  renderSubhead,
  renderTags,
  renderAccordion,
  renderVTimeline,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class ForeignPolicyPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-usa-foreign';
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
            <button data-link="${BASE}/themen/usa" class="lz-bread-link">USA</button>
            <i class="fas fa-chevron-right"></i><span>Kapitel 6</span>
            <i class="fas fa-chevron-right"></i><span>Foreign Policy</span>
          </div>
          <h1 class="lz-sub-title">
            US Foreign Policy<br><em>From Isolation to Intervention</em>
          </h1>
          <p class="lz-sub-desc">
            Isolationism · Cold War · Vietnam War · Bush Doctrine · Ukraine · US‑Europe Relations
          </p>
          ${renderTags(['USA', 'Foreign Policy', 'Cold War', 'War on Terror'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('6.1 From Isolationism to Interventionism')}
          <h2 class="lz-h2 reveal">The Transformation</h2>
          <p class="lz-prose reveal">
            Early American foreign policy was shaped by George Washington’s warning against “entangling alliances”
            and the Monroe Doctrine (1823), which declared the Western Hemisphere off‑limits to European powers.
            The United States remained largely isolationist until the 20th century.
          </p>
          ${renderAccordion([
            {
              title: '🌍 World Wars and the Shift',
              content: `<p class="lz-prose"><strong>WWI (1917):</strong> Entered reluctantly, returned to isolationism after.<br>
                        <strong>WWII (1941):</strong> Pearl Harbor forced entry; emerged as a superpower.<br>
                        <strong>Permanent change:</strong> Became global leader, never returned to isolationism.<br>
                        <strong>NATO (1949):</strong> Permanent military alliances – a historic break from Washington’s advice.</p>`
            },
          ])}

          ${renderSubhead('6.2 The Cold War Period')}
          <h2 class="lz-h2 reveal">Containment and Proxy Wars (1947‑1991)</h2>
          <p class="lz-prose reveal">
            The Cold War was an ideological struggle between capitalism (US) and communism (USSR). No direct war
            between superpowers, but proxy wars, arms race, space race, and the constant threat of nuclear annihilation.
          </p>
          ${renderVTimeline([
            { year: '1947', title: 'Containment Policy', text: 'Prevent spread of communism (Truman Doctrine)' },
            { year: '1948‑49', title: 'Berlin Airlift', text: 'US and allies supplied West Berlin after Soviet blockade' },
            { year: '1950‑53', title: 'Korean War', text: 'First major proxy war; stalemate' },
            { year: '1962', title: 'Cuban Missile Crisis', text: 'Closest to nuclear war' },
            { year: '1979‑89', title: 'Soviet‑Afghan War', text: 'US supported mujahideen' },
            { year: '1989', title: 'Fall of Berlin Wall', text: 'Symbolic end of Cold War' },
            { year: '1991', title: 'Soviet Union collapses', text: 'US emerges as sole superpower' },
          ])}
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-globe-americas',
            title: 'Domino Theory',
            body: 'The belief that if one country fell to communism, neighboring countries would follow like falling dominoes. This justified US intervention in Vietnam, Korea, and elsewhere.'
          })}

          ${renderSubhead('6.3 The Vietnam War – Trauma of an Invincible Nation')}
          <h2 class="lz-h2 reveal">The War That Shattered American Confidence</h2>
          <p class="lz-prose reveal">
            The Vietnam War (1955‑1975) was America’s first lost war. The US feared communist takeover under the
            domino theory, gradually escalating from advisors to over 500,000 combat troops by 1968.
          </p>
          ${renderAccordion([
            {
              title: '💥 Characteristics of the War',
              content: `<p class="lz-prose">• Guerrilla warfare – Viet Cong hit‑and‑run tactics<br>
                        • Jungle terrain – unfamiliar, difficult for American forces<br>
                        • Agent Orange – chemical defoliant causing lasting health damage<br>
                        • My Lai Massacre (1968) – US soldiers killed civilians, shocking the nation</p>`
            },
            {
              title: '🏠 Home Front Opposition',
              content: `<p class="lz-prose">• Largest protest movement in American history<br>
                        • Student protests – Kent State shootings (1970)<br>
                        • First “television war” – graphic images shocked the public<br>
                        • Pentagon Papers (1971) revealed government lies<br>
                        • Draft resistance, generational divide</p>`
            },
            {
              title: '📉 Outcome and Legacy',
              content: `<p class="lz-prose">• 58,000+ Americans killed, millions of Vietnamese<br>
                        • US withdrew 1973; Saigon fell 1975<br>
                        • <strong>First lost war</strong> – shattered American confidence<br>
                        • “Vietnam Syndrome” – reluctance for military interventions<br>
                        • PTSD among veterans, “Credibility Gap” – distrust of government</p>`
            },
          ])}

          ${renderSubhead('6.4 Reorientation after 1990')}
          <h2 class="lz-h2 reveal">The Unipolar Moment</h2>
          <p class="lz-prose reveal">
            After the Soviet collapse, the United States became the world’s sole superpower. The Gulf War (1990‑1991)
            was a quick victory liberating Kuwait. Humanitarian interventions followed in Somalia, Bosnia, and Kosovo.
            However, new threats emerged – terrorism, rogue states, and the rise of China.
          </p>

          ${renderSubhead('6.5 The Bush Administration (2001‑2009)')}
          <h2 class="lz-h2 reveal">The War on Terror</h2>
          <p class="lz-prose reveal">
            The 9/11 attacks transformed US foreign policy. President George W. Bush launched the “War on Terror”
            with the Bush Doctrine: preemptive war, unilateralism, and democracy promotion.
          </p>
          ${renderVTimeline([
            { year: '2001', title: 'Afghanistan War', text: 'Overthrew Taliban (ended 2021 – longest US war)' },
            { year: '2003', title: 'Iraq War', text: 'Controversial invasion based on false WMD claims' },
            { year: '2009', title: 'End of Bush term', text: 'Trillions spent, thousands killed, ISIS later emerged' },
          ])}
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-skull-crossbones',
            title: 'Controversies of the Iraq War',
            body: '• No WMDs found<br>• Justification based on faulty intelligence<br>• Created power vacuum leading to sectarian violence and ISIS<br>• Damaged US international reputation'
          })}

          ${renderSubhead('6.6 Russian Invasion of Ukraine (2022)')}
          <h2 class="lz-h2 reveal">A New Cold War?</h2>
          <p class="lz-prose reveal">
            On February 24, 2022, Russia launched a full‑scale invasion of Ukraine. The US response has been
            massive military and financial aid to Ukraine, sanctions on Russia, and strengthening NATO.
          </p>
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-shield-alt',
            title: 'US Response',
            body: '• Billions in military aid (HIMARS, tanks, air defense)<br>• Severe sanctions on Russian economy and oligarchs<br>• No direct US‑Russia combat (avoiding escalation)<br>• NATO unity strengthened – Finland and Sweden joined'
          })}
          <p class="lz-prose reveal">
            <strong>Domestic debate:</strong> Some Republicans question continued funding for Ukraine, while the
            Biden administration emphasizes that stopping Russian aggression is vital for European security and
            the global rules‑based order.
          </p>

          ${renderSubhead('6.7 US Relations to Europe')}
          <h2 class="lz-h2 reveal">The Transatlantic Alliance</h2>
          <p class="lz-prose reveal">
            NATO has been the cornerstone of US‑Europe relations since 1949. Shared values – democracy, human rights,
            free markets – bind the alliance. The US and EU are the largest bilateral trade and investment partners.
          </p>
          ${renderAccordion([
            {
              title: '🤝 Trump Era Strains',
              content: `<p class="lz-prose">• President Trump questioned NATO’s value, called allies “delinquent”<br>
                        • Threatened to withdraw from NATO<br>
                        • Personal conflicts with European leaders (Merkel, Macron)<br>
                        • Imposed tariffs on European goods</p>`
            },
            {
              title: '🕊️ Biden Reset',
              content: `<p class="lz-prose">• “America is back” – recommitted to alliances<br>
                        • Rejoined Paris Climate Agreement and Iran nuclear deal framework<br>
                        • Strengthened NATO response to Russian aggression<br>
                        • Renewed cooperation on trade, technology, and China</p>`
            },
          ])}
          <p class="lz-prose reveal">
            Despite occasional tensions, the transatlantic relationship remains the bedrock of Western security and
            prosperity. The war in Ukraine has reaffirmed NATO’s relevance and US commitment to European defense.
          </p>

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Security & Freedom', link: `${BASE}/themen/usa/security-freedom` },
            next: { label: 'Economy', link: `${BASE}/themen/usa/economy` },
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
  }
}