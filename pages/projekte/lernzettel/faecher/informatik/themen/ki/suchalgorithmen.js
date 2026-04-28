// pages/projekte/lernzettel/faecher/informatik/themen/ki/suchalgorithmen.js
// Informatik 9.1 — Suchalgorithmen: BFS, DFS, A*, Minimax, Alpha-Beta

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
  prev: { label: '8.3 ACID & NoSQL', link: `${BASE}/themen/datenbanken/advanced-db` },
  next: { label: '9.2 k-NN & k-Means', link: `${BASE}/themen/ki/ml-knn-kmeans` },
};

const TABS = [
  { key: 'uninformiert', label: '🔍 BFS & DFS' },
  { key: 'informiert',   label: '🧭 A*-Algorithmus' },
  { key: 'minimax',      label: '🎮 Minimax & Alpha-Beta' },
  { key: 'uebungen',     label: '✏ Übungen' },
];

export default class SuchalgorithmenPage {
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
            <span>9.1 · Suchalgorithmen</span>
          </nav>
          <h1 class="lz-sub-title">KI-Suchalgorithmen: BFS, DFS, A* & Minimax</h1>
          <p class="lz-sub-subtitle">Uninformierte & informierte Suche, Spielbäume, Heuristiken</p>
          ${renderTags(['BFS', 'DFS', 'A*', 'Minimax', 'Heuristik', 'Alpha-Beta', 'BPE 13'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="suchTabs" aria-label="Suchalgorithmen">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelUninformiert()}
          ${this._panelInformiert()}
          ${this._panelMinimax()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelUninformiert() {
    return `<div class="wim-category active" data-wim-cat="uninformiert">
      ${renderInfobox({ icon: 'fas fa-search', title: 'Das Suchproblem – Begriffe verstehen', type: 'info',
        body: `KI-Suche modelliert Probleme als <strong>Zustandsraumgraph</strong>:<br>
               • <strong>Zustand (State)</strong>: Eine Momentaufnahme des Problems (z.B. Position im Labyrinth, Stellung im Schach)<br>
               • <strong>Startzustand</strong>: Ausgangspunkt der Suche<br>
               • <strong>Zielzustand</strong>: Was wir suchen (kann ein Test sein: isGoal?)<br>
               • <strong>Aktionen</strong>: Mögliche Übergänge zwischen Zuständen (hoch/runter/links/rechts)<br>
               • <strong>Pfadkosten</strong>: Kosten einer Aktion (Strecke in km, Zeit, etc.)<br><br>
               Alle Suchalgorithmen traversieren diesen Graphen – sie unterscheiden sich <em>nur</em> in der <strong>Reihenfolge der Exploration</strong>.` })}

      <h3 class="lz-h3">Breitensuche (BFS) – vollständiger Trace</h3>
      ${renderInfobox({ icon: 'fas fa-layer-group', title: 'Kernidee: Queue (FIFO)', type: 'info',
        body: `BFS erkundet Schicht für Schicht – wie Wellen auf einem Teich. Zuerst alle direkten Nachbarn, dann deren Nachbarn, usw.<br>
               <strong>Queue = Warteschlange</strong>: Neues hinten rein (enqueue), vorne raus (dequeue).` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Graph (ungewichtet, gerichtet):
           A
          / \\
         B   C
        / \\   \\
       D   E   F
                \\
                 G

Ziel: Knoten G finden

BFS-Trace (Queue immer von links lesen = nächster dran):
┌────────┬───────────────────────────┬────────────┬────────────────┐
│ Schritt│ Queue (vorne → hinten)    │ Expandiert │ Neu entdeckt   │
├────────┼───────────────────────────┼────────────┼────────────────┤
│   1    │ [A]                       │ —          │ —              │
│   2    │ [B, C]                    │ A          │ B, C           │
│   3    │ [C, D, E]                 │ B          │ D, E           │
│   4    │ [D, E, F]                 │ C          │ F              │
│   5    │ [E, F]                    │ D          │ (keine neuen)  │
│   6    │ [F]                       │ E          │ (keine neuen)  │
│   7    │ [G]                       │ F          │ G  ← ZIEL!     │
│   8    │ []                        │ G          │ Gefunden!      │
└────────┴───────────────────────────┴────────────┴────────────────┘

Erkundungsreihenfolge: A → B → C → D → E → F → G
Kürzester Pfad: A → C → F → G  (Tiefe 3, nur 3 Kanten)

💡 Warum kürzester Pfad?
   BFS besucht ALLE Knoten auf Tiefe k, bevor es Tiefe k+1 betrachtet.
   → Der erste Weg zum Ziel ist immer der kürzeste (in Kantenanzahl).
</pre>

      <h3 class="lz-h3">Tiefensuche (DFS) – vollständiger Trace</h3>
      ${renderInfobox({ icon: 'fas fa-arrow-down', title: 'Kernidee: Stack (LIFO)', type: 'info',
        body: `DFS taucht so tief wie möglich in einen Ast ein, bevor es zurückspringt (<strong>Backtracking</strong>).<br>
               <strong>Stack = Stapel</strong>: Neues oben drauf (push), oben nehmen (pop).<br>
               Alternativ: Rekursive Implementierung nutzt automatisch den Aufruf-Stack.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Gleicher Graph, DFS-Trace (linker Nachbar zuerst):
┌────────┬───────────────────────────┬────────────┬────────────────┐
│ Schritt│ Stack (oben → unten)      │ Expandiert │ Neu entdeckt   │
├────────┼───────────────────────────┼────────────┼────────────────┤
│   1    │ [A]                       │ —          │ —              │
│   2    │ [B, C]  ← B oben!         │ A          │ B, C           │
│   3    │ [D, E, C]  ← D oben!      │ B          │ D, E           │
│   4    │ [E, C]                    │ D          │ (keine neuen)  │
│   5    │ [C]                       │ E          │ (keine neuen)  │
│   6    │ [F]                       │ C          │ F              │
│   7    │ [G]                       │ F          │ G  ← ZIEL!     │
│   8    │ []                        │ G          │ Gefunden!      │
└────────┴───────────────────────────┴────────────┴────────────────┘

Erkundungsreihenfolge: A → B → D → E → C → F → G
Gefundener Pfad: A → B → ... → G  ← NICHT der kürzeste!

⚠️  DFS-Probleme:
    1. Findet NICHT den kürzesten Pfad
    2. Kann in unendlichen Graphen endlos laufen
    → Lösung: Depth-Limited Search (Tiefenlimit l setzen)
    → Besser: Iterative Deepening DFS (IDDFS):
       Starte mit l=0, dann l=1, l=2, ... bis Ziel gefunden.
       Kombiniert BFS-Optimalität + DFS-Speichereffizienz!
</pre>

      ${renderTable({
        headers: ['Merkmal', 'BFS', 'DFS', 'IDDFS'],
        rows: [
          ['Datenstruktur', 'Queue (FIFO)', 'Stack (LIFO)', 'Stack (LIFO)'],
          ['Erkundung', 'Schicht für Schicht', 'Ast für Ast', 'Schicht für Schicht'],
          ['Kürzester Pfad?', '✅ Ja', '❌ Nein', '✅ Ja'],
          ['Speicherbedarf', 'O(b^d) hoch!', 'O(b·m) gering', 'O(b·d) gering'],
          ['Vollständig?', '✅ Ja', '⚠ Mit Limit', '✅ Ja'],
          ['Zeitkomplexität', 'O(b^d)', 'O(b^m)', 'O(b^d)'],
          ['Wiederholung?', 'Nein', 'Nein', 'Ja (aber effizient)'],
        ],
      })}
      <p style="color:var(--lz-muted,#8892a4);font-size:0.83rem;margin-top:0.3rem;">b = Branching Factor (Durchschnittl. Nachbarn), d = Tiefe des Ziels, m = max. Baumtiefe</p>

      ${renderMerkboxGrid([
        { icon: 'fas fa-lightbulb', title: 'Merkhilfe BFS', text: '<strong>B</strong>FS → <strong>B</strong>reit → <strong>B</strong>us-Queue (hinten rein, vorne raus). Findet immer den <strong>b</strong>esten (kürzesten) Weg.' },
        { icon: 'fas fa-lightbulb', title: 'Merkhilfe DFS', text: '<strong>D</strong>FS → <strong>D</strong>ief → <strong>D</strong>urchbohren. Stack = Teller-Stapel. Spart Speicher, aber kein Optimalitätsgarantie.' },
      ])}
    </div>`;
  }

  _panelInformiert() {
    return `<div class="wim-category hidden" data-wim-cat="informiert">
      <h3 class="lz-h3">Informierte Suche: Heuristiken als Kompass</h3>
      ${renderInfobox({ icon: 'fas fa-compass', title: 'Was ist eine Heuristik?', type: 'info',
        body: `BFS/DFS suchen <em>blind</em> – sie kennen das Ziel nicht. Eine <strong>Heuristik h(n)</strong> gibt eine Schätzung der Restkosten vom Knoten n zum Ziel.<br><br>
               <strong>Zulässige Heuristik (admissible)</strong>: h(n) ≤ tatsächliche Kosten zum Ziel.<br>
               → Überschätzt nie → A* garantiert optimale Lösung!<br><br>
               Beispiele guter Heuristiken:<br>
               • Routenplanung: Luftliniendistanz (≤ echte Straßenkosten)<br>
               • 15-Puzzle: Manhattan-Distanz jeder Kachel (≤ echte Züge)<br>
               • Schach: Materialwert (Dame=9, Turm=5, Läufer=3, Springer=3, Bauer=1)` })}

      ${renderFormulaBox({
        label: 'A*-Bewertungsfunktion',
        formula: 'f(n) = g(n) + h(n)',
        desc: 'g(n) = tatsächliche Kosten Start→n  (bisher angefallen)\nh(n) = heuristische Schätzung n→Ziel (noch vor uns)\nf(n) = geschätzte Gesamtkosten des besten Weges durch n\n\nA* expandiert immer den Knoten mit dem kleinsten f(n).',
      })}

      <h4 class="lz-h4">Vollständiges A*-Beispiel: Städte-Navigation</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Straßennetz (Kantengewicht = km):
                  5
       Start ────────── B
         |  \\           |
       4 |   \\ 7      3 |
         |    \\         |
         C     D ─────── Ziel
         |       6       |
       8 └───────────────┘

Luftlinien-Heuristik h(n) zum Ziel:
  Start=10, B=5, C=7, D=4, Ziel=0

──── A*-Trace ──────────────────────────────────────────────────────
OPEN  = noch nicht expandierte Knoten
CLOSED = bereits expandiert

Schritt 1:
  OPEN  = {Start: g=0, h=10, f=10}
  Wähle Start (kleinster f=10).

Schritt 2: Expandiere Start → Nachbarn: B, C, D
  B: g=0+5=5,  h=5,  f=10
  C: g=0+4=4,  h=7,  f=11
  D: g=0+7=7,  h=4,  f=11
  OPEN = {B:10, C:11, D:11}, CLOSED={Start}
  Wähle B (f=10, gleichstand mit Start aber Start ist geschlossen).

Schritt 3: Expandiere B → Nachbar: Ziel
  Ziel: g=5+3=8,  h=0,  f=8
  OPEN = {Ziel:8, C:11, D:11}, CLOSED={Start, B}
  Wähle Ziel (f=8 – kleinstes!).

Schritt 4: Ziel expandiert → FERTIG!
  Optimaler Pfad: Start → B → Ziel
  Gesamtkosten:   5 + 3 = 8 km  ✅

Vergleich der Pfade:
  Start→B→Ziel:       5+3 = 8  ← optimal (A* gefunden)
  Start→C→Ziel:       4+8 = 12
  Start→D→Ziel:       7+6 = 13
</pre>

      ${renderTable({
        headers: ['Heuristik', 'Einsatzgebiet', 'Formel', 'Zulässig?'],
        rows: [
          ['Luftlinie (Euklidisch)', 'Routenplanung', '√((x₁−x₂)²+(y₁−y₂)²)', '✅ Ja'],
          ['Manhattan-Distanz', 'Gitter, 15-Puzzle', '|x₁−x₂| + |y₁−y₂|', '✅ Ja'],
          ['Fehlplatzierte Kacheln', '15-Puzzle (schwach)', 'Anzahl falsch platzierter Kacheln', '✅ Ja'],
          ['Materialwert', 'Schach', 'Σ (Figurenwert)', '⚠ Näherung'],
          ['h(n) = 0', 'Jedes Problem', 'Immer 0', '✅ Ja → entspricht Dijkstra'],
        ],
      })}

      ${renderCompare({
        titleA: 'Greedy Best-First',
        titleB: 'A* (optimal)',
        listA: [
          'f(n) = h(n)  – nur Heuristik',
          'Ignoriert bisherige Kosten g(n)',
          'Schnell, wenige Expansionen',
          '❌ Nicht optimal – kann Umwege nehmen',
          '❌ Nicht vollständig in endlosen Graphen',
        ],
        listB: [
          'f(n) = g(n) + h(n)  – beide Komponenten',
          'Balanciert Kosten + Schätzung',
          'Mehr Expansionen als Greedy',
          '✅ Optimal (bei zulässiger Heuristik)',
          '✅ Vollständig',
        ],
      })}

      ${renderInfobox({ icon: 'fas fa-exclamation-triangle', title: 'A*-Schwäche: Speicher', type: 'warning',
        body: `A* hält alle besuchten Knoten in CLOSED – bei großen Graphen explodiert der Speicherbedarf.<br>
               <strong>IDA* (Iterative Deepening A*)</strong>: Wie IDDFS, aber nutzt f-Werte als Tiefenlimit statt Tiefe.
               Benötigt nur O(d) Speicher bei gleicher Optimalität. Standard für 15-Puzzle-Löser.` })}
    </div>`;
  }

  _panelMinimax() {
    return `<div class="wim-category hidden" data-wim-cat="minimax">
      <h3 class="lz-h3">Minimax – Spielbäume</h3>
      ${renderInfobox({ icon: 'fas fa-chess', title: 'Idee: Gegner spielt perfekt', type: 'info',
        body: `<strong>Nullsummenspiel</strong>: Was MAX gewinnt, verliert MIN (und umgekehrt).<br><br>
               <strong>MAX</strong> = wir (KI) → will hohen Wert → maximiert<br>
               <strong>MIN</strong> = Gegner → will niedrigen Wert → minimiert<br><br>
               Minimax nimmt an, dass <em>beide Spieler perfekt spielen</em>.
               Der Algorithmus baut den Baum bis zu den Blättern auf, berechnet Blattwerte
               (mit Bewertungsfunktion) und propagiert sie rückwärts zur Wurzel.` })}

      <h4 class="lz-h4">Vollständiges Beispiel – Tiefe 3</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Spielbaum (MAX startet, dann MIN, dann Blätter auf Tiefe 2):

                         [MAX]               ← Tiefe 0 (Wurzel: wir ziehen)
                       /        \
                  [MIN]          [MIN]        ← Tiefe 1 (Gegner zieht)
                /       \      /      \
             [MAX]    [MAX]  [MAX]   [MAX]    ← Tiefe 2 (wir ziehen)
             / \      / \    / \     / \
            3   5    2   9  1   7   4   8     ← Blätter (Bewertung)

Schritt 1: MAX-Knoten auf Tiefe 2 auswerten:
  Linker MAX:   MAX(3, 5) = 5
  2. MAX:       MAX(2, 9) = 9
  3. MAX:       MAX(1, 7) = 7
  4. MAX:       MAX(4, 8) = 8

Spielbaum nach Tiefe 2:
                         [MAX]
                       /        \
                  [MIN]          [MIN]
                /       \      /      \
               5         9    7         8

Schritt 2: MIN-Knoten auf Tiefe 1 auswerten (Gegner ist dran!):
  Linker MIN:   MIN(5, 9) = 5   ← Gegner wählt 5 (schadet uns mehr)
  Rechter MIN:  MIN(7, 8) = 7

Schritt 3: MAX-Wurzel:
  MAX(5, 7) = 7  →  optimaler Zug: RECHTS

Interpretation:
  Wenn beide perfekt spielen → Spielwert = 7.
  Wir wählen den rechten Ast → Gegner wählt dann 7 (nicht 8).
  Würden wir links gehen → Gegner würde 5 wählen → schlechter für uns.
</pre>

      <h4 class="lz-h4">Minimax-Pseudocode</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
function minimax(knoten, tiefe, istMaximizing):
    if tiefe == 0 or istEndzustand(knoten):
        return bewertung(knoten)        ← Heuristik oder echter Spielwert

    if istMaximizing:
        besterWert = -∞
        for jede mögliche Aktion a in aktionen(knoten):
            nachfolger = wende_an(knoten, a)
            wert = minimax(nachfolger, tiefe - 1, false)
            besterWert = max(besterWert, wert)
        return besterWert

    else:  ← MIN ist dran
        besterWert = +∞
        for jede mögliche Aktion a in aktionen(knoten):
            nachfolger = wende_an(knoten, a)
            wert = minimax(nachfolger, tiefe - 1, true)
            besterWert = min(besterWert, wert)
        return besterWert

Wie man den besten ZUG (nicht nur Wert) findet:
    besterZug = null
    for jede Aktion a in aktionen(wurzel):
        wert = minimax(nachfolger(a), tiefe-1, false)
        if wert > besterWert:
            besterWert = wert; besterZug = a
</pre>

      <h3 class="lz-h3">Alpha-Beta-Pruning</h3>
      ${renderInfobox({ icon: 'fas fa-cut', title: 'Gleiche Lösung – viel weniger Arbeit', type: 'info',
        body: `Alpha-Beta liefert <strong>denselben optimalen Zug</strong> wie Minimax, aber überspringt Äste, die das Ergebnis nicht mehr beeinflussen können.<br><br>
               <strong>α (Alpha)</strong>: Bester Wert, den MAX bisher garantieren kann (Untergrenze für MAX)<br>
               <strong>β (Beta)</strong>: Bester Wert, den MIN bisher garantieren kann (Obergrenze für MIN)<br><br>
               <strong>Abschneiden wenn α ≥ β</strong>:<br>
               • Bei MIN-Knoten: wenn gefundener Wert ≤ α → abschneiden (MAX nimmt ohnehin den Ast nicht)<br>
               • Bei MAX-Knoten: wenn gefundener Wert ≥ β → abschneiden (MIN nimmt ohnehin den Ast nicht)` })}

      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;overflow-x:auto;">
Alpha-Beta am selben Beispiel:

Initial: α = -∞, β = +∞

Schritt 1: Linker MIN-Knoten (α=-∞, β=+∞)
  Kind 1 (MAX): MAX(3,5)=5 → MIN-Knoten aktualisiert: β=5
  Kind 2 (MAX): erstes Blatt: 2. α=-∞ ≤ 2 ≤ β=5 → kein Cut.
               zweites Blatt: 9 → MAX(2,9)=9 > β=5
               → MIN würde 9 NICHT wählen (hat schon 5)
               → Wert des linken MIN = MIN(5, ≤5) ≤ 5
               → MAX-Wurzel hat schon α=5, nimmt diesen Ast sowieso nicht
  Linker MIN gibt 5 zurück → Wurzel: α = 5

Schritt 2: Rechter MIN-Knoten (α=5, β=+∞)
  Kind 1 (MAX): MAX(1,7)=7 → MIN-Knoten: v=7. Noch v > α=5 → kein Cut!
               β = 7 für diesen Knoten.
  Kind 2 (MAX): MAX(4,8)=8 > β=7 → MIN würde 8 nicht nehmen → Cut!
  Rechter MIN gibt 7 zurück.

Ergebnis: MAX(5,7) = 7  ✅ (selbes Ergebnis wie Minimax!)

Evaluierte Blätter:    ohne Alpha-Beta: 8
                       mit Alpha-Beta:  6  (25% weniger)
Bei Tiefe 10, b=4: ohne: 4^10 ≈ 1 Mio. | mit: 4^5 ≈ 1.000 Knoten!
</pre>

      ${renderTable({
        headers: ['Verfahren', 'Knoten bei b=2, d=6', 'Allgemein', 'Effektiver Faktor'],
        rows: [
          ['Minimax', '2^6 = 64', 'O(b^d)', 'b'],
          ['Alpha-Beta (Durchschnitt)', '~16', 'O(b^(3d/4))', '√b'],
          ['Alpha-Beta (Optimal)', '~8', 'O(b^(d/2))', '√b'],
        ],
      })}

      ${renderMerkboxGrid([
        { icon: 'fas fa-chess-king', title: 'In der Praxis', text: 'Stockfish (beste Schach-KI) verwendet Alpha-Beta mit Tiefe 20–30+. Ohne Pruning wären 30^20 ≈ 10^29 Knoten nötig – mit Alpha-Beta + Heuristiken: ~10^6 pro Sekunde möglich.' },
        { icon: 'fas fa-star', title: 'Bewertungsfunktion', text: 'Die Qualität der KI hängt von der Bewertungsfunktion ab. Schach: Materialwert + Positionstabellen + Mobilität + Königssicherheit. Je besser h, desto besser die KI.' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben mit vollständigen Lösungen</h3>
      ${renderAccordion([
        {
          title: 'Aufg. 1: BFS-Trace. Graph: 1→2, 1→3, 2→4, 2→5, 3→5, 5→6. Start=1, Ziel=6. In welcher Reihenfolge werden Knoten besucht? Kürzester Pfad?',
          content: `Queue-Trace:
  Start: [1]
  Expandiere 1: Nachbarn {2,3} → Queue = [2, 3]
  Expandiere 2: Nachbarn {4,5} → Queue = [3, 4, 5]
  Expandiere 3: Nachbarn {5} → 5 schon entdeckt → Queue = [4, 5]
  Expandiere 4: keine neuen → Queue = [5]
  Expandiere 5: Nachbarn {6} → Queue = [6]  ← ZIEL!
  Expandiere 6: Fertig!

  Reihenfolge: 1 → 2 → 3 → 4 → 5 → 6
  Kürzester Pfad: 1 → 2 → 5 → 6  (3 Kanten)
  Alternativ:     1 → 3 → 5 → 6  (auch 3 Kanten, beide optimal)`,
        },
        {
          title: 'Aufg. 2: A*-Berechnung. Knoten: A(Start), B, C, Ziel. Kanten: A→B(3), A→C(6), B→Ziel(4), C→Ziel(2). Heuristik: h(A)=7, h(B)=4, h(C)=3, h(Ziel)=0. Welchen Pfad findet A*?',
          content: `Berechnung Schritt für Schritt:

  OPEN = {A: g=0, h=7, f=7}
  Schritt 1: Expandiere A (f=7):
    B: g=3, h=4, f=7
    C: g=6, h=3, f=9
  OPEN = {B:7, C:9}

  Schritt 2: Expandiere B (f=7):
    Ziel: g=3+4=7, h=0, f=7
  OPEN = {Ziel:7, C:9}

  Schritt 3: Expandiere Ziel (f=7) → GEFUNDEN!

  Pfad: A → B → Ziel  (Kosten: 3+4 = 7)
  Alternative: A → C → Ziel = 6+2 = 8  (teurer → A* hat richtig gewählt!)`,
        },
        {
          title: 'Aufg. 3: Minimax. MAX-Wurzel, 2 MIN-Kinder. Links: Blätter {6, 2}. Rechts: Blätter {3, 8}. Was ist der Minimax-Wert? Welchen Zug macht MAX?',
          content: `MIN links:  MIN(6, 2) = 2
  MIN rechts: MIN(3, 8) = 3
  MAX Wurzel: MAX(2, 3) = 3

  Optimaler Zug: MAX wählt RECHTS.
  Ergebnis: 3 (auch wenn rechts ein 8 vorkommt – MIN verhindert das).`,
        },
        {
          title: 'Aufg. 4: Alpha-Beta. Selber Baum wie Aufg. 3. Trace die α/β-Werte. Welche Knoten werden abgeschnitten?',
          content: `α=-∞, β=+∞ zu Beginn.

  Schritt 1: Linker MIN-Knoten expandieren:
    Blatt 6: MIN hat v=6. β = MIN(+∞, 6) = 6.
    Blatt 2: MIN hat v=MIN(6,2)=2. β=2.
    → Linker MIN gibt 2 zurück. MAX-Wurzel: α = MAX(-∞, 2) = 2.

  Schritt 2: Rechter MIN-Knoten (α=2, β=+∞):
    Blatt 3: MIN hat v=3. 3 ≤ β, kein Cut.
             Aber ist 3 ≤ α=2? Nein (3>2) → kein Cut.
             β = MIN(+∞, 3) = 3.
    Blatt 8: MIN(3,8)=3. Kein neuer Wert.
    → Rechter MIN gibt 3 zurück.

  MAX-Wurzel: MAX(2,3) = 3.
  
  In diesem kleinen Beispiel: kein Pruning.
  Pruning tritt auf wenn ein MIN-Wert ≤ α oder MAX-Wert ≥ β.`,
        },
        {
          title: 'Aufg. 5: Warum ist eine zulässige Heuristik wichtig für A*?',
          content: `Eine zulässige Heuristik überschätzt die Kosten NIE (h(n) ≤ echte Kosten).

  Wenn h(n) überschätzt (nicht zulässig):
  A* könnte einen Knoten aufgeben, weil sein f-Wert zu hoch erscheint,
  obwohl er zum optimalen Pfad gehört.
  → A* wäre nicht mehr optimal!

  Beispiel: Ziel 5km entfernt. Straßenweg 7km.
  h=4km → zulässig (4 < 7)
  h=8km → nicht zulässig (8 > 7) → A* könnte bessere Route übersehen.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Klausur-Cheatsheet', type: 'success',
        body: `<strong>BFS</strong>: Queue (FIFO), schichtweise, findet kürzesten Pfad, O(b^d) Speicher.<br>
               <strong>DFS</strong>: Stack (LIFO), tief-zuerst, O(b·m) Speicher, nicht optimal.<br>
               <strong>A*</strong>: f(n)=g(n)+h(n), optimal wenn h zulässig (nie überschätzt).<br>
               <strong>Greedy</strong>: f(n)=h(n), schnell aber nicht optimal.<br>
               <strong>Minimax</strong>: MAX maximiert, MIN minimiert. Blattwerte rückwärts propagieren.<br>
               <strong>Alpha-Beta</strong>: α=MAX-Untergrenze, β=MIN-Obergrenze. Abschneiden wenn α≥β.<br>
               Einsparung: O(b^(d/2)) statt O(b^d) – bei b=4,d=8: 65536 → 256 Knoten!` })}
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