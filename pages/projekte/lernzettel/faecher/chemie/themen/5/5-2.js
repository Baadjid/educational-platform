// pages/projekte/lernzettel/faecher/chemie/themen/5/5-2.js
// Kapitel 5.2 — Chemische Kinetik
// 5.2.1  Zeitlicher Ablauf chemischer Reaktionen
// 5.2.2  Temperaturabhängigkeit der Reaktionsgeschwindigkeit
// 5.2.3  Mechanismus chemischer Reaktionen
// 5.2.4  Katalysatoren und Katalyse

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderInfobox,
  renderTable,
  renderMerkboxGrid,
  renderFormulaBox,
  renderSubhead,
  renderTags,
  renderAccordion,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../chemie.js';

const TABS = [
  { key: '521', icon: 'fas fa-stopwatch',     label: '5.2.1 Zeitlicher Ablauf'          },
  { key: '522', icon: 'fas fa-thermometer',   label: '5.2.2 Temperaturabhängigkeit'     },
  { key: '523', icon: 'fas fa-project-diagram',label: '5.2.3 Reaktionsmechanismus'      },
  { key: '524', icon: 'fas fa-magic',         label: '5.2.4 Katalysatoren & Katalyse'  },
];

function buildWimHTML(contentFn) {
  const nav = TABS.map((t, i) => `
    <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}" role="tab">
      <i class="${t.icon}"></i><span>${t.label}</span>
    </button>`).join('');
  const panels = TABS.map((t, i) => `
    <div class="wim-category${i === 0 ? ' active' : ' hidden'}" data-wim-cat="${t.key}" role="tabpanel">
      ${contentFn(t.key)}
    </div>`).join('');
  return `<nav class="wim-tabs" role="tablist" id="tabs52">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs52');
  if (!nav) return;
  const tabs = nav.querySelectorAll('.wim-tab[data-wim]');
  if (!tabs.length) return;
  const panels = [];
  let el = nav.nextElementSibling;
  while (el) { if (el.classList.contains('wim-category')) panels.push(el); el = el.nextElementSibling; }
  const slider = document.createElement('span');
  slider.className = 'wim-tab-slider';
  nav.appendChild(slider);
  function setSlider(tab) {
    slider.style.width = `${tab.getBoundingClientRect().width}px`;
    slider.style.transform = `translateX(${tab.offsetLeft}px)`;
  }
  setTimeout(() => setSlider(nav.querySelector('.wim-tab.active') || tabs[0]), 60);
  window.addEventListener('resize', () => { const a = nav.querySelector('.wim-tab.active'); if (a) setSlider(a); });
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      tabs.forEach(b => b.classList.remove('active'));
      this.classList.add('active'); setSlider(this);
      this.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      const key = this.dataset.wim;
      panels.forEach(p => { p.classList.toggle('active', p.dataset.wimCat === key); p.classList.toggle('hidden', p.dataset.wimCat !== key); });
    });
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); (tabs[i + 1] || tabs[0]).click(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); (tabs[i - 1] || tabs[tabs.length - 1]).click(); }
    });
  });
}

export default class Chemie_5_2 {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['sub.css', 'pages/projekte/lernzettel/styles/sub.css'],
      ['wim.css',        'shared/styles/components/wim.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });
    const el = document.createElement('div');
    el.className = 'page page-chemie page-chemie-sub';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() { return `
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-inner">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-breadcrumb">
          <button data-link="${BASE}" class="lz-bread-link">Chemie</button>
          <i class="fas fa-chevron-right"></i><span>Kapitel 5</span>
          <i class="fas fa-chevron-right"></i><span>5.2</span>
        </div>
        <h1 class="lz-sub-title">Chemische Kinetik<br><em>Reaktionsgeschwindigkeit und Mechanismen</em></h1>
        <p class="lz-sub-desc">
          Reaktionsgeschwindigkeit · Konzentrationsabhängigkeit · Arrhenius-Gleichung ·
          Reaktionsmechanismen · Homogene und heterogene Katalyse
        </p>
        ${renderTags(['Kap. 5.2', 'Kinetik', 'Reaktionsgeschwindigkeit', 'Arrhenius', 'Katalyse', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '521') return this._ablauf();
          if (k === '522') return this._temperatur();
          if (k === '523') return this._mechanismus();
          if (k === '524') return this._katalyse();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '5.1 Chemische Thermodynamik',    link: `${BASE}/themen/5/5-1` },
          next: { label: '5.3 Elektrochemische Prozesse',  link: `${BASE}/themen/5/5-3` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.2.1 — Zeitlicher Ablauf chemischer Reaktionen
  // ══════════════════════════════════════════════════════════
  _ablauf() { return `
    ${renderSubhead('5.2.1 — Zeitlicher Ablauf chemischer Reaktionen')}

    <h2 class="lz-h2">Reaktionsgeschwindigkeit</h2>
    <p class="lz-prose">
      Die <strong>Reaktionsgeschwindigkeit v</strong> gibt an, wie schnell sich
      die Konzentration eines Reaktionsteilnehmers mit der Zeit ändert.
      Sie ist eine der zentralen Größen der Kinetik und bestimmt,
      wie schnell eine Reaktion praktisch abläuft — unabhängig davon,
      ob sie thermodynamisch begünstigt ist (ΔG < 0).
    </p>

    ${renderFormulaBox({
      label:   'Mittlere Reaktionsgeschwindigkeit',
      formula: 'v̄ = −Δc(Edukt)/Δt = +Δc(Produkt)/Δt',
      desc:    'v̄ [mol/(L·s)] · Δc: Konzentrationsänderung [mol/L] · Δt: Zeitintervall [s] · Vorzeichen: Edukt nimmt ab (−), Produkt nimmt zu (+) · Normiert auf stöchiometrischen Koeffizienten: v = (1/ν)·dc/dt',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Einflussfaktoren auf die Reaktionsgeschwindigkeit</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-flask',
        title: 'Konzentration der Reaktanden',
        text: `Höhere Konzentration → mehr Teilchen pro Volumen →
               häufigere Zusammenstöße → schnellere Reaktion.
               Quantitativ durch das Geschwindigkeitsgesetz erfasst.
               Gilt für homogene Reaktionen (alle Partner in gleicher Phase).`,
      },
      {
        icon: 'fas fa-thermometer-half',
        title: 'Temperatur',
        text: `Temperaturerhöhung beschleunigt fast alle Reaktionen stark.
               RGT-Regel (Faustformel): T+10°C → v·2–4 (Van't Hoff-Regel).
               Genauer: Arrhenius-Gleichung (→ Tab 5.2.2).
               Ursache: Mehr Teilchen überwinden die Aktivierungsenergie E_A.`,
      },
      {
        icon: 'fas fa-cut',
        title: 'Zerteilungsgrad / Oberfläche',
        text: `Für heterogene Reaktionen (Feststoff + Gas/Flüssigkeit):
               größere Oberfläche → mehr Kontaktfläche → schnellere Reaktion.
               Staubexplosionen: Kohle-, Mehl-, Zuckerpulver in Luft explodiert,
               weil Oberfläche enorm groß. Katalysatoren: feine Verteilung wichtig.`,
      },
      {
        icon: 'fas fa-magic',
        title: 'Katalysator',
        text: `Senkt die Aktivierungsenergie E_A durch einen alternativen
               Reaktionsweg → dramatische Beschleunigung.
               Verbraucht sich selbst nicht (wird regeneriert).
               Beeinflusst nicht das thermodynamische Gleichgewicht (ΔG, K_c),
               aber die Zeit bis zum Erreichen des Gleichgewichts.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Das Geschwindigkeitsgesetz — Reaktionsordnung</h3>
    <p class="lz-prose">
      Das <strong>Geschwindigkeitsgesetz</strong> beschreibt quantitativ,
      wie die Reaktionsgeschwindigkeit von den Konzentrationen der Edukte abhängt.
      Es muss experimentell bestimmt werden — es kann <em>nicht</em>
      aus der stöchiometrischen Gleichung abgelesen werden
      (außer für Elementarreaktionen).
    </p>

    ${renderFormulaBox({
      label:   'Allgemeines Geschwindigkeitsgesetz',
      formula: 'v = k · c(A)^m · c(B)^n · …',
      desc:    'k: Geschwindigkeitskonstante (T-abhängig, konzentrationsunabhängig) · m, n: partielle Reaktionsordnungen bezüglich A, B · Gesamtordnung = m + n + … · Einheit von k hängt von Gesamtordnung ab: 0. Ord.: mol/(L·s) · 1. Ord.: 1/s · 2. Ord.: L/(mol·s)',
    })}

    ${renderTable({
      headers: ['Ordnung', 'Geschwindigkeitsgesetz', 'Einheit k', 'Konzentr.-Zeit-Gesetz', 'Halbwertszeit t½'],
      rows: [
        ['0. Ordnung', 'v = k', 'mol/(L·s)', 'c(t) = c₀ − k·t (linear)', 't½ = c₀/(2k) (abhängig von c₀!)'],
        ['1. Ordnung', 'v = k·c(A)', '1/s (s⁻¹)', 'c(t) = c₀·e^(−kt) (exponentiell)', 't½ = ln2/k = 0,693/k (konstant, unabhängig von c₀!)'],
        ['2. Ordnung (ein Edukt)', 'v = k·c(A)²', 'L/(mol·s)', '1/c(t) = 1/c₀ + k·t (linear in 1/c)', 't½ = 1/(k·c₀) (abhängig von c₀!)'],
        ['2. Ordnung (zwei Edukte)', 'v = k·c(A)·c(B)', 'L/(mol·s)', 'Komplexer Ausdruck; Pseudo-1.-Ordnung bei c(B)>>c(A)', '—'],
      ],
      highlight: [1],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Pseudo-Reaktionsordnung — vereinfachte Bestimmung',
      body: `Wenn c(B) ≫ c(A), bleibt c(B) während der Reaktion praktisch konstant.
             Man definiert k' = k·c(B)_0 und erhält:<br>
             v ≈ k'·c(A) → Pseudo-erster-Ordnung-Gesetz<br><br>
             Dies vereinfacht die kinetische Analyse erheblich.
             Durch Variation von c(B) (bei festem c(A)) kann k'
             bestimmt werden, und durch Variation von c(A) (bei festem c(B))
             die Ordnung bezüglich A.
             <strong>Methode der Anfangsgeschwindigkeiten</strong>: v₀ bei verschiedenen
             c₀ messen → Verhältnis gibt Ordnung.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Bestimmung der Reaktionsordnung — experimentelle Methoden</h3>

    ${renderTable({
      headers: ['Methode', 'Vorgehensweise', 'Auswertung'],
      rows: [
        ['Methode der Anfangsgeschwindigkeiten',
         'v₀ bei verschiedenen c₀ messen (alle anderen Bedingungen konstant)',
         'v₀₂/v₀₁ = (c₀₂/c₀₁)^m → m aus doppelt-logarithmischem Auftrag'],
        ['Integriertes Geschwindigkeitsgesetz',
         'c(t)-Daten messen; verschiedene Auftragungen testen',
         '0. Ord.: c vs. t linear · 1. Ord.: ln(c) vs. t linear (Steigung = −k) · 2. Ord.: 1/c vs. t linear'],
        ['Halbwertszeit-Methode',
         't½ bei verschiedenen c₀ bestimmen',
         'Wenn t½ konstant: 1. Ordnung · Wenn t½ ∝ 1/c₀: 2. Ordnung · Wenn t½ ∝ c₀: 0. Ordnung'],
        ['Isolation-Methode',
         'Ein Edukt weit im Überschuss → Pseudo-Ordnung', 'Ordnung bezüglich des Unterschussreagenz direkt bestimmbar'],
      ],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.2.2 — Temperaturabhängigkeit der Reaktionsgeschwindigkeit
  // ══════════════════════════════════════════════════════════
  _temperatur() { return `
    ${renderSubhead('5.2.2 — Temperaturabhängigkeit der Reaktionsgeschwindigkeit')}

    <h3 class="lz-h3">Kollisionstheorie und Aktivierungsenergie</h3>
    <p class="lz-prose">
      Warum erhöht Temperatur die Reaktionsgeschwindigkeit so stark?
      Die <strong>Kollisionstheorie</strong> liefert die molekulare Erklärung:
      Reaktionen erfordern Stöße zwischen Reaktanden — aber nicht jeder
      Stoß führt zur Reaktion. Notwendige Bedingungen:
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-random',
        title: '① Stoß muss stattfinden',
        text: `Reaktionsteilnehmer müssen zusammenstoßen.
               Stoßhäufigkeit Z ∝ c(A)·c(B)·√T (aus kinetischer Gastheorie).
               Höhere Konzentration und höhere Temperatur → mehr Stöße pro Zeit.`,
      },
      {
        icon: 'fas fa-bolt',
        title: '② Mindestenergie — Aktivierungsenergie E_A',
        text: `Beim Stoß muss mindestens die Aktivierungsenergie E_A vorhanden sein.
               E_A ist die Energieschwelle, die Reaktanten überwinden müssen,
               um den Übergangszustand (aktivierten Komplex) zu bilden.
               Nur der Bruchteil f = e^(−E_A/RT) der Stöße hat genug Energie.`,
      },
      {
        icon: 'fas fa-compass',
        title: '③ Sterischer Faktor — richtige Orientierung',
        text: `Die Moleküle müssen in der richtigen geometrischen Orientierung
               zusammenstoßen (sterischer Faktor p < 1).
               Für einfache Atome: p ≈ 1 · Für komplexe Moleküle: p << 1
               (nur bestimmte Seite des Moleküls reaktiv).`,
      },
    ])}

    ${renderFormulaBox({
      label:   'Arrhenius-Gleichung',
      formula: 'k = A · e^(−E_A / (R · T))',
      desc:    'k: Geschwindigkeitskonstante · A: präexponentieller Faktor (Stoßfrequenzfaktor, Einheit wie k) · E_A: Aktivierungsenergie [J/mol] · R = 8,314 J/(mol·K) · T: absolute Temperatur [K] · e^(−E_A/RT): Boltzmann-Faktor (Anteil der Moleküle mit genügend Energie)',
    })}

    ${renderFormulaBox({
      label:   'Linearisierte Arrhenius-Gleichung (für Grafik)',
      formula: 'ln k = ln A − E_A / (R · T) &nbsp; → &nbsp; Auftrag: ln k vs. 1/T ergibt Gerade',
      desc:    'Steigung = −E_A / R → E_A = −Steigung · R · y-Achsenabschnitt = ln A · Graphische oder rechnerische Bestimmung von E_A und A',
    })}

    ${renderFormulaBox({
      label:   'Arrhenius: Geschwindigkeitskonstanten bei zwei Temperaturen',
      formula: 'ln(k₂/k₁) = (E_A / R) · (1/T₁ − 1/T₂)',
      desc:    'Ermöglicht Berechnung von E_A aus zwei k-Werten bei T₁ und T₂ (ohne grafische Auswertung)',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Maxwell-Boltzmann-Energieverteilung</h3>
    <p class="lz-prose">
      Nicht alle Moleküle einer Gasprobe haben dieselbe kinetische Energie.
      Die <strong>Maxwell-Boltzmann-Verteilung</strong> beschreibt, wie die
      Energie (und Geschwindigkeit) auf die Moleküle verteilt ist.
    </p>

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-chart-area', title: 'Maxwell-Boltzmann-Verteilung — Kernaussagen',
      body: `<strong>Kurvenform:</strong> Asymmetrische Kurve mit Maximum beim wahrscheinlichsten Wert.
             Langer Ausläufer zu hohen Energien.<br><br>
             <strong>Effekt der Temperaturerhöhung:</strong><br>
             ① Maximum verschiebt sich zu höheren Energien.<br>
             ② Kurve wird breiter und flacher (Fläche bleibt konstant = 100%).<br>
             ③ Der Anteil der Moleküle mit E > E_A nimmt stark zu —
             besonders wenn E_A >> kT.<br><br>
             <strong>Warum so starke Reaktionsbeschleunigung?</strong><br>
             Bei T-Erhöhung um 10°C steigt der Anteil mit E > E_A typisch um Faktor 2–4,
             obwohl T absolut kaum steigt. Der Boltzmann-Faktor reagiert exponentiell auf T.`,
    })}

    ${renderTable({
      headers: ['E_A [kJ/mol]', 'k(300 K)/k(290 K)', 'Bedeutung', 'Beispiel'],
      rows: [
        ['20',  '1,3', 'Geringe Beschleunigung (RGT-Effekt gering)', 'Diffusionskontrollierte Reaktionen'],
        ['50',  '1,8', 'Moderate Beschleunigung', 'Viele Säure-Base-Reaktionen'],
        ['100', '3,1', 'Starke Beschleunigung (≈ RGT-Regel)', 'Typische organische Reaktionen'],
        ['150', '5,4', 'Sehr starke Beschleunigung', 'Radikalreaktionen, C–C-Spaltungen'],
        ['200', '9,4', 'Extrem starke Temperaturabhängigkeit', 'Pyrolysen, Crackreaktionen'],
      ],
      highlight: [2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">RGT-Regel — Faustregel und Grenzen</h3>

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'RGT-Regel (Reaktionsgeschwindigkeit-Temperatur-Regel)',
      body: `<strong>Faustregel (Van't Hoff-Regel):</strong>
             Pro 10°C Temperaturerhöhung verdoppelt bis verdreifacht sich
             die Reaktionsgeschwindigkeit (Faktor 2–4).<br><br>
             <strong>Herleitung:</strong> Aus der Arrhenius-Gleichung mit typischem
             E_A ≈ 50–100 kJ/mol und T ≈ 300 K ergibt sich k₂/k₁ ≈ 2–4.<br><br>
             <strong>Grenzen:</strong><br>
             ① Gilt nur für den Bereich 0–40°C biologischer Reaktionen genau.<br>
             ② Bei sehr hoher E_A und hoher T gilt ein anderer Faktor.<br>
             ③ Gilt nicht für diffusionskontrollierte Reaktionen (v unabhängig von E_A).<br>
             ④ Enzymkatalysierte Reaktionen: über ~40°C Denaturierung → v sinkt trotz T-Erhöhung!`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.2.3 — Mechanismus chemischer Reaktionen
  // ══════════════════════════════════════════════════════════
  _mechanismus() { return `
    ${renderSubhead('5.2.3 — Mechanismus chemischer Reaktionen')}

    <h3 class="lz-h3">Elementarreaktionen und Reaktionsmechanismen</h3>
    <p class="lz-prose">
      Die meisten chemischen Reaktionen laufen nicht in einem einzigen Schritt ab,
      sondern über mehrere <strong>Elementarreaktionen</strong> (Elementarschritte).
      Die Gesamtheit dieser Schritte ist der <strong>Reaktionsmechanismus</strong>.
      Jeder Elementarschritt beschreibt den tatsächlichen molekularen Vorgang
      auf Teilchenebene.
    </p>

    ${renderTable({
      headers: ['Begriff', 'Definition', 'Besonderheit'],
      rows: [
        ['Elementarreaktion', 'Ein einziger molekularer Schritt; direkte Übertragung ohne Zwischenstufe', 'Geschwindigkeitsgesetz direkt aus Stöchiometrie ablesbar (Ausnahme!)'],
        ['Reaktionsmechanismus', 'Sequenz aller Elementarschritte von Edukten zu Produkten', 'Beschreibt den molekularen Weg; enthält alle Intermediate'],
        ['Intermediat (Zwischenstufe)', 'Kurzlebige Spezies, die im Verlauf gebildet und verbraucht wird', 'Erscheint nicht in der Gesamtgleichung; muss bei experimenteller Bestätigung nachgewiesen werden'],
        ['Übergangszustand (TS)', 'Energiereichster Punkt entlang der Reaktionskoordinate', 'Nicht isolierbar; Lebenszeit ~10⁻¹³ s; Sattelpunkt auf Energiefläche'],
        ['Geschwindigkeitsbestimmender Schritt', 'Der langsamste Elementarschritt; limitiert die Gesamtgeschwindigkeit', 'Bestimmt das Geschwindigkeitsgesetz der Gesamtreaktion'],
        ['Monomolekular (unimolekular)', 'Elementarschritt mit nur einem Reaktand', 'Kinetisch 1. Ordnung; z.B. Zerfall, Isomerisierung'],
        ['Bimolekular', 'Elementarschritt mit zwei Reaktanden (Stoß)', 'Kinetisch 2. Ordnung (oder Pseudo-1. Ord.)'],
        ['Termolekular', 'Elementarschritt mit drei Reaktanden (Dreifachstoß)', 'Sehr selten (statistisch unwahrscheinlich)'],
      ],
      highlight: [4, 6],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Energieprofil einer Reaktion</h3>
    <p class="lz-prose">
      Das <strong>Energieprofil</strong> (Reaktionskoordinatendiagramm) zeigt
      die Enthalpie entlang des Reaktionsweges. Es veranschaulicht Aktivierungsenergie,
      Reaktionsenthalpie und das Vorliegen von Intermediaten.
    </p>

    ${renderTable({
      headers: ['Größe im Energieprofil', 'Bedeutung', 'Zusammenhang'],
      rows: [
        ['Aktivierungsenergie E_A (Hin)', 'Energiebarriere für die Hinreaktion; Höhe des Übergangs-zustands über den Edukten', 'Bestimmt k_hin; beeinflusst durch Katalysator'],
        ['Aktivierungsenergie E_A (Rück)', 'Energiebarriere für die Rückreaktion', 'E_A(Rück) = E_A(Hin) − ΔH_R'],
        ['Reaktionsenthalpie ΔH_R', 'Höhendifferenz zwischen Edukten und Produkten', 'ΔH_R = E_A(Hin) − E_A(Rück); < 0 exotherm'],
        ['Übergangszustand (Maximum)', 'Energiereichster Punkt; instabil; nicht isolierbar', 'Entspricht dem aktivierten Komplex [A···B]‡'],
        ['Intermediat (Tal zwischen zwei Maxima)', 'Lokales Energieminimum; kurzlebig aber isolierbar', 'Nur bei mehrstufigen Mechanismen; separates Minimum'],
      ],
      highlight: [0, 4],
    })}

    ${renderAccordion([
      {
        title: 'Beispiel: Ozonabbau in der Stratosphäre — zweistufiger Mechanismus',
        content: `<p class="lz-prose"><strong>Gesamtreaktion:</strong> 2 O₃(g) → 3 O₂(g)</p>
                  <p class="lz-prose"><strong>Mechanismus (Chapman-Zyklus, vereinfacht):</strong><br>
                  Schritt 1: O₃ + UV → O₂ + O· (Photolyse; monomolekular, E_A=UV-Photon)<br>
                  Schritt 2: O· + O₃ → 2 O₂ (bimolekular; geschwindigkeitsbestimmend)<br><br>
                  Intermediat: O· (reaktives Sauerstoffatom-Radikal)<br>
                  Geschwindigkeitsgesetz: v = k·c(O·)·c(O₃) → nach Elimination von O·: v = k_eff · c(O₃)²<br><br>
                  <strong>Anthropogener Einfluss — Cl-Katalyse:</strong><br>
                  Cl· + O₃ → ClO· + O₂ (schnell)<br>
                  ClO· + O· → Cl· + O₂ (schnell)<br>
                  Netto: O₃ + O· → 2 O₂; Cl wird regeneriert → Katalysator!<br>
                  1 Cl-Atom kann 100 000 O₃-Moleküle abbauen.</p>`,
      },
      {
        title: 'Beispiel: H₂ + I₂ → 2 HI — ein Mechanismus mit Kontroverse',
        content: `<p class="lz-prose"><strong>Gesamtreaktion:</strong> H₂(g) + I₂(g) → 2 HI(g)</p>
                  <p class="lz-prose"><strong>Beobachtetes Geschwindigkeitsgesetz:</strong> v = k·c(H₂)·c(I₂)<br>
                  → suggeriert bimolekularen Elementarschritt: H₂ + I₂ → 2 HI<br>
                  → Dies ist <em>nicht</em> der tatsächliche Mechanismus!</p>
                  <p class="lz-prose"><strong>Tatsächlicher Mechanismus (Sullivan, 1967):</strong><br>
                  Schritt 1 (schnell, GG): I₂ ⇌ 2 I· (K₁)<br>
                  Schritt 2 (langsam): H₂ + 2 I· → 2 HI (k₂, geschwindigkeitsbestimmend)<br><br>
                  v = k₂·c(H₂)·c(I·)²<br>
                  Da Schritt 1 im GG: c(I·)² = K₁·c(I₂)<br>
                  → v = k₂·K₁·c(H₂)·c(I₂) = k_eff·c(H₂)·c(I₂) ✓<br><br>
                  <em>Das beobachtete Geschwindigkeitsgesetz stimmt mit dem Mechanismus überein,
                  sagt aber nichts darüber aus, ob der Mechanismus wirklich ein einziger Schritt ist!</em></p>`,
      },
      {
        title: 'Stationäre-Zustand-Näherung (Steady-State-Approximation)',
        content: `<p class="lz-prose">Für kurzlebige Intermediate I gilt näherungsweise:
                  d[I]/dt ≈ 0 (Bildungsrate = Abbaurate).</p>
                  <p class="lz-prose"><strong>Methode:</strong><br>
                  1. Alle Bildungs- und Abbauschritte für I aufschreiben.<br>
                  2. Bildungsrate = Abbaurate setzen → c(I) ausdrücken.<br>
                  3. In das Geschwindigkeitsgesetz des langsamen Schritts einsetzen.<br>
                  4. Resultat: effektives Geschwindigkeitsgesetz in Termen von stabilen Spezies.</p>
                  <p class="lz-prose"><strong>Beispiel: Br₂ + H₂ → 2 HBr (Kettenmechanismus):</strong><br>
                  Initiation: Br₂ → 2 Br·<br>
                  Propagation: Br· + H₂ → HBr + H·; H· + Br₂ → HBr + Br·<br>
                  Termination: 2 Br· → Br₂<br>
                  → Komplexes Geschwindigkeitsgesetz mit c(HBr) im Nenner (Produkthemmung).</p>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.2.4 — Katalysatoren und Katalyse
  // ══════════════════════════════════════════════════════════
  _katalyse() { return `
    ${renderSubhead('5.2.4 — Katalysatoren und Katalyse')}

    <h3 class="lz-h3">Definition und Wirkprinzip</h3>
    <p class="lz-prose">
      Ein <strong>Katalysator</strong> ist ein Stoff, der die Reaktionsgeschwindigkeit
      erhöht, ohne selbst dauerhaft verbraucht zu werden — er wird am Ende
      der Reaktion in seiner ursprünglichen chemischen Form regeneriert.
      Der Katalysator wirkt, indem er einen <strong>alternativen Reaktionsweg</strong>
      mit niedrigerer Aktivierungsenergie E_A bereitstellt.
    </p>

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-info-circle', title: 'Was ein Katalysator kann und was nicht',
      body: `<strong>Kann:</strong><br>
             ✓ Aktivierungsenergie E_A herabsetzen → Reaktion schneller<br>
             ✓ Beide Richtungen (Hin- und Rückreaktion) gleich stark beschleunigen<br>
             ✓ Reaktionsweg und -mechanismus verändern<br>
             ✓ Selektiv nur bestimmte Produkte bevorzugen (Selektivitätskatalyse)<br><br>
             <strong>Kann nicht:</strong><br>
             ✗ Gleichgewichtskonstante K_c verändern<br>
             ✗ ΔG oder ΔH der Reaktion verändern<br>
             ✗ Eine thermodynamisch verbotene Reaktion (ΔG > 0) erzwingen<br>
             ✗ Mehr Produkt liefern als ohne Katalysator (nur schneller dorthin)`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Homogene Katalyse</h3>
    <p class="lz-prose">
      Bei der <strong>homogenen Katalyse</strong> befinden sich Reaktanden und
      Katalysator in derselben Phase (meistens flüssig).
    </p>

    ${renderTable({
      headers: ['Reaktion', 'Katalysator', 'Mechanismus (vereinfacht)', 'Bedeutung'],
      rows: [
        ['Esterbildung: RCOOH + R\'OH ⇌ RCOOR\' + H₂O',
         'H⁺ (Säurekatalyse)',
         'H⁺ protoniert C=O → aktivierter Komplex leichter angreifbar durch R\'OH-Sauerstoff',
         'Wichtigste Laborsynthese; Fischer-Veresterung'],
        ['Saccharose-Hydrolyse → Glucose + Fructose',
         'H⁺ oder Invertase (Enzym)',
         'H⁺ protoniert glycosidischen O → Oxocarbenium-Ion → Angriff von H₂O',
         'Industriell; Enzymatisch viel selektiver'],
        ['Oxidation von I⁻ durch H₂O₂: 2I⁻ + H₂O₂ → I₂ + 2OH⁻',
         'Fe³⁺ oder Molybdat',
         'Fe³⁺ + I⁻ → Fe²⁺ + ½I₂; Fe²⁺ + ½H₂O₂ → Fe³⁺ + OH⁻ (Fenton-Reaktion)',
         'Demonstration Peroxidkatalyse; Fenton-Reagenz in Wasserbehandlung'],
        ['Ozonabbau: O₃ → O₂ (in Lösung)',
         'Br⁻, Cl⁻ (Halogenide)',
         'X⁻ + O₃ → XO⁻ + O₂; XO⁻ + O₃ → X⁻ + 2O₂',
         'Modellreaktion Ozonchemie'],
      ],
      highlight: [0],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Heterogene Katalyse</h3>
    <p class="lz-prose">
      Bei der <strong>heterogenen Katalyse</strong> befinden sich Reaktanden
      und Katalysator in verschiedenen Phasen — meist ist der Katalysator
      ein Feststoff und die Reaktanden sind gasförmig oder flüssig.
      Die Reaktion findet an der <strong>Oberfläche</strong> des Katalysators statt.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-list-ol',
        title: 'Schritte der heterogenen Katalyse (Langmuir-Hinshelwood)',
        text: `① Adsorption: Reaktandmoleküle adsorbieren an aktiven Zentren der Oberfläche
               ② Oberflächendiffusion: adsorbierte Spezies diffundieren auf der Oberfläche
               ③ Reaktion: adsorbierte Spezies reagieren miteinander
               ④ Desorption: Produkte desorbieren von der Oberfläche
               ⑤ Abtransport: Produkte diffundieren weg`,
      },
      {
        icon: 'fas fa-expand',
        title: 'Wichtigkeit der Oberfläche',
        text: `Aktive Zentren (active sites) auf der Katalysatoroberfläche.
               Maximierung der Oberfläche → nanostrukturierte Materialien.
               Trägerkatalysatoren: Aktives Metall (Pt, Pd, Ni) auf porösen
               Trägern (Al₂O₃, SiO₂, Zeolite) dispergiert.
               1 g Pt-Katalysator: Oberfläche >100 m²!`,
      },
      {
        icon: 'fas fa-times-circle',
        title: 'Katalysatorgifte und Promotoren',
        text: `Katalysatorgift: Stoff, der aktive Zentren blockiert → Deaktivierung.
               Schwefel (H₂S, SO₂) vergiftet fast alle Metallkatalysatoren.
               Pb vergiftete Autokatalysatoren → bleifrei nötig.
               Promotor: Stoff, der Katalysatoraktivität/Selektivität steigert
               (z.B. K₂O in Haber-Bosch als Promotor des Fe-Katalysators).`,
      },
    ])}

    ${renderTable({
      headers: ['Industrieller Prozess', 'Katalysator', 'Reaktion', 'Bedingungen', 'Bedeutung'],
      rows: [
        ['Haber-Bosch (NH₃)',    'Fe + K₂O/Al₂O₃', 'N₂ + 3H₂ → 2NH₃',              '400–500°C, 200–400 bar', '~150 Mio. t/Jahr; Düngermittelgrundlage; ~2% Weltenergieverbrauch'],
        ['Kontakt-Verfahren (H₂SO₄)','V₂O₅/K₂S₂O₇', '2SO₂ + O₂ → 2SO₃ (→H₂SO₄)', '400–600°C',             'Wichtigstes Industriechemikalie weltweit'],
        ['Cracken von Erdöl',    'Zeolithe (Säure)', 'Lange Alkane → kurze + Alkene', '500–600°C',             'Benzin aus schwerem Heizöl; FCC-Prozess'],
        ['Hydrierung (Margarine)','Ni oder Pd',      'Alken + H₂ → Alkan (C=C→C–C)', '150–200°C, 5–30 bar',  'Fetthärtung; Hydrierung von Lebensmittelölen'],
        ['Kfz-Katalysator',      'Pt, Pd, Rh auf Al₂O₃','CO+HC+NOₓ → CO₂+H₂O+N₂','~250–800°C (Betriebstemp.)','NOₓ-Reduktion, CO-Oxidation, HC-Verbrennung'],
        ['Methanolsynthese',     'Cu/ZnO/Al₂O₃',    'CO + 2H₂ → CH₃OH',             '250°C, 50–100 bar',      '~100 Mio. t/Jahr; Chemierohstoff, Kraftstoff'],
        ['Deacon-Prozess',       'CuCl₂',            '4HCl + O₂ → 2Cl₂ + 2H₂O',     '400–450°C',              'Cl₂-Rückgewinnung; greens Chemistry'],
      ],
      highlight: [0, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Enzymkatalyse — biologische Katalysatoren</h3>
    <p class="lz-prose">
      Enzyme sind die effizientesten Katalysatoren, die bekannt sind —
      Beschleunigungsfaktoren von 10⁶ bis 10¹⁷ gegenüber der unkatalysierten Reaktion.
      Sie sind hochspezialisierte Proteine mit aktivem Zentrum.
    </p>

    ${renderTable({
      headers: ['Aspekt', 'Enzymkatalyse', 'Heterogene Katalyse (Vergleich)'],
      rows: [
        ['Substratspezifität', 'Extrem hoch — oft nur ein Substrat (Schlüssel-Schloss/induced fit)', 'Meist weniger spezifisch'],
        ['Bedingungen',         'Mild: 37°C, pH 7, wässrig',                                          'Oft 200–600°C, hoher Druck'],
        ['Selektivität',        'Fast immer 100% — nur ein Produkt (Stereospezifität möglich)',        'Oft Gemisch; Selektivität durch Bedingungen'],
        ['Regulation',         'Allosterie, Cofaktoren, Hemmung (kompetitiv/nicht-kompetitiv)',        'Kaum regelbar'],
        ['Stabilität',         'Denaturierung ab ~50°C; pH-empfindlich',                              'Sehr stabil bei hoher T'],
        ['Turnover-Zahl k_cat','10²–10⁷ Umsätze/Sekunde (Katalase: 4·10⁷/s!)',                       'Vergleichbar oder langsamer'],
      ],
      highlight: [0, 5],
    })}

    ${renderFormulaBox({
      label:   'Michaelis-Menten-Kinetik (Enzymkinetik)',
      formula: 'v = v_max · c(S) / (K_M + c(S))',
      desc:    'v_max: Maximalgeschwindigkeit (bei Substratsättigung) · K_M: Michaelis-Konstante (Substratkonzentration bei v = v_max/2) · c(S): Substratkonzentration · K_M = (k₋₁ + k_cat) / k₁ · kleines K_M = hohe Affinität',
    })}

    ${renderCompare({
      titleA: 'Kompetitive Hemmung',
      titleB: 'Nichtkompetitive Hemmung',
      listA: [
        'Inhibitor bindet reversibel am aktiven Zentrum',
        'Konkurriert mit Substrat um denselben Bindungsort',
        'V_max bleibt gleich; K_M steigt (apparent K_M)',
        'Aufhebbar durch hohe Substratkonzentration',
        'Beispiel: Sulfonamide hemmen Dihydropteroat-Synthase (bakterielle Folsäuresynthese)',
      ],
      listB: [
        'Inhibitor bindet an allosterischem Zentrum (nicht am aktiven Zentrum)',
        'Bindet an freies Enzym und ES-Komplex gleich',
        'K_M bleibt gleich; V_max sinkt',
        'Nicht aufhebbar durch Substraterhöhung',
        'Beispiel: Schwermetalle (Hg²⁺, Pb²⁺) hemmen durch Bindung an SH-Gruppen',
      ],
    })}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung Kinetik',
      body: `<strong>Reaktionsgeschwindigkeit:</strong> v = −Δc/Δt · Geschwindigkeitsgesetz: v = k·[A]^m·[B]^n<br>
             <strong>Ordnungen:</strong> 0. Ord.: c linear · 1. Ord.: ln c linear (t½ = const.) · 2. Ord.: 1/c linear<br>
             <strong>Arrhenius:</strong> k = A·e^(−E_A/RT) · ln k vs. 1/T → Gerade (Steigung: −E_A/R)<br>
             <strong>RGT-Regel:</strong> +10°C → v·2–4 (Faustregel, E_A ≈ 50–100 kJ/mol)<br>
             <strong>Mechanismus:</strong> Elementarschritte → GBS bestimmt Geschwindigkeitsgesetz · Intermediate existieren<br>
             <strong>Katalysator:</strong> Senkt E_A · ändert K_c nicht · wird regeneriert · homo- oder heterogen<br>
             <strong>Enzyme:</strong> Hochspezifisch · Michaelis-Menten · kompetitive/nichtkompetitive Hemmung`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}