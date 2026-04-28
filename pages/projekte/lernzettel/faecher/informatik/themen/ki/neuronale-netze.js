// pages/projekte/lernzettel/faecher/informatik/themen/ki/neuronale-netze.js
// Informatik 9.3 — Neuronale Netze: Perzeptron, Aktivierungsfunktionen, MLP

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
  prev: { label: '9.2 k-NN & k-Means', link: `${BASE}/themen/ki/ml-knn-kmeans` },
  next: { label: '9.4 Entscheidungsbäume', link: `${BASE}/themen/ki/decision-trees` },
};

const TABS = [
  { key: 'perzeptron', label: '⚡ Perzeptron & Lernregel' },
  { key: 'aktivierung',label: '📈 Aktivierungsfunktionen' },
  { key: 'mlp',        label: '🧠 MLP & Forward Pass' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class NeuronaleNetzePage {
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
            <span>9.3 · Neuronale Netze</span>
          </nav>
          <h1 class="lz-sub-title">Neuronale Netze: Perzeptron & MLP</h1>
          <p class="lz-sub-subtitle">Künstliches Neuron, Lernregel, Aktivierungsfunktionen, Forward Pass</p>
          ${renderTags(['Perzeptron', 'Aktivierungsfunktion', 'MLP', 'Sigmoid', 'ReLU', 'Softmax', 'BPE 13'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="nnTabs" aria-label="Neuronale Netze">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelPerzeptron()}
          ${this._panelAktivierung()}
          ${this._panelMlp()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelPerzeptron() {
    return `<div class="wim-category active" data-wim-cat="perzeptron">
      ${renderInfobox({ icon: 'fas fa-circle-nodes', title: 'Biologisch → Künstlich: Analogie', type: 'info',
        body: `<table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
               <tr><th style="text-align:left;padding:4px 8px;color:var(--lz-accent)">Biologisches Neuron</th><th style="text-align:left;padding:4px 8px;color:var(--lz-accent)">Künstliches Neuron</th></tr>
               <tr><td style="padding:3px 8px">Dendriten (empfangen Signale)</td><td style="padding:3px 8px">Eingaben x₁, x₂, ..., xₙ</td></tr>
               <tr><td style="padding:3px 8px">Synapsen (Signalstärke)</td><td style="padding:3px 8px">Gewichte w₁, w₂, ..., wₙ</td></tr>
               <tr><td style="padding:3px 8px">Zellkörper (Summation)</td><td style="padding:3px 8px">Gewichtete Summe z = Σwᵢxᵢ + b</td></tr>
               <tr><td style="padding:3px 8px">Aktionspotential-Schwelle</td><td style="padding:3px 8px">Aktivierungsfunktion f(z)</td></tr>
               <tr><td style="padding:3px 8px">Axon (Ausgabesignal)</td><td style="padding:3px 8px">Ausgabe a = f(z)</td></tr>
               </table>` })}

      ${renderFormulaBox({
        label: 'Perzeptron-Berechnung',
        formula: 'z = w₁·x₁ + w₂·x₂ + ... + wₙ·xₙ + b = Σᵢ wᵢxᵢ + b\na = f(z)',
        desc: 'z = net input (Vorspannung), b = Bias (Schwellenwert-Verschiebung), a = Aktivierung\nIn Vektorform: z = wᵀx + b',
      })}

      <h4 class="lz-h4">Vollständiges AND-Gatter Beispiel</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
AND-Gatter mit Perzeptron:
Gewichte: w₁ = 1.0, w₂ = 1.0, Bias b = −1.5
Aktivierung: Step-Funktion (1 wenn z ≥ 0, sonst 0)

x₁ │ x₂ │ z = x₁·1 + x₂·1 − 1.5 │ a = Step(z) │ Erwartet
───┼────┼────────────────────────┼─────────────┼──────────
 0 │  0 │    0 + 0 − 1.5 = −1.5 │      0      │    0  ✅
 0 │  1 │    0 + 1 − 1.5 = −0.5 │      0      │    0  ✅
 1 │  0 │    1 + 0 − 1.5 = −0.5 │      0      │    0  ✅
 1 │  1 │    1 + 1 − 1.5 = +0.5 │      1      │    1  ✅

Alle 4 Fälle korrekt → das Perzeptron implementiert AND!

OR-Gatter: w₁=1, w₂=1, b=−0.5 → z≥0 wenn mindestens ein x=1
NAND-Gatter: w₁=−1, w₂=−1, b=1.5 → Invertierung von AND
</pre>

      <h4 class="lz-h4">XOR – Das Problem, das alles änderte</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
XOR-Wahrheitstabelle:
x₁=0,x₂=0 → 0  (soll 0 sein)
x₁=0,x₂=1 → 1  (soll 1 sein)
x₁=1,x₂=0 → 1  (soll 1 sein)
x₁=1,x₂=1 → 0  (soll 0 sein)

Visualisierung im 2D-Raum:
  x₂
  1  │    ● (0,1)         ○ (1,1)
     │
  0  │    ○ (0,0)         ● (1,0)
     └──────────────────────────── x₁
          0               1
  ● = Klasse 1, ○ = Klasse 0

Es gibt KEINE einzelne Gerade (Hyperebene), die ● von ○ trennt!
→ XOR ist NICHT linear separierbar!

1969: Minsky & Papert bewiesen dies mathematisch
→ "KI-Winter": Forschungsgelder gestrichen!

Lösung 1986: Mehrschichtiges Netz + Backpropagation (Rumelhart, Hinton, Williams)
XOR mit MLP:
  h₁ = OR(x₁, x₂)     [w₁=1, w₂=1, b=−0.5]
  h₂ = NAND(x₁, x₂)   [w₁=−1, w₂=−1, b=1.5]
  out = AND(h₁, h₂)    [w₁=1, w₂=1, b=−1.5]

Test x₁=1, x₂=1:
  h₁ = Step(1+1−0.5) = Step(1.5) = 1
  h₂ = Step(−1−1+1.5) = Step(−0.5) = 0
  out = Step(1+0−1.5) = Step(−0.5) = 0 ✅ (XOR(1,1)=0)
</pre>

      <h4 class="lz-h4">Perzeptron-Lernregel</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Grundidee: Wenn Vorhersage falsch → Gewichte anpassen.

Lernregel:
  wᵢ_neu = wᵢ_alt + α · (y − ŷ) · xᵢ
  b_neu   = b_alt  + α · (y − ŷ)

  α = Lernrate (z.B. 0.1)
  y = tatsächliche Klasse (0 oder 1)
  ŷ = Vorhersage des Perzeptrons

Beispiel (α=0.1, Start: w₁=0, w₂=0, b=0):
  Sample: x=[1,1], y=1 (AND)
  ŷ = Step(0·1 + 0·1 + 0) = Step(0) = 1 (Grenzfall; angenommen 1)
  Fehler = y − ŷ = 1 − 1 = 0 → keine Änderung.

  Sample: x=[0,1], y=0 (AND)
  ŷ = Step(0·0 + 0·1 + 0) = Step(0) = 1 (falsch!)
  Fehler = 0 − 1 = −1
  w₁_neu = 0 + 0.1 · (−1) · 0 = 0.0
  w₂_neu = 0 + 0.1 · (−1) · 1 = −0.1
  b_neu   = 0 + 0.1 · (−1)    = −0.1

Konvergenz-Theorem: Bei linear-separierbaren Daten konvergiert
die Lernregel immer in endlich vielen Schritten. ✅
</pre>
    </div>`;
  }

  _panelAktivierung() {
    return `<div class="wim-category hidden" data-wim-cat="aktivierung">
      <h3 class="lz-h3">Aktivierungsfunktionen – Nichtlinearität einführen</h3>
      ${renderInfobox({ icon: 'fas fa-wave-square', title: 'Warum überhaupt Aktivierungsfunktionen?', type: 'info',
        body: `Ohne Aktivierungsfunktionen wäre ein mehrschichtiges Netz äquivalent zu einem einzelnen Neuron:
               W₂·(W₁·x+b₁)+b₂ = (W₂·W₁)·x + (W₂·b₁+b₂) = W'·x + b' (linear!)
               <br><br>
               Aktivierungsfunktionen fügen <strong>Nichtlinearität</strong> ein – dadurch kann das Netz beliebig
               komplexe Funktionen approximieren (Universal Approximation Theorem).` })}

      ${renderTable({
        headers: ['Funktion', 'Formel', 'Ausgabe', 'Ableitung', 'Verwendung'],
        rows: [
          ['Step', 'f(z)=1 wenn z≥0, sonst 0', '{0,1}', '0 (nicht differenzierbar)', 'Nur Perzeptron, nicht trainierbar'],
          ['Sigmoid (σ)', 'f(z)=1/(1+e⁻ᶻ)', '(0,1)', 'σ(z)·(1−σ(z)) ≤ 0.25', 'Ausgabe (binäre Klassif.), historisch verbreitet'],
          ['Tanh', 'f(z)=(eᶻ−e⁻ᶻ)/(eᶻ+e⁻ᶻ)', '(−1,1)', '1−tanh²(z) ≤ 1', 'Versteckte Schichten (null-zentriert)'],
          ['ReLU', 'f(z)=max(0,z)', '[0,∞)', '1 wenn z>0, sonst 0', 'Standard in Deep Learning (versteckte Schichten)'],
          ['Leaky ReLU', 'f(z)=max(0.01z,z)', '(−∞,∞)', '1 wenn z>0, 0.01 sonst', 'Behebt "dying ReLU"'],
          ['Softmax', 'f(zᵢ)=eᶻⁱ/Σeᶻʲ', 'Summe=1', 'Komplex', 'Ausgabeschicht, Mehrklassen-Klassifikation'],
        ],
      })}

      <h4 class="lz-h4">Wichtige Wertetabelle</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
z-Wert │ Sigmoid σ(z) │  Tanh(z)  │  ReLU(z)  │ Leaky ReLU
───────┼─────────────┼───────────┼───────────┼────────────
 −5    │   0.0067    │  −0.9999  │    0      │  −0.05
 −2    │   0.119     │  −0.964   │    0      │  −0.02
 −1    │   0.269     │  −0.762   │    0      │  −0.01
  0    │   0.500     │   0.000   │    0      │   0.00
 +1    │   0.731     │  +0.762   │    1      │   1.00
 +2    │   0.881     │  +0.964   │    2      │   2.00
 +5    │   0.993     │  +0.9999  │    5      │   5.00

💡 Sigmoid bei z=0: genau 0.5 (Grenzpunkt für binäre Klassifikation)
💡 Tanh = 2·σ(2z) − 1  (Sigmoid-Variante, null-zentriert)
💡 ReLU-Ableitung bei z>0: immer 1 → kein Vanishing Gradient!
</pre>

      <h4 class="lz-h4">Softmax – Wahrscheinlichkeitsverteilung für Mehrklassen</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Aufgabe: Bildklassifikation (Hund, Katze, Vogel)
Net input der Ausgabeschicht: z = [2.0, 1.0, 0.1]

Schritt 1: Exponentialwerte berechnen:
  e^2.0 = 7.389
  e^1.0 = 2.718
  e^0.1 = 1.105
  Summe = 7.389 + 2.718 + 1.105 = 11.212

Schritt 2: Normieren:
  P(Hund)  = 7.389 / 11.212 = 0.659  (65.9%)
  P(Katze) = 2.718 / 11.212 = 0.242  (24.2%)
  P(Vogel) = 1.105 / 11.212 = 0.099   (9.9%)
  Summe = 1.000  ✅

→ Vorhersage: Hund (65.9% Wahrscheinlichkeit)

Eigenschaft: Softmax verstärkt Unterschiede (hohe z → noch höhere Wahrscheinlichkeit).
</pre>

      <h4 class="lz-h4">Das Vanishing Gradient Problem</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Backpropagation = Gradients rückwärts multiplizieren.

Sigmoid-Ableitung: σ'(z) = σ(z)·(1−σ(z)) ≤ 0.25

Bei 10 Sigmoid-Schichten:
  Gradient ≈ 0.25^10 = 0.25 · 0.25 · ... ≈ 0.0000001  ← fast Null!

Die ersten Schichten lernen kaum noch – Netz konvergiert extrem langsam.
Das war das Hauptproblem tiefer Netze bis ~2010.

ReLU-Lösung:
  ReLU'(z) = 1 für z > 0
  Bei 10 ReLU-Schichten: Gradient ≈ 1^10 = 1 → kein Verschwinden!
  (Solange die Neuronen "aktiv" sind, d.h. z > 0)

Dying ReLU: Wenn ein Neuron z < 0 bekommt, ist der Gradient 0 → Neuron
  "stirbt" und lernt nie mehr. Lösung: Leaky ReLU (0.01·z statt 0).
</pre>
    </div>`;
  }

  _panelMlp() {
    return `<div class="wim-category hidden" data-wim-cat="mlp">
      <h3 class="lz-h3">Mehrschichtiges Perzeptron (MLP) – Architektur & Forward Pass</h3>
      ${renderInfobox({ icon: 'fas fa-layer-group', title: 'Schichten eines MLP', type: 'info',
        body: `Ein MLP besteht aus mindestens 3 Schichten:<br>
               • <strong>Eingabeschicht</strong>: Keine Berechnung, nur Weiterleitung der Features<br>
               • <strong>Versteckte Schichten</strong> (1 oder mehr): Lernen Repräsentationen<br>
               • <strong>Ausgabeschicht</strong>: Gibt Vorhersage aus (Klasse oder Wert)<br><br>
               Training: <strong>Backpropagation</strong> + <strong>Gradientenabstieg</strong> (nächste Seite).` })}

      <h4 class="lz-h4">Vollständiger Forward Pass – Schritt für Schritt</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Netzarchitektur: 2 Eingänge → 2 versteckte Neuronen → 1 Ausgang
Aktivierung versteckt: Sigmoid, Aktivierung Ausgang: Sigmoid

Gewichte Schicht 1 (Eingabe → Versteckt):
  W¹ = [[0.5, -0.2],   ← Gewichte für h₁ (von x₁, x₂)
         [0.3,  0.8]]   ← Gewichte für h₂ (von x₁, x₂)
  b¹ = [0.1, -0.1]

Gewichte Schicht 2 (Versteckt → Ausgabe):
  W² = [0.6, -0.4]     ← Gewichte für Ausgabe (von h₁, h₂)
  b² = [0.2]

Eingabe: x = [1.0, 0.5]
Zielausgabe: y = 1.0

──── FORWARD PASS ──────────────────────────────────────────────────

Schicht 1 – Net Input berechnen:
  z₁¹ = W¹[0,0]·x₁ + W¹[0,1]·x₂ + b¹[0]
       = 0.5·1.0 + (−0.2)·0.5 + 0.1
       = 0.5 − 0.1 + 0.1 = 0.5

  z₂¹ = W¹[1,0]·x₁ + W¹[1,1]·x₂ + b¹[1]
       = 0.3·1.0 + 0.8·0.5 + (−0.1)
       = 0.3 + 0.4 − 0.1 = 0.6

Schicht 1 – Aktivierung (Sigmoid):
  a₁¹ = σ(0.5)  = 1/(1+e⁻⁰·⁵) = 1/(1+0.6065) = 1/1.6065 ≈ 0.6225
  a₂¹ = σ(0.6)  = 1/(1+e⁻⁰·⁶) = 1/(1+0.5488) = 1/1.5488 ≈ 0.6457

Schicht 2 – Net Input:
  z¹² = W²[0]·a₁¹ + W²[1]·a₂¹ + b²
      = 0.6·0.6225 + (−0.4)·0.6457 + 0.2
      = 0.3735 − 0.2583 + 0.2 = 0.3152

Schicht 2 – Aktivierung (Sigmoid):
  ŷ = a² = σ(0.3152) = 1/(1+e⁻⁰·³¹⁵²) ≈ 1/(1+0.7296) ≈ 0.578

Verlust (MSE) = 0.5 · (y − ŷ)² = 0.5 · (1.0 − 0.578)² = 0.5 · 0.178 ≈ 0.089

→ Vorhersage ŷ = 0.578, tatsächlich y = 1.0 → Fehler vorhanden
→ Backpropagation würde jetzt Gewichte anpassen.
</pre>

      ${renderTable({
        headers: ['Hyperparameter', 'Beschreibung', 'Typische Werte', 'Einfluss'],
        rows: [
          ['Tiefe (Schichten)', 'Anzahl versteckter Schichten', '1–5 für Standard, 50–1000 für Deep Learning', 'Mehr → komplexere Muster, aber schwieriger zu trainieren'],
          ['Breite (Neuronen/Schicht)', 'Neuronen pro versteckter Schicht', '32, 64, 128, 256, 512', 'Mehr → mehr Kapazität, mehr Rechenaufwand'],
          ['Lernrate α', 'Schrittweite beim Gradientenabstieg', '0.1, 0.01, 0.001, 0.0001', 'Zu groß → divergiert; zu klein → langsames Training'],
          ['Batch-Größe', 'Proben pro Gewichts-Update', '32, 64, 128 (Powers of 2)', 'Klein → noisig aber gut; groß → stabil aber langsam'],
          ['Epochen', 'Durchläufe über den gesamten Datensatz', '10–1000+', 'Zu wenig → underfit; zu viele → overfit'],
          ['Dropout', 'Zufällig Neuronen deaktivieren beim Training', '0.1–0.5', 'Verhindert Overfitting (Regularisierung)'],
        ],
      })}

      <h4 class="lz-h4">Parameter zählen – Wie groß ist das Netz?</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Netzarchitektur: 784 → 256 → 128 → 10 (MNIST Handschriften)

Schicht 1 (784 → 256):
  Gewichte: 784 × 256 = 200.704
  Bias:      1 × 256  =     256
  Gesamt:             = 200.960

Schicht 2 (256 → 128):
  Gewichte: 256 × 128 = 32.768
  Bias:     128        =    128
  Gesamt:              = 32.896

Schicht 3 (128 → 10):
  Gewichte: 128 × 10 = 1.280
  Bias:      10       =    10
  Gesamt:             = 1.290

GESAMTPARAMETER: 200.960 + 32.896 + 1.290 = 235.146 Parameter

→ Das ist noch ein "kleines" Netz. GPT-4 hat ~1.8 Billionen Parameter!
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben mit Lösungen</h3>
      ${renderAccordion([
        {
          title: 'Aufg. 1: Berechne die Ausgabe. Gewichte: w=[2, −1], Bias b=0.5. Eingabe x=[1, 2]. Aktivierung: ReLU.',
          content: `z = w₁·x₁ + w₂·x₂ + b
  = 2·1 + (−1)·2 + 0.5
  = 2 − 2 + 0.5
  = 0.5

  a = ReLU(0.5) = max(0, 0.5) = 0.5`,
        },
        {
          title: 'Aufg. 2: Berechne Sigmoid(2.0) und Sigmoid(−2.0). Was fällt auf?',
          content: `σ(2.0) = 1/(1+e⁻²) = 1/(1+0.1353) = 1/1.1353 ≈ 0.881
  σ(−2.0) = 1/(1+e²) = 1/(1+7.389) = 1/8.389 ≈ 0.119

  Beobachtung: σ(2.0) + σ(−2.0) = 0.881 + 0.119 = 1.0
  Allgemein: σ(z) + σ(−z) = 1  (Symmetrieeigenschaft)
  Und: σ(0) = 0.5  (Grenzpunkt genau in der Mitte)`,
        },
        {
          title: 'Aufg. 3: Wie viele Parameter hat ein MLP mit Architektur 3 → 4 → 2?',
          content: `Schicht 1 (3 → 4):
  Gewichte: 3 × 4 = 12
  Bias: 4
  Gesamt: 16

  Schicht 2 (4 → 2):
  Gewichte: 4 × 2 = 8
  Bias: 2
  Gesamt: 10

  Gesamtparameter: 16 + 10 = 26`,
        },
        {
          title: 'Aufg. 4: Softmax-Berechnung. Logits: z = [1.0, 2.0, 0.5]. Berechne alle Wahrscheinlichkeiten.',
          content: `e^1.0 = 2.718
  e^2.0 = 7.389
  e^0.5 = 1.649
  Summe = 2.718 + 7.389 + 1.649 = 11.756

  P(Klasse 0) = 2.718 / 11.756 = 0.231  (23.1%)
  P(Klasse 1) = 7.389 / 11.756 = 0.629  (62.9%)
  P(Klasse 2) = 1.649 / 11.756 = 0.140  (14.0%)
  Summe = 1.000 ✅

  Vorhersage: Klasse 1 (höchste Wahrscheinlichkeit 62.9%)`,
        },
        {
          title: 'Aufg. 5: Warum ist ReLU für tiefe Netze besser als Sigmoid?',
          content: `Vanishing Gradient Problem:
  • Sigmoid-Ableitung: σ'(z) = σ(z)·(1−σ(z)) ≤ 0.25
  • Bei 10 Schichten: Gradient ≈ 0.25^10 ≈ 10⁻⁷ (fast Null!)
  • Frühe Schichten lernen kaum noch.

  ReLU-Ableitung: f'(z) = 1 für z>0, sonst 0
  • Gradient wird nicht kleiner (für aktive Neuronen)
  • Zudem schneller zu berechnen (kein exp)
  • Praktisch: ReLU führt zu ca. 50% inaktiven Neuronen (Sparse Activation)
    → Netz ist effizienter und robuster.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Klausur-Cheatsheet', type: 'success',
        body: `<strong>Perzeptron</strong>: z = Σwᵢxᵢ + b, a = f(z). Einfachstes NN, löst nur linear trennbare Probleme.<br>
               <strong>XOR-Problem</strong>: Nicht linear trennbar → braucht MLP (mindestens eine versteckte Schicht).<br>
               <strong>ReLU</strong>: max(0,z). Standard für versteckte Schichten. Kein Vanishing Gradient (für z>0).<br>
               <strong>Sigmoid</strong>: 1/(1+e⁻ᶻ) → (0,1). Gut für Ausgabeschicht (Wahrscheinlichkeit).<br>
               <strong>Softmax</strong>: eᶻⁱ/Σeᶻʲ. Für Mehrklassen-Ausgabe. Summe = 1.<br>
               <strong>Parameter</strong>: Pro Schicht (n×m Gewichte + m Bias). Gesamt = Summe aller Schichten.<br>
               <strong>Forward Pass</strong>: Input → z=Wx+b → a=f(z) → nächste Schicht.` })}
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