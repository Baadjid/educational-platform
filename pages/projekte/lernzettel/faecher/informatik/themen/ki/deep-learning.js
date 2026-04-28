// pages/projekte/lernzettel/faecher/informatik/themen/ki/deep-learning.js
// Informatik 9.5 — Deep Learning: Backpropagation, CNNs, RNNs, Transformer

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
  prev: { label: '9.4 Entscheidungsbäume', link: `${BASE}/themen/ki/decision-trees` },
  next: { label: '9.6 Advanced AI', link: `${BASE}/themen/ki/advanced-ai` },
};

const TABS = [
  { key: 'backprop',   label: '⬅ Backpropagation' },
  { key: 'cnn',        label: '🖼 CNNs' },
  { key: 'rnn',        label: '🔄 RNNs & Transformer' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class DeepLearningPage {
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
            <span>9.5 · Deep Learning</span>
          </nav>
          <h1 class="lz-sub-title">Deep Learning: CNNs, RNNs & Transformer</h1>
          <p class="lz-sub-subtitle">Backpropagation, Faltung, LSTM-Gates, Self-Attention</p>
          ${renderTags(['Deep Learning', 'CNN', 'RNN', 'Transformer', 'Backpropagation', 'LSTM', 'BPE 13'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="dlTabs" aria-label="Deep Learning">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelBackprop()}
          ${this._panelCNN()}
          ${this._panelRNN()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelBackprop() {
    return `<div class="wim-category active" data-wim-cat="backprop">
      ${renderInfobox({ icon: 'fas fa-chart-line', title: 'Backpropagation – Wie lernt ein neuronales Netz?', type: 'info',
        body: `Backpropagation = Kettenregel der Analysis angewendet auf neuronale Netze.<br><br>
               <strong>3 Schritte pro Training-Iteration</strong>:<br>
               1. <strong>Forward Pass</strong>: Eingabe durch Netz propagieren → Vorhersage ŷ<br>
               2. <strong>Verlust berechnen</strong>: L = Loss(ŷ, y) (z.B. MSE, Cross-Entropy)<br>
               3. <strong>Backward Pass</strong>: Gradient rückwärts berechnen → Gewichte updaten` })}

      ${renderTable({
        headers: ['Verlustfunktion', 'Formel', 'Verwendung'],
        rows: [
          ['MSE (Mean Squared Error)', 'L = (1/n)·Σ(yᵢ−ŷᵢ)²', 'Regression'],
          ['MAE (Mean Absolute Error)', 'L = (1/n)·Σ|yᵢ−ŷᵢ|', 'Regression, robust gegen Ausreißer'],
          ['Binary Cross-Entropy', 'L = −(y·log(ŷ) + (1−y)·log(1−ŷ))', 'Binäre Klassifikation'],
          ['Categorical Cross-Entropy', 'L = −Σ yᵢ·log(ŷᵢ)', 'Mehrklassen-Klassifikation'],
        ],
      })}

      <h4 class="lz-h4">Vollständiges Backprop-Beispiel – Schritt für Schritt</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Minimalnetz: x → [w₁] → h → [w₂] → ŷ
(1 Eingabe, 1 verstecktes Neuron, 1 Ausgabe, keine Bias)
Aktivierung: Sigmoid σ überall.
Lernrate: α = 0.5

Startwerte: w₁ = 0.5, w₂ = 0.8
Eingabe: x = 2.0, Ziel: y = 5.0

══ FORWARD PASS ══════════════════════════════════════
Schicht 1 (Eingabe → Versteckt):
  z₁ = w₁ · x = 0.5 · 2.0 = 1.0
  h  = σ(z₁) = 1/(1+e⁻¹) ≈ 1/(1+0.368) ≈ 0.731

Schicht 2 (Versteckt → Ausgabe):
  z₂ = w₂ · h = 0.8 · 0.731 = 0.585
  ŷ  = σ(z₂) = 1/(1+e⁻⁰·⁵⁸⁵) ≈ 1/(1+0.557) ≈ 0.642

Verlust (MSE):
  L = 0.5·(y − ŷ)² = 0.5·(5.0 − 0.642)² = 0.5·(4.358)² = 0.5·18.99 ≈ 9.496

══ BACKWARD PASS (Kettenregel) ═══════════════════════
∂L/∂ŷ = −(y − ŷ) = −(5.0 − 0.642) = −4.358

∂ŷ/∂z₂ = σ'(z₂) = σ(z₂)·(1−σ(z₂)) = 0.642·(1−0.642) = 0.642·0.358 = 0.230

Gradient für w₂:
  δ₂ = ∂L/∂ŷ · ∂ŷ/∂z₂ = −4.358 · 0.230 = −1.002
  ∂L/∂w₂ = δ₂ · h = −1.002 · 0.731 = −0.733

∂z₂/∂h = w₂ = 0.8

∂h/∂z₁ = σ'(z₁) = σ(z₁)·(1−σ(z₁)) = 0.731·0.269 = 0.197

Gradient für w₁:
  δ₁ = δ₂ · ∂z₂/∂h · ∂h/∂z₁ = −1.002 · 0.8 · 0.197 = −0.158
  ∂L/∂w₁ = δ₁ · x = −0.158 · 2.0 = −0.316

══ GEWICHTSUPDATE (Gradient Descent) ═════════════════
  w₂_neu = w₂ − α · ∂L/∂w₂ = 0.8 − 0.5·(−0.733) = 0.8 + 0.367 = 1.167
  w₁_neu = w₁ − α · ∂L/∂w₁ = 0.5 − 0.5·(−0.316) = 0.5 + 0.158 = 0.658

Neue Vorhersage (nach Update):
  z₁ = 0.658·2.0 = 1.316 → h = σ(1.316) ≈ 0.788
  z₂ = 1.167·0.788 ≈ 0.920 → ŷ = σ(0.920) ≈ 0.715
  Verlust = 0.5·(5.0−0.715)² ≈ 9.14  (etwas besser als 9.50) ✅
</pre>

      ${renderTable({
        headers: ['Optimizer', 'Update-Regel', 'Vorteil', 'Nachteil'],
        rows: [
          ['SGD', 'w -= α·∇L', 'Einfach, interpretierbar', 'Langsam, empfindlich für α'],
          ['Momentum', 'v = β·v + ∇L; w -= α·v', 'Schneller durch Trägheit', 'Hyperparameter β'],
          ['Adam', 'm=β₁m+∇L; v=β₂v+∇L²; w-=α·m/√v', 'Adaptiv, robust', 'Komplexer, mehr Speicher'],
          ['RMSprop', 'v=β·v+∇L²; w-=α·∇L/√v', 'Gut für rekurrente Netze', 'Kein Momentum'],
        ],
      })}
    </div>`;
  }

  _panelCNN() {
    return `<div class="wim-category hidden" data-wim-cat="cnn">
      <h3 class="lz-h3">Convolutional Neural Networks (CNNs)</h3>
      ${renderInfobox({ icon: 'fas fa-image', title: 'Warum speziell für Bilder?', type: 'info',
        body: `Problem mit vollverbundenen Netzen für Bilder:<br>
               Ein 256×256 RGB-Bild = 256×256×3 = 196.608 Eingabe-Features.<br>
               Erste vollverbundene Schicht mit 1000 Neuronen: 196.608×1000 = <strong>196,6 Mio. Parameter</strong>!<br><br>
               CNN-Lösung: <strong>Parameter teilen</strong> (shared weights).<br>
               Ein Filter (3×3×3 = 27 Parameter) wird über das GANZE Bild geschoben.<br>
               → Dramatisch weniger Parameter, bessere Generalisierung.` })}

      <h4 class="lz-h4">Faltungsoperation – Schritt für Schritt</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Eingabebild (5×5, vereinfacht):
  1  2  3  0  1
  4  5  6  1  0
  7  8  9  2  1
  0  1  2  3  4
  1  2  3  4  5

Filter (3×3 Kantenerkennung):
  -1  0  1
  -1  0  1
  -1  0  1

Faltung an Position (0,0) – Filter liegt auf oberer linker 3×3-Region:
  Bildausschnitt:    Filter:
  1  2  3            -1  0  1
  4  5  6      ×     -1  0  1
  7  8  9            -1  0  1

  = 1·(−1) + 2·0 + 3·1
  + 4·(−1) + 5·0 + 6·1
  + 7·(−1) + 8·0 + 9·1
  = (−1+0+3) + (−4+0+6) + (−7+0+9)
  = 2 + 2 + 2 = 6

Faltung an Position (0,1) – Filter ein Schritt rechts:
  Bildausschnitt:    Filter:
  2  3  0            -1  0  1
  5  6  1      ×     -1  0  1
  8  9  2            -1  0  1

  = (−2+0+0) + (−5+0+1) + (−8+0+2) = −2 + (−4) + (−6) = −12

Output Feature Map (3×3, bei Stride=1, kein Padding):
  Größe = (5−3)/1 + 1 = 3 → 3×3 Output

  6   -12  ...
  ...  ...  ...
  ...  ...  ...

Dieser Filter erkennt: vertikale Kanten (links → hoch, rechts → niedrig)
</pre>

      <h4 class="lz-h4">CNN-Architektur und Dimensionen</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Typische CNN-Pipeline (MNIST: 28×28 Graustufen):

Input (28×28×1)
  → Conv(32 Filter, 3×3, Stride=1, Padding=1) → ReLU
    Output: 28×28×32  (Padding erhält Größe)
    Parameter: 3×3×1×32 + 32 Bias = 288 + 32 = 320

  → MaxPool(2×2, Stride=2)
    Output: 14×14×32  (halbe Größe)
    Parameter: 0 (kein Training!)

  → Conv(64 Filter, 3×3, Padding=1) → ReLU
    Output: 14×14×64
    Parameter: 3×3×32×64 + 64 = 18.432 + 64 = 18.496

  → MaxPool(2×2)
    Output: 7×7×64

  → Flatten
    Output: 7×7×64 = 3.136 Werte

  → Dense(128) → ReLU
    Parameter: 3.136×128 + 128 = 401.536

  → Dense(10) → Softmax
    Parameter: 128×10 + 10 = 1.290

Gesamtparameter: ~420.000 (vs. 196 Mio. bei vollverbundenen!)

Ausgabe-Größe nach Conv:
  Output = ⌊(Input − Filter + 2·Padding) / Stride⌋ + 1
</pre>

      ${renderTable({
        headers: ['CNN-Schicht', 'Funktion', 'Lernbare Parameter?'],
        rows: [
          ['Convolutional', 'Merkmale extrahieren (Kanten, Texturen, Formen)', '✅ Ja (Filter-Gewichte)'],
          ['ReLU', 'Nichtlinearität einführen', '❌ Nein'],
          ['MaxPooling', 'Dimension reduzieren, Translationsinvarianz', '❌ Nein'],
          ['Batch Normalization', 'Aktivierungen normalisieren → stabileres Training', '✅ Ja (γ, β)'],
          ['Dropout', 'Neuronen zufällig deaktivieren (nur Training)', '❌ Nein'],
          ['Flatten', '2D-Featuremap → 1D-Vektor', '❌ Nein'],
          ['Dense (FC)', 'Klassifikation', '✅ Ja (Gewichte)'],
        ],
      })}

      ${renderTable({
        headers: ['Architektur', 'Jahr', 'Besonderheit', 'ImageNet Top-5 Fehler'],
        rows: [
          ['AlexNet', '2012', 'Erste tiefe CNN auf GPU, ReLU statt Sigmoid', '15.3%'],
          ['VGG-16', '2014', 'Nur 3×3 Filter, sehr tief (16 Schichten)', '7.3%'],
          ['ResNet-50', '2015', 'Skip-Connections: h(x) = f(x) + x', '5.25%'],
          ['EfficientNet-B7', '2019', 'Compound Scaling (Breite/Tiefe/Auflösung)', '2.9%'],
          ['Vision Transformer', '2020', 'Kein CNN – Patches als Tokens für Transformer', '2.5%'],
        ],
      })}

      ${renderMerkboxGrid([
        { icon: 'fas fa-eye', title: 'Was lernen CNN-Filter?', text: 'Layer 1: Kanten, Farben. Layer 2: Ecken, Texturen. Layer 3: Muster (Netze, Streifen). Layer 4+: Objektteile. Letzter Layer: Ganze Objekte (Augen, Räder).' },
        { icon: 'fas fa-exchange-alt', title: 'Transfer Learning', text: 'Vortrainierte CNNs (z.B. ResNet auf ImageNet) als Ausgangspunkt nutzen. Nur die letzten Schichten für neue Aufgabe trainieren. Spart 90%+ Trainingszeit bei wenig Daten.' },
      ])}
    </div>`;
  }

  _panelRNN() {
    return `<div class="wim-category hidden" data-wim-cat="rnn">
      <h3 class="lz-h3">RNNs – Sequenzdaten mit Gedächtnis</h3>
      ${renderInfobox({ icon: 'fas fa-wave-square', title: 'Warum RNNs?', type: 'info',
        body: `MLP und CNN behandeln jeden Input unabhängig – sie haben kein Gedächtnis.<br>
               Für Sprache, Zeitreihen, Musik braucht man <strong>Kontext</strong>:<br>
               "Die Bank ist kaputt" – welche Bank? (Geld oder Möbel) → Kontext entscheidet!<br><br>
               RNN-Idee: Verarbeite Sequenz Schritt für Schritt und leite einen
               <strong>hidden state hₜ</strong> von Zeitschritt zu Zeitschritt weiter.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
RNN-Zelle (ein Zeitschritt):
  Eingaben: xₜ (aktueller Input), hₜ₋₁ (vorheriger hidden state)
  hₜ = tanh(Wₕ·hₜ₋₁ + Wₓ·xₜ + b)   ← neuer hidden state
  yₜ = softmax(Wᵧ·hₜ)                 ← Ausgabe (optional)

"Entfaltet" über Zeit (unrolling):
  x₁ → [RNN] → h₁ → [RNN] → h₂ → [RNN] → h₃ → ...
         ↑               ↑               ↑
         h₀=0           h₁             h₂

Problem: Vanishing Gradient über lange Sequenzen!
  Bei 100 Zeitschritten: Gradient ≈ 0.9^100 ≈ 0.0000265
  → RNN "vergisst" weiter zurückliegende Information
  → Kann keine langen Abhängigkeiten lernen
</pre>

      <h3 class="lz-h3">LSTM – Long Short-Term Memory</h3>
      ${renderInfobox({ icon: 'fas fa-memory', title: 'Lösung: 3 Gatter steuern den Informationsfluss', type: 'info',
        body: `LSTM führt einen <strong>Cell State cₜ</strong> (Langzeitgedächtnis) ein, der direkt durch die Zeit fließt – mit minimaler Modifikation.<br><br>
               Analogie: Ein Notizbuch, das man lesen, ergänzen und löschen kann.<br>
               Drei Gatter kontrollieren was hinein-, heraus- oder überschrieben wird.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
LSTM-Zelle – vollständige Formeln:

Eingaben: xₜ (aktueller Input), hₜ₋₁ (voriger hidden state), cₜ₋₁ (voriger cell state)
σ = Sigmoid-Funktion (gibt Wert in (0,1) aus)

1. FORGET GATE fₜ: "Was soll aus dem Gedächtnis gelöscht werden?"
   fₜ = σ(W_f · [hₜ₋₁, xₜ] + b_f)
   fₜ ≈ 0 → fast alles vergessen; fₜ ≈ 1 → fast alles behalten

2. INPUT GATE iₜ + CANDIDATE c̃ₜ: "Was soll neu hinzugefügt werden?"
   iₜ = σ(W_i · [hₜ₋₁, xₜ] + b_i)    ← wie viel neue Info?
   c̃ₜ = tanh(W_c · [hₜ₋₁, xₜ] + b_c)  ← neue Kandidatenwerte (-1 bis 1)

3. CELL STATE UPDATE:
   cₜ = fₜ ⊙ cₜ₋₁ + iₜ ⊙ c̃ₜ
   (altes × vergessen) + (neu × hinzufügen)
   ⊙ = elementweises Produkt (Hadamard)

4. OUTPUT GATE oₜ: "Was soll der versteckte Zustand ausgeben?"
   oₜ = σ(W_o · [hₜ₋₁, xₜ] + b_o)
   hₜ = oₜ ⊙ tanh(cₜ)

Warum kein Vanishing Gradient?
   Der Cell State cₜ wird via + addiert (nicht multipliziert!)
   → Gradient kann ungehindert durch viele Zeitschritte fließen ✅
</pre>

      <h3 class="lz-h3">Transformer & Self-Attention</h3>
      ${renderInfobox({ icon: 'fas fa-network-wired', title: '"Attention Is All You Need" (2017, Google)', type: 'info',
        body: `Transformer ersetzen RNNs komplett durch <strong>Self-Attention</strong>:<br>
               Jedes Token kann gleichzeitig auf alle anderen Tokens "schauen".<br><br>
               Vorteile gegenüber RNN:<br>
               • <strong>Parallelisierbar</strong> – kein sequentielles Verarbeiten mehr<br>
               • <strong>Direkter Zugriff</strong> auf weitentfernte Token (kein Vanishing Gradient)<br>
               • Basis für GPT, BERT, ChatGPT, Llama, DALL-E, ...` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Self-Attention: "Welche Wörter sind wichtig für dieses Wort?"

Satz: "Die Katze schlief, weil sie müde war."
        ↑     ↑                  ↑
       "sie" bezieht sich auf "Katze" – Attention-Mechanismus findet das!

Wie Self-Attention funktioniert:
  Für jedes Token t wird berechnet:
  Q_t = Query (was suche ich?)
  K_t = Key   (was biete ich an?)
  V_t = Value (was ist mein Inhalt?)

  Attention(Q,K,V) = softmax(Q·Kᵀ/√d_k) · V

  Q·Kᵀ = "Ähnlichkeitsmatrix" – wie relevant ist Token j für Token i?
  /√d_k = Skalierung (verhindert zu große Werte)
  softmax = Gewichte normieren (Summe=1)
  ·V = gewichtete Summe der Werte

Attention-Gewichte (vereinfacht, "sie" schaut auf alle Tokens):
  Die: 0.05  Katze: 0.42  schlief: 0.08  sie: 0.12  müde: 0.33
  → "sie" ist am stärksten mit "Katze" verbunden ✅
</pre>

      ${renderTable({
        headers: ['Modell', 'Typ', 'Trainingsziel', 'Parameter', 'Bekannt für'],
        rows: [
          ['BERT', 'Encoder', 'Masked Language Model', '340M', 'Sprachverstehen, NLP-Benchmark'],
          ['GPT-3', 'Decoder', 'Next Token Prediction', '175B', 'Textgenerierung, In-Context-Learning'],
          ['GPT-4', 'Decoder', 'Next Token Pred. + RLHF', '~1.8T (Schätzung)', 'ChatGPT, komplexes Reasoning'],
          ['T5', 'Encoder-Decoder', 'Text-to-Text', '11B', 'Übersetzung, Zusammenfassung'],
          ['LLaMA 3', 'Decoder', 'Next Token Pred.', '8B–70B', 'Open-Source LLM'],
          ['DALL-E 3', 'Transformer+Diffusion', 'Text→Bild', '~12B', 'Bildgenerierung'],
        ],
      })}

      ${renderCompare({
        titleA: 'RNN/LSTM',
        titleB: 'Transformer',
        listA: [
          'Sequentielle Verarbeitung',
          'Gut für kurze/mittlere Sequenzen',
          'Geringerer Speicherbedarf',
          'Vanishing Gradient (LSTM besser)',
          'Langsam zu trainieren',
        ],
        listB: [
          'Vollständig parallelisierbar',
          'Direkte Verbindung Token↔Token',
          'O(n²) Speicher (Attention Matrix)',
          'Kein Vanishing Gradient',
          'Schnell auf modernen GPUs',
        ],
      })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben mit Lösungen</h3>
      ${renderAccordion([
        {
          title: 'Aufg. 1: Was ist der Unterschied zwischen Gradient Descent, SGD und Mini-Batch-SGD?',
          content: `Gradient Descent (Batch GD):
  → Berechnet Gradient über ALLE Trainingsdaten
  → Sehr genauer Gradient
  → Sehr langsam bei großen Datensätzen

  Stochastic Gradient Descent (SGD):
  → Gradient pro einzelnem Beispiel
  → Sehr schnell, aber noisig (zufällige Schwankungen)
  → Kann lokale Minima "überspringen" (manchmal gut)

  Mini-Batch SGD:
  → Gradient über Batch von k Beispielen (k=32, 64, 128)
  → Kompromiss: stabiler als SGD, schneller als Batch GD
  → Standard in der Praxis`,
        },
        {
          title: 'Aufg. 2: CNN-Größenformel. Input: 32×32. Conv-Filter: 5×5, Stride=1, Padding=0. Wie groß ist die Output-Feature-Map?',
          content: `Output-Größe = ⌊(Input − Filter + 2·Padding) / Stride⌋ + 1
  = ⌊(32 − 5 + 2·0) / 1⌋ + 1
  = ⌊27/1⌋ + 1
  = 27 + 1 = 28

  Output-Feature-Map: 28×28`,
        },
        {
          title: 'Aufg. 3: Wie viele Parameter hat ein Conv-Layer mit 32 Filtern (3×3×3)?',
          content: `Ein Filter-Gewicht: 3×3×3 = 27 (3×3 Größe, 3 Input-Kanäle RGB)
  32 Filter: 27×32 = 864 Gewichte
  32 Bias-Terme: 32

  Gesamt: 864 + 32 = 896 Parameter

  Vergleich: Ein vollverbundener Layer 32²×32²×3 → 32×32×32×32×3 wäre riesig!
  CNN ist extrem parametereffizient durch shared weights.`,
        },
        {
          title: 'Aufg. 4: Erkläre die 3 LSTM-Gatter in eigenen Worten. Was macht jedes?',
          content: `FORGET GATE (Vergessen):
  σ(z) → Wert in (0,1). Steuert, wie viel vom alten Cell State behalten wird.
  0 = alles vergessen, 1 = alles behalten.
  Beispiel: Am Anfang eines neuen Satzes → "vergiss das Subjekt des letzten Satzes".

  INPUT GATE (Hinzufügen):
  Steuert, wie viel neue Information in den Cell State fließt.
  Kombiniert mit tanh-Kandidaten: "Wie viel von diesem neuen Inhalt übernehmen?"

  OUTPUT GATE (Ausgeben):
  Steuert, welcher Teil des Cell States als hidden state ausgegeben wird.
  "Welcher Teil des Gedächtnisses ist für die aktuelle Vorhersage relevant?"`,
        },
        {
          title: 'Aufg. 5: Warum braucht Self-Attention den Skalierungsfaktor 1/√d_k?',
          content: `Q·Kᵀ erzeugt Skalarprodukte.

  Für große Dimensionen d_k werden diese Skalarprodukte sehr groß
  (da sie Summen über viele Terme sind).

  Sehr große Werte → Softmax wird extrem "spitz" (fast 0 oder fast 1)
  → Gradient sehr klein → schlechtes Training (ähnlich wie Vanishing Gradient)

  Durch /√d_k werden die Werte in einen sinnvollen Bereich skaliert,
  sodass Softmax "weiche" Gewichte produziert und Gradienten gut fließen.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Klausur-Cheatsheet', type: 'success',
        body: `<strong>Backprop</strong>: Forward Pass → Loss → Rückwärts (Kettenregel) → Gewichte updaten.<br>
               <strong>Loss-Funktionen</strong>: MSE (Regression), Cross-Entropy (Klassifikation).<br>
               <strong>CNN</strong>: Conv (Filter extrakt. Merkmale), Pooling (Größe reduzieren), Shared Weights!<br>
               <strong>CNN-Größe</strong>: Output = ⌊(Input−Filter+2·Padding)/Stride⌋+1.<br>
               <strong>RNN</strong>: hₜ = tanh(Wₕhₜ₋₁+Wₓxₜ). Vanishing Gradient bei langen Seq.<br>
               <strong>LSTM</strong>: Forget/Input/Output Gate. Cell State = Langzeitgedächtnis. Löst Vanishing.<br>
               <strong>Transformer</strong>: Self-Attention = Q·Kᵀ/√d·V. Parallelisierbar, basis für GPT/BERT.` })}
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