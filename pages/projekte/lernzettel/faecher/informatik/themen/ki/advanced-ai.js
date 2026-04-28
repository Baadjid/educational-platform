// pages/projekte/lernzettel/faecher/informatik/themen/ki/advanced-ai.js
// Informatik 9.6 — Reinforcement Learning, Explainable AI, KI-Ethik

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
import { renderPageNav } from '../../../../js/components/subnav.js';

const NAV = {
  prev: { label: '9.5 Deep Learning', link: `${BASE}/themen/ki/deep-learning` },
  next: { label: '10.1 Scrum', link: `${BASE}/themen/projektmanagement/scrum` },
};

const TABS = [
  { key: 'rl',     label: '🎮 Reinforcement Learning' },
  { key: 'xai',    label: '🔍 Explainable AI (XAI)' },
  { key: 'ethics', label: '⚖ KI-Ethik & EU AI Act' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class AdvancedAIPage {
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
            <span>9.6 · Advanced AI</span>
          </nav>
          <h1 class="lz-sub-title">Reinforcement Learning, Explainable AI & KI-Ethik</h1>
          <p class="lz-sub-subtitle">Agent, Umgebung, Belohnung, Q-Learning, SHAP, EU AI Act</p>
          ${renderTags(['RL', 'Q-Learning', 'ε-greedy', 'XAI', 'SHAP', 'LIME', 'EU AI Act', 'KI-Ethik', 'BPE 13'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="advAiTabs" aria-label="Advanced AI">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelRL()}
          ${this._panelXAI()}
          ${this._panelEthics()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV, BASE)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelRL() {
    return `<div class="wim-category active" data-wim-cat="rl">
      ${renderInfobox({ icon: 'fas fa-gamepad', title: 'Reinforcement Learning – Lernen durch Interaktion', type: 'info',
        body: `Ein <strong>Agent</strong> agiert in einer <strong>Umgebung</strong>, beobachtet <strong>Zustände</strong> und erhält nach jeder Aktion eine <strong>Belohnung</strong>.
               Das Ziel: Eine <strong>Policy π</strong> (Strategie) lernen, die die <em>kumulierte, diskontierte Belohnung</em> maximiert.
               RL ist grundlegend anders als Supervised/Unsupervised – es gibt keine Trainingsdaten, nur Feedback aus Interaktionen.
               Anwendungen: AlphaGo/AlphaZero, ChatGPT (RLHF), Robotik, autonomes Fahren, Trading-Bots.` })}

      <h3 class="lz-h3">Das RL-Framework im Detail</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Das Markov-Entscheidungsproblem (MDP):

          Aktion aₜ
          ────────►
  ┌───────────────────────────────────────────┐
  │                 Umgebung                   │
  │  (Spiel, Roboter, Simulation, Verkehr)     │
  └────────────────────────────────────────────┘
          │ Zustand sₜ₊₁         │
          │ Belohnung rₜ₊₁       │
          ▼                       │
  ┌───────────────────────────────┤
  │           Agent               │
  │  Policy π(a|s) → Aktion a     │
  │  Wertfunktion V(s) oder Q(s,a)│
  └───────────────────────────────┘

5 Kernelemente:
  S = Zustandsraum  (States): z.B. alle Positionen auf dem Spielfeld
  A = Aktionsraum   (Actions): z.B. {Oben, Unten, Links, Rechts}
  R = Belohnung     (Reward): z.B. +1 für Münze, -1 für Loch, 0 sonst
  π = Policy        (Strategie): Funktion s → a
  γ = Discount-Faktor: wie viel sind zukünftige Belohnungen wert?
</pre>

      <h3 class="lz-h3">Discount-Faktor γ – Zukunft abdiskontieren</h3>
      ${renderFormulaBox({
        label: 'Kumulierte diskontierte Belohnung (Return)',
        formula: 'G_t = r_{t+1} + γ·r_{t+2} + γ²·r_{t+3} + ... = Σ_{k=0}^{∞} γᵏ·r_{t+k+1}',
        desc: 'γ ∈ [0,1): γ=0 → Agent kurzsichtig (nur sofortige Belohnung). γ=0,99 → Weitblick wichtig.',
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Beispiel γ = 0,9, Belohnungen: r₁=0, r₂=0, r₃=10 (Ziel erreicht)

G₀ = 0 + 0,9·0 + 0,9²·10 = 0 + 0 + 8,1 = 8,1

Mit γ = 0,5:  G₀ = 0 + 0 + 0,5²·10 = 2,5  (Zukunft weniger wichtig)
Mit γ = 0,99: G₀ = 0 + 0 + 0,99²·10 = 9,8  (Zukunft fast gleich wichtig)

→ γ steuert, wie "geduldig" der Agent ist.
</pre>

      <h3 class="lz-h3">Q-Learning – Wertetabelle lernen</h3>
      ${renderFormulaBox({
        label: 'Q-Learning Update-Regel (Bellman-Gleichung)',
        formula: 'Q(s,a) ← Q(s,a) + α · [ r + γ · max_{a\'} Q(s\',a\') − Q(s,a) ]',
        desc: 'α = Lernrate (0<α<1), r = erhaltene Belohnung, s\' = neuer Zustand nach Aktion a. Der Ausdruck in [ ] heißt TD-Error (Temporal Difference Error).',
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Vollständiges Beispiel: Agent in einem 4-Zellen-Gitter
Zustände: s1 s2 s3 s4(Ziel)  Aktionen: {Links, Rechts}
Belohnungen: +10 bei s4, sonst 0.  α=0,5, γ=0,9

Q-Tabelle (Startwerte alle 0):
       Links  Rechts
  s1:    0      0
  s2:    0      0
  s3:    0      0
  s4: (Terminal)

Episode 1, Schritt 1: Zustand=s3, Aktion=Rechts, r=+10, s'=s4
  TD-Error = r + γ·max_a Q(s4,a) − Q(s3,Rechts)
           = 10 + 0,9·0 − 0 = 10
  Q(s3,Rechts) ← 0 + 0,5·10 = 5

Episode 1, Schritt 0: Zustand=s2, Aktion=Rechts, r=0, s'=s3
  TD-Error = 0 + 0,9·max(Q(s3,Links),Q(s3,Rechts)) − Q(s2,Rechts)
           = 0 + 0,9·max(0, 5) − 0 = 4,5
  Q(s2,Rechts) ← 0 + 0,5·4,5 = 2,25

Nach vielen Episoden konvergiert die Q-Tabelle zur optimalen Policy!
Optimale Policy: s1→Rechts, s2→Rechts, s3→Rechts
</pre>

      <h3 class="lz-h3">Exploration vs. Exploitation – Das ε-greedy Dilemma</h3>
      ${renderInfobox({ icon: 'fas fa-random', title: 'Das zentrale Dilemma im RL', type: 'warning',
        body: `<strong>Exploitation:</strong> Wähle immer die aktuell beste bekannte Aktion (greedy). Problem: Vielleicht gibt es bessere unentdeckte Aktionen.<br>
               <strong>Exploration:</strong> Probiere zufällige Aktionen aus. Problem: Verschwendet Belohnungen.<br>
               Lösung: <strong>ε-greedy</strong> – mit Wahrscheinlichkeit ε zufällig, sonst best.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
ε-greedy Strategie:
  Mit Wahrsch. ε:    wähle ZUFÄLLIGE Aktion (Exploration)
  Mit Wahrsch. 1-ε:  wähle BESTE Aktion   (Exploitation)

Typischer ε-Verlauf (ε-decay):
  Beginn:   ε = 1,0  → 100% zufällig (nichts wissen wir noch)
  Mitte:    ε = 0,5  → 50/50 Mix
  Ende:     ε = 0,05 → meist beste Aktion, 5% Exploration

Beispiel: ε=0,1, Q(s,Links)=3, Q(s,Rechts)=7
  10% der Zeit: zufällige Aktion (Links oder Rechts)
  90% der Zeit: Rechts (da Q=7 > Q=3)
</pre>

      <h3 class="lz-h3">RL-Algorithmen im Überblick</h3>
      ${renderTable({
        headers: ['Algorithmus', 'Typ', 'Kernidee', 'Anwendung'],
        rows: [
          ['Q-Learning', 'Modell-frei, Off-Policy, Value-based', 'Lernt Q(s,a)-Tabelle durch Bellman-Updates', 'Kleine diskrete Zustandsräume (Gridworld)'],
          ['Deep Q-Network (DQN)', 'Deep RL, Value-based', 'Neuronales Netz ersetzt Q-Tabelle (DeepMind 2013)', 'Atari-Spiele: Pong, Breakout (pixel → Aktion)'],
          ['REINFORCE', 'Policy Gradient', 'Gradient der Policy direkt optimieren', 'Kontinuierliche Aktionsräume'],
          ['PPO (Proximal Policy Opt.)', 'Policy Gradient, On-Policy', 'Stabiles Clipping verhindert zu große Updates', 'ChatGPT RLHF, OpenAI Five, Robotik'],
          ['AlphaGo / AlphaZero', 'MCTS + Deep RL + Self-Play', 'Lernt nur durch Spiele gegen sich selbst', 'Go (übermenschlich), Schach, Shogi'],
          ['SAC (Soft Actor-Critic)', 'Off-Policy, Entropy-basiert', 'Maximiert Belohnung + Handlungsfreiheit', 'Kontinuierliche Robotik-Steuerung'],
        ],
      })}

      <h3 class="lz-h3">RL vs. Supervised Learning – Kernunterschiede</h3>
      ${renderCompare({
        titleA: 'Supervised Learning',
        titleB: 'Reinforcement Learning',
        listA: [
          'Benötigt beschriftete Trainingsdaten (x, y)',
          'Lernt Mapping x → y',
          'Feedback sofort und eindeutig (Fehler)',
          'Statischer Datensatz',
          'Unabhängige Trainingsbeispiele',
        ],
        listB: [
          'Lernt aus Belohnungssignalen (oft selten/verzögert)',
          'Lernt sequentielle Entscheidungsstrategie',
          'Feedback verzögert (Credit Assignment Problem)',
          'Daten entstehen durch Exploration',
          'Zustände zeitlich abhängig (Markov)',
        ],
      })}

      ${renderMerkboxGrid([
        { icon: 'fas fa-robot', title: 'RLHF – ChatGPT-Training', text: 'ChatGPT wird mit Reinforcement Learning from Human Feedback trainiert: Menschen bewerten Antworten → Reward-Modell → PPO-Training. So wird die KI hilfreicher und weniger schädlich.' },
        { icon: 'fas fa-chess-king', title: 'AlphaZero', text: 'AlphaZero lernte Go/Schach/Shogi NUR durch Self-Play – ohne Menschenwissen. Nach 8 Stunden Training schlug es den besten menschlichen Go-Spieler.' },
        { icon: 'fas fa-car', title: 'Autonomes Fahren', text: 'Waymo und Tesla nutzen RL in Simulation: Agent wird für sicheres Fahren belohnt, für Unfälle bestraft – Millionen von Simulationsstunden.' },
        { icon: 'fas fa-dollar-sign', title: 'Credit Assignment Problem', text: 'Wer ist schuld am Spielverlust? Die letzte Aktion? Eine von vor 50 Zügen? RL muss lernen, welche früheren Aktionen zur finalen Belohnung geführt haben.' },
      ])}
    </div>`;
  }

  _panelXAI() {
    return `<div class="wim-category hidden" data-wim-cat="xai">
      ${renderInfobox({ icon: 'fas fa-question-circle', title: 'Das Black-Box-Problem – Warum Erklärbarkeit lebenswichtig ist', type: 'warning',
        body: `Tiefe neuronale Netze erzielen überragende Ergebnisse – aber <em>warum</em> treffen sie bestimmte Entscheidungen? Das ist auch für Entwickler oft unklar.
               Problematisch bei: <strong>Medizin (Krebsdiagnose), Kreditvergabe, Strafjustiz (COMPAS), autonome Fahrzeuge, Stellenauswahl</strong>.
               <strong>EU AI Act:</strong> Hochrisiko-KI muss erklärbar sein. Betroffene haben Anspruch auf Erklärung automatischer Entscheidungen (DSGVO Art. 22).` })}

      <h3 class="lz-h3">XAI-Landschaft: Übersicht der Methoden</h3>
      ${renderTable({
        headers: ['Methode', 'Scope', 'Funktionsweise', 'Ausgabe', 'Stärke'],
        rows: [
          ['LIME', 'Lokal (einzelne Vorhersage)', 'Störe Eingabe → trainiere lokales lineares Modell', 'Feature-Gewichte für DIESE Entscheidung', 'Einfach, modell-agnostisch'],
          ['SHAP', 'Lokal + Global', 'Shapley-Werte aus kooperativer Spieltheorie', 'Fairer Feature-Beitrag (positiv/negativ)', 'Theoretisch fundiert, konsistent'],
          ['Grad-CAM', 'Lokal (Bilder)', 'Gradienten → gewichtete Aktivierungskarte', 'Heatmap: welche Pixel zählten?', 'Perfekt für CNNs'],
          ['Attention Viz.', 'Lokal (Texte)', 'Attention-Gewichte der Transformer-Schichten', 'Welche Wörter beachtete das Modell?', 'Direkt aus Modell extrahierbar'],
          ['Saliency Maps', 'Lokal (Bilder)', '|∂L/∂x|: wie stark wirkt jedes Pixel auf Verlust?', 'Pixelweise Sensitivitätskarte', 'Einfach zu berechnen'],
          ['Partial Dependence Plot', 'Global', 'Marginalisiere alle anderen Features', 'Effekt eines Features auf Vorhersage', 'Globale Trends sichtbar'],
        ],
      })}

      <h3 class="lz-h3">SHAP – Shapley-Werte (aus der Spieltheorie)</h3>
      ${renderInfobox({ icon: 'fas fa-calculator', title: 'Grundidee: Fairer Beitrag jedes Features', type: 'info',
        body: `Stell dir vor, du und 2 Freunde arbeiten zusammen und verdienen 100€.
               Wieviel hat jeder <em>beigetragen</em>? SHAP löst dieses Problem für Machine-Learning-Features.
               Jedes Feature ist ein "Spieler", das Modell-Ergebnis ist der "Gewinn".
               <strong>Shapley-Wert</strong> = durchschnittlicher marginaler Beitrag eines Features über alle möglichen Feature-Kombinationen.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
SHAP vollständiges Beispiel: Kreditentscheidung
Modell: Kreditrisiko-Klassifikator (0=OK, 1=Abgelehnt)
Person: 28 Jahre, Einkommen 25.000€, Schulden 45.000€, kein Eigenheim

Basislinie (Durchschnitt aller Vorhersagen): 0,30 (30% Ablehnungsrate)

SHAP-Werte dieser Person:
┌─────────────────────────────────────────────────────────────────┐
│ Feature           │ SHAP-Wert │ Interpretation                   │
├─────────────────────────────────────────────────────────────────┤
│ Einkommen (25k€)  │  −0,12    │ senkt Ablehnungsrisiko um 12%    │
│ Schulden  (45k€)  │  +0,28    │ erhöht Ablehnungsrisiko um 28%   │
│ Alter     (28)    │  −0,04    │ leicht positiv (jung, ok)        │
│ Eigenheim (Nein)  │  +0,09    │ erhöht Risiko um 9%              │
│ Anstellung (2J.)  │  +0,04    │ leicht negativ (kurze Geschichte)│
└─────────────────────────────────────────────────────────────────┘
Summe: 0,30 (Basis) + (−0,12) + 0,28 + (−0,04) + 0,09 + 0,04 = 0,55

Finale Vorhersage: 55% Ablehnungsrisiko → ABGELEHNT

Erklärung (für Kunden): "Ihr Kredit wurde hauptsächlich wegen der
hohen Schulden (45.000€) abgelehnt. Positiv: Ihr Einkommen und Alter."
</pre>

      <h3 class="lz-h3">LIME – Local Interpretable Model-agnostic Explanations</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
LIME Algorithmus – Schritt für Schritt:

Aufgabe: Erkläre warum Bild als "Husky" klassifiziert wurde.

Schritt 1: Eingabe perturbieren (stören)
  Original-Bild → Teile zufällig maskieren → 1000 Varianten erzeugen

Schritt 2: Modell auf jeder Variante befragen
  CNN(Variante_1) = 0.95 "Husky"
  CNN(Variante_2) = 0.23 "Husky"  (Gesicht maskiert → Konfidenz sinkt!)
  CNN(Variante_3) = 0.88 "Husky"
  ...

Schritt 3: Lokales lineares Modell trainieren
  Gewichte: Schnauze=+0.41, Fell=+0.32, Hintergrund_Schnee=+0.18
  Ohren=+0.09, Gras_Hintergrund=−0.05 (irrelevant)

Schritt 4: Erklärung ausgeben
  "Das Modell klassifizierte dieses Bild als Husky hauptsächlich wegen
   der Schnauze (+0,41) und dem Fell-Muster (+0,32)."

WICHTIG: LIME erklärt nur den lokalen Bereich um DIESEN Datenpunkt.
Für einen anderen Datenpunkt kann die Erklärung völlig anders sein!
</pre>

      <h3 class="lz-h3">Grad-CAM – Visuelle Erklärungen für CNNs</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Grad-CAM (Gradient-weighted Class Activation Mapping):

Problem: Welche Bildregionen hat das CNN bei seiner Entscheidung "betrachtet"?

Funktionsweise:
  1. Forward Pass: Bild → CNN → Klasse "Katze" mit 94% Konfidenz
  2. Gradienten berechnen: ∂(Katze-Score) / ∂(Feature-Map der letzten Conv-Schicht)
  3. Gradienten → gewichteter Durchschnitt → 2D-Heatmap
  4. Heatmap auf Originalbild überlagern

Beispiel (Ärztliche Diagnose):
  Röntgenbild → CNN → "Pneumonie: 91% wahrscheinlich"
  Grad-CAM Heatmap zeigt: Rötung im linken Lungenflügel
  → Arzt kann bestätigen: "Ja, genau dort sehe ich Verschattung"

  Ohne Grad-CAM: Vertraust du dem Modell? Was wenn es den Hintergrund erkannt hat?
  Mit Grad-CAM: Modell schaute auf die richtige Stelle → Vertrauen steigt!
</pre>

      <h3 class="lz-h3">LIME vs. SHAP – Vergleich</h3>
      ${renderCompare({
        titleA: 'LIME',
        titleB: 'SHAP',
        listA: [
          'Schnell, auch für große Modelle',
          'Nur lokale Erklärung (einzelner Punkt)',
          'Ergebnisse können instabil sein (zufällig)',
          'Funktioniert für Text, Bilder, Tabellen',
          'Kein starkes theoretisches Fundament',
        ],
        listB: [
          'Theoretisch fundiert (Shapley-Axiome)',
          'Lokal UND global verwendbar',
          'Konsistent und eindeutig (bei gleichen Daten)',
          'Rechentechnisch teurer',
          'TreeSHAP für Entscheidungsbäume sehr schnell',
        ],
      })}

      ${renderMerkboxGrid([
        { icon: 'fas fa-hospital', title: 'XAI in der Medizin', text: 'IBM Watson for Oncology empfahl Krebstherapien – Ärzte folgten ihnen blind, bis sich herausstellte: Empfehlungen basierten auf falschen Trainingsdaten. XAI hätte Fehlentscheidungen verhindert.' },
        { icon: 'fas fa-gavel', title: 'DSGVO Art. 22', text: 'Das "Recht auf Erklärung": Personen, über die automatisch (KI-)Entscheidungen getroffen werden, haben Anspruch auf verständliche Erklärungen – z.B. bei Kredit- oder Jobentscheidungen.' },
        { icon: 'fas fa-eye', title: 'Adversarial Examples', text: 'Winzige, für Menschen unsichtbare Bildänderungen können CNN-Erkennungen von "Panda" zu "Gibbon" ändern (99% Konfidenz). XAI hilft, solche Schwächen zu entdecken.' },
        { icon: 'fas fa-chart-bar', title: 'Global vs. Lokal', text: 'Globale Erklärungen: "Welche Features sind insgesamt wichtig?" (Feature Importance). Lokale Erklärungen: "Warum DIESE spezifische Vorhersage?" (LIME, SHAP für einen Punkt).' },
      ])}
    </div>`;
  }

  _panelEthics() {
    return `<div class="wim-category hidden" data-wim-cat="ethics">
      <h3 class="lz-h3">KI-Ethik – Warum es wichtig ist</h3>
      ${renderInfobox({ icon: 'fas fa-scale-balanced', title: 'KI trifft Entscheidungen mit Konsequenzen', type: 'warning',
        body: `KI-Systeme entscheiden heute über Kreditvergabe, Stellenbesetzung, Strafmaß, Krankenversicherung und Medizin.
               Fehlerhafte oder unfaire KI kann Menschen systematisch benachteiligen – in großem Maßstab und oft unsichtbar.
               Ethische KI ist deshalb keine Nettigkeit, sondern <strong>gesellschaftliche Notwendigkeit</strong>.` })}

      <h3 class="lz-h3">KI-Bias – Vorurteile aus Daten</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Woher kommt KI-Bias?

1. TRAINING DATA BIAS (häufigste Ursache)
   Trainingsdaten spiegeln historische Vorurteile wider.
   
   Beispiel: Amazon Recruiting-Tool (2015-2018)
   → Trainiert auf 10 Jahre Lebensläufe von eingestellten Mitarbeitern
   → Da 80% männlich: Modell lernte "Mann = gut im IT"
   → Lebensläufe mit "Frauenschachclub" wurden abgewertet
   → Amazon musste Tool einstellen

2. MEASUREMENT BIAS
   Was wird gemessen spiegelt nicht das eigentliche Ziel wider.
   
   Beispiel: COMPAS (Rückfallrisiko in US-Justiz)
   → Modell: "Verhaftungen in der Vergangenheit" als Feature
   → Schwarze werden häufiger verhaftet (strukturelles Problem)
   → Modell sagte für Schwarze 2x höheres Rückfallrisiko voraus
   → ProPublica 2016: "Machine Bias" – Rassismus in der Justiz-KI

3. FEEDBACK LOOP BIAS
   KI-Entscheidungen erzeugen neue Daten, die KI weiter bestätigen.
   
   Beispiel: Predictive Policing
   → KI sendet mehr Polizei in "gefährliche" Stadtteile
   → Mehr Polizei → mehr Verhaftungen dort
   → "Beweis" für KI: Der Stadtteil ist gefährlich
   → Selbstverstärkender Kreislauf
</pre>

      <h3 class="lz-h3">Fairness-Metriken – was bedeutet "fair"?</h3>
      ${renderTable({
        headers: ['Fairness-Konzept', 'Definition', 'Formel', 'Problem'],
        rows: [
          ['Demographic Parity', 'Gleiche Akzeptanzrate in allen Gruppen', 'P(Ŷ=1|A=0) = P(Ŷ=1|A=1)', 'Ignoriert echte Unterschiede in der Zielvariable'],
          ['Equalized Odds', 'Gleiche TPR und FPR in allen Gruppen', 'TPR_A = TPR_B und FPR_A = FPR_B', 'Mathematisch unmöglich mit Demographic Parity (Chouldechova 2017)'],
          ['Individual Fairness', 'Ähnliche Personen → ähnliche Entscheidungen', 'd(x₁,x₂) < ε → |f(x₁)-f(x₂)| < δ', 'Was ist "ähnlich"? Schwer zu definieren'],
          ['Counterfactual Fairness', 'Entscheidung ändert sich nicht wenn Gruppe A→B', 'f(x|A=0) = f(x|A=1) ceteris paribus', 'Rechenaufwand, kausalausale Modelle nötig'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-exclamation-circle', title: 'Unmöglichkeitssatz der algorithmischen Fairness', type: 'warning',
        body: `Chouldechova (2017) und Kleinberg et al. (2017) bewiesen: Es ist <em>mathematisch unmöglich</em>, alle Fairness-Kriterien gleichzeitig zu erfüllen (außer in trivialen Fällen). Man muss immer abwägen, welche Form von Fairness prioritär ist – das ist eine gesellschaftliche, keine technische Entscheidung.` })}

      <h3 class="lz-h3">EU AI Act (2024) – Weltweit erstes umfassendes KI-Gesetz</h3>
      ${renderTable({
        headers: ['Risikostufe', 'Definition', 'Pflichten', 'Beispiele', 'Strafe'],
        rows: [
          ['🔴 Unakzeptables Risiko', 'Verletzt Grundrechte', 'KOMPLETT VERBOTEN', 'Social-Credit-System, Biometrische Echtzeit-Überwachung öffentlich, Manipulation durch Subliminal-Techniken', 'Nicht erlaubt'],
          ['🟠 Hochrisiko', 'Signifikante Risiken für Leben/Rechte', 'Zertifizierung, Transparenz, menschliche Aufsicht, Daten-Governance, Logging', 'KI in Medizin, Justiz, Kreditvergabe, Bewerbungsauswahl, Biometrische Verifikation, kritische Infrastruktur', 'Bis 30 Mio. € oder 6% Umsatz'],
          ['🟡 Begrenztes Risiko', 'Transparenz-Risiken', 'Kennzeichnungspflicht ("Sie sprechen mit einer KI")', 'Chatbots, Deepfakes, generierte Texte', 'Bis 15 Mio. € oder 3% Umsatz'],
          ['🟢 Minimales Risiko', 'Kaum Risiken', 'Keine Pflichten (freiwilliger Verhaltenskodex)', 'Spam-Filter, KI-Spiele, Empfehlungsalgorithmen, Übersetzungs-Apps', 'Keine'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Timeline EU AI Act:
  Feb 2024: Politische Einigung (Europäisches Parlament + Rat)
  Aug 2024: Inkrafttreten nach Veröffentlichung im EU-Amtsblatt
  Feb 2025: Verbote für unakzeptables Risiko gelten
  Aug 2025: Anforderungen für Allgemein-KI-Modelle (GPT-4 etc.)
  Aug 2026: Vollständige Anwendung für Hochrisiko-KI

Gültig für: Alle KI-Systeme, die im EU-Markt eingesetzt werden
            (auch US-Unternehmen wie OpenAI, Google, Meta!)
Ausnahmen: Militär, Nationale Sicherheit, Forschung
</pre>

      <h3 class="lz-h3">7 Prinzipien vertrauenswürdiger KI (EU HLEG)</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Europäische KI-Ethik-Leitlinien (April 2019):

1. 🧑‍⚖️ MENSCHLICHE KONTROLLE & AUFSICHT
   KI unterstützt menschliche Entscheidungen, überrimmt sie nicht.
   "Human-in-the-Loop" bei kritischen Entscheidungen.
   Recht auf menschliche Überprüfung automatischer Entscheidungen.

2. 🔒 TECHNISCHE ROBUSTHEIT & SICHERHEIT
   Zuverlässig, genau, sicher auch unter Angriffen (Adversarial Attacks).
   Fehlertoleranz: "Fail-safe" statt "Fail-deadly".

3. 🔐 DATENSCHUTZ & DATEN-GOVERNANCE
   DSGVO-Konformität: Zweckbindung, Datensparsamkeit, Auskunftsrecht.
   Privacy-by-Design: Datenschutz von Anfang an eingebaut.

4. 👁️ TRANSPARENZ & ERKLÄRBARKEIT
   Menschen müssen verstehen, warum KI bestimmte Entscheidungen trifft.
   XAI-Methoden (LIME, SHAP, Grad-CAM) als Werkzeuge.

5. ⚖️ NICHT-DISKRIMINIERUNG & FAIRNESS
   Keine Benachteiligung aufgrund von Geschlecht, Herkunft, Alter usw.
   Fairness-Tests mit verschiedenen demographischen Gruppen.

6. 🌱 NACHHALTIGKEIT & UMWELTVERANTWORTUNG
   GPT-3 Training: ~552 Tonnen CO₂ (wie 120 PKW ein Jahr lang).
   Energieeffizienz, Green AI, Lebenszyklusanalyse.

7. ✅ VERANTWORTLICHKEIT (ACCOUNTABILITY)
   Klare Zuständigkeiten: Wer haftet bei KI-Schaden?
   Auditierbarkeit: Entscheidungen müssen nachvollzogen werden können.
</pre>

      <h3 class="lz-h3">KI und die Arbeitswelt</h3>
      ${renderTable({
        headers: ['Sektor', 'Bedrohte Tätigkeiten', 'Neue Tätigkeiten', 'Zeithorizont'],
        rows: [
          ['Transport', 'LKW-, Taxi-, Busfahrer (~3,5 Mio. EU)', 'Flottensicherheitsingenieure, Wartung autonomer Systeme', '2030–2040'],
          ['Verwaltung', 'Dateneingabe, Dokumentenprüfung', 'KI-Oversight, Compliance, Datenqualität', 'Jetzt'],
          ['Medizin', 'Radiologische Bildauswertung', 'KI-Mensch-Kollaboration, neue Diagnosen möglich', '2025–2035'],
          ['Recht', 'Dokumentenanalyse, Vertragsauswertung', 'KI-Auditor, Ethik-Berater', '2025–2030'],
          ['Kreativwirtschaft', 'Stock-Fotografie, Basisdesign', 'KI-Prompt-Engineering, KI-Kuratierung', 'Jetzt'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-lightbulb', title: 'McKinsey Global Institute (2023)', type: 'info',
        body: `Laut McKinsey könnten bis 2030 ca. <strong>300 Millionen Arbeitsplätze</strong> weltweit durch KI-Automatisierung beeinflusst werden.
               <em>Verdrängt</em> werden eher repetitive, regelbasierte Tätigkeiten.
               <em>Entstehen</em> werden Rollen für KI-Oversight, Ethik, Wartung und menschliche Tätigkeiten, die KI nicht kann: Empathie, Kreativität, moralisches Urteilen.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Q-Learning – Berechne ein Update-Schritt',
          content: `Gegeben: Q(s2, Rechts) = 3,0, Belohnung r = 0, nächster Zustand s3: Q(s3, Links) = 0, Q(s3, Rechts) = 8,
          Lernrate α = 0,5, Discount γ = 0,8.<br><br>
          <strong>Lösung:</strong><br>
          TD-Error = r + γ · max_a Q(s3,a) − Q(s2, Rechts)<br>
          TD-Error = 0 + 0,8 · max(0, 8) − 3,0<br>
          TD-Error = 0 + 6,4 − 3,0 = 3,4<br><br>
          Q(s2, Rechts) ← 3,0 + 0,5 · 3,4 = 3,0 + 1,7 = <strong>4,7</strong><br><br>
          Interpretation: Der Q-Wert steigt, weil der nächste Zustand s3 vielversprechend ist (hoher Q-Wert von 8).`,
        },
        {
          title: 'A2: Was ist der Unterschied zwischen Exploration und Exploitation? Erkläre ε-greedy.',
          content: `<strong>Exploitation:</strong> Nutze dein aktuelles Wissen – wähle immer die Aktion mit dem höchsten bekannten Q-Wert. Risiko: Du findest vielleicht nie bessere unbekannte Aktionen.<br><br>
          <strong>Exploration:</strong> Probiere zufällige Aktionen, auch wenn sie nicht optimal erscheinen. Risiko: Du verschwendest Belohnungen.<br><br>
          <strong>ε-greedy</strong> kombiniert beides: Mit Wahrscheinlichkeit ε wird zufällig gewählt (Exploration), mit 1-ε greedy (Exploitation). Typisch: ε startet bei 1,0 und sinkt langsam auf 0,05 (ε-decay).`,
        },
        {
          title: 'A3: SHAP – Interpretiere folgende Werte',
          content: `Gegeben: Vorhersage "Kreditantrag abgelehnt". Basislinie = 0,25.<br>
          SHAP-Werte: Schulden=+0,35, Einkommen=−0,08, Alter=+0,02, Wohnsitz=−0,01<br><br>
          <strong>Lösung:</strong><br>
          Finale Vorhersage = 0,25 + 0,35 − 0,08 + 0,02 − 0,01 = <strong>0,53</strong> (53% Ablehnungsrisiko).<br><br>
          Erklärung: Der wichtigste Grund für die Ablehnung sind die <strong>hohen Schulden</strong> (+0,35).
          Das Einkommen wirkt positiv (−0,08 senkt das Risiko). Alter (+0,02) und Wohnsitz (−0,01) haben kaum Einfluss.`,
        },
        {
          title: 'A4: Welche 4 Risikostufen definiert der EU AI Act? Nenne je ein Beispiel.',
          content: `1. <strong>Unakzeptables Risiko</strong> (verboten): Social Scoring durch Behörden, biometrische Massenüberwachung öffentlicher Plätze.<br>
          2. <strong>Hochrisiko</strong> (strenge Auflagen): KI zur Kreditvergabe, Diagnose-KI in der Medizin, KI bei Stellenauswahl.<br>
          3. <strong>Begrenztes Risiko</strong> (Transparenzpflicht): Chatbots müssen sich als KI zu erkennen geben, Deepfakes müssen gekennzeichnet sein.<br>
          4. <strong>Minimales Risiko</strong> (keine Pflichten): Spam-Filter, KI in Videospielen, Übersetzungs-Apps.`,
        },
        {
          title: 'A5: Was ist KI-Bias? Erkläre Training Data Bias anhand eines Beispiels.',
          content: `KI-Bias entsteht, wenn ein KI-System systematisch bestimmte Gruppen benachteiligt oder bevorzugt – oft unbewusst und unsichtbar.<br><br>
          <strong>Training Data Bias</strong>: Wenn Trainingsdaten historische Vorurteile widerspiegeln, lernt die KI diese Vorurteile.<br><br>
          <strong>Beispiel Amazon Recruiting Tool:</strong> Amazon trainierte ein KI-Recruiting-Tool auf 10 Jahren erfolgreicher Einstellungen. Da die Tech-Branche historisch männerdominiert war, lernten die Trainingsdaten "Männer sind besser". Das Modell begann, Lebensläufe von Frauen systematisch schlechter zu bewerten – z.B. wurden Erwähnungen von "Frauen" negativ gewertet. Amazon stellte das Tool 2018 ein.`,
        },
        {
          title: 'A6: Erkläre den Discount-Faktor γ und sein Einfluss auf das Agenten-Verhalten.',
          content: `γ (Gamma, 0 ≤ γ < 1) bestimmt, wie viel zukünftige Belohnungen wert sind.<br><br>
          Return: G = r₁ + γ·r₂ + γ²·r₃ + ...<br><br>
          <strong>γ = 0:</strong> Agent ist komplett kurzsichtig – nur die sofortige Belohnung zählt. Findet keine langfristigen Strategien.<br>
          <strong>γ = 0,5:</strong> Eine Belohnung in 2 Schritten ist 0,25 so viel wert wie eine sofortige.<br>
          <strong>γ = 0,99:</strong> Agent ist sehr vorausschauend – plant viele Schritte voraus. Wichtig für Schach, Go.<br><br>
          Beispiel: Belohnung +100 in 3 Schritten: γ=0,5 → 0,5³·100=12,5 vs. γ=0,99 → 0,99³·100≈97`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Advanced AI – Prüfungsübersicht', type: 'success',
        body: `<strong>Reinforcement Learning:</strong><br>
               • Framework: Agent, Umgebung, Zustand s, Aktion a, Belohnung r, Policy π<br>
               • Q-Learning: Q(s,a) ← Q(s,a) + α·[r + γ·max Q(s',a') − Q(s,a)]<br>
               • γ = Discount-Faktor: kurzsichtig (γ≈0) vs. weitsichtig (γ≈1)<br>
               • ε-greedy: ε Zufall (Exploration) + (1-ε) best (Exploitation)<br><br>
               <strong>Explainable AI (XAI):</strong><br>
               • LIME: lokales lineares Surrogatmodell um einzelnen Datenpunkt<br>
               • SHAP: Shapley-Werte = fairer Feature-Beitrag (Spieltheorie)<br>
               • Grad-CAM: Gradienten-Heatmap für CNN-Bildentscheidungen<br><br>
               <strong>KI-Ethik & EU AI Act:</strong><br>
               • Bias-Quellen: Training Data, Measurement, Feedback Loop<br>
               • 4 Risikostufen: Unakzeptabel (verboten) → Hochrisiko → Begrenzt → Minimal<br>
               • 7 Prinzipien: Kontrolle, Robustheit, Datenschutz, Transparenz, Fairness, Nachhaltigkeit, Verantwortlichkeit` })}
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