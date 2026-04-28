// pages/projekte/lernzettel/faecher/informatik/themen/programmierung/dynamische-datenstrukturen.js
// Informatik 4.5 — Dynamische Datenstrukturen, Hashing & Graphen

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
  prev: { label: '4.4 Datenstrukturen', link: `${BASE}/themen/programmierung/datenstrukturen` },
  next: { label: '4.6 Design Patterns & Clean Code', link: `${BASE}/themen/programmierung/design-patterns` },
};

const TABS = [
  { key: 'dynamisch',  label: '🔗 Dynamische Datenstrukturen' },
  { key: 'hashtabelle',label: '🗄 Hashing & Hashtabellen' },
  { key: 'graph',      label: '🕸 Graphen' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class DynDatenstrukturenPage {
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
            <span>4.5 · Dynamische Datenstrukturen, Hashing & Graphen</span>
          </nav>
          <h1 class="lz-sub-title">Dynamische Datenstrukturen, Hashing & Graphen</h1>
          <p class="lz-sub-subtitle">Heap‑Speicher, verkettete Listen, Hashtabellen, Graphen (Adjazenzmatrix/-liste)</p>
          ${renderTags(['Dynamische Datenstruktur', 'Heap', 'Hashtabelle', 'Graph', 'BFS', 'DFS', 'BPE 4'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="dynDatenTabs" aria-label="Dynamische Datenstrukturen">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelDynamisch()}
          ${this._panelHashtabelle()}
          ${this._panelGraph()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelDynamisch() {
    return `<div class="wim-category active" data-wim-cat="dynamisch">
      ${renderInfobox({ icon: 'fas fa-memory', title: 'Dynamischer Speicher (Heap)', type: 'info',
        body: `Im Gegensatz zum Stack (automatische Variablen) wird der <strong>Heap</strong> manuell verwaltet.
               In C/C++ mit <code>new</code>/<code>delete</code> oder <code>malloc</code>/<code>free</code>.
               Ermöglicht Datenstrukturen mit unbekannter Größe zur Compile‑Zeit.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Dynamisches Array (Größe zur Laufzeit)</span>
<span style="color:#60a5fa;">int</span> n;
cin >> n;
<span style="color:#60a5fa;">int</span>* arr = <span style="color:#60a5fa;">new int</span>[n];
<span style="color:#60a5fa;">delete[]</span> arr;

<span style="color:#94a3b8;">// Verkettete Liste (jeder Knoten einzeln allokiert)</span>
<span style="color:#60a5fa;">struct</span> Node {
    <span style="color:#60a5fa;">int</span> data;
    Node* next;
    Node(<span style="color:#60a5fa;">int</span> val) : data(val), next(nullptr) {}
};

Node* head = <span style="color:#60a5fa;">new</span> Node(10);
head->next = <span style="color:#60a5fa;">new</span> Node(20);
head->next->next = <span style="color:#60a5fa;">new</span> Node(30);

<span style="color:#94a3b8;">// Speicher freigeben (wichtig!)</span>
<span style="color:#60a5fa;">while</span> (head) {
    Node* temp = head;
    head = head->next;
    <span style="color:#60a5fa;">delete</span> temp;
}</pre>
      ${renderInfobox({ icon: 'fas fa-exclamation-triangle', title: 'Speicherlecks (Memory Leaks)', type: 'warning',
        body: `Vergisst man <code>delete</code> (C++) oder <code>free</code> (C), bleibt der Speicher blockiert.
               Bei längerer Laufzeit führt das zu Speichermangel und Programmabsturz.
               <strong>Lösung:</strong> Smart Pointer in C++ (<code>std::unique_ptr</code>, <code>std::shared_ptr</code>)
               oder konsequentes manuelles Freigeben.` })}
    </div>`;
  }

  _panelHashtabelle() {
    return `<div class="wim-category hidden" data-wim-cat="hashtabelle">
      <h3 class="lz-h3">Hashtabelle (Hashmap) – schneller Schlüssel‑Wert‑Zugriff</h3>
      ${renderInfobox({ icon: 'fas fa-key', title: 'Prinzip', type: 'info',
        body: `Eine Hashtabelle speichert Paare (Schlüssel → Wert). Eine <strong>Hashfunktion</strong>
               berechnet aus dem Schlüssel einen Index im Array. Ideal: O(1) für Einfügen, Suchen, Löschen.
               <strong>Kollisionen</strong> (zwei Schlüssel ergeben gleichen Index) werden z.B. durch Verkettung (Chaining) gelöst.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Einfache Hashfunktion für Strings (summiert ASCII‑Werte)</span>
<span style="color:#60a5fa;">unsigned int</span> hash(<span style="color:#60a5fa;">string</span> key, <span style="color:#60a5fa;">int</span> tableSize) {
    <span style="color:#60a5fa;">unsigned int</span> sum = 0;
    <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">char</span> c : key) sum += c;
    <span style="color:#60a5fa;">return</span> sum % tableSize;
}

<span style="color:#94a3b8;">// C++ std::unordered_map (Hashtabelle)</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;unordered_map&gt;</span>
<span style="color:#60a5fa;">unordered_map&lt;string, int&gt;</span> phonebook;
phonebook[<span style="color:#fbbf24;">"Alice"</span>] = 123456;
phonebook[<span style="color:#fbbf24;">"Bob"</span>] = 789012;
cout << phonebook[<span style="color:#fbbf24;">"Alice"</span>];  <span style="color:#94a3b8;">// O(1) erwartet</span>
</pre>
      ${renderTable({
        headers: ['Kollisionsbehandlung', 'Beschreibung', 'Vor‑/Nachteile'],
        rows: [
          ['Verkettung (Chaining)', 'Jeder Bucket enthält eine Liste aller kollidierenden Elemente', 'Einfach, funktioniert gut bei vielen Kollisionen; extra Speicher für Listen'],
          ['Offene Adressierung (linear, quadratisch, double hashing)', 'Kollision → nächsten freien Slot suchen', 'Keine extra Listen; Gefahr von Clustering, Löschen kompliziert'],
        ],
      })}
    </div>`;
  }

  _panelGraph() {
    return `<div class="wim-category hidden" data-wim-cat="graph">
      <h3 class="lz-h3">Graphen – Knoten und Kanten</h3>
      ${renderInfobox({ icon: 'fas fa-share-alt', title: 'Graphenmodelle', type: 'info',
        body: `Ein Graph besteht aus <strong>Knoten (Vertices)</strong> und <strong>Kanten (Edges)</strong>.
               <strong>Gerichteter Graph:</strong> Kanten haben eine Richtung (z.B. Webseiten‑Links).
               <strong>Ungerichteter Graph:</strong> Kanten sind bidirektional (z.B. Straßennetz).
               <strong>Gewichteter Graph:</strong> Kanten haben Kosten (z.B. Entfernungen).` })}
      <h4 class="lz-h4">Darstellungsformen</h4>
      ${renderCompare({
        titleA: '📊 Adjazenzmatrix',
        titleB: '📋 Adjazenzliste',
        listA: [
          'n × n Matrix (n = Anzahl Knoten)',
          'Eintrag M[i][j] = 1 (oder Gewicht) wenn Kante existiert',
          'Speicher O(n²)',
          'Schneller Kantentest O(1)',
          'Ineffizient bei dünnen Graphen (wenig Kanten)',
        ],
        listB: [
          'Array / Liste für jeden Knoten',
          'Enthält Nachbarn des Knotens',
          'Speicher O(n + m) (m = Kanten)',
          'Kantentest O(Grad)',
          'Effizient für dünne Graphen',
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Adjazenzliste für ungerichteten Graphen (C++)</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;vector&gt;</span>
<span style="color:#60a5fa;">int</span> n = 5;   <span style="color:#94a3b8;">// Knoten 0..4</span>
<span style="color:#60a5fa;">vector&lt;vector&lt;int&gt;&gt;</span> adj(n);
adj[0].push_back(1);
adj[0].push_back(2);
adj[1].push_back(3);
adj[2].push_back(4);
<span style="color:#94a3b8;">// Ungerichtet: auch adj[1].push_back(0) etc.</span>

<span style="color:#94a3b8;">// Tiefensuche (DFS) rekursiv</span>
<span style="color:#60a5fa;">void</span> dfs(<span style="color:#60a5fa;">int</span> u, <span style="color:#60a5fa;">vector&lt;bool&gt;&</span> visited) {
    visited[u] = true;
    cout << u << " ";
    <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> v : adj[u]) {
        <span style="color:#60a5fa;">if</span> (!visited[v]) dfs(v, visited);
    }
}

<span style="color:#94a3b8;">// Breitensuche (BFS) mit Queue</span>
<span style="color:#60a5fa;">void</span> bfs(<span style="color:#60a5fa;">int</span> start) {
    <span style="color:#60a5fa;">vector&lt;bool&gt;</span> visited(n, false);
    <span style="color:#60a5fa;">queue&lt;int&gt;</span> q;
    visited[start] = true;
    q.push(start);
    <span style="color:#60a5fa;">while</span> (!q.empty()) {
        <span style="color:#60a5fa;">int</span> u = q.front(); q.pop();
        cout << u << " ";
        <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> v : adj[u]) {
            <span style="color:#60a5fa;">if</span> (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Was ist eine gute Hashfunktion? Gib ein Beispiel.',
          content: `Eine gute Hashfunktion ist <strong>schnell, gleichmäßig verteilend</strong> und minimal kollisionsanfällig.
          Beispiel für Ganzzahlen: <code>hash = key % tableSize</code> (wenn tableSize eine Primzahl ist).
          Für Strings: polynomialer Hash: <code>hash = (hash * 31 + c) % tableSize</code>.`,
        },
        {
          title: 'A2: Wann verwendet man eine Adjazenzmatrix, wann eine Adjazenzliste?',
          content: `<strong>Adjazenzmatrix:</strong> Dichte Graphen (viele Kanten, n² ≈ m), schnelle Kantenabfragen.<br>
          <strong>Adjazenzliste:</strong> Dünne Graphen (m << n²), speichereffizient, schnelle Iteration über Nachbarn.`,
        },
        {
          title: 'A3: Erkläre den Unterschied zwischen BFS und DFS.',
          content: `BFS (Breitensuche) verwendet eine Queue und untersucht zuerst alle Knoten einer Ebene.
          Findet kürzesten Pfad in ungewichteten Graphen. DFS (Tiefensuche) verwendet einen Stack
          (oder Rekursion) und geht so tief wie möglich. Benötigt weniger Speicher, findet keinen kürzesten Pfad.`,
        },
        {
          title: 'A4: Was ist ein Speicherleck? Wie kann man es in C++ vermeiden?',
          content: `Ein Speicherleck tritt auf, wenn dynamisch allokierter Speicher nicht freigegeben wird (<code>delete</code> fehlt).
          Vermeidung: <code>std::unique_ptr</code> und <code>std::shared_ptr</code> (RAII) nutzen, oder
          konsequent <code>delete</code> nach <code>new</code>. Bei verketteten Listen die gesamte Liste löschen.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Fortgeschrittene Datenstrukturen für die Prüfung', type: 'success',
        body: `• Hashtabelle: O(1) average, aber Kollisionen möglich. Hashfunktion entscheidend.<br>
               • Graphen: Adjazenzmatrix (dicht) vs. Adjazenzliste (dünn).<br>
               • BFS (Queue) → kürzester Pfad. DFS (Stack/Rekursion) → topologische Sortierung, Zyklen.<br>
               • Dynamischer Speicher: new/delete – immer paired!` })}
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