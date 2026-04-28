// pages/projekte/lernzettel/faecher/informatik/themen/programmierung/datenstrukturen.js
// Informatik 4.4 — Datenstrukturen: Listen, Stapel, Bäume

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
  prev: { label: '4.3 Struktogramme & Pseudocode', link: `${BASE}/themen/programmierung/struktogramme` },
  next: { label: '4.5 Dynamische Datenstrukturen', link: `${BASE}/themen/programmierung/dynamische-datenstrukturen` },
};

const TABS = [
  { key: 'ueberblick',   label: '📚 Überblick' },
  { key: 'array_liste',  label: '📋 Array & Liste' },
  { key: 'stack',        label: '🥞 Stapel (Stack)' },
  { key: 'queue',        label: '🚶 Warteschlange (Queue)' },
  { key: 'baum',         label: '🌳 Bäume' },
  { key: 'uebungen',     label: '✏ Übungen' },
];

export default class DatenstrukturenPage {
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
            <span>4.4 · Datenstrukturen</span>
          </nav>
          <h1 class="lz-sub-title">Datenstrukturen: Listen, Stapel, Bäume</h1>
          <p class="lz-sub-subtitle">Abstrakte Datentypen (ADT), Stack, Queue, Binärbaum, Durchläufe</p>
          ${renderTags(['Datenstruktur', 'Stack', 'Queue', 'Liste', 'Binärbaum', 'ADT', 'BPE 4'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="datenstrukturenTabs" aria-label="Datenstrukturen">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelUeberblick()}
          ${this._panelArrayListe()}
          ${this._panelStack()}
          ${this._panelQueue()}
          ${this._panelBaum()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelUeberblick() {
    return `<div class="wim-category active" data-wim-cat="ueberblick">
      ${renderInfobox({ icon: 'fas fa-database', title: 'Was ist eine Datenstruktur?', type: 'info',
        body: `Eine <strong>Datenstruktur</strong> ist eine organisierte Art, Daten zu speichern und zu verwalten.
               Der <strong>Abstrakte Datentyp (ADT)</strong> definiert, welche Operationen möglich sind,
               ohne die konkrete Implementierung vorzugeben. Beispiele: Liste, Stapel, Warteschlange, Baum.` })}
      <h3 class="lz-h3">Übersicht wichtiger Datenstrukturen</h3>
      ${renderTable({
        headers: ['Datenstruktur', 'Zugriff', 'Einfügen', 'Löschen', 'Anwendung'],
        rows: [
          ['Array (statisch)', 'O(1) (über Index)', 'Am Ende O(1), sonst O(n)', 'O(n)', 'Feste Größe, schneller Zugriff'],
          ['Verkettete Liste', 'O(n)', 'Anfang/Ende O(1)', 'Anfang/Ende O(1)', 'Dynamische Größe, häufiges Einfügen/Löschen'],
          ['Stack (LIFO)', 'nur top: O(1)', 'push O(1)', 'pop O(1)', 'Funktionsaufrufe, Undo/Redo, Klammerprüfung'],
          ['Queue (FIFO)', 'nur front: O(1)', 'enqueue O(1)', 'dequeue O(1)', 'Druckerwarteschlange, Breadth‑First‑Search'],
          ['Binärbaum', 'O(log n) (balanciert)', 'O(log n)', 'O(log n)', 'Sortierte Daten, Suchbäume'],
          ['Heap (Prioritätswarteschlange)', 'Min/Max O(1)', 'O(log n)', 'O(log n)', 'Scheduling, Dijkstra‑Algorithmus'],
        ],
      })}
    </div>`;
  }

  _panelArrayListe() {
    return `<div class="wim-category hidden" data-wim-cat="array_liste">
      <h3 class="lz-h3">Array vs. verkettete Liste</h3>
      ${renderCompare({
        titleA: '📊 Array (statisch / std::vector)',
        titleB: '🔗 Einfach verkettete Liste',
        listA: [
          'Kontinuierlicher Speicherblock',
          'Direkter Zugriff über Index O(1)',
          'Einfügen/Löschen in Mitte O(n)',
          'Cache‑effizient',
          'Speicher am Stück allokiert',
          'Größe begrenzt (dynamisch bei vector)',
        ],
        listB: [
          'Verstreute Speicherblöcke (Knoten)',
          'Kein Direktzugriff (muss durchlaufen werden) O(n)',
          'Einfügen/Löschen am Kopf O(1)',
          'Schlechtere Cache‑Lokalität',
          'Speicher pro Knoten + Zeiger (Overhead)',
          'Größe dynamisch, kein Speicherverschwendung',
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Einfach verkettete Liste in C++ (Node‑Struktur)</span>
<span style="color:#60a5fa;">struct</span> Node {
    <span style="color:#60a5fa;">int</span> data;
    Node* next;
};

<span style="color:#94a3b8;">// Einfügen am Anfang</span>
<span style="color:#60a5fa;">void</span> pushFront(Node** head, <span style="color:#60a5fa;">int</span> value) {
    Node* newNode = <span style="color:#60a5fa;">new</span> Node{value, *head};
    *head = newNode;
}

<span style="color:#94a3b8;">// Traversieren</span>
<span style="color:#60a5fa;">void</span> printList(Node* head) {
    <span style="color:#60a5fa;">while</span> (head != nullptr) {
        cout << head->data << " ";
        head = head->next;
    }
}</pre>
    </div>`;
  }

  _panelStack() {
    return `<div class="wim-category hidden" data-wim-cat="stack">
      <h3 class="lz-h3">Stack (Stapel) – LIFO (Last In, First Out)</h3>
      ${renderInfobox({ icon: 'fas fa-layer-group', title: 'Operationen eines Stapels', type: 'info',
        body: `<strong>push(item):</strong> Legt ein Element oben auf den Stapel.<br>
               <strong>pop():</strong> Entfernt das oberste Element und gibt es zurück.<br>
               <strong>top() / peek():</strong> Liefert das oberste Element ohne Entfernen.<br>
               <strong>isEmpty():</strong> Prüft, ob der Stapel leer ist.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Stack mit std::stack (C++)</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;stack&gt;</span>
<span style="color:#60a5fa;">stack&lt;int&gt;</span> s;
s.push(10);
s.push(20);
s.push(30);
<span style="color:#60a5fa;">int</span> top = s.top();   <span style="color:#94a3b8;">// 30</span>
s.pop();              <span style="color:#94a3b8;">// entfernt 30</span>
<span style="color:#60a5fa;">bool</span> leer = s.empty(); <span style="color:#94a3b8;">// false</span>

<span style="color:#94a3b8;">// Anwendung: Klammerprüfung</span>
<span style="color:#60a5fa;">bool</span> checkParentheses(<span style="color:#60a5fa;">string</span> expr) {
    <span style="color:#60a5fa;">stack&lt;char&gt;</span> st;
    <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">char</span> c : expr) {
        <span style="color:#60a5fa;">if</span> (c == '(' || c == '[' || c == '{') st.push(c);
        <span style="color:#60a5fa;">else if</span> (c == ')') { <span style="color:#60a5fa;">if</span> (st.empty() || st.top() != '(') <span style="color:#60a5fa;">return false</span>; st.pop(); }
        <span style="color:#60a5fa;">else if</span> (c == ']') { <span style="color:#60a5fa;">if</span> (st.empty() || st.top() != '[') <span style="color:#60a5fa;">return false</span>; st.pop(); }
        <span style="color:#60a5fa;">else if</span> (c == '}') { <span style="color:#60a5fa;">if</span> (st.empty() || st.top() != '{') <span style="color:#60a5fa;">return false</span>; st.pop(); }
    }
    <span style="color:#60a5fa;">return</span> st.empty();
}</pre>
    </div>`;
  }

  _panelQueue() {
    return `<div class="wim-category hidden" data-wim-cat="queue">
      <h3 class="lz-h3">Queue (Warteschlange) – FIFO (First In, First Out)</h3>
      ${renderInfobox({ icon: 'fas fa-users', title: 'Operationen einer Queue', type: 'info',
        body: `<strong>enqueue(item):</strong> Fügt ein Element am Ende ein.<br>
               <strong>dequeue():</strong> Entfernt das vorderste Element und gibt es zurück.<br>
               <strong>front():</strong> Liefert das vorderste Element ohne Entfernen.<br>
               <strong>isEmpty():</strong> Prüft, ob die Queue leer ist.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Queue mit std::queue (C++)</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;queue&gt;</span>
<span style="color:#60a5fa;">queue&lt;int&gt;</span> q;
q.push(10);
q.push(20);
q.push(30);
<span style="color:#60a5fa;">int</span> front = q.front();   <span style="color:#94a3b8;">// 10</span>
q.pop();                  <span style="color:#94a3b8;">// entfernt 10</span>
<span style="color:#60a5fa;">int</span> size = q.size();     <span style="color:#94a3b8;">// 2</span>

<span style="color:#94a3b8;">// Anwendung: Round‑Robin‑Scheduling (Prozessverwaltung)</span>
<span style="color:#60a5fa;">void</span> roundRobin(<span style="color:#60a5fa;">queue&lt;Process&gt;</span>& q, <span style="color:#60a5fa;">int</span> quantum) {
    <span style="color:#60a5fa;">while</span> (!q.empty()) {
        Process p = q.front(); q.pop();
        p.run(quantum);
        <span style="color:#60a5fa;">if</span> (!p.isFinished()) q.push(p);
    }
}</pre>
    </div>`;
  }

  _panelBaum() {
    return `<div class="wim-category hidden" data-wim-cat="baum">
      <h3 class="lz-h3">Bäume – hierarchische Datenstrukturen</h3>
      ${renderInfobox({ icon: 'fas fa-tree', title: 'Binärbaum', type: 'info',
        body: `Ein <strong>Binärbaum</strong> besteht aus Knoten, die jeweils maximal zwei Kinder haben (links/rechts).
               <strong>Wurzel (root)</strong> – oberster Knoten, <strong>Blätter (leaves)</strong> – Knoten ohne Kinder.
               <strong>Binärer Suchbaum (BST):</strong> Linker Teilbaum ≤ Knoten ≤ rechter Teilbaum.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Knotenstruktur eines Binärbaums</span>
<span style="color:#60a5fa;">struct</span> TreeNode {
    <span style="color:#60a5fa;">int</span> data;
    TreeNode* left;
    TreeNode* right;
    TreeNode(<span style="color:#60a5fa;">int</span> val) : data(val), left(nullptr), right(nullptr) {}
};

<span style="color:#94a3b8;">// Traversierungsarten (am Beispiel eines Baums)</span>
<span style="color:#60a5fa;">void</span> inorder(TreeNode* root) {   <span style="color:#94a3b8;">// links → Wurzel → rechts (sortierte Reihenfolge)</span>
    <span style="color:#60a5fa;">if</span> (!root) <span style="color:#60a5fa;">return</span>;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

<span style="color:#60a5fa;">void</span> preorder(TreeNode* root) {  <span style="color:#94a3b8;">// Wurzel → links → rechts (z.B. zum Kopieren)</span>
    <span style="color:#60a5fa;">if</span> (!root) <span style="color:#60a5fa;">return</span>;
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}

<span style="color:#60a5fa;">void</span> postorder(TreeNode* root) { <span style="color:#94a3b8;">// links → rechts → Wurzel (z.B. zum Löschen)</span>
    <span style="color:#60a5fa;">if</span> (!root) <span style="color:#60a5fa;">return</span>;
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}</pre>
      ${renderTable({
        headers: ['Traversierung', 'Reihenfolge', 'Anwendung'],
        rows: [
          ['Inorder', 'Links → Wurzel → Rechts', 'Gibt sortierte Reihenfolge bei BST aus'],
          ['Preorder', 'Wurzel → Links → Rechts', 'Kopieren des Baums, Prefix‑Auswertung'],
          ['Postorder', 'Links → Rechts → Wurzel', 'Löschen des Baums, Postfix‑Auswertung'],
          ['Level‑Order (BFS)', 'Ebene für Ebene (von oben nach unten)', 'Kürzesten Pfad finden, Breitensuche'],
        ],
      })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Wann verwendet man einen Stack, wann eine Queue? Gib je ein Beispiel.',
          content: `<strong>Stack (LIFO):</strong> Rückgängig‑Funktion (Undo), Klammerprüfung, rekursive Aufrufe.<br>
          <strong>Queue (FIFO):</strong> Druckaufträge, Prozess‑Scheduling, Breitensuche in Graphen.`,
        },
        {
          title: 'A2: Gegeben ist ein Stack mit push/pop. Was passiert bei folgender Sequenz? push(1), push(2), pop(), push(3), pop(), pop()',
          content: `1. push(1) → Stack: [1]<br>
          2. push(2) → [1,2]<br>
          3. pop() → entfernt 2 → [1]<br>
          4. push(3) → [1,3]<br>
          5. pop() → entfernt 3 → [1]<br>
          6. pop() → entfernt 1 → []<br>
          Ergebnis: Die Ausgaben (pop) wären: 2, 3, 1.`,
        },
        {
          title: 'A3: Durchlaufe den Binärbaum (Wurzel 5, links 3, rechts 8; 3 hat links 1, rechts 4; 8 hat links 7, rechts 9) in Inorder‑Reihenfolge.',
          content: `Inorder: 1 → 3 → 4 → 5 → 7 → 8 → 9`,
        },
        {
          title: 'A4: Was ist der Unterschied zwischen einer einfach und doppelt verketteten Liste?',
          content: `Einfach verkettet: Jeder Knoten hat einen <code>next</code>‑Zeiger. Rückwärtslaufen nicht möglich.<br>
          Doppelt verkettet: Jeder Knoten hat <code>next</code> und <code>prev</code> – kann in beide Richtungen traversiert werden, braucht aber mehr Speicher.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Datenstrukturen für die Prüfung', type: 'success',
        body: `• Stack (LIFO) – push/pop, Queue (FIFO) – enqueue/dequeue.<br>
               • Array: O(1) Zugriff, Liste: O(1) Einfügen am Kopf.<br>
               • Binärbaum: Inorder (sortiert), Preorder, Postorder, Level‑Order.<br>
               • ADT: Abstrakter Datentyp – was (Operationen), nicht wie (Implementierung).` })}
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