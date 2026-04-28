// pages/projekte/lernzettel/faecher/geschichte/themen/kalter-krieg/nato-wp-korea.js
// 3.2 — NATO, Warschauer Pakt & Koreakrieg

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }       from '../../../../../../../components/Footer.js';
import { i18n }             from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }      from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderTable,
  renderTabs, renderAccordion, renderMerkboxGrid, renderCompare,
  renderVTimeline, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../geschichte.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const NATO_KOREA_TABS = [
  { key: 'nato',     label: '🛡️ NATO' },
  { key: 'korea',    label: '⚔️ Koreakrieg' },
  { key: 'ruestung', label: '📊 Rüstungswettlauf' },
];

export default class GeschichteNatoWpKorea {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['sub.css',        'pages/projekte/lernzettel/styles/sub.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });
    const el = document.createElement('div');
    el.className = 'page page-geschichte page-geschichte-sub';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() { return `
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-orb" aria-hidden="true"></div>
      <div class="lz-sub-hero-inner">
        <nav class="lz-sub-breadcrumb">
          <button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button>
          <i class="fas fa-chevron-right"></i>
          <button class="lz-bread-link" data-link="${BASE}">Geschichte</button>
          <i class="fas fa-chevron-right"></i>
          <span>3.2 · NATO, Warschauer Pakt &amp; Korea</span>
        </nav>
        <h1 class="lz-sub-title">NATO, Warschauer Pakt<br><em>&amp; Koreakrieg.</em></h1>
        <p class="lz-sub-desc">
          Die militärische Verfestigung der bipolaren Weltordnung — und der erste
          heiße Krieg des Kalten Krieges auf der koreanischen Halbinsel.
        </p>
        ${renderTags(['3.2', '1949–1953', 'Kalter Krieg', 'NATO', 'Korea', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Militärische Blöcke')}
        <h2 class="lz-h2 reveal">Zwei Bündnisse, eine geteilte Welt</h2>
        ${renderCompare({
          titleA: 'NATO (1949)', titleB: 'Warschauer Pakt (1955)',
          listA: ['Nordatlantikpakt, 4. April 1949', 'Gründungsmitglieder: 12 Staaten (USA, UK, Frankreich, Benelux, Kanada, Italien, Portugal, Dänemark, Norwegen, Island)', 'Art. 5: Angriff auf einen = Angriff auf alle', 'Hauptquartier: SHAPE (Europa), NATO HQ Brüssel', 'Westdeutschland beigetreten 1955', 'Heute: 32 Mitglieder (inkl. ehem. Warschauer-Pakt-Staaten)'],
          listB: ['Warschauer Vertrag, 14. Mai 1955', 'Antwort auf NATO-Beitritt Westdeutschlands', 'Mitglieder: UdSSR, Polen, DDR, ČSSR, Ungarn, Rumänien, Bulgarien, Albanien', 'Faktisch: sowjetisches Kontrollinstrument über Osteuropa', 'Gemeinsames Oberkommando unter sowjetischem General', 'Aufgelöst 1991 — nach dem Ende der UdSSR'],
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Bündnisse &amp; Koreakrieg</h2>

        <nav class="wim-tabs" id="natokorea-tabs" aria-label="NATO, Warschauer Pakt & Korea">
          ${NATO_KOREA_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelNato()}
        ${this._panelKorea()}
        ${this._panelRuestung()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">1949–1955</h2>
        ${renderVTimeline([
          { year: '04.04.1949', title: 'NATO gegründet',                    text: 'Erstes dauerhaftes US-Militärbündnis in Friedenszeiten.' },
          { year: 'Aug. 1949',  title: 'Sowjetische Atombombe',             text: 'Ende des US-Atommonopols.' },
          { year: '1950',       title: 'NSC-68',                            text: 'US-Strategiedokument: massive Aufrüstung beschlossen.' },
          { year: '25.06.1950', title: 'Nordkorea überfällt Süden',         text: 'Beginn des Koreakriegs.' },
          { year: 'Sep. 1950',  title: 'Inchon-Landung',                    text: 'MacArthur wendet das Blatt — zu erfolgreich.' },
          { year: 'Okt. 1950',  title: 'China greift ein',                  text: 'Direktes Aufeinandertreffen US/China-Truppen.' },
          { year: '1952',       title: 'USA: erste H-Bombe',                text: 'Nuklearer Rüstungswettlauf verschärft sich.' },
          { year: '27.07.1953', title: 'Waffenstillstand Korea',            text: '3 Millionen Tote — Grenze nahezu unverändert.' },
          { year: '1955',       title: 'BRD tritt NATO bei',                text: 'Wiederbewaffnung Westdeutschlands.' },
          { year: '14.05.1955', title: 'Warschauer Pakt gegründet',         text: 'Gegengründung auf NATO-Beitritt Deutschlands.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/kalter-krieg/anfaenge`,          label: '3.1 · Anfänge des Kalten Krieges' },
          next: { link: `${BASE}/themen/kalter-krieg/kuba-krise`,        label: '3.3 · Kuba-Krise' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelNato() {
    return `
      <div class="wim-category" data-wim-cat="nato">
        <p class="lz-prose">Die NATO war das erste dauerhafte Militärbündnis der USA in Friedenszeiten — ein Bruch mit der Tradition der Nichteinmischung.</p>
        ${renderAccordion([
          { title: 'Entstehung und Artikel 5', content: `Anlass: Berliner Blockade 1948/49 bewies: Westeuropa allein kann sich gegen die sowjetische Bedrohung nicht verteidigen.<br><br><strong>Artikel 5</strong> (Beistandsklausel): Ein bewaffneter Angriff auf einen NATO-Staat gilt als Angriff auf alle. Jedes Mitglied entscheidet selbst über Art der Hilfe — aber politisch ist die Verpflichtung eindeutig.<br><br>Bisher einzige Auslösung: Nach den Terroranschlägen vom 11. September 2001.` },
          { title: 'Westdeutschland in der NATO (1955)', content: `Frankreich zögerte lange — Angst vor einem wiederbewaffneten Deutschland. Kompromiss: <em>Europäische Verteidigungsgemeinschaft</em> (EVG) scheiterte 1954. Lösung: Westdeutschland in NATO unter Souveränitätsbeschränkungen (keine ABC-Waffen, Kontrolle durch WEU).<br><br>Unmittelbare Reaktion der UdSSR: Gründung des <strong>Warschauer Pakts</strong> (Mai 1955) — als Antwort auf die NATO-Erweiterung.` },
          { title: 'NATO-Strategie: Flexible Response vs. Massive Retaliation', content: `<strong>Massive Retaliation</strong> (Eisenhower, 1954): Jeder sowjetische Angriff — auch konventionell — wird mit dem vollen Nukleararsenal beantwortet. Billig, aber glaubwürdig? Problem: Unverhältnismäßigkeit.<br><br><strong>Flexible Response</strong> (Kennedy/McNamara, 1962): Eskalationsleiter — konventionell → taktisch nuklear → strategisch nuklear. Mehr Optionen, glaubwürdiger. NATO-Doktrin ab 1967.` },
        ])}
      </div>
    `;
  }

  _panelKorea() {
    return `
      <div class="wim-category hidden" data-wim-cat="korea">
        ${renderInfobox({ type: 'warning', icon: 'fas fa-person-military-rifle', title: 'Korea — erster heißer Krieg des Kalten Krieges', body: `Der Koreakrieg (1950–53) war der erste direkte Stellvertreterkrieg des Kalten Krieges — und der einzige, in dem US- und chinesische Truppen direkt gegeneinander kämpften.` })}
        ${renderAccordion([
          { title: 'Vorgeschichte: Teilung Koreas', content: `1945: Japan verliert Korea. Einigung: 38. Breitengrad als Teilungslinie.<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li><strong>Nordkorea</strong>: kommunistisch unter Kim Il-sung (sowjetische Unterstützung)</li><li><strong>Südkorea</strong>: autoritär-prowestlich unter Syngman Rhee</li><li>Beide Regime beanspruchen ganz Korea</li></ul>` },
          { title: 'Kriegsverlauf (1950–1953)', content: `<strong>25. Juni 1950:</strong> Nordkorea überfällt Südkorea. UN-Sicherheitsrat (UdSSR boykottiert) ermächtigt Intervention.<br><br><strong>UN-Truppen</strong> (90 % US-Soldaten) unter General MacArthur. September 1950: Inchon-Landung — Nordkorea fast besiegt. Oktober 1950: China tritt ein — 300.000 Freiwillige.<br><br>Frontlinie pendelt um den 38. Breitengrad. MacArthur fordert Atombomben gegen China — Truman entlässt ihn.<br><br><strong>Waffenstillstand 27. Juli 1953</strong>: Grenze fast unverändert. ~3 Millionen Tote, Korea bleibt geteilt bis heute.` },
          { title: 'Bedeutung des Koreakriegs', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li><strong>Militarisierung des Kalten Krieges:</strong> US-Verteidigungsbudget vervierfachte sich 1950–53</li><li><strong>NSC-68:</strong> US-Strategiedokument 1950 — totale Mobilisierung gegen kommunistische Bedrohung</li><li><strong>McCarthyismus:</strong> Anti-kommunistische Hysterie in den USA</li><li><strong>Chinas Rolle:</strong> Beweis, dass China als Großmacht zählt</li><li><strong>Präzedenzfall:</strong> Stellvertreterkriege als Muster des Kalten Krieges</li></ul>` },
        ])}
      </div>
    `;
  }

  _panelRuestung() {
    return `
      <div class="wim-category hidden" data-wim-cat="ruestung">
        <p class="lz-prose">Ein zentrales Merkmal des Kalten Krieges war der permanente Rüstungswettlauf — in Nuklearwaffen, konventionellen Waffen, Raketentechnik und Weltraum.</p>
        ${renderTable({
          headers: ['Jahr', 'Ereignis', 'Bedeutung'],
          rows: [
            ['1945', 'USA: erste Atombombe',                   'Manhattan-Projekt; Hiroshima/Nagasaki'],
            ['1949', 'UdSSR: erste Atombombe',                 'Ende des US-Atommonopols'],
            ['1952', 'USA: erste Wasserstoffbombe',            '1000× stärker als Hiroshima'],
            ['1953', 'UdSSR: erste Wasserstoffbombe',          'Gleichstand wieder'],
            ['1957', 'UdSSR: Sputnik',                         'Erster Satellit — Schock in USA'],
            ['1957', 'UdSSR: ICBM (Interkontinentalrakete)',   'Nuklearwaffen können USA direkt erreichen'],
            ['1961', 'USA: Minuteman-ICBM',                    'Massenstationierung in Silos'],
            ['1969', 'USA: Mondlandung (Apollo 11)',           'USA gewinnen Space Race'],
            ['1972', 'SALT I (Rüstungskontrolle)',             'Erster Vertrag zur Begrenzung strategischer Waffen'],
          ],
        })}
        ${renderInfobox({ type: '', icon: 'fas fa-skull-crossbones', title: 'MAD — Mutually Assured Destruction', body: `Das nukleare Gleichgewicht des Schreckens: Wenn beide Seiten in einem Erstschlag vernichtet werden können <em>und</em> gleichzeitig sicher sind, dass ein Erstschlag den eigenen Untergang bedeutet (Zweitschlagfähigkeit), ist ein Atomkrieg „irrational" — und unterbleibt.<br><br>Kritik: MAD setzt perfekte Rationalität und Informiertheit voraus. Kuba-Krise 1962 zeigte, wie gefährlich Missverständnisse sein können.` })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}