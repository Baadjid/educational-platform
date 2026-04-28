// pages/projekte/lernzettel/faecher/informatik/themen/ki/ml-knn-kmeans.js
// Informatik 9.2 — Maschinelles Lernen: k-NN & k-Means

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
  prev: { label: '9.1 Suchalgorithmen', link: `${BASE}/themen/ki/suchalgorithmen` },
  next: { label: '9.3 Neuronale Netze', link: `${BASE}/themen/ki/neuronale-netze` },
};

const TABS = [
  { key: 'mlgrundlagen', label: '📚 ML-Grundlagen' },
  { key: 'knn',          label: '🔍 k-Nearest Neighbors' },
  { key: 'kmeans',       label: '🔵 k-Means Clustering' },
  { key: 'uebungen',     label: '✏ Übungen' },
];

export default class MlKnnKmeansPage {
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
            <span>9.2 · k-NN & k-Means</span>
          </nav>
          <h1 class="lz-sub-title">Maschinelles Lernen: k-NN & k-Means</h1>
          <p class="lz-sub-subtitle">Supervised vs. Unsupervised, Distanzmaße, Normalisierung, Clustering</p>
          ${renderTags(['k-NN', 'k-Means', 'Supervised', 'Unsupervised', 'Clustering', 'Normalisierung', 'BPE 13'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="mlKnnTabs" aria-label="k-NN & k-Means">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelMlGrundlagen()}
          ${this._panelKnn()}
          ${this._panelKmeans()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelMlGrundlagen() {
    return `<div class="wim-category active" data-wim-cat="mlgrundlagen">
      ${renderInfobox({ icon: 'fas fa-brain', title: 'Klassisches Programmieren vs. Machine Learning', type: 'info',
        body: `<strong>Klassisch</strong>: Entwickler schreibt Regeln → Computer führt aus.<br>
               <strong>ML</strong>: Computer lernt Regeln selbst aus Daten.<br><br>
               Beispiel E-Mail-Spam:<br>
               • Klassisch: if "Gewinn" in betreff and "sofort" in text: spam = True<br>
               • ML: 10.000 Spam-Mails + 10.000 Ham-Mails → Modell erkennt Muster automatisch.` })}

      ${renderTable({
        headers: ['ML-Kategorie', 'Trainingsdaten', 'Ziel', 'Beispiele', 'Algorithmen'],
        rows: [
          ['Supervised Learning', 'Input + Label (beschriftet)', 'Input→Output-Funktion lernen', 'Spam-Filter, Bildklassifikation, Kreditrisiko', 'k-NN, Entscheidungsbaum, SVM, Neuronale Netze'],
          ['Unsupervised Learning', 'Nur Input (unbeschriftet)', 'Verborgene Struktur entdecken', 'Kundensegmentierung, Themenmodellierung', 'k-Means, PCA, Autoencoder, DBSCAN'],
          ['Reinforcement Learning', 'Belohnungssignal', 'Policy durch Trial & Error', 'Spieler-KI, Robotersteuerung, Empfehlungen', 'Q-Learning, PPO, DQN'],
          ['Semi-Supervised', 'Wenig Labels + viel unlabeled', 'Labels effizienter nutzen', 'Medizinische Bilder (wenig Labels)', 'Label Propagation, Self-Training'],
        ],
      })}

      <h4 class="lz-h4">Qualitätsmetriken für Klassifikationsmodelle</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Konfusionsmatrix (Beispiel: Spam-Erkennung):
                    Tatsächlich SPAM  │  Tatsächlich HAM
                   ───────────────────┼───────────────────
Vorhergesagt SPAM │    TP = 90        │    FP = 10
Vorhergesagt HAM  │    FN = 5         │    TN = 195
                  └───────────────────┴────────────────────

TP = True Positive  (Spam korrekt als Spam erkannt)
TN = True Negative  (Ham korrekt als Ham erkannt)
FP = False Positive (Ham fälschlicherweise als Spam)  ← "Fehlalarm"
FN = False Negative (Spam fälschlicherweise als Ham)  ← "verpasst"

Metriken:
  Accuracy  = (TP+TN) / Gesamt  = (90+195)/300 = 95%
  Precision = TP / (TP+FP)      = 90/100       = 90%  (wie viel vom Vorhergesagten stimmt?)
  Recall    = TP / (TP+FN)      = 90/95        = 94,7% (wie viel wurde gefunden?)
  F1-Score  = 2 · (Precision·Recall) / (P+R)  = 2·(0.9·0.947)/(0.9+0.947) = 92.3%
</pre>

      ${renderMerkboxGrid([
        { icon: 'fas fa-balance-scale', title: 'Wann welche Metrik?', text: 'Medizin (Krebs-Test): hoher Recall wichtig (keine Fälle verpassen). Spam-Filter: hohe Precision wichtig (keine echten Mails verlieren). F1 = Kompromiss.' },
        { icon: 'fas fa-database', title: 'Overfitting vs. Underfitting', text: 'Overfitting: Modell lernt Trainingsdaten auswendig, generalisiert schlecht. Underfitting: Modell zu simpel, lernt nicht genug. Lösung: Cross-Validation, Regularisierung.' },
      ])}
    </div>`;
  }

  _panelKnn() {
    return `<div class="wim-category hidden" data-wim-cat="knn">
      <h3 class="lz-h3">k-Nearest Neighbors (k-NN)</h3>
      ${renderInfobox({ icon: 'fas fa-users', title: 'Idee: "Sag mir, wer deine Nachbarn sind..."', type: 'info',
        body: `k-NN ist ein <strong>Lazy Learner</strong> – es speichert alle Trainingsdaten und klassifiziert neue Punkte
               durch <strong>Mehrheitsentscheidung der k nächsten Nachbarn</strong>.<br><br>
               <strong>Lazy</strong>: Kein Training nötig! Die gesamte Arbeit passiert bei der Vorhersage.<br>
               <strong>k</strong>: Die Anzahl der Nachbarn, die "abstimmen".<br>
               <strong>Distanzmaß</strong>: Euklidisch (Standard), Manhattan, Kosinus, etc.` })}

      ${renderFormulaBox({
        label: 'Euklidische Distanz (n Dimensionen)',
        formula: 'd(A, B) = √( (x₁−y₁)² + (x₂−y₂)² + ... + (xₙ−yₙ)² ) = √(Σᵢ (aᵢ−bᵢ)²)',
        desc: '2D-Beispiel: d((2,3), (5,7)) = √((5−2)²+(7−3)²) = √(9+16) = √25 = 5',
      })}

      <h4 class="lz-h4">Vollständiges Beispiel: Tumor-Klassifikation</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Features: Tumorgröße (mm), Zelldichte (0-10)
Klassen: B = benign (gutartig), M = malignant (bösartig)

Trainingsdaten:
  ID │ Größe │ Dichte │ Klasse
  ───┼───────┼────────┼───────
  P1 │  2    │   3    │  B
  P2 │  3    │   4    │  B
  P3 │  3    │   2    │  B
  P4 │  7    │   8    │  M
  P5 │  8    │   7    │  M
  P6 │  9    │   9    │  M

Neuer Patient: X = (5, 5)  – welche Klasse?

Distanzberechnung:
  d(X, P1) = √((5−2)²+(5−3)²) = √(9+4)   = √13 ≈ 3.61
  d(X, P2) = √((5−3)²+(5−4)²) = √(4+1)   = √5  ≈ 2.24
  d(X, P3) = √((5−3)²+(5−2)²) = √(4+9)   = √13 ≈ 3.61
  d(X, P4) = √((5−7)²+(5−8)²) = √(4+9)   = √13 ≈ 3.61
  d(X, P5) = √((5−8)²+(5−7)²) = √(9+4)   = √13 ≈ 3.61
  d(X, P6) = √((5−9)²+(5−9)²) = √(16+16) = √32 ≈ 5.66

Sortiert (nächster zuerst):
  1. P2: 2.24 (B)
  2. P1: 3.61 (B)  ← gleichstand: nehme niedrigere ID
  3. P3: 3.61 (B)
  4. P4: 3.61 (M)
  5. P5: 3.61 (M)
  6. P6: 5.66 (M)

k=1: Nachbar P2 (B) → Klasse: B
k=3: Nachbarn P2,P1,P3 → 3×B, 0×M → Klasse: B
k=5: Nachbarn P2,P1,P3,P4,P5 → 3×B, 2×M → Klasse: B

Ergebnis für k=3: Gutartig (B) ✅
</pre>

      <h4 class="lz-h4">Normalisierung – Warum unverzichtbar!</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Problem: Features mit unterschiedlichen Skalen dominieren die Distanz!

Beispiel: Kreditrisiko-Klassifikation
  Feature 1: Alter (20–80 Jahre)
  Feature 2: Jahreseinkommen (10.000–100.000 €)

Ohne Normalisierung:
  Person A: Alter=30, Einkommen=20.000
  Person B: Alter=31, Einkommen=50.000
  d(A,B) = √((30−31)²+(20000−50000)²) = √(1 + 900.000.000) ≈ 30.000
  → Das Alter (Unterschied=1) hat quasi keinen Einfluss!

Min-Max-Normalisierung: x' = (x − min) / (max − min) → Werte in [0, 1]

  Alter:      min=20, max=80  →  30' = (30−20)/(80−20) = 10/60 ≈ 0.167
                                  31' = (31−20)/60 ≈ 0.183
  Einkommen:  min=10k, max=100k → 20k' = (20−10)/(100−10) = 10/90 ≈ 0.111
                                   50k' = (50−10)/90 ≈ 0.444

Nach Normalisierung:
  d(A,B) = √((0.167−0.183)²+(0.111−0.444)²) = √(0.00026+0.111) ≈ 0.334
  → Beide Features tragen fair zur Distanz bei! ✅
</pre>

      ${renderTable({
        headers: ['k-Wert', 'Charakteristik', 'Entscheidungsgrenze', 'Problem'],
        rows: [
          ['k = 1', 'Sehr spezifisch, sehr sensibel', 'Sehr zackig, komplex', 'Overfitting, empfindlich für Ausreißer'],
          ['k = 3–7', 'Guter Kompromiss (Standard)', 'Glatt, aber flexibel', '—'],
          ['k = 15+', 'Sehr glatt, sehr robust', 'Fast linear', 'Underfitting – ignoriert lokale Muster'],
          ['k = n (alle)', 'Gibt immer die häufigste Klasse zurück', 'Keine Grenze', 'Vollständiges Underfitting'],
        ],
      })}

      ${renderMerkboxGrid([
        { icon: 'fas fa-clock', title: 'Laufzeit-Problem', text: 'k-NN hat kein Training, aber jede Vorhersage kostet O(n·d) (n Trainingspunkte, d Dimensionen). Bei 1 Mio. Punkten und d=100 → sehr langsam. Lösung: KD-Trees oder Ball-Trees für schnellere Suche.' },
        { icon: 'fas fa-expand-arrows-alt', title: 'Curse of Dimensionality', text: 'In hohen Dimensionen (d>20) werden alle Punkte ähnlich weit voneinander entfernt → Distanzmaße verlieren ihren Sinn. Lösung: Feature Selection, PCA (Dimensionsreduktion).' },
      ])}
    </div>`;
  }

  _panelKmeans() {
    return `<div class="wim-category hidden" data-wim-cat="kmeans">
      <h3 class="lz-h3">k-Means Clustering (Lloyd-Algorithmus)</h3>
      ${renderInfobox({ icon: 'fas fa-circle', title: 'Ziel: Gruppen ohne Labels finden', type: 'info',
        body: `k-Means teilt n Datenpunkte in k Cluster auf, sodass die <strong>Intra-Cluster-Varianz</strong> minimiert wird.
               Jeder Punkt gehört zum Cluster mit dem nächstgelegenen Zentroiden.<br><br>
               <strong>4 Schritte</strong>:<br>
               1. Initialisierung: k zufällige Zentroide wählen<br>
               2. Zuweisung: Jeden Punkt dem nächsten Zentroid zuordnen<br>
               3. Update: Neue Zentroide = Mittelwert der zugehörigen Punkte<br>
               4. Wiederholen bis Konvergenz (Zentroide bewegen sich nicht mehr)` })}

      <h4 class="lz-h4">Vollständiges Beispiel – Iteration bis Konvergenz</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
6 Datenpunkte, k=2 Cluster:
  A=(1,1), B=(1,3), C=(2,2)   ← eigentlich Cluster 1
  D=(7,7), E=(8,8), F=(9,7)   ← eigentlich Cluster 2

──────────────────────────────────────────────────────────────────
Initialisierung: Zentroide Z1=(2,2) und Z2=(8,8) (zufällig gewählt)

ITERATION 1 – Zuweisung:
  d(A=(1,1), Z1=(2,2)) = √(1+1) ≈ 1.41     d(A, Z2=(8,8)) = √(49+49) ≈ 9.90  → Cluster 1
  d(B=(1,3), Z1=(2,2)) = √(1+1) ≈ 1.41     d(B, Z2=(8,8)) = √(49+25) ≈ 8.60  → Cluster 1
  d(C=(2,2), Z1=(2,2)) = 0                  d(C, Z2=(8,8)) = √(36+36) ≈ 8.49  → Cluster 1
  d(D=(7,7), Z1=(2,2)) = √(25+25) ≈ 7.07   d(D, Z2=(8,8)) = √(1+1) ≈ 1.41   → Cluster 2
  d(E=(8,8), Z1=(2,2)) = √(36+36) ≈ 8.49   d(E, Z2=(8,8)) = 0                → Cluster 2
  d(F=(9,7), Z1=(2,2)) = √(49+25) ≈ 8.60   d(F, Z2=(8,8)) = √(1+1) ≈ 1.41   → Cluster 2

Cluster 1: {A, B, C}     Cluster 2: {D, E, F}

ITERATION 1 – Update (neue Zentroide = Mittelwert):
  Z1_neu = ((1+1+2)/3, (1+3+2)/3) = (4/3, 6/3) = (1.33, 2.0)
  Z2_neu = ((7+8+9)/3, (7+8+7)/3) = (24/3, 22/3) = (8.0, 7.33)

──────────────────────────────────────────────────────────────────
ITERATION 2 – Zuweisung mit neuen Zentroiden:
  Z1=(1.33, 2.0), Z2=(8.0, 7.33)

  d(A=(1,1), Z1) = √(0.11+1) ≈ 1.05   d(A, Z2) ≈ 9.35  → Cluster 1
  d(B=(1,3), Z1) = √(0.11+1) ≈ 1.05   d(B, Z2) ≈ 8.21  → Cluster 1
  d(C=(2,2), Z1) = √(0.44+0) ≈ 0.67   d(C, Z2) ≈ 7.79  → Cluster 1
  d(D=(7,7), Z1) ≈ 7.23               d(D, Z2) ≈ 1.20  → Cluster 2
  d(E=(8,8), Z1) ≈ 8.55               d(E, Z2) ≈ 1.38  → Cluster 2
  d(F=(9,7), Z1) ≈ 8.61               d(F, Z2) = 1.0   → Cluster 2

Zuweisungen: identisch zu Iteration 1! → KONVERGENZ ERREICHT ✅

Finale Zentroide: Z1=(1.33, 2.0), Z2=(8.0, 7.33)
Finale Cluster: C1={A,B,C}, C2={D,E,F}
</pre>

      <h4 class="lz-h4">Wie wählt man k? – Die Ellbogen-Methode</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Inertia = Summe der quadratischen Abstände aller Punkte zu ihrem Zentroid
(= Maß für Cluster-Kompaktheit, kleiner = besser)

k  │ Inertia │ Reduktion
───┼─────────┼──────────
1  │  240.0  │  —
2  │   15.0  │  225.0  ← großer Sprung!
3  │   11.0  │    4.0
4  │    8.5  │    2.5
5  │    7.0  │    1.5
6  │    6.5  │    0.5

Ellbogen-Plot (Inertia vs. k):
240 │ ●
    │
    │
    │
 15 │         ●
 11 │              ●
8.5 │                    ●
    └─────────────────────────→ k
    1    2    3    4    5

→ Der "Ellbogen" ist bei k=2 → das ist die sinnvollste Clusteranzahl!
Mehr Cluster bringt kaum noch Verbesserung (Gesetz des abnehmenden Ertrags).
</pre>

      ${renderTable({
        headers: ['k-Means Problem', 'Erklärung', 'Lösung'],
        rows: [
          ['Schlechte Initialisierung', 'Zufällige Zentroide können in lokale Minima führen', 'k-Means++ (intelligente Initialisierung)'],
          ['Anzahl k unbekannt', 'k muss vorab festgelegt werden', 'Ellbogen-Methode, Silhouette-Score'],
          ['Nur kugelförmige Cluster', 'Kann keine Halbmonde oder verschlungene Formen', 'DBSCAN, Gaussian Mixture Models'],
          ['Empfindlich für Ausreißer', 'Ein Ausreißer kann Zentroid stark verschieben', 'k-Medoids (nutzt echte Datenpunkte als Zentren)'],
          ['Nicht deterministisch', 'Verschiedene Starts → verschiedene Ergebnisse', 'Mehrfach ausführen, bestes Ergebnis nehmen'],
        ],
      })}

      ${renderCompare({
        titleA: 'k-NN (Klassifikation)',
        titleB: 'k-Means (Clustering)',
        listA: [
          'Supervised Learning (Labels nötig)',
          'k = Anzahl Nachbarn bei Vorhersage',
          'Kein Training (Lazy Learner)',
          'Für: Klassifikation, Regression',
          'Vorhersage: O(n·d) pro Query',
        ],
        listB: [
          'Unsupervised Learning (keine Labels)',
          'k = Anzahl Cluster (vorab festlegen)',
          'Iteratives Training bis Konvergenz',
          'Für: Segmentierung, Strukturentdeckung',
          'Vorhersage: O(k·d) pro Query',
        ],
      })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben mit Lösungen</h3>
      ${renderAccordion([
        {
          title: 'Aufg. 1: Berechne die euklidische Distanz zwischen P1=(3,4,0) und P2=(0,0,0).',
          content: `d(P1, P2) = √((3−0)² + (4−0)² + (0−0)²)
  = √(9 + 16 + 0)
  = √25
  = 5`,
        },
        {
          title: 'Aufg. 2: k-NN Klassifikation. Trainingsdata: A=(1,1,K1), B=(2,2,K1), C=(5,5,K2), D=(6,4,K2). Neuer Punkt X=(3,3). k=3. Welche Klasse?',
          content: `Distanzen berechnen:
  d(X, A) = √((3−1)²+(3−1)²) = √(4+4) = √8 ≈ 2.83  → K1
  d(X, B) = √((3−2)²+(3−2)²) = √(1+1) = √2 ≈ 1.41  → K1
  d(X, C) = √((3−5)²+(3−5)²) = √(4+4) = √8 ≈ 2.83  → K2
  d(X, D) = √((3−6)²+(3−4)²) = √(9+1) = √10 ≈ 3.16 → K2

  Sortiert: B(1.41,K1), A(2.83,K1), C(2.83,K2)

  k=3: Nachbarn B, A, C → 2×K1, 1×K2 → Klasse: K1`,
        },
        {
          title: 'Aufg. 3: Normalisierung. Feature "Alter": Min=18, Max=65. Normalisiere: 25 Jahre, 45 Jahre.',
          content: `Min-Max-Normalisierung: x' = (x − min) / (max − min)

  Spanne = 65 − 18 = 47

  25 Jahre: (25 − 18) / 47 = 7/47 ≈ 0.149
  45 Jahre: (45 − 18) / 47 = 27/47 ≈ 0.574

  Interpretation: 25 Jahre entspricht 14,9% des Wertebereichs, 45 Jahre 57,4%.`,
        },
        {
          title: 'Aufg. 4: k-Means, eine Iteration. Punkte: A=(0,0), B=(4,0), C=(0,4). k=2. Start-Zentroide: Z1=(0,0), Z2=(4,4). Welche Cluster entstehen? Wo sind die neuen Zentroide?',
          content: `Zuweisung:
  d(A=(0,0), Z1=(0,0)) = 0         d(A, Z2=(4,4)) = √32 ≈ 5.66  → Cluster 1
  d(B=(4,0), Z1=(0,0)) = 4         d(B, Z2=(4,4)) = 4             → Gleichstand → Cluster 1 (oder 2, je nach Implementierung)
  d(C=(0,4), Z1=(0,0)) = 4         d(C, Z2=(4,4)) = 4             → Gleichstand → Cluster 1

  (Bei Gleichstand: typischerweise Cluster 1 gewählt)
  Cluster 1: {A, B, C}  → Z1_neu = ((0+4+0)/3, (0+0+4)/3) = (1.33, 1.33)
  Cluster 2: {} → Z2 bleibt bei (4,4) oder wird neu initialisiert

  Hinweis: k-Means sollte bei Gleichstand deterministisch sein.`,
        },
        {
          title: 'Aufg. 5: Warum ist k-Means nicht geeignet für Cluster in Form von Halbmonden?',
          content: `k-Means sucht sphärische (kugelförmige) Cluster, weil es Euklidische Distanzen zu Zentroiden verwendet.
  Halbmonde sind nicht-konvex – es gibt keinen guten Zentroid, der beide Enden des Halbmonds gleich nah hat.

  Lösung: DBSCAN (Density-Based Clustering):
  • Findet dichte Bereiche ohne vorab k festzulegen
  • Kann beliebige Formen erkennen
  • Erkennt Ausreißer (Noise-Punkte)`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Klausur-Cheatsheet', type: 'success',
        body: `<strong>k-NN</strong>: Distanz zu allen Trainingspunkten → k nächste → Mehrheitsvote.<br>
               <strong>Normalisierung</strong>: x' = (x−min)/(max−min) → unbedingt vor k-NN!<br>
               <strong>k-Wahl bei k-NN</strong>: Klein → Overfitting, Groß → Underfitting. Ungerade k vermeidet Gleichstand.<br>
               <strong>k-Means</strong>: 4 Schritte: Init → Assign → Update → Repeat. Konvergenz wenn Zentroide stabil.<br>
               <strong>Ellbogen-Methode</strong>: Inertia plotten, "Knick" im Graph = optimales k.<br>
               <strong>Supervised vs. Unsupervised</strong>: Mit Labels = supervised, ohne = unsupervised.` })}
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