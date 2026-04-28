// pages/projekte/lernzettel/faecher/chemie/themen/3/3-1.js
// Kapitel 3.1 — Atombau
// 3.1.1  Historische Entwicklung des Atommodells
// 3.1.2  Das Atommodell nach Bohr und Sommerfeld
// 3.1.3  Das moderne quantenmechanische Atommodell

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
  renderVTimeline,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../chemie.js';

const TABS = [
  { key: '311', icon: 'fas fa-history',       label: '3.1.1 Historische Entwicklung'          },
  { key: '312', icon: 'fas fa-circle-notch',  label: '3.1.2 Bohr und Sommerfeld'              },
  { key: '313', icon: 'fas fa-wave-square',   label: '3.1.3 Quantenmechanisches Modell'       },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs31">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs31');
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
    slider.style.width     = `${tab.getBoundingClientRect().width}px`;
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

export default class Chemie_3_1 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 3</span>
          <i class="fas fa-chevron-right"></i><span>3.1</span>
        </div>
        <h1 class="lz-sub-title">Atombau<br><em>Vom Dalton-Modell zum Quantenmechanischen Atommodell</em></h1>
        <p class="lz-sub-desc">
          Historische Atommodelle · Bohr-Modell · Quantenzahlen ·
          Orbitale · Elektronenkonfiguration · Aufbauprinzip
        </p>
        ${renderTags(['Kap. 3.1', 'Atombau', 'Quantenmechanik', 'Orbitale', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '311') return this._historisch();
          if (k === '312') return this._bohr();
          if (k === '313') return this._qm();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '2.2 Entstehung der Elemente', link: `${BASE}/themen/2/2-2` },
          next: { label: '3.2 Periodensystem',          link: `${BASE}/themen/3/3-2` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 3.1.1 — Historische Entwicklung des Atommodells
  // ══════════════════════════════════════════════════════════
  _historisch() { return `
    ${renderSubhead('3.1.1 — Historische Entwicklung des Atommodells')}

    <h2 class="lz-h2">Die Idee des Atoms — von der Antike bis zur Moderne</h2>
    <p class="lz-prose">
      Die Vorstellung, dass Materie aus unteilbaren Grundbausteinen besteht,
      ist über 2500 Jahre alt. Die Geschichte des Atommodells ist ein
      Paradebeispiel für den naturwissenschaftlichen Erkenntnisgewinn:
      jedes Modell erklärt die bekannten Phänomene besser als sein Vorgänger,
      wird aber durch neue Experimente schließlich erweitert oder ersetzt.
    </p>

    ${renderVTimeline([
      {
        year: '~450 v. Chr. — Demokrit und Leukipp',
        title: 'Philosophisches Atomkonzept',
        text: `Demokrit (griech. <em>atomos</em> = unteilbar) postuliert:
               Alle Materie besteht aus unteilbaren, ewigen, unveränderlichen Teilchen
               im leeren Raum. Unterschiedliche Atome (Form, Größe) erklären
               unterschiedliche Stoffe. Rein philosophisch — keine experimentelle Basis.
               Gegenteil: Aristoteles' Kontinuumstheorie (Materie unendlich teilbar)
               dominiert bis ins 17. Jh.`,
      },
      {
        year: '1803 — John Dalton',
        title: 'Erstes wissenschaftliches Atommodell',
        text: `Dalton formuliert sein Atommodell auf Basis quantitativer Daten
               (Gesetze der Massenerhaltung, konstante und multiple Proportionen):
               ① Alle Materie besteht aus unteilbaren Atomen.
               ② Atome eines Elements sind identisch (Masse, Eigenschaften).
               ③ Atome verschiedener Elemente unterscheiden sich.
               ④ Verbindungen entstehen aus festen Atomzahlverhältnissen.
               ⑤ Bei Reaktionen werden Atome nur neu angeordnet.
               Modellvorstellung: Atome als massive, undurchdringliche Kugeln.
               Schwäche: erklärt keine elektrischen Eigenschaften oder Spektren.`,
      },
      {
        year: '1897 — Joseph John Thomson',
        title: 'Entdeckung des Elektrons — „Rosinenkuchenmodell"',
        text: `Thomson entdeckt das Elektron durch Kathodenstrahlversuche
               (Ablenkung in E- und B-Feldern, Bestimmung e/m = 1,759·10¹¹ C/kg).
               Modell: Das Atom ist eine positiv geladene Kugel, in der Elektronen
               wie Rosinen im Teig eingebettet sind.
               Atomradius ~10⁻¹⁰ m; Elektronen können herausgelöst werden
               (erklärt Ionisierung und Leitfähigkeit).
               Schwäche: erklärt nicht die Streuung α-Teilchen.`,
      },
      {
        year: '1909–1911 — Ernest Rutherford',
        title: 'Streuexperiment — Entdeckung des Atomkerns',
        text: `Rutherford, Geiger und Marsden beschießen eine dünne Goldfolie mit
               α-Teilchen (⁴He²⁺). Erwartung nach Thomson: kaum Ablenkung.
               Beobachtung: Die meisten Teilchen passieren unabgelenkt,
               aber wenige werden stark (bis >90°) abgelenkt, einige sogar zurückgeworfen.
               Schlussfolgerung: ① Die meiste Masse ist in einem winzigen,
               positiv geladenen Kern konzentriert (d ~ 10⁻¹⁴ m).
               ② Die Elektronen bewegen sich im großen leeren Raum um den Kern.
               ③ Atom ist fast vollständig leer.
               Rutherford-Modell: Planetenmodell (Elektronen auf Kreisbahnen).
               Schwäche: Klassische Physik sagt voraus, dass kreisende Elektronen
               Energie abstrahlen und in den Kern stürzen (t ~ 10⁻¹¹ s). Stabil!`,
      },
      {
        year: '1913 — Niels Bohr',
        title: 'Bohr-Modell — quantisierte Bahnen',
        text: `Bohr rettet das Rutherford-Modell durch Quantisierungspostulate
               (→ Tab 3.1.2 für Details). Erklärt das H-Spektrum exakt.
               Schwächen: Versagt bei Mehrelektronenatomen; erklärt keine
               Feinstruktur, keine Intensitäten.`,
      },
      {
        year: '1916 — Arnold Sommerfeld',
        title: 'Elliptische Bahnen — Erweiterung des Bohr-Modells',
        text: `Sommerfeld erweitert Bohr um elliptische Bahnen → neue Quantenzahl l
               (Nebenquantenzahl). Erklärt die Feinstruktur des H-Spektrums.
               Relativistische Korrekturen für innere Elektronen.
               Immer noch klassische Bahnen — kein Wellencharakter.`,
      },
      {
        year: '1924–1926 — de Broglie, Heisenberg, Schrödinger',
        title: 'Quantenmechanisches Atommodell',
        text: `de Broglie (1924): Elektronen haben Wellencharakter (λ = h/mv).
               Heisenberg (1925): Matrizenmechanik; Unschärferelation
               (Δx · Δp ≥ ħ/2).
               Schrödinger (1926): Wellengleichung → Lösungen = Orbitale
               (Aufenthaltswahrscheinlichkeiten, keine festen Bahnen).
               Pauli (1925): Ausschließungsprinzip.
               → Heutiges Standardmodell des Atoms.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Das Rutherford-Streuexperiment — Details</h3>

    ${renderTable({
      headers: ['Aspekt', 'Erwartung (Thomson-Modell)', 'Beobachtung (Experiment)', 'Schlussfolgerung'],
      rows: [
        ['Durchgang', 'Fast alle Teilchen leicht abgelenkt (homogene Ladungsverteilung)', 'Die meisten (~99,99 %) passieren nahezu unabgelenkt', 'Atom ist fast leer — Elektronen im großen Raum'],
        ['Große Ablenkung', 'Sehr selten, maximal ~1°', 'Wenige Teilchen um >10°, 1 von 8000 um >90°', 'Es gibt eine kompakte, stark positiv geladene Masse im Atom'],
        ['Rückstreuung', 'Praktisch unmöglich', '1 von ~20 000 um ~180°', 'Rutherfords Zitat: „als würde man Artilleriegranaten auf Seidenpapier feuern und sie kämen zurück"'],
      ],
      highlight: [2],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Modellentwicklung als Erkenntnisprozess',
      body: `Die Abfolge Dalton → Thomson → Rutherford → Bohr → QM-Modell ist ein
             Lehrstück der wissenschaftlichen Methode: Jedes Modell war
             für seinen Erkenntnisstand das beste verfügbare.
             Es wurde nicht „widerlegt", sondern durch ein umfassenderes ersetzt,
             das alle alten Phänomene erklärt <em>und</em> neue hinzufügt.<br><br>
             <strong>Praktischer Hinweis:</strong> Im Chemieunterricht werden
             verschiedene Modelle parallel benutzt:
             Kugelmodell (Stöchiometrie), Lewis-Formel (Bindung),
             VSEPR (Geometrie), Orbitalmodell (Spektroskopie, MO-Theorie).
             Das ist kein Widerspruch — es ist der kluge Einsatz des jeweils
             geeignetsten Modells.`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 3.1.2 — Das Atommodell nach Bohr und Sommerfeld
  // ══════════════════════════════════════════════════════════
  _bohr() { return `
    ${renderSubhead('3.1.2 — Das Atommodell nach Bohr und Sommerfeld')}

    <h3 class="lz-h3">Bohrs Postulate (1913)</h3>
    <p class="lz-prose">
      Bohr rettete das Rutherford-Modell durch drei revolutionäre Postulate,
      die klassische Physik bewusst brachen:
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-circle',
        title: '1. Postulat — Stationäre Bahnen',
        text: `Elektronen bewegen sich auf bestimmten, erlaubten Kreisbahnen
               (stationäre Zustände) um den Kern, ohne Energie abzustrahlen.
               Diese Bahnen sind durch eine Quantenbedingung ausgezeichnet:
               der Drehimpuls ist ein ganzzahliges Vielfaches von ħ = h/(2π).
               m·v·r = n·ħ mit n = 1, 2, 3, … (Hauptquantenzahl)`,
      },
      {
        icon: 'fas fa-bolt',
        title: '2. Postulat — Quantensprünge',
        text: `Übergänge zwischen Bahnen erfolgen sprunghaft durch
               Absorption oder Emission eines Photons.
               Die Energie des Photons entspricht genau der Energiedifferenz
               der Bahnen: E_Photon = ΔE = E_höher − E_tiefer = h·ν`,
      },
      {
        icon: 'fas fa-compress-alt',
        title: '3. Postulat — Grundzustand',
        text: `Die innerste Bahn (n = 1) ist der Grundzustand —
               der Zustand niedrigster Energie. Das Elektron kann nicht
               in einen noch energieärmeren Zustand fallen.
               Dies erklärt die Stabilität des Wasserstoffatoms.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Quantitative Formeln des Bohr-Modells</h3>

    ${renderFormulaBox({
      label:   'Bahnradius im Wasserstoffatom',
      formula: 'rₙ = n² · a₀ &nbsp; mit a₀ = 52,9 pm (Bohr-Radius)',
      desc:    'n = Hauptquantenzahl · a₀ = 0,529 Å = 52,9 pm · r₁ = 52,9 pm · r₂ = 212 pm · r₃ = 476 pm',
    })}

    ${renderFormulaBox({
      label:   'Energie der Bohrschen Bahnen (Wasserstoff)',
      formula: 'Eₙ = −13,6 eV / n²  =  −2,18 · 10⁻¹⁸ J / n²',
      desc:    'E₁ = −13,6 eV (Grundzustand) · E₂ = −3,4 eV · E₃ = −1,51 eV · E∞ = 0 (Ionisierungsgrenze) · Vorzeichen negativ: gebundenes Elektron',
    })}

    ${renderFormulaBox({
      label:   'Energie des emittierten/absorbierten Photons',
      formula: 'E_Photon = h · ν = h · c / λ = E_höher − E_tiefer = 13,6 eV · (1/n₁² − 1/n₂²)',
      desc:    'Rydberg-Formel: 1/λ = R_H · (1/n₁² − 1/n₂²) · R_H = 1,097 · 10⁷ m⁻¹ (Rydberg-Konstante)',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Serienspektren des Wasserstoffs</h3>
    <p class="lz-prose">
      Das Wasserstoffspektrum besteht aus diskreten Linienspektren,
      die in <strong>Serien</strong> gruppiert sind — je nach Endzustand
      n₁ des Übergangs:
    </p>

    ${renderTable({
      headers: ['Serie', 'Endniveau n₁', 'Startniveaus n₂', 'Spektralbereich', 'Entdecker', 'Wichtigste Linie'],
      rows: [
        ['Lyman-Serie',   '1', '2, 3, 4, …', 'UV (121–91 nm)',          'Lyman (1906)',   'Lyman-α: n=2→1, λ=121,6 nm'],
        ['Balmer-Serie',  '2', '3, 4, 5, …', 'Sichtbar + nahes UV',     'Balmer (1885)',  'Hα: n=3→2, λ=656,3 nm (rot)'],
        ['Paschen-Serie', '3', '4, 5, 6, …', 'Nahes IR (1875–820 nm)',  'Paschen (1908)', 'Pα: n=4→3, λ=1875 nm'],
        ['Brackett-Serie','4', '5, 6, 7, …', 'IR (2630–1460 nm)',       'Brackett (1922)','—'],
        ['Pfund-Serie',   '5', '6, 7, 8, …', 'IR (7460–2280 nm)',       'Pfund (1924)',   '—'],
      ],
      highlight: [1],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-eye', title: 'Die Balmer-Serie — sichtbares Wasserstoffspektrum',
      body: `Die Balmer-Serie (n₁=2) liegt teilweise im sichtbaren Bereich:<br>
             Hα: n=3→2, λ=656,3 nm → <strong>rot</strong><br>
             Hβ: n=4→2, λ=486,1 nm → <strong>blaugrün</strong><br>
             Hγ: n=5→2, λ=434,0 nm → <strong>blauviolett</strong><br>
             Hδ: n=6→2, λ=410,2 nm → <strong>violett</strong><br><br>
             Diese vier Linien sind im Spektrum sichtbar und bilden die
             charakteristischen Emissionslinien des Wasserstoffs.
             Sie erscheinen z.B. in Gasentladungsröhren und in Sternspektren.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Sommerfelds Erweiterung</h3>
    <p class="lz-prose">
      Sommerfeld (1916) erweiterte das Bohr-Modell um
      <strong>elliptische Bahnen</strong>, um die Feinstruktur
      der Spektrallinien zu erklären (leicht verschiedene Energien
      bei gleicher Hauptquantenzahl, beobachtet durch hochauflösende Spektroskopie).
    </p>

    ${renderTable({
      headers: ['Quantenzahl', 'Symbol', 'Wertebereich', 'Physikalische Bedeutung', 'Eingeführt von'],
      rows: [
        ['Hauptquantenzahl',     'n',  '1, 2, 3, …',                'Hauptenergieniveau; Bahngröße; mittlerer Bahnradius',         'Bohr (1913)'],
        ['Nebenquantenzahl',     'l',  '0, 1, …, n−1',              'Bahnform (Elliptizität); Bahndrehimpuls L = √(l(l+1))·ħ',     'Sommerfeld (1916)'],
        ['Magnetquantenzahl',    'mₗ', '−l, …, 0, …, +l',           'Raumausrichtung der Bahn im Magnetfeld; Lz = mₗ·ħ',           'Sommerfeld (1916)'],
        ['Spinquantenzahl',      'mₛ', '+½ oder −½',                'Eigendrehimpuls des Elektrons; S = ±½·ħ',                     'Uhlenbeck & Goudsmit (1925)'],
      ],
      highlight: [0, 1],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Grenzen des Bohr-Sommerfeld-Modells',
      body: `Das Bohr-Modell erklärt brillant das H-Spektrum — versagt aber bei:<br>
             ① Mehrelektronenatomen (He, Li, …): keine exakten Energieniveaus<br>
             ② Intensitäten der Spektrallinien: kann nicht vorhergesagt werden<br>
             ③ Chem. Bindung: warum bilden Atome Moleküle? Kein Ansatz<br>
             ④ Zeeman-Effekt (anomal): Aufspaltung im Magnetfeld falsch<br>
             ⑤ Heisenbergsche Unschärfe: definierte Bahn ist physikalisch unmöglich<br><br>
             Das Modell ist dennoch nützlich als Einstieg und für
             einfache Abschätzungen (Ionisierungsenergien, Spektrallinien H).`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 3.1.3 — Das moderne quantenmechanische Atommodell
  // ══════════════════════════════════════════════════════════
  _qm() { return `
    ${renderSubhead('3.1.3 — Das moderne quantenmechanische Atommodell')}

    <h3 class="lz-h3">Wellennatur der Elektronen — de Broglie</h3>
    <p class="lz-prose">
      Louis de Broglie postulierte 1924: Wenn Licht sowohl Wellen- als auch
      Teilchennatur hat (Photon), dann sollten auch Materieteilchen
      Welleneigenschaften besitzen.
    </p>

    ${renderFormulaBox({
      label:   'De-Broglie-Wellenlänge',
      formula: 'λ = h / (m · v) = h / p',
      desc:    'λ [m] · h = 6,626·10⁻³⁴ J·s (Planck-Konstante) · m [kg] · v [m/s] · p = m·v [kg·m/s] · Elektron bei 1 kV: λ ≈ 39 pm (Röntgenbereich!)',
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-wave-square', title: 'Heisenbergsche Unschärferelation',
      body: `Werner Heisenberg (1927) zeigte: Es ist prinzipiell unmöglich,
             Ort und Impuls eines Teilchens gleichzeitig beliebig genau zu kennen:<br><br>
             <strong>Δx · Δp ≥ ħ/2 = h/(4π)</strong><br><br>
             Dies ist keine technische Einschränkung — es ist eine
             fundamentale Eigenschaft der Natur. Je genauer man den Ort
             eines Elektrons misst (kleines Δx), desto unschärfer wird
             sein Impuls (großes Δp) und damit seine Energie.<br><br>
             Konsequenz: Eine definierte Kreisbahn wie bei Bohr ist
             physikalisch unmöglich. Man kann nur
             <strong>Aufenthaltswahrscheinlichkeiten</strong> angeben.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Schrödinger-Gleichung und Orbitale</h3>
    <p class="lz-prose">
      Erwin Schrödinger (1926) formulierte eine Wellengleichung für Elektronen.
      Ihre Lösungen — die <strong>Wellenfunktionen ψ</strong> — beschreiben
      die möglichen Zustände des Elektrons. Das Quadrat der Wellenfunktion
      |ψ|² gibt die <strong>Aufenthaltswahrscheinlichkeitsdichte</strong> an.
    </p>

    ${renderInfobox({
      type: '', icon: 'fas fa-info-circle', title: 'Was ist ein Orbital?',
      body: `Ein <strong>Orbital</strong> ist die Raumfunktion ψ (oder genauer |ψ|²),
             die den Aufenthalt eines Elektrons im Atom beschreibt.
             Die 90%-Grenzfläche (Bereich, in dem das Elektron sich mit
             90 % Wahrscheinlichkeit aufhält) gibt die anschauliche Form des Orbitals.<br><br>
             Wichtig: Das Orbital ist <strong>kein fester Pfad</strong> —
             es ist eine Aufenthaltswahrscheinlichkeitsverteilung.
             Ein Elektron im 1s-Orbital hat z.B. den häufigsten Aufenthaltsabstand
             r = a₀ = 52,9 pm vom Kern — aber es kann auch weiter weg oder
             sogar im Kern sein (mit entsprechend geringerer Wahrscheinlichkeit).`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Die vier Quantenzahlen — vollständige Charakterisierung eines Zustands</h3>

    ${renderTable({
      headers: ['Quantenzahl', 'Symbol', 'Erlaubte Werte', 'Physikalische Bedeutung', 'Beispiele'],
      rows: [
        ['Hauptquantenzahl',  'n',  '1, 2, 3, 4, …',        'Energieniveau; Schale; mittlerer Abstand vom Kern', 'n=1: K-Schale; n=2: L-Schale; n=3: M-Schale'],
        ['Nebenquantenzahl',  'l',  '0 bis n−1',            'Orbitalform; Bahndrehimpuls L=√(l(l+1))·ħ', 'l=0→s; l=1→p; l=2→d; l=3→f'],
        ['Magnetquantenzahl', 'mₗ', '−l, …, 0, …, +l',     'Raumausrichtung; Anzahl Orbitale = 2l+1', 'l=1: mₗ=−1,0,+1 → 3 p-Orbitale (pₓ,p_y,p_z)'],
        ['Spinquantenzahl',   'mₛ', '+½ (↑) oder −½ (↓)',  'Eigendrehimpuls des Elektrons; 2 mögliche Zustände', '2 Elektronen pro Orbital (↑↓)'],
      ],
      highlight: [0, 1],
    })}

    ${renderInfobox({
      type: '', icon: 'fas fa-ban', title: 'Pauli-Prinzip (Ausschließungsprinzip)',
      body: `Wolfgang Pauli (1925): In einem Atom dürfen keine zwei Elektronen
             in allen vier Quantenzahlen (n, l, mₗ, mₛ) übereinstimmen.<br><br>
             <strong>Folge:</strong> Pro Orbital (definiert durch n, l, mₗ) können
             maximal <strong>2 Elektronen</strong> mit entgegengesetztem Spin sitzen.<br><br>
             <strong>Maximale Elektronenzahl pro Schale:</strong>
             n=1: 2 · n=2: 8 · n=3: 18 · n=4: 32 · allgemein: 2n²`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Orbitaltypen und ihre Formen</h3>

    ${renderTable({
      headers: ['Typ', 'l-Wert', 'Anzahl Orbitale (2l+1)', 'Form', 'Beispiele', 'max. Elektronen'],
      rows: [
        ['s-Orbital', '0', '1', 'Kugelsymmetrisch; hat einen Knoten bei r=0 nur für n≥2', '1s, 2s, 3s, 4s', '2'],
        ['p-Orbital', '1', '3 (pₓ, p_y, p_z)', 'Hantelförmig, zwei Lappen entlang der Achsen; einen Knotenebene', '2p, 3p, 4p', '6'],
        ['d-Orbital', '2', '5', 'Komplex; 4 der 5 haben Kleeblattform mit 2 Knotenebenen; d_{z²}: Hantel + Ring', '3d, 4d, 5d', '10'],
        ['f-Orbital', '3', '7', 'Sehr komplex; 3 Knotenebenen', '4f, 5f', '14'],
      ],
      highlight: [0, 1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Elektronenkonfiguration — Aufbauprinzip</h3>
    <p class="lz-prose">
      Die Elektronenkonfiguration eines Atoms gibt an, wie die Elektronen auf die
      Orbitale verteilt sind. Sie wird nach drei Regeln aufgebaut:
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-arrow-down',
        title: 'Aufbauprinzip (Aufbau-Prinzip)',
        text: `Orbitale werden in aufsteigender Reihenfolge ihrer Energie besetzt.
               Energiereihenfolge nach (n+l)-Regel:
               1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d …
               Wichtig: 4s wird vor 3d gefüllt (n+l-Regel: 4+0=4 < 3+2=5 → falsch! Korrekt: 4s: n+l=4, 3d: n+l=5 → 4s zuerst)`,
      },
      {
        icon: 'fas fa-ban',
        title: 'Pauli-Prinzip',
        text: `Maximal zwei Elektronen pro Orbital, mit entgegengesetztem Spin (↑↓).
               Kein Atom hat zwei Elektronen mit allen vier
               gleichen Quantenzahlen.
               Notation: ↑↓ (beide besetzt), ↑ (halb besetzt), leer.`,
      },
      {
        icon: 'fas fa-grip-lines',
        title: 'Hund\'sche Regel',
        text: `Bei energiegleichen Orbitalen (z.B. drei 2p-Orbitale) werden
               zunächst alle gleichartigen Orbitale mit je einem Elektron
               gleichen Spins besetzt, bevor ein zweites Elektron hinzukommt
               (maximale Spinmultiplizität).
               Grund: Gleiche Spinorientierung minimiert Abstoßungsenergie.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Energiereihenfolge und Besetzung</h3>

    ${renderFormulaBox({
      label:   'Energiereihenfolge der Orbitale (Klechkowski-Regel / n+l-Regel)',
      formula: '1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p …',
      desc:    'Orbitale niedrigster (n+l)-Summe werden zuerst besetzt · Bei gleicher (n+l)-Summe: kleineres n zuerst · Merkhilfe: diagonales Schema',
    })}

    <h3 class="lz-h3" style="margin-top:0.75rem;">Elektronenkonfigurationen ausgewählter Elemente</h3>

    ${renderTable({
      headers: ['Element', 'Z', 'Elektronenkonfiguration', 'Besonderheit'],
      rows: [
        ['H',   '1',  '1s¹',                                      '1 Elektron, s-Block'],
        ['He',  '2',  '1s²',                                      'Edelgas; vollständige K-Schale'],
        ['Li',  '3',  '[He] 2s¹',                                 '1 Valenzelektron; Alkalimetall'],
        ['C',   '6',  '[He] 2s² 2p²',                             'Hund: 2 ungepaarte 2p-Elektronen (pₓ¹ p_y¹)'],
        ['N',   '7',  '[He] 2s² 2p³',                             'Hund: 3 ungepaarte Elektronen (pₓ¹ p_y¹ p_z¹)'],
        ['O',   '8',  '[He] 2s² 2p⁴',                             'Ein Paar + 2 ungepaarte → paramagnetisch'],
        ['Ne',  '10', '[He] 2s² 2p⁶',                             'Edelgas; volle L-Schale'],
        ['Na',  '11', '[Ne] 3s¹',                                  'Alkalimetall; 1 Valenzelektron'],
        ['Cl',  '17', '[Ne] 3s² 3p⁵',                             '7 Valenzelektronen; 1 Elektron fehlt zur Edelgaskonfig.'],
        ['Ar',  '18', '[Ne] 3s² 3p⁶',                             'Edelgas'],
        ['K',   '19', '[Ar] 4s¹',                                  '4s vor 3d; Alkalimetall'],
        ['Ca',  '20', '[Ar] 4s²',                                  'Erdalkalimetall'],
        ['Cr',  '24', '[Ar] 3d⁵ 4s¹',                             'Ausnahme! 3d⁵4s¹ statt 3d⁴4s² — halbbesetzte Schale energetisch günstig'],
        ['Cu',  '29', '[Ar] 3d¹⁰ 4s¹',                            'Ausnahme! 3d¹⁰4s¹ statt 3d⁹4s² — vollbesetzte d-Schale günstig'],
        ['Fe',  '26', '[Ar] 3d⁶ 4s²',                             'd-Block; 4 ungepaarte d-Elektronen → ferromagnetisch'],
        ['Zn',  '30', '[Ar] 3d¹⁰ 4s²',                            'd¹⁰-Abschluss → kein Übergangsmetall-Verhalten'],
        ['Br',  '35', '[Ar] 3d¹⁰ 4s² 4p⁵',                       'Halogen; 7 Valenzelektronen'],
        ['Kr',  '36', '[Ar] 3d¹⁰ 4s² 4p⁶',                       'Edelgas'],
      ],
      highlight: [12, 13],
    })}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung QM-Atommodell',
      body: `<strong>Vom Bohr-Modell zur Quantenmechanik:</strong><br>
             Bohr: diskrete Bahnen mit definierten Radien → QM: Orbitale mit Aufenthaltswahrscheinlichkeit<br><br>
             <strong>4 Quantenzahlen</strong> beschreiben jeden Zustand vollständig: n, l, mₗ, mₛ<br>
             <strong>Pauli:</strong> Max. 2 e⁻ pro Orbital (entgegengesetzter Spin)<br>
             <strong>Aufbauprinzip:</strong> (n+l)-Reihenfolge; 4s vor 3d<br>
             <strong>Hund:</strong> Bei entarteten Orbitalen erst einfach, dann doppelt besetzen<br>
             <strong>Ausnahmen:</strong> Cr, Cu, Mo, Ag (halbvolle/volle d-Schale energetisch bevorzugt)<br>
             <strong>Orbitalformen:</strong> s=Kugel · p=Hantel · d=Kleeblatt/Hantel+Ring · f=komplex`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}