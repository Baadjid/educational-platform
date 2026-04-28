// pages/projekte/lernzettel/faecher/informatik/themen/ki/decision-trees.js
// Informatik 9.4 — Entscheidungsbäume & Random Forest

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }        from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderAccordion, renderMerkboxGrid, renderFormulaBox, renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { COLOR, COLOR_RGB, BASE } from '../../informatik.js';

function renderPageNav({ prev, next }) {
  return `<nav class="lz-page-nav">
    ${prev ? `<button class="lz-page-nav-btn lz-page-nav-btn--prev" data-link="${prev.link}"><i class="fas fa-arrow-left"></i><span>${prev.label}</span></button>` : '<div></div>'}
    <button class="lz-page-nav-btn lz-page-nav-btn--up" data-link="${BASE}"><i class="fas fa-th-large"></i><span>Übersicht</span></button>
    ${next ? `<button class="lz-page-nav-btn lz-page-nav-btn--next" data-link="${next.link}"><span>${next.label}</span><i class="fas fa-arrow-right"></i></button>` : '<div></div>'}
  </nav>`;
}

const NAV = {
  prev: { label: '9.3 Neuronale Netze', link: `${BASE}/themen/ki/neuronale-netze` },
  next: { label: '9.5 Deep Learning', link: `${BASE}/themen/ki/deep-learning` },
};

const TABS = [
  { key: 'baum',      label: '🌳 Entscheidungsbaum' },
  { key: 'gini',      label: '📊 Gini & Entropie' },
  { key: 'randomforest', label: '🌲 Random Forest' },
  { key: 'uebungen',  label: '✏ Übungen' },
];

export default class DecisionTreesPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-informatik-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css'; document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color', COLOR); el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html(); return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Informatik</button>
            <i class="fas fa-chevron-right"></i>
            <span>9.4 · Entscheidungsbäume & Random Forest</span>
          </nav>
          <h1 class="lz-sub-title">Entscheidungsbäume & Random Forest</h1>
          <p class="lz-sub-subtitle">Gini-Index, Entropie, Informationsgewinn, Bagging, Ensemble-Learning</p>
          ${renderTags(['Entscheidungsbaum', 'Random Forest', 'Gini', 'Entropie', 'Bagging', 'BPE 13'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="dtTabs" aria-label="Entscheidungsbäume">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelBaum()}
          ${this._panelGini()}
          ${this._panelRandomForest()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelBaum() {
    return `<div class="wim-category active" data-wim-cat="baum">
      ${renderInfobox({ icon: 'fas fa-tree', title: 'Entscheidungsbaum – das interpretierbarste ML-Modell', type: 'info',
        body: `Ein Entscheidungsbaum stellt Klassifikationsregeln als Baumstruktur dar:<br>
               • <strong>Innere Knoten</strong>: Attributtest (z.B. "Wetter = Sonnig?")<br>
               • <strong>Kanten</strong>: mögliche Attributwerte<br>
               • <strong>Blätter</strong>: Klassen-Entscheidung (Ja/Nein)<br><br>
               Vorteil: Menschen können die Entscheidungslogik nachvollziehen.<br>
               Nachteil: Neigt zu Overfitting – lernt Trainingsdaten "auswendig".` })}

      <h4 class="lz-h4">Tennis-Datensatz (klassisches ML-Beispiel)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
ID │ Wetter   │ Temperatur │ Feuchtigkeit │ Wind   │ Tennis?
───┼──────────┼────────────┼──────────────┼────────┼────────
 1 │ Sonnig   │ Heiß       │ Hoch         │ Schwach│ Nein
 2 │ Sonnig   │ Heiß       │ Hoch         │ Stark  │ Nein
 3 │ Bedeckt  │ Heiß       │ Hoch         │ Schwach│ Ja
 4 │ Regen    │ Mittel     │ Hoch         │ Schwach│ Ja
 5 │ Regen    │ Kühl       │ Normal       │ Schwach│ Ja
 6 │ Regen    │ Kühl       │ Normal       │ Stark  │ Nein
 7 │ Bedeckt  │ Kühl       │ Normal       │ Stark  │ Ja
 8 │ Sonnig   │ Mittel     │ Hoch         │ Schwach│ Nein
 9 │ Sonnig   │ Kühl       │ Normal       │ Schwach│ Ja
10 │ Regen    │ Mittel     │ Normal       │ Schwach│ Ja
11 │ Sonnig   │ Mittel     │ Normal       │ Stark  │ Ja
12 │ Bedeckt  │ Mittel     │ Hoch         │ Stark  │ Ja
13 │ Bedeckt  │ Heiß       │ Normal       │ Schwach│ Ja
14 │ Regen    │ Mittel     │ Hoch         │ Stark  │ Nein

Gesamtdatensatz: 14 Beispiele, 9× Ja, 5× Nein
</pre>

      <h4 class="lz-h4">Resultierender Entscheidungsbaum</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
                     ┌──────────────┐
                     │   Wetter?    │  ← Wurzel (bestes Attribut!)
                     └──────────────┘
                    /       |        \
              Sonnig      Bedeckt    Regen
             /              |           \
    ┌──────────────┐    ┌───────┐    ┌──────────────┐
    │ Feuchtigkeit?│    │  JA   │    │    Wind?     │
    └──────────────┘    └───────┘    └──────────────┘
       /        \                       /          \
    Hoch       Normal               Stark        Schwach
      |           |                   |               |
    NEIN         JA                 NEIN             JA

Beispielklassifikation:
  Wetter=Sonnig, Feuchtigkeit=Normal → JA (Tennis spielen)
  Wetter=Bedeckt → immer JA
  Wetter=Regen, Wind=Stark → NEIN
</pre>

      ${renderTable({
        headers: ['Overfitting-Maßnahme', 'Beschreibung', 'Parameter'],
        rows: [
          ['Max. Tiefe (max_depth)', 'Baum wird nach k Ebenen gestoppt', 'z.B. max_depth=5'],
          ['Min. Samples pro Split', 'Knoten wird nur aufgeteilt bei ≥ n Beispielen', 'min_samples_split=10'],
          ['Min. Samples pro Blatt', 'Blatt muss mindestens n Beispiele enthalten', 'min_samples_leaf=5'],
          ['Pre-Pruning', 'Stopp-Kriterium beim Aufbau (stat. Test)', 'Chi²-Test oder MI-Test'],
          ['Post-Pruning', 'Baum wird nach Aufbau zurückgestutzt', 'Cost-Complexity Pruning (α)'],
          ['Minimal Impurity', 'Split nur wenn Unreinheit sich um ≥ δ reduziert', 'min_impurity_decrease'],
        ],
      })}
    </div>`;
  }

  _panelGini() {
    return `<div class="wim-category hidden" data-wim-cat="gini">
      <h3 class="lz-h3">Gini-Index & Entropie – Wie wählt man das beste Attribut?</h3>
      ${renderInfobox({ icon: 'fas fa-balance-scale', title: 'Unreinheit (Impurity)', type: 'info',
        body: `Beim Aufbau wählt der Algorithmus an jedem Knoten das Attribut, das die <strong>Unreinheit am stärksten senkt</strong>.
               Zwei häufige Maße: <strong>Gini-Index</strong> (CART-Algorithmus) und <strong>Entropie</strong> (ID3, C4.5).<br><br>
               Intuition: Ein <em>reiner</em> Knoten (z.B. 10×Ja, 0×Nein) hat Unreinheit 0 – optimal!
               Ein <em>gemischter</em> Knoten (z.B. 5×Ja, 5×Nein) hat maximale Unreinheit.` })}

      ${renderFormulaBox({
        label: 'Gini-Index',
        formula: 'Gini(S) = 1 − Σᵢ pᵢ²\nGewichteter Gini nach Attribut A: Gini(S,A) = Σᵥ (|Sᵥ|/|S|)·Gini(Sᵥ)',
        desc: 'pᵢ = Anteil der Klasse i im Datensatz S\nGini=0 → perfekt rein (ideal), Gini=0.5 → maximale Unreinheit (2 Klassen)',
      })}

      ${renderFormulaBox({
        label: 'Entropie & Informationsgewinn',
        formula: 'H(S) = −Σᵢ pᵢ·log₂(pᵢ)  [in Bit]\nIG(S,A) = H(S) − Σᵥ (|Sᵥ|/|S|)·H(Sᵥ)',
        desc: 'H=0 → perfekt rein, H=1 → maximale Unreinheit (2 Klassen)\nIG = Reduktion der Entropie nach Aufteilung – je größer desto besser',
      })}

      <h4 class="lz-h4">Vollständige Gini-Berechnung am Tennis-Datensatz</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Gesamtdatensatz S: 14 Beispiele, 9×Ja, 5×Nein
p(Ja) = 9/14 ≈ 0.643,  p(Nein) = 5/14 ≈ 0.357

Gini(S) = 1 − (0.643² + 0.357²)
        = 1 − (0.413 + 0.127)
        = 1 − 0.540 = 0.460

══════════════════════════════════════════════════════════
ATTRIBUT 1: WETTER (Sonnig / Bedeckt / Regen)
══════════════════════════════════════════════════════════
Sonnig:  IDs 1,2,8,9,11 → 2×Ja, 3×Nein   (5 Beispiele)
  p(Ja)=2/5=0.4, p(Nein)=3/5=0.6
  Gini(Sonnig) = 1 − (0.4²+0.6²) = 1 − (0.16+0.36) = 0.48

Bedeckt: IDs 3,7,12,13 → 4×Ja, 0×Nein   (4 Beispiele)
  p(Ja)=4/4=1.0, p(Nein)=0
  Gini(Bedeckt) = 1 − (1.0²+0²) = 1 − 1 = 0.00  ← PERFEKT REIN!

Regen:   IDs 4,5,6,10,14 → 3×Ja, 2×Nein  (5 Beispiele)
  p(Ja)=3/5=0.6, p(Nein)=2/5=0.4
  Gini(Regen) = 1 − (0.6²+0.4²) = 1 − (0.36+0.16) = 0.48

Gewichteter Gini(S, Wetter):
  = (5/14)·0.48 + (4/14)·0.00 + (5/14)·0.48
  = 0.357·0.48 + 0 + 0.357·0.48
  = 0.171 + 0 + 0.171 = 0.343

Gini-Reduktion = Gini(S) − Gini(S,Wetter) = 0.460 − 0.343 = 0.117

══════════════════════════════════════════════════════════
ATTRIBUT 2: FEUCHTIGKEIT (Hoch / Normal)
══════════════════════════════════════════════════════════
Hoch:   IDs 1,2,3,4,8,12 → 3×Ja, 4×Nein  (7 Beispiele)
  p(Ja)=3/7≈0.429, p(Nein)=4/7≈0.571
  Gini(Hoch) = 1 − (0.429²+0.571²) = 1 − (0.184+0.326) = 0.490

Normal: IDs 5,6,7,9,10,11,13 → 6×Ja, 1×Nein  (7 Beispiele)
  p(Ja)=6/7≈0.857, p(Nein)=1/7≈0.143
  Gini(Normal) = 1 − (0.857²+0.143²) = 1 − (0.734+0.020) = 0.245

Gewichteter Gini(S, Feuchtigkeit):
  = (7/14)·0.490 + (7/14)·0.245
  = 0.5·0.490 + 0.5·0.245 = 0.245 + 0.122 = 0.367

Gini-Reduktion = 0.460 − 0.367 = 0.093

══════════════════════════════════════════════════════════
VERGLEICH:
══════════════════════════════════════════════════════════
  Wetter:      Reduktion = 0.117  ← BESTES ATTRIBUT → Wurzel!
  Feuchtigkeit: Reduktion = 0.093
  (Temperatur, Wind: ähnliche Berechnung)

→ WETTER wird als Wurzel gewählt (größte Gini-Reduktion).
</pre>

      <h4 class="lz-h4">Entropie-Berechnung (Vergleich)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Gesamtdatensatz S: p(Ja)=9/14, p(Nein)=5/14

H(S) = −(9/14)·log₂(9/14) − (5/14)·log₂(5/14)
     = −0.643·(−0.637) − 0.357·(−1.485)
     = 0.410 + 0.530 = 0.940 Bit

Teilmenge Sonnig (2×Ja, 3×Nein):
H(Sonnig) = −(2/5)·log₂(2/5) − (3/5)·log₂(3/5)
           = −0.4·(−1.322) − 0.6·(−0.737)
           = 0.529 + 0.442 = 0.971 Bit

Teilmenge Bedeckt (4×Ja, 0×Nein):
H(Bedeckt) = −1·log₂(1) − 0·log₂(0) = 0 Bit  ← REIN

Teilmenge Regen (3×Ja, 2×Nein):
H(Regen) = −(3/5)·log₂(3/5) − (2/5)·log₂(2/5)
          = 0.971 Bit  (symmetrisch!)

IG(S, Wetter) = H(S) − [(5/14)·0.971 + (4/14)·0 + (5/14)·0.971]
              = 0.940 − [0.347 + 0 + 0.347]
              = 0.940 − 0.694 = 0.246 Bit

→ Durch Wissen über "Wetter" reduziert sich die Unsicherheit um 0.246 Bit.
</pre>
      ${renderTable({
        headers: ['Maß', 'Formel', 'Maximum (2 Klassen)', 'Wird von', 'Vorteil'],
        rows: [
          ['Gini-Index', '1−Σpᵢ²', '0.5', 'CART, sklearn', 'Schnell (kein log)'],
          ['Entropie', '−Σpᵢ·log₂pᵢ', '1.0 Bit', 'ID3, C4.5', 'Informationstheoretisch fundiert'],
          ['Beide geben', '—', '—', '—', 'Fast identische Bäume in der Praxis'],
        ],
      })}
    </div>`;
  }

  _panelRandomForest() {
    return `<div class="wim-category hidden" data-wim-cat="randomforest">
      <h3 class="lz-h3">Random Forest – Ensemble Learning</h3>
      ${renderInfobox({ icon: 'fas fa-users', title: 'Bagging + zufällige Merkmalauswahl', type: 'info',
        body: `Random Forest kombiniert zwei Ideen:<br>
               1. <strong>Bagging (Bootstrap Aggregating)</strong>: Trainiere viele Bäume auf verschiedenen Zufalls-Stichproben<br>
               2. <strong>Zufällige Merkmalauswahl</strong>: Beim jedes Split nur √m zufällige Features betrachten<br><br>
               → Verschiedene Bäume → geringe Korrelation → Mittelung reduziert Varianz!` })}

      <h4 class="lz-h4">Bootstrap Sampling verstehen</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Original-Datensatz: {1, 2, 3, 4, 5}  (5 Beispiele)

Bootstrap-Sample (ziehen MIT Zurücklegen, gleiche Größe n=5):
  Baum 1: {1, 3, 1, 5, 2}  ← 1 zweimal, 4 fehlt
  Baum 2: {2, 2, 4, 3, 5}  ← 2 zweimal, 1 fehlt
  Baum 3: {5, 1, 4, 4, 2}  ← 4 zweimal, 3 fehlt

Wie wahrscheinlich ist es, dass ein Beispiel NICHT gezogen wird?
  P(nicht in einem Zug) = 1 − 1/n
  P(in keinem von n Zügen) = (1 − 1/n)^n
  Für n→∞: (1 − 1/n)^n → 1/e ≈ 0.368 = 36.8%

→ Ca. 63.2% der Daten sind im Bootstrap-Sample.
   Ca. 36.8% fehlen → diese heißen Out-of-Bag (OOB) Daten.

OUT-OF-BAG (OOB) VALIDATION:
  Jeder Baum sieht ~63% der Daten beim Training.
  Die restlichen ~37% können als "kostenlose" Validierungsdaten dienen!
  → OOB-Error = Kreuzvalidierung ohne extra Testset!
</pre>

      <h4 class="lz-h4">Vollständiger Random-Forest-Algorithmus</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
TRAINING (n_trees Bäume bauen):
────────────────────────────────────────
for i = 1 to n_trees:
  1. Bootstrap: Ziehe n_train Beispiele MIT Zurücklegen aus D_train.
  2. Baue Entscheidungsbaum:
     for jeden Knoten:
       a. Wähle zufällig m_try = √(n_features) Features aus.
       b. Berechne Gini/Entropie für jedes dieser Features.
       c. Wähle das beste Feature → teile auf.
       d. Rekursiv bis max_depth oder reine Knoten.
  3. Speichere Baum[i] (KEIN Pruning!).

VORHERSAGE für neuen Punkt x:
────────────────────────────────────────
Klassifikation: Mehrheitsvotum
  for i = 1 to n_trees: predictions[i] = Baum[i].predict(x)
  return häufigste Klasse in predictions  (Majority Vote)

Regression: Mittelwert
  return mean(predictions)
</pre>

      ${renderTable({
        headers: ['Eigenschaft', 'Einzelner Entscheidungsbaum', 'Random Forest (100 Bäume)'],
        rows: [
          ['Interpretierbarkeit', '✅ Hoch – Regeln lesbar', '❌ "Black Box" – nicht direkt lesbar'],
          ['Overfitting', '❌ Stark anfällig', '✅ Robust durch Mittelung'],
          ['Trainingszeit', '✅ Sehr schnell', '⚠ Langsamer (n×Baumzeit)'],
          ['Vorhersagezeit', '✅ Sehr schnell O(Tiefe)', '⚠ O(n_trees×Tiefe)'],
          ['Genauigkeit', '⚠ Mittel', '✅ Meist deutlich besser'],
          ['Feature Importance', '✅ Verfügbar', '✅ Verfügbar (gemittelt!)'],
          ['Robustheit gegen Rauschen', '❌ Gering', '✅ Hoch'],
          ['Out-of-Bag Validierung', '❌ Nicht möglich', '✅ Gratis inklusive'],
        ],
      })}

      <h4 class="lz-h4">Feature Importance</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Idee: Wie oft und wie stark reduziert Feature X die Unreinheit über alle Bäume?

Beispiel: Kreditrisiko-Datensatz
Feature              │ Importance (normiert, Summe=1)
─────────────────────┼──────────────────────────────
Jahreseinkommen      │ ████████████████████ 0.35
Kredithistorie       │ ████████████████ 0.28
Alter                │ ████████ 0.15
Schuldenquote        │ ██████ 0.12
Beschäftigungszeit   │ ████ 0.07
Eigenheim            │ ██ 0.03

→ Einkommen und Kredithistorie sind die wichtigsten Prädiktoren.
→ Feature Importance hilft bei Feature Selection: weniger wichtige weglassen.
</pre>

      ${renderMerkboxGrid([
        { icon: 'fas fa-chart-bar', title: 'Bias-Varianz-Tradeoff', text: 'Einzelner Baum: <strong>Hohe Varianz</strong> (kleine Datensatzänderung → großer Effekt), geringer Bias. Random Forest: durch Mittelung sinkt die Varianz drastisch – Bias bleibt ähnlich. Das ist der Hauptvorteil.' },
        { icon: 'fas fa-chart-line', title: 'Wann ist Random Forest besser?', text: 'Fast immer! Außer: wenn Interpretierbarkeit wichtig ist (z.B. Medizin, Recht, Finanzen) oder wenn Rechenzeit limitiert ist. Für Tabellendaten ist Random Forest oft die beste Baseline.' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben mit Lösungen</h3>
      ${renderAccordion([
        {
          title: 'Aufg. 1: Berechne Gini(S) für 4×Ja und 6×Nein.',
          content: `p(Ja)  = 4/10 = 0.4
  p(Nein) = 6/10 = 0.6

  Gini(S) = 1 − (p(Ja)² + p(Nein)²)
           = 1 − (0.4² + 0.6²)
           = 1 − (0.16 + 0.36)
           = 1 − 0.52
           = 0.48`,
        },
        {
          title: 'Aufg. 2: Berechne H(S) (Entropie) für 3×Ja, 1×Nein.',
          content: `p(Ja) = 3/4 = 0.75, p(Nein) = 1/4 = 0.25

  H(S) = −p(Ja)·log₂(p(Ja)) − p(Nein)·log₂(p(Nein))
       = −0.75·log₂(0.75) − 0.25·log₂(0.25)
       = −0.75·(−0.415) − 0.25·(−2.0)
       = 0.311 + 0.500
       = 0.811 Bit`,
        },
        {
          title: 'Aufg. 3: Gini-Split. Datensatz: 10 Punkte, 6×Ja, 4×Nein. Attribut "Groß": Groß-Ja=4, Groß-Nein=1 (5 Punkte); Klein-Ja=2, Klein-Nein=3 (5 Punkte). Gewichteter Gini?',
          content: `Gini(Groß): p(Ja)=4/5=0.8, p(Nein)=1/5=0.2
  Gini(Groß) = 1 − (0.64+0.04) = 0.32

  Gini(Klein): p(Ja)=2/5=0.4, p(Nein)=3/5=0.6
  Gini(Klein) = 1 − (0.16+0.36) = 0.48

  Gewichteter Gini = (5/10)·0.32 + (5/10)·0.48
                   = 0.5·0.32 + 0.5·0.48
                   = 0.16 + 0.24 = 0.40

  Gini(S) = 1−(0.36+0.16) = 0.48
  Gini-Reduktion = 0.48 − 0.40 = 0.08`,
        },
        {
          title: 'Aufg. 4: Was ist OOB-Error und wie entsteht er?',
          content: `OOB = Out-of-Bag. Bei Bootstrap-Sampling (mit Zurücklegen) werden ca. 36.8% der Originaldaten NICHT in das Sample gezogen.

  Diese "vergessenen" Daten werden für jeden Baum als Test verwendet:
  • Baum i wurde mit Sample_i trainiert (63.2% der Daten)
  • Restliche 36.8% → vorhersagen mit Baum i
  • OOB-Fehler = mittlerer Fehler über alle Bäume für ihre jeweiligen OOB-Daten

  Vorteil: Kostenlose Kreuzvalidierung ohne separates Testset.`,
        },
        {
          title: 'Aufg. 5: Warum nimmt Random Forest bei jedem Split nur √m Features?',
          content: `Ohne Beschränkung würden alle Bäume denselben "besten" Split wählen:
  → Alle Bäume wären ähnlich (stark korreliert)
  → Mittelung hilft kaum (korrelierte Fehler)

  Mit √m zufälligen Features:
  → Verschiedene Bäume wählen verschiedene Splits
  → Geringe Korrelation zwischen Bäumen
  → Mittelung reduziert Varianz viel stärker (Diversität!)

  m_try = √m ist für Klassifikation optimal.
  Für Regression: m/3 oft besser.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Klausur-Cheatsheet', type: 'success',
        body: `<strong>Gini</strong>: 1−Σpᵢ². Bei 2 Klassen: max=0.5 (50/50), min=0 (rein).<br>
               <strong>Entropie</strong>: −Σpᵢ·log₂pᵢ. Bei 2 Klassen: max=1 Bit, min=0.<br>
               <strong>Informationsgewinn</strong>: IG = H(S) − gewichtete H der Teilmengen. Je größer desto besser.<br>
               <strong>Entscheidungsbaum</strong>: Interpretierbar, anfällig für Overfitting, Regularisierung durch max_depth etc.<br>
               <strong>Bootstrap</strong>: Ziehen mit Zurücklegen, n-mal aus n-Daten → ~63% einzigartig, ~37% OOB.<br>
               <strong>Random Forest</strong>: Bagging + √m Features pro Split → Diversität → weniger Overfitting.` })}
    </div>`;
  }

  init() {
    i18n.init(); initScrollReveal();
    initInteractive(document.querySelector('.page-informatik-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { if (btn.dataset.navLink) window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}