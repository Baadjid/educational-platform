// pages/projekte/lernzettel/faecher/informatik/themen/os/processes.js
// Informatik 11.1 — Prozesse, Threads & Scheduling

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
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
  prev: { label: '10.3 DevOps', link: `${BASE}/themen/projektmanagement/devops` },
  next: { label: '11.2 Speicherverwaltung', link: `${BASE}/themen/os/memory-management` },
};

const TABS = [
  { key: 'prozesse',    label: '⚙ Prozesse & Threads' },
  { key: 'scheduling',  label: '📅 CPU‑Scheduling' },
  { key: 'sync',        label: '🔒 Synchronisation & Deadlocks' },
  { key: 'uebungen',    label: '✏ Übungen' },
];

export default class ProcessesPage {
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
            <span>11.1 · Prozesse & Scheduling</span>
          </nav>
          <h1 class="lz-sub-title">Prozesse, Threads & Scheduling</h1>
          <p class="lz-sub-subtitle">Prozesszustände, Kontextwechsel, Scheduling‑Algorithmen, Mutex, Deadlock</p>
          ${renderTags(['Prozess', 'Thread', 'Scheduling', 'Kontextwechsel', 'Mutex', 'Deadlock'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="prozesseTabs" aria-label="Prozesse & Scheduling">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelProzesse()}
          ${this._panelScheduling()}
          ${this._panelSync()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelProzesse() {
    return `<div class="wim-category active" data-wim-cat="prozesse">
      ${renderInfobox({ icon: 'fas fa-cog', title: 'Prozess vs. Thread', type: 'info',
        body: `<strong>Prozess:</strong> Laufendes Programm mit eigenem Adressraum, Ressourcen, Zustand.<br>
               <strong>Thread:</strong> Leichtgewichtiger Ausführungsstrang innerhalb eines Prozesses.
               Threads teilen Adressraum und Ressourcen – daher schnelle Kommunikation, aber Race Conditions!` })}
      ${renderTable({
        headers: ['Merkmal', 'Prozess', 'Thread'],
        rows: [
          ['Adressraum', 'Eigener', 'Geteilt im Prozess'],
          ['Ressourcen', 'Eigene Kopie', 'Geteilt'],
          ['Kommunikation', 'IPC (langsam)', 'Shared Memory (schnell)'],
          ['Erstellung', 'Teuer (fork)', 'Günstig (pthread_create)'],
          ['Fehler', 'Absturz betrifft nur Prozess', 'Absturz = ganzer Prozess'],
        ],
      })}
      <h4 class="lz-h4">Prozesszustände (Zustandsdiagramm)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
        NEW → READY ⇄ RUNNING → TERMINATED
                  ↕
              WAITING (I/O oder Event)

Übergänge:
  - NEW → READY:  Prozess wird zur Ausführung bereitgestellt.
  - READY → RUNNING: Dispatcher wählt Prozess aus (Scheduling).
  - RUNNING → READY: Zeitscheibe abgelaufen (Preemption).
  - RUNNING → WAITING: Prozess wartet auf Ressource / I/O.
  - WAITING → READY: Ressource verfügbar.
  - RUNNING → TERMINATED: Prozess beendet (exit).
</pre>
      <h4 class="lz-h4">Kontextwechsel (Context Switch)</h4>
      <p class="lz-prose">
        Beim Wechsel von Prozess A zu B muss der Zustand von A gesichert (Programmcounter, Register, Stack) und der von B wiederhergestellt werden.
        Kontextwechsel verursachen Overhead (einige Mikrosekunden).
      </p>
    </div>`;
  }

  _panelScheduling() {
    return `<div class="wim-category hidden" data-wim-cat="scheduling">
      <h3 class="lz-h3">CPU‑Scheduling – Zuteilung der CPU</h3>
      ${renderInfobox({ icon: 'fas fa-clock', title: 'Ziele', type: 'info',
        body: `Maximale CPU‑Auslastung, kurze Wartezeiten, Fairness, niedriger Overhead, schnelle Antwortzeiten (Response Time).` })}
      ${renderTable({
        headers: ['Algorithmus', 'Prinzip', 'Vorteil', 'Nachteil'],
        rows: [
          ['FCFS (First Come First Served)', 'Queue, nicht‑präemptiv', 'Einfach, fair', 'Convoy‑Effekt (lange Jobs blockieren kurze)'],
          ['SJF (Shortest Job First)', 'Kürzeste Gesamtlaufzeit zuerst', 'Minimale durchschnittliche Wartezeit', 'Verhungern langer Prozesse, nicht praxisnah'],
          ['Round Robin (RR)', 'Jeder bekommt Zeitscheibe (Quantum)', 'Fair, gute Response‑Zeit', 'Overhead durch viele Kontextwechsel'],
          ['Priority Scheduling', 'Höhere Priorität = zuerst', 'Wichtige Prozesse bevorzugt', 'Verhungern niedriger Prioritäten (Aging hilft)'],
          ['Multilevel Feedback Queue', 'Mehrere Queues, adaptive Prioritäten', 'Kombination der Vorteile', 'Komplex'],
        ],
      })}
      <h4 class="lz-h4">Round Robin – Beispiel</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Quantum = 4 ms, Prozesse: P1 (8 ms), P2 (5 ms), P3 (2 ms)

Reihenfolge: P1(4) → P2(4) → P3(2) → P1(4) → P2(1)
→ P1 fertig nach 4+? +4 = 12 ms, P2 nach 4+4+1=9 ms, P3 nach 4+4+2=10 ms.
Durchschnittliche Wartezeit = ( (12-8) + (9-5) + (10-2) ) / 3 = (4+4+8)/3 = 5,33 ms
</pre>
      ${renderFormulaBox({
        label: 'Turnaround‑Zeit',
        formula: 'T_turnaround = T_fertig − T_ankunft',
        desc: 'Wartezeit + Ausführungszeit',
      })}
    </div>`;
  }

  _panelSync() {
    return `<div class="wim-category hidden" data-wim-cat="sync">
      <h3 class="lz-h3">Synchronisation – Race Conditions verhindern</h3>
      ${renderInfobox({ icon: 'fas fa-lock', title: 'Race Condition', type: 'warning',
        body: `Zwei Threads lesen gleichzeitig x=5, addieren beide +1, schreiben beide x=6 statt erwartet 7. Das ist eine Race Condition.
               Lösung: Kritische Abschnitte mit <strong>Mutex</strong> oder <strong>Semaphor</strong> schützen.` })}
      ${renderTable({
        headers: ['Konzept', 'Beschreibung', 'Verwendung'],
        rows: [
          ['Mutex (Mutual Exclusion)', 'Binäres Lock: nur ein Thread im kritischen Abschnitt', 'Exklusiver Ressourcenzugriff'],
          ['Semaphor (zählend)', 'Zähler: n Threads gleichzeitig erlaubt', 'Ressourcenpool, Producer/Consumer'],
          ['Monitor', 'Klasse mit integrierten Locks (Java synchronized)', 'OOP‑Synchronisation'],
          ['Spinlock', 'Aktives Warten (kein Kontextwechsel)', 'Sehr kurze kritische Abschnitte auf Multicore'],
        ],
      })}
      <h4 class="lz-h4">Deadlock – Vier notwendige Bedingungen (Coffman 1971)</h4>
      ${renderMerkboxGrid([
        { icon: 'fas fa-lock', title: '1. Mutual Exclusion', text: 'Ressource kann nur von einem Prozess genutzt werden.' },
        { icon: 'fas fa-hand-holding', title: '2. Hold and Wait', text: 'Prozess hält Ressource und wartet auf weitere.' },
        { icon: 'fas fa-ban', title: '3. No Preemption', text: 'Ressourcen können nicht entzogen werden.' },
        { icon: 'fas fa-circle-notch', title: '4. Circular Wait', text: 'Zirkuläre Wartekette zwischen Prozessen.' },
      ])}
      <h4 class="lz-h4">Deadlock‑Gegenmaßnahmen</h4>
      ${renderTable({
        headers: ['Strategie', 'Beschreibung', 'Beispiel'],
        rows: [
          ['Vermeidung (Avoidance)', 'Bankier‑Algorithmus (prüft, ob sicherer Zustand bleibt)', 'Betriebssystem prüft vor Ressourcenvergabe'],
          ['Verhinderung (Prevention)', 'Eine der vier Bedingungen ausschließen', 'Z.B. alle Ressourcen auf einmal anfordern (Hold&Wait verhindern)'],
          ['Erkennung & Wiederherstellung', 'Deadlock erkennen und Prozess abbrechen/Ressourcen entziehen', 'Datenbanksysteme (Timeout, Kill)'],
        ],
      })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Erkläre den Unterschied zwischen präemptivem und nicht‑präemptivem Scheduling.',
          content: `Präemptiv: Das Betriebssystem kann einem Prozess die CPU entziehen (z.B. nach Zeitscheibe). Nicht‑präemptiv: Ein Prozess gibt die CPU nur freiwillig frei (z.B. durch I/O oder Ende).`,
        },
        {
          title: 'A2: Drei Prozesse mit Laufzeiten 10, 20, 30 ms. Berechne die durchschnittliche Wartezeit bei FCFS (Reihenfolge 10,20,30) und SJF.',
          content: `FCFS: Wartezeiten: 0, 10, 30 → Durchschnitt = (0+10+30)/3 = 13,33 ms.<br>
          SJF: Reihenfolge 10,20,30 → gleiche Reihenfolge (da bereits sortiert) → selbes Ergebnis. Wenn Reihenfolge anders, wäre SJF besser.`,
        },
        {
          title: 'A3: Nenne vier Deadlock‑Bedingungen und eine Möglichkeit, Deadlocks zu verhindern.',
          content: `1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, 4. Circular Wait.<br>
          Verhindern: Circular Wait z.B. durch geordnete Ressourcenanforderung (immer zuerst Ressource A, dann B).`,
        },
        {
          title: 'A4: Warum ist ein Semaphor mit Zähler 1 äquivalent zu einem Mutex?',
          content: `Ein binärer Semaphor (Werte 0 oder 1) kann wie ein Mutex verwendet werden. Der Unterschied ist, dass Mutex oft zusätzliche Eigenschaften hat (z.B. Besitzer, Priority Inheritance).`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Prozesse & Scheduling für die Prüfung', type: 'success',
        body: `• Prozess: eigenständiges Programm, Thread: Leichtgewicht.<br>
               • Zustände: NEW, READY, RUNNING, WAITING, TERMINATED.<br>
               • Scheduling: FCFS, SJF, Round Robin, Priority.<br>
               • Race Condition: mehrere Threads gleichzeitig → Mutex/Semaphor.<br>
               • Deadlock: 4 Bedingungen – Vermeidung/Verhinderung.` })}
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