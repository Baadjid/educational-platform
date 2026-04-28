// pages/projekte/lernzettel/faecher/informatik/themen/programmierung/design-patterns.js
// Informatik 4.6 — Design Patterns & Clean Code

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
  prev: { label: '4.5 Dynamische Datenstrukturen', link: `${BASE}/themen/programmierung/dynamische-datenstrukturen` },
  next: { label: '5.1 Klassen & Objekte', link: `${BASE}/themen/oop/klassen-objekte` },
};

const TABS = [
  { key: 'clean',      label: '🧹 Clean Code Prinzipien' },
  { key: 'patterns',   label: '🎨 Design Patterns' },
  { key: 'beispiele',  label: '💻 Beispiele' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class DesignPatternsPage {
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
            <span>4.6 · Design Patterns & Clean Code</span>
          </nav>
          <h1 class="lz-sub-title">Design Patterns & Clean Code</h1>
          <p class="lz-sub-subtitle">Wiederverwendbare Lösungsskizzen, SOLID, Benennung, Code‑Smells</p>
          ${renderTags(['Design Pattern', 'Clean Code', 'SOLID', 'Singleton', 'Factory', 'Observer', 'BPE 4'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="designPatternsTabs" aria-label="Design Patterns">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelClean()}
          ${this._panelPatterns()}
          ${this._panelBeispiele()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelClean() {
    return `<div class="wim-category active" data-wim-cat="clean">
      ${renderInfobox({ icon: 'fas fa-broom', title: 'Clean Code – Lesbarer, wartbarer Code', type: 'info',
        body: `Clean Code ist <strong>leicht verständlich, einfach zu ändern und gut strukturiert</strong>.
               "Code wird öfter gelesen als geschrieben" (Robert C. Martin). Prinzipien helfen, Fehler zu vermeiden und Teamarbeit zu erleichtern.` })}
      <h3 class="lz-h3">Wichtige Clean‑Code‑Prinzipien</h3>
      ${renderTable({
        headers: ['Prinzip', 'Beschreibung', 'Schlecht', 'Gut'],
        rows: [
          ['Aussagekräftige Namen', 'Variablen/Funktionen sagen, was sie tun', '<code>int d;</code>', '<code>int tageSeitLetztemBackup;</code>'],
          ['Keine Magischen Zahlen', 'Verwende benannte Konstanten', '<code>if (x > 365)</code>', '<code>if (x > TAGE_IM_JAHR)</code>'],
          ['Kurze Funktionen', 'Eine Funktion – eine Aufgabe', '<code>void process() { 100 Zeilen }</code>', '<code>validate(), compute(), save()</code>'],
          ['Keine Duplikation (DRY)', 'Don’t Repeat Yourself', 'Gleicher Code an 3 Stellen', 'Auslagern in Funktion/Makro'],
          ['Kommentare sparsam', 'Code erklärt sich selbst', '<code>// i um 1 erhöhen i++;</code>', 'Nur "warum", nicht "was"'],
          ['Einheitliche Formatierung', 'Klammern, Einrückung, Leerzeichen', 'Gemischte Stile', 'Linter / Auto‑Formatter (clang-format)'],
        ],
      })}
      <h4 class="lz-h4">Code‑Smells – Warnsignale für schlechten Code</h4>
      ${renderMerkboxGrid([
        { icon: 'fas fa-copy', title: 'Duplicated Code', text: 'Gleicher Code an mehreren Stellen – schwer zu warten.' },
        { icon: 'fas fa-puzzle-piece', title: 'Long Method', text: 'Sehr lange Methode – schwer zu verstehen und testen.' },
        { icon: 'fas fa-boxes', title: 'Large Class', text: 'Klasse macht zu viel – Single Responsibility verletzt.' },
        { icon: 'fas fa-code-branch', title: 'Switch Statements', text: 'Oft ein Zeichen für fehlende Polymorphie.' },
        { icon: 'fas fa-comment', title: 'Comments', text: 'Zu viele oder veraltete Kommentare – Code ist unklar.' },
        { icon: 'fas fa-chart-line', title: 'Speculative Generality', text: 'Code für "vielleicht später" – unnötig komplex.' },
      ])}
    </div>`;
  }

  _panelPatterns() {
    return `<div class="wim-category hidden" data-wim-cat="patterns">
      <h3 class="lz-h3">Design Patterns – Bewährte Lösungsschablonen</h3>
      ${renderInfobox({ icon: 'fas fa-cubes', title: 'Definition (nach Gamma et al. "GoF")', type: 'info',
        body: `Design Patterns sind <strong>bewährte, wiederverwendbare Lösungen</strong> für häufig auftretende
               Entwurfsprobleme in der objektorientierten Programmierung. Sie beschreiben
               Strukturen von Klassen und deren Zusammenspiel.` })}
      <h4 class="lz-h4">Singleton (Erzeugungsmuster)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;">
<span style="color:#60a5fa;">class</span> Logger {
    <span style="color:#60a5fa;">static</span> Logger* instance;
    Logger() {}  <span style="color:#94a3b8;">// privater Konstruktor</span>
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">static</span> Logger* getInstance() {
        <span style="color:#60a5fa;">if</span> (!instance) instance = <span style="color:#60a5fa;">new</span> Logger();
        <span style="color:#60a5fa;">return</span> instance;
    }
    <span style="color:#60a5fa;">void</span> log(<span style="color:#60a5fa;">string</span> msg) { /* ... */ }
};
<span style="color:#94a3b8;">// Nutzung: Logger::getInstance()->log("Hello");</span>
</pre>
      <h4 class="lz-h4">Factory Method (Erzeugungsmuster)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;">
<span style="color:#60a5fa;">class</span> Product { <span style="color:#60a5fa;">public</span>: <span style="color:#60a5fa;">virtual void</span> use() = 0; };
<span style="color:#60a5fa;">class</span> ConcreteProductA : <span style="color:#60a5fa;">public</span> Product { <span style="color:#60a5fa;">void</span> use() override { cout << "A"; } };
<span style="color:#60a5fa;">class</span> Creator {
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">virtual</span> Product* factoryMethod() = 0;
};
<span style="color:#60a5fa;">class</span> CreatorA : <span style="color:#60a5fa;">public</span> Creator {
    Product* factoryMethod() override { <span style="color:#60a5fa;">return new</span> ConcreteProductA(); }
};
</pre>
      <h4 class="lz-h4">Observer (Verhaltensmuster)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;">
<span style="color:#94a3b8;">// Subject (beobachtet) – Observer (benachrichtigt)</span>
<span style="color:#60a5fa;">class</span> Subject {
    <span style="color:#60a5fa;">vector&lt;Observer*&gt;</span> observers;
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">void</span> attach(Observer* o) { observers.push_back(o); }
    <span style="color:#60a5fa;">void</span> notify() { <span style="color:#60a5fa;">for</span> (auto o : observers) o->update(); }
};
<span style="color:#94a3b8;">// Anwendung: GUI‑Events, MQTT (Pub/Sub ähnlich)</span>
</pre>
      ${renderTable({
        headers: ['Kategorie', 'Pattern', 'Zweck'],
        rows: [
          ['Erzeugung', 'Singleton', 'Stellt sicher, dass nur eine Instanz einer Klasse existiert'],
          ['Erzeugung', 'Factory Method', 'Definiert eine Schnittstelle zur Objekterzeugung, Unterklassen entscheiden welche Klasse'],
          ['Erzeugung', 'Abstract Factory', 'Erzeugt Familien zusammenhängender Objekte'],
          ['Struktur', 'Adapter', 'Wandelt eine Schnittstelle in eine andere um'],
          ['Struktur', 'Decorator', 'Fügt einem Objekt dynamisch neue Verantwortlichkeiten hinzu'],
          ['Verhalten', 'Observer', 'Benachrichtigt abhängige Objekte bei Zustandsänderungen'],
          ['Verhalten', 'Strategy', 'Kapselt austauschbare Algorithmen'],
          ['Verhalten', 'Command', 'Kapselt eine Anfrage als Objekt (undo/redo)'],
        ],
      })}
    </div>`;
  }

  _panelBeispiele() {
    return `<div class="wim-category hidden" data-wim-cat="beispiele">
      <h3 class="lz-h3">Anwendung von Clean Code & Patterns in der Praxis</h3>
      ${renderAccordion([
        {
          title: 'Beispiel: Vermeidung von Magic Numbers',
          content: `<strong>Schlecht:</strong>
<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
if (status == 1) { ... }
</pre>
<strong>Gut:</strong>
<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
enum Status { OK = 1, ERROR = 2, PENDING = 3 };
if (status == Status::OK) { ... }
</pre>`,
        },
        {
          title: 'Beispiel: Singleton für Logger',
          content: `Verhindert, dass mehrere Log‑Instanzen Dateien überschreiben.
          In Embedded‑Systemen oft als globale Variable realisiert, aber Singleton versteckt die globale Natur.
          <strong>Achtung:</strong> Singleton kann Tests erschweren (globale Zustände).`,
        },
        {
          title: 'Beispiel: Strategy für Sortieralgorithmen',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
class SortStrategy {
public:
    virtual void sort(vector<int>& data) = 0;
};
class BubbleSort : public SortStrategy { ... };
class QuickSort : public SortStrategy { ... };
class Sorter {
    SortStrategy* strategy;
public:
    void setStrategy(SortStrategy* s) { strategy = s; }
    void sort(vector<int>& data) { strategy->sort(data); }
};
</pre>`,
        },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Nenne drei Clean‑Code‑Prinzipien und erkläre sie kurz.',
          content: `• <strong>Aussagekräftige Namen:</strong> Variablen/Funktionen beschreiben ihren Zweck.<br>
          • <strong>Kurze Funktionen:</strong> Eine Funktion erledigt genau eine Aufgabe (Single Responsibility).<br>
          • <strong>DRY (Don't Repeat Yourself):</strong> Vermeide Code‑Duplikate – lagere gemeinsame Teile aus.`,
        },
        {
          title: 'A2: Welches Design Pattern würdest du für ein Undo/Redo‑System verwenden?',
          content: `<strong>Command Pattern</strong>. Jede Aktion wird als Command‑Objekt gekapselt mit <code>execute()</code> und <code>undo()</code>.
          Ein History‑Stack speichert ausgeführte Commands. Undo = pop + undo(), Redo = push + execute() wieder.`,
        },
        {
          title: 'A3: Warum ist Singleton oft kritisch?',
          content: `Singletons führen zu <strong>globalem Zustand</strong>, was Unit‑Tests erschwert (weil die Instanz geteilt wird).
          Sie verstecken Abhängigkeiten und können zu Kopplung führen. Besser: Dependency Injection.`,
        },
        {
          title: 'A4: Erkenne den Code‑Smell: <code>void doEverything() { // 500 Zeilen }</code>',
          content: `<strong>Long Method</strong> – zu viele Aufgaben in einer Funktion. Aufteilen in kleinere, benannte Funktionen.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Design Patterns & Clean Code für die Prüfung', type: 'success',
        body: `• Clean Code: Aussagekräftige Namen, kurze Funktionen, DRY, keine magischen Zahlen.<br>
               • Wichtige Patterns: Singleton (eine Instanz), Factory (Objekterzeugung), Observer (Ereignisbenachrichtigung).<br>
               • Code‑Smells: Duplicated Code, Long Method, Large Class – Anzeichen für schlechten Entwurf.` })}
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